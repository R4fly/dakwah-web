import { NextRequest } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: NextRequest) {
  try {
    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Parse the request body
    const body = await req.json();
    const { package: pkg, amount, description } = body;

    // Get the package details for the prompt
    let packageName, packageAmount;
    switch(pkg) {
      case 'premium':
        packageName = 'Paket Premium';
        packageAmount = 'Rp. 106.900';
        break;
      case 'ultimate':
        packageName = 'Paket Ultimate';
        packageAmount = 'Rp. 159.900';
        break;
      case 'basic':
      default:
        packageName = 'Paket Basic';
        packageAmount = 'Rp. 77.900';
        break;
    }

    // Use the amount parameter if provided, otherwise use the package amount
    const finalAmount = amount || packageAmount;

    // Create the prompt for generating a QR code image
    const prompt = `Generate a clear, high-contrast QR code image with black squares on a white background. The QR code should contain the following payment information: "QRIS:DakwahWeb:${pkg}:${finalAmount.replace(/\./g, '')}:${Date.now()}". Make it clearly scannable with a smartphone camera. The QR code should have the standard corner markers and be centered in the image.`;

    // Generate an image using OpenAI's image generation API
    // Note: In a real application, you might want to use a specialized QR code service
    // since OpenAI may not generate actual scannable QR codes from text descriptions
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "256x256",
      response_format: "b64_json",
    });

    // Check if response data exists
    if (!response.data || response.data.length === 0 || !response.data[0].b64_json) {
      return new Response(JSON.stringify({
        error: 'Invalid response from OpenAI API',
        success: false
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Extract the base64 image data
    const base64Image = response.data[0].b64_json;
    const imageUrl = `data:image/png;base64,${base64Image}`;

    // Return the image data
    return new Response(JSON.stringify({
      imageUrl: imageUrl,
      success: true
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Error generating QRIS code:', error);

    // Return an error response
    return new Response(JSON.stringify({
      error: 'Failed to generate QRIS code',
      success: false
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
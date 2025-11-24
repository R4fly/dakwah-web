// src/lib/date-utils.ts

export function formatLocalDate(dateString: string): string {
  // Ensure consistent date formatting across server and client
  const date = new Date(dateString);
  
  // Format as DD/MM/YYYY to match Indonesian format
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}
// Types for CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Types for regular CSS files
declare module '*.css' {
  const content: any;
  export default content;
}

// Types for SCSS modules
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// Types for SCSS files
declare module '*.scss' {
  const content: any;
  export default content;
}

// Types for LESS modules
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

// Types for LESS files
declare module '*.less' {
  const content: any;
  export default content;
}

// Types for Stylus modules
declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

// Types for Stylus files
declare module '*.styl' {
  const content: any;
  export default content;
}
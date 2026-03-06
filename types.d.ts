// Ambient type declarations for local editing without installed node modules
// These are minimal shims to avoid TypeScript errors in this environment.

declare module 'next/link' {
  const Link: any
  export default Link
}

declare module 'next/dynamic' {
  const dynamic: any
  export default dynamic
}

declare module 'next/head' {
  const Head: any
  export default Head
}

declare module 'clsx' {
  const clsx: (...args: any[]) => string
  export default clsx
}

declare module 'react' {
  // Minimal React shim for environments without @types/react installed
  const React: any
  export = React
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export {}

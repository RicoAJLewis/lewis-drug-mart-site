'use client'

import React from 'react'

interface NextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export default function Link({ href, children, ...props }: NextLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

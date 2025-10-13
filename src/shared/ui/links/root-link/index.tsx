"use client"

import React from "react"
import { Link, LinkProps } from "@/app/localization"

export const RootLink: React.FC<LinkProps> = ({ href, locale, children, ...props }) => {
  return (
    <Link
      href={href}
      {...(locale ? { locale } : {})}
      {...props}
    >
      {children}
    </Link>
  )
}

export interface IRootLinkProps extends LinkProps {}

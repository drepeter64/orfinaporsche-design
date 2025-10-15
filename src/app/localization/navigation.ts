import React from "react"
import { createNavigation } from "next-intl/navigation"
import { routing } from "./routing"

const { Link, redirect, usePathname, useRouter } = createNavigation(routing)

type LinkProps = typeof Link extends React.FC<infer P> ? P : never

export { Link, redirect, usePathname, useRouter, type LinkProps }

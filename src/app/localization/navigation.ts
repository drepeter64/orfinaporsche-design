import React from "react"
import { createSharedPathnamesNavigation } from "next-intl/navigation"
import { localeConfig } from "./config"

const { locales, localePrefix } = localeConfig

const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
})

type LinkProps = typeof Link extends React.FC<infer P> ? P : never

export { Link, redirect, usePathname, useRouter, type LinkProps }

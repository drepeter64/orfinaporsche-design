"use client"

import { ThemeProvider } from "next-themes"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { LoadingProvider } from "@/contexts/LoadingContext"
import GlobalLoader from "@/components/GlobalLoader"
import ScrollToTop from "@/components/ScrollToTop"

interface ClientProvidersProps {
  children: React.ReactNode
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <LoadingProvider>
        <TooltipProvider>
          {/* Global UI Components */}
          <GlobalLoader />
          <ScrollToTop />
          <Toaster />
          <Sonner />
          {/* App Content */}
          {children}
        </TooltipProvider>
      </LoadingProvider>
    </ThemeProvider>
  )
}

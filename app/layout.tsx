import "./globals.css"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Suraj Khuntia | Portfolio",
  description: "Personal website of Suraj Khuntia, Computer Science Engineer",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Scope, sans-serif" }}>{children}</body>
    </html>
  )
}


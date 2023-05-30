"use client"
import React, { useState } from "react"
import "./globals.css"
import Script from "next/script"
import Header from "./components/Header"
import TopBar from "./components/TopBar"
import Footer from "./components/Footer"
import SideDrawer from "./components/SideDrawer"

export default function RootLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true)
  }
  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }
  return (
    <html lang="en">
      <Script src="https://unpkg.com/@phosphor-icons/web" />
      <body>
        <SideDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
        <TopBar />
        <Header setIsDrawerOpen={handleDrawerOpen} />
        {children}
        <Footer />
      </body>
    </html>
  )
}

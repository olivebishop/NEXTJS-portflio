"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { ModeToggle } from "./customToggle"

const Footer = () => {
    const { theme } = useTheme()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-background text-foreground py-4 px-6 flex justify-between items-center z-20 relative">
            <div>
                © {new Date().getFullYear()} Olive Bishop. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-4 w-4" />
                </Button>
                <ModeToggle />
            </div>
        </footer>
    )
}

export default Footer;

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigations = [
    {
        name: "Hire Developers",
        href: "/hire-developers",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
    {
        name: "Blog",
        href: "/blog",
    },
]

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            className={cn(
                "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200",
                scrolled ? "bg-white/90" : "bg-white/50",
            )}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        <Link href={"/"} className="relative overflow-hidden rounded-lg">
                            <motion.div
                                whileHover={{
                                    transition: { type: "spring", stiffness: 300, damping: 10 },
                                }}
                            >
                                <Image
                                    src="/laravel-icon.svg?height=48&width=48"
                                    alt="Laravel Icon"
                                    width={48}
                                    height={48}
                                    className="rounded-lg"
                                />
                            </motion.div>
                        </Link>
                        <div>
                            <motion.p
                                className="text-xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                WebProDev
                            </motion.p>
                            <motion.span
                                className="text-base font-medium text-gray-600 "
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Hire Developer
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-1">
                            {navigations.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="relative"
                                    onHoverStart={() => setActiveIndex(index)}
                                    onHoverEnd={() => setActiveIndex(null)}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.4 + index * 0.1,
                                        duration: 0.6,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className="relative px-4 py-2 rounded-md text-gray-700 font-medium text-sm flex items-center transition-colors duration-200 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </Link>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                                                initial={{
                                                    scaleX: 0,
                                                    opacity: 0,
                                                    y: 4,
                                                }}
                                                animate={{
                                                    scaleX: 1,
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    scaleX: 0,
                                                    opacity: 0,
                                                    transition: { duration: 0.2, ease: "easeInOut" },
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 120,
                                                    damping: 20,
                                                    mass: 1,
                                                }}
                                                style={{ originX: 0.5 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </motion.li>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Button className="ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300">
                                    START 7-DAYS TRIAL
                                </Button>
                            </motion.div>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative z-50 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                    >
                                        <X className="h-5 w-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                    >
                                        <Menu className="h-5 w-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-16"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.2, ease: "easeInOut" },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <motion.nav
                            className="h-full max-w-7xl mx-auto px-4 sm:px-6 py-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <ul className="space-y-1">
                                {navigations.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="overflow-hidden"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                delay: 0.1 + index * 0.05,
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 15,
                                            },
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-3 text-lg font-medium text-gray-800 border-l-2 border-transparent hover:border-indigo-500 hover:bg-gray-50 rounded-r-md transition-all duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}

                                <motion.div
                                    className="pt-4 mt-4 border-t border-gray-200"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { delay: 0.3 },
                                    }}
                                >
                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                                        Get Started
                                    </Button>
                                </motion.div>
                            </ul>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

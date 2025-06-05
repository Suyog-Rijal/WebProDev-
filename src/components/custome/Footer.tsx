"use client"

import { type SetStateAction, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const offices = [
    {
        location: "459 Columbus Ave #387, New York, NY 10024, United States",
    },
    {
        location: "23,3rd Floor, Block-D, DLF IT Park, Phase - I, Sector 13, Chandigarh, 160101, India",
    },
]

const pages = [
    {
        name: "Home",
        href: "/",
    },
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

const partners = [
    { name: "Google partner", href: "#" },
    { name: "designrush", href: "#" },
    { name: "paypal", href: "#" },
    { name: "verified", href: "#" },
    { name: "aws", href: "#" },
    { name: "partner", href: "#" },
    { name: "crowdreviews", href: "#" },
    { name: "seoblog", href: "#" },
    { name: "best search", href: "#" },
    { name: "top", href: "#" },
    { name: "top mobile app", href: "#" },
    { name: "top", href: "#" },
    { name: "top design", href: "#" },
    { name: "tech", href: "#" },
    { name: "top rated", href: "#" },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
}

export const Footer = () => {
    const [email, setEmail] = useState("")
    const [isHovered, setIsHovered] = useState(false)

    return (
        <footer className="w-full pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            We were founded in 2013
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our mission is to deliver exceptional value to our esteemed clients stretched across the length and
                            breadth of the digital world. Equipped with industry-leading technologies, we strive to help companies
                            realize their full potential with an exceptional range of value-driven web and mobile solutions.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <Link href={"/"} className="relative overflow-hidden rounded-lg">
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { type: "spring", stiffness: 300, damping: 10 },
                                    }}
                                >
                                    <Image
                                        src="/logo.png?height=60&width=60"
                                        alt="Logo"
                                        width={60}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </motion.div>
                            </Link>
                            <div>
                                <p className="text-lg font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Hire Laravel
                                </p>
                                <span className="text-sm font-medium text-gray-600">Developer</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Office
                        </h3>
                        <ul className="space-y-4">
                            {offices.map((office, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>{office.location}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Pages
                        </h3>
                        <ul className="grid grid-cols-1 gap-2">
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <Link
                                        href={page.href}
                                        className="text-gray-600 hover:text-blue-600 text-sm flex items-center group transition-colors duration-200"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Subscribe To Newsletter
                            </h3>
                            <div className="relative">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="pr-12 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-200"
                                    value={email}
                                    onChange={(e: { target: { value: SetStateAction<string> } }) => setEmail(e.target.value)}
                                />
                                <Button
                                    className="absolute right-0 top-0 bottom-0 rounded-l-none bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                                    size="icon"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <motion.div
                                        animate={isHovered ? { x: 3 } : { x: 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </motion.div>
                                </Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Support
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-gray-600 text-sm">
                                    <Phone className="h-4 w-4 text-blue-600" />
                                    <span>+1 315 215 2005, +91 0172-4666470</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-600 text-sm">
                                    <Mail className="h-4 w-4 text-blue-600" />
                                    <span>info@hirereactjsdeveloper.com</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="py-8 border-t border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                        {partners.map((partner, index) => (
                            <Link
                                key={index}
                                href={partner.href}
                                className="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200"
                            >
                                {partner.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="text-center text-xs text-gray-500 pt-6 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Copyright © {new Date().getFullYear()} Hire ReactJS Developer All Rights Reserved.
                    <Link href="/privacy" className="hover:text-blue-600 transition-colors duration-200 ml-1">
                        Privacy Policy
                    </Link>{" "}
                    |
                    <Link href="/sitemap" className="hover:text-blue-600 transition-colors duration-200 ml-1">
                        Sitemap
                    </Link>
                </motion.div>
            </div>
        </footer>
    )
}

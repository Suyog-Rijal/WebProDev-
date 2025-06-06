"use client"

import { motion } from "framer-motion"
import { Check, Users, Brain, BarChart, Code, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const reasons = [
    {
        icon: Users,
        text: "Dedicated project managers",
    },
    {
        icon: Brain,
        text: "Our Laravel developers integrate AI in the web applications for easier functioning",
    },
    {
        icon: BarChart,
        text: "More than 300+ successfully running web applications",
    },
    {
        icon: Code,
        text: "Team of 30+ dedicated Laravel developers",
    },
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

export const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <motion.div
                    className="text-center space-y-3 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        What Makes Us the Best Laravel Development Company?
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.p className="text-base text-gray-600 leading-relaxed" variants={itemVariants}>
                            With over 10 years of experience in Laravel and PHP development in India, our team has helped various
                            industries in finding accurate solutions for their needs. Our Laravel developers have helped us create an
                            expert portfolio for our vast range of clients. Here is how we are leading in the industry:
                        </motion.p>

                        <motion.div className="space-y-4 mt-6" variants={containerVariants}>
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-3"
                                    variants={itemVariants}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                                        <Check className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <p className="text-gray-700">{reason.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="pt-4">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <Link href={"/lets-talk"} className="flex items-center justify-center w-full">
                                    Get A Custom Quote
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div className="relative h-full flex justify-center items-center" variants={itemVariants}>
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                            <Image
                                fill
                                src="/why-choose-us-banner.jpg?height=400&width=600"
                                alt="Laravel development team collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-4/5 h-4/5">
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

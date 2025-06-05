"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Home, Code, Coffee, Bug, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const floatingElements = [
    { icon: Code, delay: 0, duration: 3 },
    { icon: Coffee, delay: 0.5, duration: 4 },
    { icon: Bug, delay: 1, duration: 3.5 },
    { icon: Zap, delay: 1.5, duration: 2.8 },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
        },
    },
}

const floatingVariants = {
    animate: {
        y: [-10, 10, -10],
        rotate: [-5, 5, -5],
        transition: {
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
        },
    },
}

export default function NotFound() {
    return (
        <div className="h-[85vh] bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center relative overflow-hidden">
            {/* Floating Background Elements */}
            {floatingElements.map((element, index) => (
                <motion.div
                    key={index}
                    className="absolute opacity-10"
                    style={{
                        left: `${20 + index * 20}%`,
                        top: `${15 + index * 15}%`,
                    }}
                    variants={floatingVariants}
                    animate="animate"
                    transition={{
                        ...floatingVariants.animate.transition,
                        duration: element.duration,
                        delay: element.delay,
                    }}
                >
                    <element.icon className="h-12 w-12 text-blue-500" />
                </motion.div>
            ))}

            {/* Additional floating elements */}
            <motion.div
                className="absolute top-20 right-20 opacity-5"
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            >
                <div className="w-32 h-32 border-4 border-blue-300 rounded-full" />
            </motion.div>

            <motion.div
                className="absolute bottom-20 left-20 opacity-5"
                animate={{
                    rotate: [360, 0],
                    scale: [1, 0.9, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            >
                <div className="w-24 h-24 border-4 border-purple-300 rounded-lg" />
            </motion.div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
                    {/* 404 Number */}
                    <motion.div variants={numberVariants} className="relative">
                        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none">
                            404
                        </h1>

                        {/* Cute animated dots */}
                        <motion.div
                            className="absolute -top-4 -right-4"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full" />
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-2 -left-6"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        >
                            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
                        </motion.div>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Oops! Page Not Found
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Looks like this page took a coffee break! ☕ Don&#39;t worry, even the best Laravel developers encounter 404s
                            sometimes.
                        </p>
                    </motion.div>

                    {/* Cute Code Block */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-100 max-w-md mx-auto"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        <div className="text-left">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <span className="text-xs text-gray-500">error.php</span>
                            </div>
                            <code className="text-sm text-gray-700">
                                <span className="text-purple-600">if</span> (<span className="text-blue-600">$page</span> =={" "}
                                <span className="text-green-600">&#39;not_found&#39;</span>) {"{"}
                                <br />
                                &nbsp;&nbsp;<span className="text-purple-600">return</span>{" "}
                                <span className="text-green-600">&#39;Let\&#39;s go home! 🏠&#39;</span>;
                                <br />
                                {"}"}
                            </code>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                Back to Home
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                            Go Back
                        </Button>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}

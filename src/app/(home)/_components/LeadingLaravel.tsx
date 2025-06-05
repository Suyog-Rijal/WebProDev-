"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
    "Architectural Elegance & MVC Pattern",
    "Built-in Security & CSRF Protection",
    "Scalable Performance & Queue Management",
    "API-First Development Ready",
    "Cloud-Native & DevOps Integration",
    "Rich Ecosystem & Community Support",
]

const codeSnippet = `<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use App\\Models\\User;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $user = User::create([
            'email' => $request->validate(['email' => 'required|email|unique:users'])['email'],
            'password' => Hash::make($request->validate(['password' => 'required|min:8'])['password']),
        ]);

        return response()->json(['message' => 'User created', 'user' => $user], 201);
    }
}`

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

const codeVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.4,
        },
    },
}

export const LeadingLaravel = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.div
                            className="inline-flex items-center gap-2 p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-xs font-medium text-blue-700"
                            variants={itemVariants}
                        >
                            <Code className="h-4 w-4" />
                            Framework of Choice
                        </motion.div>

                        <motion.h2
                            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                            variants={itemVariants}
                        >
                            Why Laravel Still Leads the Pack?
                        </motion.h2>

                        <motion.p className="text-base text-gray-600 leading-relaxed" variants={itemVariants}>
                            Despite new frameworks emerging, Laravel continues to redefine what&#39;s possible in rapid application
                            development, scalability, and maintainability.
                        </motion.p>

                        <motion.ul className="space-y-3" variants={itemVariants}>
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-3 text-sm text-gray-700"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                                >
                                    <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div variants={itemVariants}>
                            <Button
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                                size="lg"
                            >
                                Explore Laravel Benefits
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Code Block */}
                    <motion.div className="relative" variants={codeVariants}>
                        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 backdrop-blur-sm border border-gray-700 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

                            <div className="flex items-center gap-2 mb-4 relative z-10">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-gray-400 text-xs ml-2">UserController.php</span>
                            </div>

                            <div className="relative z-10">
                <pre className="text-xs scrollbar-none text-gray-300 leading-relaxed overflow-x-auto">
                  <code className="language-php">{codeSnippet}</code>
                </pre>
                            </div>

                            <div className="absolute bottom-4 right-4 space-y-2 z-10">
                                <motion.div
                                    className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">99.9%</div>
                                        <div className="text-xs text-gray-300">Uptime</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-1">
                                            <Zap className="h-4 w-4 text-yellow-400" />
                                            <span className="text-lg font-bold text-white">50ms</span>
                                        </div>
                                        <div className="text-xs text-gray-300">Response Time</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-xl" />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

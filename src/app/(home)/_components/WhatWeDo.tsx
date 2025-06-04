"use client"

import { motion } from "framer-motion"
import { Code, Database, ShoppingCart, RefreshCw, Building, Shield, Zap, GitBranch } from "lucide-react"

const services = [
    {
        icon: Code,
        title: "Custom Laravel Apps",
        description: "Scalable web applications built to your exact specifications",
        color: "text-rose-600",
        bg: "bg-rose-100 group-hover:bg-rose-200",
    },
    {
        icon: Database,
        title: "API Development",
        description: "RESTful and GraphQL APIs with enterprise-grade security",
        color: "text-indigo-600",
        bg: "bg-indigo-100 group-hover:bg-indigo-200",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Solutions",
        description: "High-converting online stores with advanced features",
        color: "text-emerald-600",
        bg: "bg-emerald-100 group-hover:bg-emerald-200",
    },
    {
        icon: RefreshCw,
        title: "Legacy Migration",
        description: "Seamless migration from old PHP frameworks to Laravel",
        color: "text-yellow-600",
        bg: "bg-yellow-100 group-hover:bg-yellow-200",
    },
    {
        icon: Building,
        title: "SaaS Architecture",
        description: "Multi-tenant applications with isolated data layers",
        color: "text-orange-600",
        bg: "bg-orange-100 group-hover:bg-orange-200",
    },
    {
        icon: Shield,
        title: "Security Hardening",
        description: "Enterprise-grade security with compliance standards",
        color: "text-red-600",
        bg: "bg-red-100 group-hover:bg-red-200",
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Lightning-fast applications with advanced caching",
        color: "text-cyan-600",
        bg: "bg-cyan-100 group-hover:bg-cyan-200",
    },
    {
        icon: GitBranch,
        title: "DevOps Integration",
        description: "CI/CD pipelines and cloud-native deployments",
        color: "text-purple-600",
        bg: "bg-purple-100 group-hover:bg-purple-200",
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

export const WhatWeDo = () => {
    return (
        <section className="py-16 bg-gradient-to-tl from-gray-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <motion.div
                    className="text-center space-y-3 mb-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        What We Do as Your Laravel Development Company?
                    </motion.h2>
                    <motion.p className="text-base text-gray-600 max-w-3xl mx-auto" variants={itemVariants}>
                        Our hired Laravel developers specialize in crafting enterprise-grade solutions that ensure scalability,
                        security, and performance for your business needs.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            variants={itemVariants}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <div className="bg-white rounded-lg p-5 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 h-full">
                                <div className="mb-4">
                                    <div className={`inline-flex p-3 rounded-full transition-all duration-300 ${service.bg}`}>
                                        <service.icon className={`h-5 w-5 ${service.color}`} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </section>
    )
}

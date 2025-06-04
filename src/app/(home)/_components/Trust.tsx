"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Clock, CheckCircle } from "lucide-react"

const trustStats = [
    {
        value: "300%",
        title: "Average Performance Boost",
        description: "Clients see dramatic improvements",
        icon: TrendingUp,
        color: "text-green-600",
        bg: "bg-green-100 group-hover:bg-green-200",
    },
    {
        value: "60%",
        title: "Unmatched Cost Efficiency",
        description: "Significant cost savings guaranteed",
        icon: DollarSign,
        color: "text-amber-600",
        bg: "bg-amber-100 group-hover:bg-amber-200",
    },
    {
        value: "7 Days",
        title: "Rapid Onboarding",
        description: "From interview to coding",
        icon: Clock,
        color: "text-indigo-600",
        bg: "bg-indigo-100 group-hover:bg-indigo-200",
    },
    {
        value: "98%",
        title: "On-Time Delivery",
        description: "Industry-leading reliability",
        icon: CheckCircle,
        color: "text-blue-600",
        bg: "bg-blue-100 group-hover:bg-blue-200",
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

export const Trust = () => {
    return (
        <section className="py-16 bg-white">
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
                        Trusted by Industry Leaders
                    </motion.h2>
                    <motion.p className="text-base text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
                        Our track record speaks for itself. Here&#39;s what sets us apart from the competition.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {trustStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            variants={itemVariants}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <div className="bg-white rounded-lg p-5 border-2 border-gray-100 transition-all duration-300 h-full">
                                <div className="flex justify-center mb-4">
                                    <div className={`p-3 rounded-full transition-all duration-300 ${stat.bg}`}>
                                        <stat.icon className={`h-5 w-5 ${stat.color}`} />
                                    </div>

                                </div>

                                <div className="text-center space-y-1">
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                        {stat.value}
                                    </h3>

                                    <h4 className="text-base font-semibold text-gray-900">{stat.title}</h4>
                                    <p className="text-sm text-gray-600">{stat.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

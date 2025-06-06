"use client"

import { motion } from "framer-motion"
import { Users, DollarSign, Clock, CheckCircle, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

const pricingPlans = [
    {
        icon: DollarSign,
        title: "Fixed Price Model",
        description: "Best for defined scope projects",
        features: [
            "One-time fixed-price contract",
            "Fixed budgets",
            "Fixed deadlines",
            "Milestone-based payments",
            "Risk-free development",
        ],
        price: "Custom",
        period: "quote",
        popular: false,
        color: "from-green-500 to-emerald-500",
        bg: "from-green-100 to-emerald-100",
        borderColor: "border-green-200",
        hoverBorder: "hover:border-green-300",
    },
    {
        icon: Users,
        title: "Dedicated Developers",
        description: "Perfect for long-term projects",
        features: [
            "Full-time Laravel developer",
            "One-to-one Reporting",
            "Work as per client needs",
            "Direct communication",
            "Dedicated project manager",
        ],
        price: "From $2,800",
        period: "/month",
        popular: true,
        color: "from-blue-500 to-indigo-500",
        bg: "from-blue-100 to-indigo-100",
        borderColor: "border-blue-200",
        hoverBorder: "hover:border-blue-300",
    },
    {
        icon: Clock,
        title: "Hourly",
        description: "Flexible for ongoing support",
        features: [
            "Hour-wise rolling contract",
            "Pay only for measurable work",
            "Bi-Weekly or Monthly billing",
            "Transparent time tracking",
            "Flexible scaling",
        ],
        price: "From $18",
        period: "/hour",
        popular: false,
        color: "from-purple-500 to-violet-500",
        bg: "from-purple-100 to-violet-100",
        borderColor: "border-purple-200",
        hoverBorder: "hover:border-purple-300",
    },
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

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
        },
    },
}

export const PricingModel = () => {
    return (
        <section className="py-16 bg-gradient-to-tl from-gray-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
                <motion.div
                    className="text-center space-y-4 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h1
                        className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        Pricing Model for Hiring Remote Laravel Developers
                    </motion.h1>
                    <motion.p
                        className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Choose the perfect engagement model that fits your project needs and budget. All plans include our quality
                        guarantee and U.S.-based project management.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-white rounded-xl p-6 border-2 ${plan.borderColor} ${plan.hoverBorder} transition-all duration-300 shadow-lg hover:shadow-xl group`}
                            variants={cardVariants}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            {plan.popular && (
                                <motion.div
                                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-current" />
                                        Most Popular
                                    </div>
                                </motion.div>
                            )}

                            <div className="flex justify-center mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.bg} group-hover:scale-110 transition-transform duration-300`}>
                                    {plan.icon && (
                                        <plan.icon className={`h-6 w-6 text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`} />
                                    )}
                                </div>
                            </div>

                            <div className="text-center space-y-2 mb-6">
                                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                                    {plan.title}
                                </h2>
                                <p className="text-sm text-gray-600">{plan.description}</p>
                            </div>

                            <div className="space-y-3 mb-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <motion.div
                                        key={featureIndex}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * featureIndex, duration: 0.5 }}
                                    >
                                        <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`} />
                                        <span className="text-sm text-gray-700 leading-relaxed">- {feature}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/*<Button*/}
                            {/*    className={`w-full "bg-white border-2 bg-transparent border-gray-300 hover:bg-transparent hover:border-blue-500 hover:text-blue-600 text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 group/btn`}*/}
                            {/*    size="lg"*/}
                            {/*>*/}
                            {/*    Get Started*/}
                            {/*    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />*/}
                            {/*</Button>*/}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                        <Link href={'/lets-talk'} className="flex items-center justify-center w-full">
                            Get A Custom Quote
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>No Hidden Costs</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Risk-Free Trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Money-Back Guarantee</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

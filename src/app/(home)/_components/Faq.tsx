"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
    {
        question: "How fast can I hire a dedicated Laravel developer through WPD?",
        answer:
            "You can interview and onboard a dedicated Laravel developer or team within 7 business days. For urgent needs, we offer faster placement depending on availability.",
    },
    {
        question: "What is the difference between a Laravel freelance developer and WPD's dedicated model?",
        answer:
            "A Laravel freelance developer works on multiple clients and may lack project oversight. WPD provides dedicated Laravel programmers who are fully integrated with your team, backed by U.S.-based project management and clear accountability.",
    },
    {
        question: "Do you offer offshore Laravel development with U.S. oversight?",
        answer:
            "Yes. Our expert Laravel developers are based offshore, but all project management, communication, and accountability is handled from the U.S.",
    },
    {
        question: "How do I know if I need a Laravel specialist or a full development team?",
        answer:
            "If you need advanced architecture, performance tuning, or complex integrations, request a Laravel specialist. For end-to-end development or scaling, hire a team of dedicated Laravel programmers through WPD.",
    },
    {
        question: "What is the typical cost to hire Laravel developers?",
        answer:
            "Our rates for dedicated Laravel developers range from $18–$32/hour, or $2,800–$5,120/month. This delivers high-quality code and support without the cost of U.S. in-house hiring.",
    },
    {
        question: "Can I hire Laravel app developers for a short-term project?",
        answer:
            "Yes. We offer flexible engagement for project-based, hourly, or part-time needs—ideal for MVPs, migrations, or quick product launches.",
    },
    {
        question: "Do you support hiring Laravel programmers for remote or offshore projects?",
        answer:
            "Absolutely. We help U.S. companies hire remote Laravel developers and offshore Laravel programmers, always with robust security and guaranteed communication overlap.",
    },
    {
        question: "Are WPD's Laravel developer services suitable for agencies and SaaS businesses?",
        answer:
            "Yes. Agencies, SaaS, e-commerce, and enterprises hire our professional Laravel developers for custom apps, integrations, and ongoing support.",
    },
    {
        question: "Can I hire a Laravel consultant or get code audits?",
        answer: "Yes. WPD offers consulting, code reviews, and architectural audits by expert Laravel developers.",
    },
    {
        question: "How does WPD ensure code quality compared to other top Laravel developers?",
        answer:
            "Our vetting process, technical interviews, code reviews, and ongoing quality metrics ensure you work with the best Laravel developers available.",
    },
    {
        question: "Can I interview multiple Laravel web developers before making a choice?",
        answer:
            "Yes. You can review, interview, and test as many WPD candidates as needed. We provide detailed profiles and trial periods to ensure the right fit.",
    },
    {
        question: "What if I am looking for a Laravel developer in the USA specifically?",
        answer:
            "We provide U.S.-based project management with globally sourced talent. For U.S.-only developer requests, please specify in your inquiry.",
    },
    {
        question: "Do you have experience with PHP Laravel developer for hire services across different industries?",
        answer:
            "Yes. Our dedicated Laravel web developers have built solutions for healthcare, fintech, retail, logistics, and more.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
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

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="max-w-4xl mx-auto px-4 xl:px-0">
                <motion.div
                    className="text-center space-y-3 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">
                        Get answers to common questions about hiring Laravel developers and our services.
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden"
                            variants={itemVariants}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="text-base font-medium text-gray-900 pr-4">{faq.question}</span>
                                <div className="flex-shrink-0">
                                    <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                        {openIndex === index ? (
                                            <Minus className="h-5 w-5 text-blue-600" />
                                        ) : (
                                            <Plus className="h-5 w-5 text-gray-400" />
                                        )}
                                    </motion.div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-4 border-t border-gray-100">
                                            <p className="text-sm text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

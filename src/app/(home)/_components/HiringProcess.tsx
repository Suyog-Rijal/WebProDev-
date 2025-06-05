"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
    MessageCircle,
    FileText,
    Users,
    Video,
    TestTube,
    Rocket,
    GitBranch,
    HeadphonesIcon,
    CreditCard,
} from "lucide-react"

const steps = [
    {
        number: "01",
        icon: MessageCircle,
        title: "Initial Consultation & Discovery",
        description:
            "Our process begins with a confidential, obligation-free consultation with a senior WPD project manager based in the U.S. We listen—carefully—to your business goals, project requirements, technology stack, timeline, team dynamics, and any compliance needs.",
        outcome: "Clear advice on team structure, a realistic feasibility assessment, and an estimated budget.",
    },
    {
        number: "02",
        icon: FileText,
        title: "Role Definition & Skill Blueprint",
        description:
            "WPD's technical lead crafts a detailed Laravel developer role profile based on your needs—covering not just PHP/Laravel experience but also front-end, DevOps, API, compliance, and communication skills.",
        outcome: 'A transparent "skills blueprint" to ensure every candidate is tailored to your vision.',
    },
    {
        number: "03",
        icon: Users,
        title: "Candidate Pre-Screening",
        description:
            "Our talent acquisition team taps into WPD's exclusive pool of pre-vetted Laravel experts. Each candidate is re-screened against your specific requirements—on technical expertise, language proficiency, cultural fit, and timezone overlap.",
        outcome: "Only top-tier Laravel developers, not generic applicants.",
    },
    {
        number: "04",
        icon: Video,
        title: "Live Technical & Cultural Interviews",
        description:
            "You review detailed developer profiles and resumes, then conduct live interviews with your shortlisted candidates. We encourage both technical questions and practical code challenges, plus behavioral/culture-fit discussions.",
        outcome: "Total transparency and control—meet your potential developer(s) before you commit.",
    },
    {
        number: "05",
        icon: TestTube,
        title: "Risk-Free Trial Assignment",
        description:
            "WPD offers a risk-free trial period (typically one to two weeks) so you can assess your developer's coding skills, communication, responsiveness, and collaborative ability in a real-world setting.",
        outcome: "Peace of mind—only continue if you're 100% satisfied.",
    },
    {
        number: "06",
        icon: Rocket,
        title: "Seamless Onboarding",
        description:
            "Once you approve your Laravel developer, WPD handles the onboarding logistics: NDA and contract execution (U.S. law), setting up secure access (GitHub, Jira, Slack, etc.), introductions and workflow walkthrough.",
        outcome: "Your developer working on your codebase within days, not weeks or months.",
    },
    {
        number: "07",
        icon: GitBranch,
        title: "Sprint-Based Kickoff & Integration",
        description:
            "Your Laravel developer joins daily standups, sprint planning, and code reviews—just like an in-house teammate. U.S.-based project oversight guarantees time-zone alignment, transparent reporting, and immediate escalation if needed.",
        outcome:
            "Real-time updates, detailed progress metrics, and the ability to scale up or down at any sprint boundary.",
    },
    {
        number: "08",
        icon: HeadphonesIcon,
        title: "Ongoing Support, Feedback, and Scaling",
        description:
            "WPD's dedicated client success team stays in touch, ensuring smooth communication and ongoing satisfaction. You can replace or add developers with just two weeks' notice, scale your team as your project evolves, and tap into additional WPD expertise.",
        outcome: "Flexible, risk-free engagement for every phase of your Laravel project.",
    },
    {
        number: "09",
        icon: CreditCard,
        title: "Secure, Transparent Billing",
        description:
            'You receive weekly or monthly invoices with full time logs, code contribution reports, and sprint summaries. No hidden fees, no "bench" costs, and always full cost visibility.',
        outcome: "Complete transparency and predictable costs.",
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

export const HiringProcess = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 xl:px-0">
                <motion.div
                    className="text-center space-y-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Steps for Laravel Developer Hiring: Step-by-Step
                    </h2>
                    <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Looking to hire dedicated Laravel developers for your next project? With WPD, the Laravel developer hiring
                        process is streamlined, secure, and designed to match your business with world-class Laravel talent—fast.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Central Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 hidden lg:block" />

                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0
                            const isHovered = hoveredIndex === index

                            return (
                                <motion.div key={index} className="relative" variants={itemVariants}>
                                    <div className={`flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                                        {/* Content Side */}
                                        <div className={`w-full lg:w-5/12 ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
                                            <motion.div
                                                className="bg-white rounded-lg p-4 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg cursor-pointer"
                                                onHoverStart={() => setHoveredIndex(index)}
                                                onHoverEnd={() => setHoveredIndex(null)}
                                                layout
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className={`flex items-center gap-3 ${isEven ? "" : "lg:flex-row-reverse lg:text-right"}`}>
                                                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100">
                                                        <step.icon className="h-4 w-4 text-blue-600" />
                                                    </div>
                                                    <span className="text-xs font-medium text-blue-600">{step.number}</span>
                                                </div>

                                                <h3 className={`text-base font-semibold text-gray-900 mt-2 ${isEven ? "" : "lg:text-right"}`}>
                                                    {step.title}
                                                </h3>

                                                <AnimatePresence>
                                                    {isHovered && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p
                                                                className={`text-sm text-gray-600 leading-relaxed mt-3 ${isEven ? "" : "lg:text-right"}`}
                                                            >
                                                                {step.description}
                                                            </p>

                                                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border-l-4 border-blue-500 mt-3">
                                                                <p className="text-xs font-medium text-blue-800">
                                                                    <span className="font-semibold">You get:</span> {step.outcome}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        </div>

                                        <div className="hidden lg:flex w-2/12 justify-center relative z-10">
                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                            >
                                                {step.number}
                                            </motion.div>
                                        </div>

                                        <div className="hidden lg:block w-5/12" />
                                    </div>

                                    <div className="flex lg:hidden items-center gap-4 mt-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                                            {step.number}
                                        </div>
                                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 to-transparent" />
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-xs font-medium text-blue-700">
                        <Rocket className="h-4 w-4" />
                        <span>Ready to start your Laravel project? Let&#39;s begin with step one.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

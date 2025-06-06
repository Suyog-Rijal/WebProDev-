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
    ChevronLeft,
    ChevronRight,
} from "lucide-react"

const steps = [
    {
        number: "01",
        icon: MessageCircle,
        iconColor: "from-blue-500 to-cyan-500",
        iconBg: "from-blue-100 to-cyan-100",
        title: "Initial Consultation & Discovery",
        description:
            "Our process begins with a confidential, obligation-free consultation with a senior WPD project manager based in the U.S. We listen—carefully—to your business goals, project requirements, technology stack, timeline, team dynamics, and any compliance needs.",
        outcome: "Clear advice on team structure, a realistic feasibility assessment, and an estimated budget.",
    },
    {
        number: "02",
        icon: FileText,
        iconColor: "from-emerald-500 to-teal-500",
        iconBg: "from-emerald-100 to-teal-100",
        title: "Role Definition & Skill Blueprint",
        description:
            "WPD's technical lead crafts a detailed Laravel developer role profile based on your needs—covering not just PHP/Laravel experience but also front-end, DevOps, API, compliance, and communication skills.",
        outcome: 'A transparent "skills blueprint" to ensure every candidate is tailored to your vision.',
    },
    {
        number: "03",
        icon: Users,
        iconColor: "from-purple-500 to-violet-500",
        iconBg: "from-purple-100 to-violet-100",
        title: "Candidate Pre-Screening",
        description:
            "Our talent acquisition team taps into WPD's exclusive pool of pre-vetted Laravel experts. Each candidate is re-screened against your specific requirements—on technical expertise, language proficiency, cultural fit, and timezone overlap.",
        outcome: "Only top-tier Laravel developers, not generic applicants.",
    },
    {
        number: "04",
        icon: Video,
        iconColor: "from-orange-500 to-red-500",
        iconBg: "from-orange-100 to-red-100",
        title: "Live Technical & Cultural Interviews",
        description:
            "You review detailed developer profiles and resumes, then conduct live interviews with your shortlisted candidates. We encourage both technical questions and practical code challenges, plus behavioral/culture-fit discussions.",
        outcome: "Total transparency and control—meet your potential developer(s) before you commit.",
    },
    {
        number: "05",
        icon: TestTube,
        iconColor: "from-pink-500 to-rose-500",
        iconBg: "from-pink-100 to-rose-100",
        title: "Risk-Free Trial Assignment",
        description:
            "WPD offers a risk-free trial period (typically one to two weeks) so you can assess your developer's coding skills, communication, responsiveness, and collaborative ability in a real-world setting.",
        outcome: "Peace of mind—only continue if you're 100% satisfied.",
    },
    {
        number: "06",
        icon: Rocket,
        iconColor: "from-indigo-500 to-purple-500",
        iconBg: "from-indigo-100 to-purple-100",
        title: "Seamless Onboarding",
        description:
            "Once you approve your Laravel developer, WPD handles the onboarding logistics: NDA and contract execution (U.S. law), setting up secure access (GitHub, Jira, Slack, etc.), introductions and workflow walkthrough.",
        outcome: "Your developer working on your codebase within days, not weeks or months.",
    },
    {
        number: "07",
        icon: GitBranch,
        iconColor: "from-green-500 to-emerald-500",
        iconBg: "from-green-100 to-emerald-100",
        title: "Sprint-Based Kickoff & Integration",
        description:
            "Your Laravel developer joins daily standups, sprint planning, and code reviews—just like an in-house teammate. U.S.-based project oversight guarantees time-zone alignment, transparent reporting, and immediate escalation if needed.",
        outcome:
            "Real-time updates, detailed progress metrics, and the ability to scale up or down at any sprint boundary.",
    },
    {
        number: "08",
        icon: HeadphonesIcon,
        iconColor: "from-amber-500 to-orange-500",
        iconBg: "from-amber-100 to-orange-100",
        title: "Ongoing Support, Feedback, and Scaling",
        description:
            "WPD's dedicated client success team stays in touch, ensuring smooth communication and ongoing satisfaction. You can replace or add developers with just two weeks' notice, scale your team as your project evolves, and tap into additional WPD expertise.",
        outcome: "Flexible, risk-free engagement for every phase of your Laravel project.",
    },
    {
        number: "09",
        icon: CreditCard,
        iconColor: "from-slate-500 to-gray-500",
        iconBg: "from-slate-100 to-gray-100",
        title: "Secure, Transparent Billing",
        description:
            'You receive weekly or monthly invoices with full time logs, code contribution reports, and sprint summaries. No hidden fees, no "bench" costs, and always full cost visibility.',
        outcome: "Complete transparency and predictable costs.",
    },
]

export const HiringProcess = () => {
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () => {
        setCurrentStep((prev) => (prev + 1) % steps.length)
    }

    const prevStep = () => {
        setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
    }

    const goToStep = (index: number) => {
        setCurrentStep(index)
    }

    return (
        <section className="py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 xl:px-0">
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

                {/* Progress Indicator */}
                <div className="mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        {steps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToStep(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentStep ? "bg-blue-600 scale-125" : index < currentStep ? "bg-blue-300" : "bg-gray-200"
                                }`}
                            />
                        ))}
                    </div>
                    <div className="text-center">
            <span className="text-sm font-medium text-blue-600">
              Step {currentStep + 1} of {steps.length}
            </span>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="flex items-center justify-center">
                        <button
                            onClick={prevStep}
                            className="absolute left-0 z-10 p-3 rounded-full bg-white shadow-lg border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
                        >
                            <ChevronLeft className="h-6 w-6 text-gray-600" />
                        </button>

                        <div className="w-full max-w-6xl mx-12">
                            <div className="relative h-[400px] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {steps.map((step, index) => {
                                        const isActive = index === currentStep
                                        const isPrev = index === (currentStep - 1 + steps.length) % steps.length
                                        const isNext = index === (currentStep + 1) % steps.length
                                        const isVisible = isActive || isPrev || isNext

                                        if (!isVisible) return null

                                        let position = "center"
                                        let scale = 1
                                        let opacity = 1
                                        let zIndex = 1

                                        if (isPrev) {
                                            position = "left"
                                            scale = 0.8
                                            opacity = 0.6
                                            zIndex = 0
                                        } else if (isNext) {
                                            position = "right"
                                            scale = 0.8
                                            opacity = 0.6
                                            zIndex = 0
                                        } else if (isActive) {
                                            zIndex = 2
                                        }

                                        return (
                                            <motion.div
                                                key={index}
                                                className="absolute w-full max-w-lg"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{
                                                    x: position === "left" ? "-60%" : position === "right" ? "60%" : "0%",
                                                    scale,
                                                    opacity,
                                                    zIndex,
                                                }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30,
                                                }}
                                                onClick={() => !isActive && goToStep(index)}
                                                style={{ cursor: !isActive ? "pointer" : "default" }}
                                            >
                                                <div
                                                    className={`bg-white rounded-xl p-6 border-2 transition-all duration-300 shadow-lg ${
                                                        isActive ? "border-blue-200 shadow-xl" : "border-gray-100 hover:border-blue-100"
                                                    }`}
                                                >
                                                    {/* Header */}
                                                    <div className="flex items-center justify-between mb-6">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${step.iconBg}`}>
                                                                <step.icon
                                                                    className={`h-6 w-6 bg-gradient-to-r ${step.iconColor} bg-clip-text text-transparent`}
                                                                />
                                                            </div>
                                                            <span className="text-base font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                {step.number}
                              </span>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">{step.title}</h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{step.description}</p>
                                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500">
                                                        <p className="text-sm font-medium text-blue-800">
                                                            <span className="font-semibold">You get:</span> {step.outcome}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </AnimatePresence>
                            </div>
                        </div>

                        <button
                            onClick={nextStep}
                            className="absolute right-0 z-10 p-3 rounded-full bg-white shadow-lg border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
                        >
                            <ChevronRight className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

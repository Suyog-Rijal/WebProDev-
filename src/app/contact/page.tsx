"use client";

import type React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import {CIForm} from "@/components/custome/CIForm";
import {TQuoteFormSchema} from "@/types/quote";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone Numbers",
        details: ["+1 315 215 2005", "+91 0172-4666470"],
        color: "from-green-500 to-emerald-500",
        bg: "from-green-100 to-emerald-100",
    },
    {
        icon: Mail,
        title: "Email Address",
        details: ["support@hirededicatedlaraveldeveloper.com"],
        color: "from-blue-500 to-cyan-500",
        bg: "from-blue-100 to-cyan-100",
    },
    {
        icon: MapPin,
        title: "Office Locations",
        details: [
            "459 Columbus Ave #387, New York, NY 10024, United States",
            "23,3rd Floor, Block-D DLF IT Park, Phase - I, Sector 13, Chandigarh, 160101, India",
        ],
        color: "from-purple-500 to-indigo-500",
        bg: "from-purple-100 to-indigo-100",
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

const formVariants = {
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

export default function ContactPage() {
    const onSubmit = (data: TQuoteFormSchema) => {
        console.log("Form submitted with data:", data);
    }

    return (
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 flex justify-center items-center h-full lg:h-[90vh] mt-24 lg:mt-0">
            <div className="max-w-7xl w-full mx-auto px-4 xl:px-0 relative z-10">
                <Image src={"/contact-banner.png"} alt={"Contact"} width={500} height={500} className="absolute top-20 left-0 -z-10 opacity-25" />
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <div className="text-center lg:text-left space-y-6">
                            {/* Header */}
                            <motion.h1
                                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                                variants={itemVariants}
                            >
                                Start Working On Your Laravel Project with Us
                            </motion.h1>

                            {/* Contact Info Section */}
                            <motion.div className="space-y-4" variants={itemVariants}>
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <motion.div
                                            key={index}
                                            className="p-4 backdrop-blur-xs"
                                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={`p-2 rounded-lg bg-gradient-to-r ${info.bg} flex-shrink-0`}>
                                                    <info.icon
                                                        className={`h-5 w-5 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-900 text-sm mb-2">{info.title}</h4>
                                                    <div className="space-y-1">
                                                        {info.details.map((detail, detailIndex) => (
                                                            <p key={detailIndex} className="text-sm text-gray-600 leading-relaxed">
                                                                {detail}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        className="rounded-xl p-6 flex justify-center items-center border-2 border-gray-100 shadow-lg lg:shadow-none lg:border-0"
                        variants={formVariants}
                    >
                        <div className="space-y-4 max-w-[500px] w-full">
                            <div className="text-center space-y-2">
                                <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Get a Custom Quote
                                </h2>
                                <p className="text-gray-600">Fill in the form and send your questions or feedback immediately.</p>
                            </div>

                            <CIForm onSubmit={onSubmit}></CIForm>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

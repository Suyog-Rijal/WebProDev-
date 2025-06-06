"use client"

import { motion } from "framer-motion"
import { Sparkles, Star, ArrowRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {CIForm} from "@/components/custome/CIForm";
import Link from "next/link";


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

export const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 flex justify-center items-center h-full lg:h-[90vh] mt-24 lg:mt-0">
            <div className="max-w-7xl w-full mx-auto px-4 xl:px-0">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.div
                            className="inline-flex items-center gap-2 p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-xs font-medium text-blue-700"
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <Sparkles className="h-4 w-4" />
                            Top 3% Vetted Laravel Experts
                        </motion.div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" variants={itemVariants}>
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Hire Dedicated
                </span>
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}
                                    Laravel Developers
                </span>
                                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  {" "}
                                    Through <br /> WPD
                </span>
                                <br />
                            </motion.h1>

                            <motion.p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg" variants={itemVariants}>
                                Transform your web initiatives with elite, security-cleared engineers delivering bulletproof, scalable,
                                and high-performance PHP solutions tailored to your business needs.{" "}
                            </motion.p>
                        </div>

                        {/* CTA Buttons */}
                        <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <Link href={'/lets-talk'}>START 7-DAYS TRIAL</Link>
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                            >
                <span>
                  <PhoneCall />
                </span>
                                +1 315 215 2005
                            </Button>
                        </motion.div>

                        <motion.div className="flex flex-col flex-s justify-center gap-4 pt-4" variants={itemVariants}>
                            <div className="flex items-center gap-2">
                                <Image src={"/google-icon.svg"} alt={"Google"} width={34} height={34} />
                                <span className="text-lg font-semibold text-gray-900">4.8</span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <div className="h-4 w-px bg-gray-300" />
                                <p className="text-gray-600 font-medium">500+ Google Reviews</p>
                            </div>

                            <div className="flex items-end gap-2">
                                <div> </div>
                                <Image src={"/google-partner.png"} alt={"Clutch"} width={58} height={58} />
                                <div>|</div>
                                <Image src={"/trust-pilot.svg"} alt={"Google"} width={100} height={100} />
                                <div>|</div>
                                <Image src={"/Clutch-icon.svg"} alt={"Clutch"} width={50} height={50} />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        className="rounded-xl p-6 flex justify-center items-center border-2 border-gray-100 shadow-lg lg:shadow-none lg:border-0"
                        variants={formVariants}
                    >
                        <div className="space-y-4 max-w-[500px]">
                            <div className="text-center space-y-2">
                                <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Get a Custom Quote
                                </h2>
                                <p className="text-gray-600">
                                    Please complete the requested fields and we&#39;ll be in touch within one business day to discuss
                                    options and pricing.
                                </p>
                            </div>

                            <CIForm></CIForm>

                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

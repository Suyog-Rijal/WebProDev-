"use client"

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { QuoteFormSchema, type TQuoteFormSchema } from "@/types/quote"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"
import axiosInstance from "@/lib/axiosInstance"
import { toast } from "sonner"

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

const floatingShapes = [
    {
        id: 1,
        type: "triangle",
        x: "10%",
        y: "20%",
        size: 20,
        duration: 8,
        delay: 0,
    },
    {
        id: 2,
        type: "square",
        x: "85%",
        y: "15%",
        size: 15,
        duration: 12,
        delay: 2,
    },
    {
        id: 3,
        type: "wave",
        x: "20%",
        y: "70%",
        size: 25,
        duration: 10,
        delay: 1,
    },
    {
        id: 4,
        type: "triangle",
        x: "75%",
        y: "80%",
        size: 18,
        duration: 9,
        delay: 3,
    },
    {
        id: 5,
        type: "square",
        x: "5%",
        y: "60%",
        size: 12,
        duration: 11,
        delay: 4,
    },
    {
        id: 6,
        type: "wave",
        x: "90%",
        y: "50%",
        size: 22,
        duration: 7,
        delay: 1.5,
    },
]

const ShapeComponent = ({ shape }: { shape: (typeof floatingShapes)[0] }) => {
    const shapeVariants = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
            transition: {
                duration: shape.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: shape.delay,
            },
        },
    }

    const renderShape = () => {
        switch (shape.type) {
            case "triangle":
                return (
                    <svg width={shape.size} height={shape.size} viewBox="0 0 24 24">
                        <polygon points="12,2 22,20 2,20" fill="none" stroke="rgba(59, 130, 246, 0.50)" strokeWidth="1.5" />
                    </svg>
                )
            case "square":
                return (
                    <svg width={shape.size} height={shape.size} viewBox="0 0 24 24">
                        <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            fill="none"
                            stroke="rgba(99, 102, 241, 0.50)"
                            strokeWidth="1.5"
                            rx="2"
                        />
                    </svg>
                )
            case "wave":
                return (
                    <svg width={shape.size} height={shape.size} viewBox="0 0 24 24">
                        <path
                            d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0 4 4 6 0"
                            fill="none"
                            stroke="rgba(147, 51, 234, 0.50)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                )
            default:
                return null
        }
    }

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                left: shape.x,
                top: shape.y,
            }}
            variants={shapeVariants}
            animate="animate"
        >
            {renderShape()}
        </motion.div>
    )
}

export default function LetsTalk() {
    const form = useForm<TQuoteFormSchema>({
        resolver: zodResolver(QuoteFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    const onSubmit = async (data: TQuoteFormSchema) => {
        return axiosInstance
            .post("/api/inquiry", data)
            .then(() => {
                toast.success("Your request has been submitted successfully!", {})
                form.reset()
            })
            .catch((error) => {
                console.error("Error submitting form:", error)
                toast.error("Failed to submit your request. Please try again later.")
            })
    }

    return (
        <div className="relative overflow-hidden h-[90vh]">
            {floatingShapes.map((shape) => (
                <ShapeComponent key={shape.id} shape={shape} />
            ))}
            <motion.div
                className="rounded-xl p-4 flex justify-center items-center border-2 border-gray-100 shadow-lg lg:shadow-none lg:border-0 relative z-10"
                variants={formVariants}
            >
                <div className="space-y-4 w-[500px]">
                    <div className="text-center space-y-2">
                        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Lets Talk
                        </h2>
                        <p className="text-gray-600">Start your 7-days Risk-free trial.</p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-gray-700">
                                            Your Name <span className="text-red-500">*</span>
                                            {form.formState.errors.name && (
                                                <span className="text-red-500 ml-1">({form.formState.errors.name.message})</span>
                                            )}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                className="border-gray-300 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200"
                                                placeholder="Enter your full name"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-gray-700">
                                            Your Work Email <span className="text-red-500">*</span>
                                            {form.formState.errors.email && (
                                                <span className="text-red-500 ml-1">({form.formState.errors.email.message})</span>
                                            )}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                className="border-gray-300 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200"
                                                placeholder="Enter your email address"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-gray-700">
                                            Company Name
                                            {form.formState.errors.company && (
                                                <span className="text-red-500 ml-1">({form.formState.errors.company.message})</span>
                                            )}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                className="border-gray-300 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200"
                                                placeholder="Enter your email address"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-gray-700">
                                            Phone Number <span className="text-red-500">*</span>
                                            {form.formState.errors.phone && (
                                                <span className="text-red-500 ml-1">({form.formState.errors.phone.message})</span>
                                            )}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="tel"
                                                className="border-gray-300 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200"
                                                placeholder="Enter your phone number"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium text-gray-700">
                                            Message <span className="text-red-500">*</span>
                                            {form.formState.errors.message && (
                                                <span className="text-red-500 ml-1">({form.formState.errors.message.message})</span>
                                            )}
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                rows={3}
                                                className="border-gray-300 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200 resize-none"
                                                placeholder="Tell us about your project requirements..."
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                                size="lg"
                                disabled={form.formState.isSubmitting}
                            >
                                {form.formState.isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Request
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </motion.div>
        </div>
    )
}

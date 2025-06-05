'use client';

import { useForm } from "react-hook-form";
import { QuoteFormSchema, TQuoteFormSchema } from "@/types/quote";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "sonner"

interface CIFormProps {
    onSubmit?: (data: TQuoteFormSchema) => void;
}

export const CIForm = (props: CIFormProps) => {
    const form = useForm<TQuoteFormSchema>({
        resolver: zodResolver(QuoteFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const onSubmit = async (data: TQuoteFormSchema) => {
        if (props.onSubmit) {
            props.onSubmit(data);
        } else {
            return axiosInstance.post("/api/inquiry", data)
                .then(() => {
                    toast.success("Your request has been submitted successfully!", {
                    });
                    form.reset();
                })
                .catch((error) => {
                    console.error("Error submitting form:", error);
                    toast.error("Failed to submit your request. Please try again later.");
                })
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700">
                                Name <span className="text-red-500">*</span>
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
                                Email <span className="text-red-500">*</span>
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
                    disabled={form.formState.isSubmitting} // Disable button during submission
                >
                    {form.formState.isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {/* Spinner icon */}
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
    );
};

import {QuoteFormSchema} from "@/types/quote";
import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/db";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validatedData = QuoteFormSchema.safeParse(body);

        if (!validatedData.success) {
            return NextResponse.json(
                { error: "Invalid input", details: validatedData.error.errors },
                { status: 400 }
            );
        }

        const inquiry = await prisma.inquiry.create({
            data: {
                name: validatedData.data.name,
                email: validatedData.data.email,
                phone: validatedData.data.phone,
                message: validatedData.data.message,
            }
        })

        return NextResponse.json(
            { message: "Inquiry submitted successfully", data: inquiry },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error saving inquiry:", error);
        return NextResponse.json(
            { error: "Failed to submit inquiry" },
            { status: 500 }
        );
    }
}

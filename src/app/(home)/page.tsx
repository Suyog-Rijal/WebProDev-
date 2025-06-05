"use client";
import {Hero} from "@/app/(home)/_components/Hero";
import {Trust} from "@/app/(home)/_components/Trust";
import {WhatWeDo} from "@/app/(home)/_components/WhatWeDo";
import {LeadingLaravel} from "@/app/(home)/_components/LeadingLaravel";
import {FAQ} from "@/app/(home)/_components/Faq";
import {HiringProcess} from "@/app/(home)/_components/HiringProcess";
import ClickSpark from "@/components/ui/click-spark";

export default function Home() {
    return (
        <div className={''}>

            <ClickSpark>
                <Hero />
                <Trust />
                <WhatWeDo />
                <LeadingLaravel />
                <HiringProcess />
                <FAQ />
            </ClickSpark>

        </div>
    );
}

import {Hero} from "@/app/(home)/_components/Hero";
import {Trust} from "@/app/(home)/_components/Trust";
import {WhatWeDo} from "@/app/(home)/_components/WhatWeDo";
import {LeadingLaravel} from "@/app/(home)/_components/LeadingLaravel";
import {FAQ} from "@/app/(home)/_components/Faq";
import {HiringProcess} from "@/app/(home)/_components/HiringProcess";
import {PricingModel} from "@/app/(home)/_components/PricingModel";
import {WhyChooseUs} from "@/app/(home)/_components/WhyChooseUs";

export default function Home() {
    return (
        <div>

                <Hero />
                <Trust />
                <WhatWeDo />
                <WhyChooseUs />
                <HiringProcess />
                <PricingModel />
                <LeadingLaravel />
                <FAQ />

        </div>
    );
}

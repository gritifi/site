'use client';

import { CONTENT } from "@/content";
import Button from "./button";
import { useLenis } from "lenis/react";

export default function Cta() {
    const lenis = useLenis();

    const handleScroll = (sectionType: 'contact' | 'about') => {
        const section = document.getElementById(sectionType);
        if (!section) return;

        lenis?.scrollTo(section, {
            offset: 0,
            duration: 1.2,
            easing: (t) => t * (2 - t),
        })
    }

    return (
        <div className="bg-[#FFD166] w-full flex flex-col justify-center items-center py-8 xl:py-24">
            <h1
                className="text-center text-stone-900 rotate-[-2.88deg] pb-4 text-[6em] px-2"
                style={{
                    fontFamily: 'var(--font-heading)',
                }}
            >
                {CONTENT.CTA.title}
            </h1>

            <div className="flex gap-4 pt-4 text-stone flex-wrap items-center justify-center">
                <Button onClick={() => handleScroll('contact')}>Contact me</Button>
                <Button onClick={() => handleScroll('about')}>About me</Button>
            </div>
        </div>
    )
}
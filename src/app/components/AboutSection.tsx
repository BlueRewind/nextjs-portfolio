"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";
import { TAB_DATA } from "./AboutData";

export const AboutSection = () => {
    const [tab, setTab] = useState(TAB_DATA[0].id);
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => startTransition(() => setTab(id));

    const currentTabContent = TAB_DATA.find((t) => t.id === tab)?.content;

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" alt="about-image" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-pink-500 mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        I&apos;m a professional with over 6 years of experience designing, developing, and maintaining
                        secure, scalable full-stack applications. In my spare time, I do bug bounty hunting and am
                        upskilling in penetration testing, malware development, and reverse engineering.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        {TAB_DATA.map(({ title, id }) => (
                            <TabButton key={id} selectTab={() => handleTabChange(id)} active={tab === id}>
                                {title}
                            </TabButton>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-8"
                        >
                            {currentTabContent}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

"use client";

import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import { BlogsSection } from "./components/BlogsSection";
import { Footer } from "./components/Footer";
import { AchievementsSection } from "./components/AchievementsSection";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <HeroSection />
                <AchievementsSection />
                <AboutSection />
                <BlogsSection />
            </div>
            <Footer />
        </motion.div>
    );
}

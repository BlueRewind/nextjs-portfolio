import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SkillsCardProps {
    title: string;
    alt: string;
    path: string;
    description: string;
}

export const SkillsCard = ({ title, alt, path, description }: SkillsCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlay = () => setIsOpen(!isOpen);

    return (
        <>
            <li className="flex items-center gap-1 bg-[#232323] p-1 cursor-pointer" onClick={toggleOverlay}>
                <Image src={path} alt={alt} width={40} height={40} className="md:w-12 md:h-12" priority={false} />
                <span className="text-sm md:text-base text-white">{title}</span>
            </li>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-[#232323] p-6 rounded-lg shadow-lg w-3/4 max-w-lg text-white relative"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <button
                                onClick={toggleOverlay}
                                className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded-full"
                            >
                                x
                            </button>
                            <h2 className="text-xl font-bold mb-4">{title}</h2>
                            <Image src={path} alt={alt} width={80} height={80} className="mb-4 mx-auto" />
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

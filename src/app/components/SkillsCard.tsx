import Image from "next/image";

interface SkillsCardProps {
    title: string;
    alt: string;
    path: string;
}

export const SkillsCard = ({ title, alt, path }: SkillsCardProps) => {
    return (
        <li className="flex items-center gap-1 bg-[#232323] p-1">
            <Image 
                src={path} 
                alt={alt} 
                width={40}
                height={40} 
                className="md:w-12 md:h-12"
                priority={false}
            />
            <span className="text-sm md:text-base text-white">{title}</span>
        </li>
    );
};
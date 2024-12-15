import Image from "next/image";

export const SkillsCard = ({ title, alt, path }) => {
    return (
        <li className="flex items-center gap-2">
            <Image 
                src={path} 
                alt={alt} 
                width={40}
                height={40} 
                className="md:w-10 md:h-10"
                priority={false}
            />
            <span className="text-sm md:text-base text-white">{title}</span>
        </li>
    );
};

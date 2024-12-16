"use client";
import React, { useState, useRef } from "react";
import { BlogCard } from "./BlogCard";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
    tag: string[];
    previewUrl: string;
}

const blogData: Blog[] = [
    {
        id: 1,
        title: "Top Lessons from My Journey as a Developer",
        description: "Talking through key challenges, achievements and lessons that shaped my technical growth",
        image: "/images/projects/1.jpg",
        tag: ["All", "Growth"],
        previewUrl: "/",
    },
];

export const BlogsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredBlogs = blogData.filter((project) => project.tag.includes(tag));

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Blogs</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Growth" isSelected={tag === "Growth"} />
                <ProjectTag onClick={handleTagChange} name="Cyber" isSelected={tag === "Mobile"} />
                <ProjectTag onClick={handleTagChange} name="Engineering" isSelected={tag === "Engineering"} />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <BlogCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                    ))
                ) : (
                    <h1 className="text-center text-lg sm:text-xl lg:text-1xl lg:leading-normal font-bold">
                        No blogs found with tag {tag}
                    </h1>
                )}
            </ul>
        </section>
    );
};

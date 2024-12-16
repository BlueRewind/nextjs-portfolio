import { SkillsCard } from "./SkillsCard";

const SKILLS_DATA = [
    {
        path: "/react.svg",
        alt: "React",
        description:
            "I have used React to create dynamic and responsive web applications, taking advantage of its component-based architecture to build maintainable projects.",
    },
    {
        path: "/images/icon/typescript.png",
        alt: "TypeScript",
        description:
            "TypeScript has been integral in enhancing code quality and maintainability in my development work, particularly for larger-scale applications.",
    },
    {
        path: "/images/icon/html.png",
        alt: "HTML",
        description:
            "HTML serves as the foundation for all my web projects, ensuring that structures are semantic and accessible.",
    },
    {
        path: "/next.svg",
        alt: "Next.js",
        description:
            "Next.js has been my choice for developing high-performance, server-rendered applications with SEO optimization in mind.",
    },
    {
        path: "/images/icon/tailwind.png",
        alt: "Tailwind",
        description:
            "Tailwind CSS has allowed me to quickly prototype and build visually consistent designs across various projects.",
    },
    {
        path: "/images/icon/mui.png",
        alt: "MUI",
        description:
            "MUI has been used to create flexible, accessible, and visually appealing user interfaces in my applications.",
    },
    {
        path: "/pixijs.svg",
        alt: "PixiJS",
        description:
            "PixiJS has helped me integrate interactive graphics and animations into creative and game-like applications.",
    },
    {
        path: "/java.svg",
        alt: "Java",
        description:
            "Java has been my go-to language for backend development, supporting the creation of robust, enterprise-level applications.",
    },
    {
        path: "/images/icon/spring_boot.png",
        alt: "Spring",
        description: "Spring Boot has enabled me to quickly build scalable microservices for complex backend systems.",
    },
    {
        path: "/nodejs.svg",
        alt: "NodeJS",
        description:
            "Node.js has been central to my backend work, enabling the development of high-performance APIs and real-time applications.",
    },
    {
        path: "/graphql.svg",
        alt: "GraphQL",
        description:
            "GraphQL has allowed me to design efficient APIs that support complex front-end applications, ensuring smooth data querying.",
    },
    {
        path: "/kafka.svg",
        alt: "Kafka",
        description:
            "Kafka has been essential in building scalable, event-driven systems that support high throughput and reliability.",
    },
    {
        path: "/images/icon/postgres.png",
        alt: "PostgreSQL",
        description:
            "PostgreSQL has been my preferred database choice for projects requiring complex querying and robust data management.",
    },
    {
        path: "/mongodb.svg",
        alt: "MongoDB",
        description:
            "MongoDB’s flexible schema has been particularly useful in projects with evolving data requirements.",
    },
    {
        path: "/docker.svg",
        alt: "Docker",
        description:
            "Docker has enabled me to containerize applications, ensuring consistency across development, testing, and production environments.",
    },
    {
        path: "/images/icon/Kubernetes.png",
        alt: "Kubernetes",
        description:
            "Kubernetes has helped me manage containerized applications at scale, improving reliability and efficiency.",
    },
    {
        path: "/images/icon/AWS.png",
        alt: "AWS",
        description:
            "AWS has been a key part of my cloud architecture work, particularly in building scalable and resilient serverless solutions.",
    },
    {
        path: "/images/icon/Ansible.png",
        alt: "Ansible",
        description:
            "Ansible has played a significant role in automating infrastructure, making deployments more efficient and repeatable.",
    },
    {
        path: "/images/icon/jenkins.png",
        alt: "Jenkins",
        description:
            "Jenkins has been essential for implementing CI/CD pipelines, streamlining the deployment process and improving project reliability.",
    },
    {
        path: "/images/icon/SST.png",
        alt: "SST",
        description:
            "SST has been my go-to framework for building serverless applications on AWS, combining modern best practices with cloud-native technologies.",
    },
    {
        path: "/Datadog.svg",
        alt: "DataDog",
        description:
            "DataDog has been invaluable for monitoring application performance and ensuring that production environments run smoothly.",
    },
];

export const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <section>
                <div className="grid grid-cols-1 gap-8">
                    <ul className="flex flex-wrap gap-4">
                        {SKILLS_DATA.map(({ path, alt, description }) => (
                            <SkillsCard key={alt} title="" path={path} alt={alt} description={description} />
                        ))}
                    </ul>
                </div>
            </section>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="flex flex-wrap gap-4">
                <SkillsCard
                    title="University - Digital Technology Solutions (1st Class)"
                    path="/rocket.svg"
                    alt="rocket"
                    description="The Digital Technology Solutions degree equiped me with expertise in software development, cybersecurity, and Networking. It gave me a solid foundation in designing and implementing innovative technology solutions to solve real-world business challenges."
                />
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="flex flex-wrap gap-4">
                {[
                    {
                        title: "OffSec Exploitation Developer",
                        path: "/osed.svg",
                        alt: "Exploit",
                        description:
                            "The Offensive Security Exploitation Expert (OSED) certification demonstrates advanced skills in exploit development for Windows systems, including buffer overflows and bypassing modern security mechanisms like ASLR and DEP. It reflects expertise in low-level programming, reverse engineering, and custom shellcode creation.",
                    },
                    {
                        title: "Practical Junior Penetration Tester (PJPT)",
                        path: "/images/icon/pentesting.png",
                        alt: "PJPT",
                        description:
                            "Part of TCM Security Qualifications, I learned how to compromise the internal network of a companys Active Directly with additional report writing demonstrating both technical and soft skills",
                    },
                ].map(({ title, path, alt, description }) => (
                    <SkillsCard key={alt} title={title} path={path} alt={alt} description={description} />
                ))}
            </ul>
        ),
    },
];

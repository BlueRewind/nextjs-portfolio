import { SkillsCard } from "./SkillsCard";

export const SKILLS_DATA = [
    { path: "/react.svg", alt: "React" },
    { path: "/images/icon/typescript.png", alt: "TypeScript" },
    { path: "/images/icon/html.png", alt: "HTML" },
    { path: "/next.svg", alt: "Next.js" },
    { path: "/images/icon/tailwind.png", alt: "Tailwind" },
    { path: "/images/icon/mui.png", alt: "MUI" },
    { path: "/pixijs.svg", alt: "PixiJS" },
    { path: "/java.svg", alt: "Java" },
    { path: "/images/icon/spring_boot.png", alt: "Spring" },
    { path: "/nodejs.svg", alt: "NodeJS" },
    { path: "/graphql.svg", alt: "GraphQL" },
    { path: "/kafka.svg", alt: "Kafka" },
    { path: "/images/icon/postgres.png", alt: "PostgreSQL" },
    { path: "/mongodb.svg", alt: "MongoDB" },
    { path: "/docker.svg", alt: "Docker" },
    { path: "/images/icon/Kubernetes.png", alt: "Kubernetes" },
    { path: "/images/icon/AWS.png", alt: "AWS" },
    { path: "/images/icon/Ansible.png", alt: "Ansible" },
    { path: "/images/icon/jenkins.png", alt: "Jenkins" },
    { path: "/images/icon/SST.png", alt: "SST" },
    { path: "/Datadog.svg", alt: "DataDog" },
];

export const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <section>
                <div className="grid grid-cols-1 gap-8">
                    <ul className="flex flex-wrap gap-4">
                        {SKILLS_DATA.map(({ path, alt }) => (
                            <SkillsCard key={alt} title="" path={path} alt={alt} />
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
                    { title: "OffSec Exploitation Developer", path: "/osed.svg", alt: "Exploit" },
                    {
                        title: "Practical Junior Penetration Tester (PJPT)",
                        path: "/images/icon/pentesting.png",
                        alt: "PJPT",
                    },
                ].map(({ title, path, alt }) => (
                    <SkillsCard key={alt} title={title} path={path} alt={alt} />
                ))}
            </ul>
        ),
    },
];

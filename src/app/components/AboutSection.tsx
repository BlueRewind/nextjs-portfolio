"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { SkillsCard } from "./SkillsCard";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <section>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
              <div>
                  <ul className="flex flex-wrap gap-4">
                      <SkillsCard title="" path="/react.svg" alt="React" />
                      <SkillsCard title="" path="/images/icon/typescript.png" alt="TypeScript" />
                      <SkillsCard title="" path="/images/icon/html.png" alt="HTML" />
                      <SkillsCard title="" path="/next.svg" alt="Next.js" />
                      <SkillsCard title="" path="/images/icon/tailwind.png" alt="Tailwind" />
                      <SkillsCard title="" path="/images/icon/mui.png" alt="MUI" />
                      <SkillsCard title="" path="/pixijs.svg" alt="PixiJS" />
                      <SkillsCard title="" path="/java.svg" alt="Java" />
                      <SkillsCard title="" path="/images/icon/spring_boot.png" alt="Spring" />
                      <SkillsCard title="" path="/nodejs.svg" alt="NodeJS" />
                      <SkillsCard title="" path="/graphql.svg" alt="GraphQL" />
                      <SkillsCard title="" path="/kafka.svg" alt="Kafka" />
                      <SkillsCard title="" path="/images/icon/postgres.png" alt="PostgreSQL" />
                      <SkillsCard title="" path="/mongodb.svg" alt="MongoDB" />
                      <SkillsCard title="" path="/docker.svg" alt="Docker" />
                      <SkillsCard title="" path="/images/icon/Kubernetes.png" alt="Kubernetes" />
                      <SkillsCard title="" path="/images/icon/AWS.png" alt="AWS" />
                      <SkillsCard title="" path="/images/icon/Ansible.png" alt="Ansible" />
                      <SkillsCard title="" path="/images/icon/jenkins.png" alt="Jenkins" />
                      <SkillsCard title="" path="/images/icon/SST.png" alt="SST" />
                      <SkillsCard title="" path="/Datadog.svg" alt="DataDog" />
                  </ul>
              </div>
          </div>
      </section>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="flex flex-wrap gap-4">
        <SkillsCard title="University - Digital Technology Solutions (1st Class)" path="/rocket.svg" alt="rocket" />
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="flex flex-wrap gap-4">
        <SkillsCard title="OffSec Exploitation Developer" path="/osed.svg" alt="Exploit" />
        <SkillsCard title="Practical Junior Penetration Tester (PJPT)" path="/images/icon/pentesting.png" alt="PJPT" />
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about-image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-pink-500 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m a professional with over 6 years of experience designing, developing, and maintaining secure, 
          scalable full-stack applications. In my spare time, I do bug bounty hunting and am upskilling in 
          penetration testing, malware development, and reverse engineering.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

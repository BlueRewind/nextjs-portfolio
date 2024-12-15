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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                  <h3 className="text-lg font-semibold text-sky-400 mb-3">Frontend</h3>
                  <ul className="flex flex-wrap gap-4">
                      <SkillsCard title="React" path="/react.svg" alt="React" />
                      <SkillsCard title="TypeScript" path="/images/icon/typescript.png" alt="TypeScript" />
                      <SkillsCard title="HTML" path="/images/icon/html.png" alt="HTML" />
                      <SkillsCard title="Next.js" path="/next.svg" alt="Next.js" />
                      <SkillsCard title="Tailwind CSS" path="/images/icon/tailwind.png" alt="Tailwind" />
                      <SkillsCard title="MUI" path="/images/icon/mui.png" alt="MUI" />
                      <SkillsCard title="PixiJS" path="/pixijs.svg" alt="PixiJS" />
                  </ul>
              </div>
              <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-3">Backend</h3>
                  <ul className="flex flex-wrap gap-4">
                      <SkillsCard title="Java" path="/java.svg" alt="Java" />
                      <SkillsCard title="Spring Boot" path="/images/icon/spring_boot.png" alt="Spring" />
                      <SkillsCard title="NodeJS" path="/nodejs.svg" alt="NodeJS" />
                      <SkillsCard title="GraphQL" path="/graphql.svg" alt="GraphQL" />
                      <SkillsCard title="Kafka" path="/kafka.svg" alt="Kafka" />
                      <SkillsCard title="PostgreSQL" path="/images/icon/postgres.png" alt="PostgreSQL" />
                      <SkillsCard title="MongoDB" path="/mongodb.svg" alt="MongoDB" />
                  </ul>
              </div>
              <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">DevOps</h3>
                  <ul className="flex flex-wrap gap-4">
                      <SkillsCard title="Docker" path="/docker.svg" alt="Docker" />
                      <SkillsCard title="Kubernetes" path="/images/icon/Kubernetes.png" alt="Kubernetes" />
                      <SkillsCard title="AWS" path="/images/icon/AWS.png" alt="AWS" />
                      <SkillsCard title="Ansible" path="/images/icon/Ansible.png" alt="Ansible" />
                      <SkillsCard title="Jenkins" path="/images/icon/jenkins.png" alt="Jenkins" />
                      <SkillsCard title="SST" path="/images/icon/SST.png" alt="SST" />
                      <SkillsCard title="DataDog" path="/Datadog.svg" alt="DataDog" />
                  </ul>
              </div>
              <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Cyber Skills</h3>
                  <ul className="flex flex-wrap gap-4">
                      <SkillsCard title="Social Engineering" path="/images/icon/se.png" alt="Social" />
                      <SkillsCard title="Penetration Testing" path="/images/icon/pentesting.png" alt="PenTest" />
                      <SkillsCard title="Exploit Development" path="/osed.svg" alt="Exploit" />
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

const AboutSection = () => {
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
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a Software Engineer with over half a decade in professional experience.
            Designing, developing and maintaining secure, scalable full-stack applications. I 
            am a part-time bug bounty hunter upskilling in Penetration testing, Malware Development, 
            and Reverse Engineering.
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

export default AboutSection;

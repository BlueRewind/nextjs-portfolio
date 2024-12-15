"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const recaptcha = useRef(null)

  const checkCaptcha = async (captchaValue) => {
    const captchaEndpoint = '/api/captchaVerify'
    const response = await fetch(captchaEndpoint, {
      method: 'POST',
      body: JSON.stringify({ captchaValue }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captchaValue = recaptcha.current.getValue()
    if (!captchaValue) {
      alert('Please verify the reCAPTCHA!')
    }

    const captchaValid = await checkCaptcha(captchaValue);
    
    if (captchaValid.success) {
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";

      const options = {
        method: "POST",
        body: JSONdata,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    }
  };

  console.log(process.env)

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Hey again!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
        Thanks for stopping by and exploring my portfolio. I&apos;m passionate about sharing my work 
        and continually improving my skills. If you have feedback, suggestions, or just want to 
        chat about tech, feel free to reach out—I&apos;d love to hear from you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            <ReCAPTCHA ref={recaptcha} sitekey={"mdjfghdjkgsdjhgdfkhjg"}/>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

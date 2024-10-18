"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import HeroSection from "@/app/components/about/about";
import SkillsList from "@/app/components/skills/skillsData";
import Portfolio from "@/app/components/projects/portafolio";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection /> 
      <SkillsList />
      <Portfolio /> 
      <Footer/>

    </>
  );
}

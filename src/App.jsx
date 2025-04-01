// import AnimatedGridPattern from "./components/ui/animated-grid-pattern";

import { Squares } from "./components/Squares";
import { SparklesText } from "./components/texts/sparkles-text";
import { Typewriter } from "./components/texts/type-writer";
import Skills from "./components/skills";
import { AnimatedText } from "./components/texts/AnimatedText";
import { useState, useEffect } from "react";
import Services from "./components/Services";

// Update import to use ShinyText
import ShinyText from "./components/texts/Hand-Writing-Text";
import Navbar from "./components/ui/Navbar";
import AnimatedCursor from "./components/cursor/AnimatedCursor";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';

const App = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false); // Move state here

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const texts = [
    "Frontend Developer",
    "Problem Solver",
    "Backend Developer",
    "Full Stack Developer",
    "Blockchain Enthusiast",
  ];

  useEffect(() => {
    // Start the animation immediately
    setAnimationStarted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills-section");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsSkillsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function SparklesTextDemo() {
    return <SparklesText text="Sujal Bhugul🧔🏻‍♂️" />;
  }

  // Replace HandWrittenTitleDemo with ServicesTitle
  // Replace ServicesTitle with new ShinyText implementation
  function ServicesTitle() {
    return (
      <ShinyText
        text="What I Do 🛠️"
        subtitle="Transforming ideas into reality through code. Here's how I can help bring your vision to life."
        textClassName="text-5xl md:text-6xl font-bold font-mono"
        gradientColors="linear-gradient(90deg, #fbbf24, #ec4899, #8b5cf6, #3b82f6)"
        gradientAnimationDuration={2}
        hoverEffect={true}
        className="mb-4" // Reduced from mb-8
      />
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-background relative">
        <AnimatedCursor />
        <Navbar />
        {/* Background Squares */}
        <div className="fixed inset-0 z-0">
          <Squares
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333"
            hoverFillColor="#222"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mt-24">
          <Routes>
            <Route path="/" element={
              <>
                {/* Hero section */}
                <div className="h-[600px]">
                  <div className="h-full flex justify-between items-center z-10 px-8">
                    {/* Left content */}
                    <div className="flex flex-col items-start">
                      {animationStarted && (
                        <>
                          <h1 className="text-xl mb-8 font-mono text-left text-white">
                            Hi👋 I'm <SparklesTextDemo />
                          </h1>
                          <p className="whitespace-pre-wrap">
                            <span className="text-3xl font-bold font-mono text-white">
                              {"A passionate "}
                            </span>
                            <Typewriter
                              text={texts}
                              speed={70}
                              className="text-amber-600 text-6xl font-bold"
                              waitTime={1500}
                              deleteSpeed={40}
                              cursorChar={"_"}
                            />
                          </p>

                          <h2 className="text-3xl font-bold text-left mt-15 text-amber-600 font-mono w-210">
                            {
                              " < Innovative Full-Stack Developer building seamless, scalable websolutions. Passionate about clean code and exceptional userexperiences >"
                            }
                          </h2>

                          {/* Animated Buttons */}
                          <div className="flex gap-4 mt-15">
                            <button className="px-6 py-3 bg-violet-600 text-white rounded-lg font-mono transform transition-all duration-300 hover:scale-105 hover:bg-amber-700 flex items-center gap-2 shadow-lg hover:shadow-amber-500/50">
                              <span>Get in Touch</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>

                            <button className="px-6 py-3 border-2 border-violet-600 text-white rounded-lg font-mono transform transition-all duration-300 font -bold hover:scale-105 hover:bg-violet-600 hover:text-white flex items-center gap-2 shadow-lg hover:shadow-violet-500/50">
                              <span>My Resume</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586L7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Right content - Profile Image */}
                    <div className="hidden md:block">
                      <div className="relative w-80 h-80">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-amber-500 to-violet-600 animate-spin-slow"></div>
                        <img
                          src="/your-photo.jpg" // Add your photo to public folder
                          alt="Profile"
                          className="absolute inset-[3px] rounded-full object-cover border-4 border-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Skills Section */}
                <div className="py-25 px-8" id="skills-section">
                  <h2 className="text-5xl font-bold text-left mb-4 font-mono">
                    <AnimatedText
                      text="What I Use to Build Stuff🧑🏻‍💻"
                      textClassName="text-5xl text-amber-600 font-mono text-left"
                      underlineGradient="from-amber-500 via-violet-500 to-amber-500"
                      underlineHeight="h-2"
                      underlineOffset="-bottom-4" // Changed from -bottom-2 to -bottom-4
                      duration={0.05}
                      delay={0.02}
                      className="items-start"
                      replay={isSkillsVisible}
                    />
                  </h2>
                  <Skills />
                </div>
                {/* Services Section */}
                <div id="services-section">
                  <ServicesTitle />
                  <Services />
                </div>
              </>
            } />
            <Route path="/contact" element={
              <div className="py-20 px-8">
                <h2 className="text-5xl font-bold text-left mb-12 font-mono">
                  <AnimatedText
                    text="Let's Connect 🤝"
                    textClassName="text-5xl text-amber-600 font-mono text-left"
                    underlineGradient="from-amber-500 via-violet-500 to-amber-500"
                    underlineHeight="h-2"
                    underlineOffset="-bottom-4"
                    duration={0.05}
                    delay={0.02}
                    className="items-start"
                  />
                </h2>
                <Contact />
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

{
  /* Add Footer at the bottom */
}

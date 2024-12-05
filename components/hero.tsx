import React from "react";
import Container from "./Layout/container";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Spotlight } from "./ui/Spotlight";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Container>
        <div className="flex flex-col items-center justify-center h-[65vh] gap-5">
          <div className="z-10 flex items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Made In AASTU</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-center w-[70%]">
            Connecting Ideas with Opportunities
          </h1>
          <p className="text-center text-sm md:text-xl mt-2 text-[#85868d] w-[50%]">
            Made in AASTU helps bring student projects to life by connecting
            them with mentors, resources, and funding.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <button
              onClick={scrollToProjects}
              className="flex gap-1 items-center btn-primary text-xl p-5"
            >
              Get Involved
              <ChevronRightIcon className="h-5" />
            </button>
            <button
              onClick={scrollToProjects}
              className="flex gap-1 items-center btn-primary text-xl p-5"
            >
              Discover Projects
              <ChevronRightIcon className="h-5" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

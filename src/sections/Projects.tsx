import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "../components/Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container ">
        <SectionHeader
          eyebrow=" REAL-WORLD RESULTS"
          title="Featured Projects"
          description="See how I transformed consepts into engaging digital experience"
        />

        <div className=" flex  flex-col  gap-20 mt-10 md:mt-20  ">
          {portfolioProjects.map((project, index) => (
            <Card
              className="  px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 sticky  "
              key={`${project.title}-${index}`}
              style={{
                top: `calc(64px + ${index * 40}px`,
              }}
            >
              <div className=" lg:grid  lg:grid-cols-2 lg:gap-16  ">
                <div className="lg:pb-16">
                  <div className="   gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text uppercase tracking-widest font-bold inline-flex ">
                    <span className="">{project.company}</span>
                    <span className="  "> &bull; </span>
                    <span>{project.year}</span>
                  </div>
                  <h2 className=" font-serif    text-2xl md:text-4xl mt-2 md:mt-4 ">
                    {project.title}
                  </h2>
                  <hr className=" border-t-2 border-white/5 mt-4 " />
                  <ul className="flex flex-col gap-4 md:mt-5 mt-4">
                    {project.results.map((result, index) => (
                      <>
                        <li
                          key={`${result.title}-${index}`}
                          className="flex gap-2 text-sm md:text-base text-white/50 "
                        >
                          <CheckIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      </>
                    ))}
                  </ul>
                  <a data-gtm-click="cta_button" className="   " href={project.link}>
                    <button 
                      type="button"
                      className=" text-gray-950  mt-8 bg-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold items-center justify-center gap-2 flex   "
                    >
                      <span>Visit Live Site</span>

                      <ArrowUp className="size-4 inline-flex" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    className=" mt-8  -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
                    src={project.image}
                    alt="Project Image"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

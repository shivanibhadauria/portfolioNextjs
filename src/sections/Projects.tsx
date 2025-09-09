import voltnext from "@/assets/images/voltnext.png";
import resumind from "@/assets/images/resumind.png";
import rewardpoint from "@/assets/images/rewardpoints.png";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "../components/Card";

const portfolioProjects = [
  {
    Name: "VOLT NEXT",
    year: "2025",
    title: "Bolt AI Clone – SaaS Landing Page",
    results: [
      { title: "Replicated modern SaaS UI inspired by Bolt AI" },
      { title: "Built with Next.js and Tailwind CSS for speed and scalability" },
      { title: "Responsive design optimized for desktop and mobile" },
    ],
    link: "https://voltnext-ai.vercel.app/",
    image: voltnext,
  },
  {
    Name: "RESUMIND",
    year: "2025",
    title: "AI Resume Analyzer – Smart Resume Review Toolage",
    results: [
      { title: "Compares resume with job descriptions to highlight missing skills." },
      { title: "Gives personalized improvement tips for better job match." },
      { title: "Built with Next.js and Puter for speed and scalability." },
    ],
    link: "https://ai-resume-analyzer-phi-nine.vercel.app/",
    image: resumind,
  },
  {
    Name: "Reward Points App",
    year: "2025",
    title: "Reward Points App – Customer Loyalty System",
    results: [
      { title: "Quickly reward customers with points." },
      { title: "Drives repeat engagement for shops." },
      { title: "Next.js + Express + MongoDB powered." },
    ],
    link: "https://whatsappmsgsender.vercel.app",
    image: rewardpoint,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="Featured-Projects" className="pb-16 lg:py-24">
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
                    <span className="">{project.Name}</span>
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
                    className=" mt-8  mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-3xl shadow-md shadow-gray-900/5  "
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

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import Grainimage from "@/assets/images/grain.jpg";

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
    <section className="pb-16">
      <div className="container ">
        <div className="flex justify-center">
          <p className=" bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center font-semibold uppercase tracking-widest  ">
            REAL-WORLD RESULTS
          </p>
        </div>
        <h2 className=" font-serif font-bold text-3xl mt-6 text-center ">
          Featured Projects
        </h2>
        <p className=" text-white/60 text-center mt-4 ">
          See how I transformed consepts into engaging digital experience
        </p>

        <div className=" flex  flex-col  gap-20 mt-10  ">
          {portfolioProjects.map((project) => (
            <div
              className=" bg-gray-800 rounded-3xl z-0  relative after:content-[''] after:absolute after:inset-0 after:z-10 overflow-hidden  after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20  px-8 pt-8 after:pointer-events-none "
              key={project.title}
            >
              <div
                className=" absolute -z-10 opacity-5 inset-0"
                style={{ backgroundImage: `url(${Grainimage.src})` }}
              ></div>
              <div className="   gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text uppercase tracking-widest font-bold inline-flex ">
                <span className="">{project.company}</span>
                <span className="  "> &bull; </span>
                <span>{project.year}</span>
              </div>
              <h2 className=" font-serif    text-2xl mt-2 ">{project.title}</h2>
              <hr className=" border-t-2 border-white/5 mt-4 " />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <>
                    <li className="flex gap-2 text-sm text-white/50 ">
                      <CheckIcon className="size-5" />
                      <span>{result.title}</span>
                    </li>
                  </>
                ))}
              </ul>
              <a className="   " href={project.link}>
                <button
                  type="button"
                  className=" text-gray-950  mt-8 bg-white h-12 w-full rounded-xl font-semibold items-center justify-center gap-2 flex   "
                >
                  <span>Visit Live Site</span>

                  <ArrowUp className="size-4 inline-flex" />
                </button>
              </a>
              <Image
                className=" mt-8  -mb-4 "
                src={project.image}
                alt="Project Image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import edvantaLogo from "../assets/images/edvanta.png";
import tenLogo from "../assets/images/tenlogo.png";
import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";
import Card from "@/components/Card";
import { Fragment } from "react";

const experiences = [
  {
    name: "Edvanta Technologies Pvt. Ltd.",
    position: "Fullstack Developer | 09/2024 – Present",
    text: "Contributed to Edvanta site development using Vue.js. Built an admin dashboard with React.js and Node.js for course and payment management. Participated in a company hackathon developing ProfileIQ, a tool to parse resumes and identify skill gaps. Currently working on a client project using Adobe AEM Edge Delivery Services with JavaScript, HTML, and CSS.",
    avatar: edvantaLogo, 
  },
  {
    name: "The Entrepreneurship Network",
    position: "Frontend Developer Intern | 06/2024 – 08/2024",
    text: "Designed and implemented a dynamic product catalog with React.js and interactive filtering, improving user engagement by 30%. Optimized performance using React Virtual DOM, reducing UI load time by 40%. Built a mobile-responsive UI using Tailwind CSS for seamless UX across devices.",
    avatar: tenLogo, // replace with your company logo import
  },
];

export const TestimonialsSection = () => {
  return (
    <div id="experiences" className=" py-16 lg:py-24  ">
      <div className=" container ">
        <SectionHeader
          eyebrow="My Experience"
          title="Where I've Made an Impact"
          description="From building scalable web applications to collaborating with cross-functional teams, here’s a snapshot of the roles and projects that have shaped my professional journey."
        />

        <div className=" mt-12 lg:mt-20 flex overflow-x-clip   mask-image-linear-gradient-right py-4 -my-4 ">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] ">
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {experiences.map((testimonial, index) => (
                    <Card
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300  "
                      key={`${testimonial.name}-${index}`}
                    >
                      <div className="flex gap-4 items-center ">
                        <div className=" bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0 size-14 ">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                           
                            className="max-h-full rounded-full"
                          />
                        </div>

                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className=" text-white/40 text-sm  ">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-sm md:text-base md:mt-6 ">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};

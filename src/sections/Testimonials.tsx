import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import nextjs from "@/assets/images/nextjs.png";
import js from "@/assets/images/js.png"
import react from "@/assets/images/react.png"
import ts from "@/assets/images/ts.png"
import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "JavaScript",
    position: "The backbone of modern web development",
    text: "JavaScript is a versatile, high-level programming language that powers dynamic and interactive websites. It allows developers to create responsive interfaces, handle events, and build full-featured web applications. I use JavaScript extensively to make websites fast, interactive, and user-friendly.",
    avatar: js,
  },
  {
    name: "React",
    position: "Building dynamic and interactive UIs",
    text: "React is a powerful JavaScript library for building component-based, responsive user interfaces. I use React to create fast, maintainable, and scalable front-end applications, making it easier to manage state and deliver seamless user experiences.",
    avatar: react,
  },
  {
    name: "TypeScript",
    position: "Writing safer and more reliable code",
    text: "TypeScript is a superset of JavaScript that adds static typing, making code easier to maintain and less prone to errors. I use TypeScript to catch bugs early, improve collaboration, and write scalable, robust applications.",
    avatar: ts,
  },
  {
    name: "Next.js",
    position: "The framework for modern web applications",
    text: "Next.js is a React framework for building fast, SEO-friendly, and server-rendered applications. I use Next.js to create scalable, high-performance websites with features like SSR, SSG, and API routes, ensuring an optimal user experience.",
    avatar: nextjs,
  },

];

export const TestimonialsSection = () => {
  return (
    <div className=" py-16 lg:py-24  ">
      <div className=" container ">
        <SectionHeader
          eyebrow="Technologies I Use"
          title="The tools shaping my development work"
          description="Don’t just see the code—explore the technologies I rely on to build modern, fast, and scalable applications."
        />

        <div className=" mt-12 lg:mt-20 flex overflow-x-clip   mask-image-linear-gradient-right py-4 -my-4 ">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] ">
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {testimonials.map((testimonial, index) => (
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

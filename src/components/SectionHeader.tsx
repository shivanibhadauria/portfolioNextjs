export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="">
        {" "}
        <div className="flex justify-center">
          <p className=" bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center font-semibold uppercase tracking-widest  ">
            {eyebrow}
          </p>
        </div>
        <h2 className=" font-serif font-bold text-3xl mt-6 text-center md:text-5xl ">
          {title}
        </h2>
        <p className=" text-white/60 text-center mt-4 md:text-lg lg:text-xl max-w-md mx-auto ">
          {description}
        </p>
      </div>
    </>
  );
};

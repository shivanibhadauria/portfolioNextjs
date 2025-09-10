export const Header = () => {
  return (
    <div className="flex items-center sticky justify-center  z-10 top-3 overflow-hidden  ">
      <nav className="flex  bg-white/10 p-0.5   gap-1 border border-white/10 rounded-full backdrop-blur max-[425px]:gap-0 max-[425px]:text-xs ">
        <a href="#" className=" nav-item ">
          Home
        </a>
        <a href="#Featured-Projects" className="nav-item">
          Project
        </a>
        <a
          href="#experiences"
          className="nav-item "
        >
          Experiences
        </a>
        <a href="#about-me" className="nav-item">
          About
        </a>
        
        <a
          href="#contact"
          className="nav-item bg-white hover:bg-white/70 hover:text-gray-900 text-gray-900 h-full "
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

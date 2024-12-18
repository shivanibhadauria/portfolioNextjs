export const Header = () => {
  return (
    <div className="flex items-center sticky justify-center  top-3  ">
      <nav className="flex  bg-white/10 p-0.5   gap-1 border border-white/10 rounded-full backdrop-blur ">
        <a href="#" className=" nav-item ">
          Home
        </a>
        <a href="#" className="nav-item">
          Project
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a
          href="#"
          className="nav-item bg-white hover:bg-white/70 hover:text-gray-900 text-gray-900 h-full "
        >
          Contect
        </a>
      </nav>
    </div>
  );
};

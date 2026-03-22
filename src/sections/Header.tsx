export const Header = () => {
  return (
    <div className="fixed top-3 z-10 flex w-full items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-red-700/15 bg-red-300/10 p-0.5 backdrop-blur">
        <a href="/" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item bg-rose-600 text-gray-900 hover:bg-rose-600/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};

export const Header = () => {
  return <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-red-700/15 rounded-full bg-red-300/10 backdrop-blur">
      <a href="" className="nav-item">Home</a>
      <a href="" className="nav-item">Projects</a>
      <a href="" className="nav-item">About</a>
      <a href="" className="nav-item bg-rose-600 text-gray-900 hover:bg-rose-600/70 hover:text-gray-900">Contact</a>
    </nav>
  </div>;
};

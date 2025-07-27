import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-purple-700 text-white shadow-md">
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">MoodTunes</h1>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:underline"
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}


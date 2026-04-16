import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../Pages/data/Navlink";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center text-3xl font-bold text-gray-800">
            <span className="font-bold text-black">Keen</span>
            <span className="font-semibold text-[#244D3F]">Keeper</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
}
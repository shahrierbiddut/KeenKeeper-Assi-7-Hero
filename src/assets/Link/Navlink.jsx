import { Link, useLocation } from "react-router-dom";

export default function Navlink({ item }) {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const Icon = item.icon;

  return (
    <Link
      to={item.path}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
        isActive
          ? "bg-green-600 text-white"
          : "text-gray-700 hover:text-green-600"
      }`}
    >
      <Icon size={18} />
      <span>{item.name}</span>
    </Link>
  );
}
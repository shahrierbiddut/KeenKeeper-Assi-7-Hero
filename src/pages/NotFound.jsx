import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-6">Page Not Found</p>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
        Back Home
      </Link>
    </div>
  );
}

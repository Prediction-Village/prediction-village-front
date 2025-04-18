import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <footer className="bg-stone-200 border-t flex justify-around p-2 z-10">
      <Link to="/" className="text-gray-600 hover:text-gray-800">
        Game
      </Link>
      <Link to="/market" className="text-gray-600 hover:text-gray-800">
        Market
      </Link>
    </footer>
  );
}

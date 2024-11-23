// components/MenuBar.tsx
import { useState } from "react";
import Link from "next/link";

const MenuBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-lg font-bold">My Website</div>

        {/* Menu Items */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="rounded p-2 text-white hover:bg-gray-600"
          >
            Menu
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 rounded bg-gray-800 p-4 shadow-lg">
              <ul>
                <li>
                  <Link
                    href="/"
                    className="block p-2 text-white hover:bg-gray-700"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block p-2 text-white hover:bg-gray-700"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block p-2 text-white hover:bg-gray-700"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block p-2 text-white hover:bg-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

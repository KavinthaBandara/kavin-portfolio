

import Link from "next/link";

const Navbar = () => {
  return (
<nav className="bg-white dark:bg-black shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold text-dark-600 hover:text-blue-500">
          MyPortfolio
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">
            Contact
          </Link>
          <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
};


export default Navbar;
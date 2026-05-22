"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();


  const isActive = (path) => 
    pathname === path 
      ? "text-green-600 font-bold border-b-2 border-green-600 pb-1" 
      : "text-gray-600 hover:text-green-600 font-medium pb-1 transition-colors";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       
        <Link href="/" className="text-2xl font-black text-green-600 tracking-tight">
          Qurbani<span className="text-orange-500">Hat</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/animals" className={isActive("/animals")}>All Animals</Link>
          <Link href="/my-profile" className={isActive("/my-profile")}>My Profile</Link>
        </div>

        <div className="flex items-center space-x-4">
          
       
          <div className="flex items-center space-x-2">
            <Link href="/login" className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition text-sm font-medium">
              Login
            </Link>
            <Link href="/register" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium shadow-sm">
              Register
            </Link>
          </div>

        </div>

      </div>
    </nav>
  );
}
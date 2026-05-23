"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; 
import toast from "react-hot-toast";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = authClient.useSession(); 
  const isActive = (path) => 
    pathname === path 
      ? "text-green-600 font-bold border-b-2 border-green-600 pb-1" 
      : "text-gray-600 hover:text-green-600 font-medium pb-1 transition-colors";

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-green-600 tracking-tight">
          Qurbani<span className="text-orange-500">Hat</span>
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/animals" className={isActive("/animals")}>All Animals</Link>
          {session && <Link href="/profile" className={isActive("/profile")}>Profile</Link>}
        </div>

        {/* Auth Buttons / User Avatar */}
        <div className="flex items-center space-x-4">
          {session ? (
            <div className="flex items-center space-x-4">
              <img 
                src={session.user.image || "/default-avatar.png"} 
                alt="Profile" 
                className="w-10 h-10 rounded-full border border-gray-200"
              />
              <button 
                onClick={handleLogout}
                className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg transition text-sm font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/login" className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition text-sm font-medium">
                Login
              </Link>
              <Link href="/register" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium shadow-sm">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
import { useNavigate } from "react-router-dom";

import {
  Bell,
  ChevronDown,
  FilePlus2,
  Menu,
  Moon,
  Search,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);

  // Change to true after authentication is implemented
  const isLoggedIn = false;

  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <button className="lg:hidden">
            <Menu size={22} />
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
              AI
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                DocuMind AI
              </h1>

              <p className="text-xs text-slate-500">
                Document Intelligence Platform
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search documents, reports, contracts..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            <FilePlus2 size={18} />
            Upload
          </button>

          <button className="rounded-xl p-2 hover:bg-slate-100">
            <Moon size={20} />
          </button>

          <button className="relative rounded-xl p-2 hover:bg-slate-100">
            <Bell size={20} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Profile Section */}
          <div className="relative">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100"
                >
                  <User size={20} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-48 rounded-xl border border-slate-200 bg-white shadow-lg">
                    <button
                        onClick={() => navigate("/login")}
                        className="block w-full px-4 py-3 text-left hover:bg-slate-50"
                        >
                        Sign In
                    </button>

                    <button
                        onClick={() => navigate("/signup")}
                        className="block w-full px-4 py-3 text-left hover:bg-slate-50"
                    >
                        Sign Up
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-slate-100"
                >
                  <img
                    src="https://i.pravatar.cc/100"
                    alt="profile"
                    className="h-10 w-10 rounded-full"
                  />

                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold">
                      Ashish
                    </p>

                    <p className="text-xs text-slate-500">
                      Administrator
                    </p>
                  </div>

                  <ChevronDown size={16} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-56 rounded-xl border border-slate-200 bg-white shadow-lg">
                    <button className="block w-full px-4 py-3 text-left hover:bg-slate-50">
                      Profile
                    </button>

                    <button className="block w-full px-4 py-3 text-left hover:bg-slate-50">
                      Settings
                    </button>

                    <button className="block w-full px-4 py-3 text-left hover:bg-slate-50">
                      Billing
                    </button>

                    <button className="block w-full px-4 py-3 text-left text-red-600 hover:bg-red-50">
                      Logout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

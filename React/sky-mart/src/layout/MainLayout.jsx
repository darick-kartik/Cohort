import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h2>

          <p className="text-slate-400 mt-2">
            Your One-Stop Shopping Destination
          </p>

          <p className="text-slate-500 text-sm mt-4">
            © {new Date().getFullYear()} SkyMart. All Rights Reserved.
          </p>

        </div>
      </footer>

    </div>
  );
};

export default MainLayout;
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NeoButton from "./NeoButton";
import { useCookies } from "next-client-cookies";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const cookies = useCookies();
  const router = useRouter();

  useEffect(() => {
    const tokenFromCookies = cookies.get("Authorization");
    setToken(tokenFromCookies);
  }, [cookies]);

  const handleLogout = () => {
    cookies.remove("Authorization");
    setToken(null);
    router.push("/");
  };

  const navItems = ["Shop Affiliates", "Fitting Room", "Product", "Company"];

  return (
    <header className="relative flex flex-wrap justify-between items-center p-4 bg-gradient-to-r from-yellow-200 via-purple-200 to-pink-200 border-4 border-black shadow-lg rounded-2xl mx-6">
      <Link href="/" className="flex items-center space-x-2 cursor-pointer">
        <span className="text-4xl">❄️</span>
        <span className="text-3xl text-black font-extrabold tracking-wide">
          FitMate
        </span>
      </Link>

      <button
        className="md:hidden text-3xl focus:outline-none text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-auto mt-4 md:mt-0`}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            href={
              item === "Fitting Room"
                ? "/fitting"
                : item === "Shop Affiliates"
                ? "/shop"
                : `/${item.toLowerCase().replace(" ", "-")}`
            }
            className="text-2xl font-black text-black border-b-2 border-red-500 hover:border-b-0 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
        {token ? (
          <NeoButton onClick={handleLogout} className="w-full md:w-auto">
            LOGOUT
          </NeoButton>
        ) : (
          <Link
            href="/login"
            className="w-full md:w-auto"
            onClick={() => setIsOpen(false)}
          >
            <NeoButton className="w-full">LOGIN</NeoButton>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

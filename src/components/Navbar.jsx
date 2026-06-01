import { Camera, Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <Camera className="h-7 w-7 text-emerald-400" />

          <h1 className="font-serif text-xl font-bold text-white">
            SK Photography
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider transition ${
                  isActive
                    ? "text-emerald-400"
                    : "text-white hover:text-emerald-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button className="bg-emerald-400 cursor-pointer text-black hover:bg-emerald-300">
            Book Session
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-black border-zinc-800 text-white"
          >
            <div className="mt-12 px-[15px] flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-lg transition ${
                      isActive
                        ? "text-emerald-400"
                        : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Button className="mt-4 bg-emerald-400 text-black hover:bg-emerald-300" onClick={() => setOpen(false)}>
                Book Session
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
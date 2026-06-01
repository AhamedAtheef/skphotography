import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 py-16">
        
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Camera className="h-7 w-7 text-emerald-400" />
              <h3 className="font-serif text-xl font-bold text-white">
                SK Photography
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400">
              Capturing timeless moments with creativity, elegance, and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li><a href="/">Home</a></li>
              <li><a href="gallery">Gallery</a></li>
              <li><a href="services">Services</a></li>
              <li><a href="about">About</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-white font-semibold">
              Services
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>Wedding Photography</li>
              <li>Portrait Sessions</li>
              <li>Event Coverage</li>
              <li>Commercial Shoots</li>
              <li>Drone Photography</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white font-semibold">
              Contact
            </h4>

            <div className="space-y-4 text-zinc-400">
              <div className="flex gap-3">
                <Mail size={18} />
                <span>hello@skphotography.com</span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+94 77 123 4567</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8">
          
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} SK Photography. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#">
              <FaInstagram className="h-5 w-5 text-zinc-400 hover:text-emerald-400" />
            </a>

            <a href="#">
              <FaFacebookF className="h-5 w-5 text-zinc-400 hover:text-emerald-400" />
            </a>

            <a href="#">
              <FaYoutube className="h-5 w-5 text-zinc-400 hover:text-emerald-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
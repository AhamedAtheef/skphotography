import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Camera,
  Globe,
  MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[6px] text-emerald-400 text-xs mb-6">
              Inquiries
            </p>

            <h1 className="font-serif text-3xl md:text-6xl leading-none mb-8">
              Let's Frame
              <br />
              Your Story
            </h1>

            <p className="text-zinc-400 text-lg max-w-lg mb-14">
              Seeking the extraordinary? Whether it's a private commission
              or global campaign, our lens is ready to capture your vision
              with cinematic precision.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-emerald-400" />
                </div>

                <div>
                  <h4 className="uppercase tracking-wider text-sm mb-1">
                    Email
                  </h4>
                  <p className="text-zinc-400">
                    studio@sk-photography.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-emerald-400" />
                </div>

                <div>
                  <h4 className="uppercase tracking-wider text-sm mb-1">
                    Phone
                  </h4>
                  <p className="text-zinc-400">
                    +94 77 123 4567
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                </div>

                <div>
                  <h4 className="uppercase tracking-wider text-sm mb-1">
                    Address
                  </h4>
                  <p className="text-zinc-400">
                    Colombo,
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-emerald-400" />
                </div>

                <div>
                  <h4 className="uppercase tracking-wider text-sm mb-1">
                    Hours
                  </h4>
                  <p className="text-zinc-400">
                    Mon–Fri: 10AM – 7PM
                    <br />
                    Sat: By Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 mt-16 pt-10">
              <h4 className="uppercase tracking-wider text-sm mb-5">
                Connect
              </h4>

              <div className="flex gap-4">
                <button className="w-12 h-12 border border-zinc-800 rounded flex items-center justify-center hover:border-emerald-400">
                  <FaInstagram className="h-5 w-5" />
                </button>

                <button className="w-12 h-12 border border-zinc-800 rounded flex items-center justify-center hover:border-emerald-400">
                  <Camera className="h-5 w-5" />
                </button>

                <button className="w-12 h-12 border border-zinc-800 rounded flex items-center justify-center hover:border-emerald-400">
                  <Globe className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="  p-8 md:p-12 rounded-sm">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm uppercase tracking-wider mb-2 block">
                    Full Name
                  </label>

                  <Input
                    placeholder="John Doe"
                    className="bg-black border-zinc-800"
                  />
                </div>

                <div>
                  <label className="text-sm uppercase tracking-wider mb-2 block">
                    Email Address
                  </label>

                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-black border-zinc-800"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="+94 77 123 4567"
                  className="bg-black border-zinc-800"
                />

                <select className="h-10 bg-black border border-zinc-800 rounded-md px-3">
                  <option>Wedding Photography</option>
                  <option>Portrait Session</option>
                  <option>Videography</option>
                  <option>Commercial</option>
                </select>
              </div>

              <Input
                type="date"
                className="bg-black border-zinc-800"
              />

              <Textarea
                rows={6}
                placeholder="Tell us about your creative vision..."
                className="bg-black border-zinc-800"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <Button className="bg-emerald-400 hover:bg-white cursor-pointer text-black h-12">
                  Send Inquiry
                </Button>

                <Button
                  variant="outline"
                  className="border-zinc-700 h-12 text-black hover:bg-emerald-400 hover:text-white cursor-pointer"
                >
                  <MessageSquare className="mr-2 h-4 w-4 text-black" />
                  WhatsApp Consultation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[500px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=Colombo,Sri%20Lanka&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />

        <div className="absolute bottom-10 mx-2 md:mx-0 md:left-10 bg-black/90 border border-zinc-800 p-8 lg:max-w-sm text-white">
          <h3 className="font-serif text-2xl text-emerald-400 mb-3">
            The Obsidian Studio
          </h3>

          <p className="text-zinc-400 mb-5">
            Visit our flagship location in the heart of Colombo.
          </p>

          <button className="text-emerald-400 uppercase tracking-widest text-sm cursor-pointer hover:text-emerald-300" 
          onClick={() => window.open("https://www.google.com/maps?q=Colombo,Sri%20Lanka&output=embed", "_blank")}>
            Get Directions →
          </button>
        </div>
      </div>
    </section>
  );
}
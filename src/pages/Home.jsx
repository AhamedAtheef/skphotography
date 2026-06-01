import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import {
  Heart,
  User,
  Calendar,
  Briefcase,
  Plane,
  Video,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding",
    description:
      "Eternalizing your most precious moments with cinematic elegance and candid authenticity.",
  },
  {
    icon: User,
    title: "Portrait",
    description:
      "Character-driven studio and lifestyle portraits that reveal the true essence of the subject.",
  },
  {
    icon: Calendar,
    title: "Event",
    description:
      "High-energy coverage for corporate events, galas, and private celebrations.",
  },
  {
    icon: Briefcase,
    title: "Commercial",
    description:
      "Premium product and brand photography tailored for high-end marketing campaigns.",
  },
  {
    icon: Plane,
    title: "Drone",
    description:
      "Breathtaking aerial perspectives captured with state-of-the-art 4K drone technology.",
  },
  {
    icon: Video,
    title: "Videography",
    description:
      "Cinematic film production that brings your narrative to life with motion and sound.",
  },
];

export default function PhotographyPage() {
  return (
    <main className="bg-black text-white">

      <section
        className="relative min-h-screen flex items-center px-6 lg:px-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/photographer.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl lg:text-7xl font-serif font-bold mb-4"
          >
            SK Photography
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-emerald-400 text-xl mb-6"
          >
            Capturing Stories Through Timeless Photography
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-400 mb-10"
          >
            Wedding • Portrait • Events • Commercial
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4"
          >
            <button className="bg-emerald-400 text-black px-8 py-3 rounded-md shadow-[0_0_30px_rgba(74,222,128,.3)] hover:shadow-[0_0_40px_rgba(74,222,128,.5)] transition-all">
              View Portfolio
            </button>

            <button className="border border-gray-700 px-8 py-3 rounded-md hover:border-emerald-400">
              Book a Session
            </button>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-y border-zinc-800"
      >
        <div className="container mx-auto py-16 px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl text-emerald-400 font-bold">
                500+
              </h3>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl text-emerald-400 font-bold">
                8+
              </h3>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-4xl text-emerald-400 font-bold">
                100+
              </h3>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl text-emerald-400 font-bold">
                10+
              </h3>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Awards
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Work */}
      <section className="py-24 px-6 lg:px-20">
        <p className="uppercase tracking-[5px] text-emerald-400 text-xs mb-3">
          The Collection
        </p>

        <h2 className="text-5xl font-serif mb-12">
          Featured Work
        </h2>

        <div className="grid lg:grid-cols-3  gap-6">
          {/* Large Wedding Image */}
          <div className="lg:col-span-2 overflow-hidden rounded-lg">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="/bg.png"
              alt=""
              className="w-full h-[250px] md:h-[400px] lg:h-[380px] xl:h-[500px] 2xl:h-[650px]  object-cover"
            />
          </div>

          {/* Portrait Image */}
          <div className="overflow-hidden rounded-lg">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="/girl.png"
              alt=""
              className="w-full h-[460px] md:h-[650px] lg:h-[380px] xl:h-[500px] 2xl:h-[650px] md:object-contain lg:object-cover "
            />
          </div>

          {/* Studio Image */}
          <div className="overflow-hidden rounded-lg">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="/male.png"
              alt=""
              className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-cover"
            />
          </div>

          {/* Quote Card */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="h-full bg-zinc-950 border-zinc-800">
              <CardContent className="h-full flex flex-col justify-center p-10 lg:p-14">
                <blockquote className="text-2xl lg:text-4xl font-serif italic text-zinc-100 leading-tight mb-6">
                  "Every frame tells a story that words often fail to express."
                </blockquote>

                <p className="text-zinc-400 text-base lg:text-lg mb-8 max-w-2xl">
                  Our philosophy is built on the intersection of technical
                  precision and artistic intuition. We don't just take
                  pictures; we capture legacies.
                </p>

                <button className="text-emerald-400 font-semibold tracking-wide uppercase">
                  Explore Archive →
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 lg:px-20 bg-zinc-950">
        <p className="uppercase tracking-[5px] text-emerald-400 text-xs text-center mb-3">
          Services
        </p>

        <h2 className="text-5xl font-serif text-center mb-16">
          Crafting Visual Excellence
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >
                <Card className="bg-black border-zinc-800 hover:border-emerald-400 transition-all duration-300">
                  <CardContent className="p-8">
                    <ServiceIcon className="h-8 w-8 text-emerald-400 mb-5" />

                    <h3 className="text-2xl font-serif mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-32 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/studio-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready To Capture Your Story?
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-10">
            We are currently accepting bookings. Let's create something extraordinary together.
          </p>

          <button className="bg-emerald-400 text-black px-10 py-4 rounded-md font-medium hover:bg-emerald-300 shadow-[0_0_30px_rgba(74,222,128,.3)]">
            Start Your Journey
          </button>
        </div>
      </section>

    </main>
  );
}
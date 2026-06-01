import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding",
    price: "From $3,600",
    image: "/wedding-group-.jpg",
    description:
      "Eternalizing the sacred bonds of union with a cinematic perspective and editorial finesse.",
  },
  {
    title: "Portrait",
    price: "From $600",
    image: "/male.png",
    description:
      "Bespoke portraiture that captures the silent strength and character of the individual soul.",
  },
  {
    title: "Fashion",
    price: "From $1,200",
    image: "/fashion.jpg",
    description:
      "High-concept visual narratives for designers and brands seeking editorial distinction.",
  },
  {
    title: "Videography",
    price: "From $2,800",
    image: "/video.jpg",
    description:
      "Moving pictures that breathe. We provide high-end production value with professional grading.",
    wide: true,
  },
  {
    title: "Product",
    price: "From $500",
    image: "/product.jpg",
    description:
      "Masterful lighting and composition to elevate your brand's physical presence.",
  },
  {
    title: "Birth Day Portrait",
    price: "From $1,500",
    image: "/birthday.jpg",
    description:
      "Documenting prestige, leadership, and professional milestones with a polished presence.",
  },
  {
    title: "Drone",
    price: "From $800",
    image: "/drone.jpg",
    description:
      "Unparalleled aerial perspectives that capture the scale and majesty of your vision.",
  },
  {
    title: "Pre-Wedding",
    price: "From $1,200",
    image: "/bg.png",
    description:
      "Tailored conceptual shoots that celebrate the anticipation and beauty of your journey.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="uppercase tracking-[6px] text-emerald-400 text-xs mb-4">
            Excellence In Craft
          </p>

          <h2 className="text-5xl md:text-7xl font-serif mb-6">
            Curated Services
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Capturing the profound essence of moments through a cinematic lens.
            From private celebrations to commercial visions, we offer elite
            visual storytelling tailored to your prestige.
          </p>
        </div>
        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`group border cursor-pointer border-zinc-800 bg-[#050505] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-emerald-500/30 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] ${service.wide ? "lg:col-span-2" : ""
                }`}
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${service.wide ? "h-[320px]" : "h-[420px]"
                    }`}
                  onError={(e) => {
                    e.currentTarget.src = "/girl.png";
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between flex-wrap items-center mb-4">
                  <h3 className="text-4xl font-serif">
                    {service.title}
                  </h3>

                  <span className="text-emerald-400 text-sm font-medium">
                    {service.price}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Button
                  variant="outline"
                  className="w-full cursor-pointer border-emerald-900 text-emerald-400 hover:bg-emerald-500 hover:text-black"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA */}
        <div className="border-t border-zinc-800 mt-24 pt-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-5xl font-serif mb-3">
                Ready to start your project?
              </h3>

              <p className="text-zinc-400">
                Inquire about a custom package or a specific vision today.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap ">
              <Button className="bg-emerald-400 text-black hover:bg-emerald-300 px-10 cursor-pointer w-full xl:w-auto text-1xl ">
                Inquire Now
              </Button>

              <Button
                variant="outline"
                className="border-zinc-700 px-10 text-black cursor-pointer w-full xl:w-auto text-1xl"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
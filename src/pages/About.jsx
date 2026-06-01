import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const skills = [
  { name: "Wedding Photography", value: "98%" },
  { name: "Portrait Artistry", value: "95%" },
  { name: "Color Grading & Editing", value: "100%" },
  { name: "Cinematic Videography", value: "85%" },
  { name: "Drone Aerials", value: "90%" },
];

const timeline = [
  {
    year: "2018",
    title: "Started",
    description:
      "The genesis of SK Photography with a focus on local street life and candid portraits.",
  },
  {
    year: "2019",
    title: "First Wedding",
    description:
      "Defining a signature cinematic style for luxury weddings across the region.",
  },
  {
    year: "2022",
    title: "Expanded Services",
    description:
      "Launching studio editorial and high-fashion commercial divisions.",
  },
  {
    year: "2023",
    title: "Award Winner",
    description:
      "Recognized as the Visual Artist of the Year at the International Photo Expo.",
  },
  {
    year: "2026",
    title: "500+ Projects",
    description:
      "Continuing the legacy with a global portfolio and cutting-edge visual tech.",
  },
];

export default function AboutPage() {
  return (
    <section className="bg-black text-white">
      {/* Hero */}
      <div
        className="relative py-32 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: "url('/green bg.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="uppercase tracking-[6px] text-emerald-400 text-xs mb-6">
            Legacy In Frames
          </p>

          <h1 className="font-serif text-2xl md:text-5xl lg:text-7xl leading-tight mb-8">
            About SK Photography —
            <br />
            Creating Visual Stories
            <br />
            That Last Forever
          </h1>

          <div className="w-20 h-[2px] bg-emerald-400 mx-auto"></div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
             <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="/owner.png"
              alt=""
              className="w-full md:h-[750px]  xl:h-[820px] object-center border border-emerald-900"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-5xl mb-8">
              The Visionary Eye
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-6">
              Professional photographer with years of experience capturing
              unforgettable moments. My journey began with a simple film
              camera and an obsession with how light interacts with the human
              spirit.
            </p>

            <p className="text-zinc-500 leading-relaxed mb-10">
              I believe that photography isn't just about clicking a shutter.
              It's about anticipation, emotion, precision, and an unspoken
              connection between the subject and the lens.
            </p>

            <div className="flex gap-16">
              <div>
                <h3 className="text-emerald-400 text-2xl font-bold">
                  12+
                </h3>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Years Exp
                </p>
              </div>

              <div>
                <h3 className="text-emerald-400 text-2xl font-bold">
                  24
                </h3>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Global Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-zinc-950 py-24">
        <div className="container mx-auto px-6">
          <h3 className="text-center font-serif text-xl mb-16">
            Technical Mastery
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm uppercase tracking-wider mb-3">
                  <span>{skill.name}</span>
                  <span>{skill.value}</span>
                </div>

                <div className="h-[2px] bg-zinc-800">
                  <div
                    className="h-full bg-emerald-400"
                    style={{ width: skill.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-6 py-28">
        <h3 className="text-center font-serif text-xl mb-20">
          The Creative Evolution
        </h3>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-900 -translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex items-center mb-16 ${index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
                }`}
            >
              <div className="w-[45%]">
                <h4 className="text-emerald-400 font-medium mb-2">
                  {item.title}
                </h4>

                <p className="text-zinc-400 text-sm">
                  {item.description}
                </p>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 border border-emerald-800 bg-black px-4 py-3 text-xs">
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pb-32">
        <div className="max-w-2xl mx-auto border border-zinc-800 p-12 text-center">
          <h3 className="font-serif text-2xl mb-4">
            Ready to create history?
          </h3>

          <p className="text-zinc-400 mb-8">
            Let's discuss how we can bring your next vision to life
            with cinematic perfection.
          </p>

          <Button className="bg-emerald-400 text-black hover:bg-emerald-300 px-10">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
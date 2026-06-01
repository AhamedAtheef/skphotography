import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    id: 1,
    src: "/bg.png",
    height: "h-[220px]",
  },
  {
    id: 2,
    src: "/product.jpg",
    height: "h-[220px]",
  },
  {
    id: 3,
    src: "male.png",
    height: "h-[360px]",
  },
  {
    id: 4,
    src: "/birthday.jpg",
    height: "h-[520px]",
  },
  {
    id: 5,
    src: "/wedding-group-.jpg",
    height: "h-[360px]",
  },
  {
    id: 6,
    src: "/drone.jpg",
    height: "h-[420px]",
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  const rows = [];
  for (let i = 0; i < images.length; i += 4) {
    rows.push(images.slice(i, i + 4));
  }
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-10">
          Curated Works
        </h1>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-md cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-[220px] object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="hidden lg:block space-y-4">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-4 overflow-hidden h-[520px]"
            >
              {row.map((image, index) => {
                const uniqueIndex = rowIndex * 4 + index;

                return (
                  <div
                    key={image.id}
                    onMouseEnter={() => setActiveImage(uniqueIndex)}
                    onMouseLeave={() => setActiveImage(null)}
                    className="relative overflow-hidden rounded-md cursor-pointer transition-all duration-700 ease-out min-w-0"
                    style={{
                      flex:
                        activeImage === uniqueIndex
                          ? "2.5"
                          : activeImage !== null
                            ? "0.8"
                            : "1",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-20">
          <Button
            variant="outline"
            className="border-zinc-700 bg-transparent px-10 py-6 text-white hover:bg-zinc-900"
          >
            Explore More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={images[selectedImage].src}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 text-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
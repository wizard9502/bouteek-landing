import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function AppShowcase() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/app-dashboard-1.jpg",
      titleFr: "Tableau de Bord Complet",
      titleEn: "Complete Dashboard",
      descFr: "Suivez vos ventes, revenus et performances en temps réel",
      descEn: "Track your sales, revenue, and performance in real-time",
    },
    {
      image: "/app-dashboard-2.png",
      titleFr: "Gestion des Commandes",
      titleEn: "Order Management",
      descFr: "Gérez toutes vos commandes en un seul endroit",
      descEn: "Manage all your orders in one place",
    },
    {
      image: "/app-inventory.jpg",
      titleFr: "Gestion des Stocks",
      titleEn: "Inventory Management",
      descFr: "Contrôlez votre inventaire et vos produits facilement",
      descEn: "Control your inventory and products easily",
    },
    {
      image: "/app-analytics.png",
      titleFr: "Analyses Avancées",
      titleEn: "Advanced Analytics",
      descFr: "Obtenez des insights détaillés sur votre activité",
      descEn: "Get detailed insights about your business",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];
  const title = language === "fr" ? slide.titleFr : slide.titleEn;
  const desc = language === "fr" ? slide.descFr : slide.descEn;

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">
            {language === "fr" ? "Découvrez l'Application" : "Discover the App"}
          </h2>
          <p className="text-lg text-gray-600">
            {language === "fr"
              ? "Une interface intuitive pour gérer votre boutique en ligne"
              : "An intuitive interface to manage your online store"}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-green-200">
            {/* Image Container */}
            <div className="relative h-96 md:h-[500px] mb-8 overflow-hidden rounded-2xl">
              <img
                src={slide.image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                {title}
              </h3>
              <p className="text-gray-600 text-lg">{desc}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-green-600 hover:bg-green-700 text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-green-600 w-8"
                        : "bg-gray-300 w-3 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-green-600 hover:bg-green-700 text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-6 text-gray-500 text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

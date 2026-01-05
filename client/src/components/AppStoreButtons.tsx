import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AppStoreButtons() {
  const { language } = useLanguage();
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 3000);
  };

  return (
    <>
      <div className="flex gap-4 pt-4">
        {/* Apple App Store Button */}
        <button
          onClick={handleClick}
          className="flex items-center gap-3 px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-200 font-semibold group"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17.12 3.5 15.17 3.5 13.08c0-4.09 2.33-6.3 4.61-6.3 1.23 0 2.32.92 3.12.92.8 0 2.12-.88 3.47-.77.57.02 2.2.22 3.24 1.67-.1.06-1.92 1.11-1.92 3.31 0 2.33 2.04 3.1 2.07 3.1.03.01-.21.13-.67.13-.98 0-1.88-.46-2.4-.46-.59 0-1.38.46-2.39.46-.63 0-1.52-.12-2.29-.44zm-9.74-9.3c.12-1.13.64-2.7 1.91-3.16.54-.23 1.1-.35 1.66-.35.59 0 1.18.13 1.76.4 1.29.57 2.01 1.9 1.42 3.22-.12.32-.37.64-.74.89-.52.37-1.22.56-1.9.56-.7 0-1.41-.2-1.96-.56-.52-.33-.88-.77-.99-1.22z" />
          </svg>
          <span>App Store</span>
        </button>

        {/* Google Play Store Button */}
        <button
          onClick={handleClick}
          className="flex items-center gap-3 px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-200 font-semibold group"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3.609 1.814L13.798 12 3.609 22.186A1.5 1.5 0 0 0 3 23.5v-23a1.5 1.5 0 0 0 .609-1.686zm16.959 8.186l-6.956-4.009L7.65 12l5.962 6.009 6.956-4.009a1.5 1.5 0 0 0 0-2.618z" />
          </svg>
          <span>Google Play</span>
        </button>
      </div>

      {/* Coming Soon Overlay */}
      {showComingSoon && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 pointer-events-none">
          <div className="bg-white rounded-xl p-8 text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <p className="text-2xl font-bold text-black mb-2">
              {language === "fr" ? "Bientôt disponible" : "Coming Soon"}
            </p>
            <p className="text-gray-600">
              {language === "fr"
                ? "L'application mobile sera bientôt disponible"
                : "The mobile app will be available soon"}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

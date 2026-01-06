import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function MerchantMetrics() {
  const { language } = useLanguage();
  const t_obj = translations[language];

  // Mock data - will be replaced with real API data later
  const metrics = [
    {
      value: "2,400+",
      label: language === "fr" ? "Marchands Actifs" : "Active Merchants",
      icon: "👥"
    },
    {
      value: "15.2M",
      label: language === "fr" ? "XOF Traités" : "XOF Processed",
      icon: "💰"
    },
    {
      value: "89K+",
      label: language === "fr" ? "Commandes" : "Orders",
      icon: "📦"
    },
    {
      value: "98%",
      label: language === "fr" ? "Satisfaction" : "Satisfaction",
      icon: "⭐"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#00D632]/10 to-black/50 border-t border-b border-gray-800">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00D632] mb-2">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingUp, DollarSign } from "lucide-react";

export default function SubscriptionOptimizer() {
  const { language } = useLanguage();
  const [monthlyRevenue, setMonthlyRevenue] = useState(500000);
  const [ordersPerMonth, setOrdersPerMonth] = useState(100);

  const plans = [
    { name: language === "fr" ? "Starter" : "Starter", price: 1500, color: "bg-gray-100" },
    { name: language === "fr" ? "Launch" : "Launch", price: 5000, color: "bg-blue-50" },
    { name: language === "fr" ? "Growth" : "Growth", price: 12500, color: "bg-purple-50" },
    { name: language === "fr" ? "Pro" : "Pro", price: 20000, color: "bg-green-50" }
  ];

  const calculateROI = (planPrice: number) => {
    const monthlyFeePercentage = (planPrice / monthlyRevenue) * 100;
    const costPerOrder = planPrice / Math.max(ordersPerMonth, 1);
    const roi = ((monthlyRevenue - planPrice) / planPrice) * 100;
    return { monthlyFeePercentage, costPerOrder, roi };
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XOF",
      minimumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-black mb-2">
          {language === "fr" ? "Optimiseur d'Abonnement" : "Subscription Optimizer"}
        </h3>
        <p className="text-gray-600">
          {language === "fr"
            ? "Découvrez le plan idéal pour votre business"
            : "Find the perfect plan for your business"}
        </p>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            {language === "fr" ? "Revenu Mensuel Estimé" : "Estimated Monthly Revenue"}
          </label>
          <div className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-lg p-3">
            <DollarSign size={20} className="text-[#00D632]" />
            <input
              type="range"
              min="100000"
              max="5000000"
              step="100000"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00D632]"
            />
          </div>
          <p className="text-lg font-bold text-black mt-2">{formatCurrency(monthlyRevenue)}</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            {language === "fr" ? "Commandes par Mois" : "Orders per Month"}
          </label>
          <div className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-lg p-3">
            <TrendingUp size={20} className="text-[#00D632]" />
            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={ordersPerMonth}
              onChange={(e) => setOrdersPerMonth(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00D632]"
            />
          </div>
          <p className="text-lg font-bold text-black mt-2">{ordersPerMonth} {language === "fr" ? "commandes" : "orders"}</p>
        </div>
      </div>

      {/* Plans Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((plan, idx) => {
          const { monthlyFeePercentage, costPerOrder, roi } = calculateROI(plan.price);
          return (
            <div key={idx} className={`${plan.color} rounded-xl p-6 border border-gray-200 hover:border-[#00D632] transition-all duration-300`}>
              <h4 className="font-bold text-black mb-4">{plan.name}</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">{language === "fr" ? "Prix" : "Price"}</p>
                  <p className="text-lg font-bold text-black">{formatCurrency(plan.price)}</p>
                </div>
                <div className="h-px bg-gray-300"></div>
                <div>
                  <p className="text-gray-600">{language === "fr" ? "Coût par Commande" : "Cost per Order"}</p>
                  <p className="text-lg font-bold text-[#00D632]">{formatCurrency(costPerOrder)}</p>
                </div>
                <div>
                  <p className="text-gray-600">{language === "fr" ? "% du Revenu" : "% of Revenue"}</p>
                  <p className={`text-lg font-bold ${monthlyFeePercentage < 5 ? "text-green-600" : monthlyFeePercentage < 10 ? "text-blue-600" : "text-orange-600"}`}>
                    {monthlyFeePercentage.toFixed(2)}%
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">{language === "fr" ? "ROI Estimé" : "Estimated ROI"}</p>
                  <p className="text-lg font-bold text-[#00D632]">{roi.toFixed(0)}%</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-[#00D632]/10 border border-[#00D632] rounded-lg">
        <p className="text-sm text-gray-700">
          {language === "fr"
            ? "💡 Conseil : Plus votre revenu est élevé, plus le ROI de votre plan augmente. Commencez par le plan qui correspond à votre volume actuel et évoluez au fur et à mesure."
            : "💡 Tip: The higher your revenue, the better your ROI. Start with the plan that matches your current volume and scale up as you grow."}
        </p>
      </div>
    </div>
  );
}

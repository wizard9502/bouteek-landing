import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";

export default function Resources() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const resources = {
    fr: {
      title: "Centre de Ressources Marchands",
      subtitle: "Guides, tutoriels et outils pour vous aider à réussir avec Bouteek",
      categories: {
        all: "Tous",
        guides: "Guides",
        tutorials: "Tutoriels",
        templates: "Modèles",
        tools: "Outils"
      },
      items: [
        {
          category: "guides",
          title: "Guide de Démarrage Bouteek",
          description: "Tout ce que vous devez savoir pour configurer votre boutique en 15 minutes",
          downloadUrl: "#",
          icon: "📘"
        },
        {
          category: "guides",
          title: "Optimiser vos Ventes en Ligne",
          description: "Stratégies éprouvées pour augmenter vos revenus et attirer plus de clients",
          downloadUrl: "#",
          icon: "📊"
        },
        {
          category: "tutorials",
          title: "Accepter les Paiements Wave",
          description: "Guide étape par étape pour configurer Wave comme méthode de paiement",
          downloadUrl: "#",
          icon: "💳"
        },
        {
          category: "tutorials",
          title: "Gérer votre Inventaire",
          description: "Meilleures pratiques pour suivre vos stocks et éviter les ruptures",
          downloadUrl: "#",
          icon: "📦"
        },
        {
          category: "templates",
          title: "Modèles de Description Produit",
          description: "Modèles prêts à l'emploi pour décrire vos produits de manière professionnelle",
          downloadUrl: "#",
          icon: "✍️"
        },
        {
          category: "templates",
          title: "Modèles d'Email Marketing",
          description: "Templates pour promouvoir vos produits et fidéliser vos clients",
          downloadUrl: "#",
          icon: "📧"
        },
        {
          category: "tools",
          title: "Calculateur de Marge Bénéficiaire",
          description: "Outil pour calculer vos marges et fixer vos prix correctement",
          downloadUrl: "#",
          icon: "🧮"
        },
        {
          category: "tools",
          title: "Checklist de Lancement",
          description: "Checklist complète pour préparer le lancement de votre boutique",
          downloadUrl: "#",
          icon: "✅"
        }
      ]
    },
    en: {
      title: "Merchant Resource Center",
      subtitle: "Guides, tutorials and tools to help you succeed with Bouteek",
      categories: {
        all: "All",
        guides: "Guides",
        tutorials: "Tutorials",
        templates: "Templates",
        tools: "Tools"
      },
      items: [
        {
          category: "guides",
          title: "Bouteek Getting Started Guide",
          description: "Everything you need to know to set up your store in 15 minutes",
          downloadUrl: "#",
          icon: "📘"
        },
        {
          category: "guides",
          title: "Optimize Your Online Sales",
          description: "Proven strategies to increase your revenue and attract more customers",
          downloadUrl: "#",
          icon: "📊"
        },
        {
          category: "tutorials",
          title: "Accept Wave Payments",
          description: "Step-by-step guide to set up Wave as your payment method",
          downloadUrl: "#",
          icon: "💳"
        },
        {
          category: "tutorials",
          title: "Manage Your Inventory",
          description: "Best practices for tracking your stock and avoiding shortages",
          downloadUrl: "#",
          icon: "📦"
        },
        {
          category: "templates",
          title: "Product Description Templates",
          description: "Ready-to-use templates to describe your products professionally",
          downloadUrl: "#",
          icon: "✍️"
        },
        {
          category: "templates",
          title: "Email Marketing Templates",
          description: "Templates to promote your products and retain your customers",
          downloadUrl: "#",
          icon: "📧"
        },
        {
          category: "tools",
          title: "Profit Margin Calculator",
          description: "Tool to calculate your margins and set your prices correctly",
          downloadUrl: "#",
          icon: "🧮"
        },
        {
          category: "tools",
          title: "Launch Checklist",
          description: "Complete checklist to prepare for your store launch",
          downloadUrl: "#",
          icon: "✅"
        }
      ]
    }
  };

  const t = resources[language];
  const filteredItems = selectedCategory === "all" 
    ? t.items 
    : t.items.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#00D632]/20 to-black/50 py-20 border-b border-gray-800">
        <div className="container text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {Object.entries(t.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === key
                  ? "bg-[#00D632] text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#00D632] transition-all hover:shadow-lg hover:shadow-[#00D632]/20"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-6">{item.description}</p>
              <a
                href={item.downloadUrl}
                className="inline-flex items-center gap-2 text-[#00D632] font-semibold hover:gap-3 transition-all"
              >
                <Download size={18} />
                {language === "fr" ? "Télécharger" : "Download"}
              </a>
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-16 bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">
            {language === "fr"
              ? "Plus de ressources arrivent bientôt. Inscrivez-vous à notre newsletter pour être notifié."
              : "More resources coming soon. Subscribe to our newsletter to be notified."}
          </p>
          <button className="bg-[#00D632] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00B829] transition-all">
            {language === "fr" ? "S'abonner" : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
}

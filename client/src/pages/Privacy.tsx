import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Eye } from "lucide-react";
import { useLocation } from "wouter";

export default function Privacy() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour: Janvier 2025",
      sections: [
        {
          title: "1. Informations que nous collectons",
          content: "Nous collectons les informations que vous nous fournissez directement (nom, email, numéro de téléphone, informations bancaires) et les informations collectées automatiquement lors de votre utilisation de la plateforme (adresses IP, cookies, données d'utilisation). Nous collectons également des données sur vos transactions et votre activité commerciale."
        },
        {
          title: "2. Comment nous utilisons vos informations",
          content: "Nous utilisons vos informations pour fournir et améliorer nos services, traiter les transactions, envoyer des communications importantes, détecter et prévenir la fraude, et respecter les obligations légales. Nous n'utilisons jamais vos informations à des fins de marketing sans votre consentement explicite."
        },
        {
          title: "3. Partage des informations",
          content: "Nous partageons vos informations uniquement avec les partenaires de paiement (Wave, Orange Money) pour traiter les transactions. Nous ne vendons jamais vos données personnelles à des tiers. Nous pouvons partager des informations agrégées et anonymisées à des fins analytiques."
        },
        {
          title: "4. Sécurité des données",
          content: "Nous mettons en œuvre des mesures de sécurité techniques, administratives et physiques pour protéger vos informations. Cependant, aucune transmission de données sur Internet n'est 100% sécurisée. Vous êtes responsable de la confidentialité de vos identifiants de connexion."
        },
        {
          title: "5. Conservation des données",
          content: "Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services et respecter les obligations légales. Vous pouvez demander la suppression de vos données à tout moment, sous réserve des exigences légales de conservation."
        },
        {
          title: "6. Vos droits",
          content: "Vous avez le droit d'accéder, de corriger et de supprimer vos données personnelles. Vous pouvez également vous opposer au traitement de vos données. Pour exercer ces droits, contactez-nous à privacy@bouteek.com."
        },
        {
          title: "7. Modifications de cette politique",
          content: "Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications importantes seront communiquées par email. Votre utilisation continue de la plateforme après les modifications constitue votre acceptation de la nouvelle politique."
        },
        {
          title: "8. Nous contacter",
          content: "Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter à privacy@bouteek.com."
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 2025",
      sections: [
        {
          title: "1. Information We Collect",
          content: "We collect information you provide directly (name, email, phone number, banking information) and information collected automatically when using our platform (IP addresses, cookies, usage data). We also collect data about your transactions and business activity."
        },
        {
          title: "2. How We Use Your Information",
          content: "We use your information to provide and improve our services, process transactions, send important communications, detect and prevent fraud, and comply with legal obligations. We never use your information for marketing purposes without your explicit consent."
        },
        {
          title: "3. Information Sharing",
          content: "We share your information only with payment partners (Wave, Orange Money) to process transactions. We never sell your personal data to third parties. We may share aggregated and anonymized information for analytical purposes."
        },
        {
          title: "4. Data Security",
          content: "We implement technical, administrative, and physical security measures to protect your information. However, no data transmission over the Internet is 100% secure. You are responsible for keeping your login credentials confidential."
        },
        {
          title: "5. Data Retention",
          content: "We retain your personal data as long as necessary to provide our services and comply with legal obligations. You can request deletion of your data at any time, subject to legal retention requirements."
        },
        {
          title: "6. Your Rights",
          content: "You have the right to access, correct, and delete your personal data. You can also object to processing of your data. To exercise these rights, contact us at privacy@bouteek.com."
        },
        {
          title: "7. Changes to This Policy",
          content: "We may modify this privacy policy at any time. Significant changes will be communicated by email. Your continued use of the platform after modifications constitutes your acceptance of the new policy."
        },
        {
          title: "8. Contact Us",
          content: "If you have questions about this privacy policy, please contact us at privacy@bouteek.com."
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src="/bouteek-logo.jpg" alt="Bouteek" className="h-10 w-10 rounded-lg" />
            <span className="text-2xl font-bold text-black">Bouteek</span>
          </div>
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-black hover:text-[#00D632] transition-colors"
          >
            <ArrowLeft size={20} />
            {language === "fr" ? "Retour" : "Back"}
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Eye size={40} className="text-[#00D632]" />
              <h1 className="text-5xl font-bold text-black">{currentContent.title}</h1>
            </div>
            <p className="text-gray-600">{currentContent.lastUpdated}</p>
          </div>

          <div className="space-y-8">
            {currentContent.sections.map((section, idx) => (
              <div key={idx} className="bg-[#f5f5f5] rounded-xl p-8 border-l-4 border-[#00D632]">
                <h2 className="text-xl font-bold text-black mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-12 border-t border-gray-800">
        <div className="container">
          <div className="text-center">
            <p className="text-sm">&copy; 2025 Bouteek. {language === "fr" ? "Tous droits réservés." : "All rights reserved."}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

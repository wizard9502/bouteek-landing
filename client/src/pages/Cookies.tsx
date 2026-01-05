import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Cookie } from "lucide-react";
import { useLocation } from "wouter";

export default function Cookies() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const content = {
    fr: {
      title: "Politique sur les Cookies",
      lastUpdated: "Dernière mise à jour: Janvier 2025",
      sections: [
        {
          title: "1. Qu'est-ce qu'un Cookie?",
          content: "Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, téléphone, tablette) lorsque vous visitez un site web. Les cookies permettent au site de reconnaître votre appareil lors de visites ultérieures et d'améliorer votre expérience utilisateur."
        },
        {
          title: "2. Types de Cookies que nous utilisons",
          content: "Nous utilisons des cookies essentiels pour le fonctionnement de la plateforme (authentification, sécurité). Nous utilisons également des cookies analytiques pour comprendre comment vous utilisez Bouteek et améliorer nos services. Enfin, nous utilisons des cookies de préférence pour mémoriser vos choix (langue, thème)."
        },
        {
          title: "3. Cookies Essentiels",
          content: "Ces cookies sont nécessaires pour que Bouteek fonctionne correctement. Ils permettent l'authentification, la gestion des sessions, et la sécurité de votre compte. Vous ne pouvez pas désactiver ces cookies sans affecter le fonctionnement de la plateforme."
        },
        {
          title: "4. Cookies Analytiques",
          content: "Nous utilisons des outils d'analyse (comme Umami Analytics) pour collecter des données sur l'utilisation de la plateforme. Ces données nous aident à comprendre comment les utilisateurs interagissent avec Bouteek et à identifier les domaines à améliorer. Les données analytiques sont anonymisées et ne peuvent pas être utilisées pour vous identifier personnellement."
        },
        {
          title: "5. Cookies de Préférence",
          content: "Ces cookies mémorisent vos préférences, comme la langue choisie (français ou anglais) et d'autres paramètres de personnalisation. Cela améliore votre expérience en vous évitant de réindiquer vos préférences à chaque visite."
        },
        {
          title: "6. Gestion des Cookies",
          content: "Vous pouvez contrôler les cookies via les paramètres de votre navigateur. La plupart des navigateurs vous permettent de refuser les cookies ou de recevoir une alerte avant qu'un cookie ne soit stocké. Cependant, le refus des cookies essentiels peut affecter le fonctionnement de Bouteek."
        },
        {
          title: "7. Cookies de Tiers",
          content: "Nous pouvons utiliser des services tiers (partenaires de paiement, fournisseurs d'analyse) qui peuvent placer leurs propres cookies. Nous ne contrôlons pas ces cookies tiers. Consultez la politique de confidentialité de ces services pour plus d'informations."
        },
        {
          title: "8. Modifications de cette Politique",
          content: "Nous pouvons mettre à jour cette politique sur les cookies à tout moment. Les modifications importantes seront communiquées via la plateforme. Votre utilisation continue de Bouteek après les modifications constitue votre acceptation de la nouvelle politique."
        },
        {
          title: "9. Nous Contacter",
          content: "Si vous avez des questions sur cette politique sur les cookies, veuillez nous contacter à privacy@bouteek.com."
        }
      ]
    },
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last Updated: January 2025",
      sections: [
        {
          title: "1. What is a Cookie?",
          content: "A cookie is a small text file stored on your device (computer, phone, tablet) when you visit a website. Cookies allow the website to recognize your device on subsequent visits and improve your user experience."
        },
        {
          title: "2. Types of Cookies We Use",
          content: "We use essential cookies for platform functionality (authentication, security). We also use analytical cookies to understand how you use Bouteek and improve our services. Finally, we use preference cookies to remember your choices (language, theme)."
        },
        {
          title: "3. Essential Cookies",
          content: "These cookies are necessary for Bouteek to function properly. They enable authentication, session management, and account security. You cannot disable these cookies without affecting platform functionality."
        },
        {
          title: "4. Analytical Cookies",
          content: "We use analytics tools (such as Umami Analytics) to collect data about platform usage. This data helps us understand how users interact with Bouteek and identify areas for improvement. Analytical data is anonymized and cannot be used to identify you personally."
        },
        {
          title: "5. Preference Cookies",
          content: "These cookies remember your preferences, such as your chosen language (French or English) and other personalization settings. This improves your experience by avoiding the need to re-enter your preferences on each visit."
        },
        {
          title: "6. Cookie Management",
          content: "You can control cookies through your browser settings. Most browsers allow you to refuse cookies or receive an alert before a cookie is stored. However, refusing essential cookies may affect Bouteek's functionality."
        },
        {
          title: "7. Third-Party Cookies",
          content: "We may use third-party services (payment partners, analytics providers) that may place their own cookies. We do not control these third-party cookies. Please consult the privacy policy of these services for more information."
        },
        {
          title: "8. Changes to This Policy",
          content: "We may update this cookie policy at any time. Significant changes will be communicated via the platform. Your continued use of Bouteek after modifications constitutes your acceptance of the new policy."
        },
        {
          title: "9. Contact Us",
          content: "If you have questions about this cookie policy, please contact us at privacy@bouteek.com."
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
              <Cookie size={40} className="text-[#00D632]" />
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

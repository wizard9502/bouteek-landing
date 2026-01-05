import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, FileText } from "lucide-react";
import { useLocation } from "wouter";

export default function Terms() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const content = {
    fr: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour: Janvier 2025",
      sections: [
        {
          title: "1. Propriété des Fonds",
          content: "Bouteek est une plateforme de mise en relation entre marchands et clients. L'argent des ventes est versé directement du client au marchand via son compte mobile money (Wave ou Orange Money). Bouteek ne détient jamais l'argent des ventes et n'est pas responsable des litiges financiers entre le client et le marchand. Les marchands sont entièrement responsables de la gestion de leurs transactions et du service client."
        },
        {
          title: "2. Système de Bouteek Cash",
          content: "Pour utiliser les services de vente sur Bouteek, le marchand doit maintenir un solde positif de \"Bouteek Cash\". À chaque transaction validée sur la plateforme, Bouteek prélève sa commission de service sur ce solde selon le plan d'abonnement choisi. En cas de solde épuisé, la boutique est temporairement mise en pause jusqu'au rechargement du solde. Le marchand est responsable du maintien d'un solde suffisant pour continuer ses opérations."
        },
        {
          title: "3. Responsabilité des Produits",
          content: "Le marchand est seul responsable de la légalité, de la qualité et de la livraison des produits mis en vente sur sa boutique. Bouteek ne peut être tenu responsable de la qualité, de l'authenticité ou de la conformité légale des produits vendus. La vente de produits interdits (contrefaçons illégales, substances prohibées, articles dangereux, etc.) entraînera la fermeture immédiate du compte sans remboursement du solde restant de Bouteek Cash."
        },
        {
          title: "4. Lutte contre la Fraude",
          content: "Le marchand s'engage à ne valider que les transactions dont il a réellement reçu le paiement de la part du client. Toute utilisation de faux identifiants de transaction, tentative de fraude au système de commission, ou manipulation du système entraînera un bannissement définitif de la plateforme. Bouteek se réserve le droit de signaler les cas de fraude aux autorités compétentes."
        },
        {
          title: "5. Évolution du Service",
          content: "Bouteek se réserve le droit de modifier ses tarifs (abonnements mensuels et commissions par transaction) avec un préavis de 30 jours. Le marchand est libre de quitter la plateforme à tout moment, mais les soldes de \"Bouteek Cash\" déjà consommés ou les mois d'abonnement entamés ne sont pas remboursables. Les modifications de tarifs s'appliqueront au prochain cycle de facturation."
        },
        {
          title: "6. Support et Assistance",
          content: "Bouteek fournit une assistance technique selon le plan d'abonnement choisi. Le support par email est disponible pour tous les plans. Le support par WhatsApp est disponible à partir du plan Launch. Le support VIP est disponible pour les clients du plan Pro. Les temps de réponse peuvent varier selon le plan choisi."
        },
        {
          title: "7. Limitation de Responsabilité",
          content: "Bouteek n'est pas responsable des pertes de données, des interruptions de service, ou des dommages indirects résultant de l'utilisation de la plateforme. La responsabilité totale de Bouteek est limitée au montant des frais payés par le marchand au cours des 12 derniers mois."
        },
        {
          title: "8. Résiliation du Compte",
          content: "Bouteek se réserve le droit de suspendre ou de résilier tout compte qui viole ces conditions. Les marchands peuvent demander la suppression de leur compte à tout moment. Après la résiliation, les données du marchand seront conservées conformément à notre politique de confidentialité."
        }
      ]
    },
    en: {
      title: "Terms and Conditions",
      lastUpdated: "Last Updated: January 2025",
      sections: [
        {
          title: "1. Ownership of Funds",
          content: "Bouteek is a platform connecting merchants and customers. Sales money is transferred directly from the customer to the merchant via their mobile money account (Wave or Orange Money). Bouteek never holds sales money and is not responsible for financial disputes between customers and merchants. Merchants are fully responsible for managing their transactions and customer service."
        },
        {
          title: "2. Bouteek Cash System",
          content: "To use Bouteek's sales services, merchants must maintain a positive \"Bouteek Cash\" balance. With each validated transaction on the platform, Bouteek deducts its service commission from this balance according to the chosen subscription plan. If the balance is depleted, the shop is temporarily paused until the balance is recharged. Merchants are responsible for maintaining sufficient balance to continue operations."
        },
        {
          title: "3. Product Responsibility",
          content: "The merchant is solely responsible for the legality, quality, and delivery of products sold on their shop. Bouteek cannot be held responsible for product quality, authenticity, or legal compliance. Selling prohibited products (illegal counterfeits, prohibited substances, dangerous items, etc.) will result in immediate account closure without refund of remaining Bouteek Cash balance."
        },
        {
          title: "4. Fraud Prevention",
          content: "Merchants commit to validating only transactions for which they have actually received payment from the customer. Any use of false transaction identifiers, attempts to defraud the commission system, or system manipulation will result in permanent ban from the platform. Bouteek reserves the right to report fraud cases to competent authorities."
        },
        {
          title: "5. Service Evolution",
          content: "Bouteek reserves the right to modify its pricing (monthly subscriptions and transaction commissions) with 30 days' notice. Merchants are free to leave the platform at any time, but consumed \"Bouteek Cash\" balances or commenced subscription months are not refundable. Pricing changes apply to the next billing cycle."
        },
        {
          title: "6. Support and Assistance",
          content: "Bouteek provides technical support according to the chosen subscription plan. Email support is available for all plans. WhatsApp support is available from the Launch plan. VIP support is available for Pro plan customers. Response times may vary depending on the chosen plan."
        },
        {
          title: "7. Limitation of Liability",
          content: "Bouteek is not responsible for data loss, service interruptions, or indirect damages resulting from platform use. Bouteek's total liability is limited to the amount of fees paid by the merchant in the last 12 months."
        },
        {
          title: "8. Account Termination",
          content: "Bouteek reserves the right to suspend or terminate any account that violates these terms. Merchants can request account deletion at any time. After termination, merchant data will be retained in accordance with our privacy policy."
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
              <FileText size={40} className="text-[#00D632]" />
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

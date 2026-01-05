import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Lock, Shield, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function Security() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const content = {
    fr: {
      title: "Sécurité",
      subtitle: "Comment nous protégeons vos données et votre activité",
      sections: [
        {
          title: "Chiffrement des Données",
          content: "Toutes les données sensibles (identifiants, informations bancaires, détails de transaction) sont chiffrées en transit et au repos en utilisant les normes de chiffrement AES-256. Les connexions à Bouteek utilisent le protocole HTTPS/TLS 1.3 pour garantir la confidentialité et l'intégrité des données."
        },
        {
          title: "Authentification Sécurisée",
          content: "Nous utilisons l'authentification multi-facteurs (MFA) pour protéger les comptes marchands. Les mots de passe sont hashés avec bcrypt et jamais stockés en texte brut. Les sessions sont gérées avec des tokens JWT sécurisés avec une durée de vie limitée."
        },
        {
          title: "Protection contre la Fraude",
          content: "Bouteek utilise des algorithmes de détection de fraude en temps réel pour identifier les transactions suspectes. Chaque transaction est validée et vérifiée avant d'être traitée. Les tentatives de fraude répétées entraînent le blocage automatique du compte."
        },
        {
          title: "Conformité aux Normes",
          content: "Bouteek respecte les normes de sécurité PCI DSS pour le traitement des paiements. Nous effectuons des audits de sécurité réguliers et des tests de pénétration par des tiers indépendants. Notre infrastructure est hébergée sur des serveurs sécurisés avec redondance et sauvegarde automatique."
        },
        {
          title: "Gestion des Accès",
          content: "L'accès aux données sensibles est limité aux employés autorisés avec des rôles spécifiques. Tous les accès sont enregistrés et audités. Les employés signent des accords de confidentialité stricts."
        },
        {
          title: "Signalement des Failles de Sécurité",
          content: "Si vous découvrez une vulnérabilité de sécurité, veuillez nous contacter immédiatement à security@bouteek.com. Nous traitons les rapports de sécurité avec urgence et offrons une reconnaissance publique aux chercheurs en sécurité responsables."
        }
      ]
    },
    en: {
      title: "Security",
      subtitle: "How we protect your data and your business",
      sections: [
        {
          title: "Data Encryption",
          content: "All sensitive data (credentials, banking information, transaction details) is encrypted in transit and at rest using AES-256 encryption standards. Connections to Bouteek use HTTPS/TLS 1.3 protocol to ensure data confidentiality and integrity."
        },
        {
          title: "Secure Authentication",
          content: "We use multi-factor authentication (MFA) to protect merchant accounts. Passwords are hashed with bcrypt and never stored in plain text. Sessions are managed with secure JWT tokens with limited lifetime."
        },
        {
          title: "Fraud Protection",
          content: "Bouteek uses real-time fraud detection algorithms to identify suspicious transactions. Every transaction is validated and verified before processing. Repeated fraud attempts result in automatic account blocking."
        },
        {
          title: "Compliance Standards",
          content: "Bouteek complies with PCI DSS security standards for payment processing. We conduct regular security audits and penetration testing by independent third parties. Our infrastructure is hosted on secure servers with redundancy and automatic backups."
        },
        {
          title: "Access Management",
          content: "Access to sensitive data is limited to authorized employees with specific roles. All access is logged and audited. Employees sign strict confidentiality agreements."
        },
        {
          title: "Report Security Issues",
          content: "If you discover a security vulnerability, please contact us immediately at security@bouteek.com. We treat security reports with urgency and offer public recognition to responsible security researchers."
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
              <Shield size={40} className="text-[#00D632]" />
              <h1 className="text-5xl font-bold text-black">{currentContent.title}</h1>
            </div>
            <p className="text-xl text-gray-700">{currentContent.subtitle}</p>
          </div>

          <div className="space-y-8">
            {currentContent.sections.map((section, idx) => (
              <div key={idx} className="bg-[#f5f5f5] rounded-xl p-8 border-l-4 border-[#00D632]">
                <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                  <Lock size={24} className="text-[#00D632]" />
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#00D632] rounded-xl p-8 text-black">
            <div className="flex items-start gap-4">
              <AlertCircle size={28} className="flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {language === "fr" ? "Besoin d'aide ?" : "Need Help?"}
                </h3>
                <p className="mb-4">
                  {language === "fr"
                    ? "Si vous avez des questions sur la sécurité de votre compte, contactez notre équipe de support."
                    : "If you have questions about your account security, contact our support team."}
                </p>
                <a
                  href="mailto:support@bouteek.com"
                  className="font-bold hover:underline"
                >
                  support@bouteek.com
                </a>
              </div>
            </div>
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

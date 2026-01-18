import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Check, Zap, Lock, Smartphone, Globe, TrendingUp, Instagram, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import NewsletterSignup from "@/components/NewsletterSignup";
import FAQ from "@/components/FAQ";
import MerchantMetrics from "@/components/MerchantMetrics";
import AppStoreButtons from "@/components/AppStoreButtons";
import AppShowcase from "@/components/AppShowcase";
import SubscriptionOptimizer from "@/components/SubscriptionOptimizer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAppStoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 3000);
  };

  const t_obj = translations[language];

  const pricingPlans = [
    {
      name: t_obj.pricing.starter,
      price: "1,500 XOF",
      description: t_obj.pricing.starterDesc,
      features: t_obj.pricing.features.starter,
      highlighted: false
    },
    {
      name: t_obj.pricing.launch,
      price: "5,000 XOF",
      description: t_obj.pricing.launchDesc,
      features: t_obj.pricing.features.launch,
      highlighted: true
    },
    {
      name: t_obj.pricing.growth,
      price: "12,500 XOF",
      description: t_obj.pricing.growthDesc,
      features: t_obj.pricing.features.growth,
      highlighted: false
    },
    {
      name: t_obj.pricing.pro,
      price: "20,000 XOF",
      description: t_obj.pricing.proDesc,
      features: t_obj.pricing.features.pro,
      highlighted: false
    }
  ];

  const features = [
    {
      icon: <Globe size={24} />,
      title: t_obj.features.feature1.title,
      description: t_obj.features.feature1.desc
    },
    {
      icon: <TrendingUp size={24} />,
      title: t_obj.features.feature2.title,
      description: t_obj.features.feature2.desc
    },
    {
      icon: <Zap size={24} />,
      title: t_obj.features.feature3.title,
      description: t_obj.features.feature3.desc
    },
    {
      icon: <Lock size={24} />,
      title: t_obj.features.feature4.title,
      description: t_obj.features.feature4.desc
    },
    {
      icon: <Check size={24} />,
      title: t_obj.features.feature5.title,
      description: t_obj.features.feature5.desc
    },
    {
      icon: <ArrowRight size={24} />,
      title: t_obj.features.feature6.title,
      description: t_obj.features.feature6.desc
    }
  ];

  const testimonials = [
    {
      name: t_obj.testimonials.name1,
      role: t_obj.testimonials.role1,
      quote: t_obj.testimonials.testimonial1
    },
    {
      name: t_obj.testimonials.name2,
      role: t_obj.testimonials.role2,
      quote: t_obj.testimonials.testimonial2
    },
    {
      name: t_obj.testimonials.name3,
      role: t_obj.testimonials.role3,
      quote: t_obj.testimonials.testimonial3
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Coming Soon Overlay */}
      {showComingSoon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-center animate-in scale-in duration-300 max-w-sm mx-4">
            <h3 className="text-2xl font-bold text-black mb-2">{t_obj.appStore.comingSoon}</h3>
            <p className="text-gray-600">{language === "fr" ? "Les applications mobiles seront bientôt disponibles." : "Mobile apps will be available soon."}</p>
          </div>
        </div>
      )}

      {/* Premium Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md border-b border-gray-100" : "bg-white/80 backdrop-blur-md"}`}>
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/bouteek-logo.jpg" alt="Bouteek" className="h-10 w-10 rounded-lg" />
            <span className="text-2xl font-bold text-black">Bouteek</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 font-medium hover:text-[#00D632] transition-colors duration-200">{t_obj.nav.features}</a>
            <a href="#payments" className="text-gray-700 font-medium hover:text-[#00D632] transition-colors duration-200">{t_obj.nav.payments}</a>
            <a href="#pricing" className="text-gray-700 font-medium hover:text-[#00D632] transition-colors duration-200">{t_obj.nav.pricing}</a>
            
            <div className="flex gap-2 ml-4 border-l border-gray-200 pl-4">
              <button
                onClick={() => setLanguage("fr")}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all duration-200 ${language === "fr" ? "bg-[#00D632] text-black" : "text-gray-600 hover:text-black"}`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all duration-200 ${language === "en" ? "bg-[#00D632] text-black" : "text-gray-600 hover:text-black"}`}
              >
                EN
              </button>
            </div>
            <Button className="btn-primary">{t_obj.nav.getStarted}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
            <a href="#features" className="block text-gray-700 font-medium hover:text-[#00D632]">{t_obj.nav.features}</a>
            <a href="#payments" className="block text-gray-700 font-medium hover:text-[#00D632]">{t_obj.nav.payments}</a>
            <a href="#pricing" className="block text-gray-700 font-medium hover:text-[#00D632]">{t_obj.nav.pricing}</a>
            <Button className="btn-primary w-full">{t_obj.nav.getStarted}</Button>
          </div>
        )}
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="pt-32 pb-20 bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  {t_obj.hero.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  {t_obj.hero.subtitle}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="btn-primary-lg flex items-center justify-center gap-2">
                  {t_obj.hero.cta1} <ArrowRight size={20} />
                </button>
                <button className="btn-outline px-8 py-4 rounded-lg font-semibold text-lg">
                  {t_obj.hero.cta2}
                </button>
              </div>

              {/* Benefits */}
              <div className="space-y-3 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00D632] flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-black" />
                  </div>
                  <span className="text-gray-700 font-medium">{t_obj.hero.benefit1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00D632] flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-black" />
                  </div>
                  <span className="text-gray-700 font-medium">{t_obj.hero.benefit2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00D632] flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-black" />
                  </div>
                  <span className="text-gray-700 font-medium">{t_obj.hero.benefit3}</span>
                </div>
              </div>

              {/* App Store Buttons */}
              <AppStoreButtons />
            </div>

            {/* Right: Dashboard Visual */}
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="bg-gradient-to-br from-[#00D632] to-[#00a825] rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="bg-white/15 backdrop-blur rounded-xl p-4 border border-white/20">
                    <p className="text-sm opacity-90 font-medium">{language === "fr" ? "Revenu Total" : "Total Revenue"}</p>
                    <p className="text-4xl font-bold mt-2">2.4M XOF</p>
                    <p className="text-xs opacity-70 mt-2">{language === "fr" ? "+24% ce mois" : "+24% this month"}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/15 backdrop-blur rounded-xl p-4 border border-white/20">
                      <p className="text-xs opacity-90 font-medium">{language === "fr" ? "Commandes" : "Orders"}</p>
                      <p className="text-2xl font-bold mt-2">1,234</p>
                    </div>
                    <div className="bg-white/15 backdrop-blur rounded-xl p-4 border border-white/20">
                      <p className="text-xs opacity-90 font-medium">{language === "fr" ? "Clients" : "Customers"}</p>
                      <p className="text-2xl font-bold mt-2">892</p>
                    </div>
                  </div>
                  <div className="bg-white/15 backdrop-blur rounded-xl p-4 border border-white/20">
                    <p className="text-sm opacity-90 font-medium mb-3">{language === "fr" ? "Paiements Récents" : "Recent Payments"}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>{language === "fr" ? "Commande #1024" : "Order #1024"}</span>
                        <span className="font-bold">150K XOF</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>{language === "fr" ? "Commande #1023" : "Order #1023"}</span>
                        <span className="font-bold">89K XOF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Minimalist Grid */}
      <section id="features" className="section-spacing bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">{t_obj.features.title}</h2>
            <p className="text-xl text-gray-600">
              {t_obj.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="card-premium group">
                <div className="feature-icon group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Partners Section */}
      <section id="payments" className="section-spacing bg-white border-t border-gray-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">{t_obj.payments.title}</h2>
            <p className="text-xl text-gray-600">
              {t_obj.payments.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Payment Methods */}
            <div className="space-y-6">
              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <img src="/wave-logo.png" alt="Wave" className="h-16 w-16 rounded-lg flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{t_obj.payments.wave}</h3>
                    <p className="text-gray-600">{t_obj.payments.waveDesc}</p>
                  </div>
                </div>
              </div>
              <div className="card-premium">
                <div className="flex items-start gap-4">
                  <img src="/orange-money-logo.png" alt="Orange Money" className="h-16 w-16 rounded-lg flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{t_obj.payments.orange}</h3>
                    <p className="text-gray-600">{t_obj.payments.orangeDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Flow */}
            <div className="card-premium bg-gradient-to-br from-[#00D632]/10 to-white border-2 border-[#00D632]">
              <h3 className="text-2xl font-bold text-black mb-8">{t_obj.payments.flowTitle}</h3>
              <div className="space-y-6">
                {[
                  { num: "1", text: t_obj.payments.flow1 },
                  { num: "2", text: t_obj.payments.flow2 },
                  { num: "3", text: t_obj.payments.flow3 },
                  { num: "4", text: t_obj.payments.flow4 }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00D632] text-black flex items-center justify-center font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <p className="text-gray-700 font-medium pt-1">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">{t_obj.testimonials.title}</h2>
            <p className="text-xl text-gray-600">{t_obj.testimonials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="card-premium hover:border-[#00D632]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#00D632] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <AppShowcase />

      {/* Pricing Section with Optimizer */}
      <section id="pricing" className="section-spacing bg-white border-t border-gray-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">{t_obj.pricing.title}</h2>
            <p className="text-xl text-gray-600">
              {t_obj.pricing.subtitle}
            </p>
          </div>

          {/* Subscription Optimizer */}
          <div className="mb-16">
            <SubscriptionOptimizer />
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[#00D632] text-black scale-105 shadow-2xl border-2 border-[#00D632]"
                    : "bg-white text-black border-2 border-gray-200 hover:border-[#00D632]"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block bg-black text-[#00D632] px-3 py-1 rounded-full text-xs font-bold mb-4">
                    {language === "fr" ? "POPULAIRE" : "POPULAR"}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-black/80" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm ml-2 opacity-80">{t_obj.pricing.perMonth}</span>
                </div>
                <button
                  className={`w-full font-bold py-3 rounded-lg mb-8 transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-black text-[#00D632] hover:bg-[#1a1a1a] active:scale-95"
                      : "bg-black text-white hover:bg-[#1a1a1a] active:scale-95"
                  }`}
                >
                  {t_obj.pricing.getStartedBtn}
                </button>
                <ul className="space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-black" : "text-[#00D632]"}`}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchant Metrics */}
      <MerchantMetrics />

      {/* CTA Section */}
      <section className="py-20 bg-[#00D632] text-black border-t border-[#00D632]/50">
        <div className="container text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t_obj.cta.title}</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            {t_obj.cta.subtitle}
          </p>
          <button className="btn-primary-lg flex items-center justify-center gap-2 mx-auto">
            {t_obj.cta.button} <ArrowRight size={24} />
          </button>
          <p className="text-black/60 mt-4">{t_obj.cta.note}</p>
        </div>
      </section>

      {/* Referral Section */}
      <section className="section-spacing bg-white border-t border-gray-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                  {t_obj.referral.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {t_obj.referral.subtitle}
                </p>
                <div className="space-y-4 mb-8">
                  {[t_obj.referral.benefit1, t_obj.referral.benefit2, t_obj.referral.benefit3].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00D632] flex items-center justify-center flex-shrink-0 mt-1">
                        <Check size={16} className="text-black" />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary-lg flex items-center gap-2">
                  {t_obj.referral.cta}
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Visual */}
              <div className="card-premium bg-gradient-to-br from-[#00D632]/15 to-white border-2 border-[#00D632]">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#00D632] mb-2">20%</div>
                    <div className="text-gray-700 font-semibold">{language === "fr" ? "Commission" : "Commission"}</div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#00D632] to-transparent"></div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#00D632] mb-2">∞</div>
                    <div className="text-gray-700 font-semibold">{language === "fr" ? "À vie" : "For Life"}</div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#00D632] to-transparent"></div>
                  <p className="text-center text-gray-600 text-sm font-medium">
                    {t_obj.referral.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-gray-50 border-t border-gray-200">
        <FAQ />
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container max-w-2xl">
          <NewsletterSignup />
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-black text-gray-400 py-16 border-t border-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/bouteek-logo.jpg" alt="Bouteek" className="h-8 w-8 rounded" />
                <span className="font-bold text-white">Bouteek</span>
              </div>
              <p className="text-sm text-gray-500">{t_obj.footer.tagline}</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">{t_obj.footer.product}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-[#00D632] transition-colors">{t_obj.nav.features}</a></li>
                <li><a href="#pricing" className="hover:text-[#00D632] transition-colors">{t_obj.nav.pricing}</a></li>
                <li><a href="/security" className="hover:text-[#00D632] transition-colors">{language === "fr" ? "Sécurité" : "Security"}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">{t_obj.footer.company}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00D632] transition-colors">{t_obj.footer.about}</a></li>
                <li><a href="#" className="hover:text-[#00D632] transition-colors">{t_obj.footer.blog}</a></li>
                <li><a href="#" className="hover:text-[#00D632] transition-colors">{t_obj.footer.contact}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">{t_obj.footer.legal}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/security" className="hover:text-[#00D632] transition-colors">{language === "fr" ? "Sécurité" : "Security"}</a></li>
                <li><a href="/privacy" className="hover:text-[#00D632] transition-colors">{t_obj.footer.privacy}</a></li>
                <li><a href="/terms" className="hover:text-[#00D632] transition-colors">{t_obj.footer.terms}</a></li>
                <li><a href="/cookies" className="hover:text-[#00D632] transition-colors">{t_obj.footer.cookies}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; 2025 Bouteek. {t_obj.footer.copyright}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://instagram.com/bouteek.shop" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D632] transition-colors" title="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://snapchat.com/add/bouteek.shop" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D632] transition-colors" title="Snapchat">
                <img src="/snapchat-icon.png" alt="Snapchat" className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com/@bouteek.shop" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D632] transition-colors" title="TikTok">
                <img src="/tiktok-icon.png" alt="TikTok" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

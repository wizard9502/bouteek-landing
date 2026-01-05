import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Globe, Lock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src="/bouteek-logo.jpg" alt="Bouteek" className="h-10 w-10 rounded-lg" />
            <span className="text-2xl font-bold text-black">Bouteek</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-black hover:text-[#00D632] transition-colors">Features</a>
            <a href="#payments" className="text-black hover:text-[#00D632] transition-colors">Payments</a>
            <a href="#pricing" className="text-black hover:text-[#00D632] transition-colors">Pricing</a>
            <Button className="btn-primary">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/hero-bg.jpg" alt="Hero Background" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
                  Empower Your African Business
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Build beautiful online storefronts, manage inventory, and get paid instantly with Bouteek. The all-in-one platform built for African merchants.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex items-center justify-center gap-2">
                  Start Free Trial <ArrowRight size={20} />
                </button>
                <button className="btn-outline">
                  Watch Demo
                </button>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-[#00D632]" />
                  <span className="text-gray-700">No credit card required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-[#00D632]" />
                  <span className="text-gray-700">Free setup and onboarding</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-[#00D632]" />
                  <span className="text-gray-700">24/7 merchant support</span>
                </div>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="bg-gradient-to-br from-[#00D632] to-black rounded-2xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                    <p className="text-sm opacity-80">Total Revenue</p>
                    <p className="text-3xl font-bold">2.4M XOF</p>
                    <p className="text-xs opacity-60 mt-1">+24% this month</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                      <p className="text-xs opacity-80">Orders</p>
                      <p className="text-2xl font-bold">1,234</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                      <p className="text-xs opacity-80">Customers</p>
                      <p className="text-2xl font-bold">892</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                    <p className="text-sm opacity-80 mb-2">Recent Payments</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Order #1024</span>
                        <span className="font-bold">150K XOF</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Order #1023</span>
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-black text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive tools designed specifically for African merchants to build, sell, and grow online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe size={32} />,
                title: "Beautiful Storefronts",
                description: "Create stunning online stores without coding. Choose from professional templates or customize your own."
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Advanced Analytics",
                description: "Track sales, customer behavior, and inventory in real-time. Make data-driven decisions to grow faster."
              },
              {
                icon: <Zap size={32} />,
                title: "Inventory Management",
                description: "Manage stock levels, track products, and automate reordering. Never oversell or run out of stock."
              },
              {
                icon: <Lock size={32} />,
                title: "Secure Payments",
                description: "Accept payments from Wave, Orange Money, and more. Instant settlements to your bank account."
              },
              {
                icon: <CheckCircle2 size={32} />,
                title: "Order Management",
                description: "Process orders efficiently with automated workflows. Keep customers updated every step of the way."
              },
              {
                icon: <ArrowRight size={32} />,
                title: "Marketing Tools",
                description: "Built-in email campaigns, social media integration, and customer loyalty programs to drive growth."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#1a1a1a] rounded-xl p-8 hover:bg-[#252525] transition-colors duration-300 border border-[#333]">
                <div className="text-[#00D632] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Partners Section */}
      <section id="payments" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Get Paid Instantly</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Accept payments from your customers through trusted payment partners and receive settlements directly to your account.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-[#f5f5f5] rounded-xl p-8 border-l-4 border-[#00D632]">
                <div className="flex items-start gap-4">
                  <img src="/wave-logo.png" alt="Wave" className="h-16 w-16 rounded-lg flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Wave Money Transfers</h3>
                    <p className="text-gray-700">Accept payments from millions of Wave users across Africa. Instant settlements with zero hidden fees.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5f5] rounded-xl p-8 border-l-4 border-[#FF9500]">
                <div className="flex items-start gap-4">
                  <img src="/orange-money-logo.png" alt="Orange Money" className="h-16 w-16 rounded-lg flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Orange Money</h3>
                    <p className="text-gray-700">Reach Orange Money users and accept mobile payments seamlessly. Fast, secure, and reliable.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00D632] to-[#00a825] rounded-2xl p-12 text-black">
              <h3 className="text-2xl font-bold mb-6">Payment Flow</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-black text-[#00D632] rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                  <p className="font-semibold">Customer selects payment method</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-black text-[#00D632] rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                  <p className="font-semibold">Payment processed securely</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-black text-[#00D632] rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                  <p className="font-semibold">Funds settled to your account</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-black text-[#00D632] rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
                  <p className="font-semibold">Order fulfilled and tracked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Trusted by Merchants</h2>
            <p className="text-xl text-gray-700">See how Bouteek is helping African merchants grow their businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amara Diallo",
                role: "Fashion Boutique Owner",
                quote: "Bouteek transformed my small boutique into a thriving online business. I went from 10 orders a month to 200+.",
                image: "👩‍💼"
              },
              {
                name: "Kwame Mensah",
                role: "Electronics Retailer",
                quote: "The inventory management system saves me hours every week. Customer support is exceptional and always helpful.",
                image: "👨‍💼"
              },
              {
                name: "Zainab Hassan",
                role: "Handmade Crafts Seller",
                quote: "I love how easy it is to set up my store and accept payments. Bouteek handles the technical stuff so I can focus on my craft.",
                image: "👩‍🎨"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Choose the plan that fits your business. No hidden fees, cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Perfect for getting started",
                features: ["1 Product", "Basic Analytics", "Email Support", "Mobile App Access"]
              },
              {
                name: "Growth",
                price: "2,500 XOF",
                description: "Most popular for growing businesses",
                features: ["Unlimited Products", "Advanced Analytics", "Priority Support", "Marketing Tools", "Multiple Payment Methods"],
                highlighted: true
              },
              {
                name: "Pro",
                price: "7,500 XOF",
                description: "For established merchants",
                features: ["Everything in Growth", "API Access", "Custom Domain", "Dedicated Support", "Advanced Reporting"]
              }
            ].map((plan, idx) => (
              <div key={idx} className={`rounded-xl p-8 transition-all ${plan.highlighted ? "bg-[#00D632] text-black scale-105 shadow-2xl" : "bg-[#f5f5f5] text-black border-2 border-gray-200"}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-black/80" : "text-gray-600"}`}>{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-sm ml-2">/month</span>}
                </div>
                <button className={`w-full font-bold py-3 rounded-lg mb-6 transition-colors ${plan.highlighted ? "bg-black text-[#00D632] hover:bg-[#1a1a1a]" : "bg-black text-white hover:bg-[#1a1a1a]"}`}>
                  Get Started
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <CheckCircle2 size={20} className={plan.highlighted ? "text-black" : "text-[#00D632]"} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of African merchants who are already selling online with Bouteek. Get started free today.
          </p>
          <button className="btn-primary text-lg py-4 px-8 flex items-center justify-center gap-2 mx-auto">
            Start Free Trial <ArrowRight size={24} />
          </button>
          <p className="text-gray-400 mt-4">No credit card required. Free setup and onboarding.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-12 border-t border-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/bouteek-logo.jpg" alt="Bouteek" className="h-8 w-8 rounded" />
                <span className="font-bold text-white">Bouteek</span>
              </div>
              <p className="text-sm">Empowering African merchants to build and grow their businesses online.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00D632] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#00D632] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#00D632] transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00D632] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#00D632] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#00D632] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00D632] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#00D632] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[#00D632] transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2025 Bouteek. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#00D632] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#00D632] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#00D632] transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

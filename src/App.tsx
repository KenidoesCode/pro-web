import { useEffect, useState, useRef } from 'react';
import {
  Globe,
  Shield,
  TrendingUp,
  Bot,
  Blocks,
  DollarSign,
  Menu,
  X,
  ArrowRight,
  Zap,
  Target,
  Users,
  Sparkles
} from 'lucide-react';
import HorizontalScroll from './components/HorizontalScroll';
import FloatingElements from './components/FloatingElements';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Web & Mobile Apps',
      description: 'Building websites and mobile apps that take shops, services, and ideas online.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Strengthening security with advanced cybersecurity solutions for safe operations.'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Helping businesses reach more customers with digital marketing and content strategies.'
    },
    {
      icon: Bot,
      title: 'AI & Chatbots',
      description: 'Developing AI tools and chatbots that make businesses smarter and customer service faster.'
    },
    {
      icon: Blocks,
      title: 'Blockchain',
      description: 'Enabling safe and transparent operations through blockchain technology and smart contracts.'
    },
    {
      icon: DollarSign,
      title: 'Financial Technology',
      description: 'Guiding organizations in using technology to manage and grow their finances.'
    }
  ];

  const whyChoose = [
    {
      icon: Zap,
      title: 'All-in-One Solution',
      description: 'No need to depend on multiple service providers. We bring technology, security, and marketing together in one place.'
    },
    {
      icon: Target,
      title: 'Tailored for Everyone',
      description: 'Whether you\'re a street vendor looking to accept online payments or a corporate exploring AI and blockchain, we provide solutions tailored to your needs.'
    },
    {
      icon: Users,
      title: 'Simplified Digital Transition',
      description: 'QuantumBAY makes digital transition simple, safe, and affordable for everyone—from small vendors to large companies.'
    }
  ];

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/quant.logo.jpg"
                alt="QuantumBAY Logo"
                className="w-10 h-10 object-contain rounded-lg"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                QuantumBAY
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              <a href="#why-matters" className="hover:text-cyan-400 transition-colors">Why Now</a>
              <a href="#why-choose" className="hover:text-cyan-400 transition-colors">Why Us</a>
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Contact
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
              <a href="#services" className="block hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#why-matters" className="block hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Why Now</a>
              <a href="#why-choose" className="block hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
              <a href="#contact" className="block bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full text-center" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <FloatingElements />

        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 mb-6 animate-bounce-slow">
            <Sparkles className="text-cyan-400" size={24} />
            <span className="text-cyan-400 text-sm font-semibold">Digital Transformation Simplified</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient transform hover:scale-105 transition-transform duration-500">
            QuantumBAY
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Your Complete Digital Transformation Partner
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Making digital transition simple, safe, and affordable for everyone—from small vendors to large companies
          </p>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            Explore Our Services
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <section id="services" className="py-20 px-6 relative overflow-hidden">
        <FloatingElements />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-slate-400 text-lg">Comprehensive digital solutions for modern businesses</p>
          </div>

          <HorizontalScroll services={services} />
        </div>
      </section>

      <section id="why-matters" className="py-20 px-6 bg-slate-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
        <FloatingElements />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why It Matters in India Right Now
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 animate-fadeInUp transform hover:scale-105 hover:rotate-1">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:rotate-12 transition-transform duration-500">
                  <Zap className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-cyan-400">Digital Revolution</h3>
                  <p className="text-slate-300 leading-relaxed">
                    India is going digital at record speed with UPI payments, online shopping, and AI adoption becoming everyday needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-red-500/30 rounded-2xl p-8 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 animate-fadeInUp transform hover:scale-105 hover:-rotate-1" style={{ animationDelay: '100ms' }}>
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-lg group-hover:rotate-12 transition-transform duration-500">
                  <Target className="text-red-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-red-400">Business Risk</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Businesses that do not go digital risk being left behind in India's rapidly evolving market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/50 rounded-2xl p-10 text-center animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <h3 className="text-3xl font-bold mb-4 text-cyan-400">Our Solution</h3>
            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              QuantumBAY makes digital transition simple, safe, and affordable for everyone—from small vendors to large companies.
            </p>
          </div>
        </div>
      </section>

      <section id="why-choose" className="py-20 px-6 relative overflow-hidden">
        <FloatingElements />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose QuantumBAY
            </h2>
            <p className="text-slate-400 text-lg">Your trusted partner for digital excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group perspective-1000 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform-3d hover:rotate-y-12 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-float">
                        <Icon className="text-cyan-400" size={36} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-cyan-500/50 rounded-2xl p-10 text-center animate-fadeInUp" style={{ animationDelay: '300ms' }}>
            <p className="text-2xl text-slate-300 leading-relaxed">
              Let's grow your business with technology that works—whether you're just starting or already established.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get in touch with us today and let's discuss how we can help you succeed in the digital age
            </p>
            <a
              href="mailto:info.quantumbay@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              info.quantumbay@gmail.com
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 QuantumBAY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

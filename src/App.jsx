import React, { useState, useEffect } from 'react';
import CookieBanner from './components/CookieBanner.jsx';
import ImpressumView from './components/ImpressumView.jsx';
import DatenschutzView from './components/DatenschutzView.jsx';
import {
  Sparkles,
  LineChart,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  Send,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  SearchCheck,
  Check,
  Smartphone,
  Music,
  Globe,
  Menu,
  X,
  ShoppingBag,
  Compass,
  MessageCircle,
  Loader2,
  ChevronDown,
  HelpCircle
} from 'lucide-react';

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.21 8.21 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>
    </svg>
  );
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/\/$/, '').toLowerCase();
      if (path === '/impressum' || path === '/datenschutz') {
        return path;
      }
    }
    return '/';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieBannerManualOpen, setCookieBannerManualOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [hoveredPackageId, setHoveredPackageId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const activePackageId = hoveredPackageId || (selectedPackage ? selectedPackage.id : 'setup');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/$/, '').toLowerCase();
      if (path === '/impressum' || path === '/datenschutz') {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      const cleanPath = path.replace(/\/$/, '').toLowerCase();
      setCurrentRoute(cleanPath || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const whatsappNumber = "4915906122744";

  const currentWhatsappText = selectedPackage
    ? `Hallo Dirk, ich interessiere mich für das Paket "${selectedPackage.title}" (${selectedPackage.price}). Hast du Zeit für ein unverbindliches Erstgespräch?`
    : "Hallo Dirk, ich interessiere mich für ein strategisches Erstgespräch zu GEO, KI-Sichtbarkeit und E-Commerce Beratung.";

  const currentWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(currentWhatsappText)}`;

  const currentEmailSubject = selectedPackage
    ? `Anfrage für Paket [${selectedPackage.title}] - DS Online Services`
    : "Kostenloses Erstgespräch anfragen - DS Online Services";

  const currentEmailBody = selectedPackage
    ? `Hallo Dirk,\n\nich interessiere mich für das Paket "${selectedPackage.title}" (${selectedPackage.price}).\n\nBitte melden Sie sich bezüglich eines unverbindlichen Erstgesprächs bei mir.\n\nViele Grüße\n[Ihr Name]\n[Ihr Unternehmen/Telefon]`
    : `Hallo Dirk,\n\nich interessiere mich für ein strategisches Erstgespräch zu GEO, KI-Sichtbarkeit und Prozessberatung.\n\nViele Grüße\n[Ihr Name]\n[Ihr Unternehmen/Telefon]`;

  const currentMailtoUrl = `mailto:hallo@sichtbarmitki.agency?cc=dirk.online.services@gmail.com&subject=${encodeURIComponent(
    currentEmailSubject
  )}&body=${encodeURIComponent(currentEmailBody)}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = selectedPackage
      ? `Neue Anfrage für [${selectedPackage.title}] von ${formData.name}`
      : `Neue Kontaktanfrage von ${formData.name} (sichtbarmitki.agency)`;

    const packageName = selectedPackage
      ? `${selectedPackage.title} (${selectedPackage.price})`
      : 'Individuelle Anfrage';

    try {
      // Send directly to primary email with CC to gmail
      const response = await fetch('https://formsubmit.co/ajax/hallo@sichtbarmitki.agency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Telefon: formData.phone || 'Nicht angegeben',
          Unternehmen: formData.company || 'Nicht angegeben',
          Ausgewaehltes_Paket: packageName,
          Nachricht: formData.message || 'Keine Nachricht angegeben',
          _cc: 'dirk.online.services@gmail.com',
          _subject: emailSubject,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        // Mailto fallback
        window.location.href = `mailto:hallo@sichtbarmitki.agency?cc=dirk.online.services@gmail.com&subject=${encodeURIComponent(
          emailSubject
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\nUnternehmen: ${formData.company}\nAusgewähltes Paket: ${packageName}\n\nNachricht:\n${formData.message}`
        )}`;
        setFormSubmitted(true);
      }
    } catch (err) {
      window.location.href = `mailto:hallo@sichtbarmitki.agency?cc=dirk.online.services@gmail.com&subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\nUnternehmen: ${formData.company}\nAusgewähltes Paket: ${packageName}\n\nNachricht:\n${formData.message}`
      )}`;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 4 Focused Strategic Services
  const services = [
    {
      icon: SearchCheck,
      badge: "Generative Engine Optimization",
      title: "GEO / KI-Suchmaschinen-Sichtbarkeit",
      description:
        "Werden Sie die verlässliche Empfehlung in ChatGPT, Perplexity, Google AI Overviews & Gemini. Wir positionieren Ihre Marke und Inhalte gezielt als autoritative Quelle in Large Language Models.",
      points: [
        "LLM-spezifische Content-Strukturierung & semantisches Schema-Markup",
        "Präsenz, Zitation & Nennung in KI-Wissensdatenbanken & Sprachmodellen",
        "Kontinuierliches Monitoring von generativen KI-Suchantworten & Marken-Rankings"
      ],
      glow: "hover:border-blue-500/60 hover:shadow-blue-500/10"
    },
    {
      icon: ShoppingBag,
      badge: "E-Commerce & Digital Strategy",
      title: "Strategische E-Commerce Beratung",
      description:
        "Fundierte strategische Begleitung für Online-Shops & E-Commerce Marken: Wir analysieren Ihre Shop-Architektur, Conversion-Funnels und decken Wachstumsblockaden auf.",
      points: [
        "Strategische Auswahl & Optimierung von Shop-Systemen (Shopify, WooCommerce & Co.)",
        "Conversion-Rate-Optimierung (CRO) & Ausrichtung auf maximalen ROI",
        "Ablösung träger Baukästen & Architektur-Konzepte ohne Agentur-Mondpreise"
      ],
      glow: "hover:border-purple-500/60 hover:shadow-purple-500/10"
    },
    {
      icon: LineChart,
      badge: "Data, Privacy & Tracking",
      title: "Smarte Web-Analytics & DSGVO-Tracking",
      description:
        "Schluss mit Daten-Blindflug: Wir implementieren 100% DSGVO-konforme Tracking-Infrastrukturen und automatisierte Dashboards für glasklare, unternehmerische Entscheidungen.",
      points: [
        "Google Consent Mode v2 & Server-Side Tagging für verlässliche Daten",
        "KI-gestützte Auswertung von User-Journeys & Conversion-Abbrüchen",
        "Transparente Echtzeit-Dashboards statt unübersichtlicher Datenberge"
      ],
      glow: "hover:border-indigo-500/60 hover:shadow-indigo-500/10"
    },
    {
      icon: Workflow,
      badge: "KI-Workflows & Prozess-Strategie",
      title: "KI-Workflows & Prozess-Strategie",
      description:
        "Wo lohnt sich KI in Ihrem Unternehmen wirklich? Wir identifizieren lukrative Automatisierungs-Hebel, die manuelle Routinearbeit eliminieren und Kosten nachhaltig senken.",
      points: [
        "Strategische Vorqualifizierung von Kundenanfragen & intelligente Chat-Assistenten",
        "Nahtlose Integration moderner Sprachmodelle in bestehende Betriebsabläufe",
        "Praxisnahe Umsetzung mit klarem Fokus auf betriebswirtschaftlichen Nutzen"
      ],
      glow: "hover:border-cyan-500/60 hover:shadow-cyan-500/10"
    }
  ];

  const references = [
    {
      title: "Flow der Stille",
      subtitle: "Android-App & Progressive Web App (PWA)",
      domain: "flow-der-stille.de",
      url: "https://flow-der-stille.de",
      logo: "/flow-der-stille-logo.png",
      badge: "Android-App & Web-Plattform",
      badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      icon: Smartphone,
      description:
        "Vollständige Konzeption und technische Realisierung als native Android-App sowie performante Web-Plattform für geführte Meditationen und Achtsamkeits-Sessions.",
      highlights: [
        "Eigene native Android-App & PWA für unterbrechungsfreies Audio-Streaming",
        "Maßgeschneiderter HTML5-Audio-Player mit stabiler Wiedergabe",
        "Direkte Cloud-Datenbankanbindung ohne Drittanbieter-Abo-Kosten (kein n8n)",
        "100% DSGVO-konform mit Google Consent Mode v2"
      ]
    },
    {
      title: "MyMusicMoment24",
      subtitle: "Exklusive Musikerlebnisse & Buchungsplattform",
      domain: "mymusicmoment24.de",
      url: "https://mymusicmoment24.de",
      badge: "Web-Plattform & GEO",
      badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
      icon: Music,
      description:
        "Moderne, conversion-optimierte Web-Präsenz und Buchungsplattform für maßgeschneiderte Musikmomente, Event-Begleitung und personalisierte KI-Kompositionen.",
      highlights: [
        "Blitzschnelle Ladezeiten (Lighthouse Score 95+) für minimale Absprungraten",
        "GEO-optimierte Inhaltsstruktur für Auffindbarkeit in ChatGPT, Gemini & Google",
        "Reibungslose mobile User Experience & zielgerichtete Lead-Formulare",
        "DSGVO-konformes Analytics-Setup zur messbaren Buchungsoptimierung"
      ]
    }
  ];

  const milestones = [
    {
      role: "Senior Manager New Business & Cooperation",
      company: "hurra.com™ (Hurra Communications GmbH)",
      focus: "Performance Marketing & Strategic Partnerships",
      description:
        "Jahrelange Erfahrung im performance-getriebenen Agenturumfeld. Entwicklung und Skalierung von Partnerschaften, datengetriebenen Kampagnen und strategischem Neugeschäft für nationale und internationale Marken."
    },
    {
      role: "Strategischer E-Commerce & KI-Berater",
      company: "DS Online Services & SichtbarMitKI.agency",
      focus: "GEO, E-Commerce Architektur & Smarte Analytics",
      description:
        "Ganzheitliches Sparring für Unternehmer: Von der Positionierung in generativen KI-Suchmaschinen (GEO) über Shop-Architektur bis zu DSGVO-konformen Tracking-Systemen. Fokus auf Strategie und ROI."
    },
    {
      role: "Gründer & AI Music Creator",
      company: "MyMusicMoment24 (mymusicmoment24.de)",
      focus: "Generative KI & Creative Audio Engineering",
      description:
        "Pionierarbeit im Bereich generativer KI-Musikmodelle: Aufbau einer spezialisierten Plattform für personalisierte Songs, KI-Songwriting und digitale Medienproduktion."
    },
    {
      role: "Full-Stack Konzeption & Entwicklung",
      company: "Flow der Stille (flow-der-stille.de)",
      focus: "Native Android-App & Web-Architektur",
      description:
        "Ganzheitliche Realisierung einer Plattform für Meditation und Entspannung – vom eigenen HTML5-Player über native Android-App bis zum datenschutzkonformen Backend ohne Drittanbieter-Abos."
    }
  ];

  const benefits = [
    {
      icon: Compass,
      title: "Strategischer Weitblick",
      desc: "Kein operatives Klein-Klein: Wir betrachten Ihr gesamtes Geschäftsmodell und setzen Prioritäten dort, wo sie den größten wirtschaftlichen Hebel haben."
    },
    {
      icon: TrendingUp,
      title: "Messbare KI-Rankings (GEO)",
      desc: "Transparente Kennzahlen statt leerer Buzzwords: Sehen Sie genau, wann und wie KI-Modelle Ihr Unternehmen aktiv empfehlen."
    },
    {
      icon: ShieldCheck,
      title: "100% DSGVO- & Rechtssicher",
      desc: "Keine Abmahnrisiken: Wir setzen auf saubere Consent-Konzepte, Server-Side Tracking und europäische Datenschutzstandards."
    },
    {
      icon: Clock,
      title: "Schnelle Umsetzung ohne Overhead",
      desc: "Direkte Zusammenarbeit mit Dirk Schmetzer auf Augenhöhe – ohne zeitraubende Agentur-Schleifen und ohne Mondpreise."
    }
  ];

  const faqs = [
    {
      question: "Was ist Generative Engine Optimization (GEO)?",
      answer:
        "Generative Engine Optimization (GEO) ist die gezielte Optimierung Ihrer digitalen Präsenz für KI-Suchsysteme wie ChatGPT Search, Perplexity, Google Gemini und AI Overviews. Durch semantisch saubere Strukturierung, validiertes Schema-Markup und Zitations-Optimierung platzieren wir Ihre Marke als maßgebliche Expertenquelle in den Antworten der Large Language Models."
    },
    {
      question: "Wie hilft eine Digitalberatung mit Fokus auf Prozessstrategie?",
      answer:
        "Eine fundierte Digitalberatung durchleuchtet Ihre Arbeitsabläufe und IT-Architektur. Wir identifizieren ineffiziente manuelle Zwischenschritte und etablieren schlanke, KI-gestützte Workflows (z. B. automatisierte Lead-Vorqualifizierung, KI-Assistenz im Support). Das spart signifikant Arbeitszeit und steigert Ihre Marge."
    },
    {
      question: "Was umfasst die strategische E-Commerce Beratung?",
      answer:
        "Wir unterstützen E-Commerce-Unternehmen und Online-Shops (Shopify, WooCommerce, Eigenentwicklungen) bei der Skalierung: Architektur-Reviews, Baukasten-Ablösung ohne Vendor-Lock-in, Conversion-Rate-Optimierung (CRO) und Performance-Steigerung für maximale Kaufabschlüsse."
    },
    {
      question: "Warum ist Smart Web Analytics mit Google Consent Mode v2 unverzichtbar?",
      answer:
        "Klassisches Tracking verliert ohne sauberen Consent Mode v2 bis zu 40% der Conversion-Daten oder verstößt gegen die DSGVO. Wir richten Server-Side Tracking, den Google Tag Manager und den Consent Mode v2 so ein, dass Sie rechtssicher vollständige Daten für Ihre Marketing-Entscheidungen erhalten."
    },
    {
      question: "Wie läuft ein kostenloses Erstgespräch mit Dirk Schmetzer ab?",
      answer:
        "Im unverbindlichen 30-minütigen Gespräch via Google Meet oder Telefon werfen wir einen direkten Blick auf Ihre Website, Ihren Shop und Ihre bisherige KI-Sichtbarkeit. Sie erhalten mindestens drei konkrete Handlungsempfehlungen, die Sie sofort umsetzen können – transparent, partnerschaftlich und ohne Verkaufsdruck."
    }
  ];

  const pricingPackages = [
    {
      id: 'audit',
      badge: 'Perfekter Einstieg',
      title: '360° GEO- & Digital-Audit',
      price: '490 €',
      period: 'Einmaliger Festpreis',
      description: 'Präzise Standortbestimmung, Aufdeckung von Schwachstellen und ein priorisierter Fahrplan für messbare KI-Sichtbarkeit.',
      features: [
        'Prüfung der Auffindbarkeit in ChatGPT, Perplexity, Gemini & Google AI',
        'Schwachstellen-Check bei Ladezeiten, Shop-Architektur & Baukasten-Limits',
        'DSGVO- & Google Consent Mode v2 Sicherheitsprüfung',
        'Schriftlicher Maßnahmenplan mit priorisierten Quick-Wins',
        '60 Min. persönlicher 1:1 Video-Call zur Auswertung mit Dirk'
      ],
      cta: 'Audit anfragen',
      popular: false
    },
    {
      id: 'setup',
      badge: 'Empfehlung • Bestseller',
      title: 'KI-Workflows & GEO-Setup',
      price: '1.290 €',
      period: 'Einmalig • Schlüsselfertige Umsetzung',
      description: 'Ganzheitliche Implementierung für Unternehmen, die als führende Antwort in KI-Suchmaschinen empfohlen werden und Workflows automatisieren wollen.',
      features: [
        'Alles aus dem 360° Audit vollständig inklusive',
        'Hands-on Implementierung semantischer Schema.org Markup-Strukturen',
        'Saubere Einrichtung von Google Consent Mode v2 & Analytics',
        'Konzeption & Bau Ihres ersten maßgeschneiderten KI-Workflows',
        'Shop- & Funnel-Optimierung zur messbaren Conversion-Steigerung',
        '14 Tage persönliche Nachbetreuung & Feinschliff nach Go-Live'
      ],
      cta: 'Setup anfragen',
      popular: true
    },
    {
      id: 'sparring',
      badge: 'Laufende Begleitung',
      title: '1:1 Strategie-Sparring & Betreuung',
      price: '90 €',
      period: 'pro Stunde • Stundengenau & flexibel',
      description: 'Ihr direkter strategischer Partner für Digitalisierung, Tool-Auswahl und unternehmerische Prozessoptimierung auf Augenhöhe.',
      features: [
        'Persönliches 1:1 Sparring mit Senior Stratege Dirk Schmetzer',
        'Begleitung bei Tool-Evaluierung, KI-Einführung & Shop-Architektur',
        'Keine Mindestvertragslaufzeit – transparente Abrechnung nach Aufwand',
        'Direkter Draht & schneller Austausch via WhatsApp & E-Mail',
        'Auf Wunsch als planbarer monatlicher Retainer gestaltbar'
      ],
      cta: 'Sparring anfragen',
      popular: false
    }
  ];

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    setHoveredPackageId(pkg.id);
    setFormData((prev) => ({
      ...prev,
      message: `Hallo Dirk, ich interessiere mich für das Paket "${pkg.title}" (${pkg.price}). Können wir dazu ein unverbindliches Erstgespräch führen?`
    }));
    const kontaktEl = document.getElementById('kontakt');
    if (kontaktEl) {
      kontaktEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentRoute === '/impressum') {
    return (
      <>
        <ImpressumView
          onNavigateHome={() => navigate('/')}
          onNavigateDatenschutz={() => navigate('/datenschutz')}
          onOpenCookies={() => setCookieBannerManualOpen(true)}
        />
        <CookieBanner
          isOpenManually={cookieBannerManualOpen}
          onCloseManual={() => setCookieBannerManualOpen(false)}
        />
      </>
    );
  }

  if (currentRoute === '/datenschutz') {
    return (
      <>
        <DatenschutzView
          onNavigateHome={() => navigate('/')}
          onNavigateImpressum={() => navigate('/impressum')}
          onOpenCookies={() => setCookieBannerManualOpen(true)}
        />
        <CookieBanner
          isOpenManually={cookieBannerManualOpen}
          onCloseManual={() => setCookieBannerManualOpen(false)}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
      {/* Ambient background glow layers */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px]" />
      </div>

      {/* Floating WhatsApp Quick Contact Button (Bottom Right) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Direktkontakt"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 border border-emerald-400/40 hover:scale-105 active:scale-95 transition-all group"
      >
        <div className="relative">
          <WhatsAppIcon className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
        </div>
        <span className="hidden sm:inline font-bold text-sm tracking-tight pr-1">
          WhatsApp Chat
        </span>
      </a>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 relative rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ring-2 ring-blue-500/40 shadow-lg shadow-blue-500/25 bg-slate-900 shrink-0">
              <img
                src="/sichtbar-icon.png"
                alt="Sichtbar mit KI Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                SichtbarMitKI<span className="text-blue-500">.agency</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                DS Online Services
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#referenzen" className="hover:text-white transition-colors">Referenzen</a>
            <a href="#ueber-mich" className="hover:text-white transition-colors">Über Dirk</a>
            <a href="#pakete" className="hover:text-white transition-colors">Pakete</a>
            <a href="#vorteile" className="hover:text-white transition-colors">Vorteile</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/90 border border-emerald-500/30 transition-all shadow-sm"
              title="Per WhatsApp schreiben"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              <span>Erstgespräch vereinbaren</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800"
            aria-label="Menü umschalten"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white text-base font-medium"
            >
              Leistungen
            </a>
            <a
              href="#referenzen"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white text-base font-medium"
            >
              Referenzen
            </a>
            <a
              href="#ueber-mich"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white text-base font-medium"
            >
              Über Dirk Schmetzer
            </a>
            <a
              href="#pakete"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white text-base font-medium"
            >
              Pakete & Preise
            </a>
            <a
              href="#vorteile"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white text-base font-medium"
            >
              Vorteile
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white text-base font-medium"
            >
              FAQ
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white text-base font-medium"
            >
              Kontakt
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 rounded-xl"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                <span>Direkt per WhatsApp schreiben</span>
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block px-5 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-500/20"
              >
                Erstgespräch vereinbaren
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-28 md:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 text-blue-300 border border-blue-500/30 mb-6 sm:mb-8 backdrop-blur-sm shadow-sm max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse shrink-0" />
              <span className="text-center">Strategische Beratung • GEO & KI-Sichtbarkeit • E-Commerce • Analytics</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.14]">
              Sichtbarkeit & Strategie in der{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-400">
                Ära generativer KI
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Entscheider und Kunden suchen heute mit ChatGPT, Perplexity und Google AI Overviews.
              Wir machen Ihr Unternehmen und Ihren E-Commerce dort zur verlässlichen Top-Empfehlung –
              gestützt auf fundierte Strategie, rechtssichere Web-Analytics und smarte KI-Workflows.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
              <a
                href="#kontakt"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 rounded-xl shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Kostenloses Erstgespräch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 rounded-xl shadow-md shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Schnellkontakt</span>
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-800 rounded-xl transition-all"
              >
                <span>Leistungen ansehen</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Micro-Badges */}
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-slate-400 text-xs sm:text-sm font-medium">
              <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>ChatGPT & Perplexity</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>E-Commerce Strategie</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% DSGVO-Konform</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Senior Beratung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Leistungsübersicht (4 Säulen inklusive E-Commerce Beratung) */}
      <section id="services" className="py-24 bg-slate-900/40 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
              Fokussierte Kernbereiche
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Strategische Kompetenzen für Ihren Vorsprung
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Präzise Beratung an der Schnittstelle von generativer KI, fundierter E-Commerce-Architektur und belastbarer Datenanalyse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between hover:bg-slate-900/90 ${service.glow}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-cyan-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-all shadow-md">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-slate-800/80 mb-6">
                      {service.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all pt-2"
                  >
                    <span>Strategiegespräch anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Referenzen-Bereich */}
      <section id="referenzen" className="py-20 sm:py-24 relative overflow-hidden bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full">
              Erprobte Kundenprojekte
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Echte Ergebnisse aus der Praxis
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg">
              Keine theoretischen Konzepte: Hier sehen Sie maßgeschneiderte Entwicklungen von nativen Android-Apps bis hin zu hochperformanten Web-Plattformen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {references.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <span>{item.domain}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <div className="flex items-center gap-4 mb-5">
                      {item.logo ? (
                        <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 p-2 flex items-center justify-center shrink-0 shadow-md">
                          <img src={item.logo} alt={`${item.title} Logo`} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 shadow-md">
                          <Icon className="w-7 h-7" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight truncate">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-400 truncate">{item.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-800/80 hover:bg-slate-700 px-4 py-2.5 rounded-xl border border-slate-700 transition-all hover:scale-[1.02]"
                    >
                      <span>Live ansehen</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="#kontakt"
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      <span>Ähnliches Projekt planen</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Vita / Über Dirk Schmetzer */}
      <section id="ueber-mich" className="py-20 sm:py-24 relative overflow-hidden bg-slate-900/30 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full">
              Hinter den Kulissen
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Über Dirk Schmetzer
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg">
              Senior Business & E-Commerce Stratege • KI-Implementierer auf Augenhöhe
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Col: Photo & Bio Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="relative mb-6">
                <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-3xl overflow-hidden border-2 border-blue-500/40 shadow-2xl shadow-blue-500/20 relative group">
                  <img
                    src="/dirk-schmetzer.png"
                    alt="Dirk Schmetzer Portrait"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600/90 backdrop-blur-md border border-blue-400/30 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full whitespace-nowrap shadow-md">
                  Gründer & Stratege
                </div>
              </div>

              <div className="text-center mt-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">Dirk Schmetzer</h3>
                <p className="text-xs font-medium text-blue-400 mt-1">
                  Senior Manager New Business & Kooperationen • E-Commerce & KI-Stratege
                </p>
                <p className="text-xs text-slate-400 mt-0.5">DS Online Services, Stuttgart</p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  „Ich verbinde über 15 Jahre Erfahrung im performance-orientierten Marketing- und Agenturgeschäft mit modernster generativer KI, E-Commerce-Architektur und solider Software-Entwicklung.“
                </p>
                <p>
                  <strong className="text-white">Mein Rollenverständnis:</strong> Ich verstehe mich vor allem als strategischer Sparringspartner und Architekt. Statt mich in operativem Agentur-Klein-Klein zu verlieren, erarbeite ich mit Ihnen die übergeordneten Hebel: Wie wird Ihr Angebot in KI-Suchmaschinen zur Nummer 1? Welche E-Commerce-Infrastruktur skaliert profitabel? Und wo lohnt sich Automatisierung wirklich?
                </p>
              </div>

              {/* Action Buttons: LinkedIn & WhatsApp */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Direkt per WhatsApp kontaktieren</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/dirkschmetzer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl font-bold text-sm text-white bg-[#0A66C2] hover:bg-[#004182] transition-all shadow-md shadow-[#0A66C2]/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.69c-.93 0-1.68.75-1.68 1.68s.75 1.68 1.68 1.68 1.68-.75 1.68-1.68-.75-1.68-1.68-1.68Z" />
                  </svg>
                  <span>Auf LinkedIn vernetzen</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Right Col: Timeline & Experience Stations */}
            <div className="lg:col-span-7 space-y-5">
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Erfahrung & Werdegang
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Kompetenzen aus der Praxis, nicht aus dem Lehrbuch
                </h3>
              </div>

              <div className="space-y-4">
                {milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all hover:bg-slate-900/80"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-white">{m.role}</h4>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {m.focus}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-400 mb-2">{m.company}</p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vertrauensbereich / Vorteile */}
      <section id="vorteile" className="py-20 sm:py-24 bg-slate-950 border-t border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full">
              Warum DS Online Services
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Ihr strategischer Partner für greifbare Ergebnisse
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg">
              Kein Agentur-Fachchinesisch, keine leeren Buzzwords. Wir bauen funktionierende Systeme mit klarem Return on Investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 hover:border-slate-700 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Statement Box */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-blue-500/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Philosophie
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Erst beweisen, dann skalieren.
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                  Starten Sie mit einem transparenten Testlauf. Sobald Ihr Unternehmen in KI-Suchmaschinen verlässlich empfohlen wird und messbare Leads generiert, bauen wir das System weiter aus.
                </p>
              </div>
              <a
                href="#kontakt"
                className="shrink-0 w-full md:w-auto text-center px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all text-sm"
              >
                Strategie besprechen
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-md shrink-0">
                  <img
                    src="/dirk-schmetzer.png"
                    alt="Dirk Schmetzer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Dirk Schmetzer</p>
                  <p className="text-xs text-slate-400">DS Online Services & SichtbarMitKI.agency, Stuttgart</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/sichtbar-full-logo.png"
                  alt="SichtbarMitKI Logo"
                  className="h-7 object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4b. FAQ - Häufig gestellte Fragen (GEO & KI-Sichtbarkeit) */}
      <section id="faq" className="py-20 sm:py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Häufige Fragen & Antworten</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Klarheit zu Digitalberatung, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                GEO & KI-Workflows
              </span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              Die wichtigsten Antworten rund um die Auffindbarkeit in generativen Sprachmodellen, smarte Web-Analytics und die Zusammenarbeit mit Dirk Schmetzer.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/90 border-blue-500/40 shadow-lg shadow-blue-500/5'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-white text-base sm:text-lg tracking-tight">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-blue-500/20 text-blue-400'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick CTA inside FAQ */}
          <div className="mt-10 sm:mt-12 text-center bg-slate-900/30 border border-slate-800/60 rounded-2xl p-5 sm:p-6">
            <p className="text-sm text-slate-300 mb-3">
              Haben Sie eine spezifische Frage zu Ihrem Unternehmen oder Ihrer Systemarchitektur?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-sm"
              >
                <span>Frage direkt an Dirk stellen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/60 transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
                <span>Per WhatsApp nachfragen</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transparente Pakete & Investition */}
      <section id="pakete" className="py-20 sm:py-28 relative border-t border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
              Transparente Investition & faire Modelle
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Wähle das passende Paket für deinen Erfolg
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Faire Festpreise und flexibles Sparring ohne versteckte Kosten. Wir verkaufen messbare Resultate statt zeitraubender Stundenkontingente.
            </p>
          </div>

          {/* 3 Spalten Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {pricingPackages.map((pkg) => {
              const isHighlighted = activePackageId === pkg.id;
              const isSelected = selectedPackage?.id === pkg.id;

              return (
                <div
                  key={pkg.id}
                  onMouseEnter={() => setHoveredPackageId(pkg.id)}
                  onMouseLeave={() => setHoveredPackageId(null)}
                  onClick={() => handleSelectPackage(pkg)}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out relative cursor-pointer ${
                    isHighlighted
                      ? 'bg-slate-900/95 border-2 border-blue-500 shadow-2xl shadow-blue-500/25 ring-2 ring-blue-500/40 lg:-translate-y-3 scale-[1.02] z-10'
                      : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 shadow-xl opacity-90 hover:opacity-100 lg:translate-y-0 scale-100'
                  }`}
                >
                  {/* Badge */}
                  {pkg.popular ? (
                    <div
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap transition-all duration-300 ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-500/40 scale-105'
                          : 'bg-slate-800 border border-slate-700 text-slate-300'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span>Empfehlung • Bestseller</span>
                    </div>
                  ) : isSelected ? (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg shadow-emerald-500/30 flex items-center gap-1.5 whitespace-nowrap">
                      <Check className="w-3.5 h-3.5" />
                      <span>Ausgewählt</span>
                    </div>
                  ) : null}

                  <div>
                    {!pkg.popular && !isSelected && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-4">
                        {pkg.badge}
                      </div>
                    )}
                    {(pkg.popular || isSelected) && <div className="h-2 mb-3" />}

                    <h3
                      className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                        isHighlighted ? 'text-white' : 'text-slate-100'
                      }`}
                    >
                      {pkg.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed min-h-[40px]">
                      {pkg.description}
                    </p>

                    {/* Preis */}
                    <div className="mt-6 pb-6 border-b border-slate-800/80">
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-4xl sm:text-5xl font-extrabold tracking-tight transition-colors ${
                            isHighlighted ? 'text-white' : 'text-slate-200'
                          }`}
                        >
                          {pkg.price}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-slate-400 block mt-1">
                        {pkg.period}
                      </span>
                    </div>

                    {/* Features Liste */}
                    <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-300">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${
                              isHighlighted ? 'text-blue-400' : 'text-slate-500'
                            }`}
                          />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-6 border-t border-slate-800/80">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectPackage(pkg);
                      }}
                      className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isHighlighted
                          ? 'text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 active:scale-98'
                          : 'text-slate-200 bg-slate-800/90 hover:bg-slate-750 hover:text-white border border-slate-700 active:scale-98'
                      }`}
                    >
                      <span>{isSelected ? 'Paket gewählt ✓' : pkg.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Kleiner Infoblock zur Kleinunternehmerregelung & Transparenz */}
          <div className="mt-12 sm:mt-16 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mb-2.5">
              <span className="inline-flex items-center gap-1.5 text-blue-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Transparenz & Planungssicherheit</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span>Endpreise gemäß § 19 UStG (keine MwSt.)</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span>Keine versteckten Gebühren</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet oder ausgewiesen.
              Im unverbindlichen 30-minütigen Erstgespräch ermitteln wir gemeinsam, welches Setup für Ihre aktuellen Ziele den höchsten wirtschaftlichen Mehrwert stiftet.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Kontakt-Sektion / CTA am Ende */}
      <section id="kontakt" className="py-20 sm:py-28 bg-slate-900/30 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Synchroner, zentrierter Section-Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
              Lassen Sie uns sprechen
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Kostenloses Erstgespräch anfragen
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              In 30 Minuten analysieren wir Ihre aktuelle Sichtbarkeit in generativen KI-Suchmaschinen, prüfen Ihr E-Commerce-Potenzial und zeigen 3 konkrete Quick-Wins für Ihr Unternehmen auf.
            </p>
          </div>

          {/* Symmetrisches 2-Spalten Grid mit exakt gleicher Höhe (items-stretch) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Linke Karte: Direkte Kontaktwege & Profil */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-between backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Experte Header */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-800/80">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-lg shrink-0">
                    <img
                      src="/dirk-schmetzer.png"
                      alt="Dirk Schmetzer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Verfügbar für strategische Erstgespräche</span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight truncate">
                      Direkter Draht zu Dirk Schmetzer
                    </h3>
                    <p className="text-xs text-slate-400 truncate">
                      DS Online Services & SichtbarMitKI.agency, Stuttgart
                    </p>
                  </div>
                </div>

                {/* Direkte Kontaktkarten */}
                <div className="mt-6 space-y-3.5">
                  {/* WhatsApp */}
                  <a
                    href={currentWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-950/70 transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <WhatsAppIcon className="w-5 h-5 fill-emerald-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                          WhatsApp Direktkontakt
                        </div>
                        <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                          01590 6122744
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 shrink-0">
                      <span className="hidden sm:inline">Jetzt chatten</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>

                  {/* Telefon */}
                  <a
                    href="tel:+4915906122744"
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-950/90 transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Telefonische Direktdurchwahl
                        </div>
                        <div className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                          +49 1590 6122744
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-blue-400 shrink-0">
                      <span className="hidden sm:inline">Anrufen</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>

                  {/* E-Mail */}
                  <a
                    href={currentMailtoUrl}
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-950/90 transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/15 text-indigo-400 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Offizielle E-Mail-Adresse
                        </div>
                        <div className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                          hallo@sichtbarmitki.agency
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-indigo-400 shrink-0">
                      <span className="hidden sm:inline">Schreiben</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>

                  {/* Standort */}
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-950/40 border border-slate-800/60 text-slate-400 text-xs">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">Riedgrasweg 30, 70599 Stuttgart & Remote bundesweit</span>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
                <span className="text-base shrink-0">⚡</span>
                <span>
                  <strong>Schnelle Antwort garantiert:</strong> Rückmeldungen erfolgen verlässlich innerhalb von 24 Stunden.
                </span>
              </div>
            </div>

            {/* Rechte Karte: Anfrage-Formular */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-between backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="pb-6 border-b border-slate-800/80">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-400 mb-1">
                    <Send className="w-3.5 h-3.5" />
                    <span>Unverbindliche Anfrage</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Nachricht & Vorhaben senden
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Füllen Sie die Felder aus – wir bereiten uns individuell auf Ihr Erstgespräch vor.
                  </p>
                </div>

                {/* Gewähltes Paket Badge (falls vorausgewählt) */}
                {selectedPackage && !formSubmitted && (
                  <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/60 border border-blue-500/40 flex items-center justify-between gap-3 text-xs shadow-md">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
                          Gewähltes Paket für Anfrage
                        </div>
                        <div className="text-white font-bold truncate">
                          {selectedPackage.title} <span className="text-blue-300 font-normal">({selectedPackage.price})</span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPackage(null);
                        setFormData((prev) => ({
                          ...prev,
                          message: ''
                        }));
                      }}
                      className="text-slate-400 hover:text-white underline text-[11px] shrink-0 cursor-pointer px-2 py-1 rounded hover:bg-slate-800/60 transition-colors"
                      title="Paket-Auswahl entfernen"
                    >
                      Entfernen ✕
                    </button>
                  </div>
                )}

                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Vielen Dank für Ihre Nachricht!</h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                      Ihre Anfrage wurde erfolgreich an <strong>hallo@sichtbarmitki.agency</strong> übermittelt. Dirk Schmetzer meldet sich innerhalb von 24 Stunden bei Ihnen.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={currentWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                        <span>Dringend? Per WhatsApp schreiben</span>
                      </a>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setSelectedPackage(null);
                          setFormData({ name: '', email: '', company: '', phone: '', message: '' });
                        }}
                        className="text-xs font-semibold text-slate-400 hover:text-white underline py-2 cursor-pointer"
                      >
                        Weitere Nachricht senden
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="name">
                          Ihr Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Max Mustermann"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="email">
                          E-Mail-Adresse *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="max@unternehmen.de"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="phone">
                          Telefonnummer (optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0151 12345678"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="company">
                          Unternehmen / Website (optional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="www.mein-unternehmen.de"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="message">
                        Ihre Ausgangslage / Was möchten Sie erreichen?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Kurze Beschreibung Ihrer Herausforderung (z. B. KI-Sichtbarkeit, E-Commerce-Beratung, Tracking)..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none min-h-[95px]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Anfrage wird übermittelt...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kostenloses Erstgespräch anfragen</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>100% DSGVO-konform</span>
                </span>
                <span className="text-slate-400">Kostenlos & unverbindlich</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Minimaler Footer */}
      <footer className="py-12 border-t border-slate-900 bg-slate-950 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-750 shrink-0">
              <img
                src="/sichtbar-icon.png"
                alt="Sichtbar mit KI Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-bold text-slate-300">DS Online Services</span>
              <span className="mx-2 text-slate-600">•</span>
              <span className="text-slate-400">SichtbarmitKI.agency</span>
              <span className="mx-2 text-slate-600">•</span>
              <span>© {new Date().getFullYear()} Dirk Schmetzer. Alle Rechte vorbehalten.</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => setCookieBannerManualOpen(true)}
              className="hover:text-slate-300 transition-colors underline underline-offset-4 cursor-pointer text-xs"
            >
              Cookie-Einstellungen
            </button>
            <a
              href="/impressum"
              onClick={(e) => {
                e.preventDefault();
                navigate('/impressum');
              }}
              className="hover:text-slate-300 transition-colors underline underline-offset-4"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              onClick={(e) => {
                e.preventDefault();
                navigate('/datenschutz');
              }}
              className="hover:text-slate-300 transition-colors underline underline-offset-4"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </footer>

      {/* Cookie Banner with Google Consent Mode v2 */}
      <CookieBanner
        isOpenManually={cookieBannerManualOpen}
        onCloseManual={() => setCookieBannerManualOpen(false)}
      />
    </div>
  );
}

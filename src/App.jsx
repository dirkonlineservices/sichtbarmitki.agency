import React, { useState } from 'react';
import CookieBanner from './components/CookieBanner.jsx';
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
  X
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieBannerManualOpen, setCookieBannerManualOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      icon: SearchCheck,
      badge: "GEO & AI Search",
      title: "GEO / KI-Sichtbarkeit",
      description:
        "Werden Sie die Nummer 1 Antwort in ChatGPT, Perplexity, Gemini & Co. Wir optimieren Ihre Marke und Inhalte gezielt für generative KI-Suchmaschinen.",
      points: [
        "LLM-spezifische Content-Strukturierung & Schema-Markup",
        "Präsenz & Zitation in AI-Knowledge-Bases",
        "Monitoring von KI-Suchantworten & Marken-Erwähnungen"
      ],
      gradient: "from-blue-500/10 to-indigo-500/10",
      borderGlow: "group-hover:border-blue-500/50"
    },
    {
      icon: LineChart,
      badge: "Data & Privacy",
      title: "Tracking & Smarte Analytics",
      description:
        "Schluss mit Daten-Blindflug: Wir implementieren 100% DSGVO-konforme Tracking-Systeme und automatisierte Dashboards mit KI-Erkenntnissen.",
      points: [
        "Google Consent Mode v2 & Server-Side Tagging",
        "KI-gestützte Auswertung von User-Journeys & Funnels",
        "Echtzeit-Dashboards ohne undurchsichtiges Datenchaos"
      ],
      gradient: "from-indigo-500/10 to-purple-500/10",
      borderGlow: "group-hover:border-indigo-500/50"
    },
    {
      icon: Workflow,
      badge: "Automation",
      title: "KI-Workflows & Implementierung",
      description:
        "Maßgeschneiderte KI-Automatisierungen, die repetitive Arbeit eliminieren, Anfragen qualifizieren und Teams spürbar entlasten.",
      points: [
        "Automatisierte Lead-Qualifizierung & Chat-Assistenten",
        "Verbindung bestehender Tools mit modernen Sprachmodellen",
        "Praxisnahe Umsetzung ohne teure Abo-Fallen"
      ],
      gradient: "from-cyan-500/10 to-blue-500/10",
      borderGlow: "group-hover:border-cyan-500/50"
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
        "Maßgeschneiderter HTML5-Audio-Player mit Offline-Funktionalität",
        "Direkte Cloud-Datenbankanbindung ohne Drittanbieter-Abo-Kosten (kein n8n)",
        "100% DSGVO-konform mit Google Consent Mode v2"
      ],
      tag: "Live-Projekt"
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
        "Moderne, conversion-optimierte Web-Präsenz und Buchungsplattform für maßgeschneiderte Musikmomente, Event-Begleitung und personalisierte Kompositionen.",
      highlights: [
        "Blitzschnelle Ladezeiten (Lighthouse Score 95+) für minimale Absprungraten",
        "GEO-optimierte Inhaltsstruktur für Auffindbarkeit in ChatGPT, Gemini & Google",
        "Reibungslose mobile User Experience & zielgerichtete Lead-Formulare",
        "DSGVO-konformes Analytics-Setup zur messbaren Buchungsoptimierung"
      ],
      tag: "Live-Projekt"
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "100% DSGVO- & Rechtssicher",
      desc: "Keine Abmahnrisiken: Wir setzen auf saubere Consent-Konzepte und europäische Datenschutzstandards."
    },
    {
      icon: TrendingUp,
      title: "Messbare KI-Rankings",
      desc: "Transparente Kennzahlen statt leerer Agentur-Versprechen: Sehen Sie genau, wo KI-Modelle Ihr Unternehmen empfehlen."
    },
    {
      icon: Clock,
      title: "Schnelle Umsetzung ohne Overhead",
      desc: "Agile, direkte Zusammenarbeit ohne monatelange Konzeptionsschleifen und ohne Agentur-Mondpreise."
    },
    {
      icon: Sparkles,
      title: "Zukunftssichere Technologie",
      desc: "Modernste Web-Standards, performanter Code und direkte Anbindung an die führenden KI-Ökosysteme."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 transition-all">
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
              <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                DS Online Services
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#referenzen" className="hover:text-white transition-colors">Referenzen</a>
            <a href="#vorteile" className="hover:text-white transition-colors">Vorteile</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              <span>Erstgespräch vereinbaren</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-850 border border-slate-800"
            aria-label="Menü umschalten"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-3 pb-6 space-y-3">
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
              href="#vorteile"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white text-base font-medium"
            >
              Vorteile
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white text-base font-medium"
            >
              Kontakt
            </a>
            <div className="pt-2">
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
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden">
        {/* Background Glowing Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-12 right-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-8 backdrop-blur-sm shadow-sm animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>Generative Engine Optimization (GEO) & KI-Implementierung</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
              Werden Sie sichtbar in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                generativen KI-Suchmaschinen
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Kunden suchen heute mit ChatGPT, Perplexity und Google AI Overviews.
              Wir machen Ihr Unternehmen dort zur verlässlichen Top-Empfehlung –
              ergänzt durch rechtssichere Web-Analytics und smarte KI-Workflows.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#kontakt"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Kostenloses Erstgespräch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-800 rounded-xl transition-all"
              >
                <span>Leistungen ansehen</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Micro-Badges */}
            <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-400 text-xs sm:text-sm font-medium">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>ChatGPT & Perplexity Ready</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>100% DSGVO-Konform</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Keine Agentur-Mondpreise</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Echte Kunden-Referenzen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Leistungsübersicht */}
      <section id="services" className="py-24 bg-slate-900/40 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
              Fokussierte Kompetenzen
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Unsere Kernleistungen für Ihren KI-Vorsprung
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Präzise Lösungen an der Schnittstelle von generativer KI, fundierten Datenanalysen und effizienter Prozessautomation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between ${service.borderGlow}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 border border-slate-700">
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
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
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
                    <span>Jetzt anfragen</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Referenzen-Bereich */}
      <section id="referenzen" className="py-24 relative overflow-hidden bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full">
              Erprobte Kundenprojekte
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Echte Ergebnisse aus der Praxis
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Keine theoretischen Konzepte: Hier sehen Sie maßgeschneiderte Entwicklungen von nativen Android-Apps bis hin zu hochperformanten Web-Plattformen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {references.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 mb-6">
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
                      <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-400">{item.subtitle}</p>
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

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
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

      {/* 3. Vertrauensbereich / Vorteile */}
      <section id="vorteile" className="py-24 bg-slate-900/30 border-t border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full">
              Warum DS Online Services
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Ihr Partner für greifbare Ergebnisse
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Kein Agentur-Fachchinesisch, keine leeren Buzzwords. Wir bauen funktionierende Systeme mit klarem Return on Investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all group"
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

          {/* Statement Box mit Dirk Schmetzer Profil */}
          <div className="mt-16 bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-blue-500/30 rounded-3xl p-8 sm:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
                className="shrink-0 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all text-sm"
              >
                Strategie besprechen
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-md shrink-0">
                  <img
                    src="/dirk-schmetzer-0.jpg"
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

      {/* 4. Kontakt-Sektion / CTA am Ende */}
      <section id="kontakt" className="py-24 bg-slate-900/50 border-t border-slate-800/80 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Left Column: Info */}
              <div className="lg:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Lassen Sie uns sprechen
                </span>
                <h2 className="text-3xl font-extrabold text-white mt-2 tracking-tight">
                  Kostenloses Erstgespräch anfragen
                </h2>
                <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                  In 30 Minuten analysieren wir Ihre aktuelle Sichtbarkeit in generativen KI-Suchmaschinen und zeigen Ihnen 3 konkrete Quick-Wins für Ihr Unternehmen.
                </p>

                <div className="mt-8 space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>hallo@sichtbarmitki.agency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+49 1590 6122744</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Stuttgart & Remote bundesweit</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    💡 Unverbindlich & ohne Verkaufsdruck. Antwort garantiert innerhalb von 24 Stunden.
                  </p>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-3 bg-slate-950/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
                {formSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Vielen Dank für Ihre Anfrage!</h3>
                    <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
                      Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden mit Terminvorschlägen bei Ihnen.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline"
                    >
                      Weitere Nachricht senden
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="message">
                        Ihre Nachricht / Ausgangslage
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Kurze Beschreibung Ihrer aktuellen Herausforderung..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kostenloses Erstgespräch anfragen</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Minimaler Footer mit Impressum- und Datenschutz-Link */}
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
            <a href="/impressum" className="hover:text-slate-300 transition-colors underline underline-offset-4">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-slate-300 transition-colors underline underline-offset-4">
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

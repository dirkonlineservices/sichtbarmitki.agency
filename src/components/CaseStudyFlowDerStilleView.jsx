import React, { useEffect } from 'react';
import {
  ArrowLeft,
  Smartphone,
  ShieldCheck,
  Zap,
  Code2,
  Lock,
  Layers,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Cpu,
  CreditCard,
  MessageSquare,
  Search,
  GitBranch,
  ChevronRight,
  MapPin,
  Clock,
  UserCheck,
  Send
} from 'lucide-react';

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.21 8.21 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>
    </svg>
  );
}

export default function CaseStudyFlowDerStilleView({ onNavigateHome, onOpenContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Case Study: App- & Plattform-Entwicklung Flow der Stille | DS Online Services Stuttgart";
  }, []);

  const techStack = [
    {
      category: "Frontend UI/UX",
      icon: Code2,
      tech: "React 18, TypeScript, Tailwind CSS, Vite 6, Lucide Icons",
      benefit: "Ultraschnelle Ladezeiten (< 0,8s), interaktive Single Page Application, flüssige Animationen und barrierefreies Design nach WCAG-AA Standard."
    },
    {
      category: "Mobile Cross-Platform",
      icon: Smartphone,
      tech: "Capacitor (v6/v7), Swift, Xcode, Android SDK",
      benefit: "1 gemeinsame Codebase für Web, iOS App Store und Google Play Store. Spart bis zu 60% Entwicklungs- und Pflegekosten."
    },
    {
      category: "Native iOS-Features",
      icon: Cpu,
      tech: "AVAudioSession (.playback), UIBackgroundModes (audio), Apple StoreKit",
      benefit: "Unterbrechungsfreies Audio-Streaming im iPhone-Sperrbildschirm (Lock-Screen), Steuerung via Control Center & Apple Watch."
    },
    {
      category: "Backend & Cloud",
      icon: Layers,
      tech: "Supabase (PostgreSQL, Auth, RLS, Edge RPC), Node.js / Express",
      benefit: "Sichere Nutzerverwaltung (Social Login & Magic Links), datenbankgestützte Medienfreigabe mit Row Level Security (RLS) ohne teure Drittanbieter-Abo-Kosten."
    },
    {
      category: "Payments & In-App-Käufe",
      icon: CreditCard,
      tech: "PayPal Smart Buttons, Cordova Plugin Purchase, Apple StoreKit, Google Play Billing",
      benefit: "Duales Bezahlsystem: Express-Kauf im Web + native In-App-Käufe im App Store & Google Play mit vorschriftsmäßigem 'Käufe wiederherstellen'."
    },
    {
      category: "Conversion & Monitoring",
      icon: MessageSquare,
      tech: "Telegram Bot API, GA4 DataLayer, Transaktions-Mail",
      benefit: "Echtzeit-Meldung bei Checkout-Abbrüchen (Produkt, Seite, Preis) direkt an geschützte Telegram-Schnittstelle zur kontinuierlichen Funnel-Optimierung."
    },
    {
      category: "SEO & Geo-Schnittstellen",
      icon: Search,
      tech: "Schema.org (AudioObject), dynamische Sitemap, Google Shopping XML-Feed",
      benefit: "Vollständige technische SEO-Bereinigung, 301-Redirects, saubere Canonical-Struktur und Anbindung an das Google Merchant Center."
    },
    {
      category: "DevOps & Dual-OS-Sync",
      icon: GitBranch,
      tech: "Git, GitHub, npm Overrides, Antigravity AI-Pairing (Mac & Windows)",
      benefit: "Plattformübergreifender Workflow mit automatischem Sicherheitsblock zur Verhinderung von Datenverlusten zwischen Windows & Mac."
    }
  ];

  const milestones = [
    {
      badge: "Meilenstein 1",
      title: "Enterprise-Sicherheitshärtung (0-Vulnerability-Standard)",
      desc: "Umfassender Server- und Dependency-Audit auf dem Hostinger-VPS. Durch gezielte Overrides (u. a. esbuild 0.28.2, uuid 11.1.0) wurden alle bekannten Sicherheitslücken geschlossen. Ergebnis: 0 bekannte Schwachstellen nach NPM- und OWASP-Standard."
    },
    {
      badge: "Meilenstein 2",
      title: "Native iOS-Transformation & Sperrbildschirm-Audio",
      desc: "Implementierung der nativen Swift-Audio-Session (.playback) und Background-Modes. Das Audio-Streaming läuft nahtlos weiter, wenn das iPhone gesperrt wird, die App minimiert ist oder das Gerät auf lautlos gestellt ist."
    },
    {
      badge: "Meilenstein 3",
      title: "Harmonisierung des 'Ruhe-Shops' & Express-Kauf",
      desc: "Vollständige Umstellung vom trägen Abo-Modell auf themenbasierte Einzelkäufe und Bundles. Einführung des passwortlosen Magic-Link-Express-Kaufs sowie serverseitige 301-Weiterleitungen für alle Alt-URLs zur Ranking-Sicherung."
    },
    {
      badge: "Meilenstein 4",
      title: "Echtzeit-Abbruch-Intelligence via Telegram-Bot",
      desc: "Automatisierte Erkennung von Kaufabbrüchen: Tritt an einer Funnel-Stufe ein Problem auf, erhält das Team diskret und in Echtzeit die Abbruch-Details (Produkt, Stufe, Zeitpunkt) via Telegram-Bot zur sofortigen UX-Optimierung."
    },
    {
      badge: "Meilenstein 5",
      title: "Technische SEO & Google Shopping XML-Feed",
      desc: "Bereinigung von Canonical-Konflikten, Rich Snippets via Schema.org (AudioObject) und vollautomatischer XML-Feed-Generator zur Platzierung digitaler Entspannungspakete im Google Merchant Center."
    }
  ];

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Header / Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Zurück zur Startseite</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href="https://flow-der-stille.de"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
            >
              <span>flow-der-stille.de</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenContact}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              Projekt anfragen
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.18),rgba(255,255,255,0))]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
              Case Study & Tech-Deep-Dive
            </span>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Großraum Stuttgart & BW
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Full-Stack App- & Plattform-Entwicklung für <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">„Flow der Stille“</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            Wie DS Online Services aus Stuttgart eine native iOS- & Android-Meditations-App mit Supabase-Backend, unterbrechungsfreiem Sperrbildschirm-Audio und In-App-Bezahlsystem aus <strong>einer einzigen Codebase</strong> realisierte.
          </p>

          {/* Meta Info Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-blue-400" />
              <span>Autor: <strong className="text-slate-200">Dirk Schmetzer</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Standort: <strong className="text-slate-200">Stuttgart & Region Mittlerer Neckar</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Lesezeit: <strong className="text-slate-200">ca. 8 Min.</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        
        {/* KPI / Metrics Highlights */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-400">1</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-semibold">Gemeinsame Codebase</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Web, iOS & Android</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">0</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-semibold">Sicherheitslücken</div>
            <div className="text-[11px] text-slate-500 mt-0.5">0-Vulnerability Standard</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400">&lt; 0.8s</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-semibold">Ladezeit (Web & App)</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Core Web Vitals grün</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-400">100%</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-semibold">DSGVO-konform</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Google Consent Mode v2</div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span>Executive Summary: Die Herausforderung</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            „Flow der Stille“ (<em>flow-der-stille.de</em>) ist eine stark wachsende digitale Plattform für geführte Meditationen, Seelenreisen und Entspannung der Autorin Jacqueline Schmetzer. Die Herausforderung für viele digitale Produkte im Großraum Stuttgart und bundesweit:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
              <span><strong>Träge Baukastensysteme:</strong> Websites stoßen bei speziellem Audio-Streaming, dynamischen Playern und Ladezeiten schnell an harte Grenzen.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
              <span><strong>Teure Software-Abo-Kosten:</strong> Externe Cloud-Tools (wie n8n oder Zapier) treiben die monatlichen Fixkosten in die Höhe und schaffen DSGVO-Risiken.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
              <span><strong>Fragmentierte Entwicklung:</strong> Separate Teams oder Codebasen für Web, iOS und Android verdreifachen die Entwicklungszeit und das Budget.</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
            <strong>Unser Lösungsansatz:</strong> Eine maßgeschneiderte Full-Stack-Architektur aus einer Hand – schlank, blitzschnell, vollständig modular und ohne monatliche Lizenzgebühren für Drittanbieter-Baukästen.
          </p>
        </section>

        {/* Section 1: Tech-Stack */}
        <section className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              🛠️ 1. Der eingesetzte High-End Tech-Stack
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Moderne Technologien, die Geschwindigkeit, Skalierbarkeit und geringe Wartungskosten garantieren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {techStack.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-5 sm:p-6 transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">{item.category}</h3>
                      <p className="text-xs font-mono text-slate-400 truncate">{item.tech.split(',')[0]}...</p>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-blue-300 bg-blue-950/40 border border-blue-900/40 px-3 py-1.5 rounded-lg">
                    {item.tech}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.benefit}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Concrete Milestones */}
        <section className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              🚀 2. Was wir konkret umgesetzt haben (Die Meilensteine)
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Vom Sicherheitsaudit bis zur nativen iOS-Store-Präsenz – Schritt für Schritt zur marktführenden Plattform.
            </p>
          </div>

          <div className="space-y-4">
            {milestones.map((ms, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-900/70 to-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-7 hover:border-emerald-500/30 transition-all space-y-2.5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-bold">
                    {ms.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">{ms.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                  {ms.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Regional Focus Stuttgart */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-3 text-emerald-400">
            <MapPin className="w-6 h-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              App- & Webentwicklung im Großraum Stuttgart: Warum Entscheider auf DS Online Services setzen
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Als regional verankerte Digitalagentur mit Sitz in Stuttgart unterstützen wir mittelständische Unternehmen, Praxisinhaber, Dienstleister und E-Commerce-Brands im gesamten Großraum (Stuttgart, Esslingen, Böblingen, Ludwigsburg, Reutlingen) bei anspruchsvollen Softwareprojekten:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
              <span><strong>Persönlicher Ansprechpartner:</strong> Direkter Kontakt zu Dirk Schmetzer – keine Weiterleitung an wechselnde Junior-Kräfte.</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
              <span><strong>Volle Code-Freiheit:</strong> 100% Eigentum am Quellcode ohne Vendor-Lock-in oder wiederkehrende Plattformgebühren.</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
              <span><strong>Höchste DSGVO-Standards:</strong> Serverstandorte in Deutschland/EU, Google Consent Mode v2 & 0-Vulnerability Prinzip.</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
              <span><strong>GEO & KI-Sichtbarkeit:</strong> Websites werden von Beginn an für KI-Suchsysteme (ChatGPT Search, Gemini, Perplexity) optimiert.</span>
            </div>
          </div>
        </section>

        {/* Call to Action Box */}
        <section className="bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 border-2 border-blue-500/40 rounded-3xl p-8 text-center space-y-6 shadow-2xl shadow-blue-500/10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
            Projekt-Erstgespräch vereinbaren
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Planen Sie ein ähnliches App- oder Plattform-Projekt?
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Lassen Sie uns in einem unverbindlichen 30-minütigen Strategiegespräch klären, wie Ihre Anwendung technisch am effizientesten realisiert werden kann – ob als native iOS/Android-App, moderne Web-Plattform oder performante Prozessoptimierung.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Unverbindliches Erstgespräch anfragen</span>
            </button>

            <a
              href="https://wa.me/4915906122744?text=Hallo%20Dirk%2C%20ich%20habe%20die%20Case%20Study%20zu%20Flow%20der%20Stille%20gelesen%20und%20m%C3%B6chte%20ein%20Projekt%20besprechen."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Direkt via WhatsApp chatten</span>
            </a>
          </div>
        </section>

      </div>
    </article>
  );
}

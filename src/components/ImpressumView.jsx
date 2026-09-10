import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';

export default function ImpressumView({ onNavigateHome, onOpenCookies, onNavigateDatenschutz }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 p-2 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-500/40 transition-all">
              <img
                src="/sichtbar-icon.png"
                alt="SichtbarMitKI Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                sichtbarmit<span className="text-blue-400">Ki</span>.agency
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                DS Online Services
              </p>
            </div>
          </button>

          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zur Startseite</span>
          </button>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Rechtliche Angaben
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Impressum
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Gesetzliche Anbieterkennzeichnung gemäß § 5 TMG / § 18 MStV
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base shadow-xl">
            
            {/* Angaben gemäß § 5 TMG */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-1 text-slate-200">
                <p className="font-semibold text-lg text-white">DS Online Services</p>
                <p>Inhaber: Dirk Schmetzer</p>
                <p>Riedgrasweg 30</p>
                <p>70599 Stuttgart</p>
                <p>Deutschland</p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-3">Kontakt</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Telefon: <a href="tel:+4915906122744" className="text-blue-400 hover:underline font-medium">+49 1590 6122744</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Offizielle E-Mail: <a href="mailto:hallo@sichtbarmitki.agency" className="text-blue-400 hover:underline font-medium">hallo@sichtbarmitki.agency</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Direkte Alternative: <a href="mailto:dirk.online.services@gmail.com" className="text-blue-400 hover:underline font-medium">dirk.online.services@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Website: <a href="https://www.sichtbarmitki.agency" className="text-blue-400 hover:underline">www.sichtbarmitki.agency</a></span>
                </div>
              </div>
            </div>

            {/* Kleinunternehmerregelung */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-3">Umsatzsteuer / Kleinunternehmerregelung</h2>
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 text-slate-300">
                <p>
                  <strong className="text-white">Hinweis nach § 19 UStG:</strong> Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet und diese folglich auf Rechnungen nicht gesondert ausgewiesen.
                </p>
              </div>
            </div>

            {/* Redaktionell Verantwortlicher */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-2">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV / § 18 Abs. 2 MStV
              </h2>
              <p className="text-slate-200">Dirk Schmetzer</p>
              <p>Riedgrasweg 30</p>
              <p>70599 Stuttgart</p>
            </div>

            {/* EU-Streitschlichtung */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-2">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>.<br />
                Unsere E-Mail-Adressen finden Sie oben im Impressum.
              </p>
            </div>

            {/* Verbraucherstreitbeilegung */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Haftung für Inhalte und Links */}
            <div className="pt-6 border-t border-slate-800/80 space-y-4">
              <h2 className="text-xl font-bold text-white">Haftung für Inhalte und Links</h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div className="pt-6 border-t border-slate-800/80 space-y-3">
              <h2 className="text-xl font-bold text-white">Urheberrecht</h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Dirk Schmetzer – DS Online Services. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onNavigateHome}
              className="hover:text-slate-300 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Startseite
            </button>
            <button
              onClick={onNavigateDatenschutz}
              className="hover:text-slate-300 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Datenschutz
            </button>
            <button
              onClick={onOpenCookies}
              className="hover:text-slate-300 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

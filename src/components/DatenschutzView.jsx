import React from 'react';
import { ArrowLeft, Mail, Phone, ShieldCheck, Lock, Globe } from 'lucide-react';

export default function DatenschutzView({ onNavigateHome, onOpenCookies, onNavigateImpressum }) {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DSGVO-Konformität</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Informationen über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base shadow-xl">
            
            {/* 1. Verantwortliche Stelle */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Verantwortliche Stelle</h2>
              <p>
                Die Website <strong className="text-white">sichtbarmitki.agency</strong> ist ein Angebot von:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1 text-slate-200">
                <p className="font-semibold text-white">DS Online Services</p>
                <p>Inhaber: Dirk Schmetzer</p>
                <p>Riedgrasweg 30, 70599 Stuttgart, Deutschland</p>
                <p>Telefon: <a href="tel:+4915906122744" className="text-blue-400 hover:underline">+49 1590 6122744</a></p>
                <p>E-Mail: <a href="mailto:hallo@sichtbarmitki.agency" className="text-blue-400 hover:underline">hallo@sichtbarmitki.agency</a></p>
                <p>Direkte Alternative: <a href="mailto:dirk.online.services@gmail.com" className="text-blue-400 hover:underline">dirk.online.services@gmail.com</a></p>
              </div>
              <p className="mt-3">
                Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst und verpflichten uns, deren Vertraulichkeit und Sicherheit gemäß den Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und des Telemediengesetzes (TMG) zu gewährleisten.
              </p>
            </div>

            {/* 2. Personenbezogene Daten & Datenerfassung */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-3">2. Personenbezogene Daten & Datenerfassung</h2>
              <p>
                Beim rein informatorischen Aufrufen unserer Website erfassen die Server automatisch technische Daten (z. B. IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit des Seitenaufrufs). Diese Daten dienen ausschließlich der Gewährleistung eines stabilen und sicheren Betriebs.
              </p>
              <p className="mt-3">
                <strong className="text-white">Kontaktanfragen (Formular, WhatsApp & E-Mail):</strong> Wenn Sie über unser Kontaktformular, per WhatsApp oder per E-Mail Kontakt mit uns aufnehmen, verarbeiten wir die von Ihnen übermittelten Angaben (Name, E-Mail-Adresse, Telefonnummer, Anliegen), um Ihre Anfrage zu bearbeiten und für mögliche Anschlussfragen zu speichern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Kommunikation mit Interessenten).
              </p>
            </div>

            {/* 3. Ihre Rechte gemäß DSGVO */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-3">3. Ihre Rechte gemäß DSGVO</h2>
              <p>Sie haben als betroffene Person nach der DSGVO umfassende Rechte:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-300">
                <li><strong className="text-white">Auskunftsrecht (Art. 15 DSGVO):</strong> Auskunft über die zu Ihrer Person verarbeiteten Daten.</li>
                <li><strong className="text-white">Berichtigung (Art. 16 DSGVO):</strong> Berichtigung unrichtiger oder unvollständiger Daten.</li>
                <li><strong className="text-white">Löschung (Art. 17 DSGVO):</strong> Löschung Ihrer bei uns gespeicherten Daten, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.</li>
                <li><strong className="text-white">Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung unter bestimmten gesetzlichen Voraussetzungen.</li>
                <li><strong className="text-white">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Erhalt der Daten in einem gängigen, maschinenlesbaren Format.</li>
                <li><strong className="text-white">Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch gegen die künftige Verarbeitung Ihrer Daten aus Gründen Ihrer besonderen Situation.</li>
              </ul>
              <div className="mt-4 p-4 rounded-xl bg-blue-950/20 border border-blue-900/40">
                <p className="text-slate-300 text-sm">
                  Zur formlosen Ausübung Ihrer Rechte genügt eine E-Mail an:{' '}
                  <a href="mailto:hallo@sichtbarmitki.agency" className="text-blue-400 hover:underline font-medium">hallo@sichtbarmitki.agency</a>{' '}
                  oder an{' '}
                  <a href="mailto:dirk.online.services@gmail.com" className="text-blue-400 hover:underline font-medium">dirk.online.services@gmail.com</a>.
                </p>
              </div>
            </div>

            {/* 4. Datensicherheit & SSL/TLS-Verschlüsselung */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-3">4. Datensicherheit & SSL/TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine moderne SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>

            {/* 5. Cookies & Google Consent Mode v2 */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-3">5. Cookies & Google Consent Mode v2</h2>
              <p>
                Unsere Website nutzt den offiziellen <strong className="text-white">Google Consent Mode v2</strong>. Standardmäßig sind alle nicht notwendigen Cookies und Tracking-Tags blockiert (<code className="text-xs bg-slate-950 px-1.5 py-0.5 rounded text-blue-300">denied</code>). Erst bei Ihrer ausdrücklichen Zustimmung im Cookie-Banner werden optionale Analyse-Cookies aktiviert. Sie können Ihre Auswahl jederzeit über den Link „Cookie-Einstellungen“ am Seitenende anpassen oder widerrufen.
              </p>
            </div>

            {/* 6. Kleinunternehmerregelung */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-3">6. Rechnungsstellung & Kleinunternehmerstatus</h2>
              <p>
                DS Online Services arbeitet nach der Kleinunternehmerregelung gemäß <strong className="text-white">§ 19 UStG</strong>. Es wird daher keine Umsatzsteuer berechnet oder ausgewiesen.
              </p>
            </div>

            {/* 7. Externe Links */}
            <div className="pt-6 border-t border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-3">7. Externe Verlinkungen</h2>
              <p>
                Unsere Website kann Links zu externen Angeboten Dritter (z. B. LinkedIn) enthalten. Wir haben keinen Einfluss darauf, dass deren Betreiber die Datenschutzbestimmungen einhalten.
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
              onClick={onNavigateImpressum}
              className="hover:text-slate-300 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Impressum
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

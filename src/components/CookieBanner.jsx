import React, { useState, useEffect } from 'react';
import { ShieldCheck, Settings, Check, X, ChevronDown, ChevronUp, Cookie } from 'lucide-react';

const CONSENT_STORAGE_KEY = 'sichtbarmitki_cookie_consent';

export function updateGtagConsent(consent) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    const consentSettings = {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied',
      personalization_storage: consent.marketing ? 'granted' : 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted'
    };

    // Google Consent Mode v2 Update
    gtag('consent', 'update', consentSettings);

    // GTM Custom Events for easy triggers
    window.dataLayer.push({
      event: 'cookie_consent_update',
      consent_analytics: consent.analytics,
      consent_marketing: consent.marketing,
      consent_timestamp: new Date().toISOString()
    });

    if (consent.analytics) {
      window.dataLayer.push({ event: 'consent_analytics_granted' });
    }
    if (consent.marketing) {
      window.dataLayer.push({ event: 'consent_marketing_granted' });
    }
  }
}

export default function CookieBanner({ isOpenManually, onCloseManual }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user already consented
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setConsent(parsed);
        updateGtagConsent(parsed);
      } catch (e) {
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
  }, []);

  // When triggered via Footer button
  useEffect(() => {
    if (isOpenManually) {
      setIsVisible(true);
      setShowDetails(true);
    }
  }, [isOpenManually]);

  const saveConsent = (updatedConsent) => {
    setConsent(updatedConsent);
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(updatedConsent));
    updateGtagConsent(updatedConsent);
    setIsVisible(false);
    setShowDetails(false);
    if (onCloseManual) onCloseManual();
  };

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    saveConsent(allConsent);
  };

  const handleAcceptNecessary = () => {
    const minConsent = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    saveConsent(minConsent);
  };

  const handleSaveSelection = () => {
    saveConsent(consent);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-200 relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-md">
              <Cookie className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Datenschutz & Cookies
                </span>
                <span className="text-xs text-slate-500">• Consent Mode v2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                Privatsphäre & Cookie-Einstellungen
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Wir verwenden Cookies und moderne Technologien, um unsere Website für Sie optimal zu gestalten, die Webseiten-Nutzung datenschutzkonform zu analysieren und Ihnen relevante Inhalte bereitzustellen. Sie können Ihre Einwilligung jederzeit anpassen oder widerrufen.
          </p>

          {/* Details Accordion */}
          {showDetails && (
            <div className="space-y-4 mb-6 pt-4 border-t border-slate-800">
              {/* Notwendig */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Technisch Notwendig</span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                      Erforderlich
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Gewährleistet grundlegende Funktionen wie Sicherheits-Zertifikate, Navigation und das Speichern Ihrer Cookie-Präferenzen.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  className="w-5 h-5 rounded accent-blue-600 cursor-not-allowed mt-1"
                />
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Statistiken & Performance</span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      Google Analytics
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Hilft uns zu verstehen, wie Besucher mit der Website interagieren (anonymisierte IP, Seitenaufrufe, Verweildauer).
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="cookie-analytics"
                  checked={consent.analytics}
                  onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                  className="w-5 h-5 rounded accent-blue-600 cursor-pointer mt-1"
                />
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">Marketing & Kampagnen</span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      Optional
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Ermöglicht personalisierte Werbeanzeigen und die Erfolgsmessung von Kampagnen auf Google und Partner-Netzwerken.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="cookie-marketing"
                  checked={consent.marketing}
                  onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                  className="w-5 h-5 rounded accent-blue-600 cursor-pointer mt-1"
                />
              </div>
            </div>
          )}

          {/* Toggle details link */}
          <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{showDetails ? 'Details ausblenden' : 'Einstellungen anpassen'}</span>
              {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <div className="flex items-center gap-3">
              <a href="/impressum" className="hover:text-slate-200 underline">Impressum</a>
              <span>•</span>
              <a href="/datenschutz" className="hover:text-slate-200 underline">Datenschutz</a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {showDetails ? (
              <>
                <button
                  type="button"
                  onClick={handleSaveSelection}
                  className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all text-center"
                >
                  Auswahl speichern
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl font-bold text-sm text-slate-200 bg-slate-800 hover:bg-slate-750 hover:text-white border border-slate-700 transition-all text-center"
                >
                  Alle akzeptieren
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all text-center"
                >
                  Alle akzeptieren
                </button>
                <button
                  type="button"
                  onClick={handleAcceptNecessary}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-300 bg-slate-800 hover:bg-slate-750 hover:text-white border border-slate-700 transition-all text-center"
                >
                  Nur Notwendige
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

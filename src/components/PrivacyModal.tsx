'use client';

import { useLanguage } from '@/context/LanguageContext';
import { X, Shield, Database, FileText, Mail } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{t.privacy.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* GDPR Section */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.privacy.gdprTitle}
              </h3>
              <p className="text-gray-600">{t.privacy.gdprText}</p>
            </div>
          </div>

          {/* Data Collection */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-teal-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.privacy.dataCollection}
              </h3>
              <p className="text-gray-600">{t.privacy.dataCollectionText}</p>
            </div>
          </div>

          {/* Data Use */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.privacy.dataUse}
              </h3>
              <p className="text-gray-600">{t.privacy.dataUseText}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
            <Mail className="w-5 h-5 text-green-700" />
            <p className="text-gray-600 text-sm">{t.privacy.contact}</p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

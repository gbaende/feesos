'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, CreditCard, Shield, Check } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_AMOUNTS = [25, 50, 100, 250];

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedProcessor, setSelectedProcessor] = useState<'stripe' | 'paypal'>('stripe');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    const numValue = value.replace(/[^0-9]/g, '');
    setCustomAmount(numValue);
    setSelectedAmount(null);
  };

  const getFinalAmount = () => {
    if (customAmount) return parseInt(customAmount);
    return selectedAmount || 0;
  };

  const handleProceed = async () => {
    const amount = getFinalAmount();
    if (amount < 1) return;

    setIsProcessing(true);

    if (selectedProcessor === 'stripe') {
      // In production, this would create a Stripe checkout session
      // For demo, we'll show an alert
      setTimeout(() => {
        alert(`Stripe checkout for $${amount} would open here. In production, integrate with Stripe Checkout.`);
        setIsProcessing(false);
      }, 1000);
    } else {
      // PayPal integration
      setTimeout(() => {
        alert(`PayPal checkout for $${amount} would open here. In production, integrate with PayPal SDK.`);
        setIsProcessing(false);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{t.donation.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">{t.donation.subtitle}</p>

          {/* Amount Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              {t.donation.selectAmount}
            </label>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {PRESET_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`py-3 px-4 rounded-xl font-semibold text-lg transition-all ${
                    selectedAmount === amount
                      ? 'bg-green-700 text-white ring-2 ring-green-700 ring-offset-2'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                $
              </span>
              <input
                type="text"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder={t.donation.customAmount}
                className={`w-full pl-8 pr-4 py-3 rounded-xl border-2 transition-all ${
                  customAmount
                    ? 'border-green-700 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                } focus:outline-none focus:border-green-700`}
              />
            </div>
          </div>

          {/* Payment Processor Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              {t.donation.selectProcessor}
            </label>
            <div className="space-y-3">
              {/* Stripe Option */}
              <button
                onClick={() => setSelectedProcessor('stripe')}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                  selectedProcessor === 'stripe'
                    ? 'border-green-700 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  selectedProcessor === 'stripe' ? 'bg-green-700' : 'bg-gray-200'
                }`}>
                  <CreditCard className={`w-5 h-5 ${
                    selectedProcessor === 'stripe' ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-900">{t.donation.stripe}</p>
                  <p className="text-sm text-gray-500">Visa, Mastercard, Amex</p>
                </div>
                {selectedProcessor === 'stripe' && (
                  <Check className="w-5 h-5 text-green-700" />
                )}
              </button>

              {/* PayPal Option */}
              <button
                onClick={() => setSelectedProcessor('paypal')}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                  selectedProcessor === 'paypal'
                    ? 'border-green-700 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  selectedProcessor === 'paypal' ? 'bg-green-700' : 'bg-gray-200'
                }`}>
                  <span className={`font-bold text-sm ${
                    selectedProcessor === 'paypal' ? 'text-white' : 'text-gray-600'
                  }`}>PP</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-900">{t.donation.paypal}</p>
                  <p className="text-sm text-gray-500">PayPal Balance & Cards</p>
                </div>
                {selectedProcessor === 'paypal' && (
                  <Check className="w-5 h-5 text-green-700" />
                )}
              </button>
            </div>
          </div>

          {/* Security Notice */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Shield className="w-4 h-4 text-green-700" />
            <span>{t.donation.secure}</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleProceed}
              disabled={getFinalAmount() < 1 || isProcessing}
              className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition-colors"
            >
              {isProcessing ? 'Processing...' : `${t.donation.proceed} - $${getFinalAmount()}`}
            </button>
            <button
              onClick={onClose}
              className="w-full text-gray-600 hover:text-gray-900 py-2 font-medium transition-colors"
            >
              {t.donation.cancel}
            </button>
          </div>

          {/* Tax Deductible Notice */}
          <p className="text-xs text-center text-gray-500 mt-4">{t.donation.taxDeductible}</p>
        </div>
      </div>
    </div>
  );
}

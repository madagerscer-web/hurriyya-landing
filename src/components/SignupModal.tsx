import { X } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function SignupModal({ isOpen, onClose, onSuccess }: SignupModalProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error: insertError } = await supabase
        .from('email_signups')
        .insert([{ email }]);

      if (insertError) {
        if (insertError.code === '23505') {
          setError('This email is already on our waitlist.');
        } else {
          setError('Something went wrong. Please try again.');
        }
        return;
      }

      setSuccess(true);
      setEmail('');
      onSuccess?.();

      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError('Failed to sign up. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-xl border border-slate-700 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-700 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>

        <div className="p-8">
          {success ? (
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">You're on the list!</h3>
              <p className="text-slate-400">
                We'll reach out soon with early access details.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Get Early Access</h2>
                <p className="text-slate-400">Join the waitlist for Hurriyya and transform how you engage with patients.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-colors"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-lg transition-colors"
                >
                  {loading ? 'Signing up...' : 'Get Early Access'}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { CheckCircle } from 'lucide-react';

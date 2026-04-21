import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onSignupClick: () => void;
}

export function CTA({ onSignupClick }: CTAProps) {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Patient Engagement?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Join healthcare leaders who are already reducing no-shows, recovering missed patients, and taking the pressure off their front desk.
        </p>

        <button
          onClick={onSignupClick}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Get Early Access
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-slate-400 text-sm mt-8">
          Limited spots available for early access. Secure yours today.
        </p>
      </div>
    </section>
  );
}

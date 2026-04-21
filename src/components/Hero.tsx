import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onSignupClick: () => void;
}

export function Hero({ onSignupClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <p className="text-blue-400 text-sm font-medium">Healthcare Operations Platform</p>
            </div>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Reduce no-shows, recover missed patients, and take follow-up work off your front desk.
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Hurriyya automates patient engagement and follow-up workflows, helping healthcare practices recover revenue, improve patient outcomes, and free up staff for meaningful work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={onSignupClick}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors border border-slate-600 hover:border-slate-500">
              Watch Demo
            </button>
          </div>

          <p className="text-slate-400 text-sm pt-4">
            Join 50+ healthcare teams already transforming patient engagement
          </p>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2, Zap, Users, TrendingUp, Clock, Shield } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: CheckCircle2,
      title: 'Automated Appointment Reminders',
      description: 'Reduce no-shows with intelligent reminders at optimal times. Multi-channel delivery via SMS, email, and push notifications.',
    },
    {
      icon: Users,
      title: 'Patient Recovery Campaigns',
      description: 'Automatically identify and re-engage patients who have missed appointments or are overdue for care.',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Recovery',
      description: 'Convert missed opportunities into completed appointments. Track ROI with detailed analytics on each campaign.',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Eliminate manual follow-ups. Automate patient outreach based on appointment status and clinic rules.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Free up 10+ hours per week from your front desk team. Redirect focus to patient care and service excellence.',
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security with end-to-end encryption. Full compliance with healthcare data regulations.',
    },
  ];

  return (
    <section className="relative py-20 bg-slate-800/50 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to optimize patient engagement and streamline operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600/50 hover:border-blue-500/30 hover:from-slate-700/60 hover:to-slate-800/60 transition-all duration-300"
              >
                <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

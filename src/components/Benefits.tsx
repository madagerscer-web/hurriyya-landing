import { BarChart3, DollarSign, Smile } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: BarChart3,
      stat: '35%',
      label: 'Average Reduction in No-Shows',
      description: 'Intelligent reminder system catches patients before they miss appointments',
    },
    {
      icon: DollarSign,
      stat: '+$50K',
      label: 'Annual Revenue Recovery',
      description: 'Per practice on average through automated patient re-engagement',
    },
    {
      icon: Smile,
      stat: '92%',
      label: 'Patient Satisfaction',
      description: 'With timely, personalized appointment reminders and care coordination',
    },
  ];

  return (
    <section className="relative py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-slate-700/50 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-blue-500/10 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.label}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

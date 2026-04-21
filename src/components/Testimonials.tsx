import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Medical Director, Seattle Wellness Clinic',
      quote: 'Hurriyya has completely transformed how we manage patient follow-ups. We went from manual phone calls to automated, intelligent reminders. Our no-show rate dropped by 40%.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
    {
      name: 'Jennifer Chen',
      role: 'Office Manager, Boston Family Medicine',
      quote: 'The time savings are incredible. What used to take our staff 15 hours a week is now automated. We can focus on patient relationships instead of juggling follow-ups.',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    },
    {
      name: 'Dr. Marcus Johnson',
      role: 'Owner, Miami Dental Associates',
      quote: 'We recovered over $45,000 in the first month just by re-engaging patients who had cancelled or no-showed. The ROI is unbelievable.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
  ];

  return (
    <section className="relative py-20 bg-slate-800/50 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See how practices are using Hurriyya to improve patient outcomes and revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-200 mb-6 leading-relaxed">"{testimonial.quote}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

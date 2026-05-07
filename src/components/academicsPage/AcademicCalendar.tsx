import React from 'react';
import { Calendar } from 'lucide-react';

export default function AcademicCalendar() {
  const calendarEvents = [
    {
      month: 'June - July',
      event: 'Academic Session Begins',
      details: 'New academic year 2025-2026 commences'
    },
    {
      month: 'August - September',
      event: 'Mid-Term Assessments',
      details: 'First term examinations and student progress reviews'
    },
    {
      month: 'October - November',
      event: 'Autumn Break & Festivals',
      details: 'School celebrations and cultural events'
    },
    {
      month: 'December',
      event: 'Pre-Board Examinations',
      details: 'Mock examinations for classes 9 & 10'
    },
    {
      month: 'January - February',
      event: 'Board Examinations',
      details: 'CBSE board examinations for Class 10'
    },
    {
      month: 'March - April',
      event: 'Final Assessments',
      details: 'Completion of academic session and final evaluations'
    }
  ];

  return (
    <section className="py-24 bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center text-navy">
              <Calendar size={32} />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="text-gold">Calendar</span>
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto text-lg">
            Academic Session 2025-2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calendarEvents.map((event, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                  <Calendar size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-gold font-bold text-sm">{event.month}</p>
                  <h3 className="font-heading text-lg font-bold text-cream">{event.event}</h3>
                </div>
              </div>
              <p className="text-cream/70">{event.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gold/10 rounded-2xl p-12 border border-gold/20 text-center">
          <h3 className="font-heading text-2xl font-bold text-gold mb-4">Important Dates</h3>
          <div className="space-y-3 text-cream/90">
            <p><span className="font-bold">Admission Started:</span> Till June end</p>
            <p><span className="font-bold">Eligibility Criteria:</span> 5-year student minimum</p>
            <p><span className="font-bold">Summer Break:</span> May-June</p>
          </div>
        </div>
      </div>
    </section>
  );
}

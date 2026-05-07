import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

export default function RequiredDocuments() {
  const documents = [
    { category: 'Identity Documents', items: ['Birth Certificate (Original + Photocopy)', 'Aadhaar Card of Student', 'Aadhaar Card of Parents'] },
    { category: 'Photographs', items: ['4 Passport size photographs of student', '2 Passport size photographs of parents', '1 Passport size photograph of siblings (if applicable)'] },
    { category: 'Academic Documents', items: ['Previous class Report Card', 'Transfer Certificate (TC) from previous school', 'Progress Report or Academic Records'] },
    { category: 'Medical & Health', items: ['Medical fitness certificate', 'Vaccination records', 'Any relevant health documents'] },
    { category: 'Residence Proof', items: ['Electricity bill or Water bill', 'Rent agreement (if applicable)', 'Ration card or any government ID'] },
    { category: 'Others', items: ['Caste Certificate (if applicable)', 'Physically challenged certificate (if applicable)', 'Parental consent letter'] }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center text-gold">
              <FileText size={32} />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">
            Required <span className="text-gradient-gold">Documents</span>
          </h2>
          <p className="text-navy/80 max-w-2xl mx-auto text-lg">
            Please arrange the following documents for smooth admission processing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {documents.map((doc, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl border-l-4 border-gold hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-lg font-bold text-navy mb-4">{doc.category}</h3>
              <ul className="space-y-3">
                {doc.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-navy/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-navy to-blue rounded-2xl p-12 text-cream">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Important Notes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">→</span>
                  <span>All documents must be legible and in good condition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">→</span>
                  <span>Photocopies must be attested by a notary or parents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">→</span>
                  <span>Original documents will be returned after verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">→</span>
                  <span>Missing documents may delay the admission process</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Submission Process</h3>
              <div className="space-y-4">
                <div className="bg-gold/10 p-4 rounded-lg">
                  <p className="text-gold font-bold mb-2">Step 1: Prepare Documents</p>
                  <p className="text-cream/80 text-sm">Collect all required documents and make necessary photocopies</p>
                </div>
                <div className="bg-gold/10 p-4 rounded-lg">
                  <p className="text-gold font-bold mb-2">Step 2: Verification</p>
                  <p className="text-cream/80 text-sm">School staff will verify all documents during office hours</p>
                </div>
                <div className="bg-gold/10 p-4 rounded-lg">
                  <p className="text-gold font-bold mb-2">Step 3: Confirmation</p>
                  <p className="text-cream/80 text-sm">After verification, proceed with fee payment and admission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

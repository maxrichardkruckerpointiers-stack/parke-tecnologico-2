import React, { useState } from 'react';
import { INTEREST_OPTIONS } from '../constants';
import { FormData } from '../types';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: INTEREST_OPTIONS[0],
    consent: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', interest: INTEREST_OPTIONS[0], consent: false });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, consent: e.target.checked }));
  };

  return (
    <section id="contact" className="py-24 bg-cartagena-dark border-t border-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cartagena-slate rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Haz parte del Ecosistema</h2>
            <p className="text-gray-400">Déjanos tus datos y te contactaremos para explorar sinergias.</p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">¡Mensaje Recibido!</h3>
              <p className="text-gray-400 mt-2">Pronto nos pondremos en contacto contigo.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-cartagena-teal hover:text-white underline"
              >
                Enviar otro
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cartagena-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-cartagena-teal focus:border-transparent text-white placeholder-gray-600 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Corporativo</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cartagena-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-cartagena-teal focus:border-transparent text-white placeholder-gray-600 transition-all"
                    placeholder="nombre@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">Perfil / Interés</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cartagena-dark border border-gray-700 rounded-lg focus:ring-2 focus:ring-cartagena-teal focus:border-transparent text-white transition-all appearance-none"
                >
                  {INTEREST_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={handleCheckbox}
                    className="focus:ring-cartagena-teal h-4 w-4 text-cartagena-teal border-gray-700 rounded bg-cartagena-dark"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="font-medium text-gray-400">
                    Acepto la política de privacidad y el procesamiento de mis datos.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 bg-cartagena-teal text-cartagena-dark font-bold text-lg rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Enviando...' : 'Solicitar Información'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
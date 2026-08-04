'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: wire to your email backend (Resend / Formspree)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="gum-card p-8 text-center flex flex-col items-center gap-4"
      >
        <div className="w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
          <CheckCircle size={24} className="text-brand-green" />
        </div>
        <h3 className="font-bold text-lg text-ink-DEFAULT dark:text-ink-dark">Message sent!</h3>
        <p className="text-ink-muted dark:text-ink-muted-dark text-sm">
          I'll get back to you within 1–2 days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-brand-coral hover:opacity-75 font-medium"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-btn border border-surface-border dark:border-surface-border-dark bg-surface-card dark:bg-surface-card-dark text-ink-DEFAULT dark:text-ink-dark text-sm placeholder:text-ink-muted dark:placeholder:text-ink-muted-dark focus:outline-none focus:ring-2 focus:ring-brand-pink transition-all';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-xs font-semibold text-ink-muted dark:text-ink-muted-dark mb-1.5">
          Your Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Lahiru Perera"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-semibold text-ink-muted dark:text-ink-muted-dark mb-1.5">
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="hello@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-ink-muted dark:text-ink-muted-dark mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project, question, or just say hi…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.97 }}
        disabled={status === 'loading'}
        className="btn-primary disabled:opacity-50 w-full justify-center"
      >
        {status === 'loading' ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}

import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import SocialLinks from '@/components/layout/SocialLinks';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact — Lahiru Kumarasinghe',
  description:
    'Get in touch with Lahiru Kumarasinghe for automotive diagnostic inquiries, UI/UX design projects, or hardware collaborations.',
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mb-12">
        <p className="section-label mb-2">Get in touch</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-DEFAULT dark:text-ink-dark mb-4">
          Let's Work Together
        </h1>
        <p className="text-lg text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          Have a project in mind, need custom UI/UX design, or want to discuss vehicle telemetry systems? Send me a message below or reach out directly via WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 gum-card p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink-DEFAULT dark:text-ink-dark mb-6">
            Send a Message
          </h2>
          <ContactForm />
        </div>

        {/* Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct WhatsApp Card */}
          <a
            href="https://wa.me/94786584504"
            target="_blank"
            rel="noopener noreferrer"
            className="gum-card p-6 block hover:border-brand-green/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-card bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base text-ink-DEFAULT dark:text-ink-dark group-hover:text-brand-green transition-colors">
                  WhatsApp Direct
                </h3>
                <p className="text-xs text-ink-muted dark:text-ink-muted-dark">+94 78 658 4504</p>
              </div>
            </div>
            <p className="text-xs text-ink-muted dark:text-ink-muted-dark mt-2">
              Fastest response for urgent inquiries or quick chat.
            </p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:hello@lahirukumarasinghe.com"
            className="gum-card p-6 block hover:border-brand-coral/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-card bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center text-brand-coral">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base text-ink-DEFAULT dark:text-ink-dark group-hover:text-brand-coral transition-colors">
                  Email
                </h3>
                <p className="text-xs text-ink-muted dark:text-ink-muted-dark">hello@lahirukumarasinghe.com</p>
              </div>
            </div>
            <p className="text-xs text-ink-muted dark:text-ink-muted-dark mt-2">
              For detailed project briefs and client estimates.
            </p>
          </a>

          {/* Location & Response Time */}
          <div className="gum-card p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-xs text-ink-muted dark:text-ink-muted-dark">
              <MapPin size={15} className="text-brand-coral" />
              <span>Based in Sri Lanka (GMT+5:30)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-ink-muted dark:text-ink-muted-dark">
              <Clock size={15} className="text-brand-green" />
              <span>Typical response time: 24 hours</span>
            </div>

            <div className="pt-4 border-t border-surface-border dark:border-surface-border-dark">
              <p className="section-label mb-3">Connect on Social</p>
              <SocialLinks size="md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

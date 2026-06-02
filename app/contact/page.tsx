'use client';
import Image from 'next/image';
import { MapPin, Mail, Phone, Compass, Share2, Globe, Users, MonitorPlay, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: 'Precision Nutrition Inquiry'
    }
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
    }, 1500);
  };

  return (
    <div className="w-full flex-grow flex flex-col">
      {/* Intro */}
      <section className="relative py-24 px-lg max-w-5xl mx-auto text-center">
        <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">Get in Touch</span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-6">How can we help your health journey?</h1>
        <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
            Whether you have questions about our precision nutrition plans or need support with your current program, our team of experts is here to guide you.
        </p>
      </section>

      {/* Bento Layout */}
      <section className="max-w-7xl mx-auto px-lg pb-16 grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
        {/* Form */}
        <div className="md:col-span-7 bg-surface-container-lowest rounded-[1.5rem] p-8 border border-surface-variant shadow-sm">
          <h2 className="text-2xl font-display font-semibold text-primary mb-6">Send us a message</h2>
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center h-full">
              <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-on-surface mb-2">Message Sent!</h3>
              <p className="text-on-surface-variant max-w-[20rem]">
                Thank you for reaching out. A member of our precision health team will contact you within 24 hours.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 bg-surface-variant text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold hover:bg-surface-container-high transition-colors"
               >
                 Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant tracking-wider ml-1">FULL NAME</label>
                  <input {...register('fullName')} type="text" placeholder="Jane Doe" className={`w-full bg-surface px-4 py-3 rounded-lg border form-focus-ring transition-all ${errors.fullName ? 'border-error focus-visible:ring-error/20' : 'border-outline-variant'}`} />
                  {errors.fullName && <p className="text-error text-xs font-semibold ml-1">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant tracking-wider ml-1">EMAIL ADDRESS</label>
                  <input {...register('email')} type="email" placeholder="jane@example.com" className={`w-full bg-surface px-4 py-3 rounded-lg border form-focus-ring transition-all ${errors.email ? 'border-error focus-visible:ring-error/20' : 'border-outline-variant'}`} />
                  {errors.email && <p className="text-error text-xs font-semibold ml-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant tracking-wider ml-1">SUBJECT</label>
                <select {...register('subject')} className={`w-full bg-surface px-4 py-3 rounded-lg border form-focus-ring transition-all ${errors.subject ? 'border-error focus-visible:ring-error/20' : 'border-outline-variant'}`}>
                  <option value="Precision Nutrition Inquiry">Precision Nutrition Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership Proposal">Partnership Proposal</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && <p className="text-error text-xs font-semibold ml-1">{errors.subject.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant tracking-wider ml-1">MESSAGE</label>
                <textarea {...register('message')} placeholder="Tell us more about your needs..." rows={5} className={`w-full bg-surface px-4 py-3 rounded-lg border form-focus-ring transition-all placeholder:text-outline/50 ${errors.message ? 'border-error focus-visible:ring-error/20' : 'border-outline-variant'}`}></textarea>
                {errors.message && <p className="text-error text-xs font-semibold ml-1">{errors.message.message}</p>}
              </div>
              
              <button disabled={isSubmitting} type="submit" className="w-full bg-primary text-on-primary py-4 rounded-xl font-semibold text-sm hover:bg-primary-container transition-colors shadow-sm active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Map */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-surface-container rounded-[1.5rem] p-4 flex items-start gap-4 border border-surface-variant/50">
              <div className="bg-primary/10 p-2 rounded-xl text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-on-surface mb-1">Headquarters</h3>
                <p className="text-sm text-on-surface-variant font-sans">124 Precision Way, Suite 400<br/>San Francisco, CA 94103</p>
              </div>
            </div>
            
            <div className="bg-surface-container rounded-[1.5rem] p-4 flex items-start gap-4 border border-surface-variant/50">
              <div className="bg-secondary/10 p-2 rounded-xl text-secondary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-on-surface mb-1">Email Us</h3>
                <p className="text-sm text-on-surface-variant font-sans">hello@nutriali.com<br/>support@nutriali.com</p>
              </div>
            </div>
            
            <div className="bg-surface-container rounded-[1.5rem] p-4 flex items-start gap-4 border border-surface-variant/50">
              <div className="bg-tertiary/10 p-2 rounded-xl text-tertiary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-on-surface mb-1">Call Us</h3>
                <p className="text-sm text-on-surface-variant font-sans">+1 (555) 234-8890<br/>Mon-Fri, 9am - 6pm PST</p>
              </div>
            </div>
          </div>
          
          <div className="flex-grow min-h-[250px] relative rounded-[1.5rem] overflow-hidden group shadow-sm border border-surface-variant">
             <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLTB-y10TcESETJkGe79VdoRnOR9K83GqjiuiN1J5YLpnnWoOc5LAdQT3R6K-QiGEcP31nikO5-cgh3AQFa0x-clAmXZMYnOTKRBNfeLwMAhLjt1m7yo-kC9VWs2GVmvCGrgWJvEBh6Wz9KB0Et-Qiio8QZ5lvBWh4F-PzGlajnAPZ0f1M1zCK-lU4UfA9Hq3sblCS6FiCBRw9HMR9FtUGyIZlLO15JUNq9WDjHftltuyYBrmGLkEbg-oQPWwjT1Jwi0wTISZP7WA"
                alt="Map Graphic"
                fill
                className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
             <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
               <Compass className="w-5 h-5 text-primary" />
               <span className="text-xs font-bold text-on-surface tracking-widest uppercase">View on Google Maps</span>
             </div>
          </div>
        </div>
      </section>
      
      {/* Social Banner */}
      <section className="py-16 bg-surface-container-low mt-auto w-full">
        <div className="max-w-7xl mx-auto px-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-2xl font-display font-semibold text-on-surface">Join the NutriAli Community</h2>
              <p className="text-base text-on-surface-variant mt-1">Stay updated with the latest precision nutrition breakthroughs.</p>
            </div>
            <div className="flex gap-4">
              {[Share2, Globe, Users, MonitorPlay].map((Icon, idx) => (
                <button key={idx} className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

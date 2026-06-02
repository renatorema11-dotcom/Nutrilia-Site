import Image from 'next/image';
import Link from 'next/link';
import { Activity, Sparkles, Dna, Utensils, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-xl md:py-24">
        <div className="max-w-7xl mx-auto px-lg flex flex-col md:flex-row items-center gap-xl">
          <div className="w-full md:w-1/2 z-10">
            <span className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-widest rounded-lg mb-md">
              AI-POWERED PRECISION
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-on-background mb-md leading-tight">
              Your DNA. Your Goals. <span className="text-primary">Your Nutrition.</span>
            </h1>
            <p className="text-on-surface-variant text-base mb-xl max-w-[32rem]">
              Go beyond generic dieting. NutriAli uses clinical-grade data and intelligent algorithms to craft a wellness journey as unique as your fingerprints.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={process.env.NEXT_PUBLIC_NUTRIALI_APP_URL || '#'} target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-on-primary px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all active:scale-95">
                  Start My Assessment
                </button>
              </Link>
              <Link href="/about">
                <button className="border border-outline-variant text-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-surface-container-low transition-all">
                  View Methodology
                </button>
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3] md:aspect-square">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNfcEOb1N9jLPTvhjxHM-jpF05HJdt2_GppfOo7Rq1PkOZtNTWvHzwheXr0VIyD0Fn3eYIi0hEyZwQwhE555feS1aeLqdYE2c_8kR2ynTFXbhFIGhnKzlqXP4XtyDPVQ82VxJpeDzul0rA8o503mE799Fz9IVbJZ4bnsHyWwmJETDbigdRgzyQuIOs2-1tL9W2EKW48UKn9TkDhNO-fK2aHPM4p5AmK4Uu2b00_mpFnO9qixvHjIjPo9xCwwfl1bSvXAjokUr2WNw"
                alt="Healthy food selection"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* AI Overlay Widget */}
              <div className="absolute bottom-6 left-6 bg-on-background/90 backdrop-blur-md p-md rounded-xl text-surface border border-primary/20 ai-glow max-w-[250px]">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-secondary-fixed-dim" />
                  <span className="text-xs font-bold tracking-wider">REAL-TIME ANALYSIS</span>
                </div>
                <p className="text-sm text-surface-variant font-sans">Metabolic rate adjusted based on activity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Bento Grid */}
      <section className="py-xl md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-lg">
          <div className="text-center mb-xl">
            <h2 className="text-3xl font-display font-bold text-on-background mb-4">The Science of Feeling Great</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-base">
              We combine four pillars of intelligent wellness to ensure your transformation is sustainable, clinical, and effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Large Card */}
            <div className="md:col-span-2 bg-surface-container-lowest border border-surface-container-high p-xl rounded-[1.5rem] flex flex-col justify-end relative overflow-hidden group min-h-[300px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                 <Image 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDfVqc3JyqICRtdqCIqCwCRB53d52G7La7tY4r-w4BEn6yVm6MtF2s43jxl74Sm8MC_kHP86tW32X7-MsjutMZTQVFAbDCpLOB2PYSMTHorS59ZbQruQzvVETCg0bCbHAAB3PFr4RJmDfSZvIFsgNMbmvpbWdyyWqulj8WcrUKLZVmRkpXtoaT-fmQ5ZNpXdqfJcc2QHNshosor7ldriUyKRPD2-poYYNUwxl33xil2J80tAMQ7bJagwjUypndpifwqQPUesGC0J8"
                   alt="DNA Sequencing background"
                   fill
                   className="object-cover grayscale mix-blend-multiply"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-md text-on-primary">
                  <Dna className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-on-background mb-2">Genetic Blueprint Alignment</h3>
                <p className="text-on-surface-variant max-w-[28rem]">Our algorithms analyze your genetic predispositions to suggest optimal macronutrient ratios that work with your biology, not against it.</p>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-secondary-container text-on-secondary-container p-xl rounded-[1.5rem] flex flex-col items-start min-h-[300px]">
              <div className="w-12 h-12 bg-on-secondary-container/20 rounded-lg flex items-center justify-center mb-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-2">AI Assistant</h3>
              <p className="opacity-90">24/7 proactive guidance from "Ali," your personalized nutrition intelligence that learns your habits.</p>
            </div>

            {/* Small Card 2 */}
            <div className="bg-surface-container-lowest border-2 border-primary/10 p-xl rounded-[1.5rem] flex flex-col items-start min-h-[300px]">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-md text-on-primary-container">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-on-background mb-2">Adaptive Meal Plans</h3>
              <p className="text-on-surface-variant">Plans that dynamically change based on your grocery availability, mood, and biometric feedback.</p>
            </div>

            {/* Medium Card */}
            <div className="md:col-span-2 bg-surface-container-lowest border border-surface-container-high p-xl rounded-[1.5rem] flex flex-col md:flex-row items-center gap-lg">
               <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-xl overflow-hidden shrink-0">
                 <Image 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTNunM2UMyu6gmrhYe0VXYtzAw1NgrsDQHM96CZrAlZLran7zT01gjHnYDd53o6LftreL71GLdZm9bqQYmHvzIK8KjkVElIMQJMFc9K83xNGfTBB915LpvMEWL8Rjc6_57TvqUbVeNaINBdTq4fAjT-82OmpamqlwV0-o8Gz_KHTOLB_DctcgoiCjNb_F--2fFzFkVDKcnD2TVfhqsrIYzFkmZ1GYko5NtmRNc-Fny5gplIujGr_aaP82rDT50Kg46VDJKpGytU_M"
                   alt="Wearable"
                   fill
                   className="object-cover"
                   referrerPolicy="no-referrer"
                 />
               </div>
               <div className="flex-1">
                 <h3 className="text-2xl font-display font-semibold text-on-background mb-2">Wearable Integration</h3>
                 <p className="text-on-surface-variant">Sync seamlessly with Oura, Apple Health, and Whoop to adjust your daily intake based on real-time strain and recovery data.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xl mb-12">
        <div className="max-w-7xl mx-auto px-lg">
          <div className="bg-on-background rounded-[2.5rem] p-xl md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-surface mb-6">
                Ready to meet the <span className="text-primary-fixed-dim">best version</span> of you?
              </h2>
              <p className="text-surface-variant max-w-[36rem] mx-auto mb-10 text-base">
                Join 50,000+ members who have traded guesswork for precision. Start your 14-day clinical trial today.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <Link href={process.env.NEXT_PUBLIC_NUTRIALI_APP_URL || '#'} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                  <button className="w-full bg-primary text-on-primary px-10 py-3 rounded-full text-sm font-semibold hover:bg-primary-container transition-all">
                    Get Started Free
                  </button>
                </Link>
                <Link href="/contact" className="w-full md:w-auto">
                  <button className="w-full border border-outline text-surface px-10 py-3 rounded-full text-sm font-semibold hover:bg-surface/10 transition-all">
                    Talk to an Expert
                  </button>
                </Link>
              </div>
              
              <div className="mt-8 flex justify-center items-center gap-8 text-surface-variant">
                 <div className="flex items-center gap-2">
                   <CheckCircle2 className="w-4 h-4 text-tertiary-fixed-dim" />
                   <span className="text-sm">No credit card required</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <CheckCircle2 className="w-4 h-4 text-tertiary-fixed-dim" />
                   <span className="text-sm">Cancel anytime</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

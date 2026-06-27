'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Activity, Stethoscope, Utensils, Beaker, ArrowRight, X } from 'lucide-react';

export default function ServicesPage() {
  const [showPlansModal, setShowPlansModal] = useState(false);
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 px-lg flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-secondary tracking-widest bg-secondary-fixed px-2 py-1 rounded mb-4 inline-block uppercase">OUR EXPERTISE</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Elevate Your Health with <span className="text-primary">Precision Nutrition</span>
          </h1>
          <p className="text-on-surface-variant text-base max-w-[36rem] mx-auto mb-10">
            NutriAli combines advanced AI technology with clinical expertise to provide a holistic ecosystem for your nutritional journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-lg pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Tracking */}
          <div className="md:col-span-8 bg-surface-container-lowest border border-surface-container-highest rounded-[1.5rem] p-lg flex flex-col lg:flex-row gap-lg group h-[450px]">
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-display font-semibold mb-2">Nutrition Tracking</h2>
              <p className="text-on-surface-variant text-base mb-6">
                Real-time biometric feedback and macro mapping. We analyze the metabolic impact of every bite through AI-driven insights.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Dynamic Macro-nutrient Allocation
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Glucose Response Predictions
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Wearable Device Integration
                </li>
              </ul>
              <Link href="#tracking" className="inline-block">
                <button className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all hover:text-primary-container">
                  Explore Tracking Systems <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="hidden lg:block flex-1 relative rounded-xl overflow-hidden shrink-0 h-full">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH0DW6-_7e-_IgXV1IHlTvRtRQXmbm0bAxu3VE8INruPQXPDVsSMxINJD1SAG-ujEyUn-zsTARLDx2pKXFEFlEQQyNoSZsGDuZ8JLm-dbLU0cCZHkzs074FaokpSI_Ox904QJ9rGeRIOCRg6eG0SmDm2KsmDWY5goewc_3geuczVoBm7EkNaUVXoqjD3NOb2hgFtey5rxaxJywGpuRIrF9dYAPVvN8dD3CfOrdMafIUSHZwHponrnMWdUAhaEWzSmK73A6k1AWwW4"
                alt="App Interface"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Meals */}
          <div className="md:col-span-4 bg-on-background text-surface border border-on-background rounded-[1.5rem] p-lg flex flex-col relative overflow-hidden group min-h-[450px]">
            <div className="w-12 h-12 bg-primary text-on-primary rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Utensils className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-display font-semibold mb-2 relative z-10 text-primary-fixed-dim">Meal Planning</h2>
            <p className="text-outline-variant text-base mb-8 relative z-10">
              Chef-curated recipes tailored to your DNA and dietary preferences. Our AI optimizes your grocery list.
            </p>
            
            <div className="mt-auto relative z-10">
              <div className="flex -space-x-2 mb-6">
                <div className="w-8 h-8 rounded-full border-2 border-on-background bg-tertiary-fixed-dim flex items-center justify-center text-[10px] font-bold text-on-tertiary-fixed">Keto</div>
                <div className="w-8 h-8 rounded-full border-2 border-on-background bg-primary-fixed flex items-center justify-center text-[10px] font-bold text-on-primary-fixed">Veg</div>
                <div className="w-8 h-8 rounded-full border-2 border-on-background bg-secondary-fixed flex items-center justify-center text-[10px] font-bold text-on-secondary-fixed">Paleo</div>
              </div>
              <button 
                onClick={() => setShowPlansModal(true)}
                className="w-full py-3 bg-primary-container text-on-primary-container rounded-lg text-sm font-semibold hover:bg-surface hover:text-on-background transition-all"
              >
                Veja exemplos de planos
              </button>
            </div>
          </div>

          {/* Consultation */}
          <div className="md:col-span-6 bg-surface-container-low border border-surface-container-high rounded-[1.5rem] p-lg flex flex-col group min-h-[300px]">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">Clinical Connect</span>
              </div>
            </div>
            <h2 className="text-2xl font-display font-semibold mb-4">Expert Consultation</h2>
            <p className="text-on-surface-variant text-base mb-8">
              Access a network of registered dietitians and clinical nutritionists. Schedule 1-on-1 virtual sessions.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="bg-white p-4 rounded-xl border border-surface-container-highest">
                <p className="text-xs font-bold text-secondary tracking-wider mb-1">NEXT AVAILABLE</p>
                <p className="text-sm font-semibold">Today, 2:00 PM</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-surface-container-highest">
                <p className="text-xs font-bold text-secondary tracking-wider mb-1">PRACTITIONERS</p>
                <p className="text-sm font-semibold">45+ Experts</p>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="md:col-span-6 bg-white border border-surface-container-highest rounded-[1.5rem] p-lg flex flex-col h-full min-h-[300px]">
            <h2 className="text-2xl font-display font-semibold mb-6">Specialized Programs</h2>
            <div className="space-y-4">
              <Link href="/contact" className="block">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-lowest transition-colors border border-transparent hover:border-surface-container-high cursor-pointer">
                  <div className="bg-tertiary-fixed text-on-tertiary-fixed w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <Beaker className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-on-surface mb-1">Metabolic Reset</h3>
                    <p className="text-sm text-on-surface-variant">A 12-week intensive designed to optimize insulin sensitivity.</p>
                  </div>
                </div>
              </Link>
              <Link href="/contact" className="block">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-lowest transition-colors border border-transparent hover:border-surface-container-high cursor-pointer">
                  <div className="bg-primary-fixed text-on-primary-fixed w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-on-surface mb-1">Performance Fueling</h3>
                    <p className="text-sm text-on-surface-variant">High-performance protocols for endurance and strength athletes.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Modal */}
      {showPlansModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-surface border border-outline w-full max-w-2xl rounded-[2rem] p-6 md:p-8 relative shadow-2xl animate-in slide-in-from-bottom-4 fade-in duration-300">
            <button 
              onClick={() => setShowPlansModal(false)}
              className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-display font-bold mb-6 text-on-background">Exemplos de Planos</h2>
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              <div className="p-5 bg-tertiary-container/10 rounded-2xl border border-outline-variant">
                <h3 className="font-bold text-lg text-on-surface flex items-center gap-2 mb-2"><Utensils className="w-5 h-5 text-tertiary"/> Ketogenic Performance</h3>
                <p className="text-on-surface-variant text-sm mb-4">Abordagem rica em gorduras boas e pobre em carboidratos (high-fat, low-carb) estruturada para clareza mental e adaptação da queima de gordura.</p>
                <div className="text-xs text-on-surface-variant flex flex-wrap gap-2">
                  <span className="bg-surface-container px-3 py-1.5 rounded-full font-medium">70% Gordura</span>
                  <span className="bg-surface-container px-3 py-1.5 rounded-full font-medium">25% Proteína</span>
                  <span className="bg-surface-container px-3 py-1.5 rounded-full font-medium">5% Carbs</span>
                </div>
              </div>
              <div className="p-5 bg-primary-container/10 rounded-2xl border border-outline-variant">
                <h3 className="font-bold text-lg text-on-surface flex items-center gap-2 mb-2"><Beaker className="w-5 h-5 text-primary"/> Plant-Based Vitality</h3>
                <p className="text-on-surface-variant text-sm mb-4">Rico em polifenóis, fibras e totalmente baseado em plantas. Otimizado para energia constante, longevidade e saúde cardíaca.</p>
                <div className="text-xs text-on-surface-variant flex flex-wrap gap-2">
                  <span className="bg-surface-container px-3 py-1.5 rounded-full font-medium">20% Gordura</span>
                  <span className="bg-surface-container px-3 py-1.5 rounded-full font-medium">25% Proteína</span>
                  <span className="bg-surface-container px-3 py-1.5 rounded-full font-medium">55% Carbs</span>
                </div>
              </div>
              <div className="p-5 bg-secondary-container/10 rounded-2xl border border-outline-variant">
                <h3 className="font-bold text-lg text-on-surface flex items-center gap-2 mb-2"><Activity className="w-5 h-5 text-secondary"/> Paleo Foundation</h3>
                <p className="text-on-surface-variant text-sm mb-4">Abordagem balanceada priorizando alimentos integrais, carnes orgânicas e vegetais, excluindo grãos e processados do dia-a-dia.</p>
                <div className="text-xs text-on-surface-variant flex flex-wrap gap-2">
                  <span className="bg-surface-container px-3 py-1.5 rounded-full font-medium">40% Gordura</span>
                  <span className="bg-surface-container px-3 py-1.5 rounded-full font-medium">30% Proteína</span>
                  <span className="bg-surface-container px-3 py-1.5 rounded-full font-medium">30% Carbs</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-outline-variant border-dashed">
              <Link href="/contact" onClick={() => setShowPlansModal(false)}>
                <button className="w-full bg-primary text-on-primary py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-sm active:scale-[0.98]">
                  Agendar Consulta Nutricional
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

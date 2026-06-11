import Image from 'next/image';
import { Award, FlaskConical, Rocket, Eye, BadgeCheck, Leaf, Cpu, UsersRound } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: BadgeCheck, label: "Clinically Verified" },
    { icon: Leaf, label: "Holistic Approach" },
    { icon: Cpu, label: "AI-Driven Precision" },
    { icon: UsersRound, label: "Human Centric" },
  ];

  return (
    <div className="w-full relative overflow-hidden">
      {/* Intro */}
      <section className="relative pt-24 pb-16 px-lg max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant mb-6">
          <Award className="w-4 h-4" />
          <span className="text-xs font-bold tracking-widest uppercase">OUR MISSION DRIVEN JOURNEY</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-on-background mb-8 leading-tight">
          Precision Nutrition for the <br className="hidden md:block"/> <span className="text-primary">Human Sanctuary.</span>
        </h1>
        <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
          We blend the empathy and expertise of real clinical nutritionists with intelligent computational precision. NutriAli is a platform where human professionals and AI algorithms collaborate seamlessly to guide your wellness journey.
        </p>
        
        {/* Asymmetric Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-16 h-[400px] md:h-[600px]">
          <div className="md:col-span-8 relative rounded-[2rem] overflow-hidden group">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASTYEGOvIz7jWdENGcHyGnKmNxo_Nd6nKqcuP6tBDt1tBSbYILGRPWRZI1NmBNGf2Y_BBGGndyyEeg-meRkSa6mJ6u9W8uqSYOBjv-diy4ahtOG5HzBKhaZ-naErFCsXZ7rj7M2VOe-mg4Q2vsfJ3jO7mgXkww7GefPRYCQHKPfCsfgIHOLzOPmXd7G85f5Q8OsJHroSTevrgqyzGfCsRxXwvVzNiugWBfIpvn7m-6C9YZaHDAoPNQlW0cUwfMvH9imCTlzLVSpdU"
              alt="Wellness Clinic"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-left text-white">
              <h3 className="text-2xl font-display font-semibold mb-2">Where Science Meets Soul</h3>
              <p className="text-sm opacity-90">Founded in 2024 to bridge the gap between AI and human health.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 grid grid-rows-2 gap-5">
            <div className="bg-primary-container rounded-[2rem] p-8 flex flex-col justify-center items-start text-on-primary-container relative overflow-hidden group">
              <FlaskConical className="w-8 h-8 mb-4 relative z-10" />
              <div className="text-4xl font-display font-bold mb-2 relative z-10">10k+</div>
              <p className="text-sm relative z-10">Precision meal plans generated monthly.</p>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <FlaskConical className="w-32 h-32" />
              </div>
            </div>
            <div className="bg-tertiary-fixed rounded-[2rem] overflow-hidden relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmBhuwQaDt3_18Dngl1q7WnAo1_0ne23fNrgdVIcCu17nV1X3cTWtKSCsfdWmHzUq8o4c90GhQAPUMMPthgP30dfFXDx7ebgQu6MgJwj7GzlYGatN9Qm_lDSmFiXlwOXRbr-RXXq8Y45H9-611ilnahsKMpiM5sU7dMK3JEyy-u_m4sAM5ZSUbHWBf0ArEdHQdyfMtaQ70FLOyw5mggj3BA_EBfCQAMuDj19uDErm2qtLQJi7Oqnn0Bxcv_fgx4lUts12XzBvWvJY"
                alt="Fresh Ingredients"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-xl px-lg max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 md:p-12 rounded-[2.5rem] bg-on-background text-on-primary border border-outline/20 group">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4 text-primary-fixed">Our Mission</h3>
            <p className="text-base text-surface-variant leading-relaxed opacity-90">
              To democratize health by uniting clinical nutrition professionals with cutting-edge AI. We strive to remove the guesswork from nutrition by giving every member a dedicated expert team—composed of a real nutritionist and our intelligent AI, Ali—working together to optimize your daily life.
            </p>
          </div>
          
          <div className="p-10 md:p-12 rounded-[2.5rem] bg-surface-container-lowest border border-surface-container-high group">
            <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4 text-tertiary">Our Vision</h3>
            <p className="text-base text-on-surface-variant leading-relaxed">
              To become the world&apos;s most trusted companion for longitudinal wellness, where technology and biology exist in perfect, effortless harmony for a longer, healthier human experience.
            </p>
          </div>
        </div>
      </section>

      {/* Values Marquee */}
      <section className="py-12 bg-on-background text-on-primary overflow-hidden">
        <div className="flex whitespace-nowrap w-max animate-marquee">
            {[...values, ...values, ...values, ...values, ...values, ...values].map((v, i) => (
                <div key={i} className="flex items-center gap-4 px-8 py-4 mr-8 border border-outline/30 rounded-[2rem]">
                    <v.icon className="w-6 h-6 text-primary-fixed" />
                    <span className="text-xl font-display font-semibold">{v.label}</span>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}

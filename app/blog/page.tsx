'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Blog() {
  const allPosts = [
    {
      title: "The Science of Personalized Nutrition",
      excerpt: "Discover why generic diets often fail and how personalized nutrition based on your unique biology and lifestyle can lead to sustainable health improvements. A deep dive into metabolic uniqueness.",
      content: "Generic diets fail because human bodies are incredibly diverse. Your genetics, microbiome, and daily routine dictate how you process different foods. By tracking specific metabolic markers and understanding how your blood sugar responds to distinct food combinations, science shows we can craft a diet that optimizes energy and longevity for your specific biological makeup.",
      date: "May 15, 2024",
      readTime: "5 min read",
      category: "Science",
      author: "Dr. Elena Rostova",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Understanding Macronutrients for Energy",
      excerpt: "Learn how to balance proteins, fats, and carbohydrates to maintain steady energy levels throughout your day without the crash. We explore the myths surrounding carbs and healthy fats.",
      content: "Macronutrients are the fundamental building blocks of your diet. Carbohydrates provide quick fuel, proteins rebuild tissue, and fats offer sustained energy and hormonal support. Crashing after a meal is usually a sign of an unbalanced macro ratio, often heavily skewed towards simple carbs. Discovering your personal macro breakdown can alleviate midday fatigue.",
      date: "June 2, 2024",
      readTime: "4 min read",
      category: "Nutrition Basics",
      author: "Marcus Chen",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "How Sleep Affects Your Diet Choices",
      excerpt: "Ever wonder why you crave sugar after a bad night's sleep? Uncover the hormonal connections between the quality of your rest and your daily appetite rhythms.",
      content: "When you are sleep deprived, your body produces more ghrelin (the hunger hormone) and less leptin (the satiety hormone). This neurochemical imbalance drives cravings for hyper-palatable, calorie-dense foods as your brain seeks quick energy to compensate for exhaustion. Regulating your sleep hygiene is the first step to dietary consistency.",
      date: "June 11, 2024",
      readTime: "7 min read",
      category: "Wellness",
      author: "Dr. Sarah Lin",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Hydration: Beyond 8 Glasses a Day",
      excerpt: "Water is essential, but how much do you really need? Let's break down hydration based on your activity level and environment.",
      content: "The '8 glasses a day' rule is a myth. Your daily water requirement is highly variable and depends on your body mass, the climate you live in, and your physical exertion. Furthermore, cellular hydration isn't just about water; it’s about maintaining the correct balance of electrolytes like sodium, potassium, and magnesium.",
      date: "June 20, 2024",
      readTime: "3 min read",
      category: "Nutrition Basics",
      author: "Marcus Chen",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Gut-Brain Connection",
      excerpt: "Emerging research shows how a healthy microbiome can improve your mood and cognitive focus.",
      content: "Your gut produces an estimated 90% of your body's serotonin. The trillions of microbes residing in your digestive tract communicate directly with your brain via the vagus nerve. A diet rich in prebiotic fibers and fermented foods can foster a diverse microbiome, potentially alleviating symptoms of brain fog and anxiety.",
      date: "July 5, 2024",
      readTime: "8 min read",
      category: "Science",
      author: "Dr. Elena Rostova",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Creating Sustainable Habits",
      excerpt: "Why motivation fades and how to rely on systems to maintain your health journey over the long term.",
      content: "Motivation is an emotion, which means it is inherently unreliable. Lasting health changes come from designing your environment to make good choices frictionless. By lowering the activation energy required to eat well—such as prepping meals in advance—you transition from relying on willpower to relying on daily systems.",
      date: "July 12, 2024",
      readTime: "6 min read",
      category: "Wellness",
      author: "Dr. Sarah Lin",
      image: "https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Role of Intermittent Fasting",
      excerpt: "Is intermittent fasting right for your body type? We break down the science behind time-restricted eating.",
      content: "Intermittent fasting is an eating pattern that cycles between periods of fasting and eating. It doesn't specify which foods you should eat but rather when you should eat them. Research shows it can improve metabolic flexibility, enhance insulin sensitivity, and promote cellular repair through autophagy. However, it's not a one-size-fits-all approach and should be tailored to individual stress levels and hormonal health.",
      date: "July 24, 2024",
      readTime: "5 min read",
      category: "Diet & Fasting",
      author: "Marcus Chen",
      image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Plant-Based vs. Omnivore Protocols",
      excerpt: "Navigating the ethical and biological considerations of plant-based eating for high-performance individuals.",
      content: "The plant-based versus omnivore debate often overlooks the nuances of bioavailability. While a well-planned plant-based diet can provide exceptional antioxidant coverage, it requires careful pairing of complementary amino acids. Conversely, high-quality animal proteins offer complete profiles but must be balanced with sufficient fiber. The optimal choice depends entirely on your personalized metabolic data.",
      date: "August 3, 2024",
      readTime: "9 min read",
      category: "Nutrition Basics",
      author: "Dr. Elena Rostova",
      image: "https://picsum.photos/seed/plant/800/600"
    },
    {
      title: "Supplements: What Actually Works?",
      excerpt: "Cutting through the marketing noise to identify the supplements that have proven clinical efficacy.",
      content: "The supplement industry is highly unregulated, and many products offer little more than expensive placebos. However, certain compounds like Vitamin D3, Omega-3 fatty acids, Magnesium Glycinate, and Creatine Monohydrate possess robust clinical backing. Before beginning any supplementation protocol, it is vital to establish a baseline through comprehensive blood panels.",
      date: "August 15, 2024",
      readTime: "7 min read",
      category: "Science",
      author: "Dr. Sarah Lin",
      image: "https://picsum.photos/seed/supplements/800/600"
    }
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, allPosts.length));
  };

  const visiblePosts = allPosts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background py-20 px-4 md:px-8 pt-32">
      <div className="max-w-5xl mx-auto relative">
        <Link href="/" className="text-primary hover:underline font-medium text-sm mb-8 inline-block">
          &larr; Back to Home
        </Link>
        
        <div className="mb-16 border-b border-outline-variant pb-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-on-background tracking-tight">NutriAli Blog</h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            Clinical insights, research, and expert tips to guide your longitudinal wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.article 
                layout
                key={index}
                onClick={() => { if (!isExpanded) setExpandedIndex(index); }}
                className={`bg-surface rounded-3xl border ${isExpanded ? 'border-primary shadow-xl col-span-1 md:col-span-2 lg:col-span-3 cursor-default' : 'border-surface-container-high hover:border-primary/50 cursor-pointer'} overflow-hidden flex flex-col transition-all group`}
              >
                {!isExpanded && (
                  <div className="h-48 bg-surface-container-highest relative overflow-hidden flex-shrink-0">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index <= 2}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-tertiary/20 mix-blend-multiply group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-on-background z-10">
                      {post.category}
                    </div>
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-xs text-on-surface-variant font-medium space-x-2">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>
                    {isExpanded && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); setExpandedIndex(null); }}
                        className="p-2 bg-surface-container rounded-full hover:bg-surface-container-highest transition-colors"
                        aria-label="Close"
                      >
                        <X className="w-5 h-5 text-on-surface" />
                      </button>
                    )}
                  </div>
                  
                  <h2 className={`font-bold mb-4 text-on-background leading-tight transition-colors ${isExpanded ? 'text-3xl md:text-4xl' : 'text-2xl group-hover:text-primary'}`}>
                    {post.title}
                  </h2>
                  
                  {!isExpanded && (
                    <p className="text-on-surface-variant leading-relaxed mb-8 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative h-64 md:h-80 w-full mb-8 rounded-2xl overflow-hidden shadow-md">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index <= 2}
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                          {post.excerpt}
                        </p>
                        <div className="w-12 h-1 bg-primary/30 mb-8 rounded-full" />
                        <p className="text-on-background leading-relaxed text-lg mb-8">
                          {post.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-surface-container pt-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs uppercase">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-on-background">{post.author}</span>
                    </div>
                    {isExpanded && (
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-on-surface-variant mr-2 font-medium hidden sm:inline-block">Share:</span>
                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://nutriali.com/blog')}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-surface-container rounded-full hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300 text-on-surface-variant flex items-center justify-center" aria-label="Share on Twitter" onClick={(e) => e.stopPropagation()}>
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://nutriali.com/blog')}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-surface-container rounded-full hover:bg-[#0077b5] hover:text-white transition-colors duration-300 text-on-surface-variant flex items-center justify-center" aria-label="Share on LinkedIn" onClick={(e) => e.stopPropagation()}>
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent("Check out this article: " + post.excerpt)}`} className="p-2 bg-surface-container rounded-full hover:bg-primary hover:text-on-primary transition-colors duration-300 text-on-surface-variant flex items-center justify-center" aria-label="Share via Email" onClick={(e) => e.stopPropagation()}>
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        
        {visibleCount < allPosts.length && (
          <div className="mt-20 flex justify-center pb-12">
            <button 
              onClick={loadMore}
              className="px-8 py-3 rounded-full border-2 border-surface-container-highest text-on-background font-semibold hover:bg-surface-container-highest active:scale-95 transition-all"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

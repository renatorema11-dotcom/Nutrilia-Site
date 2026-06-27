'use client';
import { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, ComposedChart, Bar
} from 'recharts';
import { Brain, TrendingUp, Activity, Award, Target, CheckCircle2, ChevronRight } from 'lucide-react';
import * as motion from "motion/react-client";

const biometricData = [
  { month: 'Jan', weight: 85, bodyFat: 24, adherence: 60, energyLevel: 5 },
  { month: 'Feb', weight: 84, bodyFat: 23.5, adherence: 65, energyLevel: 6 },
  { month: 'Mar', weight: 82.5, bodyFat: 22, adherence: 75, energyLevel: 6.5 },
  { month: 'Apr', weight: 81, bodyFat: 21, adherence: 85, energyLevel: 8 },
  { month: 'May', weight: 79, bodyFat: 19.5, adherence: 90, energyLevel: 8.5 },
  { month: 'Jun', weight: 78, bodyFat: 18, adherence: 92, energyLevel: 9 },
];

const goalRoadmaps: Record<string, { title: string; description: string; icon: React.ElementType; milestones: { title: string; description: string; month: string }[] }> = {
  'weight-loss': {
    title: 'Weight Optimization',
    description: 'Sustainable weight loss through metabolic flexibility and precise macronutrient timing.',
    icon: Activity,
    milestones: [
      { month: 'Month 1', title: 'Metabolic Reset', description: 'Establishing baseline caloric needs and reducing insulin resistance.' },
      { month: 'Month 3', title: 'Fat Adaptation', description: 'Body efficiently uses stored fat for energy. Reduced cravings.' },
      { month: 'Month 6', title: 'Sustainable Maintenance', description: 'Reaching target weight and establishing a long-term nutritional lifestyle.' }
    ]
  },
  'muscle-gain': {
    title: 'Hypertrophy & Strength',
    description: 'Strategic caloric surplus and protein timing to maximize muscle protein synthesis.',
    icon: TrendingUp,
    milestones: [
      { month: 'Month 1', title: 'Anabolic Priming', description: 'Optimizing protein intake distribution and nutrient timing around workouts.' },
      { month: 'Month 3', title: 'Progressive Overload Support', description: 'Increased caloric surplus to support accelerating training demands.' },
      { month: 'Month 6', title: 'Lean Mass Accrual', description: 'Measurable increase in lean body mass with minimal fat accumulation.' }
    ]
  },
  'longevity': {
    title: 'Longevity & Vitality',
    description: 'Cellular rejuvenation through time-restricted eating and micronutrient optimization.',
    icon: Award,
    milestones: [
      { month: 'Month 1', title: 'Circadian Alignment', description: 'Syncing eating windows with natural hormonal cycles.' },
      { month: 'Month 3', title: 'Autophagy Activation', description: 'Strategic fasting protocols to clear cellular debris and lower inflammation.' },
      { month: 'Month 6', title: 'Biological Age Reduction', description: 'Improved joint health, prolonged energy levels, and optimized blood markers.' }
    ]
  },
  'cognitive': {
    title: 'Cognitive Performance',
    description: 'Neuroprotective nutrition to enhance focus, memory, and sustained mental clarity.',
    icon: Brain,
    milestones: [
      { month: 'Month 1', title: 'Brain Energy Shift', description: 'Introduction of specific healthy fats to provide stable energy for the brain.' },
      { month: 'Month 3', title: 'Neurotransmitter Balance', description: 'Targeted amino acids to support dopamine and serotonin production.' },
      { month: 'Month 6', title: 'Peak Mental Flow', description: 'Sustained focus, elimination of brain fog, and enhanced stress resilience.' }
    ]
  }
};

export default function Performance() {
  const [activeTab, setActiveTab] = useState<'overview' | 'biometrics' | 'ai'>('overview');
  const [activeGoal, setActiveGoal] = useState<string>('weight-loss');

  const selectedRoadmap = goalRoadmaps[activeGoal];

  return (
    <div className="bg-surface min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-lg">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-on-background mb-4">
              AI Performance <span className="text-primary">&</span> Impact
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
              Visualizing the correlation between AI-driven plan adherence and dramatic improvements in key health biometrics.
            </p>
          </motion.div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-primary/5 rounded-2xl p-6 border border-primary/10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-on-surface">Avg. AI Adherence</h3>
            </div>
            <div className="text-4xl font-bold text-on-background mb-1">88%</div>
            <p className="text-sm text-green-600 font-medium">+15% over 6 months</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-primary/5 rounded-2xl p-6 border border-primary/10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-on-surface">Body Fat Reduced</h3>
            </div>
            <div className="text-4xl font-bold text-on-background mb-1">-6%</div>
            <p className="text-sm text-green-600 font-medium">Consistent downward trend</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-primary/5 rounded-2xl p-6 border border-primary/10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-on-surface">Weight Optimized</h3>
            </div>
            <div className="text-4xl font-bold text-on-background mb-1">-7 kg</div>
            <p className="text-sm text-green-600 font-medium">Healthy sustained loss</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="bg-primary/5 rounded-2xl p-6 border border-primary/10 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-on-surface">Energy Levels</h3>
            </div>
            <div className="text-4xl font-bold text-on-background mb-1">+80%</div>
            <p className="text-sm text-green-600 font-medium">Self-reported vitality</p>
          </motion.div>
        </div>

        {/* Charts Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-surface-container-high p-6 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-display font-bold text-on-background">Impact Analysis</h2>
              <p className="text-on-surface-variant">Correlation between AI plan adherence and biometrics</p>
            </div>
            
            <div className="bg-surface-container-low rounded-lg p-1 flex">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-white shadow-sm text-primary' : 'text-on-surface hover:text-primary'}`}
              >
                Correlation
              </button>
              <button 
                onClick={() => setActiveTab('biometrics')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'biometrics' ? 'bg-white shadow-sm text-primary' : 'text-on-surface hover:text-primary'}`}
              >
                Biometrics
              </button>
            </div>
          </div>

          <div className="h-[400px] w-full mt-8">
            <ResponsiveContainer width="100%" height="100%">
              {activeTab === 'overview' ? (
                <ComposedChart data={biometricData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} dy={10} />
                  <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} dx={-10} label={{ value: 'Adherence (%)', angle: -90, position: 'insideLeft', fill: '#6b7280' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} dx={10} label={{ value: 'Body Fat (%)', angle: 90, position: 'insideRight', fill: '#6b7280' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    cursor={{ fill: '#f3f4f6' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar yAxisId="left" dataKey="adherence" name="AI Adherence Score" fill="#4a8069" opacity={0.8} radius={[4, 4, 0, 0]} />
                  <Line yAxisId="right" type="monotone" dataKey="bodyFat" name="Body Fat %" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                </ComposedChart>
              ) : (
                <AreaChart data={biometricData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <defs>
                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4a8069" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4a8069" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} dy={10} />
                  <YAxis domain={['dataMin - 2', 'dataMax + 2']} axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} dx={-10} label={{ value: 'Weight (kg)', angle: -90, position: 'insideLeft', fill: '#6b7280' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Area type="monotone" dataKey="weight" name="Weight (kg)" stroke="#4a8069" strokeWidth={3} fillOpacity={1} fill="url(#colorWeight)" />
                </AreaChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Interactive Progress Roadmap */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-on-background mb-4">Your Health Goals Roadmap</h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
              Select a primary health goal to see how our AI visualizes your progressive journey towards optimal well-being.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.entries(goalRoadmaps).map(([key, goal]) => {
              const GoalIcon = goal.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveGoal(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeGoal === key ? 'bg-primary text-on-primary shadow-md scale-105' : 'bg-white hover:bg-surface-container text-on-surface border border-outline-variant hover:border-primary/50'}`}
                >
                  <GoalIcon className="w-5 h-5" />
                  {goal.title}
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-surface-container-high relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-12 pb-8 border-b border-outline-variant">
                <motion.div 
                  key={activeGoal}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center justify-center bg-primary/10 p-5 rounded-2xl text-primary mb-6"
                >
                  <Target className="w-10 h-10" />
                </motion.div>
                <motion.div
                  key={selectedRoadmap.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <h3 className="text-3xl font-bold font-display text-on-background mb-4">{selectedRoadmap.title} Plan</h3>
                  <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">{selectedRoadmap.description}</p>
                </motion.div>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-primary/20 before:to-transparent">
                {selectedRoadmap.milestones.map((milestone, index) => (
                  <motion.div 
                    key={`${activeGoal}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant transition-all hover:border-primary/40 hover:bg-surface-container-low hover:shadow-md">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3 bg-primary/10 px-3 py-1 rounded-full">
                        {milestone.month}
                      </span>
                      <h4 className="text-xl font-bold text-on-background mb-2">{milestone.title}</h4>
                      <p className="text-base text-on-surface-variant leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Text Insight */}
        <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20 text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-on-background font-medium italic">
            &quot;The data clearly demonstrates that as users increasingly adhered to Ali&apos;s dynamically adjusted meal plans, their biometric results scaled proportionally. Precision nutrition removes the guesswork, accelerating health outcomes.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

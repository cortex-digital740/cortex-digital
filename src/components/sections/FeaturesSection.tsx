import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, Shield, BarChart3, Workflow, Users, Globe,
  LucideIcon 
} from 'lucide-react';
import { getFeatures, Feature } from '@/lib/cms';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Shield,
  BarChart3,
  Workflow,
  Users,
  Globe,
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const Icon = iconMap[feature.icon] || Zap;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-card-hover"
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-display font-semibold text-foreground mb-2">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const features = getFeatures();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 bg-surface-sunken relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Built for modern teams who demand performance, security, and seamless collaboration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

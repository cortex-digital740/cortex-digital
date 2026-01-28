import { motion } from 'framer-motion';
import { 
  Zap, Shield, BarChart3, Workflow, Users, Globe,
  LucideIcon 
} from 'lucide-react';
import { getFeatures, Feature } from '@/lib/cms';
import { SectionHeader, StaggerContainer, StaggerItem } from '@/components/ui/scroll-reveal';

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
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const Icon = iconMap[feature.icon] || Zap;

  return (
    <StaggerItem animation="scale">
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative h-full bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-card-hover"
      >
        {/* Hover Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        
        <div className="relative z-10">
          {/* Icon */}
          <motion.div 
            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="h-6 w-6 text-primary" />
          </motion.div>

          {/* Content */}
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">
            {feature.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </StaggerItem>
  );
};

export const FeaturesSection = () => {
  const features = getFeatures();

  return (
    <section className="py-24 bg-surface-sunken relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      {/* Animated background blobs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Features"
          title="Everything You Need to"
          highlight="Scale"
          description="Built for modern teams who demand performance, security, and seamless collaboration."
        />

        {/* Features Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

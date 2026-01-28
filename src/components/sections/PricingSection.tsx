import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getPricing, PricingPlan } from '@/lib/cms';
import { cn } from '@/lib/utils';
import { SectionHeader, StaggerContainer, StaggerItem } from '@/components/ui/scroll-reveal';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <StaggerItem animation={plan.highlighted ? 'scale' : 'slide-up'}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={cn(
          'relative rounded-2xl p-8 border transition-all duration-300 h-full',
          plan.highlighted
            ? 'bg-card border-primary shadow-glow scale-105 z-10'
            : 'bg-card border-border hover:border-primary/30 shadow-card hover:shadow-card-hover'
        )}
      >
        {/* Popular Badge */}
        {plan.highlighted && (
          <motion.div 
            className="absolute -top-4 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="inline-flex items-center gap-1 bg-gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
              <Sparkles className="h-3 w-3" />
              Most Popular
            </span>
          </motion.div>
        )}

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            {plan.name}
          </h3>
          <p className="text-muted-foreground text-sm">
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <motion.span 
            className="text-4xl font-display font-bold text-foreground"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            {plan.price}
          </motion.span>
          <span className="text-muted-foreground">{plan.period}</span>
        </div>

        {/* CTA */}
        <Link to={plan.id === 'enterprise' ? '/contact' : '/register'} className="block mb-8">
          <Button
            variant={plan.highlighted ? 'hero' : 'outline'}
            className="w-full"
            size="lg"
          >
            {plan.cta}
          </Button>
        </Link>

        {/* Features */}
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="flex items-center gap-3 text-sm"
            >
              <motion.div 
                className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.2, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
              >
                <Check className="h-3 w-3 text-primary" />
              </motion.div>
              <span className="text-muted-foreground">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </StaggerItem>
  );
};

export const PricingSection = () => {
  const plans = getPricing();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Pricing"
          title="Simple, Transparent"
          highlight="Pricing"
          description="Start free, scale as you grow. No hidden fees, no surprises."
        />

        {/* Pricing Cards */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

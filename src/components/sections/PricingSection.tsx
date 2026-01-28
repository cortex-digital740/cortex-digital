import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getPricing, PricingPlan } from '@/lib/cms';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard = ({ plan, index }: PricingCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={cn(
        'relative rounded-2xl p-8 border transition-all duration-300',
        plan.highlighted
          ? 'bg-card border-primary shadow-glow scale-105'
          : 'bg-card border-border hover:border-primary/30 shadow-card hover:shadow-card-hover'
      )}
    >
      {/* Popular Badge */}
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
            Most Popular
          </span>
        </div>
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
        <span className="text-4xl font-display font-bold text-foreground">
          {plan.price}
        </span>
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
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + i * 0.05 }}
            className="flex items-center gap-3 text-sm"
          >
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Check className="h-3 w-3 text-primary" />
            </div>
            <span className="text-muted-foreground">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export const PricingSection = () => {
  const plans = getPricing();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Simple, Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

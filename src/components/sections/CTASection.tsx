import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/scroll-reveal';

export const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const trustBadges = [
    'No credit card required',
    '14-day free trial',
    'Cancel anytime',
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      
      {/* Animated background orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <ScrollReveal animation="scale" delay={0}>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>
              <span>Start your journey today</span>
            </motion.div>
          </ScrollReveal>

          {/* Title */}
          <ScrollReveal animation="blur" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="text-gradient">Business?</span>
            </h2>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal animation="slide-up" delay={0.2}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of companies already using Cortex Digital to scale their operations and drive growth.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal animation="scale" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="hero" size="xl" className="group">
                    Get Started Free
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="heroOutline" size="xl">
                    Talk to Sales
                  </Button>
                </motion.div>
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust Badges */}
          <StaggerContainer staggerDelay={0.1} className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {trustBadges.map((badge) => (
              <StaggerItem key={badge} animation="slide-up">
                <motion.span 
                  className="inline-flex items-center gap-2 text-muted-foreground text-sm"
                  whileHover={{ color: 'hsl(var(--primary))' }}
                >
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {badge}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

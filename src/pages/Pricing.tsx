import { Layout } from '@/components/layout/Layout';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Choose Your{' '}
              <span className="text-gradient">Plan</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Start free, upgrade when you're ready. No hidden fees.
            </p>
          </motion.div>
        </div>
      </section>
      
      <PricingSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Pricing;

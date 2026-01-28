import { Layout } from '@/components/layout/Layout';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { CTASection } from '@/components/sections/CTASection';
import { motion } from 'framer-motion';

const Features = () => {
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
              Features
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Powerful Features for{' '}
              <span className="text-gradient">Modern Teams</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to build, deploy, and scale your applications with confidence.
            </p>
          </motion.div>
        </div>
      </section>
      
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
};

export default Features;

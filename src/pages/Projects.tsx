import { Layout } from '@/components/layout/Layout';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { CTASection } from '@/components/sections/CTASection';
import { motion } from 'framer-motion';

const Projects = () => {
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
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Our Recent{' '}
              <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore the innovative solutions we've delivered for our clients.
            </p>
          </motion.div>
        </div>
      </section>
      
      <ProjectsSection />
      <CTASection />
    </Layout>
  );
};

export default Projects;

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getFAQs } from '@/lib/cms';
import { SectionHeader, StaggerContainer, StaggerItem, ScrollReveal } from '@/components/ui/scroll-reveal';

export const FAQSection = () => {
  const faqs = getFAQs();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Got questions? We've got answers. If you can't find what you're looking for, reach out to our team."
        />

        {/* FAQ Accordion */}
        <ScrollReveal animation="slide-up" delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <StaggerContainer staggerDelay={0.08}>
                {faqs.map((faq) => (
                  <StaggerItem key={faq.id} animation="slide-right">
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <AccordionItem
                        value={faq.id}
                        className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors duration-200 overflow-hidden"
                      >
                        <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {faq.answer}
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

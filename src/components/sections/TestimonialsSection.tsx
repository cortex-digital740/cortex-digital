import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { getTestimonials, Testimonial } from '@/lib/cms';
import { SectionHeader, StaggerContainer, StaggerItem } from '@/components/ui/scroll-reveal';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  // Alternate between slide-left and slide-right for visual interest
  const animation = index % 2 === 0 ? 'slide-left' : 'slide-right';

  return (
    <StaggerItem animation={animation}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative h-full bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-card-hover"
      >
        {/* Quote Icon */}
        <motion.div 
          className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors"
          whileHover={{ rotate: 15, scale: 1.2 }}
        >
          <Quote className="h-10 w-10" />
        </motion.div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, type: 'spring', stiffness: 200 }}
            >
              <Star className="h-4 w-4 fill-primary text-primary" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <p className="text-foreground leading-relaxed mb-6 relative z-10">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <motion.img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-border"
            whileHover={{ scale: 1.1, borderColor: 'hsl(var(--primary))' }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <div>
            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
};

export const TestimonialsSection = () => {
  const testimonials = getTestimonials();

  return (
    <section className="py-24 bg-surface-sunken relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Testimonials"
          title="Loved by Teams"
          highlight="Worldwide"
          description="See what our customers have to say about their experience with Cortex Digital."
        />

        {/* Testimonials Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

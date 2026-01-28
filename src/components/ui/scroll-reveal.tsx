import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'blur' | 'rotate';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  stagger?: number;
}

const animations: Record<AnimationType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-up': {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-down': {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
};

export const ScrollReveal = ({
  children,
  className,
  animation = 'slide-up',
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.2,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Container for staggered children animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  threshold?: number;
}

export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
  threshold = 0.1,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Child item for stagger container
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  duration?: number;
}

export const StaggerItem = ({
  children,
  className,
  animation = 'slide-up',
  duration = 0.5,
}: StaggerItemProps) => {
  return (
    <motion.div
      variants={animations[animation]}
      transition={{
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Text reveal animation (word by word)
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const TextReveal = ({
  text,
  className,
  delay = 0,
  highlightWords = [],
  highlightClassName = 'text-gradient',
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const words = text.split(' ');

  return (
    <motion.span
      ref={ref}
      className={cn('inline-block', className)}
    >
      {words.map((word, i) => {
        const isHighlight = highlightWords.includes(word);
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{
              duration: 0.4,
              delay: delay + i * 0.05,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className={cn('inline-block mr-[0.25em]', isHighlight && highlightClassName)}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

// Counter animation
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const Counter = ({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className,
}: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {isInView ? (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <AnimatedNumber from={from} to={to} duration={duration} />
          </motion.span>
        ) : (
          from
        )}
      </motion.span>
      {suffix}
    </motion.span>
  );
};

// Animated number component
const AnimatedNumber = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <motion.span
        animate={{ '--num': to } as any}
        initial={{ '--num': from } as any}
        transition={{ duration, ease: 'easeOut' }}
        style={{
          counterSet: 'num var(--num)',
        }}
        className="[counter-set:num_var(--num)] before:content-[counter(num)]"
      />
    </motion.span>
  );
};

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const Parallax = ({
  children,
  className,
  speed = 0.5,
}: ParallaxProps) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: 0,
      }}
      whileInView={{
        y: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
};

// Section header with built-in animations
interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeader = ({
  badge,
  title,
  highlight,
  description,
  className,
  align = 'center',
}: SectionHeaderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div ref={ref} className={cn('max-w-3xl mb-16', alignClass[align], className)}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6"
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from 'lucide-react';
import { getNavigation, getContactInfo, getCMSData } from '@/lib/cms';
import logo from '@/assets/logo.png';

const socialIcons: Record<string, React.ReactNode> = {
  Twitter: <Twitter className="h-5 w-5" />,
  Linkedin: <Linkedin className="h-5 w-5" />,
  Github: <Github className="h-5 w-5" />,
};

export const Footer = () => {
  const navItems = getNavigation();
  const contact = getContactInfo();
  const { siteConfig } = getCMSData();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="inline-block">
              <img src={logo} alt={siteConfig.name} className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {contact.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navItems.slice(0, 4).map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <nav className="flex flex-col gap-2">
              {navItems.slice(4).map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/login"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Sign In
              </Link>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                {contact.phone}
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                {contact.address}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

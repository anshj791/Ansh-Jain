import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/[0.96] border-t border-white/[0.1] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4 flex items-center justify-center space-x-2">
            <Code className="w-6 h-6 text-cyan-400" />
            <span>Portfolio</span>
          </div>
          <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and thoughtful design.
          </p>
          <div className="flex items-center justify-center space-x-2 text-neutral-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by Ansh Jain</span>
          </div>
          <div className="mt-6 pt-6 border-t border-neutral-800">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
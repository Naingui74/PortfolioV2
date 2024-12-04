import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="moving-border rounded-xl overflow-hidden group glow-shadow"
    >
      <div className="relative h-48 lg:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 lg:p-8 bg-black/95">
        <h3 className="text-xl lg:text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 lg:text-lg">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 glass-effect rounded-full text-sm lg:text-base text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Github className="w-6 h-6 lg:w-7 lg:h-7" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <ExternalLink className="w-6 h-6 lg:w-7 lg:h-7" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
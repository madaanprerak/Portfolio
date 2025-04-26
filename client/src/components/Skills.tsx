import { motion } from 'framer-motion';
import { skillCategories, skillBadges } from '@/lib/skillData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary to-light-blue">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Skills I Collected Along the Way ⚓
          </motion.h2>
          <motion.p 
            className="text-lg text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Competencies developed throughout my journey from ship engineer to product leader
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <i className={`fas ${category.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-heading font-bold">{category.name}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex} 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="inline-block w-8 h-8 bg-accent/10 rounded-full text-accent flex items-center justify-center mr-3">
                      <i className={`fas ${skill.icon}`}></i>
                    </span>
                    <span className="text-primary/80">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="inline-block bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-heading font-bold mb-4">Earned Badges</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skillBadges.map((badge, index) => (
                <div 
                  key={index} 
                  className="w-20 h-20 rounded-full bg-primary/10 flex flex-col items-center justify-center text-primary relative group"
                >
                  <motion.i 
                    className={`fas ${badge.icon} text-2xl mb-1`}
                    animate={{ rotate: badge.animate ? [0, 360] : 0 }}
                    transition={{ repeat: badge.animate ? Infinity : 0, duration: 5, ease: "linear" }}
                  />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    {badge.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

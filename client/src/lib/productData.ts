export const productData = [
  {
    id: 'mform',
    name: 'MForm',
    company: 'Dhwani Rural Systems',
    category: 'Data Collection',
    description: 'Mobile-first data collection platform for rural areas with offline capabilities.',
    longDescription: 'MForm is a robust, flexible data collection platform designed for field workers in rural and low-connectivity areas. It enables organizations to gather critical impact data even in offline environments, with seamless syncing once connectivity is restored.',
    icon: 'fa-mobile-alt',
    painPoint: 'Slow, manual data collection in remote areas',
    achievement: 'Scaled to 50+ NGOs, handling 500K+ survey submissions',
    tags: ['Mobile', 'Offline-first', 'Impact Measurement'],
    painPoints: [
      'Manual paper-based data collection leading to delays, errors, and difficult analysis',
      'Limited internet connectivity in remote areas hampering digital solutions',
      'Need for real-time monitoring of impact data across diverse geographical regions',
      'Complex survey requirements with conditional logic and validation needs'
    ],
    achievements: [
      'Scaled platform to serve 50+ nonprofit organizations across India',
      'Platform now handles over 500,000 survey submissions annually',
      'Reduced data collection time by 60% compared to previous methods',
      'Improved data accuracy by 40% through built-in validation rules'
    ],
    features: [
      'Offline data collection with automatic syncing',
      'Support for text, numeric, geotagging, photos, and signature inputs',
      'Complex form logic with skip patterns and validation',
      'Real-time data visualization dashboards',
      'Multilingual interface supporting regional languages'
    ],
    approach: 'We approached MForm development with a field-first mindset, conducting extensive research in low-connectivity areas to understand the exact requirements of field workers. The platform was built using progressive enhancement principles to ensure functionality in extremely limited tech environments.',
    process: [
      {
        title: 'Research',
        description: 'Conducted field studies across 5 states to understand data collection challenges'
      },
      {
        title: 'Prototype',
        description: 'Developed offline-first prototypes tested with actual field workers'
      },
      {
        title: 'Scale',
        description: 'Iteratively improved and scaled to multiple sectors and organizations'
      }
    ],
    learnings: 'Building MForm taught me that the most impactful products are those designed around real-world constraints rather than ideal conditions. By focusing on offline-first design principles, we created a solution that worked in the most challenging environments, making it robust enough for any scenario.'
  },
  {
    id: 'mgrant',
    name: 'MGrant',
    company: 'Dhwani Rural Systems',
    category: 'CSR Reporting',
    description: 'No-code CSR reporting and nonprofit management platform.',
    longDescription: 'MGrant provides corporate CSR teams and nonprofits with a comprehensive solution for grant management, impact tracking, and regulatory reporting. The platform streamlines the entire CSR lifecycle from program design to impact assessment.',
    icon: 'fa-chart-pie',
    painPoint: 'Lack of structured reporting for nonprofits and CSR',
    achievement: 'Used by top CSR arms like Godrej, HDFC, Mahindra Group',
    tags: ['CSR Tech', 'Impact Reporting', 'No-code'],
    painPoints: [
      'Disjointed CSR reporting processes across multiple nonprofit partners',
      'Difficulty in aggregating and visualizing impact data from diverse sources',
      'Compliance challenges with changing CSR regulations',
      'Inefficient grant distribution and monitoring workflows'
    ],
    achievements: [
      'Onboarded major corporate CSR departments including Godrej, HDFC, and Mahindra Group',
      'Streamlined reporting for over ₹200 crore in CSR investments annually',
      'Reduced reporting overhead by 70% for partner nonprofits',
      'Enabled real-time impact visualization for key stakeholders'
    ],
    features: [
      'Customizable dashboards for different stakeholder views',
      'Automated regulatory compliance reporting',
      'Grant lifecycle management tools',
      'Impact visualization and comparative analysis',
      'Document management system for grant documentation'
    ],
    approach: 'MGrant was developed using a collaborative approach, working closely with both corporate CSR teams and their nonprofit partners to design a platform that served both sides of the partnership. We focused on creating a no-code experience that allowed for maximum customization without technical expertise.',
    process: [
      {
        title: 'Discovery',
        description: 'Mapped CSR workflows across multiple corporations to identify common patterns'
      },
      {
        title: 'Design',
        description: 'Created a flexible architecture that accommodated diverse reporting needs'
      },
      {
        title: 'Deployment',
        description: 'Rolled out with phased adoption, focusing on high-impact use cases first'
      }
    ],
    learnings: 'MGrant demonstrated the power of designing platforms that bridge organizational boundaries. By creating a shared system that worked for both funders and implementers, we were able to unlock efficiencies and insights that neither side could achieve independently.'
  },
  {
    id: 'lms',
    name: 'LMS for Nonprofits',
    company: 'Dhwani Rural Systems',
    category: 'Learning',
    description: 'Learning platform for field workers in rural areas with limited connectivity.',
    icon: 'fa-graduation-cap',
    painPoint: 'Difficulty training remote field workers',
    achievement: 'Improved field team productivity by 30%',
    tags: ['Education Tech', 'Rural Development', 'Mobile Learning'],
    painPoints: [
      'Challenges in training large, distributed field teams across remote locations',
      'Limited digital literacy among field workers requiring intuitive interfaces',
      'Need for bandwidth-efficient learning content delivery',
      'Tracking completion and assessment in intermittent connectivity environments'
    ],
    achievements: [
      'Improved field team productivity by 30% through consistent training',
      'Reduced training costs by 65% by eliminating need for in-person workshops',
      'Achieved 85% course completion rate despite connectivity challenges',
      'Successfully trained 5000+ field workers across multiple states'
    ],
    features: [
      'Offline learning modules with progress syncing',
      'Microlearning format optimized for mobile devices',
      'Multimedia content with minimal bandwidth requirements',
      'Gamification elements to increase engagement',
      'Certification and skill tracking system'
    ]
  },
  {
    id: 'dubpro',
    name: 'Dubpro.ai Platform',
    company: 'Dubpro.ai',
    category: 'AI + Human',
    description: 'AI-based video dubbing service with human quality control.',
    icon: 'fa-language',
    painPoint: 'Lack of affordable, quality multilingual dubbing',
    achievement: '5x growth in paying subscribers in 6 months',
    tags: ['AI', 'Content Localization', 'Creator Tools'],
    painPoints: [
      'Existing dubbing solutions were either too expensive or low quality',
      'Creators struggling to expand into new language markets',
      'Need for authentic-sounding localized content at scale',
      'Complex workflow management between AI systems and human reviewers'
    ],
    achievements: [
      'Achieved 5x growth in paying subscribers within 6 months of launch',
      'Processed over 10,000 minutes of video content across 8 languages',
      'Maintained 96% customer satisfaction rate through human-in-loop quality control',
      'Reduced dubbing turnaround time by 70% compared to traditional services'
    ],
    features: [
      'AI voice synthesis with natural intonation and emotion',
      'Human quality control and enhancement workflow',
      'Collaborative editing tools for voice refinement',
      'Integration with major video platforms',
      'Custom voice training for brand consistency'
    ],
    approach: 'Dubpro.ai was built on the principle that AI and human expertise should be complementary, not competitive. We designed a system where AI handled the heavy lifting of initial voice generation, while human voice experts refined and perfected the output, creating a scalable yet high-quality solution.',
    process: [
      {
        title: 'Generate',
        description: 'AI creates initial dubbing based on script and tone preferences'
      },
      {
        title: 'Refine',
        description: 'Human experts enhance emotion, pronunciation, and authenticity'
      },
      {
        title: 'Deliver',
        description: 'Final output integrated directly with creator\'s publishing workflow'
      }
    ],
    learnings: 'The success of Dubpro.ai demonstrated that the most powerful applications of AI are those that enhance human capabilities rather than replace them. By creating clearly defined roles for both AI and human contributors, we built a system that delivered both scale and quality.'
  },
  {
    id: 'fitdote',
    name: 'Fitness Service Aggregator',
    company: 'Fitdote',
    category: 'Marketplace',
    description: 'A platform connecting fitness service seekers with certified trainers.',
    icon: 'fa-heartbeat',
    painPoint: 'Travelers struggling to find quality fitness centers',
    achievement: '120% boost in platform conversions',
    tags: ['Fitness Tech', 'Marketplace', 'Service Discovery'],
    painPoints: [
      'Travelers unable to maintain fitness routines when visiting new cities',
      'Beginners overwhelmed by fitness options without proper guidance',
      'Qualified trainers lacking visibility and discovery channels',
      'Fitness centers needing better digital presence and booking tools'
    ],
    achievements: [
      'Achieved 120% improvement in platform conversion rates',
      'Launched 3 new vertical services expanding platform scope',
      'Increased monthly active users by 18% through retention programs',
      'Established partnerships with 150+ fitness centers across 5 cities'
    ],
    features: [
      'Location-based fitness service discovery',
      'Verified trainer profiles with specialization filters',
      'Flexible booking and scheduling system',
      'Review and rating mechanism',
      'Personalized fitness program recommendations'
    ]
  },
  {
    id: 'pubc',
    name: 'PubC (SaaP Model)',
    company: 'TNQ Technologies',
    category: 'Publishing Tech',
    description: 'A publishing services platform integrating project tracking, communication, and reporting under a single interface.',
    icon: 'fa-book',
    painPoint: 'Fragmented client communication and service delivery',
    achievement: 'Reduced project turnaround time by 30%',
    tags: ['Enterprise Platform', 'Service Portal', 'Publishing'],
    painPoints: [
      'Disjointed client communication spread across email, calls, and multiple tools',
      'Lack of real-time visibility into project status for clients',
      'Inefficient service request and delivery workflows',
      'Need for transition from service-only to technology-enabled service model'
    ],
    achievements: [
      'Reduced project turnaround time by 30% through streamlined workflows',
      'Increased client satisfaction scores by 40% with improved transparency',
      'Successfully transitioned TNQ to a tech-first service positioning',
      'Consolidated 5 separate communication channels into a single platform'
    ],
    features: [
      'Centralized project dashboard for real-time status tracking',
      'Integrated messaging and feedback system',
      'Self-service options for common publishing requests',
      'Document repository with version control',
      'Automated service reports and analytics'
    ],
    approach: 'PubC was developed with a service-first mindset, focusing on translating TNQ\'s excellent but fragmented service processes into a unified digital experience. We approached the platform not as a simple portal but as a complete reinvention of how publishing services could be delivered in a digital-first world.',
    process: [
      {
        title: 'Unify',
        description: 'Consolidated fragmented touchpoints into a coherent service journey'
      },
      {
        title: 'Digitize',
        description: 'Transformed manual service processes into digital workflows'
      },
      {
        title: 'Enhance',
        description: 'Added self-service capabilities that weren\'t possible in the manual model'
      }
    ],
    learnings: 'PubC demonstrated that digital transformation isn\'t just about technology – it\'s about reimagining service delivery. By thinking of our platform as "Service as a Platform," we were able to create something that enhanced rather than replaced the human expertise that was TNQ\'s core strength.'
  }
];

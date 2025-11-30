import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

const About = () => {
  const team = [
    { name: 'Sarah Johnson', role: 'Founder & CEO', image: 'https://picsum.photos/seed/team1/300/300' },
    { name: 'Michael Chen', role: 'Head of Design', image: 'https://picsum.photos/seed/team2/300/300' },
    { name: 'Emily Rodriguez', role: 'Marketing Director', image: 'https://picsum.photos/seed/team3/300/300' },
    { name: 'David Kim', role: 'Operations Lead', image: 'https://picsum.photos/seed/team4/300/300' }
  ];

  const timeline = [
    { year: '2019', title: 'The Beginning', description: 'CurvyStyle was founded with a mission to provide stylish, comfortable clothing for all body types.' },
    { year: '2020', title: 'Online Launch', description: 'We launched our e-commerce platform, making our collection accessible to customers worldwide.' },
    { year: '2021', title: 'Expanding Collection', description: 'Added men\'s and kids\' lines to our offerings, celebrating even more bodies.' },
    { year: '2023', title: '50K+ Customers', description: 'Reached the milestone of serving over 50,000 happy customers globally.' }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-snow-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-royal-purple to-sunset-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We believe fashion should celebrate every body. Our mission is to provide 
              stylish, comfortable, and inclusive clothing for everyone.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <img
                src="https://picsum.photos/seed/about1/600/400"
                alt="Our mission"
                className="rounded-2xl card-shadow"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-sunset-orange font-semibold uppercase tracking-wide">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-charcoal mt-2 mb-6">
                Fashion Without <span className="gradient-text">Limits</span>
              </h2>
              <p className="text-slate mb-4">
                At CurvyStyle, we&apos;re on a mission to revolutionize plus-size fashion. 
                We believe that everyone deserves to look and feel amazing, regardless of 
                their size.
              </p>
              <p className="text-slate mb-4">
                Our designs are created by a diverse team who understand that style 
                shouldn&apos;t compromise comfort, and that every body is beautiful.
              </p>
              <p className="text-slate">
                From our carefully selected fabrics to our thoughtful cuts, every piece 
                is designed to make you feel confident and empowered.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cloud-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-charcoal">
              Our <span className="gradient-text">Values</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💜',
                title: 'Inclusivity',
                description: 'Fashion is for everyone. We design for all body types and celebrate diversity.'
              },
              {
                icon: '✨',
                title: 'Quality',
                description: 'We use premium materials and expert craftsmanship to create lasting pieces.'
              },
              {
                icon: '🌱',
                title: 'Sustainability',
                description: 'We&apos;re committed to ethical practices and reducing our environmental impact.'
              }
            ].map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-8 text-center card-shadow"
                  whileHover={{ y: -8 }}
                >
                  <span className="text-5xl">{value.icon}</span>
                  <h3 className="text-xl font-semibold font-poppins text-deep-charcoal mt-4 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate">{value.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-charcoal">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </FadeIn>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-purple to-sunset-orange hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div
                        className="bg-white rounded-2xl p-6 card-shadow"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-sunset-orange font-bold text-xl">{item.year}</span>
                        <h3 className="text-lg font-semibold text-deep-charcoal mt-2">{item.title}</h3>
                        <p className="text-slate mt-2">{item.description}</p>
                      </motion.div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-gradient-to-r from-royal-purple to-sunset-orange rounded-full z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-cloud-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-charcoal">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-slate mt-4">The passionate people behind CurvyStyle</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden card-shadow text-center"
                  whileHover={{ y: -8 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-deep-charcoal">{member.name}</h3>
                    <p className="text-slate">{member.role}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

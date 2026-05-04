import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, Globe, Github, Database, Cpu, Layout, Server, CheckCircle2, Laptop, MousePointer2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: <CheckCircle2 className="w-5 h-5 text-neon-pink" />, text: "User can add travel plans" },
    { icon: <CheckCircle2 className="w-5 h-5 text-neon-pink" />, text: "Manage destinations and schedules" },
    { icon: <CheckCircle2 className="w-5 h-5 text-neon-pink" />, text: "Store travel data securely" },
    { icon: <CheckCircle2 className="w-5 h-5 text-neon-pink" />, text: "Responsive and user-friendly UI" },
    { icon: <CheckCircle2 className="w-5 h-5 text-neon-pink" />, text: "Backend API integration" }
  ];

  const gallery = [
    "https://www.chardham-pilgrimage-tour.com/assets/images/jagannath-temple-puri-odisha.webp ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK3D3hnXeED75tEOA6Zd8kHB0GYEqNSx1aQ&s",
    "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/waterfalls-near-bhubaneswar.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmv8hG5ANnVJA-RVt2MudezcGn3USw-_few&s"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-deep min-h-screen text-white pt-24"
    >
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/20 via-brand-deep/60 to-brand-deep z-10" />
          
          {/* Title Overlay for Utkal Darshan */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none overflow-hidden">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1.2 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="text-[15vw] font-serif italic text-white tracking-[0.2em] whitespace-nowrap opacity-10"
                >
                    Utkal Darshan
                </motion.h2>
          </div>

          <img 
            src="https://s7ap1.scene7.com/is/image/incredibleindia/sri-jagannath-temple-puri-odisha-2-attr-hero?qlt=82&ts=1726663717081" 
            alt="Jagannath Temple Odisha" 
            className="w-full h-full object-cover grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-12 relative z-20 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-brand-accent transition-colors group mb-12">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="accent-label text-neon-pink">Full Stack Development</p>
            <h1 className="text-6xl md:text-8xl font-serif italic leading-tight">
              Travel Itinerary <br /> Planner Utkal Darshan
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed italic">
              "A smart solution for planning and managing travel experiences"
            </p>
            <motion.a
              href="https://github.com/suvambehera01/Utkal-Darshan"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.07] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-neon-pink/60 hover:bg-neon-pink/15 hover:text-neon-pink hover:shadow-[0_0_32px_-8px_rgba(236,72,153,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-pink sm:px-8 sm:text-xs"
            >
              <Github className="h-5 w-5 shrink-0 text-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:text-neon-pink" aria-hidden />
              <span>View Source Code (GitHub)</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section className="py-32 max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12 space-y-8">
            <div className="flex items-center gap-6 opacity-30">
               <span className="text-[10px] tracking-[0.4em] uppercase font-bold">The Blueprint</span>
               <div className="flex-1 h-px bg-white" />
            </div>
            <p className="text-3xl font-serif italic leading-relaxed text-white/80 max-w-4xl">
              This is a full-stack web application that allows users to plan trips, manage itineraries, and store travel details efficiently. It includes user-friendly forms, backend APIs, and database integration.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURES & 4. TECH STACK */}
      <section className="py-24 bg-white/2">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Features */}
          <div className="space-y-12">
            <h3 className="text-2xl font-serif italic flex items-center gap-4">
              <Layout className="w-6 h-6 text-brand-accent" />
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5"
                >
                  {feature.icon}
                  <span className="text-sm font-light text-gray-300 italic">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-12">
            <h3 className="text-2xl font-serif italic flex items-center gap-4">
              <Cpu className="w-6 h-6 text-neon-pink" />
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Java', icon: <Server className="w-4 h-4" /> },
                { name: 'Spring Boot', icon: <Database className="w-4 h-4" /> },
                { name: 'React', icon: <Laptop className="w-4 h-4" /> },
                { name: 'MySQL', icon: <Database className="w-4 h-4" /> }
              ].map((tech, idx) => (
                <div key={idx} className="p-6 glass border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:border-white/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECT WORKFLOW */}
      <section className="py-32 max-w-7xl mx-auto px-12">
        <div className="flex flex-col items-center text-center space-y-16">
          <div className="space-y-4">
            <p className="accent-label text-brand-accent">Behind the Scenes</p>
            <h2 className="text-5xl font-serif italic">Operational Workflow</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative w-full">
            {[
              { step: "01", title: "Input", desc: "User enters travel details via React forms." },
              { step: "02", title: "Process", desc: "Data is sent to backend (Spring Boot API)." },
              { step: "03", title: "Storage", desc: "Data stored in MySQL database securely." },
              { step: "04", title: "Present", desc: "React frontend displays and manages data." }
            ].map((item, idx) => (
              <div key={idx} className="relative space-y-4 p-8 glass rounded-2xl group overflow-hidden">
                <div className="absolute -right-4 -top-4 text-6xl font-serif italic opacity-5 group-hover:opacity-10 transition-opacity">{item.step}</div>
                <h4 className="text-lg font-serif italic text-white/90">{item.title}</h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{item.desc}</p>
                <div className="w-8 h-[1px] bg-brand-accent group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMAGE GALLERY SECTION */}
      <section className="py-32 bg-white/2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 space-y-16">
           <div className="flex items-center gap-6 opacity-30">
               <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Visual Archives</span>
               <div className="flex-1 h-px bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {gallery.map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-[4/5] rounded-2xl overflow-hidden glass p-1 cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover rounded-xl transition-all duration-700 grayscale group-hover:grayscale-0" />
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* 7. CHALLENGES & LEARNING */}
      <section className="py-40 max-w-4xl mx-auto px-12 text-center space-y-16">
        <div className="space-y-4">
          <p className="accent-label text-neon-pink">Reflection</p>
          <h2 className="text-5xl font-serif italic">Challenges & Learning</h2>
        </div>
        <div className="space-y-8 text-xl font-light text-gray-400 italic leading-loose">
          <p>
            Faced challenges in backend integration and API handling, ensuring seamless communication between Java services and the client.
          </p>
          <p>
            Learned full-stack architecture and database management, mastering the art of structuring complex relational data.
          </p>
          <p className="text-white/80">
            Most importantly, I improved problem-solving skills by debugging intricate architectural bottlenecks.
          </p>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-40">
        <div className="max-w-3xl mx-auto glass p-16 rounded-[3rem] text-center space-y-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-5xl font-serif italic relative z-10 leading-tight">Interested in <br /> This Architecture?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button className="px-10 py-5 bg-white text-black text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-neon-pink hover:text-white transition-all shadow-xl shadow-brand-accent/5">
              View Live Project
            </button>
            <button className="px-10 py-5 glass border-white/20 text-white text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-white/10 transition-all">
              View Source Code (GitHub)
            </button>
          </div>
        </div>
      </section>

      {/* BACK BUTTON (Bottom) */}
      <div className="py-20 text-center">
        <Link to="/" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/40 hover:text-brand-accent transition-colors group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
          Final Return to Portfolio
        </Link>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage} 
            className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl" 
          />
          <button className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors">
            <span className="text-[10px] uppercase tracking-widest font-bold">Close Artifact</span>
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetail;

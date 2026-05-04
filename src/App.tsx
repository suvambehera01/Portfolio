import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, Layers, Palette, MoveRight, Instagram, Twitter, Github, MousePointer2, ChevronLeft, ChevronRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import React, { useState, useEffect, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import FakeNewsDetail from './components/FakeNewsDetail';
import Chatbot from './components/Chatbot';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on the home page for hash links
  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-6 glass border-b' : 'py-8 bg-transparent'}`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <div className="flex space-x-12 items-center">
          {isHome ? (
            <a href="#about" className="nav-link">About</a>
          ) : (
            <Link to="/" className="nav-link">Home</Link>
          )}
          <Link to="/portfolio" className="nav-link">Work</Link>
        </div>

        <Link to="/" className="text-2xl font-serif italic tracking-[0.2em] bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent px-4">
          SB
        </Link>

        <div className="flex space-x-12 items-center">
          {isHome ? (
            <a href="#contacts" className="nav-link">Contacts</a>
          ) : (
            <Link to="/#contacts" className="nav-link">Contacts</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 25]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-12 items-center relative z-10 w-full">
        
        {/* Left Copy */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center space-y-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
            >
                <p className="accent-label text-neon-pink">Digital Alchemist | Full Stack Developer</p>
                <h1 className="text-7xl md:text-8xl font-serif leading-tight italic">
                    Suvam <br /> Behera
                </h1>
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 flex items-center gap-2">
                    <MousePointer2 className="w-3 h-3" />
                    Bhubaneswar, Odisha, India
                </p>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-sm text-gray-400 max-w-[400px] leading-relaxed font-light"
            >
                I am Suvam Behera, a passionate Full Stack Developer and creative technologist currently pursuing MCA at SOA University. I specialize in building modern web applications using Java, Spring Boot, React, and MySQL.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4"
            >
                <Link to="/portfolio">
                    <button className="px-10 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-neon-pink hover:text-white transition-all duration-500">
                        View Projects
                    </button>
                </Link>
            </motion.div>
        </div>

        {/* Center 3D Object */}
        <div className="col-span-12 lg:col-span-4 flex justify-center items-center py-20 lg:py-0">
            <motion.div 
                style={{ y: y1, rotate }}
                className="relative w-80 h-80"
            >
                {/* 3D Glassy Sphere */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-pink-500/30 blur-[2px] border border-white/10 shadow-[0_0_80px_rgba(139,92,246,0.3)]"></div>
                {/* Inner Glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-white/10 to-transparent backdrop-blur-md"></div>
                {/* Floating Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[40%] rounded-full border-[1.5px] border-white/20 rotate-[35deg] shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[40%] rounded-full border-[1.5px] border-pink-500/40 -rotate-[45deg] shadow-[0_0_15px_rgba(236,72,153,0.2)]"></div>
            </motion.div>
        </div>

        {/* Right Info Section */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center space-y-8 lg:pl-12">
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-6 text-[10px] font-mono text-white/20">BIO</div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-brand-accent mb-2 font-bold select-none">Creative Vision</p>
                <h2 className="text-3xl font-serif mb-6 italic leading-relaxed text-white/90">Beyond the Binary: <br /> Building Experiences</h2>
                
                <p className="text-sm text-gray-400 leading-relaxed font-light mb-8 italic">
                    "I love blending code with creativity, focusing on clean UI/UX and real-world problem-solving projects."
                </p>

                {/* Extra Things: Core focus Pillars */}
                <div className="grid grid-cols-1 gap-4 mb-10 pt-2 border-t border-white/5">
                    <div className="flex items-start gap-4 group/item">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-neon-pink text-[10px] font-mono group-hover/item:bg-neon-pink group-hover/item:text-white transition-all">01</div>
                        <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-white/80 font-bold mb-1">Architecture</h4>
                            <p className="text-[11px] text-gray-500 font-light leading-relaxed">Designing robust, scalable backends with Java & Spring Boot.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 group/item">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-accent text-[10px] font-mono group-hover/item:bg-brand-accent group-hover/item:text-white transition-all">02</div>
                        <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-white/80 font-bold mb-1">Interaction</h4>
                            <p className="text-[11px] text-gray-500 font-light leading-relaxed">Crafting immersive frontends using React and fluid motion.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center border-t border-white/10 pt-6">
                    <a
                      href="https://www.soa.ac.in/iter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold underline decoration-neon-pink underline-offset-4 cursor-pointer hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-pink"
                    >
                      MCA @ SOA University
                    </a>
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">EST. 2024</span>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Sidebar Decorative Texts Removed */}
    </section>
  );
};

interface ProjectProps {
  index: string;
  title: string;
  subtitle: string;
  image: string;
  id: string;
  key?: string | number;
}

const ProjectCard = ({ index, title, subtitle, image, id }: ProjectProps) => {
  const accentColor = parseInt(id) % 2 === 0 ? 'text-brand-accent' : 'text-neon-pink';
  
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative h-40 glass rounded-lg p-6 flex flex-col justify-between overflow-hidden cursor-pointer"
      id={`project-${id}`}
    >
      <span className="absolute top-4 right-4 text-[10px] font-mono text-white/20">{index}</span>
      
      <div>
        <p className={`text-[10px] uppercase tracking-widest font-bold mb-1 italic ${accentColor}`}>{subtitle}</p>
        <h3 className="text-xl font-serif italic text-white/90 group-hover:text-white transition-colors">{title}</h3>
      </div>

      {/* Hover line indicator */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full"></div>
    </motion.div>
  );
};

const ProjectGrid = () => {
  const projects = [
    { title: 'Travel Planner', subtitle: 'Spring • React', index: '01', id: '2', image: 'https://images.unsplash.com/photo-1605553018255-a2798e59449f?q=80&w=400&auto=format&fit=crop' },
    { title: 'Fake News Detection', subtitle: 'AI • Python', index: '02', id: '3', image: 'https://picsum.photos/seed/fnd/400/600' },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-12" id="work">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map(p => (
                <ProjectCard 
                  key={p.id} 
                  id={p.id}
                  title={p.title} 
                  subtitle={p.subtitle} 
                  index={p.index} 
                  image={p.image} 
                />
            ))}
        </div>
    </section>
  );
};

interface CaseStudyProps {
    id: string;
    label: string;
    title: ReactNode;
    desc: string;
    image: string;
    tags: string[];
    link: string;
    reverse?: boolean;
}

const CaseStudy = ({ label, title, desc, image, tags, link, reverse, id }: CaseStudyProps) => {
    return (
        <section className="py-20 relative overflow-hidden">
             <div className="max-w-7xl mx-auto px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className={`relative aspect-[16/10] glass rounded-2xl overflow-hidden p-1 group shadow-2xl shadow-blue-500/10 ${reverse ? 'lg:order-2' : ''}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-neon-pink/20 opacity-40 group-hover:opacity-60 transition-opacity z-10"></div>
                        
                        {/* Title Overlay for Utkal Darshan */}
                        {id === 'travel' && (
                            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="text-5xl md:text-7xl font-serif italic text-white/90 tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                                >
                                    Utkal <br /> <span className="pl-12">Darshan</span>
                                </motion.h2>
                            </div>
                        )}

                        <img 
                            src={image} 
                            alt="Project Archive" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                            referrerPolicy="no-referrer"
                        />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className={`space-y-10 ${reverse ? 'lg:order-1' : ''}`}
                    >
                        <div className="space-y-4">
                            <p className="accent-label text-neon-pink uppercase tracking-[0.2em] font-bold text-[10px]">{label}</p>
                            <h2 className="text-6xl font-serif leading-tight italic">{title}</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-loose max-w-md font-light">
                            {desc}
                        </p>
                        <div className="flex gap-4">
                             {tags.map(tag => (
                                 <div key={tag} className="px-3 py-1 glass text-[8px] uppercase tracking-widest text-white/40">{tag}</div>
                             ))}
                        </div>
                        <Link to={link} className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase font-bold text-white group underline decoration-neon-pink underline-offset-8 decoration-2 hover:text-neon-pink transition-colors pt-4 w-fit">
                            View Details
                            <MoveRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
             </div>
        </section>
    );
}

const FeaturedProjects = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-12 pt-20">
                <div className="flex items-center gap-6 opacity-30">
                    <div className="w-12 h-px bg-white" />
                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Featured Portfolio</span>
                </div>
            </div>
            
            <CaseStudy 
                id="travel"
                label="Featured Project"
                title={<>Travel Itinerary <br /> Planner Utkal Darshan</>}
                desc="A full-stack web application that allows users to plan and manage travel details. Includes form handling, backend API, and database storage."
                image="\images\back.png.jpg"
                tags={["Spring Boot", "React", "MySQL"]}
                link="/project/travel-planner"
            />

            <CaseStudy 
                id="fnd"
                label="Featured Project"
                title={<>Fake News <br /> Detection System</>}
                desc="A machine learning-based web application that detects fake news using natural language processing techniques. It analyzes news content and predicts whether the information is real or fake."
                image="https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1200"
                tags={["Python", "Machine Learning", "Flask", "NLP"]}
                link="/project/fake-news"
                reverse
            />
        </>
    );
};

const SkillsSection = () => {
    const skills = [
        { name: 'Java', level: 'Advanced' },
        { name: 'Spring Boot', level: 'Intermediate' },
        { name: 'React.js', level: 'Intermediate' },
        { name: 'HTML & CSS', level: 'Expert' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'Git & GitHub', level: 'Intermediate' },
        { name: 'UI/UX Basics', level: 'Creative' },
        { name: 'Artificial Intelligence', level: 'Intermediate' },
        { name: 'Prompt Engineering', level: 'Creative' },
    ];

    return (
        <section className="py-20 max-w-7xl mx-auto px-12" id="skills">
            <div className="flex items-center gap-6 mb-16 opacity-30">
                <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Technical Arsenal</span>
                <div className="flex-1 h-px bg-white" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                    <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass p-6 rounded-2xl group hover:border-brand-accent/50 transition-colors"
                    >
                        <p className="text-[10px] uppercase tracking-widest text-brand-accent mb-2">{skill.level}</p>
                        <h4 className="text-xl font-serif italic text-white/80 group-hover:text-white transition-colors">{skill.name}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

const CreativeHighlight = () => {
    return (
        <section className="py-20" id="about">
            <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative aspect-square">
                    <div className="absolute -inset-6 border border-white/5 rounded-3xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-transparent blur-3xl -z-10"></div>
                    <img 
                        src="/images/myphoto.jpeg"
                        alt="Suvam Behera" 
                        className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl shadow-blue-500/10"
                        referrerPolicy="no-referrer"
                    />
                </div>

                <div className="space-y-12 relative">
                    <div className="flex items-center gap-4 text-neon-purple opacity-60">
                        <Palette className="w-6 h-6" />
                        <span className="text-[10px] tracking-[0.4em] uppercase font-bold">The Creative Pulse</span>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-7xl font-serif tracking-wide leading-tight italic">
                            About <br /> <span className="text-white/60">Suvam</span> <br /> <span className="text-brand-accent">Behera</span>
                        </h2>
                        <p className="text-gray-400 text-base font-light max-w-sm leading-relaxed">
                            I am Suvam Behera, a passionate Full Stack Developer and creative technologist currently pursuing MCA at SOA University. I specialize in building modern web applications using Java, Spring Boot, React, and MySQL. 
                        </p>
                        <p className="text-gray-500 text-sm italic font-light">
                            I love blending code with creativity, focusing on clean UI/UX and real-world problem-solving projects.
                        </p>
                    </div>

                    {/* Extra Activities & Academic Milestones */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-brand-accent">
                                <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center">
                                    <Camera className="w-4 h-4" /> {/* Using Camera for visual/creative placeholder as per previous icons */}
                                </div>
                                <span className="text-[10px] uppercase tracking-widest font-bold">Academic Core</span>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-sm font-medium text-white/90 italic">Bachelor of Computer Science</h4>
                                <p className="text-xs text-gray-500 font-light leading-relaxed">Completed graduation from the prestigious **Utkal University**, building a strong foundation in theoretical and practical computer science.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-neon-pink">
                                <div className="w-8 h-8 rounded-full bg-neon-pink/10 flex items-center justify-center">
                                    <Layers className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] uppercase tracking-widest font-bold">Competitive Edge</span>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-sm font-medium text-white/90 italic">Hackathon Veteran</h4>
                                <p className="text-xs text-gray-500 font-light leading-relaxed">Active participant in high-stakes hackathons at **ITER College**, collaborating on innovative solutions under tight deadlines.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 pt-10">
                        <div className="space-y-1">
                            <p className="text-[10px] uppercase tracking-tighter text-white/20">Current Pursuit</p>
                            <a
                              href="https://www.soa.ac.in/iter"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-mono text-brand-accent hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                            >
                              MCA @ SOA University
                            </a>
                        </div>
                        <div className="w-px h-8 bg-white/10"></div>
                        <div className="space-y-1">
                            <p className="text-[10px] uppercase tracking-tighter text-white/20">Specialization</p>
                            <p className="text-xs font-mono text-neon-pink">Full Stack Engineering</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTASection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID || "service_wpvp0x4";
        const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID || "template_7o2ivqn";
        const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY || "RJkiENEdcgZ2mu9Da";

        if (!serviceId || !templateId || !publicKey) {
            setError("Email service not configured. Please check environment variables.");
            return;
        }

        setIsSending(true);
        setError(null);

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'suvambehera184@gmail.com',
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            
            setIsSent(true);
            setFormData({ name: '', email: '', message: '' });
            
            setTimeout(() => {
                setIsSent(false);
            }, 5000);
        } catch (err: any) {
            console.error('EmailJS Error:', err);
            // More specific error message
            if (err?.text?.includes('User ID is required')) {
                setError("Configuration Error: Public Key is missing in Secrets.");
            } else if (err?.text?.includes('Service ID is required')) {
                setError("Configuration Error: Service ID is missing in Secrets.");
            } else {
                setError("Transmission failed. Please check your EmailJS Secrets in Settings.");
            }
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="py-40 max-w-3xl mx-auto" id="contacts">
            <div className="text-center space-y-16 mb-20">
                <div className="flex flex-col items-center gap-6 opacity-20">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-white"></div>
                    <span className="text-[10px] tracking-widest uppercase font-bold italic">Secure a Position</span>
                </div>

                <h2 className="text-6xl md:text-8xl font-serif leading-tight italic bg-gradient-to-br from-white to-gray-600 bg-clip-text text-transparent px-4">
                    Ready to <br /> Collaborate?
                </h2>
                
                <p className="text-gray-400 text-sm font-light max-w-md mx-auto italic">
                    To secure a challenging position where I can apply my technical skills, contribute to innovative projects, and grow as a professional developer.
                </p>
            </div>

            <div className="glass p-12 rounded-3xl space-y-8 border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-[10px] font-mono text-white/5 uppercase tracking-[0.5em] group-hover:text-brand-accent transition-colors">Inquiry</div>
                
                {isSent ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-20 text-center space-y-6"
                    >
                        <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto">
                            <Layers className="w-8 h-8 text-brand-accent animate-pulse" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-serif italic text-white">Odyssey Message Sent!</h3>
                            <p className="text-sm text-gray-500 font-light max-w-xs mx-auto">
                                Thank you, <span className="text-brand-accent font-medium">{formData.name}</span>. Your vision has been transmitted. I will get back to you shortly at {formData.email}.
                            </p>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-white/20 italic pt-4">Returning to transmission gate in 5s...</p>
                    </motion.div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-accent outline-none text-sm transition-all" 
                                    placeholder="Suvam Behera" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
                                <input 
                                    type="email" 
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-accent outline-none text-sm transition-all" 
                                    placeholder="hello@suvambehera184.design" 
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                            <textarea 
                                rows={4} 
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-brand-accent outline-none text-sm transition-all resize-none" 
                                placeholder="Let's build something impactful..."
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            disabled={isSending}
                            className={`w-full py-5 text-[10px] tracking-[0.4em] uppercase font-bold transition-all shadow-xl shadow-brand-accent/5 ${
                                isSending ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-white text-black hover:bg-neon-pink hover:text-white'
                            }`}
                        >
                            {isSending ? 'Transmitting...' : 'Send Odyssey Message'}
                        </button>
                        {error && (
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-[10px] text-center uppercase tracking-widest font-bold"
                            >
                                {error}
                            </motion.p>
                        )}
                    </form>
                )}

                <div className="flex flex-col items-center gap-4 pt-8 w-full">
                    <p className="text-xs font-medium tracking-tight text-white/40">Direct Connection</p>
                    <a
                        href="mailto:suvambehera184@gmail.com"
                        className="text-lg font-serif italic text-white hover:text-brand-accent transition-colors text-center"
                    >
                        suvambehera184@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

const PortfolioGallery = () => {
    const items = [
        { title: 'Quantum Flow', img: 'https://picsum.photos/seed/q1/800/800', index: '04' },
        { title: 'Stellar Sync', img: 'https://picsum.photos/seed/q2/800/800', index: '05' },
        { title: 'Digital Void', img: 'https://picsum.photos/seed/q3/800/800', index: '06' },
        { title: 'Zenith', img: 'https://picsum.photos/seed/q4/800/800', index: '07' },
    ];

    return (
        <section className="py-20 max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map(item => (
                    <div key={item.title} className="group relative cursor-pointer overflow-hidden aspect-[4/5] glass rounded-2xl p-1">
                        <img 
                            src={item.img} 
                            className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 rounded-xl" 
                            alt={item.title}
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-brand-deep/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 gap-4 rounded-xl">
                            <span className="text-[10px] text-neon-pink tracking-widest font-bold italic">{item.index}</span>
                            <h4 className="text-3xl font-serif italic text-white">{item.title}</h4>
                            <div className="w-12 h-[1px] bg-brand-accent"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="py-16 relative overflow-hidden bg-white/2">
             <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex flex-col gap-6 order-2 md:order-1 items-center md:items-start text-gray-500">
                    <div className="flex gap-8">
                        <a href="https://www.instagram.com/_.suvu._10?igsh=MWhsMTU0b252bm9iYQ==" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition-colors"><Instagram className="w-4 h-4" /></a>
                        <a href="https://github.com/suvambehera01" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition-colors"><Github className="w-4 h-4" /></a>
                    </div>
                    <div className="text-[9px] tracking-[0.4em] uppercase font-bold">
                        <p>© 2026 Suvam Behera • Digital Alchemist</p>
                    </div>
                </div>

                <div className="text-3xl font-serif italic tracking-widest text-white/10 order-1 md:order-2 select-none">
                    SB
                </div>

                <div className="flex gap-16 order-3">
                   <div className="flex flex-col gap-4 text-[10px] italic tracking-widest uppercase text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">About</a>
                        <a href="#" className="hover:text-white transition-colors">Work</a>
                        <a href="#" className="hover:text-white transition-colors">Contacts</a>
                   </div>
                </div>
             </div>
        </footer>
    );
};

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    { title: 'Travel Planner Utkal Darshan', subtitle: 'Spring • React • MySQL', index: '01', id: '2', image: '/images/back.png.jpg', link: '/project/travel-planner' },
    { title: 'Fake News Detection', subtitle: 'AI • Python', index: '02', id: '3', image: 'https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=800', link: '/project/fake-news' },
    
  ];

  return (
    <div className="pt-40 pb-20 px-12 max-w-7xl mx-auto">
        <div className="mb-20 space-y-6">
            <Link to="/" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-brand-accent transition-colors group">
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Explorations
            </Link>
            <h1 className="text-6xl md:text-8xl font-serif italic bg-gradient-to-br from-white to-gray-600 bg-clip-text text-transparent">Full Portfolio</h1>
            <p className="text-sm text-gray-400 max-w-xl font-light leading-relaxed">
                A comprehensive collection of digital artifacts, ranging from procedural experiments to high-end visual solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allProjects.map(project => (
                <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative cursor-pointer glass rounded-2xl p-1 overflow-hidden"
                >
                    <Link to={project.link || "#"} className="relative aspect-[3/4] overflow-hidden rounded-xl block text-left">
                        <img 
                            src={project.image} 
                            className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                            alt={project.title}
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-brand-deep/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 gap-4">
                            <span className="text-[10px] text-neon-pink tracking-widest font-bold italic">{project.index}</span>
                            <h4 className="text-4xl font-serif italic text-white">{project.title}</h4>
                            <div className="w-16 h-[1px] bg-brand-accent group-hover:w-full transition-all duration-700"></div>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 pt-4">{project.subtitle}</p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    </div>
  );
};

const HomePage = () => {
    return (
        <>
            <Hero />
            <ProjectGrid />
            <SkillsSection />
            <FeaturedProjects />
            <CreativeHighlight />
            <CTASection />
            <PortfolioGallery />
        </>
    );
};

export default function Portfolio() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="atmosphere-bg">
            <div className="atmosphere-circle-1" />
            <div className="atmosphere-circle-2" />
            <div className="atmosphere-circle-3" />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<WorkPage />} />
          <Route path="/project/travel-planner" element={<ProjectDetail />} />
          <Route path="/project/fake-news" element={<FakeNewsDetail />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

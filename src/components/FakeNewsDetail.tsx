import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, Github, Globe, Cpu, Layout, Server, CheckCircle2, Laptop, MessageSquare, Database, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FakeNewsDetail = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: <Search className="w-5 h-5 text-neon-pink" />, text: "Detect fake vs real news" },
    { icon: <CheckCircle2 className="w-5 h-5 text-neon-pink" />, text: "Text preprocessing and analysis" },
    { icon: <Cpu className="w-5 h-5 text-neon-pink" />, text: "Machine learning model prediction" },
    { icon: <Layout className="w-5 h-5 text-neon-pink" />, text: "Simple and user-friendly interface" }
  ];

  const gallery = [
    "https://m.media-amazon.com/images/I/71JdtBF5-0L._AC_UF1000,1000_QL80_.jpg",
    "https://www.freedomforum.org/wp-content/uploads/2023/10/1000x564_column_101923_insert_2.jpg",
    "https://track2training.com/wp-content/uploads/2020/06/i-newspaper2.jpg"
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
          <img 
            src="https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=1920" 
            alt="" 
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
            <p className="accent-label text-neon-pink">AI & Machine Learning</p>
            <h1 className="text-6xl md:text-8xl font-serif italic leading-tight">
              Fake News <br /> Detection System
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed italic">
              "Detecting misinformation using AI and NLP"
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 max-w-2xl">
              <motion.a
                href="https://github.com/suvambehera01/Fake-News-Detection-"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex w-full sm:flex-1 sm:min-w-[240px] min-h-[48px] items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.07] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-neon-pink/60 hover:bg-neon-pink/15 hover:text-neon-pink hover:shadow-[0_0_32px_-8px_rgba(236,72,153,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-pink sm:px-8 sm:text-xs"
              >
                <Github className="h-5 w-5 shrink-0 text-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:text-neon-pink" aria-hidden />
                <span>View Source Code (GitHub)</span>
              </motion.a>
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.48, duration: 0.5 }}
                className="inline-flex w-full sm:flex-1 sm:min-w-[240px] min-h-[48px] items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.07] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md sm:px-8 sm:text-xs select-none"
              >
                <Globe className="h-5 w-5 shrink-0 text-white/90 text-brand-accent" aria-hidden />
                <span>View Live Project</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <section className="py-32 max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12 space-y-8">
            <div className="flex items-center gap-6 opacity-30">
               <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Project Abstract</span>
               <div className="flex-1 h-px bg-white" />
            </div>
            <p className="text-3xl font-serif italic leading-relaxed text-white/80 max-w-4xl">
              This project is a machine learning-based web application that detects fake news using natural language processing techniques. It analyzes textual data and predicts whether a news article is genuine or misleading.
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
              Key Features
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
                { name: 'Python', icon: <Server className="w-4 h-4" /> },
                { name: 'Flask', icon: <Database className="w-4 h-4" /> },
                { name: 'Machine Learning', icon: <Cpu className="w-4 h-4" /> },
                { name: 'NLP', icon: <MessageSquare className="w-4 h-4" /> }
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

      {/* 5. WORKFLOW */}
      <section className="py-32 max-w-7xl mx-auto px-12">
        <div className="flex flex-col items-center text-center space-y-16">
          <div className="space-y-4">
            <p className="accent-label text-brand-accent">Inference Engine</p>
            <h2 className="text-5xl font-serif italic">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative w-full">
            {[
              { step: "01", title: "Input", desc: "User enters news text via the web interface." },
              { step: "02", title: "Preprocess", desc: "Text is cleaned and vectorized using NLP (TF-IDF/Embeddings)." },
              { step: "03", title: "Inference", desc: "The ML model (Passive Aggressive/Logistic Regression) analyzes features." },
              { step: "04", title: "Result", desc: "Output shows a classification: Real or Fake with confidence." }
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

      {/* 6. IMAGE SECTION */}
      <section className="py-32 bg-white/2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 space-y-16">
           <div className="flex items-center gap-6 opacity-30">
               <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Artifacts</span>
               <div className="flex-1 h-px bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-video rounded-2xl overflow-hidden glass p-1 cursor-pointer group"
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
          <p className="accent-label text-neon-pink">Retrospective</p>
          <h2 className="text-5xl font-serif italic">Learning & Challenges</h2>
        </div>
        <div className="space-y-8 text-xl font-light text-gray-400 italic leading-loose">
          <p>
            Dived deep into Natural Language Processing (NLP) concepts like tokenization, stop-word removal, and vectorization techniques.
          </p>
          <p>
            Faced significant challenges in dataset training, specifically handling unbalanced data and linguistic nuances that can trick classification models.
          </p>
          <p className="text-white/80">
            Successfully improved ML model accuracy by tuning hyperparameters and experimenting with different ensemble methods.
          </p>
        </div>
      </section>

      {/* 8. CTA BUTTONS */}
      <section className="py-40">
        <div className="max-w-3xl mx-auto glass p-16 rounded-[3rem] text-center space-y-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-5xl font-serif italic relative z-10 leading-tight">Explore the <br /> Source Code</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button className="px-10 py-5 bg-white text-black text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-neon-pink hover:text-white transition-all shadow-xl shadow-brand-accent/5">
              View Source Code (GitHub)
            </button>
            <Link to="/" className="px-10 py-5 glass border-white/20 text-white text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-white/10 transition-all flex items-center justify-center">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

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
            <span className="text-[10px] uppercase tracking-widest font-bold">Close</span>
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default FakeNewsDetail;

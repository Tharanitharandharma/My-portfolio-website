/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Download, 
  MapPin, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Figma, 
  Layout, 
  Users, 
  Cpu, 
  ShoppingBag, 
  Search, 
  Wind,
  ChevronRight,
  Github,
  Zap,
  BookOpen,
  Sparkles,
  User,
  Layers,
  Wrench,
  Trophy,
  Quote,
  Coffee,
  Music,
  Brain,
  Accessibility,
  BarChart3,
  Clock,
  CheckCircle2,
  Heart,
  Headphones,
  Keyboard,
  Flower2,
  Dribbble
} from "lucide-react";
import { useRef, useState, useEffect, ReactNode } from "react";

// --- Components ---

const ParallaxSection = ({ children, offset = 50 }: { children: ReactNode; offset?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

const AnimatedEmoji = ({ emoji, className }: { emoji: string; className?: string }) => (
  <motion.span
    animate={{ 
      y: [0, -10, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    className={`inline-block cursor-default ${className}`}
  >
    {emoji}
  </motion.span>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        style={{ y: y1, opacity }}
        className="z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-white/70" />
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-white">Tharani Tharan</span>
          <span className="text-white/25">•</span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/60">Senior UI/UX Designer</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-tight mb-6"
        >
          Crafting <span className="text-white/40">Digital Magic</span> <br />
          through <span className="text-white/40">Human-Centered Design</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-muted text-lg md:text-xl font-medium tracking-widest uppercase"
        >
          Discover Design Magic with Tharani Tharan <AnimatedEmoji emoji="✨" />
        </motion.p>
      </motion.div>

      {/* Abstract Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
};

const MetricsBar = () => {
  const metrics = [
    { label: "Years Experience", value: "7+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Awards & Recognition", value: "5+" },
    { label: "Industries Served", value: "4" },
  ];

  return (
    <div className="border-y border-border bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <span className="text-4xl font-bold tracking-tighter mb-1">{m.value}</span>
            <span className="text-[10px] uppercase tracking-widest text-muted font-semibold">{m.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const projects = [
    {
      title: "ProbHunt",
      category: "Product Design / AI",
      description: "Where real-world problems meet real solutions. Submit · Research · Solve · Learn.",
      impact: "Connecting innovators with validated real-world problem statements.",
      icon: <Sparkles className="w-6 h-6 text-white" />,
      link: "https://www.behance.net/gallery/254159551/ProbHunt"
    },
    {
      title: "Uitoolz Design Resources",
      category: "Design Resources / Web",
      description: "Elevate your creativity at uitoolz.com – your one-stop destination for premium design resources. Curated fonts, icons, templates, and UI components.",
      impact: "One-stop solution for designers and product teams worldwide.",
      icon: <ShoppingBag className="w-6 h-6 text-white" />,
      link: "https://www.behance.net/gallery/178389643/uitoolzcom"
    },
    {
      title: "Bike Community App",
      category: "Mobile App / Social Media",
      description: "A premium mobile experience designed to bridge the gap between solo riding and community exploration.",
      impact: "A social platform bridging solo riding with group discovery.",
      icon: <Users className="w-6 h-6 text-white" />,
      link: "https://www.behance.net/gallery/246831781/Bike-Community-App"
    }
  ];

  return (
    <section id="work" className="py-12 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={30}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-5 h-5 text-white/40" />
              <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Selected Works</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Case Studies <AnimatedEmoji emoji="📁" /></h3>
          </div>
          <p className="max-w-md text-muted text-lg">
            A collection of projects where design meets functionality to solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a 
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card group cursor-pointer block hover:border-white/30"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white group-hover:text-black transition-colors duration-500">
                  {p.icon}
                </div>
                <div className="flex items-center gap-2 text-muted group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-muted font-bold">{p.category}</span>
                <h4 className="text-3xl font-bold tracking-tight group-hover:text-white transition-colors">{p.title}</h4>
                <p className="text-muted leading-relaxed text-sm">{p.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};

const Superpowers = () => {
  const powers = [
    { title: "Creativity", desc: "I see design as magic that turns complex problems into simple, beautiful solutions.", emoji: "🎨", span: "md:col-span-2" },
    { title: "User Experiences", desc: "I step into the user’s world to feel, understand, and craft experiences they truly love.", emoji: "🧠", span: "md:col-span-1" },
    { title: "Low-Code Magic", desc: "I create beautiful websites with design spells using Framer, WordPress, and a spark of code magic", emoji: "🪄", span: "md:col-span-1" },
    { title: "AI, Vibe Design & Vibe Coding", desc: "Supercharging modern workflows through vibe design and vibe coding — blending intuitive aesthetics, AI agents, and rapid code prototyping into high-impact products.", emoji: "⚡", span: "md:col-span-2" }
  ];

  return (
    <section className="py-12 overflow-hidden bg-[#050505]">
      <ParallaxSection offset={40}>
        <div className="px-6 max-w-7xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-5 h-5 text-white/40" />
            <h2 className="text-sm uppercase tracking-[0.4em] text-muted">My Superpowers</h2>
          </div>
          <p className="text-2xl md:text-4xl font-medium tracking-tight max-w-3xl">
            Every project is a mission, these are the powers that help me turn ideas into impact. <AnimatedEmoji emoji="⚡" />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
          {powers.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bento-card ${p.span}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold tracking-tight">{p.title}</h4>
                <span className="text-2xl">{p.emoji}</span>
              </div>
              <p className="text-muted leading-relaxed text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="about" className="py-12 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={50}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bio Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bento-card md:col-span-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-5 h-5 text-white/40" />
                  <h2 className="text-sm uppercase tracking-[0.4em] text-muted">About Me</h2>
                </div>
                <p className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">
                  I'm <span className="text-white font-bold">Tharani Tharan</span>, a <span className="text-white">Senior UI/UX Designer</span> with 7 years of experience crafting intuitive digital experiences. My approach blends <span className="text-white/40 italic">Lean UX</span> with user-centered design to drive efficiency and engagement. <AnimatedEmoji emoji="👋" />
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <a 
                href="https://drive.google.com/file/d/1motEjNYS3dkzeo6cmo12Nubk6uy109FE/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Download Tharani Tharan Sr. UI/UX Designer Resume (PDF)"
                className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-white/10"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <div className="px-8 py-4 border border-border rounded-full font-bold flex items-center gap-2">
                Currently at <span className="text-white">ebm-papst</span>
              </div>
            </div>
          </motion.div>

        {/* Location Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bento-card md:col-span-4 flex flex-col justify-between bg-gradient-to-br from-[#0A0A0A] to-[#111]"
        >
          <div className="flex justify-between items-start">
            <MapPin className="text-white/40" />
            <span className="text-[10px] uppercase tracking-widest text-muted font-bold">Location</span>
          </div>
          <div className="mt-auto">
            <h4 className="text-3xl font-bold tracking-tight">Chennai</h4>
            <p className="text-muted">Tamil Nadu, India</p>
          </div>
          {/* Mock Map Pattern */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 opacity-10">
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-full aspect-square border border-white rounded-sm" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Efficiency Metric Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bento-card md:col-span-4 flex flex-col items-center justify-center text-center"
        >
          <span className="text-6xl font-black tracking-tighter mb-2">40%</span>
          <p className="text-xs uppercase tracking-widest text-muted font-bold">Efficiency Improvement</p>
          <p className="text-[10px] text-white/20 mt-4 italic">via custom dashboard widgets</p>
        </motion.div>

        {/* Iteration Metric Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bento-card md:col-span-4 flex flex-col items-center justify-center text-center"
        >
          <span className="text-6xl font-black tracking-tighter mb-2">25%</span>
          <p className="text-xs uppercase tracking-widest text-muted font-bold">Reduction in Iteration Time</p>
          <p className="text-[10px] text-white/20 mt-4 italic">using Google Design Sprints</p>
        </motion.div>

        {/* Social Links Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bento-card md:col-span-4 flex items-center justify-center gap-4"
        >
          <a href="https://www.linkedin.com/in/tharani-tharan-dharmalingam-9b229a207/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:tharanidharma@gmail.com?subject=%20Hey%20Buddy%20_____" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/tharanidharma" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://dribbble.com/tharanitharandharmalingam" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
            <Dribbble className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </ParallaxSection>
  </section>
  );
};

const HowIThink = () => {
  const steps = [
    { 
      stage: "Empathize", 
      desc: "Deep diving into user worlds through research and interviews.", 
      artifact: "User Journey Maps",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500/20 to-transparent",
      accent: "text-blue-400"
    },
    { 
      stage: "Define", 
      desc: "Synthesizing insights to anchor the project in a clear problem statement.", 
      artifact: "User Stories & Personas",
      icon: <Search className="w-6 h-6" />,
      color: "from-purple-500/20 to-transparent",
      accent: "text-purple-400"
    },
    { 
      stage: "Ideate", 
      desc: "Exploration without boundaries, followed by structured sketching.", 
      artifact: "Wireframe Iterations",
      icon: <Layers className="w-6 h-6" />,
      color: "from-pink-500/20 to-transparent",
      accent: "text-pink-400"
    },
    { 
      stage: "Prototype", 
      desc: "Bringing ideas to life with interactive, high-fidelity flows.", 
      artifact: "Interactive Prototypes",
      icon: <Layout className="w-6 h-6" />,
      color: "from-orange-500/20 to-transparent",
      accent: "text-orange-400"
    },
    { 
      stage: "Test", 
      desc: "Validating assumptions with real users to refine and perfect.", 
      artifact: "Usability Reports",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "from-green-500/20 to-transparent",
      accent: "text-green-400"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <ParallaxSection offset={30}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-5 h-5 text-white/40" />
              <h2 className="text-sm uppercase tracking-[0.4em] text-muted">The Process</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">How I Think <AnimatedEmoji emoji="🧠" /></h3>
          </div>
          <p className="max-w-md text-muted text-lg italic">
            A systematic approach to solving complex problems through design thinking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[32px] bg-gradient-to-b ${step.color} border border-white/5 flex flex-col justify-between min-h-[320px] group hover:border-white/20 transition-all duration-500`}
            >
              <div className="relative z-10">
                <div className={`mb-6 ${step.accent} opacity-60 group-hover:opacity-100 transition-opacity`}>
                  {step.icon}
                </div>
                <span className="text-4xl font-black opacity-10 absolute -top-2 -right-2 tracking-tighter">{i + 1}</span>
                <h4 className="text-2xl font-bold tracking-tight mb-4">{step.stage}</h4>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
              
              <div className="relative z-10 mt-8">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold block mb-2">Key Artifact</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${step.accent}`}>
                  {step.artifact}
                </span>
              </div>
              
              {/* Decorative Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-[32px]`} />
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};

const Playground = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={30}>
        <div className="flex items-center gap-3 mb-6">
          <ShoppingBag className="w-5 h-5 text-white/40" />
          <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Playground</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min md:auto-rows-[240px]">
          {/* Uitoolz Card - Double Height */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bento-card md:col-span-2 md:row-span-2 bg-[#0A0A0A] flex flex-col justify-between group min-h-[400px] md:min-h-0"
          >
            <div className="flex justify-between items-start">
              <div className="w-20 h-20 bg-[#00FF00]/10 rounded-3xl flex items-center justify-center border border-[#00FF00]/20">
                <span className="text-5xl font-black text-[#00FF00] italic">U</span>
              </div>
              <a href="https://www.behance.net/gallery/178389643/uitoolzcom" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#00FF00]/20 text-[#00FF00] text-[8px] font-bold uppercase tracking-widest rounded">Live Project</span>
                <h3 className="text-4xl font-black tracking-tighter">Uitoolz</h3>
              </div>
              <p className="text-muted text-lg max-w-md leading-tight">One-stop solution for design resources. Curated fonts, icons, and templates for modern designers.</p>
              <p className="text-[#00FF00] font-mono text-xs mt-6 tracking-widest uppercase">uitoolz.com</p>
            </div>
          </motion.div>

          {/* Metric Card */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bento-card bg-black text-white flex flex-col justify-center items-center text-center py-12 border border-white/10"
          >
            <span className="text-7xl font-black tracking-tighter mb-2">87%</span>
            <p className="text-[10px] uppercase tracking-widest font-bold leading-tight text-white/60">
              More productive for <br /> all types of designers
            </p>
          </motion.div>

          {/* Passion Projects Title Card */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bento-card bg-[#111] flex flex-col justify-end py-12"
          >
            <div className="p-3 bg-white/5 rounded-xl w-fit mb-4">
              <Zap className="w-5 h-5 text-white/60" />
            </div>
            <h4 className="text-xl font-bold tracking-tight mb-2">Passion Projects</h4>
            <p className="text-muted text-xs leading-relaxed">Exploring the boundaries of design and utility through personal experiments and open-source tools.</p>
          </motion.div>
        </div>
      </ParallaxSection>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={40}>
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-5 h-5 text-white/40" />
          <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Philosophy Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bento-card md:col-span-8 bg-gradient-to-br from-[#0A0A0A] to-[#111] flex flex-col justify-center p-12 min-h-[300px]"
          >
            <p className="text-3xl md:text-5xl tracking-tight leading-tight">
              <span className="font-light text-white/40">Simplicity meets innovation,</span> <br />
              <span className="font-bold text-white">crafting user-centric designs, inspired by Apple.</span>
            </p>
          </motion.div>

          {/* 7x Metric Card */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bento-card md:col-span-4 bg-gradient-to-br from-neutral-900 to-[#121212] border border-white/10 text-white flex flex-col items-center justify-center text-center py-12 relative overflow-hidden group shadow-[0_0_40px_rgba(255,255,255,0.03)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.04] to-transparent pointer-events-none" />
            <span className="text-8xl font-black tracking-tighter mb-2 text-white">7x</span>
            <p className="text-xs uppercase tracking-widest font-black mb-2 text-white">Faster productivity</p>
            <p className="text-[11px] text-white/80 font-medium tracking-wide">Experience the AI-powered difference!</p>
          </motion.div>

          {/* Black Iris Quote Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bento-card md:col-span-12 bg-white/5 backdrop-blur-2xl border-white/10 flex flex-col items-center justify-center py-12 px-12 text-center relative overflow-hidden group"
          >
            <div className="absolute top-12 left-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Quote className="w-16 h-16 rotate-180" />
            </div>
            <blockquote className="max-w-4xl z-10">
              <p className="text-4xl md:text-6xl font-serif italic tracking-tight leading-tight mb-10 text-gradient">
                "Black Iris to Observe Everything. White Sclera to Explore that Everything."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-px bg-white/20" />
                <cite className="text-xs uppercase tracking-[0.5em] text-muted font-bold not-italic">
                  Tharani Tharan
                </cite>
                <div className="w-12 h-px bg-white/20" />
              </div>
            </blockquote>
            <div className="absolute bottom-12 right-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Quote className="w-16 h-16" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </ParallaxSection>
    </section>
  );
};

const DesignValues = () => {
  const values = [
    {
      title: "Accessibility First",
      desc: "Designing with WCAG 2.2 focus to ensure digital experiences are inclusive for everyone, regardless of ability.",
      icon: <Accessibility className="w-8 h-8" />,
      color: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "shadow-[0_0_50px_rgba(59,130,246,0.1)]"
    },
    {
      title: "Data-Informed",
      desc: "Using analytics and user feedback as a compass, not a cage. Balancing hard data with design intuition.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-purple-500/10",
      border: "border-purple-500/20",
      glow: "shadow-[0_0_50px_rgba(168,85,247,0.1)]"
    },
    {
      title: "Ethical AI",
      desc: "Designing AI interactions that prioritize transparency, user agency, and trust in the machine-human loop.",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-orange-500/10",
      border: "border-orange-500/20",
      glow: "shadow-[0_0_50px_rgba(249,115,22,0.1)]"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={40}>
        <div className="flex items-center gap-3 mb-16">
          <Heart className="w-5 h-5 text-white/40" />
          <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Human Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-12 rounded-[40px] ${v.color} border ${v.border} ${v.glow} backdrop-blur-xl flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500`}
            >
              <div className="mb-8 p-6 bg-white/5 rounded-3xl group-hover:bg-white group-hover:text-black transition-all duration-500">
                {v.icon}
              </div>
              <h4 className="text-3xl font-bold tracking-tight mb-6">{v.title}</h4>
              <p className="text-muted leading-relaxed text-lg font-light italic">
                "{v.desc}"
              </p>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Senior UI/UX Designer",
      company: "ebm-papst",
      period: "Oct 2023 - Present",
      description: "Leading design for IoT fan control systems and industrial dashboards. Implementing Lean UX and Google Design Sprints to solve complex engineering challenges.",
      highlights: ["40% data monitoring efficiency boost", "25% faster design iterations"]
    },
    {
      role: "UI/UX Designer",
      company: "Yavar.AI",
      period: "Feb 2022 - Sep 2023",
      description: "Conducted user research and crafted high-fidelity responsive UI designs for diverse web and mobile projects. Developed websites using Framer and Webflow.",
      highlights: ["Optimized project outcomes through collaborative iteration"]
    },
    {
      role: "Web Designer | UI/UX Designer",
      company: "The Chennai Silks",
      period: "Oct 2019 - Jan 2022",
      description: "Led UI/UX for major e-commerce platforms and internal job portals. Applied heuristic evaluation and IxD principles to enhance overall usability.",
      highlights: ["Designed kanmanie.com", "Designed ihp.co job portal"]
    },
    {
      role: "Graphic Designer",
      company: "Dina Color Lab",
      period: "June 2018 - Sep 2019",
      description: "Specialized in visual designs for print media, including branding, advertisements, and high-quality digital art.",
      highlights: ["Created cutting-edge graphic designs for premium albums"]
    }
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={40}>
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-5 h-5 text-white/40" />
          <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Work Experience</h2>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative pl-8 md:pl-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <p className="text-muted font-mono text-sm">{exp.period}</p>
                  <h4 className="text-xl font-bold mt-1">{exp.company}</h4>
                </div>
                <div className="md:col-span-9 border-l border-border md:pl-12 pb-9 group-last:pb-0">
                  <h3 className="text-3xl font-bold tracking-tight mb-4">{exp.role}</h3>
                  <p className="text-muted text-lg mb-6 max-w-2xl">{exp.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/60">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-[25%] top-2 w-2 h-2 rounded-full bg-white -translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Design Ecosystem",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Balsamiq", "Canva"],
      icon: <Figma className="w-8 h-8" />,
      desc: "Crafting pixel-perfect interfaces, vector art, and intuitive user experiences.",
      color: "from-blue-500/20 to-transparent",
      accent: "text-blue-400",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Design Systems",
      skills: ["Variables", "Components", "Tokens", "Auto Layout", "Design Architecture", "Style Guides"],
      icon: <Layers className="w-8 h-8" />,
      desc: "Multi-brand systematic architecture using variables, component libraries, and cross-platform tokens.",
      color: "from-cyan-500/20 to-transparent",
      accent: "text-cyan-400",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: "AI & Agentic Workflows",
      skills: ["Figma Agent", "Make", "Claude", "Antigravity", "Google AI Studio", "Prompt Engineering"],
      icon: <Sparkles className="w-8 h-8" />,
      desc: "Accelerating ideation and deployment using AI design agents, visual automation, Claude, and Google AI Studio.",
      color: "from-fuchsia-500/20 to-transparent",
      accent: "text-fuchsia-400",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      title: "UX Strategy",
      skills: ["User Flow", "Wireframing", "Prototyping", "Usability Testing", "WCAG 2.2"],
      icon: <Layout className="w-8 h-8" />,
      desc: "Human-centered approach to solve complex enterprise and consumer problems.",
      color: "from-purple-500/20 to-transparent",
      accent: "text-purple-400",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Development & Low-Code",
      skills: ["Framer", "WordPress", "HTML/CSS", "SEO", "Vibe Coding"],
      icon: <Cpu className="w-8 h-8" />,
      desc: "Bringing high-fidelity visions to life with modern web builders and interactive code prototypes.",
      color: "from-orange-500/20 to-transparent",
      accent: "text-orange-400",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Collaboration & Agile",
      skills: ["Miro", "Notion", "Jira", "Lean UX", "Google Design Sprints"],
      icon: <Users className="w-8 h-8" />,
      desc: "Uniting product design, software engineering, and stakeholder vision in agile harmony.",
      color: "from-green-500/20 to-transparent",
      accent: "text-green-400",
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={30}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-5 h-5 text-white/40" />
              <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Expertise</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Skills & Tools <AnimatedEmoji emoji="🛠️" /></h3>
          </div>
          <p className="max-w-md text-muted text-lg font-light leading-relaxed">
            A curated selection of tools, agentic workflows, and methodologies I use to build world-class digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[48px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-500 ${cat.span}`}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 bg-white/5 rounded-2xl ${cat.accent} group-hover:bg-white group-hover:text-black transition-all duration-500`}>
                    {cat.icon}
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className={`w-4 h-4 ${cat.accent}`} />
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{cat.title}</h4>
                  <p className="text-muted text-sm mb-6 max-w-md">{cat.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s, j) => (
                      <span 
                        key={j} 
                        className="px-3.5 py-1.5 bg-white/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-white/70 hover:bg-white hover:text-black transition-all cursor-default border border-white/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className={`absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br ${cat.color} blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
              
              {/* Subtle Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};

const EducationCerts = () => {
  const awards = [
    {
      title: "Recognized by Google Developers Group",
      desc: "Earned acclaim from Google Developers Group, honored for innovation and collaboration. Celebrating design excellence and tech for good.",
      link: "https://www.linkedin.com/posts/tharani-tharan-dharmalingam-9b229a207_techforgood-googletechforgood-techtastic-activity-7091711783823962113-_iUm?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "7 Days Design challenge 1st prize",
      desc: "Awarded 1st prize in the intensive 7 Days Design challenge within the vibrant Madrasters design community.",
      link: "https://lnkd.in/p/gFPJ6mdP"
    }
  ];

  const certs = [
    { 
      title: "Google UX Design", 
      issuer: "Google", 
      link: "https://www.coursera.org/user/4472462cc170451cd5e0fc1d2cb7d36a" 
    },
    { 
      title: "Digital Skills: UX", 
      issuer: "Accenture", 
      link: "https://www.futurelearn.com/certificates/p0uxcf8" 
    },
    { 
      title: "IBM Design Thinking", 
      issuer: "IBM", 
      link: "https://www.credly.com/badges/51218f9e-a0fb-4e93-a977-606e5c9da08b/public_url" 
    }
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={50}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-9">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-white/40" />
              <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Education</h2>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex gap-6">
                <div className="mt-1">
                  <GraduationCap className="w-6 h-6 text-white/40" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold tracking-tight">BSc Computer Science</h4>
                  <p className="text-muted">Nehru Memorial College, Tiruchirappalli</p>
                  <p className="text-xs font-mono text-white/20 mt-2">2015 - 2018</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-white/40" />
              <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Certifications</h2>
            </div>
            <div className="space-y-6">
              {certs.map((cert, i) => (
                <motion.a 
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-6 border border-border rounded-2xl hover:bg-white/5 hover:border-white/30 transition-all group cursor-pointer block"
                >
                  <div className="flex items-center gap-4">
                    <Award className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                    <div>
                      <h5 className="font-bold tracking-tight group-hover:text-white transition-colors">{cert.title}</h5>
                      <p className="text-xs text-muted uppercase tracking-widest">{cert.issuer}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-12">
            <Trophy className="w-5 h-5 text-white/40" />
            <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, i) => (
              <motion.a 
                key={i}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-12 rounded-[40px] bg-gradient-to-br from-neutral-900 to-black border border-white/5 overflow-hidden group hover:border-white/20 hover:scale-[1.01] transition-all duration-500 block cursor-pointer"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="p-3 bg-white/5 rounded-full text-white/40 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold tracking-tight mb-4 leading-tight group-hover:text-white transition-colors">{award.title}</h4>
                  <p className="text-muted text-lg leading-relaxed font-light">{award.desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 group-hover:text-white/80 font-semibold transition-colors">
                    <span>View Post on LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};

const DesignersEngine = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={30}>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-5 h-5 text-white/40" />
          <h2 className="text-sm uppercase tracking-[0.4em] text-muted">The Designer's Engine</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Coffee Card */}
          <motion.div whileHover={{ scale: 1.05 }} className="bento-card flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <Coffee className="text-white/40" />
              <span className="text-[10px] uppercase tracking-widest text-[#FF4D4D] font-bold">Critical Level</span>
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-lg font-bold">Coffee Intake</h4>
                <span className="text-xs font-mono">85%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-white"
                />
              </div>
              <p className="text-[10px] text-muted mt-4 uppercase tracking-widest">Recharge needed by 3 PM</p>
            </div>
          </motion.div>

          {/* Playlist Card */}
          <motion.div whileHover={{ scale: 1.05 }} className="bento-card flex flex-col justify-between bg-[#111]">
            <div className="flex justify-between items-start">
              <Music className="text-white/40" />
              <div className="flex gap-1">
                {[1,2,3].map(i => (
                  <motion.div 
                    key={i}
                    animate={{ height: [4, 12, 4] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1 bg-white/40 rounded-full"
                  />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <span className="text-[10px] uppercase tracking-widest text-muted font-bold">Now Playing</span>
              <h4 className="text-lg font-bold mt-1">Run It Up for High-Fidelity Mockups</h4>
              <p className="text-xs text-white/40 mt-2">Deep Focus Mix • 2:45 / 4:20</p>
            </div>
          </motion.div>

          {/* Aha Moment Card */}
          <motion.div whileHover={{ scale: 1.05 }} className="bento-card flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-white/60" />
            </div>
            <h4 className="text-xl font-bold tracking-tight mb-2">The 'Aha!' Moment</h4>
            <p className="text-muted text-xs leading-relaxed italic">
              "Most creative ideas happen at <br /> 2 AM or in the shower."
            </p>
          </motion.div>
        </div>
      </ParallaxSection>
    </section>
  );
};

const DesignersSurvivalKit = () => {
  const kit = [
    {
      title: "The Fuel",
      subtitle: "Primary Power Source",
      footer: "Status: 85% Charged",
      icon: <Coffee className="w-10 h-10 text-white" />,
      glow: "bg-orange-500/20",
      accent: "text-orange-400"
    },
    {
      title: "The Focus",
      subtitle: "Deep Work Trigger",
      footer: "ANC: Active",
      icon: <Headphones className="w-10 h-10 text-white" />,
      glow: "bg-blue-500/20",
      accent: "text-blue-400"
    },
    {
      title: "The Lifesaver",
      subtitle: "My Best Friend",
      footer: "Uses: Infinite",
      icon: (
        <div className="flex items-center justify-center bg-white text-black font-black text-3xl w-20 h-20 rounded-3xl shadow-2xl">
          ⌘Z
        </div>
      ),
      glow: "bg-purple-500/20",
      accent: "text-purple-400"
    },
    {
      title: "The Moral Support",
      subtitle: "Chief Moral Officer",
      footer: "Watering: Pending",
      icon: <Flower2 className="w-10 h-10 text-white" />,
      glow: "bg-green-500/20",
      accent: "text-green-400"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={20}>
        <div className="flex items-center gap-3 mb-12">
          <Wrench className="w-5 h-5 text-white/40" />
          <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Survival Kit</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kit.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-square bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[48px] p-10 flex flex-col justify-between overflow-hidden group transition-all duration-500"
            >
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-black">{item.title}</span>
                <div className={`w-2 h-2 rounded-full ${item.glow} animate-pulse`} />
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
                <motion.div 
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-2xl font-bold text-white mt-8 text-center tracking-tight">
                  {item.subtitle}
                </h4>
              </div>
              
              <div className="relative z-10 flex justify-between items-center pt-6 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">{item.footer}</span>
                <div className={`text-[10px] font-black uppercase tracking-widest ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>Active</div>
              </div>
              
              {/* Background Glow */}
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 ${item.glow} blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};

const DesignLiterature = () => {
  const books = [
    {
      title: "Everything in a Day is Design",
      author: "Don Norman",
      category: "Design Philosophy",
      cover: "bg-neutral-900 border border-white/10",
      accent: "text-white"
    },
    {
      title: "Hooked",
      author: "Nir Eyal",
      category: "Behavioral Design",
      cover: "bg-neutral-900 border border-white/10",
      accent: "text-white"
    },
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      category: "Usability",
      cover: "bg-neutral-900 border border-white/10",
      accent: "text-white"
    },
    {
      title: "Steal Like an Artist",
      author: "Austin Kleon",
      category: "Creativity",
      cover: "bg-neutral-900 border border-white/10",
      accent: "text-white"
    }
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <ParallaxSection offset={30}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-white/40" />
              <h2 className="text-sm uppercase tracking-[0.4em] text-muted">Design Literature</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Diving Deep into <br /> <span className="text-white/40">Design Literature</span></h3>
            <p className="text-muted text-lg leading-relaxed">
              Exploring insightful reads including 'Everything in a Day is Design' by Don Norman and 'Hooked' by Nir Eyal, among others.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`bento-card ${book.cover} flex flex-col justify-between min-h-[320px] p-8 group overflow-hidden relative`}
            >
              <div className="relative z-10">
                <span className={`text-[10px] uppercase tracking-widest font-bold opacity-40 ${book.accent}`}>{book.category}</span>
                <h4 className={`text-2xl font-bold tracking-tight mt-4 leading-tight ${book.accent}`}>{book.title}</h4>
              </div>
              
              <div className="relative z-10">
                <p className={`text-sm font-medium opacity-60 ${book.accent}`}>By {book.author}</p>
              </div>

              {/* Decorative Book Spine Element */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/5 group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="pt-16 sm:pt-24 pb-32 sm:pb-36 px-4 sm:px-6 border-t border-border bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter uppercase leading-[0.9] mb-10 sm:mb-16 break-words"
        >
          Let's <br />
          <span className="text-white/20">Connect</span>
        </motion.h2>
        
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-14 px-2 max-w-full">
          <a 
            href="mailto:tharanidharma@gmail.com?subject=%20Hey%20Buddy%20_____" 
            className="group inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all max-w-full shadow-lg"
          >
            <span className="text-sm sm:text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-white/80 transition-colors break-all sm:break-normal">
              tharanidharma@gmail.com
            </span>
            <div className="p-2 sm:p-2.5 bg-white text-black rounded-full group-hover:scale-110 transition-transform flex-shrink-0">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-muted">
          <a href="https://www.linkedin.com/in/tharani-tharan-dharmalingam-9b229a207/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-1">LinkedIn</a>
          <a href="https://www.behance.net/tharanidharmalingam" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-1">Behance</a>
          <a href="https://dribbble.com/tharanitharandharmalingam" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-1">Dribbble</a>
        </div>

        <div className="mt-14 sm:mt-18 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30 text-center sm:text-left">
          <p>© 2026 Tharani Tharan. All Rights Reserved.</p>
          <p>Designed for Digital Excellence</p>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
      <main className="relative overflow-x-hidden">
        <Hero />
        <MetricsBar />
        <CaseStudies />
        <Playground />
        <HowIThink />
        <Superpowers />
        <AboutMe />
        <Experience />
        <Skills />
        <Philosophy />
        <DesignValues />
        <EducationCerts />
        <DesignersEngine />
        <DesignersSurvivalKit />
        <DesignLiterature />
        <Footer />
      </main>

      {/* Floating Navigation */}
      <nav className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[60] px-5 sm:px-7 py-2.5 sm:py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-5 sm:gap-8 shadow-2xl max-w-[94vw] overflow-x-auto no-scrollbar">
        <a href="#home" className="text-[10px] uppercase tracking-widest font-bold hover:text-white/60 transition-colors">Home</a>
        <a href="#work" className="text-[10px] uppercase tracking-widest font-bold hover:text-white/60 transition-colors">Work</a>
        <a href="#about" className="text-[10px] uppercase tracking-widest font-bold hover:text-white/60 transition-colors">About</a>
        <a href="#contact" className="text-[10px] uppercase tracking-widest font-bold hover:text-white/60 transition-colors">Contact</a>
      </nav>
    </div>
  );
}

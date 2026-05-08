import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamic Icon Resolver
export const Icon = ({ name, size = 24, className = "" }) => {
  if (!name) return null;
  const formattedName = name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  const LucideIcon = LucideIcons[formattedName] || LucideIcons.Circle;
  return <LucideIcon size={size} className={className} />;
};

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export const FadeIn = ({ children, className = "" }) => (
  <motion.div variants={itemVariants} className={className}>
    {children}
  </motion.div>
);

// Generic Wrapper (Rich, Vibrant, Glassmorphism Look)
export const SlideWrapper = ({ part, slideNumber, totalSlides, children }) => (
  <div className="w-full h-screen relative overflow-hidden bg-[#001018] text-brand-cream font-cairo">
    {/* Dynamic Background Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0"></div>
    
    {/* Vibrant Glowing Orbs */}
    <motion.div 
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-screen"
    ></motion.div>
    
    <motion.div 
      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute -bottom-60 -right-40 w-[600px] h-[600px] bg-brand-red/20 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen"
    ></motion.div>

    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen"
    ></motion.div>
    
    {/* Header Metadata */}
    <div className="absolute top-8 left-8 right-8 flex justify-between items-center text-xs font-bold tracking-[0.2em] uppercase text-brand-cream/50 z-10">
      <div className="flex items-center gap-3">
        <LucideIcons.Layers size={16} className="text-brand-red drop-shadow-[0_0_8px_rgba(185,32,37,0.8)]" />
        <span className="drop-shadow-md">CAT Frontend Circle</span>
      </div>
      <div className="drop-shadow-md">
        {String(slideNumber).padStart(2, '0')} <span className="mx-1 opacity-30">/</span> {String(totalSlides).padStart(2, '0')}
      </div>
    </div>
    
    {part && (
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-black tracking-[0.2em] text-brand-red uppercase z-10 shadow-[0_0_20px_rgba(185,32,37,0.2)]"
      >
        {part}
      </motion.div>
    )}
    
    {/* Scrollable Content Area */}
    <div className="w-full h-full overflow-y-auto overflow-x-hidden relative z-10 custom-scrollbar pointer-events-auto">
      <div className="min-h-full w-full flex flex-col items-center px-4 py-28 md:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full max-w-5xl flex flex-col items-center m-auto"
        >
          {children}
        </motion.div>
      </div>
    </div>
  </div>
);

// Hero Slide
export const HeroSlide = ({ title, subtitle }) => (
  <div className="text-center w-full max-w-4xl mx-auto">
    <FadeIn>
      <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8 text-white drop-shadow-2xl" 
        dangerouslySetInnerHTML={{ __html: title.replace(/class="gradient-text"/g, 'className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-[#FF5E62] to-[#FF9999] drop-shadow-[0_0_30px_rgba(185,32,37,0.6)]"') }} />
    </FadeIn>
    {subtitle && (
      <FadeIn>
        <p className="text-xl md:text-2xl text-brand-cream/80 leading-relaxed font-medium drop-shadow-md" 
          dangerouslySetInnerHTML={{ __html: subtitle }} />
      </FadeIn>
    )}
    <FadeIn className="mt-14 flex justify-center">
      <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-brand-red to-transparent rounded-full opacity-70"></div>
    </FadeIn>
  </div>
);

// Section Slide
export const SectionSlide = ({ title, subtitle, content }) => (
  <div className="text-center w-full max-w-4xl mx-auto flex flex-col items-center">
    <FadeIn>
      <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white drop-shadow-lg">{title}</h2>
    </FadeIn>
    {subtitle && (
      <FadeIn>
        <h3 className="text-xl md:text-3xl font-bold text-brand-red mb-12 drop-shadow-[0_0_15px_rgba(185,32,37,0.5)]">{subtitle}</h3>
      </FadeIn>
    )}
    {content && (
      <FadeIn>
        <div className="text-lg md:text-xl leading-relaxed text-white/90 mx-auto bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
          dangerouslySetInnerHTML={{ __html: content
            .replace(/class="accent-cyan"/g, 'className="text-[#22D3EE] font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"')
            .replace(/class="accent-blue"/g, 'className="text-[#3B82F6] font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"')
            .replace(/class="accent-purple"/g, 'className="text-[#A78BFA] font-bold drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]"')
            .replace(/class="accent-orange"/g, 'className="text-[#F97316] font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"')
            .replace(/class="accent-green"/g, 'className="text-[#4ADE80] font-bold drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]"')
            .replace(/class="accent-red"/g, 'className="text-brand-red font-bold drop-shadow-[0_0_8px_rgba(185,32,37,0.6)]"') 
          }} />
      </FadeIn>
    )}
  </div>
);

// Interaction Slide
export const InteractionSlide = ({ icon, question, hint }) => (
  <FadeIn className="w-full max-w-4xl">
    <div className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-[80px] group-hover:bg-brand-red/40 transition-colors duration-700"></div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 text-center md:text-left">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-2xl bg-brand-red/20 border border-brand-red/30 flex items-center justify-center text-brand-red shadow-[0_0_30px_rgba(185,32,37,0.4)]">
            <Icon name={icon || 'help-circle'} size={48} />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white drop-shadow-md">{question}</h2>
          {hint && <p className="text-xl text-brand-cream/70 font-semibold">{hint}</p>}
        </div>
      </div>
    </div>
  </FadeIn>
);

// Cards Slide
export const CardsSlide = ({ title, subtitle, cards }) => {
  const getGridCols = (len) => {
    if (len <= 2) return "grid-cols-1 md:grid-cols-2";
    if (len === 3) return "grid-cols-1 md:grid-cols-3";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  };
  
  return (
    <div className="w-full max-w-7xl text-center">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-lg">{title}</h2>
      </FadeIn>
      {subtitle && (
        <FadeIn>
          <h3 className="text-xl md:text-2xl text-brand-red mb-12 font-bold drop-shadow-[0_0_10px_rgba(185,32,37,0.5)]">{subtitle}</h3>
        </FadeIn>
      )}
      <div className={`grid ${getGridCols(cards.length)} gap-6`}>
        {cards.map((card, i) => {
          // Dynamic glow colors based on the data
          let glowClass = "hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]";
          let iconColor = "text-white";
          let iconBg = "bg-white/10";
          
          if (card.color === 'cyan' || card.glow === 'glow-cyan') { glowClass = "hover:border-[#22D3EE]/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"; iconColor = "text-[#22D3EE]"; iconBg = "bg-[#22D3EE]/10"; }
          if (card.color === 'blue' || card.glow === 'glow-blue') { glowClass = "hover:border-[#3B82F6]/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"; iconColor = "text-[#3B82F6]"; iconBg = "bg-[#3B82F6]/10"; }
          if (card.color === 'purple' || card.glow === 'glow-purple') { glowClass = "hover:border-[#A78BFA]/50 hover:shadow-[0_0_40px_rgba(167,139,250,0.2)]"; iconColor = "text-[#A78BFA]"; iconBg = "bg-[#A78BFA]/10"; }
          if (card.color === 'green' || card.glow === 'glow-green') { glowClass = "hover:border-[#4ADE80]/50 hover:shadow-[0_0_40px_rgba(74,222,128,0.2)]"; iconColor = "text-[#4ADE80]"; iconBg = "bg-[#4ADE80]/10"; }
          if (card.color === 'pink') { glowClass = "hover:border-[#EC4899]/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]"; iconColor = "text-[#EC4899]"; iconBg = "bg-[#EC4899]/10"; }
          if (card.color === 'orange') { glowClass = "hover:border-[#F97316]/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]"; iconColor = "text-[#F97316]"; iconBg = "bg-[#F97316]/10"; }

          return (
            <FadeIn key={i} className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col text-left transition-all duration-500 transform hover:-translate-y-2 ${glowClass}`}>
              {card.icon && (
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${iconBg} ${iconColor}`}>
                  <Icon name={card.icon} size={28} />
                </div>
              )}
              <h4 className="font-black text-2xl mb-3 text-white">{card.title}</h4>
              <p className="text-brand-cream/70 text-base leading-relaxed flex-1 font-medium">{card.desc}</p>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
};

// Image Slide
export const ImageSlide = ({ title, subtitle, imageUrl, imageAlt, imageCaption }) => (
  <div className="text-center w-full flex flex-col items-center">
    {title && (
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-lg">{title}</h2>
      </FadeIn>
    )}
    {subtitle && (
      <FadeIn>
        <h3 className="text-xl md:text-2xl text-brand-red mb-10 font-bold drop-shadow-[0_0_10px_rgba(185,32,37,0.5)]">{subtitle}</h3>
      </FadeIn>
    )}
    <FadeIn className="w-full max-w-5xl relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-red via-purple-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
      <div className="relative bg-black/60 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden p-2 shadow-2xl">
        <img src={imageUrl} alt={imageAlt || title || "Slide Image"} className="w-full h-auto max-h-[60vh] object-contain rounded-2xl" />
      </div>
      {imageCaption && <p className="mt-6 text-sm font-bold text-brand-cream/50 tracking-widest uppercase">{imageCaption}</p>}
    </FadeIn>
  </div>
);

// Code Slide
export const CodeSlide = ({ title, code, note }) => (
  <div className="w-full max-w-5xl flex flex-col items-center">
    <FadeIn className="w-full flex justify-between items-end mb-8">
      <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{title}</h2>
      {note && <span className="text-sm font-black text-white uppercase tracking-widest bg-brand-red/20 border border-brand-red/50 px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(185,32,37,0.4)]">{note}</span>}
    </FadeIn>
    <FadeIn className="w-full">
      <div className="bg-[#000810]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full text-left overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
        {/* Fake Window Controls */}
        <div className="flex gap-2.5 mb-8">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
        </div>
        <div className="font-mono text-base md:text-lg leading-loose overflow-x-auto" dangerouslySetInnerHTML={{ 
          __html: code
            .replace(/<span class="keyword">/g, '<span class="text-brand-red font-bold drop-shadow-[0_0_5px_rgba(185,32,37,0.8)]">')
            .replace(/<span class="string">/g, '<span class="text-[#4ADE80] drop-shadow-[0_0_5px_rgba(74,222,128,0.4)]">')
            .replace(/<span class="comment">/g, '<span class="text-gray-500/80 italic">')
            .replace(/<span class="function">/g, '<span class="text-[#60A5FA] drop-shadow-[0_0_5px_rgba(96,165,250,0.4)]">')
            .replace(/<span class="tag">/g, '<span class="text-[#A78BFA] drop-shadow-[0_0_5px_rgba(167,139,250,0.4)]">')
            .replace(/<span class="attr">/g, '<span class="text-[#F97316] drop-shadow-[0_0_5px_rgba(249,115,22,0.4)]">')
            .replace(/<span class="value">/g, '<span class="text-[#22D3EE] drop-shadow-[0_0_5px_rgba(34,211,238,0.4)]">')
            .replace(/<span class="line-number">/g, '<span class="text-white/20 select-none inline-block w-10 text-right mr-6 border-r border-white/10 pr-4 font-bold">')
        }} />
      </div>
    </FadeIn>
  </div>
);

// Timeline Slide
export const TimelineSlide = ({ title, subtitle, items }) => (
  <div className="w-full max-w-4xl pb-10">
    <FadeIn className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-black mb-2 text-white drop-shadow-lg">{title}</h2>
      {subtitle && <h3 className="text-lg md:text-xl text-brand-red font-bold drop-shadow-[0_0_10px_rgba(185,32,37,0.5)]">{subtitle}</h3>}
    </FadeIn>
    <div className="relative">
      {/* The vertical timeline line */}
      <div className="absolute left-[20px] top-6 bottom-6 w-1 bg-gradient-to-b from-brand-red via-purple-500 to-blue-500 rounded-full opacity-50"></div>
      
      <div className="flex flex-col gap-5">
        {items.map((item, i) => (
          <FadeIn key={i} className="relative pl-[60px]">
            {/* The dot on the timeline */}
            <div className="absolute left-[13px] top-6 w-[18px] h-[18px] bg-white border-4 border-brand-red rounded-full shadow-[0_0_15px_rgba(185,32,37,0.8)] z-10"></div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl relative group transition-all duration-300 hover:border-brand-red/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(185,32,37,0.2)] hover:-translate-y-1">
              <div className="absolute top-7 -left-5 w-5 h-1 bg-brand-red/50 group-hover:bg-brand-red transition-colors"></div>
              <h4 className="font-black text-lg md:text-xl mb-1 text-white">{item.title}</h4>
              <p className="text-brand-cream/70 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
);

// Flow Slide
export const FlowSlide = ({ title, subtitle, steps }) => (
  <div className="w-full max-w-4xl flex flex-col items-center pb-10">
    <FadeIn className="text-center mb-8">
      <h2 className="text-3xl md:text-5xl font-black mb-2 text-white drop-shadow-lg">{title}</h2>
      {subtitle && <h3 className="text-lg md:text-xl text-brand-red font-bold drop-shadow-[0_0_10px_rgba(185,32,37,0.5)]">{subtitle}</h3>}
    </FadeIn>
    <div className="flex flex-col items-center gap-1.5 w-full">
      {steps.map((step, i) => {
        let borderColor = "border-white/20";
        let textColor = "text-white";
        let shadow = "shadow-[0_0_15px_rgba(255,255,255,0.1)]";
        
        if (step.color?.includes('cyan')) { borderColor = "border-[#22D3EE]"; textColor = "text-[#22D3EE]"; shadow = "shadow-[0_0_20px_rgba(34,211,238,0.3)]"; }
        if (step.color?.includes('blue')) { borderColor = "border-[#3B82F6]"; textColor = "text-[#3B82F6]"; shadow = "shadow-[0_0_20px_rgba(59,130,246,0.3)]"; }
        if (step.color?.includes('purple')) { borderColor = "border-[#A78BFA]"; textColor = "text-[#A78BFA]"; shadow = "shadow-[0_0_20px_rgba(167,139,250,0.3)]"; }
        if (step.color?.includes('orange')) { borderColor = "border-[#F97316]"; textColor = "text-[#F97316]"; shadow = "shadow-[0_0_20px_rgba(249,115,22,0.3)]"; }
        if (step.color?.includes('green')) { borderColor = "border-[#4ADE80]"; textColor = "text-[#4ADE80]"; shadow = "shadow-[0_0_20px_rgba(74,222,128,0.3)]"; }
        if (step.color?.includes('pink')) { borderColor = "border-[#EC4899]"; textColor = "text-[#EC4899]"; shadow = "shadow-[0_0_20px_rgba(236,72,153,0.3)]"; }

        return (
          <React.Fragment key={i}>
            <FadeIn className="w-full flex justify-center">
              <div className={`bg-white/5 backdrop-blur-md border-l-4 md:border-l-8 ${borderColor} rounded-r-xl py-3 px-6 md:py-4 md:px-8 ${shadow} w-full max-w-lg flex items-center justify-center transform transition-transform hover:scale-105`}>
                <span className={`font-black text-base md:text-lg tracking-wide ${textColor} drop-shadow-md`}>{step.text}</span>
              </div>
            </FadeIn>
            {i < steps.length - 1 && (
              <FadeIn className="flex justify-center">
                <div className="w-1 h-5 md:h-6 bg-gradient-to-b from-white/30 to-transparent rounded-full my-0.5"></div>
              </FadeIn>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
);

// Pipeline Slide
export const PipelineSlide = ({ title, subtitle, steps }) => (
  <div className="w-full max-w-6xl flex flex-col items-center">
    <FadeIn className="text-center mb-20">
      <h2 className="text-4xl md:text-6xl font-black mb-4 text-white drop-shadow-lg">{title}</h2>
      {subtitle && <h3 className="text-xl md:text-2xl text-brand-red font-bold drop-shadow-[0_0_10px_rgba(185,32,37,0.5)]">{subtitle}</h3>}
    </FadeIn>
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 w-full">
      {steps.map((step, i) => {
        let bgClass = "bg-white/10";
        let textClass = "text-white";
        let borderClass = "border-white/20";
        let shadowClass = "hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]";
        
        if (step.cls?.includes('html')) { bgClass = "bg-[#EC4899]/10"; textClass = "text-[#EC4899]"; borderClass = "border-[#EC4899]/50"; shadowClass = "shadow-[0_0_15px_rgba(236,72,153,0.3)]"; }
        if (step.cls?.includes('css')) { bgClass = "bg-[#3B82F6]/10"; textClass = "text-[#3B82F6]"; borderClass = "border-[#3B82F6]/50"; shadowClass = "shadow-[0_0_15px_rgba(59,130,246,0.3)]"; }
        if (step.cls?.includes('dom')) { bgClass = "bg-[#A78BFA]/10"; textClass = "text-[#A78BFA]"; borderClass = "border-[#A78BFA]/50"; shadowClass = "shadow-[0_0_15px_rgba(167,139,250,0.3)]"; }
        if (step.cls?.includes('render')) { bgClass = "bg-[#4ADE80]/10"; textClass = "text-[#4ADE80]"; borderClass = "border-[#4ADE80]/50"; shadowClass = "shadow-[0_0_15px_rgba(74,222,128,0.3)]"; }
        if (step.cls?.includes('js')) { bgClass = "bg-brand-red/10"; textClass = "text-brand-red"; borderClass = "border-brand-red/50"; shadowClass = "shadow-[0_0_15px_rgba(185,32,37,0.4)]"; }
        
        return (
          <React.Fragment key={i}>
            <FadeIn>
              <div className={`${bgClass} backdrop-blur-md border-2 ${borderClass} rounded-xl px-6 py-4 ${shadowClass} transform transition-transform hover:-translate-y-2`}>
                <span className={`font-black text-base md:text-lg tracking-widest uppercase ${textClass} drop-shadow-sm`}>{step.text}</span>
              </div>
            </FadeIn>
            {i < steps.length - 1 && (
              <FadeIn>
                <LucideIcons.ChevronsRight size={32} className="text-white/40 hidden md:block" />
              </FadeIn>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
);

export const FallbackSlide = ({ title, content, diagram }) => (
  <div className="text-center w-full max-w-5xl mx-auto flex flex-col items-center">
    <FadeIn>
      <h2 className="text-4xl md:text-6xl font-black mb-10 text-white drop-shadow-lg">{title}</h2>
    </FadeIn>
    {content && (
      <FadeIn className="w-full">
         <div className="text-xl md:text-2xl leading-relaxed text-white/90 bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-2xl font-medium" 
          dangerouslySetInnerHTML={{ __html: content }} />
      </FadeIn>
    )}
    {diagram && (
      <FadeIn className="w-full">
         <div className="mt-16 mx-auto w-full flex flex-col items-center" dangerouslySetInnerHTML={{ 
           __html: diagram
            .replace(/class="diagram-box highlight"/g, 'className="bg-brand-red/20 border-2 border-brand-red text-brand-red font-black py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(185,32,37,0.4)] text-xl"')
            .replace(/class="diagram-box"/g, 'className="bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-xl shadow-lg text-xl"')
          }} />
      </FadeIn>
    )}
  </div>
);

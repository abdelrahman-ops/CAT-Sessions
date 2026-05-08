import React from 'react';
import * as LucideIcons from 'lucide-react';

// Dynamic Icon Resolver
export const Icon = ({ name, size = 24, className = "" }) => {
  if (!name) return null;
  // Convert 'help-circle' or 'HelpCircle' to standard component name
  const formattedName = name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  const LucideIcon = LucideIcons[formattedName] || LucideIcons.Circle;
  return <LucideIcon size={size} className={className} />;
};

// Common Animations
export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <div className={`animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

// Generic Wrapper (Clean Premium Conference Look)
export const SlideWrapper = ({ part, slideNumber, totalSlides, children }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden bg-[#001826] text-brand-cream font-cairo">
    {/* Subtle Grid - Flat & Clean */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
    
    {/* Header Metadata */}
    <div className="absolute top-8 left-8 right-8 flex justify-between items-center text-xs font-bold tracking-[0.2em] uppercase text-brand-cream/30 z-10">
      <div className="flex items-center gap-3">
        <LucideIcons.BookOpen size={14} className="text-brand-red" />
        <span>CAT Frontend Platform</span>
      </div>
      <div>
        {String(slideNumber).padStart(2, '0')} <span className="mx-1 opacity-50">/</span> {String(totalSlides).padStart(2, '0')}
      </div>
    </div>
    
    {part && (
      <FadeIn delay={100} className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-1 rounded bg-[#002033] border border-white/5 text-xs font-bold tracking-[0.2em] text-brand-red uppercase z-10 shadow-sm">
        {part}
      </FadeIn>
    )}
    
    <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center">
      {children}
    </div>
  </div>
);

// Clean Hero Slide
export const HeroSlide = ({ title, subtitle }) => (
  <div className="text-center w-full max-w-4xl mx-auto">
    <FadeIn delay={200}>
      <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8 text-white" 
        dangerouslySetInnerHTML={{ __html: title.replace(/class="gradient-text"/g, 'className="text-brand-red"') }} />
    </FadeIn>
    {subtitle && (
      <FadeIn delay={400}>
        <p className="text-xl md:text-2xl text-brand-cream/60 leading-relaxed font-medium" 
          dangerouslySetInnerHTML={{ __html: subtitle }} />
      </FadeIn>
    )}
    <FadeIn delay={600} className="mt-12 flex justify-center">
      <div className="h-1 w-24 bg-brand-red rounded-full"></div>
    </FadeIn>
  </div>
);

// Clean Section Slide
export const SectionSlide = ({ title, subtitle, content }) => (
  <div className="text-center w-full max-w-4xl mx-auto flex flex-col items-center">
    <FadeIn delay={200}>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">{title}</h2>
    </FadeIn>
    {subtitle && (
      <FadeIn delay={300}>
        <h3 className="text-xl md:text-2xl font-semibold text-brand-red mb-10">{subtitle}</h3>
      </FadeIn>
    )}
    {content && (
      <FadeIn delay={500}>
        <div className="text-lg md:text-xl leading-relaxed text-brand-cream/70 mx-auto bg-[#002033] p-8 rounded-xl border border-white/5 shadow-lg" 
          dangerouslySetInnerHTML={{ __html: content.replace(/class="accent-cyan"/g, 'className="text-[#60A5FA] font-bold"').replace(/class="accent-blue"/g, 'className="text-[#3B82F6] font-bold"').replace(/class="accent-purple"/g, 'className="text-[#A78BFA] font-bold"').replace(/class="accent-orange"/g, 'className="text-[#F97316] font-bold"').replace(/class="accent-green"/g, 'className="text-[#4ADE80] font-bold"').replace(/class="accent-red"/g, 'className="text-brand-red font-bold"') }} />
      </FadeIn>
    )}
  </div>
);

// Clean Interaction Slide (No emojis)
export const InteractionSlide = ({ icon, question, hint }) => (
  <FadeIn delay={200} className="w-full max-w-3xl">
    <div className="bg-[#002033] border-l-4 border-brand-red rounded-r-2xl p-10 shadow-2xl flex items-start gap-8">
      <div className="flex-shrink-0 mt-2">
        <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
          <Icon name={icon || 'help-circle'} size={32} />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4 leading-tight text-white">{question}</h2>
        {hint && <p className="text-lg text-brand-cream/50 font-medium">{hint}</p>}
      </div>
    </div>
  </FadeIn>
);

// Clean Cards Slide
export const CardsSlide = ({ title, subtitle, cards }) => {
  const getGridCols = (len) => {
    if (len <= 2) return "grid-cols-1 md:grid-cols-2";
    if (len === 3) return "grid-cols-1 md:grid-cols-3";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  };
  
  return (
    <div className="w-full max-w-6xl text-center">
      <FadeIn delay={200}>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">{title}</h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={300}>
          <h3 className="text-xl text-brand-red mb-12 font-semibold">{subtitle}</h3>
        </FadeIn>
      )}
      <div className={`grid ${getGridCols(cards.length)} gap-6`}>
        {cards.map((card, i) => (
          <FadeIn key={i} delay={400 + i * 150} className={`bg-[#002033] border ${card.glow ? 'border-brand-red/50 shadow-lg shadow-brand-red/10' : 'border-white/5'} rounded-xl p-8 flex flex-col text-left transition-transform hover:-translate-y-1`}>
            {card.icon && (
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${card.glow ? 'bg-brand-red text-white' : 'bg-white/5 text-brand-red'}`}>
                <Icon name={card.icon} size={24} />
              </div>
            )}
            <h4 className="font-bold text-xl mb-3 text-white">{card.title}</h4>
            <p className="text-brand-cream/60 text-sm leading-relaxed flex-1">{card.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

// Image Slide
export const ImageSlide = ({ title, subtitle, imageUrl, imageAlt, imageCaption }) => (
  <div className="text-center w-full flex flex-col items-center">
    {title && (
      <FadeIn delay={200}>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">{title}</h2>
      </FadeIn>
    )}
    {subtitle && (
      <FadeIn delay={300}>
        <h3 className="text-xl text-brand-red mb-8">{subtitle}</h3>
      </FadeIn>
    )}
    <FadeIn delay={400} className="w-full max-w-4xl relative">
      <div className="bg-[#002033] border border-white/10 rounded-2xl overflow-hidden p-4 shadow-2xl">
        <div className="bg-black/50 rounded-xl overflow-hidden border border-white/5">
          <img src={imageUrl} alt={imageAlt || title || "Slide Image"} className="w-full h-auto max-h-[60vh] object-contain" />
        </div>
      </div>
      {imageCaption && <p className="mt-4 text-sm font-semibold text-brand-cream/50 tracking-wide uppercase">{imageCaption}</p>}
    </FadeIn>
  </div>
);

// Clean Code Slide
export const CodeSlide = ({ title, code, note }) => (
  <div className="w-full max-w-4xl flex flex-col items-center">
    <FadeIn delay={200} className="w-full flex justify-between items-end mb-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
      {note && <span className="text-sm font-bold text-brand-red uppercase tracking-wider bg-brand-red/10 px-3 py-1 rounded">{note}</span>}
    </FadeIn>
    <FadeIn delay={300} className="w-full">
      <div className="bg-[#00121D] border border-white/10 rounded-xl p-6 shadow-2xl w-full text-left overflow-hidden">
        {/* Fake Window Controls */}
        <div className="flex gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="font-mono text-sm md:text-base leading-relaxed overflow-x-auto" dangerouslySetInnerHTML={{ 
          __html: code
            .replace(/<span class="keyword">/g, '<span class="text-brand-red font-bold">')
            .replace(/<span class="string">/g, '<span class="text-[#4ADE80]">')
            .replace(/<span class="comment">/g, '<span class="text-gray-500 italic">')
            .replace(/<span class="function">/g, '<span class="text-[#60A5FA]">')
            .replace(/<span class="tag">/g, '<span class="text-[#A78BFA]">')
            .replace(/<span class="attr">/g, '<span class="text-[#F97316]">')
            .replace(/<span class="value">/g, '<span class="text-[#22D3EE]">')
            .replace(/<span class="line-number">/g, '<span class="text-white/20 select-none inline-block w-8 text-right mr-4 border-r border-white/10 pr-2">')
        }} />
      </div>
    </FadeIn>
  </div>
);

// Clean Timeline Slide
export const TimelineSlide = ({ title, subtitle, items }) => (
  <div className="w-full max-w-3xl">
    <FadeIn delay={200} className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">{title}</h2>
      {subtitle && <h3 className="text-xl text-brand-red font-semibold">{subtitle}</h3>}
    </FadeIn>
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-white/10 rounded-full"></div>
      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <FadeIn key={i} delay={300 + i * 150} className="relative pl-12">
            <div className="absolute left-[11px] top-1.5 w-3 h-3 bg-brand-red rounded-full shadow-[0_0_10px_rgba(185,32,37,0.8)] z-10"></div>
            <div className="bg-[#002033] border border-white/5 rounded-xl p-5 shadow-lg relative group transition-colors hover:border-brand-red/30">
              <div className="absolute top-5 -left-3 w-3 h-0.5 bg-white/10 group-hover:bg-brand-red/30 transition-colors"></div>
              <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
              <p className="text-brand-cream/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
);

// Clean Flow Slide
export const FlowSlide = ({ title, subtitle, steps }) => (
  <div className="w-full max-w-3xl flex flex-col items-center">
    <FadeIn delay={200} className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">{title}</h2>
      {subtitle && <h3 className="text-xl text-brand-red font-semibold">{subtitle}</h3>}
    </FadeIn>
    <div className="flex flex-col items-center gap-3 w-full">
      {steps.map((step, i) => {
        // Resolve inline hardcoded colors to standard tailwind classes
        let bgColor = "bg-[#002033]";
        let borderColor = "border-white/10";
        let textColor = "text-white";
        
        if (step.color?.includes('cyan')) { borderColor = "border-[#22D3EE]"; textColor = "text-[#22D3EE]"; }
        if (step.color?.includes('blue')) { borderColor = "border-[#3B82F6]"; textColor = "text-[#3B82F6]"; }
        if (step.color?.includes('orange')) { borderColor = "border-[#F97316]"; textColor = "text-[#F97316]"; }
        if (step.color?.includes('red')) { borderColor = "border-brand-red"; textColor = "text-brand-red"; }

        return (
          <React.Fragment key={i}>
            <FadeIn delay={300 + i * 150} className="w-full">
              <div className={`${bgColor} border-l-4 ${borderColor} rounded-r-xl py-4 px-8 shadow-md w-full max-w-lg mx-auto flex items-center justify-center`}>
                <span className={`font-bold text-lg tracking-wide ${textColor}`}>{step.text}</span>
              </div>
            </FadeIn>
            {i < steps.length - 1 && (
              <FadeIn delay={400 + i * 150}>
                <LucideIcons.ArrowDown size={24} className="text-white/20" />
              </FadeIn>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
);

// Clean Pipeline Slide
export const PipelineSlide = ({ title, subtitle, steps }) => (
  <div className="w-full max-w-5xl flex flex-col items-center">
    <FadeIn delay={200} className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">{title}</h2>
      {subtitle && <h3 className="text-xl text-brand-red font-semibold">{subtitle}</h3>}
    </FadeIn>
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 w-full">
      {steps.map((step, i) => {
        let bgClass = "bg-[#002033]";
        let textClass = "text-white";
        let borderClass = "border-white/10";
        
        if (step.cls?.includes('html')) { textClass = "text-[#EC4899]"; borderClass = "border-[#EC4899]/30"; }
        if (step.cls?.includes('css')) { textClass = "text-[#3B82F6]"; borderClass = "border-[#3B82F6]/30"; }
        if (step.cls?.includes('dom')) { textClass = "text-[#A78BFA]"; borderClass = "border-[#A78BFA]/30"; }
        if (step.cls?.includes('render')) { textClass = "text-[#4ADE80]"; borderClass = "border-[#4ADE80]/30"; }
        if (step.cls?.includes('js')) { textClass = "text-brand-red"; borderClass = "border-brand-red/30"; }
        
        return (
          <React.Fragment key={i}>
            <FadeIn delay={300 + i * 100}>
              <div className={`${bgClass} border ${borderClass} rounded-lg px-5 py-3 shadow-md`}>
                <span className={`font-bold text-sm tracking-widest uppercase ${textClass}`}>{step.text}</span>
              </div>
            </FadeIn>
            {i < steps.length - 1 && (
              <FadeIn delay={350 + i * 100}>
                <LucideIcons.ChevronRight size={20} className="text-white/20 hidden md:block" />
              </FadeIn>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
);

export const FallbackSlide = ({ title, content, diagram }) => (
  <div className="text-center w-full max-w-4xl mx-auto flex flex-col items-center">
    <FadeIn delay={200}>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white">{title}</h2>
    </FadeIn>
    {content && (
      <FadeIn delay={400}>
         <div className="text-lg leading-relaxed text-brand-cream/70 bg-[#002033] border border-white/5 p-8 rounded-xl" dangerouslySetInnerHTML={{ __html: content }} />
      </FadeIn>
    )}
    {diagram && (
      <FadeIn delay={500}>
         <div className="mt-12 mx-auto flex flex-wrap justify-center gap-4" dangerouslySetInnerHTML={{ 
           __html: diagram
            .replace(/class="diagram-box highlight"/g, 'className="bg-brand-red/10 border-2 border-brand-red text-brand-red font-bold py-3 px-6 rounded-lg"')
            .replace(/class="diagram-box"/g, 'className="bg-[#002033] border border-white/10 text-white font-bold py-3 px-6 rounded-lg"')
          }} />
      </FadeIn>
    )}
  </div>
);

import React from 'react';
import { HelpCircle, Info, Lightbulb, Zap, Code, Layout, Lock, CheckCircle, AlertTriangle, AlertCircle, PlayCircle } from 'lucide-react';

// Common Animations
export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <div className={`animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both ${className}`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

// Generic Wrapper
export const SlideWrapper = ({ part, slideNumber, totalSlides, children }) => (
  <div className="w-full h-screen flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden bg-brand-blue text-brand-cream">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>
    
    {/* Glows */}
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>
    
    <div className="absolute top-8 left-8 font-mono text-sm text-brand-cream/40 tracking-widest z-10">
      {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
    </div>
    
    {part && (
      <FadeIn delay={100} className="absolute top-8 text-center w-full max-w-4xl font-mono text-xs tracking-[0.2em] text-brand-red uppercase z-10">
        {part}
      </FadeIn>
    )}
    
    <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center">
      {children}
    </div>
  </div>
);

export const HeroSlide = ({ title, subtitle }) => (
  <div className="text-center">
    <FadeIn delay={200}>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6" dangerouslySetInnerHTML={{ __html: title.replace(/class="gradient-text"/g, 'className="text-brand-red drop-shadow-[0_0_15px_rgba(185,32,37,0.4)]"') }} />
    </FadeIn>
    {subtitle && (
      <FadeIn delay={400}>
        <p className="text-xl md:text-2xl text-brand-cream/70 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: subtitle }} />
      </FadeIn>
    )}
  </div>
);

export const SectionSlide = ({ title, subtitle, content }) => (
  <div className="text-center w-full max-w-4xl mx-auto">
    <FadeIn delay={200}>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{title}</h2>
    </FadeIn>
    {subtitle && (
      <FadeIn delay={300}>
        <h3 className="text-xl md:text-2xl font-semibold text-brand-cream/60 mb-10">{subtitle}</h3>
      </FadeIn>
    )}
    {content && (
      <FadeIn delay={500}>
        <div className="text-lg md:text-xl leading-relaxed text-brand-cream/80 mx-auto" dangerouslySetInnerHTML={{ __html: content.replace(/class="accent-cyan"/g, 'className="text-blue-400"').replace(/class="accent-blue"/g, 'className="text-blue-500"').replace(/class="accent-purple"/g, 'className="text-purple-400"').replace(/class="accent-orange"/g, 'className="text-orange-400"').replace(/class="accent-green"/g, 'className="text-green-400"').replace(/class="accent-red"/g, 'className="text-red-400"') }} />
      </FadeIn>
    )}
  </div>
);

export const InteractionSlide = ({ emoji, question, hint }) => (
  <FadeIn delay={200} className="w-full max-w-3xl">
    <div className="bg-gradient-to-br from-brand-red/10 to-blue-500/10 border border-brand-red/20 rounded-2xl p-10 text-center shadow-[0_0_50px_rgba(185,32,37,0.15)]">
      <div className="text-6xl mb-6">{emoji || '🤔'}</div>
      <div className="text-3xl font-bold mb-4 leading-tight">{question}</div>
      {hint && <div className="text-lg text-brand-cream/60">{hint}</div>}
    </div>
  </FadeIn>
);

export const ImageSlide = ({ title, subtitle, imageUrl, imageAlt, imageCaption }) => (
  <div className="text-center w-full flex flex-col items-center">
    {title && (
      <FadeIn delay={200}>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{title}</h2>
      </FadeIn>
    )}
    {subtitle && (
      <FadeIn delay={300}>
        <h3 className="text-xl text-brand-cream/60 mb-8">{subtitle}</h3>
      </FadeIn>
    )}
    <FadeIn delay={400} className="w-full max-w-4xl relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative bg-black/40 border border-white/10 rounded-xl overflow-hidden p-2">
        <img src={imageUrl} alt={imageAlt || title || "Slide Image"} className="w-full h-auto max-h-[60vh] object-contain rounded-lg" />
      </div>
      {imageCaption && <p className="mt-4 text-sm text-brand-cream/50 italic">{imageCaption}</p>}
    </FadeIn>
  </div>
);

export const CardsSlide = ({ title, subtitle, cards }) => {
  const getGridCols = (len) => {
    if (len <= 2) return "grid-cols-1 md:grid-cols-2";
    if (len === 3) return "grid-cols-1 md:grid-cols-3";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  };
  
  return (
    <div className="w-full max-w-6xl text-center">
      <FadeIn delay={200}>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{title}</h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={300}>
          <h3 className="text-xl text-brand-cream/60 mb-10">{subtitle}</h3>
        </FadeIn>
      )}
      <div className={`grid ${getGridCols(cards.length)} gap-6`}>
        {cards.map((card, i) => (
          <FadeIn key={i} delay={400 + i * 150} className={`glass-card flex flex-col text-left ${card.glow ? 'glow-red' : ''}`}>
            {card.icon && <div className="text-4xl mb-4 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center text-brand-red">{card.icon}</div>}
            <div className="font-bold text-xl mb-2">{card.title}</div>
            <div className="text-brand-cream/70 text-sm leading-relaxed flex-1">{card.desc}</div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export const CodeSlide = ({ title, code, note }) => (
  <div className="w-full max-w-4xl flex flex-col items-center">
    <FadeIn delay={200}>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">{title}</h2>
    </FadeIn>
    <FadeIn delay={300} className="w-full">
      <div className="code-block w-full text-left" dangerouslySetInnerHTML={{ 
        __html: code
          .replace(/<span class="keyword">/g, '<span class="text-brand-red font-bold">')
          .replace(/<span class="string">/g, '<span class="text-green-400">')
          .replace(/<span class="comment">/g, '<span class="text-gray-500 italic">')
          .replace(/<span class="function">/g, '<span class="text-blue-400">')
          .replace(/<span class="tag">/g, '<span class="text-purple-400">')
          .replace(/<span class="attr">/g, '<span class="text-orange-400">')
          .replace(/<span class="value">/g, '<span class="text-cyan-400">')
          .replace(/<span class="line-number">/g, '<span class="text-gray-600 select-none inline-block w-6 text-right mr-4">')
      }} />
    </FadeIn>
    {note && (
      <FadeIn delay={500}>
        <p className="mt-8 text-lg text-brand-cream/60 italic">{note}</p>
      </FadeIn>
    )}
  </div>
);

export const TimelineSlide = ({ title, subtitle, items }) => (
  <div className="w-full max-w-3xl">
    <FadeIn delay={200} className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{title}</h2>
      {subtitle && <h3 className="text-xl text-brand-cream/60 mb-8">{subtitle}</h3>}
    </FadeIn>
    <div className="relative pl-8 border-l-2 border-brand-red/50">
      {items.map((item, i) => (
        <FadeIn key={i} delay={300 + i * 150} className="mb-6 relative">
          <div className="absolute -left-[41px] top-1 w-5 h-5 bg-brand-blue border-2 border-brand-red rounded-full"></div>
          <div className="font-bold text-lg mb-1 text-brand-cream">{item.title}</div>
          <div className="text-brand-cream/60 text-sm">{item.desc}</div>
        </FadeIn>
      ))}
    </div>
  </div>
);

export const FlowSlide = ({ title, subtitle, steps }) => (
  <div className="w-full max-w-3xl flex flex-col items-center">
    <FadeIn delay={200} className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{title}</h2>
      {subtitle && <h3 className="text-xl text-brand-cream/60 mb-8">{subtitle}</h3>}
    </FadeIn>
    <div className="flex flex-col items-center gap-2">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <FadeIn delay={300 + i * 150}>
            <div className="glass-card py-3 px-8 text-center min-w-[300px] border-l-4" style={{ borderLeftColor: step.color ? step.color.replace('var(--accent-', '').replace(')', '') : '#B92025' }}>
              <span className="font-semibold">{step.text}</span>
            </div>
          </FadeIn>
          {i < steps.length - 1 && (
            <FadeIn delay={400 + i * 150}>
              <div className="h-6 w-0.5 bg-gradient-to-b from-brand-red to-transparent opacity-50"></div>
            </FadeIn>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export const PipelineSlide = ({ title, subtitle, steps }) => (
  <div className="w-full max-w-5xl flex flex-col items-center">
    <FadeIn delay={200} className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{title}</h2>
      {subtitle && <h3 className="text-xl text-brand-cream/60 mb-10">{subtitle}</h3>}
    </FadeIn>
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
      {steps.map((step, i) => {
        let colorClass = "bg-white/5 border-white/20 text-white";
        if (step.cls?.includes('html')) colorClass = "bg-pink-500/10 border-pink-500/30 text-pink-400";
        if (step.cls?.includes('css')) colorClass = "bg-blue-500/10 border-blue-500/30 text-blue-400";
        if (step.cls?.includes('dom')) colorClass = "bg-purple-500/10 border-purple-500/30 text-purple-400";
        if (step.cls?.includes('render')) colorClass = "bg-green-500/10 border-green-500/30 text-green-400";
        if (step.cls?.includes('js')) colorClass = "bg-brand-red/10 border-brand-red/30 text-brand-red";
        
        return (
          <React.Fragment key={i}>
            <FadeIn delay={300 + i * 100}>
              <div className={`px-4 py-2 border rounded-lg text-sm font-bold text-center min-w-[100px] ${colorClass}`}>
                {step.text}
              </div>
            </FadeIn>
            {i < steps.length - 1 && (
              <FadeIn delay={350 + i * 100}>
                <span className="text-white/30 hidden md:inline-block">→</span>
              </FadeIn>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
);

export const FallbackSlide = ({ title, content, diagram }) => (
  <div className="text-center w-full max-w-4xl mx-auto">
    <FadeIn delay={200}>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-8">{title}</h2>
    </FadeIn>
    {content && (
      <FadeIn delay={400}>
         <div className="text-lg leading-relaxed text-brand-cream/80" dangerouslySetInnerHTML={{ __html: content }} />
      </FadeIn>
    )}
    {diagram && (
      <FadeIn delay={400}>
         <div className="mt-8 mx-auto" dangerouslySetInnerHTML={{ __html: diagram.replace(/class="diagram-box highlight"/g, 'className="glass-card glow-red py-2 px-4 inline-block mx-2"').replace(/class="diagram-box"/g, 'className="glass-card py-2 px-4 inline-block mx-2"') }} />
      </FadeIn>
    )}
  </div>
);

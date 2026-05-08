import React from 'react';
import { 
  SlideWrapper, HeroSlide, SectionSlide, InteractionSlide, 
  CardsSlide, CodeSlide, TimelineSlide, FlowSlide, PipelineSlide, 
  FallbackSlide, ImageSlide
} from './SlideTemplates';

export const SlideRenderer = ({ slide, index, total }) => {
  if (!slide) return null;

  const renderContent = () => {
    switch (slide.type) {
      case 'hero':
        return <HeroSlide {...slide} />;
      case 'section':
      case 'analogy': // Reuse section style for analogy for simplicity, or we could customize
        return <SectionSlide {...slide} />;
      case 'interaction':
        return <InteractionSlide {...slide} />;
      case 'cards':
        return <CardsSlide {...slide} />;
      case 'code':
        return <CodeSlide {...slide} />;
      case 'timeline':
        return <TimelineSlide {...slide} />;
      case 'flow':
        return <FlowSlide {...slide} />;
      case 'pipeline':
        return <PipelineSlide {...slide} />;
      case 'image':
        return <ImageSlide {...slide} />;
      default:
        // Handle diagram, statuscodes, etc. with a generic fallback
        return <FallbackSlide {...slide} />;
    }
  };

  return (
    <SlideWrapper part={slide.part} slideNumber={index + 1} totalSlides={total}>
      {renderContent()}
    </SlideWrapper>
  );
};

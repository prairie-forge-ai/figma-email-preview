import { Header } from './Header';
import { UIContainer } from './UIContainer';
import { NextStepsSection } from './NextStepsSection';
import { FooterCopyright } from './FooterCopyright';
import { ProjectConfig } from '../config/project-config';

interface Frame1StaticProps {
  config: ProjectConfig;
}

export function Frame1Static({ config }: Frame1StaticProps) {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-2xl"
      style={{ 
        width: '1200px', 
        height: '820px',
        background: 'linear-gradient(135deg, #000000 0%, #0a0a1a 40%, #1a1a3e 100%)'
      }}
    >
      {/* HEADER */}
      <Header clientName={config.clientName} />

      {/* UI_CONTAINER */}
      <div className="px-8" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <UIContainer
          showLabels={true}
          interactionState="static"
          config={config}
        />
      </div>

      {/* NEXT_STEPS_SECTION */}
      <NextStepsSection />

      {/* FOOTER COPYRIGHT */}
      <FooterCopyright />
    </div>
  );
}
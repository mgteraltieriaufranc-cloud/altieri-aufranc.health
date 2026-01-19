
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${dark ? 'text-blue-400' : 'text-blue-900'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
              {subtitle}
            </p>
          )}
          <div className={`w-12 h-1 mt-4 rounded-full ${dark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;

import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center', light = false }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 ${light ? 'text-white' : 'text-cartagena-light'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-gray-400'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-cartagena-teal mt-6 ${align === 'center' ? 'mx-auto' : ''} rounded-full`}></div>
    </div>
  );
};

export default SectionHeader;
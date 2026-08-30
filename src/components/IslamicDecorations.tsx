import React from 'react';

export const IslamicStarIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-amber-500" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L14.4 7.2L20 4.8L17.6 10.4L22.8 12.8L17.6 15.2L20 20.8L14.4 18.4L12 23.6L9.6 18.4L4 20.8L6.4 15.2L1.2 12.8L6.4 10.4L4 4.8L9.6 7.2L12 2Z" />
  </svg>
);

export const PalmTreeEmblem: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-amber-500" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22V9" />
    <path d="M12 9C10 5 6 4 3 6C6 8 8 11 12 11" />
    <path d="M12 9C14 5 18 4 21 6C18 8 16 11 12 11" />
    <path d="M12 11C9 8 5 8 2 11C6 12 9 14 12 13" />
    <path d="M12 11C15 8 19 8 22 11C18 12 15 14 12 13" />
    <path d="M12 13C10 12 8 13 6 16C8 16 10 16 12 15" />
    <path d="M12 13C14 12 16 13 18 16C16 16 14 16 12 15" />
    <path d="M10 22h4" />
  </svg>
);

export const IslamicDivider: React.FC<{ urduText?: string; title?: string }> = () => {
  return (
    <div className="flex items-center justify-center my-6 gap-3">
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-500/50" />
      <div className="flex items-center gap-1.5 text-amber-500">
        <span className="inline-block w-1.5 h-1.5 bg-amber-500 rotate-45" />
        <IslamicStarIcon className="w-3.5 h-3.5 text-amber-500" />
        <span className="inline-block w-1.5 h-1.5 bg-amber-500 rotate-45" />
      </div>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-500/50" />
    </div>
  );
};

export const BismillahHeader: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`text-center select-none ${className}`}>
      <span className="font-serif text-amber-600 tracking-widest text-lg sm:text-xl font-normal block mb-0.5">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </span>
      <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-950 uppercase">
        In the Name of Allah, the Most Gracious, the Most Merciful
      </span>
    </div>
  );
};


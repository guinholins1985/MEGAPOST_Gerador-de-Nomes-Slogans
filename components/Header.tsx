
import React from 'react';

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-7.184c0-1.681.673-3.22 1.868-4.368M13.5 1.515a6.75 6.75 0 012.748 11.235 9.75 9.75 0 01-3.512 3.512A6.75 6.75 0 011.515 13.5a.75.75 0 01.634-1.485 5.25 5.25 0 003.006-3.006.75.75 0 011.485-.634 6.75 6.75 0 0111.235-2.748.75.75 0 011.485.634 5.25 5.25 0 003.006 3.006.75.75 0 01.634 1.485 6.75 6.75 0 01-2.748 11.235 9.75 9.75 0 01-3.512 3.512A6.75 6.75 0 011.5 13.5a.75.75 0 01.75-.75 5.25 5.25 0 003.006-3.006.75.75 0 01-.634-1.485A6.75 6.75 0 012.25 1.5a.75.75 0 01.75.75v3.364c0 .491.398.886.886.886h3.364a.75.75 0 01.75.75 5.25 5.25 0 003.006 3.006.75.75 0 01.886.886v3.364a.75.75 0 01-.75.75 6.75 6.75 0 01-11.235-2.748.75.75 0 01-.634-1.485 5.25 5.25 0 00-3.006-3.006.75.75 0 01-1.485.634A6.75 6.75 0 0113.5 1.515z" clipRule="evenodd" />
    </svg>
);


export const Header: React.FC = () => {
    return (
        <header className="py-6 border-b border-dark-border/50">
            <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-3">
                    <SparklesIcon className="w-8 h-8 text-brand-light" />
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-light to-brand-secondary text-transparent bg-clip-text">
                        Gerador de Nomes & Slogans
                    </h1>
                </div>
                <p className="mt-2 text-slate-400">Impulsione sua marca com a ajuda da IA</p>
            </div>
        </header>
    );
};


import React from 'react';
import { NameSuggestion } from '../types';
import { LoadingSpinner } from './LoadingSpinner';

interface ResultsDisplayProps {
    isLoading: boolean;
    error: string | null;
    suggestions: NameSuggestion[] | null;
}

const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
  </svg>
);

const SuggestionCard: React.FC<{ suggestion: NameSuggestion }> = ({ suggestion }) => {
    return (
        <div className="bg-dark-card/50 border border-dark-border rounded-xl p-5 transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-bold text-brand-light">{suggestion.name}</h3>
            <p className="text-slate-300 mt-1 italic">"{suggestion.slogan}"</p>
            
            <div className="mt-4 pt-4 border-t border-dark-border/50 space-y-3">
                <h4 className="text-sm font-semibold text-slate-400">Análise de Disponibilidade</h4>
                <div className="flex items-center space-x-4">
                    <div className={`flex items-center gap-2 ${suggestion.domainAvailability.com ? 'text-success' : 'text-danger'}`}>
                        {suggestion.domainAvailability.com ? <CheckIcon className="w-5 h-5" /> : <XIcon className="w-5 h-5" />}
                        <span className="font-mono text-sm">.com</span>
                    </div>
                    <div className={`flex items-center gap-2 ${suggestion.domainAvailability.com_br ? 'text-success' : 'text-danger'}`}>
                        {suggestion.domainAvailability.com_br ? <CheckIcon className="w-5 h-5" /> : <XIcon className="w-5 h-5" />}
                        <span className="font-mono text-sm">.com.br</span>
                    </div>
                </div>
                <div className="flex items-start gap-2 mt-2">
                    <InfoIcon className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-slate-400">{suggestion.trademarkAnalysis}</p>
                </div>
            </div>
        </div>
    );
};

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ isLoading, error, suggestions }) => {
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex flex-col items-center justify-center text-center p-8">
                    <LoadingSpinner />
                    <p className="mt-4 text-slate-400">Gerando ideias incríveis...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="text-center p-8 bg-danger/10 border border-danger/30 rounded-lg">
                    <p className="text-danger font-semibold">Ocorreu um erro</p>
                    <p className="text-slate-300 mt-2 text-sm">{error}</p>
                </div>
            );
        }

        if (suggestions) {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {suggestions.map((s, index) => (
                        <SuggestionCard key={index} suggestion={s} />
                    ))}
                </div>
            );
        }

        return (
            <div className="text-center p-8 border-2 border-dashed border-dark-border/50 rounded-lg">
                <p className="text-slate-400">Suas sugestões de marca aparecerão aqui.</p>
            </div>
        );
    };

    return <div className="mt-10">{renderContent()}</div>;
};

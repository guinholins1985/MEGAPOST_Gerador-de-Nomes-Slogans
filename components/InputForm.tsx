
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface InputFormProps {
    keywords: string;
    setKeywords: (value: string) => void;
    audience: string;
    setAudience: (value: string) => void;
    onSubmit: () => void;
    isLoading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({
    keywords,
    setKeywords,
    audience,
    setAudience,
    onSubmit,
    isLoading,
}) => {
    return (
        <div className="bg-dark-card/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-dark-border shadow-lg">
            <div className="space-y-6">
                <div>
                    <label htmlFor="keywords" className="block text-sm font-medium text-slate-300 mb-2">
                        Palavras-chave
                    </label>
                    <textarea
                        id="keywords"
                        rows={2}
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder="Ex: sustentável, vegano, artesanal"
                        className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200"
                    />
                </div>
                <div>
                    <label htmlFor="audience" className="block text-sm font-medium text-slate-300 mb-2">
                        Público-alvo
                    </label>
                    <textarea
                        id="audience"
                        rows={2}
                        value={audience}
                        onChange={(e) => setAudience(e.target.value)}
                        placeholder="Ex: jovens adultos, preocupados com o meio ambiente"
                        className="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200"
                    />
                </div>
                <button
                    onClick={onSubmit}
                    disabled={isLoading}
                    className="w-full flex justify-center items-center bg-brand-primary hover:bg-brand-primary/90 disabled:bg-brand-dark disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
                >
                    {isLoading ? <LoadingSpinner /> : 'Gerar Sugestões'}
                </button>
            </div>
        </div>
    );
};

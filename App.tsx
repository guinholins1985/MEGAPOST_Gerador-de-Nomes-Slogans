
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Footer } from './components/Footer';
import { generateNamesAndSlogans } from './services/geminiService';
import { NameSuggestion } from './types';

const App: React.FC = () => {
    const [keywords, setKeywords] = useState<string>('tecnologia, nuvem, inovação');
    const [audience, setAudience] = useState<string>('startups de tecnologia e desenvolvedores');
    const [suggestions, setSuggestions] = useState<NameSuggestion[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = useCallback(async () => {
        if (!keywords || !audience) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setSuggestions(null);

        try {
            const result = await generateNamesAndSlogans(keywords, audience);
            setSuggestions(result);
        } catch (err: any) {
            setError(err.message || 'Ocorreu um erro desconhecido.');
        } finally {
            setIsLoading(false);
        }
    }, [keywords, audience]);

    return (
        <div className="min-h-screen flex flex-col bg-dark-bg font-sans">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 -z-10"></div>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-3xl mx-auto">
                    <InputForm
                        keywords={keywords}
                        setKeywords={setKeywords}
                        audience={audience}
                        setAudience={setAudience}
                        onSubmit={handleGenerate}
                        isLoading={isLoading}
                    />
                    <ResultsDisplay
                        isLoading={isLoading}
                        error={error}
                        suggestions={suggestions}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;

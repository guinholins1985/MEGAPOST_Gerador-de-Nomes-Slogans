
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-6 mt-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-slate-500">
                    Criado com IA por um engenheiro de frontend de classe mundial.
                </p>
                <p className="text-xs text-slate-600 mt-1">
                    As análises de domínio e marca são hipotéticas e não constituem aconselhamento legal.
                </p>
            </div>
        </footer>
    );
};

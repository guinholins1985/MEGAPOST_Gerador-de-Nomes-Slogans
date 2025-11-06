
import { GoogleGenAI, Type } from "@google/genai";
import { NameSuggestion } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            name: {
                type: Type.STRING,
                description: "O nome da marca gerado, deve ser único e criativo.",
            },
            slogan: {
                type: Type.STRING,
                description: "O slogan memorável para a marca, alinhado com o público-alvo.",
            },
            domainAvailability: {
                type: Type.OBJECT,
                properties: {
                    com: {
                        type: Type.BOOLEAN,
                        description: "Análise hipotética da disponibilidade do domínio .com (true para provavelmente disponível, false para provavelmente indisponível).",
                    },
                    com_br: {
                        type: Type.BOOLEAN,
                        description: "Análise hipotética da disponibilidade do domínio .com.br (true para provavelmente disponível, false para provavelmente indisponível).",
                    },
                },
                required: ["com", "com_br"],
            },
            trademarkAnalysis: {
                type: Type.STRING,
                description: "Uma breve análise sobre a probabilidade de o nome ser registrável como marca, considerando sua originalidade e distinção. Máximo de 2 frases.",
            },
        },
        required: ["name", "slogan", "domainAvailability", "trademarkAnalysis"],
    },
};

export const generateNamesAndSlogans = async (
    keywords: string,
    audience: string
): Promise<NameSuggestion[]> => {
    const prompt = `
    Você é um especialista em branding e marketing digital. Sua tarefa é gerar 5 nomes de marca criativos e 5 slogans memoráveis para um produto ou empresa.

    Características da Marca:
    - Palavras-chave: ${keywords}
    - Público-alvo: ${audience}

    Para cada nome gerado, execute as seguintes análises:
    1.  **Disponibilidade de Domínio**: Faça uma análise preliminar e hipotética da disponibilidade dos domínios '.com' e '.com.br'. Baseie sua análise na probabilidade do nome já estar em uso, considerando sua popularidade e simplicidade.
    2.  **Análise de Marca Registrada**: Forneça uma breve análise sobre a probabilidade de o nome ser registrável como marca, considerando sua originalidade, distinção e se é um termo genérico.

    Retorne os resultados EXCLUSIVAMENTE no formato JSON, seguindo o schema fornecido. Não inclua nenhuma explicação, introdução ou texto fora do JSON.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-pro",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.8,
            },
        });

        const jsonText = response.text.trim();
        const suggestions = JSON.parse(jsonText) as NameSuggestion[];
        return suggestions;

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Não foi possível gerar as sugestões. Verifique o console para mais detalhes.");
    }
};

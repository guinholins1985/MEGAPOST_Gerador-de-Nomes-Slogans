
export interface NameSuggestion {
  name: string;
  slogan: string;
  domainAvailability: {
    com: boolean;
    com_br: boolean;
  };
  trademarkAnalysis: string;
}

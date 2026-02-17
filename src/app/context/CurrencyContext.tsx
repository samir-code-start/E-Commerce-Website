
import { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'USD' | 'INR';

interface CurrencyContextType {
    currency: Currency;
    toggleCurrency: () => void;
    formatPrice: (priceInUSD: number) => string;
    convertPrice: (priceInUSD: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
    const [currency, setCurrency] = useState<Currency>('INR');

    const EXCHANGE_RATE = 85; // 1 USD = 85 INR

    const toggleCurrency = () => {
        setCurrency((prev) => (prev === 'USD' ? 'INR' : 'USD'));
    };

    const convertPrice = (priceInUSD: number): number => {
        if (currency === 'USD') return priceInUSD;
        return Math.round(priceInUSD * EXCHANGE_RATE);
    };

    const formatPrice = (priceInUSD: number): string => {
        const convertedPrice = convertPrice(priceInUSD);

        return new Intl.NumberFormat(currency === 'USD' ? 'en-US' : 'en-IN', {
            style: 'currency',
            currency: currency,
            maximumFractionDigits: currency === 'USD' ? 2 : 0,
        }).format(convertedPrice);
    };

    return (
        <CurrencyContext.Provider value={{ currency, toggleCurrency, formatPrice, convertPrice }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
}

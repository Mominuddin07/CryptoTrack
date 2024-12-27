import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const CryptoContext = createContext();

// The context provider component
const CryptoContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState('INR');
  const [symbol, setSymbol] = useState('₹');

  // Update symbol based on currency
  useEffect(() => {
    if (currency === 'INR') {
      setSymbol('₹');
    } else if (currency === 'USD') {
      setSymbol('$');
    } else {
      setSymbol(''); // Default case if the currency is neither INR nor USD
    }
  }, [currency]); // Only run this effect when the `currency` value changes

  return (
    <CryptoContext.Provider value={{ currency, setCurrency, symbol, setSymbol }}>
      {children}
    </CryptoContext.Provider>
  );
};

// Export both CryptoContext and CryptoContextProvider for use in other components
export { CryptoContext, CryptoContextProvider };

// Custom hook to access the crypto context
export const useCryptoState = () => {
  return useContext(CryptoContext); // Correct usage of the context here
};

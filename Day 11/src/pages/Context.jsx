import { useState, createContext, useContext } from "react";

const LanguageContext = createContext();

const languages = ["JavaScript", "Python"];

function App() {
  // implement Context here so can be used in child components
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  const toggleLanguage = () => {
    const currentLanguageIndex = languages.indexOf(favoriteLanguage);
    const nextLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    setFavoriteLanguage(languages[nextLanguageIndex]);
  };

  const contextValue = { favoriteLanguage, toggleLanguage };

  return (
    <LanguageContext.Provider value={contextValue}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  const { favoriteLanguage, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">
        favorite programming language: {favoriteLanguage}
      </p>
      <button id="changeFavorite" onClick={toggleLanguage}>
        toggle language
      </button>
    </div>
  );
}

export default App;

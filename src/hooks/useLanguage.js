import { create } from 'zustand'

const translations = {
  en: {
    // Auth Page
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signInToAccount: 'Sign in to your account to continue.',
    createAccount: 'Create your account to get started.',
    emailAddress: 'Email Address',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password ?',
    signingIn: 'Signing In...',
    signingUp: 'Signing Up...',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    
    // Main Content
    createAndNurture: 'Create and nurture vibrant AI communities.',
    connectWithFellow: 'Connect with fellow enthusiasts, exchange insights, and collaborate on innovative projects. Join us to revolutionize your AI networking experience!',
    
    // Languages
    english: 'English',
    spanish: 'Español',
    french: 'Français',
    german: 'Deutsch',
    italian: 'Italiano',
    portuguese: 'Português',
    indonesian: 'Indonesian',
    polish: 'Polski',
    danish: 'Dansk'
  },
  pl: {
    // Auth Page
    signIn: 'Zaloguj się',
    signUp: 'Zarejestruj się',
    signInToAccount: 'Zaloguj się na swoje konto, aby kontynuować.',
    createAccount: 'Utwórz swoje konto, aby rozpocząć.',
    emailAddress: 'Adres Email',
    password: 'Hasło',
    confirmPassword: 'Potwierdź Hasło',
    forgotPassword: 'Zapomniałeś hasła ?',
    signingIn: 'Logowanie...',
    signingUp: 'Rejestracja...',
    alreadyHaveAccount: 'Masz już konto?',
    dontHaveAccount: 'Nie masz konta?',
    
    // Main Content
    createAndNurture: 'Twórz i rozwijaj żywe społeczności AI.',
    connectWithFellow: 'Połącz się z innymi entuzjastami, wymieniaj się spostrzeżeniami i współpracuj nad innowacyjnymi projektami. Dołącz do nas, aby zrewolucjonizować swoje doświadczenie w sieci AI!',
    
    // Languages
    english: 'Angielski',
    spanish: 'Hiszpański',
    french: 'Francuski',
    german: 'Niemiecki',
    italian: 'Włoski',
    portuguese: 'Portugalski',
    indonesian: 'Indonezyjski',
    polish: 'Polski',
    danish: 'Duński'
  }
}

export const useLanguage = create((set, get) => ({
  currentLanguage: 'en',
  translations,
  
  setLanguage: (language) => {
    set({ currentLanguage: language })
    localStorage.setItem('aiTribes_language', language)
  },
  
  t: (key) => {
    const { currentLanguage, translations } = get()
    return translations[currentLanguage]?.[key] || translations.en[key] || key
  },
  
  initialize: () => {
    const savedLanguage = localStorage.getItem('aiTribes_language')
    if (savedLanguage && translations[savedLanguage]) {
      set({ currentLanguage: savedLanguage })
    }
  }
}))

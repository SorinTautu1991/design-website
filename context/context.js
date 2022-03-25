import React from 'react';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mode, setMode] = useState('dark');

  const [services, setServices] = useState([
    { title: 'Acasa', path: '/', tabIndex: 0 },
    { title: 'Portofoliu', path: '/portofoliu', tabIndex: 1 },
    { title: 'Despre', path: '/despre', tabIndex: 2 },
    { title: 'Servicii', path: '/servicii', tabIndex: 3 },
    { title: 'Contact', path: '/contact', tabIndex: 4 },
  ]);

  function toggleTheme() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const appState = {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    services,
    toggleTheme,
    mode,
  };
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

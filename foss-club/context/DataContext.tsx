import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Software } from '../types';
import { initialSoftwareList } from '../services/mockData';

interface DataContextType {
  softwareList: Software[];
  addSoftware: (software: Software) => void;
  updateSoftware: (id: string, updatedSoftware: Software) => void;
  deleteSoftware: (id: string) => void;
  getSoftwareById: (id: string) => Software | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [softwareList, setSoftwareList] = useState<Software[]>(initialSoftwareList);

  const addSoftware = (software: Software) => {
    setSoftwareList(prev => [...prev, software]);
  };

  const updateSoftware = (id: string, updatedSoftware: Software) => {
    setSoftwareList(prev => prev.map(item => item.id === id ? updatedSoftware : item));
  };

  const deleteSoftware = (id: string) => {
    setSoftwareList(prev => prev.filter(item => item.id !== id));
  };

  const getSoftwareById = (id: string) => {
    return softwareList.find(item => item.id === id);
  };

  return (
    <DataContext.Provider value={{ softwareList, addSoftware, updateSoftware, deleteSoftware, getSoftwareById }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
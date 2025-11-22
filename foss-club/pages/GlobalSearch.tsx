import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertCircle } from 'lucide-react';
import { Input, Card, Badge } from '../components/UI';
import { useData } from '../context/DataContext';

const GlobalSearch: React.FC = () => {
  const { softwareList } = useData();
  const [query, setQuery] = useState('');

  const results = query 
    ? softwareList.filter(s => 
        s.name.toLowerCase().includes(query.toLowerCase()) || 
        s.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[60vh]">
      <div className="max-w-3xl mx-auto text-center mb-12">
         <h1 className="text-3xl font-bold text-gray-900 mb-6">Search the Directory</h1>
         <div className="relative">
            <Search className="absolute top-4 left-4 text-gray-400 w-6 h-6"/>
            <input 
              type="text" 
              className="w-full pl-14 pr-6 py-4 text-lg rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-primary-500 shadow-sm transition-colors"
              placeholder="Find software, categories, or descriptions..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
            />
         </div>
      </div>

      {query && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-700">
             {results.length} result{results.length !== 1 && 's'} found for "{query}"
          </h2>
          
          {results.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(sw => (
                   <Link to={`/software/${sw.id}`} key={sw.id}>
                      <Card className="flex p-4 gap-4 h-full hover:bg-blue-50 border-transparent">
                         <img src={sw.logoUrl} alt={sw.name} className="w-16 h-16 rounded bg-gray-100 object-cover"/>
                         <div>
                            <h3 className="font-bold text-lg text-gray-900">{sw.name}</h3>
                            <Badge>{sw.category}</Badge>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{sw.description}</p>
                         </div>
                      </Card>
                   </Link>
                ))}
             </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
               <AlertCircle className="w-12 h-12 mb-4 text-gray-300" />
               <p>No matches found. Try a different keyword.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
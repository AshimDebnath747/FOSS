import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Input, Card, Badge, Button } from '../components/UI';
import { useData } from '../context/DataContext';
import { Category } from '../types';

const Library: React.FC = () => {
  const { softwareList } = useData();
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'All';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);

  const categories = ['All', ...Object.values(Category)];

  const filteredList = useMemo(() => {
    return softwareList.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [softwareList, searchTerm, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
         <div>
            <h1 className="text-3xl font-bold text-gray-900">Software Library</h1>
            <p className="text-gray-600 mt-2">Browse our curated collection of free software.</p>
         </div>
         <div className="w-full md:w-1/3">
             <Input 
                placeholder="Search software..." 
                icon={Search} 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             />
         </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-200">
         {categories.map(cat => (
            <button
               key={cat}
               onClick={() => setSelectedCategory(cat)}
               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                 selectedCategory === cat 
                   ? 'bg-primary-600 text-white shadow-md' 
                   : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
               }`}
            >
              {cat}
            </button>
         ))}
      </div>

      {/* Grid */}
      {filteredList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredList.map(sw => (
            <Link to={`/software/${sw.id}`} key={sw.id}>
                <Card className="h-full flex flex-col hover:ring-2 ring-primary-500 ring-offset-2 transition-all">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                       <img src={sw.logoUrl} alt={sw.name} className="w-16 h-16 rounded-lg object-cover bg-gray-100" />
                       <Badge>{sw.category}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{sw.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">{sw.description}</p>
                    <Button variant="outline" fullWidth className="text-sm mt-auto">View Details</Button>
                  </div>
                </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No software found matching your criteria.</p>
          <button 
            onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
            className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Simple Pagination Mockup */}
      {filteredList.length > 12 && (
        <div className="mt-12 flex justify-center gap-2">
           <Button variant="outline" disabled>Previous</Button>
           <Button variant="outline">Next</Button>
        </div>
      )}
    </div>
  );
};

export default Library;
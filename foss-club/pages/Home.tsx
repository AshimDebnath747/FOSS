import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Users, Globe, Terminal } from 'lucide-react';
import { Button, Card, Badge } from '../components/UI';
import { useData } from '../context/DataContext';
import { Category } from '../types';

const Home: React.FC = () => {
  const { softwareList } = useData();
  const featuredSoftware = softwareList.slice(0, 4);
  const categories = Object.values(Category);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Discover the Power of <span className="text-primary-600">Open Source</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Join the FOSS Club to explore, share, and contribute to the world's best free software. Freedom, privacy, and community driven.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/library">
                  <Button className="w-full sm:w-auto" icon={ArrowRight}>Browse Library</Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
               {/* Abstract Illustration placeholder */}
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-full blur-3xl opacity-70"></div>
               <img 
                 src="https://picsum.photos/id/60/600/400" 
                 alt="FOSS Illustration" 
                 className="relative rounded-2xl shadow-2xl border border-gray-200"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Why FOSS? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why FOSS?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Free and Open Source Software isn't just about price. It's about liberty, transparency, and collaboration.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Code2, title: 'Transparent Code', desc: 'Inspect the source code. No hidden tracking or backdoors.' },
            { icon: Users, title: 'Community Driven', desc: 'Built by people for people, not just for corporate profit.' },
            { icon: Globe, title: 'Digital Freedom', desc: 'Use the software for any purpose without restrictions.' }
          ].map((item, idx) => (
            <Card key={idx} className="p-8 flex flex-col items-center text-center hover:shadow-lg border-t-4 border-t-primary-600">
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-primary-600">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
             <h2 className="text-2xl font-bold text-gray-900">Explore Categories</h2>
             <Link to="/library" className="text-primary-600 hover:text-primary-700 font-medium">View all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link to={`/library?cat=${cat}`} key={cat}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 text-center transition-all hover:-translate-y-1 cursor-pointer">
                  <Terminal className="w-8 h-8 mx-auto mb-3 text-secondary-600" />
                  <span className="font-medium text-gray-900 block">{cat}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Software */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Software</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSoftware.map(sw => (
              <Link to={`/software/${sw.id}`} key={sw.id}>
                <Card className="h-full flex flex-col">
                  <div className="h-40 w-full bg-gray-100 relative overflow-hidden border-b border-gray-100">
                    <img src={sw.logoUrl} alt={sw.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{sw.name}</h3>
                    </div>
                    <div className="mb-3">
                        <Badge color="secondary">{sw.category}</Badge>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 flex-1 mb-4">{sw.description}</p>
                    <Button variant="outline" fullWidth className="text-sm">View Details</Button>
                  </div>
                </Card>
              </Link>
            ))}
         </div>
      </section>
      
      {/* Club Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-gray-900 rounded-2xl overflow-hidden text-white">
           <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                 <h2 className="text-3xl font-bold mb-4">Join the FOSS Club</h2>
                 <p className="text-gray-300 mb-8 text-lg">
                   Be part of a growing community of developers, designers, and users who believe in open technology.
                 </p>
                 <Link to="/about">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 w-auto self-start">Read About Us</Button>
                 </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                 <img src="https://picsum.photos/id/180/800/600" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Coding community"/>
              </div>
           </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
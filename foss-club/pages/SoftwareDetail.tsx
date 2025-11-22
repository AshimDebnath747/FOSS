import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, CheckCircle, Share2, ArrowLeft } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Button, Badge, Card } from '../components/UI';

const SoftwareDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getSoftwareById, softwareList } = useData();
  
  const software = getSoftwareById(id || '');

  if (!software) {
    return <div className="p-12 text-center">Software not found.</div>;
  }

  const related = softwareList
    .filter(s => s.category === software.category && s.id !== software.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/library" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2"/> Back to Library
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div className="flex items-start gap-6">
            <img src={software.logoUrl} alt={software.name} className="w-24 h-24 rounded-2xl shadow-sm bg-white object-cover" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{software.name}</h1>
              <Badge color="secondary">{software.category}</Badge>
            </div>
          </div>

          {/* Description */}
          <section className="prose max-w-none text-gray-700">
             <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
             <p className="leading-relaxed text-lg">{software.description}</p>
          </section>

          {/* Features */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {software.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6 space-y-6 border-t-4 border-t-primary-600">
             <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">License</h4>
                <p className="font-medium text-gray-900">{software.license}</p>
             </div>
             <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Website</h4>
                <a 
                  href={software.homepageUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-primary-600 hover:underline truncate block"
                >
                  {software.homepageUrl}
                </a>
             </div>
             <a href={software.homepageUrl} target="_blank" rel="noreferrer" className="block">
               <Button fullWidth icon={ExternalLink}>Visit Homepage</Button>
             </a>
          </Card>

          {/* Similar Tools */}
          {related.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Similar Tools</h3>
              <div className="space-y-4">
                {related.map(item => (
                  <Link to={`/software/${item.id}`} key={item.id}>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex items-center gap-4 mb-4">
                        <img src={item.logoUrl} className="w-12 h-12 rounded bg-gray-100 object-cover" alt={item.name}/>
                        <div>
                           <h4 className="font-bold text-gray-900">{item.name}</h4>
                           <span className="text-xs text-gray-500">{item.category}</span>
                        </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SoftwareDetail;
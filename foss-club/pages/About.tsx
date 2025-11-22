import React from 'react';
import { Card } from '../components/UI';
import { Mail, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">About FOSS Club</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We are a group of technology enthusiasts dedicated to promoting, teaching, and building Free and Open Source Software.
        </p>
      </section>

      {/* Mission */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
         <div className="bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To democratize technology by making open-source software accessible to everyone. We believe that software should be free to use, study, share, and modify.
            </p>
         </div>
         <div className="prose text-gray-600">
            <p>
              The Free Software movement was launched in 1983 by Richard Stallman. It campaigns for users' freedom to run, copy, distribute, study, change and improve the software. FOSS Club adheres to these principles, providing a curated directory of the best tools available.
            </p>
         </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           {[1, 2, 3].map((i) => (
             <Card key={i} className="p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src={`https://picsum.photos/id/${i + 50}/200/200`} alt="Team Member" className="w-full h-full object-cover"/>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Member Name</h3>
                <p className="text-primary-600 text-sm mb-3">Maintainer</p>
                <p className="text-gray-500 text-sm">Passionate about Linux and privacy.</p>
             </Card>
           ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
               <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Us or Get in Touch</h2>
               <p className="text-gray-600">Have a suggestion? Want to volunteer? Drop us a line.</p>
            </div>
            <a href="mailto:contact@foss.club" className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 bg-blue-50 px-6 py-3 rounded-lg transition-colors">
               <Mail className="w-5 h-5" />
               contact@foss.club
            </a>
         </div>
      </section>

    </div>
  );
};

export default About;
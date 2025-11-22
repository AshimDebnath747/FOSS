import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { useData } from '../../context/DataContext';
import { Button, Input, TextArea, Select } from '../../components/UI';
import { Category, Software } from '../../types';

const SoftwareForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addSoftware, getSoftwareById, updateSoftware } = useData();
  
  const isEditMode = !!id;

  const [formData, setFormData] = useState<Software>({
    id: Date.now().toString(),
    name: '',
    description: '',
    category: Category.Development,
    homepageUrl: '',
    license: '',
    logoUrl: '',
    addedBy: 'Admin',
    features: []
  });

  const [featuresText, setFeaturesText] = useState('');

  useEffect(() => {
    if (isEditMode && id) {
      const existing = getSoftwareById(id);
      if (existing) {
        setFormData(existing);
        setFeaturesText(existing.features.join('\n'));
      }
    }
  }, [id, isEditMode, getSoftwareById]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const processedFeatures = featuresText.split('\n').filter(f => f.trim() !== '');
    const finalData = { ...formData, features: processedFeatures };

    if (isEditMode && id) {
      updateSoftware(id, finalData);
    } else {
      addSoftware(finalData);
    }
    navigate('/admin');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">{isEditMode ? 'Edit Software' : 'Add New Software'}</h1>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
            <Input 
              label="Software Name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select 
                label="Category" 
                name="category" 
                value={formData.category} 
                onChange={handleChange}
                options={Object.values(Category).map(c => ({ value: c, label: c }))}
              />
              <Input 
                label="License Type" 
                name="license" 
                value={formData.license} 
                onChange={handleChange} 
                placeholder="e.g. MIT, GPLv3"
              />
            </div>

            <TextArea 
              label="Description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              rows={4}
            />

            <Input 
              label="Homepage URL" 
              name="homepageUrl" 
              value={formData.homepageUrl} 
              onChange={handleChange} 
              type="url"
            />

            <Input 
              label="Logo Image URL" 
              name="logoUrl" 
              value={formData.logoUrl} 
              onChange={handleChange} 
              placeholder="https://..."
            />

            <TextArea 
              label="Key Features (One per line)" 
              value={featuresText} 
              onChange={(e) => setFeaturesText(e.target.value)} 
              rows={5}
              placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
            />

            <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
              <Button type="button" variant="outline" onClick={() => navigate('/admin')}>Cancel</Button>
              <Button type="submit">{isEditMode ? 'Save Changes' : 'Add Software'}</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SoftwareForm;
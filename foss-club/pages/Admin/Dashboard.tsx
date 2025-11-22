import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit2, Trash2, Plus, AlertTriangle } from 'lucide-react';
import Sidebar from '../../components/Sidebar';
import { useData } from '../../context/DataContext';
import { Button, Badge, Modal } from '../../components/UI';

const Dashboard: React.FC = () => {
  const { softwareList, deleteSoftware } = useData();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const confirmDelete = (id: string) => {
    setSelectedId(id);
    setDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (selectedId) {
      deleteSoftware(selectedId);
      setDeleteModalOpen(false);
      setSelectedId(null);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        
        <div className="flex justify-between items-center mb-8">
           <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
           <Link to="/admin/add">
             <Button icon={Plus}>Add Software</Button>
           </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-500 font-medium">Total Software</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{softwareList.length}</p>
           </div>
           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-500 font-medium">Categories</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{new Set(softwareList.map(s => s.category)).size}</p>
           </div>
           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-500 font-medium">Active Users</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">1</p>
           </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
           <div className="overflow-x-auto">
             <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50">
                 <tr>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License</th>
                   <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                 </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                 {softwareList.map((software) => (
                   <tr key={software.id} className="hover:bg-gray-50">
                     <td className="px-6 py-4 whitespace-nowrap">
                       <div className="flex items-center">
                         <div className="h-10 w-10 flex-shrink-0">
                           <img className="h-10 w-10 rounded-md object-cover bg-gray-100" src={software.logoUrl} alt="" />
                         </div>
                         <div className="ml-4">
                           <div className="text-sm font-medium text-gray-900">{software.name}</div>
                         </div>
                       </div>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap">
                       <Badge>{software.category}</Badge>
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                       {software.license}
                     </td>
                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                       <Link to={`/admin/edit/${software.id}`} className="text-primary-600 hover:text-primary-900 mr-4">
                         <Edit2 className="w-5 h-5 inline" />
                       </Link>
                       <button onClick={() => confirmDelete(software.id)} className="text-red-600 hover:text-red-900">
                         <Trash2 className="w-5 h-5 inline" />
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </div>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="Delete Software?"
        icon={AlertTriangle}
        type="danger"
      >
        <p className="text-sm text-gray-500 mb-6">
          Are you sure you want to delete this item? This action cannot be undone and will remove the software from the library.
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setDeleteModalOpen(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
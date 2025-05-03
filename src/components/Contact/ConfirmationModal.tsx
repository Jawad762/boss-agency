import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  formData
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-2xl font-semibold text-purple-500 mb-4">Confirm Submission</h2>
        
        <div className="mb-4">
          <p className="text-gray-700 mb-2">Please review your information:</p>
          
          <div className="bg-gray-50 p-3 rounded">
            <p className="mb-1"><span className="font-medium">Name:</span> {formData.name}</p>
            <p className="mb-1"><span className="font-medium">Email:</span> {formData.email}</p>
            <p className="mb-1"><span className="font-medium">Phone:</span> {formData.phone || 'Not provided'}</p>
            <p className="mb-1"><span className="font-medium">Message:</span></p>
            <p className="bg-white p-2 rounded">{formData.message}</p>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-2 bg-green-300 hover:bg-green-400 text-white rounded transition-colors"
          >
            Confirm & Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal; 
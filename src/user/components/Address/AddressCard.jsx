import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const AddressCard = ({ address }) => {
  if (!address) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-black">Delivery Address</h2>
      <div className="space-y-3">
        <p className="font-semibold text-lg text-black">{`${address.firstName} ${address.lastName}`}</p>
        <div className="flex items-start space-x-2">
          <MapPin className="w-5 h-5 text-blue-400 mt-1" />
          <p className="text-gray-700">
            {`${address.streetAddress}, ${address.city}, ${address.state}, ${address.pincode}`}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-blue-400" />
          <p className="text-gray-700">{address.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
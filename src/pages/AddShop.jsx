import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddShopForm from '../components/AddShopForm';
import Header from '../components/Header';
import PreviewShopCard from '../components/PreviewShopCard';
import { FaBackward } from 'react-icons/fa';

const AddShop = () => {
  const areaList = [
    'Thane',
    'Pune',
    'Mumbai Suburban',
    'Nashik',
    'Nagpur',
    'Ahmednagar',
    'Solapur',
  ];

  const shopCategories = [
    'Grocery',
    'Butcher',
    'Baker',
    'Chemist',
    'Stationery shop',
  ];
  const [shopName, setShopName] = useState('');
  const [selectedShopArea, setSelectedShopArea] = useState(areaList[0]);
  const [selectedShopCategory, setSelectedShopCategory] = useState(
    shopCategories[0]
  );

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />
      <div className="py-4 px-6 md:px-20">
        <Link to="/">
          <p className="text-base font-semibold text-gray-700 flex items-center gap-2">
            <FaBackward size={18} />
            <span>Go Back</span>
          </p>
        </Link>
        <section className="flex flex-col-reverse lg:flex-row items-center justify-centers gap-10">
          <AddShopForm
            formActions={{
              shopName,
              areaList,
              shopCategories,
              setSelectedShopArea,
              setSelectedShopCategory,
              setShopName,
              selectedShopArea,
              selectedShopCategory,
            }}
          />
          <PreviewShopCard
            previewData={{ shopName, selectedShopArea, selectedShopCategory }}
          />
        </section>
      </div>
    </div>
  );
};

export default AddShop;

import React from 'react';
import shopPreview from '../Images/shop-preview.png';

const PreviewShopCard = ({ previewData }) => {
  const { shopName, selectedShopArea, selectedShopCategory } = previewData;
  return (
    <div className="flex flex-col text-center justify-center">
      <h4 className="text-base font-semibold mb-4">Shop Preview</h4>
      <div className="flex w-96 flex-col border border-gray-300 bg-white rounded-xl">
        <section className="relative h-52 w-full flex items-center justify-center">
          <img
            src={shopPreview}
            className="object-cover h-full w-1/2 opacity-70"
            alt="shop preview"
          />
        </section>
        <section className="flex items-center px-6 pt-10">
          <div className="text-left flex-1">
            <h2 className="text-xl font-semibold">
              {shopName !== '' ? shopName : '==============='}
            </h2>
            <h3 className="text-base mb-2">{selectedShopArea}</h3>
            <span className="px-6 py-1 rounded-2xl bg-gray-500 text-white">
              {selectedShopCategory}
            </span>
          </div>
        </section>
        <section className="flex items-center justify-center py-4">
          <p className="flex-1 text-sm">Opening date: 8:00 AM</p>
          <p className="flex-1 text-sm">Closing date: 8:00 PM</p>
        </section>
      </div>
    </div>
  );
};

export default PreviewShopCard;

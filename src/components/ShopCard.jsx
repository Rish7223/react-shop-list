import React from 'react';
import shopPreview from '../Images/shop-preview.png';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { REMOVE_SHOP } from '../redux/types';

const ShopCard = ({ previewData, editActions }) => {
  const { id, name, area, category } = previewData;
  const { setEditShop, setIsOpenEditModel } = editActions;
  const dispatch = useDispatch();
  return (
    <div className="flex-1 flex text-center justify-center min-h-full">
      <div className="flex w-full flex-col border border-gray-300 bg-white rounded-xl">
        <section className="relative h-52 w-full flex items-center justify-center">
          <img
            src={shopPreview}
            className="object-cover h-full w-1/2 opacity-70"
            alt="shop preview"
          />
        </section>
        <section className="flex items-center px-8 pt-10">
          <div className="text-left flex-1">
            <h2 className="text-xl font-semibold">
              {name !== '' ? name : '==============='}
            </h2>
            <h3 className="text-base mb-2">{area}</h3>
            <span className="px-6 py-1 rounded-2xl bg-gray-500 text-white">
              {category}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="border border-red-500 p-1 rounded-lg"
              onClick={() => {
                setEditShop(previewData);
                setIsOpenEditModel(true);
              }}
            >
              <FaPencilAlt size={18} className="text-red-600" />
            </button>
            <button
              onClick={() => {
                dispatch({ type: REMOVE_SHOP, payload: id });
              }}
            >
              <FaTrash size={18} className="text-red-600" />
            </button>
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

export default ShopCard;

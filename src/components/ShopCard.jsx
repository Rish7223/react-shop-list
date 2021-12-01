import React, { useState } from 'react';
import shopPreview from '../Images/shop-preview.png';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { REMOVE_SHOP } from '../redux/types';

const ShopCard = ({ previewData, editActions }) => {
  const { id, name, area, category, openingTime, closingTime } = previewData;
  const { setEditShop, setIsOpenEditModel } = editActions;
  const [isShopOpen, setIsShopOpen] = useState(false);
  const dispatch = useDispatch();

  const getOpenStatus = () => {
    let openingHour = Number(openingTime.split(':')[0]);
    let openingMinute = Number(openingTime.split(':')[1]);
    let closingHour = Number(closingTime.split(':')[0]);
    let closingMinute = Number(closingTime.split(':')[1]);
    setInterval(() => {
      let currentD = new Date();
      let shopOpeningTime = new Date();
      shopOpeningTime.setHours(openingHour, openingMinute, 0);
      let shopClosingTime = new Date();
      shopClosingTime.setHours(closingHour, closingMinute, 0);
      console.log(shopOpeningTime, shopClosingTime, currentD);
      if (currentD >= shopOpeningTime && currentD < shopClosingTime) {
        setIsShopOpen(true);
      } else {
        setIsShopOpen(false);
      }
    }, 1000);
  };
  getOpenStatus();
  return (
    <div className="flex-1 flex text-center justify-center min-h-full ">
      <div className="flex w-full flex-col border border-gray-300 bg-white rounded-xl pb-2">
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
          <div className="flex flex-col items-center gap-2">
            <section className="flex items-center gap-4">
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
            </section>
            <section className="flex justify-center ">
              {isShopOpen ? (
                <span className="px-8 text-sm font-semibold flex items-center justify-center rounded-2xl border border-green-800 bg-green-200 bg-opacity-50 text-green-800">
                  Open
                </span>
              ) : (
                <span className="px-8 text-sm font-semibold flex items-center justify-center rounded-2xl border border-red-800 bg-red-200 bg-opacity-50 text-red-800">
                  Closed
                </span>
              )}
            </section>
          </div>
        </section>
        <section className="flex items-center py-4 px-8">
          <p className="flex-1 text-left text-sm">
            Opening time: {openingTime}
          </p>
          <p className="flex-1 text-right text-sm">
            Closing time: {closingTime}
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShopCard;

import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { FILTER_SHOP_LIST } from '../redux/types';

const FilterComponent = () => {
  const dispatch = useDispatch();
  const [openFilterBlock, setOpenFilterBlock] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('area');
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

  return (
    <section className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Filter View"
        className="h-10 w-56 px-2 border border-gray-300 rounded-xl"
        readOnly
      />
      <div className="relative">
        <button
          className="p-2 border border-gray-300 rounded-lg bg-white"
          onClick={() => {
            setOpenFilterBlock(!openFilterBlock);
          }}
        >
          <FaFilter size={20} className="text-gray-700" />
        </button>
        {openFilterBlock && (
          <div className="bg-white flex absolute top-12 -left-44 md:left-0 z-10 w-96 min-h-full py-4 border border-gray-300 rounded-xl">
            <section className="flex-1 flex flex-col items-start border-r border-gray-300">
              <h3 className="text-lg capitalize font-bold text-gray-700 px-2 mb-2">
                Filter Shops
              </h3>
              <div
                className={`p-2 hover:bg-gray-200 cursor-pointer w-full ${
                  selectedFilter === 'area' && 'bg-gray-300'
                }`}
                onClick={() => {
                  setSelectedFilter('area');
                }}
              >
                Area
              </div>
              <div
                className={`p-2 hover:bg-gray-200 cursor-pointer w-full ${
                  selectedFilter === 'category' && 'bg-gray-300'
                }`}
                onClick={() => {
                  setSelectedFilter('category');
                }}
              >
                Category
              </div>
              <div className="p-2 hover:bg-gray-200 cursor-pointer w-full ">
                Open/Close Status
              </div>
            </section>
            <section className="flex-1 flex flex-col items-start">
              {selectedFilter === 'area'
                ? areaList.map((area) => (
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer w-full"
                      onClick={() => {
                        dispatch({
                          type: FILTER_SHOP_LIST,
                          payload: { type: 'area', value: area },
                        });
                      }}
                    >
                      {area}
                    </div>
                  ))
                : shopCategories.map((category) => (
                    <div
                      className="p-2 hover:bg-gray-200 cursor-pointer w-full"
                      onClick={() => {
                        dispatch({
                          type: FILTER_SHOP_LIST,
                          payload: { type: 'category', value: category },
                        });
                      }}
                    >
                      {category}
                    </div>
                  ))}
            </section>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterComponent;

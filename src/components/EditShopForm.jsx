import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EDIT_SHOP } from '../redux/types';

const EditShopForm = ({ shopData, setIsOpenEditModel }) => {
  const { name, area, category, id, closingTime, openingTime } = shopData;
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
  const [shopName, setShopName] = useState(name);
  const [selectedShopArea, setSelectedShopArea] = useState(area);
  const [selectedShopCategory, setSelectedShopCategory] = useState(category);
  const [shopOpeningTime, setShopOpeningTime] = useState(openingTime);
  const [shopClosingTime, setShopClosingTime] = useState(closingTime);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataSchema = {
      id: id,
      name: shopName,
      area: selectedShopArea,
      category: selectedShopCategory,
      openingTime: shopOpeningTime,
      closingTime: shopClosingTime,
    };
    if (shopName.search(/^[a-zA-z\s]+$/) === -1) {
      alert('Shop name should only contains alphabet!');
      return;
    }
    dispatch({ type: EDIT_SHOP, payload: dataSchema });
    alert('Shop Edited successfully');
    setIsOpenEditModel(false);
  };
  return (
    <form className="flex-1 my-10" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Edit Shop Form</h2>
      <h1 className="text-3xl font-bold text-red-600">Editing {name}</h1>
      <section className="my-2">
        <label
          htmlFor="shop-name"
          className="text-lg font-semibold text-gray-800 mb-2"
        >
          Shop Name
        </label>
        <input
          type="text"
          required
          className="h-10 w-full border border-gray-400 rounded-md px-2 text-lg"
          value={shopName}
          onChange={(event) => setShopName(event.target.value)}
        />
      </section>
      {/* first drop down */}
      <section className="my-2">
        <label
          htmlFor="shop-name"
          className="text-lg font-semibold text-gray-800 mb-2"
        >
          Shop Area
        </label>
        <Listbox value={selectedShopArea} onChange={setSelectedShopArea}>
          <Listbox.Button
            as="div"
            className="h-10 w-full border border-gray-400 rounded-md px-2 bg-white flex items-center text-lg cursor-pointer"
          >
            {selectedShopArea}
          </Listbox.Button>
          <Listbox.Options className="bg-white border border-gray-300 rounded-xl mt-1 overflow-hidden">
            {areaList.map((area) => (
              <Listbox.Option
                key={area}
                value={area}
                className="h-10 flex items-center text-lg hover:bg-gray-200  px-4 cursor-pointer"
              >
                {area}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </section>
      <section className="my-2">
        <label
          htmlFor="shop-name"
          className="text-lg font-semibold text-gray-800 mb-2"
        >
          Shop Category
        </label>
        <Listbox
          value={selectedShopCategory}
          onChange={setSelectedShopCategory}
        >
          <Listbox.Button
            as="div"
            className="h-10 w-full border border-gray-400 rounded-md px-2 bg-white flex items-center text-lg cursor-pointer"
          >
            {selectedShopCategory}
          </Listbox.Button>
          <Listbox.Options className="bg-white border border-gray-300 rounded-xl mt-1 overflow-hidden">
            {shopCategories.map((category) => (
              <Listbox.Option
                key={category}
                value={category}
                className="h-10 flex items-center text-lg hover:bg-gray-200  px-4 cursor-pointer"
              >
                {category}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </section>
      <div className="flex items-center gap-2 my-4">
        <section className="flex-1">
          <label
            htmlFor="shop-name"
            className="text-lg font-semibold text-gray-800 mb-2"
          >
            Shop Opening Date
          </label>
          <input
            type="time"
            value={shopOpeningTime}
            className="h-10 w-full border border-gray-400 rounded-md px-2"
            onChange={(event) => setShopOpeningTime(event.target.value)}
          />
        </section>
        <section className="flex-1">
          <label
            htmlFor="shop-name"
            className="text-lg font-semibold text-gray-800 mb-2"
          >
            Shop Closing Date
          </label>
          <input
            type="time"
            value={shopClosingTime}
            className="h-10 w-full border border-gray-400 rounded-md px-2"
            onChange={(event) => setShopClosingTime(event.target.value)}
          />
        </section>
      </div>

      <button
        className="h-10 text-lg font-semibold flex justify-center items-center w-full bg-red-700 text-white rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default EditShopForm;

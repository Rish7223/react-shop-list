import { Listbox } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { ADD_SHOP } from '../redux/types';

const AddShopForm = ({ formActions }) => {
  const {
    shopName,
    areaList,
    shopCategories,
    setSelectedShopArea,
    setSelectedShopCategory,
    setShopName,
    selectedShopArea,
    selectedShopCategory,
  } = formActions;
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataSchema = {
      id: Date.now(),
      name: shopName,
      area: selectedShopArea,
      category: selectedShopCategory,
    };
    if (shopName.search(/^[a-zA-z\s]+$/) === -1) {
      alert('Shop name should only contains alphabet!');
      return;
    }
    dispatch({ type: ADD_SHOP, payload: dataSchema });
    alert('Shop added successfully');
    setShopName('');
  };
  return (
    <form className="flex-1 my-10" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Shop Form</h2>
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
            Shop Closing Date
          </label>
          <input
            type="date"
            className="h-10 w-full border border-gray-400 rounded-md px-2"
          />
        </section>
        <section className="flex-1">
          <label
            htmlFor="shop-name"
            className="text-lg font-semibold text-gray-800 mb-2"
          >
            Shop Opening Date
          </label>
          <input
            type="date"
            className="h-10 w-full border border-gray-400 rounded-md px-2"
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

export default AddShopForm;

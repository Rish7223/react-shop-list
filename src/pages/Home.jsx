import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EditShopForm from '../components/EditShopForm';
import FilterComponent from '../components/FilterComponent';
import Header from '../components/Header';
import Model from '../components/Model';
import ShopCard from '../components/ShopCard';

const Home = () => {
  const { shopList } = useSelector((state) => state.shopListReducer);
  const [isOpenEditModel, setIsOpenEditModel] = useState(false);
  const [editShop, setEditShop] = useState();

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Header />
      <div className="px-6 md:px-20 py-4">
        <div className="flex items-center justify-between py-5">
          <FilterComponent />
          <Link to="/add-shop">
            <button className="px-10 py-2 text-white bg-red-700 text-lg font-semibold rounded-xl">
              Add Shop
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {shopList.map((shop) => (
            <ShopCard
              previewData={shop}
              key={shop.id}
              editActions={{ setEditShop, setIsOpenEditModel }}
            />
          ))}
        </div>
      </div>
      {isOpenEditModel && (
        <Model setIsOpen={setIsOpenEditModel}>
          <EditShopForm
            shopData={editShop}
            setIsOpenEditModel={setIsOpenEditModel}
          />
        </Model>
      )}
    </div>
  );
};

export default Home;

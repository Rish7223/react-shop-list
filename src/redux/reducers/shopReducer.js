import {
  GET_SHOP_LIST,
  SET_SHOP_LOADING,
  ADD_SHOP,
  REMOVE_SHOP,
  EDIT_SHOP,
  FILTER_SHOP_LIST,
} from '../types';

const initialState = {
  shopList: [
    {
      id: 1,
      name: 'Rishabh Sweet shop',
      area: 'Nagpur',
      category: 'Baker',
    },
    {
      id: 2,
      name: 'Ishaan shop',
      area: 'Nashik',
      category: 'Grocery',
    },
    {
      id: 3,
      name: 'Amit kirana store',
      area: 'Mumbai Suburban',
      category: 'Grocery',
    },
  ],

  loading: false,
};

const shopListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SHOP_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case ADD_SHOP:
      return {
        ...state,
        shopList: [...state.shopList, payload],
      };
    case REMOVE_SHOP:
      return {
        ...state,
        shopList: state.shopList.filter((shop) => shop.id !== payload),
      };
    case EDIT_SHOP:
      const duplicateArray = [...state.shopList];
      const itemIndex = duplicateArray.findIndex(
        (item) => item.id === payload.id
      );
      duplicateArray[itemIndex].name = payload.name;
      duplicateArray[itemIndex].area = payload.area;
      duplicateArray[itemIndex].category = payload.category;

      return {
        ...state,
        shopList: duplicateArray,
      };

    case FILTER_SHOP_LIST:
      let shopListFiltered;
      if (payload.type === 'area') {
        shopListFiltered = state.shopList.filter(
          (element) => element.area === payload.value
        );
      }
      if (payload.type === 'category') {
        shopListFiltered = state.shopList.filter(
          (element) => element.category === payload.value
        );
      }
      return {
        ...state,
        shopList: shopListFiltered,
      };

    case GET_SHOP_LIST:
    default:
      return state;
  }
};

export default shopListReducer;

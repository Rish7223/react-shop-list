import {
  GET_SHOP_LIST,
  SET_SHOP_LOADING,
  ADD_SHOP,
  REMOVE_SHOP,
  EDIT_SHOP,
  FILTER_SHOP_LIST,
  RESET_FILTERS,
} from '../types';

const initialState = {
  shopList: [],
  duplicateShopList: [],
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
        duplicateShopList: [...state.duplicateShopList, payload],
      };
    case REMOVE_SHOP:
      return {
        ...state,
        shopList: state.shopList.filter((shop) => shop.id !== payload),
        duplicateShopList: state.duplicateShopList.filter(
          (shop) => shop.id !== payload
        ),
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
        duplicateShopList: [...state.shopList],
      };

    case FILTER_SHOP_LIST:
      let shopListFiltered;
      if (payload.type === 'area') {
        shopListFiltered = state.duplicateShopList.filter(
          (element) => element.area === payload.value
        );
      }
      if (payload.type === 'category') {
        shopListFiltered = state.duplicateShopList.filter(
          (element) => element.category === payload.value
        );
      }
      return {
        ...state,
        shopList: shopListFiltered,
      };

    case RESET_FILTERS:
      return {
        ...state,
        shopList: [...state.duplicateShopList],
      };
    case GET_SHOP_LIST:
    default:
      return state;
  }
};

export default shopListReducer;

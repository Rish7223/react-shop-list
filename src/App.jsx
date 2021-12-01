import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddShop from './pages/AddShop';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-shop" element={<AddShop />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

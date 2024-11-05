import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Roots from './components/Roots';
import Gadgets from './components/Gadgets';
import ProductDetail from './components/ProductDetail';
import Empty from './components/Empty';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Roots />}>
          <Route path="gadgets" element={<Gadgets />} />
          <Route path="products/:product_id" element={<ProductDetail />} />
          <Route path="empty" element={<Empty />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

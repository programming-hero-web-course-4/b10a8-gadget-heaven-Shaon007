import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import { useNavigate } from "react-router-dom";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => {
        setGadgets(data);
        const uniqueCategories = [...new Set(data.map(gadget => gadget.category))];
        // Include "Smartwatch" in categories if it exists, but keep it separate for display order
        setCategories(prev => [...new Set([...prev, ...uniqueCategories])]);
      });
  }, []);

  const filteredGadgets = selectedCategory === 'All' ? gadgets : gadgets.filter(gadget => gadget.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row justify-between mt-12 p-8 gap-6">
      <div>
        <div role="tablist" className="flex flex-col gap-2 border-2 rounded-3xl p-4 bg-white">
          {categories.filter(category => category !== 'Smartwatch').map(category => (
            <button
              key={category}
              role="tab"
              className={`py-3 bg-gray-200 rounded-full px-8 ${category === selectedCategory ? 'bg-purple-500 text-white' : ''}`}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              {category}
            </button>
          ))}
          <button
            role="tab"
            className={`py-3 bg-gray-200 rounded-full px-8 ${selectedCategory === 'Smartwatch' ? 'bg-purple-500 text-white' : ''}`}
            onClick={() => {
              navigate('/empty');
              setSelectedCategory('Smartwatch');
            }}
          >
            Smartwatch
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 gap-x-0">
        {filteredGadgets.map(gadget => (
          <Gadget gadget={gadget} key={gadget.product_id} />
        ))}
      </div>
    </div>
  );
};

export default Gadgets;

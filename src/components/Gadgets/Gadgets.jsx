import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import { useNavigate } from "react-router-dom";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState(['All', 'Smartwatch']); // Include 'Smartwatch' directly
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => {
        setGadgets(data);
        // Add other categories dynamically based on the data if needed
        const uniqueCategories = [...new Set(data.map(gadget => gadget.category))];
        setCategories(prev => [...new Set([...prev, ...uniqueCategories])]); // Combine with the initial categories
      });
  }, []);

  const filteredGadgets = selectedCategory === 'All' ? gadgets : gadgets.filter(gadget => gadget.category === selectedCategory);

  return (
    <div className="flex justify-between w-11/12 mt-12 p-8">
      <div>
        <div role="tablist" className="flex flex-col gap-2 border-2 rounded-3xl p-4 bg-white">
          {categories.map(category => (
            <button
              key={category}
              role="tab"
              className={`py-3 bg-gray-200 rounded-full px-8 ${category === selectedCategory ? 'bg-purple-500 text-white' : ''}`}
              onClick={() => {
                if (category === 'Smartwatch') {
                  navigate('/empty'); // Navigate to the Empty component for Smartwatch
                } else {
                  setSelectedCategory(category); // Set selected category for other gadgets
                }
              }}
            >
              {category}
            </button>
          ))}
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

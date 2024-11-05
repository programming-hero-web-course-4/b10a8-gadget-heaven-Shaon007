import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Dashboard = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-purple-500 text-center py-10">
        <h2 className="text-white text-3xl font-bold mb-2">Dashboard</h2>
        <p className="text-white mb-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to
          the coolest accessories, we have it all!
        </p>
      </div>

      {/* Tabs and Content Section */}
      <div className="bg-gray-100 pt-4 pb-10">
        <Tabs>
          {/* Tab Navigation */}
          <TabList className="flex justify-center gap-4 mb-8">
            <Tab className="px-4 py-2 font-semibold rounded-full cursor-pointer bg-purple-500 text-white">
              Cart
            </Tab>
            <Tab className="px-4 py-2 font-semibold rounded-full cursor-pointer text-purple-500 border border-purple-500">
              Wishlist
            </Tab>
          </TabList>

          {/* Cart Tab Panel */}
          <TabPanel>
            <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Cart</h3>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold">Total cost: 0.00</span>
                  <button className="px-4 py-1 bg-transparent text-purple-500 border border-purple-500 rounded-full">
                    Sort by Price
                  </button>
                  <button className="px-4 py-1 bg-purple-500 text-white rounded-full">Purchase</button>
                </div>
              </div>

              {/* Cart Items */}
              <div className="space-y-4">
                <p>Cart items.</p>
              </div>
            </div>
          </TabPanel>

          {/* Wishlist  */}
          <TabPanel>
            <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Wishlist</h3>
              <p>wishlist items</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;

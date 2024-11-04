const Footer = () => {
  return (
    <div className="bg-white text-center p-10 ">
      {/* Title and Description */}
      <h2 className="text-3xl font-bold mb-4">Gadget Heaven</h2>
      <p className="text-gray-600 mb-8 border-b-2 pb-6">Leading the way in cutting-edge technology and innovation.</p>

      {/* Footer Links */}
      <footer className="flex justify-center space-x-28 mt-4">
        <nav>
          <h6 className="font-bold text-lg mb-4">Services</h6>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Product Support</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Order Tracking</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Shipping & Delivery</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg mb-4">Company</h6>
          <a href="#" className="block text-gray-600 hover:text-gray-900">About Us</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Careers</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg mb-4">Legal</h6>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Terms of Service</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;


const products = [
  {
    name: "Marketing Services",
    description: "Boost your business with our marketing solutions.",
    image: "https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/marketing.png?raw=true",
  },
  {
    name: "SEO Optimization",
    description: "Enhance your online presence with SEO strategies.",
    image: "https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/seo.png?raw=true",
  },
  {
    name: "Creative Design",
    description: "Stand out with stunning visual content.",
    image: "https://github.com/saiyamdubey/vimoviglobaltech_Assignment/blob/main/Task_1/responsivepage/src/assets/image4.png?raw=true",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

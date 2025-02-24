const ServiceCard = ({ title, description, image }) => (
  <div className="p-6 border-2 rounded-lg shadow-md hover:shadow-lg transition-[2s] overflow-hidden bg-gray-600">
    <div className="overflow-hidden"><img src={image} alt={title} className="w-full hover:scale-[1.1] transition-[2s] h-40 object-cover rounded-md" /></div>
    <h3 className="text-xl font-semibold mt-4">{title}</h3>
    <p className="mt-2 text-gray-700">{description}</p>
  </div>
);

export default ServiceCard;
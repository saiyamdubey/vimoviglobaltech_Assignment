import ServiceCard from "./ServiceCard";
import webDevImage from "../assets/webdev.png";
import seoImage from "../assets/seo.png";
import marketingImage from "../assets/marketing.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

const Services = () => (
  <section id="services" className="py-16 px-4 bg-black">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-amber-50">Our Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard title="Web Development" description="Modern and responsive web solutions." image={webDevImage} />
        <ServiceCard title="SEO Optimization" description="Improve your website ranking." image={seoImage} />
        <ServiceCard title="Marketing Strategy" description="Grow your brand with data-driven insights." image={marketingImage} />
        <ServiceCard title="Web Development" description="Modern and responsive web solutions." image={image4} />
        <ServiceCard title="SEO Optimization" description="Improve your website ranking." image={image5} />
        <ServiceCard title="Marketing Strategy" description="Grow your brand with data-driven insights." image={image6} />
      </div>
    </div>
  </section>
);

export default Services;
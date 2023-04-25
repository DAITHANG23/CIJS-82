import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Introduction from './components/IntroduceSection/Introduction';
import NewProductSection from './components/NewProductSection/NewProductSetion';
import ProductItem from './components/ProductItem/ProductItem';
import ProductSection from './components/ProductSection/ProductSection';
import NewProductItem from './components/NewProdcutItem/NewProductItem';
import Review from './components/Reviews/Review';
import ReviewItem from './components/ReviewItems/ReviewItem';
import Services from './components/ServicesSection/Services';
import ServiceItem from './components/ServiceItem/ServiceItem';
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer2/Footer2';
import Footer3 from './components/Footer3/Footer3';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="product-section">
        <ProductSection />
        <div className="product-items">
          <ProductItem productImg="./images/Item 1.png" title="Earrings" />
          <ProductItem productImg="./images/Item 2.png" title="necklaces" />
          <ProductItem productImg="./images/Item 3.png" title="bracelets" />
          <ProductItem productImg="./images/Item 4.png" title="all Rings" />
          <ProductItem productImg="./images/Item 5.png" title="engagement rings" />
        </div>
      </div>
      <div className="introduction-section">
        <Introduction />
      </div>
      <div className="new-product-section">
        <NewProductSection />
        <div className="new-product-items">
          <NewProductItem newPdImg="./images/product1.png" />
          <NewProductItem newPdImg="./images/product2.png" />
          <NewProductItem newPdImg="./images/product3.png" />
        </div>
        <button>{"view gallery".toUpperCase()}</button>
      </div>

      <div className="review-section">
        <Review />
        <div className="review-item">
          <ReviewItem content="Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more." name="- Nico Jones" />

          <ReviewItem content="What an amazing shopping experience! I tried other jewelers and didn't find anything I liked. Thank you so much." name="- Tracy Willis" />

          <ReviewItem content="Great quality, and showed they can work through a problem and maintain excellent customer service!!" name="- Susana Santos" />
        </div>
      </div>

      <div className="service-section">
        <Services />
        <div className="service-items">
          <ServiceItem serviceImg="./images/service1.png" title="Jewelry Repair" />

          <ServiceItem serviceImg="./images/service2.png" title="Ring Sizing" />

          <ServiceItem serviceImg="./images/service3.png" title="Jewelry Polishing" />
        </div>
        <button>LEARN MORE</button>
      </div>

      <div className="footer-section">
        <div>
          <Footer />
        </div>
        <div className="footer02">
          <Footer2 title="Product" p1="Privacy Policy" p2="Terms of Service" p3="FAQ" />

          <Footer2 title="Resources" p1="Documentation" p2="Case Studies" />

          <Footer2 title="Company" p1="About Us" p2="Contact Us" />
        </div>
        <div style= {{
          color: "#929FA8",
          border: "1px solid rgba(146, 159, 168, 0.35)",
          width:"100%"
      }}/>

        <div className="footer-3">
          <Footer3 />
        </div>
      </div>
    </div>
  );
}

export default App;

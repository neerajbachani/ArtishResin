import React, { useRef, useEffect } from 'react';
import './ShopTheLook.css'; // We'll create this CSS file
import { addItemToCart } from '../../redux/Cart/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOurProduct } from '../../redux/OurProduct/Action';
import ProductCard from './ProductCardLA';

const LatestArrival = ({products}) => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
 



  useEffect(() => {
    const handleScroll = () => {
      if (leftColumnRef.current && rightColumnRef.current) {
        const scrollPosition = window.pageYOffset;
        const rightColumnHeight = rightColumnRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        if (scrollPosition + viewportHeight >= rightColumnHeight) {
          leftColumnRef.current.style.position = 'relative';
          leftColumnRef.current.style.top = `${rightColumnHeight - viewportHeight}px`;
        } else {
          leftColumnRef.current.style.position = 'fixed';
          leftColumnRef.current.style.top = '0';
        }
      }
    };
 

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const jwt = localStorage.getItem("jwt");


  const { ourProduct } = useSelector((store) => store);
  const OurProduct = ourProduct.ourProducts || [];
  console.log(OurProduct);

  useEffect(() => {
    dispatch(getOurProduct());
  }, [dispatch]);

  return (
    <>
    
    <div className="shop-the-look p-2 sm:p-5 ">
        
        <div className="left-column">
          <img
            src="https://res.cloudinary.com/ducutbdvu/image/upload/v1731903051/1000042331-logo.jpg_ltvhjn.png"
            alt="Shop the look"
            className="main-image"
          />
        </div>
        <div className="right-column">
        {products.map((product, index) => (
  <ProductCard key={index} product={product} />
))}
        </div>
      </div>
    </>
    
  );
};

export default LatestArrival;
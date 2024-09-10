import React, { useRef, useState } from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/Cart/Action';
import LoadingBar from 'react-top-loading-bar';
import toast, { Toaster } from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa6';

const ProductCard = ({ product }) => {
    console.log(product);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");
    const [progress, setProgress] = useState(0);
    const loadingBarRef = useRef(null);
  
    const eyeHandler = (link) => {
      navigate(link);
    };
    const handleWhatsAppClick = (productLink) => {
      const text = encodeURIComponent(`I'm interested in this product. Can you provide more details? ${window.location.origin}${productLink}`);
      window.open(`https://wa.me/9429350252?text=${text}`, '_blank');
    };
    const handleAddToCart = () => {
      if (!jwt) {
        toast.error('Please sign up or log in to add items to your cart.', {
          duration: 3000,
          position: 'bottom-center',
        });
        return;
      }

      if (!product || !product.link) {
        console.error('Product link is missing');
        toast.error('Unable to add product to cart. Please try again later.');
        return;
      }
      
      // Extract productId from the link
      const productId = product.link.split('/').pop();
      
      if (!productId) {
        console.error('Unable to extract product ID from link');
        toast.error('Unable to add product to cart. Please try again later.');
        return;
      }

      setProgress(20);
      const formData = new FormData();
      formData.append('productId', productId);
  
      dispatch(addItemToCart({ formData, jwt }))
        .then(() => {
          setProgress(100);
          toast.success('Product added to cart!');
          navigate('/cart');
        })
        .catch((error) => {
          console.error('Error in handleAddToCart:', error);
          setProgress(100);
          toast.error('Failed to add product to cart. Please try again.');
        })
        .finally(() => {
          setTimeout(() => {
            setProgress(0);
            loadingBarRef.current.complete();
          }, 500);
        });
    };

  return (
    <>
     <Toaster />
     <LoadingBar color="#2998ff" ref={loadingBarRef} progress={progress} />
     <motion.div 
      className="product-item relative bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-indigo-900 text-white px-3 py-1 text-xs font-semibold rounded-full z-10">
        {product.type || 'Featured'}
      </div>

      <div className="relative overflow-hidden group">
        <Link to={product.link}>
          <img
            src={product.image}
            alt={product.title || 'Product Image'}
            className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => eyeHandler(product.link)} 
            className="bg-white text-gray-800 p-2 rounded-full mr-2 hover:bg-black hover:text-blue-300 transition-colors duration-300 z-10"
          >
            <Eye size={20} />
          </button>
          <button 
            onClick={()=> handleWhatsAppClick(product.link)} 
            className="bg-white text-gray-800 p-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
          >
            <FaWhatsapp className=' text-xl sm:text-xl ' />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 font-poppins text-gray-800">{product.title || 'Product Name'}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className={i < 5 ? "text-yellow-400" : "text-gray-300"} />
          ))}
          <span className="ml-2 text-sm text-gray-600">(5.0)</span>
        </div>
        <p className="text-xl font-bold text-blue-600 mb-3">₹{product.discountedPrice?.toFixed(2) || 'XX.XX'}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-blue-300 hover:text-black py-2 rounded-md hover:bg-blue-300 transition-colors duration-300 flex items-center justify-center font-poppins md:text-xl text-sm"
        >
          <ShoppingCart size={20} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </motion.div>
    </>
  );
};

export default ProductCard;


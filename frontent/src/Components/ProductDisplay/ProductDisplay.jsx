import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assests/star_icon.png"
import star_dull_icon from "../Assests/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, fugit nostrum, accusamus laboriosam similique ab ipsa sunt amet exercitationem magni perspiciatis doloribus culpa quisquam ut aut delectus quibusdam, ratione id!
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXl</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop-Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay


// import React, { useContext } from 'react';
// import './ProductDisplay.css';
// // import star_icon from '../Assets/star_icon.png';
// // import star_dull_icon from '../Assets/star_dull_icon.png';
// import star_icon from "../Assests/star_icon.png"
// import star_dull_icon from "../Assests/star_dull_icon.png"
// import { ShopContext } from '../../Context/ShopContext';

// const ProductDisplay = (props) => {
//     const { product } = props;
//     const { addToCart } = useContext(ShopContext);

//     if (!product) {
//         return <div>Loading...</div>;
//     }

//     const { name, image, old_price, new_price, rating, numReviews, description, sizes, category, tags } = product;

//     const renderStars = () => {
//         const fullStars = Math.floor(rating);
//         const halfStars = rating % 1 > 0 ? 1 : 0;
//         const emptyStars = 5 - fullStars - halfStars;

//         return (
//             <>
//                 {Array(fullStars).fill().map((_, i) => <img key={`full-${i}`} src={star_icon} alt="star" />)}
//                 {halfStars === 1 && <img src={star_icon} alt="half-star" />}  {/* Use half star icon if available */}
//                 {Array(emptyStars).fill().map((_, i) => <img key={`empty-${i}`} src={star_dull_icon} alt="dull-star" />)}
//             </>
//         );
//     };

//     return (
//         <div className='productdisplay'>
//             <div className="productdisplay-left">
//                 <div className="productdisplay-img-list">
//                     {/* Assuming product.images is an array of image URLs */}
//                     {product.images ? product.images.map((img, idx) => (
//                         <img key={idx} src={img} alt={`product-${idx}`} />
//                     )) : <img src={image} alt="product" />}
//                 </div>
//                 <div className='productdisplay-img'>
//                     <img className='productdisplay-main-img' src={image} alt={name} />
//                 </div>
//             </div>
//             <div className="productdisplay-right">
//                 <h1>{name}</h1>
//                 <div className="productdisplay-right-stars">
//                     {renderStars()}
//                     <p>({numReviews})</p>
//                 </div>
//                 <div className="productdisplay-right-prices">
//                     {old_price && <div className="productdisplay-right-price-old">${old_price}</div>}
//                     <div className="productdisplay-right-price-new">${new_price}</div>
//                 </div>
//                 <div className="productdisplay-right-description">
//                     {description}
//                 </div>
//                 <div className="productdisplay-right-size">
//                     <h1>Select Size</h1>
//                     <div className="productdisplay-right-sizes">
//                         {sizes ? sizes.map((size, idx) => (
//                             <div key={idx}>{size}</div>
//                         )) : <div>No sizes available</div>}
//                     </div>
//                 </div>
//                 <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
//                 <p className='productdisplay-right-category'><span>Category :</span>{category.join(', ')}</p>
//                 <p className='productdisplay-right-category'><span>Tags :</span>{tags.join(', ')}</p>
//             </div>
//         </div>
//     );
// }

// export default ProductDisplay;

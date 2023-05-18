import { useState,useEffect } from "react";
import { Categories } from "../../components/categoriespannel/categories";
import Card from "../../components/myWishlistCard/card";
import './mywishlistpage.css' 
import Wishtext from "../../components/wishpagetext/wishtext";









export const MyWishListPage = () =>{
    const [wishlists, setWishlists] = useState([]);

    useEffect(() => {
      const wishListData = localStorage.getItem('wishListData');
      if (wishListData) {
        const parsedWishListData = JSON.parse(wishListData);
        setWishlists(parsedWishListData);
      }
    }, []);
  

    function handleDelete2(index) {
      let previousWishList = localStorage.getItem('wishListData')
      let wishListJson = JSON.parse(previousWishList);
      wishListJson.splice(index, 1);
      let updatedWishList = JSON.stringify(wishListJson);
      localStorage.setItem('wishListData', updatedWishList);
      setWishlists(wishListJson);
    }
    
    // Sample array of card data
  const cardData = [
    {
      id: 1,
      imageSrc: "path-to-image1",
      title: "Card 1",
      price: "$10",
      color: "Black",
      size: "M",
      nbItems: 1,
    },
    {
      id: 2,
      imageSrc: "path-to-image1",
      title: "Card 1",
      price: "$10",
      color: "Black",
      size: "M",
      nbItems: 1,
    },
    {
      id: 3,
      imageSrc: "path-to-image1",
      title: "Card 1",
      price: "$10",
      color: "Black",
      size: "M",
      nbItems: 1,
    },
    {
      id: 4,
      imageSrc: "path-to-image1",
      title: "Card 4",
      price: "$10",
      color: "Black",
      size: "M",
      nbItems: 1,
    },
    {
      id: 5,
      imageSrc: "path-to-image1",
      title: "Card 4",
      price: "$10",
      color: "Black",
      size: "M",
      nbItems: 1,
    },
    {
      id: 6,
      imageSrc: "path-to-image1",
      title: "Card 4",
      price: "$10",
      color: "Black",
      size: "M",
      nbItems: 1,
    },
  ];

  return (
    <div className="MyWishListPageWrapper">
      <div className="categoriesPannelWishListPage">
        <Categories/>
      </div>
      <div className="text-plus-card">
        <div className="textMywishListPage">
          <Wishtext/>
        </div>
        <div className="cardContainerWishList">
          {cardData.map((card) => (
            <Card
              key={card.id}
              imageSrc={card.imageSrc}
              title={card.title}
              price={card.price}
              color={card.color}
              size={card.size}
              nbItems={card.nbItems}
            />
          ))}
        </div>
      </div>
    </div>
  );


   


    
    
}


/*return(

  <div style={{margin:'10rem 10rem',display:'flex',justifyContent:'space-evenly'}}>
      <Categories/>
      <div className="wishlists">
  { wishlists.map((wishlist,index) =>(

      <div className="wishList" key={index}>
        <p>{wishlist.product.name}</p>
        <p>{wishlist.product.price}</p>
        <p>{wishlist.product.description}</p>
        <i
            className="fa fa-trash" onClick={() => handleDelete2(index)} 
            style={{ fontSize: '25px', color: '#C2C2C2',cursor:'pointer' }}
          ></i>
      </div>



          ))} 
      </div>





  </div>
)*/
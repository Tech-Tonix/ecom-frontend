import { useState,useEffect } from "react";
import { Categories } from "../../components/categoriespannel/categories";












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



    return(

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
    )
    
}
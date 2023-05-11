import { Card } from "../../components/card/card";
import { useEffect,useState } from "react"
import { Filter24Filled } from '@fluentui/react-icons';
import { Link } from "react-router-dom";
import axios from "axios";
import p1 from '../../components/bestSeller/assets/p1.jpg';
import p2 from '../../components/bestSeller/assets/p2.jpg';
import p3 from '../../components/bestSeller/assets/p3.jpg';
import p4 from '../../components/bestSeller/assets/p4.jpg';
import p5 from '../../components/bestSeller/assets/p5.jpg';
import p6 from '../../components/bestSeller/assets/p6.jpg';
import './showProductsItems.css'
export const ShowProductsItems = () =>{
  
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const response = await axios.get('https://gymrat-app.onrender.com/store/products/')
        setProducts(response.data)
    }
    useEffect(()=>{
        getProducts();
    },[])



    // const products = [
    //     {
    //       id: 1,
    //       productPrice: '2000 ',
    //       productName: 'nike t-shirt',
    //       productColor: 'sky blue',
    //       imgUrl: {p1}
    //     },
    //     {
    //         id: 2,
    //         productPrice: '2000 ',
    //         productName: 'nike t-shirt',
    //         productColor: 'sky blue',
    //         imgUrl: {p2}
    //       },
    //       {
    //         id: 3,
    //         productPrice: '2000 ',
    //         productName: 'nike t-shirt',
    //         productColor: 'sky blue',
    //         imgUrl: {p3}
    //       },
    //       {
    //         id: 4,
    //         productPrice: '2000',
    //         productName: 'nike t-shirt',
    //         productColor: 'sky blue',
    //         imgUrl: {p4}
    //       },
    //       {
    //         id: 5,
    //         productPrice: '2000 ',
    //         productName: 'nike t-shirt',
    //         productColor: 'sky blue',
    //         imgUrl: {p5}
    //       },{
    //       id: 5,
    //         productPrice: '2000 ',
    //         productName: 'nike t-shirt',
    //         productColor: 'sky blue',
    //         imgUrl: {p6}
    //       },{
    //         id: 5,
    //           productPrice: '2000 ',
    //           productName: 'nike t-shirt',
    //           productColor: 'sky blue',
    //           imgUrl: {p6}
    //         },{
    //           id: 5,
    //             productPrice: '2000 ',
    //             productName: 'nike t-shirt',
    //             productColor: 'sky blue',
    //             imgUrl: {p6}
    //           },{
    //             id: 5,
    //               productPrice: '2000 ',
    //               productName: 'nike t-shirt',
    //               productColor: 'sky blue',
    //               imgUrl: {p6}
    //             },{
    //               id: 5,
    //                 productPrice: '2000 ',
    //                 productName: 'nike t-shirt',
    //                 productColor: 'sky blue',
    //                 imgUrl: {p6}
    //               },{
    //                 id: 5,
    //                   productPrice: '2000 ',
    //                   productName: 'nike t-shirt',
    //                   productColor: 'sky blue',
    //                   imgUrl: {p6}
    //                 },{
    //                   id: 5,
    //                     productPrice: '2000 ',
    //                     productName: 'nike t-shirt',
    //                     productColor: 'sky blue',
    //                     imgUrl: {p6}
    //                   },{
    //                     id: 5,
    //                       productPrice: '2000 ',
    //                       productName: 'nike t-shirt',
    //                       productColor: 'sky blue',
    //                       imgUrl: {p6}
    //                     },{
    //                       id: 5,
    //                         productPrice: '2000 ',
    //                         productName: 'nike t-shirt',
    //                         productColor: 'sky blue',
    //                         imgUrl: {p6}
    //                       },{
    //                         id: 5,
    //                           productPrice: '2000 ',
    //                           productName: 'nike t-shirt',
    //                           productColor: 'sky blue',
    //                           imgUrl: {p6}
    //                         },{
    //                           id: 5,
    //                             productPrice: '2000 ',
    //                             productName: 'nike t-shirt',
    //                             productColor: 'sky blue',
    //                             imgUrl: {p6}
    //                           },{
    //                             id: 5,
    //                               productPrice: '2000 ',
    //                               productName: 'nike t-shirt',
    //                               productColor: 'sky blue',
    //                               imgUrl: {p6}
    //                             },{
    //                               id: 5,
    //                                 productPrice: '2000 ',
    //                                 productName: 'nike t-shirt',
    //                                 productColor: 'sky blue',
    //                                 imgUrl: {p6}
    //                               },{
    //                                 id: 5,
    //                                   productPrice: '2000 ',
    //                                   productName: 'nike t-shirt',
    //                                   productColor: 'sky blue',
    //                                   imgUrl: {p6}
    //                                 },{
    //                                   id: 5,
    //                                     productPrice: '2000 ',
    //                                     productName: 'nike t-shirt',
    //                                     productColor: 'sky blue',
    //                                     imgUrl: {p6}
    //                                   },{
    //                                     id: 5,
    //                                       productPrice: '2000 ',
    //                                       productName: 'nike t-shirt',
    //                                       productColor: 'sky blue',
    //                                       imgUrl: {p6}
    //                                     },
          
    //     // add more products here
    //   ];
      let quantityy=products.length;
    return(
        <div className="productsPage">
        <div className="showProducts">
            <p className="showProducs_p-title">TRACKLIST <span>({quantityy} results)</span></p>
            <hr />
            <div className="showProducts-filterYourReasearch">
              
            <Filter24Filled color="#171717"/>
            <p>Filter your research </p>
            </div>
        </div>
        <div className="showAllTheProducts">
        {
            products.map((product,index)=>{
               
                return (
                    <Link to={`/product-page/${product?.id}`}>
                    <div className='root'>
                        <div className='upper-side' style={{backgroundImage: `url(${product.image})`  ,backgroundPosition:'center',backgroundSize:'cover'}}>
                            
                            <button className='shop-btn'>Shop now</button>
                        </div>
                        <div className='lower-side'>
                            <div >
                                <h5 style={{textAlign:'end'}} className='price-txt'>{product.unit_price} DZD</h5>
                            </div>
                            <h4 className='product-title'>{product.name}</h4>
                            <h4 className='prodoct-color-txt'>{product.description}</h4>
                        </div>
                    </div>
                    </Link>
                )
                
            })

        }
        </div>
        </div>
        

    )

}
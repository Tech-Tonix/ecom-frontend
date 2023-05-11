import './landing_page.css'
import { HeroSection } from '../../components/hero/heroSection'
import {HeroSection2} from '../../components/hero/heroSection2'
import { Search } from '../../components/search/search'
import { DiscountCard } from '../../components/discountCard/discountCard'
import { ShopCard, ShopCard2 } from '../../components/shopCard/shopCard'
import {BestSeller} from '../../components/bestSeller/bestSeller'
import { Card } from '../../components/card/card'
export const LandingPage = ()=>{
    return(
        <div className="landingPage">
            <Search/>
            <HeroSection/>
            
            {/* <div className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div> */}
            <BestSeller title={'BEST SELLERS'}/>
            <BestSeller title={'New Realeases'}/>
            <HeroSection2/>
            

            <div className="discountSection" style={{display:'flex',justifyContent:'space-evenly',margin:'50px 50px'}}>
                <DiscountCard/>
                <DiscountCard/>
                <DiscountCard/>
            </div>
            <div className="shopSection" style={{display:'flex',justifyContent:'space-evenly'}}>
                <ShopCard myVariable='MEN' />
                <ShopCard2 myVariable='WOMEN'/></div>
            
            
        </div>
    ) 
}
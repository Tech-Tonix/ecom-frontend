import './search.css';
import sports from 'D:/react/ecom-frontend/src/assets/Images-20230511T152215Z-001/Images/bckground-search.png'

export const Search = () => {
    return(
        <div className='search__container'>
            <div className='search__image'>
                <img className='sports__image' src={sports} alt="sports" />
            </div>
            <div className="search__box">
			    <img className="search__icon" src={require('./assets/ic_fluent_search_24_filled.svg').default} alt="Country"/>
			    <input className='input__area' type="text" placeholder="Search.." id="search" autoComplete="off"/>
		    </div>
        </div>
        
    )

}
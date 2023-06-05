import React from 'react'
import './trackingpage.css';
import { Categories } from '../../components/categoriespannel/categories';
import { useState,useEffect } from 'react';
import Trackingtext from '../../components/trackingText/trackingtext';
import Trackcomponent from '../../components/trackComponent/trackcomponent';
import TableTracking from '../../components/tableOfTracking/tableTracking';



function Trackingpage() {
  return (
    <div className='TrackingPageWrapper'>
        <div className='categoriesPannelTrackingPage'>
            <Categories/>
        </div>
        <div className='trackingComponentContainer'>
          <Trackcomponent/>
       </div>
       <div className='tableTrackingComponent'>
          <TableTracking/>
       </div>
    </div>
  )
}

export default Trackingpage

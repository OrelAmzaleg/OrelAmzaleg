import React from 'react'
import './Gifts.css'
import Prod from './Prod';

function Gifts() {
  return (
    <div className="home">
 
      <div className="home_container">
           
            <div className = "home_banner"> 
              <img className="home_Img" src="https://images8.alphacoders.com/383/383122.jpg" alt=''/>
              <div className='cigar_text'><p>SWEET Gifts</p></div>
                   </div>           
                   <div className='home_prodsRev'>
                  <h1>G I F T S</h1>
           
                  <p>A type of distilled alcoholic beverage made from fermented grain mash. Various grains </p>
                        <p> are used for different varieties, including barley, corn, rye, and wheat.</p>
                        <p>Whisky is typically aged in wooden casks, which are often old sherry casks or may also be made of charred white oak</p>
                       <p></p>
                        <h5>E N J O Y</h5>
                      </div>
         
                        <div className='home_prodsRev'>
                          <h1>SWEET & NICE</h1>
                        </div>
          
                  <div className='home_row'>
                  <Prod
                  id ='101'
                  title='Condimento Balsamico Pure'
                  disc ='the best whiski in all bala bal' 
                  price = {200.00}
                  img = {'https://static.wixstatic.com/media/4413ad_c7a1cefbe6a149ba964af4c34c9e3031~mv2.jpg/v1/fill/w_394,h_277,al_c,q_80,usm_0.66_1.00_0.01/4413ad_c7a1cefbe6a149ba964af4c34c9e3031~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='102'
                        title='Valrhona Collection'
                        disc ='A stunning release from Jura.' 
                        price = {210.00}
                        img = {'https://static.wixstatic.com/media/4413ad_a4cef0d630894d19af08f72ee8b19f9b~mv2.jpg/v1/fill/w_277,h_277,al_c,q_80,usm_0.66_1.00_0.01/4413ad_a4cef0d630894d19af08f72ee8b19f9b~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '103'
                        title='Condimento Balsamico Red'
                        disc ='the best whiski in all bala bal' 
                        price = {375.00}
                        img = {'https://static.wixstatic.com/media/4413ad_9e053b9c0ad1400aaa9d39c8f625840f~mv2.jpg/v1/fill/w_225,h_277,al_c,q_80,usm_0.66_1.00_0.01/4413ad_9e053b9c0ad1400aaa9d39c8f625840f~mv2.webp'} 
                        rating = {5}/>
                                  <Prod
                  id ='103'
                  title='Condimento Balsamico Rose'
                  disc ='the best whiski in all bala bal' 
                  price = {190.99}
                  img = {'https://static.wixstatic.com/media/4413ad_6a2a42a9e13c4bdba0e3486624e0c8f0~mv2.jpg/v1/fill/w_225,h_277,al_c,q_80,usm_0.66_1.00_0.01/4413ad_6a2a42a9e13c4bdba0e3486624e0c8f0~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='104'
                        title='Hamlet Assortiment'
                        disc ='A stunning release from Jura.' 
                        price = {759.5}
                        img = {'https://static.wixstatic.com/media/4413ad_e76ec17daa734128a18b7cd848699423~mv2.jpg/v1/fill/w_299,h_277,al_c,q_80,usm_0.66_1.00_0.01/4413ad_e76ec17daa734128a18b7cd848699423~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '105'
                        title='Cruzilles Pates de fruits'
                        disc ='the best whiski in all bala bal' 
                        price = {99.00}
                        img = {'https://static.wixstatic.com/media/4413ad_64bc8531e41d42fba7ce371255118c1e~mv2.jpg/v1/fill/w_277,h_277,al_c,q_80,usm_0.66_1.00_0.01/4413ad_64bc8531e41d42fba7ce371255118c1e~mv2.webp'} 
                        rating = {5}/>
                     </div>
                     <div className='home_row'>
                  <Prod
                  id ='101'
                  title='Condimento Balsamico Pure'
                  disc ='the best whiski in all bala bal' 
                  price = {200.00}
                  img = {'https://static.wixstatic.com/media/4413ad_6411ddc345364e79963ece5836b84e01~mv2.png/v1/fill/w_375,h_281,al_c,q_85,usm_0.66_1.00_0.01/4413ad_6411ddc345364e79963ece5836b84e01~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='102'
                        title='Valrhona Collection'
                        disc ='A stunning release from Jura.' 
                        price = {210.00}
                        img = {'https://static.wixstatic.com/media/4413ad_ea80e6a9bdb64f339c92bb303fcc6b7e~mv2.jpg/v1/fill/w_296,h_281,al_c,q_80,usm_0.66_1.00_0.01/4413ad_ea80e6a9bdb64f339c92bb303fcc6b7e~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '103'
                        title='Condimento Balsamico Red'
                        disc ='the best whiski in all bala bal' 
                        price = {375.00}
                        img = {'https://static.wixstatic.com/media/4413ad_198422f312924a1eb9e0c572235e9a43~mv2.jpeg/v1/fill/w_301,h_281,al_c,q_80,usm_0.66_1.00_0.01/4413ad_198422f312924a1eb9e0c572235e9a43~mv2.webp'} 
                        rating = {5}/>
                                  <Prod
                  id ='103'
                  title='Condimento Balsamico Rose'
                  disc ='the best whiski in all bala bal' 
                  price = {190.99}
                  img = {'https://static.wixstatic.com/media/4413ad_e85d8f225829431db70e2d798df945fd~mv2.jpg/v1/fill/w_281,h_281,al_c,q_80,usm_0.66_1.00_0.01/4413ad_e85d8f225829431db70e2d798df945fd~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='104'
                        title='Hamlet Assortiment'
                        disc ='A stunning release from Jura.' 
                        price = {759.5}
                        img = {'https://static.wixstatic.com/media/4413ad_4c5ed215bb4545af93ec1116e193d7f7~mv2.png/v1/fill/w_208,h_281,al_c,q_85,usm_0.66_1.00_0.01/4413ad_4c5ed215bb4545af93ec1116e193d7f7~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '105'
                        title='Cruzilles Pates de fruits'
                        disc ='the best whiski in all bala bal' 
                        price = {99.00}
                        img = {'https://static.wixstatic.com/media/4413ad_86dbda739d244557802ac1f6c46cf5c8~mv2.jpg/v1/fill/w_384,h_281,al_c,q_80,usm_0.66_1.00_0.01/4413ad_86dbda739d244557802ac1f6c46cf5c8~mv2.webp'} 
                        rating = {5}/>
                     </div>
                      <div className='home_row'>
                  <Prod
                  id ='313'
                  title="Michter's  N.700"
                  disc ='the best whiski in all bala bal' 
                  price = {379.00}
                  img = {'https://static.wixstatic.com/media/4413ad_2d67258625374347bee00269ada5887a~mv2.jpg/v1/fill/w_225,h_281,al_c,q_80,usm_0.66_1.00_0.01/4413ad_2d67258625374347bee00269ada5887a~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='314'
                        title='Kohiba 5l'
                        disc ='A stunning release from Jura.' 
                        price = {60.00}
                        img = {'https://static.wixstatic.com/media/4413ad_d88a0fa3992749d9ad5c8f4d72bd60fa~mv2.jpg/v1/fill/w_421,h_281,al_c,q_80,usm_0.66_1.00_0.01/4413ad_d88a0fa3992749d9ad5c8f4d72bd60fa~mv2.webp'} 
                        rating = {3}/>
                  <Prod 
                        id = '315'
                        title='VILIGAR CN 5'
                        disc ='the best whiski in all bala bal' 
                        price = {20.00}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw057df3d0/images/cigars/Q/--QUCTOR.png?sw=210&sh=210&sm=fit&q=80'} 
                        rating = {3}/>
                                  <Prod
                  id ='316'
                  title='Batch No.10'
                  disc ='the best whiski in all bala bal' 
                  price = {50.00}
                  img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw6a5533ce/images/seriouscigars/1508855390820-0.png?sw=210&sh=210&sm=fit&q=80'} 
                  rating = {3}/>
                  <Prod 
                        id ='317'
                        title='M&M No.9'
                        disc ='A stunning release from Jura.' 
                        price = {29.5}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw847c4009/images/seriouscigars/1507065802156-0.jpeg?sw=210&sh=210&sm=fit&q=80'} 
                        rating = {3}/>
                  <Prod 
                        id = '318'
                        title='WxPas de MOno'
                        disc ='the best whiski in all bala bal' 
                        price = {250.00}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwd5145cf6/images/seriouscigars/1509112444228-1.png?sw=210&sh=210&sm=fit&q=80p'} 
                        rating = {5}/>
                     </div>
                     </div>
                     
                     </div> 
         

  )
}

export default Gifts


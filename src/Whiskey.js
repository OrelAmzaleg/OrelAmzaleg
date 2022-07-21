import React from 'react'

import './Whiskey.css'
import Prod from './Prod';

function Whiskey() {
  return (
    <div className="home">
 
      <div className="home_container">
           
            <div className = "home_banner"> 
              <img className="home_Img" src="https://img1.goodfon.com/wallpaper/nbig/2/4e/stakan-viski-butylka-sigara.jpg" alt=''/>
              <div className='whiskey_text'><p>ENJOY PREMIUM</p><p> WHISKEY</p></div>
                   </div>           
                   <div className='home_prodsRev'>
                  <h1>W h i s k e y</h1>
           
                  <p>A type of distilled alcoholic beverage made from fermented grain mash. Various grains </p>
                        <p> are used for different varieties, including barley, corn, rye, and wheat.</p>
                        <p>Whisky is typically aged in wooden casks, which are often old sherry casks or may also be made of charred white oak</p>
                       <p></p>
                        <h5>E N J O Y</h5>
            </div>
         
                        <div className='home_prodsRev'>
                          <h1>Our Exclusive Bottles</h1>
                        </div>
          
           
                  <div className='home_row'>
                  <Prod
                  id ='201'
                  title="Michter's Unblended American 700ml"
                  disc ='the best whiski in all bala bal' 
                  price = {379.00}
                  img = {'https://static.wixstatic.com/media/4413ad_46f5087ab5e448a78eb15920800d11ab~mv2.jpg/v1/fill/w_303,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_46f5087ab5e448a78eb15920800d11ab~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='202'
                        title='Michters Celebration 2019 700ml'
                        disc ='A stunning release from Jura.' 
                        price = {50000.00}
                        img = {'https://static.wixstatic.com/media/4413ad_2ed07efa0f694c06ba3507f97ec00015~mv2.jpg/v1/fill/w_227,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_2ed07efa0f694c06ba3507f97ec00015~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '203'
                        title='Michters Bourbon 700ml'
                        disc ='the best whiski in all bala bal' 
                        price = {375.00}
                        img = {'https://static.wixstatic.com/media/4413ad_f3dd6a06f2c1424980a43336603213d3~mv2.jpg/v1/fill/w_303,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_f3dd6a06f2c1424980a43336603213d3~mv2.webp'} 
                        rating = {5}/>
                                  <Prod
                  id ='204'
                  title='Kentuck Owl Batch No.10'
                  disc ='the best whiski in all bala bal' 
                  price = {2500.00}
                  img = {'https://static.wixstatic.com/media/4413ad_5349a92f3b464a3c8881722657108338~mv2.jpg/v1/fill/w_152,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_5349a92f3b464a3c8881722657108338~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='205'
                        title='Michters 25 years'
                        disc ='A stunning release from Jura.' 
                        price = {32000.5}
                        img = {'https://static.wixstatic.com/media/4413ad_81046e47505b42f7b5158b6ed4e4171d~mv2.jpg/v1/fill/w_90,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_81046e47505b42f7b5158b6ed4e4171d~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '206'
                        title='Wx Pates de fruits'
                        disc ='the best whiski in all bala bal' 
                        price = {990.00}
                        img = {'https://static.wixstatic.com/media/4413ad_845811f725db488a82b0fb24979e4159~mv2.jpg/v1/fill/w_227,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_845811f725db488a82b0fb24979e4159~mv2.webp'} 
                        rating = {5}/>
                     </div>
                     <div className='home_row'>
                  <Prod
                  id ='201'
                  title="Michter's Unblended American 700ml"
                  disc ='the best whiski in all bala bal' 
                  price = {379.00}
                  img = {'https://static.wixstatic.com/media/4413ad_46f5087ab5e448a78eb15920800d11ab~mv2.jpg/v1/fill/w_303,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_46f5087ab5e448a78eb15920800d11ab~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='202'
                        title='Michters Celebration 2019 700ml'
                        disc ='A stunning release from Jura.' 
                        price = {50000.00}
                        img = {'https://static.wixstatic.com/media/4413ad_2ed07efa0f694c06ba3507f97ec00015~mv2.jpg/v1/fill/w_227,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_2ed07efa0f694c06ba3507f97ec00015~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '203'
                        title='Michters Bourbon 700ml'
                        disc ='the best whiski in all bala bal' 
                        price = {375.00}
                        img = {'https://static.wixstatic.com/media/4413ad_f3dd6a06f2c1424980a43336603213d3~mv2.jpg/v1/fill/w_303,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_f3dd6a06f2c1424980a43336603213d3~mv2.webp'} 
                        rating = {5}/>
                                  <Prod
                  id ='204'
                  title='Kentuck Owl Batch No.10'
                  disc ='the best whiski in all bala bal' 
                  price = {2500.00}
                  img = {'https://static.wixstatic.com/media/4413ad_5349a92f3b464a3c8881722657108338~mv2.jpg/v1/fill/w_152,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_5349a92f3b464a3c8881722657108338~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='205'
                        title='Michters 25 years'
                        disc ='A stunning release from Jura.' 
                        price = {32000.5}
                        img = {'https://static.wixstatic.com/media/4413ad_81046e47505b42f7b5158b6ed4e4171d~mv2.jpg/v1/fill/w_90,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_81046e47505b42f7b5158b6ed4e4171d~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '206'
                        title='Wx Pates de fruits'
                        disc ='the best whiski in all bala bal' 
                        price = {990.00}
                        img = {'https://static.wixstatic.com/media/4413ad_845811f725db488a82b0fb24979e4159~mv2.jpg/v1/fill/w_227,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_845811f725db488a82b0fb24979e4159~mv2.webp'} 
                        rating = {5}/>
                     </div>
                      <div className='home_row'>
                  <Prod
                  id ='201'
                  title="Michter's Unblended American 700ml"
                  disc ='the best whiski in all bala bal' 
                  price = {379.00}
                  img = {'https://static.wixstatic.com/media/4413ad_46f5087ab5e448a78eb15920800d11ab~mv2.jpg/v1/fill/w_303,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_46f5087ab5e448a78eb15920800d11ab~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='202'
                        title='Michters Celebration 2019 700ml'
                        disc ='A stunning release from Jura.' 
                        price = {50000.00}
                        img = {'https://static.wixstatic.com/media/4413ad_2ed07efa0f694c06ba3507f97ec00015~mv2.jpg/v1/fill/w_227,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_2ed07efa0f694c06ba3507f97ec00015~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '203'
                        title='Michters Bourbon 700ml'
                        disc ='the best whiski in all bala bal' 
                        price = {375.00}
                        img = {'https://static.wixstatic.com/media/4413ad_f3dd6a06f2c1424980a43336603213d3~mv2.jpg/v1/fill/w_303,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_f3dd6a06f2c1424980a43336603213d3~mv2.webp'} 
                        rating = {5}/>
                                  <Prod
                  id ='204'
                  title='Kentuck Owl Batch No.10'
                  disc ='the best whiski in all bala bal' 
                  price = {2500.00}
                  img = {'https://static.wixstatic.com/media/4413ad_5349a92f3b464a3c8881722657108338~mv2.jpg/v1/fill/w_152,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_5349a92f3b464a3c8881722657108338~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='205'
                        title='Michters 25 years'
                        disc ='A stunning release from Jura.' 
                        price = {32000.5}
                        img = {'https://static.wixstatic.com/media/4413ad_81046e47505b42f7b5158b6ed4e4171d~mv2.jpg/v1/fill/w_90,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_81046e47505b42f7b5158b6ed4e4171d~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '206'
                        title='Wx Pates de fruits'
                        disc ='the best whiski in all bala bal' 
                        price = {990.00}
                        img = {'https://static.wixstatic.com/media/4413ad_845811f725db488a82b0fb24979e4159~mv2.jpg/v1/fill/w_227,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_845811f725db488a82b0fb24979e4159~mv2.webp'} 
                        rating = {5}/>
                     </div>
                     </div>
                     </div> 
         

  )
}

export default Whiskey

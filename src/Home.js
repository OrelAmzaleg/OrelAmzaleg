import React from 'react'
import "./Home.css";
import Prod from './Prod';
import { useNavigate } from 'react-router-dom';

function Home() {
      const navigate = useNavigate();
  return (
    <div className="home">
 
      <div className="home_container">
           
            <div className = "home_banner"> 
              <img className="home_Img" src="https://static.wixstatic.com/media/e9eb3f_3ef94bcf7819425490d93c6637cf1fac~mv2.png/v1/fill/w_1903,h_879,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e9eb3f_3ef94bcf7819425490d93c6637cf1fac~mv2.png" alt=''/>
              <div className='home_text'><p>FINE WINE & TOBACCO</p> 
              <div className='home_text3'>Luxury shop for the wine lovers</div>
              <div className='home_text2'><p> At GENTELMAN you can find the best israeli and international wines, 
                         fine chocolates and primume Cigars</p></div>
                         </div>
                   </div>           
                   <div className='home_prodsRev'>
                  <h1>G i f t s</h1>
                  
                  <p>Whether you’re looking for personal gourmet gifts or employee appreciation gifts, our gift boxes and wine leave</p>
                        <p>  a lasting impression. Choose from the best, carefully selected Israeli and international fine wines,</p>
                        <p>fine chocolates. 24 hour delivery all over Israel.</p>
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
                        <div className='home_loadmore'><button onClick={e=>navigate('/giftspage')}>Load More</button></div>
                  


                  <div className='home_divbanner'>
                   <img src='https://i.postimg.cc/L54Ts4Br/mid-banner.jpg'alt=''/>                       
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
                     <div className='home_loadmore'><button onClick={e=>navigate('/whiskeypage')}>Load More</button></div>
                     </div>
                     </div> 
         

  )
}

export default Home

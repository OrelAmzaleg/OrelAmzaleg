import React from 'react'

import Prod from './Prod';
import "./Wine.css";

function Wine() {
  return (
    <div className="home">
 
      <div className="home_container">
           
            <div className = "home_banner"> 
              <img className="home_Img" src="https://wallpapercave.com/wp/wp2878172.jpg" alt=''/>
              <div className='text'><p>LUXURY</p><p> WINE</p></div>
                   </div>           
                   <div className='home_prodsRev'>
                  <h1>W i n e</h1>
           
                  <p>Wine is an alcoholic drink typically made from fermented grapes. </p>
                        <p> Yeast consumes the sugar in the grapes and converts it to ethanol and carbon dioxide, releasing heat in the process.</p>
                        <p>Different varieties of grapes and strains of yeasts are major factors in different styles of wine.</p>
                       <p></p>
                        <h5>E N J O Y</h5>
            </div>
         
                        <div className='home_prodsRev'>
                          <h1>Our Unique Bottles</h1>
                        </div>
          
           
                  <div className='home_row'>
                  <Prod
                  id ='401'
                  title="Cabarne Sovinyone 2012 700ml"
                  disc ='the best whiski in all bala bal' 
                  price = {500.00}
                  img = {'https://static.wixstatic.com/media/4413ad_d3f44895e7b74c1c9e5d59dca272e03f~mv2.jpg/v1/fill/w_217,h_429,al_c,q_80,usm_0.66_1.00_0.01/4413ad_d3f44895e7b74c1c9e5d59dca272e03f~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='402'
                        title='Petit Bordo 2001'
                        disc ='A stunning release from Jura.' 
                        price = {700.00}
                        img = {'https://static.wixstatic.com/media/4413ad_f07073bc77fa4bf186b0076695029231~mv2.png/v1/fill/w_144,h_429,al_c,q_85,usm_0.66_1.00_0.01/4413ad_f07073bc77fa4bf186b0076695029231~mv2.webp'} 
                        rating = {4}/>
                  <Prod 
                        id = '403'
                        title='Shirz 2018'
                        disc ='the best whiski in all bala bal' 
                        price = {375.00}
                        img = {'https://static.wixstatic.com/media/4413ad_9f4533f4c8944ef8b0524aa90b7b1d94~mv2.png/v1/fill/w_112,h_429,al_c,q_85,usm_0.66_1.00_0.01/4413ad_9f4533f4c8944ef8b0524aa90b7b1d94~mv2.webp'} 
                        rating = {4}/>
                                  <Prod
                  id ='404'
                  title='Merlo 2005'
                  disc ='the best whiski in all bala bal' 
                  price = {2500.00}
                  img = {'https://static.wixstatic.com/media/4413ad_ff064bbc6d1541d2842f90df8abaa881~mv2.png/v1/fill/w_110,h_429,al_c,q_85,usm_0.66_1.00_0.01/4413ad_ff064bbc6d1541d2842f90df8abaa881~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='405'
                        title='Soviniun 1995'
                        disc ='A stunning release from Jura.' 
                        price = {32000.5}
                        img = {'https://static.wixstatic.com/media/4413ad_f786bad0c5284f8ca2364544ab316a53~mv2.jpg/v1/fill/w_179,h_429,al_c,q_80,usm_0.66_1.00_0.01/4413ad_f786bad0c5284f8ca2364544ab316a53~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '406'
                        title='Yatir 2016'
                        disc ='the best whiski in all bala bal' 
                        price = {150.00}
                        img = {'https://static.wixstatic.com/media/4413ad_30bb5fd63df543b2b3a4eaf2ff05e073~mv2.png/v1/fill/w_429,h_429,al_c,q_85,usm_0.66_1.00_0.01/4413ad_30bb5fd63df543b2b3a4eaf2ff05e073~mv2.webp'} 
                        rating = {4}/>
                     </div>
                     <div className='home_row'>
                  <Prod
                  id ='407'
                  title="MEara Merlo 2020"
                  disc ='the best whiski in all bala bal' 
                  price = {50.00}
                  img = {'https://static.wixstatic.com/media/4413ad_508df8ff55bc4877a55207db92a7abc5~mv2.jpg/v1/fill/w_429,h_429,al_c,q_80,usm_0.66_1.00_0.01/4413ad_508df8ff55bc4877a55207db92a7abc5~mv2.webp'} 
                  rating = {3}/>
                  <Prod 
                        id ='408'
                        title='Teperberg 2014'
                        disc ='A stunning release from Jura.' 
                        price = {70.00}
                        img = {'https://static.wixstatic.com/media/4413ad_71e492dbff1a4fdd8a50478b3f91371b~mv2.jpg/v1/fill/w_126,h_429,al_c,q_80,usm_0.66_1.00_0.01/4413ad_71e492dbff1a4fdd8a50478b3f91371b~mv2.webp'} 
                        rating = {4}/>
                  <Prod 
                        id = '409'
                        title='Kariniyan 2000'
                        disc ='the best whiski in all bala bal' 
                        price = {375.00}
                        img = {'https://static.wixstatic.com/media/4413ad_ab7b147f657d4e5d8c40a85f100fc1e3~mv2.png/v1/fill/w_138,h_429,al_c,q_85,usm_0.66_1.00_0.01/4413ad_ab7b147f657d4e5d8c40a85f100fc1e3~mv2.webp'} 
                        rating = {5}/>
                                  <Prod
                  id ='410'
                  title='Bordo Merlo 2005'
                  disc ='the best whiski in all bala bal' 
                  price = {2500.00}
                  img = {'https://static.wixstatic.com/media/4413ad_12f45095b98c4388bc5c31ecefc54933~mv2.png/v1/fill/w_121,h_429,al_c,q_85,usm_0.66_1.00_0.01/4413ad_12f45095b98c4388bc5c31ecefc54933~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='411'
                        title='Shiraz Tirosh'
                        disc ='A stunning release from Jura.' 
                        price = {32.5}
                        img = {'https://static.wixstatic.com/media/4413ad_81046e47505b42f7b5158b6ed4e4171d~mv2.jpg/v1/fill/w_90,h_303,al_c,q_80,usm_0.66_1.00_0.01/4413ad_81046e47505b42f7b5158b6ed4e4171d~mv2.webp'} 
                        rating = {3}/>
                  <Prod 
                        id = '412'
                        title='Pates de fruits'
                        disc ='the best whiski in all bala bal' 
                        price = {990.00}
                        img = {'https://static.wixstatic.com/media/4413ad_e671cbbcb6bc4561a218d1d74f3959a0~mv2.jpg/v1/fill/w_322,h_429,al_c,q_80,usm_0.66_1.00_0.01/4413ad_e671cbbcb6bc4561a218d1d74f3959a0~mv2.webp'} 
                        rating = {5}/>
                     </div>
                     <div className='home_row'>
                  <Prod
                  id ='413'
                  title="CASTEL 2000"
                  disc ='the best whiski in all bala bal' 
                  price = {3709.00}
                  img = {'https://static.wixstatic.com/media/4413ad_3693cb1476b84ee199c7a9405291c231~mv2.png/v1/fill/w_134,h_429,al_c,q_85,usm_0.66_1.00_0.01/4413ad_3693cb1476b84ee199c7a9405291c231~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='414'
                        title='Kabarne Soviniyon 1988'
                        disc ='A stunning release from Jura.' 
                        price = {50000.00}
                        img = {'https://static.wixstatic.com/media/4413ad_aa997f7865d147ef81fe605c2ceb2182~mv2.jpg/v1/fill/w_236,h_429,al_c,q_80,usm_0.66_1.00_0.01/4413ad_aa997f7865d147ef81fe605c2ceb2182~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '415'
                        title='Merlo 2022'
                        disc ='the best whiski in all bala bal' 
                        price = {20.00}
                        img = {'https://static.wixstatic.com/media/4413ad_ea8a64f4e5fc48739377fa7d9cfaed89.jpeg/v1/fill/w_270,h_405,al_c,q_80,usm_0.66_1.00_0.01/4413ad_ea8a64f4e5fc48739377fa7d9cfaed89.webp'} 
                        rating = {3}/>
                                  <Prod
                  id ='416'
                  title=' Owl  No.10'
                  disc ='the best whiski in all bala bal' 
                  price = {2500.00}
                  img = {'https://static.wixstatic.com/media/4413ad_e88096582ed84f7c8d24bff1d1269bbc~mv2.png/v1/fill/w_140,h_429,al_c,q_85,usm_0.66_1.00_0.01/4413ad_e88096582ed84f7c8d24bff1d1269bbc~mv2.webp'} 
                  rating = {5}/>
                  <Prod 
                        id ='417'
                        title='Michters 25 years'
                        disc ='A stunning release from Jura.' 
                        price = {32000.5}
                        img = {'https://static.wixstatic.com/media/4413ad_d5b9fd0b8ff9473f8a93e6602aaca31f~mv2.png/v1/fill/w_360,h_429,al_c,q_85,usm_0.66_1.00_0.01/4413ad_d5b9fd0b8ff9473f8a93e6602aaca31f~mv2.webp'} 
                        rating = {5}/>
                  <Prod 
                        id = '418'
                        title='Castel de fruits 1988'
                        disc ='the best whiski in all bala bal' 
                        price = {19990.00}
                        img = {'https://static.wixstatic.com/media/4413ad_0a3c56c28d2c42e58e107b6f097c8958~mv2.jpg/v1/fill/w_285,h_429,al_c,q_80,usm_0.66_1.00_0.01/4413ad_0a3c56c28d2c42e58e107b6f097c8958~mv2.webp'} 
                        rating = {5}/>
                     </div>
                     </div>
                     </div> 
         

  )
}

export default Wine

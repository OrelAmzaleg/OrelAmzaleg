import React from 'react'
import './Cigar.css'
import Prod from './Prod';

function Cigars() {
  return (
    <div className="home">
 
      <div className="home_container">
           
            <div className = "home_banner"> 
              <img className="home_Img" src="https://i.pinimg.com/originals/63/f1/a1/63f1a189968c46312954062668786a5c.jpg" alt=''/>
              <div className='cigar_text'><p>CUBAN CIGARS</p></div>
                   </div>           
                   <div className='home_prodsRev'>
                  <h1>C i g a r s</h1>
           
                  <p>A type of distilled alcoholic beverage made from fermented grain mash. Various grains </p>
                        <p> are used for different varieties, including barley, corn, rye, and wheat.</p>
                        <p>Whisky is typically aged in wooden casks, which are often old sherry casks or may also be made of charred white oak</p>
                       <p></p>
                        <h5>E N J O Y</h5>
                      </div>
         
                        <div className='home_prodsRev'>
                          <h1>100% CUBAN</h1>
                        </div>
          
                  <div className='home_row'>
                  <Prod
                  id ='301'
                  title="Monte Christo No.4"
                  disc ='the best whiski in all bala bal' 
                  price = {50.00}
                  img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwab304d04/images/cigars/R/RPWCC.png?sw=210&sh=210&sm=fit&q=80'} 
                  rating = {4}/>
                  <Prod 
                        id ='302'
                        title='Monte Christo No.2'
                        disc ='A stunning release from Jura.' 
                        price = {500.00}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw4dc65099/images/seriouscigars/1512165116231-0.png?sw=210&sh=210&sm=fit&q=80'} 
                        rating = {5}/>
                  <Prod 
                        id = '303'
                        title='Monte Christo No.5 Bourbon'
                        disc ='the best whiski in all bala bal' 
                        price = {375.00}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwd5470977/images/large/1513359214408-0.jpeg?sw=210&sh=210&sm=fit&q=80'} 
                        rating = {5}/>
                                  <Prod
                  id ='304'
                  title='Kentuck Batch No.10'
                  disc ='the best whiski in all bala bal' 
                  price = {25.00}
                  img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw3f9db146/images/jrcigars/ALE11.jpg?sw=210&sh=210&sm=fit&q=80'} 
                  rating = {3}/>
                  <Prod 
                        id ='305'
                        title='KOHIBA'
                        disc ='A stunning release from Jura.' 
                        price = {55.5}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwd319d777/images/cigars/M/MXJUA20P.png?sw=210&sh=210&sm=fit&q=80'} 
                        rating = {5}/>
                  <Prod 
                        id = '306'
                        title='Wxs TRINADAD'
                        disc ='the best whiski in all bala bal' 
                        price = {990.00}
                        img = {'https://www.cigars.com/on/demandware.static/-/Sites-siteCatalog_Cigars/default/dwc70cad42/images/new_top_brand/drew-estate.png'} 
                        rating = {5}/>
                     </div>
                     <div className='home_row'>
                  <Prod
                  id ='307'
                  title='DAVIDOFF No.2'
                  disc ='the best whiski in all bala bal' 
                  price = {80.00}
                  img = {'https://www.cigars.com/on/demandware.static/-/Sites-siteCatalog_Cigars/default/dw4e90df8d/images/new_top_brand/montecristo.png'} 
                  rating = {4}/>
                  <Prod 
                        id ='308'
                        title='Celebration 2019'
                        disc ='A stunning release from Jura.' 
                        price = {50.00}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw79ea8720/images/cigars/A/Alec%20Bradley/American%20Classic%20Blend/ABACC_box_orb_1.png?sw=210&sh=210&sm=fit&q=80'} 
                        rating = {5}/>
                  <Prod 
                        id = '309'
                        title='ROMEO AND JULIETE '
                        disc ='the best whiski in all bala bal' 
                        price = {75.00}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwc745c406/images/cigars/A/AU107NG.png?sw=210&sh=210&sm=fit&q=80'} 
                        rating = {4}/>
                                  <Prod
                  id ='310'
                  title='Kentuck Owl'
                  disc ='the best whiski in all bala bal' 
                  price = {25.00}
                  img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw13327457/images/seriouscigars/1512164616938-0.png?sw=210&sh=210&sm=fit&q=80'} 
                  rating = {3}/>
                  <Prod 
                        id ='311'
                        title='Michters 25'
                        disc ='A stunning release from Jura.' 
                        price = {50.5}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw4306e0bd/images/cigars/K/KRCT660%201.png?sw=210&sh=210&sm=fit&q=80'} 
                        rating = {5}/>
                  <Prod 
                        id = '312'
                        title='Wx Pates des'
                        disc ='the best whiski in all bala bal' 
                        price = {990.00}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw10db0938/images/cigars/F/FRECT_box_orb_1.png?sw=210&sh=210&sm=fit&q=80'} 
                        rating = {5}/>
                     </div>
                      <div className='home_row'>
                  <Prod
                  id ='313'
                  title="Michter's  N.700"
                  disc ='the best whiski in all bala bal' 
                  price = {379.00}
                  img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwf4f7846a/images/cigars/Q/-QOK19KL_box_orb_1.png?sw=210&sh=210&sm=fit&q=80'} 
                  rating = {5}/>
                  <Prod 
                        id ='314'
                        title='Kohiba 5l'
                        disc ='A stunning release from Jura.' 
                        price = {60.00}
                        img = {'https://www.cigars.com/dw/image/v2/BCZK_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwb2f9850d/images/cigars/M/ms1.png?sw=210&sh=210&sm=fit&q=80'} 
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

export default Cigars

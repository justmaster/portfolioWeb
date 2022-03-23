import React, {useEffect} from 'react'
import Button from '../../Buttons/hoverbutton'
import { Flip, gsap } from 'gsap/all'
import "./index.css"
import { useIsLowerThanMedium } from '../../BackgroundDivs/responsiveControl'


const TaxiCard = ({logo, svg, primary_color, secondary_color, detailsHandle, activeCard, toggleDetails}) => {

  const ExpandCard = () => {
    activeCard === "taxi" 
    ? 
    ResponsiveDetailCall()
    : 
    toggleDetails()
  // eslint-disable-next-line
  console.log(activeCard)
}

  useEffect(() => {
    activeCard === "taxi" 
    ?
    ExpandCard()
    :
    console.log("notactivetaxi")
  // eslint-disable-next-line 
  }, [activeCard]);
  
  const isMedium = useIsLowerThanMedium();

  const ResponsiveDetailCall = () => {
    isMedium ? DetailsChange() : SmallerDetailsChange()
  }
  


      const DetailsChange = async() => {
        const oldContainer = document.querySelector('.expanded_blue');
        const state = Flip.getState(oldContainer);


        gsap.to(oldContainer, {
            borderRadius: "0px",
            delay: 0.5,
          });
        gsap.set(oldContainer, {
            position: 'absolute', 
            opacity: 1,
            width: "110vw", 
            height: "110vh", 
            zIndex: '4',
          });
          gsap.set(oldContainer, {
            marginTop: '4.5%',
            ease: "power1.inOut",
          });
          Flip.from(state, { 
            duration: 1,
            nested: true,
            ease: "power1.inOut",
            absolute: true,
            });
            detailsHandle()
      }

      
      const SmallerDetailsChange = async() =>  {

        const oldContainer = document.querySelector('.expanded_blue');
        const state = Flip.getState(oldContainer);
        gsap.to(oldContainer, {
            borderRadius: "0px",
            delay: 0.5,
          }); 
        gsap.set(oldContainer, {
            position: 'absolute', 
            opacity: 1,
            width: "102vw", 
            height: "102vh",  
            zIndex: '4',
          });
          gsap.set(oldContainer, {
            marginTop: '0%',
            marginLeft: "13.5%",
            ease: "power1.inOut",
          });
    
          Flip.from(state, {
            duration: 1,
            nested: true,
            ease: "power1.inOut",
            absolute: true,
            });
            detailsHandle()
      }

      const CloseDetails = async() => {
        const oldContainer = document.querySelector('.expanded_blue');
        const state = Flip.getState(oldContainer);
        gsap.set(oldContainer, {
          width: "calc(1rem + 15vw)",
          height: "calc(1rem + 15vw)",
          borderRadius: "70px",
          marginTop: '0%',
          marginLeft: '0%',
          zIndex: '4',
      });
      

      Flip.from(state, {
        duration: 1,
        nested: true,
        ease: "power1.inOut",
        absolute: true,
        onComplete: () => gsap.set(oldContainer, {opacity: "0", zIndex: "-1"})
        });
        detailsHandle()
        toggleDetails()
      }

  const backstyle = {
    backgroundImage: `linear-gradient(to bottom left, ${primary_color} 40%, ${secondary_color} 115%)`
  }
  
  return (
      <div className="TX_main_container">
          <div className="TX_card_container">
                      <div className='expanded_blue' style={backstyle}>
                      {activeCard === "taxi" ? 
                          <div className='TX_button_close'> 
                            <Button text="CLOSE" fun={CloseDetails}/> 
                          </div>
                            : 
                            null
                      }



                      </div>
                      {activeCard === "taxi" ?  null : 
                        <div className="container">
                            <div className="card">
                                <div className="front">
                                    <img src={logo} alt="logo" className="logo"></img>
                                </div>
                                <div className="back" style={backstyle}>
                                  <img src={svg} alt="" className="pp"  />
                                  <Button text="See More" fun={ExpandCard}/>
                                </div>
                            </div>
                        </div>
                      }
      </div>

                  <div className="TX_titleContainer">
                    <div className="underline"></div>
                    <h2 className="title_text">Tbilisi Taxi</h2>
                    <h2 className="title_text_bigger">Service</h2>
                  </div>
                  
                      
      </div>

            

            


  )
}

export default TaxiCard;




















        
        
        
        
        
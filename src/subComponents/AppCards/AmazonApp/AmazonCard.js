import React, {useEffect} from 'react'
import Button from '../../Buttons/hoverbutton'
import CloseButton from '../../Buttons/CloseButton/CloseButton'
import { Flip, gsap } from 'gsap/all'
import { useIsLowerThanMedium } from '../../BackgroundDivs/responsiveControl'

import "./index.css"


const AmazonCard = ({logo, svg, primary_color, secondary_color, detailsHandle, activeCard, toggleDetails}) => {
  const isMedium = useIsLowerThanMedium();

  useEffect(() => {
    activeCard === "amazon" 
    ?
    ExpandCard()
    :
    console.log("h")
  // eslint-disable-next-line
  }, [activeCard]);


  useEffect(() => {
    activeCard === "amazon" ?

    ResponsiveDetailCall()
    :
    console.log(null)
  // eslint-disable-next-line
  }, [isMedium]);

  const ResponsiveDetailCall = () => {
    isMedium ? DetailsChange() : SmallerDetailsChange()
  }

  const ExpandCard = () => {
      activeCard === "amazon" 
      ? 
      
      ResponsiveDetailCall()
      : 
      toggleDetails()
  }



      const DetailsChange = async() =>  {

        const oldContainer = document.querySelector('.expanded');
        const state = Flip.getState(oldContainer);
        gsap.to(oldContainer, {
            borderRadius: "0px",
            delay: 0.5,
          }); 
        gsap.set(oldContainer, {
            position: 'absolute', 
            opacity: 1,
            width: "115vw", 
            height: "107vh",  
            zIndex: '4',
          });
          gsap.set(oldContainer, {
            marginTop: '4%',
            marginLeft: "55%",
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

        const oldContainer = document.querySelector('.expanded');
        const state = Flip.getState(oldContainer);
        gsap.to(oldContainer, {
            borderRadius: "0px",
            delay: 0.5,
          }); 
        gsap.set(oldContainer, {
            position: 'absolute', 
            opacity: 1,
            width: "104vw", 
            height: "105vh",  
            zIndex: '4',
          });
          gsap.set(oldContainer, {
            marginTop: '48%',
            marginLeft: "17%",
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
        const oldContainer = document.querySelector('.expanded');
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
      <div className="AM_main_container">
              <div className="AM_card_container">
                
                        <div className='expanded' style={backstyle} />

                      { activeCard === "amazon" ? 
                          <div className='AM_button_close'> 
                            <CloseButton  fun={CloseDetails}/> 
                          </div>
                      : 
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



                  <div className="AM_titleContainer">
                    <div className="underline"></div>
                    <h2 className="title_text">Amazon Clone</h2>
                    <h2 className="title_text_bigger">Ecommerce</h2>
                  </div>
                  
                      
      </div>

            

            


  )
}

export default AmazonCard;
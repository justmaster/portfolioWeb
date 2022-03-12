import React, {useState, useEffect, useRef} from 'react'
import Button from '../../hoverbutton'
import CloseButton from '../../CloseButton/CloseButton'
import { Flip, gsap } from 'gsap/all'
import "./index.css"


const AmazonCard = ({logo, svg, primary_color, secondary_color, detailsHandle, activeCard, toggleDetails}) => {

  useEffect(() => {
    activeCard === "amazon" 
    ?
    ExpandCard()
    :
    console.log("h")
  }, [activeCard]);
  
      const ExpandCard = () => {
          activeCard === "amazon" 
          ? 
          DetailsChange() 
          : 
          toggleDetails()
        console.log(activeCard)
      }


      const DetailsChange = async() => {

        const oldContainer = document.querySelector('.expanded');
        const state = Flip.getState(oldContainer);


        gsap.to(oldContainer, {
            borderRadius: "10px",
            borderRadius: "0px",
            delay: 0.5,
          }); 
        gsap.set(oldContainer, {
            position: 'absolute', 
            opacity: 1,
            width: "115vw", 
            height: "107vh", 
            // width: "calc(60rem + 40vw)", 
            // height: "calc(30rem + 40vw)", 
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
      <div class="AM_main_container">
              <div class="AM_card_container">
                
                        <div class='expanded' style={backstyle}></div>
{/*                         
                        {activeCard === "amazon" 
                            ? 

                            : 
                                null
                            } */}


                      { activeCard === "amazon" ? 
                                                    <div className='AM_button_close'> 
                                                    <CloseButton  fun={CloseDetails}/> 
                                                  </div>
                      : 
                        <div class="container">
                            <div class="card">
                                <div class="front">
                                    <img src={logo} alt="logo" className="logo"></img>
                                </div>
                                <div class="back" style={backstyle}>
                                  <img src={svg} alt="" class="pp"  />
                                  <Button text="See More" fun={ExpandCard}/>
                                </div>
                            </div>
                        </div>

                      }
              </div>



                  <div className="AM_titleContainer">
                    <div className="underline"></div>
                    <h2 className="title_text">Test</h2>
                    <h2 className="title_text_bigger">Test</h2>
                  </div>
                  
                      
      </div>

            

            


  )
}

export default AmazonCard;
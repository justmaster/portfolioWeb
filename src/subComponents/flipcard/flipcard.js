import React, {useState, useEffect} from 'react'

import Button from '../Buttons/hoverbutton'

import { Flip, gsap } from 'gsap/all'

import "./index.css"

export default function Flipcard({applogo, primary_color, secondary_color, link, svg, apptype, appname}) {
	const [expanded, setExpanded] = useState(false)
	
	const mystyle = {
		backgroundImage: `linear-gradient(to bottom left, ${primary_color} 40%, ${secondary_color} 115%)`
	}

	const cardStyle = {
		backgroundImage: expanded ? null : `url(${applogo})`,
	}

	const DetailsChange = () => {

		const card = document.querySelector('.card');
		const state = Flip.getState(card);
		gsap.set(card, 
			{	position: 'absolute', 
				width: "100%", 
				height: "100%",
				backgroundColor: primary_color, 
				zIndex: 50,
		});
		
		Flip.from(state, {
			duration: 0.5,
			ease: "power1.inOut",
			absolute: true,
	});
	setExpanded(true)

	}


	
	useEffect(() => {

	})
	
    const [flipped, setFlipped] = useState(true)
	
    const flipcard = () => {
        setFlipped(!flipped)
    }

	


    return (
<div>
				<div className="card">
						<div className={flipped ? "card_inner" : "card__inner is-flipped"} onClick={flipcard}>
							<div className="card__face card__face--front" style={cardStyle}></div>
							<div className="card__face card__face--back"  style={{backgroundColor: {primary_color}}}>
								<div className="card__content" >
									<div className="card__header"  style={mystyle}>
										<img src={svg} alt="" className="pp" />
										<Button 
											fun={DetailsChange}
											// link={link} 
											text={"See More"} 
										/>
									</div>
								</div>
							</div>
						</div> 
				</div>

				{/* App Description */}
				{expanded ? <div /> :
				<div className="desc_container">
					<h className="desc">{apptype}</h>
					<h className="desc_name">{appname}</h>
				</div>
}
				
</div>
    )
}

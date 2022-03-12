import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';




const Box = styled(motion.li)`
width: calc(5rem + 2vw);
height: calc(4rem + 4vw);
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 1rem 2rem;
// margin-right: 2rem;
border-radius: 50px 50px 50px;
display: flex;
flex-direction: column;
justify-content: space-around;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;
cursor: pointer;

&:hover{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
}
`

const Title = styled.h2`
font-size: calc(0.4em + 0.6vw);
align-self: flex-start;
`

const Description = styled.h2`
display: flex;
// justify-content: center;

font-size: calc(0.4em + 0.4vw);
font-family: 'Karla', sans-serif;
font-weight: 400;
border-top: 1.5px solid ${props => props.theme.body};
border-bottom: 1.5px solid ${props => props.theme.body};
padding: 5px;

${Box}:hover &{
    border-top: 1.5px solid ${props => props.theme.text};
    border-bottom: 1.5px solid ${props => props.theme.text};

}


`

const Tags = styled.div`
// border-top: 1.5px solid ${props => props.theme.body};
display: flex;
// flex-wrap: wrap;
flex-direction: column;
${Box}:hover &{
    // border-top: 1.5px solid ${props => props.theme.text};
}
`

const Tag = styled.div`
margin-right: 1rem;
font-size: calc(0.8em + 0.2vw);

`

const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 1.3,
            delay: 0.8,
        }
    }
}

export const ToolsCard = ({toolTitle,  tags }) => {
    // const {id, name, description, tags, demo, github} = props.data;
    return (
        <Box variants={Item}>
            <Title>{toolTitle}</Title>
            <Description>
                <Tags>
                    {
                        tags.map((t) => {
                            return <Tag>#{t}</Tag>
                        })
                    }
                </Tags>
            </Description>
        </Box>
    )
}












// import React from 'react'
// import { NavLink} from 'react-router-dom';
// import styled from 'styled-components';
// import { Github } from '../components/AllSvgs';
// import { motion } from 'framer-motion';




// const Box = styled(motion.li)`
// width: 16rem;
// height: 40vh;
// background-color: ${props => props.theme.text};
// color: ${props => props.theme.body};
// padding: 1.5rem 2rem;
// margin-right: 7rem;
// border-radius: 0 50px 0;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// border: 1px solid ${props => props.theme.body}
// transition: all 0.2s ease;

// &:hover{
//     background-color: ${props => props.theme.body};
//     color: ${props => props.theme.text};
//     border: 1px solid ${props => props.theme.text};
// }
// `

// const Title = styled.h2`
// font-size: calc(1em + 0.5vw);
// `

// const Description = styled.h2`
// font-size: calc(0.8em + 0.5vw);
// font-family: 'Karla', sans-serif;
// font-weight: 500;
// `

// const Tags = styled.div`
// border-top: 2px solid ${props => props.theme.body};
// padding-top: 0.5rem;
// display: flex;
// flex-wrap: wrap;
// ${Box}:hover &{
//     border-top: 2px solid ${props => props.theme.text};
// }
// `

// const Tag = styled.div`
// margin-right: 1rem;
// font-size: calc(0.8em + 0.3vw);
// `

// const Footer = styled.footer`
// display: flex;
// justify-content: space-between;

// `

// const Link = styled(NavLink)`
// background-color: ${props => props.theme.body};
// color: ${props => props.theme.text};
// text-decoration: none;
// padding: 0.5rem calc(2rem + 2vw);
// border-radius: 0 0 0 50px;
// font-size: calc(1em + 0.5vw);

// ${Box}:hover &{
//     background-color: ${props => props.theme.text};
//     color: ${props => props.theme.body};
// }
// `


// const Git = styled(NavLink)`
// color: inherit;
// text-decoration: none;
// ${Box}:hover &{
//     &>*{
//         fill: ${props => props.theme.text};
//     }
// }
// `

// const Item = {
//     hidden:{
//         scale:0
//     },
//     show:{
//         scale:1,
//         transition: {
//             type: 'spring',
//             duration: 0.5
//         }
//     }
// }

// export const Card = (props) => {
//     const {id, name, description, tags, demo, github} = props.data;
//     return (
//         <Box key={id} variants={Item}>
//             <Title>{name}</Title>
//             <Description>
//                 {description}
//             </Description>
//             <Tags>
//                 {
//                     tags.map((t,id) => {
//                         return <Tag key={id}>#{t}</Tag>
//                     })
//                 }
//             </Tags>
//             <Footer>
//                 <Link to={{pathname: '${demo}'}} target="_blank">
//                     Visit
//                 </Link>
//                 <Git to={{pathname: '${github}'}} target="_blank">
//                     <Github width={30} height={30} />
//                 </Git>
//             </Footer>
//         </Box>
//     )
// }

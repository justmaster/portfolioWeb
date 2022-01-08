import React from 'react'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'

import { Blogs } from '../data/BlogData'
import BlogComponent from './BlogComponent.js'
import AnchorComponent from '../subComponents/Anchor'
import BigTitlte from '../subComponents/BigTitlte'
import { motion } from 'framer-motion'


const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
height: auto;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const container = {

    hidden: {opacity:0},
    show: {
        opacity:1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}




function BlogPage() {
    return (
        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity: 0,
            transition: {
                    type: 'spring',
                    duration: 0.5
                }
        }}
        
        >
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <AnchorComponent />
    <Center>

        <Grid>

            {
                Blogs.map(blog => {
                    return <BlogComponent key={blog.id} blog={blog} />
                })
            }
        </Grid>

    </Center>
    <BigTitlte text="BLOG" top="5rem" left="5rem" />

            </Container>
            
        </MainContainer>
    )
}

export default BlogPage

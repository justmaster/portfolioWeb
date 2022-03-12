
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import  Main  from "./components/Main"
import  AboutPage  from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import  WorkPage from "./components/WorkPage"
import MySkillsPage from "./components/MySkillsPage"
import {Route, Switch} from "react-router"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { AnimatePresence } from "framer-motion"
import SoundBar from "./subComponents/SoundBar"

import {gsap, DrawSVGPlugin, Flip} from 'gsap/all'
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(Flip);

function App() {
  const location = useLocation();
  return <>

    <GlobalStyle />

      <ThemeProvider theme={lightTheme}>

        <SoundBar />
        
      <AnimatePresence exitBeforeEnter>
        
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/blog" component={BlogPage}/>
          <Route exact path="/work" component={WorkPage}/>
          <Route exact path="/skills" component={MySkillsPage}/>
        </Switch>

      </AnimatePresence>

      </ThemeProvider>
    </>
    
    
}

export default App


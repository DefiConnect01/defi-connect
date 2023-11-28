import './App.css';
import {Zoom, Fade,Slide } from 'react-awesome-reveal';
import {Borrow, BorrowInput, Contact, Faq, GetToKnowUs, Hero, RoadMap, Solution, Team, Utilize, WhyDefi} from '../src/component/Common/home'



function App() {
  return (
   <div className='overflow-hidden'>
   <Fade direction='left'>
        <Hero/>
    </Fade>
   <Fade direction='right'>
      <Borrow/>
    </Fade>  
    <Slide direction='left'>
    <WhyDefi/>
    <BorrowInput/>
    </Slide>
    <Slide direction='right'>
    <Solution/>
    <Utilize/>
    </Slide> 
    <Zoom direction='down'>
    <GetToKnowUs/>
    </Zoom>   
    <Zoom direction='up'>
    <Team/>
    </Zoom>      
    <Slide direction='left'>
    <Faq/>
    </Slide>
    <Slide direction='left'>
    <RoadMap/>
    </Slide>
    
  
   <Contact/>
   
   
   </div>
  );
}

export default App;



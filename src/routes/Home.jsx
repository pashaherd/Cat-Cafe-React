import Nav from '../components/Nav'; 
import Page1 from '../components/Page1'; 
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import { useState, useEffect} from 'react'

const Home = () => {
  const [isHome, setHome] = useState(true);
  const [isBreeds, setBreeds] = useState(false);
  const [isGraph, setGraph] = useState(false);

  function handlePages(e){
    console.log('ran')
    const currentPage = e.target.id; 

    setHome(false); 
    setBreeds(false); 
    setGraph(false); 
    
    switch(currentPage){
      case 'b1':
        setHome(true)
        console.log(isHome)
        break; 
      case 'b2':
        setBreeds(true)
        break; 
      case 'b3':
        setGraph(true)
        break; 
    }
  }

  function handleMouseEnter(e){
    let target = e.target
    
     target.classList.add('reveal'); 
  }

  function handleMouseLeave(e){
    e.target.classList.remove('reveal'); 
  }
  return (
    <>
    <Nav handlePages={handlePages} home={isHome} breeds={isBreeds} graph={isGraph}/>
      {isHome && <Page1/>}
      {isBreeds && <Page2 handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />}
      {isGraph && <Page3/>}
    </>
  )
}


export default Home
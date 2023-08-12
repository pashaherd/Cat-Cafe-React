import paw from '../assets/pawprint.png'
import cat from '../assets/laughing.png';

import { useRef } from 'react'; 

const Page2 = ({ handleMouseEnter , handleMouseLeave }) =>{ 
  function handlePopup(e){
    e.preventDefault(); 

  }
  return (
    <>
    <div className="breeds-wrap">
      <h1>9 Most Common Cat Breeds</h1>
      <div className="breeds">
        <div className="cat column-between" onClick={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          <span className="column">
           <h3>Domestic</h3>
            <img src={paw} alt="" className="paw"/>
          </span>
          <p>a kind feline</p>
          <div className="card" id="c1"></div>
        </div>
        <div className="cat column-between" onClick={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          <span className="column">
           <h3>Ragdoll</h3>
            <img src={paw} alt="" className="paw"/>
          </span>
          <p>a kind feline</p>
          <div className="card" id="c2"></div>
        </div>
        <div className="cat column-between" onClick={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          <span className="column">
           <h3>Exotic</h3>
            <img src={paw} alt="" className="paw"/>
          </span>
          <p>a kind feline</p>
          <div className="card" id="c3"></div>
        </div>
        <div className="cat column-between" onClick={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          <span className="column">
           <h3>Maine Coon</h3>
            <img src={paw} alt="" className="paw"/>
          </span>
          <p>a kind feline</p>
          <div className="card" id="c4"></div>
        </div>
        <div className="cat column-between" onClick={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          <span className="column">
           <h3>Persian</h3>
            <img src={paw} alt="" className="paw"/>
          </span>
          <p>a kind feline</p>
          <div className="card" id="c5"></div>
        </div>
        <div className="cat column-between" onClick={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          <span className="column">
           <h3>B & A </h3>
            <img src={paw} alt="" className="paw"/>
          </span>
          <p>a kind feline</p>
          <div className="card" id="c6"></div>
        </div>
        <div className="cat column-between" onClick={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          <span className="column">
           <h3>Siamese</h3>
            <img src={paw} alt="" className="paw"/>
          </span>
          <p>a kind feline</p>
          <div className="card" id="c7"></div>
        </div>
        <div className="cat column-between" onClick={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          <span className="column">
           <h3>Devon Rex</h3>
            <img src={paw} alt="" className="paw"/>
          </span>
          <p>a kind feline</p>
          <div className="card" id="c8"></div>
        </div>
        <div className="cat column-between" onClick={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          <span className="column">
           <h3>Abyssinian</h3>
            <img src={paw} alt="" className="paw"/>
          </span>
          <p>a kind feline</p>
          <div className="card" id="c9"></div>
        </div>
      </div>
    </div>
    <div className="submit-form-wrap">
      <div className="submit-form">    
        <h2>Did We Miss Yours?</h2>
          <p>submit your cat species here</p>
        
        <img src={cat} alt="" id="cat-img"/>
      <form method="POST" action="/">
         <div className="names">
         <span>
         <label htmlFor="fname">First Name</label>
          <input type="text" placeholder="Enter" className="name-input" id="fname" name="fname"/>
         </span>
           <span>
         <label htmlFor="lname">Last Name</label>
          <input type="text" placeholder="Enter" className="name-input" id="lname" name="lname"/>
         </span>
         </div>
        <div className="cat-name">
        <span>
        <label htmlFor="cname">Cat Name</label>
          <input type="text" placeholder="Enter" className="cname-input" id="cname" name="cname"/>
        </span>
        </div>
        <div className="msg">
        <textarea id="text-a" placeholder="What is your best memory with your cat?"></textarea>
        </div>
        <div className="btn-wrap"><button type="submit" onClick={(e) => handlePopup(e)}>Submit</button></div>
      </form>
        </div>
    </div>
    </>
  )
}

export default Page2
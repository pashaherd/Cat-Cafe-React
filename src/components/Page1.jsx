import logo from '../assets/catcafe.png'; 

const Page1 = () =>{
  return (
    <div className="homepage column">
      <span className="head">
      <h1 style={{ '--order':1 }}>Welcome...</h1>
      <p style={{ '--order':2 }}>to the world renouned cat cafe</p>
      </span>
      <img src={logo} alt="" id="logo" style={{ '--order':3 }}/>
    </div>
  )
}

export default Page1
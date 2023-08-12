 

const Nav = ({ handlePages, home, breeds, graph}) => {
  return (
    <nav className="row">
      <header>
       <ul className="row menu">
        <li className="column">
          <button onClick={(e) => handlePages(e)} className={ home ? "btn on" : "btn"} id="b1">Home</button>
        </li>
          <li className="column">
          <button onClick={(e) => handlePages(e)} className={ breeds ? "btn on" : "btn"}  id="b2">List Of Breeds</button>
        </li>
          <li className="column">
          <button onClick={(e) => handlePages(e)} className={ graph ? "btn on" : "btn"}  id="b3">Graph</button>
        </li>
       </ul>
      </header>
    </nav>
  )
}

export default Nav

const Page3 = (props) =>{
  return (
    <div className="graph-wrap column-between">
       <h1>How Common Are They?</h1>
       <div className="graph">
        <div id="d1" style={{ height:`${props.domestic}%` }}>
          <p>Domestic</p>
        </div>
        <div id="d2" style={{ height:`${props.ragdoll}%`}}>
          <p>Ragdoll</p>
        </div>
        <div id="d3" style={{ height: `${props.exotic}%`}}>
          <p>Exotic Shorthair</p>
        </div>
        <div id="d4" style={{ height: `${props.maine}%`}}><p>Maine Coon</p>
        </div>
        <div id="d5" style={{ height: `${props.persian}%`}}>
          <p>Persian</p>
        </div>
        <div id="d6" style={{ height: `${props.bna}%`}}>
          <p>B & A Shorthair</p>
        </div>
        <div id="d7" style={{ height: `${props.sia}%`}}>
        <p>Siamese</p>
        </div>
        <div id="d8" style={{ height: `${props.devon}%`}}>
        <p>Devon Rex</p>
        </div>
        <div id="d9" style={{ height: `${props.ab}%`}}>
        <p>Abyssinian</p>
        </div>
        <div id="d10" style={{ height: `${props.other}%`}}>
        <p>Other</p>
       </div>
      </div>
      <div className="y-axis row-between">
      <h4>By Percentage</h4>
      <span className="column-between">
        <p>100</p>
        <p>80</p>
        <p>60</p>
        <p>40</p>
        <p>20</p>
        <p>0</p>
      </span>
      </div>
      <div className="x-axis row">
      <h3>Breeds in North America</h3>
      </div>
    </div>
    
  )
}

Page3.defaultProps = {
  domestic:75,
  ragdoll:10.9,
  exotic:2.1,
  maine:3.4,
  persian:0.5,
  bna:4.1,
  sia:2.3,
  devon:0.7,
  ab:1.1,
  other:0.9
  
  
}
export default Page3
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isClothSelected,setIsClothSelected] = useState(false);
  const [isElectronicSelected,setIsElectronicSelected] = useState(false);
  const [isJewelrySelected,setIsJewelrySelected] = useState(false);
  {/*Function for Cloth*/}
  const handleMouseEnter=()=>{
    setIsClothSelected(true);
    console.log("handleMouseEnter")
};
const handleMouseLeave=()=>{
  setIsClothSelected(false);
}
const textStyle={
    backgroundColor: isClothSelected? '#f8f9fa' : 'black',
    color:isClothSelected?'#007bff':'#e9ecef',
    cursor : 'pointer',
}

{/* Function For Electronics*/}
const handleElectronicMouseEnter=()=>{
  setIsElectronicSelected(true);
  console.log("handleMouseEnter")
};

const handleElectronicMouseLeave=()=>{
  setIsElectronicSelected(false);
}
const electronicTextStyle={
  backgroundColor: isElectronicSelected? '#f8f9fa' : 'black',
  color:isElectronicSelected?'#007bff':'#e9ecef',
  cursor : 'pointer',
}

{/*Function for Jewelry*/}
const handleJewelryMouseEnter=()=>{
  setIsJewelrySelected(true);
  console.log("handleMouseEnter")
};

const handleJewelryMouseLeave=()=>{
  setIsJewelrySelected(false);
}
const jewelryTextStyle={
  backgroundColor: isJewelrySelected? '#f8f9fa' : 'black',
  color:isJewelrySelected?'#007bff':'#e9ecef',
  cursor : 'pointer',
}

  return (
    <>
      <div className="bg"></div>
      <div className="font">
        <span className="col-yellow">Browse</span>
        <span>Buy</span>
      </div>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="#" role="button" aria-expanded="false">
                Category
              </Link>
              <ul
                className="dropdown-menu"
                style={{ background: 'black', color: 'white', fontSize: '10px' }}
              >
                <li>
                  <Link to="/cloths" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ fontSize: '20px' ,...textStyle}}>
                    Cloth
                  </Link>
                </li>
                <li>
                  <Link to="/electronics" onMouseEnter={handleElectronicMouseEnter} onMouseLeave={handleElectronicMouseLeave} style={{ fontSize: '20px' ,...electronicTextStyle}}>
                    Electronic
                  </Link>
                </li>
                <li>
                  <Link to="/jewelry" onMouseEnter={handleJewelryMouseEnter} onMouseLeave={handleJewelryMouseLeave} style={{ fontSize: '20px' ,...jewelryTextStyle}}>
                    Jewelry
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

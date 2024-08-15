import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    //block of code resizes the button when the window resizes. 
    //makes it turn into the waffle when the window is small
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    //makes sure that the sign up button doesn't pop up in the middle
    //of the page when you refresh the screen
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    NexTrek  <i className="fa-solid fa-tree" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pictures' className='nav-links' onClick={closeMobileMenu}>
                            Pictures
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/more-info' className='nav-links' onClick={closeMobileMenu}>
                            More Info
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  );
}

export default Navbar



// function HeroSection(){
//   return(
//     <div className='hero-container'>
//       <video src='../../videos/video-1.mp4' autoPlay loop muted/>
//     </div>
//   );
// }
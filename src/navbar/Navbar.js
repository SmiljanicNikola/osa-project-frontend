
import React,{useState, useEffect} from 'react'
import { Nav } from './NavbarElements'
import { NavbarContainer } from './NavbarElements'
import { NavLogo } from './NavbarElements'
import { MobileIcon } from './NavbarElements'
import { NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { AuthenticationService } from '../services/AuthenticationService'
import { NavItem,NavLinks,NavBtn,NavBtnLink } from './NavbarElements'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from "react-router-dom";
import { TokenService } from '../services/TokenService'
import { Button, Nav as Navv} from "react-bootstrap";


const Navbar  = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);
    const [userRole, setUserRole] = useState("");
    const [userName, setUserName] = useState("");
    const [rola, setRola] = useState("");
    const [user, setUser] = useState("");

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)

        }else{
            setScrollNav(false);
        }
    }

    

    useEffect(() => {
        window.addEventListener('scroll',changeNav)

        const user = AuthenticationService.getUsername();
        const rola = AuthenticationService.getRole()
        setUser(user);
        setRola(rola);

        setUserName(user);
        setUserRole(rola);
        
        console.log(userRole);
        console.log(userName);
        console.log(user);
        console.log(rola);


    },[])
    

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        Prodavnica
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    {user!=null && rola=="ROLE_KUPAC" ? (
                    <div>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/sviArtikli" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                            >KupacStavka
                            </NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/artikli" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                            >KupacStavka
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks 
                                as={Link} to="/sviArtikli" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                            >KupacStavka
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks 
                                as={Link} to="/sviArtikli" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                            >KupacStavka
                            </NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/sviArtikli" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}
                            >KupacStavka
                            </NavLinks>
                        </NavItem>
                        {TokenService.getToken() ? (
                            <Button onClick={() => AuthenticationService.logout()} >Log out</Button>
                            ) :
                            (
                            <Navv.Link as={Link} to="/login">
                                Log in
                            </Navv.Link>
                            )}

                    </NavMenu>
                    </div>
                        ) : (
                        <div className="navbar-nav ml-auto">
                        
                        </div>
                        )}


                    {user!=null && rola=="ROLE_PRODAVAC" ? (
                    <div>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/about" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Prodavac
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/about" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Prodavac
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/about" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Prodavac
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/about" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Prodavac
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/about" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Prodavac
                            </NavLinks>
                        </NavItem>
                        {TokenService.getToken() ? (
                            <Button onClick={() => AuthenticationService.logout()} >Log out</Button>
                            ) :
                            (
                            <Navv.Link as={Link} to="/login">
                                Log in
                            </Navv.Link>
                            )}
                    </NavMenu>
                    </div>
                    ) : 
                    (
                    <div className="navbar-nav ml-auto">
                        
                    </div>)}


                    {user!=null && rola=="ROLE_ADMINISTRATOR" ? (
                    <div>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/svikorisnici" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Korisnici
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="/about" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                ADMINISTRATOR
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="/about" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                ADMINISTRATOR
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="/about" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                ADMINISTRATOR
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="/about" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                ADMINISTRATOR
                            </NavLinks>
                        </NavItem>
                        {TokenService.getToken() ? (
                <Button onClick={() => AuthenticationService.logout()} >Log out</Button>
                ) : (
                <Nav.Link as={Link} to="/login">
                Log in
                </Nav.Link>
                )}
                    </NavMenu>
                    </div>
                    ) : 
                    (
                        <div></div>
                        )}

                    {user==null ? (
                    <div>
                     <NavMenu>
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/registracijaprodavca" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Registracija Prodavac
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                as={Link} to="/registracijakupca" 
                                smooth={true} 
                                duration={500} 
                                spy={true}
                                exact='true'
                                offset={-80}>
                                Registracija Kupac
                            </NavLinks>
                        </NavItem>
                        {TokenService.getToken() ? (
                            <Button onClick={() => AuthenticationService.logout()} >Log out</Button>
                            ) :
                            (
                            <Navv.Link as={Link} to="/login">
                                Log in
                            </Navv.Link>
                            )}
                        </NavMenu>
                    </div>
                    ) : 
                    (<div/>)}
                  
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar

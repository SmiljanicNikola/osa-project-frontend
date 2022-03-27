import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLinkTitle, FooterLinksContainer, FooterWrap, FooterLinksItems, FooterLink, FooterLinksWrapper, FooterLinkItems, SocialIconLink, SocialIcons, SocialMedia,
SocialMediaWrap, WebsiteRights, SocialLogo } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'

const footer1Config = [{
    name: 'How it works',
    link: '/signin'
},
{
    name: 'Testimonials',
    link: '/signin'
},
{
    name: 'Careers',
    link: '/signin'
}, 
{
    name: 'Investors',
    link: '/'
}];

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const renderFooterItems = (config) => config.map((item) => <FooterLink to={item.link}>{item.name}</FooterLink>)



    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            {renderFooterItems(footer1Config)}
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            {renderFooterItems(footer1Config)}
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Donating</FooterLink>
                                <FooterLink to="/signin">Sponsorship</FooterLink>
                                
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Prodavnica
                    </SocialLogo>
                    
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

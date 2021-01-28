import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
           <div className="footer__info">
            <ul className="footer__social">
                <li className="footer__item">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/claudiariveramacedo/"><AiFillLinkedin/></a>
                </li>
                <li className="footer__item">
                    <a target="_blank" rel="noreferrer" href="https://github.com/claudiaarivera"><AiFillGithub/></a>
                </li>
                <li className="footer__item">
                    <a href="mailto:riveramacedoc@gmail.com"><AiFillMail/></a>
                </li>
            </ul>
            <p className="footer__dev">Developed by <a href="/" target="_blank" className="footer__link">Claudia Rivera</a> with React and 💙</p> 

           </div>
           <p className="footer__copy">&copy;{new Date().getFullYear()} Rick and Morty App</p>    
        </footer>
    )    
}
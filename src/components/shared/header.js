import {React, Component } from "react";
import { AiFillGithub } from "react-icons/ai";
import { NavLink, Link} from "react-router-dom";
import "./header.css";

export default class Header extends Component{
    render(){
        return (
            <header className="header">
                <div className="wrapper">
                    <nav className="nav">
                        <Link to='/' className="nav__logo">
                            <h1 className="title">Rick and Morty App</h1>
                        </Link>
                        <ul className="nav__menu">
                            <li className="nav__item">
                                <NavLink to='/' className="nav__link" exact activeClassName="nav__link--active">Home</NavLink> 
                            </li>
                            <li className="nav__item">
                                <NavLink to={process.env.PUBLIC_URL + '/about'} className="nav__link" activeClassName="nav__link--active">About</NavLink> 
                            </li>
                            <li className="nav__item nav__item--right">
                                <a className="nav__link nav__icon" target="_blank" rel="noreferrer" href="https://github.com/claudiaarivera"><AiFillGithub/></a>
                            </li>
                        </ul>
                       
                    </nav>
                </div> 
            </header>
        )
    }
}
// React Function based component ----> Shortcut rfc
import React from 'react'
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


// Receiving props

// Note : We cannot chnage prop in our functionn
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

            {/* Always use props in Curley brackets {} as they are part of js*/}
            {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        {/* <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> */}
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                   
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                <div className={`custom-control custom-switch text-${props.mode==='light' ? 'dark' : 'light'}`}>
                    <input type="checkbox" className="custom-control-input mx-3" id="customSwitch1" onClick={props.toggleMode}/>
                        <label className="custom-control-label mx-3" htmlFor="customSwitch1">Enable Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}

// Here we are just setting the prop types. Now if i change the tile from string to int or anything else it will show an error
// This will be useful when we will send somwthing else then a string 

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    // isRequired is like compulsay prop if i didnt sent any prop it will show an error
    aboutText: PropTypes.string,
};


// If i didnt passed any prop then these will be my default proprs and it will be shown on the site if i forgot to send the prop
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'Aboyt textt here'
};


// About Section nav
// <li className="nav-item">
// {/* Always use props in Curley brackets {} as they are part of js*/}
// <a className="nav-link" href="/about">{props.aboutText}</a>
// {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
// </li>

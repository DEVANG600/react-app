import React from 'react'
// import logo from '../logo.svg';
import '../App.css';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.name} </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/text-util">Text Utils</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <header className="App-header">
                <h1>React Learning with Devang</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    )
}

Navbar.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

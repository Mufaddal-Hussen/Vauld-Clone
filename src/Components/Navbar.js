import React from 'react'
import img1 from './images/dashboard_active.svg';
import img2 from './images/wallet_active.svg';
import img3 from './images/pro_active.svg';
import img4 from './images/exchange_active.svg';
import img5 from './images/history_active.svg';
import img6 from './images/ref-icon-active.svg';

export default function Navbar() {
    return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Vauld</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"><img
                                src={img1} alt="Not"/>
                            Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img href="#"
                                src={img2} alt="Not"/>Wallet</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img href="#" src={img3} alt="Not"/>Invest
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Fixed Deposits</a></li>
                            <li><a className="dropdown-item" href="#">AIP</a></li>

                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false"><img href="#"
                                src={img4} alt="Not"/>Exchange</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Instant Buy & Sell</a></li>
                                    <li><a className="dropdown-item" href="#">Instant Swap</a></li>
                                    <li><a className="dropdown-item" href="#">Pro Trading</a></li>
        
                                </ul>
                     </li>
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#"><img href="#"
                                src={img5} alt="Not"/>History</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#"><img href="#"
                                src={img6} alt="Not"/>Refferal</a>
                    </li>
                </ul>
                <form className="d-flex justify-content-around w-25">
                    {/* <!-- <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button className="btn btn-outline-success" type="submit">Search</button> --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                      </svg>
                </form>
            </div>
        </div>
    </nav>


    )
}
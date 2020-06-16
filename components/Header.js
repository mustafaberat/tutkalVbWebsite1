import React from "react"
import Link from 'next/link'


export default function Header() {
    return (
        <div className="navbar sticky-top">
            {/* <img src="/glue.svg" /> */}
            <h3>LOGO</h3>
            <nav className="navbar navbar-expand-lg navbar-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Anasayfa <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/kurumsal">Kurumsal <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/arge">AR-GE <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/iletisim">İletişim</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}

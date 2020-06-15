import React from "react"
import Link from 'next/link'

function Footer() {
    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src="/glue.svg" alt="" width="48" height="48" />
                    <h4>LOGO</h4>
                    <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
                </div>
                <div className="col-6 col-md">
                    <h5>TITLE</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">....</a></li>
                        <li><a className="text-muted" href="#">......</a></li>
                        <li><a className="text-muted" href="#">......</a></li>
                        <li><a className="text-muted" href="#">......</a></li>
                        <li><a className="text-muted" href="#">...</a></li>
                        <li><a className="text-muted" href="#">....</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>TITLE</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">......</a></li>
                        <li><a className="text-muted" href="#">......</a></li>
                        <li><a className="text-muted" href="#">......</a></li>
                        <li><a className="text-muted" href="#">......</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>TITLE</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">......</a></li>
                        <li><a className="text-muted" href="#">......</a></li>
                        <li><a className="text-muted" href="#">......</a></li>
                        <li><a className="text-muted" href="#">......</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
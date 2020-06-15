import React from "react"
import Link from 'next/link'

function Card({ ImagePath = '', LinkPath = '', Title = 'Baslik', Desc = 'Aciklama' }) {
    return (
        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ImagePath} className="card-img" alt="Resim" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{Title}</h5>
                        <p className="card-text">{Desc.length > 120 ? Desc.substring(0, 120) + "..." : Desc}</p>
                        <Link href={LinkPath}>
                            <a type="button" className="btn btn-danger">Detaylar</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
import React from "react"

import Card from './Card'

function CardContainer() {
    return (
        <div className="cardsContainer">
            <Card
                Title="Mastikler"
                Desc="SOMAFIX KİMYASAL DÜBEL (EPOKSİ AKRİLAT BAZLI) S710"
                ImagePath="https://www.somafix.com.tr/cropped/?src=dosyalar/page_203/1560375636_1.png&w=193.32079021637&h=300"
            />
            <Card
                Title="Yapıştırıcılar"
                Desc="SOMAFIX DENİZ TUTKALI S605"
                ImagePath="https://www.somafix.com.tr/cropped/?src=dosyalar/page_203/1560375636_1.png&w=193.32079021637&h=300"
            />
            <Card
                Title="Normal Poliüretan Köpükler"
                Desc="SOMAFIX EPS-XPS MANTOLAMA KÖPÜĞÜ S815"
                ImagePath="https://www.somafix.com.tr/cropped/?src=dosyalar/page_203/1560375636_1.png&w=193.32079021637&h=300"
            />
        </div>
    )
}

export default CardContainer
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function NavBar() {
    function toggleMenu(){
        document.querySelector('nav').classList.toggle('show')
        document.querySelector('body').classList.toggle('noscroll')
      }
    function removeShow(){
        document.querySelector('nav').classList.remove('show')
        document.querySelector('body').classList.toggle('noscroll')
    }
  return (
    <>
    {<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXV64GG"
height="0" width="0" style={{display:'none'}}></iframe></noscript>}
    <nav className={`nav flex jcc`}>
        <div className={`navContent flex jcsb`}>
          <Link href="/"><Image src='/logo.png' height={40} width={500} alt='Trans Himalayas Travels' className='logo' /></Link>
          <div className={`navUlWrap flex`}>
            <ul className={`navUL flex`}>
              <li className="navLi btn">Packages <ion-icon name="chevron-down-outline"></ion-icon>
                <ul className="navSUL">
                  <li className="navSLI"><Link href="/packages/budget" onClick={removeShow}>Budget Ideas</Link></li>
                  <li className="navSLI"><Link href="/packages/family" onClick={removeShow}>Family Holidays</Link></li>
                  <li className="navSLI"><Link href="/packages/group" onClick={removeShow}>Group Tours</Link></li>
                  <li className="navSLI"><Link href="/packages/honeymoon" onClick={removeShow}>Honeymoon Tours</Link></li>
                  <li className="navSLI"><Link href="/packages/luxury" onClick={removeShow}>Luxury Holidays</Link></li>
                  <li className="navSLI"><Link href="/packages/trek" onClick={removeShow}>Treks & Adventures</Link></li>
                </ul>
              </li>
              <li className="navLi btn"><a href="https://transhimalayatravels.in/offer/offer/" target='_blank'>Special Offers</a></li>
              <div className='flex jcc'>
                <a href="tel:+918091066115" className="btn btn-pri"><ion-icon name="call"></ion-icon> Call Now</a>
                <a href="https://wa.me/918091066115" target="_blank" className="btn btn-sec"><ion-icon name="logo-whatsapp"></ion-icon> WhatsApp Us</a>
              </div>
            </ul>
          </div>
          <button onClick={toggleMenu} className="menuToggle"><ion-icon name="menu-outline"></ion-icon></button>
        </div>
      </nav>
    </>
  )
}

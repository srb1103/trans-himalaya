import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <section className="wwd_section flex jcc fdc footer">
        <div className="ftop_section">
            <div className="ftop">
            <Image src='/logo.png' height={40} width={800} alt='Trans Himalayas Travels' className='logo' />
            <p className="hero_p">At TransHimalayas, we&lsquo;re not just experts in Himachal Pradesh; we&lsquo;re your dedicated guides to the pristine landscapes of Shimla, the adventures of Manali, the serenity of Kullu, the mystique of Spiti, and beyond.</p>
            <a href="tel:+918091066115" className="btn btn-pri"><ion-icon name="call"></ion-icon> Call Now</a>
            <a href="https://wa.me/918091066115" target="_blank" className="btn btn-sec"><ion-icon name="logo-whatsapp"></ion-icon> WhatsApp Us</a>
            <p className="hero_p">For More Queries<br/><a href="mailto:contact@transhimalayatravels.in">contact@transhimalayatravels.in</a> | <a href="tel:+918091066115">+91 80910 66115</a></p>
            </div>
            <div className="ftop flex jcc fdc">
            <Image src='/ratings.png' height={80} width={300} alt='Trans Himalayas Travels' className='ftopimg' />
            <ul className="ftr_links flex jcc">
                <li className="ftr_li"><a href="https://transhimalayatravels.in/about/" className='ftr_lia'>About Us</a></li>
                <li className="ftr_li"><a href="https://transhimalayatravels.in/blog/" className='ftr_lia'>Blog</a></li>
                <li className="ftr_li"><a href="https://transhimalayatravels.in/privacy-policy/" className='ftr_lia'>Privacy Policy</a></li>
                <li className="ftr_li"><a href="https://transhimalayatravels.in/terms-conditions/" className='ftr_lia'>Terms & Conditions</a></li>
            </ul>
            <ul className="ftr_links flex jcc">
                <li className="ftr_li"><a href="#" className='ftr_lia'><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li className="ftr_li"><a href="#" className='ftr_lia'><ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>
            </div>
        </div>
        <div className="line"/>
        <div className="ftop_section">
            <div className="ftop">
            <p className="hero_p">Trans Himalayas © 2023. All Rights Reserved.</p>
            
            <p className="hero_p"><span>Office Address</span><br/>Top floor, Verma building,<br/>Bhatakuffer bypass, Sanjauli,<br/>Shimla - H.P - 171006</p>
            </div>
            <div className="ftop flex jcc fdc">
            <Image src='/govt.png' height={60} width={400} alt='Verified By' className='ftopimg'/>
            </div>
        </div>
    </section>
  )
}

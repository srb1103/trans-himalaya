import { Inter } from 'next/font/google'
import Meta from '@/components/Meta'
import Foot from '@/components/Foot'
import Image from 'next/image'
import { packages, home_page_url } from '@/data/packages'
import { useState, useEffect } from 'react'
import Package from '@/components/Package'
const inter = Inter({ subsets: ['latin'] })
import { QueryForm, CallForm } from '@/components/Form'
import Alert from '@/components/Alert'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
let budget = packages.filter(e=>e.category.includes('budget'))
let group = packages.filter(e=>e.category.includes('group'))
let luxury = packages.filter(e=>e.category.includes('luxury'))
let honeymoon = packages.filter(e=>e.category.includes('honeymoon'))
let trek = packages.filter(e=>e.category.includes('trek'))
let family = packages.filter(e=>e.category.includes('family'))
export default function Home() {
  const [callForm,setCallForm] = useState(false)
  const [pack,setPack] = useState(null)
  const [showPackQuery,setShowPackQuery] = useState(false)
  const [queryForm,setQueryForm] = useState(false)
  const [alert,setAlert] = useState(null)
  const [showAlert,setShowAlert] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter()
    const handleScroll = () => {
        if (window.scrollY > 700) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(()=>{
      Cookies.remove('name')
      Cookies.remove('type')
      document.querySelector('body').classList.remove('noscroll')
    },[])
    function bsClose(){
    setQueryForm(false)
    setShowAlert(false)
    setCallForm(false)
    setPack(null)
    setShowPackQuery(false)
    document.querySelector('body').classList.remove('noscroll')
  }
  function querySubmit(){
    setQueryForm(false)
    setShowAlert(true)
    Cookies.set('type','query')
    router.push('/thanks')

  }
  function callSubmit(){
    setCallForm(false)
    setShowAlert(true)
    Cookies.set('type','call request')
    router.push('/thanks')
  }
  function loadPackQuery(pack_name){
    setPack(pack_name)
    setShowPackQuery(true)
  }
  return (
    <>
      <Meta/>
      {queryForm && <QueryForm bsClose={bsClose} save={querySubmit}/>}
      {showPackQuery && <QueryForm bsClose={bsClose} save={querySubmit} pack={pack}/>}
      {callForm && <CallForm bsClose={bsClose} save={callSubmit}/>}
      {showAlert && <Alert bsClose={bsClose} {...alert}/>}
      <NavBar/>
      <section className="intro flex jcc">
        <div className="hero_grid">
          <div className="hero_heading">
            <h1 className="hero_h">Your Personal <span>Travel Advisor</span><br/> No Sales Pressure, Just <span>Genuine Guidance!</span></h1>
            <p className="hero_p">Your Trusted Travel Partner for Himachal, Shimla, Kullu, Manali, Spiti, and More 🌟</p>
            <div className="s_hero">
              <p className="sh_p">🤝 No-Obligation Consultation<span>: Whether you&lsquo;re planning a Shimla getaway, exploring Manali, or dreaming of Kullu, we&lsquo;re here for you. Our commitment to you comes with </span>Zero sales pressure<span>. Feel free to call us anytime for guidance</span></p>
            </div>
            <div className="s_hero">
              <p className="sh_p">🌄 Expert Insights, No Hard Sales<span>: Our team lives and breathes Himachal Pradesh. We&lsquo;re here to provide expert insights on the best Shimla tour packages, Kullu trekking routes, Spiti cultural experiences, and Ladakh adventures. We promise, no hard sales tactics, just genuine support.</span></p>
            </div>
            <div className={`intro_flex_btns ${scrolled ? 'fix' : ''}`}>
              <button className="btn btn-pri" onClick={()=>setQueryForm(true)}><ion-icon name="mail-open"></ion-icon> Send Query</button>
              <button className="btn btn-sec" onClick={()=>setCallForm(true)}><ion-icon name="call"></ion-icon> Book a Call</button>
            </div>
          </div>
          <div className="hero_right flex jcc fdc">
            <Image src='/doodle.webp' height={200} width={1000} className="hero_doodle" alt="Your Personal Travel Advisor"/>
            <div className="idiv flex jcc">
              <a href="https://www.tripadvisor.in/Attraction_Review-g304552-d19080532-Reviews-Trans_Himalaya_Travels-Shimla_Shimla_District_Himachal_Pradesh.html" target="_blank"><Image src="/tripadvisor.webp" height={40} width={500} className="ratingLink" alt="Trip Advisor Ratings"/></a>
              <a href="https://www.google.com/search?q=trans+himalaya+travels&rlz=1C1JJTC_enIN1056IN1056&oq=trans+hi&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyBggCEEUYOTISCAMQLhgUGK8BGMcBGIcCGIAEMgcIBBAuGIAEMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg80gEIMjE1MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3905827455555555:0x7c9679e5574a94d5,1,,,," target="_blank"><Image src="/g-reviews.png" height={80} width={500} className="ratingLink" alt="Google Ratings"/></a>
          </div>
          </div>
        </div>
      </section>
      <section className="wwd_section flex jcc fdc">
        <p className="hero_h">Why <span>Trans Himalayas Travels</span>?</p>
        <div className="wwd_grid">
          <div className="wwd">
            <p><ion-icon name="ribbon-outline"></ion-icon></p>
            <p className="wwdd_h">Expertise</p>
            <p className="wwdd_p">At TransHimalayas, we&lsquo;re not just experts in Himachal Pradesh; we&lsquo;re your dedicated guides to the pristine landscapes of Shimla, the adventures of Manali, the serenity of Kullu, the mystique of Spiti, and beyond.</p>
            <button className="btn btn-pri" onClick={()=>setQueryForm(true)}><ion-icon name="mail-open-outline"></ion-icon> Send Query</button>
            <button className="btn btn-sec" onClick={()=>setCallForm(true)}><ion-icon name="time-outline"></ion-icon> Book a Call</button>
          </div>
          <div className="wwd">
          <p><ion-icon name="hourglass-outline"></ion-icon></p>
            <p className="wwdd_h">24/7 Travel Support</p>
            <p className="wwdd_p">Your travel dreams don&lsquo;t follow office hours, and neither do we. Dial our Travel Hotline 24/7 to discuss your plans or get answers to your questions.</p>
            <button className="btn btn-pri" onClick={()=>setQueryForm(true)}><ion-icon name="mail-open-outline"></ion-icon> Send Query</button>
            <button className="btn btn-sec" onClick={()=>setCallForm(true)}><ion-icon name="time-outline"></ion-icon> Book a Call</button>
          </div>
        </div>
      </section>
      <section className="wwd_section flex jcc fdc head">
        <p className="hero_h">🌐 Explore Travel Resources</p>
        <p className="hero_p">Unlock a treasure trove of travel guides, packing tips, and local secrets on our website to fuel your wanderlust for Himachal Pradesh and its captivating destinations</p>
      </section>
      <section className="wwd_section flex fdc packages_sec">
        <p className="hero_h">Budget Ideas</p>
        <div className="packages">
          {budget.map((p,ind)=>(
            <Package {...p} key={ind.toString()} fun={loadPackQuery}/>
          ))}
        </div>
      </section>
      <section className="wwd_section flex fdc packages_sec">
        <p className="hero_h">Family Holidays</p>
        <div className="packages">
          {family.map((p,ind)=>(
            <Package {...p} key={ind.toString()} fun={loadPackQuery}/>
          ))}
        </div>
      </section>
      <section className="wwd_section flex fdc packages_sec">
        <p className="hero_h">Group</p>
        <div className="packages">
          {group.map((p,ind)=>(
            <Package {...p} key={ind.toString()} fun={loadPackQuery}/>
          ))}
        </div>
      </section>
      <section className="wwd_section flex jcc fdc head">
        <p className="hero_h">Tavel Hotline</p>
        <p className="hero_p">Ready to embark on your dream journey or simply craving travel inspiration? Dial our Travel Hotline now and let&lsquo;s set your plans in motion.</p>
        <a href="tel:+918091066115"><button className="btn btn-pri"><ion-icon name="call"></ion-icon> Call Our Travel Hotline</button> </a>
      </section>
      <section className="wwd_section flex fdc packages_sec">
        <p className="hero_h">Luxury Holidays</p>
        <div className="packages">
          {luxury.map((p,ind)=>(
            <Package {...p} key={ind.toString()} fun={loadPackQuery}/>
          ))}
        </div>
      </section>
      <section className="wwd_section flex fdc packages_sec">
        <p className="hero_h">Honeymoon Packages</p>
        <div className="packages">
          {honeymoon.map((p,ind)=>(
            <Package {...p} key={ind.toString()} fun={loadPackQuery}/>
          ))}
        </div>
      </section>
      <section className="wwd_section flex fdc packages_sec">
        <p className="hero_h">Treks & Adventures</p>
        <div className="packages">
          {trek.map((p,ind)=>(
            <Package {...p} key={ind.toString()} fun={loadPackQuery}/>
          ))}
        </div>
      </section>
      <section className="wwd_section flex jcc fdc head">
        <div className="flex jcc">
          <a href="https://www.tripadvisor.in/Attraction_Review-g304552-d19080532-Reviews-Trans_Himalaya_Travels-Shimla_Shimla_District_Himachal_Pradesh.html" target="_blank"><Image src="/tripadvisor.webp" height={40} width={500} className="ratingLink" alt="Trip Advisor Ratings"/></a>
          <a href="https://www.google.com/search?q=trans+himalaya+travels&rlz=1C1JJTC_enIN1056IN1056&oq=trans+hi&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyBggCEEUYOTISCAMQLhgUGK8BGMcBGIcCGIAEMgcIBBAuGIAEMgYIBRBFGDwyBggGEEUYPTIGCAcQRRg80gEIMjE1MWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3905827455555555:0x7c9679e5574a94d5,1,,,," target="_blank"><Image src="/google.png" height={80} width={500} className="ratingLink" alt="Google Ratings"/></a>
        </div>
        <p className="hero_p">Your adventure in Himachal Pradesh and beyond awaits – let&lsquo;s make it extraordinary together. 🏞️✨</p>
      </section>
      <Footer/>
      <Foot/>
    </>
  )
}

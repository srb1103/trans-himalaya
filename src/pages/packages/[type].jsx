import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { packages } from '@/data/packages'
import Package from '@/components/Package'
import Meta from '@/components/Meta'
import NavBar from '@/components/NavBar'
import { QueryForm,CallForm } from '@/components/Form'
import Alert from '@/components/Alert'
import Foot from '@/components/Foot'
import Footer from '@/components/Footer'
import Cookies from 'js-cookie'

export default function Packages() {
    let router = useRouter()
    let {type} = router.query
    let list = packages.filter(e=>e.category.includes(type))
    useEffect(()=>{
        document.querySelector('body').classList.remove('noscroll')
    },[])
    let heading = 'Budget Ideas'
    if(type == 'group'){heading = 'Group Tours'}
    if(type == 'honeymoon'){heading = 'Honeymoon Tours'}
    if(type == 'luxury'){heading = 'Luxury Holidays'}
    if(type == 'family'){heading = 'Family Holidays'}
    if(type == 'trek'){heading = 'Treks & Adventures'}
    const [callForm,setCallForm] = useState(false)
    const [pack,setPack] = useState(null)
    const [showPackQuery,setShowPackQuery] = useState(false)
    const [queryForm,setQueryForm] = useState(false)
    const [alert,setAlert] = useState(null)
    const [showAlert,setShowAlert] = useState(false)
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
            <Meta head={heading}/>
            {queryForm && <QueryForm bsClose={bsClose} save={querySubmit}/>}
            {showPackQuery && <QueryForm bsClose={bsClose} save={querySubmit} pack={pack}/>}
            {callForm && <CallForm bsClose={bsClose} save={callSubmit}/>}
            {showAlert && <Alert bsClose={bsClose} {...alert}/>}
            <NavBar/>
            <section className="wwd_section flex fdc packages_sec">
                <p className="hero_h">{heading}</p>
                <div className="packages">
                {list.map((p,ind)=>(
                    <Package {...p} key={ind.toString()} fun={loadPackQuery}/>
                ))}
                </div>
            </section>
            <Footer/>
            <Foot/>
        </>
  )
}

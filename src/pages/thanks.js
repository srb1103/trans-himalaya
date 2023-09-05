import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Meta from '@/components/Meta'

export default function Thanks() {
    const router = useRouter()
    let name = Cookies.get('name')
    let type = Cookies.get('type')
    useEffect(()=>{
      if(!name || !type){
        router.push('/')
    }
    },[])
  return (
    <>
    <Meta title="Thank You!"/>
    <div className="thanks flex jcc fdc">
        <p><ion-icon name="checkmark-circle-outline"></ion-icon></p>
        <p className={`hero_p`}>{`Dear ${name}, we have received your ${type}. We&lsquo;ll get back to you ASAP!`}</p>
        <Link href="/"><button className="btn btn-pri"><ion-icon name="arrow-back-outline"></ion-icon> Go Back</button></Link>
    </div>
    </>
    
  )
}

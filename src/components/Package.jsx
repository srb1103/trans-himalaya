import React from 'react'
import Image from 'next/image'

export default function Package(props) {
    let {img,name,location,cost,duration,fun} = props
    let dur = `${duration-1} Nights / ${duration} Days`
    function setNum(num){
        let n = parseInt(num)
        n = n.toLocaleString('en-IN')
        return n
    }
    return (
    <div className="package">
        <div className="pack_img_wrap">
            <Image src={img} height={100} width={1000} className="pack_img" alt={name}/>
            <div className="pack_ovr">
                <h3 className="pack_name">{name}</h3>
                <span className="pack_dur"><ion-icon name="time-outline"></ion-icon> {dur}</span>
            </div>
        </div>
        <div className="pack_det">
            <span className="pc_price">₹ {setNum(cost)}</span>
            <h3 className="pack_name dsts">Places Covered</h3>
            <ul className="dstUl">
                {location.map((d,ind)=>(
                    <li className="dstLi" key={ind.toString()}>{d}</li>
                ))}
            </ul>
            <div className="line"></div>
            <ul className="plnd_ul flex jcsb">
                <li className="plnd_li">
                    <ion-icon name="bed-outline"></ion-icon>
                    <p>Hotels</p>
                </li>
                <li className="plnd_li">
                    <ion-icon name="telescope-outline"></ion-icon>
                    <p>Sightseeing</p>
                </li>
                <li className="plnd_li">
                    <ion-icon name="fast-food-outline"></ion-icon>
                    <p>Meals</p>
                </li>
                <li className="plnd_li">
                    <ion-icon name="car-sport-outline"></ion-icon>
                    <p>Transfers</p>
                </li>
            </ul>
            <div className="line"></div>
            <center><button className="btn btn-pri" onClick={()=>fun(name)}>Get Free Quotes</button></center>
        </div>
    </div>
  )
}

import React,{useEffect} from 'react'

export default function Alert(props) {
    let {status,title,message,bsClose} = props
    useEffect(()=>{
        document.querySelector('body').classList.add('noscroll')
    },[])
  return (
    <div className="bs_bg flex jcc">
        <div className="bs_container">
            <div className="bs_head">
                <h2>{title}</h2>
                <button onClick={bsClose} className="bsClose"><ion-icon name="close-outline"></ion-icon></button>
            </div>
            <div className={`bs_wrp flex jcc fdc ${status}`}>
                {status == 'success' ? <ion-icon name="checkmark-outline"></ion-icon> : <ion-icon name="close-outline"></ion-icon>}
                <p className={`hero_p`}>{message}</p>
            </div>
        </div>
    </div>
  )
}

export function Error(props){
    let {fun,text} = props
    return(
        <section className="error_wrap">
            <p className='error_text'>{text}</p>
            <button onClick={fun} className="errClose"><ion-icon name="close-outline"></ion-icon></button>
        </section>
    )
}

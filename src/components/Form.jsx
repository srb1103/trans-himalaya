import React, { useCallback,useEffect,useState } from 'react'
import { useReducer } from 'react'
import InputBox, { SelectInput } from './InputBox'
import { Error } from './Alert'
import Cookies from 'js-cookie'

const stateReducer = (state,action)=>{
    switch (action.type){
        case 'UPDATE':
            let {name,value} = action
            return {...state,[name]:value}

        default: return state
    }
}

export function QueryForm(props) {
    const {bsClose,save,pack} = props
    const [loading,setLoading] = useState(false)
    const [btnText,setBtnText] = useState('Send Query')
    const [error,setError] = useState(false)
    const [error_message,setError_message] = useState(false)
    useEffect(()=>{
        document.querySelector('body').classList.add('noscroll')
    },[])
    const [state,dispatchState] = useReducer(stateReducer,{
        name:'',
        phone:'',
        destination:'',
        mode:'call',
    })
    const handleChange = useCallback((name,value)=>{
        dispatchState({type:'UPDATE',name,value})
    },[dispatchState])
    let options = [{id:'call',name:'Call'},{id:'whatsapp',name:'WhatsApp'}]
    async function handleSubmit(event){
        event.preventDefault()
        let {name,phone,destination,mode} = state
        let er = ''
        if (!mode){er = 'Please select preferred mode of communication.'}
        if (!phone){er = 'Please enter your contact number.'}
        if (!name){er = 'Please enter your name.'}
        if (er){
            setError(true)
            setError_message(er)
        }else{
            setLoading(true)
            setBtnText('Sending...')
            let url = pack ? `https://api.emezy.in/tht/api?type=package_query&name=${name}&contact=${phone}&mode=${mode}&package=${pack}`:`https://api.emezy.in/tht/api?type=general_query&name=${name}&contact=${phone}&mode=${mode}&destination=${destination}`
            let res = await fetch(url)
            let status = res.status
            if(status == 200){
                Cookies.set('name',name)
                save()
            }else{
                setError(true)
                setError_message('Something went wrong. Please try again.')
                setLoading(false)
                setBtnText('Send Query')
            }
            
        }
    }
  return (
    <div className="bs_bg flex jcc">
        <div className="bs_container">
            <div className="bs_head">
                <h2>Send a Query</h2>
                <p>Your personal details are kept private and used for consultation only.</p>
                <button onClick={bsClose} className="bsClose"><ion-icon name="close-outline"></ion-icon></button>
            </div>
            {error && <Error fun={()=>setError(false)} text={error_message}/>}
            <form className="form_container flex jcc fdc" onSubmit={handleSubmit}>
                <div className="form_grid">
                    <InputBox fun={handleChange} label="Name" placeholder="Enter your name" val={state.name} required="required" name="name"/>
                    <InputBox fun={handleChange} label="Contact Number" placeholder="Enter contact number" val={state.phone} required="required"  name="phone" type="phone" pattern="[6789][0-9]{9}"/>
                    {!pack && <InputBox fun={handleChange} label="Destination" placeholder="Enter destination" val={state.destination} name="destination"/>}
                    <SelectInput fun={handleChange} label="Communication Mode"  val={state.mode} name="mode" options={options} required firstTitle="Select Preferred Communication Mode" disabled="disabled"/>
                </div>
                <button className="btn btn-pri" disabled={loading}>{btnText}</button>
            </form>
           
        </div>
    </div>
  )
}

export function CallForm(props){
    const {bsClose,save} = props
    const [loading,setLoading] = useState(false)
    const [btnText,setBtnText] = useState('Book Now')
    const [error,setError] = useState(false)
    const [error_message,setError_message] = useState(false)
    useEffect(()=>{
        document.querySelector('body').classList.add('noscroll')
    },[])
    const [state,dispatchState] = useReducer(stateReducer,{
        name:'',
        phone:'',
    })
    const handleChange = useCallback((name,value)=>{
        dispatchState({type:'UPDATE',name,value})
    },[dispatchState])
    async function handleSubmit(event){
        event.preventDefault()
        let {name,phone} = state
        let er = ''
        if (!phone){er = 'Please enter your contact number.'}
        if (!name){er = 'Please enter your name.'}
        if (er){
            setError(true)
            setError_message(er)
        }else{
            setLoading(true)
            setBtnText('Please wait...')
            let res = await fetch(`https://api.emezy.in/tht/api?type=call_booking&name=${name}&contact=${phone}`)
            let status = res.status
            if(status == 200){
                Cookies.set('name',name)
                save()
            }else{
                setError(true)
                setError_message('Something went wrong. Please try again.')
                setLoading(false)
                setBtnText('Book Now')
            }
            
        }
    }
    return (
        <div className="bs_bg flex jcc">
            <div className="bs_container">
                <div className="bs_head">
                    <h2>Book a Query</h2>
                    <p>Your personal details are kept private and used for consultation only.</p>
                    <button onClick={bsClose} className="bsClose"><ion-icon name="close-outline"></ion-icon></button>
                </div>
                {error && <Error fun={()=>setError(false)} text={error_message}/>}
                <form className="form_container flex jcc fdc" onSubmit={handleSubmit}>
                    <div className="form_grid">
                        <InputBox fun={handleChange} label="Name" placeholder="Enter your name" val={state.name} required="required" name="name"/>
                        <InputBox fun={handleChange} label="Contact Number" placeholder="Enter contact number" val={state.phone} required="required"  name="phone" type="phone" pattern="[6789][0-9]{9}"/>
                    </div>
                    <button className="btn btn-pri" disabled={loading}>{btnText}</button>
                </form>
               
            </div>
        </div>
      )
}

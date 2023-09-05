import React, {useEffect, useState} from 'react'

export default function InputBox(props){
    let {type,placeholder,required,val,fun,label,name,id,pattern} = props
    let [value,setValue] = useState(val?val:'')
    useEffect(()=>{
        setValue(val)
    },[val])
    const handleChange = (event)=>{
        let txt = event.target.value
        setValue(txt)
    }
    useEffect(()=>{
        fun(name, value)
    },[name, value, fun])
    return(
        <>
            <div className="inputGrp">
                <label className="form_label">{label}</label>
                <input type={type?type:'text'} required={required} placeholder={placeholder} className="form_input" value={value} onChange={handleChange} min='0' id={id?name:null} autoComplete='off' pattern={pattern ? pattern : null}/>
            </div>
        </>
    )
}

export function SelectInput(props){
    let {options,label,sel,placeholder,firstTitle,fun,required,name,disabled,class_name,title,id} = props
    let [value,setValue] = useState(sel?sel:'')
    const handleSelect = (event)=>{
        let txt = event.target.value
        setValue(txt)
    }
    useEffect(()=>{
        setValue(sel)
    },[sel])
    useEffect(()=>{
        fun(name, value)
    },[name, value, fun])
    return(
        <div className="inputGrp">
            <label className="form_label">{label}</label>
            <select required={required} placeholder={placeholder} className={`form_input ${class_name}`} onChange={handleSelect} title={title ?title:''} id={id?name:null} value={value}>
                {firstTitle && <option value='' disabled={disabled}>{firstTitle}</option>}
                {options.map(option => {
                    let {id,name} = option
                    return <option key={id} value={id}>{name}</option>
                })}
            </select>
        </div>
    )
}


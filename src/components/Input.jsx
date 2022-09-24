import { useState } from "react"

const InputText = ({label , placeholder='', style, row}) => {
    const [value, setValue] = useState('')

    return(
        <div className={`input-container ${row ? 'flex cent-item' : 'flex-column'}`}>
            <label>{label}:</label>
            <input 
                className='input-custom'
                type='text' 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder={placeholder}
            >
            </input>
        </div>
    )
}

const InputSelect = ({label, data, row}) => {
    const [value, setValue] = useState('');

    return(
        <div className={`input-container ${row ? 'flex cent-item' : 'flex-column'}`}>
            <label>{label}:</label>
            <select className="input-custom"  defaultValue={''} onChange={ (e) => setValue(e.target.value)}>
                <option value="" disabled selected hidden className="input-custom-select-default">{label}</option>
                {
                    data.map( (value) => <option value={value} key={value}>{value}</option>)
                }
            </select>
        </div>
    )
}

export function Input({label ,type, placeholder='', data, style, row}) {
    

   switch (type) {
    case 'select':
        return <InputSelect label={label} data={data} style={style} row={row}/>

    default:
        return <InputText label={label} placeholder={placeholder} style={style} row={row}/>
   }
}
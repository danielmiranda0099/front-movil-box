
export function Button({content, type}) {

    const typeButton = {
        'fill': {
            backgroundColor: '#A1CC39ff',
            color: '#FFFEFFff',
            border: '1px solid #A1CC39ff' 
        },
        'empty':{
            backgroundColor: '#FFFEFFff',
            color: '#C8E582ff',
            border: '1px solid #C8E582ff'
        }
    }

    return(
        <button style={typeButton[type]} className='button-custom'>
            {content}
        </button>
    )
}
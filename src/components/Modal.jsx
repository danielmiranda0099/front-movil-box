const HeaderModal = ({setIsOpen}) => {
    return(
        <div className="modal-header">
            <div
                className="modal-close"
                onClick={()=> setIsOpen(false)}
            >
                <svg className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </div>
        
    )
}


export function Modal({ children, isOpen, setIsOpen, ...props })  {
    return(
        <>
        {isOpen &&
            <div className="modal">
                <div className="modal-contenedor">
                    <HeaderModal setIsOpen={setIsOpen} />
                    {children}
                </div>
            </div>
        }
        </>
    );
}
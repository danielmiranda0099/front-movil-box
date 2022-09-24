import { useState } from "react"

const ActionMenu = () => {

    return(
        <div className="table-action-menu flex-column">
            <span className="table-action-menu-item">Ver</span>
            <span className="table-action-menu-item">Editar</span>
            <span className="table-action-menu-item">Eliminar</span>
        </div>
    )
}

const Actions = () => {
    const [visible, setVisible] = useState(false);

    document.addEventListener('click', (event) => {
        if(!event.target.matches('.table-action-menu-icon')){
            setVisible(false)
        }
    });

    return(
        <>
            <svg onClick={() => setVisible(!visible)} className='table-action-menu-icon pointer' width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path onClick={() => setVisible(!visible)} fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 7.12646C13.0995 7.12646 13.9995 6.22646 13.9995 5.12646C13.9995 4.02646 13.0995 3.12646 11.9995 3.12646C10.8995 3.12646 9.99951 4.02646 9.99951 5.12646C9.99951 6.22646 10.8995 7.12646 11.9995 7.12646ZM13.9995 12.1265C13.9995 13.2265 13.0995 14.1265 11.9995 14.1265C10.8995 14.1265 9.99951 13.2265 9.99951 12.1265C9.99951 11.0265 10.8995 10.1265 11.9995 10.1265C13.0995 10.1265 13.9995 11.0265 13.9995 12.1265ZM9.99951 19.1265C9.99951 18.0265 10.8995 17.1265 11.9995 17.1265C13.0995 17.1265 13.9995 18.0265 13.9995 19.1265C13.9995 20.2265 13.0995 21.1265 11.9995 21.1265C10.8995 21.1265 9.99951 20.2265 9.99951 19.1265Z" fill="#576573"/>
            </svg>

            {visible && <ActionMenu />}
            
        </>
    )
}

const Item = ({data}) => {
    return(
        data.map( (item, index) => (
            <tr>
                <td data-label="NOMBRE" className="hidden">{index + 1}</td>
                <td data-label="NOMBRE" className="hidden">{item.name}</td>
                <td data-label="EMAIL" className="hidden">{item.email}</td>
                <td data-label="APELLIDO" className="hidden">{item.profile}</td>
                <td data-label="TELEFONO" className="hidden">{item.state}</td>
                <td data-label="TELEFONO" className="hidden">{new Date(item.updated).toLocaleDateString()}</td>
                <td className="flex cent relative table-action"><Actions /></td>
            </tr>
        ))
    )
}
 

export function Table({data}) {
    return(
        <table className="table-custom">
            <thead>
                <tr >
                    <th scope="col">#</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">CORREO ELECTRONICO</th>
                    <th scope="col">PERFIL</th>
                    <th scope="col">ESTADO</th>
                    <th scope="col">FECHA MODIFICACIÓN</th>
                    <th scope="col">ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                <Item data={data} />
            </tbody>
        </table>
    )
}

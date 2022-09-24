import { Button } from "../Button";
import { Input } from "../Input";


export function FilterUser() {

    const dataPerfil = ['user', 'cliente', 'admin'];
    const dataEstado = ['activo', 'inactivo'];

    return(
        <div className="filter-user-container">
            <div className="filter-user-head flex">
                <h3>Filtros de Búsqueda</h3>
                <Button content='limpiar' type='empty'/>
            </div>

            <div className="filter-user-input-container w-100 grid">
                <Input label='Nombre' placeholder='Nombre de Usuario'/>
                <Input label='Correo Electronico' placeholder='Nombre de Usuario' />
                <Input label='Perfil' type='select' placeholder='Nombre de Usuario' data={dataPerfil}/>
                <Input label='Estado' type='select' placeholder='Nombre de Usuario' data={dataEstado}/>
            </div>
        </div>
    )
}
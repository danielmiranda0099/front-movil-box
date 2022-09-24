import { Button } from "../Button";
import { Input } from "../Input";
import { Table } from "../Table";


export function ListUser({data}) {
    const dataNumberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    return(
        <div className="list-user-container">
            <div className="list-user-head flex">
                <h4>USUARIOS</h4>
                <div className="list-user-head-button flex">
                    <Button content='Agregar Usuario' type='fill'/>
                    <Button content='Export' type='empty'/>
                </div>
            </div>

            <div className="list-user-filter flex">
                <Input type='select' label='ver' data={dataNumberList} row/>
                <Input label='Buscar' row/>
            </div>

            <div className="list-user-table">
                <Table data={data} />
            </div>
        </div>
    )
}
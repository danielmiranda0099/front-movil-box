import { useEffect, useState } from "react";
import { http } from "../api";
import { FilterUser } from "../components/filterUser";
import { ListUser } from "../components/listUser";

function App() {
  const [data, setData] = useState([]);

  const getData = async() => {
    const res = await  http('1/users');
    const {data} = res;
    const {users} = data;

    const typeProfile = {
      1: "Practicante",
      2: "Desarrollador",
      3: "Vendedor",
      4: "Administrador"
    }
    
    const usersFormat = users.map( ({id,name,profile,email,state,updated_at}) => ({
      id,
      name,
      profile: typeProfile[profile],
      email,
      state: state >= 1 ? 'Activo' : 'Inactivo',
      updated: updated_at
    }))
    setData(usersFormat);
    console.log(users, usersFormat)
  }

  useEffect( () => {
   getData();
  },[])

  return (
    <div className="app-container h-100">
      <FilterUser />
      <ListUser data={data} />
    </div>
  );
}

export default App;

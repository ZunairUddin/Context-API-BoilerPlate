import React,{useContext} from 'react'
import { UserContext } from '../Context/Context';

const Users = () => {
     const [Users,setUsers] = useContext(UserContext)
     console.log('Users====>',Users)

     return (
          <div>
               <h1>Users List</h1>   {/* RENDERS USERS LIST  */}
             
               {Users.map((e,i)=>{
                    return (
                         <h2 key={i} style={{backgroundColor:"lightblue",color: "black",width:'50%',margin:"0 auto"}}>

                             NAME : {e.name} <br/> ID :  {e.id} <hr/>

                             
                         </h2>
                    )
               })}
          </div>
     )
}

export default Users;

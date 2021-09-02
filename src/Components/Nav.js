import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'


const Nav = () => {
     const [Users,setUsers] = useContext(UserContext)

     return (
          <div>
                {/* COUNTS GLOBAL STATE LENGTH */}
               <h1 style={{backgroundColor:"black",color: "white"}}> USERS COUNT : {Users.length}</h1>
               

          </div>
     )
}

export default Nav;

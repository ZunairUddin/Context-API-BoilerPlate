import React, { useState } from 'react'



const UserContext = React.createContext()   //Creatig Context or Global State



const UsersProvider = props => { //Providing Context Value Through Provider 
  
     const [Users, setUsers] = useState([
          {
               name : "Zunair",
               id : Math.round (Math.random()*100)
          },
          {
               name : "Pakistan",
               id : Math.round (Math.random()*100)
          },
          {
               name : "Karachi",
               id : Math.round (Math.random()*100)
          },
     
     ])
     //Assigning value to all children Components...
     return (
          <UserContext.Provider value={[Users,setUsers]}> 
               {props.children}
          </UserContext.Provider>
     )
}






export { UserContext, UsersProvider }; 
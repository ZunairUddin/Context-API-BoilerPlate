import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/Context'//import global state from contextFile

const Add = () => {
     const [Users, setUsers] = useContext(UserContext) //Assign GLOBAL STATE to variable to use it through UseContext Hook//
     let IdNum = Math.round(Math.random() * 100)  //ID NUM GENERATOR
     const [Name, setName] = useState('') //USERNAME
     const [Id, setId] = useState(IdNum)  //USER ID GENERATES AUTOMATICALLY

     //UserNAme
     const inpTxt = (e) => {
          setName(e.target.value)


     }

     //ID 
     const inpId = () => {

          setId(IdNum)
     }


     // ...ADD USER FUNCTION...  //
     const AddBtn = (e) => {
          inpId() // Sets an random ID
          e.preventDefault(); //Prevents Reloading on SUbmit
          setUsers(oldUsers => [...oldUsers, { name: Name, id: Id }]) //Copies previous data and then renders new data with it 
          setName('')
     }
     //......//



     return (
          <>
               <form onSubmit={AddBtn}>

                    <input type="text" placeholder='NAME' name="name" value={Name} onChange={inpTxt} />
                    {/* <input type="text" placeholder='Id' value={Id} onChange={inpId} /> */}
                    <button style={{backgroundColor:"black",color:'white', fontWeight:'bold' ,fontSize:18,marginLeft:2}}>
                         ADD
                    </button>
               </form>


          </>
     )
}

export default Add;

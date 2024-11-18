import React, { useState } from "react"
import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile () {


const {user} = useContext(UserContext)
   

if (!user) return  <div>Please Login then Come Again</div>

 
 return <div> Welcome {user.username} </div>



  

}

export default Profile
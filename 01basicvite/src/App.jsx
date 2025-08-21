import { use } from "react"
import Youtube from "./Youtube"


function App() {
 
const username= "user"
  return (
   <>
   <h1>
    Vite app {2+2}
  
   </h1>
   <h1>
    Username = {" "}  {username}
   </h1>
   <Youtube />
   </>
  )
}

export default App

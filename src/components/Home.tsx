import { User } from "../App"


function Home({signout}){
   
    return(
        <>
        <h1>homeee</h1>
        <button className="btn"onClick={signout}>Sign Out</button>
        </>
    )
}

export default Home
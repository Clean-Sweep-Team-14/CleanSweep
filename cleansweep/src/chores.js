// import { useState, useEffect } from "react"
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// export default 'chores-page'

// const getChores = ({token, isLoggedIn}) => {
//   const [chores, setChores] = useState('')
  
//   useEffect(() => {
//     axios
//     .get('https://clean-sweep-team-14.herokuapp.com/chores/')
//     .then((res) => 
//       setChores(res.data))    
//   }, [])
  
  
//   if (chores){
//     return (
//       <>
//             <div>
//                 <div>
//                     <h1 style={{color:'light blue', textAlign:'center',  }}>🧹 Select Your Household Chores ! 🪠</h1>
//                 </div>
//                 <div>
//                     <getChores token={token}/>
//                 </div>

//             <div className="usersChores" style={{width: '70%', margin: 'auto', marginTop:'30px', padding:'20px', alignContent: 'center', height: '500px', overflow:'scroll', marginBottom:'50px'}}>
//             {chores.map((choreList) => (
//               <div style={{borderTop: 'dashed', borderBottom:'dashed', borderRight:'solid', borderLeft:'solid', borderColor:'green', textAlign:'center'}}>
//                     <Link
//                         to={`/chores/${choreList.pk}`}
//                         key={choreList.pk}
//                         style={{textDecoration:'none'}}>
//                     <h1 style={{color:'light blue'}}>{choreList.chore_chores}</h1></Link>
//                     <p>{choreList.chores}</p>
//                     <p className='showUser' style={{ fontSize:'.5em' }}>By: <strong>{choreList.user}</strong></p>
//                 </div>))}
//             </div>
//             </div>
//         </>)}
// }

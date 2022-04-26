import { useState } from 'react';
import './App.css';
import Table from './Table';
import { Users } from './Users';

////////////////////////////////BASIC SEARCH

// function App() {
//   const [query,setQuery] = useState("");
//   return (
//     <div className="App">
//       <h1>this is for searchFilters .....!</h1>
//         <input type="text" 
//         placeholder="Search..." 
//         style={{marginBottom:"20px"}}
//         onChange={e => setQuery(e.target.value.toLowerCase())}
//         />
//       <ul>
//         {Users.filter((asd)=>
//         asd.first_name.toLowerCase().includes(query)).map((user)=>
//           <li>{user.first_name}</li>
//         )}
//       </ul>
//     </div>
//   );
// }


/////////////////////////////////////////////////////SEARCH ON A DATATABLE

function App() {
  const [query,setQuery] = useState("");

  const searchResult =(Users)=>{
      return Users.filter((user)=> Object.keys(user)
      .filter(item => !(item === 'id' || item === 'gender') )
      .some((some)=>user[some].toLowerCase().includes(query)))
  }

  return (
    <div className="App">
      <h1>this is for searchFilters .....!</h1>
        <input type="text" 
        placeholder="Search..." 
        style={{marginBottom:"20px"}}
        onChange={e => setQuery(e.target.value.toLowerCase())}
        />
      <Table data ={searchResult(Users)}/>
    </div>
  );
}

export default App;

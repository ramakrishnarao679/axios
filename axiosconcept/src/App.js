import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App(){
  const [name, setName] = useState('');
  const [user, setUser] = useState([]);

  const postData = ()=>{
    axios
    .post(`https://62de906f976ae7460bdd024e.mockapi.io/users`,{
      name:name,
      age:26,
      Hobbies:['Dance','Piano', 'Chess'],
    })
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  };

  const deleteData =(id)=>{
    axios
    .delete(`https://62de906f976ae7460bdd024e.mockapi.io/users/${id}`)
    .then((response)=>{
      getData();
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const getData = ()=>{
    axios
    .get(`https://62de906f976ae7460bdd024e.mockapi.io/users`)
    .then((response)=>{
      console.log(response);
      setUser(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  };
  useEffect(()=>{
    getData();
  }, []);
  return (
    <div>
      <input onChange={(e)=>setName(e.target.value)} placeholder="Enter Data" />
      <button onClick={postData}>PostData</button>

      {user.map((user)=>{
        return (
          <>
          <h2>{`${user.id}${user.name}`}</h2>
          <button onClick={()=>deleteData(user.id)}>Delete</button>
          </>
        )
      })}
    </div>
  )
}
export default App;
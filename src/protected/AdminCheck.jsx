import React, { useEffect, useState , useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';

const AdminCheck = () => { 
  const { token } = useContext(AuthContext)
  const [status, setStatus] = useState(null);

  useEffect(() => {
    console.log(token);
    console.log(`${import.meta.env.VITE_BACKEND_URL}/scope-example/protectedadmin`)
    axios({
      method: 'get',
      url: `http://localhost:3000/scope-example/protectedadmin`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setStatus(response.data.message)
      })
      .catch(error => {
        setStatus(error.message);
      });
  }, []);


  return (
    <div>
      {status}
    </div>
  );
}

export default AdminCheck;
import './App.css';
import Button from './components/button/Button';
import Input from './components/input/Input';
import Form from './components/form/Form';
import { useState } from 'react';
function App() {

  const [user,setUser] = useState({name:"", password:""})

  const handleChange = (e) => {
    if(e.target.type==="text "){
      setUser({...user,name:e.target.value})
      console.log(user)
    }
    else if(e.target.type === "password"){
      setUser({...user,name:e.target.value})
    }
  }

  const handleClick = () => {
    if(user.name ===""){
      alert("kullanıcı adı bos gecilemez")
    }else if(user.password===""){
      alert("sifre bos gecilemez")
    }else {
      alert("Kullanıcı Adı : "+user.name+" "+"Parolanız"+ user.password)
    }
  }
  
  return (
    <div className="App">

      <h2>Giriş Formu</h2>

    <Form> 

      <Input type={"text"} value={user.name} placeholder="Kullanıcı Adı" onChange={handleChange}  />
      <Input type={"password"} value={user.password} placeholder="Şifre" onChange={handleChange}  />
      
      <Button onClick={handleClick} />

    </Form>




      
     

    
    </div>
  );
}

export default App;

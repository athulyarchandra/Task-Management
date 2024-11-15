import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import loginImg from '../assets/auth.png'


const Auth = ({ insideRegister }) => {
  const [inputData,setInputData] = useState({
    username:"",email:"",password:""
  })
  console.log(inputData);
  const handleRegister = (e)=>{
    e.preventDefault()
    console.log("Inside handleRegister");
    if(inputData.username && inputData.email && inputData.password){
      alert("Make API call")
    }else{
      alert("Please fill the form !!!!!!!!!!")
    }
    
  }

  return (
    <>
      <div style={{ width: '100%',backgroundColor: '' }} className=' d-flex justify-content-center align-items-center p-5'>
        <div style={{ width: '900px',backgroundColor: 'white' }} className="row rounded p-2">
          <div style={{backgroundColor:'#rgb(220, 201, 166)',borderRadius:'5px'}} className="col-lg-6 d-flex flex-column align-items-center justify-content-center ">
            <h1 style={{fontSize:'50px'}} className='text-center'>Manage</h1>
            <h1 style={{fontSize:'50px'}} className='text-center'> your way of</h1>
            <h1 style={{fontSize:'50px'}} className='text-center'>life</h1>
            <h1 style={{fontSize:'50px'}} className='text-center'>with us</h1>
            <p style={{fontSize:'25px', color:'brown'}} className='text-center'>Easy and fast.</p>
            <img width={'300px'} src={loginImg} alt="No image" />
          </div>
          <div className="col-lg-6">
            <p> START FOR FREE</p>
            {insideRegister ?
              <h4 className='text-warning'> SIGN UP TO EverAfter</h4>
              :
              <h4 className='text-warning'> SIGN IN TO EverAfter</h4>
            }
           
            { insideRegister?
              
              <span className='text-dark'>Already a member? <Link className='text-success' to={'/login'}>Login</Link></span>
              :
              <span className='text-dark'>New user? <Link className='text-success' to={'/register'}>Register</Link></span>
              } 
            <hr />
            <Form style={{lineHeight:'40px'}}>
              {insideRegister &&
                <><Form.Label controlId="floatingInputName" className='text-dark'>Name:</Form.Label><Form.Control value={inputData.username} onChange={e=>setInputData({...inputData,username:e.target.value})} type="text" placeholder="Enter your full name" /></>

              }
              <Form.Label className='text-dark'>Email: </Form.Label>
              <Form.Control value={inputData.email}  onChange={e=>setInputData({...inputData,email:e.target.value})} type="email" placeholder="Enter email" />
              <Form.Label className='text-dark'>Password: </Form.Label>
              <Form.Control value={inputData.password}  onChange={e=>setInputData({...inputData,password:e.target.value})} type="password" placeholder="Enter password" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check  type="checkbox" className="text-dark" label="Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notification Settings." />
              </Form.Group>
              {insideRegister ?
                <div>
                  <Button variant="primary" type="submit" className='mb-2'>
                    <Link onClick={handleRegister} to={'/login'} style={{textDecoration:'none',color:'white'}}>REGISTER</Link>
                  </Button>
                </div> 
                :
                <div>
                <Button variant="primary" type="submit" className='mb-2'>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>LOGIN</Link>
                </Button>
              </div>
              }
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
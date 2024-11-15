import React from 'react'
import Add from '../components/Add'




const Dashboard = () => {

  return (
    <>

      <div style={{ minHeight: '400px', width: '100%', backgroundColor: 'white' }} className="d-flex justify-content-center align-items-center p-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className='d-flex justify-content-center align-items-center' style={{ width: '50%' }}>
            <h1>Hello UserName..<i className="fa-solid fa-hands-clapping text-info"></i></h1>
          </div>
          <div style={{ width: '50%' }} className='d-flex flex-column justify-content-center align-items-center p-5'>
            <div><h1>Here You Can Manage You Task</h1>
              <img src="" alt="" />

            </div>
            <p className='' style={{ textAlign: 'justify' }}>A Task Management App is a digital tool designed to help individuals and teams organize, prioritize, and efficiently execute tasks and projects. These apps cater to various needs, from personal productivity to collaborative project management in professional settings.</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'white', color: 'black' }} className='d-flex flex-column justify-content-center align-items-center'>
        <h1>YOUR MANGEMENT</h1>
        <hr />
        <h3>My works</h3>
        <p ><Add/></p>
        <div style={{ width: '100%', borderColor: 'black' }} className="d-flex justify-content-start align-items-center  mx-5">
          <div style={{ borderColor: 'black',width:'600px',borderRadius:'15px' }} className='border mb-5 ms-5'>
            <div>
              <div className='d-flex flex-cloumn justify-content-start align-items-center p-5'>
                <div className='p-2 rounded'>
                  <p style={{borderRadius:'10px',borderColor:'black', fontSize:'20px',padding:'10px',width:'100%'}} className='border p-2'> Task Title : <span style={{color:'green'}}>*****</span> </p>
                  <p style={{borderRadius:'10px',borderColor:'black', fontSize:'20px',padding:'10px',width:'100%'}} className='border p-2'>Start Date : <span style={{color:'green'}}>*****</span></p>
                  <p style={{borderRadius:'10px',borderColor:'black', fontSize:'20px',padding:'10px',width:'100%'}} className='border p-2'>End Date : <span style={{color:'green'}}>*****</span></p>
                  <p style={{borderRadius:'10px',borderColor:'black', fontSize:'20px',padding:'10px',width:'100%'}} className='border p-2'>Task Description : <span style={{color:'green'}}>*****</span> </p>
  
                  <h3></h3>
                </div>
              </div>
            </div>
            <div  >
              <div className='d-flex justify-content-center align-items-center pb-1'>
                <div className='px-2 mx-5 rounded'>
                  <i style={{color:'red', fontSize:'30px'}} className="fa-solid fa-trash"></i>
                </div>
                <div style={{color:'red', fontSize:'30px'}} className='px-2 mx-5 rounded'><i className="fa-regular fa-pen-to-square"></i></div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>

      </div>

    </>
  )
}

export default Dashboard
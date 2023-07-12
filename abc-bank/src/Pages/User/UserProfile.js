import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Descriptions } from 'antd';
import { useEffect } from 'react';
import Home from '../Home';




const UserProfile = () => {
 
    const {
        token: { colorBgContainer },
      } = theme.useToken();

  const [userData, setUserData] = useState('')
  
  function openModal() {}
  const onHandleDelete = () => {}

    useEffect(() => {
      const storedData = localStorage.getItem('user');
      const data = storedData ? JSON.parse(storedData) : null;
      setUserData(data)
    }, []);

  return (
    
    
  <div className="site-layout-content" style={{ background: colorBgContainer }}>
    <Home />
       <br/>
       <br/>
       <img
          src='https://cdn.dribbble.com/users/398490/screenshots/1716348/users.gif'
          alt='Profile'
          className='rounded-circle mb-3'
          style={{ width: '150px', height: '100px' }}
        />
    <Descriptions title="User Details">
    <Descriptions.Item label="First Name">{userData.firstname}</Descriptions.Item>
    <Descriptions.Item label="Email">{userData.address}</Descriptions.Item>
    <Descriptions.Item label="Last Name">{userData.lastname}</Descriptions.Item>
    <Descriptions.Item label="NIC">{userData.nic}</Descriptions.Item>
    <Descriptions.Item label="Telephone">{userData.phone}</Descriptions.Item>
    <Descriptions.Item label="Address">
       {userData.city}, {userData.country}
    </Descriptions.Item>
  </Descriptions>  
  
  <div className='row'>
                <div className='col-12 p-2'>
                  <button
                    className='btn btn-outline-primary w-100'
                    onClick={openModal}
                  >
                    EDIT
                  </button>
                </div>
                <div className='col-12 p-2'>
                  <button
                    className='btn btn-outline-danger w-100'
                    onClick={() => {
                      onHandleDelete();
                    }}
                  > DELETE
                  </button>
                </div>
              </div>
              
        </div>
      
  );
};

export default UserProfile;
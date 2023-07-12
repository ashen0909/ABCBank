import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Descriptions } from 'antd';
import { useEffect } from 'react';
import Home from '../Home';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



const UserDashboard = () => {
 
    const {
        token: { colorBgContainer },
      } = theme.useToken();

  

  return (
    
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
            <Home />
            <Card sx={{ width: 400, marginTop: 10, marginInline: 'auto' }}>
      <CardContent>
        <h2>Account Balance</h2>
      </CardContent>
    </Card>
    <Card sx={{ width: 400, marginTop: 10, marginInline: 'auto'}}>
      <CardContent>
        <h2>Transaction</h2>
      </CardContent>
      <CardActions>
      <Button variant="contained">Contained</Button>
      </CardActions>
    </Card>
        </div>
      
  );
};

export default UserDashboard;
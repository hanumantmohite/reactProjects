import React ,{useEffect,useState}from 'react'
import { Table } from 'antd';
import axios from 'axios';
import { Col, Row } from 'antd';

//http://rustycoder.live:8080/user/data
const Axios = () => {

    const [data,setData]=useState([]);

    useEffect(() => {
      fetch();
    }, []);

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password',
        },
        
    
      ];

      const fetch = () => {
        axios.get('http://rustycoder.live:8080/user/data',)
          .then((res) => {
            setData(res.data.data);
          })
          .catch((err)=>{
            console.log(err)
          })
  return (
    <div style={{marginTop:"120px"}}>
    <Row>
  <Col span={10} offset={5}>
  <Table columns={columns} dataSource={data} />
  </Col>
</Row>


</div>
  )
  }
}
export default Axios
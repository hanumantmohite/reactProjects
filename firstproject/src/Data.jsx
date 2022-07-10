import React ,{useEffect,useState}from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

//http://rustycoder.live:8080/user/data
const Data = () => {

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
        axios.get('http://rustycoder.live:8080/user/data')
          .then((res) => {
            setData(res.data.data);
          })
          .catch((err)=>{
            console.log(err)
          })
  return (
    <div>

<Table columns={columns} dataSource={data} />
    </div>
  )
}
}
export default Data
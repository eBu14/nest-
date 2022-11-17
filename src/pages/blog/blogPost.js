import React, { useEffect, useState } from 'react';
import './blogPost.css'
import axios from 'axios';
import DogPost from '../components/dogPost';
function BlogPost() {
  const [data, setData] = useState([]);


  const getData = async () => {
    try {
      const res = await axios.get('https://dummyapi.io/data/v1/post?limit=10', {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "636a0100b23c1794f297d097"
        }
      })

      setData(res.data.data);

      console.log(res.data.data);
    } catch (err) {
      alert('dahiad yavul');
    }
  }
    useEffect(() => {
      getData();
    },[])

  return (
    <div className='blogpost'>
      <div className="homepage">
        
        {
          data.map((cur) => <DogPost tags={cur.tags} text={cur.text} firstName={cur.owner.firstName} lastName={cur.owner.lastName} publishDate={cur.publishDate} poster={cur.image} profile={cur.owner.picture} id={cur.id}/>)
        }

      </div>
    </div>

  );
}

export default BlogPost;
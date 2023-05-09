import React from 'react'
import Card from './Card.jsx'
const Category = () => {
  return (
    <>
    <center><h1>Category</h1></center>
     <div className='d-flex'>
        <Card title={"product"} img={"https://cdn.wallpapersafari.com/78/10/3FRsHv.jpg"}
    descrip={"The best free stock photos, royalty free images & videos shared by creators."} />
      <Card title={"product"} img={"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&w=1000&q=80"}
    descrip={"The best free stock photos, royalty free images & videos shared by creators."} />
      <Card title={"product"} img={"https://cdn.wallpapersafari.com/78/10/3FRsHv.jpg"}
    descrip={"The best free stock photos, royalty free images & videos shared by creators."} />
      <Card title={"product"} img={"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&w=1000&q=80"}
    descrip={"The best free stock photos, royalty free images & videos shared by creators."} />
    </div>
    </>
  )
}

export default Category

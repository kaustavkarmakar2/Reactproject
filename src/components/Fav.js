import React from 'react';



const Posts=({posts,loading})=>{
  if(loading){
   return <h2>Loading....</h2>
  }
  return(
   <ul className='list-group mb-2'>
    <table className="table">
    <thead>
      <tr>
        <th>Bankname</th>
        <th>Branch</th>
        <th>IFSC</th>
      </tr>
    </thead>
    </table>
    {posts.map(post =>(<li key={post.id} className='list-group-item'>
   
             
  <table className="table">
    
    <tbody>
      <tr>
        <td>{post.bank_name}</td>
        <td>{post.branch}</td>
        <td>{post.ifsc}</td>
      </tr>
    </tbody>
  </table></li>))}
   </ul>
  )
}
export default Posts;
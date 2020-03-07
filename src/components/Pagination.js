import React from 'react';


  const Paginations =({postsPerPage,totalPosts,paginate})=>{
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
     pageNumbers.push(i);
  
    }
    return(
      <nav aria-label="Page navigation example">
        <ul className="pagination">{pageNumbers.map(number=>(<li key={number} className="page-item">
        <a href="#/fav" onClick={()=>paginate(number)} className="page-link">{number}</a>
        </li>))}</ul>
      </nav>
    )
  }
  export default Paginations;
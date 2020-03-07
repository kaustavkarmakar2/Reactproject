import React,{useState,useEffect} from 'react';

import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Fav from './components/Fav.js';
import Pagination from './components/Pagination';
import axios from 'axios';
import {BrowserRouter,Switch,Route,NavLink} from "react-router-dom";

function App() {
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(10);
  useEffect(()=>{
    const fetchPosts = async ()=>{
      setLoading(true);
      const res = await axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI`);
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  },[]);
  console.log("items",posts)
  //Get current posts
  const indexOfLastPost=currentPage* postsPerPage;
  const indexOfFirstPost=indexOfLastPost-postsPerPage;
  const currentPosts =posts.slice(indexOfFirstPost,indexOfLastPost)
  //change page
  const paginate=(pageNumbers)=>setCurrentPage(pageNumbers)

  
  return (
    <BrowserRouter>
    
    <div>
     <Navbar/>
    
     <Switch >
     <div>
        <div className="sidenav">
        <ul >
        <li>
            <NavLink   to="/bank">Bank</NavLink>
        </li>
        <li>
            <NavLink  to="/fav">Favorite</NavLink>
        </li>
        
        </ul>
         </div>
        <div className="main">
          <Route path="/bank" component={Home} /> 
          <Route path="/fav">
            <Fav posts={currentPosts} loading={loading}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
          </Route>
        </div>
        </div>
      </Switch>
    </div>
    
    
    </BrowserRouter>
  );
}

export default App;

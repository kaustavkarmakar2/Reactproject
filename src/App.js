import React,{useState,useEffect} from 'react';

import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Fav from './components/Fav.js';
import Pagination from './components/Pagination';
import Sidenav from './components/sidenav';
import axios from 'axios';
import {BrowserRouter,Switch,Route} from "react-router-dom";


function App(state,city) {
  
  state = {
    city: []

  }
  // const city= [
  //   {
  //     id:1,
      
  //     location:"MUMBAI",
      
  //   },
  //   {
     
  //     location:"KOLKATA",
      
  //   }
  // ];
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(10);
  // var city =[
  //   {location:"KOLKATA"},
  //   {location:"MUMBAI"},
  //   {location:"DELHI"}
  // ]
  // console.log("beach",city[location]);
  useEffect(()=>{
    // let city="MUMBAI";
    // city={

    // }
    let cities = posts.map(function (post) {
      return post.city;
      console.log("fuvk",post.city);
    })
    let pathvars='DELHI';
    // console.log("city",city)
    const fetchPosts = async ()=>{
      setLoading(true);
      const res = await axios.get(`https://vast-shore-74260.herokuapp.com/banks?city=`+pathvars);
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  },[]);
  
  
  console.log("items",posts.city)
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
       <Sidenav/>
        <div className="main">
          <Route path="/bank" component={Home} /> 
          <Route path="/fav">
            <Fav posts={currentPosts} loading={loading} city={city}
           
            />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          </Route>
        </div>
        </div>
      </Switch>
    </div>
    
    
    </BrowserRouter>
  );
}

export default App;

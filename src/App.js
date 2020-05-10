import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import { Switch, Route } from "react-router-dom";
import  Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Blogs from "./pages/Blogs.js";

// 1.st Step
export const BlogContext = React.createContext()

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
        .get ('/posts')
        .then (res => setPosts(res.data))
        .catch (err => console.log(err))
  }, [])

  return (
    <BlogContext.Provider value = {posts} >
      <div>
          <Navbar/>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/:id" component={Blogs} />
              </Switch>
      </div>

    </BlogContext.Provider>
  );
}

export default App;

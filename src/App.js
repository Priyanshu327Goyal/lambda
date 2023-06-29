import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Todo from "./components/Todo.jsx";
import Blog from "./components/blog.jsx";
import Learnings from "./components/learning.jsx";
import Compose from "./components/compose.jsx";
import Post from "./components/post.jsx";
import Problem from "./components/problem.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/items" element={<Todo />} />
        <Route exact path ="/posts" element={<Blog />}/>
        <Route exact path="/posts/:postId" element={<Post/>}/>
        <Route exact path="/learnings" element={<Learnings />}/>
        <Route exact path="/compose" element={<Compose />}/>
        <Route  path="/problems" element={<Problem />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


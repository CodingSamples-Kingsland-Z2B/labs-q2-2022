import { useState, useEffect } from "react";
import { getAllOrigami } from "../services";
import Posts from "./Posts";
import Post from "./Post";

function Main() {
    const [posts,setPosts] = useState([]);
    // TODO add fetch service to get all (or last 10) posts and display on page
    

    useEffect(()=>{
        getAllOrigami()
        .then(data=>{
            data = data.reverse().slice(0,10);
            //setPosts(data);
            console.log(data);
            data.map(item=>{
                item.author = item.author.username;
                return item;
            });
            setPosts(data);
        })
    },[])

    const loadPosts = posts.map((post,index)=> {
        return ( <Post key={post._id} index={index+1} description={post.description} author={post.author}/>)
    })
	return (
        <div className="Main">
            <h1> Oragami!</h1>
            <Posts>
               {loadPosts}
            </Posts>
        </div>
    );
}

export default Main;


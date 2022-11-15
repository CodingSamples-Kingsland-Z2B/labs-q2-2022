import Posts from "./Posts";
import Post from "./Post";

function Main() {
    // TODO add fetch service to get all (or last 10) posts and display on page
    const posts = [{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!", author:"anon"},{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!", author:"anon"},{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!", author:"anon"},{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!", author:"anon"},{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!", author:"anon"}];
    const loadPosts = posts.map((post,index)=> {
        return ( <Post key={index} index={index+1} description={post.description} author={post.author}/>)
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


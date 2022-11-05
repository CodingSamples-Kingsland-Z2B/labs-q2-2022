import Posts from "./Posts";
import Post from "./Post";

function Main() {
	return (
        <div className="Main">
            <h1> Oragami!</h1>
            <Posts>
                <Post  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!" author="random" />
                <Post  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!" author="random" />
                <Post description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!" author="random" />
                <Post  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!" author="random" />
                <Post description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit consequatur veritatis reprehenderit quo nihil fuga libero natus voluptate perspiciatis, sit magni, illum, laudantium quos asperiores maxime aspernatur omnis odit!" author="random" />
    
            </Posts>
        </div>
    );
}

export default Main;


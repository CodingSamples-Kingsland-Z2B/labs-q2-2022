import fourOhFour from "../images/404.png"

function FourOhFour() {
	return (
        <div className="FourOhFour">
            <h1>OOPS! Something went wrong!</h1>
            <img src={fourOhFour} alt="an issue occured"/>
        </div>
    );
}

export default FourOhFour;

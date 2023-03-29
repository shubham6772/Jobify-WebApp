import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from "../componants";
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            autem velit in deleniti repellendus, ex nulla dignissimos corrupti
            repellat? Quaerat enim sapiente
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};



export default Landing;

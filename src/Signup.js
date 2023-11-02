

import "./Footer.css"

const Signup = () => {
  return (
    <div id="di">
    <center><div className="signup-container"> {/* Apply the class name here */}
      <h2 id="s">Signup</h2>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
           
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
        
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
       
          />
        </div>
        <button type="button" >
          Signup
        </button>
      </form>
      
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
    <br /><br />
      <br /><br /><br />
    </center>
    </div>
  );
};

export default Signup;
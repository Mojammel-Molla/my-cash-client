import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className="h-full mt-20 justify-center">
      <div className="card shrink-0 w-full mx-auto max-w-lg shadow-2xl bg-base-100 my-auto">
        <h1 className="text-center font-bold text-3xl mt-5">Log In Please</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pin Code</span>
            </label>
            <input
              type="number"
              placeholder="Your Pin Code"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p href="#" className="label-text-alt ">
                Haven't register yet? Please{' '}
                <Link to="/register" className="font-bold text-blue-700">
                  Register
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

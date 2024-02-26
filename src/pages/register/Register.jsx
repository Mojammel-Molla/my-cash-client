import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="h-full mt-20 justify-center">
      <div className="card shrink-0 w-full mx-auto max-w-lg shadow-2xl bg-base-100 my-auto">
        <h1 className="text-center font-bold text-3xl ">Register Please</h1>
        <form className="card-body">
          <div className="flex gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone No:</span>
              </label>
              <input
                type="number"
                placeholder="Your Phone Number"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email:</span>
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
              <span className="label-text"></span>
            </label>
            <select className="select select-bordered w-full max-w-lg">
              <option disabled selected>
                Account Type
              </option>
              <option>User</option>
              <option>Agent</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Pin Code:</span>
            </label>
            <input
              type="number"
              placeholder="Your Pin Code"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">NID:</span>
            </label>
            <input
              type="file"
              placeholder="Your Nid Card"
              className=""
              required
            />
          </div>

          <label className="label">
            <p className="label-text-alt ">
              Already registered? Please
              <Link to="/login" className="font-bold text-blue-700">
                Log In
              </Link>
            </p>
          </label>
          <div className="form-control mt-6">
            <button className="btn text-white bg-[#0074d9]">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

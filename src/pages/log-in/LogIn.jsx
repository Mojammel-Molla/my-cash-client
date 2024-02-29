import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import UseAxios from '../../hooks/UseAxios';
import { useEffect, useState } from 'react';

const LogIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState([]);
  const axios = UseAxios();
  useEffect(() => {
    axios.get(`/users/?email=${'motin@gmail.com'}`).then(res => {
      setUser(res.data);

      console.log(user);
    });
  }, [axios, user]);

  const onSubmit = data => {
    if (data.email !== user.email) {
      return alert('Please enter a correct email');
    } else if (data.pin !== user.pin) {
      return alert('Please enter valid pin');
    }
    console.log(data);
    navigate('/');
  };

  return (
    <div className="h-full mt-20 justify-center">
      <div className="card shrink-0 w-full mx-auto max-w-lg shadow-2xl bg-base-100 my-auto">
        <h1 className="text-center font-bold text-3xl mt-5">Log In Please</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register('email', {
                required: true,
              })}
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
            {errors.email && <p>Please enter valid email.</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pin Code</span>
            </label>
            <input
              {...register('pin', { required: true, minLength: 5 })}
              type="number"
              placeholder="Your Pin Code"
              className="input input-bordered"
              required
            />
            {errors.pin && <p>Please enter 5 digits pin.</p>}
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
            <button className="btn text-white bg-[#0074d9] hover:bg-blue-800">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

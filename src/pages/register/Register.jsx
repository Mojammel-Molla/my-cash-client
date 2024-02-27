import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import UseAxios from '../../hooks/UseAxios';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;
const Register = () => {
  const axios = UseAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    console.log(data);
    const imageFile = { image: data.nid[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const newUser = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        accountType: data.accountType,
        nid: res.data.data.display_url,
        balance: data.accountType === 'user' ? '40' : '100000',
        pin: data.pin,
      };
      const userRes = await axios.post('/users', newUser);
      console.log(userRes.data);
      if (userRes.data.insertedId) {
        alert('User added to the database');
      }
      console.log(res.data);
      navigate('/');
    }
  };
  return (
    <div className="h-full mt-20 justify-center">
      <div className="card shrink-0 w-full mx-auto max-w-lg shadow-2xl bg-base-100 my-auto">
        <h1 className="text-center font-bold text-3xl ">Register Please</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="flex gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                {...register('name', { required: true })}
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
                {...register('phone', { required: true })}
                type="number"
                placeholder="Your Phone Number"
                className="input input-bordered"
                required
              />
              <p>{errors.phone?.message}</p>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              {...register('email', { required: true })}
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
            <select
              defaultValue="default"
              {...register('accountType', { required: true })}
              className="select select-bordered w-full max-w-lg"
            >
              <option disabled value="default">
                Account Type
              </option>
              <option>user</option>
              <option>agent</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Pin Code:</span>
            </label>
            <input
              {...register('pin', { required: true, minLength: 5 })}
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
              {...register('nid', { required: true })}
              type="file"
              placeholder="Your Nid Card"
              className=""
              required
            />
          </div>

          <label className="label">
            <p className="label-text-alt ">
              Already registered?
              <Link to="/login" className="font-bold text-blue-700">
                Log In
              </Link>
            </p>
          </label>
          <div className="form-control mt-6">
            <button className="btn text-white hover:bg-blue-800 bg-[#0074d9]">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

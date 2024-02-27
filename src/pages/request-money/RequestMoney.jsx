import { useForm } from 'react-hook-form';
import UseAxios from '../../hooks/UseAxios';
import { useNavigate } from 'react-router-dom';

const RequestMoney = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = data => {
    const axios = UseAxios();
    const requestData = {
      email: data.email,
      massage: data.massage,
    };

    console.log(data, requestData);

    axios.post('/requests', requestData).then(res => {
      if (res.data.insertedId) {
        alert('Request has been sent');
        navigate('/');
      }
    });
  };
  return (
    <div className="h-full mt-20 justify-center">
      <div className="card shrink-0 w-full mx-auto max-w-lg shadow-2xl bg-base-100 my-auto">
        <h1 className="text-center font-bold text-3xl mt-5">
          Request for money
        </h1>
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Massage</span>
            </label>
            <textarea
              {...register('massage', {
                required: true,
              })}
              placeholder="Type here"
              className="textarea textarea-bordered textarea-lg w-full max-w-lg"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white bg-[#0074d9] hover:bg-blue-800">
              Sent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestMoney;

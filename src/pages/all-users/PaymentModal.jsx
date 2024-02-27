import { useForm } from 'react-hook-form';

const PaymentModal = ({ setShowModal }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert('Payment has been sent');
    setShowModal(false);
  };
  return (
    <div className="h-full mt-20 justify-center">
      <div className="card shrink-0 w-full mx-auto max-w-lg shadow-2xl bg-base-100 my-auto">
        <h1 className="text-center font-bold text-3xl mt-5">Send Money</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            {/* <label className="label">
              <span className="label-text">Email</span>
            </label> */}
            <select
              defaultValue="default"
              {...register('payUser', { required: true })}
              className="select select-bordered w-full max-w-lg"
            >
              <option disabled value="default">
                Registered users
              </option>
              <option>joshim</option>
              <option>motin</option>
              <option>jamal</option>
              <option>korim</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Amount</span>
            </label>
            <input
              {...register('payAmount', { required: true })}
              type="number"
              placeholder="Enter your amount"
              className="input input-bordered"
              required
            />
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

export default PaymentModal;

import { useForm } from 'react-hook-form';
import UseAxios from '../../hooks/UseAxios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SendMoneyModal = () => {
  const axios = UseAxios();
  const navigate = useNavigate();
  const [usersName, setUsersName] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const sendMoneyData = {
      sender: 'munna',
      receiver: data.payUser,
      amount: data.payAmount,
      accountType: 'user',
      // fee: (data.payAmount / 100) * (0.05).toFixed(2),
      fee: data.payAmount >= 100 ? 5 : 'No fee Applicable',
    };
    const commissionData = {
      sender: 'munna',
      receiver: data.payUser,
      amount: data.payAmount,
      accountType: 'user',
      fee: data.payAmount >= 100 ? 5 : 'No fee Applicable',
      method: 'Send Money',
    };

    console.log(commissionData, sendMoneyData);
    // if (data.payAmount >= 100) {
    //   axios.post('/commissions', commissionData).then(res => {
    //     if (res.data.insertedId) {
    //       console.log('Data posted to the commission ', res.data);
    //     }
    //   });
    // }
    // axios.post('/transactions', sendMoneyData).then(res => {
    //   console.log(res.data);
    //   if (res.data.insertedId) {
    //     alert('Payment has been sent');
    //     navigate('/all-users');
    //   }
    // });
  };
  useEffect(() => {
    axios.get('/users').then(res => {
      setUsersName(res.data);
    });
  }, [axios]);
  return (
    <div className="h-full mt-20 justify-center">
      <div className="card shrink-0 w-full mx-auto max-w-lg shadow-2xl bg-base-100 my-auto">
        <h1 className="text-center font-bold text-3xl mt-5">Send Money</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <select
              defaultValue="default"
              {...register('payUser', { required: true })}
              className="select select-bordered w-full max-w-lg"
            >
              <option disabled value="default">
                Registered users
              </option>
              {usersName?.map(user => (
                <option key={user._id}>{user.name}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Amount</span>
            </label>
            <input
              {...register('payAmount', { required: true, min: 50 })}
              type="number"
              placeholder="Enter your amount"
              className="input input-bordered"
              required
            />
            {errors.payAmount && (
              <p className="text-red-500">Minimum transaction limit is 50!</p>
            )}
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

export default SendMoneyModal;

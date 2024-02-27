import { useState } from 'react';
import PaymentModal from './PaymentModal';
import SampleNid from '../../assets/dummy-nid.jpg';
const SingleUser = ({ handleCashIn, handleDelete, usersData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal ? (
        <PaymentModal setShowModal={setShowModal} />
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>NID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Payment</th>
                <th>Balance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData?.map(user => (
                <tr key={user._id}>
                  <th>
                    <div className="avatar">
                      <div className="mask  w-12 h-12">
                        {user.nid ? (
                          <img src={user.nid} alt="Nid" />
                        ) : (
                          <img src={SampleNid} alt="Nid" />
                        )}
                      </div>
                    </div>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <h1 className="font-medium">{user.accountType}</h1>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => setShowModal(!showModal)}
                      className="btn bg-green-500 text-white btn-sm mr-2"
                    >
                      Sent Money
                    </button>
                    <button
                      onClick={() => handleCashIn(user._id)}
                      className="btn bg-lime-500 text-white btn-sm"
                    >
                      Cash In
                    </button>
                  </td>
                  <td>${user.balance}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-ghost  text-red-700"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SingleUser;

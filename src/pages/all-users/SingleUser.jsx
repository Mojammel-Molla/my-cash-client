import { useState } from 'react';
import SendMoneyModal from './SendMoneyModal';
import SampleNid from '../../assets/dummy-nid.jpg';
import { Link } from 'react-router-dom';
const SingleUser = ({ handleDelete, usersData }) => {
  const [sendMoneyModal, setSendMoneyModal] = useState(false);

  return (
    <div>
      {/* Send Money modal start here */}
      {sendMoneyModal ? (
        <SendMoneyModal setSendMoneyModal={setSendMoneyModal} />
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
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
                        <Link to={`/user-transactions/${user.name}`}>
                          <button className=" btn btn-xs font-bold">
                            {user.name}
                          </button>
                        </Link>
                        <h1 className="font-medium">{user.accountType}</h1>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <Link to="/send-money">
                      <button className="btn bg-green-500 hover:bg-green-700 text-white btn-sm ">
                        Sent Money
                      </button>
                    </Link>
                    <Link to="/cash-in">
                      <button className="btn bg-lime-500 hover:bg-lime-700 text-white btn-sm mx-2">
                        Cash In
                      </button>
                    </Link>
                    <Link to="/cash-out">
                      <button
                        className="btn bg-orange-400 hover:bg-orange-600
                      text-white btn-sm"
                      >
                        Cash Out
                      </button>
                    </Link>
                  </td>
                  <td>${user.balance}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-sm  text-white bg-red-600 hover:bg-red-800"
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
      {/* Send Money modal end here */}

      {/* Cash in modal start here */}

      {/* Cash in modal end here */}
    </div>
  );
};

export default SingleUser;

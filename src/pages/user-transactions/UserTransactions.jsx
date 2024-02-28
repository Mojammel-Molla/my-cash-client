import { useEffect, useState } from 'react';
import UseAxios from '../../hooks/UseAxios';

const UserTransactions = () => {
  const axios = UseAxios();
  const [transactions, setTransactions] = useState([]);
  const name = 'munna';
  useEffect(() => {
    axios.get(`/user-transactions/?name=${name}`).then(res => {
      setTransactions(res.data);
    });
  }, [axios]);
  console.log(transactions);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>No:</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Transaction Fee</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction, index) => (
              <tr key={transaction._id}>
                <td></td>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-semibold">{transaction.sender}</div>
                      <h1 className="font-normal">{transaction.accountType}</h1>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{transaction.receiver}</td>

                <td>${transaction.amount}</td>
                <td>${transaction.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTransactions;

import { useEffect, useState } from 'react';
import UseAxios from '../../hooks/UseAxios';

const Commissions = () => {
  const axios = UseAxios();
  const [allCommissions, setAllCommissions] = useState([]);
  useEffect(() => {
    axios.get('/commissions').then(res => {
      setAllCommissions(res.data);
    });
  }, [axios]);

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
              <th>Method</th>
              <th>Commission Fee</th>
            </tr>
          </thead>
          <tbody>
            {allCommissions?.map((commission, index) => (
              <tr key={commission._id}>
                <td></td>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-semibold">{commission.sender}</div>
                      <h1 className="font-normal">{commission.accountType}</h1>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{commission.receiver}</td>

                <td>${commission.amount}</td>
                <td>{commission.method}</td>
                <td>${commission.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Commissions;

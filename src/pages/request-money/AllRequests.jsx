import { useEffect, useState } from 'react';
import UseAxios from '../../hooks/UseAxios';

const AllRequests = () => {
  const axios = UseAxios();
  const [allRequests, setAllRequests] = useState([]);
  useEffect(() => {
    axios.get('/requests').then(res => {
      setAllRequests(res.data);
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
              <th>Email</th>
              <th></th>
              <th>Massage</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allRequests?.map((request, index) => (
              <tr key={request._id}>
                <td></td>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-semibold">{request.email}</div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold"></td>

                <td>{request.massage}</td>

                <td>Sent Money</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequests;

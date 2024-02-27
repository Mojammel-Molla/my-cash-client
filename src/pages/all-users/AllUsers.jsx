import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
  const { refetch, data } = useQuery({
    queryKey: [],
    queryFn: () => fetch('http://localhost:5000/users').then(res => res.json()),
  });

  console.log(data);
  return (
    <div>
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
            {/* row 1 */}
            {data?.map(user => (
              <tr key={user._id}>
                <th>
                  <div className="avatar">
                    <div className="mask  w-12 h-12">
                      <img src={user.nid} alt="Nid" />
                    </div>
                  </div>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <button className="btn bg-green-500 text-white btn-sm mr-2">
                    Sent Money
                  </button>
                  <button className="btn bg-lime-500 text-white btn-sm">
                    Cash In
                  </button>
                </td>
                <td>${user.balance}</td>
                <th>
                  <button className="btn btn-ghost  text-red-700">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

import { useQuery } from '@tanstack/react-query';
import SingleUser from './SingleUser';

const AllUsers = () => {
  const { refetch, data } = useQuery({
    queryKey: [],
    queryFn: () => fetch('http://localhost:5000/users').then(res => res.json()),
  });

  console.log(data);

  const handleSendMoney = id => {
    console.log(`Money sent to the user of ${id}`);
  };
  const handleCashIn = id => {
    console.log(`Cash in to the user of ${id}`);
  };
  const handleDelete = id => {
    console.log(`Money sent to the user of ${id}`);
  };
  return (
    <div>
      <SingleUser
        handleCashIn={handleCashIn}
        handleSendMoney={handleSendMoney}
        handleDelete={handleDelete}
        usersData={data}
        refetch={refetch}
      ></SingleUser>
    </div>
  );
};

export default AllUsers;

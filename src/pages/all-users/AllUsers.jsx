import { useQuery } from '@tanstack/react-query';
import SingleUser from './SingleUser';
import UseAxios from '../../hooks/UseAxios';

const AllUsers = () => {
  const axios = UseAxios();
  const { refetch, data } = useQuery({
    queryKey: [],
    queryFn: () => fetch('http://localhost:5000/users').then(res => res.json()),
  });

  console.log(data);

  const handleDelete = id => {
    confirm('Are your sure to delete?', { id });

    axios.delete(`/users/${id}`).then(res => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        refetch();
        console.log(`Deleted the user of ${id}`);
      }
    });
  };
  return (
    <div>
      <SingleUser
        handleDelete={handleDelete}
        usersData={data}
        refetch={refetch}
      ></SingleUser>
    </div>
  );
};

export default AllUsers;

const Transactions = () => {
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
            <tr>
              <td></td>
              <td>1</td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold">Sender Name</div>
                    <h1 className="font-normal">Account Type</h1>
                  </div>
                </div>
              </td>
              <td className="font-semibold">Receiver Name</td>

              <td>$100</td>
              <td>$5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

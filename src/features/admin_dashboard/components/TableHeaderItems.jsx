
const TableHeaderItems = () => {
    return (
    <tr>
      <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">ID</th>
      <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Username</th>
      <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Email</th>
      <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Password</th>
      <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Role</th>
      <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Action</th>
    </tr>
    );
};

export default TableHeaderItems;
import React from 'react';

const ReservationsTable = ({ reservationslist }) => {
  return (
    <table className="table-auto overflow-scroll w-2/3 text-left">
      <thead>
        <tr className="dark:bg-card-dark bg-icons text-white">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Time</th>
          <th className="px-4 py-2">Price (€)</th>
        </tr>
      </thead>
      <tbody>
        {reservationslist.map((reservationslist, index) => (
          <tr
            key={index}
            className="dark:bg-container-dark bg-white font-semibold"
          >
            <td className="border dark:border-card-dark px-4 py-2">
              {reservationslist.company}
            </td>
            <td className="border dark:border-card-dark px-4 py-2">
              {reservationslist.date}
            </td>
            <td className="border dark:border-card-dark px-4 py-2">
              {reservationslist.time}
            </td>
            <td className="border dark:border-card-dark px-4 py-2">
              {reservationslist.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReservationsTable;

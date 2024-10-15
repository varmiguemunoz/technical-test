function InformationTable({ contacts, style }) {
  const sortedLastName = [...contacts].sort((a, b) =>
    a.userLastname.localeCompare(b.userLastname)
  );

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>

      <tbody>
        {sortedLastName?.map((item, index) => (
          <tr key={index}>
            <td style={style.tableCell}>{item.userFirstname}</td>
            <td style={style.tableCell}>{item.userLastname}</td>
            <td style={style.tableCell}>{item.userPhone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InformationTable;

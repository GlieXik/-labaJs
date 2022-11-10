const createTable = () => {
  const a = document.querySelector(".value").value;
  const b = a && 130;
  const c = a && a - b;
  return `
    <table style="border: 1px solid black;">
    <tr>
      <th>Дохід</th>
      <th>Податок</th>
      <th>Чисті</th>
    </tr>
    <tr>
      <td>${a}</td>
      <td>${b}</td>
      <td>${c}</td>
    </tr>
  </table>
  `;
};

const myFunction = () => {
  new_window = window.open();
  new_window.document.write(createTable());
  new_window.document.close();
};
const del = () => {
  document.querySelector(".value").value = "";
};

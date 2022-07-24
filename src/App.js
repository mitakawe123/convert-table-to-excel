function App() {
  const data = [
    { id: 12, name: "georgi" },
    { id: 3, name: "ivana" },
    { id: 33, name: "bishop" },
    { id: 41, name: "gabriel" },
  ];

  const exportData = (tableID, filename = "") => {
    const dataType = "application/vnd.ms-excel";
    const tableSelect = document.getElementById("tableID");
    const tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");

    filename = filename ? filename + ".xls" : "Data.xls";
    let downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      const blob = new Blob(["\ufeff", tableHTML], {
        type: dataType,
      });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      downloadLink.href = "data:" + dataType + ", " + tableHTML;

      downloadLink.download = filename;
      downloadLink.click();
    }
  };

  return (
    <div className="App">
      <table id="tableID">
        {data.map((sheet) => (
          <div key={sheet.id}>
            <tr>
              <th>{sheet.id}</th>
              <th>{sheet.name}</th>
            </tr>
          </div>
        ))}
      </table>
      <button onClick={exportData}>Export</button>
    </div>
  );
}

export default App;

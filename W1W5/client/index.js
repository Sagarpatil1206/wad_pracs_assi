const getDataButton = document.getElementById('getDataButton');
const tableBody = document.getElementById('tableBody');

getDataButton.addEventListener('click', async () => {
  try {
    const response = await axios.get('http://localhost:5000/getdata');
    const { allPosts } = response.data;
    console.log(allPosts);

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Generate table rows
    allPosts.forEach((student) => {
      const row = document.createElement('tr');

      // Create table cells for each data field
      Object.entries(student).forEach(([key, value]) => {
        const cell = document.createElement('td');
        cell.textContent = ` ${value}`;
        row.appendChild(cell);
      });

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error(error);
  }
});
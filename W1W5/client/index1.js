const dataButton = document.getElementById();
const tableBody = document.getElementById();

dataButton.addEventListener('click',async()=>{
  try {
    const postDetails = await axios.get('http://localhost:5000')
  } catch (error) {
    
  }
})
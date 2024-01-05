// Function to generate a random string of specified length
function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars.charAt(randomIndex);
    }
    return result;
  }
  
  // Function to generate the unique ID
  function generateUniqueID() {
    const randomString = generateRandomString(4); // Change the number to adjust the length of the random string
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDate = `${month}${day}${year}`;
    return `${randomString}${formattedDate}`;
  }
  
  export default { generateUniqueID };
  
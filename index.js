// Add your code here
function submitData(name, email) {
   
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => response.json()) 
      .then(data => {
        
        const newIdElement = document.createElement('p');
        newIdElement.textContent = `New ID: ${data.id}`;
        document.body.appendChild(newIdElement);
      })
      .catch(error => {
        
        const errorMessageElement = document.createElement('p');
        errorMessageElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessageElement);
      });
  }
  
  
  submitData('sam', 'samomwerif2@gmail.com');
  
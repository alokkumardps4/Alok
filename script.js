function showMessage() {
  const messageBox = document.createElement('div');
  messageBox.textContent = "Hello, Alok! You're learning JavaScript successfully!";
  messageBox.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #4b0082;
    color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    z-index: 1000;
  `;
  
  document.body.appendChild(messageBox);
  
  setTimeout(() => {
    messageBox.remove();
  }, 3000);
}
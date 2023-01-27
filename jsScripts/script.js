function myFunction(text) {
    // Get the text field
    var copyText = document.getElementById("copyText");
  
    // Select the text field
    //copyText.select();
    //copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(text);
  
    // Alert the copied text
    alert("Copied Text!");
  }
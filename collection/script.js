function navigate(page){
  alert("Navigating to " + page);
}

function viewItem(item){
  alert("Viewing: " + item);
}


function printProduct(productName){
  let printWindow = window.open('', '', 'width=600,height=600');

  printWindow.document.write(`
    <html>
    <head>
      <title>Print Product</title>
      <style>
        body { font-family: Arial; padding: 20px; }
        h2 { color: #4f46e5; }
      </style>
    </head>
    <body>
      <h2>Product Details</h2>
      <p><strong>Product:</strong> ${productName}</p>
      <p>Printed from Phil Lucky Fashion Store</p>
      <script>
        window.print();
      </script>
    </body>
    </html>
  `);

  printWindow.document.close();
}

function editProduct(productName){
  alert("Edit product: " + productName);
}
function deleteProduct(productName){
  if(confirm("Delete " + productName + "?")){
    alert(productName + " deleted (demo only)");
  }
}
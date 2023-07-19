 // Set default background color and text color for inputs
 window.onload = function() {
   document.getElementById("backgroundColor").value = "#dddddd";
   document.getElementById("textColor").value = "#999999";
 }

 function generateLink(event) {
   event.preventDefault();

   var width = document.getElementById("width").value;
   var height = document.getElementById("height").value;
   var format = document.getElementById("format").value;
   var backgroundColor = document.getElementById("backgroundColor").value.substr(1);
   var textColor = document.getElementById("textColor").value.substr(1);
   var text = document.getElementById("text").value.replaceAll(" ", "+");
   var font = document.getElementById("font").value;

   var link = "https://placehold.co/" + width + "x" + height + "/" + backgroundColor + "/" + textColor + "." + format;
   if (text) {
     link += "?text=" + text;
   }
   link += "&font=" + font;

   document.getElementById("output").innerHTML = `
        <div class="card card-result">
          <input type="text" class="form-control" value="${link}" readonly>
          <img src="${link}" alt="Preview" class="img-preview">
        </div>
      `;
 }

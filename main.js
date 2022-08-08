function appear(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
 }

 const collection = document.getElementsByClassName("logo");
 collection.style.backgroundColor = "black";
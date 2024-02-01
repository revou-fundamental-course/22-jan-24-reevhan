let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}

function validasiForm() {
    let a = document.forms["contact-us"]["username"].value;
    let b = document.forms["contact-us"]["email"].value;
    let c = document.forms["contact-us"]["phone"].value;
    if (a == "") {
        var hasilA = document.getElementById('hasil-username');
        hasilA.innerHTML = "<p style='color:red; margin:0;'>Nama harus diisi.</p>";
        if(b & c !== "") {
            return true
        }
    }
    if (b == "") {
        var hasilB = document.getElementById('hasil-email');
        hasilB.innerHTML = "<p style='color:red; margin:0;'>Email harus diisi.</p>"
        if (a & c !== "") {
            return true
        }
    }
    if (c == "") {
        var hasilC = document.getElementById('hasil-phone');
        hasilC.innerHTML = "<p style='color:red; margin:0;'>Nomor Telepon harus diisi.</p>";
        if (a & b !== "") {
            return true
        }
    }
    if (a !== ""){
        var hasilA = document.getElementById('hasil-username')
        hasilA.innerHTML = "";
        if (b && c !== "") {
            return true
        }
    }
    if (b !== ""){
        var hasilB = document.getElementById('hasil-email')
        hasilB.innerHTML = "";
        if (a && c !== "") {
            return true
        }
    }
    if (c !== ""){
        var hasilC = document.getElementById('hasil-phone')
        hasilC.innerHTML = "";
        if (a && b !== "") {
            return true
        }
    }
    let d = document.forms["contact-us"]["type-product"].value;
    if (d > 0) {
        if (a && b && c ) {
            return true
        }
        else {
            return false
        }
    }

    return false
}
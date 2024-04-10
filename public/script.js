let form = document.getElementById("form")
let namaInput = document.getElementById("name")
let usernameInput = document.getElementById("username")
let passwordInput = document.getElementById("password")
let emailInput = document.getElementById("email")
let phoneInput = document.getElementById("nomor-telepon")
let urlInput = document.getElementById("url")

function hapusError(e) {
    e.target.style = "border: solid black 2px"
    e.target.parentElement.lastElementChild.innerHTML = "";
}

form.addEventListener("submit", submit)
namaInput.addEventListener("focus", hapusError)
usernameInput.addEventListener("focus", hapusError)
passwordInput.addEventListener("focus", hapusError)
emailInput.addEventListener("focus", hapusError)
phoneInput.addEventListener("focus", hapusError)
urlInput.addEventListener("focus", hapusError)

function submit(e) {
    e.preventDefault()

    let namaError = ""
    if(namaInput.value.trim() === "") {
        namaError = "Nama tidak boleh kosong"
        namaInput.parentElement.lastElementChild.innerText = namaError
        namaInput.style = "border: solid red 2px"
    }

    let usernameError = ""
    if (usernameInput.value.trim() === "") {
        usernameError = "Username tidak boleh kosong"
        usernameInput.parentElement.lastElementChild.innerText = usernameError
        usernameInput.style = "border: solid red 2px"
    }

    let passwordError = ""
    if (passwordInput.value.trim() === "") {
        passwordError = "Password tidak boleh kosong"
        passwordInput.parentElement.lastElementChild.innerText = passwordError
        passwordInput.style = "border: solid red 2px"
    } else if (passwordInput.value.length < 6) {
        passwordError = "Panjang password tidak boleh kurang dari 6 karakter"
        passwordInput.parentElement.lastElementChild.innerText = passwordError
        passwordInput.style = "border: solid red 2px"
    }

    let emailError = ""
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        emailError = "Email tidak boleh kosong"
        emailInput.parentElement.lastElementChild.innerText = emailError
        emailInput.style = "border: solid red 2px"
    } else if (!emailRegex.test(emailInput.value)) {
        emailError = "Format email tidak valid"
        emailInput.parentElement.lastElementChild.innerText = emailError
        emailInput.style = "border: solid red 2px"
    }

    let phoneError = ""
    if (phoneInput.value.trim() === "") {
        phoneError = "Nomor telepon tidak boleh kosong"
        phoneInput.parentElement.lastElementChild.innerText = phoneError
        phoneInput.style = "border: solid red 2px"
    } else if (phoneInput.value.length < 12) {
        phoneError = "Nomor telepon tidak boleh kurang dari 12 digit"
        phoneInput.parentElement.lastElementChild.innerText = phoneError
        phoneInput.style = "border: solid red 2px"
    }

    let urlError = ""
    let urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (urlInput.value.trim() === "") {
        urlError = "URL tidak boleh kosong"
        urlInput.parentElement.lastElementChild.innerText = urlError
        urlInput.style = "border: solid red 2px"
    } else if (!urlRegex.test(urlInput.value)) {
        urlError = "Format URL tidak valid"
        urlInput.parentElement.lastElementChild.innerText = urlError
        urlInput.style = "border: solid red 2px"
    }

    if (namaError || usernameError || passwordError || emailError || phoneError || urlError) {
        e.preventDefault()
    } else {
        alert("Data berhasil diinput!")
        console.log("Nama: " + namaInput.value)
        console.log("Username: " + usernameInput.value)
        console.log("Password: " + passwordInput.value)
        console.log("Email: " + emailInput.value)
        console.log("Nomor Telepon: " + phoneInput.value)
        console.log("URL: " + urlInput.value)
    }
}
let list = [];
let inputs = [];
list = JSON.parse(localStorage.getItem("form_list")) || [];

// *************** signup *******************
const Username = document.getElementById("name");
const password = document.getElementById("password");
const email = document.getElementById("email");

// function to get data
function get_data() {
  const data = {
    name: Username.value,
    password: password.value,
    email: email.value,
  };
  if (!vaildate(data.name, data.password, data.email)) {
    return;
  }
  list.push(data);
  localStorage.setItem("form_list", JSON.stringify(list));
  clear(data.name, data.password, data.email);
  alert("Successful registration");
  window.location.href = "index.html";
}


function clear(cl_name, cl_email, cl_password) {
  cl_name = null;
  cl_email = null;
  cl_password = null;
}


function vaildate(username, password, email) {
  if (!username || !password || !email) {
    alert("please fill the form");
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(email) === false) {
    alert("please write a valid email");
    return false;
  } else {
    return email;
  }
}

// *************** signin *******************

const email_login = document.getElementById("email");
const password_login = document.getElementById("password");

Username_in_login = localStorage.getItem("logged_in_user");



function get_data_log() {
  const login_data = {
    l_password: password_login.value,
    l_email: email_login.value,
  };
  inputs.push(login_data);

  
  if (!login_data.l_email || !login_data.l_password) {
    alert("Please fill out the form correctly");
    return;
  }

  if (!vaildate_regex_login(login_data.l_email)) {
    return;
  }

  const user = list.find((user) => user.email === login_data.l_email);
  if (user) {
    if (user.password === login_data.l_password) {
      localStorage.setItem("logged_in_user", user.name);

      console.log("donee");

      window.location.href = "welcome.html";
    } else {
      alert("Incorrect password");
    }
  } else {
    alert("Email not found. Please sign up or check your form again");
  }
}


function vaildate_regex_login(L_email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(L_email) === false) {
    alert("please write a valid email");
    return false;
  } else {
    return L_email;
  }
}

// ***************** welcome *****************
function display(user) {
  if (user) {
    console.log(user);
    let Username_in_login = document.getElementById("user-Welcome");

    Username_in_login.innerHTML = `Welcome, ${user}!`;
  }
  return user;
}

// ***************** logout *****************
function logout() {
  localStorage.removeItem("logged_in_user");
  window.location.href = "index.html";
}

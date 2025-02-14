let list = [];
let inputs = [];
list = JSON.parse(localStorage.getItem("form_list")) || [];

// *************** signup *******************
const Username = document.getElementById("name");
const password = document.getElementById("password");
const email = document.getElementById("email");

// function to get data
function get_data() {
  const data_desc = {
    d_name: Username.value,
    d_password: password.value,
    d_email: email.value,
  };
  if (!vaildate(data_desc.d_name, data_desc.d_password, data_desc.d_email)) {
    return;
  }
  list.push(data_desc);
  localStorage.setItem("form_list", JSON.stringify(list));
  clear(data_desc.d_name, data_desc.d_password, data_desc.d_email);
  alert("Successful registration");
}

// to reset the function
function clear(cl_name, cl_email, cl_password) {
  cl_name = null;
  cl_email = null;
  cl_password = null;
}

//function to vaildate the data with regex
function vaildate(U_name, password, e_mail) {
  if (!U_name || !password || !e_mail) {
    alert("please fill the form");
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(e_mail) === false) {
    alert("please write a valid email");
    return false;
  } else {
    return e_mail;
  }
}

// *************** signin *******************

const email_login = document.getElementById("email");
const password_login = document.getElementById("password");

Username_in_login = localStorage.getItem("logged_in_user");

//function to get inputs form user

function get_data_log() {
  const log_desc = {
    l_password: password_login.value,
    l_email: email_login.value,
  };
  inputs.push(log_desc);

  // vaildate //

  // if the user fill the form wrong
  if (!log_desc.l_email || !log_desc.l_password) {
    alert("Please fill out the form correctly");
    return;
  }
  //regex for email
  if (!vaildate_regex_login(log_desc.l_email)) {
    return;
  }
  // Find the user in the list with arrow func
  const user = list.find((user) => user.d_email === log_desc.l_email);
  if (user) {
    // Validate password
    if (user.d_password === log_desc.l_password) {
      localStorage.setItem("logged_in_user", user.d_name);

      console.log("donee");

      window.location.href = "welcome.html";
    } else {
      alert("Incorrect password");
    }
  } else {
    alert("Email not found. Please sign up or check your form again");
  }
}

//vaildate function for the regex from login
function vaildate_regex_login(L_e_mail) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(L_e_mail) === false) {
    alert("please write a valid email");
    return false;
  } else {
    return L_e_mail;
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

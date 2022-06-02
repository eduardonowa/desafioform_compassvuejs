const register = (event) => {
  event.preventDefault();

  const pull = (id) => {
    return document.getElementById(id).value;
  };

  const getdoc = (span, className) => {
    return (document.getElementById(span).className = className);
  };

  const createLS = (name, data) => {
    return window.localStorage.setItem(name, data);
  };

  const name = pull("nameInput");
  if (name) {
    createLS("name", name);
    getdoc("span0", "clear");
  } else {
    getdoc("span0", "warning");
    createLS("name", "");
  }

  const email = document.getElementById("emailInput").value;
  if (email) {
    window.localStorage.setItem("email", email);
    document.getElementById("span1").className = "clear";
  } else {
    document.getElementById("span1").className = "warning";
    window.localStorage.setItem("email", "");
  }

  const phone = document.getElementById("phoneInput").value;
  if (phone) {
    window.localStorage.setItem("phone", phone);
    document.getElementById("span2").className = "clear";
  } else {
    document.getElementById("span2").className = "warning";
    window.localStorage.setItem("phone", "");
  }

  const password = document.getElementById("passwordInput").value;
  if (password) {
    window.localStorage.setItem("password", password);
    document.getElementById("span3").className = "clear";
  } else {
    document.getElementById("span3").className = "warning";
    window.localStorage.setItem("password", "");
  }

  const birthday = document.getElementById("birthdayInput").value;
  if (birthday) {
    window.localStorage.setItem("birthday", birthday);
    document.getElementById("span4").className = "clear";
  } else {
    document.getElementById("span4").className = "warning";
    window.localStorage.setItem("birthday", "");
  }

  const checkbox = document.querySelector(".chk").checked;
  if (checkbox) {
    window.localStorage.setItem("checkbox", checkbox);
    document.getElementById("span5").className = "clear";
  } else {
    document.getElementById("span5").className = "warning";
    window.localStorage.setItem("checkbox", "");
  }

  const nameStorage = window.localStorage.getItem("name");
  const emailStorage = window.localStorage.getItem("email");
  const passwordStorage = window.localStorage.getItem("password");
  const phoneStorage = window.localStorage.getItem("phone");
  const birthdayStorage = window.localStorage.getItem("birthday");
  const checkboxStorage = window.localStorage.getItem("checkbox");

  if (
    nameStorage &&
    emailStorage &&
    phoneStorage &&
    passwordStorage &&
    birthdayStorage &&
    checkboxStorage
  ) {
    document.getElementById("card").style.display = "none";
    document.getElementById("sucess").style.display = "flex";
  }
};

// window.location.replace("sucess.html")

const register = (event) => {
  event.preventDefault();

  const pull = (id) => {
    return document.getElementById(id).value;
  };

  const getDoc = (span, className) => {
    return (document.getElementById(span).className = className);
  };

  const createLS = (name, data) => {
    return window.localStorage.setItem(name, data);
  };

  // not allow empty /.*\S.*/

  const name = pull("nameInput");
  if (
    /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(name)
  ) {
    createLS("name", name);
    getDoc("span0", "clear");
  } else {
    getDoc("span0", "warning");
    createLS("name", "");
  }

  const email = pull("emailInput");
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    createLS("email", email);
    getDoc("span1", "clear");
  } else {
    getDoc("span1", "warning");
    createLS("email", "");
  }

  const phone = pull("phoneInput");
  if (/^[0-9]{11}/.test(phone)) {
    createLS("phone", phone);
    getDoc("span2", "clear");
  } else {
    getDoc("span2", "warning");
    createLS("phone", "");
  }

  const password = pull("passwordInput");
  if (/^[0-9]{6,9}$/.test(password)) {
    createLS("password", password);
    getDoc("span3", "clear");
  } else {
    getDoc("span3", "warning");
    createLS("password", "");
  }

  const birthday = pull("birthdayInput");
  if (birthday) {
    createLS("birthday", birthday);
    getDoc("span4", "clear");
  } else {
    getDoc("span4", "warning");
    createLS("birthday", "");
  }

  const checkbox = document.querySelector(".chk").checked;
  if (checkbox) {
    createLS("checkbox", checkbox);
    getDoc("span5", "clear");
  } else {
    getDoc("span5", "warning");
    createLS("checkbox", "");
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

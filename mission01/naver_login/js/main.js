const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

//DOM 요소 선택
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const btnLogin = document.querySelector("#loginButton");

//1. email 정규표현식을 사용한 validation
// emailReg 함수: 이메일 유효성을 검사하기 위한 정규표현식 사용
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}
// isValidEmail 함수: 이메일 유효성 검사를 위한 함수
function isValidEmail() {
  if (emailReg(this.value) || this.value === "") {
    userEmail.classList.remove("is--invalid");
  } else {
    userEmail.classList.add("is--invalid");
  }
}

//2. pw 정규표현식을 사용한 validation
// pwReg 함수: 비밀번호 유효성을 검사하기 위한 정규표현식 사용
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
// isValidPassword 함수: 비밀번호 유효성 검사를 위한 함수
function isValidPassword() {
  if (pwReg(this.value) || this.value === "") {
    userPassword.classList.remove("is--invalid");
  } else {
    userPassword.classList.add("is--invalid");
  }
}

//3. 상태 변수 관리
//이벤트에 대한 리스너 등록
userEmail.addEventListener("input", isValidEmail);
userPassword.addEventListener("input", isValidPassword);
btnLogin.addEventListener("click", handleLogin);

//4. 로그인 버튼을 클릭시 조건처리
// handleLogin 함수: 로그인 버튼을 클릭했을 때의 동작을 정의한 함수
function handleLogin(e) {
  if (userEmail.value === user.id && userPassword.value === user.pw) {
    e.preventDefault();
    window.location.href = "welcome.html"; // 사용자가 입력한 정보와 일치하면 welcome.html 페이지로 이동
  } else {
    alert("🤔 Try again"); // 이메일 또는 비밀번호가 일치하지 않을 때 경고창 표시
  }
}

/*
userEmail.addEventListener("focus", function () {
  this.dataset.clicked = true; // 클릭 여부를 데이터 속성에 저장
  isValidEmail.call(this);
});

userEmail.addEventListener("blur", function () {
  this.dataset.clicked = false; // 포커스가 떠날 때 데이터 속성 업데이트
  isValidEmail.call(this); // 유효성 검사 함수 호출
});

// isValidEmail 함수: 이메일 유효성 검사를 위한 함수
function isValidEmail() {
  if (emailReg(this.value) || (this.value === "" && !this.dataset.clicked)) {
    userEmail.classList.remove("is--invalid");
  } else {
    userEmail.classList.add("is--invalid");
  }
}
*/

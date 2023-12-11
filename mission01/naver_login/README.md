# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

1. DOM 요소 선택

```js
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const btnLogin = document.querySelector("#loginButton");
```

2. isValidEmail 함수: 이메일 유효성 검사를 위한 함수

```js
function isValidEmail() {
  if (emailReg(this.value) || this.value === "") {
    userEmail.classList.remove("is--invalid");
  } else {
    userEmail.classList.add("is--invalid");
  }
}
```



3. isValidPassword 함수: 비밀번호 유효성 검사를 위한 함수

```js
function isValidPassword() {
  if (pwReg(this.value) || this.value === "") {
    userPassword.classList.remove("is--invalid");
  } else {
    userPassword.classList.add("is--invalid");
  }
}
```

4. 이벤트에 대한 리스너 등록

```js
userEmail.addEventListener("input", isValidEmail);
userPassword.addEventListener("input", isValidPassword);
btnLogin.addEventListener("click", handleLogin);
```

5. handleLogin 함수: 로그인 버튼을 클릭했을 때의 동작을 정의한 함수

```js
function handleLogin(e) {
  if (userEmail.value === user.id && userPassword.value === user.pw) {
    e.preventDefault();
    window.location.href = "welcome.html"; // 사용자가 입력한 정보와 일치하면 welcome.html 페이지로 이동
  } else {
    alert("🤔 Try again"); // 이메일 또는 비밀번호가 일치하지 않을 때 경고창 표시
  }
}
```

6. 동작 gif
   
 https://github.com/nessaleee/js-homework/assets/144419094/20280e80-65d7-49b6-b1c9-f7e5bc080429






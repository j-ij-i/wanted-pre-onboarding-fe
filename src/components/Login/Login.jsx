import { signIn } from 'api/Auth';
import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router';

export default function Login() {
  const navigate = useNavigate();

  //이메일, 비밀번호 입력
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  //유효성 겅사
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  //유효성 통과 후 회원가입 버튼 활성화
  const [LoginFlag, SetLogin] = useState(true);

  const onEmailHandler = (event) => {
    const regEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const input_email = event.currentTarget.value;
    SetEmail(input_email);

    if (regEmail.test(input_email)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const onPasswordHandler = (event) => {
    const input_password = event.currentTarget.value;
    SetPassword(input_password);

    //8자 이상이면 통과
    if (input_password.length >= 8) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const handleSignIn = async () => {
    try {
      const res = await signIn(email, password);
      if (!res) {
        console.log('non-res');
      } else {
        console.log('Login Success');
        navigate('/todo');
      }
    } catch ({ response }) {
      console.log(response);
    }
  };

  const moveSignup = () => {
    navigate('/signup');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <div>
        <input
          className={styles.inputArea}
          type="email"
          placeholder="Email Address"
          onChange={onEmailHandler}
        />
      </div>
      <div>
        <input
          className={styles.inputArea}
          placeholder="Password"
          type="password"
          onChange={onPasswordHandler}
        />
      </div>
      <div>
        <button
          className={styles.loginbtn}
          disabled={isEmail || isPassword}
          onClick={handleSignIn}
        >
          Login
        </button>
      </div>
      Not a member? <a onClick={moveSignup}>Sign Up</a>
    </div>
  );
}

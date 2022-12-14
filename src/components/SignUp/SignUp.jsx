import { signUp } from 'api/Auth';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './SignUp.module.css';

export default function SignUp() {
  const navigate = useNavigate();

  //이메일, 비밀번호 입력
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  //유효성 겅사
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  //유효성 통과 후 회원가입 버튼 활성화
  const [SignUpFlag, SetSignUp] = useState(false);

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

  const handleSignUp = async () => {
    try {
      const res = await signUp(email, password);
      if (!res) {
        console.log('non-res');
      } else {
        console.log('SignUp Success');
        navigate('/todo');
      }
    } catch ({ response }) {
      console.log(response);
    }
  };

  const moveLogin = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sign Up</h2>
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
          className={styles.signupbtn}
          disabled={isEmail || isPassword}
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
      <a onClick={moveLogin}>Login</a>
    </div>
  );
}

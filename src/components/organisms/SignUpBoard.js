import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

import axios from "axios";

export default function SignUpBoard() {

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click");
        const data = new FormData(e.currentTarget);

        const memberData = {
            uid: data.get('uid'),
            password: data.get('password'),
            email: data.get('email'),
            name: data.get('name'),
        };

        // const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        //
        // if (!emailRegex.test(email)) {
        //     setEmailError('올바른 이메일 형식이 아닙니다.');
        // } else if (email === null && password === null) {
        //     setEmailError('이메일을 입력하세요.');
        //     setPasswordError('비밀번호를 입력하세요.');
        // } else if (email === null) {
        //     setEmailError('이메일을 입력하세요.');
        // } else if (password === null) {
        //     setPasswordError('비밀번호를 입력하세요.');
        // } else {
        //     setEmailError('');
        //     setPasswordError('');
        // }

        console.log(memberData);

        axios({
            method: "post",
            url: "/api/signup/",
            data: {
                uid: memberData.uid,
                password: memberData.password,
                email: memberData.email,
                name: memberData.name,
            }
        }).then((response) => {
            console.log(response.data);

            alert("가입이 정상적으로 완료되었습니다.");
            document.getElementById('uid').value = null;
            document.getElementById('password').value = null

        }).catch(() => {
            alert("데이터 베이스 에러");
        });
    }

    return(
        <div className="w-full flex flex-col justify-center items-center px-default my-28">
            <div className="w-64 mb-14">
                <img src="/images/header.png" alt="header"></img>
            </div>
            <Container component="main" maxWidth="xs">
                <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="uid"
                        label="아이디"
                        name="uid"
                        autoComplete="uid"
                        autoFocus
                    />
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        type="password"
                        label="패스워드"
                        name="password"
                        autoComplete="current-password"
                        error={passwordError !== '' || false}
                    />
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="이메일"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={emailError !== '' || false}
                    />
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="닉네임"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        회원가입
                    </Button>
                </form>
            </Container>
        </div>
    );
};
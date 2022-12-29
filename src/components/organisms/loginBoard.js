import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom"

import useCookies from "react-cookie/cjs/useCookies";

export default function LoginBoard() {

    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['id']);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const data = new FormData(e.currentTarget);

        const memberData = {
            id: data.get('id'),
            password: data.get('password')
        };

        axios({
            method: "post",
            url: "/api/login/",
            data: {
                id: memberData.id,
                password: memberData.password,
            }
        }).then((response) => {
            if(response.data.id === "fail" )
            {
                alert("로그인 실패");
            }
            else{
                console.log(response.data);

                alert("반갑습니다. " + response.data.name + "님!");

                setCookie('id', response.data.token, { path: "/" });

                document.getElementById('id').value = null;
                document.getElementById('password').value = null;

                navigate('/select/another');
            }

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
                <form className="flex flex-col justify-center items-center" componenet="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="아이디"
                        name="id"
                        autoComplete="id"
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
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        로그인
                    </Button>
                </form>
                <Link to='/signup' style={{ textDecoration: "none" }}>
                    <p className="text-sm text-gray-500 py-2">회원가입하기</p>
                </Link>
            </Container>
        </div>
    );
};
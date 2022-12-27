import { useState } from "react";
import axios from "axios";

import Header from "../organisms/header";
import Footer from "../organisms/footer";
import SignUpBoard from "../organisms/SignUpBoard";


function SignUp() {
    return (
        <>
            <Header />
            <SignUpBoard />
            <Footer />
        </>
    );
}

export default SignUp;
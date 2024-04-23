import './Home.css';
import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const goToListCenter = () => {
        navigate('/list-center');
    }

    return (
        <div className="home-container">
            <h1>Create your todo list</h1>
            <div className="button-container">
                <button onClick={goToListCenter}>Use as guest</button>
                <button>Sign up/Sign in</button>
            </div>
        </div>
    );
}

export default Home;

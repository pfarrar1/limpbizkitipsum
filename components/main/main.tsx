import {useState} from 'react';
import data from "../../data/data.json"
import "./main.scss";

const Main = () => {
    const [lyrics, setLyrics] = useState();

    const handleClick = () => {
        const random = Math.floor(Math.random() * data.songs.length);
        setLyrics(data.songs[random].lyrics);
    };

    return (
        <div className="starter-template">
            <h1>How Much Do You Want?</h1>
            <button className="btn btn-lg btn-danger"
                    onClick={() => handleClick()}
            >
                Click here
            </button>
            <div id="content">{lyrics}</div>
        </div>
    );
};

export default Main;

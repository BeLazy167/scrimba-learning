import React, { useState } from "react";
import memedata from "./memedata";

export default function Meme() {
    let meme = {
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    };
    const [allMemeImages, setAllMemeImages] = useState(memedata);
    const [memeImage, setMemeImage] = useState(meme);
    function getMeme() {
        const allmeme = allMemeImages.data.memes;
        const randomMeme = allmeme[Math.floor(Math.random() * allmeme.length)];
        setMemeImage((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: randomMeme.url,
            };
        });
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button onClick={getMeme} className="form--button">
                    Get a new meme image 🖼
                </button>
                <img src={memeImage.randomImage} alt="meme" />
            </div>
        </main>
    );
}

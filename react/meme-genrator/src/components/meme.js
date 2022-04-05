import React, { useState, useEffect } from "react";

export default function Meme() {
    let meme = {
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    };
    function handleChange(event) {
        const { name, value } = event.target;
        setMemeImage((prevMemeImage) => {
            return {
                ...prevMemeImage,
                [name]: value,
            };
        });
    }
    const [allMemeImages, setAllMemeImages] = useState();
    const [memeImage, setMemeImage] = useState(meme);
    console.log(memeImage);
    function getMeme() {
        const allmeme = allMemeImages;
        const randomMeme = allmeme[Math.floor(Math.random() * allmeme.length)];
        setMemeImage((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: randomMeme.url,
            };
        });
    }
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => setAllMemeImages(data.data.memes));
    }, []);

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMeme} className="form--button">
                    Get a new meme image 🖼
                </button>
                <div className="meme">
                    <img src={memeImage.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{memeImage.topText}</h2>
                    <h2 className="meme--text bottom">
                        {memeImage.bottomText}
                    </h2>
                </div>
            </div>
        </main>
    );
}

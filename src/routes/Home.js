import React, { useEffect, useState } from "react";
import "./Home.css";
import { config } from "../config";

function Home() {
    const [url, setURL] = useState("");
    const [short_url, setShortURL] = useState();
    const [qr_code, setQRCode] = useState("");
    const [copyed, isCopyed] = useState(false);

    useEffect(() => {
        setQRCode(getQRCode(short_url));
    }, [short_url]);

    function onChangeURL(event) {
        setURL(event.target.value);
    }

    async function shortenURL(url_to_short) {
        const api = config.api + "/api/urls";
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: url_to_short
            }),
        };
        const response = await fetch(api, option);

        return response;
    }

    function getQRCode(url) {
        const api = "https://api.qrserver.com/v1/create-qr-code/?data=" + url + "&size=100x100";
        return api
    }

    async function onClickShortenBtn() {
        const response = await shortenURL(url);

        if (response.ok) {
            const data = await response.json();
            setShortURL(config.api + "/" + data.key);
        } else {
            if (response.status == 400) {
                alert("올바른 URL을 입력하세요.");
            } else {
                alert("정말 죄송합니다. 서버에 문제가 생긴 것 같습니다. 잠시 후 다시 시도하거나 오류를 제보해주세요.");
            }
        }
    }

    async function onClickCopyBtn() {
        window.navigator.clipboard.writeText(short_url).then(() => {
            isCopyed(true);
            setTimeout(() => isCopyed(false), 3000);
        },
        () => {
            alert("클립보드 복사에 실패하였습니다. 브라우저가 클립보드 API를 지원하지 않는 것 같습니다.\n최신 브라우저를 이용해주시고 인터넷 익스플로러 사용은 자제 부탁드립니다.");
        });
    }

    return (
        <div className="home">
            <h1 className="title">개인정보 수집 없이 빠르게 URL을 단축하세요.</h1>

            <div className="shorten-form">
                <input className="url" value={url} onChange={onChangeURL} placeholder="줄일 긴 URL을 입력하세요." />
                <button className="shorten-btn" onClick={onClickShortenBtn}>Submit</button>
            </div>

            <div className="result" style={{ display: short_url == undefined ? "none" : "flex" }}>
                <p className="short_url">{short_url}<button onClick={onClickCopyBtn} className="copy-btn">{copyed ? "Copyed!" : "Copy"}</button></p>
                <img className="qr-code" src={qr_code} alt={short_url} />
            </div>
        </div>
    )
}

export default Home;
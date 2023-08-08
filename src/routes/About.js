import React from "react";
import "./About.css";

function Home() {
    return (
        <div className="about">
            <div className="content">
                <h1>Krll에 대해서</h1>
                <p>Krll은 개인정보 수집이 없는 간편한 단축 도메인 서비스입니다.</p>
                <p>로그인, 회원가입이 필요 없으며 무엇보다 <b>무료</b>입니다.</p>
                <p>긴 URL을 짧게 줄여 공유하세요.</p>
                <p>Go QR API를 이용하여 단축된 URL의 QR 코드를 자동 생성합니다.</p>
                <br />

                <h1>이용 규칙</h1>
                <p>Krll 서비스를 통해 단축되는 웹사이트는 대한민국 법에 위배되지 않아야 합니다.</p>
                <p>예시로 불법 촬영물 공유 사이트, 피싱 사이트, 불법 도박 사이트 등이 있습니다.</p>
                <p>규칙을 지키지 않은 URL이 있다는 신고를 받으면 관리자는 데이터베이스에서 해당 URL을 삭제합니다.</p>
                <p>정말 당연하고도 간단한 규칙입니다. 지켜주시기를 간곡히 부탁드립니다!</p>
                <br />

                <h1>연락</h1>
                <p>만약 규칙을 지키지 않은 URL을 발견했다면 연락처로 신고해주세요!</p>
                <p>그 외에도 오류/버그 제보, 문의, 건의 할 때에도 언제든지 연락해주세요.</p>
                <a href="https://pointless.chat/@sunwoo1524">마스토돈</a><br /><br />
                <a href="mailto:maengkkong1524@naver.com">이메일</a>
            </div>
        </div>
    )
}

export default Home;
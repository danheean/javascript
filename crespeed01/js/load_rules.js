/**
 * 연세대 규정질 로딩
 */
const ruleTrs = document.querySelectorAll("table#ruleTable tbody tr");
const ruleContent = document.querySelector("#rule-content");

/**
 * 샘플 URL 로딩
 * @param {*} url
 */
function loadRules(url) {
    // console.log("url", url);
    ruleContent.innerHTML = "";
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            // console.log(data.name, data.weather[0].main);
            // console.log(data);
            var ruleHtml = new DOMParser().parseFromString(data, "text/html");
            // ruleHtml = ruleHtml.body.firstChild;
            // console.log(ruleHtml);

            ruleContent.append(ruleHtml.head);
            ruleContent.append(ruleHtml.body);
        });
}

/**
 * 규정 카테고리 클릭 이벤트
 * @param {*} event
 */
function clickRuleTrHandler(event) {
    event.preventDefault();
    // console.dir(event);
    // console.dir(event.target.href);

    // href로 부터 url을 파싱하여 로딩
    loadRules(event.target.href.slice(event.target.href.lastIndexOf("#") + 1));

    /* 초기화 진행
     * 1. 검색창 초기화
     * 2. 검색 결과 초기화
     */
    inputKeyword.value = "";
    initKeywordDataList();
    // loadRules("rule_02.html");
}

/**
 * 이벤트 정의
 */
ruleTrs.forEach((tr) => {
    tr.addEventListener("click", clickRuleTrHandler);
});

/* 초기 rule_01.html 로딩 */
loadRules("rule_01.html");

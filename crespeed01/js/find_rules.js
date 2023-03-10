/**
 * 본문 검색창 처리 JS
 */
const button = document.querySelector("button"); // 검색 버튼
const inputKeyword = document.querySelector("#keyword-input"); // 검색어 입력창
const keywordList = document.querySelector("#keyword-list"); // 검색 결과 UL
const keywordDatas = []; // 디버깅 용도

/* 스타일 정의 */
const UI_SELECT_CLASSNAME = "ui-selected";
const HIDDEN_CLASSNAME = "hidden"; // 검색 결과 숨김 처리

/**
 * 텍스트 요약 (처음부터 주어진 길이 만큼)
 * @param {*} str 요약할 텍스트
 * @param {*} num 요약 길이
 * @returns
 */
function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.

    // console.log(str);
    str = str.replace(/\n/gi, " "); // <br> 태그 제거

    if (str.length <= num) {
        return str;
    }
    // Return str truncated with '...' concatenated to the end of str.

    const re = new RegExp(`(${inputKeyword.value})`, "gi");

    // 검색어 강조 표시 */
    return str.slice(0, num).replace(re, `<strong>$1</strong>`) + "...";
}

/**
 * 검색 결과 화면에서 목록 클릭시 동작 수행
 * @param {*} event
 */

function gotoContent(event) {
    let target = event.target;
    // console.dir(target);

    if (target.tagName === "STRONG") {
        target = target.parentNode;
    }

    const targetId = target.id;

    // 검색 결과 목록에서 하이라이팅 제거
    const oldActiveElement = document.querySelector("." + UI_SELECT_CLASSNAME);
    // console.log(oldActiveElement, "-", oldActiveElement.length);
    // console.log(oldActiveElement);
    if (oldActiveElement != null) {
        oldActiveElement.classList.remove(UI_SELECT_CLASSNAME);
    }

    // 검색 결과 목록에서 선택된 LI 하이라이팅 추가
    target.classList.add(UI_SELECT_CLASSNAME);

    // console.log(targetId);
    // console.dir(event); //, event.target.li.id);

    // LI로 부터 본문으로 찾아갈 id 파싱
    // li-find173 -> find173
    contentId = targetId.slice(3, target.id.length);
    // console.dir(event);
    // console.dir(targetId);
    // console.dir(contentId);

    // console.log(contentId);
    // 스크롤
    document
        .getElementById(contentId)
        .scrollIntoView({ block: "center", behavior: "smooth" });
}

/**
 * 검색 결과 화면에서 목록 클릭시 동작 수행
 * @param {*} event
 */
function strongClickHandler(event) {
    event.preventDefault();
    const target = event.target;
    console.dir(target);
    const targetId = target.id;
    /*
    // 검색 결과 목록에서 하이라이팅 제거
    const oldActiveElement = document.querySelector("." + UI_SELECT_CLASSNAME);
    // console.log(oldActiveElement, "-", oldActiveElement.length);
    // console.log(oldActiveElement);
    if (oldActiveElement != null) {
        oldActiveElement.classList.remove(UI_SELECT_CLASSNAME);
    }

    // 검색 결과 목록에서 선택된 LI 하이라이팅 추가
    target.classList.add(UI_SELECT_CLASSNAME);

    // console.log(targetId);
    // console.dir(event); //, event.target.li.id);

    // LI로 부터 본문으로 찾아갈 id 파싱
    // li-find173 -> find173
    contentId = targetId.slice(3, target.id.length);
    // console.dir(event);
    // console.dir(targetId);
    // console.dir(contentId);

    // console.log(contentId);
    // 스크롤
    document
        .getElementById(contentId)
        .scrollIntoView({ block: "center", behavior: "smooth" });
*/
}

/**
 * LI 생성, 이벤트 정의
 * @param {*} keywordDataObj
 */
function paintKeywordsData(keywordDataObj) {
    // console.log("i will paint", todo);

    // LI 생성
    const li = document.createElement("li");
    li.id = `li-${keywordDataObj.id}`;
    li.innerHTML = keywordDataObj.text;

    // UL에 LI 추가
    keywordList.append(li);

    // LI 클릭 이벤트 정의
    li.addEventListener("click", gotoContent);
}

/**
 * 검색 결과 데이터 초기화
 * 1. 검색 결과 리스트 초기화
 * 2. 검색 결과 화면 LI 초기화
 * 3. 검색 결과 숨김 처리
 */
function initKeywordDataList() {
    keywordDatas.length = 0;
    keywordList.replaceChildren();

    // 숨김 처리
    keywordList.classList.add(HIDDEN_CLASSNAME);
}

/**
 * 검색 결과가 있을 경우 숨김 처리 해제
 */
function showKeywordDataList() {
    // console.log(keywordDatas.length);

    /* 처음으로 스크롤 */
    document.getElementById("contentBody").scrollIntoView();

    if (keywordDatas.length > 0) {
        keywordList.classList.remove(HIDDEN_CLASSNAME);
    }
}

/**
 * 검색어를 찾아서 마킹 및 검색 결과 생성
 * @returns
 */
function findKeyword() {
    // 검색어가 없으면 종료
    if (inputKeyword.value === "") return;

    // console.log(inputKeyword.value);
    // 영문 검색어 고려
    const pattern = inputKeyword.value.toLowerCase();

    // var paragraphs = document.querySelectorAll("div.lawcon p");
    // console.log(paragraphs.length);

    // p태그 노드를 가져옴
    // 규정집에 따라서 태그는 변경 가능
    const paragraphs = document.querySelectorAll("p");
    // console.log("paragraphs.length", paragraphs.length);

    /* 이전 본문 키워드 리셋 */
    for (var i = 0; i < paragraphs.length; i++) {
        const re = new RegExp('<em id="find[^>]*>([^/]*)</em>', "gi");
        // console.log(re, typeof re);
        paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(re, "$1");
    }

    let idSeq = 0; // 지금은 사용하지 않음

    // p태그를 순회하면서 키워드가 있으면 마킹하고 검색 결과에 사용할 LI 생성
    for (let i = 0; i < paragraphs.length; i++) {
        // let para = divs[i].getElementsByTagName("p");
        var index = paragraphs[i].innerText.toLowerCase().indexOf(pattern);
        if (index != -1) {
            // 검색어가 있으면
            // console.log(index, paragraphs[i].innerHTML);
            const re = new RegExp(inputKeyword.value, "gi");
            // console.log(re, typeof re);

            // 마킹 처리 (em 태스 id는 p sequence 사용)
            paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(
                re,
                `<em id="find${i}" class="find">${inputKeyword.value}</em>`
            );
            // console.log(i, idSeq, paragraphs[i].innerHTML);

            // 검색된 키워드 오브젝트 생성 (매개변수로 사용)
            const keywordDataObj = {
                id: `find${i}`,
                text: truncateString(paragraphs[i].innerText, 26),
            };
            // keywordsData.push(keywordDataObj);

            // 검색결과 LI 생성
            paintKeywordsData(keywordDataObj);

            // 디버깅 용도로 리스트 생성
            keywordDatas.push(keywordDataObj);
        }
    }

    // 처리가 완료되면 검색 결과 표시
    const strongs = keywordList.querySelectorAll("strong");
    // console.log(strongs);
    strongs.forEach((strong) => {
        // STRONG 클릭 이벤트 정의
        // strong.addEventListener("click", strongClickHandler);
    });

    showKeywordDataList();
}

/**
 * 검색 버튼 이벤트 실행
 * @param {*} event
 */
function buttonSubmit(event) {
    // 화면 깜박임 중지
    event.preventDefault();

    // 검색 결과 초기화
    initKeywordDataList();

    // 검색어를 찾아서 마킹 및 검색 결과 생성
    findKeyword();
}

/* 검색 버튼 클릭시 이벤트 정의 */
button.addEventListener("click", buttonSubmit);

/*
 * 학교선택 자동완성 스크립트
 *
 *
 */
$(document).ready(function () {
    // $("#selectable").selectable();

    // 본문이 모두 렌더링된 이후 시작
    $("#input-keywordll").autocomplete({
        // 검색어 자동완성 시작
        source: $.map(keywordsData, function (item) {
            // source 는 자동 완성 대상
            // console.log(item);
            return {
                label: item.name,
                value: item.name,
                id: item.sysId,
            };
        }),
        select: function (event, ui) {
            // 아이템 선택시
            // sysId 세팅
            // 검색창 호출
            // console.log(ui);
            // console.log(ui.item.label, ui.item.value);
            // console.log(ui.item.label, ui.item.value);
            // console.log(ui);
            event.preventDefault();

            $("#sysId").val(ui.item.id);
            $("#sysName").val(ui.item.label);
            $("#searchForm").submit();
        },
        // autoFocus: true,
        // focus : function(event, ui) {  // 포커스 가면
        //	return false;//한글 에러 잡기 용도로 사용됨
        //},

        minLength: 0, // 최소 글자수

        // autoFocus: true, //첫번째 항목 자동 포커스 기본값 false

        classes: {
            // 잘 모르겠음
            "ui-autocomplete": "highlight",
        },

        delay: 50, //검색창에 글자 써지고 나서 autocomplete 창 뜰 때 까지 딜레이 시간(ms)
        // disabled: true, // 자동완성 기능 끄기

        position: { my: "right top", at: "right bottom" }, //잘 모르겠음
        open: function (event, ui) {
            event.preventDefault();
            console.log("open");
        },
        close: function (event) {
            //자동완성창 닫아질때 호출
            // console.log(event);
        },
    });
    /*
        .focus(function () {
            $(this).autocomplete("search");
        })*/
    /*
        .data("ui-autocomplete")._renderItem = function (ul, item) {
        // 하이라이팅
        var expression = new RegExp(this.term, "gi");
        var result = expression.exec(item.label);
        var answer = "";
        if (false && result.index == 0) {
            // 영문 처리
            var first = item.label.charAt(0);
            var remaining = item.label.slice(1, item.label.length);
            var first1 = first.replace(
                expression,
                "<em>" + this.term.toUpperCase() + "</em>"
            );
            var remaining1 = remaining.replace(
                expression,
                "<em>" + this.term.toLowerCase() + "</em>"
            );
            answer = first1 + remaining1;
        } else {
            answer = item.label.replace(
                expression,
                "<em>" + this.term.toLowerCase() + "</em>"
            );
        }

        return $("<li></li>").append(answer).appendTo(ul);
        // .append("<a>" + answer + "</a>").appendTo(ul);
    }*/
});

function getContents(CONSTS) {
    function setLinkData (arr, link, paramObj) {
        let _link = link;
        Object.keys(paramObj).forEach(key => {
            _link += "&" + key + "=" + paramObj[key];
        });
        const ds = [];
        arr.forEach((at, index) => {
            const tD = {};
            const href = _link.replace(/index/g, String(index + 1));
            tD.value = href;
            tD.text = at;
            ds.push(tD);
        });
        return ds;
    }
    function Contents (CONSTS) {
        console.log("CONSTS",CONSTS);
        this.VIEW_KEY_INTRO = CONSTS.VIEW_KEY_INTRO;
        this.VIEW_KEY_STARTED = CONSTS.VIEW_KEY_STARTED;
        this.VIEW_KEY_DIVE = CONSTS.VIEW_KEY_DIVE;
        this.VIEW_KEY_API = CONSTS.VIEW_KEY_API;
        this.SAMPLE_KEYS_INTRO = CONSTS.SAMPLE_KEYS_INTRO;
        this.kor = {
            common: {
                "COMMON-0001" : {
                    text: "▼ 예시 코드는 아래와 같습니다."
                },
                "COMMON-0002" : {
                    text: "▼ 위 그리드에 삽입한 데이터는 아래와 같습니다."
                },
            },
            intro: {
                grid : {
                    [CONSTS.SAMPLE_KEYS_INTRO[0]] : {
                        "col1" : [
                            {
                                text : "해당 column은 text dataType입니다.",
                            },
                            {
                                text : "Double-click을 하면 수정할 수 있습니다.",
                            },
                            {
                                text : "F2키를 누르면 수정할 수 있습니다.",
                            },
                            {
                                text : "엔터키를 누르면 editor에 들어가며,\n 내용을 select합니다.",
                            },
                            {
                                text : "시도해 보세요!",
                            },
                        ]
                    },
                    [CONSTS.SAMPLE_KEYS_INTRO[1]] : {
                        "col1" : setLinkData(CONSTS.GRID_ATTRIBUTES, "https://vanilla-grid.github.io/", {view:"api",gridId:"gridIdGrid",row:"index",colId:"col1"}),
                        "col2" : setLinkData(CONSTS.COLUMN_ATTRIBUTES, "https://vanilla-grid.github.io/", {view:"api",gridId:"gridIdGrid",row:"index",colId:"col1"}),
                        "col3" : setLinkData(CONSTS.EVENTS, "https://vanilla-grid.github.io/", {view:"api",gridId:"gridIdGrid",row:"index",colId:"col1"}),
                        "col4" : setLinkData(CONSTS.METHODS, "https://vanilla-grid.github.io/", {view:"api",gridId:"gridIdGrid",row:"index",colId:"col1"}),
                    },
                },
                "INTRO-0001": {
                    text: "Vanilla JS만을 활용한 simple grid.",
                },
                "INTRO-0100": {
                    text: "데이터는 JSON 객체를 활용합니다.",
                },
                "INTRO-0101": {
                    text: "2가지의 형태가 있습니다.",
                },
                "INTRO-0102": {
                    text: "셀 데이터 형태) gridId.getDatas(),",
                },
                "INTRO-0103": {
                    text: "",
                },
                "INTRO-0104": {
                    text: "키-값 형태) gridId.getValues(),",
                },
                "INTRO-0105": {
                    text: "",
                },
                "INTRO-0106": {
                    text: "JSON 객체를 활용하여 직관적으로 편리하게 데이터를 관리 할 수 있습니다.",
                },


                "INTRO-0200": {
                    text: "속성 값, 이벤트, 메소드를 통해 그리드를 customizing 할 수 있습니다.",
                },
                "INTRO-0201": {
                    text: "Vanilla Grid에는 각 30여개의 grid와 column 속성, 30여개의 customizing가능한 이벤트, 240여개 이상의 메소드가 있습니다.",
                },
                "INTRO-0202": {
                    text: "타 라이브러리와 폭 넓은 적용이 가능합니다.",
                },
            },
            started: {

            },
            dive: {

            },
            api: {

            },
        };
        //intro view key, anchor id 삽입
        Object.keys(this.kor.intro).forEach((key, idx) => {
            this.kor.intro[key].view = this.VIEW_KEY_INTRO;
            this.kor.intro[key].anchor = "anchor_" + idx;
        })

        this.eng = {
            common: {
                "COMMON-0001" : {
                    text: "▼ The example code is as follows."
                },
                "COMMON-0002" : {
                    text: "▼ 위 그리드에 삽입한 데이터는 아래와 같습니다."
                },
            },
            intro: {
                grid : {
                    [CONSTS.SAMPLE_KEYS_INTRO[0]] : {
                        "col1" : [
                            {
                                text : "This is a text dataType",
                            },
                            {
                                text : "Double-click to create an editor.",
                            },
                            {
                                text : "Press F2 to create an editor.",
                            },
                            {
                                text : "When you press the enter key,\n editor focus.",
                            },
                            {
                                text : "Try it!",
                            },
                        ]
                    },
                    [CONSTS.SAMPLE_KEYS_INTRO[1]] : {
                        "col1" : setLinkData(CONSTS.GRID_ATTRIBUTES, "https://vanilla-grid.github.io/", {view:"api",gridId:"gridIdGrid",row:"index",colId:"col1"}),
                        "col2" : setLinkData(CONSTS.COLUMN_ATTRIBUTES, "https://vanilla-grid.github.io/", {view:"api",gridId:"gridIdGrid",row:"index",colId:"col1"}),
                        "col3" : setLinkData(CONSTS.EVENTS, "https://vanilla-grid.github.io/", {view:"api",gridId:"gridIdGrid",row:"index",colId:"col1"}),
                        "col4" : setLinkData(CONSTS.METHODS, "https://vanilla-grid.github.io/", {view:"api",gridId:"gridIdGrid",row:"index",colId:"col1"}),
                    },
                },
                "INTRO-0001": {
                    text: "Simple grid using only Vanilla JS.",
                },
                "INTRO-0100": {
                    text: "데이터는 JSON 객체를 활용합니다.",
                },
                "INTRO-0101": {
                    text: "두 가지 의 형태가 있습니다.",
                },
                "INTRO-0102": {
                    text: "1. 셀 데이터 형태 : window[gridId].getDatas(),",
                },
                "INTRO-0103": {
                    code: 
`//각 cell의 정보를 담은 객체
//아래는 5열의 grid에 2줄의 데이터를 표현합니다.
const datas = [
    [
        {
            id: 'col1', value: 'val11', dataType: 'text', fontBold: true, //column info..
        },
        {
            id: 'col2', value: '202202', dataType: 'month', //column info..
        },
        {
            id: 'col3', value: 'ABC', dataType: 'mask', format:'AAA', //column info..
        },
        {
            id: 'col4', value: '1', dataType: 'number', //column info..
        },
        {
            id: 'col5', value: '20240101', dataType: 'date', //column info..
        },
    ],
    [
        {
            id: 'col1', value: 'val11', dataType: 'text', fontBold: true, //column info..
        },
        {
            id: 'col2', value: '202202', dataType: 'month', //column info..
        },
        {
            id: 'col3', value: 'abc', dataType: 'mask', format:'aaa', //column info..
        },
        {
            id: 'col4', value: '1', dataType: 'number', //column info..
        },
        {
            id: 'col5', value: '20240101', dataType: 'date', //column info..
        },
    ],
]`,
                },
                "INTRO-0104": {
                    text: "2. 키-값 형태 : gridId.getValues(),",
                },
                "INTRO-0105": {
                    code: 
`//각 cell의 정보를 담은 객체
//아래는 5열의 grid에 2줄의 데이터를 표현합니다.
const keyValues = [
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
]`,
                },
                "INTRO-0106": {
                    text: "JSON 객체를 활용하여 직관적으로 편리하게 데이터를 관리 할 수 있습니다.",
                },


                "INTRO-0200": {
                    text: "속성 값, 이벤트, 메소드를 통해 그리드를 customizing 할 수 있습니다.",
                },
                "INTRO-0201": {
                    text: "Vanilla Grid에는 각 30여개의 grid와 column 속성, 30여개의 customizing가능한 이벤트, 240여개 이상의 메소드가 있습니다.",
                },
                "INTRO-0300": {
                    text: "타 라이브러리와 폭 넓은 적용이 가능합니다.",
                },
                "INTRO-0301": {
                    text: "vanilla JS만 활용. styles sheet를 화면에 바로 적용. create와 destroy함수를 제공. 사용하는 객체를 클로져로 불러옵니다.",
                },
                "INTRO-0302": {
                    text: "현재 페이지는 vue 2 와 bootstrap 3 를 활용하여 구현했습니다. 해당 방식을 예로 들어보겠습니다.",
                },
                "INTRO-0303": {
                    text: "1. header에 Vanilla Grid를 선언합니다.",
                },
                "INTRO-0304": {
                    code: 
`<script src="Vanillagrid.min.1.0.0.js"></script>
`,
                },
                "INTRO-0305": {
                    text: "2. body의 마지막에",
                },
                "INTRO-0306": {
                    code: 
`//기존 생성 로직 방지
<script> vanillagrid_onBeforeCreate = function(e, vn) {return false;} </script>
`,
                },
                "INTRO-0307": {
                    text: "를 추가합니다.",
                },
                "INTRO-0308": {
                    text: "3. vue의 data에서",
                },
                "INTRO-0309": {
                    code: 
`//vanilla grid 객체 변수 선언
data () {
    return {
        vg : null;
    }
}
`,
                },
                "INTRO-0310": {
                    text: "4.. vue의 mouted에서",
                },
                "INTRO-0311": {
                    code: 
`//vanilla grid 객체 생성
mounted: function() {
    this.vg = getVanillagrid();
    this.vg.create();
    this.loadGrid();
},
`,
                },
                "INTRO-0312": {
                    text: "5. 다음 vue의 beforeDestroy에서",
                },
                "INTRO-0313": {
                    code: 
`//vue가 destroyed될 때마다 grid를 삭제함.
beforeDestroy: function() {
    vanillanote_onDestroy(this.vg);
},
`,
                },
                "INTRO-0314": {
                    text: "6. 이렇게 하면 vue의 해당 컴포넌트가 destroy, mount될때 grid를 새로 그릴 수 있습니다.",
                },
                "INTRO-0400": {
                    text: "제작 목적",
                },
                "INTRO-0401": {
                    text: "Vanillanote는 1인 개발입니다. javascript학습용으로 개발하였습니다. 따라서 사용 시 100%신뢰를 보장할 수 없으며, 제한되는 기능이 다소 있습니다. 하지만 훌륭한 퍼포먼스는 보일 것이라 생각합니다. "
                        + "Vanillanote는 개인 프로젝트를 진행 할 때 마다 grid를 새로 개발하는 소요를 줄이고자 개발을 시작했습니다. "
                        + "Jquery, Vue, React등 어떤 환경에서도 라이브러리 또는 프레임워크 없이 사용할 수 있는 grid개발을 목적으로 하였습니다. "
                        + "때문에 본 프로그램은 Vanilla JS만을 사용하였습니다. Vanillagrid의 장단점은 다음과 같습니다.",
                },
                "INTRO-0410": {
                    text: "장점",
                },
                "INTRO-0411": {
                    text: "Vanilla JS와 ES5문법만을 사용하여 적용할 수 있는 환경이 넓다.",
                },
                "INTRO-0412": {
                    text: "JSON data를 get, set하여 데이터 관리가 직관적이다.",
                },
                "INTRO-0413": {
                    text: "미리 정의된 속성, 이벤트, 메소드를 활용하여 훌륭한 퍼모먼스를 보일 수 있다.",
                },
                "INTRO-0414": {
                    text: "객체의 생애주기를 독립성있게 관리할 수 있고, 관리 로직을 통해 더 섬세하게 커스터마이징 할 수 있다.",
                },
                "INTRO-0415": {
                    text: "css나 javascript 기존 source에 최대한 영향을 받거나 주지 않도록 구현함.",
                },
                "INTRO-0416": {
                    text: "innerHTML과 eval을 사용하지 않음.",
                },
                "INTRO-0417": {
                    text: "js 단일 파일로 매우 가볍다.",
                },
                "INTRO-0430": {
                    text: "단점",
                },
                "INTRO-0431": {
                    text: "화면에서 각 grid의 cell에 접근이 가능합니다. cell의 실제 value값은 숨겨져있으나 보안상 완전하지 않습니다.",
                },
                "INTRO-0432": {
                    text: "cell에 focus를 둔 상태에서 사용자의 키보드 입력 시 해당 키가 바로 입력되는 기능을 지원하지 않습니다.(한글 입력의 제한으로 구현하지 못했습니다..)",
                },
                "INTRO-0433": {
                    text: "개발자 모드에서 전역변수로 선언된 함수 호출 변수를 접근 할 수 있습니다. 라이브러리를 통한 개발에 용이하기 위해 제공한 로직이지만 보안에 취약할 수 있습니다. "
                        + "함수 호출 변수(window[gridId])는 window[gridId].removeGridMethod()로 자신을 제거할 수 있습니다. F12키를 감지하여 해당 로직을 호출하십시오."
                        + "선언되는 이벤트 메소드는 최초 정의된 것과 다른 로직을 보이면 에러를 발생시키고 동작하지 않습니다.(보안을 위해 이벤트는 최초 한번만 정의할 수 있습니다.)",
                },
                "INTRO-0500": {
                    text: "브라우저 호환성",
                },
                "INTRO-0600": {
                    text: "라이센스",
                },
                "INTRO-0700": {
                    text: "문의하기",
                },
            },
            started: {

            },
            dive: {

            },
            api: {

            },
        };
        //intro view key, anchor id 삽입
        Object.keys(this.eng.intro).forEach((key, idx) => {
            this.eng.intro[key].view = this.VIEW_KEY_INTRO;
            this.eng.intro[key].anchor = "anchor_" + idx;
        })
    }
    return new Contents(CONSTS);
}

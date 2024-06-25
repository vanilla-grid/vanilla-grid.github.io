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
    function setCellInfo (cell, gridId, row, colId, viewId) {
        cell.gridId = gridId;
        cell.row = row + 1;
        cell.colId = colId;
        cell.view = viewId;
    }
    function Contents (CONSTS) {
        this.ENG = {
            common: {
                "COMMON-0000" : {
                    text: "▼ The example code is as follows."
                },
                "COMMON-0001" : {
                    text: "▼ The data inserted into the grid above is as follows."
                },
                "COMMON-0003" : {
                    text: "ADD"
                },
                "COMMON-0004" : {
                    text: "SAVE"
                },
                "COMMON-0005" : {
                    text: "REMOVE"
                },
                "COMMON-0006" : {
                    text: "sorry. There are no search results."
                },
                "COMMON-0007" : {
                    text: "You can search only by entering the exact word (including spaces)."
                },
                "COMMON-0008" : {
                    text: "Try it!"
                },
                "COMMON-0009" : {
                    text: "An example is below."
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
                text : {
                    "INTRO-0000": {
                        text: "Simple grid using only Vanilla JS.",
                    },
                    "INTRO-0001": {
                        text: "※ The filter and sorting icon use the awesome font. The basic form does not apply; separate logic is required. (Described in Deep dive)",
                    },
                    "INTRO-0100": {
                        text: "The data uses JSON objects.",
                    },
                    "INTRO-0101": {
                        text: "There are two forms.",
                    },
                    "INTRO-0102": {
                        text: "1. Key-value form: gridId.getValues(),",
                    },
                    "INTRO-0103": {
                        text: "Key-value objects in array [{}, {}...]",
                    },
                    "INTRO-0104": {
                        code: 
`//Object containing only the keys and values of each cell
//Below is an example of a grid with 5 columns and 2 rows of data.
const keyValues = [
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
]`,
                    },
                    "INTRO-0105": {
                        text: "2. Cell data form: window[gridId].getDatas(),",
                    },
                    "INTRO-0106": {
                        text: "Column array within row array, cell data information object [[{},{}...],[{},{}...]...]",
                    },
                    "INTRO-0107": {
                        code: 
`//Object containing information of each cell
//Below is an example of a grid with 5 columns and 2 rows of data.
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
                    "INTRO-0108": {
                        text: "You can intuitively and conveniently manage data using JSON objects.",
                    },
    
    
                    "INTRO-0200": {
                        text: "You can customize the grid through attribute values, events, and methods."
                    },
                    "INTRO-0201": {
                        text: "Vanilla Grid has about 30 grid and column properties, about 30 customizable events, and over 240 methods."
                    },
                    "INTRO-0300": {
                        text: "It can be widely applied with other libraries."
                    },
                    "INTRO-0301": {
                        text: "Only vanilla JS is used. Styles sheet applied directly to the screen. Provides create and destroy functions. Calls the object used as a closure."
                    },
                    "INTRO-0302": {
                        text: "The current page is implemented using vue 2 and bootstrap 3. Let's take this method as an example."
                    },
                    "INTRO-0303": {
                        text: "1. Declare Vanilla Grid in the header."
                    },
                    "INTRO-0304": {
                        code: 
`<script src="Vanillagrid.min.1.0.0.js"></script>
`,
                    },
                    "INTRO-0305": {
                        text: "2. At the end of the body"
                    },
                    "INTRO-0306": {
                        code: 
`<!--Prevent existing creation logic-->
<script> vanillagrid_onBeforeCreate = function(e, vn) {return false;} </script>
`,
                    },
                    "INTRO-0307": {
                        text: "Add."
                    },
                    "INTRO-0308": {
                        text: "3. In vue's data"
                    },
                    "INTRO-0309": {
                        code: 
`//Declare vanilla grid object variable
data () {
    return {
        vg : null;
    }
}
`,
                    },
                    "INTRO-0310": {
                        text: "4. In vue's mounted"
                    },
                    "INTRO-0311": {
                        code: 
`//Create vanilla grid object
mounted: function() {
    this.vg = getVanillagrid();
    this.vg.create();
    this.loadGrid();
},
`,
                    },
                    "INTRO-0312": {
                        text: "5. In vue's beforeDestroy",
                    },
                    "INTRO-0313": {
                        code: 
`//Remove vanilla grid object
beforeDestroy: function() {
    vanillagrid_onDestroy(this.vg);
},
`,
                    },
                    "INTRO-0314": {
                        text: "6. This allows the grid to be redrawn whenever the vue component is destroyed and mounted.",
                    },
                    "INTRO-0400": {
                        text: "Purpose of Production"
                    },
                    "INTRO-0401": {
                        text: "Vanillanote is a solo development. It was developed for learning javascript. Therefore, 100% reliability cannot be guaranteed when using it, "
                                + "and there are some limitations. However, I believe it will show excellent performance. "
                                + "Vanillanote started development to reduce the time required to develop a new grid each time I proceed with a personal project. "
                                + "It was developed with the goal of developing a grid that can be used without libraries or frameworks in any environment "
                                + "such as Jquery, Vue, React, etc. For this reason, this program uses only Vanilla JS. The pros and cons of Vanillagrid are as follows."
                    },
                    "INTRO-0410": {
                        text: "Advantages"
                    },
                    "INTRO-0411": {
                        text: "It can be applied to a wide range of environments using only Vanilla JS and ES5 syntax."
                    },
                    "INTRO-0412": {
                        text: "Managing data is intuitive by getting and setting JSON data."
                    },
                    "INTRO-0413": {
                        text: "You can achieve excellent performance by using predefined properties, events, and methods."
                    },
                    "INTRO-0414": {
                        text: "You can manage the lifecycle of objects independently and customize more delicately through management logic."
                    },
                    "INTRO-0415": {
                        text: "It is implemented to minimize the impact on or from existing css or javascript sources."
                    },
                    "INTRO-0416": {
                        text: "Does not use innerHTML or eval."
                    },
                    "INTRO-0417": {
                        text: "It is very lightweight with a single js file."
                    },
                    "INTRO-0430": {
                        text: "Disadvantages"
                    },
                    "INTRO-0431": {
                        text: "You can access each grid's cell on the screen. Although the actual value of the cell is hidden, it is not completely secure."
                    },
                    "INTRO-0432": {
                        text: "It does not support the function of directly entering the corresponding key when the user types on the keyboard with the cell focused. "
                        + "(It could not be implemented due to limitations in Korean input.)"
                    },
                    "INTRO-0433": {
                        text: "You can access the function call variables declared as global variables in developer mode. "
                        + "It is a logic provided to facilitate development through the library but may be vulnerable to security. "
                        + "Function call variables (window[gridId]) can remove themselves with window[gridId].removeGridMethod(). "
                        + "Detect the F12 key and call the logic. Declared event methods will not work if they show different logic than originally defined "
                        + "(events can only be defined once for security purposes)."
                    },
                    "INTRO-0500": {
                        text: "Browser Compatibility"
                    },
                    "INTRO-0600": {
                        text: "License"
                    },
                    "INTRO-0700": {
                        text: "Contact Us"
                    }
                },
            },
            started: {
                grid : {
                    [CONSTS.SAMPLE_KEYS_STARTED[0]] : {
                        "col1" : [
                            {
                                text : "This is a text dataType.\nDouble-click to create an editor.\nPress F2 to create an editor.\nWhen you press the enter key, editor focus.\nTry it!",
                            },
                        ]
                    },
                },
                gridNoSearch : {
                    [CONSTS.SAMPLE_KEYS_STARTED[1]] : {
                        "f_nm" : [
                            {text : "James"},
                            {text : "John"},
                            {text : "Robert"},
                            {text : "John"},
                            {text : "Robert"},
                            {text : "James"},
                            {text : "Robert"},
                            {text : "Michael"},
                            {text : "William"},
                            {text : "William"},
                            {text : "David"},
                            {text : "Richard"},
                            {text : "Richard"},
                            {text : "David"},
                            {text : "Joseph"},
                            {text : "Charles"},
                            {text : "David"},
                            {text : "Richard"},
                            {text : "Thomas"},
                            {text : "Charles"},
                        ],
                        "l_nm" : [
                            {text : "Smith"},
                            {text : "Johnson"},
                            {text : "Williams"},
                            {text : "Smith"},
                            {text : "Brown"},
                            {text : "Jones"},
                            {text : "Smith"},
                            {text : "Jones"},
                            {text : "Garcia"},
                            {text : "Miller"},
                            {text : "Davis"},
                            {text : "Miller"},
                            {text : "Davis"},
                            {text : "Johnson"},
                            {text : "Brown"},
                            {text : "Rodriguez"},
                            {text : "Garcia"},
                            {text : "Martinez"},
                            {text : "Rodriguez"},
                            {text : "Williams"},
                        ],
                    },
                },
                text : {
                    "STARTED-0000": {
                        text: "Getting Started"
                    },
                    "STARTED-0001": {
                        text: "Vanilla Grid를 시작하는 방법은 매우 간단합니다.",
                    },
                    "STARTED-0002": {
                        text: "1. header에 Vanilla Grid를 선언합니다.",
                    },
                    "STARTED-0003": {
                        code: 
`<script src="Vanillagrid.min.1.0.0.js"></script>
`,
                    },
                    "STARTED-0004": {
                        text: "2. body에 그리드를 정해진 양식에 맞게 생성합니다.",
                    },
                    "STARTED-0005": {
                        code: 
`<!--
grid와 column의 id속성은 필수 값 입니다.
<vanilla-grid id="gridId" ...grid attributes >
    <v-col id="columnId01" ...column attributes ></v-col>
    ... columns
</vanilla-grid>
-->
`,
                    },
                    "STARTED-1000": {
                        text: "Simple Use"
                    },
                    "STARTED-1100": {
                        text: "Header"
                    },
                    "STARTED-1101": {
                        text: "grid의 header는 항상 한 줄을 표현합니다. 컬럼(v-col)에 header 속성을 넣어 설정합니다. header 속성이 없으면 id 속성 값이 header가 됩니다."
                    },
                    "STARTED-1110": {
                        text: "1. header는 ';'를 구분자로 행 수를 설정합니다."
                    },
                    "STARTED-1111": {
                        code: 
`<!--3행의 header-->
<v-col id="columnId01" header="row1;row2;row3"></v-col>
`,
                    },
                    "STARTED-1120": {
                        text: "2. header는 ';'를 구분자로 빈 값(row merge는 아래로 빈 값/ col merge는 오른쪽 빈 값)이 있다면 자동 merge합니다. 우선순위는 row merge > col merge 입니다."
                    },
                    "STARTED-1121": {
                        code: 
`<!--1행 1열 ~ 3행 1열 header는 row merge함-->
<v-col id="columnId01" header="row1;;"></v-col>
<v-col id="columnId02" header="row1;row2;row3"></v-col>
<!--1행 1열 ~ 1행 2열, 2행 1열 ~ 2행 2열 header는 col merge함-->
<v-col id="columnId01" header="row1;row2;row3"></v-col>
<v-col id="columnId02" header=";;row2"></v-col>
`,
                    },
                    "STARTED-1130": {
                        text: "3. header는 이스케이프 시퀀스를 갖을 수 있습니다."
                    },
                    "STARTED-1131": {
                        code: 
`<!--이스케이프와 시퀀스를 사이로 줄바꿈-->
<v-col id="columnId01" header="이스케이프\\n시퀀스"></v-col>
`,
                    },
                    "STARTED-1140": {
                        text: "4. header는 필터와 정렬 기능, 전체 체크 기능이 있습니다."
                    },
                    "STARTED-1141": {
                        text: "1) 필터는 사용자가 마지막 행 헤더 왼쪽의 시그마(σ) 클릭하여 사용할 수 있습니다. 시그마(σ)는 filter element를 쉽게 커스터마이징 하여 개발자가 원하는 모양으로 변경할 수 있습니다. (Deep dive에 설명)"
                    },
                    "STARTED-1142": {
                        text: "2) 정렬은 사용자가 마지막 행 헤더를 더블 클릭하면 발생합니다. data type이 text, number에 따라 정렬 결과가 다릅니다. 정렬 아이콘도 sort element를 쉽게 커스터마이징 하여 변경할 수 있습니다. (Deep dive에 설명)"
                    },
                    "STARTED-1143": {
                        text: "3) data type이 체크박스인 경우 마지막 행 헤더를 더블 클릭하면 정렬되지 않고 체크박스가 일괄 checked, unchecked상태로 변경 됩니다."
                    },
                    "STARTED-1300": {
                        text: "Footer"
                    },
                    "STARTED-1301": {
                        text: "1. footer는 최댓값, 최솟값, 합계, 평균 기능이 있습니다."
                    },
                    "STARTED-1302": {
                        text: "사용은 '$$'을 앞에 표기하여 MAX, MIN, SUM, AVG의 키워드를 씁니다. ';'를 구분자로 행을 추가할 수 있습니다. 예) $$MAX;$$MIN;$$SUM;$$AVG"
                    },
                    "STARTED-1303": {
                        code: 
`<!--최댓값, 최솟값, 합계, 평균-->
<v-col id="columnId01" dataType="number", footer="$$MAX;$$MIN;$$SUM;$$AVG"></v-col>
`,
                    },
                    "STARTED-1304": {
                        text: "계산되는 값은 grid에 보여지고있는 행만을 대상으로 계산합니다. 예를들어 1행을 제외하고 나머지가 filter 처리 되었다면 1행의 값만을 가지고 footer값을 산출합니다."
                    },
                    "STARTED-1305": {
                        text: "null은 계산 대상에서 제외됩니다. 평균은 소수점 6의 자리까지 도출 후 반올림합니다."
                    },
                    "STARTED-1306": {
                        text: "2. 그외의 문자는 모두 단순히 문자열로 표현합니다. 예) MAX :;MIN :;SUM :;AVG :"
                    },
                    "STARTED-1307": {
                        code: 
`<!--단순 문자열로 표현됨-->
<v-col id="columnId01" dataType="number", footer="MAX :;MIN :;SUM :;AVG :"></v-col>
`,
                    },
                    "STARTED-1308": {
                        text: "3. Vanilla grid 객체의 footerFormula를 사용하면 footer에 적용될 함수를 직접 등록하여 사용할 수 있습니다. (Deep dive에 설명)"
                    },
                    "STARTED-1500": {
                        text: "컬럼"
                    },
                    "STARTED-1501": {
                        text: "column은 v-col 태그로 설정하며, id 속성이 필수값입니다."
                    },
                    "STARTED-1510": {
                        text: "1. 기본 column은 2개가있습니다. 인덱스 1번의 행번호 (id: 'v-g-rownum') 컬럼과 인덱스 2번의 상태 (id: 'v-g-status') 컬럼입니다."
                    },
                    "STARTED-1511": {
                        text: "1) v-g-rownum 컬럼은 행번호 값을 나타냅니다. 1부터 n까지. grid 속성에서 rownumVisible로 visible설정, rownumSize로 크기설정 등이 가능합니다."
                    },
                    "STARTED-1512": {
                        code: 
`<!--rownumVisible은 default true이다. v-g-rownum 컬럼의 width를 120px로 설정
<vanilla-grid id="gridId" rownumSize="120px">
...
</vanilla-grid>
-->
`,
                    },
                    "STARTED-1520": {
                        text: "2) v-g-status 컬럼은 행의 상태 값을 나타냅니다. dataType은 code로 기존 설정된 code만 값을 가질 수 있습니다."
                            + " 값은 'C', 'U', 'D'가 있습니다. addRow()행 추가시 자동으로 v-g-status의 값이 'C'인 행이 추가됩니다."
                            + " 행의 셀 값을 변경 시 자동으로 v-g-status의 값이 'U'로 변경되며, 실행 취소 등 다시 원복해도 v-g-status의 값은 변경되지 않습니다."
                            + " grid 속성에서 statusVisible visible설정 등이 가능합니다."
                    },
                    "STARTED-1521": {
                        code: 
`<!--v-g-status 컬럼을 숨김
<vanilla-grid id="gridId" statusVisible="false">
...
</vanilla-grid>
-->
`,
                    },
                    "STARTED-1530": {
                        text: "2. column에서 정할 수 있는 속성값은 30여가지 정도입니다. (API에 자세히 설명) 가장 중요한 속성은 dataType 속성 입니다."
                    },
                    "STARTED-1531": {
                        text: "dataType속성은 10개가 있습니다. ['text', 'mask', 'number', 'date', 'month', 'select', 'checkbox', 'button', 'link', 'code']. default는 text입니다."
                    },
                    "STARTED-1700": {
                        text: "데이터 로드"
                    },
                    "STARTED-2000": {
                        text: "Grid Attributes"
                    },
                    "STARTED-3000": {
                        text: "Column Attributes"
                    },
                    "STARTED-4000": {
                        text: "Events"
                    },
                    "STARTED-5000": {
                        text: "Methods"
                    },
                },
            },
            dive: {
                grid: {
                },
                text : {
                    "DIVE-0000": {
                        text: "Deep dive!"
                    },
                    "DIVE-1000": {
                        text: "Create & Destroy"
                    },
                    "DIVE-2000": {
                        text: "Vanilla grid object"
                    },
                    "DIVE-3000": {
                        text: "Footer function"
                    },
                    "DIVE-4000": {
                        text: "Data type"
                    },
                },
            },
            api: {
                grid: {

                },
                text : {
                    "API-0000": {
                        text: "Grid attributes"
                    },
                    "API-1000": {
                        text: "Column attributes"
                    },
                    "API-2000": {
                        text: "Events"
                    },
                    "API-3000": {
                        text: "Methods"
                    },
                    "API-4000": {
                        text: "Vanilla grid object"
                    },
                },
            },
        };

        this.KOR = {
            common: {
                "COMMON-0000" : {
                    text: "▼ 예시 코드는 아래와 같습니다."
                },
                "COMMON-0001" : {
                    text: "▼ 위 그리드에 삽입한 데이터는 아래와 같습니다."
                },
                "COMMON-0003" : {
                    text: "추가"
                },
                "COMMON-0004" : {
                    text: "저장"
                },
                "COMMON-0005" : {
                    text: "삭제"
                },
                "COMMON-0006" : {
                    text: "죄송합니다. 검색결과가 존재하지 않습니다."
                },
                "COMMON-0007" : {
                    text: "정확한 단어를 입력해야만 검색이 가능합니다.(띄어쓰기 포함)"
                },
                "COMMON-0008" : {
                    text: "테스트해 보세요!"
                },
                "COMMON-0009" : {
                    text: "예시는 아래와 같습니다."
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
                text : {
                    "INTRO-0000": {
                        text: "Vanilla JS만을 활용한 simple grid.",
                    },
                    "INTRO-0001": {
                        text: "※ filter와 sorting icon은 font awesome을 적용하였습니다. 기본 형태는 적용되지 않으며, 별도의 로직이 필요함. (Deep dive에 설명)",
                    },
                    "INTRO-0100": {
                        text: "데이터는 JSON 객체를 활용합니다.",
                    },
                    "INTRO-0101": {
                        text: "두 가지 의 형태가 있습니다.",
                    },
                    "INTRO-0102": {
                        text: "1. 키-값 형태 : gridId.getValues()",
                    },
                    "INTRO-0103": {
                        text: "배열안에 키-값 객체 [{}, {}...]",
                    },
                    "INTRO-0104": {
                        code: 
`//각 cell의 키와 값만을 담은 객체
//아래는 5열의 grid에 2줄의 데이터를 표현합니다.
const keyValues = [
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
    //...
]`,
                    },
                    "INTRO-0105": {
                        text: "2. 셀 데이터 형태 : window[gridId].getDatas()",
                    },
                    "INTRO-0106": {
                        text: "row 배열안에 column 배열, cell 데이터 정보 객체 [[{},{}...],[{},{}...]...]",
                    },
                    "INTRO-0107": {
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
    //...
]`,
                    },
                    "INTRO-0108": {
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
`<!--기존 생성 로직 방지-->
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
                        text: "4. vue의 mouted에서",
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
                        text: "5. vue의 beforeDestroy에서",
                    },
                    "INTRO-0313": {
                        code: 
`//vanilla grid 객체 제거
beforeDestroy: function() {
    vanillagrid_onDestroy(this.vg);
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
            },
            started: {
                grid : {
                    [CONSTS.SAMPLE_KEYS_STARTED[0]] : {
                        "col1" : [
                            {
                                text : "해당 column은 text dataType입니다.\nDouble-click을 하면 수정할 수 있습니다.\nF2키를 누르면 수정할 수 있습니다.\n엔터키를 누르면 editor에 들어가며 내용을 select합니다.\n시도해 보세요!",
                            },
                        ]
                    },
                },
                gridNoSearch : {
                    [CONSTS.SAMPLE_KEYS_STARTED[1]] : {
                        "f_nm" : [
                            {text : "영자"},
                            {text : "철수"},
                            {text : "미영"},
                            {text : "영수"},
                            {text : "영식"},
                            {text : "철수"},
                            {text : "영자"},
                            {text : "영수"},
                            {text : "재훈"},
                            {text : "광수"},
                            {text : "영호"},
                            {text : "상철"},
                            {text : "광수"},
                            {text : "태훈"},
                            {text : "태오"},
                            {text : "민경"},
                            {text : "지혜"},
                            {text : "지연"},
                            {text : "혜민"},
                            {text : "현숙"},
                        ],
                        "l_nm" : [
                            {text : "이"},
                            {text : "손"},
                            {text : "이"},
                            {text : "박"},
                            {text : "이"},
                            {text : "김"},
                            {text : "김"},
                            {text : "손"},
                            {text : "김"},
                            {text : "최"},
                            {text : "이"},
                            {text : "노"},
                            {text : "김"},
                            {text : "박"},
                            {text : "박"},
                            {text : "윤"},
                            {text : "김"},
                            {text : "김"},
                            {text : "최"},
                            {text : "이"},
                        ],
                    },
                },
                text : {
                    "STARTED-0000": {
                        text: "시작하기"
                    },
                    "STARTED-0001": {
                        text: "※ filter와 sorting icon은 font awesome을 적용하였습니다. 기본 형태는 적용되지 않으며, 별도의 로직이 필요함. (Deep dive에 설명)",
                    },
                    "STARTED-1000": {
                        text: "간단한 사용"
                    },
                    "STARTED-2000": {
                        text: "그리드 속성"
                    },
                    "STARTED-3000": {
                        text: "컬럼 속성"
                    },
                    "STARTED-4000": {
                        text: "이벤트"
                    },
                    "STARTED-5000": {
                        text: "메소드"
                    },

                },
            },
            dive: {
                grid: {
                },
                text : {
                    "DIVE-0000": {
                        text: "Deep dive!"
                    },
                    "DIVE-1000": {
                        text: "생성과 소멸"
                    },
                    "DIVE-2000": {
                        text: "Vanilla grid 객체"
                    },
                    "DIVE-3000": {
                        text: "footer 함수"
                    },
                    "DIVE-4000": {
                        text: "데이터 타입"
                    },
                },
            },
            api: {
                grid: {

                },
                text : {
                    "API-0000": {
                        text: "그리드 속성"
                    },
                    "API-1000": {
                        text: "컬럼 속성"
                    },
                    "API-2000": {
                        text: "이벤트"
                    },
                    "API-3000": {
                        text: "메소드"
                    },
                    "API-4000": {
                        text: "Vanilla grid 객체"
                    },
                },
            },
        };
        
        //intro view key, anchor id 삽입(ENG)
        Object.keys(this.ENG.intro.text).forEach((key, idx) => {
            this.ENG.intro.text[key].view = CONSTS.VIEW_KEY_INTRO;
            this.ENG.intro.text[key].anchor = "anchor_" + idx;
        });
        //intro grid data에 cell정보 삽입(ENG)
        //gridIntro01
        for(let r = 0; r < this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[0]].col1.length; r++) {
            setCellInfo(this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[0]].col1[r], CONSTS.SAMPLE_GRID_IDS_INTRO[0], r, "col1", CONSTS.VIEW_KEY_INTRO);
        }
        //gridIntro02
        for(let r = 0; r < this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col1.length; r++) {
            setCellInfo(this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col1[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col1", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col2.length; r++) {
            setCellInfo(this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col2[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col2", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col3.length; r++) {
            setCellInfo(this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col3[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col3", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4.length; r++) {
            setCellInfo(this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col4", CONSTS.VIEW_KEY_INTRO);
        }
        //intro view key, anchor id 삽입(KOR)
        Object.keys(this.KOR.intro.text).forEach((key, idx) => {
            this.KOR.intro.text[key].view = CONSTS.VIEW_KEY_INTRO;
            this.KOR.intro.text[key].anchor = "anchor_" + idx;
        });
        //intro grid data에 cell정보 삽입(KOR)
        //gridIntro01
        for(let r = 0; r < this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[0]].col1.length; r++) {
            setCellInfo(this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[0]].col1[r], CONSTS.SAMPLE_GRID_IDS_INTRO[0], r, "col1", CONSTS.VIEW_KEY_INTRO);
        }
        //gridIntro02
        for(let r = 0; r < this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col1.length; r++) {
            setCellInfo(this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col1[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col1", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col2.length; r++) {
            setCellInfo(this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col2[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col2", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col3.length; r++) {
            setCellInfo(this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col3[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col3", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4.length; r++) {
            setCellInfo(this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col4", CONSTS.VIEW_KEY_INTRO);
        }

        //started view key, anchor id 삽입
        Object.keys(this.ENG.started.text).forEach((key, idx) => {
            this.ENG.started.text[key].view = CONSTS.VIEW_KEY_STARTED;
            this.ENG.started.text[key].anchor = "anchor_" + idx;
        });
        //started grid data에 cell정보 삽입(ENG)
        //gridStarted01
        for(let r = 0; r < this.ENG.started.grid[CONSTS.SAMPLE_KEYS_STARTED[0]].col1.length; r++) {
            setCellInfo(this.ENG.started.grid[CONSTS.SAMPLE_KEYS_STARTED[0]].col1[r], CONSTS.SAMPLE_GRID_IDS_STARTED[0], r, "col1", CONSTS.VIEW_KEY_STARTED);
        }
        //started view key, anchor id 삽입
        Object.keys(this.KOR.started.text).forEach((key, idx) => {
            this.KOR.started.text[key].view = CONSTS.VIEW_KEY_STARTED;
            this.KOR.started.text[key].anchor = "anchor_" + idx;
        });
        //started grid data에 cell정보 삽입(KOR)
        //gridStarted01
        for(let r = 0; r < this.KOR.started.grid[CONSTS.SAMPLE_KEYS_STARTED[0]].col1.length; r++) {
            setCellInfo(this.KOR.started.grid[CONSTS.SAMPLE_KEYS_STARTED[0]].col1[r], CONSTS.SAMPLE_GRID_IDS_STARTED[0], r, "col1", CONSTS.VIEW_KEY_STARTED);
        }

        //dive view key, anchor id 삽입
        Object.keys(this.ENG.dive.text).forEach((key, idx) => {
            this.ENG.dive.text[key].view = CONSTS.VIEW_KEY_DIVE;
            this.ENG.dive.text[key].anchor = "anchor_" + idx;
        });
        //dive view key, anchor id 삽입
        Object.keys(this.KOR.dive.text).forEach((key, idx) => {
            this.KOR.dive.text[key].view = CONSTS.VIEW_KEY_DIVE;
            this.KOR.dive.text[key].anchor = "anchor_" + idx;
        });

        //api view key, anchor id 삽입
        Object.keys(this.ENG.api.text).forEach((key, idx) => {
            this.ENG.api.text[key].view = CONSTS.VIEW_KEY_API;
            this.ENG.api.text[key].anchor = "anchor_" + idx;
        });
        //api view key, anchor id 삽입
        Object.keys(this.KOR.api.text).forEach((key, idx) => {
            this.KOR.api.text[key].view = CONSTS.VIEW_KEY_API;
            this.KOR.api.text[key].anchor = "anchor_" + idx;
        });
    }
    return new Contents(CONSTS);
}

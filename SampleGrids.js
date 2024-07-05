function getSampleGrids(CONSTS) {
    const refactoringColumns01 = 
`
    <v-col id="A"></v-col>
    <v-col id="B"></v-col>
    <v-col id="C"></v-col>
    <v-col id="D"></v-col>
    <v-col id="E"></v-col>
    <v-col id="F"></v-col>
    <v-col id="G"></v-col>
    <v-col id="H"></v-col>
    <v-col id="I"></v-col>
    <v-col id="J"></v-col>
    <v-col id="K"></v-col>
    <v-col id="L"></v-col>
    <v-col id="M"></v-col>
    <v-col id="N"></v-col>
    <v-col id="O"></v-col>
    <v-col id="P"></v-col>
    <v-col id="Q"></v-col>
    <v-col id="R"></v-col>
    <v-col id="S"></v-col>
    <v-col id="T"></v-col>
    <v-col id="U"></v-col>
    <v-col id="V"></v-col>
    <v-col id="W"></v-col>
    <v-col id="X"></v-col>
    <v-col id="Y"></v-col>
    <v-col id="Z"></v-col>
`
    function SampleGrids (CONSTS) {
        this.intro = {
            [CONSTS.SAMPLE_KEYS_INTRO[0]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_INTRO[0] + `" rownumSize="40px" verticalBorderSize="0">
    <v-col id="col0" header="header;img;Picture" dataType="img" width="140px"></v-col>
    <v-col id="col1" header=";text;Whale Name" dataType="text" width="130px"></v-col>
    <v-col id="col2" header=";code;Size Code" dataType="code" codes="L;M;S" width="60px"></v-col>
    <v-col id="col3" header=";mask;ID" dataType="mask" format="99999" width="60px" align="center"></v-col>
    <v-col id="col4" header=";date;Last Found\nDate" dataType="date" width="120px"></v-col>
    <v-col id="col5" header=";month;Last Found\nHabitat Month" dataType="month" footer="MAX;MIN" width="120px"></v-col>
    <v-col id="col6" header=";number;Avg\nLength" dataType="number" footer="$$MAX;$$MIN" format="#,##0.## (m)" width="80px"></v-col>
    <v-col id="col7" header=";select;Protection\nStatus" dataType="select" width="150px"></v-col>
    <v-col id="col8" header=";checkbox;Protected" dataType="checkbox" width="90px"></v-col>
    <v-col id="col9" header=";button;Play sound" dataType="button" width="120px"></v-col>
    <v-col id="col10" header=";link;View More" dataType="link" width="100px"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_INTRO[1]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_INTRO[1] + `" rownumVisible="false" statusVisible="false" wordBreak="break-all" whiteSpace="normal">
    <v-col id="col1" header="grid\nattributes" dataType="link" width="25%"></v-col>
    <v-col id="col2" header="column\nattributes" dataType="link" width="25%"></v-col>
    <v-col id="col3" header="events" dataType="link" width="25%"></v-col>
    <v-col id="col4" header="methods" dataType="link" width="25%"></v-col>
</vanilla-grid>`,
        };

        this.started = {
            [CONSTS.SAMPLE_KEYS_STARTED[0]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[0] + `">
    <v-col id="col1" header="row1;row2;row3" dataType="text" width="400"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[1]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[1] + `" lockedColor="false">
    <v-col id="dept" header="Click the Sigma button to the left of the header;filter1(mask);dept " dataType="mask" format="AAA99" width="100" locked="true"></v-col>
    <v-col id="f_nm" header=";filter2(text);first name" dataType="text" width="120" align="center" locked="true"></v-col>
    <v-col id="l_nm" header=";filter3(text);last name" dataType="text" width="120" align="center" locked="true"></v-col>
    <v-col id="d_o_j" header=";filter4(month);DOJ" dataType="month" width="120" locked="true"></v-col>
    <v-col id="e_id" header="Please double click;sort1(text);Employee ID" dataType="text" width="120" align="center" locked="true"></v-col>
    <v-col id="salary" header=";sort2(number);salary" dataType="number" format="$ #,###.00" width="150"></v-col>
    <v-col id="status" header=";checkbox;status" dataType="checkbox" width="80"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[2]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[2] + `" rownumVisible="false" height="300px" nullValue="-">
    <v-col id="col1" header="footer\ntitle" dataType="text" width="110" footer="Maximum :;Minimum :;Summation :;Average :" align="center"></v-col>
    <v-col id="col2" header="footer\ntest" dataType="number" width="200" footer="$$MAX;$$MIN;$$SUM;$$AVG"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[3]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[3] + `" rownumVisible="false" statusVisible="false" lockedColor="false" filterable="false" frozenColCount="3">
    <v-col id="dt" header="dataType;" width="80" align="center" locked="true" fontBold="true"></v-col>
    <v-col id="do" header="do it!;" width="120"></v-col>
    <v-col id="val" header="value;load value" width="130" locked="true"></v-col>
    <v-col id="type" header=";type" width="120" locked="true"></v-col>
    <v-col id="edit" header="editor;" width="120" locked="true"></v-col>
    <v-col id="prst" header="presentation;" width="120" locked="true"></v-col>
    <v-col id="attr_g" header="attributes;grid" width="110" locked="true"></v-col>
    <v-col id="attr_c" header=";col" width="110" locked="true"></v-col>
    <v-col id="rmk" header="remark;" width="500" locked="true"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[4]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[4] + `"
    statusVisible="false"
    alterRow="false"
    filterable="false"
    colorSet="green"
    mouseoverCellBackColor="#efefef"
    selectCellBackColor="#dfdfdf"
    selectRowBackColor="#efefef"
    mouseoverCellFontColor="#333"
    selectCellFontColor="#333"
    rownumSize="40px"
>
` + refactoringColumns01 + `
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[5]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[5] + `"
    statusVisible="false"
    alterRow="false"
    filterable="false"
    colorSet="skyblue"
    rownumSize="40px"
>
` + refactoringColumns01 + `
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[6]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[6] + `"
    statusVisible="false"
    alterRow="false"
    filterable="false"
    colorSet="blue"
    rownumSize="40px"
>
` + refactoringColumns01 + `
</vanilla-grid>`,
        };

        this.dive = {
            [CONSTS.SAMPLE_KEYS_DIVE[0]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_DIVE[0] + `"
    rownumVisible="false"
    statusVisible="false"
    alterRow="false"
    selectionPolicy="single"
    horizenBorderSize="0"
    verticalBorderSize="1"
    headerVisible="false"
    gridBorderColor="#ccc"
    bodyCellBorderColor="#eee"
    selectCellBackColor="#fff"
    mouseoverCellBackColor="#fff"
    selectRowBackColor="#fff"
    buttonBorderColor="#fff"
    buttonBackColor="#fff"
    buttonHoverBackColor="#eee"
    buttonActiveBackColor="#ddd"
>
    <v-col id="lvl2" header="level1" dataType="tree" width="220" verticalAlign="top"></v-col>
    <v-col id="lvl3" header="level2" dataType="tree" width="220" verticalAlign="top"></v-col>
    <v-col id="lvl4" header="level3" dataType="tree" width="220" verticalAlign="top"></v-col>
    <v-col id="lvl5" header="level4" dataType="tree" width="220" verticalAlign="top"></v-col>
    <v-col id="img" header="level5" dataType="img" width="220" verticalAlign="top" locked="true" lockedColor="false"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_DIVE[1]] :
`<!--There are no attributes-->
<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_DIVE[1] + `">
    <v-col id="title" header="Book Title;" dataType="text" width="250"></v-col>
    <v-col id="rentD" header="Rental;Date" dataType="date" width="120"></v-col>
    <v-col id="rentM" header=";Month" dataType="month" width="120"></v-col>
    <v-col id="rentP" header=";Periode(day)" dataType="number" width="120"></v-col>
    <v-col id="overdue" header="Overdue;" dataType="checkbox" width="120"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_DIVE[2]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_DIVE[2] + `">
    <v-col id="pn" header="Pet Name;" dataType="text" width="200"></v-col>
    <v-col id="lcd" header="Last Checkup Date" dataType="date" width="120" footer="last date;LAST_DATE"></v-col>
    <v-col id="w" header="Weight (kg)" dataType="number" format="0.0" width="100" footer="AVG;$$AVG"></v-col>
    <v-col id="v" header="Vaccinated" dataType="checkbox" width="100" footer="count;CHECK_COUNT"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_DIVE[3]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_DIVE[3] + `">
    <v-col id="tn" header="Team Name;" dataType="text" width="180"></v-col>
    <v-col id="lg" header="Logo" dataType="img" width="120"></v-col>
    <v-col id="ft" header="Favorite Team" dataType="radio" width="100"></v-col>
</vanilla-grid>`,
        }

        this.api = {
            [CONSTS.SAMPLE_KEYS_API[0]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[0] + `"
    rownumSize="3%"
    statusVisible="false"
    locked="true"
    lockedColor="false"
    rownumLockedColor="false"
    wordBreak="break-word"
    whiteSpace="normal"
>
    <v-col id="attribute" width="15%"></v-col>
    <v-col id="type" width="10%"></v-col>
    <v-col id="default" width="10%"></v-col>
    <v-col id="remark" width="62%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_API[1]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[1] + `"
    rownumSize="3%"
    statusVisible="false"
    locked="true"
    lockedColor="false"
    rownumLockedColor="false"
    wordBreak="break-word"
    whiteSpace="normal"
>
    <v-col id="attribute" width="13%"></v-col>
    <v-col id="type" width="8%"></v-col>
    <v-col id="default" width="8%"></v-col>
    <v-col id="remark" width="68%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_API[2]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[2] + `"
    rownumSize="3%"
    statusVisible="false"
    locked="true"
    lockedColor="false"
    rownumLockedColor="false"
    wordBreak="break-word"
    whiteSpace="normal"
>
    <v-col id="event" width="15%"></v-col>
    <v-col id="parameter" width="20%"></v-col>
    <v-col id="remark" width="62%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_API[3]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[3] + `"
    rownumSize="4%"
    statusVisible="false"
    locked="true"
    lockedColor="false"
    rownumLockedColor="false"
    wordBreak="break-word"
    whiteSpace="normal"
>
    <v-col id="related" width="5%" rowMerge="true" verticalAlign="top" align="center"></v-col>
    <v-col id="method" width="15%" rowMerge="true"></v-col>
    <v-col id="parameter" width="15%"></v-col>
    <v-col id="return" width="7%"></v-col>
    <v-col id="remark" width="54%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_API[4]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[4] + `"
    height="400px"
    rownumSize="3%"
    statusVisible="false"
    locked="true"
    lockedColor="false"
    rownumLockedColor="false"
    wordBreak="break-word"
    whiteSpace="normal"
>
    <v-col id="function" width="17%"></v-col>
    <v-col id="parameter" width="15%"></v-col>
    <v-col id="return" width="10%"></v-col>
    <v-col id="remark" width="55%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
[CONSTS.SAMPLE_KEYS_API[5]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[5] + `"
    rownumSize="3%"
    statusVisible="false"
    locked="true"
    lockedColor="false"
    rownumLockedColor="false"
    wordBreak="break-word"
    whiteSpace="normal"
>
    <v-col id="attribute" width="25%"></v-col>
    <v-col id="type" width="8%"></v-col>
    <v-col id="default" width="7%"></v-col>
    <v-col id="remark" width="57%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
[CONSTS.SAMPLE_KEYS_API[6]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[6] + `"
    rownumSize="3%"
    statusVisible="false"
    locked="true"
    lockedColor="false"
    rownumLockedColor="false"
    wordBreak="break-word"
    whiteSpace="normal"
>
    <v-col id="attribute" width="30%"></v-col>
    <v-col id="type" width="17%"></v-col>
    <v-col id="default" width="10%"></v-col>
    <v-col id="remark" width="40%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
[CONSTS.SAMPLE_KEYS_API[7]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[7] + `"
    rownumSize="3%"
    statusVisible="false"
    locked="true"
    lockedColor="false"
    rownumLockedColor="false"
    wordBreak="break-word"
    whiteSpace="normal"
>
    <v-col id="attribute" width="30%"></v-col>
    <v-col id="type" width="17%"></v-col>
    <v-col id="default" width="10%"></v-col>
    <v-col id="remark" width="40%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
[CONSTS.SAMPLE_KEYS_API[8]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[8] + `"
    rownumSize="3%"
    statusVisible="false"
    locked="true"
    lockedColor="false"
    rownumLockedColor="false"
    wordBreak="break-word"
    whiteSpace="normal"
>
    <v-col id="attribute" width="30%"></v-col>
    <v-col id="type" width="17%"></v-col>
    <v-col id="default" width="10%"></v-col>
    <v-col id="remark" width="40%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
        };
    }
    return new SampleGrids(CONSTS);
};

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
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_INTRO[0] + `" rownum-size="40px" vertical-border-size="0">
    <v-col id="col0" header="header;img;Picture" data-type="img" width="140px" locked="true"></v-col>
    <v-col id="col1" header=";text;Whale Name" data-type="text" width="130px" required="true" locked="true"></v-col>
    <v-col id="col2" header=";code;Size Code" data-type="code" codes="L;M;S" width="60px" required="true" locked="true"></v-col>
    <v-col id="col3" header=";mask;ID" data-type="mask" format="99999" width="60px" align="center" required="true" locked="true"></v-col>
    <v-col id="col4" header=";date;Last Found\nDate" data-type="date" width="120px"></v-col>
    <v-col id="col5" header=";month;Last Found\nHabitat Month" data-type="month" width="120px" footer="MAX;MIN"></v-col>
    <v-col id="col6" header=";number;Avg\nLength" data-type="number" width="80px" required="true" footer="$$MAX;$$MIN" format="#,##0.## (m)"></v-col>
    <v-col id="col7" header=";select;Protection\nStatus" data-type="select" width="150px"></v-col>
    <v-col id="col8" header=";checkbox;Protected" data-type="checkbox" width="90px"></v-col>
    <v-col id="col9" header=";button;Play sound" data-type="button" width="120px"></v-col>
    <v-col id="col10" header=";link;View More" data-type="link" width="100px"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_INTRO[1]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_INTRO[1] + `" rownum-visible="false" status-visible="false" word-break="break-all" white-space="normal">
    <v-col id="col1" header="grid\nattributes" data-type="link" width="25%"></v-col>
    <v-col id="col2" header="column\nattributes" data-type="link" width="25%"></v-col>
    <v-col id="col3" header="events" data-type="link" width="25%"></v-col>
    <v-col id="col4" header="methods" data-type="link" width="25%"></v-col>
</vanilla-grid>`,
        };

        this.started = {
            [CONSTS.SAMPLE_KEYS_STARTED[0]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[0] + `">
    <v-col id="col1" header="row1;row2;row3" data-type="text" width="400"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[1]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[1] + `" locked-color="false">
    <v-col id="dept" header="Click the Sigma button to the left of the header;filter1(mask);dept " data-type="mask" format="AAA99" width="100" locked="true"></v-col>
    <v-col id="f_nm" header=";filter2(text);first name" data-type="text" width="120" align="center" locked="true"></v-col>
    <v-col id="l_nm" header=";filter3(text);last name" data-type="text" width="120" align="center" locked="true"></v-col>
    <v-col id="d_o_j" header=";filter4(month);DOJ" data-type="month" width="120" locked="true"></v-col>
    <v-col id="e_id" header="Please double click;sort1(text);Employee ID" data-type="text" width="120" align="center" locked="true"></v-col>
    <v-col id="salary" header=";sort2(number);salary" data-type="number" format="$ #,###.00" width="150"></v-col>
    <v-col id="status" header=";checkbox;status" data-type="checkbox" width="80"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[2]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[2] + `" rownum-visible="false" height="300px" nullValue="-">
    <v-col id="col1" header="footer\ntitle" data-type="text" width="110" footer="Maximum :;Minimum :;Summation :;Average :" align="center"></v-col>
    <v-col id="col2" header="footer\ntest" data-type="number" width="200" footer="$$MAX;$$MIN;$$SUM;$$AVG"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[3]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[3] + `" rownum-visible="false" status-visible="false" locked-color="false" filterable="false" frozen-col-count="3">
    <v-col id="dt" header="data-type;" width="80" align="center" locked="true" font-bold="true"></v-col>
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
    status-visible="false"
    alter-row="false"
    filterable="false"
    color-set="green"
    mouseover-cell-back-color="#efefef"
    select-cell-back-color="#dfdfdf"
    select-row-back-color="#efefef"
    mouseover-cell-font-color="#333"
    select-cell-font-color="#333"
    rownum-size="40px"
>
` + refactoringColumns01 + `
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[5]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[5] + `"
    status-visible="false"
    alter-row="false"
    filterable="false"
    color-set="skyblue"
    rownum-size="40px"
>
` + refactoringColumns01 + `
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[6]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[6] + `"
    status-visible="false"
    alter-row="false"
    filterable="false"
    color-set="blue"
    rownum-size="40px"
>
` + refactoringColumns01 + `
</vanilla-grid>`,
        };

        this.dive = {
            [CONSTS.SAMPLE_KEYS_DIVE[0]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_DIVE[0] + `"
    rownum-visible="false"
    status-visible="false"
    alter-row="false"
    selection-policy="single"
    horizen-border-size="0"
    vertical-border-size="1"
    header-visible="false"
    grid-border-color="#ccc"
    body-cell-border-color="#eee"
    select-cell-back-color="#fff"
    mouseover-cell-backColor="#fff"
    select-row-back-color="#fff"
    button-border-color="#fff"
    button-back-color="#fff"
    button-hover-back-color="#eee"
    button-active-back-color="#ddd"
>
    <v-col id="lvl2" header="level1" data-type="tree" width="220" vertical-align="top"></v-col>
    <v-col id="lvl3" header="level2" data-type="tree" width="220" vertical-align="top"></v-col>
    <v-col id="lvl4" header="level3" data-type="tree" width="220" vertical-align="top"></v-col>
    <v-col id="lvl5" header="level4" data-type="tree" width="220" vertical-align="top"></v-col>
    <v-col id="img" header="level5" data-type="img" width="220" vertical-align="top" locked="true" locked-color="false"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_DIVE[1]] :
`<!--There are no attributes-->
<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_DIVE[1] + `">
    <v-col id="title" header="Book Title;" data-type="text" width="250"></v-col>
    <v-col id="rentD" header="Rental;Date" data-type="date" width="120"></v-col>
    <v-col id="rentM" header=";Month" data-type="month" width="120"></v-col>
    <v-col id="rentP" header=";Periode(day)" data-type="number" width="120"></v-col>
    <v-col id="overdue" header="Overdue;" data-type="checkbox" width="120"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_DIVE[2]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_DIVE[2] + `">
    <v-col id="pn" header="Pet Name;" data-type="text" width="200"></v-col>
    <v-col id="lcd" header="Last Checkup Date" data-type="date" width="120" footer="last date;LAST_DATE"></v-col>
    <v-col id="w" header="Weight (kg)" data-type="number" format="0.0" width="100" footer="AVG;$$AVG"></v-col>
    <v-col id="v" header="Vaccinated" data-type="checkbox" width="100" footer="count;CHECK_COUNT"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_DIVE[3]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_DIVE[3] + `">
    <v-col id="tn" header="Team Name;" data-type="text" width="180"></v-col>
    <v-col id="lg" header="Logo" data-type="img" width="120"></v-col>
    <v-col id="ft" header="Favorite Team" data-type="radio" width="100"></v-col>
</vanilla-grid>`,
        }

        this.api = {
            [CONSTS.SAMPLE_KEYS_API[0]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[0] + `"
    rownum-size="3%"
    status-visible="false"
    locked="true"
    locked-color="false"
    rownum-locked-color="false"
    word-break="break-word"
    white-space="normal"
>
    <v-col id="attribute" width="15%"></v-col>
    <v-col id="type" width="10%"></v-col>
    <v-col id="default" width="10%"></v-col>
    <v-col id="remark" width="62%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_API[1]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[1] + `"
    rownum-size="3%"
    status-visible="false"
    locked="true"
    locked-color="false"
    rownum-locked-color="false"
    word-break="break-word"
    white-space="normal"
>
    <v-col id="attribute" width="13%"></v-col>
    <v-col id="type" width="8%"></v-col>
    <v-col id="default" width="8%"></v-col>
    <v-col id="remark" width="68%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_API[2]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[2] + `"
    rownum-size="3%"
    status-visible="false"
    locked="true"
    locked-color="false"
    rownum-locked-color="false"
    word-break="break-word"
    white-space="normal"
>
    <v-col id="event" width="15%"></v-col>
    <v-col id="parameter" width="20%"></v-col>
    <v-col id="remark" width="62%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_API[3]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[3] + `"
    rownum-size="4%"
    status-visible="false"
    locked="true"
    locked-color="false"
    rownum-locked-color="false"
    word-break="break-word"
    white-space="normal"
>
    <v-col id="related" width="5%" row-merge="true" vertical-align="top" align="center"></v-col>
    <v-col id="method" width="15%" row-merge="true"></v-col>
    <v-col id="parameter" width="15%"></v-col>
    <v-col id="return" width="7%"></v-col>
    <v-col id="remark" width="54%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_API[4]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[4] + `"
    height="400px"
    rownum-size="3%"
    status-visible="false"
    locked="true"
    locked-color="false"
    rownum-locked-color="false"
    word-break="break-word"
    white-space="normal"
>
    <v-col id="function" width="17%"></v-col>
    <v-col id="parameter" width="15%"></v-col>
    <v-col id="return" width="10%"></v-col>
    <v-col id="remark" width="55%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
[CONSTS.SAMPLE_KEYS_API[5]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[5] + `"
    rownum-size="3%"
    status-visible="false"
    locked="true"
    locked-color="false"
    rownum-locked-color="false"
    word-break="break-word"
    white-space="normal"
>
    <v-col id="attribute" width="25%"></v-col>
    <v-col id="type" width="8%"></v-col>
    <v-col id="default" width="7%"></v-col>
    <v-col id="remark" width="57%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
[CONSTS.SAMPLE_KEYS_API[6]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[6] + `"
    rownum-size="3%"
    status-visible="false"
    locked="true"
    locked-color="false"
    rownum-locked-color="false"
    word-break="break-word"
    white-space="normal"
>
    <v-col id="attribute" width="30%"></v-col>
    <v-col id="type" width="17%"></v-col>
    <v-col id="default" width="10%"></v-col>
    <v-col id="remark" width="40%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
[CONSTS.SAMPLE_KEYS_API[7]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[7] + `"
    rownum-size="3%"
    status-visible="false"
    locked="true"
    locked-color="false"
    rownum-locked-color="false"
    word-break="break-word"
    white-space="normal"
>
    <v-col id="attribute" width="30%"></v-col>
    <v-col id="type" width="17%"></v-col>
    <v-col id="default" width="10%"></v-col>
    <v-col id="remark" width="40%" filterable="false" sortable="false"></v-col>
</vanilla-grid>`,
[CONSTS.SAMPLE_KEYS_API[8]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_API[8] + `"
    rownum-size="3%"
    status-visible="false"
    locked="true"
    locked-color="false"
    rownum-locked-color="false"
    word-break="break-word"
    white-space="normal"
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

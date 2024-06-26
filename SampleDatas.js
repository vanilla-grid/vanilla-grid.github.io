function getSampleGrids(CONSTS) {
    function SampleGrids (CONSTS) {
        this.intro = {
            [CONSTS.SAMPLE_KEYS_INTRO[0]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_INTRO[0] + `">
    <v-col id="col1" header="header;column1;text" dataType="text" width="270px"></v-col>
    <v-col id="col2" header=";column2;code" dataType="code" codes="A;B;C;D;E" width="80px"></v-col>
    <v-col id="col3" header=";column3;mask" dataType="mask" format="AAAA-999" width="120px"></v-col>
    <v-col id="col4" header=";column4;date" dataType="date" width="120px"></v-col>
    <v-col id="col5" header=";column4;month" dataType="month" footer="MAX;MIN;SUM;AVG" width="120px"></v-col>
    <v-col id="col6" header=";column5;number" dataType="number" footer="$$MAX;$$MIN;$$SUM;$$AVG" format="$ #,##0.####" width="120px"></v-col>
    <v-col id="col7" header=";column6;select" dataType="select" width="120px"></v-col>
    <v-col id="col8" header=";column7;checkbox" dataType="checkbox" width="100px"></v-col>
    <v-col id="col9" header=";column8;button" dataType="button" width="120px"></v-col>
    <v-col id="col10" header=";column9;link" dataType="link" width="150px"></v-col>
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
    <v-col id="status" header=";checkbox;status" dataType="checkbox" width="150"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[2]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[2] + `" height="300px" nullValue="-">
    <v-col id="col1" header="footer\ntitle" dataType="text" width="110" footer="Maximum :;Minimum :;Summation :;Average :" align="center"></v-col>
    <v-col id="col2" header="footer\ntest" dataType="number" width="200" footer="$$MAX;$$MIN;$$SUM;$$AVG"></v-col>
</vanilla-grid>`,
            [CONSTS.SAMPLE_KEYS_STARTED[3]] :
`<vanilla-grid id="` + CONSTS.SAMPLE_GRID_IDS_STARTED[3] + `" rownumVisible="false" statusVisible="false" lockedColor="false" filterable="false" frozenColCount="3">
    <v-col id="dt" header="dataType;" width="80" align="center" locked="true"></v-col>
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
rownumSize="40px">
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
</vanilla-grid>`,
        }
    }
    return new SampleGrids(CONSTS);
};

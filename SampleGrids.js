function getSampleGrids(COMMENTS) {
    function SampleGrids (COMMENTS) {
        const keysIntro = COMMENTS.SAMPLE_KEYS_INTRO;
        const gridIdsIntro = [];
        for(let i = 0; i < keysIntro.length; i++) {
            gridIdsIntro.push("grid" + keysIntro[i])
        }
        this.intro = {
            [keysIntro[0]] :
`<vanilla-grid id="` + gridIdsIntro[0] + `">
    <v-col id="col1" header="header;column1;text" dataType="text" width="270px"></v-col>
    <v-col id="col2" header=";column2;code" dataType="code" codes="A;B;C;D;E" width="80px"></v-col>
    <v-col id="col3" header=";column3;mask" dataType="mask" format="AAAA-999" width="120px"></v-col>
    <v-col id="col4" header=";column4;date" dataType="date" footer="MAX;MIN;SUM;AVG" width="120px"></v-col>
    <v-col id="col5" header=";column5;number" dataType="number" footer="$$MAX;$$MIN;$$SUM;$$AVG" format="$ #,##0.####" width="120px"></v-col>
    <v-col id="col6" header=";column6;select" dataType="select" width="120px"></v-col>
    <v-col id="col7" header=";column7;checkbox" dataType="checkbox" width="100px"></v-col>
    <v-col id="col8" header=";column8;button" dataType="button" width="120px"></v-col>
    <v-col id="col9" header=";column9;link" dataType="link" width="150px"></v-col>
</vanilla-grid>`,
            [keysIntro[1]] :
`<vanilla-grid id="` + gridIdsIntro[1] + `" rownumVisible="false" statusVisible="false" wordBreak="break-all" whiteSpace="normal">
    <v-col id="col1" header="grid\nattributes" dataType="link" width="25%"></v-col>
    <v-col id="col2" header="column\nattributes" dataType="link" width="25%"></v-col>
    <v-col id="col3" header="events" dataType="link" width="25%"></v-col>
    <v-col id="col4" header="methods" dataType="link" width="25%"></v-col>
</vanilla-grid>`,
            }
    }
    return new SampleGrids(COMMENTS);
};

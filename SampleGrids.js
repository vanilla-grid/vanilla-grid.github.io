function getSampleGrids(COMMENTS) {
    function SampleGrids (COMMENTS) {
        const keysIntro = COMMENTS.SAMPLE_KEYS_INTRO;
        const gridIdsIntro = [];
        for(let i = 0; i < keysIntro.length; i++) {
            gridIdsIntro.push("grid" + keysIntro[i])
        }
        this.intro = {
            [keysIntro[0]] :
    `<vanilla-grid id="` + gridIdsIntro[0] + `" height="400px">
        <v-col id="col1" header="header;column1;text" dataType="text" width="270px"></v-col>
        <v-col id="col2" header="header;column2;code" dataType="code" codes="A;B;C;D;E" width="60px"></v-col>
        <v-col id="col3" header="header;column3;mask" dataType="mask" format="AAAA-999" width="120px"></v-col>
        <v-col id="col4" header="header;column4;date" dataType="date" footer="MAX;MIN;SUM;AVG" width="120px"></v-col>
        <v-col id="col5" header="header;column5;number" dataType="number" footer="$$MAX;$$MIN;$$SUM;$$AVG" format="$ #,##0.####" width="120px"></v-col>
        <v-col id="col6" header="header;column6;select" dataType="select" width="120px"></v-col>
        <v-col id="col7" header="header;column7;checkbox" dataType="checkbox" width="100px"></v-col>
        <v-col id="col8" header="header;column8;button" dataType="button" width="120px"></v-col>
        <v-col id="col9" header="header;column9;link" dataType="link" width="150px"></v-col>
    </vanilla-grid>`,
            }

        
    }
    return new SampleGrids(COMMENTS);
};

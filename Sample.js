function getSamples() {
    function Samples () {
        this.sample01 =
`<div data-vanillagrid id="grid1">
    <div data-vanillagrid-col id="col1" header="header;column1;text" dataType="text" width="200px"></div>
    <div data-vanillagrid-col id="col2" header="header;column2;code" dataType="code" codes="A;B;C;D;E" width="60px"></div>
    <div data-vanillagrid-col id="col3" header="header;column3;mask" dataType="mask" format="AAAA-999" width="120px"></div>
    <div data-vanillagrid-col id="col4" header="header;column4;date" dataType="date" footer="MAX;MIN;SUM;AVG" width="120px"></div>
    <div data-vanillagrid-col id="col5" header="header;column5;number" dataType="number" footer="$$MAX;$$MIN;$$SUM;$$AVG" format="$ #,##0.####" width="120px"></div>
    <div data-vanillagrid-col id="col6" header="header;column6;select" dataType="select" width="120px"></div>
    <div data-vanillagrid-col id="col7" header="header;column7;checkbox" dataType="checkbox" width="100px" footer="CHECK_COUNT"></div>
    <div data-vanillagrid-col id="col8" header="header;column8;button" dataType="button" width="120px"></div>
    <div data-vanillagrid-col id="col9" header="header;column9;link" dataType="link" width="150px"></div>
</div>`;
        this.data01 =
        [
            {
                col1 : "This is a Text Column.",
                col2 : "A",
                col3 : "MASK-123",
                col4 : "2020-02-29",
                col5 : 10,
                col6 : [{value:"val1", text:"text1", selected:true},{value:"val2", text:"text2"},{value:"val3", text:"text3"}],
                col7 : "Y",
                col8 : "button",
                col9 : {value:"https://vanilla-note.github.io/",text:"go vanilla-note"},
            },
            {
                col1 : "Double-click to create an editor.",
                col2 : "B",
                col3 : "AAAA-123",
                col4 : "2021-02-28",
                col5 : 20,
                col6 : [{value:"val1", text:"text1"},{value:"val2", text:"text2", selected:true},{value:"val3", text:"text3"}],
                col7 : "Y",
                col8 : "-",
                col9 : {value:"https://vanilla-grid.github.io/",text:"go vanilla-grid"},
            },
            {
                col1 : "Press F2 to create an editor.",
                col2 : "C",
                col3 : "UPER-999",
                col4 : "2022-02-28",
                col5 : 30,
                col6 : [{value:"val1", text:"text1"},{value:"val2", text:"text2"},{value:"val3", text:"text3", selected:true}],
                col7 : "Y",
                col8 : "B",
                col9 : {value:"https://vanilla-note.github.io/",text:"go vanilla-note"},
            },
            {
                col1 : "When you press the enter key, editor focus.",
                col2 : "D",
                col3 : "CASE-123",
                col4 : "2023-02-28",
                col5 : 40,
                col6 : [{value:"val1", text:"text1", selected:true},{value:"val2", text:"text2"},{value:"val3", text:"text3"}],
                col7 : "N",
                col8 : "Click me!",
                col9 : {value:"https://vanilla-grid.github.io/",text:"go vanilla-grid"},
            },
            {
                col1 : "Try it!",
                col2 : "E",
                col3 : "ONLY-000",
                col4 : "2024-02-29",
                col5 : 50,
                col6 : [{value:"val1", text:"text1"},{value:"val2", text:"text2", selected:true},{value:"val3", text:"text3"}],
                col7 : "N",
                col8 : "Submit",
                col9 : {value:"https://vanilla-note.github.io/",text:"go vanilla-note"},
            },
        ];
    }
    return new Samples();
};

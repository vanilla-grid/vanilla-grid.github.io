function getSampleDatas(CONSTS, CONTENTS) {
    function SampleDatas (CONSTS, CONTENTS) {
        const intro = {
            [CONSTS.SAMPLE_KEYS_INTRO[0]] :
            [
                {
                    col1 : null,
                    col2 : "A",
                    col3 : "MASK-123",
                    col4 : "20200229",
                    col5 : "202002",
                    col6 : 10,
                    col7 : [{value:"val1", text:"text1", selected:true},{value:"val2", text:"text2"},{value:"val3", text:"text3"}],
                    col8 : "Y",
                    col9 : "button",
                    col10 : {value:"https://vanilla-note.github.io/",text:"go vanilla-note"},
                },
                {
                    col1 : null,
                    col2 : "B",
                    col3 : "AAAA-999",
                    col4 : "20210228",
                    col5 : "202102",
                    col6 : 20,
                    col7 : [{value:"val1", text:"text1"},{value:"val2", text:"text2", selected:true},{value:"val3", text:"text3"}],
                    col8 : "Y",
                    col9 : "-",
                    col10 : {value:"https://vanilla-grid.github.io/",text:"go vanilla-grid"},
                },
                {
                    col1 : null,
                    col2 : "C",
                    col3 : "UPER-123",
                    col4 : "20220228",
                    col5 : "202202",
                    col6 : 30,
                    col7 : [{value:"val1", text:"text1"},{value:"val2", text:"text2"},{value:"val3", text:"text3", selected:true}],
                    col8 : "Y",
                    col9 : "B",
                    col10 : {value:"https://vanilla-note.github.io/",text:"go vanilla-note"},
                },
                {
                    col1 : null,
                    col2 : "D",
                    col3 : "CASE-321",
                    col4 : "20230228",
                    col5 : "202302",
                    col6 : 40,
                    col7 : [{value:"val1", text:"text1", selected:true},{value:"val2", text:"text2"},{value:"val3", text:"text3"}],
                    col8 : "N",
                    col9 : "Click me!",
                    col10 : {value:"https://vanilla-grid.github.io/",text:"go vanilla-grid"},
                },
                {
                    col1 : null,
                    col2 : "E",
                    col3 : "ONLY-000",
                    col4 : "20240229",
                    col5 : "202402",
                    col6 : 50,
                    col7 : [{value:"val1", text:"text1"},{value:"val2", text:"text2", selected:true},{value:"val3", text:"text3"}],
                    col8 : "N",
                    col9 : "Submit",
                    col10 : {value:"https://vanilla-note.github.io/",text:"go vanilla-note"},
                },
            ],
            [CONSTS.SAMPLE_KEYS_INTRO[1]] : (() => {
                const row = {
                    col1 : {value: null, text: null, target: "_self"},
                    col2 : {value: null, text: null, target: "_self"},
                    col3 : {value: null, text: null, target: "_self"},
                    col4 : {value: null, text: null, target: "_self"},
                };
                const rows = [];
                for(let r = 0; r < CONTENTS.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4.length; r++) {
                    rows.push(row);
                }
                return rows;
            })(),
        };
        const started = {
            [CONSTS.SAMPLE_KEYS_STARTED[0]] :
            [
                {
                    col1 : null,
                },
            ],
            [CONSTS.SAMPLE_KEYS_STARTED[1]] :
            [
                {
                    dept : "AAA01",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "201603",
                    e_id : "7",
                    salary : 100000,
                    status : "Y",
                },
                {
                    dept : "AAA01",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "200103",
                    e_id : "2",
                    salary : 200000,
                    status : "Y",
                },
                {
                    dept : "AAA01",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "200803",
                    e_id : "4",
                    salary : 150000,
                    status : "N",
                },
                {
                    dept : "AAA01",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202403",
                    e_id : "46",
                    salary : 50000,
                    status : "Y",
                },
                {
                    dept : "AAA01",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202203",
                    e_id : "25",
                    salary : 70000,
                    status : "N",
                },
                {
                    dept : "AAA01",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202103",
                    e_id : "27",
                    salary : 30000,
                    status : "N",
                },
                {
                    dept : "AAA02",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "201403",
                    e_id : "12",
                    salary : 180000,
                    status : "N",
                },
                {
                    dept : "AAA02",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202303",
                    e_id : "26",
                    salary : 80000,
                    status : "N",
                },
                {
                    dept : "AAA02",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202203",
                    e_id : "24",
                    salary : 60000,
                    status : "Y",
                },
                {
                    dept : "AAA02",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202403",
                    e_id : "48",
                    salary : 90000,
                    status : "Y",
                },
                {
                    dept : "AAA02",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202403",
                    e_id : "34",
                    salary : 40000,
                    status : "Y",
                },
                {
                    dept : "AAA02",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202303",
                    e_id : "35",
                    salary : 50000,
                    status : "Y",
                },
                {
                    dept : "BBB01",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "200403",
                    e_id : "3",
                    salary : 140000,
                    status : "Y",
                },
                {
                    dept : "BBB01",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "200903",
                    e_id : "9",
                    salary : 110000,
                    status : "N",
                },
                {
                    dept : "BBB01",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "200703",
                    e_id : "11",
                    salary : 130000,
                    status : "Y",
                },
                {
                    dept : "BBB01",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "201303",
                    e_id : "14",
                    salary : 120000,
                    status : "N",
                },
                {
                    dept : "BBB02",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "200803",
                    e_id : "10",
                    salary : 190000,
                    status : "Y",
                },
                {
                    dept : "BBB02",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202403",
                    e_id : "37",
                    salary : 60000,
                    status : "Y",
                },
                {
                    dept : "BBB02",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202303",
                    e_id : "31",
                    salary : 90000,
                    status : "N",
                },
                {
                    dept : "BBB02",
                    f_nm : null,
                    l_nm : null,
                    d_o_j : "202403",
                    e_id : "40",
                    salary : 60000,
                    status : "Y",
                },
            ],
            [CONSTS.SAMPLE_KEYS_STARTED[2]] :
            [
                {
                    col1 : null,
                    col2 : null,
                },
                {
                    col1 : null,
                    col2 : 0,
                },
                {
                    col1 : null,
                    col2 : 100,
                },
                {
                    col1 : null,
                    col2 : 200,
                },
                {
                    col1 : null,
                    col2 : 300,
                },
                {
                    col1 : null,
                    col2 : 400,
                },
                {
                    col1 : null,
                    col2 : 500,
                },
            ],
            [CONSTS.SAMPLE_KEYS_STARTED[3]] :
            [
                {
                    dt : "text",
                    do : "This is a textarea",
                    val : '"This is a textarea"',
                    type : "String",
                    edit : "<textarea>",
                    prst : "<span>",
                    attr_g : "nullValue",
                    attr_c : "maxLength\nmaxByte",
                    rmk : null,
                },
                {
                    dt : "mask",
                    do : "ABC-123545ASD",
                    val : '"ABC-123545ASD"\nformat="AAA-99"',
                    type : "String",
                    edit : "<input> text",
                    prst : "<span>",
                    attr_g : "nullValue",
                    attr_c : "format",
                    rmk : null,
                },
                {
                    dt : "number",
                    do : 0.12,
                    val : 'null\nformat="0 %"',
                    type : "Number",
                    edit : "<input> number",
                    prst : "<span>",
                    attr_g : "nullValue",
                    attr_c : "format\nmaxNumber\nminNumber\nroundNumber",
                    rmk : null,
                },
                {
                    dt : "date",
                    do : "20240101",
                    val : '"20240101"',
                    type : "String\n(yyyymmdd,\nyyyy-mm-dd,\nyyyy/mm/dd\nyyyy. mm. dd)",
                    edit : "<input> date",
                    prst : "<span>",
                    attr_g : "nullValue\ndateFormat",
                    attr_c : "",
                    rmk : null,
                },
                {
                    dt : "month",
                    do : "202401",
                    val : '"202401"',
                    type : "String\n(yyyymm,\nyyyy-mm,\nyyyy/mm\nyyyy. mm)",
                    edit : "<input> month",
                    prst : "<span>",
                    attr_g : "nullValue\nmonthFormat",
                    attr_c : "",
                    rmk : null,
                },
                {
                    dt : "select",
                    do : [{value:"val1", text:"text1"},{value:"val2", text:"text2", selected:true},{value:"val3", text:"text3"}],
                    val : '[\n{\nvalue:"val1",\ntext:"text1"\n},\n{\nvalue:"val2",\ntext:"text2",\nselected:true\n},\n{\nvalue:"val3",\ntext:"text3"\n}\n]',
                    type : "Object",
                    edit : "<input> select",
                    prst : "<input> select",
                    attr_g : "nullValue",
                    attr_c : "selectSize",
                    rmk : null,
                },
                {
                    dt : "checkbox",
                    do : "Y",
                    val : '"Y"',
                    type : "String(\ncheckedValue\nuncheckedValue)",
                    edit : "<input> checkbox",
                    prst : "<input> checkbox",
                    attr_g : "nullValue\ncheckedValue\nuncheckedValue",
                    attr_c : "",
                    rmk : null,
                },
                {
                    dt : "button",
                    do : "This is a button",
                    val : '"This is a button"',
                    type : "String",
                    edit : "",
                    prst : "<button>",
                    attr_g : "nullValue",
                    attr_c : "",
                    rmk : null,
                },
                {
                    dt : "link",
                    do : {value:"https://vanilla-note.github.io/",text:"go vanilla-note"},
                    val : '{\nvalue:"https://vanilla-note.github.io/",\ntext:"go vanilla-note"\n}',
                    type : "Object",
                    edit : "",
                    prst : "<a>",
                    attr_g : "nullValue",
                    attr_c : "",
                    rmk : null,
                },
                {
                    dt : "code",
                    do : '"C"',
                    val : 'C\ncodes="C;U;D"',
                    type : "String",
                    edit : "<input> text",
                    prst : "<span>",
                    attr_g : "",
                    attr_c : "codes\ndefaultCode",
                    rmk : null,
                },
            ],
            [CONSTS.SAMPLE_KEYS_STARTED[4]] : (() => {
                const rows = [];
                for(let i = 0; i < 100; i++) {
                    rows.push({
                        A: null,
                        B: null,
                        C: null,
                        D: null,
                        E: null,
                        F: null,
                        G: null,
                        H: null,
                        I: null,
                        J: null,
                        K: null,
                        L: null,
                        M: null,
                        N: null,
                        O: null,
                        P: null,
                        Q: null,
                        R: null,
                        S: null,
                        T: null,
                        U: null,
                        V: null,
                        W: null,
                        X: null,
                        Y: null,
                        Z: null,
                    });
                }
                return rows;
            })(),
        };

        function setTextData (data, arr) {
            const _data = JSON.parse(JSON.stringify(data));
            arr.forEach(obj => {
                _data.forEach((d, i) => {
                    Object.keys(d).forEach(k => {
                        if(k === obj.key) {
                            d[k] = obj.value[i].text;
                        }
                    });
                });
            });
            return _data;
        }
        function setLinkData (data, arr) {
            const _data = JSON.parse(JSON.stringify(data));
            arr.forEach(obj => {
                _data.forEach((d, i) => {
                    Object.keys(d).forEach(k => {
                        if(k === obj.key) {
                            if(obj.value[i]) {
                                d[k].value = obj.value[i].value;
                                d[k].text = obj.value[i].text;
                            }
                        }
                    });
                });
            });
            return _data;
        }

        this.ENG = {
            intro : {
                [CONSTS.SAMPLE_KEYS_INTRO[0]] : setTextData(
                    intro[[CONSTS.SAMPLE_KEYS_INTRO[0]]],
                    [
                        {key : "col1", value : CONTENTS.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[0]].col1},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_INTRO[1]] : setLinkData(
                    intro[[CONSTS.SAMPLE_KEYS_INTRO[1]]],
                    [
                        {key : "col1", value : CONTENTS.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col1},
                        {key : "col2", value : CONTENTS.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col2},
                        {key : "col3", value : CONTENTS.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col3},
                        {key : "col4", value : CONTENTS.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4},
                    ]
                ),
            },
            started : {
                [CONSTS.SAMPLE_KEYS_STARTED[0]] : setTextData(
                    started[[CONSTS.SAMPLE_KEYS_STARTED[0]]],
                    [
                        {key : "col1", value : CONTENTS.ENG.started.gridNoSearch[CONSTS.SAMPLE_KEYS_STARTED[0]].col1},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_STARTED[1]] : setTextData(
                    started[[CONSTS.SAMPLE_KEYS_STARTED[1]]],
                    [
                        {key : "f_nm", value : CONTENTS.ENG.started.gridNoSearch[CONSTS.SAMPLE_KEYS_STARTED[1]].f_nm},
                        {key : "l_nm", value : CONTENTS.ENG.started.gridNoSearch[CONSTS.SAMPLE_KEYS_STARTED[1]].l_nm},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_STARTED[2]] : started[[CONSTS.SAMPLE_KEYS_STARTED[2]]],
                [CONSTS.SAMPLE_KEYS_STARTED[3]] : setTextData(
                    started[[CONSTS.SAMPLE_KEYS_STARTED[3]]],
                    [
                        {key : "rmk", value : CONTENTS.ENG.started.grid[CONSTS.SAMPLE_KEYS_STARTED[3]].rmk},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_STARTED[4]] : started[[CONSTS.SAMPLE_KEYS_STARTED[4]]],
            },
        };

        this.KOR = {
            intro : {
                [CONSTS.SAMPLE_KEYS_INTRO[0]] : setTextData(
                    intro[[CONSTS.SAMPLE_KEYS_INTRO[0]]],
                    [
                        {key : "col1", value : CONTENTS.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[0]].col1},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_INTRO[1]] : setLinkData(
                    intro[[CONSTS.SAMPLE_KEYS_INTRO[1]]],
                    [
                        {key : "col1", value : CONTENTS.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col1},
                        {key : "col2", value : CONTENTS.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col2},
                        {key : "col3", value : CONTENTS.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col3},
                        {key : "col4", value : CONTENTS.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4},
                    ]
                ),
            },
            started : {
                [CONSTS.SAMPLE_KEYS_STARTED[0]] : setTextData(
                    started[[CONSTS.SAMPLE_KEYS_STARTED[0]]],
                    [
                        {key : "col1", value : CONTENTS.KOR.started.gridNoSearch[CONSTS.SAMPLE_KEYS_STARTED[0]].col1},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_STARTED[1]] : setTextData(
                    started[[CONSTS.SAMPLE_KEYS_STARTED[1]]],
                    [
                        {key : "f_nm", value : CONTENTS.KOR.started.gridNoSearch[CONSTS.SAMPLE_KEYS_STARTED[1]].f_nm},
                        {key : "l_nm", value : CONTENTS.KOR.started.gridNoSearch[CONSTS.SAMPLE_KEYS_STARTED[1]].l_nm},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_STARTED[2]] : started[[CONSTS.SAMPLE_KEYS_STARTED[2]]],
                [CONSTS.SAMPLE_KEYS_STARTED[3]] : setTextData(
                    started[[CONSTS.SAMPLE_KEYS_STARTED[3]]],
                    [
                        {key : "rmk", value : CONTENTS.KOR.started.grid[CONSTS.SAMPLE_KEYS_STARTED[3]].rmk},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_STARTED[4]] : started[[CONSTS.SAMPLE_KEYS_STARTED[4]]],
            },
        };
    }
    
    return new SampleDatas(CONSTS, CONTENTS);
};

function getSampleDatas(CONSTS, CONTENTS) {
    function SampleDatas (CONSTS, CONTENTS) {
        const intro = {
            [CONSTS.SAMPLE_KEYS_INTRO[0]] :
            [
                {
                    col1 : null,
                    col2 : "A",
                    col3 : "MASK-123",
                    col4 : "2020-02-29",
                    col5 : 10,
                    col6 : [{value:"val1", text:"text1", selected:true},{value:"val2", text:"text2"},{value:"val3", text:"text3"}],
                    col7 : "T",
                    col8 : "button",
                    col9 : {value:"https://vanilla-note.github.io/",text:"go vanilla-note"},
                },
                {
                    col1 : null,
                    col2 : "B",
                    col3 : "AAAA-999",
                    col4 : "2021-02-28",
                    col5 : 20,
                    col6 : [{value:"val1", text:"text1"},{value:"val2", text:"text2", selected:true},{value:"val3", text:"text3"}],
                    col7 : "Y",
                    col8 : "-",
                    col9 : {value:"https://vanilla-grid.github.io/",text:"go vanilla-grid"},
                },
                {
                    col1 : null,
                    col2 : "C",
                    col3 : "UPER-123",
                    col4 : "2022-02-28",
                    col5 : 30,
                    col6 : [{value:"val1", text:"text1"},{value:"val2", text:"text2"},{value:"val3", text:"text3", selected:true}],
                    col7 : "T",
                    col8 : "B",
                    col9 : {value:"https://vanilla-note.github.io/",text:"go vanilla-note"},
                },
                {
                    col1 : null,
                    col2 : "D",
                    col3 : "CASE-321",
                    col4 : "2023-02-28",
                    col5 : 40,
                    col6 : [{value:"val1", text:"text1", selected:true},{value:"val2", text:"text2"},{value:"val3", text:"text3"}],
                    col7 : "F",
                    col8 : "Click me!",
                    col9 : {value:"https://vanilla-grid.github.io/",text:"go vanilla-grid"},
                },
                {
                    col1 : null,
                    col2 : "E",
                    col3 : "ONLY-000",
                    col4 : "2024-02-29",
                    col5 : 50,
                    col6 : [{value:"val1", text:"text1"},{value:"val2", text:"text2", selected:true},{value:"val3", text:"text3"}],
                    col7 : "N",
                    col8 : "Submit",
                    col9 : {value:"https://vanilla-note.github.io/",text:"go vanilla-note"},
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
                        {key : "col1", value : CONTENTS.KOR.started.grid[CONSTS.SAMPLE_KEYS_STARTED[0]].col1},
                    ]
                ),
            },
        };

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
                        {key : "col1", value : CONTENTS.ENG.started.grid[CONSTS.SAMPLE_KEYS_STARTED[0]].col1},
                    ]
                ),
            },
        };
    }
    
    return new SampleDatas(CONSTS, CONTENTS);
};

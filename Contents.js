function getContents() {
    const sampleKeysIntro = ['intro01', 'intro02'];
    
    function Contents () {
        this.VIEW_KEY_INTRO = "intro";
        this.VIEW_KEY_STARTED = "started";
        this.VIEW_KEY_DIVE = "dive";
        this.VIEW_KEY_API = "api";
        this.SAMPLE_KEYS_INTRO = sampleKeysIntro;
        this.kor = {
            common: {
                "COMMON-0001" : {
                    text: "▼ 예시 코드는 아래와 같습니다."
                },
            },
            intro: {
                sampleText : {
                    [sampleKeysIntro[0]] : {
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
                },
                "INTRO-0001": {
                    text: "Vanilla JS만을 활용한 simple grid.",
                },
                "INTRO-0002": {
                    text: "Vanilla Grid는 각 30여개의 grid와 coloumn 속성, 30 여개의 customize 가능한 이벤트, 200여개 이상의 method가 있습니다.",
                },
                "INTRO-0003": {
                    text: "해당 코드는 grid의 colorSet속성을 통해 ...",
                },
                "INTRO-0004": {
                    text: "테스트.",
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
            },
            intro: {
                sampleText : {
                    [sampleKeysIntro[0]] : {
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
                },
                "INTRO-0001": {
                    text: "Simple grid using only Vanilla JS.",
                },
                "INTRO-0002": {
                    text: "Vanilla Grid has over 30 grid and column properties, over 30 customizable events, and over 200 methods.",
                },
                "INTRO-0003": {
                    text: "The code uses the colorSet property of the grid...",
                },
                "INTRO-0004": {
                    text: "test...",
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
    return new Contents();
}

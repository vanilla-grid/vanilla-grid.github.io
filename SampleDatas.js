function getSampleDatas(CONSTS, CONTENTS) {
    const refactoringDatas01 = (n) => {
        const rows = [];
        for(let i = 0; i < n; i++) {
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
    };
    const refactoringDatas02 = (n) => {
        const rows = [];
        for(let i = 0; i < n; i++) {
            rows.push({
                attribute: null,
                type: null,
                default: null,
                remark: null,
            });
        }
        return rows;
    };

    function SampleDatas (CONSTS, CONTENTS) {
        const intro = {
            [CONSTS.SAMPLE_KEYS_INTRO[1]] : (() => {
                const row = {
                    col1 : {value: null, text: null, target: "_blank"},
                    col2 : {value: null, text: null, target: "_blank"},
                    col3 : {value: null, text: null, target: "_blank"},
                    col4 : {value: null, text: null, target: "_blank"},
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
                    do : 'C',
                    val : '"C"\ncodes="C;U;D"',
                    type : "String",
                    edit : "<input> text",
                    prst : "<span>",
                    attr_g : "",
                    attr_c : "codes\ndefaultCode",
                    rmk : null,
                },
            ],
            [CONSTS.SAMPLE_KEYS_STARTED[4]] : refactoringDatas01(100),
            [CONSTS.SAMPLE_KEYS_STARTED[5]] : refactoringDatas01(100),
        };

        const getDept = function(lang) {
            const result = {};
            if(lang === 'ENG') {
                result.company = "Company";
                result.corporateServices = "Corporate Services";
                result.humanResourcesTeam = "Human Resources Team";
                result.recruitmentTeam = "Recruitment Team";
                result.trainingTeam = "Training Team";
                result.financeTeam = "Finance Team";
                result.accountingTeam = "Accounting Team";
                result.expenseManagementTeam = "Expense Management Team";

                result.itDevelopmentHeadquarters = "IT Development Headquarters";
                result.softwareDevelopmentDepartment = "Software Development Department";
                result.frontendTeam = "Frontend Team";
                result.backendTeam = "Backend Team";
                result.mobileDevelopmentTeam = "Mobile Development Team";
                result.devOpsDepartment = "DevOps Department";
                result.systemOperationsTeam = "System Operations Team";
                result.cloudManagementTeam = "Cloud Management Team";
                result.qaDepartment = "Quality Assurance Department";
                result.testingTeam = "Testing Team";
                result.automationTeam = "Automation Team";

                result.productManagementHeadquarters = "Product Management Headquarters";
                result.productPlanningDepartment = "Product Planning Department";
                result.marketResearchTeam = "Market Research Team";
                result.productStrategyTeam = "Product Strategy Team";
                result.productManagementDepartment = "Product Management Department";
                result.projectManagementTeam = "Project Management Team";
                result.productSupportTeam = "Product Support Team";

                result.marketingHeadquarters = "Marketing Headquarters";
                result.digitalMarketingDepartment = "Digital Marketing Department";
                result.contentTeam = "Content Team";
                result.advertisingTeam = "Advertising Team";
                result.brandManagementDepartment = "Brand Management Department";
                result.designTeam = "Design Team";
                result.publicRelationsTeam = "Public Relations Team";

                result.salesHeadquarters = "Sales Headquarters";
                result.domesticSalesDepartment = "Domestic Sales Department";
                result.regionalSalesTeam = "Regional Sales Team";
                result.customerManagementTeam = "Customer Management Team";
                result.internationalSalesDepartment = "International Sales Department";
                result.exportTeam = "Export Team";
                result.internationalCustomerManagementTeam = "International Customer Management Team";
            }
            else if (lang === 'KOR') {
                result.company = "회사";
                result.corporateServices = "경영지원실";
                result.humanResourcesTeam = "인사팀";
                result.recruitmentTeam = "채용팀";
                result.trainingTeam = "교육팀";
                result.financeTeam = "재무팀";
                result.accountingTeam = "회계팀";
                result.expenseManagementTeam = "경비처리팀";

                result.itDevelopmentHeadquarters = "IT개발본부";
                result.softwareDevelopmentDepartment = "소프트웨어개발부";
                result.frontendTeam = "프론트엔드팀";
                result.backendTeam = "백엔드팀";
                result.mobileDevelopmentTeam = "모바일개발팀";
                result.devOpsDepartment = "데브옵스부";
                result.systemOperationsTeam = "시스템운영팀";
                result.cloudManagementTeam = "클라우드관리팀";
                result.qaDepartment = "QA부";
                result.testingTeam = "테스트팀";
                result.automationTeam = "자동화팀";

                result.productManagementHeadquarters = "제품관리본부";
                result.productPlanningDepartment = "제품기획부";
                result.marketResearchTeam = "시장조사팀";
                result.productStrategyTeam = "제품전략팀";
                result.productManagementDepartment = "제품관리부";
                result.projectManagementTeam = "프로젝트관리팀";
                result.productSupportTeam = "제품지원팀";

                result.marketingHeadquarters = "마케팅본부";
                result.digitalMarketingDepartment = "디지털마케팅부";
                result.contentTeam = "콘텐츠팀";
                result.advertisingTeam = "광고팀";
                result.brandManagementDepartment = "브랜드관리부";
                result.designTeam = "디자인팀";
                result.publicRelationsTeam = "홍보팀";

                result.salesHeadquarters = "영업본부";
                result.domesticSalesDepartment = "국내영업부";
                result.regionalSalesTeam = "지역영업팀";
                result.customerManagementTeam = "고객관리팀";
                result.internationalSalesDepartment = "해외영업부";
                result.exportTeam = "수출팀";
                result.internationalCustomerManagementTeam = "해외고객관리팀";
            }
            return result;
        };
        const dive = {
            [CONSTS.SAMPLE_KEYS_DIVE[1]] : [
                {
                    title: null,
                    rentD: "20240110",
                    rentM: "202401",
                    rentP: "14",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20240215",
                    rentM: "202402",
                    rentP: "30",
                    overdue: "Y",
                },
                {
                    title: null,
                    rentD: "20240305",
                    rentM: "202403",
                    rentP: "7",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20240412",
                    rentM: "202404",
                    rentP: "21",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20240518",
                    rentM: "202405",
                    rentP: "14",
                    overdue: "Y",
                },
                {
                    title: null,
                    rentD: "20240620",
                    rentM: "202406",
                    rentP: "10",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20240711",
                    rentM: "202407",
                    rentP: "28",
                    overdue: "Y",
                },
                {
                    title: null,
                    rentD: "20240808",
                    rentM: "202408",
                    rentP: "14",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20240914",
                    rentM: "202409",
                    rentP: "20",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20241022",
                    rentM: "202410",
                    rentP: "15",
                    overdue: "Y",
                },
                {
                    title: null,
                    rentD: "20240110",
                    rentM: "202401",
                    rentP: "14",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20240215",
                    rentM: "202402",
                    rentP: "30",
                    overdue: "Y",
                },
                {
                    title: null,
                    rentD: "20240305",
                    rentM: "202403",
                    rentP: "7",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20240412",
                    rentM: "202404",
                    rentP: "21",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20240518",
                    rentM: "202405",
                    rentP: "14",
                    overdue: "Y",
                },
                {
                    title: null,
                    rentD: "20240620",
                    rentM: "202406",
                    rentP: "10",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20240711",
                    rentM: "202407",
                    rentP: "28",
                    overdue: "Y",
                },
                {
                    title: null,
                    rentD: "20240808",
                    rentM: "202408",
                    rentP: "14",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20240914",
                    rentM: "202409",
                    rentP: "20",
                    overdue: "N",
                },
                {
                    title: null,
                    rentD: "20241022",
                    rentM: "202410",
                    rentP: "15",
                    overdue: "Y",
                }
            ],
            [CONSTS.SAMPLE_KEYS_DIVE[2]] : [
                {
                    pn: null,
                    lcd: "20240620",
                    w: "5.2",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240615",
                    w: "4.8",
                    v: "N",
                },
                {
                    pn: null,
                    lcd: "20240701",
                    w: "6.5",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240525",
                    w: "3.9",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240630",
                    w: "5.0",
                    v: "N",
                },
                {
                    pn: null,
                    lcd: "20240702",
                    w: "4.3",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240610",
                    w: "3.2",
                    v: "N",
                },
                {
                    pn: null,
                    lcd: "20240515",
                    w: "7.1",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240625",
                    w: "4.7",
                    v: "N",
                },
                {
                    pn: null,
                    lcd: "20240703",
                    w: "6.0",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240618",
                    w: "5.4",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240622",
                    w: "4.9",
                    v: "N",
                },
                {
                    pn: null,
                    lcd: "20240705",
                    w: "6.2",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240528",
                    w: "3.6",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240708",
                    w: "5.1",
                    v: "N",
                },
                {
                    pn: null,
                    lcd: "20240614",
                    w: "4.5",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240621",
                    w: "6.3",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240518",
                    w: "3.8",
                    v: "N",
                },
                {
                    pn: null,
                    lcd: "20240704",
                    w: "7.0",
                    v: "Y",
                },
                {
                    pn: null,
                    lcd: "20240626",
                    w: "4.4",
                    v: "N",
                }
            ],
            [CONSTS.SAMPLE_KEYS_DIVE[3]] : [
                {
                    tn: null,
                    lg: {src:"logo/lg.jpg", alt:"LG Twins"},
                    ft: "N",
                },
                {
                    tn: null,
                    lg: {src:"logo/kt.jpg", alt:"Kt wiz"},
                    ft: "N",
                },
                {
                    tn: null,
                    lg: {src:"logo/ssg.jpg", alt:"SSG Landers"},
                    ft: "N",
                },
                {
                    tn: null,
                    lg: {src:"logo/nc.jpg", alt:"NC Dinos"},
                    ft: "N",
                },
                {
                    tn: null,
                    lg: {src:"logo/doosan.jpg", alt:"Doosan Bears"},
                    ft: "N",
                },
                {
                    tn: null,
                    lg: {src:"logo/kia.jpg", alt:"KIA Tigers"},
                    ft: "N",
                },
                {
                    tn: null,
                    lg: {src:"logo/lotte.jpg", alt:"Lotte Giants"},
                    ft: "N",
                },
                {
                    tn: null,
                    lg: {src:"logo/samsung.jpg", alt:"Samsung Lions"},
                    ft: "N",
                },
                {
                    tn: null,
                    lg: {src:"logo/hanwha.jpg", alt:"Hanwha Eagles"},
                    ft: "N",
                },
                {
                    tn: null,
                    lg: {src:"logo/kiwoom.jpg", alt:"Kiwwom Heroes"},
                    ft: "Y",
                },
            ],
        }

        const api = {
            [CONSTS.SAMPLE_KEYS_API[0]] : refactoringDatas02(CONSTS.GRID_ATTRIBUTES.length),
            [CONSTS.SAMPLE_KEYS_API[1]] : refactoringDatas02(CONSTS.COLUMN_ATTRIBUTES.length),
            [CONSTS.SAMPLE_KEYS_API[2]] : (function() {
                const rows = [];
                for(let i = 0; i < CONSTS.EVENTS.length; i++) {
                    rows.push({
                        event: null,
                        parameter: null,
                        remark: null,
                    });
                }
                return rows;
            })(),
            [CONSTS.SAMPLE_KEYS_API[3]] : (function() {
                const rows = [];
                for(let i = 0; i < CONSTS.METHODS.length; i++) {
                    rows.push({
                        related: null,
                        method: null,
                        parameter: null,
                        return: null,
                        remark: null,
                    });
                }
                return rows;
            })(),
            [CONSTS.SAMPLE_KEYS_API[4]] : (function() {
                const rows = [];
                for(let i = 0; i < CONSTS.VGO_FUNCTION.length; i++) {
                    rows.push({
                        function: null,
                        parameter: null,
                        return: null,
                        remark: null,
                    });
                }
                return rows;
            })(),
            [CONSTS.SAMPLE_KEYS_API[5]] : refactoringDatas02(CONSTS.VGO_ATTRIBUTES.length),
            [CONSTS.SAMPLE_KEYS_API[6]] : refactoringDatas02(CONSTS.VGO_GRID_INFO_ATTRIBUTES.length),
            [CONSTS.SAMPLE_KEYS_API[7]] : refactoringDatas02(CONSTS.VGO_GRID_CSSINFO_ATTRIBUTES.length),
            [CONSTS.SAMPLE_KEYS_API[8]] : refactoringDatas02(CONSTS.VGO_COLUMN_INFO_ATTRIBUTES.length),
        }

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

        const deptENG = getDept('ENG');
        this.ENG = {
            intro : {
                [CONSTS.SAMPLE_KEYS_INTRO[0]] : [
                    {   
                        "col0": {src:"whale/Blue Whale.jpg", alt:"Blue Whale from Wiki"},
                        "col1": "Blue Whale",
                        "col2": "L",
                        "col3": "00001",
                        "col4": "20230115",
                        "col5": "202301",
                        "col6": 24,
                        "col7": [
                            {"value": "1", "text": "Endangered", "selected": true},
                            {"value": "2", "text": "Vulnerable"},
                            {"value": "3", "text": "Least Concern"}
                        ],
                        "col8": "Y",
                        "col9": "play sound",
                        "col10": {"value": "https://en.wikipedia.org/wiki/Blue_whale", "text": "View Details"}
                    },
                    {
                        "col0": {src:"whale/Humpback Whale.jpg", alt:"Humpback Whale from Wiki"},
                        "col1": "Humpback Whale",
                        "col2": "L",
                        "col3": "00002",
                        "col4": "20230220",
                        "col5": "202302",
                        "col6": 15,
                        "col7": [
                            {"value": "1", "text": "Endangered"},
                            {"value": "2", "text": "Vulnerable", "selected": true},
                            {"value": "3", "text": "Least Concern"}
                        ],
                        "col8": "N",
                        "col9": "play sound",
                        "col10": {"value": "https://en.wikipedia.org/wiki/Humpback_whale", "text": "View Details"}
                    },
                    {
                        "col0": {src:"whale/Sperm Whale.jpg", alt:"Sperm Whale from Wiki"},
                        "col1": "Sperm Whale",
                        "col2": "L",
                        "col3": "00003",
                        "col4": "20230310",
                        "col5": "202303",
                        "col6": 18,
                        "col7": [
                            {"value": "1", "text": "Endangered"},
                            {"value": "2", "text": "Vulnerable", "selected": true},
                            {"value": "3", "text": "Least Concern"}
                        ],
                        "col8": "Y",
                        "col9": "play sound",
                        "col10": {"value": "https://en.wikipedia.org/wiki/Sperm_whale", "text": "View Details"}
                    },
                    {
                        "col0": {src:"whale/Fin Whale.jpg", alt:"Fin Whale from Wiki"},
                        "col1": "Fin Whale",
                        "col2": "L",
                        "col3": "00004",
                        "col4": "20230522",
                        "col5": "202305",
                        "col6": 21,
                        "col7": [
                            {"value": "1", "text": "Endangered", "selected": true},
                            {"value": "2", "text": "Vulnerable"},
                            {"value": "3", "text": "Least Concern"}
                        ],
                        "col8": "N",
                        "col9": "play sound",
                        "col10": {"value": "https://en.wikipedia.org/wiki/Fin_whale", "text": "View Details"}
                    },
                    {
                        "col0": {src:"whale/Gray Whale.jpg", alt:"Gray Whale from Wiki"},
                        "col1": "Gray Whale",
                        "col2": "L",
                        "col3": "00005",
                        "col4": "20230625",
                        "col5": "202306",
                        "col6": 15,
                        "col7": [
                            {"value": "1", "text": "Endangered", "selected": true},
                            {"value": "2", "text": "Vulnerable"},
                            {"value": "3", "text": "Least Concern"}
                        ],
                        "col8": "Y",
                        "col9": "play sound",
                        "col10": {"value": "https://en.wikipedia.org/wiki/Fin_whale", "text": "View Details"}
                    },
                    {
                        "col0": {src:"whale/Orca.jpg", alt:"Orca from Wiki"},
                        "col1": "Orca",
                        "col2": "M",
                        "col3": "00006",
                        "col4": "20230418",
                        "col5": "202304",
                        "col6": 8,
                        "col7": [
                            {"value": "1", "text": "Endangered"},
                            {"value": "2", "text": "Vulnerable"},
                            {"value": "3", "text": "Least Concern", "selected": true}
                        ],
                        "col8": "N",
                        "col9": "play sound",
                        "col10": {"value": "https://en.wikipedia.org/wiki/Orca", "text": "View Details"}
                    },
                    {
                        "col0": {src:"whale/False Killer Whale.jpg", alt:"False Killer Whale from Wiki"},
                        "col1": "False Killer Whale",
                        "col2": "M",
                        "col3": "00007",
                        "col4": "20230805",
                        "col5": "202308",
                        "col6": 10,
                        "col7": [
                            {"value": "1", "text": "Endangered"},
                            {"value": "2", "text": "Vulnerable", "selected": true},
                            {"value": "3", "text": "Least Concern"}
                        ],
                        "col8": "Y",
                        "col9": "play sound",
                        "col10": {"value": "https://en.wikipedia.org/wiki/False_killer_whale", "text": "View Details"}
                    },
                    {
                        "col0": {src:"whale/Beluga Whale.jpg", alt:"Beluga Whale from Wiki"},
                        "col1": "Beluga Whale",
                        "col2": "S",
                        "col3": "00008",
                        "col4": "20230730",
                        "col5": "202307",
                        "col6": 6,
                        "col7": [
                            {"value": "1", "text": "Endangered"},
                            {"value": "2", "text": "Vulnerable"},
                            {"value": "3", "text": "Least Concern", "selected": true}
                        ],
                        "col8": "Y",
                        "col9": "play sound",
                        "col10": {"value": "https://en.wikipedia.org/wiki/Beluga_whale", "text": "View Details"}
                    },
                    {
                        "col0": {src:"whale/Dolphin.jpg", alt:"Dolphin from Wiki"},
                        "col1": "Dolphin",
                        "col2": "S",
                        "col3": "00009",
                        "col4": "20230912",
                        "col5": "202309",
                        "col6": 2.5,
                        "col7": [
                            {"value": "1", "text": "Endangered"},
                            {"value": "2", "text": "Vulnerable"},
                            {"value": "3", "text": "Least Concern", "selected": true}
                        ],
                        "col8": "N",
                        "col9": "play sound",
                        "col10": {"value": "https://en.wikipedia.org/wiki/Dolphin", "text": "View Details"}
                    },
                    {
                        "col0": {src:"whale/Minke Whale.jpg", alt:"Minke Whale from Wiki"},
                        "col1": "Minke Whale",
                        "col2": "M",
                        "col3": "00010",
                        "col4": "20231019",
                        "col5": "202310",
                        "col6": 8,
                        "col7": [
                            {"value": "1", "text": "Endangered"},
                            {"value": "2", "text": "Vulnerable", "selected": true},
                            {"value": "3", "text": "Least Concern"}
                        ],
                        "col8": "Y",
                        "col9": "play sound",
                        "col10": {"value": "https://en.wikipedia.org/wiki/Minke_whale", "text": "View Details"}
                    }
                ],
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
                [CONSTS.SAMPLE_KEYS_STARTED[5]] : started[[CONSTS.SAMPLE_KEYS_STARTED[5]]],
            },
            dive : {
                [CONSTS.SAMPLE_KEYS_DIVE[0]] : [
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.humanResourcesTeam,
                        lvl4: deptENG.recruitmentTeam,
                        lvl5: "James Smith",
                        img: {src:"people/ali-morshedlou-WMD64tMfc4k-unsplash.jpg", alt:"Unsplash Ali Morshedlou"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.humanResourcesTeam,
                        lvl4: deptENG.recruitmentTeam,
                        lvl5: "Mary Johnson",
                        img: {src:"people/alex-robinson-vpwDZgKtgVk-unsplash.jpg", alt:"Unsplash Alex Robinson"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.humanResourcesTeam,
                        lvl4: deptENG.recruitmentTeam,
                        lvl5: "John Williams",
                        img: {src:"people/albert-dera-ILip77SbmOE-unsplash.jpg", alt:"Unsplash Albert Dera"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.humanResourcesTeam,
                        lvl4: deptENG.trainingTeam,
                        lvl5: "Patricia Brown",
                        img: {src:"people/aiony-haust-ITXtNqvfdOw-unsplash.jpg", alt:"Unsplash Aiony Haust"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.humanResourcesTeam,
                        lvl4: deptENG.trainingTeam,
                        lvl5: "Robert Jones",
                        img: {src:"people/aiony-haust-f2ar0ltTvaI-unsplash.jpg", alt:"Unsplash Aiony Haust"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.financeTeam,
                        lvl4: deptENG.accountingTeam,
                        lvl5: "Jennifer Garcia",
                        img: {src:"people/ahmad-ossayli-GJ_Ecmrj0-E-unsplash.jpg", alt:"Unsplash Ahmad Ossayli"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.financeTeam,
                        lvl4: deptENG.accountingTeam,
                        lvl5: "Michael Miller",
                        img: {src:"people/ana-nichita-BI91NrppE38-unsplash.jpg", alt:"Unsplash Ana Nichita"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.financeTeam,
                        lvl4: deptENG.accountingTeam,
                        lvl5: "Linda Davis",
                        img: {src:"people/ben-tofan-liy0P6AmGPM-unsplash.jpg", alt:"Unsplash Ben Tofan"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.financeTeam,
                        lvl4: deptENG.expenseManagementTeam,
                        lvl5: "William Rodriguez",
                        img: {src:"people/ben-weber-EGXESvDSAFY-unsplash.jpg", alt:"Unsplash Ben Weber"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.financeTeam,
                        lvl4: deptENG.expenseManagementTeam,
                        lvl5: "Elizabeth Martinez",
                        img: {src:"people/brock-wegner-7yONARoUsbY-unsplash.jpg", alt:"Unsplash Brock Wegner"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.financeTeam,
                        lvl4: deptENG.expenseManagementTeam,
                        lvl5: "David Hernandez",
                        img: {src:"people/brooke-cagle-2z1T8T7chuE-unsplash.jpg", alt:"Unsplash Brooke Cagle"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.corporateServices,
                        lvl3: deptENG.financeTeam,
                        lvl4: deptENG.expenseManagementTeam,
                        lvl5: "Barbara Lopez",
                        img: {src:"people/cassia-tofano-9RhcYep17m8-unsplash.jpg", alt:"Unsplash Cassia Tofano"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.softwareDevelopmentDepartment,
                        lvl4: deptENG.frontendTeam,
                        lvl5: "Richard Gonzalez",
                        img: {src:"people/charlesdeluvio-kVg2DQTAK7c-unsplash.jpg", alt:"Unsplash Charlesdeluvio"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.softwareDevelopmentDepartment,
                        lvl4: deptENG.frontendTeam,
                        lvl5: "Susan Wilson",
                        img: {src:"people/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg", alt:"Unsplash Christina Wocintechchat Com"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.softwareDevelopmentDepartment,
                        lvl4: deptENG.backendTeam,
                        lvl5: "Joseph Anderson",
                        img: {src:"people/chris-yang-2yE1K98BIAg-unsplash.jpg", alt:"Unsplash Chris Yang"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.softwareDevelopmentDepartment,
                        lvl4: deptENG.backendTeam,
                        lvl5: "Helen Bell",
                        img: {src:"people/ciprian-tudor-yyEY3PGSf0I-unsplash.jpg", alt:"Unsplash Ciprian Tudor"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.softwareDevelopmentDepartment,
                        lvl4: deptENG.backendTeam,
                        lvl5: "Ryan Murphy",
                        img: {src:"people/daniel-gonzalez-XxJ_HIXw25M-unsplash.jpg", alt:"Unsplash Daniel Gonzalez"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.softwareDevelopmentDepartment,
                        lvl4: deptENG.backendTeam,
                        lvl5: "Jessica Thomas",
                        img: {src:"people/daniel-monteiro-9VjEOSFMkrs-unsplash.jpg", alt:"Unsplash Daniel Monteiro"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.softwareDevelopmentDepartment,
                        lvl4: deptENG.backendTeam,
                        lvl5: "Thomas Taylor",
                        img: {src:"people/danist-soh-e37KegQIGNI-unsplash.jpg", alt:"Unsplash Danist Soh"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.softwareDevelopmentDepartment,
                        lvl4: deptENG.mobileDevelopmentTeam,
                        lvl5: "Sarah Moore",
                        img: {src:"people/darshan-patel-QJEVpydulGs-unsplash.jpg", alt:"Unsplash Darshan Patel"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.softwareDevelopmentDepartment,
                        lvl4: deptENG.mobileDevelopmentTeam,
                        lvl5: "Charles Jackson",
                        img: {src:"people/dmitry-vechorko-E9PFbdhZmus-unsplash.jpg", alt:"Unsplash Dmitry Vechorko"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.devOpsDepartment,
                        lvl4: deptENG.systemOperationsTeam,
                        lvl5: "Karen Martin",
                        img: {src:"people/drew-hays-Kt8eGw8_S8Y-unsplash.jpg", alt:"Unsplash Drew Hays"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.devOpsDepartment,
                        lvl4: deptENG.systemOperationsTeam,
                        lvl5: "Sharon Cooper",
                        img: {src:"people/emiliano-vittoriosi-XtmpHM7uKCs-unsplash.jpg", alt:"Unsplash Emiliano Vittoriosi"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.devOpsDepartment,
                        lvl4: deptENG.cloudManagementTeam,
                        lvl5: "Christopher Lee",
                        img: {src:"people/erik-mclean-qgInQSplXBU-unsplash.jpg", alt:"Unsplash Erik Mclean"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.devOpsDepartment,
                        lvl4: deptENG.cloudManagementTeam,
                        lvl5: "Nancy Perez",
                        img: {src:"people/faruk-tokluoglu-KhgxXazhY0I-unsplash.jpg", alt:"Unsplash Faruk Tokluoglu"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.devOpsDepartment,
                        lvl4: deptENG.cloudManagementTeam,
                        lvl5: "Daniel Thompson",
                        img: {src:"people/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg", alt:"Unsplash Gabriel Silverio"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.devOpsDepartment,
                        lvl4: deptENG.cloudManagementTeam,
                        lvl5: "Margaret White",
                        img: {src:"people/jack-finnigan-rriAI0nhcbc-unsplash.jpg", alt:"Unsplash Jack Finnigan"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.qaDepartment,
                        lvl4: deptENG.testingTeam,
                        lvl5: "Matthew Harris",
                        img: {src:"people/jakob-owens-lkMJcGDZLVs-unsplash.jpg", alt:"Unsplash Jakob Owens"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.qaDepartment,
                        lvl4: deptENG.testingTeam,
                        lvl5: "Lisa Clark",
                        img: {src:"people/jessica-felicio-QS9ZX5UnS14-unsplash.jpg", alt:"Unsplash Jessica Felicio"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.itDevelopmentHeadquarters,
                        lvl3: deptENG.qaDepartment,
                        lvl4: deptENG.automationTeam,
                        lvl5: "Anthony Lewis",
                        img: {src:"people/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg", alt:"Unsplash Joseph Gonzalez"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productPlanningDepartment,
                        lvl4: deptENG.marketResearchTeam,
                        lvl5: "Betty Robinson",
                        img: {src:"people/jurica-koletic-7YVZYZeITc8-unsplash.jpg", alt:"Unsplash Jurica Koletic"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productPlanningDepartment,
                        lvl4: deptENG.marketResearchTeam,
                        lvl5: "Mark Walker",
                        img: {src:"people/karina-tess-l35dDPD3Gys-unsplash.jpg", alt:"Unsplash Karina Tess"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productPlanningDepartment,
                        lvl4: deptENG.marketResearchTeam,
                        lvl5: "Dorothy Young",
                        img: {src:"people/kimson-doan-HD8KlyWRYYM-unsplash.jpg", alt:"Unsplash Kimson Doan"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productPlanningDepartment,
                        lvl4: deptENG.productStrategyTeam,
                        lvl5: "Donald Allen",
                        img: {src:"people/kirill-balobanov-2rIs8OH5ng0-unsplash.jpg", alt:"Unsplash Kirill Balobanov"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productPlanningDepartment,
                        lvl4: deptENG.productStrategyTeam,
                        lvl5: "Sandra King",
                        img: {src:"people/kojo-kwarteng-xl-x9IB6wxc-unsplash.jpg", alt:"Unsplash Kojo Kwarteng"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productPlanningDepartment,
                        lvl4: deptENG.productStrategyTeam,
                        lvl5: "Steven Wright",
                        img: {src:"people/kyle-peyton-HI-375qob7M-unsplash.jpg", alt:"Unsplash Kyle Peyton"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productManagementDepartment,
                        lvl4: deptENG.projectManagementTeam,
                        lvl5: "Ashley Scott",
                        img: {src:"people/leilani-angel-K84vnnzxmTQ-unsplash.jpg", alt:"Unsplash Leilani Angel"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productManagementDepartment,
                        lvl4: deptENG.projectManagementTeam,
                        lvl5: "Paul Green",
                        img: {src:"people/lesly-juarez-RukI4qZGlQs-unsplash.jpg", alt:"Unsplash Lesly Juarez"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productManagementDepartment,
                        lvl4: deptENG.productSupportTeam,
                        lvl5: "Kimberly Baker",
                        img: {src:"people/logan-weaver-lgnwvr-p0B7ueoZz8E-unsplash.jpg", alt:"Unsplash Logan Weaver"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productManagementDepartment,
                        lvl4: deptENG.productSupportTeam,
                        lvl5: "Andrew Adams",
                        img: {src:"people/ludovic-migneault-4uj3iZ5m084-unsplash.jpg", alt:"Unsplash Ludovic Migneault"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productManagementDepartment,
                        lvl4: deptENG.productSupportTeam,
                        lvl5: "Donna Nelson",
                        img: {src:"people/ludovic-migneault-EZ4TYgXPNWk-unsplash.jpg", alt:"Unsplash Ludovic Migneault"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.productManagementHeadquarters,
                        lvl3: deptENG.productManagementDepartment,
                        lvl4: deptENG.productSupportTeam,
                        lvl5: "Joshua Hill",
                        img: {src:"people/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg", alt:"Unsplash Luis Villasmil"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.marketingHeadquarters,
                        lvl3: deptENG.digitalMarketingDepartment,
                        lvl4: deptENG.contentTeam,
                        lvl5: "Emily Carter",
                        img: {src:"people/mariano-nocetti-N672DHkCcN0-unsplash.jpg", alt:"Unsplash Mariano Nocetti"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.marketingHeadquarters,
                        lvl3: deptENG.digitalMarketingDepartment,
                        lvl4: deptENG.contentTeam,
                        lvl5: "Kenneth Mitchell",
                        img: {src:"people/mark-farias-dt60oksDTx8-unsplash.jpg", alt:"Unsplash Mark Farias"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.marketingHeadquarters,
                        lvl3: deptENG.digitalMarketingDepartment,
                        lvl4: deptENG.advertisingTeam,
                        lvl5: "Michelle Perez",
                        img: {src:"people/matthew-smith-ghZg2gncq5w-unsplash.jpg", alt:"Unsplash Matthew Smith"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.marketingHeadquarters,
                        lvl3: deptENG.brandManagementDepartment,
                        lvl4: deptENG.designTeam,
                        lvl5: "Kevin Roberts",
                        img: {src:"people/micael-saez-E-qZ2SLe9iM-unsplash.jpg", alt:"Unsplash Micael Saez"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.marketingHeadquarters,
                        lvl3: deptENG.brandManagementDepartment,
                        lvl4: deptENG.designTeam,
                        lvl5: "Carol Turner",
                        img: {src:"people/michael-dam-mEZ3PoFGs_k-unsplash.jpg", alt:"Unsplash Michael Dam"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.marketingHeadquarters,
                        lvl3: deptENG.brandManagementDepartment,
                        lvl4: deptENG.publicRelationsTeam,
                        lvl5: "Brian Phillips",
                        img: {src:"people/mike-van-den-bos-tsicWqYNB-8-unsplash.jpg", alt:"Unsplash Mike Van Den Bos"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.domesticSalesDepartment,
                        lvl4: deptENG.regionalSalesTeam,
                        lvl5: "Amanda Campbell",
                        img: {src:"people/mohammad-faruque-TwuPHbcQ57w-unsplash.jpg", alt:"Unsplash Mohammad Faruque"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.domesticSalesDepartment,
                        lvl4: deptENG.regionalSalesTeam,
                        lvl5: "George Parker",
                        img: {src:"people/nate-J5U-22o1ubw-unsplash.jpg", alt:"Unsplash Nate"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.domesticSalesDepartment,
                        lvl4: deptENG.regionalSalesTeam,
                        lvl5: "Melissa Evans",
                        img: {src:"people/oleg-ivanov-IYw9VneIH7w-unsplash.jpg", alt:"Unsplash Oleg Ivanov"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.domesticSalesDepartment,
                        lvl4: deptENG.regionalSalesTeam,
                        lvl5: "Edward Edwards",
                        img: {src:"people/prince-akachi-J1OScm_uHUQ-unsplash.jpg", alt:"Unsplash Prince Akachi"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.domesticSalesDepartment,
                        lvl4: deptENG.customerManagementTeam,
                        lvl5: "Deborah Collins",
                        img: {src:"people/rico-cori-2yNnxtMo4LE-unsplash.jpg", alt:"Unsplash Rico Cori"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.domesticSalesDepartment,
                        lvl4: deptENG.customerManagementTeam,
                        lvl5: "Ronald Stewart",
                        img: {src:"people/sorin-sirbu-_3iI0mADqho-unsplash.jpg", alt:"Unsplash Sorin Sirbu"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.internationalSalesDepartment,
                        lvl4: deptENG.exportTeam,
                        lvl5: "Stephanie Sanchez",
                        img: {src:"people/stephanie-tuohy-NDCy2-9JhUs-unsplash.jpg", alt:"Unsplash Stephanie Tuohy"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.internationalSalesDepartment,
                        lvl4: deptENG.exportTeam,
                        lvl5: "Timothy Morris",
                        img: {src:"people/tamara-bellis-A3Gd2b-98_g-unsplash.jpg", alt:"Unsplash Tamara Bellis"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.internationalSalesDepartment,
                        lvl4: deptENG.exportTeam,
                        lvl5: "Rebecca Rogers",
                        img: {src:"people/velizar-ivanov-9bFLTsaP_xo-unsplash.jpg", alt:"Unsplash Velizar Ivanov"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.internationalSalesDepartment,
                        lvl4: deptENG.internationalCustomerManagementTeam,
                        lvl5: "Jason Reed",
                        img: {src:"people/viktor-forgacs-Qhjmo7afQuc-unsplash.jpg", alt:"Unsplash Viktor Forgacs"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.internationalSalesDepartment,
                        lvl4: deptENG.internationalCustomerManagementTeam,
                        lvl5: "Laura Cook",
                        img: {src:"people/waldemar-h9v1xUZdQrI-unsplash.jpg", alt:"Unsplash Waldemar"},
                    },
                    {
                        lvl1: deptENG.company,
                        lvl2: deptENG.salesHeadquarters,
                        lvl3: deptENG.internationalSalesDepartment,
                        lvl4: deptENG.internationalCustomerManagementTeam,
                        lvl5: "Jeffrey Morgan",
                        img: {src:"people/warren-tHiGKAJxaA8-unsplash.jpg", alt:"Unsplash Warren"}
                    }
                ],
                [CONSTS.SAMPLE_KEYS_DIVE[1]] : setTextData(
                    dive[[CONSTS.SAMPLE_KEYS_DIVE[1]]],
                    [
                        {key : "title", value : CONTENTS.ENG.dive.gridNoSearch[CONSTS.SAMPLE_KEYS_DIVE[1]].title},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_DIVE[2]] : setTextData(
                    dive[[CONSTS.SAMPLE_KEYS_DIVE[2]]],
                    [
                        {key : "pn", value : CONTENTS.ENG.dive.gridNoSearch[CONSTS.SAMPLE_KEYS_DIVE[2]].pn},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_DIVE[3]] : setTextData(
                    dive[[CONSTS.SAMPLE_KEYS_DIVE[3]]],
                    [
                        {key : "tn", value : CONTENTS.ENG.dive.gridNoSearch[CONSTS.SAMPLE_KEYS_DIVE[3]].tn},
                    ]
                ),
            },
            api : {
                [CONSTS.SAMPLE_KEYS_API[0]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[0]]],
                    [
                        {key : "attribute", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[0]].attribute},
                        {key : "type", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[0]].type},
                        {key : "default", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[0]].default},
                        {key : "remark", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[0]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[1]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[1]]],
                    [
                        {key : "attribute", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[1]].attribute},
                        {key : "type", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[1]].type},
                        {key : "default", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[1]].default},
                        {key : "remark", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[1]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[2]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[2]]],
                    [
                        {key : "event", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[2]].event},
                        {key : "parameter", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[2]].parameter},
                        {key : "remark", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[2]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[3]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[3]]],
                    [
                        {key : "related", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[3]].related},
                        {key : "method", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[3]].method},
                        {key : "parameter", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[3]].parameter},
                        {key : "return", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[3]].return},
                        {key : "remark", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[3]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[4]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[4]]],
                    [
                        {key : "function", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[4]].function},
                        {key : "parameter", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[4]].parameter},
                        {key : "return", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[4]].return},
                        {key : "remark", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[4]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[5]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[5]]],
                    [
                        {key : "attribute", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[5]].attribute},
                        {key : "type", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[5]].type},
                        {key : "default", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[5]].default},
                        {key : "remark", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[5]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[6]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[6]]],
                    [
                        {key : "attribute", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[6]].attribute},
                        {key : "type", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[6]].type},
                        {key : "default", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[6]].default},
                        {key : "remark", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[6]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[7]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[7]]],
                    [
                        {key : "attribute", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[7]].attribute},
                        {key : "type", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[7]].type},
                        {key : "default", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[7]].default},
                        {key : "remark", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[7]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[8]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[8]]],
                    [
                        {key : "attribute", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[8]].attribute},
                        {key : "type", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[8]].type},
                        {key : "default", value : CONTENTS.ENG.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[8]].default},
                        {key : "remark", value : CONTENTS.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[8]].remark},
                    ]
                ),
            },
        };

        const deptKOR = getDept('KOR');
        this.KOR = {
            intro : {
                [CONSTS.SAMPLE_KEYS_INTRO[0]] : [
                    {
                        "col0": {src:"whale/Blue Whale.jpg", alt:"Blue Whale from Wiki"},
                        "col1": "대왕고래",
                        "col2": "L",
                        "col3": "00001",
                        "col4": "20230115",
                        "col5": "202301",
                        "col6": 24,
                        "col7": [
                            {"value": "1", "text": "멸종위기", "selected": true},
                            {"value": "2", "text": "취약"},
                            {"value": "3", "text": "최소관심"}
                        ],
                        "col8": "Y",
                        "col9": "소리재생",
                        "col10": {"value": "https://ko.wikipedia.org/wiki/%EB%8C%80%EC%99%95%EA%B3%A0%EB%9E%98", "text": "자세히 보기"}
                    },
                    {
                        "col0": {src:"whale/Humpback Whale.jpg", alt:"Humpback Whale from Wiki"},
                        "col1": "혹등고래",
                        "col2": "L",
                        "col3": "00002",
                        "col4": "20230220",
                        "col5": "202302",
                        "col6": 15,
                        "col7": [
                            {"value": "1", "text": "멸종위기"},
                            {"value": "2", "text": "취약", "selected": true},
                            {"value": "3", "text": "최소관심"}
                        ],
                        "col8": "N",
                        "col9": "소리재생",
                        "col10": {"value": "https://ko.wikipedia.org/wiki/%ED%98%B9%EB%93%B1%EA%B3%A0%EB%9E%98", "text": "자세히 보기"}
                    },
                    {
                        "col0": {src:"whale/Sperm Whale.jpg", alt:"Sperm Whale from Wiki"},
                        "col1": "향유고래",
                        "col2": "L",
                        "col3": "00003",
                        "col4": "20230310",
                        "col5": "202303",
                        "col6": 18,
                        "col7": [
                            {"value": "1", "text": "멸종위기"},
                            {"value": "2", "text": "취약", "selected": true},
                            {"value": "3", "text": "최소관심"}
                        ],
                        "col8": "Y",
                        "col9": "소리재생",
                        "col10": {"value": "https://ko.wikipedia.org/wiki/%ED%96%A5%EC%9C%A0%EA%B3%A0%EB%9E%98", "text": "자세히 보기"}
                    },
                    {
                        "col0": {src:"whale/Fin Whale.jpg", alt:"Fin Whale from Wiki"},
                        "col1": "참고래",
                        "col2": "L",
                        "col3": "00004",
                        "col4": "20230522",
                        "col5": "202305",
                        "col6": 21,
                        "col7": [
                            {"value": "1", "text": "멸종위기", "selected": true},
                            {"value": "2", "text": "취약"},
                            {"value": "3", "text": "최소관심"}
                        ],
                        "col8": "N",
                        "col9": "소리재생",
                        "col10": {"value": "https://ko.wikipedia.org/wiki/%EC%B0%B8%EA%B3%A0%EB%9E%98", "text": "자세히 보기"}
                    },
                    {
                        "col0": {src:"whale/Gray Whale.jpg", alt:"Gray Whale from Wiki"},
                        "col1": "귀신고래",
                        "col2": "L",
                        "col3": "00005",
                        "col4": "20230625",
                        "col5": "202306",
                        "col6": 15,
                        "col7": [
                            {"value": "1", "text": "멸종위기", "selected": true},
                            {"value": "2", "text": "취약"},
                            {"value": "3", "text": "최소관심"}
                        ],
                        "col8": "Y",
                        "col9": "소리재생",
                        "col10": {"value": "https://ko.wikipedia.org/wiki/%EA%B7%80%EC%8B%A0%EA%B3%A0%EB%9E%98", "text": "자세히 보기"}
                    },
                    {
                        "col0": {src:"whale/Orca.jpg", alt:"Orca from Wiki"},
                        "col1": "범고래",
                        "col2": "M",
                        "col3": "00006",
                        "col4": "20230418",
                        "col5": "202304",
                        "col6": 8,
                        "col7": [
                            {"value": "1", "text": "멸종위기"},
                            {"value": "2", "text": "취약"},
                            {"value": "3", "text": "최소관심", "selected": true}
                        ],
                        "col8": "N",
                        "col9": "소리재생",
                        "col10": {"value": "https://ko.wikipedia.org/wiki/%EB%B2%94%EA%B3%A0%EB%9E%98", "text": "자세히 보기"}
                    },
                    {
                        "col0": {src:"whale/False Killer Whale.jpg", alt:"False Killer Whale from Wiki"},
                        "col1": "흑범고래",
                        "col2": "M",
                        "col3": "00007",
                        "col4": "20230805",
                        "col5": "202308",
                        "col6": 10,
                        "col7": [
                            {"value": "1", "text": "멸종위기"},
                            {"value": "2", "text": "취약", "selected": true},
                            {"value": "3", "text": "최소관심"}
                        ],
                        "col8": "Y",
                        "col9": "소리재생",
                        "col10": {"value": "https://ko.wikipedia.org/wiki/%ED%9D%91%EB%B2%94%EA%B3%A0%EB%9E%98", "text": "자세히 보기"}
                    },
                    {
                        "col0": {src:"whale/Beluga Whale.jpg", alt:"Beluga Whale from Wiki"},
                        "col1": "흰돌고래",
                        "col2": "S",
                        "col3": "00008",
                        "col4": "20230730",
                        "col5": "202307",
                        "col6": 6,
                        "col7": [
                            {"value": "1", "text": "멸종위기"},
                            {"value": "2", "text": "취약"},
                            {"value": "3", "text": "최소관심", "selected": true}
                        ],
                        "col8": "Y",
                        "col9": "소리재생",
                        "col10": {"value": "https://ko.wikipedia.org/wiki/%ED%9D%B0%EB%8F%8C%EA%B3%A0%EB%9E%98", "text": "자세히 보기"}
                    },
                    {
                        "col0": {src:"whale/Dolphin.jpg", alt:"Dolphin from Wiki"},
                        "col1": "돌고래",
                        "col2": "S",
                        "col3": "00009",
                        "col4": "20230912",
                        "col5": "202309",
                        "col6": 2.5,
                        "col7": [
                            {"value": "1", "text": "멸종위기"},
                            {"value": "2", "text": "취약"},
                            {"value": "3", "text": "최소관심", "selected": true}
                        ],
                        "col8": "N",
                        "col9": "소리재생",
                        "col10": {"value": "https://ko.wikipedia.org/wiki/%EB%8F%8C%EA%B3%A0%EB%9E%98", "text": "자세히 보기"}
                    },
                    {
                        "col0": {src:"whale/Minke Whale.jpg", alt:"Minke Whale from Wiki"},
                        "col1": "민부리고래",
                        "col2": "M",
                        "col3": "00010",
                        "col4": "20231019",
                        "col5": "202310",
                        "col6": 8,
                        "col7": [
                            {"value": "1", "text": "멸종위기"},
                            {"value": "2", "text": "취약", "selected": true},
                            {"value": "3", "text": "최소관심"}
                        ],
                        "col8": "Y",
                        "col9": "소리재생",
                        "col10": {"value": "https://ko.wikipedia.org/wiki/%EB%AF%BC%EB%B6%80%EB%A6%AC%EA%B3%A0%EB%9E%98", "text": "자세히 보기"}
                    }
                ],
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
                [CONSTS.SAMPLE_KEYS_STARTED[5]] : started[[CONSTS.SAMPLE_KEYS_STARTED[5]]],
            },
            dive : {
                [CONSTS.SAMPLE_KEYS_DIVE[0]] : [
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.humanResourcesTeam,
                        lvl4: deptKOR.recruitmentTeam,
                        lvl5: "James Smith",
                        img: {src:"people/ali-morshedlou-WMD64tMfc4k-unsplash.jpg", alt:"Unsplash Ali Morshedlou"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.humanResourcesTeam,
                        lvl4: deptKOR.recruitmentTeam,
                        lvl5: "Mary Johnson",
                        img: {src:"people/alex-robinson-vpwDZgKtgVk-unsplash.jpg", alt:"Unsplash Alex Robinson"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.humanResourcesTeam,
                        lvl4: deptKOR.recruitmentTeam,
                        lvl5: "John Williams",
                        img: {src:"people/albert-dera-ILip77SbmOE-unsplash.jpg", alt:"Unsplash Albert Dera"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.humanResourcesTeam,
                        lvl4: deptKOR.trainingTeam,
                        lvl5: "Patricia Brown",
                        img: {src:"people/aiony-haust-ITXtNqvfdOw-unsplash.jpg", alt:"Unsplash Aiony Haust"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.humanResourcesTeam,
                        lvl4: deptKOR.trainingTeam,
                        lvl5: "Robert Jones",
                        img: {src:"people/aiony-haust-f2ar0ltTvaI-unsplash.jpg", alt:"Unsplash Aiony Haust"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.financeTeam,
                        lvl4: deptKOR.accountingTeam,
                        lvl5: "Jennifer Garcia",
                        img: {src:"people/ahmad-ossayli-GJ_Ecmrj0-E-unsplash.jpg", alt:"Unsplash Ahmad Ossayli"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.financeTeam,
                        lvl4: deptKOR.accountingTeam,
                        lvl5: "Michael Miller",
                        img: {src:"people/ana-nichita-BI91NrppE38-unsplash.jpg", alt:"Unsplash Ana Nichita"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.financeTeam,
                        lvl4: deptKOR.accountingTeam,
                        lvl5: "Linda Davis",
                        img: {src:"people/ben-tofan-liy0P6AmGPM-unsplash.jpg", alt:"Unsplash Ben Tofan"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.financeTeam,
                        lvl4: deptKOR.expenseManagementTeam,
                        lvl5: "William Rodriguez",
                        img: {src:"people/ben-weber-EGXESvDSAFY-unsplash.jpg", alt:"Unsplash Ben Weber"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.financeTeam,
                        lvl4: deptKOR.expenseManagementTeam,
                        lvl5: "Elizabeth Martinez",
                        img: {src:"people/brock-wegner-7yONARoUsbY-unsplash.jpg", alt:"Unsplash Brock Wegner"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.financeTeam,
                        lvl4: deptKOR.expenseManagementTeam,
                        lvl5: "David Hernandez",
                        img: {src:"people/brooke-cagle-2z1T8T7chuE-unsplash.jpg", alt:"Unsplash Brooke Cagle"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.corporateServices,
                        lvl3: deptKOR.financeTeam,
                        lvl4: deptKOR.expenseManagementTeam,
                        lvl5: "Barbara Lopez",
                        img: {src:"people/cassia-tofano-9RhcYep17m8-unsplash.jpg", alt:"Unsplash Cassia Tofano"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.softwareDevelopmentDepartment,
                        lvl4: deptKOR.frontendTeam,
                        lvl5: "Richard Gonzalez",
                        img: {src:"people/charlesdeluvio-kVg2DQTAK7c-unsplash.jpg", alt:"Unsplash Charlesdeluvio"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.softwareDevelopmentDepartment,
                        lvl4: deptKOR.frontendTeam,
                        lvl5: "Susan Wilson",
                        img: {src:"people/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg", alt:"Unsplash Christina Wocintechchat Com"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.softwareDevelopmentDepartment,
                        lvl4: deptKOR.backendTeam,
                        lvl5: "Joseph Anderson",
                        img: {src:"people/chris-yang-2yE1K98BIAg-unsplash.jpg", alt:"Unsplash Chris Yang"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.softwareDevelopmentDepartment,
                        lvl4: deptKOR.backendTeam,
                        lvl5: "Helen Bell",
                        img: {src:"people/ciprian-tudor-yyEY3PGSf0I-unsplash.jpg", alt:"Unsplash Ciprian Tudor"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.softwareDevelopmentDepartment,
                        lvl4: deptKOR.backendTeam,
                        lvl5: "Ryan Murphy",
                        img: {src:"people/daniel-gonzalez-XxJ_HIXw25M-unsplash.jpg", alt:"Unsplash Daniel Gonzalez"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.softwareDevelopmentDepartment,
                        lvl4: deptKOR.backendTeam,
                        lvl5: "Jessica Thomas",
                        img: {src:"people/daniel-monteiro-9VjEOSFMkrs-unsplash.jpg", alt:"Unsplash Daniel Monteiro"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.softwareDevelopmentDepartment,
                        lvl4: deptKOR.backendTeam,
                        lvl5: "Thomas Taylor",
                        img: {src:"people/danist-soh-e37KegQIGNI-unsplash.jpg", alt:"Unsplash Danist Soh"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.softwareDevelopmentDepartment,
                        lvl4: deptKOR.mobileDevelopmentTeam,
                        lvl5: "Sarah Moore",
                        img: {src:"people/darshan-patel-QJEVpydulGs-unsplash.jpg", alt:"Unsplash Darshan Patel"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.softwareDevelopmentDepartment,
                        lvl4: deptKOR.mobileDevelopmentTeam,
                        lvl5: "Charles Jackson",
                        img: {src:"people/dmitry-vechorko-E9PFbdhZmus-unsplash.jpg", alt:"Unsplash Dmitry Vechorko"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.devOpsDepartment,
                        lvl4: deptKOR.systemOperationsTeam,
                        lvl5: "Karen Martin",
                        img: {src:"people/drew-hays-Kt8eGw8_S8Y-unsplash.jpg", alt:"Unsplash Drew Hays"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.devOpsDepartment,
                        lvl4: deptKOR.systemOperationsTeam,
                        lvl5: "Sharon Cooper",
                        img: {src:"people/emiliano-vittoriosi-XtmpHM7uKCs-unsplash.jpg", alt:"Unsplash Emiliano Vittoriosi"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.devOpsDepartment,
                        lvl4: deptKOR.cloudManagementTeam,
                        lvl5: "Christopher Lee",
                        img: {src:"people/erik-mclean-qgInQSplXBU-unsplash.jpg", alt:"Unsplash Erik Mclean"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.devOpsDepartment,
                        lvl4: deptKOR.cloudManagementTeam,
                        lvl5: "Nancy Perez",
                        img: {src:"people/faruk-tokluoglu-KhgxXazhY0I-unsplash.jpg", alt:"Unsplash Faruk Tokluoglu"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.devOpsDepartment,
                        lvl4: deptKOR.cloudManagementTeam,
                        lvl5: "Daniel Thompson",
                        img: {src:"people/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg", alt:"Unsplash Gabriel Silverio"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.devOpsDepartment,
                        lvl4: deptKOR.cloudManagementTeam,
                        lvl5: "Margaret White",
                        img: {src:"people/jack-finnigan-rriAI0nhcbc-unsplash.jpg", alt:"Unsplash Jack Finnigan"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.qaDepartment,
                        lvl4: deptKOR.testingTeam,
                        lvl5: "Matthew Harris",
                        img: {src:"people/jakob-owens-lkMJcGDZLVs-unsplash.jpg", alt:"Unsplash Jakob Owens"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.qaDepartment,
                        lvl4: deptKOR.testingTeam,
                        lvl5: "Lisa Clark",
                        img: {src:"people/jessica-felicio-QS9ZX5UnS14-unsplash.jpg", alt:"Unsplash Jessica Felicio"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.itDevelopmentHeadquarters,
                        lvl3: deptKOR.qaDepartment,
                        lvl4: deptKOR.automationTeam,
                        lvl5: "Anthony Lewis",
                        img: {src:"people/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg", alt:"Unsplash Joseph Gonzalez"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productPlanningDepartment,
                        lvl4: deptKOR.marketResearchTeam,
                        lvl5: "Betty Robinson",
                        img: {src:"people/jurica-koletic-7YVZYZeITc8-unsplash.jpg", alt:"Unsplash Jurica Koletic"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productPlanningDepartment,
                        lvl4: deptKOR.marketResearchTeam,
                        lvl5: "Mark Walker",
                        img: {src:"people/karina-tess-l35dDPD3Gys-unsplash.jpg", alt:"Unsplash Karina Tess"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productPlanningDepartment,
                        lvl4: deptKOR.marketResearchTeam,
                        lvl5: "Dorothy Young",
                        img: {src:"people/kimson-doan-HD8KlyWRYYM-unsplash.jpg", alt:"Unsplash Kimson Doan"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productPlanningDepartment,
                        lvl4: deptKOR.productStrategyTeam,
                        lvl5: "Donald Allen",
                        img: {src:"people/kirill-balobanov-2rIs8OH5ng0-unsplash.jpg", alt:"Unsplash Kirill Balobanov"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productPlanningDepartment,
                        lvl4: deptKOR.productStrategyTeam,
                        lvl5: "Sandra King",
                        img: {src:"people/kojo-kwarteng-xl-x9IB6wxc-unsplash.jpg", alt:"Unsplash Kojo Kwarteng"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productPlanningDepartment,
                        lvl4: deptKOR.productStrategyTeam,
                        lvl5: "Steven Wright",
                        img: {src:"people/kyle-peyton-HI-375qob7M-unsplash.jpg", alt:"Unsplash Kyle Peyton"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productManagementDepartment,
                        lvl4: deptKOR.projectManagementTeam,
                        lvl5: "Ashley Scott",
                        img: {src:"people/leilani-angel-K84vnnzxmTQ-unsplash.jpg", alt:"Unsplash Leilani Angel"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productManagementDepartment,
                        lvl4: deptKOR.projectManagementTeam,
                        lvl5: "Paul Green",
                        img: {src:"people/lesly-juarez-RukI4qZGlQs-unsplash.jpg", alt:"Unsplash Lesly Juarez"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productManagementDepartment,
                        lvl4: deptKOR.productSupportTeam,
                        lvl5: "Kimberly Baker",
                        img: {src:"people/logan-weaver-lgnwvr-p0B7ueoZz8E-unsplash.jpg", alt:"Unsplash Logan Weaver"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productManagementDepartment,
                        lvl4: deptKOR.productSupportTeam,
                        lvl5: "Andrew Adams",
                        img: {src:"people/ludovic-migneault-4uj3iZ5m084-unsplash.jpg", alt:"Unsplash Ludovic Migneault"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productManagementDepartment,
                        lvl4: deptKOR.productSupportTeam,
                        lvl5: "Donna Nelson",
                        img: {src:"people/ludovic-migneault-EZ4TYgXPNWk-unsplash.jpg", alt:"Unsplash Ludovic Migneault"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.productManagementHeadquarters,
                        lvl3: deptKOR.productManagementDepartment,
                        lvl4: deptKOR.productSupportTeam,
                        lvl5: "Joshua Hill",
                        img: {src:"people/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg", alt:"Unsplash Luis Villasmil"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.marketingHeadquarters,
                        lvl3: deptKOR.digitalMarketingDepartment,
                        lvl4: deptKOR.contentTeam,
                        lvl5: "Emily Carter",
                        img: {src:"people/mariano-nocetti-N672DHkCcN0-unsplash.jpg", alt:"Unsplash Mariano Nocetti"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.marketingHeadquarters,
                        lvl3: deptKOR.digitalMarketingDepartment,
                        lvl4: deptKOR.contentTeam,
                        lvl5: "Kenneth Mitchell",
                        img: {src:"people/mark-farias-dt60oksDTx8-unsplash.jpg", alt:"Unsplash Mark Farias"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.marketingHeadquarters,
                        lvl3: deptKOR.digitalMarketingDepartment,
                        lvl4: deptKOR.advertisingTeam,
                        lvl5: "Michelle Perez",
                        img: {src:"people/matthew-smith-ghZg2gncq5w-unsplash.jpg", alt:"Unsplash Matthew Smith"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.marketingHeadquarters,
                        lvl3: deptKOR.brandManagementDepartment,
                        lvl4: deptKOR.designTeam,
                        lvl5: "Kevin Roberts",
                        img: {src:"people/micael-saez-E-qZ2SLe9iM-unsplash.jpg", alt:"Unsplash Micael Saez"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.marketingHeadquarters,
                        lvl3: deptKOR.brandManagementDepartment,
                        lvl4: deptKOR.designTeam,
                        lvl5: "Carol Turner",
                        img: {src:"people/michael-dam-mEZ3PoFGs_k-unsplash.jpg", alt:"Unsplash Michael Dam"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.marketingHeadquarters,
                        lvl3: deptKOR.brandManagementDepartment,
                        lvl4: deptKOR.publicRelationsTeam,
                        lvl5: "Brian Phillips",
                        img: {src:"people/mike-van-den-bos-tsicWqYNB-8-unsplash.jpg", alt:"Unsplash Mike Van Den Bos"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.domesticSalesDepartment,
                        lvl4: deptKOR.regionalSalesTeam,
                        lvl5: "Amanda Campbell",
                        img: {src:"people/mohammad-faruque-TwuPHbcQ57w-unsplash.jpg", alt:"Unsplash Mohammad Faruque"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.domesticSalesDepartment,
                        lvl4: deptKOR.regionalSalesTeam,
                        lvl5: "George Parker",
                        img: {src:"people/nate-J5U-22o1ubw-unsplash.jpg", alt:"Unsplash Nate"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.domesticSalesDepartment,
                        lvl4: deptKOR.regionalSalesTeam,
                        lvl5: "Melissa Evans",
                        img: {src:"people/oleg-ivanov-IYw9VneIH7w-unsplash.jpg", alt:"Unsplash Oleg Ivanov"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.domesticSalesDepartment,
                        lvl4: deptKOR.regionalSalesTeam,
                        lvl5: "Edward Edwards",
                        img: {src:"people/prince-akachi-J1OScm_uHUQ-unsplash.jpg", alt:"Unsplash Prince Akachi"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.domesticSalesDepartment,
                        lvl4: deptKOR.customerManagementTeam,
                        lvl5: "Deborah Collins",
                        img: {src:"people/rico-cori-2yNnxtMo4LE-unsplash.jpg", alt:"Unsplash Rico Cori"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.domesticSalesDepartment,
                        lvl4: deptKOR.customerManagementTeam,
                        lvl5: "Ronald Stewart",
                        img: {src:"people/sorin-sirbu-_3iI0mADqho-unsplash.jpg", alt:"Unsplash Sorin Sirbu"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.internationalSalesDepartment,
                        lvl4: deptKOR.exportTeam,
                        lvl5: "Stephanie Sanchez",
                        img: {src:"people/stephanie-tuohy-NDCy2-9JhUs-unsplash.jpg", alt:"Unsplash Stephanie Tuohy"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.internationalSalesDepartment,
                        lvl4: deptKOR.exportTeam,
                        lvl5: "Timothy Morris",
                        img: {src:"people/tamara-bellis-A3Gd2b-98_g-unsplash.jpg", alt:"Unsplash Tamara Bellis"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.internationalSalesDepartment,
                        lvl4: deptKOR.exportTeam,
                        lvl5: "Rebecca Rogers",
                        img: {src:"people/velizar-ivanov-9bFLTsaP_xo-unsplash.jpg", alt:"Unsplash Velizar Ivanov"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.internationalSalesDepartment,
                        lvl4: deptKOR.internationalCustomerManagementTeam,
                        lvl5: "Jason Reed",
                        img: {src:"people/viktor-forgacs-Qhjmo7afQuc-unsplash.jpg", alt:"Unsplash Viktor Forgacs"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.internationalSalesDepartment,
                        lvl4: deptKOR.internationalCustomerManagementTeam,
                        lvl5: "Laura Cook",
                        img: {src:"people/waldemar-h9v1xUZdQrI-unsplash.jpg", alt:"Unsplash Waldemar"},
                    },
                    {
                        lvl1: deptKOR.company,
                        lvl2: deptKOR.salesHeadquarters,
                        lvl3: deptKOR.internationalSalesDepartment,
                        lvl4: deptKOR.internationalCustomerManagementTeam,
                        lvl5: "Jeffrey Morgan",
                        img: {src:"people/warren-tHiGKAJxaA8-unsplash.jpg", alt:"Unsplash Warren"}
                    }
                ],
                [CONSTS.SAMPLE_KEYS_DIVE[1]] : setTextData(
                    dive[[CONSTS.SAMPLE_KEYS_DIVE[1]]],
                    [
                        {key : "title", value : CONTENTS.KOR.dive.gridNoSearch[CONSTS.SAMPLE_KEYS_DIVE[1]].title},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_DIVE[2]] : setTextData(
                    dive[[CONSTS.SAMPLE_KEYS_DIVE[2]]],
                    [
                        {key : "pn", value : CONTENTS.KOR.dive.gridNoSearch[CONSTS.SAMPLE_KEYS_DIVE[2]].pn},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_DIVE[3]] : setTextData(
                    dive[[CONSTS.SAMPLE_KEYS_DIVE[3]]],
                    [
                        {key : "tn", value : CONTENTS.KOR.dive.gridNoSearch[CONSTS.SAMPLE_KEYS_DIVE[3]].tn},
                    ]
                ),
            },
            api : {
                [CONSTS.SAMPLE_KEYS_API[0]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[0]]],
                    [
                        {key : "attribute", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[0]].attribute},
                        {key : "type", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[0]].type},
                        {key : "default", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[0]].default},
                        {key : "remark", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[0]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[1]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[1]]],
                    [
                        {key : "attribute", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[1]].attribute},
                        {key : "type", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[1]].type},
                        {key : "default", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[1]].default},
                        {key : "remark", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[1]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[2]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[2]]],
                    [
                        {key : "event", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[2]].event},
                        {key : "parameter", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[2]].parameter},
                        {key : "remark", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[2]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[3]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[3]]],
                    [
                        {key : "related", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[3]].related},
                        {key : "method", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[3]].method},
                        {key : "parameter", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[3]].parameter},
                        {key : "return", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[3]].return},
                        {key : "remark", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[3]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[4]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[4]]],
                    [
                        {key : "function", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[4]].function},
                        {key : "parameter", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[4]].parameter},
                        {key : "return", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[4]].return},
                        {key : "remark", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[4]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[5]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[5]]],
                    [
                        {key : "attribute", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[5]].attribute},
                        {key : "type", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[5]].type},
                        {key : "default", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[5]].default},
                        {key : "remark", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[5]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[6]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[6]]],
                    [
                        {key : "attribute", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[6]].attribute},
                        {key : "type", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[6]].type},
                        {key : "default", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[6]].default},
                        {key : "remark", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[6]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[7]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[7]]],
                    [
                        {key : "attribute", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[7]].attribute},
                        {key : "type", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[7]].type},
                        {key : "default", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[7]].default},
                        {key : "remark", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[7]].remark},
                    ]
                ),
                [CONSTS.SAMPLE_KEYS_API[8]] : setTextData(
                    api[[CONSTS.SAMPLE_KEYS_API[8]]],
                    [
                        {key : "attribute", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[8]].attribute},
                        {key : "type", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[8]].type},
                        {key : "default", value : CONTENTS.KOR.api.gridNoSearch[CONSTS.SAMPLE_KEYS_API[8]].default},
                        {key : "remark", value : CONTENTS.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[8]].remark},
                    ]
                ),
            },
        };
    }
    
    return new SampleDatas(CONSTS, CONTENTS);
};

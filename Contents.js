function getContents(CONSTS) {
    function setLinkData(arr, link, paramObj) {
        let _link = link;
        Object.keys(paramObj).forEach((key, index) => {
            _link += (index === 0 ? "?" : "&") + key + "=" + paramObj[key];
        });
        const ds = [];
        let i = 0;
    
        while (i < arr.length) {
            const at = arr[i];
            i++;
            if (ds.some(tD => tD.text === at.name)) {
                continue;
            }
            const tD = {};
            const href = _link.replace(/index/g, String(i));
            tD.value = href;
            tD.text = at.name;
            ds.push(tD);
        }
        return ds;
    }
    function setCellInfo (cell, gridId, row, colId, viewId) {
        cell.gridId = gridId;
        cell.row = row + 1;
        cell.colId = colId;
        cell.view = viewId;
    }
    function Contents (CONSTS) {
        this.ENG = {
            common: {
                "COMMON-0000" : {
                    text: "▼ The example code is as follows."
                },
                "COMMON-0001" : {
                    text: "▼ The data inserted into the grid above is as follows."
                },
                "COMMON-0003" : {
                    text: "ADD"
                },
                "COMMON-0004" : {
                    text: "SAVE"
                },
                "COMMON-0005" : {
                    text: "REMOVE"
                },
                "COMMON-0006" : {
                    text: "sorry. There are no search results."
                },
                "COMMON-0007" : {
                    text: "You can search only by entering the exact word (including spaces)."
                },
                "COMMON-0008" : {
                    text: "Try it!"
                },
                "COMMON-0009" : {
                    text: "An example is below."
                },
            },
            intro: {
                grid: {
                    [CONSTS.SAMPLE_KEYS_INTRO[1]] : {
                        "col1" : setLinkData(CONSTS.GRID_ATTRIBUTES, "https://vanilla-grid.github.io/", {view:"api",lang:"ENG",gridId:CONSTS.SAMPLE_GRID_IDS_API[0],row:"index",colId:"attribute"}),
                        "col2" : setLinkData(CONSTS.COLUMN_ATTRIBUTES, "https://vanilla-grid.github.io/", {view:"api",lang:"ENG",gridId:CONSTS.SAMPLE_GRID_IDS_API[1],row:"index",colId:"attribute"}),
                        "col3" : setLinkData(CONSTS.EVENTS, "https://vanilla-grid.github.io/", {view:"api",lang:"ENG",gridId:CONSTS.SAMPLE_GRID_IDS_API[2],row:"index",colId:"event"}),
                        "col4" : setLinkData(CONSTS.METHODS, "https://vanilla-grid.github.io/", {view:"api",lang:"ENG",gridId:CONSTS.SAMPLE_GRID_IDS_API[3],row:"index",colId:"method"}),
                    },
                },
                text : {
                    "INTRO-0000": {
                        text: "Simple grid using only Vanilla JS.",
                    },
                    "INTRO-0001": {
                        text: "※ The filter and sorting icon use the awesome font. The basic form does not apply; separate logic is required. (Described in Deep dive)",
                    },
                    "INTRO-0100": {
                        text: "The data uses JSON objects.",
                    },
                    "INTRO-0101": {
                        text: "There are two forms.",
                    },
                    "INTRO-0102": {
                        text: "1. Key-value form: gridId.getValues(),",
                    },
                    "INTRO-0103": {
                        text: "Key-value objects in array [{}, {}...]",
                    },
                    "INTRO-0104": {
                        code: 
`//Object containing only the keys and values of each cell
//Below is an example of a grid with 5 columns and 2 rows of data.
const keyValues = [
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
]`,
                    },
                    "INTRO-0105": {
                        text: "2. Cell data form: window[gridId].getDatas(),",
                    },
                    "INTRO-0106": {
                        text: "Column array within row array, cell data information object [[{},{}...],[{},{}...]...]",
                    },
                    "INTRO-0107": {
                        code: 
`//Object containing information of each cell
//Below is an example of a grid with 5 columns and 2 rows of data.
const datas = [
    [
        {
            id: 'col1', value: 'val11', dataType: 'text', fontBold: true, //column info..
        },
        {
            id: 'col2', value: '202202', dataType: 'month', //column info..
        },
        {
            id: 'col3', value: 'ABC', dataType: 'mask', format:'AAA', //column info..
        },
        {
            id: 'col4', value: '1', dataType: 'number', //column info..
        },
        {
            id: 'col5', value: '20240101', dataType: 'date', //column info..
        },
    ],
    [
        {
            id: 'col1', value: 'val11', dataType: 'text', fontBold: true, //column info..
        },
        {
            id: 'col2', value: '202202', dataType: 'month', //column info..
        },
        {
            id: 'col3', value: 'abc', dataType: 'mask', format:'aaa', //column info..
        },
        {
            id: 'col4', value: '1', dataType: 'number', //column info..
        },
        {
            id: 'col5', value: '20240101', dataType: 'date', //column info..
        },
    ],
]`,
                    },
                    "INTRO-0108": {
                        text: "You can intuitively and conveniently manage data using JSON objects.",
                    },
    
    
                    "INTRO-0200": {
                        text: "You can customize the grid through attribute values, events, and methods."
                    },
                    "INTRO-0201": {
                        text: "Vanilla Grid has about 30 grid and column properties, about 30 customizable events, and over 240 methods."
                    },
                    "INTRO-0300": {
                        text: "It can be widely applied with other libraries."
                    },
                    "INTRO-0301": {
                        text: "Only vanilla JS is used. Styles sheet applied directly to the screen. Provides create and destroy functions. Calls the object used as a closure."
                    },
                    "INTRO-0302": {
                        text: "The current page is implemented using vue 2 and bootstrap 3. Let's take this method as an example."
                    },
                    "INTRO-0303": {
                        text: "1-1. Declare Vanilla Grid in the header."
                    },
                    "INTRO-0304": {
                        code: 
`<script src="Vanillagrid.min.1.0.0.js"></script>
`,
                    },
                    "INTRO-0315": {
                        text: "1-2. or use npm."
                    },
                    "INTRO-0316": {
                        code: 
`npm i vanillagrid
`,
                    },
                    "INTRO-0305": {
                        text: "2. At the end of the body"
                    },
                    "INTRO-0306": {
                        code: 
`<!--Prevent existing creation logic-->
<script> vanillagrid_onBeforeCreate = function(e, vn) {return false;} </script>
`,
                    },
                    "INTRO-0307": {
                        text: "Add."
                    },
                    "INTRO-0308": {
                        text: "3. In vue's data"
                    },
                    "INTRO-0309": {
                        code: 
`//Declare vanilla grid object variable
data () {
    return {
        vg : null;
    }
}
`,
                    },
                    "INTRO-0310": {
                        text: "4. In vue's mounted"
                    },
                    "INTRO-0311": {
                        code: 
`//Create vanilla grid object
mounted: function() {
    this.vg = getVanillagrid();
    this.vg.create();
    this.loadGrid();
},
`,
                    },
                    "INTRO-0312": {
                        text: "5. In vue's beforeDestroy",
                    },
                    "INTRO-0313": {
                        code: 
`//Remove vanilla grid object
beforeDestroy: function() {
    this.vg.destroy();
},
`,
                    },
                    "INTRO-0314": {
                        text: "6. This allows the grid to be redrawn whenever the vue component is destroyed and mounted.",
                    },
                    "INTRO-0400": {
                        text: "Purpose of Production"
                    },
                    "INTRO-0401": {
                        text: "Vanillanote is a solo development. It was developed for learning javascript. Therefore, 100% reliability cannot be guaranteed when using it, "
                                + "and there are some limitations. However, I believe it will show excellent performance. "
                                + "Vanillanote started development to reduce the time required to develop a new grid each time I proceed with a personal project. "
                                + "It was developed with the goal of developing a grid that can be used without libraries or frameworks in any environment "
                                + "such as Jquery, Vue, React, etc. For this reason, this program uses only Vanilla JS. The pros and cons of Vanillagrid are as follows."
                    },
                    "INTRO-0410": {
                        text: "Advantages"
                    },
                    "INTRO-0411": {
                        text: "It can be applied to a wide range of environments using only Vanilla JS and ES5 syntax."
                    },
                    "INTRO-0412": {
                        text: "Managing data is intuitive by getting and setting JSON data."
                    },
                    "INTRO-0413": {
                        text: "You can achieve excellent performance by using predefined properties, events, and methods."
                    },
                    "INTRO-0414": {
                        text: "You can manage the lifecycle of objects independently and customize more delicately through management logic."
                    },
                    "INTRO-0415": {
                        text: "It is implemented to minimize the impact on or from existing css or javascript sources."
                    },
                    "INTRO-0416": {
                        text: "Does not use innerHTML or eval."
                    },
                    "INTRO-0417": {
                        text: "It is very lightweight with a single js file."
                    },
                    "INTRO-0430": {
                        text: "Disadvantages"
                    },
                    "INTRO-0431": {
                        text: "For performance reasons, it is recommended to load data of around 100 rows for the grid for editing and around 1000 rows for the grid for view.",
                    },
                    "INTRO-0432": {
                        text: "You can access each grid's cell on the screen. Although the actual value of the cell is hidden, it is not completely secure."
                    },
                    "INTRO-0433": {
                        text: "It does not support the function of directly entering the corresponding key when the user types on the keyboard with the cell focused. "
                        + "(It could not be implemented due to limitations in Korean input.)"
                    },
                    "INTRO-0434": {
                        text: "Filter can select only one value per column."
                    },
                    "INTRO-0435": {
                        text: "You can access the function call variables declared as global variables in developer mode. "
                        + "It is a logic provided to facilitate development through the library but may be vulnerable to security. "
                        + "Function call variables (window[gridId]) can remove themselves with window[gridId].removeGridMethod(). "
                        + "Detect the F12 key and call the logic."
                    },
                    "INTRO-0500": {
                        text: "Browser Compatibility"
                    },
                    "INTRO-0501": {
                        text: "※ Vanillagrid.js primarily uses ES6 syntax. If you need compatibility with older environments, consider using Babel!"
                    },
                    "INTRO-0600": {
                        text: "License"
                    },
                    "INTRO-0700": {
                        text: "Contact Us"
                    }
                },
            },
            started: {
                grid: {
                    [CONSTS.SAMPLE_KEYS_STARTED[3]] : {
                        "rmk" : [
                            {
                                text : 'dataType="text".\nText input type.\nHolds values in string format.\nWhen editing, creates a textarea input box.\nDisplayed as a span tag on the screen.',
                            },
                            {
                                text : 'dataType="mask".\nCharacter input type matching a format.\nHolds values in string format.\nWhen editing, creates an input text box.\nDisplayed as a span tag on the screen.\n\n'
                                        + 'The format uses "A" for uppercase letters, "a" for lowercase letters,\n"9" for numbers, and other characters represent themselves.\n'
                                        + 'For example, format="AAA-99" allows input of three uppercase letters + "-" + two numbers.',
                            },
                            {
                                text : 'dataType="number".\n Number input type.\n Holds values in numeric format.\nWhen editing, creates an input number box.\nDisplayed as a span tag on the screen.\n\n'
                                        + 'The number type format is divided into integer, decimal, and character parts.\n'
                                        + 'Integer part\n#,### : 9,999. Zero is not displayed.\n #,##0 : Same as above. Zero is displayed.\n # : 9999. Zero is not displayed.\n 0 : Same as above. Zero is displayed.\n'
                                        + 'Decimal part\n0 : Display zero even if absent\n # : Display only if present\n'
                                        + 'Character part\nEnds with "%" : Calculated as a percentage and displayed as 00%.\nOther characters : Displayed as is\n\n'
                                        + 'For example\nformat="#,###.00 $" with value 123123123.1 displays as "123,123,123.10 $".\n'
                                        + 'format="0 %" with value 0.12 displays as "12 %".\n',
                            },
                            {
                                text : 'dataType="date".\nDate input type.\nHolds values in the string format of a date (yyyymmdd).\nWhen editing, creates an input date box.\nDisplayed as a span tag on the screen.',
                            },
                            {
                                text : 'dataType="month".\nYear and month input type.\nHolds values in the format of year and month (yyyymm).\nWhen editing, creates an input month box.\nDisplayed as a span tag on the screen.',
                            },
                            {
                                text : 'dataType="select".\nSelect type.\nHolds values in object format.\n[\n{value:"val1", text:"text1"},\n{value:"val2", text:"text2", selected:true},\n{value:"val3", text:"text3"}\n]\n'
                                        + 'If no selected value (selected:true) is present, the first option is selected.\nDisplayed as an input select on the screen and can be edited.',
                            },
                            {
                                text : 'dataType="checkbox".\nCheckbox type.\nHolds values in the string format of checkedValue and uncheckedValue.\n(default: Y, N)\nDisplayed as an input checkbox on the screen and can be edited.',
                            },
                            {
                                text : 'dataType="button".\nButton type.\nHolds values in the string format displayed on the button.\nCannot be edited.\nDisplayed as a button tag on the screen.',
                            },
                            {
                                text : 'dataType="link".\nAnchor tag type.\nHolds values in object format.\n{value: "https://vanilla-grid.github.io/", text: "Go", target: "_blank"}\n'
                                        + 'After creating the anchor tag, value is set as href, text as innerText, and target as the target attribute value.\nCannot be edited.\nDisplayed as an anchor tag on the screen.',
                            },
                            {
                                text : 'dataType="code".\nString input type determined by the codes attribute. Strings not in the codes attribute cannot be inserted.\nThe codes attribute is set as a string separated by ";".\nThe default value is set by the defaultCode attribute.\nHolds values in string format.\nWhen editing, creates an input box.\nDisplayed as a span tag on the screen.',
                            },
                        ]
                    },
                },
                gridNoSearch : {
                    [CONSTS.SAMPLE_KEYS_STARTED[0]] : {
                        "col1" : [
                            {
                                text : "This is a text dataType.\nDouble-click to create an editor.\nPress F2 to create an editor.\nWhen you press the enter key, editor focus.\nTry it!",
                            },
                        ]
                    },
                    [CONSTS.SAMPLE_KEYS_STARTED[1]] : {
                        "f_nm" : [
                            {text : "James"},
                            {text : "John"},
                            {text : "Robert"},
                            {text : "John"},
                            {text : "Robert"},
                            {text : "James"},
                            {text : "Robert"},
                            {text : "Michael"},
                            {text : "William"},
                            {text : "William"},
                            {text : "David"},
                            {text : "Richard"},
                            {text : "Richard"},
                            {text : "David"},
                            {text : "Joseph"},
                            {text : "Charles"},
                            {text : "David"},
                            {text : "Richard"},
                            {text : "Thomas"},
                            {text : "Charles"},
                        ],
                        "l_nm" : [
                            {text : "Smith"},
                            {text : "Johnson"},
                            {text : "Williams"},
                            {text : "Smith"},
                            {text : "Brown"},
                            {text : "Jones"},
                            {text : "Smith"},
                            {text : "Jones"},
                            {text : "Garcia"},
                            {text : "Miller"},
                            {text : "Davis"},
                            {text : "Miller"},
                            {text : "Davis"},
                            {text : "Johnson"},
                            {text : "Brown"},
                            {text : "Rodriguez"},
                            {text : "Garcia"},
                            {text : "Martinez"},
                            {text : "Rodriguez"},
                            {text : "Williams"},
                        ],
                    },
                },
                text : {
                    "STARTED-0000": {
                        text: "Getting Started"
                    },
                    "STARTED-0001": {
                        text: "Starting Vanilla Grid is very simple.",
                    },
                    "STARTED-0002": {
                        text: "1-1. Declare Vanilla Grid in the header.",
                    },
                    "STARTED-0003": {
                        code: 
`<script src="Vanillagrid.min.1.0.0.js"></script>
`,
                    },
                    "STARTED-0006": {
                        text: "1-2. or use npm."
                    },
                    "STARTED-0007": {
                        code: 
`npm i vanillagrid
`,
                    },
                    "STARTED-0004": {
                        text: "2. Create the grid in the body according to the specified format.",
                    },
                    "STARTED-0005": {
                        code: 
`<!--
The id attribute of grid and column is mandatory.
<vanilla-grid id="gridId" ...grid attributes >
    <v-col id="columnId01" ...column attributes ></v-col>
    ... columns
</vanilla-grid>
-->
`,
                    },
                    "STARTED-1000": {
                        text: "Simple Use"
                    },
                    "STARTED-1100": {
                        text: "Header"
                    },
                    "STARTED-1101": {
                        text: "The header of the grid always represents a single row. Set the header attribute in the column (v-col). If the header attribute is not set, the id attribute value becomes the header."
                    },
                    "STARTED-1110": {
                        text: "1. The header can be set to multiple rows using ';' as the separator."
                    },
                    "STARTED-1111": {
                        code: 
`<!--3 rows of header-->
<v-col id="columnId01" header="row1;row2;row3"></v-col>
`,
                    },
                    "STARTED-1120": {
                        text: "2. The header automatically merges cells with empty values separated by ';' (row merge is downward for empty values, col merge is to the right for empty values). The priority is row merge > col merge."
                    },
                    "STARTED-1121": {
                        code: 
`<!--Header of rows 1-3 column 1 are row merged-->
<v-col id="columnId01" header="row1;;"></v-col>
<v-col id="columnId02" header="row1;row2;row3"></v-col>
<!--Header of row 1 columns 1-2, row 2 columns 1-2 are col merged-->
<v-col id="columnId01" header="row1;row2;row3"></v-col>
<v-col id="columnId02" header=";;row2"></v-col>
`,
                    },
                    "STARTED-1130": {
                        text: "3. The header can have escape sequences (also applies to footer)."
                    },
                    "STARTED-1131": {
                        code: 
`<!--Escape sequence for line break-->
<v-col id="columnId01" header="escape\\nsequence"></v-col>
`,
                    },
                    "STARTED-1140": {
                        text: "4. The header has filter and sort functions, and a select all checkbox function."
                    },
                    "STARTED-1141": {
                        text: "1) Users can use the filter by clicking the sigma (σ) on the left side of the last row header. The sigma (σ) can be easily customized to change the filter element to the developer's desired appearance. (Explained in Deep dive)"
                    },
                    "STARTED-1142": {
                        text: "2) Sorting occurs when users double-click the last row header. The sorting result differs depending on whether the data type is text or number. The sort icon can also be easily customized to change the sort element. (Explained in Deep dive)"
                    },
                    "STARTED-1143": {
                        text: "3) If the data type is checkbox, double-clicking the last row header does not sort but toggles the checkbox state between checked and unchecked for all rows."
                    },
                    "STARTED-1300": {
                        text: "Footer"
                    },
                    "STARTED-1301": {
                        text: "1. The footer has functions for maximum, minimum, sum, and average values."
                    },
                    "STARTED-1302": {
                        text: "To use these functions, prefix with '$$' and use the keywords MAX, MIN, SUM, AVG. Rows can be added using ';' as the separator. For example: $$MAX;$$MIN;$$SUM;$$AVG"
                    },
                    "STARTED-1303": {
                        code: 
`<!--Maximum, minimum, sum, average-->
<v-col id="columnId01" dataType="number" footer="$$MAX;$$MIN;$$SUM;$$AVG"></v-col>
`,
                    },
                    "STARTED-1304": {
                        text: "Calculated values are based only on rows currently visible in the grid. For example, if all rows except one are filtered out, the footer values are calculated based only on that one row."
                    },
                    "STARTED-1305": {
                        text: "Null values are excluded from the calculations. Averages are rounded to six decimal places."
                    },
                    "STARTED-1306": {
                        text: "2. Other characters are simply displayed as strings. For example: MAX :;MIN :;SUM :;AVG :"
                    },
                    "STARTED-1307": {
                        code: 
`<!--Displayed as simple strings-->
<v-col id="columnId01" dataType="number" footer="MAX :;MIN :;SUM :;AVG :"></v-col>
`,
                    },
                    "STARTED-1308": {
                        text: "3. By using the footerFormula of the Vanilla grid object, you can directly register and use functions to be applied to the footer. (Explained in Deep dive)"
                    },
                    "STARTED-1500": {
                        text: "Columns"
                    },
                    "STARTED-1501": {
                        text: "Columns are set with the v-col tag, and the id attribute is mandatory."
                    },
                    "STARTED-1510": {
                        text: "1. There are two default columns: the row number column at index 1 (id: 'v-g-rownum') and the status column at index 2 (id: 'v-g-status')."
                    },
                    "STARTED-1511": {
                        text: "1) The v-g-rownum column shows the row number values from 1 to n. The rownumVisible attribute in the grid can be used to set visibility, and the rownumSize attribute can be used to set the size."
                    },
                    "STARTED-1512": {
                        code: 
`<!--rownumVisible is true by default. Set the width of the v-g-rownum column to 120px
<vanilla-grid id="gridId" rownumSize="120px">
...
</vanilla-grid>
-->
`,
                    },
                    "STARTED-1520": {
                        text: "2) The v-g-status column shows the status values of the row. The dataType is code, and only the preset codes can be used as values."
                                + " The values can be 'C', 'U', or 'D'. When a row is added using addRow(), a row with v-g-status value 'C' is automatically added."
                                + " When the value of a cell in the row is changed, the value of v-g-status automatically changes to 'U'. Even if the change is undone, the value of v-g-status does not revert."
                                + " The statusVisible attribute in the grid can be used to set visibility."
                    },
                    "STARTED-1521": {
                        code: 
`<!--Hide the v-g-status column
<vanilla-grid id="gridId" statusVisible="false">
...
</vanilla-grid>
-->
`,
                    },
                    "STARTED-1530": {
                        text: "2. There are about 30 attributes that can be set for a column. (Explained in detail in the API) The most important attribute is the dataType attribute."
                    },
                    "STARTED-1531": {
                        text: "There are 10 dataType attributes: ['text', 'mask', 'number', 'date', 'month', 'select', 'checkbox', 'button', 'link', 'code']. The default is text."
                    },
                    "STARTED-1532": {
                        text: "More detailed information about each attribute applied to the dataType is explained in the API."
                    },
                    "STARTED-1700": {
                        text: "Data Load"
                    },
                    "STARTED-1701": {
                        text: "The data uses JSON objects and comes in two forms."
                    },
                    "STARTED-1720": {
                        text: "1. Key-value form"
                    },
                    "STARTED-1721": {
                        text: "An array containing objects composed of key-value pairs."
                    },
                    "STARTED-1722": {
                        text: "[row{column(each colId and value)}, {column(each colId and value)}, ...]"
                    },
                    "STARTED-1723": {
                        text: "Load this data into the grid using gridId.load([{}, {}, ...])."
                    },
                    "STARTED-1724": {
                        code: 
`//Objects containing the key and value of each cell
//The following represents two rows of data in a grid with 5 columns.
const keyValues = [
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
]
//Load keyValues into the grid.
gridId.load(keyValues);
//Retrieve the grid data in keyValue format.
console.log(gridId.getValues());
`,
                    },
                    "STARTED-1740": {
                        text: "2. Cell data form",
                    },
                    "STARTED-1741": {
                        text: "An array of rows, where each row is an array of columns, and each column is an object containing cell information."
                    },
                    "STARTED-1742": {
                        text: "[row[column{Cell Data},{Cell Data}...],[column{Cell Data},{Cell Data}...]...]"
                    },
                    "STARTED-1743": {
                        text: "Load this data into the grid using gridId.load([[{},{}...],[{},{}...]...])."
                    },
                    "STARTED-1744": {
                        text: "This data format is more complex, but it has the advantage of managing grid data with JSON objects including information about each cell's attributes."
                    },
                    "STARTED-1745": {
                        code: 
`//Objects containing the information of each cell
//The following represents two rows of data in a grid with 5 columns.
const datas = [
    [
        {
            id: 'col1', value: 'val11', dataType: 'text', fontBold: true, //column info..
        },
        {
            id: 'col2', value: '202202', dataType: 'month', //column info..
        },
        {
            id: 'col3', value: 'ABC', dataType: 'mask', format:'AAA', //column info..
        },
        {
            id: 'col4', value: '1', dataType: 'number', //column info..
        },
        {
            id: 'col5', value: '20240101', dataType: 'date', //column info..
        },
    ],
    [
        {
            id: 'col1', value: 'val11', dataType: 'text', fontBold: true, //column info..
        },
        {
            id: 'col2', value: '202202', dataType: 'month', //column info..
        },
        {
            id: 'col3', value: 'abc', dataType: 'mask', format:'aaa', //column info..
        },
        {
            id: 'col4', value: '1', dataType: 'number', //column info..
        },
        {
            id: 'col5', value: '20240101', dataType: 'date', //column info..
        },
    ],
]
//Load datas into the grid.
gridId.load(datas);
//Retrieve the grid data in data format.
console.log(gridId.getDatas());
`,
                    },
                    "STARTED-1999": {
                        text: "Attributes"
                    },
                    "STARTED-2000": {
                        text: "Grid Attributes"
                    },
                    "STARTED-2001": {
                        text: "There are 25 attributes related to functionality and 56 attributes related to CSS."
                    },
                    "STARTED-2002": {
                        text: "Setting attributes is very simple. Just include them when declaring the grid."
                    },
                    "STARTED-2003": {
                        code: 
`<!--Only single cell selection is allowed, and the filter function is not used.
<vanilla-grid id="gridId" selectionPolicy="single" filterable="false">
-->
`,
                    },
                    "STARTED-2004": {
                        text: "The most important attribute is id."
                    },
                    "STARTED-2005": {
                        text: 'The grid id attribute must be unique within the document. The id attribute value creates a global object through which the grid’s methods can be called, and global events are generated through the grid’s id attribute.',
                    },
                    "STARTED-2006": {
                        text: 'For example, if the grid id attribute is set to "grid01", methods such as grid01.load(), grid01.getValues(), and grid01.clear() can be used within the document.',
                    },
                    "STARTED-2007": {
                        text: 'Additionally, events can be defined and used as grid01_onActiveCell() {//cell activation event logic}, grid01_onBeforeClickCell() {//event logic before cell click}.'
                    },
                    "STARTED-2008": {
                        code: 
`<script>
//If the grid id attribute is "grid01"
//The following event occurs when any cell in grid01 is selected and a key is pressed. If return false, the default event does not occur.
grid01_onKeydownGrid (e) {
    if(e.key === 'Y' || e.key === 'y') {        //If the key value is 'Y' or 'y'
        const row = grid01.getTargetRow();      //Get the row of the selected cell in grid01.
        const colId = grid01.getTargetCol();    //Get the colId of the selected cell in grid01.
        //If the dataType of the selected cell is checkbox
        if(grid01.getCellDataType(row, colId) === 'checkbox') {
            grid01.setCellValue(row, colId, 'Y');   //Change the cell value to 'Y' (if grid01's checkedValue is 'Y', it will be checked.)
        }
    }
    if(e.key === 'N' || e.key === 'n') {        //If the key value is 'N' or 'n'
        const row = grid01.getTargetRow();      //Get the row of the selected cell in grid01.
        const colId = grid01.getTargetCol();    //Get the colId of the selected cell in grid01.
        //If the dataType of the selected cell is checkbox
        if(grid01.getCellDataType(row, colId) === 'checkbox') {
            grid01.setCellValue(row, colId, 'N');   //Change the cell value to 'N' (if grid01's uncheckedValue is 'N', it will be unchecked.)
        }
    }
}
</script>
`,
                    },
                    "STARTED-2009": {
                        text: 'Here is a very simple example of setting grid attributes.'
                    },
                    "STARTED-2020": {
                        text: 'The above example shows how to make the grid look like Excel using grid attributes. The meanings of each attribute are as follows.'
                    },
                    "STARTED-2021": {
                        text: 'id="gridStarted05" : Sets the grid id to gridStarted05. Now, methods can be called and events defined using gridStarted05.'
                    },
                    "STARTED-2022": {
                        text: 'statusVisible="false" : Hides the v-g-status column of the grid.'
                    },
                    "STARTED-2023": {
                        text: 'alterRow="false" : Disables the alternating row color display function.'
                    },
                    "STARTED-2024": {
                        text: 'filterable="false" : Disables the filter function.'
                    },
                    "STARTED-2025": {
                        text: 'colorSet="green" : Sets the colorSet to green. (Only predefined keywords can be used for colorSet, explained in the API)'
                    },
                    "STARTED-2026": {
                        text: 'mouseoverCellBackColor="#efefef" : Sets the background color of the cell when the mouse is over it.'
                    },
                    "STARTED-2027": {
                        text: 'selectCellBackColor="#dfdfdf" : Sets the background color of the cell when it is selected.'
                    },
                    "STARTED-2028": {
                        text: 'selectRowBackColor="#efefef" : Sets the background color of all cells in the same row when a cell is selected.'
                    },
                    "STARTED-2029": {
                        text: 'mouseoverCellFontColor="#333" : Sets the font color of the cell when the mouse is over it.'
                    },
                    "STARTED-2030": {
                        text: 'selectCellFontColor="#333" : Sets the font color of the cell when it is selected.'
                    },
                    "STARTED-2031": {
                        text: 'rownumSize="40px" : Sets the width of the v-g-status column to 40px.'
                    },
                    "STARTED-2032": {
                        text: 'You can customize the grid with various attributes as shown above. For more detailed explanations, please refer to the API.'
                    },
                    "STARTED-3000": {
                        text: "Column Attributes"
                    },
                    "STARTED-3001": {
                        text: "There are a total of 37 column attributes."
                    },
                    "STARTED-3002": {
                        text: "The most important attribute is the dataType attribute mentioned earlier."
                    },
                    "STARTED-3003": {
                        text: "Column attributes are set by declaring them in v-col."
                    },
                    "STARTED-3004": {
                        code: 
`<!--Column of number type, width is 120px, displayed in the format '1,234.00 $', and cannot be edited.-->
<vanilla-grid id="gridId">
    <v-col id="sal" header="salary" dataType="number" width="120" format="#,###.00 $" locked="true"></v-col>
</vanilla-grid>
`,
                    },
                    "STARTED-3005": {
                        text: 'You can customize each column with various attributes. For more detailed explanations, please refer to the API.'
                    },
                    "STARTED-3006": {
                        text: '※ The priority of attributes is approximately individual cell > column > grid.'
                    },
                    "STARTED-4000": {
                        text: "Events"
                    },
                    "STARTED-4001": {
                        text: "There are about 30 events available."
                    },
                    "STARTED-4002": {
                        text: 'Events are declared and used as global functions in the form of "[gridId] + eventName".'
                    },
                    "STARTED-4003": {
                        text: 'Note that event functions are global functions and cannot be changed once declared for security reasons.'
                    },
                    "STARTED-4004": {
                        text: 'Therefore, you must declare event functions globally in the document before the vanilla grid is created().'
                    },
                    "STARTED-4005": {
                        text: 'Vanilla grid automatically creates() on window load, so declare the event functions globally in the script.'
                    },
                    "STARTED-4006": {
                        code: 
`<script>
    //When the grid id attribute is grid01
    grid01_onAfterChange (row, colId, oldValue, newValue) {console.log(row, colId, oldValue, newValue)}
</script>
`,
                    },
                    "STARTED-4007": {
                        text: 'However, if you control the creation and destruction of the Vanilla grid, you must declare event functions globally before vanillagrid.create().'
                    },
                    "STARTED-4008": {
                        code: 
`<script>
    vanillagrid_onBeforeCreate = function(e, vg) {
		return false;
	}
    
    if(true/*specific condition*/) {
        const vg = getVanillagrid();
        
        //When the grid id attribute is grid01
        window["grid01_onAfterChange"] = function (row, colId, oldValue, newValue) {console.log(row, colId, oldValue, newValue)};
        //Define events and then create
        vg.create();
    }
</script>
`,
                    },
                    "STARTED-4009": {
                        text: 'The following example sets an event to output the selected cell range to the input.'
                    },
                    "STARTED-4010": {
                        text: 'Start Row:'
                    },
                    "STARTED-4011": {
                        text: 'Start ColId:'
                    },
                    "STARTED-4012": {
                        text: 'End Row:'
                    },
                    "STARTED-4013": {
                        text: 'End ColId:'
                    },
                    "STARTED-4014": {
                        text: '▼ The event definition is as follows.'
                    },
                    "STARTED-4015": {
                        code: 
`<script>
    //Assuming the grid id attribute is "grid01"
    function grid01_onActiveCells (startRow, startColId, endRow, endColId) {
        document.getElementById('startRowSpan').textContent = startRow;
        document.getElementById('startColIdSpan').textContent = startColId;
        document.getElementById('endRowSpan').textContent = endRow;
        document.getElementById('endColIdSpan').textContent = endColId;
    }
</script>
`,
                    },
                    "STARTED-4030": {
                        text: 'You can use the grid more usefully by utilizing various events. Please see the API for detailed explanation.'
                    },
                    "STARTED-5000": {
                        text: "Methods"
                    },
                    "STARTED-5001": {
                        text: 'There are about 250 methods available.'
                    },
                    "STARTED-5002": {
                        text: 'The key methods are three: load(), setGridMount(), removeGridMethod()'
                    },
                    "STARTED-5003": {
                        text: '1. .load(Array)'
                    },
                    "STARTED-5004": {
                        text: 'As explained earlier (Getting Started - Data Load), the load() method loads data into the grid.'
                    },
                    "STARTED-5005": {
                        text: '2. .setGridMount(boolean)'
                    },
                    "STARTED-5006": {
                        text: 'The setGridMount() method determines whether to mount the grid. This is very important because if the logic that changes the grid is continuous due to methods, '
                            + 'there may be an impact from removing and redrawing the grid each time. This can adversely affect performance. '
                            + 'By processing setGridMount(false) before starting the grid changes and processing setGridMount(true) at the end, '
                            + 'the grid is not mounted to the screen each time it changes but only mounted at the end.'
                    },
                    "STARTED-5007": {
                        text: 'Add 50 rows (without using setGridMount())'
                    },
                    "STARTED-5008": {
                        text: 'Add 50 rows (using setGridMount())'
                    },
                    "STARTED-5009": {
                        text: 'clear'
                    },
                    "STARTED-5010": {
                        text: '※ Rows are added using the addRow(index) function. The addRow() method adds a row to the grid. Clicking the button above repeats this method 50 times. '
                            + 'The difference between the two logics is whether setGridMount() is called before the addRow() loop. Since addRow(index) can add rows in the middle, '
                            + 'it redraws the entire grid considering cell merges, etc. Therefore, it is better to call setGridMount(false) before and setGridMount(true) after the loop for better performance.'
                    },
                    "STARTED-5011": {
                        code: 
`//Assuming the grid id attribute is grid01

//Click the button to perform addRow() without using setGridMount()
addRowWithoutSetGridMount_onClick(e) {
    for(let i = 0; i < 50; i ++) {
        grid01.addRow();    //Add a row at the end of the grid
    }
},
//Click the button to perform addRow() using setGridMount()
addRowWithSetGridMount_onClick(e) {
    //Prevent grid mount
    grid01.setGridMount(false);
    for(let i = 0; i < 50; i ++) {
        grid01.addRow();    //Add a row at the end of the grid
    }
    //Mount the grid
    grid01.setGridMount(true);
},
`,
                    },
                    "STARTED-5012": {
                        text: '※ If setGridMount(false) is called, you must call setGridMount(true) at the end of the logic for the grid to function properly.'
                    },
                    "STARTED-5030": {
                        text: '3. .removeGridMethod()'
                    },
                    "STARTED-5031": {
                        text: 'As we have seen, Vanilla grid creates global variables that provide access to grid methods named after the grid\'s id attribute. These global variables can pose security risks. '
                            + 'Of course, it is always advisable to perform validation on the server side to ensure security. '
                            + 'To address these security issues, the removeGridMethod() method was created. The removeGridMethod() method deletes the global variable created with the grid\'s id. '
                            + 'To enhance security, you can call the removeGridMethod() method in specific logic (for example, detecting developer mode). '
                            + 'Once the removeGridMethod() method is called, the grid\'s methods can no longer be called.'
                    },
                    "STARTED-5032": {
                        text: 'You can make the grid more useful by utilizing various methods. For more detailed explanations, please refer to the API.'
                    }
                },
            },
            dive: {
                grid: {
                },
                gridNoSearch : {
                    [CONSTS.SAMPLE_KEYS_DIVE[1]] : {
                        "title": [
                            {
                                text: "Harry Potter and the Sorcerer's Stone"
                            },
                            {
                                text: "The Lord of the Rings"
                            },
                            {
                                text: "Sherlock Holmes"
                            },
                            {
                                text: "Moominland Midwinter"
                            },
                            {
                                text: "Little Women"
                            },
                            {
                                text: "Peter Pan"
                            },
                            {
                                text: "The Left Hand of Darkness"
                            },
                            {
                                text: "Anne of Green Gables"
                            },
                            {
                                text: "The Chronicles of Narnia"
                            },
                            {
                                text: "Winter's Bone"
                            },
                            {
                                text: "1984"
                            },
                            {
                                text: "To Kill a Mockingbird"
                            },
                            {
                                text: "Pride and Prejudice"
                            },
                            {
                                text: "The Great Gatsby"
                            },
                            {
                                text: "Brave New World"
                            },
                            {
                                text: "Catch-22"
                            },
                            {
                                text: "One Hundred Years of Solitude"
                            },
                            {
                                text: "The Catcher in the Rye"
                            },
                            {
                                text: "The Hobbit"
                            },
                            {
                                text: "Fahrenheit 451"
                            }
                        ]
                    },
                    [CONSTS.SAMPLE_KEYS_DIVE[2]] : {
                        "pn": [
                            {
                                text: "Bella"
                            },
                            {
                                text: "Max"
                            },
                            {
                                text: "Charlie"
                            },
                            {
                                text: "Daisy"
                            },
                            {
                                text: "Buddy"
                            },
                            {
                                text: "Lucy"
                            },
                            {
                                text: "Rocky"
                            },
                            {
                                text: "Molly"
                            },
                            {
                                text: "Toby"
                            },
                            {
                                text: "Sadie"
                            },
                            {
                                text: "Bailey"
                            },
                            {
                                text: "Lola"
                            },
                            {
                                text: "Jack"
                            },
                            {
                                text: "Sophie"
                            },
                            {
                                text: "Oscar"
                            },
                            {
                                text: "Ruby"
                            },
                            {
                                text: "Milo"
                            },
                            {
                                text: "Zoe"
                            },
                            {
                                text: "Duke"
                            },
                            {
                                text: "Lily"
                            }
                        ]
                    },
                    [CONSTS.SAMPLE_KEYS_DIVE[3]] : {
                        "tn": [
                            {
                                "text": "LG Twins"
                            },
                            {
                                "text": "Kt wiz"
                            },
                            {
                                "text": "SSG Landers"
                            },
                            {
                                "text": "NC Dinos"
                            },
                            {
                                "text": "Doosan Bears"
                            },
                            {
                                "text": "KIA Tigers"
                            },
                            {
                                "text": "Lotte Giants"
                            },
                            {
                                "text": "Samsung Lions"
                            },
                            {
                                "text": "Hanwha Eagles"
                            },
                            {
                                "text": "Kiwoom Heroes"
                            },
                        ],
                    },
                },
                text : {
                    "DIVE-0000": {
                        text: "Deep dive!"
                    },
                    "DIVE-0001": {
                        "text": "※ The above grid is a customized grid by adding dataType 'tree' and 'img' to the Vanillagrid object. In this deep dive, we will learn how to utilize the advanced techniques of vanilla grid."
                    },
                    "DIVE-0002": {
                        "text": "If the previous chapters up to Getting Started were for junior developers simply using the vanilla grid library, this Deep Dive will be helpful for senior developers responsible for the system's common usage."
                    },
                    "DIVE-0003": {
                        "text": "In this chapter, you can set the default values of the grid, modify the design aspects commonly, and add necessary dataTypes or footer functions."
                    },

                    "DIVE-1000": {
                        "text": "Create & Destroy"
                    },
                    "DIVE-1001": {
                        "text": "The creation and destruction of the vanilla grid are as follows."
                    },
                    "DIVE-1100": {
                        "text": "Global function getVanillagrid()"
                    },
                    "DIVE-1101": {
                        "text": "You can get the vanilla grid object through getVanillagrid(). Hereafter, it will be expressed as (vg)."
                    },
                    "DIVE-1102": {
                        "text": "You can create and destroy the vanilla grid defined on the screen through this vg."
                    },
                    "DIVE-1103": {
                        "text": "You can also redefine the values of the specified keys of vg to customize the grid."
                    },
                    "DIVE-1103": {
                        "text": "The method of redefining vg is covered in detail in the Vanilla grid object section below."
                    },
                    "DIVE-1200": {
                        "text": "vg.create()"
                    },
                    "DIVE-1201": {
                        "text": "This function creates the Vanilla grid on the screen. The logic for redefining vg must be performed before vg.create()."
                    },
                    "DIVE-1202": {
                        "text": "There are also two global functions related to the creation of the vanilla grid."
                    },
                    "DIVE-1300": {
                        "text": "Global function vanillagrid_onBeforeCreate(event, vanillagridObject)"
                    },
                    "DIVE-1301": {
                        "text": "vanillagrid_onBeforeCreate() is a global function called before vg.create(). It takes the window load event and the vanilla grid object as parameters. You can customize the vanilla grid object. You can redefine it in the script."
                    },
                    "DIVE-1350": {
                        "text": "Global function vanillagrid_onAfterCreate(event, vanillagridObject)"
                    },
                    "DIVE-1351": {
                        "text": "vanillagrid_onAfterCreate() is a global function called after vg.create(). It takes the window load event and the vanilla grid object as parameters. You can customize the vanilla grid object. You can redefine it in the script."
                    },
                    "DIVE-1400": {
                        "text": "The default creation process is as follows."
                    },
                    "DIVE-1401": {
                        code: 
`//The following source is already declared in the Vanillagrid.js file.
(() => {
    window.addEventListener('load', function (e) {
        const vg = getVanillagrid();    //Create vg
        //Call vanillagrid_onBeforeCreate(e, vg) before vg.create()
        //You can modify the vg object through vanillagrid_onBeforeCreate(e, vg).
        if (vanillagrid_onBeforeCreate(e, vg) === false) return;
        vg.create();    //Create vanilla grid.
        vanillagrid_onAfterCreate(e, vg);   //Called after creation. vg can be modified.
    });
})();
`,
                    },
                    "DIVE-1402": {
                        code: 
`<script>
//Therefore, you can redefine vanillagrid_onBeforeCreate(), vanillagrid_onAfterCreate() in the <script> section to customize vg.
function vanillagrid_onBeforeCreate(e, vg) {
    console.log(vg);
    //If you return false here, vg will not be created.
}
function vanillagrid_onAfterCreate(e, vg) {
    console.log(vg);
}
</script>
`
                    },
                    "DIVE-1450": {
                        "text": "vg.destroy()"
                    },
                    "DIVE-1451": {
                        "text": "This logic deletes the Vanilla grid on the screen and removes all related document events or elements. When using libraries such as Vue, you can call vg.destroy() on destroy and vg.create() again on mount."
                    },
                    "DIVE-1500": {
                        "text": "The create and destroy functions of Vanillagrid can be used in Vue as follows."
                    },
                    "DIVE-1501": {
                        "text": "1-1. Declare Vanilla Grid in the header."
                    },
                    "DIVE-1502": {
                        "code": 
`<script src="Vanillagrid.min.1.0.0.js"></script>
`
                    },
                    "DIVE-1513": {
                        text: "1-2. or use npm.",
                    },
                    "DIVE-1514": {
                        code: 
`npm i vanillagrid
`,
                    },
                    "DIVE-1503": {
                        "text": "2. At the end of the body,"
                    },
                    "DIVE-1504": {
                        "code": 
`<!--Prevent existing creation logic-->
<script> vanillagrid_onBeforeCreate = function(e, vn) {return false;} </script>
`
                    },
                    "DIVE-1505": {
                        "text": "add this."
                    },
                    "DIVE-1506": {
                        "text": "3. In the data of Vue,"
                    },
                    "DIVE-1507": {
                        "code": 
`//Declare the vanilla grid object variable
data () {
    return {
        vg : null;
    }
}
`
                    },
                    "DIVE-1508": {
                        "text": "4. In the mounted of Vue,"
                    },
                    "DIVE-1509": {
                        "code": 
`//Create the vanilla grid object
mounted: function() {
    this.vg = getVanillagrid();
    this.vg.create();
    this.loadGrid();
},
`
                    },
                    "DIVE-1510": {
                        "text": "5. In the beforeDestroy of Vue,"
                    },
                    "DIVE-1511": {
                        "code": 
`//Remove the vanilla grid object
beforeDestroy: function() {
    this.vg.destroy();
},
`
                    },
                    "DIVE-1512": {
                        "text": "6. This way, you can redraw the grid when the Vue component is destroyed and mounted."
                    },
                    "DIVE-2000": {
                        "text": "Vanilla grid object"
                    },
                    "DIVE-2001": {
                        "text": "This is the object obtained through getVanillagrid(). Hereafter, it will be expressed as vg. You can create and destroy it."
                    },
                    "DIVE-2002": {
                        "text": "vg provides developers with the ability to customize the grid through the values of several predefined keys."
                    },
                    "DIVE-2100": {
                        "text": "vg.sortAscSpan, vg.sortDescSpan"
                    },
                    "DIVE-2101": {
                        "text": "These are the span elements of the sorting icon that appear when you double-click the header."
                    },
                    "DIVE-2102": {
                        "text": "If you define these values in advance, they will appear as elements when double-clicked."
                    },
                    "DIVE-2103": {
                        "text": "The values must be HTMLElements (nodeType === 1)."
                    },
                    "DIVE-2104": {
                        "text": "The default is a span element with '▲', '▼' as textContent."
                    },
                    "DIVE-2105": {
                        code: 
`<script>
//e is the window load event, vg is the vanilla grid object.
function vanillagrid_onBeforeCreate (e, vg) {
    //Redefine sortAscSpan
    vg.sortAscSpan = document.createElement("i");   //Using fontawesome
    vg.sortAscSpan.setAttribute("class", "fas fa-sort-up");
    vg.sortAscSpan.style.marginLeft = "7px";
    //Redefine sortDescSpan
    vg.sortDescSpan = document.createElement("i");  //Using fontawesome
    vg.sortDescSpan.setAttribute("class", "fas fa-sort-down");
    vg.sortDescSpan.style.marginLeft = "7px";
}
</script>
`
                    },
                    "DIVE-2200": {
                        "text": "vg.filterSpan"
                    },
                    "DIVE-2201": {
                        "text": "This is the span element of the filter button icon displayed in the header."
                    },
                    "DIVE-2202": {
                        "text": "The value must be an HTMLElement (nodeType === 1)."
                    },
                    "DIVE-2203": {
                        "text": "The default is a span element with 'σ' as textContent."
                    },
                    "DIVE-2204": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //Redefine filterSpan
    vg.filterSpan = document.createElement("i");   //Using fontawesome
    vg.filterSpan.setAttribute("class", "fas fa-search");
}
</script>
`
                    },
                    "DIVE-2205": {
                        "text": "※ Except for the Getting started page, this logic has been added to all pages. Therefore, the filter span and sort span seen on this site are the results of applying fontawesome icons."
                    },
                    "DIVE-2300": {
                        "text": "vg.defaultGridInfo"
                    },
                    "DIVE-2301": {
                        "text": "Defines the default attributes for the grid."
                    },
                    "DIVE-2302": {
                        "text": "These are the default values for functional attributes in <vanilla-grid>."
                    },
                    "DIVE-2303": {
                        "text": 'For example, if the date format used by the system is "yyyy/mm/dd", you can set it to vg.defaultGridInfo.dateFormat="yyyy/mm/dd" without having to set dateFormat="yyyy/mm/dd" in every <vanilla-grid>.'
                    },
                    "DIVE-2304": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //Define the default value for dateFormat for all grids
    vg.defaultGridInfo.dateFormat = "yyyy/mm/dd";
    //Define the default value for monthFormat for all grids
    vg.defaultGridInfo.monthFormat = "yyyy/mm";
}
</script>
`
                    },
                    "DIVE-2305": {
                        "text": 'For example, if the common policy of the program is to use the grid only for viewing,'
                    },
                    "DIVE-2306": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //Define the default values for locked and lockedColor for all grids
    vg.defaultGridInfo.locked = true;   //Lock the grid
    vg.defaultGridInfo.lockedColor = false; //Do not display a different background color when the grid is locked
}
</script>
`
                    },
                    "DIVE-2307": {
                        "text": 'This way, the grid will always be locked without having to set the locked and lockedColor attributes each time the grid is declared.'
                    },
                    "DIVE-2308": {
                        "text": 'Detailed information about vg.defaultGridInfo is available in the API.'
                    },
                    "DIVE-2400": {
                        "text": "vg.defaultGridCssInfo"
                    },
                    "DIVE-2401": {
                        "text": "vg.defaultGridCssInfo is the same as vg.defaultGridInfo, but for css-related attributes instead of functional attributes."
                    },
                    "DIVE-2402": {
                        "text": "By using vg.defaultGridCssInfo, you can define the default css styles for the grid without having to declare attributes every time."
                    },
                    "DIVE-2403": {
                        "text": "For example, if you want to use a grid style similar to Excel as a common style, you can declare the code as follows."
                    },
                    "DIVE-2404": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //Define default styles
    this.vg.defaultGridCssInfo.colorSet="green"
    this.vg.defaultGridCssInfo.mouseoverCellBackColor="#efefef"
    this.vg.defaultGridCssInfo.selectCellBackColor="#dfdfdf"
    this.vg.defaultGridCssInfo.selectRowBackColor="#efefef"
    this.vg.defaultGridCssInfo.mouseoverCellFontColor="#333"
    this.vg.defaultGridCssInfo.selectCellFontColor="#333"
}
</script>
`
                    },
                    "DIVE-2405": {
                        "text": "※ This page defines the filter span, sort span, defaultGridInfo, and defaultGridCssInfo as described above. Without defining separate attributes, the grid on this page will be created as follows."
                    },
                    "DIVE-2406": {
                        "text": "▼ The default attributes of the grid applied to this page are as follows."
                    },
                    "DIVE-2407": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //Redefine the filter span
    vg.filterSpan = document.createElement("i");
    vg.filterSpan.setAttribute("class", "fas fa-search");

    //Redefine the sort span
    vg.sortAscSpan = document.createElement("i");
    vg.sortAscSpan.setAttribute("class", "fas fa-sort-up");
    vg.sortAscSpan.style.marginLeft = "7px";

    vg.sortDescSpan = document.createElement("i");
    vg.sortDescSpan.setAttribute("class", "fas fa-sort-down");
    vg.sortDescSpan.style.marginLeft = "7px";

    //Set vg.defaultGridInfo
    vg.defaultGridInfo.rownumSize = "40px";
    vg.defaultGridInfo.statusVisible = false;
    vg.defaultGridInfo.dateFormat = "yyyy/mm/dd";
    vg.defaultGridInfo.monthFormat = "yyyy/mm";
    vg.defaultGridInfo.alterRow = false;

    //Set vg.defaultGridCssInfo
    vg.defaultGridCssInfo.colorSet="green";
    vg.defaultGridCssInfo.mouseoverCellBackColor="#efefef";
    vg.defaultGridCssInfo.selectCellBackColor="#dfdfdf";
    vg.defaultGridCssInfo.selectRowBackColor="#efefef";
    vg.defaultGridCssInfo.mouseoverCellFontColor="#333";
    vg.defaultGridCssInfo.selectCellFontColor="#333";
}
</script>
`
                    },
                    "DIVE-2500": {
                        "text": "vg.defaultColInfo"
                    },
                    "DIVE-2501": {
                        "text": "Defines the default attributes for columns."
                    },
                    "DIVE-2502": {
                        "text": "By setting the default, a column with only the id attribute (required) set in the v-col tag will be created as a text type column."
                    },
                    "DIVE-2503": {
                        "text": "For example, if you set it as follows,"
                    },
                    "DIVE-2504": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.defaultColInfo.dataType = "number";
    vg.defaultColInfo.originWidth = "120px";
}
</script>
`
                    },
                    "DIVE-2505": {
                        "text": "If you create a column with only the id attribute (required) set in the v-col tag, it will be created as a number type column with a width of 120px."
                    },
                    "DIVE-2506": {
                        "text": "There is a method to add columns, addCol()."
                    },
                    "DIVE-2507": {
                        "text": "If you do not pass the column information properly as parameters when calling this method, a default set column will be created automatically. (id is required)"
                    },
                    "DIVE-2508": {
                        "text": "The columns created in this case will also be added as columns set by vg.defaultColInfo."
                    },
                    "DIVE-2600": {
                        "text": "etc"
                    },
                    "DIVE-2601": {
                        "text": "vg.lessoreq0x7ffByte, vg.lessoreq0xffffByte, vg.greater0xffffByte are values used for maxByte checking."
                    },
                    "DIVE-2602": {
                        "text": "vg.lessoreq0x7ffByte is for characters whose ASCII code is less than or equal to 0x7ff Byte."
                    },
                    "DIVE-2603": {
                        "text": "vg.lessoreq0xffffByte is for characters whose ASCII code is greater than 0x7ff Byte and less than or equal to 0xffff Byte."
                    },
                    "DIVE-2604": {
                        "text": "vg.greater0xffffByte is for characters whose ASCII code is greater than 0xffff Byte."
                    },
                    "DIVE-2605": {
                        "text": "This value determines how many bytes to allocate for the character. The default values are 2, 3, and 4 respectively (based on UTF-8)."
                    },
                    "DIVE-2606": {
                        "text": "If the encoding used in the program is different, you can change these values accordingly."
                    },
                    "DIVE-2607": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //UTF-16
    vg.lessoreq0x7ffByte = 2;
    vg.lessoreq0xffffByte = 2;
    vg.greater0xffffByte = 4;

    //UTF-32
    vg.lessoreq0x7ffByte = 4;
    vg.lessoreq0xffffByte = 4;
    vg.greater0xffffByte = 4;
}
</script>
`,
                    },
                    "DIVE-3000": {
                        text: "Footer function"
                    },
                    "DIVE-3001": {
                        "text": "When you need more functionality than the existing footer functions, you can predefine and use footer functions."
                    },
                    "DIVE-3002": {
                        "text": "vg.footerFormula is an object."
                    },
                    "DIVE-3003": {
                        "text": "The key is a string value, and the value is a function."
                    },
                    "DIVE-3004": {
                        "text": "The function receives the column values as parameters (getColValues()). The returned value is displayed in the footer."
                    },
                    "DIVE-3005": {
                        "text": "▼ Declare vg.footerFormula as shown below"
                    },
                    "DIVE-3006": {
                        "code": 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    this.vg.footerFormula = {
        "CHECK_COUNT" : function (colValues) {
            let count = 0;
            colValues.forEach((val) => {
                if(val === 'Y') count = count + 1;
            });
            return count;
        }
    }
}
</script>
`
                    },
                    "DIVE-3007": {
                        "text": "▼ You can use it in the footer attribute of v-col as shown below."
                    },
                    "DIVE-3008": {
                        "code": 
`<vanilla-grid id="gridId">
    <v-col id="test" dataType="checkbox" footer="CHECK_COUNT"></v-col>
</vanilla-grid>
`
                    },
                    "DIVE-3009": {
                        "text": "▼ The footer functions applied on this page are as follows."
                    },
                    "DIVE-3010": {
                        "code": 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.footerFormula = {
        "CHECK_COUNT" : function (colValues) {
            let count = 0;
            colValues.forEach((val) => {
                if(val === 'Y') count = count + 1;
            });
            return count;
        },
        "LAST_DATE" : function (colValues) {
            const maxDateNum = Math.max(...colValues.map(date => Number(date)));
            const maxDateStr = maxDateNum.toString();
            const formattedDate = maxDateStr.slice(0, 4) + '/' + maxDateStr.slice(4, 6) + '/' + maxDateStr.slice(6);
            return formattedDate;
        }
    }
}
</script>
`
                    },
                    "DIVE-3011": {
                        "text": 'As shown above, declare CHECK_COUNT and LAST_DATE in vg.footerFormula and then declare footer="CHECK_COUNT" footer="LAST_DATE" in the attributes of v-col to use the footer functions.'
                    },
                    "DIVE-4000": {
                        text: "Data type"
                    },
                    "DIVE-4001": {
                        "text": "You can add custom data types in addition to the default data types provided."
                    },
                    "DIVE-4002": {
                        "text": "In this page, we have added 'img', 'radio', and 'tree' as custom data types."
                    },
                    "DIVE-4003": {
                        "text": "Define them using vg.dataType.img = {...definition}, vg.dataType.radio = {...definition}, vg.dataType.tree = {...definition},"
                    },
                    "DIVE-4004": {
                        "text": 'and use them by setting the attribute dataType="img", dataType="radio", dataType="tree" in v-col.'
                    },
                    "DIVE-4005": {
                        "text": "If you set a value in dataType that is not one of the prepared data types such as 'text', 'number', 'mask', 'code', 'date', 'month', or the custom types defined in vg.dataType, an error will occur."
                    },
                    "DIVE-4050": {
                        "text": "▼ You can define vg.dataType for a new data type as follows."
                    },
                    "DIVE-4051": {
                        "code": 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.dataType = {
        "newDataType" : {
            //Specify the style of the cell. Insert camelCase cssKey and cssValue as key-value pairs in the format element.style.{key} = {value}.
            cellStyle: {
            },

            //Event method that occurs when the cell is selected. The target is the selected cell and data is the cell's getData() value.
            onSelected : function (target, data) {
            },

            //Event method that occurs when the cell is unselected. The target is the unselected cell and data is the cell's getData() value.
            onUnselected : function (target, data) {
            },

            //Event method that occurs when a key is pressed while the cell is selected.
            //You can get the key from the event. Data is the cell's getData() value.
            onSelectedAndKeyDown : function (event, data) {
            },

            //Event method that occurs when the cell is clicked. The event is the click event. Data is the cell's getData() value.
            onClick : function (event, data) {
            },

            //Event method that occurs when the mouse is down on the cell. The event is the mousedown event. Data is the cell's getData() value.
            onMousedown : function (event, data) {
            },

            //Method to determine what value to save when a value is saved in the cell.
            //The parameter value is the value received when loading the cell, and the return value is saved in the cell's data.
            getValue: function (value) {
            },

            //Method to determine what text to save in the cell (after applying the format). The text is used for filtering and sorting.
            //The parameter value is the value received when loading the cell, and the return value is saved in the cell's text.
            getText: function (value) {
            },

            //Method to determine which node to display when the cell is displayed. The parameter is the cell's getData() value.
            //The returned Html element is displayed in the grid. An Html element must be returned, and if null is returned, a span node is created.
            getChildNode: function (data) {
            },

            //Method to determine which node to create when the editor is created by double-clicking the cell. The parameters are cell, getData(), 
            //call_modify is a function that calls to modify the current editor's value, 
            //call_endEdit is a function that calls to delete the current editor node and end editing.
            //An Html element must be returned, and if null is returned, editing is terminated.
            getEditor: function (target, data, call_modify, call_endEdit) {
            },

            //Method to determine what format to insert the edited value into the cell after editing.
            //The parameters are cell, getData(), and the return value is inserted into the cell's value.
            getEditedValue: function (target, data) {
            },
            
            //Method to determine the values to be created as options for the filter. The return value creates the filter options.
            getFilterValue: function (value) {
            },

            //Method to determine the values to be sorted. The return value is used for sorting.
            getSortValue: function (value) {
            },

            //Method to specify the value to be copied. The value is the cell's value.
            getCopyValue: function (value) {
            },

            //Method to specify the value to be pasted. The data is the cell's getData() and the text is the text copied to the clipboard to be pasted.
            getPasteValue: function (data, text) {
            },
        }
    }
}
</script>
`
                    },
                    "DIVE-4100": {
                        "text": "The definition of vg.dataType for the 'img' data type is as follows."
                    },
                    "DIVE-4101": {
                        "code": 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.dataType = {
        "img" : {
            cellStyle: {
                justifyContent: "center",
                textAlign: "center",
                padding: 0,
            },
            onSelected : function (target, data) {
                if(target.firstChild.children[0]) target.firstChild.children[0].style.setProperty("opacity", "0.2");
            },
            onUnselected : function (target, data) {
                if(target.firstChild.children[0]) target.firstChild.children[0].style.removeProperty("opacity");
            },
            getValue: function (value) {
                if(!value) return null;
                return value;
            },
            getText: function (value) {
                if(!value) return null;
                return value.alt;
            },
            getChildNode: function (data) {
                const childNode = document.createElement("span");
                if(!data) return childNode;
                if(!data.value) return childNode;
                childNode.style.display = "flex";
                childNode.style.alignItems = "center";
                childNode.style.position = "relative";
                childNode.style.overflow = "hidden";
                childNode.style.width = "100%";
                const img = document.createElement("img");
                const alt = document.createElement("span");
                img.style.width = "100%"
                // img.style.height = "100px"
                img.style.zIndex = "1";
                img.src = data.value.src;
                img.alt = data.text;
                alt.style.position = "absolute";
                alt.style.fontSize = "12px";
                alt.style.color = "black";
                alt.style.textAlign = "left";
                alt.style.display = "inline-block";
                alt.style.width = "100%";
                alt.style.whiteSpace = "normal";
                alt.style.wordBreak = "break-all";
                alt.innerText = data.text;
                
                img.gridId = data.gridId;
                img.cellRow = data.row;
                img.cellCol = data.col;

                childNode.append(img);
                childNode.append(alt);
                childNode.addEventListener('click', function (e) {
                    window[e.target.gridId].setTargetCell(e.target.cellRow, e.target.cellCol);
                })
                childNode.addEventListener('dblclick', function (e) {
                    window[e.target.gridId].editCell(e.target.cellRow, e.target.cellCol);
                })
                return childNode;
            },
            getEditor: function (target, data, call_modify, call_endEdit) {
                if(!data.value) return null;

                const editor = document.createElement("input");
                editor.setAttribute("type","text");
                editor.style.width = target.offsetWidth + 'px';
                editor.style.height = target.scrollHeight + editor.offsetHeight - editor.clientHeight + 'px';
                editor.style.position = "absolute";
                editor.style.zIndex = "200";
                editor.value = data.text;

                editor.addEventListener('keydown', function (e) {
                    switch (e.key) {
                        case 'Enter':
                            call_modify();
                            e.stopPropagation();
                            e.preventDefault();
                            break;
                        case 'Escape':
                            call_endEdit();
                            e.stopPropagation();
                            e.preventDefault();
                            break;
                        case 'Tab':
                            call_modify();
                            e.stopPropagation();
                            e.preventDefault();
                            break;
                        case 'F2':
                            call_modify();
                            e.stopPropagation();
                            e.preventDefault();
                            break;
                        default:
                            break;
                    }
                });
                return editor;
            },
            getEditedValue: function (target, data) {
                if(!data.value) return null;
                const newValue = data.value;
                newValue.alt = target.value;
                return newValue;
            },
            getFilterValue: function (value) {
                if(!value) return null;
                return "title : " + value.alt;
            },
            getSortValue: function (value) {
                if(!value) return null;
                return value.alt;
            },
            getCopyValue: function (value) {
                if(!value) return null;
                return value.alt;
            },
            getPasteValue: function (data, text) {
                if(!data.value) return null;
                const value = data.value;
                value.alt = text;
                return value;
            },
        },
        //radio : ...
    };
}
</script>
`
                    },
                    "DIVE-4200": {
                        "text": "The definition of vg.dataType for the 'radio' data type is as follows."
                    },
                    "DIVE-4201": {
                        "code": 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.dataType = {
        radio : {
            cellStyle: {
                justifyContent: "center",
                textAlign: "center",
            },
            onSelectedAndKeyDown : function (event, data) {
                if(event.key === 'Enter' || event.key === ' ') {
                    window[data.gridId].setColSameValue(data.col, "N", true);
                    window[data.gridId].setCellValue(data.row, data.col, data.value === "Y" ? "N" : "Y", true);
                    return false;
                }
            },
            onClick : function (event, data) {
                if(event.target.tagName !== 'INPUT') return;
                let value = event.target.checked;
                window[event.target.gridId].setColSameValue(event.target.cellCol, "N", true);
                window[event.target.gridId].setCellValue(event.target.cellRow, event.target.cellCol, value ? "Y" : "N", true);
            },
            getValue: function (value) {
                return value;
            },
            getText: function (value) {
                const text = value === "Y" ? "true" : "false";
                return text;
            },
            getChildNode: function (data) {
                const childNode = document.createElement("input");
                childNode.setAttribute("type", "radio");
                childNode.setAttribute("name", data.name);
                childNode.setAttribute("value", "" + data.row);
                childNode.gridId = data.gridId;
                childNode.cellRow = data.row;
                childNode.cellCol = data.col;
                childNode.checked = data.value === "Y";
                return childNode;
            },
            getFilterValue: function (value) {
                const filterValue = value === "Y" ? "●" : "○";
                return filterValue;
            },
        }
        //tree : ...
    };
}
</script>
`
                    },
                    "DIVE-4300": {
                        "text": "The definition of vg.dataType for the 'tree' data type is as follows. (The example grid for the tree data type is the grid in the Deep dive! section at the top.)"
                    },
                    "DIVE-4301": {
                        "code": 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.dataType = {
        tree : {
            cellStyle: {
                justifyContent: "left",
                textAlign: "left",
            },
            getValue: function (value) {
                if(value.constructor === Object) {
                    return value;
                } else {
                    return {title: value, toggle: false};
                }
            },
            getText: function (value) {
                if(!value) return null
                return value.title
            },
            getChildNode: function (data) {
                if(!data.value) return document.createElement('span');

                const treeSpan = document.createElement('div');
                treeSpan.style.width = '100%'

                const treeText = document.createElement('span');
                treeText.innerText = data.text;
                treeText.style.display = 'inline-block';
                treeText.style.marginLeft = '10px';
                treeText.style.maxWidth = '90%'
                treeText.style.overflow = 'hidden'
                treeText.style.textOverflow = 'ellipsis'
                treeText.addEventListener('click', (e) => {
                    onClick(e, data);
                })

                const treeToggle = document.createElement('span');
                treeToggle.classList.add('far');
                if(data.value.toggle) {
                    treeToggle.classList.add('fa-minus-square');
                    treeToggle.classList.remove('fa-plus-square');
                }
                else {
                    treeToggle.classList.add('fa-plus-square');
                    treeToggle.classList.remove('fa-minus-square');
                }
                treeToggle.style.fontSize = '0.85em';
                treeToggle.addEventListener('click', (e) => {
                    onClick(e, data);
                })

                const grid = window[data.gridId];

                if(data.col + 1 <= grid.getColCount() && grid.getCellDataType(data.row, data.col + 1) !== 'tree') {
                    if(data.value.toggle) {
                        grid.setCellDataType(data.row, data.col + 1, grid.getColDataType(data.col + 1));
                        grid.setCellFontColor(data.row, data.col + 1, "#333");
                    }
                    else {
                        grid.setCellDataType(data.row, data.col + 1, "text");
                        grid.setCellFontColor(data.row, data.col + 1, "#fff");
                    }
                }

                for(let col = data.col; col > 3; col--) {
                    if(grid.getCellDataType(data.row, col) === 'tree') {
                        const preCellValue = grid.getCellValue(data.row, col - 1);
                        if(preCellValue && !preCellValue.toggle) {
                            treeText.innerText = '..';
                        }
                        break;
                    }
                }

                if (data.row === 1) {
                    treeSpan.append(treeToggle);
                    treeSpan.append(treeText);
                } else if (data.row > 1 && grid.getCellText(data.row - 1, data.col) !== data.text) {
                    treeSpan.append(treeToggle);
                    treeSpan.append(treeText);
                }
                
                function onClick(e, data) {
                    const grid = window[data.gridId];
                    const toggle = !data.value.toggle;

                    function openTree (nowRow, col) {
                        let startRow;
                        const title = grid.getCellText(nowRow, col);
                        if(nowRow === 1) {
                            startRow = nowRow;
                        }
                        else {
                            for(let row = nowRow; row > 1; row--) {
                                if(grid.getCellText(row, col) === title) {
                                    startRow = row;
                                    break;
                                }
                            }
                        }
                        const newValue = {title : title, toggle : true};

                        for(let row = startRow; row <= grid.getRowCount(); row++) {
                            if(title !== grid.getCellText(row, col)) break;
                            grid.setCellValue(row, col, newValue);
                            if(row !== startRow) {
                                if(grid.getCellDataType(row, col + 1) === 'tree') {
                                    if(row === 1 || grid.getCellText(row, col + 1) !== grid.getCellText(row - 1, col + 1)) {
                                        grid.setRowVisible(row, true);
                                    }
                                }
                                else {
                                    grid.setRowVisible(row, true);
                                }
                            }
                            else {
                                //Logic to simply reload the cell
                                for(let c = col + 1; c <= grid.getColCount(); c++) {
                                    if (grid.getCellDataType(row, c) === 'tree') {
                                        grid.setCellValue(row, c, grid.getCellValue(row, c));
                                        break;
                                    }
                                }
                            }
                        }
                    }

                    function closeTree (nowRow, col) {
                        let startRow = nowRow;
                        const title = grid.getCellText(nowRow, col);
                        if(!title) return;
                        
                        for(let row = startRow; row <= grid.getRowCount(); row++) {
                            if(title !== grid.getCellText(row, col)) break;
                            if(row !== startRow) {
                                grid.setRowVisible(row, false);
                            }
                            for(let c = col; c <= grid.getColCount(); c++) {
                                if(grid.getCellDataType(row, c) === 'tree') {
                                    const newValue = grid.getCellValue(row, c);
                                    if(newValue) {
                                        newValue.toggle = false;
                                        grid.setCellValue(row, c, newValue);
                                    }
                                }
                            }
                        }
                    }

                    if(toggle) {
                        for(let col = data.col; col > 2; col--) {
                            openTree(data.row, col);
                        }
                    }
                    else {
                        closeTree(data.row, data.col);
                    }
                }
            
                return treeSpan;
            },
        }
    };
}
</script>
`
                    }
                },
            },
            api: {
                grid: {
                    [CONSTS.SAMPLE_KEYS_API[0]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.GRID_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.name,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.GRID_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkEng,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[1]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.COLUMN_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.name,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.COLUMN_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkEng,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[2]] : {
                        "event": (function() {
                            const attributes = [];
                            CONSTS.EVENTS.forEach((attr) => {
                                const obj = {
                                    text : attr.name,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.EVENTS.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkEng,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[3]] : {
                        "method": (function() {
                            const attributes = [];
                            CONSTS.METHODS.forEach((attr) => {
                                const obj = {
                                    text : attr.name,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.METHODS.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkEng,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[4]] : {
                        "function": (function() {
                            const attributes = [];
                            CONSTS.VGO_FUNCTION.forEach((attr) => {
                                const obj = {
                                    text : attr.function,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.VGO_FUNCTION.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkEng,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[5]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.VGO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.attribute,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.VGO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkEng,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[6]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.VGO_GRID_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.attribute,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.VGO_GRID_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkEng,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[7]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.VGO_GRID_CSSINFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.attribute,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.VGO_GRID_CSSINFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkEng,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[8]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.VGO_COLUMN_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.attribute,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.VGO_COLUMN_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkEng,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                },
                gridNoSearch: {
                    [CONSTS.SAMPLE_KEYS_API[0]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.GRID_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.GRID_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[1]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.COLUMN_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.COLUMN_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[2]] : {
                        "parameter": (function() {
                            const type = [];
                            CONSTS.EVENTS.forEach((attr) => {
                                const obj = {
                                    text : attr.param,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[3]] : {
                        "related": (function() {
                            const type = [];
                            CONSTS.METHODS.forEach((attr) => {
                                const obj = {
                                    text : attr.related,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "parameter": (function() {
                            const type = [];
                            CONSTS.METHODS.forEach((attr) => {
                                const obj = {
                                    text : attr.param,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "return": (function() {
                            const type = [];
                            CONSTS.METHODS.forEach((attr) => {
                                const obj = {
                                    text : attr.return,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[4]] : {
                        "parameter": (function() {
                            const type = [];
                            CONSTS.VGO_FUNCTION.forEach((attr) => {
                                const obj = {
                                    text : attr.param,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "return": (function() {
                            const type = [];
                            CONSTS.VGO_FUNCTION.forEach((attr) => {
                                const obj = {
                                    text : attr.return,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[5]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.VGO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.VGO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[6]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.VGO_GRID_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.VGO_GRID_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[7]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.VGO_GRID_CSSINFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.VGO_GRID_CSSINFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[8]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.VGO_COLUMN_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.VGO_COLUMN_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                },
                text : {
                    "API-0000": {
                        text: "Grid attributes"
                    },
                    "API-1000": {
                        text: "Column attributes"
                    },
                    "API-2000": {
                        text: "Events"
                    },
                    "API-3000": {
                        text: "Methods"
                    },
                    "API-4000": {
                        text: "Vanilla grid object"
                    },
                    "API-4200": {
                        text: "global & vanilla grid object function"
                    },
                    "API-4400": {
                        text: "vanilla grid object attributes"
                    },
                    "API-4600": {
                        text: "default grid info attributes"
                    },
                    "API-4800": {
                        text: "default grid css info attributes"
                    },
                    "API-5000": {
                        text: "default column info attributes"
                    },
                },
            },
        };

        this.KOR = {
            common: {
                "COMMON-0000" : {
                    text: "▼ 예시 코드는 아래와 같습니다."
                },
                "COMMON-0001" : {
                    text: "▼ 위 grid에 삽입한 데이터는 아래와 같습니다."
                },
                "COMMON-0003" : {
                    text: "추가"
                },
                "COMMON-0004" : {
                    text: "저장"
                },
                "COMMON-0005" : {
                    text: "삭제"
                },
                "COMMON-0006" : {
                    text: "죄송합니다. 검색결과가 존재하지 않습니다."
                },
                "COMMON-0007" : {
                    text: "정확한 단어를 입력해야만 검색이 가능합니다.(띄어쓰기 포함)"
                },
                "COMMON-0008" : {
                    text: "테스트해 보세요!"
                },
                "COMMON-0009" : {
                    text: "예시는 아래와 같습니다."
                },
            },
            intro: {
                grid: {
                    [CONSTS.SAMPLE_KEYS_INTRO[1]] : {
                        "col1" : setLinkData(CONSTS.GRID_ATTRIBUTES, "https://vanilla-grid.github.io/", {view:"api",lang:"KOR",gridId:CONSTS.SAMPLE_GRID_IDS_API[0],row:"index",colId:"attribute"}),
                        "col2" : setLinkData(CONSTS.COLUMN_ATTRIBUTES, "https://vanilla-grid.github.io/", {view:"api",lang:"KOR",gridId:CONSTS.SAMPLE_GRID_IDS_API[1],row:"index",colId:"attribute"}),
                        "col3" : setLinkData(CONSTS.EVENTS, "https://vanilla-grid.github.io/", {view:"api",lang:"KOR",gridId:CONSTS.SAMPLE_GRID_IDS_API[2],row:"index",colId:"event"}),
                        "col4" : setLinkData(CONSTS.METHODS, "https://vanilla-grid.github.io/", {view:"api",lang:"KOR",gridId:CONSTS.SAMPLE_GRID_IDS_API[3],row:"index",colId:"method"}),
                    },
                },
                text : {
                    "INTRO-0000": {
                        text: "Vanilla JS만을 활용한 simple grid.",
                    },
                    "INTRO-0001": {
                        text: "※ filter와 sorting icon은 font awesome을 적용하였습니다. 기본 형태는 적용되지 않으며, 별도의 로직이 필요함. (Deep dive에 설명)",
                    },
                    "INTRO-0100": {
                        text: "데이터는 JSON 객체를 활용합니다.",
                    },
                    "INTRO-0101": {
                        text: "두 가지 의 형태가 있습니다.",
                    },
                    "INTRO-0102": {
                        text: "1. 키-값 형태 : gridId.getValues()",
                    },
                    "INTRO-0103": {
                        text: "배열안에 키-값 객체 [{}, {}...]",
                    },
                    "INTRO-0104": {
                        code: 
`//각 cell의 키와 값만을 담은 객체
//아래는 5열의 grid에 2줄의 데이터를 표현합니다.
const keyValues = [
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
    //...
]`,
                    },
                    "INTRO-0105": {
                        text: "2. 셀 데이터 형태 : window[gridId].getDatas()",
                    },
                    "INTRO-0106": {
                        text: "row 배열안에 column 배열, cell 데이터 정보 객체 [[{},{}...],[{},{}...]...]",
                    },
                    "INTRO-0107": {
                        code: 
`//각 cell의 정보를 담은 객체
//아래는 5열의 grid에 2줄의 데이터를 표현합니다.
const datas = [
    [
        {
            id: 'col1', value: 'val11', dataType: 'text', fontBold: true, //column info..
        },
        {
            id: 'col2', value: '202202', dataType: 'month', //column info..
        },
        {
            id: 'col3', value: 'ABC', dataType: 'mask', format:'AAA', //column info..
        },
        {
            id: 'col4', value: '1', dataType: 'number', //column info..
        },
        {
            id: 'col5', value: '20240101', dataType: 'date', //column info..
        },
    ],
    [
        {
            id: 'col1', value: 'val11', dataType: 'text', fontBold: true, //column info..
        },
        {
            id: 'col2', value: '202202', dataType: 'month', //column info..
        },
        {
            id: 'col3', value: 'abc', dataType: 'mask', format:'aaa', //column info..
        },
        {
            id: 'col4', value: '1', dataType: 'number', //column info..
        },
        {
            id: 'col5', value: '20240101', dataType: 'date', //column info..
        },
    ],
    //...
]`,
                    },
                    "INTRO-0108": {
                        text: "JSON 객체를 활용하여 직관적으로 편리하게 데이터를 관리 할 수 있습니다.",
                    },


                    "INTRO-0200": {
                        text: "속성 값, 이벤트, 메소드를 통해 grid를 customizing 할 수 있습니다.",
                    },
                    "INTRO-0201": {
                        text: "Vanilla Grid에는 각 30개 정도의 grid와 column 속성, 30개 정도의 customizing가능한 이벤트, 240개 이상의 메소드가 있습니다.",
                    },
                    "INTRO-0300": {
                        text: "타 라이브러리와 폭 넓은 적용이 가능합니다.",
                    },
                    "INTRO-0301": {
                        text: "vanilla JS만 활용. styles sheet를 화면에 바로 적용. create와 destroy함수를 제공. 사용하는 객체를 클로져로 불러옵니다.",
                    },
                    "INTRO-0302": {
                        text: "현재 페이지는 vue 2 와 bootstrap 3 를 활용하여 구현했습니다. 해당 방식을 예로 들어보겠습니다.",
                    },
                    "INTRO-0303": {
                        text: "1-1. header에 Vanilla Grid를 선언합니다.",
                    },
                    "INTRO-0304": {
                        code: 
`<script src="Vanillagrid.min.1.0.0.js"></script>
`,
                    },
                    "INTRO-0315": {
                        text: "1-2. 또는 npm을 사용합니다.."
                    },
                    "INTRO-0316": {
                        code: 
`npm i vanillagrid
`,
                    },
                    "INTRO-0305": {
                        text: "2. body의 마지막에",
                    },
                    "INTRO-0306": {
                        code: 
`<!--기존 생성 로직 방지-->
<script> vanillagrid_onBeforeCreate = function(e, vn) {return false;} </script>
`,
                    },
                    "INTRO-0307": {
                        text: "를 추가합니다.",
                    },
                    "INTRO-0308": {
                        text: "3. vue의 data에서",
                    },
                    "INTRO-0309": {
                        code: 
`//vanilla grid 객체 변수 선언
data () {
    return {
        vg : null;
    }
}
`,
                    },
                    "INTRO-0310": {
                        text: "4. vue의 mouted에서",
                    },
                    "INTRO-0311": {
                        code: 
`//vanilla grid 객체 생성
mounted: function() {
    this.vg = getVanillagrid();
    this.vg.create();
    this.loadGrid();
},
`,
                    },
                    "INTRO-0312": {
                        text: "5. vue의 beforeDestroy에서",
                    },
                    "INTRO-0313": {
                        code: 
`//vanilla grid 객체 제거
beforeDestroy: function() {
    this.vg.destroy();
},
`,
                    },
                    "INTRO-0314": {
                        text: "6. 이렇게 하면 vue의 해당 컴포넌트가 destroy, mount될때 grid를 새로 그릴 수 있습니다.",
                    },
                    "INTRO-0400": {
                        text: "제작 목적",
                    },
                    "INTRO-0401": {
                        text: "Vanillanote는 1인 개발입니다. javascript학습용으로 개발하였습니다. 따라서 사용 시 100%신뢰를 보장할 수 없으며, 제한되는 기능이 다소 있습니다. 하지만 훌륭한 퍼포먼스는 보일 것이라 생각합니다. "
                            + "Vanillanote는 개인 프로젝트를 진행 할 때 마다 grid를 새로 개발하는 소요를 줄이고자 개발을 시작했습니다. "
                            + "Jquery, Vue, React등 어떤 환경에서도 라이브러리 또는 프레임워크 없이 사용할 수 있는 grid개발을 목적으로 하였습니다. "
                            + "때문에 본 프로그램은 Vanilla JS만을 사용하였습니다. Vanillagrid의 장단점은 다음과 같습니다.",
                    },
                    "INTRO-0410": {
                        text: "장점",
                    },
                    "INTRO-0411": {
                        text: "Vanilla JS와 ES5문법만을 사용하여 적용할 수 있는 환경이 넓다.",
                    },
                    "INTRO-0412": {
                        text: "JSON data를 get, set하여 데이터 관리가 직관적이다.",
                    },
                    "INTRO-0413": {
                        text: "미리 정의된 속성, 이벤트, 메소드를 활용하여 훌륭한 퍼모먼스를 보일 수 있다.",
                    },
                    "INTRO-0414": {
                        text: "객체의 생애주기를 독립성있게 관리할 수 있고, 관리 로직을 통해 더 섬세하게 커스터마이징 할 수 있다.",
                    },
                    "INTRO-0415": {
                        text: "css나 javascript 기존 source에 최대한 영향을 받거나 주지 않도록 구현함.",
                    },
                    "INTRO-0416": {
                        text: "innerHTML과 eval을 사용하지 않음.",
                    },
                    "INTRO-0417": {
                        text: "js 단일 파일로 매우 가볍다.",
                    },
                    "INTRO-0430": {
                        text: "단점",
                    },
                    "INTRO-0431": {
                        text: "성능상 편집을 위한 grid는 100행 내외, 조회를 위한 grid는 1000행 내외의 데이터를 load하는 것이 좋습니다.",
                    },
                    "INTRO-0432": {
                        text: "화면에서 각 grid의 cell에 접근이 가능합니다. cell의 실제 value값은 숨겨져있으나 보안상 완전하지 않습니다.",
                    },
                    "INTRO-0433": {
                        text: "cell에 focus를 둔 상태에서 사용자의 키보드 입력 시 해당 키가 바로 입력되는 기능을 지원하지 않습니다.(한글 입력의 제한으로 구현하지 못했습니다..)",
                    },
                    "INTRO-0434": {
                        text: "filter는 하나의 column당 한가지 값만 선택 가능합니다.",
                    },
                    "INTRO-0435": {
                        text: "개발자 모드에서 전역변수로 선언된 함수 호출 변수를 접근 할 수 있습니다. 라이브러리를 통한 개발에 용이하기 위해 제공한 로직이지만 보안에 취약할 수 있습니다. "
                            + "함수 호출 변수(window[gridId])는 window[gridId].removeGridMethod()로 자신을 제거할 수 있습니다. F12키를 감지하여 해당 로직을 호출하는 등 보안 로직을 적용 하십시오."
                    },
                    "INTRO-0500": {
                        text: "브라우저 호환성",
                    },
                    "INTRO-0501": {
                        text: "※ Vanillagrid.js는 ES6 문법을 주로 사용했습니다. 더 낮은 호환을 원하시면 babel을 사용하세요!",
                    },
                    "INTRO-0600": {
                        text: "라이센스",
                    },
                    "INTRO-0700": {
                        text: "문의하기",
                    },
                },
            },
            started: {
                grid: {
                    [CONSTS.SAMPLE_KEYS_STARTED[3]] : {
                        "rmk" : [
                            {
                                text : 'dataType="text".\n글자 입력 타입.\n문자열 형식의 값을 가진다.\n수정 시 textarea 입력창 생성.\n화면 상에 span태그로 표현.',
                            },
                            {
                                text : 'dataType="mask".\nformat에 맞는 글자 입력 타입.\n문자열 형식의 값을 가진다.\n수정 시 input text 입력창 생성.\n화면 상에 span태그로 표현.\n\n'
                                        + 'format은 "A"는 알파벳 대문자, "a"는 소문자,\n"9"는 숫자를 의미하며, 그외 문자는 동일한 문자를 의미한다.\n'
                                        + '예를들어 format="AAA-99"는 대문자 세글자 + "-" + 숫자 두글자를 입력 가능.',
                            },
                            {
                                text : 'dataType="number".\n 숫자 입력 타입.\n 숫자 형식의 값을 가진다.\n수정 시 input number 입력창 생성.\n 화면 상에 span태그로 표현.\n\n'
                                        + 'number type의 format은 정수부와 소수부, 문자부로 나뉜다.\n'
                                        + '정수부\n#,### : 9,999. 0은 표기안함.\n #,##0 : 위와 동일. 0 표기함.\n # : 9999. 0은 표기 안함.\n 0 : 위와 동일. 0 표기함.\n'
                                        + '소수부\n0 : 없어도 0으로 표기\n # : 있는 경우만 표기'
                                        + '문자부\n끝자리에 "%" : 백분율로 수를 계산해서 00%로 표기.\n그외 문자 : 문자 그대로 표기\n\n'
                                        + '예를들어\nformat="#,###.00 ￦" 값이 123123123.1 이면, "123,123,123.10 ￦"으로 출력됨.\n'
                                        + 'format="0 %" 값이 0.12 이면, "12 %"으로 출력됨.\n',
                            },
                            {
                                text : 'dataType="date".\n날짜 입력 타입.\n날짜(yyyymmdd)로 구성된 문자열 형식의 값을 가진다.\n수정 시 input date 입력창 생성.\n화면 상에 span태그로 표현.',
                            },
                            {
                                text : 'dataType="month".\n년월 입력 타입.\n년월(yyyymm)으로 구성된 형식의 값을 가진다.\n수정 시 input month 입력창 생성.\n화면 상에 span태그로 표현.',
                            },
                            {
                                text : 'dataType="select".\nselect 타입.\n객체 형식의 값을 가진다.\n[\n{value:"val1", text:"text1"},\n{value:"val2", text:"text2", selected:true},\n{value:"val3", text:"text3"}\n]\n'
                                        + '선택 값(selected:true)가 없으면 첫번째 option을 선택함.\n화면 상에 input select로 표현되며 수정 가능하다.',
                            },
                            {
                                text : 'dataType="checkbox".\ncheckbox 타입.\n설정된 checkedValue, uncheckedValue의 문자열 형식의 값을 가진다.\n(default: Y, N)\n화면 상에 input checkbox로 표현되며 수정 가능하다.',
                            },
                            {
                                text : 'dataType="button".\nbutton 타입.\n버튼에 표기되는 문자열 형식의 값을 가진다.\n수정 불가.\n화면 상에 button태그로 표현.',
                            },
                            {
                                text : 'dataType="link".\na태그 타입.\n객체 형식의 값을 가진다.\n{value: "https://vanilla-grid.github.io/", text: "이동", target: "_blank"}\n'
                                        + 'a태그 생성 후 value는 herf, text는 innerText target은 target 속성의 값이 된다.\n수정 불가.\n화면 상에 a태그로 표현.',
                            },
                            {
                                text : 'dataType="code".\ncodes 속성으로 정한 문자열 입력 타입. codes에 없는 문자열은 삽입 불가.\ncodes 속성은 ";"을 구분자로 하는 문자열로 설정한다.\ndefault는 defaultCode 속성의 값이 들어감.\n 문자열 형식의 값을 가진다.\n수정 시 input 입력창 생성.\n화면 상에 span태그로 표현.',
                            },
                        ]
                    },
                },
                gridNoSearch : {
                    [CONSTS.SAMPLE_KEYS_STARTED[0]] : {
                        "col1" : [
                            {
                                text : "해당 column은 text dataType입니다.\nDouble-click을 하면 수정할 수 있습니다.\nF2키를 누르면 수정할 수 있습니다.\n엔터키를 누르면 editor에 들어가며 내용을 select합니다.\n시도해 보세요!",
                            },
                        ]
                    },
                    [CONSTS.SAMPLE_KEYS_STARTED[1]] : {
                        "f_nm" : [
                            {text : "영자"},
                            {text : "철수"},
                            {text : "미영"},
                            {text : "영수"},
                            {text : "영식"},
                            {text : "철수"},
                            {text : "영자"},
                            {text : "영수"},
                            {text : "재훈"},
                            {text : "광수"},
                            {text : "영호"},
                            {text : "상철"},
                            {text : "광수"},
                            {text : "태훈"},
                            {text : "태오"},
                            {text : "민경"},
                            {text : "지혜"},
                            {text : "지연"},
                            {text : "혜민"},
                            {text : "현숙"},
                        ],
                        "l_nm" : [
                            {text : "이"},
                            {text : "손"},
                            {text : "이"},
                            {text : "박"},
                            {text : "이"},
                            {text : "김"},
                            {text : "김"},
                            {text : "손"},
                            {text : "김"},
                            {text : "최"},
                            {text : "이"},
                            {text : "노"},
                            {text : "김"},
                            {text : "박"},
                            {text : "박"},
                            {text : "윤"},
                            {text : "김"},
                            {text : "김"},
                            {text : "최"},
                            {text : "이"},
                        ],
                    },
                },
                text : {
                    "STARTED-0000": {
                        text: "시작하기"
                    },
                    "STARTED-0001": {
                        text: "Vanilla Grid를 시작하는 방법은 매우 간단합니다.",
                    },
                    "STARTED-0002": {
                        text: "1-1. header에 Vanilla Grid를 선언합니다.",
                    },
                    "STARTED-0003": {
                        code: 
`<script src="Vanillagrid.min.1.0.0.js"></script>
`,
                    },
                    "STARTED-0006": {
                        text: "1-2. 또는 npm을 사용합니다."
                    },
                    "STARTED-0007": {
                        code: 
`npm i vanillagrid
`,
                    },
                    "STARTED-0004": {
                        text: "2. body에 grid를 정해진 양식에 맞게 생성합니다.",
                    },
                    "STARTED-0005": {
                        code: 
`<!--
grid와 column의 id속성은 필수 값 입니다.
<vanilla-grid id="gridId" ...grid attributes >
    <v-col id="columnId01" ...column attributes ></v-col>
    ... columns
</vanilla-grid>
-->
`,
                    },
                    "STARTED-1000": {
                        text: "간단한 사용"
                    },
                    "STARTED-1100": {
                        text: "Header"
                    },
                    "STARTED-1101": {
                        text: "grid의 header는 항상 한 줄을 표현합니다. column(v-col)에 header 속성을 넣어 설정합니다. header 속성이 없으면 id 속성 값이 header가 됩니다."
                    },
                    "STARTED-1110": {
                        text: "1. header는 ';'를 구분자로 행 수를 설정합니다."
                    },
                    "STARTED-1111": {
                        code: 
`<!--3행의 header-->
<v-col id="columnId01" header="row1;row2;row3"></v-col>
`,
                    },
                    "STARTED-1120": {
                        text: "2. header는 ';'를 구분자로 빈 값(row merge는 아래로 빈 값/ col merge는 오른쪽 빈 값)이 있다면 자동 merge합니다. 우선순위는 row merge > col merge 입니다."
                    },
                    "STARTED-1121": {
                        code: 
`<!--1행 1열 ~ 3행 1열 header는 row merge함-->
<v-col id="columnId01" header="row1;;"></v-col>
<v-col id="columnId02" header="row1;row2;row3"></v-col>
<!--1행 1열 ~ 1행 2열, 2행 1열 ~ 2행 2열 header는 col merge함-->
<v-col id="columnId01" header="row1;row2;row3"></v-col>
<v-col id="columnId02" header=";;row2"></v-col>
`,
                    },
                    "STARTED-1130": {
                        text: "3. header는 이스케이프 시퀀스를 갖을 수 있습니다.(footer도)"
                    },
                    "STARTED-1131": {
                        code: 
`<!--이스케이프와 시퀀스를 사이로 줄바꿈-->
<v-col id="columnId01" header="이스케이프\\n시퀀스"></v-col>
`,
                    },
                    "STARTED-1140": {
                        text: "4. header는 필터와 정렬 기능, 전체 체크 기능이 있습니다."
                    },
                    "STARTED-1141": {
                        text: "1) 필터는 사용자가 마지막 행 헤더 왼쪽의 시그마(σ) 클릭하여 사용할 수 있습니다. 시그마(σ)는 filter element를 쉽게 커스터마이징 하여 개발자가 원하는 모양으로 변경할 수 있습니다. (Deep dive에 설명)"
                    },
                    "STARTED-1142": {
                        text: "2) 정렬은 사용자가 마지막 행 헤더를 더블 클릭하면 발생합니다. data type이 text, number에 따라 정렬 결과가 다릅니다. 정렬 아이콘도 sort element를 쉽게 커스터마이징 하여 변경할 수 있습니다. (Deep dive에 설명)"
                    },
                    "STARTED-1143": {
                        text: "3) data type이 체크박스인 경우 마지막 행 헤더를 더블 클릭하면 정렬되지 않고 체크박스가 일괄 checked, unchecked상태로 변경 됩니다."
                    },
                    "STARTED-1300": {
                        text: "Footer"
                    },
                    "STARTED-1301": {
                        text: "1. footer는 최댓값, 최솟값, 합계, 평균 기능이 있습니다."
                    },
                    "STARTED-1302": {
                        text: "사용은 '$$'을 앞에 표기하여 MAX, MIN, SUM, AVG의 키워드를 씁니다. ';'를 구분자로 행을 추가할 수 있습니다. 예) $$MAX;$$MIN;$$SUM;$$AVG"
                    },
                    "STARTED-1303": {
                        code: 
`<!--최댓값, 최솟값, 합계, 평균-->
<v-col id="columnId01" dataType="number", footer="$$MAX;$$MIN;$$SUM;$$AVG"></v-col>
`,
                    },
                    "STARTED-1304": {
                        text: "계산되는 값은 grid에 보여지고있는 행만을 대상으로 계산합니다. 예를들어 1행을 제외하고 나머지가 filter 처리 되었다면 1행의 값만을 가지고 footer값을 산출합니다."
                    },
                    "STARTED-1305": {
                        text: "null은 계산 대상에서 제외됩니다. 평균은 소수점 6의 자리까지 도출 후 반올림합니다."
                    },
                    "STARTED-1306": {
                        text: "2. 그외의 문자는 모두 단순히 문자열로 표현합니다. 예) MAX :;MIN :;SUM :;AVG :"
                    },
                    "STARTED-1307": {
                        code: 
`<!--단순 문자열로 표현됨-->
<v-col id="columnId01" dataType="number", footer="MAX :;MIN :;SUM :;AVG :"></v-col>
`,
                    },
                    "STARTED-1308": {
                        text: "3. Vanilla grid 객체의 footerFormula를 사용하면 footer에 적용될 함수를 직접 등록하여 사용할 수 있습니다. (Deep dive에 설명)"
                    },
                    "STARTED-1500": {
                        text: "Column"
                    },
                    "STARTED-1501": {
                        text: "column은 v-col 태그로 설정하며, id 속성이 필수값입니다."
                    },
                    "STARTED-1510": {
                        text: "1. 기본 column은 2개가있습니다. 인덱스 1번의 행번호 (id: 'v-g-rownum') column과 인덱스 2번의 상태 (id: 'v-g-status') column입니다."
                    },
                    "STARTED-1511": {
                        text: "1) v-g-rownum column은 행번호 값을 나타냅니다. 1부터 n까지. grid 속성에서 rownumVisible로 visible설정, rownumSize로 크기설정 등이 가능합니다."
                    },
                    "STARTED-1512": {
                        code: 
`<!--rownumVisible은 default true이다. v-g-rownum column의 width를 120px로 설정
<vanilla-grid id="gridId" rownumSize="120px">
...
</vanilla-grid>
-->
`,
                    },
                    "STARTED-1520": {
                        text: "2) v-g-status column은 행의 상태 값을 나타냅니다. dataType은 code로 기존 설정된 code만 값을 가질 수 있습니다."
                            + " 값은 'C', 'U', 'D'가 있습니다. addRow()행 추가시 자동으로 v-g-status의 값이 'C'인 행이 추가됩니다."
                            + " 행의 셀 값을 변경 시 자동으로 v-g-status의 값이 'U'로 변경되며, 실행 취소 등 다시 원복해도 v-g-status의 값은 변경되지 않습니다."
                            + " grid 속성에서 statusVisible로 visible설정 등이 가능합니다."
                    },
                    "STARTED-1521": {
                        code: 
`<!--v-g-status column을 숨김
<vanilla-grid id="gridId" statusVisible="false">
...
</vanilla-grid>
-->
`,
                    },
                    "STARTED-1530": {
                        text: "2. column에서 정할 수 있는 속성값은 30여가지 정도입니다. (API에 자세히 설명) 가장 중요한 속성은 dataType 속성 입니다."
                    },
                    "STARTED-1531": {
                        text: "dataType속성은 10개가 있습니다. ['text', 'mask', 'number', 'date', 'month', 'select', 'checkbox', 'button', 'link', 'code']. default는 text입니다."
                    },
                    "STARTED-1532": {
                        text: "dataType에 적용되는 각 속성들에 대한 정보는 api에서 더 자세히 설명되어 있습니다."
                    },
                    "STARTED-1700": {
                        text: "데이터 Load"
                    },
                    "STARTED-1701": {
                        text: "데이터 JSON객체를 활용하며 두가지 형태가 있습니다."
                    },
                    "STARTED-1720": {
                        text: "1. 키-값 형태"
                    },
                    "STARTED-1721": {
                        text: "배열안에 키-값으로 구성된 객체를 요소로하는 형태 입니다."
                    },
                    "STARTED-1722": {
                        text: "[행{열(각 colId와 value)}, {열(각 colId와 value)}, ...]"
                    },
                    "STARTED-1723": {
                        text: "본 데이터를 gridId.load([{}, {}, ...]) 하여 grid에 불러올 수 있습니다."
                    },
                    "STARTED-1724": {
                        code: 
`//각 cell의 키와 값만을 담은 객체
//아래는 5열의 grid에 2줄의 데이터를 표현합니다.
const keyValues = [
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
    {
        col1 : 'val1', col2 : '202202', col3 : 'ABC', col4 : 1, col5 : '20240101', //column key-value..
    },
]
//grid에 keyValues를 불러오기.
gridId.load(keyValues);
//메소드를 통해 grid의 데이터를 keyValue형태로 가져오기.
console.log(gridId.getValues());
`,
                    },
                    "STARTED-1740": {
                        text: "2. 셀 데이터 형태",
                    },
                    "STARTED-1741": {
                        text: "행을 의미하는 배열안에 열을 의미하는 배열, 열 배열 안에 cell의 정보를 담는 객체로 구성되어 있습니다."
                    },
                    "STARTED-1742": {
                        text: "[행[열{Cell Data},{Cell Data}...],[열{Cell Data},{Cell Data}...]...]"
                    },
                    "STARTED-1743": {
                        text: "본 데이터를 gridId.load([[{},{}...],[{},{}...]...]) 하여 grid에 불러올 수 있습니다."
                    },
                    "STARTED-1744": {
                        text: "데이터 형태는 좀더 복잡하지만 각 셀에 대한 속성등의 정보도 포함한 상태로 JSON 객체를 통해 grid의 데이터를 관리할 수 있는 장점이 있습니다."
                    },
                    "STARTED-1745": {
                        code: 
`//각 cell의 정보를 담은 객체
//아래는 5열의 grid에 2줄의 데이터를 표현합니다.
const datas = [
    [
        {
            id: 'col1', value: 'val11', dataType: 'text', fontBold: true, //column info..
        },
        {
            id: 'col2', value: '202202', dataType: 'month', //column info..
        },
        {
            id: 'col3', value: 'ABC', dataType: 'mask', format:'AAA', //column info..
        },
        {
            id: 'col4', value: '1', dataType: 'number', //column info..
        },
        {
            id: 'col5', value: '20240101', dataType: 'date', //column info..
        },
    ],
    [
        {
            id: 'col1', value: 'val11', dataType: 'text', fontBold: true, //column info..
        },
        {
            id: 'col2', value: '202202', dataType: 'month', //column info..
        },
        {
            id: 'col3', value: 'abc', dataType: 'mask', format:'aaa', //column info..
        },
        {
            id: 'col4', value: '1', dataType: 'number', //column info..
        },
        {
            id: 'col5', value: '20240101', dataType: 'date', //column info..
        },
    ],
]
//grid에 datas를 불러오기.
gridId.load(datas);
//메소드를 통해 grid의 데이터를 data형태로 가져오기.
console.log(gridId.getDatas());
`,
                    },
                    "STARTED-1999": {
                        text: "속성"
                    },
                    "STARTED-2000": {
                        text: "Grid 속성"
                    },
                    "STARTED-2001": {
                        text: "grid 속성은 기능에 관련된 속성 25개, css에 관련된 속성 56개가 있습니다."
                    },
                    "STARTED-2002": {
                        text: "설정하는 방법은 매우 간단합니다. grid 선언 시 속성으로 넣으면 됩니다."
                    },
                    "STARTED-2003": {
                        code: 
`<!--선택 기능을 단일 cell 선택만 가능하게하고, filter기능을 사용하지 않음.
<vanilla-grid id="gridId" selectionPolicy="single" filterable="false">
-->
`,
                    },
                    "STARTED-2004": {
                        text: "가장 중요한 속성은 id입니다."
                    },
                    "STARTED-2005": {
                        text: 'grid의 id 속성은 document내에서 중복될 수 없습니다. 또 id 속성의 값을 통해 grid가 가진 메소드를 호출할 수 있는 전역 객체를 생성하며 grid의 id 속성을 통해 전역 이벤트를 생성합니다.',
                    },
                    "STARTED-2006": {
                        text: '예를들어 grid의 id 속성을 "grid01"로 설정했다면, document내에서 grid01.load(), grid01.getValues(), grid01.clear()등 처럼 메소드를 사용할 수 있습니다.',
                    },
                    "STARTED-2007": {
                        text: '그리고 grid01_onActiveCell() {//셀 활성화 이벤트 로직}, grid01_onBeforeClickCell() {//셀 클릭 전 발생 이벤트 로직} 처럼 이벤트를 정의하여 사용할 수 있습니다.'
                    },
                    "STARTED-2008": {
                        code: 
`<script>
//grid의 id 속성이 "grid01"인 경우
//grid01에 임의의 cell을 선택하고 키보드를 누르면 발생하는 이벤트 return false시 기존 이벤트 발생(X)
grid01_onKeydownGrid (e) {
    if(e.key === 'Y' || e.key === 'y') {        //키의 값이 'Y'나 'y'인 경우
        const row = grid01.getTargetRow();      //grid01의 선택된 cell의 row를 가져온다.
        const colId = grid01.getTargetCol();    //grid01의 선택된 cell의 colId를 가져온다.
        //선택된 cell의 dataType이 checkbox인 경우
        if(grid01.getCellDataType(row, colId) === 'checkbox') {
            grid01.setCellValue(row, colId, 'Y');   //cell의 value를 'Y'로 변경함(grid01의 checkedValue가 'Y'인경우 checked됨.)
        }
    }
    if(e.key === 'N' || e.key === 'n') {        //키의 값이 'Y'나 'y'인 경우
        const row = grid01.getTargetRow();      //grid01의 선택된 cell의 row를 가져온다.
        const colId = grid01.getTargetCol();    //grid01의 선택된 cell의 colId를 가져온다.
        //선택된 cell의 dataType이 checkbox인 경우
        if(grid01.getCellDataType(row, colId) === 'checkbox') {
            grid01.setCellValue(row, colId, 'N');   //cell의 value를 'N'로 변경함(grid01의 uncheckedValue가 'N'인경우 unchecked됨.)
        }
    }
}
</script>
`,
                    },
                    "STARTED-2009": {
                        text: 'grid 속성을 설정한 아주 간단한 예시를 들어보겠습니다.'
                    },
                    "STARTED-2020": {
                        text: '위는 grid 속성을 이용해 grid의 모습을 excel처럼 만들어 본 것입니다. 각 속성의 의미는 다음과 같습니다.'
                    },
                    "STARTED-2021": {
                        text: 'id="gridStarted05" : grid의 id를 gridStarted05로 합니다. 이제 gridStarted05로 메소드를 호출하고 이벤트를 정의할 수 있습니다.'
                    },
                    "STARTED-2022": {
                        text: 'statusVisible="false" : grid의 v-g-status column을 unvisible처리 합니다.'
                    },
                    "STARTED-2023": {
                        text: 'alterRow="false" : 짝수 행의 색상 표시 기능을 사용하지 않습니다.(번갈아 가며 색상 구분)'
                    },
                    "STARTED-2024": {
                        text: 'filterable="false" : 필터기능을 사용하지 않습니다.'
                    },
                    "STARTED-2025": {
                        text: 'colorSet="green" : colorSet을 green으로 설정 합니다.(colorSet은 이미 정의된 키워드만을 삽입 할 수 있습니다. api에 설명됨)'
                    },
                    "STARTED-2026": {
                        text: 'mouseoverCellBackColor="#efefef" : cell에 mouse가 over될 때의 cell 배경색을 지정합니다.'
                    },
                    "STARTED-2027": {
                        text: 'selectCellBackColor="#dfdfdf" : cell을 선택할 때의 cell 배경색을 지정합니다.'
                    },
                    "STARTED-2028": {
                        text: 'selectRowBackColor="#efefef" : cell을 선택할 때의 해당 cell과 동일한 행에 있는 cell들의 배경색을 지정합니다.'
                    },
                    "STARTED-2029": {
                        text: 'mouseoverCellFontColor="#333" : cell에 mouse가 over될 때의 cell 글자색을 지정합니다.'
                    },
                    "STARTED-2030": {
                        text: 'selectCellFontColor="#333" : cell을 선택할 때의 cell 글자색을 지정합니다.'
                    },
                    "STARTED-2031": {
                        text: 'rownumSize="40px" : grid의 v-g-status column의 width를 40px로 설정합니다.'
                    },
                    "STARTED-2032": {
                        text: '위와같이 다양한 속성을 통해 grid를 커스터마이징 할 수 있습니다. 자세한 설명은 API를 통해 보시기 바립니다.'
                    },
                    "STARTED-3000": {
                        text: "Column 속성"
                    },
                    "STARTED-3001": {
                        text: "column 속성은 총 37가지 입니다."
                    },
                    "STARTED-3002": {
                        text: "가장 중요한 속성은 앞서 기술한 dataType 속성입니다."
                    },
                    "STARTED-3003": {
                        text: "column 속성은 v-col에 선언하여 설정합니다."
                    },
                    "STARTED-3004": {
                        code: 
`<!--number type의 column, width는 120px이며 format은 '1,234.00 $' 형태로 표기되고 수정할 수 없다.-->
<vanilla-grid id="gridId">
    <v-col id="sal" header="salary" dataType="number" width="120" format="#,###.00 $" locked="true"></v-col>
</vanilla-grid>
`,
                    },
                    "STARTED-3005": {
                        text: '다양한 속성을 통해 각 column을 커스터마이징 할 수 있습니다. 자세한 설명은 API를 통해 보시기 바립니다.'
                    },
                    "STARTED-3006": {
                        text: '※ 속성에 대한 우선순위는 대략 개별 cell > column > grid 순입니다.'
                    },
                    "STARTED-4000": {
                        text: "이벤트"
                    },
                    "STARTED-4001": {
                        text: "사용할 수 있는 30개 정도의 이벤트가 있습니다."
                    },
                    "STARTED-4002": {
                        text: '이벤트는 "[gridId] + 이벤트명"의 형태로 전역 함수로 선언하여 사용합니다.'
                    },
                    "STARTED-4003": {
                        text: '주의할 점은 이벤트 함수는 전역함수 이므로 보안상의 이유로 한번 선언한 이벤트 함수를 변경할 수 없도록 하였습니다.'
                    },
                    "STARTED-4004": {
                        text: '때문에 반드시 vanilla grid가 create()되기 전에 이벤트 함수를 document 전역에 선언해야 합니다.'
                    },
                    "STARTED-4005": {
                        text: 'vanilla grid는 window load시 자동으로 create()를 하므로 script에 전역으로 이벤트 함수를 선언 하면 됩니다.'
                    },
                    "STARTED-4006": {
                        code: 
`<script>
    //grid의 id 속성이 grid01일 때
    grid01_onAfterChange (row, colId, oldValue, newValue) {console.log(row, colId, oldValue, newValue)}
</script>
`,
                    },
                    "STARTED-4007": {
                        text: '하지만 만약 Vanilla grid의 생성과 소멸을 제어한다면, 반드시 vanillagrid.create() 전에 이벤트 함수를 전역으로 선언해야합니다.'
                    },
                    "STARTED-4008": {
                        code: 
`<script>
    vanillagrid_onBeforeCreate = function(e, vg) {
		return false;
	}
    
    if(true/*특정조건*/) {
        const vg = getVanillagrid();
        
        //grid의 id 속성이 grid01일 때
        window["grid01_onAfterChange"] = function (row, colId, oldValue, newValue) {console.log(row, colId, oldValue, newValue)};
        //이벤트 정의 후 create
        vg.create();
    }
</script>
`,
                    },
                    "STARTED-4009": {
                        text: '위 grid의 셀을 선택하면 해당 범위가 input에 출력되도록 이벤트를 설정하였습니다.'
                    },
                    "STARTED-4010": {
                        text: 'Start Row :'
                    },
                    "STARTED-4011": {
                        text: 'Start ColId :'
                    },
                    "STARTED-4012": {
                        text: 'End Row :'
                    },
                    "STARTED-4013": {
                        text: 'End ColId :'
                    },
                    "STARTED-4014": {
                        text: '▼ 이벤트 정의는 아래와 같습니다.'
                    },
                    "STARTED-4015": {
                        code: 
`<script>
    //grid의 id 속성이 "grid01"라 가정
    function grid01_onActiveCells (startRow, startColId, endRow, endColId) {
        document.getElementById('startRowSpan').textContent = startRow;
        document.getElementById('startColIdSpan').textContent = startColId;
        document.getElementById('endRowSpan').textContent = endRow;
        document.getElementById('endColIdSpan').textContent = endColId;
    }
</script>
`,
                    },
                    "STARTED-4030": {
                        text: '다양한 이벤트를 활용해 grid를 더 유용하게 사용 할 수 있습니다. 자세한 설명은 API를 통해 보시기 바립니다.'
                    },
                    "STARTED-5000": {
                        text: "메소드"
                    },
                    "STARTED-5001": {
                        text: '사용할 수 있는 250개 정도의 메소드가 있습니다.'
                    },
                    "STARTED-5002": {
                        text: '핵심 메소드는 세가지 입니다. load(), setGridMount(), removeGridMethod()'
                    },
                    "STARTED-5003": {
                        text: '1. .load(Array)'
                    },
                    "STARTED-5004": {
                        text: 'load()는 앞서 설명드린 바와 같이(Getting Started - Data Load) 데이터를 grid에 load하는 기능입니다.'
                    },
                    "STARTED-5005": {
                        text: '2. .setGridMount(boolean)'
                    },
                    "STARTED-5006": {
                        text: 'setGridMount()는 grid를 mount할지 결정하는 기능입니다. 이는 매우 중요한데, 메소드 등에 의한 grid 변경 시 변경되는 로직이 연속적이면 '
                            + 'grid를 매번 지웠다 다시 그리는 영향이 있을 수 있습니다. 이는 성능에 악영향을 끼칩니다. grid 변경 시작 전 setGridMount(false); 처리하고 '
                            + 'grid를 모두 변경 후 마지막에 setGridMount(true); 처리하면 매번 grid 변경에 대해 화면에 mount하지 않고 마지막에 mount합니다.'
                    },
                    "STARTED-5007": {
                        text: '50개 행추가(setGridMount() 미사용)'
                    },
                    "STARTED-5008": {
                        text: '50개 행추가(setGridMount() 사용)'
                    },
                    "STARTED-5009": {
                        text: 'clear'
                    },
                    "STARTED-5010": {
                        text: '※ 행 추가는 addRow(index)의 기능을 사용합니다. addRow() 메소드는 행 하나를 grid에 추가하는 메소드입니다. 위 버튼 클릭 시 해당 메소드를 50번 반복합니다. '
                            + '두 로직의 차이는 setGridMount()를 addRow() 반복문 전에 호출했는지에 대한 차이 입니다. addRow(index)는 행을 중간에도 추가할 수 있기 때문에 '
                            + 'cell간의 merge등을 고려하여 전체 행을 다시 그리는 메소드 입니다. 때문에 setGridMount(false)와 setGridMount(true)를 반복문 앞 뒤로 호출하는 것이 '
                            + '더 좋은 성능을 보입니다.'
                    },
                    "STARTED-5011": {
                        code: 
`//grid의 id 속성은 grid01이라 가정

//setGridMount()를 사용하지 않고 addRow() 수행 버튼 클릭
addRowWithoutSetGridMount_onClick(e) {
    for(let i = 0; i < 50; i ++) {
        grid01.addRow();    //grid 마지막 행에 행 추가
    }
},
//setGridMount()를 사용하면서 addRow() 수행 버튼 클릭
addRowWithSetGridMount_onClick(e) {
    //grid mount를 막는다.
    grid01.setGridMount(false);
    for(let i = 0; i < 50; i ++) {
        grid01.addRow();    //grid 마지막 행에 행 추가
    }
    //grid mount를 한다.
    grid01.setGridMount(true);
},
`,
                    },
                    "STARTED-5012": {
                        text: '※ setGridMount(false)를 호출했으면 로직이 종료하는 마지막에 반드시 setGridMount(true)를 호출해야 grid가 정상 동작합니다.'
                    },
                    "STARTED-5030": {
                        text: '3. .removeGridMethod()'
                    },
                    "STARTED-5031": {
                        text: '지금껏 봐왔듯 Vanilla grid는 grid의 id 속성을 이름으로 하는 grid 메소드들에 접근할 수 있는 전역변수를 생성합니다. 이는 또한 전역변수 이기 때문에 보안에 취약할 수 있습니다. '
                            + '물론 모든 로직이 그러하겠지만 서버에서 유효성 검증을 다시 하는 것이 바람직 합니다. '
                            + '이러한 보안 이슈를 위해 removeGridMethod()를 만들었습니다. removeGridMethod() 메소드는 grid의 id로 생성된 전역변수를 삭제합니다.'
                            + '보안성을 높이기 위해서 특정 로직에(예를들어 개발자모드 감지) removeGridMethod() 메소드를 호출할 수 있습니다.'
                            + 'removeGridMethod() 메소드를 호출하면 이후 해당 grid의 메소드를 호출할 수 없습니다.'
                    },
                    "STARTED-5032": {
                        text: '다양한 메소드를 활용해 grid를 더 유용하게 사용 할 수 있습니다. 자세한 설명은 API를 통해 보시기 바립니다.'
                    },
                },
            },
            dive: {
                grid: {
                },
                gridNoSearch : {
                    [CONSTS.SAMPLE_KEYS_DIVE[1]] : {
                        "title": [
                            {
                                text: "해리 포터와 마법사의 돌"
                            },
                            {
                                text: "반지의 제왕"
                            },
                            {
                                text: "셜록 홈즈"
                            },
                            {
                                text: "무민 골짜기의 겨울"
                            },
                            {
                                text: "작은 아씨들"
                            },
                            {
                                text: "피터 팬"
                            },
                            {
                                text: "어둠의 왼손"
                            },
                            {
                                text: "앤 셜리"
                            },
                            {
                                text: "나니아 연대기"
                            },
                            {
                                text: "윈터스 본"
                            },
                            {
                                text: "1984"
                            },
                            {
                                text: "앵무새 죽이기"
                            },
                            {
                                text: "오만과 편견"
                            },
                            {
                                text: "위대한 개츠비"
                            },
                            {
                                text: "멋진 신세계"
                            },
                            {
                                text: "캐치-22"
                            },
                            {
                                text: "백년의 고독"
                            },
                            {
                                text: "호밀밭의 파수꾼"
                            },
                            {
                                text: "호빗"
                            },
                            {
                                text: "화씨 451도"
                            }
                        ]
                    },
                    [CONSTS.SAMPLE_KEYS_DIVE[2]] : {
                        "pn": [
                            {
                                text: "똘이"
                            },
                            {
                                text: "뚝이"
                            },
                            {
                                text: "바둑이"
                            },
                            {
                                text: "밤톨이"
                            },
                            {
                                text: "초롱이"
                            },
                            {
                                text: "두부"
                            },
                            {
                                text: "도리"
                            },
                            {
                                text: "쥬쥬"
                            },
                            {
                                text: "방울이"
                            },
                            {
                                text: "해피"
                            },
                            {
                                text: "쫑이"
                            },
                            {
                                text: "나비"
                            },
                            {
                                text: "루루"
                            },
                            {
                                text: "복실이"
                            },
                            {
                                text: "모모"
                            },
                            {
                                text: "까꿍이"
                            },
                            {
                                text: "순이"
                            },
                            {
                                text: "요롱이"
                            },
                            {
                                text: "구름이"
                            },
                            {
                                text: "별이"
                            }
                        ]
                    },
                    [CONSTS.SAMPLE_KEYS_DIVE[3]] : {
                        "tn": [
                            {
                                "text": "LG 트윈스"
                            },
                            {
                                "text": "Kt 위즈"
                            },
                            {
                                "text": "SSG 랜더스"
                            },
                            {
                                "text": "NC 다이노스"
                            },
                            {
                                "text": "두산 베어스"
                            },
                            {
                                "text": "KIA 타이거즈"
                            },
                            {
                                "text": "롯데 자이언츠"
                            },
                            {
                                "text": "삼성 라이온즈"
                            },
                            {
                                "text": "한화 이글스"
                            },
                            {
                                "text": "키움 히어로즈"
                            },
                        ],
                    },
                },
                text : {
                    "DIVE-0000": {
                        text: "Deep dive!"
                    },
                    "DIVE-0001": {
                        text: "※ 위 grid는 'tree'와 'img'라는 dataType을 Vanillagrid 객체에 추가하여 커스터마이징한 grid입니다. deep dive에서는 vanilla grid의 심층기술들을 어떻게 활용하는지에 대해 알아봅니다."
                    },
                    "DIVE-0002": {
                        text: "앞선 Getting started 까지는 단순히 vanilla grid 라이브러리를 사용하는 주니어 개발자를 위한 챕터였다면 Deep dive는 시스템의 공용을 책임지는 시니어급의 개발자들에게 도움이 될것입니다."
                    },
                    "DIVE-0003": {
                        text: "이번 챕터를 통해 grid의 기본값을 정하고, 디자인 측면을 공통으로 수정하며, 필요한 dataType이나 footer 함수를 추가할 수 있습니다."
                    },

                    "DIVE-1000": {
                        text: "생성과 소멸"
                    },
                    "DIVE-1001": {
                        text: "Vanilla grid의 생성과 소멸은 아래와 같습니다."
                    },
                    "DIVE-1100": {
                        text: "전역함수 getVanillagrid()"
                    },
                    "DIVE-1101": {
                        text: "getVanillagrid()를 통해 vanilla grid 객체를 가져옵니다. 이하 (vg로 표현하겠습니다.)"
                    },
                    "DIVE-1102": {
                        text: "해당 vg를 통해 화면에 정의 된 vanilla grid를 create, destory할 수 있습니다."
                    },
                    "DIVE-1103": {
                        text: "또 vg의 정해진 key의 값을 재정의 하여 grid를 커스터마이징할 수 있습니다."
                    },
                    "DIVE-1103": {
                        text: "vg를 재정의 하는 방법은 하단의 Vanilla grid object 섹션에서 자세히 다룹니다."
                    },
                    "DIVE-1200": {
                        text: "vg.create()"
                    },
                    "DIVE-1201": {
                        text: "화면에 Vanillagrid를 생성하는 함수 입니다. vg를 재정의 하는 로직은 vg.create() 전에 수행해야 합니다."
                    },
                    "DIVE-1202": {
                        text: "그리고, vanilla grid 생성에 관련된 두개의 전역함수가 있습니다."
                    },
                    "DIVE-1300": {
                        text: "전역함수 vanillagrid_onBeforeCreate(event, vanillagridObject)"
                    },
                    "DIVE-1301": {
                        text: "vanillagrid_onBeforeCreate()는 vg.create() 전에 호출되는 전역 함수 입니다. 파라메터로 window load event와 vanilla grid object를 받습니다. vanilla grid object를 커스터마이징 할 수 있습니다. script에 재정의하여 사용할 수 있습니다."
                    },
                    "DIVE-1350": {
                        text: "전역함수 vanillagrid_onAfterCreate(event, vanillagridObject)"
                    },
                    "DIVE-1351": {
                        text: "vanillagrid_onAfterCreate()는 vg.create() 후에 호출되는 전역 함수 입니다. 파라메터로 window load event와 vanilla grid object를 받습니다. vanilla grid object를 커스터마이징 할 수 있습니다. script에 재정의하여 사용할 수 있습니다."
                    },
                    "DIVE-1400": {
                        text: "기본으로 정의된 Create과정은 아래와 같습니다."
                    },
                    "DIVE-1401": {
                        code: 
`//하단 소스는 이미 Vanillagrid.js 파일에 선언되어있음.
(() => {
	window.addEventListener('load', function (e) {
		const vg = getVanillagrid();    //vg를 생성
        //vg.create()전에 vanillagrid_onBeforeCreate(e, vg)를 호출함
        //vanillagrid_onBeforeCreate(e, vg)를 통해 vg 객체를 수정할 수 있음.
		if (vanillagrid_onBeforeCreate(e, vg) === false) return;
		vg.create();    //vanilla grid 생성.
		vanillagrid_onAfterCreate(e, vg);   //생성후에 호출됨. vg 수정 가능
	});
})();
`,
                    },
                    "DIVE-1402": {
                        code: 
`<script>
//때문에 <script> 부분에 vanillagrid_onBeforeCreate(), vanillagrid_onAfterCreate()를 재정의 하여 vg를 커스터마이징 할 수 있다.
function vanillagrid_onBeforeCreate(e, vg) {
    console.log(vg);
    //여기서 return false를 반환하면 vg를 create하지 않는다.
}
function vanillagrid_onAfterCreate(e, vg) {
    console.log(vg);
}
</script>
`,
                    },
                    "DIVE-1450": {
                        text: "vg.destroy()"
                    },
                    "DIVE-1451": {
                        text: "화면에 있는 Vanillagrid를 삭제하고 관련된 document이벤트나 요소를 모두 삭제하는 로직입니다. Vue 등의 library를 사용할 때 destroy시 vg.destroy()를 호출하고 mount시 다시 vg.create()를 호출하는 등으로 활용할 수 있습니다."
                    },
                    "DIVE-1500": {
                        text: "Vanillagrid의 create, destroy기능은 Vue에서는 아래와 같이 활용할 수 있다."
                    },
                    "DIVE-1501": {
                        text: "1-1. header에 Vanilla Grid를 선언합니다.",
                    },
                    "DIVE-1502": {
                        code: 
`<script src="Vanillagrid.min.1.0.0.js"></script>
`,
                    },
                    "DIVE-1513": {
                        text: "1-2. 또는 npm을 사용합니다..",
                    },
                    "DIVE-1514": {
                        code: 
`npm i vanillagrid
`,
                    },
                    "DIVE-1503": {
                        text: "2. body의 마지막에",
                    },
                    "DIVE-1504": {
                        code: 
`<!--기존 생성 로직 방지-->
<script> vanillagrid_onBeforeCreate = function(e, vn) {return false;} </script>
`,
                    },
                    "DIVE-1505": {
                        text: "를 추가합니다.",
                    },
                    "DIVE-1506": {
                        text: "3. vue의 data에서",
                    },
                    "DIVE-1507": {
                        code: 
`//vanilla grid 객체 변수 선언
data () {
    return {
        vg : null;
    }
}
`,
                    },
                    "DIVE-1508": {
                        text: "4. vue의 mouted에서",
                    },
                    "DIVE-1509": {
                        code: 
`//vanilla grid 객체 생성
mounted: function() {
    this.vg = getVanillagrid();
    this.vg.create();
    this.loadGrid();
},
`,
                    },
                    "DIVE-1510": {
                        text: "5. vue의 beforeDestroy에서",
                    },
                    "DIVE-1511": {
                        code: 
`//vanilla grid 객체 제거
beforeDestroy: function() {
    this.vg.destroy();
},
`,
                    },
                    "DIVE-1512": {
                        text: "6. 이렇게 하면 vue의 해당 컴포넌트가 destroy, mount될때 grid를 새로 그릴 수 있습니다.",
                    },
                    "DIVE-2000": {
                        text: "Vanilla grid 객체"
                    },
                    "DIVE-2001": {
                        text: "getVanillagrid()를 통해 가져오는 객체입니다. 이하 vg로 표현함. create()와 destroy()를 할 수 있습니다."
                    },
                    "DIVE-2002": {
                        text: "vg는 몇가지 정의된 key의 값을 통해 개발자가 grid를 커스터마이징 할 수 있는 기능을 제공합니다."
                    },
                    "DIVE-2100": {
                        text: "vg.sortAscSpan, vg.sortDescSpan"
                    },
                    "DIVE-2101": {
                        text: "헤더를 더블클릭 시 나타나는 정렬 icon span요소 입니다."
                    },
                    "DIVE-2102": {
                        text: "해당 값을 미리 정의해두면 더블클릭 시 해당 값이 요소로 나타납니다."
                    },
                    "DIVE-2103": {
                        text: "값은 HTMLElement여야 합니다.(nodeType === 1)"
                    },
                    "DIVE-2104": {
                        text: "default는 '▲', '▼'를 textContent로 갖는 span요소 입니다."
                    },
                    "DIVE-2105": {
                        code: 
`<script>
//e는 window load event, vg는 vanilla grid object이다.
function vanillagrid_onBeforeCreate (e, vg) {
    //sortAscSpan 재정의
    vg.sortAscSpan = document.createElement("i");   //fontawesome 사용 시
    vg.sortAscSpan.setAttribute("class", "fas fa-sort-up");
    vg.sortAscSpan.style.marginLeft = "7px";
    //sortDescSpan 재정의
    vg.sortDescSpan = document.createElement("i");  //fontawesome 사용 시
    vg.sortDescSpan.setAttribute("class", "fas fa-sort-down");
    vg.sortDescSpan.style.marginLeft = "7px";
}
</script>
`,
                    },
                    "DIVE-2200": {
                        text: "vg.filterSpan"
                    },
                    "DIVE-2201": {
                        text: "헤더에 표시되는 필터 버튼 icon span요소 입니다."
                    },
                    "DIVE-2202": {
                        text: "값은 HTMLElement여야 합니다.(nodeType === 1)"
                    },
                    "DIVE-2203": {
                        text: "default는 'σ'를 textContent로 갖는 span요소 입니다."
                    },
                    "DIVE-2204": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //filterSpan 재정의
    vg.filterSpan = document.createElement("i");   //fontawesome 사용 시
    vg.filterSpan.setAttribute("class", "fas fa-search");
}
</script>
`,
                    },
                    "DIVE-2205": {
                        text: "※ Getting started 페이지를 제외하고는 모두 해당 로직을 추가했습니다. 따라서 본 사이트에서 보이는 filter span과 sort span들은 fontawesome icon이 적용된 결과 입니다."
                    },
                    "DIVE-2300": {
                        text: "vg.defaultGridInfo"
                    },
                    "DIVE-2301": {
                        text: "grid에 대한 defualt 속성을 정의합니다."
                    },
                    "DIVE-2302": {
                        text: "<vanilla-grid>에서 기능적인 속성을 정하는 값들에 대한 default 값입니다."
                    },
                    "DIVE-2303": {
                        text: '예를 들어 시스템에서 사용하는 날짜 포맷이 "yyyy/mm/dd"인 경우 매번 <vanilla-grid>에 dateFormat="yyyy/mm/dd"를 할 필요 없이, vg.defaultGridInfo.dateFormat="yyyy/mm/dd"로 설정할 수 있습니다.'
                    },
                    "DIVE-2304": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //모든 grid의 dateFormat의 default 값을 정의
    vg.defaultGridInfo.dateFormat = "yyyy/mm/dd";
    //모든 grid의 monthFormat의 default 값을 정의
    vg.defaultGridInfo.monthFormat = "yyyy/mm";
}
</script>
`,
                    },
                    "DIVE-2305": {
                        text: '또 예를 들어 프로그램의 공통 정책으로 grid는 조회하는 기능만 사용하기로 했다면,'
                    },
                    "DIVE-2306": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //모든 grid의 locked와 lockedColor의 default 값을 정의
    vg.defaultGridInfo.locked = true;   //grid 잠금
    vg.defaultGridInfo.lockedColor = false; //grid가 locked 상태일 시 background-color를 다르게 표기하지 않음
}
</script>
`,
                    },
                    "DIVE-2307": {
                        text: '이렇게 하면 매번 grid 선언 시 locked와 lockedColor 속성을 설정할 필요없이 항상 grid가 잠깁니다.'
                    },
                    "DIVE-2308": {
                        text: 'vg.defaultGridInfo에 대한 자세한 정보는 API에 있습니다.'
                    },
                    "DIVE-2400": {
                        text: "vg.defaultGridCssInfo"
                    },
                    "DIVE-2401": {
                        text: "vg.defaultGridCssInfo 도 vg.defaultGridInfo와 동일합니다. 기능적인 속성이 아닌 css요소적인 속성들에 대한 default 값입니다."
                    },
                    "DIVE-2402": {
                        text: "vg.defaultGridCssInfo를 활용하면 grid의 default css style을 정해놓고 매번 속성을 선언할 필요가 없습니다."
                    },
                    "DIVE-2403": {
                        text: "예를 들어 excel과 비슷한 스타일의 grid를 공용으로 사용한다할 때 아래와 같이 코드를 선언할 수 있습니다."
                    },
                    "DIVE-2404": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //default style을 정의
    this.vg.defaultGridCssInfo.colorSet="green"
    this.vg.defaultGridCssInfo.mouseoverCellBackColor="#efefef"
    this.vg.defaultGridCssInfo.selectCellBackColor="#dfdfdf"
    this.vg.defaultGridCssInfo.selectRowBackColor="#efefef"
    this.vg.defaultGridCssInfo.mouseoverCellFontColor="#333"
    this.vg.defaultGridCssInfo.selectCellFontColor="#333"
}
</script>
`,
                    },
                    "DIVE-2405": {
                        text: "※ 본 페이지는 filter span과, sort span, 그리고 defaultGridInfo와 defaultGridCssInfo를 위에 설명한 바와 같이 정의하겠습니다. 별도의 속성을 정의 하지 않으면 본페이지에서 grid는 아래와 같이 생성됩니다."
                    },
                    "DIVE-2406": {
                        text: "▼ 본 페이지에 적용된 grid의 default 속성들은 아래와 같습니다."
                    },
                    "DIVE-2407": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //filter span 재정의
    vg.filterSpan = document.createElement("i");
    vg.filterSpan.setAttribute("class", "fas fa-search");

    //sort span 재정의
    vg.sortAscSpan = document.createElement("i");
    vg.sortAscSpan.setAttribute("class", "fas fa-sort-up");
    vg.sortAscSpan.style.marginLeft = "7px";

    vg.sortDescSpan = document.createElement("i");
    vg.sortDescSpan.setAttribute("class", "fas fa-sort-down");
    vg.sortDescSpan.style.marginLeft = "7px";

    //vg.defaultGridInfo 설정
    vg.defaultGridInfo.rownumSize = "40px";
    vg.defaultGridInfo.statusVisible = false;
    vg.defaultGridInfo.dateFormat = "yyyy/mm/dd";
    vg.defaultGridInfo.monthFormat = "yyyy/mm";
    vg.defaultGridInfo.alterRow = false;

    //vg.defaultGridCssInfo 설정
    vg.defaultGridCssInfo.colorSet="green";
    vg.defaultGridCssInfo.mouseoverCellBackColor="#efefef";
    vg.defaultGridCssInfo.selectCellBackColor="#dfdfdf";
    vg.defaultGridCssInfo.selectRowBackColor="#efefef";
    vg.defaultGridCssInfo.mouseoverCellFontColor="#333";
    vg.defaultGridCssInfo.selectCellFontColor="#333";
}
</script>
`,
                    },
                    "DIVE-2500": {
                        text: "vg.defaultColInfo"
                    },
                    "DIVE-2501": {
                        text: "column에 대한 default 속성을 정의합니다."
                    },
                    "DIVE-2502": {
                        text: "default 설정은, v-col태그에 id 속성만(필수) 설정하고 column을 생성하면 text type의 컬럼이 생성됩니다."
                    },
                    "DIVE-2503": {
                        text: "예를들어 이를 아래와 같이 설정하면"
                    },
                    "DIVE-2504": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.defaultColInfo.dataType = "number";
    vg.defaultColInfo.originWidth = "120px";
}
</script>
`,
                    },
                    "DIVE-2505": {
                        text: "v-col태그에 id 속성만(필수) 설정하고 column을 생성하면 number type의 컬럼이 생성되고, 크기는 120px로 자동 설정 됩니다."
                    },
                    "DIVE-2506": {
                        text: "메소드 중 컬럼을 추가하는 메소드 addCol()이 있습니다."
                    },
                    "DIVE-2507": {
                        text: "해당 메소드 호출 시 파라메터로 column의 정보를 적절히 넘기지 않으면 자동으로 default 설정된 column이 생성됩니다. (id는 필수)"
                    },
                    "DIVE-2508": {
                        text: "이때 생성되는 컬럼도 vg.defaultColInfo로 설정된 컬럼이 추가됩니다."
                    },
                    "DIVE-2600": {
                        text: "기타"
                    },
                    "DIVE-2601": {
                        text: "vg.lessoreq0x7ffByte, vg.lessoreq0xffffByte, vg.greater0xffffByte는 maxByte체크시 사용하는 값입니다."
                    },
                    "DIVE-2602": {
                        text: "vg.lessoreq0x7ffByte는 문자의 아스키 코드가 0x7ff Byte 보다 작거나 같은 경우."
                    },
                    "DIVE-2603": {
                        text: "vg.lessoreq0xffffByte는 문자의 아스키 코드가 0x7ff Byte 보다 크고, 0xffff Byte 보다 작거나 같은 경우."
                    },
                    "DIVE-2604": {
                        text: "vg.greater0xffffByte는 문자의 아스키 코드가 0xffff Byte 보다 큰 경우를 의미합니다."
                    },
                    "DIVE-2605": {
                        text: "해당 문자에 대해 byte를 얼마나 부여할지에 대한 값이며 default로 각 2, 3, 4 입니다.(UTF-8 기준)"
                    },
                    "DIVE-2606": {
                        text: "프로그램에서 사용하는 인코딩이 다른 경우 해당값을 변경하여 사용할 수 있습니다."
                    },
                    "DIVE-2607": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    //UTF-16
    vg.lessoreq0x7ffByte = 2;
    vg.lessoreq0xffffByte = 2;
    vg.greater0xffffByte = 4;

    //UTF-32
    vg.lessoreq0x7ffByte = 4;
    vg.lessoreq0xffffByte = 4;
    vg.greater0xffffByte = 4;
}
</script>
`,
                    },
                    "DIVE-3000": {
                        text: "footer 함수"
                    },
                    "DIVE-3001": {
                        text: "기존의 footer 함수 이상의 기능이 필요할 때 footer 함수를 미리 정의하여 사용할 수 있습니다."
                    },
                    "DIVE-3002": {
                        text: "vg.footerFormula는 객체입니다."
                    },
                    "DIVE-3003": {
                        text: "key는 문자열 값이 들어가고, value는 function을 넣습니다."
                    },
                    "DIVE-3004": {
                        text: "function은 파라메터로 column의 값들을 받습니다.(getColValues()) 반환되는 값은 해당 footer에 표기됩니다."
                    },
                    "DIVE-3005": {
                        text: "▼ 아래와 같이 vg.footerFormula를 선언하고"
                    },
                    "DIVE-3006": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    this.vg.footerFormula = {
        "CHECK_COUNT" : function (colValues) {
            let count = 0;
            colValues.forEach((val) => {
                if(val === 'Y') count = count + 1;
            });
            return count;
        }
    }
}
</script>
`,
                    },
                    "DIVE-3007": {
                        text: "▼ 아래와 같이 v-col에서 footer속성에 key in으로 사용할 수 있습니다."
                    },
                    "DIVE-3008": {
                        code: 
`<vanilla-grid id="gridId">
    <v-col id="test" dataType="checkbox" footer="CHECK_COUNT"></v-col>
</vanilla-grid>
`,
                    },
                    "DIVE-3009": {
                        text: "▼ 본 페이지에서 적용한 footer function은 아래와 같습니다."
                    },
                    "DIVE-3010": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.footerFormula = {
        "CHECK_COUNT" : function (colValues) {
            let count = 0;
            colValues.forEach((val) => {
                if(val === 'Y') count = count + 1;
            });
            return count;
        },
        "LAST_DATE" : function (colValues) {
            const maxDateNum = Math.max(...colValues.map(date => Number(date)));
            const maxDateStr = maxDateNum.toString();
            const formattedDate = maxDateStr.slice(0, 4) + '/' + maxDateStr.slice(4, 6) + '/' + maxDateStr.slice(6);;
            return formattedDate;
        }
    }
}
</script>
`,
                    },
                    "DIVE-3011": {
                        text: '위 내용과 같이 CHECK_COUNT와 LAST_DATE를 vg.footerFormula에 선언하고 v-col의 속성에 footer="CHECK_COUNT" footer="LAST_DATE"을 선언한 후 footer function을 사용합니다.'
                    },
                    "DIVE-4000": {
                        text: "데이터 타입"
                    },
                    "DIVE-4001": {
                        text: "기본으로 제공되는 data type외에 별도의 data type을 추가 할 수 있습니다."
                    },
                    "DIVE-4002": {
                        text: "본 페이지에서는 임의의 data type으로 'img', 'radio', 'tree'를 추가해 보았습니다."
                    },
                    "DIVE-4003": {
                        text: "vg.dataType.img = {...정의}, vg.dataType.radio = {...정의}, vg.dataType.tree = {...정의}의 방식으로 정의하며,"
                    },
                    "DIVE-4004": {
                        text: 'v-col에 dataType="img", dataType="radio", dataType="tree"와 같이 속성을 설정해서 사용합니다.'
                    },
                    "DIVE-4005": {
                        text: "기존의 준비된 dataType 속성 'text', 'number', 'mask', 'code', 'date', 'month' 등과 사용자가 vg.dataType에 정의한 속성외의 값을 dataType에 설정하면 오류가 발생합니다."
                    },
                    "DIVE-4050": {
                        text: "▼ 새로운 data type에 대한 vg.dataType 정의는 아래와 같은 방법으로 코드를 작성할 수 있습니다."
                    },
                    "DIVE-4051": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.dataType = {
        "newDataType" : {
            //cell의 style을 지정. element.style.{key} = {value} 형식의 카멜표현식 cssKey와 cssValue를 key-value로 삽입함.
            cellStyle: {
            },

            //cell이 선택되었을 때 발생할 이벤트성 메소드. target은 해당 cell이며 data는 cell의 getData() 값이다.
            onSelected : function (target, data) {
            },

            //cell이 선택 해제 되었을 때 발생할 이벤트성 메소드. target은 해당 cell이며 data는 cell의 getData() 값이다.
            onUnselected : function (target, data) {
            },

            //cell이 선택된 상태에서 keyboard를 눌렀을 때 발생할 이벤트성 메소드.
            //event에서 key를 가져올 수 있다. data는 cell의 getData() 값이다.
            onSelectedAndKeyDown : function (event, data) {
            },

            //cell을 클릭할 때 발생할 이벤트성 메소드. event는 click이벤트. data는 cell의 getData() 값이다.
            onClick : function (event, data) {
            },

            //cell을 mouse down할 때 발생할 이벤트성 메소드. event는 mousedown이벤트. data는 cell의 getData() 값이다.
            onMousedown : function (event, data) {
            },

            //cell에 값이 저장될 때 어떤 값을 저장할지에 대한 메소드.
            //파라메터로 cell에 값 load시 받는 값이 value로 들어오고, 반환값을 cell의 data에 저장한다.
            getValue: function (value) {
            },

            //cell에 text가 저장될 때 어떤 text를 저장할지에(format적용 후) 대한 메소드. text는 필터, 정렬에 활용된다.
            //파라메터로 cell에 값 load시 받는 값이 value로 들어오고, 반환값을 cell의 text에 저장한다.
            getText: function (value) {
            },

            //cell이 화면에 표기될때 어떤 node를 보여줄지에 대한 메소드. 파라메터로 cell의 getData() 값을 받는다.
            //반환되는 Html element가 grid에 표기된다. Html element를 반환해야하고 null반환 시 span node가 생성된다.
            getChildNode: function (data) {
            },

            //cell을 더블클릭하여 editor를 생성 할때 어떤 node를 생성할 지에 대한 메소드. 파라메터로 cell, getData()를 받고,
            //call_modify는 현재 editor의 값을 변경하라는 메소드를 호출하는 function,
            //call_endEdit는 현재 editor node를 삭제하고 editing을 종료하라는 메소드를 호출하는 function이다
            // Html element를 반환해야하고 null반환 시 edit이 종료 된다.
            getEditor: function (target, data, call_modify, call_endEdit) {
            },

            //editing후 편집된 값을 cell에 어떤 형식으로 삽입할 지에 대한 메소드.
            //파라메터로 cell, getData()를 받는다. 반환되는 값은 cell의 value에 삽입된다.
            getEditedValue: function (target, data) {
            },
            
            //filter의 options으로 생성될 값을 정하는 메소드. 반환되는 값으로 filter의 options을 만든다.
            getFilterValue: function (value) {
            },

            //sort의 기준될 값을 정하는 메소드. 반환되는 값으로 정렬한다 만든다.
            getSortValue: function (value) {
            },

            //복사할 값을 지정하는 메소드. value는 cell의 value이다.
            getCopyValue: function (value) {
            },

            //붙여넣기할 값을 지정하는 메소드. data는 cell의 getData()이고 text는 클립보드에 복사되어 붙여넣기 될 text이다.
            getPasteValue: function (data, text) {
            },
        }
    }
}
</script>
`,
                    },
                    "DIVE-4100": {
                        text: "'img' data type에 대한 vg.dataType 정의는 다음과 같습니다."
                    },
                    "DIVE-4101": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.dataType = {
        "img" : {
            cellStyle: {
                justifyContent: "center",
                textAlign: "center",
                padding: 0,
            },
            onSelected : function (target, data) {
                if(target.firstChild.children[0]) target.firstChild.children[0].style.setProperty("opacity", "0.2");
            },
            onUnselected : function (target, data) {
                if(target.firstChild.children[0]) target.firstChild.children[0].style.removeProperty("opacity");
            },
            getValue: function (value) {
                if(!value) return null;
                return value;
            },
            getText: function (value) {
                if(!value) return null;
                return value.alt;
            },
            getChildNode: function (data) {
                const childNode = document.createElement("span");
                if(!data) return childNode;
                if(!data.value) return childNode;
                childNode.style.display = "flex";
                childNode.style.alignItems = "center";
                childNode.style.position = "relative";
                childNode.style.overflow = "hidden";
                childNode.style.width = "100%";
                const img = document.createElement("img");
                const alt = document.createElement("span");
                img.style.width = "100%"
                // img.style.height = "100px"
                img.style.zIndex = "1";
                img.src = data.value.src;
                img.alt = data.text;
                alt.style.position = "absolute";
                alt.style.fontSize = "12px";
                alt.style.color = "black";
                alt.style.textAlign = "left";
                alt.style.display = "inline-block";
                alt.style.width = "100%";
                alt.style.whiteSpace = "normal";
                alt.style.wordBreak = "break-all";
                alt.innerText = data.text;
                
                img.gridId = data.gridId;
                img.cellRow = data.row;
                img.cellCol = data.col;

                childNode.append(img);
                childNode.append(alt);
                childNode.addEventListener('click', function (e) {
                    window[e.target.gridId].setTargetCell(e.target.cellRow, e.target.cellCol);
                })
                childNode.addEventListener('dblclick', function (e) {
                    window[e.target.gridId].editCell(e.target.cellRow, e.target.cellCol);
                })
                return childNode;
            },
            getEditor: function (target, data, call_modify, call_endEdit) {
                if(!data.value) return null;

                const editor = document.createElement("input");
                editor.setAttribute("type","text");
                editor.style.width = target.offsetWidth + 'px';
                editor.style.height = target.scrollHeight + editor.offsetHeight - editor.clientHeight + 'px';
                editor.style.position = "absolute";
                editor.style.zIndex = "200";
                editor.value = data.text;

                editor.addEventListener('keydown', function (e) {
                    switch (e.key) {
                        case 'Enter':
                            call_modify();
                            e.stopPropagation();
                            e.preventDefault();
                            break;
                        case 'Escape':
                            call_endEdit();
                            e.stopPropagation();
                            e.preventDefault();
                            break;
                        case 'Tab':
                            call_modify();
                            e.stopPropagation();
                            e.preventDefault();
                            break;
                        case 'F2':
                            call_modify();
                            e.stopPropagation();
                            e.preventDefault();
                            break;
                        default:
                            break;
                    }
                });
                return editor;
            },
            getEditedValue: function (target, data) {
                if(!data.value) return null;
                const newValue = data.value;
                newValue.alt = target.value;
                return newValue;
            },
            getFilterValue: function (value) {
                if(!value) return null;
                return "title : " + value.alt;
            },
            getSortValue: function (value) {
                if(!value) return null;
                return value.alt;
            },
            getCopyValue: function (value) {
                if(!value) return null;
                return value.alt;
            },
            getPasteValue: function (data, text) {
                if(!data.value) return null;
                const value = data.value;
                value.alt = text;
                return value;
            },
        },
        //radio : ...
    };
}
</script>
`,
                    },
                    "DIVE-4200": {
                        text: "'radio' data type에 대한 vg.dataType 정의는 다음과 같습니다."
                    },
                    "DIVE-4201": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.dataType = {
        radio : {
            cellStyle: {
                justifyContent: "center",
                textAlign: "center",
            },
            onSelectedAndKeyDown : function (event, data) {
                if(event.key === 'Enter' || event.key === ' ') {
                    window[data.gridId].setColSameValue(data.col, "N", true);
                    window[data.gridId].setCellValue(data.row, data.col, data.value === "Y" ? "N" : "Y", true);
                    return false;
                }
            },
            onClick : function (event, data) {
                if(event.target.tagName !== 'INPUT') return;
                let value = event.target.checked;
                window[event.target.gridId].setColSameValue(event.target.cellCol, "N", true);
                window[event.target.gridId].setCellValue(event.target.cellRow, event.target.cellCol, value ? "Y" : "N", true);
            },
            getValue: function (value) {
                return value;
            },
            getText: function (value) {
                const text = value === "Y" ? "true" : "false";
                return text;
            },
            getChildNode: function (data) {
                const childNode = document.createElement("input");
                childNode.setAttribute("type", "radio");
                childNode.setAttribute("name", data.name);
                childNode.setAttribute("value", "" + data.row);
                childNode.gridId = data.gridId;
                childNode.cellRow = data.row;
                childNode.cellCol = data.col;
                childNode.checked = data.value === "Y";
                return childNode;
            },
            getFilterValue: function (value) {
                const filterValue = value === "Y" ? "●" : "○";
                return filterValue;
            },
        }
        //tree : ...
    };
}
</script>
`,
                    },
                    "DIVE-4300": {
                        text: "'tree' data type에 대한 vg.dataType 정의는 다음과 같습니다.(tree data type에 대한 예시 grid는 최 상단의 Deep dive!섹션의 grid입니다.)"
                    },
                    "DIVE-4301": {
                        code: 
`<script>
function vanillagrid_onBeforeCreate (e, vg) {
    vg.dataType = {
        tree : {
            cellStyle: {
                justifyContent: "left",
                textAlign: "left",
            },
            getValue: function (value) {
                if(value.constructor === Object) {
                    return value;
                } else {
                    return {title: value, toggle: false};
                }
            },
            getText: function (value) {
                if(!value) return null
                return value.title
            },
            getChildNode: function (data) {
                if(!data.value) return document.createElement('span');

                const treeSpan = document.createElement('divs');
                treeSpan.style.width = '100%'

                const treeText = document.createElement('span');
                treeText.innerText = data.text;
                treeText.style.display = 'inline-block';
                treeText.style.marginLeft = '10px';
                treeText.style.maxWidth = '90%'
                treeText.style.overflow = 'hidden'
                treeText.style.textOverflow = 'ellipsis'
                treeText.addEventListener('click', (e) => {
                    onClick(e, data);
                })

                const treeToggle = document.createElement('span');
                treeToggle.classList.add('far');
                if(data.value.toggle) {
                    treeToggle.classList.add('fa-minus-square');
                    treeToggle.classList.remove('fa-plus-square');
                }
                else {
                    treeToggle.classList.add('fa-plus-square');
                    treeToggle.classList.remove('fa-minus-square');
                }
                treeToggle.style.fontSize = '0.85em';
                treeToggle.addEventListener('click', (e) => {
                    onClick(e, data);
                })

                const grid = window[data.gridId];

                if(data.col + 1 <= grid.getColCount() && grid.getCellDataType(data.row, data.col + 1) !== 'tree') {
                    if(data.value.toggle) {
                        grid.setCellDataType(data.row, data.col + 1, grid.getColDataType(data.col + 1));
                        grid.setCellFontColor(data.row, data.col + 1, "#333");
                    }
                    else {
                        grid.setCellDataType(data.row, data.col + 1, "text");
                        grid.setCellFontColor(data.row, data.col + 1, "#fff");
                    }
                }

                for(let col = data.col; col > 3; col--) {
                    if(grid.getCellDataType(data.row, col) === 'tree') {
                        const preCellValue = grid.getCellValue(data.row, col - 1);
                        if(preCellValue && !preCellValue.toggle) {
                            treeText.innerText = '..';
                        }
                        break;
                    }
                }

                if (data.row === 1) {
                    treeSpan.append(treeToggle);
                    treeSpan.append(treeText);
                } else if (data.row > 1 && grid.getCellText(data.row - 1, data.col) !== data.text) {
                    treeSpan.append(treeToggle);
                    treeSpan.append(treeText);
                }
                
                function onClick(e, data) {
                    const grid = window[data.gridId];
                    const toggle = !data.value.toggle;

                    function openTree (nowRow, col) {
                        let startRow;
                        const title = grid.getCellText(nowRow, col);
                        if(nowRow === 1) {
                            startRow = nowRow;
                        }
                        else {
                            for(let row = nowRow; row > 1; row--) {
                                if(grid.getCellText(row, col) === title) {
                                    startRow = row;
                                    break;
                                }
                            }
                        }
                        const newValue = {title : title, toggle : true};

                        for(let row = startRow; row <= grid.getRowCount(); row++) {
                            if(title !== grid.getCellText(row, col)) break;
                            grid.setCellValue(row, col, newValue);
                            if(row !== startRow) {
                                if(grid.getCellDataType(row, col + 1) === 'tree') {
                                    if(row === 1 || grid.getCellText(row, col + 1) !== grid.getCellText(row - 1, col + 1)) {
                                        grid.setRowVisible(row, true);
                                    }
                                }
                                else {
                                    grid.setRowVisible(row, true);
                                }
                            }
                            else {
                                //cell의 단순히 재load를 시키기 위한 로직
                                for(let c = col + 1; c <= grid.getColCount(); c++) {
                                    if (grid.getCellDataType(row, c) === 'tree') {
                                        grid.setCellValue(row, c, grid.getCellValue(row, c));
                                        break;
                                    }
                                }
                            }
                        }
                    }

                    function closeTree (nowRow, col) {
                        let startRow = nowRow;
                        const title = grid.getCellText(nowRow, col);
                        if(!title) return;
                        
                        for(let row = startRow; row <= grid.getRowCount(); row++) {
                            if(title !== grid.getCellText(row, col)) break;
                            if(row !== startRow) {
                                grid.setRowVisible(row, false);
                            }
                            for(let c = col; c <= grid.getColCount(); c++) {
                                if(grid.getCellDataType(row, c) === 'tree') {
                                    const newValue = grid.getCellValue(row, c);
                                    if(newValue) {
                                        newValue.toggle = false;
                                        grid.setCellValue(row, c, newValue);
                                    }
                                }
                            }
                        }
                    }

                    if(toggle) {
                        for(let col = data.col; col > 2; col--) {
                            openTree(data.row, col);
                        }
                    }
                    else {
                        closeTree(data.row, data.col);
                    }
                }
            
                return treeSpan;
            },
        }
    };
}
</script>
`,
                    },
                },
            },
            api: {
                grid: {
                    [CONSTS.SAMPLE_KEYS_API[0]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.GRID_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.name,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.GRID_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkKor,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[1]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.COLUMN_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.name,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.COLUMN_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkKor,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[2]] : {
                        "event": (function() {
                            const attributes = [];
                            CONSTS.EVENTS.forEach((attr) => {
                                const obj = {
                                    text : attr.name,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.EVENTS.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkKor,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[3]] : {
                        "method": (function() {
                            const attributes = [];
                            CONSTS.METHODS.forEach((attr) => {
                                const obj = {
                                    text : attr.name,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.METHODS.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkKor,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[4]] : {
                        "function": (function() {
                            const attributes = [];
                            CONSTS.VGO_FUNCTION.forEach((attr) => {
                                const obj = {
                                    text : attr.function,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.VGO_FUNCTION.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkKor,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[5]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.VGO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.attribute,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.VGO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkKor,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[6]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.VGO_GRID_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.attribute,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.VGO_GRID_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkKor,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[7]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.VGO_GRID_CSSINFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.attribute,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.VGO_GRID_CSSINFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkKor,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[8]] : {
                        "attribute": (function() {
                            const attributes = [];
                            CONSTS.VGO_COLUMN_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.attribute,
                                }
                                attributes.push(obj);
                            });
                            return attributes;
                        })(),
                        "remark": (function() {
                            const remark = [];
                            CONSTS.VGO_COLUMN_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.remarkKor,
                                }
                                remark.push(obj);
                            });
                            return remark;
                        })(),
                    },
                },
                gridNoSearch: {
                    [CONSTS.SAMPLE_KEYS_API[0]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.GRID_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.GRID_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[1]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.COLUMN_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.COLUMN_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[2]] : {
                        "parameter": (function() {
                            const type = [];
                            CONSTS.EVENTS.forEach((attr) => {
                                const obj = {
                                    text : attr.param,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[3]] : {
                        "related": (function() {
                            const type = [];
                            CONSTS.METHODS.forEach((attr) => {
                                const obj = {
                                    text : attr.related,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "parameter": (function() {
                            const type = [];
                            CONSTS.METHODS.forEach((attr) => {
                                const obj = {
                                    text : attr.param,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "return": (function() {
                            const type = [];
                            CONSTS.METHODS.forEach((attr) => {
                                const obj = {
                                    text : attr.return,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[4]] : {
                        "parameter": (function() {
                            const type = [];
                            CONSTS.VGO_FUNCTION.forEach((attr) => {
                                const obj = {
                                    text : attr.param,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "return": (function() {
                            const type = [];
                            CONSTS.VGO_FUNCTION.forEach((attr) => {
                                const obj = {
                                    text : attr.return,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[5]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.VGO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.VGO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[6]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.VGO_GRID_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.VGO_GRID_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[7]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.VGO_GRID_CSSINFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.VGO_GRID_CSSINFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                    [CONSTS.SAMPLE_KEYS_API[8]] : {
                        "type": (function() {
                            const type = [];
                            CONSTS.VGO_COLUMN_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.type,
                                }
                                type.push(obj);
                            });
                            return type;
                        })(),
                        "default": (function() {
                            const def = [];
                            CONSTS.VGO_COLUMN_INFO_ATTRIBUTES.forEach((attr) => {
                                const obj = {
                                    text : attr.default,
                                }
                                def.push(obj);
                            });
                            return def;
                        })(),
                    },
                },
                text : {
                    "API-0000": {
                        text: "Grid 속성"
                    },
                    "API-1000": {
                        text: "Column 속성"
                    },
                    "API-2000": {
                        text: "이벤트"
                    },
                    "API-3000": {
                        text: "메소드"
                    },
                    "API-4000": {
                        text: "Vanilla grid 객체"
                    },
                    "API-4200": {
                        text: "전역 & vanilla grid 객체 함수"
                    },
                    "API-4400": {
                        text: "vanilla grid 객체 속성"
                    },
                    "API-4600": {
                        text: "default grid 기능적 속성"
                    },
                    "API-4800": {
                        text: "default grid css관련 속성"
                    },
                    "API-5000": {
                        text: "default column 속성"
                    },
                },
            },
        };
        
        //intro view key, anchor id 삽입(ENG)
        Object.keys(this.ENG.intro.text).forEach((key, idx) => {
            this.ENG.intro.text[key].view = CONSTS.VIEW_KEY_INTRO;
            this.ENG.intro.text[key].anchor = "anchor_" + idx;
        });
        //intro grid data에 cell정보 삽입(ENG)
        //gridIntro02
        for(let r = 0; r < this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col1.length; r++) {
            setCellInfo(this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col1[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col1", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col2.length; r++) {
            setCellInfo(this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col2[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col2", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col3.length; r++) {
            setCellInfo(this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col3[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col3", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4.length; r++) {
            setCellInfo(this.ENG.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col4", CONSTS.VIEW_KEY_INTRO);
        }
        //intro view key, anchor id 삽입(KOR)
        Object.keys(this.KOR.intro.text).forEach((key, idx) => {
            this.KOR.intro.text[key].view = CONSTS.VIEW_KEY_INTRO;
            this.KOR.intro.text[key].anchor = "anchor_" + idx;
        });
        //intro grid data에 cell정보 삽입(KOR)
        //gridIntro02
        for(let r = 0; r < this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col1.length; r++) {
            setCellInfo(this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col1[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col1", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col2.length; r++) {
            setCellInfo(this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col2[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col2", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col3.length; r++) {
            setCellInfo(this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col3[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col3", CONSTS.VIEW_KEY_INTRO);
        }
        for(let r = 0; r < this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4.length; r++) {
            setCellInfo(this.KOR.intro.grid[CONSTS.SAMPLE_KEYS_INTRO[1]].col4[r], CONSTS.SAMPLE_GRID_IDS_INTRO[1], r, "col4", CONSTS.VIEW_KEY_INTRO);
        }

        //started view key, anchor id 삽입
        Object.keys(this.ENG.started.text).forEach((key, idx) => {
            this.ENG.started.text[key].view = CONSTS.VIEW_KEY_STARTED;
            this.ENG.started.text[key].anchor = "anchor_" + idx;
        });
        //started grid data에 cell정보 삽입(ENG)
        // gridStarted04
        for(let r = 0; r < this.ENG.started.grid[CONSTS.SAMPLE_KEYS_STARTED[3]].rmk.length; r++) {
            setCellInfo(this.ENG.started.grid[CONSTS.SAMPLE_KEYS_STARTED[3]].rmk[r], CONSTS.SAMPLE_GRID_IDS_STARTED[3], r, "rmk", CONSTS.VIEW_KEY_STARTED);
        }
        //started view key, anchor id 삽입
        Object.keys(this.KOR.started.text).forEach((key, idx) => {
            this.KOR.started.text[key].view = CONSTS.VIEW_KEY_STARTED;
            this.KOR.started.text[key].anchor = "anchor_" + idx;
        });
        //started grid data에 cell정보 삽입(KOR)
        // gridStarted04
        for(let r = 0; r < this.KOR.started.grid[CONSTS.SAMPLE_KEYS_STARTED[3]].rmk.length; r++) {
            setCellInfo(this.KOR.started.grid[CONSTS.SAMPLE_KEYS_STARTED[3]].rmk[r], CONSTS.SAMPLE_GRID_IDS_STARTED[3], r, "rmk", CONSTS.VIEW_KEY_STARTED);
        }

        //dive view key, anchor id 삽입
        Object.keys(this.ENG.dive.text).forEach((key, idx) => {
            this.ENG.dive.text[key].view = CONSTS.VIEW_KEY_DIVE;
            this.ENG.dive.text[key].anchor = "anchor_" + idx;
        });
        //dive view key, anchor id 삽입
        Object.keys(this.KOR.dive.text).forEach((key, idx) => {
            this.KOR.dive.text[key].view = CONSTS.VIEW_KEY_DIVE;
            this.KOR.dive.text[key].anchor = "anchor_" + idx;
        });

        //api view key, anchor id 삽입
        Object.keys(this.ENG.api.text).forEach((key, idx) => {
            this.ENG.api.text[key].view = CONSTS.VIEW_KEY_API;
            this.ENG.api.text[key].anchor = "anchor_" + idx;
        });
        // gridApi01
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[0]].attribute.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[0]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[0], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[0]].remark.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[0]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[0], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi02
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[1]].attribute.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[1]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[1], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[1]].remark.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[1]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[1], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi03
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[2]].event.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[2]].event[r], CONSTS.SAMPLE_GRID_IDS_API[2], r, "event", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[2]].remark.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[2]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[2], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi04
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[3]].method.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[3]].method[r], CONSTS.SAMPLE_GRID_IDS_API[3], r, "method", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[3]].remark.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[3]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[3], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi05
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[4]].function.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[4]].function[r], CONSTS.SAMPLE_GRID_IDS_API[4], r, "function", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[4]].remark.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[4]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[4], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi06
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[5]].attribute.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[5]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[5], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[5]].remark.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[5]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[5], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi07
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[6]].attribute.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[6]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[6], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[6]].remark.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[6]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[6], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi08
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[7]].attribute.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[7]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[7], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[7]].remark.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[7]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[7], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi09
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[8]].attribute.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[8]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[8], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[8]].remark.length; r++) {
            setCellInfo(this.ENG.api.grid[CONSTS.SAMPLE_KEYS_API[8]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[8], r, "remark", CONSTS.VIEW_KEY_API);
        }
        //api view key, anchor id 삽입
        Object.keys(this.KOR.api.text).forEach((key, idx) => {
            this.KOR.api.text[key].view = CONSTS.VIEW_KEY_API;
            this.KOR.api.text[key].anchor = "anchor_" + idx;
        });
        // gridApi01
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[0]].attribute.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[0]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[0], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[0]].remark.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[0]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[0], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi02
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[1]].attribute.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[1]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[1], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[1]].remark.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[1]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[1], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi03
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[2]].event.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[2]].event[r], CONSTS.SAMPLE_GRID_IDS_API[2], r, "event", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[2]].remark.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[2]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[2], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi04
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[3]].method.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[3]].method[r], CONSTS.SAMPLE_GRID_IDS_API[3], r, "method", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[3]].remark.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[3]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[3], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi05
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[4]].function.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[4]].function[r], CONSTS.SAMPLE_GRID_IDS_API[4], r, "function", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[4]].remark.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[4]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[4], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi06
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[5]].attribute.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[5]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[5], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[5]].remark.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[5]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[5], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi07
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[6]].attribute.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[6]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[6], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[6]].remark.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[6]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[6], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi08
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[7]].attribute.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[7]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[7], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[7]].remark.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[7]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[7], r, "remark", CONSTS.VIEW_KEY_API);
        }
        // gridApi09
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[8]].attribute.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[8]].attribute[r], CONSTS.SAMPLE_GRID_IDS_API[8], r, "attribute", CONSTS.VIEW_KEY_API);
        }
        for(let r = 0; r < this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[8]].remark.length; r++) {
            setCellInfo(this.KOR.api.grid[CONSTS.SAMPLE_KEYS_API[8]].remark[r], CONSTS.SAMPLE_GRID_IDS_API[8], r, "remark", CONSTS.VIEW_KEY_API);
        }
    }
    return new Contents(CONSTS);
}

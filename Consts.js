function getConsts () {
    function Consts () {
        this.VIEW_KEY_INTRO = "intro";
        this.VIEW_KEY_STARTED = "started";
        this.VIEW_KEY_DIVE = "dive";
        this.VIEW_KEY_API = "api";
        this.SAMPLE_KEYS_INTRO = ['intro01', 'intro02'];
        this.SAMPLE_GRID_IDS_INTRO = this.SAMPLE_KEYS_INTRO.map(str => `grid${str.charAt(0).toUpperCase() + str.slice(1)}`);
        this.SAMPLE_KEYS_STARTED = ['started01','started02','started03','started04','started05','started06','started07'];
        this.SAMPLE_GRID_IDS_STARTED = this.SAMPLE_KEYS_STARTED.map(str => `grid${str.charAt(0).toUpperCase() + str.slice(1)}`);
        this.SAMPLE_KEYS_DIVE = ['dive01','dive02','dive03','dive04'];
        this.SAMPLE_GRID_IDS_DIVE = this.SAMPLE_KEYS_DIVE.map(str => `grid${str.charAt(0).toUpperCase() + str.slice(1)}`);
        this.SAMPLE_KEYS_API = ['api01','api02','api03','api04','api05','api06','api07','api08','api09'];
        this.SAMPLE_GRID_IDS_API = this.SAMPLE_KEYS_API.map(str => `grid${str.charAt(0).toUpperCase() + str.slice(1)}`);

        this.GRID_ATTRIBUTES = [
            {
                "name": "id",
                "type": "String",
                "default": "*required",
                "remarkKor": "필수 값. grid의 id이다.",
                "remarkEng": "Required value. It is the id of the grid."
            },
            {
                "name": "name",
                "type": "String",
                "default": "info.gridId",
                "remarkKor": "grid의 name. null일 시 grid Id가 삽입된다.",
                "remarkEng": "The name of the grid. If null, the grid Id is inserted."
            },
            {
                "name": "locked",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "cell 수정 여부이다. True 시 cell수정 불가",
                "remarkEng": "Indicates whether the cell is editable. If true, the cell cannot be edited."
            },
            {
                "name": "lockedColor",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "locked cell의 locked를 표현하는 배경 color를 표현할 지 여부이다.",
                "remarkEng": "Indicates whether to display the background color representing the locked state of a locked cell."
            },
            {
                "name": "resizable",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "column width를 사용자가 마우스로 변경할 수 있는지 여부.",
                "remarkEng": "Indicates whether the column width can be adjusted by the user with the mouse."
            },
            {
                "name": "redoable",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "grid 편집 시 사용자가 단축키를 통해 실행취소, 재실행을 사용할 수 있는지 여부.",
                "remarkEng": "Indicates whether the user can use undo and redo shortcuts while editing the grid."
            },
            {
                "name": "redoCount",
                "type": "Number",
                "default": "30",
                "remarkKor": "실행취소, 재실행을 하기위해 grid 편집 상태를 기록할 횟수.",
                "remarkEng": "The number of times the grid edit state is recorded for undo and redo."
            },
            {
                "name": "visible",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "grid의 visible처리 여부. False이면 display none.",
                "remarkEng": "Indicates whether the grid is visible. If false, it will be display none."
            },
            {
                "name": "headerVisible",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "grid header의 visible처리 여부. False이면 display none.",
                "remarkEng": "Indicates whether the grid header is visible. If false, it will be display none."
            },
            {
                "name": "rownumVisible",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "순번 Column(v-g-rownum)을 화면에 표시 할지 여부.",
                "remarkEng": "Indicates whether to display the row number column (v-g-rownum) on the screen."
            },
            {
                "name": "rownumSize",
                "type": "String(cssText)",
                "default": "60px",
                "remarkKor": "순번 Column(v-g-rownum)의 width 사이즈.",
                "remarkEng": "The width size of the row number column (v-g-rownum)."
            },
            {
                "name": "rownumLockedColor",
                "type": "Boolean",
                "default": "info.locked",
                "remarkKor": "순번 Column(v-g-rownum)의 locked color를 표현 할 지 여부.",
                "remarkEng": "Indicates whether to display the locked color of the row number column (v-g-rownum)."
            },
            {
                "name": "statusVisible",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "상태 Column(v-g-status)을 화면에 표시 할지 여부.",
                "remarkEng": "Indicates whether to display the status column (v-g-status) on the screen."
            },
            {
                "name": "statusLockedColor",
                "type": "Boolean",
                "default": "info.locked",
                "remarkKor": "상태 Column(v-g-status)의 locked color를 표현 할 지 여부.",
                "remarkEng": "Indicates whether to display the locked color of the status column (v-g-status)."
            },
            {
                "name": "selectionPolicy",
                "type": "String",
                "default": "range",
                "remarkKor": "grid의 사용자 선택 범위 정책. 'range' : 범위선택. 'single': 단일 cell 선택, 'none': 선택불가)",
                "remarkEng": "The user selection range policy of the grid. 'range': range selection, 'single': single cell selection, 'none': no selection)"
            },
            {
                "name": "nullValue",
                "type": "var",
                "default": "null",
                "remarkKor": "grid에서 null값을 의미하는 값.",
                "remarkEng": "Value representing null in the grid."
            },
            {
                "name": "dateFormat",
                "type": "String",
                "default": "yyyy-mm-dd",
                "remarkKor": "grid에서 date의 format. 'yyyymmdd', 'yyyy-mm-dd', 'yyyy/mm/dd', 'yyyy. mm. dd' 가능.",
                "remarkEng": "The format of the date in the grid. 'yyyymmdd', 'yyyy-mm-dd', 'yyyy/mm/dd', 'yyyy. mm. dd' are possible."
            },
            {
                "name": "monthFormat",
                "type": "String",
                "default": "yyyy-mm",
                "remarkKor": "grid에서 month의 format. 'yyyymm', 'yyyy-mm', 'yyyy/mm', 'yyyy. mm' 가능.",
                "remarkEng": "The format of the month in the grid. 'yyyymm', 'yyyy-mm', 'yyyy/mm', 'yyyy. mm' are possible."
            },
            {
                "name": "alterRow",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "grid의 alterRow(한 행씩 번갈아가며 색상을 다르게 표현하는 기능)을 설정한다.",
                "remarkEng": "Sets the alterRow of the grid (the function that alternates the colors of each row)."
            },
            {
                "name": "frozenColCount",
                "type": "Number",
                "default": "0",
                "remarkKor": "grid의 고정 열을 설정한다. Unvisible처리된 열도 계산해서 숫자를 설정해야한다.",
                "remarkEng": "Sets the frozen columns of the grid. The number should be set by calculating the invisible columns as well."
            },
            {
                "name": "frozenRowCount",
                "type": "Number",
                "default": "0",
                "remarkKor": "grid의 고정 행을 설정한다.",
                "remarkEng": "Sets the frozen rows of the grid."
            },
            {
                "name": "sortable",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "grid의 정렬 기능을 사용할지 여부.",
                "remarkEng": "Indicates whether to use the sorting feature of the grid."
            },
            {
                "name": "filterable",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "grid의 필터 기능을 사용할지 여부.",
                "remarkEng": "Indicates whether to use the filtering feature of the grid."
            },
            {
                "name": "allCheckable",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "checkbox의 헤더 더블클릭 시 해당 열의 checkbox를 checked, unchecked하는 기능을 사용할지 여부.",
                "remarkEng": "Indicates whether to use the feature that checks or unchecks the column checkboxes when double-clicking the header of a checkbox."
            },
            {
                "name": "checkedValue",
                "type": "String",
                "default": "Y",
                "remarkKor": "checkbox type의 cell이 checked일 시 갖을 값.",
                "remarkEng": "The value a checkbox type cell has when checked."
            },
            {
                "name": "uncheckedValue",
                "type": "String",
                "default": "N",
                "remarkKor": "checkbox type의 cell이 unchecked일 시 갖을 값.",
                "remarkEng": "The value a checkbox type cell has when unchecked."
            },
            {
                "name": "width",
                "type": "String",
                "default": "100%",
                "remarkKor": "grid의 width. cssText를 삽입한다.",
                "remarkEng": "The width of the grid. Insert cssText."
            },
            {
                "name": "height",
                "type": "String",
                "default": "600px",
                "remarkKor": "grid의 height. cssText를 삽입한다.",
                "remarkEng": "The height of the grid. Insert cssText."
            },
            {
                "name": "margin",
                "type": "String",
                "default": "0 auto",
                "remarkKor": "grid의 margin. cssText를 삽입한다.",
                "remarkEng": "The margin of the grid. Insert cssText."
            },
            {
                "name": "padding",
                "type": "String",
                "default": "0",
                "remarkKor": "grid의 padding. cssText를 삽입한다.",
                "remarkEng": "The padding of the grid. Insert cssText."
            },
            {
                "name": "sizeLevel",
                "type": "Number",
                "default": "5",
                "remarkKor": "grid의 size level을 지정한다. 양의 정수를 입력. 5가 정비율이다.",
                "remarkEng": "Specifies the size level of the grid. Enter a positive integer. 5 is the standard ratio."
            },
            {
                "name": "verticalAlign",
                "type": "String",
                "default": "center",
                "remarkKor": "grid cell의 기본 vertical-align을 설정한다. 'top', 'center', 'bottom'중 하나.",
                "remarkEng": "Sets the default vertical-align of the grid cell. Choose from 'top', 'center', 'bottom'."
            },
            {
                "name": "cellFontSize",
                "type": "Number",
                "default": "14",
                "remarkKor": "grid cell의 기본 font-size를 지정한다. 양의 정수를 삽입한다. 단위는 px이다.",
                "remarkEng": "Specifies the default font-size of the grid cell. Enter a positive integer. The unit is px."
            },
            {
                "name": "cellMinHeight",
                "type": "Number",
                "default": "21",
                "remarkKor": "grid cell의 기본 min-height를 지정한다. 양의 정수를 삽입한다. 단위는 px이다.",
                "remarkEng": "Specifies the default min-height of the grid cell. Enter a positive integer. The unit is px."
            },
            {
                "name": "horizenBorderSize",
                "type": "Number",
                "default": "1",
                "remarkKor": "grid cell의 horizen border size를 설정한다. px단위이며 0과 양의 정수를 삽입한다.",
                "remarkEng": "Sets the horizontal border size of the grid cell. The unit is px. Enter 0 or a positive integer."
            },
            {
                "name": "verticalBorderSize",
                "type": "Number",
                "default": "1",
                "remarkKor": "grid cell의 vertical border size를 설정한다. px단위이며 0과 양의 정수를 삽입한다.",
                "remarkEng": "Sets the vertical border size of the grid cell. The unit is px. Enter 0 or a positive integer."
            },
            {
                "name": "gridFontFamily",
                "type": "String",
                "default": "Arial",
                "remarkKor": "grid cell의 font-family를 설정한다. cssText의 font-family를 입력한다.",
                "remarkEng": "Sets the font-family of the grid cell. Enter the font-family in cssText."
            },
            {
                "name": "editorFontFamily",
                "type": "String",
                "default": "Arial",
                "remarkKor": "grid editor의 font-family를 설정한다. cssText의 font-family를 입력한다.",
                "remarkEng": "Sets the font-family of the grid editor. Enter the font-family in cssText."
            },
            {
                "name": "overflowWrap",
                "type": "String",
                "default": "null",
                "remarkKor": "grid cell의 overflow-wrap를 설정한다. cssText의 overflow-wrap를 입력한다.",
                "remarkEng": "Sets the overflow-wrap of the grid cell. Enter the overflow-wrap in cssText."
            },
            {
                "name": "wordBreak",
                "type": "String",
                "default": "null",
                "remarkKor": "grid cell의 word-break를 설정한다. cssText의 word-break를 입력한다.",
                "remarkEng": "Sets the word-break of the grid cell. Enter the word-break in cssText."
            },
            {
                "name": "whiteSpace",
                "type": "String",
                "default": "null",
                "remarkKor": "grid cell의 white-space를 설정한다. cssText의 white-space를 입력한다.",
                "remarkEng": "Sets the white-space of the grid cell. Enter the white-space in cssText."
            },
            {
                "name": "linkHasUnderLine",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "link type의 cell이 underLine을 표시할 지 여부를 설정한다.",
                "remarkEng": "Indicates whether to display the underline for link type cells."
            },
            {
                "name": "invertColor",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "grid의 색상을 반전한다.",
                "remarkEng": "Inverts the colors of the grid."
            },
            {
                "name": "colorSet",
                "type": "String",
                "default": "null",
                "remarkKor": "grid의 colorSet을 정한다. colorSet은 'skyblue', 'blue', 'light-red', 'red', 'light-green', 'green', 'orange', 'yellow', 'purple', 'brown', 'black' 이다.",
                "remarkEng": "Sets the color set of the grid. Color sets are 'skyblue', 'blue', 'light-red', 'red', 'light-green', 'green', 'orange', 'yellow', 'purple', 'brown', 'black'."
            },
            {
                "name": "color",
                "type": "String",
                "default": "#f3f3f3",
                "remarkKor": "grid의 main color를 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the main color of the grid. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "gridBorderColor",
                "type": "String",
                "default": "null",
                "remarkKor": "grid border의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the border color of the grid. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "headerCellBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "header cell background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the header cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "headerCellBorderColor",
                "type": "String",
                "default": "null",
                "remarkKor": "header cell border의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the border color of the header cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "headerCellFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "header cell font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the header cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "footerCellBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "footer cell background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the footer cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "footerCellBorderColor",
                "type": "String",
                "default": "null",
                "remarkKor": "footer cell border의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the border color of the footer cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "footerCellFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "footer cell font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the footer cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "bodyBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "grid body back-ground의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the grid body. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "bodyCellBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "grid body cell background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the grid body cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "bodyCellBorderColor",
                "type": "String",
                "default": "null",
                "remarkKor": "grid body cell border의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the border color of the grid body cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "bodyCellFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "grid body cell font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the grid body cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "editorBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "editor background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the editor. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "editorFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "editor font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the editor. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "selectCellBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "select cell(선택된 활성화 cell) background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the selected cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "selectCellFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "select cell(선택된 활성화 cell) font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the selected cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "selectColBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "select col(선택된 cell의 header) background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the selected column header. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "selectColFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "select col(선택된 cell의 header) font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the selected column header. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "selectRowBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "select row(선택된 cell과 같은 행의 cell들) background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the selected row. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "selectRowFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "select row(선택된 cell과 같은 행의 cell들) font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the selected row. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "mouseoverCellBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "mouse over cell(마우스가 위로 올라간 cell) background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the mouseover cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "mouseoverCellFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "mouse over cell(마우스가 위로 올라간 cell) font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the mouseover cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "lockCellBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "locked상태의 cell background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the locked cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "lockCellFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "locked상태의 cell editor font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the locked cell editor. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "alterRowBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "2번째 행들의 cell background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the alternate rows. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "alterRowFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "2번째 행들의 cell font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the alternate rows. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "buttonFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "button type cell font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the button type cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "buttonBorderColor",
                "type": "String",
                "default": "null",
                "remarkKor": "button type cell border의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the border color of the button type cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "buttonBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "button type cell background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the button type cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "buttonHoverFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "button type cell hover시 font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the button type cell on hover. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "buttonHoverBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "button type cell hover시 background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the button type cell on hover. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "buttonActiveFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "button type cell active시 font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the button type cell on active. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "buttonActiveBackColor",
                "type": "String",
                "default": "null",
                "remarkKor": "button type cell active시 background의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the button type cell on active. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "linkFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "link type cell font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the link type cell. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "linkHoverFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "link type cell hover시 font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the link type cell on hover. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "linkActiveFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "link type cell active시 font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the link type cell on active. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "linkVisitedFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "link type cell visited시 font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the link type cell on visited. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            },
            {
                "name": "linkFocusFontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "link type cell focus시 font의 색상을 설정한다. cssText 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the link type cell on focus. Enter the 16-digit color code in cssText. Ex) '#ffffff'"
            }
        ];        
        this.COLUMN_ATTRIBUTES = [
            {
                "name": "id",
                "type": "String",
                "default": "*required",
                "remarkKor": "필수 값. column의 id이다.",
                "remarkEng": "Required value. It is the id of the column."
            },
            {
                "name": "name",
                "type": "String",
                "default": "info.colId",
                "remarkKor": "column의 name. null일 시 grid Id가 삽입된다.",
                "remarkEng": "The name of the column. If null, the grid Id is inserted."
            },
            {
                "name": "header",
                "type": "String",
                "default": "info.colId",
                "remarkKor": "header text값. ';'를 구분자로 넣는다. 빈값은 자동으로 merge된다.",
                "remarkEng": "Header text value. Use ';' as the delimiter. Empty values are automatically merged."
            },
            {
                "name": "footer",
                "type": "String",
                "default": "null",
                "remarkKor": "footer를 ';' 구분자로 넣는다. 일반 text: 해당 문자열을 footer에 text로 삽입.\n"
                            + "$$MAX : 최대값을 계산해서 footer에 표기한다. $$MIN: 최소값을 계산해서 footer에 표기한다.\n"
                            + "$$SUM: 합계를 계산해서 footer에 표기한다. $$AVG: 평균을 계산해서 footer에 표기한다(null은 제외).",
                "remarkEng": "Insert the footer using ';' as the delimiter. General text: Insert the string as text in the footer.\n"
                            + "$$MAX: Calculate and display the maximum value in the footer. $$MIN: Calculate and display the minimum value in the footer.\n"
                            + "$$SUM: Calculate and display the sum in the footer. $$AVG: Calculate and display the average in the footer (excluding null)."
            },
            {
                "name": "dataType",
                "type": "String",
                "default": "text",
                "remarkKor": "column의 타입을 설정한다.\n"
                            + "text : 글자 입력 타입. 더블클릭 시 textarea 입력창이 생성된다.\n"
                            + "number : 숫자 입력 타입. 더블 클릭 시 input number type이 생성된다.\n"
                            + "date : 년월일 입력 타입. 더블 클릭 시 input date type이 생성된다.\n"
                            + "month : 년월 입력 타입. 더블 클릭 시 input month type이 생성된다.\n"
                            + "mask : format에 맞는 글자 입력 타입. 더블 클릭 시 input text type이 생성된다. format 속성으로 제어한다.\n"
                            + "select : input select 타입. value를 삽입 시 option을 받는다. Ex) [{value:\"val1\", text:\"text1\", selected:true},{value:\"val2\", text:\"text2\"}..]\n"
                            + "checkbox : input checkbox 타입. grid info의 checkedValue값과 같으면 checked, 다르면 unchecked이다.\n"
                            + "button : button 타입. 삽입되는 값이 button의 innerText로 표현된다. 값이 없으면 button이 생성되지 않는다.\n"
                            + "link : a 태그. {text:\"text\", value:\"https//..\", target:\"_blank\"} 객체 형식으로 값을 삽입한다. text는 innerText, value는 href, target은 target으로 설정.\n"
                            + "code : 지정된 codes외에는 값을 갖거나 표현될 수 없는 타입이다. nullValue도 codes에 없다면 허용되지 않는다. 빈 값은 defaultCode로 저장된다.",
                "remarkEng": "Sets the type of the column.\n"
                            + "text: Text input type. A textarea input box is created on double click.\n"
                            + "number: Number input type. An input number type is created on double click.\n"
                            + "date: Date input type. An input date type is created on double click.\n"
                            + "month: Month input type. An input month type is created on double click.\n"
                            + "mask: Text input type that matches the format. An input text type is created on double click. Controlled by the format attribute.\n"
                            + "select: Input select type. Options are received when inserting values. Ex) [{value:\"val1\", text:\"text1\", selected:true},{value:\"val2\", text:\"text2\"}..]\n"
                            + "checkbox: Input checkbox type. Checked if it matches the checkedValue of the grid info, unchecked otherwise.\n"
                            + "button: Button type. The inserted value is displayed as the innerText of the button. If there is no value, the button is not created.\n"
                            + "link: a tag. Insert the value as an object in the form {text:\"text\", value:\"https://..\", target:\"_blank\"}. The text is set as innerText, the value as href, and the target as target.\n"
                            + "code: A type that cannot have or display values other than the specified codes. If nullValue is not in the codes, it is not allowed. Empty values are stored as defaultCode."
            },
            {
                "name": "width",
                "type": "String",
                "default": "80px",
                "remarkKor": "column의 width. cssText를 삽입한다. 숫자만 입력 시 'px'단위.",
                "remarkEng": "The width of the column. Insert cssText. If only a number is entered, the unit is 'px'."
            },
            {
                "name": "untarget",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "untarget이 true일 시 해당 column의 cell을 선택할 수 없다.",
                "remarkEng": "If untarget is true, the cells in this column cannot be selected."
            },
            {
                "name": "rowMerge",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "rowMerge가 true일 시 해당 column은 위 cell의 값과 dataType, format이 동일하면 윗 cell을 기준으로 row merge한다.",
                "remarkEng": "If rowMerge is true, this column merges rows based on the cell above if the value, dataType, and format are the same."
            },
            {
                "name": "colMerge",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "colMerge가 true일 시 해당 column은 가로축 앞의 cell의 값과 dataType, format이 동일하면 앞 cell을 기준으로 col merge한다.",
                "remarkEng": "If colMerge is true, this column merges columns based on the cell in front if the value, dataType, and format are the same."
            },
            {
                "name": "visible",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "visible이 false일 시 해당 column은 width가 0이되고 size변경을 할 수 없다.(숨김처리)",
                "remarkEng": "If visible is false, this column's width becomes 0 and size cannot be changed (hidden)."
            },
            {
                "name": "required",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "required가 true일 시 해당 column은 checkRequired() 메소드를 통해 입력 체크를 할 수 있다.",
                "remarkEng": "If required is true, this column can be checked for input using the checkRequired() method."
            },
            {
                "name": "resizable",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "resizable이 false일 시 사용자는 해당 column의 width size를 변경 할 수 없다.",
                "remarkEng": "If resizable is false, the user cannot change the width size of this column."
            },
            {
                "name": "sortable",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "사용자의 해당 column의 정렬 기능 사용 여부.",
                "remarkEng": "Indicates whether the user can use the sorting feature for this column."
            },
            {
                "name": "filterable",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "사용자의 해당 column의 필터 기능 사용 여부.",
                "remarkEng": "Indicates whether the user can use the filtering feature for this column."
            },
            {
                "name": "selectSize",
                "type": "String",
                "default": "100%",
                "remarkKor": "해당 column의 select width size를 정한다. cssText를 삽입하며, 단위는 px, % 두개만 가능하다.",
                "remarkEng": "Sets the select width size for this column. Insert cssText. The unit can only be px or %."
            },
            {
                "name": "locked",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "locked가 true일 시 해당 column의 cell을 변경할 수 없다.",
                "remarkEng": "If locked is true, the cells in this column cannot be changed."
            },
            {
                "name": "lockedColor",
                "type": "Boolean",
                "default": "true",
                "remarkKor": "lockedColor가 true일 시 해당 column의 cell이 locked상태이면 locked상태를 배경색으로 표현한다.",
                "remarkEng": "If lockedColor is true, the cells in this column will display a background color indicating the locked state when locked."
            },
            {
                "name": "format",
                "type": "String",
                "default": "null",
                "remarkKor": "dataType이 mask, number에 대한 format을 설정한다.\n"
                            + "Mask format : A : 대문자, a : 소문자, 9 : 숫자, 그외는 일치하는 문자를 받는다.\n"
                            + "Number format :\n"
                            + "정수 부 :\n"
                            + "\"#,###\" : 세자리수 컴마로 0이면 null 표기, \"#,##0\" : 세자리수 컴마로 0이면 0 표기,\n"
                            + "\"#\" : 숫자 그대로 표기. 0이면 null표기, \"0\", : 숫자 그대로 표기. 0이면 0표기\n"
                            + "소수부 : \"#\" : 있으면 표기, \"0\" 없으면 0으로 표기.\n"
                            + " 그외 : 앞 뒤 문자는 문자 그대로 표기, 뒤 문자가 \"%\"이면 자동 백분율 표기\n"
                            + "Ex1) format : \"#,##0.## $\", 숫자 : 1234.1234 => 결과 : \"1,234.12 $\"\n"
                            + "Ex2) format : \"0%\", 숫자 : 0.12 => 결과 : \"12 %\"",
                "remarkEng": "Sets the format for dataType mask, number.\n"
                            + "Mask format: A: Uppercase letter, a: Lowercase letter, 9: Number, others: Matching character.\n"
                            + "Number format:\n"
                            + "Integer part:\n"
                            + "\"#,###\": Display with thousand separators, 0 is displayed as null, \"#,##0\": Display with thousand separators,\n"
                            + "0 is displayed as 0, \"#\": Display as is, 0 is displayed as null, \"0\": Display as is, 0 is displayed as 0.\n"
                            + "Decimal part: \"#\": Display if present, \"0\": Display as 0 if not present.\n"
                            + "Others: Characters before and after are displayed as is, and if the last character is \"%\", it is displayed as a percentage.\n"
                            + "Ex1) format: \"#,##0.## $\", number: 1234.1234 => result: \"1,234.12 $\"\n"
                            + "Ex2) format: \"0%\", number: 0.12 => result: \"12 %\""
            },
            {
                "name": "codes",
                "type": "String",
                "default": "null",
                "remarkKor": "dataType 이 code인 column에만 유효하다. \";\"를 구분자로한 코드를 설정한다. 해당 column은 정해진 코드값만 갖을 수 있다.  Ex) \"A1;A2;B1;B2\" => A1, A2, B1, B2의 값만을 갖을 수 있음.",
                "remarkEng": "Valid only for columns with dataType code. Sets codes separated by \";\". This column can only have the specified code values. Ex) \"A1;A2;B1;B2\" => Can only have the values A1, A2, B1, B2."
            },
            {
                "name": "defaultCode",
                "type": "String",
                "default": "null",
                "remarkKor": "dataType 이 code인 column에만 유효하다. dataType이 code인 column의 value가 없는 경우 grid.info의 nullValue가 아닌 defaultCode를 value로 갖는다.",
                "remarkEng": "Valid only for columns with dataType code. If a column with dataType code has no value, the defaultCode is used as the value instead of grid.info's nullValue."
            },
            {
                "name": "maxLength",
                "type": "Number",
                "default": "null",
                "remarkKor": "dataType 이 text인 column에만 유효하다. value에 최대로 삽입할 수 있는 문자열 길이를 정한다. 양의 정수만 입력",
                "remarkEng": "Valid only for columns with dataType text. Sets the maximum string length that can be inserted into the value. Enter only positive integers."
            },
            {
                "name": "maxByte",
                "type": "Number",
                "default": "null",
                "remarkKor": "dataType 이 text인 column에만 유효하다. value에 최대로 삽입할 수 있는 문자열 byte 크기를 정한다. 양의 정수만 입력  Byte크기 기준은 vg.lessoreq0x7ffByte, vg.lessoreq0xffffByte, vg.greater0xffffByte로 설정한다.  lessoreq0x7ffByte : charCode가 ASCⅡ 0x7FF 이하인 문자, default값은 2. (UTF-8 기준 일반 기호 또는 일반 알파뱃)  lessoreq0xffffByte : charCode가 ASCⅡ 0xFFFF 이하인 문자, default값은 3. (UTF-8 기준 라틴어 등 추가 알파뱃)  greater0xffffByte : charCode가 ASCⅡ 0xFFFF 이하인 문자, default값은 4. (UTF-8 이모지, 한국어, 중국어, 일본어 등 다국 문자)",
                "remarkEng": "Valid only for columns with dataType text. Sets the maximum byte size of the string that can be inserted into the value. Enter only positive integers. Byte size criteria are set with vg.lessoreq0x7ffByte, vg.lessoreq0xffffByte, vg.greater0xffffByte. lessoreq0x7ffByte: Characters with charCode less than or equal to 0x7FF, default value is 2 (common symbols or English alphabet based on UTF-8). lessoreq0xffffByte: Characters with charCode less than or equal to 0xFFFF, default value is 3 (additional alphabets such as Latin based on UTF-8). greater0xffffByte: Characters with charCode greater than 0xFFFF, default value is 4 (emoji, Korean, Chinese, Japanese, etc. based on UTF-8)."
            },
            {
                "name": "maxNumber",
                "type": "Number",
                "default": "null",
                "remarkKor": "dataType 이 number인 column에만 유효하다. 최대값을 지정한다. 이상의 값이 입력 시 최대값으로 저장됨. 숫자만 입력.",
                "remarkEng": "Valid only for columns with dataType number. Sets the maximum value. If a value exceeding this is entered, it is stored as the maximum value. Enter only numbers."
            },
            {
                "name": "minNumber",
                "type": "Number",
                "default": "null",
                "remarkKor": "dataType 이 number인 column에만 유효하다. 최소값을 지정한다. 이상의 값이 입력 시 최소값으로 저장됨. 숫자만 입력.",
                "remarkEng": "Valid only for columns with dataType number. Sets the minimum value. If a value below this is entered, it is stored as the minimum value. Enter only numbers."
            },
            {
                "name": "roundNumber",
                "type": "Number",
                "default": "null",
                "remarkKor": "dataType 이 number인 column에만 유효하다. 반올림 자리수를 지정한다.  roundNumber 양의 정수 : 반올림 할 소수점 자리 지정.  roundNumber 음의 정수 : 반올림 할 정수부 자리 지정.  Ex) roundNumber : 2, 숫자 : 1234.1234 => 결과 : 1234.12  Ex) roundNumber : -2, 숫자 : 1234.1234 => 결과 : 1200",
                "remarkEng": "Valid only for columns with dataType number. Specifies the rounding place. roundNumber positive integer: Specifies the decimal place to round. roundNumber negative integer: Specifies the integer place to round. Ex) roundNumber: 2, number: 1234.1234 => result: 1234.12 Ex) roundNumber: -2, number: 1234.1234 => result: 1200"
            },
            {
                "name": "align",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 align을 설정한다. 'left', 'center', 'right'중 하나. 값을 지정하지 않을 시 dataType에 따른 기본 align을 따라간다.  text, mask : left, number : right, date, month, code, select, checkbox, button, link : center.",
                "remarkEng": "Sets the align of the column. Choose from 'left', 'center', 'right'. If no value is specified, the default align follows the dataType. text, mask: left, number: right, date, month, code, select, checkbox, button, link: center."
            },
            {
                "name": "verticalAlign",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 기본 vertical-align을 설정한다. 'top', 'center', 'bottom'중 하나. 값을 지정하지 않을 시 center",
                "remarkEng": "Sets the default vertical-align of the column. Choose from 'top', 'center', 'bottom'. If no value is specified, it defaults to center."
            },
            {
                "name": "overflowWrap",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 기본 overflow-wrap를 설정한다. cssText의 overflow-wrap를 입력한다.",
                "remarkEng": "Sets the default overflow-wrap of the column. Enter the overflow-wrap in cssText."
            },
            {
                "name": "wordBreak",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 기본 word-break를 설정한다. cssText의 word-break를 입력한다.",
                "remarkEng": "Sets the default word-break of the column. Enter the word-break in cssText."
            },
            {
                "name": "whiteSpace",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 기본 white-space를 설정한다. cssText의 white-space를 입력한다.",
                "remarkEng": "Sets the default white-space of the column. Enter the white-space in cssText."
            },
            {
                "name": "backColor",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 background-color를 설정한다. cssText 16진수 색상을 삽입한다. Ex) \"#ffffff\"",
                "remarkEng": "Sets the background color of the column. Insert the 16-digit color code in cssText. Ex) \"#ffffff\""
            },
            {
                "name": "fontColor",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 font-color를 설정한다. cssText 16진수 색상을 삽입한다. Ex) \"#ffffff\"",
                "remarkEng": "Sets the font color of the column. Insert the 16-digit color code in cssText. Ex) \"#ffffff\""
            },
            {
                "name": "fontBold",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "fontBold가 true이면 column의 cell의 innerText가 굵은 글씨.",
                "remarkEng": "If fontBold is true, the innerText of the column's cells will be bold."
            },
            {
                "name": "fontItalic",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "fontItalic이 true이면 column의 cell의 innerText가 기울은 글씨.",
                "remarkEng": "If fontItalic is true, the innerText of the column's cells will be italic."
            },
            {
                "name": "fontThruline",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "fontThruline이 true이면 column의 cell의 innerText가 취소선 글씨.",
                "remarkEng": "If fontThruline is true, the innerText of the column's cells will have a strikethrough."
            },
            {
                "name": "fontUnderline",
                "type": "Boolean",
                "default": "false",
                "remarkKor": "fontUnderline이 true이면 column의 cell의 innerText가 밑줄 글씨.",
                "remarkEng": "If fontUnderline is true, the innerText of the column's cells will be underlined."
            }
        ];
        this.EVENTS = [
            {
                "name": "onActiveCell",
                "param": "row(Number), colId(String)",
                "remarkKor": "cell 선택 시 cell 활성화 전 이벤트 발생. _onActiveCell > _onAcriveRow > _onActiveCol > cell 선택 순으로 이벤트 발생. false 반환 시 cell 선택 막음.",
                "remarkEng": "Event occurs before cell activation when a cell is selected. The event order is _onActiveCell > _onAcriveRow > _onActiveCol > cell selection. Returning false prevents cell selection."
            },
            {
                "name": "onActiveRow",
                "param": "row(Number)",
                "remarkKor": "cell 선택 시 cell 활성화 전 이벤트 발생. _onActiveCell > _onAcriveRow > _onActiveCol > cell 선택 순으로 이벤트 발생. false 반환 시 cell 선택 막음.",
                "remarkEng": "Event occurs before row activation when a cell is selected. The event order is _onActiveCell > _onAcriveRow > _onActiveCol > cell selection. Returning false prevents cell selection."
            },
            {
                "name": "onActiveCol",
                "param": "colId(String)",
                "remarkKor": "cell 선택 시 cell 활성화 전 이벤트 발생. _onActiveCell > _onAcriveRow > _onActiveCol > cell 선택 순으로 이벤트 발생. false 반환 시 cell 선택 막음.",
                "remarkEng": "Event occurs before column activation when a cell is selected. The event order is _onActiveCell > _onAcriveRow > _onActiveCol > cell selection. Returning false prevents cell selection."
            },
            {
                "name": "onActiveCells",
                "param": "startRow(Number), startColId(String), endRow(Number), endColId(String)",
                "remarkKor": "다중 cell 선택 시 cell 활성화 전 이벤트 발생. _onActiveCells > _onAcriveRows > _onActiveCols > cell 선택 순으로 이벤트 발생. false 반환 시 cell 선택 막음.",
                "remarkEng": "Event occurs before multiple cell activation when multiple cells are selected. The event order is _onActiveCells > _onAcriveRows > _onActiveCols > cell selection. Returning false prevents cell selection."
            },
            {
                "name": "onActiveRows",
                "param": "startRow(Number), endRow(Number)",
                "remarkKor": "다중 cell 선택 시 cell 활성화 전 이벤트 발생. _onActiveCells > _onAcriveRows > _onActiveCols > cell 선택 순으로 이벤트 발생. false 반환 시 cell 선택 막음.",
                "remarkEng": "Event occurs before multiple row activation when multiple cells are selected. The event order is _onActiveCells > _onAcriveRows > _onActiveCols > cell selection. Returning false prevents cell selection."
            },
            {
                "name": "onActiveCols",
                "param": "startColId(String), endColId(String)",
                "remarkKor": "다중 cell 선택 시 cell 활성화 전 이벤트 발생. _onActiveCells > _onAcriveRows > _onActiveCols > cell 선택 순으로 이벤트 발생. false 반환 시 cell 선택 막음.",
                "remarkEng": "Event occurs before multiple column activation when multiple cells are selected. The event order is _onActiveCells > _onAcriveRows > _onActiveCols > cell selection. Returning false prevents cell selection."
            },
            {
                "name": "onBeforeChange",
                "param": "row(Number), colId(String), oldValue(var), newValue(var)",
                "remarkKor": "cell value 변경 전 이벤트 발생. false 반환 시 cell 변경 막음.",
                "remarkEng": "Event occurs before cell value change. Returning false prevents the cell change."
            },
            {
                "name": "onAfterChange",
                "param": "row(Number), colId(String), oldValue(var), newValue(var)",
                "remarkKor": "cell value 변경 후 이벤트 발생.",
                "remarkEng": "Event occurs after cell value change."
            },
            {
                "name": "onBeforeClickCell",
                "param": "row(Number), colId(String)",
                "remarkKor": "cell 클릭 전 이벤트 발생. false 반환 시 cell 클릭 막음.",
                "remarkEng": "Event occurs before cell click. Returning false prevents the cell click."
            },
            {
                "name": "onAfterClickCell",
                "param": "row(Number), colId(String)",
                "remarkKor": "cell 클릭 후 이벤트 발생.",
                "remarkEng": "Event occurs after cell click."
            },
            {
                "name": "onClickSelect",
                "param": "row(Number), colId(String), selectNode(htmlNode)",
                "remarkKor": "cell dataType이 select 일 경우 cell 클릭 시 이벤트 발생. onBeforeClickCell 이벤트 후에 발생한다. false 반환 시 cell 클릭 막음.",
                "remarkEng": "Event occurs when a cell with dataType select is clicked. It occurs after the onBeforeClickCell event. Returning false prevents the cell click."
            },
            {
                "name": "onClickCheckbox",
                "param": "row(Number), colId(String), checkboxNode(htmlNode)",
                "remarkKor": "cell dataType이 checkbox 일 경우 cell 클릭 시 이벤트 발생. onBeforeClickCell 이벤트 후에 발생한다. false 반환 시 cell 클릭 막음.",
                "remarkEng": "Event occurs when a cell with dataType checkbox is clicked. It occurs after the onBeforeClickCell event. Returning false prevents the cell click."
            },
            {
                "name": "onClickButton",
                "param": "row(Number), colId(String), buttonNode(htmlNode)",
                "remarkKor": "cell dataType이 button 일 경우 cell 클릭 시 이벤트 발생. onBeforeClickCell 이벤트 후에 발생한다. false 반환 시 cell 클릭 막음.",
                "remarkEng": "Event occurs when a cell with dataType button is clicked. It occurs after the onBeforeClickCell event. Returning false prevents the cell click."
            },
            {
                "name": "onClickLink",
                "param": "row(Number), colId(String), linkNode(htmlNode)",
                "remarkKor": "cell dataType이 link 일 경우 cell 클릭 시 이벤트 발생. onBeforeClickCell 이벤트 후에 발생한다. false 반환 시 cell 클릭 막음.",
                "remarkEng": "Event occurs when a cell with dataType link is clicked. It occurs after the onBeforeClickCell event. Returning false prevents the cell click."
            },
            {
                "name": "onBeforeDblClickCell",
                "param": "row(Number), colId(String)",
                "remarkKor": "cell 더블 클릭 전 이벤트 발생 false 반환 시 cell 더블 클릭 이벤트 막음.",
                "remarkEng": "Event occurs before cell double click. Returning false prevents the cell double click event."
            },
            {
                "name": "onAfterDblClickCell",
                "param": "row(Number), colId(String)",
                "remarkKor": "cell 더블 클릭 후 이벤트 발생.",
                "remarkEng": "Event occurs after cell double click."
            },
            {
                "name": "onBeforeClickHeader",
                "param": "row(Number), colId(String)",
                "remarkKor": "header cell 클릭 전 이벤트 발생. false 반환 시 header cell 클릭 막음.",
                "remarkEng": "Event occurs before header cell click. Returning false prevents the header cell click."
            },
            {
                "name": "onAfterClickHeader",
                "param": "row(Number), colId(String)",
                "remarkKor": "header cell 클릭 후 이벤트 발생.",
                "remarkEng": "Event occurs after header cell click."
            },
            {
                "name": "onBeforeDblClickHeader",
                "param": "row(Number), colId(String)",
                "remarkKor": "header cell 더블 클릭 전 이벤트 발생 false 반환 시 header cell 더블 클릭 이벤트 막음.",
                "remarkEng": "Event occurs before header cell double click. Returning false prevents the header cell double click event."
            },
            {
                "name": "onAfterDblClickHeader",
                "param": "row(Number), colId(String)",
                "remarkKor": "header cell 더블 클릭 후 이벤트 발생.",
                "remarkEng": "Event occurs after header cell double click."
            },
            {
                "name": "onEditEnter",
                "param": "row(Number), colId(String), editorNode(htmlNode)",
                "remarkKor": "cell editing 시작 시 발생하는 이벤트. false 반환 시 editing 막음.",
                "remarkEng": "Event occurs when cell editing starts. Returning false prevents editing."
            },
            {
                "name": "onEditEnding",
                "param": "row(Number), colId(String), oldValue(var), newValue(var)",
                "remarkKor": "cell editing 종료 후 발생하는 이벤트.",
                "remarkEng": "Event occurs after cell editing ends."
            },
            {
                "name": "onClickFilter",
                "param": "row(Number), colId(String), filterNode(htmlNode)",
                "remarkKor": "column의 filter 버튼을 클릭 시 발생하는 이벤트. false 반환 시 filter를 오픈하지 않는다.",
                "remarkEng": "Event occurs when the column's filter button is clicked. Returning false prevents the filter from opening."
            },
            {
                "name": "onChooseFilter",
                "param": "row(Number), colId(String), oldValue(var), newValue(var)",
                "remarkKor": "filter 값을 선택 시 발생하는 이벤트. false 반환 시 filter를 적용하지 않는다.",
                "remarkEng": "Event occurs when a filter value is selected. Returning false prevents the filter from being applied."
            },
            {
                "name": "onPaste",
                "param": "startRow(Number), startColId(String), clipboardText(String)",
                "remarkKor": "cell에 붙여넣기 시 발생하는 이벤트. start row와 colId는 현재 target cell의 row와 colId이다. clipboardText는 window.clipboardData.getData(\"text\") 값이다.  false 반환 시 붙여넣기를 막음.",
                "remarkEng": "Event occurs when pasting into a cell. The start row and colId are the row and colId of the current target cell. clipboardText is the value of window.clipboardData.getData(\"text\"). Returning false prevents the paste."
            },
            {
                "name": "onCopy",
                "param": "startRow(Number), startColId(String), endRow(Number), endColId(String), copyText(String)",
                "remarkKor": "cell에 값을 복사할 때 발생하는 이벤트. copyText는 열은 \"\\t\", 행은 \"\\n\" 으로 연결된 문자열 값이다. false 반환 시 복사하기를 막음.",
                "remarkEng": "Event occurs when copying a cell value. copyText is a string value joined by \"\\t\" for columns and \"\\n\" for rows. Returning false prevents copying."
            },
            {
                "name": "onResize",
                "param": "colId(String)",
                "remarkKor": "사용자에 의한 column width size변경 시 발생하는 이벤트. false 반환 시 변경을 막음.",
                "remarkEng": "Event occurs when the column width size is changed by the user. Returning false prevents the change."
            },
            {
                "name": "onKeydownEditor",
                "param": "e(event)",
                "remarkKor": "cell editing중 키보드 입력 시 발생하는 이벤트. event 자체를 parameter로 받는다. false 반환 시 keydown 이벤트를 막음.  cell editing keydown 이벤트에 적용된 key 값 :   Enter : editor에 작성된 내용으로 cell 값을 변경하고 editing 종료. 활성화 cell을 하단으로 옮김.  Escape(ESC) : cell 값을 변경하지 않고 editing 종료.  Tab : editor에 작성된 내용으로 cell 값을 변경하고 editing 종료. 활성화 cell을 다음 cell로 옮김.  F2 : editor에 작성된 내용으로 cell 값을 변경하고 editing 종료.",
                "remarkEng": "Event occurs during cell editing when a keyboard input is detected. The event itself is passed as a parameter. Returning false prevents the keydown event. Key values applied to the cell editing keydown event: Enter: Changes the cell value to the content written in the editor and ends editing. Moves the active cell down. Escape (ESC): Ends editing without changing the cell value. Tab: Changes the cell value to the content written in the editor and ends editing. Moves the active cell to the next cell. F2: Changes the cell value to the content written in the editor and ends editing."
            },
            {
                "name": "onInputEditor",
                "param": "e(event)",
                "remarkKor": "cell editing중 editor에 input시 발생하는 이벤트. event 자체를 parameter로 받는다.",
                "remarkEng": "Event occurs during cell editing when input is detected in the editor. The event itself is passed as a parameter."
            },
            {
                "name": "onKeydownGrid",
                "param": "e(event)",
                "remarkKor": "grid에 focus를 둔채로 키보드 입력 시 발생하는 이벤트. event 자체를 parameter로 받는다. false 반환 시 keydown 이벤트를 막음.  grid keydown 이벤트에 적용된 key 값 :  ctrl + z : 실행 취소.  ctrl + y : 재실행.  ctrl + a : 전체 cell 선택.  Tab : 다음 cell로 활성화 cell 이동.  F2 : focus cell 편집.  Enter : focus cell 편집, 편집 시작 시 cell의 내용을 drag함. checkbox 경우 토글 후 아래이동. select 경우 combo 오픈.  Space bar : checkbox 경우 토글, select 경우 combobox 오픈, button, link 경우 click함.  ArrowUp(↑) : 위 cell로 활성화 cell 이동.  ArrowDown(↓) : 아래 cell로 활성화 cell 이동.  ArrowLeft(←) : 왼쪽 cell로 활성화 cell 이동.  ArrowRight(→) : 오른쪽 cell로 활성화 cell 이동.  shift + ArrowUp(↑) : 최초 활성화 cell을 기준으로 위 cell을 다중 cell 선택.  shift + ArrowDown(↓) : 최초 활성화 cell을 기준으로 아래 cell을 다중 cell 선택.  shift + ArrowLeft(←) : 최초 활성화 cell을 기준으로 왼쪽 cell을 다중 cell 선택.  shift + ArrowRight(→) : 최초 활성화 cell을 기준으로 오른쪽 cell을 다중 cell 선택.",
                "remarkEng": "Event occurs when a keyboard input is detected while the grid is focused. The event itself is passed as a parameter. Returning false prevents the keydown event. Key values applied to the grid keydown event: ctrl + z: Undo. ctrl + y: Redo. ctrl + a: Select all cells. Tab: Move active cell to next cell. F2: Edit focus cell. Enter: Edit focus cell, drag cell content when editing starts. Checkbox: Toggle and move down. Select: Open combo. Space bar: Toggle checkbox, open combobox for select, click for button and link. ArrowUp (↑): Move active cell up. ArrowDown (↓): Move active cell down. ArrowLeft (←): Move active cell left. ArrowRight (→): Move active cell right. shift + ArrowUp (↑): Multi-select cells above based on the initial active cell. shift + ArrowDown (↓): Multi-select cells below based on the initial active cell. shift + ArrowLeft (←): Multi-select cells to the left based on the initial active cell. shift + ArrowRight (→): Multi-select cells to the right based on the initial active cell."
            }
        ];
        this.METHODS = [
            {
                "related": "header",
                "name": "getHeaderRowCount",
                "param": "",
                "return": "Number",
                "remarkKor": "헤더 행의 개수를 반환한다.",
                "remarkEng": "Returns the number of header rows."
            },
            {
                "related": "header",
                "name": "getHeaderText",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 헤더를 ';'로 join한 문자열을 반환한다.",
                "remarkEng": "Returns a string joined by ';' of the header of the colId or colIndex column."
            },
            {
                "related": "header",
                "name": "setHeaderText",
                "param": "colId(String) or colIndex(Number), headerValue(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 헤더를 ';'로 구분된 문자열인 headerValue로 변환한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the header of the colId or colIndex column to headerValue, a string separated by ';'. Returns true if it operates normally."
            },
            {
                "related": "header",
                "name": "reloadFilterValue",
                "param": "",
                "return": "Boolean",
                "remarkKor": "전체 filter를 갱신한다. 강제로 값을 변경하는 등의 처리 후 사용한다. 정상 동작 시 true 반환.",
                "remarkEng": "Refreshes all filters. Used after forcibly changing values. Returns true if it operates normally."
            },
            {
                "related": "header",
                "name": "reloadColFilter",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 filter를 갱신한다. 강제로 값을 변경하는 등의 처리 후 사용한다. 정상 동작 시 true 반환.",
                "remarkEng": "Refreshes the filter of the colId or colIndex column. Used after forcibly changing values. Returns true if it operates normally."
            },
            {
                "related": "footer",
                "name": "getFooterRowCount",
                "param": "",
                "return": "Number",
                "remarkKor": "풋터 행의 개수를 반환한다.",
                "remarkEng": "Returns the number of footer rows."
            },
            {
                "related": "footer",
                "name": "reloadFooterValue",
                "param": "",
                "return": "Boolean",
                "remarkKor": "전체 footer를 갱신한다. 강제로 값을 변경하는 등의 처리 후 사용한다. 정상 동작 시 true 반환.",
                "remarkEng": "Refreshes all footers. Used after forcibly changing values. Returns true if it operates normally."
            },
            {
                "related": "footer",
                "name": "setFooterValue",
                "param": "rowIndex(Number), colId(String) or colIndex(Number), footerValue(String)",
                "return": "Boolean",
                "remarkKor": "rowIndex 행, colId or colIndex 열의 footer의 값을 설정한다. 정상 동작 시 true 반환. footer가 갱신되면 값이 변경 될 수 있다.",
                "remarkEng": "Sets the footer value of the rowIndex row and colId or colIndex column. Returns true if it operates normally. The value may change when the footer is refreshed."
            },
            {
                "related": "footer",
                "name": "getFooterValue",
                "param": "rowIndex(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "rowIndex 행, colId or colIndex 열의 footer의 값을 반환한다.",
                "remarkEng": "Returns the footer value of the rowIndex row and colId or colIndex column."
            },
            {
                "related": "footer",
                "name": "setFooterFormula",
                "param": "colId(String) or colIndex(Number), formula(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex열의 footer의 formula값을 ';'로 구분된 문자열인 formula로 설정한다. 정상 동작 시 true 반환. Ex) $$MAX;$$MIN;$$SUM;$$AVG",
                "remarkEng": "Sets the footer formula of the colId or colIndex column to formula, a string separated by ';'. Returns true if it operates normally. Ex) $$MAX;$$MIN;$$SUM;$$AVG"
            },
            {
                "related": "footer",
                "name": "getFooterFormula",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex열에 정의된 formula의 값을 ';'로 구분된 문자열로 반환한다.",
                "remarkEng": "Returns the formula value defined in the colId or colIndex column as a string separated by ';'."
            },
            {
                "related": "footer",
                "name": "setFooterFunction",
                "param": "rowIndex(Number), colId(String) or colIndex(Number),  userFunction(function)",
                "return": "Boolean",
                "remarkKor": "rowIndex 행, colId or colIndex 열의 footer에 function을 정의한다. 정상 동작 시 true 반환. 해당 function은 파라메터로 grid의 getValues()의 결과값이 주어진다.",
                "remarkEng": "Defines a function in the footer of the rowIndex row and colId or colIndex column. Returns true if it operates normally. The function is given the result of the grid's getValues() as a parameter."
            },
            {
                "related": "body",
                "name": "getGridInfo",
                "param": "",
                "return": "Object",
                "remarkKor": "해당 grid의 정보를 반환한다.",
                "remarkEng": "Returns the information of the grid."
            },
            {
                "related": "body",
                "name": "load",
                "param": "keyValueOrDatas ([{},{}...] or [[{},{}...]...])",
                "return": "Boolean",
                "remarkKor": "grid에 데이터를 load한다. 정상 동작 시 true 반환. keyValue의 형식은 [{col1:'value1-1', col2: 'value1-2'}, {col1:'value2-1', col2:'value2-2'}] Datas의 형식은 [[{id:'col1', value:'value1-1'}, {id:'col2', value:'value1-2'}], [{id:'col1', value:'value2-1'}, {id:'col2', value:'value2-2'}]]",
                "remarkEng": "Loads data into the grid. Returns true if it operates normally. The format of keyValue is [{col1:'value1-1', col2: 'value1-2'}, {col1:'value2-1', col2:'value2-2'}] The format of Datas is [[{id:'col1', value:'value1-1'}, {id:'col2', value:'value1-2'}], [{id:'col1', value:'value2-1'}, {id:'col2', value:'value2-2'}]]"
            },
            {
                "related": "body",
                "name": "clear",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid에 모든 데이터를 clear한다. 정상 동작 시 true 반환.",
                "remarkEng": "Clears all data in the grid. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "clearStatus",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid의 모든 상태 변경 컬럼(v-g-status)을 초기화 한다. 정상 동작 시 true 반환.",
                "remarkEng": "Resets all status change columns (v-g-status) of the grid. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "getRowCount",
                "param": "",
                "return": "Number",
                "remarkKor": "grid 데이터 행의 개수를 반환한다.",
                "remarkEng": "Returns the number of grid data rows."
            },
            {
                "related": "body",
                "name": "getColCount",
                "param": "",
                "return": "Number",
                "remarkKor": "grid 컬럼의 개수를 반환한다.",
                "remarkEng": "Returns the number of grid columns."
            },
            {
                "related": "body",
                "name": "getValues",
                "param": "",
                "return": "Array",
                "remarkKor": "keyValue의 형식으로 데이터를 반환한다. 키와 값만 정의된 객체를 요소로 하는 배열 Ex) [{col1:'value1-1', col2: 'value1-2'}, {col1:'value2-1', col2:'value2-2'}]",
                "remarkEng": "Returns data in keyValue format. An array of objects defined only by keys and values. Ex) [{col1:'value1-1', col2: 'value1-2'}, {col1:'value2-1', col2:'value2-2'}]"
            },
            {
                "related": "body",
                "name": "getDatas",
                "param": "",
                "return": "Array",
                "remarkKor": "Datas의 형식으로 데이터를 반환한다. 각 cell의 값과 정보까지 정의된 객체의 배열(column)의 배열(row) Ex) [[{id:'col1', value:'value1-1'}, {id:'col2', value:'value1-2'}], [{id:'col1', value:'value2-1'}, {id:'col2', value:'value2-2'}]]",
                "remarkEng": "Returns data in Datas format. An array of arrays (rows) of objects (columns) defined by each cell's value and information. Ex) [[{id:'col1', value:'value1-1'}, {id:'col2', value:'value1-2'}], [{id:'col1', value:'value2-1'}, {id:'col2', value:'value2-2'}]]"
            },
            {
                "related": "body",
                "name": "sort",
                "param": "colId(String) or colIndex(Number), isAsc(Boolean) = true,  isNumSort(Boolean) = false",
                "return": "Boolean",
                "remarkKor": "colId or colIndex열을 정렬한다. 정상 동작 시 true 반환. isAsc가 true이면 오름차순 정렬 아니면 내림차순정렬, isNumSort가 true이면 문자열 타입도 숫자형식으로 정렬한다.",
                "remarkEng": "Sorts the colId or colIndex column. Returns true if it operates normally. Ascending order if isAsc is true, otherwise descending order. Sorts string types as numeric if isNumSort is true."
            },
            {
                "related": "body",
                "name": "checkRequired",
                "param": "userFunction(function)",
                "return": "Boolean",
                "remarkKor": "각 cell을 순회하며 isRequired가 true인데 null인 cell이 조회되면 해당 cell의 getCellData()된 정보를 파라메터로 userFunction을 호출한다. userFunction이 없으면 자동 적용된 이벤트를 발생한다.(오류 메시지 후 해당 cell을 editCell로 전환) userFunction이 false를 반환하면 해당 cell을 editCell로 전환하지 않는다. 하나라도 필수 cell에 값이 없으면 false를 반환.",
                "remarkEng": "Iterates over each cell and calls userFunction with getCellData() information of any cell where isRequired is true and the cell is null. If userFunction is not provided, an automatically applied event occurs (error message followed by switching the cell to editCell). If userFunction returns false, the cell is not switched to editCell. Returns false if any required cell is missing a value."
            },
            {
                "related": "body",
                "name": "setGridMount",
                "param": "isGridMount(Boolean)",
                "return": "Boolean",
                "remarkKor": "isGridMount가 false이면 해당 grid를 재 mount 하지않는다. 정상 동작 시 true 반환. addRow등 메소드를 호출할 때마다 grid를 다시 그리는 기능이 많아 시스템 부하가 발생 할 수 있다. grid조작 기능 진행 전 setGridMount(false) 처리 후 모든 grid조작 기능을 완료 후 setGridMount(true) 처리를 하면 시스템 부하를 줄일 수 있다. setGridMount(true) 호출 시 변경된 사항이 적용된 그리드를 한번에 다시 로드한다.",
                "remarkEng": "If isGridMount is false, the grid is not remounted. Returns true if it operates normally. Frequent redrawing of the grid when calling methods like addRow can cause system load. Set setGridMount(false) before performing grid operations and set setGridMount(true) after all grid operations are completed to reduce system load. When setGridMount(true) is called, the grid with the applied changes is reloaded at once."
            },
            {
                "related": "body",
                "name": "getGridFilter",
                "param": "",
                "return": "Array",
                "remarkKor": "현재 filter로 설정된 값을 반환한다.",
                "remarkEng": "Returns the current filter settings."
            },
            {
                "related": "body",
                "name": "setGridWidth",
                "param": "cssTextWidth(String)",
                "return": "Boolean",
                "remarkKor": "grid의 width를 지정한다. 정상 동작 시 true 반환. css text를 입력해야한다. Ex) '100%'",
                "remarkEng": "Sets the width of the grid. Returns true if it operates normally. CSS text must be entered. Ex) '100%'"
            },
            {
                "related": "body",
                "name": "setGridHeight",
                "param": "cssTextHeight(String)",
                "return": "Boolean",
                "remarkKor": "grid의 height를 지정한다. 정상 동작 시 true 반환. css text를 입력해야한다. Ex) '900px'",
                "remarkEng": "Sets the height of the grid. Returns true if it operates normally. CSS text must be entered. Ex) '900px'"
            },
            {
                "related": "body",
                "name": "setGridSizeLevel",
                "param": "sizeLevel(Number)",
                "return": "Boolean",
                "remarkKor": "grid의 size level을 지정한다. 양의 정수를 입력. 5가 정비율이다. 정상 동작 시 true 반환.",
                "remarkEng": "Specifies the size level of the grid. Enter a positive integer. 5 is the standard ratio. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "setGridVerticalAlign",
                "param": "verticalAlign(String)",
                "return": "Boolean",
                "remarkKor": "grid cell의 기본 vertical-align을 설정한다. 'top', 'center', 'bottom'중 하나. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the default vertical-align of the grid cell. Choose from 'top', 'center', 'bottom'. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "setCellFontSize",
                "param": "cssTextFontSize(String)",
                "return": "Boolean",
                "remarkKor": "grid cell의 기본 font-size를 지정한다. 정상 동작 시 true 반환. css text를 입력해야한다. Ex) '1.2em'",
                "remarkEng": "Specifies the default font-size of the grid cell. Returns true if it operates normally. CSS text must be entered. Ex) '1.2em'"
            },
            {
                "related": "body",
                "name": "setCellMinHeight",
                "param": "cssTextMinHeight(String)",
                "return": "Boolean",
                "remarkKor": "grid cell의 min-height를 지정한다. 정상 동작 시 true 반환. css text를 입력해야한다. Ex) '18px'",
                "remarkEng": "Specifies the min-height of the grid cell. Returns true if it operates normally. CSS text must be entered. Ex) '18px'"
            },
            {
                "related": "body",
                "name": "setHorizenBorderSize",
                "param": "pxHorizenBorderSize(Number)",
                "return": "Boolean",
                "remarkKor": "grid cell의 horizen border size를 설정한다. px단위이며 0과 양의 정수를 넣는다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the horizontal border size of the grid cell. The unit is px, and 0 and positive integers can be entered. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "setVerticalBorderSize",
                "param": "pxVerticalBorderSize(Number)",
                "return": "Boolean",
                "remarkKor": "grid cell의 vertical border size를 설정한다. px단위이며 0과 양의 정수를 넣는다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the vertical border size of the grid cell. The unit is px, and 0 and positive integers can be entered. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "setGridColor",
                "param": "cssTextHexColor(String)",
                "return": "Boolean",
                "remarkKor": "grid의 색상을 변경한다. 메인색상 지정 시 해당 색상에 따른 그리드를 그린다. 정상 동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Changes the color of the grid. When specifying the main color, the grid is drawn according to the color. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
            },
            {
                "related": "body",
                "name": "setGridColorSet",
                "param": "colorName(String)",
                "return": "Boolean",
                "remarkKor": "grid의 색상을 변경한다. 이미 설정된 Color set의 색상을 삽입할 수 있다. 정상 동작 시 true 반환. 'skyblue', 'blue', 'light-red', 'red', 'light-green', 'green', 'orange', 'yellow', 'purple', 'brown', 'black'",
                "remarkEng": "Changes the color of the grid. You can insert the color of an already set color set. Returns true if it operates normally. 'skyblue', 'blue', 'light-red', 'red', 'light-green', 'green', 'orange', 'yellow', 'purple', 'brown', 'black'"
            },
            {
                "related": "body",
                "name": "invertColor",
                "param": "doInvert(Boolean) = false",
                "return": "Boolean",
                "remarkKor": "grid의 색상을 반전한다. Dark mode등으로 활용할 수 있다. 정상 동작 시 true 반환.",
                "remarkEng": "Inverts the color of the grid. Can be used for dark mode. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "setGridName",
                "param": "gridName(String)",
                "return": "Boolean",
                "remarkKor": "grid의 name을 설정한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the name of the grid. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "getGridName",
                "param": "",
                "return": "String",
                "remarkKor": "grid의 name을 반환한다.",
                "remarkEng": "Returns the name of the grid."
            },
            {
                "related": "body",
                "name": "setGridLocked",
                "param": "isLocked(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid의 locked를 설정한다. Locked가 true이면 grid 변경 불가. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the grid's locked status. If locked is true, the grid cannot be changed. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "isGridLocked",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid의 locked상태를 반환한다.",
                "remarkEng": "Returns the locked status of the grid."
            },
            {
                "related": "body",
                "name": "setGridLockedColor",
                "param": "isLockedColor(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid의 lockedColor를 설정한다. LockedColor가 true이면 locked인 cell은 색상이 lockedColor로 표현됨. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the grid's lockedColor. If lockedColor is true, locked cells are displayed in the lockedColor. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "isGridResizable",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid의 lockedColor상태를 반환한다.",
                "remarkEng": "Returns the lockedColor status of the grid."
            },
            {
                "related": "body",
                "name": "setGridResizable",
                "param": "isResizable(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid의 resizable을 설정한다. Resizable이 true면 column사이즈 조정이 가능하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the grid's resizable status. If resizable is true, column size adjustment is possible. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "setGridRecodeCount",
                "param": "recodeCount(Number)",
                "return": "Boolean",
                "remarkKor": "grid의 redo(되돌리기) undo(재실행) 기록할 횟수인 recode count를 설정한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the recode count, the number of redo (undo) records for the grid. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "getGridRecodeCount",
                "param": "",
                "return": "Number",
                "remarkKor": "grid의 recode count를 반환한다.",
                "remarkEng": "Returns the recode count of the grid."
            },
            {
                "related": "body",
                "name": "setGridRedoable",
                "param": "isRedoable(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid가 redo(되돌리기) undo(재실행)를 사용할 수 있는지를 설정한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets whether the grid can use redo (undo). Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "isGridRedoable",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid의 redoable을 반환한다.",
                "remarkEng": "Returns the redoable status of the grid."
            },
            {
                "related": "body",
                "name": "setGridVisible",
                "param": "isVisible(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid의 visible을 설정한다. Visible true시 그리드가 화면에 보인다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the grid's visibility. If visible is true, the grid is displayed on the screen. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "isGridVisible",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid의 visible을 반환한다.",
                "remarkEng": "Returns the visibility of the grid."
            },
            {
                "related": "body",
                "name": "setHeaderVisible",
                "param": "isVisible(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid header의 visible을 설정한다. Visible true시 그리드가 화면에 보인다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the visibility of the grid header. If visible is true, the grid header is displayed on the screen. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "isHeaderVisible",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid header의 visible을 반환한다.",
                "remarkEng": "Returns the visibility of the grid header."
            },
            {
                "related": "body",
                "name": "setGridRownumLockedColor",
                "param": "isRownumLockedColor(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid의 rownum column의 lockedColor를 표기할지 여부를 설정한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets whether to display the lockedColor for the grid's rownum column. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "isGridRownumLockedColor",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid의 rownumLockedColor를 반환한다.",
                "remarkEng": "Returns the lockedColor status of the grid's rownum column."
            },
            {
                "related": "body",
                "name": "setGridRownumSize",
                "param": "rownumSize(Number)",
                "return": "Boolean",
                "remarkKor": "grid의 rownum Size를 설정한다. 단위는 px이며 양의 정수만 삽인한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the rownum size of the grid. The unit is px and only positive integers are entered. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "getGridRownumSize",
                "param": "",
                "return": "String",
                "remarkKor": "grid의 기존에 설정된 rownumSize를 반환한다.",
                "remarkEng": "Returns the previously set rownum size of the grid."
            },
            {
                "related": "body",
                "name": "setGridStatusLockedColor",
                "param": "isStatusLockedColor(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid의 status column의 lockedColor를 표기할지 여부를 설정한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets whether to display the lockedColor for the grid's status column. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "isGridStatusLockedColor",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid의 statusLockedColor를 반환한다.",
                "remarkEng": "Returns the lockedColor status of the grid's status column."
            },
            {
                "related": "body",
                "name": "setGridSelectionPolicy",
                "param": "selectionPolicy(String)",
                "return": "Boolean",
                "remarkKor": "grid의 선택범위 정책을 설정한다. 정상 동작 시 true 반환. 'range' : 범위 선택, 'single' : 단일 셀 선택, 'none': 선택 불가.",
                "remarkEng": "Sets the grid's selection range policy. Returns true if it operates normally. 'range': Range selection, 'single': Single cell selection, 'none': No selection."
            },
            {
                "related": "body",
                "name": "getGridSelectionPolicy",
                "param": "",
                "return": "String",
                "remarkKor": "grid에 설정된 selectionPolicy를 반환한다.",
                "remarkEng": "Returns the selection policy set for the grid."
            },
            {
                "related": "body",
                "name": "setGridNullValue",
                "param": "nullValue(var)",
                "return": "Boolean",
                "remarkKor": "grid의 null값 저장값을 설정한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the null value storage value of the grid. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "getGridNullValue",
                "param": "",
                "return": "var",
                "remarkKor": "grid의 nullValue를 반환한다.",
                "remarkEng": "Returns the null value of the grid."
            },
            {
                "related": "body",
                "name": "setGridDateFormat",
                "param": "dateFormat(String)",
                "return": "Boolean",
                "remarkKor": "grid의 dateFormat을 설정한다. 정상 동작 시 true 반환. 'yyyy-mm-dd', 'yyyy/mm/dd', 'yyyy. mm. dd', 'yyyymmdd'",
                "remarkEng": "Sets the date format of the grid. Returns true if it operates normally. 'yyyy-mm-dd', 'yyyy/mm/dd', 'yyyy. mm. dd', 'yyyymmdd'"
            },
            {
                "related": "body",
                "name": "getGridDateFormat",
                "param": "",
                "return": "String",
                "remarkKor": "grid의 dateFormat을 반환한다.",
                "remarkEng": "Returns the date format of the grid."
            },
            {
                "related": "body",
                "name": "setGridMonthFormat",
                "param": "monthFormat(String)",
                "return": "Boolean",
                "remarkKor": "grid의 monthFormat을 설정한다. 정상 동작 시 true 반환. 'yyyy-mm', 'yyyy/mm', 'yyyy. mm', 'yyyymm'",
                "remarkEng": "Sets the month format of the grid. Returns true if it operates normally. 'yyyy-mm', 'yyyy/mm', 'yyyy. mm', 'yyyymm'"
            },
            {
                "related": "body",
                "name": "getGridMonthFormat",
                "param": "",
                "return": "String",
                "remarkKor": "grid의 monthFormat을 반환한다.",
                "remarkEng": "Returns the month format of the grid."
            },
            {
                "related": "body",
                "name": "setGridAlterRow",
                "param": "isAlterRow(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid의 alterRow(한 행씩 번갈아가며 색상을 다르게 표현하는 기능)을 설정한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the grid's alterRow (function that alternates row colors). Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "setGridFrozenColCount",
                "param": "frozenColCount(Number)",
                "return": "Boolean",
                "remarkKor": "grid의 고정 열을 설정한다. 0포함 양의 정수만 입력 가능. frozenRowCount와 함께 사용할 수 없다. 정상 동작 시 true 반환. frozenColCount는 각 Column의 width가 '%'단위로 지정된 Column이 있으면 사용할 수 없다. 'px'단위일때만 사용 가능하다.",
                "remarkEng": "Sets the fixed columns of the grid. Only positive integers including 0 can be entered. Cannot be used with frozenRowCount. Returns true if it operates normally. FrozenColCount cannot be used if any column width is specified in '%'. Can only be used when the unit is 'px'."
            },
            {
                "related": "body",
                "name": "getGridFrozenColCount",
                "param": "",
                "return": "Number",
                "remarkKor": "grid의 frozenColCount를 반환한다.",
                "remarkEng": "Returns the frozenColCount of the grid."
            },
            {
                "related": "body",
                "name": "setGridFrozenRowCount",
                "param": "frozenRowCount(Number)",
                "return": "Boolean",
                "remarkKor": "grid의 고정 행을 설정한다. 0포함 양의 정수만 입력 가능. frozenColCount와 함께 사용할 수 없다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fixed rows of the grid. Only positive integers including 0 can be entered. Cannot be used with frozenColCount. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "getGridFrozenRowCount",
                "param": "",
                "return": "Number",
                "remarkKor": "grid의 frozenRowCount를 반환한다.",
                "remarkEng": "Returns the frozenRowCount of the grid."
            },
            {
                "related": "body",
                "name": "setGridSortable",
                "param": "isSortable(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid의 sortable을 설정한다. Sortable이 true이면 정렬기능을 사용할 수 있다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the grid's sortable status. If sortable is true, sorting functionality can be used. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "isGridSortalbe",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid의 sortable을 반환한다.",
                "remarkEng": "Returns the sortable status of the grid."
            },
            {
                "related": "body",
                "name": "setGridFilterable",
                "param": "isFilterable(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid의 filterable을 설정한다. filterable이 true이면 필터기능을 사용할 수 있다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the grid's filterable status. If filterable is true, filtering functionality can be used. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "isGridFilterable",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid의 filterable을 반환한다.",
                "remarkEng": "Returns the filterable status of the grid."
            },
            {
                "related": "body",
                "name": "setGridAllCheckable",
                "param": "isAllCheckable(Boolean)",
                "return": "Boolean",
                "remarkKor": "grid의 column이 checkbox 타입일 때 header 더블 클릭 시 한번에 모든 check값을 토글 하는 기능을 사용할지에 대한 여부를 설정한다. 정상 동작 시 true반환.",
                "remarkEng": "Sets whether to toggle all check values at once when double-clicking the header if the grid's column type is checkbox. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "isGridAllCheckable",
                "param": "",
                "return": "Boolean",
                "remarkKor": "grid의 allCheckable을 반환한다.",
                "remarkEng": "Returns the allCheckable status of the grid."
            },
            {
                "related": "body",
                "name": "setGridCheckedValue",
                "param": "checkeValue(String)",
                "return": "Boolean",
                "remarkKor": "grid의 cell이 checkbox 타입일 경우 체크된 값의 정의. 정상 동작 시 true 반환.",
                "remarkEng": "Defines the checked value if the grid's cell type is checkbox. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "getGridCheckedValue",
                "param": "",
                "return": "String",
                "remarkKor": "grid의 checkedValue를 반환한다.",
                "remarkEng": "Returns the checked value of the grid."
            },
            {
                "related": "body",
                "name": "setGridUncheckedValue",
                "param": "unCheckedValue(String)",
                "return": "Boolean",
                "remarkKor": "grid의 cell이 checkbox 타입일 경우 체크되지 않은 값의 정의. 정상 동작 시 true 반환.",
                "remarkEng": "Defines the unchecked value if the grid's cell type is checkbox. Returns true if it operates normally."
            },
            {
                "related": "body",
                "name": "getGridUncheckedValue",
                "param": "",
                "return": "String",
                "remarkKor": "grid의 uncheckedValue를 반환한다.",
                "remarkEng": "Returns the unchecked value of the grid."
            },
            {
                "related": "column",
                "name": "addCol",
                "param": "colId(String) or colIndex(Number), colInfo(Object)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 뒤에 colInfo 객체의 정보로 column을 추가한다. 정상 동작 시 true 반환.",
                "remarkEng": "Adds a column with the information of the colInfo object after the colId or colIndex column. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "removeCol",
                "param": "colId(String) or colIndex(Number)",
                "return": "Array",
                "remarkKor": "해당 colId or colIndex 열을 삭제한다. 삭제 후 해당 column의 getColValues() 값을 반환한다.",
                "remarkEng": "Deletes the specified colId or colIndex column. Returns the getColValues() values of the deleted column."
            },
            {
                "related": "column",
                "name": "setColInfo",
                "param": "colInfo(Object)",
                "return": "Boolean",
                "remarkKor": "colInfo의 정보를 갱신한다. 변경될 column은 colInfo.id로 정한다. 정상 동작 시 true 반환. colInfo에 삽입되지 않은 정보는 vg.defaultColInfo로 정의된 default값을 따른다.",
                "remarkEng": "Updates the information of colInfo. The column to be changed is determined by colInfo.id. Returns true if it operates normally. Information not inserted into colInfo follows the default value defined by vg.defaultColInfo."
            },
            {
                "related": "column",
                "name": "getColInfo",
                "param": "colId(String) or colIndex(Number)",
                "return": "Object",
                "remarkKor": "colId or colIndex 열의 정보를 객체로 반환한다.",
                "remarkEng": "Returns the information of the colId or colIndex column as an object."
            },
            {
                "related": "column",
                "name": "getColDatas",
                "param": "colId(String) or colIndex(Number)",
                "return": "Array",
                "remarkKor": "colId or colIndex 열의 각 cell의 데이터를 [{cell data}, {cell data}…] 형식으로 반환한다.",
                "remarkEng": "Returns the data of each cell in the colId or colIndex column in the format [{cell data}, {cell data}…]."
            },
            {
                "related": "column",
                "name": "setColSameValue",
                "param": "colId(String) or colIndex(Number), value(var), doRecode(Boolean) = false",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 모든 cell에 동일한 value를 삽입한다. doRecode가 true일 시 사용자가 실행취소, 재실행을 할 수 있다. 정상 동작 시 true 반환.",
                "remarkEng": "Inserts the same value into all cells in the colId or colIndex column. If doRecode is true, the user can undo or redo. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColValues",
                "param": "colId(String) or colIndex(Number)",
                "return": "Array",
                "remarkKor": "colId or colIndex 열의 각 cell의 value를 [value, value...] 형식으로 반환한다.",
                "remarkEng": "Returns the value of each cell in the colId or colIndex column in the format [value, value...]."
            },
            {
                "related": "column",
                "name": "getColTexts",
                "param": "colId(String) or colIndex(Number)",
                "return": "Array",
                "remarkKor": "colId or colIndex 열의 각 cell의 text를 [text, text...] 형식으로 반환한다.",
                "remarkEng": "Returns the text of each cell in the colId or colIndex column in the format [text, text...]."
            },
            {
                "related": "column",
                "name": "isColUnique",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 cell value가 중복된 값이 있으면 false, 없으면 true를 반환한다.",
                "remarkEng": "Returns false if the cell value of the colId or colIndex column has duplicate values, otherwise returns true."
            },
            {
                "related": "column",
                "name": "getColId",
                "param": "colIndex(Number)",
                "return": "String",
                "remarkKor": "colIndex번째 열의 colId를 반환한다.",
                "remarkEng": "Returns the colId of the colIndex-th column."
            },
            {
                "related": "column",
                "name": "getColIndex",
                "param": "colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "colId 열의 colIndex를 반환한다.",
                "remarkEng": "Returns the colIndex of the colId column."
            },
            {
                "related": "column",
                "name": "setColName",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 colName을 설정한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the colName of the colId or colIndex column. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColName",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 colName을 반환한다.",
                "remarkEng": "Returns the colName of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "openFilter",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 filter을 오픈한다. 정상 동작 시 true 반환.",
                "remarkEng": "Opens the filter of the colId or colIndex column. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "closeFilter",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 filter을 닫는다. 정상 동작 시 true 반환.",
                "remarkEng": "Closes the filter of the colId or colIndex column. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "setColFilterValue",
                "param": "colId(String) or colIndex(Number), filterValue(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 filter의 option을 filterValue의 값으로 지정한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the option of the filter of the colId or colIndex column to the value of filterValue. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColFilterValues",
                "param": "colId(String) or colIndex(Number)",
                "return": "Array",
                "remarkKor": "colId or colIndex 열의 filter 값들을 가져온다.",
                "remarkEng": "Gets the filter values of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "getColFilterValue",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 filter 현재 설정된 값을 가져온다.",
                "remarkEng": "Gets the current filter value set for the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColUntarget",
                "param": "colId(String) or colIndex(Number), isUntarget(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 untarget을 설정한다. Untarget이 true 시 해당 col을 선택할 수 없다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the untarget of the colId or colIndex column. If untarget is true, the column cannot be selected. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "setColRowMerge",
                "param": "colId(String) or colIndex(Number), isRowMerge(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의. rowMerge를 설정한다. RowMerge가 true 시 해당 col은 행으로 merge한다. 정상 동작 시 true 반환. Merge는 만나는 각 cell의 dataType, format, value가 동일할 시에 merge된다.",
                "remarkEng": "Sets the rowMerge of the colId or colIndex column. If rowMerge is true, the column merges by row. Returns true if it operates normally. Merge occurs when the dataType, format, and value of each cell encountered are the same."
            },
            {
                "related": "column",
                "name": "isColRowMerge",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 isRowMerge를 반환한다.",
                "remarkEng": "Returns the isRowMerge status of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColColMerge",
                "param": "colId(String) or colIndex(Number), isColMerge(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의. colMerge를 설정한다. colMerge가 true 시 해당 col은 행으로 merge한다. 정상 동작 시 true 반환. Merge는 만나는 각 cell의 dataType, format, value가 동일할 시에 merge된다. colMerge는 colMerge가 true인 행을 기준으로 앞의 행과 col merge한다.",
                "remarkEng": "Sets the colMerge of the colId or colIndex column. If colMerge is true, the column merges by column. Returns true if it operates normally. Merge occurs when the dataType, format, and value of each cell encountered are the same. colMerge merges with the previous row based on the row with colMerge set to true."
            },
            {
                "related": "column",
                "name": "isColColMerge",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 isColMerge를 반환한다.",
                "remarkEng": "Returns the isColMerge status of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColVisible",
                "param": "colId(String) or colIndex(Number), isVisible(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 visible을 설정한다. Visble이 false이면 해당 column은 display none처리 됨. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the visible status of the colId or colIndex column. If visible is false, the column is displayed as none. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColVisible",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 visible을 반환한다.",
                "remarkEng": "Returns the visible status of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColRequired",
                "param": "colId(String) or colIndex(Number), isRequired(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 required를 설정한다. Required가 true일 시 checkRequired()를 통해 필수 입력 체크할 수 있다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the required status of the colId or colIndex column. If required is true, mandatory input can be checked through checkRequired(). Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColRequired",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 required를 반환한다.",
                "remarkEng": "Returns the required status of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColResizable",
                "param": "colId(String) or colIndex(Number), isResizable(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 resizable을 설정한다. Resizble이 false이면 column width를 사용자가 조작할 수 없다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the resizable status of the colId or colIndex column. If resizable is false, the user cannot adjust the column width. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColResizable",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 resizable을 반환한다.",
                "remarkEng": "Returns the resizable status of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColSortable",
                "param": "colId(String) or colIndex(Number), isSorable(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 sortable을 설정한다. Sortable이 false이면 해당 column은 정렬기능을 사용할 수 없다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the sortable status of the colId or colIndex column. If sortable is false, the column cannot use the sorting function. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColSortable",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 sortable을 반환한다.",
                "remarkEng": "Returns the sortable status of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColFilterable",
                "param": "colId(String) or colIndex(Number), isFilterable(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 filterable을 설정한다. filterable이 false이면 해당 column은 필터기능을 사용할 수 없다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the filterable status of the colId or colIndex column. If filterable is false, the column cannot use the filter function. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColFilterable",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 filterable을 반환한다.",
                "remarkEng": "Returns the filterable status of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColOriginWidth",
                "param": "colId(String) or colIndex(Number), cssTextOriginWidth(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 originWidth를 설정한다. 'px'또는 '%'만 가능한 cssText이다. 설정 시 크기도 변경한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the originWidth of the colId or colIndex column. CSS text can only be 'px' or '%'. Changes the size when set. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColOriginWidth",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 originWidth를 반환한다.",
                "remarkEng": "Returns the originWidth of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColDataType",
                "param": "colId(String) or colIndex(Number), dataType(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 dataType을 설정한다. 정상 동작 시 true 반환. dataType : 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'",
                "remarkEng": "Sets the dataType of the colId or colIndex column. Returns true if it operates normally. dataType: 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'"
            },
            {
                "related": "column",
                "name": "getColDataType",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 dataType을 반환한다.",
                "remarkEng": "Returns the dataType of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColSelectSize",
                "param": "colId(String) or colIndex(Number), cssTextSelectWidth(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 selectSize를 cssText SelectWidth로 설정한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the selectSize of the colId or colIndex column to cssText SelectWidth. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColSelectSize",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 selectSize를 반환한다.",
                "remarkEng": "Returns the selectSize of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColLocked",
                "param": "colId(String) or colIndex(Number), isLocked(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 locked를 설정한다. Locked가 true시 column의 cell값을 변경할 수 없다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the locked status of the colId or colIndex column. If locked is true, the cell value of the column cannot be changed. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColLocked",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 locked를 반환한다.",
                "remarkEng": "Returns the locked status of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColLockedColor",
                "param": "colId(String) or colIndex(Number), isLockedColor(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 lockedColor를 설정한다. LockedColor가 true시 locked된 cell에 대해 배경색을 표현한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the lockedColor of the colId or colIndex column. If lockedColor is true, the background color is displayed for locked cells. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColLockedColor",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 lockedColor를 반환한다.",
                "remarkEng": "Returns the lockedColor of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColFormat",
                "param": "colId(String) or colIndex(Number), format(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 format을 설정한다. Format은 cell의 dataType이 'mask'와 'number'일 때 유효하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the format of the colId or colIndex column. Format is valid when the cell's dataType is 'mask' and 'number'. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColFormat",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 format을 반환한다.",
                "remarkEng": "Returns the format of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColCodes",
                "param": "colId(String) or colIndex(Number), codes(Array)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 codes를 설정한다. Codes는 cell의 dataType이 'code'일 때 유효하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the codes of the colId or colIndex column. Codes are valid when the cell's dataType is 'code'. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColCodes",
                "param": "colId(String) or colIndex(Number)",
                "return": "Array",
                "remarkKor": "colId or colIndex 열의 codes를 반환한다.",
                "remarkEng": "Returns the codes of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColDefaultCode",
                "param": "colId(String) or colIndex(Number), defaultCode(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 defaultCode를 설정한다. defaultCode는 cell의 dataType이 'code'일 때 유효하다. 값이 없을 경우 default값. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the defaultCode of the colId or colIndex column. DefaultCode is valid when the cell's dataType is 'code'. If there is no value, it is the default value. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColDefaultCode",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 defaultCode를 반환한다.",
                "remarkEng": "Returns the defaultCode of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColMaxLength",
                "param": "colId(String) or colIndex(Number), maxLength(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 maxLength를 설정한다. maxLength는 cell의 dataType이 'text'일 때 유효하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the maxLength of the colId or colIndex column. MaxLength is valid when the cell's dataType is 'text'. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColMaxLength",
                "param": "colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "colId or colIndex 열의 maxLength를 반환한다.",
                "remarkEng": "Returns the maxLength of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColMaxByte",
                "param": "colId(String) or colIndex(Number), maxByte(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 maxByte를 설정한다. maxByte는 cell의 dataType이 'text'일 때 유효하다. 정상 동작 시 true 반환. 특수기호 등의 byte 산정을 어떻게 할 지는 vg.lessoreq0x7ffByte(charCode <= 0x7FF), vg.lessoreq0xffffByte(charCode <= 0xFFFF), vg.greater0xffffByte(charCode > 0xFFFF)으로 설정할 수 있다. 기본값은 2, 3, 4.",
                "remarkEng": "Sets the maxByte of the colId or colIndex column. MaxByte is valid when the cell's dataType is 'text'. Returns true if it operates normally. How to calculate the byte of special symbols can be set to vg.lessoreq0x7ffByte (charCode <= 0x7FF), vg.lessoreq0xffffByte (charCode <= 0xFFFF), vg.greater0xffffByte (charCode > 0xFFFF). The default values are 2, 3, 4."
            },
            {
                "related": "column",
                "name": "getColMaxByte",
                "param": "colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "colId or colIndex 열의 maxByte를 반환한다.",
                "remarkEng": "Returns the maxByte of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColMaxNumber",
                "param": "colId(String) or colIndex(Number), maxNumber(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 maxNumber를 설정한다. maxNumber는 cell의 dataType이 'number'일 때 유효하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the maxNumber of the colId or colIndex column. MaxNumber is valid when the cell's dataType is 'number'. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColMaxNumber",
                "param": "colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "colId or colIndex 열의 maxNumber를 반환한다.",
                "remarkEng": "Returns the maxNumber of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColMinNumber",
                "param": "colId(String) or colIndex(Number), minNumber(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 minNumber를 설정한다. minNumber는 cell의 dataType이 'number'일 때 유효하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the minNumber of the colId or colIndex column. MinNumber is valid when the cell's dataType is 'number'. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColMinNumber",
                "param": "colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "colId or colIndex 열의 minNumber를 반환한다.",
                "remarkEng": "Returns the minNumber of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColRoundNumber",
                "param": "colId(String) or colIndex(Number), roundNumber(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 roundNumber를 설정한다. roundNumber는 cell의 dataType이 'number'일 때 유효하다. 정상 동작 시 true 반환. roundNumber 양의 정수 : 반올림 할 소수점 자리 지정. roundNumber 음의 정수 : 반올림 할 정수부 자리 지정.",
                "remarkEng": "Sets the roundNumber of the colId or colIndex column. RoundNumber is valid when the cell's dataType is 'number'. Returns true if it operates normally. roundNumber positive integer: specifies the decimal place to be rounded. roundNumber negative integer: specifies the integer place to be rounded."
            },
            {
                "related": "column",
                "name": "getColRoundNumber",
                "param": "colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "colId or colIndex 열의 roundNumber를 반환한다.",
                "remarkEng": "Returns the roundNumber of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColAlign",
                "param": "colId(String) or colIndex(Number), align(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 align을 설정한다. 'left', 'center', 'right'중 하나. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the align of the colId or colIndex column. Choose from 'left', 'center', 'right'. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColAlign",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 align을 반환한다.",
                "remarkEng": "Returns the align of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColVerticalAlign",
                "param": "colId(String) or colIndex(Number), verticalAlign(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 vertical-align을 설정한다. 'top', 'center', 'bottom'중 하나. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the vertical-align of the colId or colIndex column. Choose from 'top', 'center', 'bottom'. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColVerticalAlign",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 vertical_align을 반환한다.",
                "remarkEng": "Returns the vertical_align of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColOverflowWrap",
                "param": "colId(String) or colIndex(Number), overflowWrap(String)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 overflow-wrap을 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the overflow-wrap of the colId or colIndex column. Inserts CSS text strings. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColOverflowWrap",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 overflow-wrap을 반환한다.",
                "remarkEng": "Returns the overflow-wrap of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColWordBreak",
                "param": "colId(String) or colIndex(Number), wordBreak(String)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 word-braek을 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the word-break of the colId or colIndex column. Inserts CSS text strings. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColWordBreak",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 word-braek을 반환한다.",
                "remarkEng": "Returns the word-break of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColWhiteSpace",
                "param": "colId(String) or colIndex(Number), whiteSpace(String)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 white-space를 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the white-space of the colId or colIndex column. Inserts CSS text strings. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "getColWhiteSpace",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 white-space를반환한다.",
                "remarkEng": "Returns the white-space of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColBackColor",
                "param": "colId(String) or colIndex(Number), cssTextHexColor(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 background-color를 설정한다. 정상 동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the colId or colIndex column. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
            },
            {
                "related": "column",
                "name": "getColBackColor",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 background-color를 반환한다.",
                "remarkEng": "Returns the background color of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColFontColor",
                "param": "colId(String) or colIndex(Number), cssTextHexColor(String)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 font-color를 설정한다. 정상 동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the colId or colIndex column. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
            },
            {
                "related": "column",
                "name": "getColFontColor",
                "param": "colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "colId or colIndex 열의 font-color를 반환한다.",
                "remarkEng": "Returns the font color of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColFontBold",
                "param": "colId(String) or colIndex(Number), isFontBold(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 fontBold를 설정한다. fontBold가 true이면 굵은 글씨 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontBold of the colId or colIndex column. If fontBold is true, the text is displayed in bold. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColFontBold",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 fontBold를 반환한다.",
                "remarkEng": "Returns the fontBold of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColFontItalic",
                "param": "colId(String) or colIndex(Number), isFontItalic(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 fontItalic를 설정한다. fontItalic가 true이면 기울게 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontItalic of the colId or colIndex column. If fontItalic is true, the text is displayed in italics. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColFontItalic",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 fontItalic를 반환한다.",
                "remarkEng": "Returns the fontItalic of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColFontThruline",
                "param": "colId(String) or colIndex(Number), isFontThruline(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 fontThruline를 설정한다. fontThruline가 true이면 취소선 글씨 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontThruline of the colId or colIndex column. If fontThruline is true, the text is displayed with a strikethrough. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColFontThruline",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 fontThruline를 반환한다.",
                "remarkEng": "Returns the fontThruline of the colId or colIndex column."
            },
            {
                "related": "column",
                "name": "setColFontUnderline",
                "param": "colId(String) or colIndex(Number), isFontUnderline(Boolean)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 fontUnderline를 설정한다. fontUnderline가 true이면 밑줄 글씨 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontUnderline of the colId or colIndex column. If fontUnderline is true, the text is displayed with an underline. Returns true if it operates normally."
            },
            {
                "related": "column",
                "name": "isColFontUnderline",
                "param": "colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "colId or colIndex 열의 fontUnderline를 반환한다.",
                "remarkEng": "Returns the fontUnderline of the colId or colIndex column."
            },
            {
                "related": "row",
                "name": "addRow",
                "param": "",
                "return": "Boolean",
                "remarkKor": "colInfo를 참조하여 1행을 마지막 행 뒤에 추가한다. 값은 모두 null삽입. 정상 동작 시 true 반환.",
                "remarkEng": "Adds one row after the last row referencing colInfo. All values are inserted as null. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "addRow",
                "param": "keyValueOrDatas(1row) ({} or [{},{}...])",
                "return": "Boolean",
                "remarkKor": "1행 형태의 KeyValue 입력 시 colInfo를 참조하여 1행을 마지막 행 뒤에 추가하고. keyValue의 값을 삽입한다. 정상동작 시 true 반환. 1행 형태의 Datas 입력 시 Datas의 값과 cell정보를 참조하여 1행을 마지막 행 뒤에 추가한다. 정상동작 시 true 반환.",
                "remarkEng": "When inputting one row in KeyValue form, it adds one row after the last row referencing colInfo and inserts the values of keyValue. Returns true if it operates normally. When inputting one row in Datas form, it adds one row after the last row referencing the values and cell information of Datas. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "addRow",
                "param": "row(Number), keyValueOrDatas(1row) ({} or [{},{}...])",
                "return": "Boolean",
                "remarkKor": "row번째 행 뒤에 1행 형태의 keyValueOrDatas를 참조하여 1행을 추가한다. 정상동작 시 true 반환.",
                "remarkEng": "Adds one row referencing keyValueOrDatas in one row form behind the row-th row. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "removeRow",
                "param": "row(Number)",
                "return": "Object",
                "remarkKor": "row번째 행을 삭제한다. 삭제한 행의 값을 객체 형태로 반환한다. getRowValue()형태.",
                "remarkEng": "Deletes the row-th row. Returns the values of the deleted row in object form. In the form of getRowValue()."
            },
            {
                "related": "row",
                "name": "setRowStatus",
                "param": "row(Number), status(String)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 v-g-status컬럼의 값을 변경한다. 'C', 'U', 'D' 값만 가능. 정상동작 시 true 반환.",
                "remarkEng": "Changes the value of the v-g-status column of the row-th row. Only 'C', 'U', 'D' values are possible. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "getRowStatus",
                "param": "row(Number)",
                "return": "",
                "remarkKor": "row번째 행의 v-g-status컬럼의 값을 반환한다.",
                "remarkEng": "Returns the value of the v-g-status column of the row-th row."
            },
            {
                "related": "row",
                "name": "setRowDatas",
                "param": "row(Number), cellDatas([{},{}...])",
                "return": "Boolean",
                "remarkKor": "row번째 행을 cellDatas(각 cell에 대한 값과 정보가 담긴 배열)로 변경한다. 정상동작 시 true 반환.",
                "remarkEng": "Changes the row-th row to cellDatas (an array containing values and information for each cell). Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "getRowDatas",
                "param": "row(Number)",
                "return": "",
                "remarkKor": "row번째 행의 cellDatas(각 cell에 대한 값과 정보가 담긴 배열)를 반환한다.",
                "remarkEng": "Returns the cellDatas (an array containing values and information for each cell) of the row-th row."
            },
            {
                "related": "row",
                "name": "setRowValues",
                "param": "row(Number) values({}), doRecode(Boolean) = false",
                "return": "Boolean",
                "remarkKor": "row번째 행의 cell에 values({colId:value, colId:value…})를 통해 값을 삽입한다. doRecode가 true일 시 사용자가 실행취소, 재실행을 할 수 있다. 정상 동작 시 true 반환.",
                "remarkEng": "Inserts values into the cells of the row-th row through values({colId:value, colId:value…}). If doRecode is true, the user can undo or redo. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "getRowValues",
                "param": "row(Number)",
                "return": "",
                "remarkKor": "row번째 행의 cell의 values({colId:value, colId:value…})를 반환한다. 각 getCellValue()의 값이다.",
                "remarkEng": "Returns the values({colId:value, colId:value…}) of the cells of the row-th row. It is the value of each getCellValue()."
            },
            {
                "related": "row",
                "name": "getRowTexts",
                "param": "row(Number)",
                "return": "",
                "remarkKor": "row번째 행의 cell의 texts({colId:text, colId:text…})를 반환한다. 각 getCellText()의 값이다.",
                "remarkEng": "Returns the texts({colId:text, colId:text…}) of the cells of the row-th row. It is the value of each getCellText()."
            },
            {
                "related": "row",
                "name": "setRowVisible",
                "param": "row(Number), isVisible(Boolean)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 visible을 설정한다. Visible이 false일 때 해당 행이 숨김처리 된다. 정상동작 시 true 반환.",
                "remarkEng": "Sets the visible status of the row-th row. If visible is false, the row is hidden. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "isRowVisible",
                "param": "row(Number)",
                "return": "",
                "remarkKor": "row번째 행의 visible을 반환한다.",
                "remarkEng": "Returns the visible status of the row-th row."
            },
            {
                "related": "row",
                "name": "setRowDataType",
                "param": "row(Number), dataType(String)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 dataType을 설정한다. 정상동작 시 true 반환. dataType : 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'",
                "remarkEng": "Sets the dataType of the row-th row. Returns true if it operates normally. dataType: 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'"
            },
            {
                "related": "row",
                "name": "setRowLocked",
                "param": "row(Number), isRowLocked(Boolean)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 locked를 설정한다. Locked가 true시 column의 cell값을 변경할 수 없다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the locked status of the row-th row. If locked is true, the cell value of the column cannot be changed. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "setRowLockedColor",
                "param": "row(Number), isRowLockedColor(Boolean)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 lockedColor를 설정한다. LockedColor가 true시 locked된 cell에 대해 배경색을 표현한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the lockedColor of the row-th row. If lockedColor is true, the background color is displayed for locked cells. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "setRowAlign",
                "param": "row(Number), align(String)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 align을 설정한다. 'left', 'center', 'right'중 하나. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the align of the row-th row. Choose from 'left', 'center', 'right'. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "setRowVerticalAlign",
                "param": "row(Number), verticalAlign(String)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 vertical-align을 설정한다. 'top', 'center', 'bottom'중 하나. 정상동작 시 true 반환.",
                "remarkEng": "Sets the vertical-align of the row-th row. Choose from 'top', 'center', 'bottom'. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "setRowBackColor",
                "param": "row(Number), cssTextHexColor(String)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 background-color를 설정한다. 정상동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background color of the row-th row. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
            },
            {
                "related": "row",
                "name": "setRowFontColor",
                "param": "row(Number), cssTextHexColor(String)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 font-color를 설정한다. 정상동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font color of the row-th row. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
            },
            {
                "related": "row",
                "name": "setRowFontBold",
                "param": "row(Number), isFontBold(Boolean)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 fontBold를 설정한다. fontBold가 true이면 굵은 글씨 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontBold of the row-th row. If fontBold is true, the text is displayed in bold. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "setRowFontItalic",
                "param": "row(Number), isFontItalic(Boolean)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 fontItalic를 설정한다. fontItalic가 true이면 기울게 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontItalic of the row-th row. If fontItalic is true, the text is displayed in italics. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "setRowFontThruline",
                "param": "row(Number), isFontThruline(Boolean)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 fontThruline를 설정한다. fontThruline가 true이면 취소선 글씨 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontThruline of the row-th row. If fontThruline is true, the text is displayed with a strikethrough. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "setRowFontUnderline",
                "param": "row(Number), isFontUnderline(Boolean)",
                "return": "Boolean",
                "remarkKor": "row번째 행의 fontUnderline를 설정한다. fontUnderline가 true이면 밑줄 글씨 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontUnderline of the row-th row. If fontUnderline is true, the text is displayed with an underline. Returns true if it operates normally."
            },
            {
                "related": "row",
                "name": "searchRowsWithMatched",
                "param": "matches(Object)",
                "return": "Array",
                "remarkKor": "matches객체의 {colId:value, colId:value..} 조건을 통해 colId와 값이 일치하는 행을 반환한다. 조건이 모두 일치해야 반환한다. 행의 번호를 배열로 반환한다.",
                "remarkEng": "Returns rows that match the colId and value based on the conditions of the matches object {colId:value, colId:value..}. All conditions must match to be returned. Returns the row numbers as an array."
            },
            {
                "related": "row",
                "name": "searchRowDatasWithMatched",
                "param": "matches(Object)",
                "return": "Array",
                "remarkKor": "matches객체의 {colId:value, colId:value..} 조건을 통해 colId와 값이 일치하는 행을 반환한다. 조건이 모두 일치해야 반환한다. 행을 Datas[[{},{}..],[{},{}..]...] 형태로 반환한다.",
                "remarkEng": "Returns rows that match the colId and value based on the conditions of the matches object {colId:value, colId:value..}. All conditions must match to be returned. Returns the rows as Datas [[{},{}..],[{},{}..]...]."
            },
            {
                "related": "row",
                "name": "searchRowValuesWithMatched",
                "param": "matches(Object)",
                "return": "Array",
                "remarkKor": "matches객체의 {colId:value, colId:value..} 조건을 통해 colId와 값이 일치하는 행을 반환한다. 조건이 모두 일치해야 반환한다. 행을 keyValues[{},{}...] 형태로 반환한다.",
                "remarkEng": "Returns rows that match the colId and value based on the conditions of the matches object {colId:value, colId:value..}. All conditions must match to be returned. Returns the rows as keyValues [ {},{}... ]."
            },
            {
                "related": "row",
                "name": "searchRowsWithFunction",
                "param": "matchFunction(function)",
                "return": "Array",
                "remarkKor": "사용자가 삽입하는 matchFunction을 통해 반환값이 true인 행을 반환한다. matchFunction에는 파라메터로 getRowDatas(row)결과 값이 전달된다. 행의 번호를 배열로 반환한다.",
                "remarkEng": "Returns rows for which the return value is true through the matchFunction inserted by the user. The result value of getRowDatas(row) is passed as a parameter to matchFunction. Returns the row numbers as an array."
            },
            {
                "related": "row",
                "name": "searchRowDatasWithFunction",
                "param": "matchFunction(function)",
                "return": "Array",
                "remarkKor": "사용자가 삽입하는 matchFunction을 통해 반환값이 true인 행을 반환한다. matchFunction에는 파라메터로 getRowDatas(row)결과 값이 전달된다. 행을 Datas[[{},{}..],[{},{}..]...] 형태로 반환한다.",
                "remarkEng": "Returns rows for which the return value is true through the matchFunction inserted by the user. The result value of getRowDatas(row) is passed as a parameter to matchFunction. Returns the rows as Datas [[{},{}..],[{},{}..]...]."
            },
            {
                "related": "row",
                "name": "searchRowValuesWithFunction",
                "param": "matchFunction(function)",
                "return": "Array",
                "remarkKor": "사용자가 삽입하는 matchFunction을 통해 반환값이 true인 행을 반환한다. matchFunction에는 파라메터로 getRowDatas(row)결과 값이 전달된다. 행을 keyValues[{},{}...] 형태로 반환한다.",
                "remarkEng": "Returns rows for which the return value is true through the matchFunction inserted by the user. The result value of getRowDatas(row) is passed as a parameter to matchFunction. Returns the rows as keyValues [ {},{}... ]."
            },
            {
                "related": "cell",
                "name": "setCellData",
                "param": "row(Number), colId(String) or colIndex(Number), cellData(Object)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 정보를 변경한다. cellData는 {id:'colId',value:'value'..}인 객체형태이다. 정상 동작 시 true 반환.",
                "remarkEng": "Changes the information of the cell in the colId or colIndex column in the row-th row. cellData is an object in the form {id:'colId', value:'value'..}. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellData",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Object",
                "remarkKor": "row행 colId or colIndex 열 cell의 정보를 반환한다. cellData는 {id:'colId',value:'value'..}인 객체형태이다.",
                "remarkEng": "Returns the information of the cell in the colId or colIndex column in the row-th row. cellData is an object in the form {id:'colId', value:'value'..}."
            },
            {
                "related": "cell",
                "name": "setCellValue",
                "param": "row(Number), colId(String) or colIndex(Number), value(var), doRecode(Boolean) = false",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 value를 변경한다. 정상 동작 시 true 반환.",
                "remarkEng": "Changes the value of the cell in the colId or colIndex column in the row-th row. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellValue",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "var",
                "remarkKor": "row행 colId or colIndex 열 cell의 value를 반환한다.",
                "remarkEng": "Returns the value of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "getCellText",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열 cell의 text를(format등이 적용된 값) 반환한다.",
                "remarkEng": "Returns the text of the cell in the colId or colIndex column in the row-th row (values applied with format, etc.)."
            },
            {
                "related": "cell",
                "name": "setCellRequired",
                "param": "row(Number), colId(String) or colIndex(Number), isRequired(Boolean)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 required를 설정한다. Required가 true시 checkRequired()를 통해 필수 체크할 수 있다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the required status of the cell in the colId or colIndex column in the row-th row. If required is true, it can be checked through checkRequired(). Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellRequired",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 required를 반환한다.",
                "remarkEng": "Returns the required status of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellDataType",
                "param": "row(Number), colId(String) or colIndex(Number), dataType(String)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 dataType을 설정한다. 정상 동작 시 true 반환. dataType : 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'",
                "remarkEng": "Sets the dataType of the cell in the colId or colIndex column in the row-th row. Returns true if it operates normally. dataType: 'text', 'date', 'month', 'mask', 'select', 'checkbox', 'button', 'link', 'code'"
            },
            {
                "related": "cell",
                "name": "getCellDataType",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열 cell의 dataType을 반환한다.",
                "remarkEng": "Returns the dataType of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellLocked",
                "param": "row(Number), colId(String) or colIndex(Number), isLocked(Boolean)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 locked를 설정한다. Locked가 true시 column의 cell값을 변경할 수 없다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the locked status of the cell in the colId or colIndex column in the row-th row. If locked is true, the cell value of the column cannot be changed. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "isCellLocked",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 locked를 반환한다.",
                "remarkEng": "Returns the locked status of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellLockedColor",
                "param": "row(Number), colId(String) or colIndex(Number), isLockedColor(Boolean)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 lockedColor를 설정한다. LockedColor가 true시 locked된 cell에 대해 배경색을 표현한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the lockedColor of the cell in the colId or colIndex column in the row-th row. If lockedColor is true, the background color is displayed for locked cells. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "isCellLockedColor",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 lockedColor를 반환한다.",
                "remarkEng": "Returns the lockedColor of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellFormat",
                "param": "row(Number), colId(String) or colIndex(Number), format(String)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 format을 설정한다. Format은 cell의 dataType이 'mask'와 'number'일 때 유효하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the format of the cell in the colId or colIndex column in the row-th row. Format is valid when the cell's dataType is 'mask' and 'number'. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellFormat",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열 cell의 format을 반환한다.",
                "remarkEng": "Returns the format of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellCodes",
                "param": "row(Number), colId(String) or colIndex(Number), codes(Array)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 codes를 설정한다. Codes는 cell의 dataType이 'code'일 때 유효하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the codes of the cell in the colId or colIndex column in the row-th row. Codes are valid when the cell's dataType is 'code'. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellCodes",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Array",
                "remarkKor": "row행 colId or colIndex 열 cell의 codes를 반환한다.",
                "remarkEng": "Returns the codes of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellDefaultCode",
                "param": "row(Number), colId(String) or colIndex(Number), defaultCode(String)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 defaultCode를 설정한다. defaultCode는 cell의 dataType이 'code'일 때 유효하다. 값이 없을 경우 default값. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the defaultCode of the cell in the colId or colIndex column in the row-th row. defaultCode is valid when the cell's dataType is 'code'. If there is no value, it uses the default value. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellDefaultCode",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열 cell의 defaultCode를 반환한다.",
                "remarkEng": "Returns the defaultCode of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellMaxLength",
                "param": "row(Number), colId(String) or colIndex(Number), maxLength(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 maxLength를 설정한다. maxLength는 cell의 dataType이 'text'일 때 유효하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the maxLength of the cell in the colId or colIndex column in the row-th row. maxLength is valid when the cell's dataType is 'text'. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellMaxLength",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "row행 colId or colIndex 열 cell의 maxLength를 반환한다.",
                "remarkEng": "Returns the maxLength of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellMaxByte",
                "param": "row(Number), colId(String) or colIndex(Number), maxByte(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 maxByte를 설정한다. maxByte는 cell의 dataType이 'text'일 때 유효하다. 정상 동작 시 true 반환. 특수기호 등의 byte 산정을 어떻게 할 지는 vg.lessoreq0x7ffByte(charCode <= 0x7FF), vg.lessoreq0xffffByte(charCode <= 0xFFFF), vg.greater0xffffByte(charCode > 0xFFFF)으로 설정할 수 있다. 기본값은 2, 3, 4.",
                "remarkEng": "Sets the maxByte of the cell in the colId or colIndex column in the row-th row. maxByte is valid when the cell's dataType is 'text'. Returns true if it operates normally. How to calculate the byte of special characters can be set with vg.lessoreq0x7ffByte(charCode <= 0x7FF), vg.lessoreq0xffffByte(charCode <= 0xFFFF), vg.greater0xffffByte(charCode > 0xFFFF). Default values are 2, 3, 4."
            },
            {
                "related": "cell",
                "name": "getCellMaxByte",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "row행 colId or colIndex 열 cell의 maxByte를 반환한다.",
                "remarkEng": "Returns the maxByte of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellMaxNumber",
                "param": "row(Number), colId(String) or colIndex(Number), maxNumber(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 maxNumber를 설정한다. maxNumber는 cell의 dataType이 'number'일 때 유효하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the maxNumber of the cell in the colId or colIndex column in the row-th row. maxNumber is valid when the cell's dataType is 'number'. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellMaxNumber",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "row행 colId or colIndex 열 cell의 maxNumber를 반환한다.",
                "remarkEng": "Returns the maxNumber of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellMinNumber",
                "param": "row(Number), colId(String) or colIndex(Number), minNumber(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 minNumber를 설정한다. minNumber는 cell의 dataType이 'number'일 때 유효하다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the minNumber of the cell in the colId or colIndex column in the row-th row. minNumber is valid when the cell's dataType is 'number'. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellMinNumber",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "row행 colId or colIndex 열 cell의 minNumber를 반환한다.",
                "remarkEng": "Returns the minNumber of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellRoundNumber",
                "param": "row(Number), colId(String) or colIndex(Number), roundNumber(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 roundNumber를 설정한다. roundNumber는 cell의 dataType이 'number'일 때 유효하다. 정상 동작 시 true 반환. roundNumber 양의 정수 : 반올림 할 소수점 자리 지정. roundNumber 음의 정수 : 반올림 할 정수부 자리 지정.",
                "remarkEng": "Sets the roundNumber of the cell in the colId or colIndex column in the row-th row. roundNumber is valid when the cell's dataType is 'number'. Returns true if it operates normally. roundNumber positive integer: specifies the decimal place to be rounded. roundNumber negative integer: specifies the integer place to be rounded."
            },
            {
                "related": "cell",
                "name": "getCellRoundNumber",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Number",
                "remarkKor": "row행 colId or colIndex 열 cell의 roundNumber를 반환한다.",
                "remarkEng": "Returns the roundNumber of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellAign",
                "param": "row(Number), colId(String) or colIndex(Number), align(String)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 align을 설정한다. 'left', 'center', 'right'중 하나. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the align of the cell in the colId or colIndex column in the row-th row. Choose from 'left', 'center', 'right'. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellAign",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열 cell의 align을 반환한다.",
                "remarkEng": "Returns the align of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellverticalAlign",
                "param": "row(Number), colId(String) or colIndex(Number), verticalAlign(String)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 vertical-align을 설정한다. 'top', 'center', 'bottom'중 하나. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the vertical-align of the cell in the colId or colIndex column in the row-th row. Choose from 'top', 'center', 'bottom'. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellverticalAlign",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열 cell의 vertical_align을 반환한다.",
                "remarkEng": "Returns the vertical_align of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellOverflowWrap",
                "param": "row(Number), colId(String) or colIndex(Number), overflowWrap(String)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열의 overflow-wrap을 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the overflow-wrap of the cell in the colId or colIndex column in the row-th row. Inserts a cssText string. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellOverflowWrap",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열의 overflow-wrap을 반환한다.",
                "remarkEng": "Returns the overflow-wrap of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellWordBreak",
                "param": "row(Number), colId(String) or colIndex(Number), wordBreak(String)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열의 word-braek을 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the word-break of the cell in the colId or colIndex column in the row-th row. Inserts a cssText string. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellWordBreak",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열의 word-braek을 반환한다.",
                "remarkEng": "Returns the word-break of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellWhiteSpace",
                "param": "row(Number), colId(String) or colIndex(Number), whiteSpace(String)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열의 white-space를 설정한다. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the white-space of the cell in the colId or colIndex column in the row-th row. Inserts a cssText string. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "getCellWhiteSpace",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열의 white-space를 반환한다.",
                "remarkEng": "Returns the white-space of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellVisible",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열의 visible을 설정한다. 정확히는 cell의 자식 node의 visible. cssText 문자열을 삽입한다. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the visible of the cell in the colId or colIndex column in the row-th row. Specifically, it sets the visible of the child node of the cell. Inserts a cssText string. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "isCellVisible",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열의 visible을 반환한다. 정확히는 cell의 자식 node의 visible.",
                "remarkEng": "Returns the visible of the cell in the colId or colIndex column in the row-th row. Specifically, it returns the visible of the child node of the cell."
            },
            {
                "related": "cell",
                "name": "setCellBackColor",
                "param": "row(Number), colId(String) or colIndex(Number), cssTextHexColor(String)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 background-color를 설정한다. 정상 동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the background-color of the cell in the colId or colIndex column in the row-th row. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
            },
            {
                "related": "cell",
                "name": "getCellBackColor",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열 cell의 background-color를 반환한다.",
                "remarkEng": "Returns the background-color of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellFontColor",
                "param": "row(Number), colId(String) or colIndex(Number), cssTextHexColor(String)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 font-color를 설정한다. 정상 동작 시 true 반환. 16진수 색상을 입력한다. Ex) '#ffffff'",
                "remarkEng": "Sets the font-color of the cell in the colId or colIndex column in the row-th row. Returns true if it operates normally. Enter a hexadecimal color. Ex) '#ffffff'"
            },
            {
                "related": "cell",
                "name": "getCellFontColor",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "String",
                "remarkKor": "row행 colId or colIndex 열 cell의 font-color를 반환한다.",
                "remarkEng": "Returns the font-color of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellFontBold",
                "param": "row(Number), colId(String) or colIndex(Number), isFontBold(Boolean)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 fontBold를 설정한다. fontBold가 true이면 굵은 글씨 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontBold of the cell in the colId or colIndex column in the row-th row. If fontBold is true, the text is displayed in bold. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "isCellFontBold",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 fontBold를 반환한다.",
                "remarkEng": "Returns the fontBold of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellFontItalic",
                "param": "row(Number), colId(String) or colIndex(Number), isFontItalic(Boolean)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 fontItalic를 설정한다. fontItalic가 true이면 기울게 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontItalic of the cell in the colId or colIndex column in the row-th row. If fontItalic is true, the text is displayed in italics. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "isCellFontItalic",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 fontItalic를 반환한다.",
                "remarkEng": "Returns the fontItalic of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellFontThruline",
                "param": "row(Number), colId(String) or colIndex(Number), isFontThruline(Boolean)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 fontThruline를 설정한다. fontThruline가 true이면 취소선 글씨 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontThruline of the cell in the colId or colIndex column in the row-th row. If fontThruline is true, the text is displayed with a strikethrough. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "isCellFontThruline",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 fontThruline를 반환한다.",
                "remarkEng": "Returns the fontThruline of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "cell",
                "name": "setCellFontUnderline",
                "param": "row(Number), colId(String) or colIndex(Number), isFontUnderline(Boolean)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 fontUnderline를 설정한다. fontUnderline가 true이면 밑줄 글씨 표현. 정상 동작 시 true 반환.",
                "remarkEng": "Sets the fontUnderline of the cell in the colId or colIndex column in the row-th row. If fontUnderline is true, the text is displayed with an underline. Returns true if it operates normally."
            },
            {
                "related": "cell",
                "name": "isCellFontUnderline",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 fontUnderline를 반환한다.",
                "remarkEng": "Returns the fontUnderline of the cell in the colId or colIndex column in the row-th row."
            },
            {
                "related": "active",
                "name": "setTargetCell",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell을 선택한다. 해당 cell이 visible false처리 되어 있으면 동작하지 않는다. 정상 동작 시 true 반환.",
                "remarkEng": "Selects the cell in the colId or colIndex column in the row-th row. If the cell is set to visible false, it does not operate. Returns true if it operates normally."
            },
            {
                "related": "active",
                "name": "getTargetRow",
                "param": "",
                "return": "Number",
                "remarkKor": "현재 선택된 메인 타겟의 cell의 row 번호를 반환한다.",
                "remarkEng": "Returns the row number of the currently selected main target cell."
            },
            {
                "related": "active",
                "name": "getTargetCol",
                "param": "",
                "return": "String",
                "remarkKor": "현재 선택된 메인 타겟의 cell의 colId를 반환한다.",
                "remarkEng": "Returns the colId of the currently selected main target cell."
            },
            {
                "related": "active",
                "name": "setActiveCells",
                "param": "startRow(Number), startColId(String) or startColIndex(Number), endRow(Number), endColId(String) or endColIndex(Number)",
                "return": "Boolean",
                "remarkKor": "start row, start colId or colIndex ~ end row, end colId or colIndex 범위까지 cell을 선택한다. 정상 동작 시 true 반환. 초과한 범위를 선택하려 하면 에러 발생.",
                "remarkEng": "Selects the cells in the range from start row, start colId or colIndex to end row, end colId or colIndex. Returns true if it operates normally. An error occurs if an out-of-bounds range is selected."
            },
            {
                "related": "active",
                "name": "getActiveRows",
                "param": "",
                "return": "Array",
                "remarkKor": "현재 선택된 cell들의 row 번호들을 반환한다. [1,2..]",
                "remarkEng": "Returns the row numbers of the currently selected cells. [1,2..]"
            },
            {
                "related": "active",
                "name": "getActiveCols",
                "param": "",
                "return": "Array",
                "remarkKor": "현재 선택된 cell들의 colId들을 반환한다. ['col1','col2'..]",
                "remarkEng": "Returns the colIds of the currently selected cells. ['col1','col2'..]"
            },
            {
                "related": "active",
                "name": "getActiveRange",
                "param": "",
                "return": "Object",
                "remarkKor": "현재 선택된 cell 범위 정보를 객체로 반환한다. {startRow:1,startColId:'col1',endRow:2,endColId:'col2'}",
                "remarkEng": "Returns the information of the currently selected cell range as an object. {startRow:1, startColId:'col1', endRow:2, endColId:'col2'}"
            },
            {
                "related": "active",
                "name": "editCell",
                "param": "row(Number), colId(String) or colIndex(Number)",
                "return": "Boolean",
                "remarkKor": "row행 colId or colIndex 열 cell의 editor를 연다. Cell이 locked상태이면 동작 안함. 정상 동작 시 true 반환.",
                "remarkEng": "Opens the editor of the cell in the colId or colIndex column in the row-th row. If the cell is locked, it does not operate. Returns true if it operates normally."
            },
            {
                "related": "active",
                "name": "redo",
                "param": "",
                "return": "Boolean",
                "remarkKor": "현재 활성화 grid의 변경 사항(recode에 기록된 순서로)을 실행 취소한다. 정상 동작 시 true 반환.",
                "remarkEng": "Undoes the changes of the currently active grid in the order recorded in the recode. Returns true if it operates normally."
            },
            {
                "related": "active",
                "name": "undo",
                "param": "",
                "return": "Boolean",
                "remarkKor": "현재 활성화 grid의 직전 실행 취소(recode에 기록된 순서로)를 원복한다. 정상 동작 시 true 반환.",
                "remarkEng": "Restores the last undo of the currently active grid in the order recorded in the recode. Returns true if it operates normally."
            },
            {
                "related": "etc",
                "name": "removeGridMethod",
                "param": "",
                "return": "",
                "remarkKor": "grid id를 통해 호출하는 모든 함수를 삭제한다. 해킹 방지용 기능.(완벽한 보안은 아님) Vnilla-grid에서는 window[gridId]를 전역 변수로 선언하고 해당 변수를 통해 모든 method를 접근한다. removeGridMethod를 사용하면 window[gridId]를 삭제하여 method 접근이 불가하다. 예로 document에서 'F12'를 통해 개발자 모드 접근 시 removeGridMethod를 호출한다.",
                "remarkEng": "Deletes all functions called through the grid id. This is an anti-hacking feature (not complete security). In Vnilla-grid, window[gridId] is declared as a global variable and all methods are accessed through this variable. If removeGridMethod is used, window[gridId] is deleted and method access is not possible. For example, removeGridMethod is called when accessing developer mode through 'F12' in the document."
            }
        ];
        this.VGO_FUNCTION = [
            {
                "function": "getVanillagrid",
                "param": "",
                "return": "vg(Object)",
                "remarkKor": "Vanillagrid 객체를 생성하며 return하는 클로저 함수. Vanillagrid에 대한 고급 정보들이 포함. 하단부터 'vg'로 표기함.",
                "remarkEng": "A closure function that creates and returns a Vanillagrid object. Includes advanced information about Vanillagrid. Referred to as 'vg' from below."
            },
            {
                "function": "vanillagrid_onBeforeCreate",
                "param": "e(event), vg(Object)",
                "return": "Boolean",
                "remarkKor": "grid를 생성 전에 호출하는 메소드. false 반환 시 _onCreate하지 않는다. _onCreate를 제어하기 위한 메소드.",
                "remarkEng": "A method called before creating the grid. If it returns false, _onCreate is not executed. A method to control _onCreate."
            },
            {
                "function": "vg.create()",
                "param": "",
                "return": "",
                "remarkKor": "grid를 화면에 생성한다.",
                "remarkEng": "Creates the grid on the screen."
            },
            {
                "function": "vanillagrid_onAfterCreate",
                "param": "e(event), vg(Object)",
                "return": "",
                "remarkKor": "grid 생성 후 호출되는 메소드. Vanillagrid 객체를 가지고있다.",
                "remarkEng": "A method called after the grid is created. Holds the Vanillagrid object."
            },
            {
                "function": "vg.destroy()",
                "param": "",
                "return": "",
                "remarkKor": "document에 mount된 vanillagrid와 모든 관련 객체를 삭제한다. 다시 getVanillagrid하여 grid를 생성할 수 있다.",
                "remarkEng": "Deletes the mounted vanillagrid and all related objects from the document. The grid can be created again by calling getVanillagrid."
            }
        ];
        this.VGO_ATTRIBUTES = [
            {
                "attribute": "vg",
                "type": "Object",
                "default": "",
                "remarkKor": "getVanillagrid로 가져오는 객체. vg.create()로 grid를 생성한다.",
                "remarkEng": "An object obtained via getVanillagrid. Creates the grid with vg.create()."
            },
            {
                "attribute": "vg.sortAscSpan",
                "type": "Html node",
                "default": "null",
                "remarkKor": "Html node이다. vg.create()전에 사용자화된 Html node를 삽입하면 해당 node가 header의 sort asc span으로 대체된다.",
                "remarkEng": "Html node. If a customized Html node is inserted before vg.create(), it replaces the header's sort asc span."
            },
            {
                "attribute": "vg.sortDescSpan",
                "type": "Html node",
                "default": "null",
                "remarkKor": "Html node이다. vg.create()전에 사용자화된 Html node를 삽입하면 해당 node가 header의 sort desc span으로 대체된다.",
                "remarkEng": "Html node. If a customized Html node is inserted before vg.create(), it replaces the header's sort desc span."
            },
            {
                "attribute": "vg.filterSpan",
                "type": "Html node",
                "default": "null",
                "remarkKor": "Html node이다. vg.create()전에 사용자화된 Html node를 삽입하면 해당 node가 header의 filter span으로 대체된다. ex) vg.filterSpan = document.createElement('i'); vg.filterSpan.setAttribute('class', 'fas fa-search'); vg.create();",
                "remarkEng": "Html node. If a customized Html node is inserted before vg.create(), it replaces the header's filter span. ex) vg.filterSpan = document.createElement('i'); vg.filterSpan.setAttribute('class', 'fas fa-search'); vg.create();"
            },
            {
                "attribute": "vg.footerFormula",
                "type": "Object",
                "default": "{}",
                "remarkKor": "key(String) - value(Function)으로 구성된 객체이다. vg.create()전에 설정하면 해당 footer에 key를 통해 자동으로 해당 function을 수행하여 값을 받는다. funxtion의 구조는 colValues를 파라메터로 받고 footer에 보여줄 값을 반환한다. ex) vg.footerFormula = { 'CONCAT' : function (colValues) { return colValues.join(','); }, 'CHECK_COUNT' : function (colValues) { let count = 1; colValues.forEach((val) => { if(val === 'true') count = count * 2; }); return count; } } <v-col id='check' dataType='checkbox' footer='CHECK_COUNT'></v-col>",
                "remarkEng": "An object consisting of key(String) - value(Function). If set before vg.create(), the function associated with the key is automatically executed for the footer, and its value is obtained. The structure of the function receives colValues as a parameter and returns the value to be displayed in the footer. ex) vg.footerFormula = { 'CONCAT' : function (colValues) { return colValues.join(','); }, 'CHECK_COUNT' : function (colValues) { let count = 1; colValues.forEach((val) => { if(val === 'true') count = count * 2; }); return count; } } <v-col id='check' dataType='checkbox' footer='CHECK_COUNT'></v-col>"
            },
            {
                "attribute": "vg.dataType",
                "type": "Object",
                "default": "{}",
                "remarkKor": "새로운 dataType을 추가할 수 있는 객체. key(String) : value(Object)구조이며, value의 object는 정해진 keyword에 정해진 유형의 value를 넣는다.",
                "remarkEng": "An object for adding new dataTypes. The structure is key(String) : value(Object), and the value object includes predefined keywords with specific value types."
            },
            {
                "attribute": "vg.dataType.cellStyle",
                "type": "Object",
                "default": "null",
                "remarkKor": "dataType의 cell의 style을 지정한다. element.style[key] = cellStyle[key]로 값이 삽입된다. 키는 js 요소 style지정 키로, 값은 css문자열 그대로 넣어야함.",
                "remarkEng": "Specifies the style of the cell for the dataType. The value is inserted as element.style[key] = cellStyle[key]. The key is the JS element style key, and the value is the CSS string."
            },
            {
                "attribute": "vg.dataType.onSelected",
                "type": "function",
                "default": "null",
                "remarkKor": "cell을 선택할 때 호출할 function. 파라메터로 현재 cell과 cell의 getData()를 받는다.",
                "remarkEng": "Function called when the cell is selected. Receives the current cell and the cell's getData() as parameters."
            },
            {
                "attribute": "vg.dataType.onUnselected",
                "type": "function",
                "default": "null",
                "remarkKor": "cell을 선택 해제 할 때 호출할 function. 파라메터로 현재 cell과 cell의 getData()를 받는다.",
                "remarkEng": "Function called when the cell is deselected. Receives the current cell and the cell's getData() as parameters."
            },
            {
                "attribute": "vg.dataType.onSelectedAndKeyDown",
                "type": "function",
                "default": "null",
                "remarkKor": "cell을 선택할 상태에서 키보드를 눌렀을 때 호출하는 function. 파라메터로 event, cell의 getData()값을 받는다. false를 반환 시 기존 동작을 하지 않는다.",
                "remarkEng": "Function called when a key is pressed while the cell is selected. Receives event and the cell's getData() as parameters. If it returns false, the default behavior is not executed."
            },
            {
                "attribute": "vg.dataType.onClick",
                "type": "function",
                "default": "null",
                "remarkKor": "cell 또는 cell의 childNode를 클릭했을 때 호출하는 function. 파라메터로 event, cell의 getData()값을 받는다. false를 반환 시 기존 동작을 하지 않는다.",
                "remarkEng": "Function called when the cell or its child node is clicked. Receives event and the cell's getData() as parameters. If it returns false, the default behavior is not executed."
            },
            {
                "attribute": "vg.dataType.onMousedown",
                "type": "function",
                "default": "null",
                "remarkKor": "cell 또는 cell의 childNode를 mouse down했을 때 호출하는 function. 파라메터로 event, cell의 getData()값을 받는다. false를 반환 시 기존 동작을 하지 않는다.",
                "remarkEng": "Function called when the cell or its child node is mouse-downed. Receives event and the cell's getData() as parameters. If it returns false, the default behavior is not executed."
            },
            {
                "attribute": "vg.dataType.getValue",
                "type": "function",
                "default": "null",
                "remarkKor": "cell에 최종으로 저장될 값을 반환하는 function. 파라메터로 cell의 value를 받는다. 반환값은 cell의 최종 value로 삽입된다. cell value는 cell이 가지고 있는 값이다. 정의되지 않으면 기존 수정 value를 최종 value로 삽입함.",
                "remarkEng": "Function that returns the final value to be stored in the cell. Receives the cell's value as a parameter. The return value is inserted as the cell's final value. The cell value is the value that the cell has. If not defined, the default modified value is inserted as the final value."
            },
            {
                "attribute": "vg.dataType.getText",
                "type": "function",
                "default": "null",
                "remarkKor": "cell의 text값으로 삽입될 값을 반환하는 function. 파라메터로 cell의 value를 받는다. 반환 값은 cell의 최종 text값으로 삽입된다. text값은 화면에 표기되는 값이다. 정의되지 않으면 기존 수정 value를 최종 value로 삽입함.",
                "remarkEng": "Function that returns the value to be inserted as the cell's text. Receives the cell's value as a parameter. The return value is inserted as the cell's final text value. The text value is the value displayed on the screen. If not defined, the default modified value is inserted as the final value."
            },
            {
                "attribute": "vg.dataType.getChildNode",
                "type": "function",
                "default": "null",
                "remarkKor": "화면에 표기될 Html node를 반환하는 function. 파라메터로 cell의 getData()를 받는다. 반환 값은 Html node이다. 정의하지 않으면 단순 span에 cell의 value가 표기된다.",
                "remarkEng": "Function that returns the Html node to be displayed on the screen. Receives the cell's getData() as a parameter. The return value is an Html node. If not defined, a simple span with the cell's value is displayed."
            },
            {
                "attribute": "vg.dataType.getEditor",
                "type": "function",
                "default": "null",
                "remarkKor": "편집 node를 반환하는 function. cell 더블클릭 등으로 cell edit을 할때 editor를 불러오는 function이다. 파라메터로 cell node, cell의 getData()값, 변경호출 함수, edit종료 호출 함수를 받는다. 반환값은 Html node여야 한다. getEditor를 정의하지 않으면 해당 dataType은 edit 창을 생성하지 않는다.",
                "remarkEng": "Function that returns the editor node. It is called when editing the cell, such as double-clicking the cell. Receives the cell node, the cell's getData() value, the change call function, and the edit end call function as parameters. The return value must be an Html node. If getEditor is not defined, the dataType does not create an edit window."
            },
            {
                "attribute": "vg.dataType.getEditedValue",
                "type": "function",
                "default": "null",
                "remarkKor": "cell 편집 후 cell에 삽입 될 값을 반환하는 function. 파라메터로 cell에 editor node와 cell의 getData() 값을 받는다. 반환 값은 cell의 value로 삽입된다. 새 dataType은 있지만 getEditedValue 함수를 정의하지 않으면, 해당 dataType은 편집을 해도 수정되지 않는다.",
                "remarkEng": "Function that returns the value to be inserted into the cell after editing. Receives the editor node of the cell and the cell's getData() value as parameters. The return value is inserted as the cell's value. If there is a new dataType but the getEditedValue function is not defined, the dataType is not modified even if edited."
            },
            {
                "attribute": "vg.dataType.getFilterValue",
                "type": "function",
                "default": "null",
                "remarkKor": "filter를 구분 할 값을 반환하는 function. 파라메터로 cell의 값을 받는다. 반환된 값으로 filter를 판단한다. getFilterValue를 정의하지 않으면 자동으로 getText의 값이 반환됨.",
                "remarkEng": "Function that returns the value to be distinguished by the filter. Receives the cell's value as a parameter. The returned value is judged by the filter. If getFilterValue is not defined, the value of getText is automatically returned."
            },
            {
                "attribute": "vg.dataType.getSortValue",
                "type": "function",
                "default": "null",
                "remarkKor": "정렬 시 정렬 기준으로 될 값을 반환하는 function. 파라메터로 cell의 값을 받는다. 반환된 값을 기준으로 cell을 정렬한다. getSortValue를 정의하지 않으면 자동으로 getText의 값이 반환됨.",
                "remarkEng": "Function that returns the value to be the sorting criterion when sorting. Receives the cell's value as a parameter. The cells are sorted based on the returned value. If getSortValue is not defined, the value of getText is automatically returned."
            },
            {
                "attribute": "vg.dataType.getCopyValue",
                "type": "function",
                "default": "null",
                "remarkKor": "cell을 복사할 때 호출할 function. 파라메터로 cell의 getValue()를 받는다. 반환 값은 클립보드에 복사 값으로 들어갈 값이다. getCopyValue를 정의하지 않으면 자동으로 getText의 값이 반환됨.",
                "remarkEng": "Function called when copying the cell. Receives the cell's getValue() as a parameter. The return value is the value that goes into the clipboard. If getCopyValue is not defined, the value of getText is automatically returned."
            },
            {
                "attribute": "vg.dataType.getPasteValue",
                "type": "function",
                "default": "null",
                "remarkKor": "cell에 복사값을 붙여넣기 할 때 호출할 function. 파라메터로 cell의 getData()와 복사된 text값을 받는다. 반환 값은 cell에 삽입될 값이다.",
                "remarkEng": "Function called when pasting a copied value into the cell. Receives the cell's getData() and the copied text value as parameters. The return value is the value to be inserted into the cell."
            },
            {
                "attribute": "vg.lessoreq0x7ffByte",
                "type": "Number",
                "default": "2",
                "remarkKor": "문자열의 byte 체크 시 사용하는 값. 문자의 아스키 코드가 0x7ff Byte 보다 작거나 같은 경우 산정할 byte값이다. ex) UTF-8, 16 기준 2, UTF-32 기준 4",
                "remarkEng": "The value used when checking the byte of a string. The byte value is calculated if the character's ASCII code is less than or equal to 0x7ff Byte. ex) 2 for UTF-8, 16, 4 for UTF-32"
            },
            {
                "attribute": "vg.lessoreq0xffffByte",
                "type": "Number",
                "default": "3",
                "remarkKor": "문자열의 byte 체크 시 사용하는 값. 문자의 아스키 코드가 0x7ff Byte 보다 크고, 0xffff Byte 보다 작거나 같은 경우 산정할 byte값이다. ex) UTF-8 기준 3, UTF-16 기준 2, UTF-32 기준 4",
                "remarkEng": "The value used when checking the byte of a string. The byte value is calculated if the character's ASCII code is greater than 0x7ff Byte and less than or equal to 0xffff Byte. ex) 3 for UTF-8, 2 for UTF-16, 4 for UTF-32"
            },
            {
                "attribute": "vg.greater0xffffByte",
                "type": "Number",
                "default": "4",
                "remarkKor": "문자열의 byte 체크 시 사용하는 값. 문자의 아스키 코드가 0xffff Byte 보다 큰 경우 산정할 byte값이다. ex) UTF-8, 16, 32 기준 4",
                "remarkEng": "The value used when checking the byte of a string. The byte value is calculated if the character's ASCII code is greater than 0xffff Byte. ex) 4 for UTF-8, 16, 32"
            }
        ];
        this.VGO_GRID_INFO_ATTRIBUTES = [
            {
                "attribute": "vg.defaultGridInfo",
                "type": "Object",
                "default": "",
                "remarkKor": "grid의 기능적 속성의 default 값을 지정할 수 있는 객체.",
                "remarkEng": "An object that can specify the default values for the functional properties of the grid."
            },
            {
                "attribute": "vg.defaultGridInfo.locked",
                "type": "Boolean",
                "default": "FALSE",
                "remarkKor": "grid의 locked 속성의 default 값.",
                "remarkEng": "The default value for the grid's locked attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.lockedColor",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 lockedColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's lockedColor attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.resizable",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 resizable 속성의 default 값.",
                "remarkEng": "The default value for the grid's resizable attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.redoable",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 redoable 속성의 default 값.",
                "remarkEng": "The default value for the grid's redoable attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.redoCount",
                "type": "Number",
                "default": "30",
                "remarkKor": "grid의 redoCount 속성의 default 값.",
                "remarkEng": "The default value for the grid's redoCount attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.visible",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 visible 속성의 default 값.",
                "remarkEng": "The default value for the grid's visible attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.rownumVisible",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 rownumVisible 속성의 default 값.",
                "remarkEng": "The default value for the grid's rownumVisible attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.rownumSize",
                "type": "String(cssText)",
                "default": "60px",
                "remarkKor": "grid의 rownumSize 속성의 default 값.",
                "remarkEng": "The default value for the grid's rownumSize attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.statusVisible",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 statusVisible 속성의 default 값.",
                "remarkEng": "The default value for the grid's statusVisible attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.selectionPolicy",
                "type": "String",
                "default": "range",
                "remarkKor": "grid의 selectionPolicy 속성의 default 값.",
                "remarkEng": "The default value for the grid's selectionPolicy attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.nullValue",
                "type": "var",
                "default": "null",
                "remarkKor": "grid의 nullValue 속성의 default 값.",
                "remarkEng": "The default value for the grid's nullValue attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.dateFormat",
                "type": "String",
                "default": "yyyy-mm-dd",
                "remarkKor": "grid의 dateFormat 속성의 default 값.",
                "remarkEng": "The default value for the grid's dateFormat attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.monthFormat",
                "type": "String",
                "default": "yyyy-mm",
                "remarkKor": "grid의 monthFormat 속성의 default 값.",
                "remarkEng": "The default value for the grid's monthFormat attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.alterRow",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 alterRow 속성의 default 값.",
                "remarkEng": "The default value for the grid's alterRow attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.frozenColCount",
                "type": "Number",
                "default": "0",
                "remarkKor": "grid의 frozenColCount 속성의 default 값.",
                "remarkEng": "The default value for the grid's frozenColCount attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.frozenRowCount",
                "type": "Number",
                "default": "0",
                "remarkKor": "grid의 frozenRowCount 속성의 default 값.",
                "remarkEng": "The default value for the grid's frozenRowCount attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.sortable",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 sortable 속성의 default 값.",
                "remarkEng": "The default value for the grid's sortable attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.filterable",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 filterable 속성의 default 값.",
                "remarkEng": "The default value for the grid's filterable attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.allCheckable",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 allCheckable 속성의 default 값.",
                "remarkEng": "The default value for the grid's allCheckable attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.checkedValue",
                "type": "String",
                "default": "Y",
                "remarkKor": "grid의 checkedValue 속성의 default 값.",
                "remarkEng": "The default value for the grid's checkedValue attribute."
            },
            {
                "attribute": "vg.defaultGridInfo.uncheckedValue",
                "type": "String",
                "default": "N",
                "remarkKor": "grid의 uncheckedValue 속성의 default 값.",
                "remarkEng": "The default value for the grid's uncheckedValue attribute."
            }
        ];
        this.VGO_GRID_CSSINFO_ATTRIBUTES = [
            {
                "attribute": "vg.defaultGridCssInfo",
                "type": "Object",
                "default": "",
                "remarkKor": "grid의 css적인 속성의 default 값을 지정할 수 있는 객체.",
                "remarkEng": "An object that can specify the default values for the grid's CSS properties."
            },
            {
                "attribute": "vg.defaultGridCssInfo.width",
                "type": "String(cssText)",
                "default": "100%",
                "remarkKor": "grid의 width 속성의 default 값.",
                "remarkEng": "The default value for the grid's width attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.height",
                "type": "String(cssText)",
                "default": "600px",
                "remarkKor": "grid의 height 속성의 default 값.",
                "remarkEng": "The default value for the grid's height attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.margin",
                "type": "String(cssText)",
                "default": "0 auto",
                "remarkKor": "grid의 margin 속성의 default 값.",
                "remarkEng": "The default value for the grid's margin attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.padding",
                "type": "String(cssText)",
                "default": "0",
                "remarkKor": "grid의 padding 속성의 default 값.",
                "remarkEng": "The default value for the grid's padding attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.sizeLevel",
                "type": "Number",
                "default": "5",
                "remarkKor": "grid의 sizeLevel 속성의 default 값.",
                "remarkEng": "The default value for the grid's sizeLevel attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.verticalAlign",
                "type": "String",
                "default": "center",
                "remarkKor": "grid의 verticalAlign 속성의 default 값.",
                "remarkEng": "The default value for the grid's verticalAlign attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.cellFontSize",
                "type": "Number(px)",
                "default": "14",
                "remarkKor": "grid의 cellFontSize 속성의 default 값.",
                "remarkEng": "The default value for the grid's cellFontSize attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.cellMinHeight",
                "type": "Number(px)",
                "default": "21",
                "remarkKor": "grid의 cellMinHeight 속성의 default 값.",
                "remarkEng": "The default value for the grid's cellMinHeight attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.horizenBorderSize",
                "type": "Number(px)",
                "default": "1",
                "remarkKor": "grid의 horizenBorderSize 속성의 default 값.",
                "remarkEng": "The default value for the grid's horizenBorderSize attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.verticalBorderSize",
                "type": "Number(px)",
                "default": "1",
                "remarkKor": "grid의 verticalBorderSize 속성의 default 값.",
                "remarkEng": "The default value for the grid's verticalBorderSize attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.gridFontFamily",
                "type": "String",
                "default": "Arial",
                "remarkKor": "grid의 gridFontFamily 속성의 default 값.",
                "remarkEng": "The default value for the grid's gridFontFamily attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.editorFontFamily",
                "type": "String",
                "default": "Arial",
                "remarkKor": "grid의 editorFontFamily 속성의 default 값.",
                "remarkEng": "The default value for the grid's editorFontFamily attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.linkHasUnderLine",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "grid의 linkHasUnderLine 속성의 default 값.",
                "remarkEng": "The default value for the grid's linkHasUnderLine attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.invert",
                "type": "Boolean",
                "default": "FALSE",
                "remarkKor": "grid의 invertColor속성의 default 값.",
                "remarkEng": "The default value for the grid's invertColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.color",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 color 속성의 default 값.",
                "remarkEng": "The default value for the grid's color attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.colorSet",
                "type": "String",
                "default": "null",
                "remarkKor": "grid의 colorSet 속성의 default 값.",
                "remarkEng": "The default value for the grid's colorSet attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.gridBorderColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 gridBorderColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's gridBorderColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.headerCellBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 headerCellBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's headerCellBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.headerCellBorderColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 headerCellBorderColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's headerCellBorderColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.headerCellFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 headerCellFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's headerCellFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.footerCellBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 footerCellBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's footerCellBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.footerCellBorderColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 footerCellBorderColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's footerCellBorderColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.footerCellFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 footerCellFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's footerCellFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.bodyBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 bodyBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's bodyBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.bodyCellBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 bodyCellBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's bodyCellBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.bodyCellBorderColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 bodyCellBorderColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's bodyCellBorderColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.bodyCellFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 bodyCellFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's bodyCellFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.editorBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 editorBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's editorBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.editorFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 editorFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's editorFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.selectCellBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 selectCellBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's selectCellBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.selectCellFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 selectCellFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's selectCellFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.selectColBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 selectColBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's selectColBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.selectColFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 selectColFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's selectColFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.selectRowBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 selectRowBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's selectRowBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.selectRowFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 selectRowFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's selectRowFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.mouseoverCellBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 mouseoverCellBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's mouseoverCellBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.mouseoverCellFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 mouseoverCellFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's mouseoverCellFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.lockCellBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 lockCellBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's lockCellBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.lockCellFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 lockCellFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's lockCellFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.alterRowBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 alterRowBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's alterRowBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.alterRowFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 alterRowFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's alterRowFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.buttonFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 buttonFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's buttonFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.buttonBorderColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 buttonBorderColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's buttonBorderColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.buttonBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 buttonBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's buttonBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.buttonHoverFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 buttonHoverFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's buttonHoverFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.buttonHoverBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 buttonHoverBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's buttonHoverBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.buttonActiveFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 buttonActiveFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's buttonActiveFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.buttonActiveBackColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 buttonActiveBackColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's buttonActiveBackColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.linkFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 linkFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's linkFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.linkHoverFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 linkHoverFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's linkHoverFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.linkActiveFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 linkActiveFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's linkActiveFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.linkVisitedFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 linkVisitedFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's linkVisitedFontColor attribute."
            },
            {
                "attribute": "vg.defaultGridCssInfo.linkFocusFontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "grid의 linkFocusFontColor 속성의 default 값.",
                "remarkEng": "The default value for the grid's linkFocusFontColor attribute."
            }
        ];
        this.VGO_COLUMN_INFO_ATTRIBUTES = [
            {
                "attribute": "vg.defaultColInfo",
                "type": "Object",
                "default": "",
                "remarkKor": "column 속성의 default 값을 지정할 수 있는 객체.",
                "remarkEng": "An object that can specify the default values for the column attributes."
            },
            {
                "attribute": "vg.defaultColInfo.rowMerge",
                "type": "Boolean",
                "default": "FALSE",
                "remarkKor": "column의 rowMerge 속성의 default 값.",
                "remarkEng": "The default value for the column's rowMerge attribute."
            },
            {
                "attribute": "vg.defaultColInfo.colMerge",
                "type": "Boolean",
                "default": "FALSE",
                "remarkKor": "column의 colMerge 속성의 default 값.",
                "remarkEng": "The default value for the column's colMerge attribute."
            },
            {
                "attribute": "vg.defaultColInfo.colVisible",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "column의 colVisible 속성의 default 값.",
                "remarkEng": "The default value for the column's colVisible attribute."
            },
            {
                "attribute": "vg.defaultColInfo.required",
                "type": "Boolean",
                "default": "FALSE",
                "remarkKor": "column의 required 속성의 default 값.",
                "remarkEng": "The default value for the column's required attribute."
            },
            {
                "attribute": "vg.defaultColInfo.resizable",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "column의 resizable 속성의 default 값.",
                "remarkEng": "The default value for the column's resizable attribute."
            },
            {
                "attribute": "vg.defaultColInfo.sortable",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "column의 sortable 속성의 default 값.",
                "remarkEng": "The default value for the column's sortable attribute."
            },
            {
                "attribute": "vg.defaultColInfo.filterable",
                "type": "Boolean",
                "default": "TRUE",
                "remarkKor": "column의 filterable 속성의 default 값.",
                "remarkEng": "The default value for the column's filterable attribute."
            },
            {
                "attribute": "vg.defaultColInfo.originWidth",
                "type": "String(cssText)",
                "default": "80px",
                "remarkKor": "column의 originWidth 속성의 default 값.",
                "remarkEng": "The default value for the column's originWidth attribute."
            },
            {
                "attribute": "vg.defaultColInfo.dataType",
                "type": "String",
                "default": "text",
                "remarkKor": "column의 dataType 속성의 default 값.",
                "remarkEng": "The default value for the column's dataType attribute."
            },
            {
                "attribute": "vg.defaultColInfo.selectSize",
                "type": "String(cssText)",
                "default": "100%",
                "remarkKor": "column의 selectSize 속성의 default 값.",
                "remarkEng": "The default value for the column's selectSize attribute."
            },
            {
                "attribute": "vg.defaultColInfo.format",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 format 속성의 default 값.",
                "remarkEng": "The default value for the column's format attribute."
            },
            {
                "attribute": "vg.defaultColInfo.codes",
                "type": "Array",
                "default": "null",
                "remarkKor": "column의 codes 속성의 default 값.",
                "remarkEng": "The default value for the column's codes attribute."
            },
            {
                "attribute": "vg.defaultColInfo.defaultCode",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 defaultCode 속성의 default 값.",
                "remarkEng": "The default value for the column's defaultCode attribute."
            },
            {
                "attribute": "vg.defaultColInfo.maxLength",
                "type": "Number",
                "default": "null",
                "remarkKor": "column의 maxLength 속성의 default 값.",
                "remarkEng": "The default value for the column's maxLength attribute."
            },
            {
                "attribute": "vg.defaultColInfo.maxByte",
                "type": "Number",
                "default": "null",
                "remarkKor": "column의 maxByte 속성의 default 값.",
                "remarkEng": "The default value for the column's maxByte attribute."
            },
            {
                "attribute": "vg.defaultColInfo.maxNumber",
                "type": "Number",
                "default": "null",
                "remarkKor": "column의 maxNumber 속성의 default 값.",
                "remarkEng": "The default value for the column's maxNumber attribute."
            },
            {
                "attribute": "vg.defaultColInfo.minNumber",
                "type": "Number",
                "default": "null",
                "remarkKor": "column의 minNumber 속성의 default 값.",
                "remarkEng": "The default value for the column's minNumber attribute."
            },
            {
                "attribute": "vg.defaultColInfo.roundNumber",
                "type": "Number",
                "default": "null",
                "remarkKor": "column의 roundNumber 속성의 default 값.",
                "remarkEng": "The default value for the column's roundNumber attribute."
            },
            {
                "attribute": "vg.defaultColInfo.align",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 align 속성의 default 값.",
                "remarkEng": "The default value for the column's align attribute."
            },
            {
                "attribute": "vg.defaultColInfo.verticalAlign",
                "type": "String",
                "default": "null",
                "remarkKor": "column의 verticalAlign 속성의 default 값.",
                "remarkEng": "The default value for the column's verticalAlign attribute."
            },
            {
                "attribute": "vg.defaultColInfo.backColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "column의 backColor 속성의 default 값.",
                "remarkEng": "The default value for the column's backColor attribute."
            },
            {
                "attribute": "vg.defaultColInfo.fontColor",
                "type": "String(cssTextHexColor)",
                "default": "null",
                "remarkKor": "column의 fontColor 속성의 default 값.",
                "remarkEng": "The default value for the column's fontColor attribute."
            },
            {
                "attribute": "vg.defaultColInfo.fontBold",
                "type": "Boolean",
                "default": "FALSE",
                "remarkKor": "column의 fontBold 속성의 default 값.",
                "remarkEng": "The default value for the column's fontBold attribute."
            },
            {
                "attribute": "vg.defaultColInfo.fontItalic",
                "type": "Boolean",
                "default": "FALSE",
                "remarkKor": "column의 fontItalic 속성의 default 값.",
                "remarkEng": "The default value for the column's fontItalic attribute."
            },
            {
                "attribute": "vg.defaultColInfo.fontThruline",
                "type": "Boolean",
                "default": "FALSE",
                "remarkKor": "column의 fontThruline 속성의 default 값.",
                "remarkEng": "The default value for the column's fontThruline attribute."
            },
            {
                "attribute": "vg.defaultColInfo.fontUnderline",
                "type": "Boolean",
                "default": "FALSE",
                "remarkKor": "column의 fontUnderline 속성의 default 값.",
                "remarkEng": "The default value for the column's fontUnderline attribute."
            }
        ];
    }
    return new Consts();
}

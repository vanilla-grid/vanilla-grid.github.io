function getConsts () {
    function Consts () {
        this.GRID_ATTRIBUTES = [
            'id'
            ,'name'
            ,'locked'
            ,'lockedColor'
            ,'resizable'
            ,'redoable'
            ,'redoCount'
            ,'visible'
            ,'headerVisible'
            ,'rownumVisible'
            ,'rownumSize'
            ,'rownumLockedColor'
            ,'statusVisible'
            ,'statusLockedColor'
            ,'selectionPolicy'
            ,'nullValue'
            ,'dateFormat'
            ,'monthFormat'
            ,'alterRow'
            ,'frozenColCount'
            ,'frozenRowCount'
            ,'sortable'
            ,'filterable'
            ,'allCheckable'
            ,'checkedValue'
            ,'uncheckedValue'
            ,'width'
            ,'height'
            ,'margin'
            ,'padding'
            ,'sizeLevel'
            ,'verticalAlign'
            ,'cellFontSize'
            ,'cellMinHeight'
            ,'horizenBorderSize'
            ,'verticalBorderSize'
            ,'gridFontFamily'
            ,'editorFontFamily'
            ,'overflowWrap'
            ,'wordBreak'
            ,'whiteSpace'
            ,'linkHasUnderLine'
            ,'invertColor'
            ,'colorSet'
            ,'color'
            ,'gridBorderColor'
            ,'headerCellBackColor'
            ,'headerCellBorderColor'
            ,'headerCellFontColor'
            ,'footerCellBackColor'
            ,'footerCellBorderColor'
            ,'footerCellFontColor'
            ,'bodyBackColor'
            ,'bodyCellBackColor'
            ,'bodyCellBorderColor'
            ,'bodyCellFontColor'
            ,'editorBackColor'
            ,'editorFontColor'
            ,'selectCellBackColor'
            ,'selectCellFontColor'
            ,'selectColBackColor'
            ,'selectColFontColor'
            ,'selectRowBackColor'
            ,'selectRowFontColor'
            ,'mouseoverCellBackColor'
            ,'mouseoverCellFontColor'
            ,'lockCellBackColor'
            ,'lockCellFontColor'
            ,'alterRowBackColor'
            ,'alterRowFontColor'
            ,'buttonFontColor'
            ,'buttonBorderColor'
            ,'buttonBackColor'
            ,'buttonHoverFontColor'
            ,'buttonHoverBackColor'
            ,'buttonActiveFontColor'
            ,'buttonActiveBackColor'
            ,'linkFontColor'
            ,'linkHoverFontColor'
            ,'linkActiveFontColor'
            ,'linkVisitedFontColor'
            ,'linkFocusFontColor'
        ];
        this.COLUMN_ATTRIBUTES = [
            'id'
            ,'name'
            ,'header'
            ,'footer'
            ,'dataType'
            ,'width'
            ,'untarget'
            ,'rowMerge'
            ,'colMerge'
            ,'visible'
            ,'required'
            ,'resizable'
            ,'sortable'
            ,'filterable'
            ,'selectSize'
            ,'locked'
            ,'lockedColor'
            ,'format'
            ,'codes'
            ,'defaultCode'
            ,'maxLength'
            ,'maxByte'
            ,'maxNumber'
            ,'minNumber'
            ,'roundNumber'
            ,'align'
            ,'verticalAlign'
            ,'overflowWrap'
            ,'wordBreak'
            ,'whiteSpace'
            ,'backColor'
            ,'fontColor'
            ,'fontBold'
            ,'fontItalic'
            ,'fontThruline'
            ,'fontUnderline'
        ];
        this.EVENTS = [
            'onActiveCell'
            ,'onActiveRow'
            ,'onActiveCol'
            ,'onActiveCells'
            ,'onActiveRows'
            ,'onActiveCols'
            ,'onBeforeChange'
            ,'onAfterChange'
            ,'onBeforeClickCell'
            ,'onAfterClickCell'
            ,'onClickSelect'
            ,'onClickCheckbox'
            ,'onClickButton'
            ,'onClickLink'
            ,'onBeforeDblClickCell'
            ,'onAfterDblClickCell'
            ,'onBeforeClickHeader'
            ,'onAfterClickHeader'
            ,'onBeforeDblClickHeader'
            ,'onAfterDblClickHeader'
            ,'onEditEnter'
            ,'onEditEnding'
            ,'onClickFilter'
            ,'onChooseFilter'
            ,'onPaste'
            ,'onCopy'
            ,'onResize'
            ,'onKeydownEditor'
            ,'onInputEditor'
            ,'onKeydownGrid'
        ];
        this.METHODS = [
            'getHeaderRowCount'
            ,'getHeaderText'
            ,'setHeaderText'
            ,'reloadFilterValue'
            ,'reloadColFilter'
            ,'getFooterRowCount'
            ,'reloadFooterValue'
            ,'setFooterValue'
            ,'getFooterValue'
            ,'setFooterFormula'
            ,'getFooterFormula'
            ,'setFooterFunction'
            ,'getGridInfo'
            ,'load'
            ,'clear'
            ,'clearStatus'
            ,'getRowCount'
            ,'getColCount'
            ,'getValues'
            ,'getDatas'
            ,'sort'
            ,'checkRequired'
            ,'setGridMount'
            ,'getGridFilter'
            ,'setGridWidth'
            ,'setGridHeight'
            ,'setGridSizeLevel'
            ,'setGridVerticalAlign'
            ,'setCellFontSize'
            ,'setCellMinHeight'
            ,'setHorizenBorderSize'
            ,'setVerticalBorderSize'
            ,'setGridColor'
            ,'setGridColorSet'
            ,'invertColor'
            ,'setGridName'
            ,'getGridName'
            ,'setGridLocked'
            ,'isGridLocked'
            ,'setGridLockedColor'
            ,'isGridResizable'
            ,'setGridResizable'
            ,'setGridRecodeCount'
            ,'getGridRecodeCount'
            ,'setGridRedoable'
            ,'isGridRedoable'
            ,'setGridVisible'
            ,'isGridVisible'
            ,'setHeaderVisible'
            ,'isHeaderVisible'
            ,'setGridRownumLockedColor'
            ,'isGridRownumLockedColor'
            ,'setGridRownumSize'
            ,'getGridRownumSize'
            ,'setGridStatusLockedColor'
            ,'isGridStatusLockedColor'
            ,'setGridSelectionPolicy'
            ,'getGridSelectionPolicy'
            ,'setGridNullValue'
            ,'getGridNullValue'
            ,'setGridDateFormat'
            ,'getGridDateFormat'
            ,'setGridMonthFormat'
            ,'getGridMonthFormat'
            ,'setGridAlterRow'
            ,'setGridFrozenColCount'
            ,'getGridFrozenColCount'
            ,'setGridFrozenRowCount'
            ,'getGridFrozenRowCount'
            ,'setGridSortable'
            ,'isGridSortalbe'
            ,'setGridFilterable'
            ,'isGridFilterable'
            ,'setGridAllCheckable'
            ,'isGridAllCheckable'
            ,'setGridCheckedValue'
            ,'getGridCheckedValue'
            ,'setGridUncheckedValue'
            ,'getGridUncheckedValue'
            ,'addCol'
            ,'removeCol'
            ,'setColInfo'
            ,'getColInfo'
            ,'getColDatas'
            ,'setColSameValue'
            ,'getColValues'
            ,'getColTexts'
            ,'isColUnique'
            ,'getColId'
            ,'getColIndex'
            ,'setColName'
            ,'getColName'
            ,'openFilter'
            ,'closeFilter'
            ,'setColFilterValue'
            ,'getColFilterValues'
            ,'getColFilterValue'
            ,'setColUntarget'
            ,'setColRowMerge'
            ,'isColRowMerge'
            ,'setColColMerge'
            ,'isColColMerge'
            ,'setColVisible'
            ,'isColVisible'
            ,'setColRequired'
            ,'isColRequired'
            ,'setColResizable'
            ,'isColResizable'
            ,'setColSortable'
            ,'isColSortable'
            ,'setColFilterable'
            ,'isColFilterable'
            ,'setColOriginWidth'
            ,'getColOriginWidth'
            ,'setColDataType'
            ,'getColDataType'
            ,'setColSelectSize'
            ,'getColSelectSize'
            ,'setColLocked'
            ,'isColLocked'
            ,'setColLockedColor'
            ,'isColLockedColor'
            ,'setColFormat'
            ,'getColFormat'
            ,'setColCodes'
            ,'getColCodes'
            ,'setColDefaultCode'
            ,'getColDefaultCode'
            ,'setColMaxLength'
            ,'getColMaxLength'
            ,'setColMaxByte'
            ,'getColMaxByte'
            ,'setColMaxNumber'
            ,'getColMaxNumber'
            ,'setColMinNumber'
            ,'getColMinNumber'
            ,'setColRoundNumber'
            ,'getColRoundNumber'
            ,'setColAlign'
            ,'getColAlign'
            ,'setColVerticalAlign'
            ,'getColVerticalAlign'
            ,'setColOverflowWrap'
            ,'getColOverflowWrap'
            ,'setColWordBreak'
            ,'getColWordBreak'
            ,'setColWhiteSpace'
            ,'getColWhiteSpace'
            ,'setColBackColor'
            ,'getColBackColor'
            ,'setColFontColor'
            ,'getColFontColor'
            ,'setColFontBold'
            ,'isColFontBold'
            ,'setColFontItalic'
            ,'isColFontItalic'
            ,'setColFontThruline'
            ,'isColFontThruline'
            ,'setColFontUnderline'
            ,'isColFontUnderline'
            ,'addRow'
            ,'removeRow'
            ,'setRowStatus'
            ,'getRowStatus'
            ,'setRowDatas'
            ,'getRowDatas'
            ,'setRowValues'
            ,'getRowValues'
            ,'getRowTexts'
            ,'setRowVisible'
            ,'isRowVisible'
            ,'setRowDataType'
            ,'setRowLocked'
            ,'setRowLockedColor'
            ,'setRowAlign'
            ,'setRowVerticalAlign'
            ,'setRowBackColor'
            ,'setRowFontColor'
            ,'setRowFontBold'
            ,'setRowFontItalic'
            ,'setRowFontThruline'
            ,'setRowFontUnderline'
            ,'searchRowsWithMatched'
            ,'searchRowDatasWithMatched'
            ,'searchRowValuesWithMatched'
            ,'searchRowsWithFunction'
            ,'searchRowDatasWithFunction'
            ,'searchRowValuesWithFunction'
            ,'setCellData'
            ,'getCellData'
            ,'setCellValue'
            ,'getCellValue'
            ,'getCellText'
            ,'setCellRequired'
            ,'getCellRequired'
            ,'setCellDataType'
            ,'getCellDataType'
            ,'setCellLocked'
            ,'isCellLocked'
            ,'setCellLockedColor'
            ,'isCellLockedColor'
            ,'setCellFormat'
            ,'getCellFormat'
            ,'setCellCodes'
            ,'getCellCodes'
            ,'setCellDefaultCode'
            ,'getCellDefaultCode'
            ,'setCellMaxLength'
            ,'getCellMaxLength'
            ,'setCellMaxByte'
            ,'getCellMaxByte'
            ,'setCellMaxNumber'
            ,'getCellMaxNumber'
            ,'setCellMinNumber'
            ,'getCellMinNumber'
            ,'setCellRoundNumber'
            ,'getCellRoundNumber'
            ,'setCellAign'
            ,'getCellAign'
            ,'setCellverticalAlign'
            ,'getCellverticalAlign'
            ,'setCellOverflowWrap'
            ,'getCellOverflowWrap'
            ,'setCellWordBreak'
            ,'getCellWordBreak'
            ,'setCellWhiteSpace'
            ,'getCellWhiteSpace'
            ,'setCellVisible'
            ,'isCellVisible'
            ,'setCellBackColor'
            ,'getCellBackColor'
            ,'setCellFontColor'
            ,'getCellFontColor'
            ,'setCellFontBold'
            ,'isCellFontBold'
            ,'setCellFontItalic'
            ,'isCellFontItalic'
            ,'setCellFontThruline'
            ,'isCellFontThruline'
            ,'setCellFontUnderline'
            ,'isCellFontUnderline'
            ,'setTargetCell'
            ,'getTargetRow'
            ,'getTargetCol'
            ,'setActiveCells'
            ,'getActiveRows'
            ,'getActiveCols'
            ,'getActiveRange'
            ,'editCell'
            ,'redo'
            ,'undo'
            ,'removeGridMethod'
        ];
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
        this.SAMPLE_KEYS_API = ['api01'];
        this.SAMPLE_GRID_IDS_API = this.SAMPLE_KEYS_API.map(str => `grid${str.charAt(0).toUpperCase() + str.slice(1)}`);

    }
    return new Consts();
}

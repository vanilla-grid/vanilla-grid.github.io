function getDataType() {
    function dataType() {
        /*
        this.sample = {
            cellStyle: {
            },
            onSelected : function (target, data) {
            },
            onUnselected : function (target, data) {
            },
            onSelectedAndKeyDown : function (event, data) {
            },
            onClick : function (event, data) {
            },
            onMousedown : function (event, data) {
            },
            getValue: function (value) {
            },
            getText: function (value) {
            },
            getChildNode: function (data) {
            },
            getEditor: function (target, data, call_modify, call_endEdit) {
            },
            getEditedValue: function (target, data) {
            },
            getFilterValue: function (value) {
            },
            getSortValue: function (value) {
            },
            getCopyValue: function (value) {
            },
            getPasteValue: function (data, text) {
            },
        };
        */
        this.tree = {
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
        };
        this.radio = {
            cellStyle: {
                justifyContent: "center",
                textAlign: "center",
            },
            onSelectedAndKeyDown : function (event, data) {
                if(event.key === 'Enter' || event.key === ' ') {
                    window[data.gridId].setColSameValue(data.col, "N", true);
                    window[data.gridId].setCellValue(data.row, data.col, data.value === "Y" ? "N" : "Y", true);
                    event.stopPropagation();
                    event.preventDefault();
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
        };
        this.img = {
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
                if (value.alt && typeof value.alt === "string" && value.alt.startsWith("Unsplash ")) {
                    value.alt = value.alt.slice("Unsplash ".length);
                }
                return "Unsplash " + value.alt;
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
        };
    }
    return new dataType();
}

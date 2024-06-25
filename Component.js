function getComponents(CONSTS, SAMPLE_GRIDS) {
    function getCode (c) {
        const r = c.replace(/"([^"]*)"/g, (m) => {
            return m.replace(/\n/g, '&#92;n');
        });
        return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    function Components (CONSTS, SAMPLE_GRIDS) {
        //=============================================================
        // level 2 components
        //=============================================================
        this.header = `
            <div class="row">
                <br><br>
                <div class="col-xs-12 text-center logo" @click="onLocation('')">Vanilla Grid</div>
                <br><br>
            </div>`;
        this.nav = `
            <ul class="nav nav-tabs">
                <li v-for="item in navItems" :key="item.id" :class="{ active: currentView === item.id } ">
                    <a href="#" @click="changeView(item.id)">{{item.name}}</a>
                </li>
                <li :class="ToggleClassNameLang">
                    <a class="dropdown-toggle" href="#" @click="toggleLang($event)">
                    {{ getLang }} <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li v-for="item in langItems" :key="item.id">
                            <a href="#" @click="changeLang(item.id, $event)">{{item.name}}</a>
                        </li>
                    </ul>
                </li>
                <div class="navbar-form navbar-right" style="margin-top: 3px; margin-right: -15px; margin-bottom: 0; padding-bottom: 0;">
                    <div class="form-group">
                        <div class="input-group">
                            <input id="searchInput" name="searchInput" type="text" class="form-control search-input" placeholder="Search" @keyup.enter="onSearch($event)">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button" @click="onSearch($event)"><i class="fas fa-search"></i></button>
                            </span>
                        </div>
                        <div id="searchBox" class="search-box">
                            <div id="searchListBox" class="search-list-box">
                                <div v-if="searchIntroTextList.length > 0 || searchIntroGridList.length > 0"><p><b>Intro</b></p>
                                    <div v-if="searchIntroTextList.length > 0">&nbsp;&nbsp;Text
                                        <ul>
                                            <li v-for="item in searchIntroTextList" :key="item.id" class="search-list">
                                                <span style="padding-right: 5px; font-size: 0.5em;">●</span><a href="#" @click="selectSearch($event, 't', item)" v-html="item.li"></a>
                                            </li>
                                        </ul><br>
                                    </div>
                                    <div v-if="searchIntroGridList.length > 0">&nbsp;&nbsp;Grid
                                        <ul>
                                            <li v-for="item in searchIntroGridList" :key="item.id" class="search-list">
                                                <span style="padding-right: 5px; font-size: 0.5em;">●</span><a href="#" @click="selectSearch($event, 'g', item)" v-html="item.li"></a>
                                            </li>
                                        </ul><br>
                                    </div>
                                    <hr>
                                </div>
                                <div v-if="searchStartedTextList.length > 0 || searchStartedGridList.length > 0"><p><b>Getting started</b></p>
                                    <div v-if="searchStartedTextList.length > 0">&nbsp;&nbsp;Text
                                        <ul>
                                            <li v-for="item in searchStartedTextList" :key="item.id" class="search-list">
                                                <span style="padding-right: 5px; font-size: 0.5em;">●</span><a href="#" @click="selectSearch($event, 't', item)" v-html="item.li"></a>
                                            </li>
                                        </ul><br>
                                    </div>
                                    <div v-if="searchStartedGridList.length > 0">&nbsp;&nbsp;Grid
                                        <ul>
                                            <li v-for="item in searchStartedGridList" :key="item.id" class="search-list">
                                                <span style="padding-right: 5px; font-size: 0.5em;">●</span><a href="#" @click="selectSearch($event, 'g', item)" v-html="item.li"></a>
                                            </li>
                                        </ul><br>
                                    </div>
                                    <hr>
                                </div>
                                <div v-if="searchDiveTextList.length > 0 || searchDiveGridList.length > 0"><p><b>Deep dive</b></p>
                                    <div v-if="searchDiveTextList.length > 0">&nbsp;&nbsp;Text
                                        <ul>
                                            <li v-for="item in searchDiveTextList" :key="item.id" class="search-list">
                                                <span style="padding-right: 5px; font-size: 0.5em;">●</span><a href="#" @click="selectSearch($event, 't', item)" v-html="item.li"></a>
                                            </li>
                                        </ul><br>
                                    </div>
                                    <div v-if="searchDiveGridList.length > 0">&nbsp;&nbsp;Grid
                                        <ul>
                                            <li v-for="item in searchDiveGridList" :key="item.id" class="search-list">
                                                <span style="padding-right: 5px; font-size: 0.5em;">●</span><a href="#" @click="selectSearch($event, 'g', item)" v-html="item.li"></a>
                                            </li>
                                        </ul><br>
                                    </div>
                                    <hr>
                                </div>
                                <div v-if="searchApiTextList.length > 0 || searchApiGridList.length > 0"><p><b>API</b></p>
                                    <div v-if="searchApiTextList.length > 0">&nbsp;&nbsp;Text
                                        <ul>
                                            <li v-for="item in searchApiTextList" :key="item.id" class="search-list">
                                                <span style="padding-right: 5px; font-size: 0.5em;">●</span><a href="#" @click="selectSearch($event, 't', item)" v-html="item.li"></a>
                                            </li>
                                        </ul><br>
                                    </div>
                                    <div v-if="searchApiGridList.length > 0">&nbsp;&nbsp;Grid
                                        <ul>
                                            <li v-for="item in searchApiGridList" :key="item.id" class="search-list">
                                                <span style="padding-right: 5px; font-size: 0.5em;">●</span><a href="#" @click="selectSearch($event, 'g', item)" v-html="item.li"></a>
                                            </li>
                                        </ul><br>
                                    </div>
                                    <hr>
                                </div>
                                <div v-if="(searchIntroTextList.length <= 0 && searchStartedTextList.length <= 0 && searchDiveTextList.length <= 0 && searchApiTextList.length <= 0)
                                            && (searchIntroGridList.length <= 0 && searchStartedGridList.length <= 0 && searchDiveGridList.length <= 0 && searchApiGridList.length <= 0)"
                                    class="no-search-list">
                                    <p>{{getCommonContent("COMMON-0006")}}</p>
                                    <p>{{getCommonContent("COMMON-0007")}}</p>
                                </div>
                            </div>
                            <a type="button" class="btn btn-default btn-md" href="#" style="display:block; width: 50%; margin: 0 auto;" @click="offSearch($event)">
                                <i class="fas fa-times"></i>
                            </a>
                        <div>
                    </div>
                </div>
            </ul>`;
        this.body = `<div><slot></slot></div>`;
        this.footer = `
            <div class="container">
                <hr>
                <br><br><br>
                <div class="text-center h6">
                Created by HAN-I. Designed for anyone to easily and simply use the editor
                </div>
                <br>
            </div>`;
        //=============================================================
        // level 2 components
        //=============================================================
        // intro
        this.intro = `
            <div class="row">
                <div class="col-xs-2 text-left" v-show="!isMobileSize">
                    <ul class="nav nav-pills nav-stacked">
                        <li v-for="item in getIntroSubs" :key="item.id" :class="{ active: currentSub === item.id }">
                            <a href="#" @click="changeSub(item.id, $event)">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="text-left" :class="getMainClass">
                    <br>
                    <div class="text-right padding-right">
                        <a type="button" class="btn btn-default btn-md" href="https://github.com/vanilla-grid/vanillagrid.min" target="_blank">
                            <span class="glyphicon glyphicon-download-alt padding-right" aria-hidden="true"></span>Get min.js (go github)
                        </a>
                    </div>
                    <br>
                    <p class="h4 padding-top" :id="introSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0000')">{{getContentText("INTRO-0000")}}</b></p>
                    <br>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.intro[CONSTS.SAMPLE_KEYS_INTRO[0]] +
                    `
                        <div class="btn-group-sm" role="group" style="float: right; margin: 2px 0; di">
                            <button type="button" class="btn btn-default" @click="`+ CONSTS.SAMPLE_GRID_IDS_INTRO[0] +`_onAdd($event)">{{getCommonContent("COMMON-0003")}}</button>
                            <button type="button" class="btn btn-default" @click="`+ CONSTS.SAMPLE_GRID_IDS_INTRO[0] +`_onSave($event)">{{getCommonContent("COMMON-0004")}}</button>
                            <button type="button" class="btn btn-default" @click="`+ CONSTS.SAMPLE_GRID_IDS_INTRO[0] +`_onRemove($event)">{{getCommonContent("COMMON-0005")}}</button>
                        </div>
                    </div>
                    <br><br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.intro[CONSTS.SAMPLE_KEYS_INTRO[0]]}}</code></pre>
                        <p class="h6 text-danger" :id="getContentAnchor('INTRO-0001')">{{getContentText("INTRO-0001")}}</p>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_INTRO[0])}},\n...\n]</code></pre>
                    </div>
                    <br><br><br><br>

                    <p class="h4 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0100')">{{getContentText("INTRO-0100")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('INTRO-0101')">{{getContentText("INTRO-0101")}}</p>
                        <p class="h5" :id="getContentAnchor('INTRO-0102')">{{getContentText("INTRO-0102")}}</p>
                        <p class="h6" class="text-info" :id="getContentAnchor('INTRO-0103')">{{getContentText("INTRO-0103")}}</p>
                        <pre><code>{{getContentCode("INTRO-0104")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('INTRO-0105')">{{getContentText("INTRO-0105")}}</p>
                        <p class="h6" class="text-info" :id="getContentAnchor('INTRO-0106')">{{getContentText("INTRO-0106")}}</p>
                        <pre><code>{{getContentCode("INTRO-0107")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('INTRO-0108')">{{getContentText("INTRO-0108")}}</p>
                    </div>
                    <br><br><br><br>

                    <p class="h4 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0200')">{{getContentText("INTRO-0200")}}</b></p>
                    <br>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.intro[CONSTS.SAMPLE_KEYS_INTRO[1]] +
                    `</div>
                    <br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>`+ getCode(SAMPLE_GRIDS.intro[CONSTS.SAMPLE_KEYS_INTRO[1]]) +`</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_INTRO[1])}},\n...\n]</code></pre>
                    </div>
                    <div class="explain-box">
                        <p class="h5 text-success" :id="getContentAnchor('INTRO-0201')">{{getContentText("INTRO-0201")}}</p>
                    </div>
                    <br><br><br><br>

                    <p class="h4 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0300')">{{getContentText("INTRO-0300")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('INTRO-0301')">{{getContentText("INTRO-0301")}}</p>
                        <p class="h5" :id="getContentAnchor('INTRO-0302')">{{getContentText("INTRO-0302")}}</p>
                        <p class="h5" :id="getContentAnchor('INTRO-0303')">{{getContentText("INTRO-0303")}}</p>
                        <pre><code>{{getContentCode("INTRO-0304")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('INTRO-0305')">{{getContentText("INTRO-0305")}}</p>
                        <pre><code>{{getContentCode("INTRO-0306")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('INTRO-0307')">{{getContentText("INTRO-0307")}}</p>
                        <p class="h5" :id="getContentAnchor('INTRO-0308')">{{getContentText("INTRO-0308")}}</p>
                        <pre><code>{{getContentCode("INTRO-0309")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('INTRO-0310')">{{getContentText("INTRO-0310")}}</p>
                        <pre><code>{{getContentCode("INTRO-0311")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('INTRO-0312')">{{getContentText("INTRO-0312")}}</p>
                        <pre><code>{{getContentCode("INTRO-0313")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('INTRO-0314')">{{getContentText("INTRO-0314")}}</p>
                    </div>
                    <br><br><br><br>

                    <p class="h4 padding-top" :id="introSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0400')">{{getContentText("INTRO-0400")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('INTRO-0401')">{{getContentText("INTRO-0401")}}</p><br>
                        <p class="h5" :id="getContentAnchor('INTRO-0410')">{{getContentText("INTRO-0410")}}</p>
                        <ul>
							<li class="text-info" :id="getContentAnchor('INTRO-0411')">{{getContentText("INTRO-0411")}}</li>
							<li class="text-info" :id="getContentAnchor('INTRO-0412')">{{getContentText("INTRO-0412")}}</li>
							<li class="text-info" :id="getContentAnchor('INTRO-0413')">{{getContentText("INTRO-0413")}}</li>
							<li class="text-info" :id="getContentAnchor('INTRO-0414')">{{getContentText("INTRO-0414")}}</li>
							<li class="text-info" :id="getContentAnchor('INTRO-0415')">{{getContentText("INTRO-0415")}}</li>
							<li class="text-info" :id="getContentAnchor('INTRO-0416')">{{getContentText("INTRO-0416")}}</li>
							<li class="text-info" :id="getContentAnchor('INTRO-0417')">{{getContentText("INTRO-0417")}}</li>
						</ul>
                        <p class="h5" :id="getContentAnchor('INTRO-0430')">{{getContentText("INTRO-0430")}}</p>
                        <ul>
							<li class="text-danger" :id="getContentAnchor('INTRO-0431')">{{getContentText("INTRO-0431")}}</li>
							<li class="text-danger" :id="getContentAnchor('INTRO-0432')">{{getContentText("INTRO-0432")}}</li>
							<li class="text-danger" :id="getContentAnchor('INTRO-0433')">{{getContentText("INTRO-0433")}}</li>
						</ul>
                    </div>
                    <br><br><br><br>

                    <p class="h4 padding-top" :id="introSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0500')">{{getContentText("INTRO-0500")}}</b></p>
                    <br>
                    <div class="explain-box">
						<table class="table">
							<tbody>
								<tr>
									<td class="col-xs-2 text-center">Device</th>
									<td class="col-xs-4">Browser</th>
									<td class="col-xs-6">Compatibility</td>
								</tr>
								<tr>
									<td class="text-center" rowspan="5"><i class="fas fa-desktop"></i></th>
									<td><i class="fab fa-chrome"></i>&nbsp;&nbsp;Chrome</th>
									<td class="text-success">0</td>
								</tr>
								<tr>
									<td><i class="fab fa-edge"></i>&nbsp;&nbsp;Edge</th>
									<td class="text-success">0</td>
								</tr>
								<tr>
									<td><i class="fab fa-safari"></i>&nbsp;&nbsp;Safari</th>
									<td class="text-success">0</td>
								</tr>
								<tr>
									<td><i class="fab fa-firefox"></i>&nbsp;&nbsp;Firefox</th>
									<td class="text-success">0</td>
								</tr>
								<tr>
									<td><i class="fab fa-opera"></i>&nbsp;&nbsp;Opera</th>
									<td class="text-success">0</td>
								</tr>
								<tr>
									<td class="text-center" rowspan="6"><i class="fas fa-mobile-alt"></i></th>
									<td><i class="fab fa-chrome"></i>&nbsp;&nbsp;Chrome Android</th>
									<td class="text-success">0</td>
								</tr>
								<tr>
									<td><i class="fab fa-safari"></i>&nbsp;&nbsp;Safari on IOS</th>
									<td class="text-success">0</td>
								</tr>
								<tr>
									<td><i class="fab fa-firefox"></i>&nbsp;&nbsp;Firefox for Android</th>
									<td class="text-danger">0</td>
								</tr>
								<tr>
									<td><i class="fab fa-opera"></i>&nbsp;&nbsp;Opera Android</th>
									<td class="text-success">0</td>
								</tr>
								<tr>
									<td><i class="fas fa-globe"></i>&nbsp;&nbsp;Samsung Internet</th>
									<td class="text-success">0</td>
								</tr>
								<tr>
									<td><i class="fab fa-android"></i>&nbsp;&nbsp;WebView Android</th>
									<td class="text-success">0</td>
								</tr>
							</tbody>
						</table>
                    </div>
                    <br><br><br><br>

                    <p class="h4 padding-top" :id="introSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0600')">{{getContentText("INTRO-0600")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5">MIT License</p><br>
                    </div>
                    <br><br><br><br>

                    <p class="h4 padding-top" :id="introSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0700')">{{getContentText("INTRO-0700")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5">hison0319@gmail.com</p><br>
                    </div>
                    <br><br><br><br>

                    <br>
                </div>
            </div>`;
        // started
        this.started = `
            <<div class="row">
                <div class="col-xs-2 text-left" v-show="!isMobileSize">
                    <ul class="nav nav-pills nav-stacked">
                        <li v-for="item in getStartedSubs" :key="item.id" :class="{ active: currentSub === item.id }">
                            <a href="#" @click="changeSub(item.id, $event)">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="text-left" :class="getMainClass">
                    <br><br><br><br>
                    <p class="h4 padding-top" :id="startedSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-0000')">{{getContentText("STARTED-0000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-0001')">{{getContentText("STARTED-0001")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-0002')">{{getContentText("STARTED-0002")}}</p>
                        <pre><code>{{getContentCode("STARTED-0003")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-0004')">{{getContentText("STARTED-0004")}}</p>
                        <pre><code>{{getContentCode("STARTED-0005")}}</code></pre>
                        <p class="h5">{{getCommonContent("COMMON-0009")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[0]] +
                    `
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[0]]}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_STARTED[0])}}\n]</code></pre>
                    </div>
                    <br><br><br><br>
                    
                    <p class="h4 padding-top" :id="startedSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-1000')">{{getContentText("STARTED-1000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b>{{ getContentText("STARTED-1100") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-1101')">{{getContentText("STARTED-1101")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1110')">{{getContentText("STARTED-1110")}}</p>
                        <pre><code>{{getContentCode("STARTED-1111")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1120')">{{getContentText("STARTED-1120")}}</p>
                        <pre><code>{{getContentCode("STARTED-1121")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1130')">{{getContentText("STARTED-1130")}}</p>
                        <pre><code>{{getContentCode("STARTED-1131")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1140')">{{getContentText("STARTED-1140")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1141')" style="padding-left:24px;">{{getContentText("STARTED-1141")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1142')" style="padding-left:24px;">{{getContentText("STARTED-1142")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1143')" style="padding-left:24px;">{{getContentText("STARTED-1143")}}</p>
                        <p class="h5">{{getCommonContent("COMMON-0008")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[1]] +
                    `
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[1]]}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_STARTED[1])}},\n...\n]</code></pre>
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h5"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b>{{ getContentText("STARTED-1300") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-1301')">{{getContentText("STARTED-1301")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1302')">{{getContentText("STARTED-1302")}}</p>
                        <pre><code>{{getContentCode("STARTED-1303")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1304')">{{getContentText("STARTED-1304")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1305')">{{getContentText("STARTED-1305")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1306')">{{getContentText("STARTED-1306")}}</p>
                        <pre><code>{{getContentCode("STARTED-1307")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1308')">{{getContentText("STARTED-1308")}}</p>
                        <p class="h5">{{getCommonContent("COMMON-0009")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[2]] +
                    `
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>`+ getCode(SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[2]]) +`</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_STARTED[2])}},\n...\n]</code></pre>
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h5"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b>{{ getContentText("STARTED-1500") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-1501')">{{getContentText("STARTED-1501")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1510')">{{getContentText("STARTED-1510")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1511')" style="padding-left:24px;">{{getContentText("STARTED-1511")}}</p>
                        <pre><code>{{getContentCode("STARTED-1512")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1520')" style="padding-left:24px;">{{getContentText("STARTED-1520")}}</p>
                        <pre><code>{{getContentCode("STARTED-1521")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1530')">{{getContentText("STARTED-1530")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1530')">{{getContentText("STARTED-1531")}}</p>
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h5"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b>{{ getContentText("STARTED-1700") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-')">{{getContentText("STARTED-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="startedSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-2000')">{{getContentText("STARTED-2000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-')">{{getContentText("STARTED-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="startedSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-3000')">{{getContentText("STARTED-3000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-')">{{getContentText("STARTED-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="startedSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-4000')">{{getContentText("STARTED-4000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-')">{{getContentText("STARTED-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="startedSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-5000')">{{getContentText("STARTED-5000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-')">{{getContentText("STARTED-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <br>
                </div>
            </div>>`;
        this.dive = `
            <div class="row">
                <div class="col-xs-2 text-left" v-show="!isMobileSize">
                    <ul class="nav nav-pills nav-stacked">
                        <li v-for="item in getDiveSubs" :key="item.id" :class="{ active: currentSub === item.id }">
                            <a href="#" @click="changeSub(item.id, $event)">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="text-left" :class="getMainClass">
                    <br><br><br><br>
                    <p class="h4 padding-top" :id="diveSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('DIVE-0000')">{{getContentText("DIVE-0000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-')">{{getContentText("DIVE-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="diveSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('DIVE-1000')">{{getContentText("DIVE-1000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-')">{{getContentText("DIVE-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="diveSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('DIVE-2000')">{{getContentText("DIVE-2000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-')">{{getContentText("DIVE-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="diveSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('DIVE-3000')">{{getContentText("DIVE-3000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-')">{{getContentText("DIVE-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="diveSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('DIVE-4000')">{{getContentText("DIVE-4000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-')">{{getContentText("DIVE-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                </div>
            </div>`;
        this.api = `
            <div class="row">
                <div class="col-xs-2 text-left" v-show="!isMobileSize">
                    <ul class="nav nav-pills nav-stacked">
                        <li v-for="item in getApiSubs" :key="item.id" :class="{ active: currentSub === item.id }">
                            <a href="#" @click="changeSub(item.id, $event)">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="text-left" :class="getMainClass">
                    <br><br><br><br>
                    <p class="h4 padding-top" :id="apiSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('API-0000')">{{getContentText("API-0000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('API-')">{{getContentText("API-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="apiSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('API-1000')">{{getContentText("API-1000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('API-')">{{getContentText("API-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="apiSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('API-2000')">{{getContentText("API-2000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('API-')">{{getContentText("API-")}}</p>
                    </div>
                    <br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="apiSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('API-3000')">{{getContentText("API-3000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('API-')">{{getContentText("API-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="apiSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('API-4000')">{{getContentText("API-4000")}}</b></p>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('API-')">{{getContentText("API-")}}</p>
                    </div>
                    <br><br><br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                </div>
            </div>`;
        }
        return new Components(CONSTS, SAMPLE_GRIDS);
    };

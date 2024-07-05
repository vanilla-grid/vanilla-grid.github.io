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
                    <p class="h3 padding-top" :id="introSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0000')">{{getContentText("INTRO-0000")}}</b></p>
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
                        <pre><code>`+ getCode(SAMPLE_GRIDS.intro[CONSTS.SAMPLE_KEYS_INTRO[0]]) +`</code></pre>
                        <p class="h6 text-danger" :id="getContentAnchor('INTRO-0001')">{{getContentText("INTRO-0001")}}</p>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_INTRO[0])}},\n...\n]</code></pre>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0100')">{{getContentText("INTRO-0100")}}</b></p>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('INTRO-0101')">{{getContentText("INTRO-0101")}}</p>
                        <p class="h5" :id="getContentAnchor('INTRO-0102')">{{getContentText("INTRO-0102")}}</p>
                        <p class="h6 text-info" :id="getContentAnchor('INTRO-0103')">{{getContentText("INTRO-0103")}}</p>
                        <pre><code>{{getContentCode("INTRO-0104")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('INTRO-0105')">{{getContentText("INTRO-0105")}}</p>
                        <p class="h6 text-info" :id="getContentAnchor('INTRO-0106')">{{getContentText("INTRO-0106")}}</p>
                        <pre><code>{{getContentCode("INTRO-0107")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('INTRO-0108')">{{getContentText("INTRO-0108")}}</p>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0200')">{{getContentText("INTRO-0200")}}</b></p>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.intro[CONSTS.SAMPLE_KEYS_INTRO[1]] +
                    `</div>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>`+ getCode(SAMPLE_GRIDS.intro[CONSTS.SAMPLE_KEYS_INTRO[1]]) +`</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_INTRO[1])}},\n...\n]</code></pre>
                    </div>
                    <div class="explain-box">
                        <p class="h5 text-success" :id="getContentAnchor('INTRO-0201')">{{getContentText("INTRO-0201")}}</p>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0300')">{{getContentText("INTRO-0300")}}</b></p>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('INTRO-0301')">{{getContentText("INTRO-0301")}}</p>
                        <p class="h5" :id="getContentAnchor('INTRO-0302')">{{getContentText("INTRO-0302")}}</p>
                        <p class="h5" :id="getContentAnchor('INTRO-0303')">{{getContentText("INTRO-0303")}}</p>
                        <pre><code>{{getContentCode("INTRO-0304")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('INTRO-0315')">{{getContentText("INTRO-0315")}}</p>
                        <pre><code>{{getContentCode("INTRO-0316")}}</code></pre>
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

                    <br><br><br>
                    <p class="h3 padding-top" :id="introSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0400')">{{getContentText("INTRO-0400")}}</b></p>
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
							<li class="text-danger" :id="getContentAnchor('INTRO-0434')">{{getContentText("INTRO-0434")}}</li>
							<li class="text-danger" :id="getContentAnchor('INTRO-0435')">{{getContentText("INTRO-0435")}}</li>
						</ul>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top" :id="introSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0500')">{{getContentText("INTRO-0500")}}</b></p>
                    <div class="explain-box">
                        <p class="h6 text-danger" :id="getContentAnchor('INTRO-0501')">{{getContentText("INTRO-0501")}}</p>
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
									<td class="text-success">54</td>
								</tr>
								<tr>
									<td><i class="fab fa-edge"></i>&nbsp;&nbsp;Edge</th>
									<td class="text-success">14</td>
								</tr>
								<tr>
									<td><i class="fab fa-safari"></i>&nbsp;&nbsp;Safari</th>
									<td class="text-success">10.1</td>
								</tr>
								<tr>
									<td><i class="fab fa-firefox"></i>&nbsp;&nbsp;Firefox</th>
									<td class="text-success">47</td>
								</tr>
								<tr>
									<td><i class="fab fa-opera"></i>&nbsp;&nbsp;Opera</th>
									<td class="text-success">41</td>
								</tr>
								<tr>
									<td class="text-center" rowspan="6"><i class="fas fa-mobile-alt"></i></th>
									<td><i class="fab fa-chrome"></i>&nbsp;&nbsp;Chrome Android</th>
									<td class="text-success">54</td>
								</tr>
								<tr>
									<td><i class="fab fa-safari"></i>&nbsp;&nbsp;Safari on IOS</th>
									<td class="text-success">10.3</td>
								</tr>
								<tr>
									<td><i class="fab fa-firefox"></i>&nbsp;&nbsp;Firefox for Android</th>
									<td class="text-success">47</td>
								</tr>
								<tr>
									<td><i class="fab fa-opera"></i>&nbsp;&nbsp;Opera Android</th>
									<td class="text-success">41</td>
								</tr>
								<tr>
									<td><i class="fas fa-globe"></i>&nbsp;&nbsp;Samsung Internet</th>
									<td class="text-success">6.2</td>
								</tr>
								<tr>
									<td><i class="fab fa-android"></i>&nbsp;&nbsp;WebView Android</th>
									<td class="text-success">54</td>
								</tr>
							</tbody>
						</table>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top" :id="introSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0600')">{{getContentText("INTRO-0600")}}</b></p>
                    <div class="explain-box">
                        <p class="h5">MIT License</p><br>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top" :id="introSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0700')">{{getContentText("INTRO-0700")}}</b></p>
                    <div class="explain-box">
                        <p class="h5">hison0319@gmail.com</p><br>
                    </div>

                    <br><br><br>
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
                    <br><br><br>
                    <p class="h3 padding-top" :id="startedSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-0000')">{{getContentText("STARTED-0000")}}</b></p>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-0001')">{{getContentText("STARTED-0001")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-0002')">{{getContentText("STARTED-0002")}}</p>
                        <pre><code>{{getContentCode("STARTED-0003")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-0006')">{{getContentText("STARTED-0006")}}</p>
                        <pre><code>{{getContentCode("STARTED-0007")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-0004')">{{getContentText("STARTED-0004")}}</p>
                        <pre><code>{{getContentCode("STARTED-0005")}}</code></pre>
                        <p class="h5">{{getCommonContent("COMMON-0009")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[0]] +
                    `
                    </div>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[0]]}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_STARTED[0])}}\n]</code></pre>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top" :id="startedSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-1000')">{{getContentText("STARTED-1000")}}</b></p>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('STARTED-1100')">{{ getContentText("STARTED-1100") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-1101')">{{getContentText("STARTED-1101")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1110')">{{getContentText("STARTED-1110")}}</p>
                        <pre><code>{{getContentCode("STARTED-1111")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1120')">{{getContentText("STARTED-1120")}}</p>
                        <pre><code>{{getContentCode("STARTED-1121")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1130')">{{getContentText("STARTED-1130")}}</p>
                        <pre><code>{{getContentCode("STARTED-1131")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1140')">{{getContentText("STARTED-1140")}}</p>
                        <p class="h5 text-info" :id="getContentAnchor('STARTED-1141')" style="padding-left:24px;">{{getContentText("STARTED-1141")}}</p>
                        <p class="h5 text-info" :id="getContentAnchor('STARTED-1142')" style="padding-left:24px;">{{getContentText("STARTED-1142")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1143')" style="padding-left:24px;">{{getContentText("STARTED-1143")}}</p>
                        <p class="h5">{{getCommonContent("COMMON-0008")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[1]] +
                    `
                    </div>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[1]]}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_STARTED[1])}},\n...\n]</code></pre>
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt" :id="getContentAnchor('STARTED-1300')"></i></span><b>{{ getContentText("STARTED-1300") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-1301')">{{getContentText("STARTED-1301")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1302')">{{getContentText("STARTED-1302")}}</p>
                        <pre><code>{{getContentCode("STARTED-1303")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1304')">{{getContentText("STARTED-1304")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1305')">{{getContentText("STARTED-1305")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1306')">{{getContentText("STARTED-1306")}}</p>
                        <pre><code>{{getContentCode("STARTED-1307")}}</code></pre>
                        <p class="h5 text-info" :id="getContentAnchor('STARTED-1308')">{{getContentText("STARTED-1308")}}</p>
                        <p class="h5">{{getCommonContent("COMMON-0009")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[2]] +
                    `
                    </div>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>`+ getCode(SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[2]]) +`</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_STARTED[2])}},\n...\n]</code></pre>
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt" :id="getContentAnchor('STARTED-1500')"></i></span><b>{{ getContentText("STARTED-1500") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-1501')">{{getContentText("STARTED-1501")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1510')">{{getContentText("STARTED-1510")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1511')" style="padding-left:24px;">{{getContentText("STARTED-1511")}}</p>
                        <pre><code>{{getContentCode("STARTED-1512")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1520')" style="padding-left:24px;">{{getContentText("STARTED-1520")}}</p>
                        <pre><code>{{getContentCode("STARTED-1521")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1530')">{{getContentText("STARTED-1530")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1531')">{{getContentText("STARTED-1531")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[3]] +
                    `
                    </div>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[3]]}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_STARTED[3])}},\n...\n]</code></pre>
                        <p class="h6" :id="getContentAnchor('STARTED-1532')">{{getContentText("STARTED-1532")}}</p>
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('STARTED-1700')">{{ getContentText("STARTED-1700") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-1701')">{{getContentText("STARTED-1701")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1720')">{{getContentText("STARTED-1720")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1721')">{{getContentText("STARTED-1721")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1722')">{{getContentText("STARTED-1722")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1723')">{{getContentText("STARTED-1723")}}</p>
                        <pre><code>{{getContentCode("STARTED-1724")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-1740')">{{getContentText("STARTED-1740")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1741')">{{getContentText("STARTED-1741")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1742')">{{getContentText("STARTED-1742")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1743')">{{getContentText("STARTED-1743")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-1744')">{{getContentText("STARTED-1744")}}</p>
                        <pre><code>{{getContentCode("STARTED-1745")}}</code></pre>
                    </div>
                    
                    <br><br><br>
                    <p class="h3 padding-top" :id="startedSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-1999')">{{getContentText("STARTED-1999")}}</b></p>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('STARTED-2000')">{{ getContentText("STARTED-2000") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-2001')">{{getContentText("STARTED-2001")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-2002')">{{getContentText("STARTED-2002")}}</p>
                        <pre><code>{{getContentCode("STARTED-2003")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-2004')">{{getContentText("STARTED-2004")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-2005')">{{getContentText("STARTED-2005")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-2006')">{{getContentText("STARTED-2006")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-2007')">{{getContentText("STARTED-2007")}}</p>
                        <pre><code>{{getContentCode("STARTED-2008")}}</code></pre>
                        <br>
                        <p class="h5" :id="getContentAnchor('STARTED-2009')"><b>{{getContentText("STARTED-2009")}}</b></p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[4]] +
                    `
                    </div>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-2020')">{{getContentText("STARTED-2020")}}</p>
                        <ul>
							<li :id="getContentAnchor('STARTED-2021')">{{getContentText("STARTED-2021")}}</li>
							<li :id="getContentAnchor('STARTED-2022')">{{getContentText("STARTED-2022")}}</li>
							<li :id="getContentAnchor('STARTED-2023')">{{getContentText("STARTED-2023")}}</li>
							<li :id="getContentAnchor('STARTED-2024')">{{getContentText("STARTED-2024")}}</li>
							<li :id="getContentAnchor('STARTED-2025')">{{getContentText("STARTED-2025")}}</li>
							<li :id="getContentAnchor('STARTED-2026')">{{getContentText("STARTED-2026")}}</li>
							<li :id="getContentAnchor('STARTED-2027')">{{getContentText("STARTED-2027")}}</li>
							<li :id="getContentAnchor('STARTED-2028')">{{getContentText("STARTED-2028")}}</li>
							<li :id="getContentAnchor('STARTED-2029')">{{getContentText("STARTED-2029")}}</li>
							<li :id="getContentAnchor('STARTED-2030')">{{getContentText("STARTED-2030")}}</li>
							<li :id="getContentAnchor('STARTED-2031')">{{getContentText("STARTED-2031")}}</li>
						</ul>
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[4]]}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_STARTED[4])}},\n...\n]</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-2032')">{{getContentText("STARTED-2032")}}</p>
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('STARTED-3000')">{{ getContentText("STARTED-3000") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-3001')">{{getContentText("STARTED-3001")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-3002')">{{getContentText("STARTED-3002")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-3003')">{{getContentText("STARTED-3003")}}</p>
                        <pre><code>{{getContentCode("STARTED-3004")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-3005')">{{getContentText("STARTED-3005")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-3006')">{{getContentText("STARTED-3006")}}</p>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top" :id="startedSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-4000')">{{getContentText("STARTED-4000")}}</b></p>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-4001')">{{getContentText("STARTED-4001")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-4002')">{{getContentText("STARTED-4002")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-4003')">{{getContentText("STARTED-4003")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-4004')">{{getContentText("STARTED-4004")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-4005')">{{getContentText("STARTED-4005")}}</p>
                        <pre><code>{{getContentCode("STARTED-4006")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-4007')">{{getContentText("STARTED-4007")}}</p>
                        <pre><code>{{getContentCode("STARTED-4008")}}</code></pre>
                        <p class="h5">{{getCommonContent("COMMON-0008")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[5]] +
                    `
                    </div>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-4009')">{{getContentText("STARTED-4009")}}</p>
                        <div style="width: 100%;">
                            <div style="display:inline-block; width: 24%;">
                                <p class="h6" style="display:inline-block;" :id="getContentAnchor('STARTED-4010')">{{getContentText("STARTED-4010")}}</p>
                                <span id="startRowSpan" class="h5" style="font-weight: bold;"></span>
                            </div>
                            <div style="display:inline-block; width: 24%;">
                                <p class="h6" style="display:inline-block;" :id="getContentAnchor('STARTED-4011')">{{getContentText("STARTED-4011")}}</p>
                                <span id="startColIdSpan" class="h5" style="font-weight: bold;"></span>
                            </div>
                            <div style="display:inline-block; width: 24%;">
                                <p class="h6" style="display:inline-block;" :id="getContentAnchor('STARTED-4012')">{{getContentText("STARTED-4012")}}</p>
                                <span id="endRowSpan" class="h5" style="font-weight: bold;"></span>
                            </div>
                            <div style="display:inline-block; width: 24%;">
                                <p class="h6" style="display:inline-block;" :id="getContentAnchor('STARTED-4013')">{{getContentText("STARTED-4013")}}</p>
                                <span id="endColIdSpan" class="h5" style="font-weight: bold;"></span>
                            </div>
                        </div>
                        <p class="h5" :id="getContentAnchor('STARTED-4014')">{{getContentText("STARTED-4014")}}</p>
                        <pre><code>{{getContentCode("STARTED-4015")}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[5]]}}</code></pre>
                        <p class="h5" :id="getContentAnchor('STARTED-4030')">{{getContentText("STARTED-4030")}}</p>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top" :id="startedSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-5000')">{{getContentText("STARTED-5000")}}</b></p>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-5001')">{{getContentText("STARTED-5001")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-5002')">{{getContentText("STARTED-5002")}}</p>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('STARTED-5003')">{{ getContentText("STARTED-5003") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-5004')">{{getContentText("STARTED-5004")}}</p>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('STARTED-5005')">{{ getContentText("STARTED-5005") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-5006')">{{getContentText("STARTED-5006")}}</p>
                        <p class="h5">{{getCommonContent("COMMON-0008")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[6]] +
                    `
                        <div class="btn-group btn-group-justified" role="group" aria-label="...">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-default" @click="addRowNo($event)" style="wordBreak: break-word; whiteSpace: normal;">
                                    <span :id="getContentAnchor('STARTED-5007')" class="text-danger">{{getContentText("STARTED-5007")}}</span>
                                </button>
                            </div>
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-default" @click="addRowYes($event)" style="wordBreak: break-word; whiteSpace: normal;">
                                    <span :id="getContentAnchor('STARTED-5008')" class="text-success">{{getContentText("STARTED-5008")}}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('STARTED-5010')">{{getContentText("STARTED-5010")}}</p>
                        <pre><code>{{getContentCode("STARTED-5011")}}</code></pre>
                        <p class="h6 text-danger" :id="getContentAnchor('STARTED-5012')">{{getContentText("STARTED-5012")}}</p>
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.started[CONSTS.SAMPLE_KEYS_STARTED[6]]}}</code></pre>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('STARTED-5030')">{{ getContentText("STARTED-5030") }}</b></p>
                        <p class="h5" :id="getContentAnchor('STARTED-5031')">{{getContentText("STARTED-5031")}}</p>
                        <p class="h5" :id="getContentAnchor('STARTED-5032')">{{getContentText("STARTED-5032")}}</p>
                    </div>

                    <br><br><br>
                    <br>
                </div>
            </div>`;
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
                    <br><br><br>
                    <p class="h3 padding-top" :id="diveSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('DIVE-0000')">{{getContentText("DIVE-0000")}}</b></p>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.dive[CONSTS.SAMPLE_KEYS_DIVE[0]] +
                    `
                    </div>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.dive[CONSTS.SAMPLE_KEYS_DIVE[0]]}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_DIVE[0])}},\n{{getContentData(CONSTS.SAMPLE_KEYS_DIVE[0], 1)}}\n{{getContentData(CONSTS.SAMPLE_KEYS_DIVE[0], 2)}}\n{{getContentData(CONSTS.SAMPLE_KEYS_DIVE[0], 3)}}\n{{getContentData(CONSTS.SAMPLE_KEYS_DIVE[0], 4)}}\n...\n]</code></pre>
                    </div>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-0001')"><b>{{getContentText("DIVE-0001")}}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-0002')">{{getContentText("DIVE-0002")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-0003')">{{getContentText("DIVE-0003")}}</p>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top" :id="diveSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('DIVE-1000')">{{getContentText("DIVE-1000")}}</b></p>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-1001')">{{getContentText("DIVE-1001")}}</p>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('DIVE-1100')">{{ getContentText("DIVE-1100") }}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-1101')">{{getContentText("DIVE-1101")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-1102')">{{getContentText("DIVE-1102")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-1103')">{{getContentText("DIVE-1103")}}</p>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('DIVE-1200')">{{ getContentText("DIVE-1200") }}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-1201')">{{getContentText("DIVE-1201")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-1202')">{{getContentText("DIVE-1202")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-1300')"><b>{{getContentText("DIVE-1300")}}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-1301')">{{getContentText("DIVE-1301")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-1350')"><b>{{getContentText("DIVE-1350")}}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-1351')">{{getContentText("DIVE-1351")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-1400')">{{getContentText("DIVE-1400")}}</p>
                        <pre><code>{{getContentCode("DIVE-1401")}}</code></pre>
                        <pre><code>{{getContentCode("DIVE-1402")}}</code></pre>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('DIVE-1450')">{{ getContentText("DIVE-1450") }}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-1451')">{{getContentText("DIVE-1451")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-1500')">{{getContentText("DIVE-1500")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-1501')">{{getContentText("DIVE-1501")}}</p>
                        <pre><code>{{getContentCode("DIVE-1502")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-1513')">{{getContentText("DIVE-1513")}}</p>
                        <pre><code>{{getContentCode("DIVE-1514")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-1503')">{{getContentText("DIVE-1503")}}</p>
                        <pre><code>{{getContentCode("DIVE-1504")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-1505')">{{getContentText("DIVE-1505")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-1506')">{{getContentText("DIVE-1506")}}</p>
                        <pre><code>{{getContentCode("DIVE-1507")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-1508')">{{getContentText("DIVE-1508")}}</p>
                        <pre><code>{{getContentCode("DIVE-1509")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-1510')"><b>{{getContentText("DIVE-1510")}}</b></p>
                        <pre><code>{{getContentCode("DIVE-1511")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-1512')">{{getContentText("DIVE-1512")}}</p>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top" :id="diveSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('DIVE-2000')">{{getContentText("DIVE-2000")}}</b></p>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-2001')">{{getContentText("DIVE-2001")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2002')">{{getContentText("DIVE-2002")}}</p>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('DIVE-2100')">{{ getContentText("DIVE-2100") }}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-2101')">{{getContentText("DIVE-2101")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2102')">{{getContentText("DIVE-2102")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2103')">{{getContentText("DIVE-2103")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2104')">{{getContentText("DIVE-2104")}}</p>
                        <pre><code>{{getContentCode("DIVE-2105")}}</code></pre>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('DIVE-2200')">{{ getContentText("DIVE-2200") }}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-2201')">{{getContentText("DIVE-2201")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2202')">{{getContentText("DIVE-2202")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2203')">{{getContentText("DIVE-2203")}}</p>
                        <pre><code>{{getContentCode("DIVE-2204")}}</code></pre>
                        <p class="h5 text-danger" :id="getContentAnchor('DIVE-2205')">{{getContentText("DIVE-2205")}}</p>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('DIVE-2300')">{{ getContentText("DIVE-2300") }}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-2301')">{{getContentText("DIVE-2301")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2302')">{{getContentText("DIVE-2302")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2303')">{{getContentText("DIVE-2303")}}</p>
                        <pre><code>{{getContentCode("DIVE-2304")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-2305')">{{getContentText("DIVE-2305")}}</p>
                        <pre><code>{{getContentCode("DIVE-2306")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-2307')">{{getContentText("DIVE-2307")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2308')">{{getContentText("DIVE-2308")}}</p>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('DIVE-2400')">{{ getContentText("DIVE-2400") }}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-2401')">{{getContentText("DIVE-2401")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2402')">{{getContentText("DIVE-2402")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2403')">{{getContentText("DIVE-2403")}}</p>
                        <pre><code>{{getContentCode("DIVE-2404")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-2405')"><b>{{getContentText("DIVE-2405")}}</b></p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.dive[CONSTS.SAMPLE_KEYS_DIVE[1]] +
                    `
                    </div>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.dive[CONSTS.SAMPLE_KEYS_DIVE[1]]}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_DIVE[1])}},\n...\n]</code></pre>
                        <p class="h6" :id="getContentAnchor('DIVE-2406')">{{getContentText("DIVE-2406")}}</p>
                        <pre><code>{{getContentCode("DIVE-2407")}}</code></pre>
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('DIVE-2500')">{{ getContentText("DIVE-2500") }}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-2501')">{{getContentText("DIVE-2501")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2502')">{{getContentText("DIVE-2502")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2503')">{{getContentText("DIVE-2503")}}</p>
                        <pre><code>{{getContentCode("DIVE-2504")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-2505')">{{getContentText("DIVE-2505")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2506')"><b>{{getContentText("DIVE-2506")}}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-2507')">{{getContentText("DIVE-2507")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2508')">{{getContentText("DIVE-2508")}}</p>
                        <br>
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('DIVE-2600')">{{ getContentText("DIVE-2600") }}</b></p>
                        <p class="h5" :id="getContentAnchor('DIVE-2601')">{{getContentText("DIVE-2601")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2602')">{{getContentText("DIVE-2602")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2603')">{{getContentText("DIVE-2603")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2604')">{{getContentText("DIVE-2604")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2605')">{{getContentText("DIVE-2605")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-2606')">{{getContentText("DIVE-2606")}}</p>
                        <pre><code>{{getContentCode("DIVE-2607")}}</code></pre>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top" :id="diveSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('DIVE-3000')">{{getContentText("DIVE-3000")}}</b></p>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-3001')">{{getContentText("DIVE-3001")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-3002')">{{getContentText("DIVE-3002")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-3003')">{{getContentText("DIVE-3003")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-3004')">{{getContentText("DIVE-3004")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-3005')">{{getContentText("DIVE-3005")}}</p>
                        <pre><code>{{getContentCode("DIVE-3006")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-3007')">{{getContentText("DIVE-3007")}}</p>
                        <pre><code>{{getContentCode("DIVE-3008")}}</code></pre>
                        <p class="h5">{{getCommonContent("COMMON-0009")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.dive[CONSTS.SAMPLE_KEYS_DIVE[2]] +
                    `
                    </div>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.dive[CONSTS.SAMPLE_KEYS_DIVE[2]]}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_DIVE[2])}},\n...\n]</code></pre>
                        <p class="h6" :id="getContentAnchor('DIVE-3009')">{{getContentText("DIVE-3009")}}</p>
                        <pre><code>{{getContentCode("DIVE-3010")}}</code></pre>
                        <p class="h5" :id="getContentAnchor('DIVE-3011')"><b>{{getContentText("DIVE-3011")}}</b></p>
                    </div>

                    <br><br><br>
                    <p class="h3 padding-top" :id="diveSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('DIVE-4000')">{{getContentText("DIVE-4000")}}</b></p>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-4001')">{{getContentText("DIVE-4001")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-4002')">{{getContentText("DIVE-4002")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-4003')">{{getContentText("DIVE-4003")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-4004')">{{getContentText("DIVE-4004")}}</p>
                        <p class="h5" :id="getContentAnchor('DIVE-4005')">{{getContentText("DIVE-4005")}}</p>
                        <p class="h5">{{getCommonContent("COMMON-0009")}}</p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.dive[CONSTS.SAMPLE_KEYS_DIVE[3]] +
                    `
                    </div>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.dive[CONSTS.SAMPLE_KEYS_DIVE[3]]}}</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData(CONSTS.SAMPLE_KEYS_DIVE[3])}},\n...\n]</code></pre>
                    </div>
                    <br>
                    <div class="explain-box">
                        <p class="h5" :id="getContentAnchor('DIVE-4050')"><b>{{getContentText("DIVE-4050")}}</b></p>
                        <pre><code>{{getContentCode("DIVE-4051")}}</code></pre>
                        <br>
                        <p class="h5" :id="getContentAnchor('DIVE-4100')"><b>{{getContentText("DIVE-4100")}}</b></p>
                        <pre><code>{{getContentCode("DIVE-4150")}}</code></pre>
                        <br>
                        <p class="h5" :id="getContentAnchor('DIVE-4200')"><b>{{getContentText("DIVE-4200")}}</b></p>
                        <pre><code>{{getContentCode("DIVE-4250")}}</code></pre>
                        <br>
                        <p class="h5" :id="getContentAnchor('DIVE-4300')"><b>{{getContentText("DIVE-4300")}}</b></p>
                        <p class="h6 text-danger" :id="getContentAnchor('DIVE-4301')">{{getContentText("DIVE-4301")}}</p>
                        <p class="h6 text-danger" :id="getContentAnchor('DIVE-4302')">{{getContentText("DIVE-4302")}}</p>
                        <pre><code>{{getContentCode("DIVE-4350")}}</code></pre>
                        <p class="h6 text-danger" :id="getContentAnchor('DIVE-4400')">{{getContentText("DIVE-4400")}}</p>
                    </div>

                    <br><br><br>
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
                    <br><br><br>
                    <p class="h3 padding-top" :id="apiSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('API-0000')">{{getContentText("API-0000")}}</b></p>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.api[CONSTS.SAMPLE_KEYS_API[0]] +
                    `
                    </div>
                    <br><br><br><br><br><br>

                    <p class="h3 padding-top" :id="apiSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('API-1000')">{{getContentText("API-1000")}}</b></p>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.api[CONSTS.SAMPLE_KEYS_API[1]] +
                    `
                    </div>
                    <br><br><br><br><br><br>

                    <p class="h3 padding-top" :id="apiSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('API-2000')">{{getContentText("API-2000")}}</b></p>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.api[CONSTS.SAMPLE_KEYS_API[2]] +
                    `
                    </div>
                    <br><br><br><br><br><br>

                    <p class="h3 padding-top" :id="apiSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('API-3000')">{{getContentText("API-3000")}}</b></p>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.api[CONSTS.SAMPLE_KEYS_API[3]] +
                    `
                    </div>
                    <br><br><br><br><br><br>

                    <p class="h3 padding-top" :id="apiSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('API-4000')">{{getContentText("API-4000")}}</b></p>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('API-4200')">{{ getContentText("API-4200") }}</b></p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.api[CONSTS.SAMPLE_KEYS_API[4]] +
                    `
                    </div>
                    <br><br>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('API-4400')">{{ getContentText("API-4400") }}</b></p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.api[CONSTS.SAMPLE_KEYS_API[5]] +
                    `
                    </div>
                    <br><br>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('API-4600')">{{ getContentText("API-4600") }}</b></p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.api[CONSTS.SAMPLE_KEYS_API[6]] +
                    `
                    </div>
                    <br><br>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('API-4800')">{{ getContentText("API-4800") }}</b></p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.api[CONSTS.SAMPLE_KEYS_API[7]] +
                    `
                    </div>
                    <br><br>
                    <div class="explain-box">
                        <p class="h4"><span class="dot"><i class="fas fa-pencil-alt"></i></span><b :id="getContentAnchor('API-5000')">{{ getContentText("API-5000") }}</b></p>
                    </div>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.api[CONSTS.SAMPLE_KEYS_API[8]] +
                    `
                    </div>
                    <br><br><br>
                </div>
            </div>`;
        }
        return new Components(CONSTS, SAMPLE_GRIDS);
    };

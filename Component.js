function getComponents(SAMPLE_DATAS, SAMPLE_GRIDS) {
    function getCode (c) {
        const r = c.replace(/"([^"]*)"/g, (m) => {
            return m.replace(/\n/g, ' ');
        });
        return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    function Components (SAMPLE_DATAS, SAMPLE_GRIDS) {
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
                                <div v-if="searchDiveTextList.length > 0 || searchDiveGridList.length > 0"><p><b>Getting started</b></p>
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
                                <div v-if="searchApiTextList.length > 0 || searchApiGridList.length > 0"><p><b>Getting started</b></p>
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
                    + SAMPLE_GRIDS.intro["intro01"] +
                    `
                    <div class="btn-group-sm" role="group" style="float: right; margin: 2px 0; di">
                        <button type="button" class="btn btn-default" @click="gridintro01_onAdd($event)">{{getCommonContent("COMMON-0003")}}</button>
                        <button type="button" class="btn btn-default" @click="gridintro01_onSave($event)">{{getCommonContent("COMMON-0004")}}</button>
                        <button type="button" class="btn btn-default" @click="gridintro01_onRemove($event)">{{getCommonContent("COMMON-0005")}}</button>
                    </div>
                    </div>
                    <br><br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.intro["intro01"]}}</code></pre>
                        <p class="h6 text-danger" :id="getContentAnchor('INTRO-0001')">{{getContentText("INTRO-0001")}}</p>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData("intro01")}},\n...\n]</code></pre>
                    </div>
                    <br><br>

                    <p class="h4 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0100')">{{getContentText("INTRO-0100")}}</b></p>
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
                    <br><br>

                    <p class="h4 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0200')">{{getContentText("INTRO-0200")}}</b></p>
                    <br>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.intro["intro02"] +
                    `</div>
                    <br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>`+ getCode(SAMPLE_GRIDS.intro["intro02"]) +`</code></pre>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>[\n{{getContentData("intro02")}},\n...\n]</code></pre>
                    </div>
                    <div class="explain-box">
                        <p class="h5 text-success" :id="getContentAnchor('INTRO-0201')">{{getContentText("INTRO-0201")}}</p>
                    </div>
                    <br><br>

                    <p class="h4 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0300')">{{getContentText("INTRO-0300")}}</b></p>
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
                    </div>
                    <br><br>

                    <p class="h4 padding-top" :id="introSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0400')">{{getContentText("INTRO-0400")}}</b></p>
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
                    <br><br>

                    <p class="h4 padding-top" :id="introSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0500')">{{getContentText("INTRO-0500")}}</b></p>
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
                    <br><br>

                    <p class="h4 padding-top" :id="introSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0600')">{{getContentText("INTRO-0600")}}</b></p>
                    <div class="explain-box">
                        <p class="h5">MIT License</p><br>
                    </div>
                    <br><br>

                    <p class="h4 padding-top" :id="introSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('INTRO-0700')">{{getContentText("INTRO-0700")}}</b></p>
                    <div class="explain-box">
                        <p class="h5">hison0319@gmail.com</p><br>
                    </div>
                    <br><br>

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
                    <br><br>
                    <p class="h4 padding-top" :id="startedSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-0000')">{{getContentText("STARTED-0000")}}</b></p>
                    <div class="explain-box">
                        <p class="h5"></p><br>
                    </div>
                    <br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                    
                    <p class="h4 padding-top" :id="startedSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-0200')">{{getContentText("STARTED-0200")}}</b></p>
                    <div class="explain-box">
                        <p class="h5"></p><br>
                    </div>
                    <br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="startedSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-0400')">{{getContentText("STARTED-0400")}}</b></p>
                    <div class="explain-box">
                        <p class="h5"></p><br>
                    </div>
                    <br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="startedSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-0600')">{{getContentText("STARTED-0600")}}</b></p>
                    <div class="explain-box">
                        <p class="h5"></p><br>
                    </div>
                    <br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="startedSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-0800')">{{getContentText("STARTED-0800")}}</b></p>
                    <div class="explain-box">
                        <p class="h5"></p><br>
                    </div>
                    <br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="startedSubs[5]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-1000')">{{getContentText("STARTED-1000")}}</b></p>
                    <div class="explain-box">
                        <p class="h5"></p><br>
                    </div>
                    <br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <p class="h4 padding-top" :id="startedSubs[6]"><span class="dot"><i class="fas fa-book-open"></i></span><b :id="getContentAnchor('STARTED-1200')">{{getContentText("STARTED-1200")}}</b></p>
                    <div class="explain-box">
                        <p class="h5"></p><br>
                    </div>
                    <br><br>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

                    <br>
                </div>
            </div>>`;
        this.dive = `
            <div class="row">
                <div class="col-xs-2 text-left" v-show="!isMobileSize">
                    <ul class="nav nav-pills nav-stacked">
                        <li v-for="item in getIntroSubs" :key="item.id" :class="{ active: currentSub === item.id }">
                            <a href="#" @click="changeSub(item.id, $event)">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="text-left" :class="getMainClass">
                    <p class="h4 padding-top" :id=""><span class="dot"><i class="fas fa-book-open"></i></span><b>{{}}</b></p>
                    <div class="explain-box">
                        <p class="h5"></p><br>
                    </div>
                    <br><br>

                    <br>
                </div>
            </div>`;
        this.api = `
            <div class="row">
                <div class="col-xs-2 text-left" v-show="!isMobileSize">
                    <ul class="nav nav-pills nav-stacked">
                        <li v-for="item in getStartedSubs" :key="item.id" :class="{ active: currentSub === item.id }">
                            <a href="#" @click="changeSub(item.id, $event)">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="text-left" :class="getMainClass">
                    <p class="h4 padding-top" :id=""><span class="dot"><i class="fas fa-book-open"></i></span><b>{{}}</b></p>
                    <div class="explain-box">
                        <p class="h5"></p><br>
                    </div>
                    <br><br>

                    <br>
                </div>
            </div>`;
        }
        return new Components(SAMPLE_DATAS, SAMPLE_GRIDS);
    };

function getComponents(SAMPLE_DATAS, SAMPLE_GRIDS) {
    function a (c) {
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
                    <input id="searchInput" name="searchInput" type="text" class="form-control" placeholder="Search" @keyup.enter="onSearch($event)">
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
                    <p class="h4 padding-top" :id="introSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b>{{getContentText("INTRO-0000")}}</b></p>
                    <br>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.intro["intro01"] +
                    `</div>
                    <br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.intro["intro01"]}}</code></pre>
                        <p class="h6 text-danger">{{getContentText("INTRO-0001")}}</p><br>
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>{{getContentData("intro01")}}</code></pre>
                    </div>
                    <br><br>

                    <p class="h4 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b>{{getContentText("INTRO-0100")}}</b></p>
                    <div class="explain-box">
                        <p class="h5">{{getContentText("INTRO-0101")}}</p>
                        <p class="h5">{{getContentText("INTRO-0102")}}</p>
                        <pre><code>{{getContentCode("INTRO-0103")}}</code></pre>
                        <p class="h5">{{getContentText("INTRO-0104")}}</p>
                        <pre><code>{{getContentCode("INTRO-0105")}}</code></pre>
                        <p class="h5">{{getContentText("INTRO-0106")}}</p>
                    </div>
                    <br><br>

                    <p class="h4 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b>{{getContentText("INTRO-0200")}}</b></p>
                    <br>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.intro["intro02"] +
                    `</div>
                    <br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0000")}}</p>
                        <pre><code>`+ a(SAMPLE_GRIDS.intro["intro02"]) +`</code></pre>
                    </div>
                    <div class="explain-box">
                        <p class="h5 text-success">{{getContentText("INTRO-0201")}}</p>
                    </div>
                    <br><br>

                    <p class="h4 padding-top"><span class="dot"><i class="fas fa-book-open"></i></span><b>{{getContentText("INTRO-0300")}}</b></p>
                    <div class="explain-box">
                        <p class="h5">{{getContentText("INTRO-0301")}}</p>
                        <p class="h5">{{getContentText("INTRO-0302")}}</p>
                        <p class="h5">{{getContentText("INTRO-0303")}}</p>
                        <pre><code>{{getContentCode("INTRO-0304")}}</code></pre>
                        <p class="h5">{{getContentText("INTRO-0305")}}</p>
                        <pre><code>{{getContentCode("INTRO-0306")}}</code></pre>
                        <p class="h5">{{getContentText("INTRO-0307")}}</p>
                        <p class="h5">{{getContentText("INTRO-0308")}}</p>
                        <pre><code>{{getContentCode("INTRO-0309")}}</code></pre>
                        <p class="h5">{{getContentText("INTRO-0310")}}</p>
                        <pre><code>{{getContentCode("INTRO-0311")}}</code></pre>
                        <p class="h5">{{getContentText("INTRO-0312")}}</p>
                        <pre><code>{{getContentCode("INTRO-0313")}}</code></pre>
                        <p class="h5">{{getContentText("INTRO-0314")}}</p>
                    </div>
                    <br><br>

                    <p class="h4 padding-top" :id="introSubs[1]"><span class="dot"><i class="fas fa-book-open"></i></span><b>{{getContentText("INTRO-0400")}}</b></p>
                    <div class="explain-box">
                        <p class="h5">{{getContentText("INTRO-0401")}}</p><br>
                        <p class="h5">{{getContentText("INTRO-0410")}}</p>
                        <ul>
							<li class="text-info">{{getContentText("INTRO-0411")}}</li>
							<li class="text-info">{{getContentText("INTRO-0412")}}</li>
							<li class="text-info">{{getContentText("INTRO-0413")}}</li>
							<li class="text-info">{{getContentText("INTRO-0414")}}</li>
							<li class="text-info">{{getContentText("INTRO-0415")}}</li>
							<li class="text-info">{{getContentText("INTRO-0416")}}</li>
							<li class="text-info">{{getContentText("INTRO-0417")}}</li>
						</ul>
                        <p class="h5">{{getContentText("INTRO-0430")}}</p>
                        <ul>
							<li class="text-danger">{{getContentText("INTRO-0431")}}</li>
							<li class="text-danger">{{getContentText("INTRO-0432")}}</li>
							<li class="text-danger">{{getContentText("INTRO-0433")}}</li>
						</ul>
                    </div>
                    <br><br>

                    <p class="h4 padding-top" :id="introSubs[2]"><span class="dot"><i class="fas fa-book-open"></i></span><b>{{getContentText("INTRO-0500")}}</b></p>
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

                    <p class="h4 padding-top" :id="introSubs[3]"><span class="dot"><i class="fas fa-book-open"></i></span><b>{{getContentText("INTRO-0600")}}</b></p>
                    <div class="explain-box">
                        <p class="h5">MIT License</p><br>
                    </div>
                    <br><br>

                    <p class="h4 padding-top" :id="introSubs[4]"><span class="dot"><i class="fas fa-book-open"></i></span><b>{{getContentText("INTRO-0700")}}</b></p>
                    <div class="explain-box">
                        <p class="h5">hison0319@gmail.com</p><br>
                    </div>
                    <br><br>

                    <br>
                </div>
            </div>`;
        }
        return new Components(SAMPLE_DATAS, SAMPLE_GRIDS);
    };

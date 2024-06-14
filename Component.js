function getComponents(SAMPLE_GRIDS) {
    function a (c) {
        const r = c.replace(/"([^"]*)"/g, (m) => {
            return m.replace(/\n/g, ' ');
        });
        return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    a(SAMPLE_GRIDS.intro["intro02"]);
    function Components (SAMPLE_GRIDS) {
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
                        <a type="button" class="btn btn-default btn-md" href="https://github.com/vanilla-grid/vanillanote.min" target="_blank">
                            <span class="glyphicon glyphicon-download-alt padding-right" aria-hidden="true"></span>Get min.js (go github)
                        </a>
                    </div>
                    <br>
                    <p class="h4 padding-top" :id="introSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b>{{getContent("INTRO-0001")}}</b></p>
                    <br>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.intro["intro01"] +
                    `</div>
                    <br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>{{SAMPLE_GRIDS.intro["intro01"]}}</code></pre>
                    </div>
                    <br><br>
                    <br>
                    <p class="h4 padding-top" :id="introSubs[0]"><span class="dot"><i class="fas fa-book-open"></i></span><b>{{getContent("INTRO-0002")}}</b></p>
                    <br>
                    <div class="grid-box">`
                    + SAMPLE_GRIDS.intro["intro02"] +
                    `</div>
                    <br>
                    <div class="explain-box">
                        <p class="h6">{{getCommonContent("COMMON-0001")}}</p>
                        <pre><code>`+ a(SAMPLE_GRIDS.intro["intro02"]) +`</code></pre>
                    </div>
                    <br><br>
                    <br>
                </div>
            </div>`;
        }
        return new Components(SAMPLE_GRIDS);
    };

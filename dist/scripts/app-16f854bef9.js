(function(){angular.module("botanist",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap"])}).call(this),function(){angular.module("botanist").service("webDevTec",function(){var a,t;a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"}],t=function(){return a},this.getTec=t})}.call(this),function(){angular.module("botanist").directive("acmeNavbar",function(){var a,t;return a=function(a){var t;t=this,t.relativeDate=a(t.creationDate).fromNow()},t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("botanist").directive("acmeMalarkey",function(){var a,t,n;return a=function(a,t){var n,i,e;e=this,n=function(){return i().then(function(){a.info("Activated Contributors View")})},i=function(){return t.getContributors(10).then(function(a){return e.contributors=a,e.contributors})},e.contributors=[],n()},n=function(a,t,n,i){var e,s;s=void 0,e=malarkey(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),t.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(a){e.type(a).pause()["delete"]()}),s=a.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(a){e.type(a.login).pause()["delete"]()})}),a.$on("$destroy",function(){s()})},t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:a,controllerAs:"vm"}})}.call(this),function(){angular.module("botanist").factory("githubContributor",["$log","$http",function(a,t){var n,i,e;return n="https://api.github.com/repos/Swiip/generator-gulp-angular",i=function(i){var e,s;return e=function(a){return a.data},s=function(t){a.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))},i||(i=30),t.get(n+"/contributors?per_page="+i).then(e)["catch"](s)},e={apiHost:n,getContributors:i}}])}.call(this),function(){angular.module("botanist").directive("disableAnimation",["$animate",function(a){return{restrict:"A",link:function(t,n){return a.enabled(!1,n)}}}])}.call(this),function(){angular.module("botanist").controller("WeddingController",["$timeout","webDevTec","toastr",function(a,t,n){var i,e,s,o;o=this,i=function(){e(),a(function(){o.classAnimation="rubberBand"},4e3)},s=function(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""},e=function(){o.awesomeThings=t.getTec(),angular.forEach(o.awesomeThings,function(a){a.rank=Math.random()})},o.awesomeThings=[],o.classAnimation="",o.creationDate=1436590552891,o.showToastr=s,i()}])}.call(this),function(){angular.module("botanist").controller("MainController",["$timeout","webDevTec","toastr",function(a,t,n){var i,e,s,o;o=this,i=function(){e(),a(function(){o.classAnimation="rubberBand"},4e3)},s=function(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""},e=function(){o.awesomeThings=t.getTec(),angular.forEach(o.awesomeThings,function(a){a.rank=Math.random()})},o.awesomeThings=[],o.classAnimation="",o.creationDate=1436590552891,o.showToastr=s,i()}])}.call(this),function(){angular.module("botanist").controller("MainController",["$timeout","webDevTec","toastr",function(a,t,n){var i,e,s,o;o=this,i=function(){e(),a(function(){o.classAnimation="rubberBand"},4e3)},s=function(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""},e=function(){o.awesomeThings=t.getTec(),angular.forEach(o.awesomeThings,function(a){a.rank=Math.random()})},o.awesomeThings=[],o.classAnimation="",o.creationDate=1436590552891,o.showToastr=s,i()}])}.call(this),function(){angular.module("botanist").controller("LimitController",["$timeout","webDevTec","toastr",function(a,t,n){var i,e,s,o;o=this,i=function(){e(),a(function(){o.classAnimation="rubberBand"},4e3)},s=function(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""},e=function(){o.awesomeThings=t.getTec(),angular.forEach(o.awesomeThings,function(a){a.rank=Math.random()})},o.awesomeThings=[],o.classAnimation="",o.creationDate=1436590552891,o.showToastr=s,i()}])}.call(this),function(){angular.module("botanist").controller("SignInController",["$timeout","webDevTec","toastr",function(a,t,n){var i;return i=this}]).controller("SignUpController",["$timeout","webDevTec","toastr",function(a,t,n){var i;return i=this}])}.call(this),function(){angular.module("botanist").controller("ImmortalController",["$timeout","webDevTec","toastr",function(a,t,n){var i,e,s,o;o=this,i=function(){e(),a(function(){o.classAnimation="rubberBand"},4e3)},s=function(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""},e=function(){o.awesomeThings=t.getTec(),angular.forEach(o.awesomeThings,function(a){a.rank=Math.random()})},o.awesomeThings=[],o.classAnimation="",o.creationDate=1436590552891,o.showToastr=s,i()}])}.call(this),function(){angular.module("botanist").controller("HomeController",["$scope",function(a){var t;return t=this,a.myInterval=3200,a.slides=[{image:"http://7qnc6c.com1.z0.glb.clouddn.com/V1.png"},{image:"http://7qnc6c.com1.z0.glb.clouddn.com/V1_2.jpg"},{image:"http://7qnc6c.com1.z0.glb.clouddn.com/V1_3.jpg"}]}])}.call(this),function(){angular.module("botanist").controller("ClassicController",["$timeout","webDevTec","toastr",function(a,t,n){var i,e,s,o;o=this,i=function(){e(),a(function(){o.classAnimation="rubberBand"},4e3)},s=function(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""},e=function(){o.awesomeThings=t.getTec(),angular.forEach(o.awesomeThings,function(a){a.rank=Math.random()})},o.awesomeThings=[],o.classAnimation="",o.creationDate=1436590552891,o.showToastr=s,i()}])}.call(this),function(){angular.module("botanist").controller("CartController",["$timeout","webDevTec","toastr",function(a,t,n){var i;return i=this}])}.call(this),function(){angular.module("botanist").controller("CartController",["$timeout","webDevTec","toastr",function(a,t,n){var i;return i=this}])}.call(this),function(){angular.module("botanist").controller("BouquetController",["$timeout","webDevTec","toastr",function(a,t,n){var i,e,s,o;o=this,i=function(){e(),a(function(){o.classAnimation="rubberBand"},4e3)},s=function(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""},e=function(){o.awesomeThings=t.getTec(),angular.forEach(o.awesomeThings,function(a){a.rank=Math.random()})},o.awesomeThings=[],o.classAnimation="",o.creationDate=1436590552891,o.showToastr=s,i()}])}.call(this),function(){angular.module("botanist").run(["$log",function(a){return a.debug("runBlock end")}])}.call(this),function(){angular.module("botanist").config(["$stateProvider","$urlRouterProvider",function(a,t){return a.state("home",{url:"/",templateUrl:"app/home/main.html",controller:"HomeController",controllerAs:"home"}).state("bouquet",{url:"/bouquet",templateUrl:"app/bouquet/bouquet.html",controller:"BouquetController",controllerAs:"bouquet"}).state("immortal",{url:"/immortal",templateUrl:"app/immortal/immortal.html",controller:"ImmortalController",controllerAs:"immortal"}).state("wedding",{url:"/wedding",templateUrl:"app/wedding/wedding.html",controller:"WeddingController",controllerAs:"wedding"}).state("classic",{url:"/classic",templateUrl:"app/classic/classic.html",controller:"ClassicController",controllerAs:"classic"}).state("signin",{url:"/signin",templateUrl:"app/login/signin.html",controller:"SignInController",controllerAs:"signin"}).state("signup",{url:"/signup",templateUrl:"app/login/signup.html",controller:"SignUpController",controllerAs:"signup"}).state("cart",{url:"/cart",templateUrl:"app/cart/cart.html",controller:"CartController",controllerAs:"cart"}),t.otherwise("/")}])}.call(this),function(){angular.module("botanist").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}.call(this),function(){angular.module("botanist").config(["$logProvider","toastr",function(a,t){return a.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}])}.call(this),angular.module("botanist").run(["$templateCache",function(a){a.put("app/bouquet/bouquet.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>鲜花</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),a.put("app/classic/classic.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>经典</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),a.put("app/cart/cart.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>购物车</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),a.put("app/home/main.html",'<div class="main"><div><div style="height: 468px"><carousel interval="8000"><slide ng-repeat="slide in slides" active="slide.active"><img ng-src="{{slide.image}}" style="margin:auto;"></slide></carousel></div></div><div class="row"><div class="left-panel col-sm-6"><div class="row"><div class="col-sm-6 image"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/L1-1.jpg" alt=""></div><div class="col-sm-6 image row-last"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/L1-2.jpg" alt=""></div><div class="col-sm-12 image last"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/L2-1.jpg" alt=""></div></div></div><div class="right-panel col-sm-6"><div class="row"><div class="col-sm-4 image row-first"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/1-1.jpg" alt=""></div><div class="col-sm-4 image"><a ui-sref="bouquet"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/1-2.jpg" alt=""></a></div><div class="col-sm-4 image row-last"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/1-3.jpg" alt=""></div><div class="col-sm-4 image row-first"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/2-1.jpg" alt=""></div><div class="col-sm-4 image"><a href="wip.html?image=n3.jpg"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/2-2.png" alt=""></a></div><div class="col-sm-4 image row-last"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/2-3.jpg" alt=""></div><div class="col-sm-4 image row-first"><a href="wip.html?image=n2.jpg"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/3-1.jpg" alt=""></a></div><div class="col-sm-4 image"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/3-2.jpg" alt=""></div><div class="col-sm-4 image row-last"><a href="wip.html?image=n4.jpg"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/3-3.jpg" alt=""></a></div><div class="col-sm-4 image row-first"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/4-1.jpg" alt=""></div><div class="col-sm-4 image"><a href="wip.html?image=n5.jpg"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/4-2.jpg" alt=""></a></div><div class="col-sm-4 image row-last"><img src="http://7qnc6c.com1.z0.glb.clouddn.com/4-3.jpg" alt=""></div></div></div></div></div>'),a.put("app/immortal/immortal.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>永生花</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),a.put("app/login/signin.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div id="main"><div class="center"><div class="col-main-inner"><div class="account-login"><div class="page-title"><h1>登录或新建帐号</h1></div><div class="row"><div class="col-xs-5 new-users user-section"><div class="user-content"><h3 class="title">新客户</h3><p>注册您自己的帐户，结算更方便迅速，而且可以保存多个送货地址、查看订单状态等。</p><div class="clear"></div><div id="wx_root" class="visible-desktop" style="padding-top:30px;"><img src="/images/wx.jpg" style="float: left; margin-right: 15px;">关注并绑定官方微信，获取订单实时状态通知。</div></div><div class="col-xs-offset-8 col-xs-4"><button type="button" title="注册" class="button" ui-sref="signup"><span><span>注册</span></span></button></div></div><div class="border-space col-xs-1"></div><div class="col-xs-5 registered-users user-section"><div class="user-content"><h3 class="title">老客户</h3><p>如果您已有帐号，请登录。</p><ul class="form-list"><li><label for="username" class="required"><em>*</em>邮箱/实体店注册手机</label><div class="input-box"><input type="text" name="username" value="" id="username" class="input-text required-entry validate-email" title="电子邮箱"></div></li><li><label for="password" class="required"><em>*</em>密码</label><div class="input-box"><input type="password" name="password" class="input-text required-entry validate-password" id="password" title="密码"></div></li><li><span id="errormsg" class="required"></span></li></ul></div><div class="col-2 registered-users" rel="login"><div class="buttons-set"><a href="/user/forgetpwd.htm" class="f-left">忘记您的密码了？</a> <button onclick="doLogin()" type="button" class="button" title="登录" name="send" id="send2"><span><span>登录</span></span></button> <a href="javascript:void(0)" onclick="wbLogin();" class="sina_button_ps"><img src="http://statics.thebeastshop.com/skin/frontend/default/default/images/mec/sina.gif" alt="Connect with Sina"></a></div></div></div></div></div></div></div></div></div>'),a.put("app/login/signup.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>注册</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),a.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),a.put("app/wedding/wedding.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>婚礼</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="collapse navbar-collapse" id="main-navbar"><ul class="nav navbar-nav"><li class="active"><a ui-sref="bouquet"><div class="menu-item menu-bouquet"><span>鲜花</span></div></a></li><li><a ui-sref="immortal"><div class="menu-item menu-immortal"><span>永生花</span></div></a></li><li><a ui-sref="wedding"><div class="menu-item menu-wedding"><span>婚礼</span></div></a></li><li><a ui-sref="classic"><div class="menu-item menu-classic"><span>经典</span></div></a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li><a ui-sref="cart"><div class="menu-item menu-cart"><span>购物车</span></div></a></li><li><a ui-sref="signin"><div class="menu-item menu-profile"><span>登陆/注册</span></div></a></li></ul></div></div></nav>')}]);
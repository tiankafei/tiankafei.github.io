(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{380:function(t,s,a){"use strict";a.r(s);var e=a(42),l=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"码云、github如何更新fork后的代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#码云、github如何更新fork后的代码"}},[t._v("#")]),t._v(" 码云、GitHub如何更新fork后的代码")]),t._v(" "),a("h2",{attrs:{id:"命令行方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行方法"}},[t._v("#")]),t._v(" 命令行方法")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("clone 自己的fork分支到本地")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@gitee.com:tiankafei/RuoYi.git\n")])])])]),t._v(" "),a("li",[a("p",[t._v("增加源分支地址到你项目远程分支列表中(此处是关键)，先得将原来的仓库指定为upstream，命令为")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://gitee.com/y_project/RuoYi.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" upstream https://gitee.com/geekidea/spring-boot-plus.git\n")])])]),a("p",[t._v("此处可使用git remote -v查看远程分支列表")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n")])])])]),t._v(" "),a("li",[a("p",[t._v("fetch源分支的新版本到本地")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream\n")])])])]),t._v(" "),a("li",[a("p",[t._v("合并两个版本的代码")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge upstream/master\n")])])])]),t._v(" "),a("li",[a("p",[t._v("将合并后的代码push到码云或github上去")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])])])])])}),[],!1,null,null,null);s.default=l.exports}}]);
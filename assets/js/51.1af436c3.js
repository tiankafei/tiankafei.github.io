(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{323:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nacos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos"}},[s._v("#")]),s._v(" nacos")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h3",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/alibaba/nacos/releases/download/1.2.0/nacos-server-1.2.0.tar.gz\n")])])]),a("h3",{attrs:{id:"解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zvxf")]),s._v(" nacos-server-1.2.0.tar.gz\n")])])]),a("h3",{attrs:{id:"创建软件目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建软件目录"}},[s._v("#")]),s._v(" 创建软件目录")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /opt/software\n")])])]),a("h3",{attrs:{id:"移动软件到制定目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动软件到制定目录"}},[s._v("#")]),s._v(" 移动软件到制定目录")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" nacos /opt/software/\n")])])]),a("h3",{attrs:{id:"进入目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入目录"}},[s._v("#")]),s._v(" 进入目录")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/software/nacos/bin\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/opt/software/nacos/bin\n")])])]),a("h3",{attrs:{id:"注册服务脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册服务脚本"}},[s._v("#")]),s._v(" 注册服务脚本")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /lib/systemd/system/nacos.service\n")])])]),a("h3",{attrs:{id:"脚本内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本内容"}},[s._v("#")]),s._v(" 脚本内容")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nacos\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/software/nacos/bin/startup.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" standalone\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/software/nacos/bin/shutdown.sh\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/software/nacos/bin/shutdown.sh\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PrivateTmp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])])]),a("h3",{attrs:{id:"设置开机启动并启动nacos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置开机启动并启动nacos"}},[s._v("#")]),s._v(" 设置开机启动并启动nacos")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载service的配置")]),s._v("\nsystemctl daemon-reload\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nacos.service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动nacos")]),s._v("\nsystemctl start nacos.service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启nacos")]),s._v("\nsystemctl restart nacos.service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止nacos")]),s._v("\nsystemctl stop nacos.service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看nacos状态")]),s._v("\nsystemctl status nacos.service\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
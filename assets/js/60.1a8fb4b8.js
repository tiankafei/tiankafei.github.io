(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{331:function(a,s,t){"use strict";t.r(s);var e=t(13),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"禅道的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禅道的安装"}},[a._v("#")]),a._v(" 禅道的安装")]),a._v(" "),s("h2",{attrs:{id:"下载禅道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载禅道"}},[a._v("#")]),a._v(" 下载禅道")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("\n")])])]),s("h2",{attrs:{id:"直接解压到-opt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接解压到-opt"}},[a._v("#")]),a._v(" 直接解压到/opt")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-zxvf")]),a._v("  ZenTaoPMS.12.0.stable.zbox_64.tar.gz "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" /opt\n")])])]),s("h2",{attrs:{id:"更新apache和mysql端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新apache和mysql端口"}},[a._v("#")]),a._v(" 更新apache和mysql端口")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("/opt/zbox/zbox "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ap")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8084")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-mp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3307")]),a._v("\n")])])]),s("h2",{attrs:{id:"直接启动、停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接启动、停止"}},[a._v("#")]),a._v(" 直接启动、停止")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("/opt/zbox/zbox start\n/opt/zbox/zbox stop\n")])])]),s("h2",{attrs:{id:"设置开机启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置开机启动"}},[a._v("#")]),a._v(" 设置开机启动")]),a._v(" "),s("blockquote",[s("p",[a._v("vim /lib/systemd/system/zbox.service")]),a._v(" "),s("p",[a._v("脚本内容")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zbox\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("After")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("network.target\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("forking\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/zbox/zbox start\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ExecStop")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/zbox/zbox stop\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PrivateTmp")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("multi-user.target\n")])])])]),a._v(" "),s("h2",{attrs:{id:"开机启动命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开机启动命令"}},[a._v("#")]),a._v(" 开机启动命令")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重新加载配置")]),a._v("\nsystemctl daemon-reload\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置开机启动")]),a._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" zbox.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动")]),a._v("\nsystemctl start zbox.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止")]),a._v("\nsystemctl stop zbox.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看状态")]),a._v("\nsystemctl status zbox.service\n")])])]),s("h2",{attrs:{id:"如何访问数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何访问数据库"}},[a._v("#")]),a._v(" 如何访问数据库")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("禅道数据库管理用的是adminer，但是为了安全，访问adminer的时候需要身份验证，需要运行/opt/zbox/auth/adduser.sh来添加用户(先 cd /opt/zbox/auth/ 然后执行 ./adduser.sh)。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("如何操作")]),a._v("：网页访问 http://禅道服务的ip:apache端口，点击“数据库管理”按钮有2层验证："),s("strong",[a._v("弹窗验证是输入运行 addusers.sh添加的用户名和密码。")])]),a._v(" "),s("p",[a._v("我加的用户名是root，密码是123456。那么授权页面里用户名和密码就填写root和123456。")]),a._v(" "),s("p",[s("strong",[a._v("注意：")]),a._v(" 这里添加的用户名和密码是自定义的，你可以根据你的使用习惯来添加。你添加了什么用户名和密码就填写什么。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("网页直接显示登录界面：")])]),a._v(" "),s("p",[a._v("系  统：默认选择MySQL。")]),a._v(" "),s("p",[a._v("服务器： 127.0.0.1:mysql端口 （mysql端口启用的是3307，那么就填写 127.0.0.1:3307。 "),s("strong",[a._v("注意：ip只能写127.0.0.1")]),a._v("）")]),a._v(" "),s("p",[a._v("用户名： root。（禅道默认的数据库用户名是 root）")]),a._v(" "),s("p",[a._v("密  码：123456。（ 禅道默认的数据库密码是123456）")]),a._v(" "),s("p",[a._v("数据库：zentao")])])]),a._v(" "),s("h2",{attrs:{id:"应用的默认用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用的默认用户"}},[a._v("#")]),a._v(" 应用的默认用户")]),a._v(" "),s("p",[a._v("用户名：admin")]),a._v(" "),s("p",[a._v("密   码 ：123456")])])}),[],!1,null,null,null);s.default=r.exports}}]);
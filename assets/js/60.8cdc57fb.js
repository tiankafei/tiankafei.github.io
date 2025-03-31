(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{371:function(s,a,t){"use strict";t.r(a);var e=t(25),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos6安装mysql8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos6安装mysql8"}},[s._v("#")]),s._v(" centos6安装MySQL8")]),s._v(" "),a("blockquote",[a("p",[s._v("查看是否已安装MySQL")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])])]),a("p",[s._v("若存在则卸载掉, 以防干扰安装MySQL8, (--nodeps)是消除依赖的意思")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--nodeps")]),s._v(" mysql-libs-5.1.73-8.el6_8.x86_64\n")])])]),a("p",[s._v("清楚yum缓存")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum clean all\n")])])])]),s._v(" "),a("h2",{attrs:{id:"使用wget命令下载到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用wget命令下载到本地"}},[s._v("#")]),s._v(" 使用wget命令下载到本地")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/mysql80-community-release-el6-1.noarch.rpm\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ivh")]),s._v(" mysql80-community-release-el6-1.noarch.rpm\n")])])]),a("h2",{attrs:{id:"安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装mysql")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])])]),a("h2",{attrs:{id:"查看mysql版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql版本"}},[s._v("#")]),s._v(" 查看mysql版本")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysqladmin -V\n")])])]),a("h2",{attrs:{id:"设置忽略大小写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置忽略大小写"}},[s._v("#")]),s._v(" 设置忽略大小写")]),s._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysqld")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("lower_case_table_names")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1")]),s._v("\n")])])]),a("h2",{attrs:{id:"查看mysql状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql状态"}},[s._v("#")]),s._v(" 查看mysql状态")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld status\n")])])]),a("h2",{attrs:{id:"启动mysql服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql服务"}},[s._v("#")]),s._v(" 启动mysql服务")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld start\n")])])]),a("h2",{attrs:{id:"设置开机启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置开机启动"}},[s._v("#")]),s._v(" 设置开机启动")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" mysqld on\n")])])]),a("h2",{attrs:{id:"查看mysql初始化密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql初始化密码"}},[s._v("#")]),s._v(" 查看mysql初始化密码")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/mysqld.log\n")])])]),a("h2",{attrs:{id:"登录mysql命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录mysql命令"}},[s._v("#")]),s._v(" 登录mysql命令")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n")])])]),a("h2",{attrs:{id:"第一次更改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一次更改密码"}},[s._v("#")]),s._v(" 第一次更改密码")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("alter user user() identified by 'Root_12root'\n")])])]),a("h2",{attrs:{id:"设置密码规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置密码规则"}},[s._v("#")]),s._v(" 设置密码规则")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SHOW VARIABLES LIKE 'validate_password%';\nset global validate_password.policy=0;\nset global validate_password.length=1;\n")])])]),a("h2",{attrs:{id:"设置新密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置新密码"}},[s._v("#")]),s._v(" 设置新密码")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED BY 'tiankafei';\n")])])]),a("h2",{attrs:{id:"更新主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新主机"}},[s._v("#")]),s._v(" 更新主机")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use mysql;\nupdate user set host = '%' where user = 'root';\nselect host, user from user;\n")])])]),a("h2",{attrs:{id:"刷新配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷新配置"}},[s._v("#")]),s._v(" 刷新配置")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("flush privileges;\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
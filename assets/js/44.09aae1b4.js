(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{399:function(s,a,t){"use strict";t.r(a);var e=t(45),l=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos6安装mysql8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos6安装mysql8"}},[s._v("#")]),s._v(" centos6安装MySQL8")]),s._v(" "),t("blockquote",[t("p",[s._v("查看是否已安装MySQL")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])])]),t("p",[s._v("若存在则卸载掉, 以防干扰安装MySQL8, (--nodeps)是消除依赖的意思")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps mysql-libs-5.1.73-8.el6_8.x86_64\n")])])]),t("p",[s._v("清楚yum缓存")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum clean all\n")])])])]),s._v(" "),t("h2",{attrs:{id:"使用wget命令下载到本地"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用wget命令下载到本地"}},[s._v("#")]),s._v(" 使用wget命令下载到本地")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/mysql80-community-release-el6-1.noarch.rpm\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh mysql80-community-release-el6-1.noarch.rpm\n")])])]),t("h2",{attrs:{id:"安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装mysql")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server -y\n")])])]),t("h2",{attrs:{id:"查看mysql版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql版本"}},[s._v("#")]),s._v(" 查看mysql版本")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysqladmin -V\n")])])]),t("h2",{attrs:{id:"查看mysql状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql状态"}},[s._v("#")]),s._v(" 查看mysql状态")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld status\n")])])]),t("h2",{attrs:{id:"启动mysql服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql服务"}},[s._v("#")]),s._v(" 启动mysql服务")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld start\n")])])]),t("h2",{attrs:{id:"设置开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置开机启动"}},[s._v("#")]),s._v(" 设置开机启动")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" mysqld on\n")])])]),t("h2",{attrs:{id:"查看mysql初始化密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql初始化密码"}},[s._v("#")]),s._v(" 查看mysql初始化密码")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/mysqld.log\n")])])]),t("h2",{attrs:{id:"登录mysql命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录mysql命令"}},[s._v("#")]),s._v(" 登录mysql命令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("mysql -uroot -p\n")])])]),t("h2",{attrs:{id:"第一次更改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一次更改密码"}},[s._v("#")]),s._v(" 第一次更改密码")]),s._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("alter user user() identified by 'Root_12root'\n")])])]),t("h2",{attrs:{id:"设置密码规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置密码规则"}},[s._v("#")]),s._v(" 设置密码规则")]),s._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("SHOW VARIABLES LIKE 'validate_password%';\nset global validate_password.policy=0;\nset global validate_password.length=1;\n")])])]),t("h2",{attrs:{id:"设置新密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置新密码"}},[s._v("#")]),s._v(" 设置新密码")]),s._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED BY 'tiankafei';\n")])])]),t("h2",{attrs:{id:"更新主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新主机"}},[s._v("#")]),s._v(" 更新主机")]),s._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("use mysql;\nupdate user set host = '%' where user = 'root';\nselect host, user from user;\n")])])]),t("h2",{attrs:{id:"刷新配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刷新配置"}},[s._v("#")]),s._v(" 刷新配置")]),s._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("flush privileges;\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);
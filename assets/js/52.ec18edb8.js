(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{323:function(s,a,t){"use strict";t.r(a);var e=t(13),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"centos7安装mysql8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装mysql8"}},[s._v("#")]),s._v(" centos7安装MySQL8")]),s._v(" "),a("h2",{attrs:{id:"查看是否已安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看是否已安装mysql"}},[s._v("#")]),s._v(" 查看是否已安装MySQL")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql\n")])])]),a("h2",{attrs:{id:"若存在则卸载掉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#若存在则卸载掉"}},[s._v("#")]),s._v(" 若存在则卸载掉")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" remove mysql80-community-release-el7-3.noarch\n")])])]),a("blockquote",[a("p",[s._v("一般用rpm -e 的命令删除mysql,这样表面上删除了mysql,可是mysql的一些残余程序仍然存在,并且通过第一步的方式也查找不到残余,而yum命令比较强大,可以完全删除mysql.(ps:用rpm删除后再次安装的时候会提示已经安装了,这就是rpm没删除干净的原因)")])]),s._v(" "),a("h2",{attrs:{id:"把所有出现的目录统统删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#把所有出现的目录统统删除"}},[s._v("#")]),s._v(" 把所有出现的目录统统删除")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" mysql\n")])])]),a("blockquote",[a("p",[s._v("查找mysql的一些目录，把所有出现的目录删除，可以使用rm -rf 路径，删除时请注意，一旦删除无法恢复。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" 目录\n")])])])]),s._v(" "),a("h2",{attrs:{id:"删除配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除配置文件"}},[s._v("#")]),s._v(" 删除配置文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /etc/my.cnf\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /etc/my.cnf.d\n")])])]),a("h2",{attrs:{id:"删除mysql的默认密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除mysql的默认密码"}},[s._v("#")]),s._v(" 删除mysql的默认密码")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /root/.mysql_sercret\n")])])]),a("blockquote",[a("p",[s._v("删除mysql的默认密码,如果不删除,以后安装mysql这个sercret中的默认密码不会变,使用其中的默认密码就可能会报类似Access denied for user ‘root@localhost’ (using password:yes)的错误.")])]),s._v(" "),a("blockquote",[a("p",[s._v("五步完成之后，这样mysql就全部删除干净了，若没安装过mysql可忽略以上步骤")])]),s._v(" "),a("h2",{attrs:{id:"使用wget命令下载到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用wget命令下载到本地"}},[s._v("#")]),s._v(" 使用wget命令下载到本地")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ivh")]),s._v(" mysql80-community-release-el7-3.noarch.rpm\n")])])]),a("h2",{attrs:{id:"安装mysql-8-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql-8-0"}},[s._v("#")]),s._v(" 安装Mysql 8.0")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 yum install 版本后面加上 --nogpgcheck，即可绕过 GPG 验证成功安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--enablerepo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql80-community "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" mysql-community-server "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--nogpgcheck")]),s._v(" \n")])])]),a("h2",{attrs:{id:"查看mysql状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql状态"}},[s._v("#")]),s._v(" 查看mysql状态")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl status mysqld.service\n")])])]),a("h2",{attrs:{id:"启动mysql服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql服务"}},[s._v("#")]),s._v(" 启动mysql服务")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl start mysqld.service\n")])])]),a("h2",{attrs:{id:"设置开机启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置开机启动"}},[s._v("#")]),s._v(" 设置开机启动")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mysqld.service\n")])])]),a("h2",{attrs:{id:"查看mysql初始化密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql初始化密码"}},[s._v("#")]),s._v(" 查看mysql初始化密码")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/mysqld.log\n")])])]),a("h2",{attrs:{id:"登录mysql命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录mysql命令"}},[s._v("#")]),s._v(" 登录mysql命令")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n")])])]),a("h2",{attrs:{id:"第一次更改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一次更改密码"}},[s._v("#")]),s._v(" 第一次更改密码")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("alter user user() identified by 'Root_12root';\n")])])]),a("h2",{attrs:{id:"设置密码规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置密码规则"}},[s._v("#")]),s._v(" 设置密码规则")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SHOW VARIABLES LIKE 'validate_password%';\nset global validate_password.policy=0;\nset global validate_password.length=1;\n")])])]),a("h2",{attrs:{id:"设置新密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置新密码"}},[s._v("#")]),s._v(" 设置新密码")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED BY 'tiankafei';\n")])])]),a("h2",{attrs:{id:"更新主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新主机"}},[s._v("#")]),s._v(" 更新主机")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use mysql;\nupdate user set host = '%' where user = 'root';\nselect host, user from user;\n")])])]),a("h2",{attrs:{id:"刷新配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷新配置"}},[s._v("#")]),s._v(" 刷新配置")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("flush privileges;\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
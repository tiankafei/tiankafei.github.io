(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{417:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"大数据项目-日志收集分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大数据项目-日志收集分析"}},[s._v("#")]),s._v(" 大数据项目-日志收集分析")]),s._v(" "),a("h2",{attrs:{id:"日志收集架构流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志收集架构流程图"}},[s._v("#")]),s._v(" 日志收集架构流程图")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E5%88%86%E6%9E%90-%E6%95%B0%E6%8D%AE%E6%B5%81%E5%9B%BE.png",alt:"日志收集分析-数据流图"}})]),s._v(" "),a("h2",{attrs:{id:"nginx配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" Nginx配置")]),s._v(" "),a("h3",{attrs:{id:"nginx安装之前的准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx安装之前的准备"}},[s._v("#")]),s._v(" Nginx安装之前的准备")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc openssl-devel pcre-devel zlib-devel -y\n")])])]),a("h3",{attrs:{id:"nginx-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-安装"}},[s._v("#")]),s._v(" Nginx 安装")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./configure \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认安装目录")]),s._v("\n/usr/local/nginx\n")])])]),a("h3",{attrs:{id:"配置nginx为系统服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx为系统服务"}},[s._v("#")]),s._v(" 配置Nginx为系统服务")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/rc.d/init.d/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" nginx\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx - this script starts and stops the nginx daemon")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chkconfig:   - 85 15 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# description:  Nginx is an HTTP(S) server, HTTP(S) reverse \\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#               proxy and IMAP/POP3 proxy server")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# processname: nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# config:      /etc/nginx/nginx.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# config:      /etc/sysconfig/nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pidfile:     /var/run/nginx.pid")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Source function library.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /etc/rc.d/init.d/functions\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Source networking configuration.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /etc/sysconfig/network\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check that networking is up.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NETWORKING")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nginx")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/nginx/sbin/nginx"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("prog")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" $nginx"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NGINX_CONF_FILE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/nginx/conf/nginx.conf"')]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f /etc/sysconfig/nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /etc/sysconfig/nginx\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("lockfile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lock/subsys/nginx\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("make_dirs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# make required directories")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("nginx -V "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"configure arguments:"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/[^*]*--user=\\([^ ]*\\).*/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("/g'")]),s._v(" -"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("$nginx -V "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'configure arguments:'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("opt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $opt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.*-temp-path'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $opt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"="')]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# echo "creating" $value')]),s._v("\n               "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -x "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nginx")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NGINX_CONF_FILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n    make_dirs\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n $"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Starting '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$prog")]),s._v(': "')]),s._v("\n    daemon "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nginx")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NGINX_CONF_FILE")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("retval")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$retval")]),s._v(" -eq "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$lockfile")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$retval")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n $"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Stopping '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$prog")]),s._v(': "')]),s._v("\n    killproc "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$prog")]),s._v(" -QUIT\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("retval")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$retval")]),s._v(" -eq "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$lockfile")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$retval")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    configtest "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n    stop\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    start\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    configtest "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n $"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Reloading '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$prog")]),s._v(': "')]),s._v("\n    killproc "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nginx")]),s._v(" -HUP\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RETVAL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("force_reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    restart\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("configtest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nginx")]),s._v(" -t -c "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NGINX_CONF_FILE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("rh_status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    status "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$prog")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("rh_status_q")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rh_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n    start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        rh_status_q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        rh_status_q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("configtest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    reload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        rh_status_q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    force-reload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        force_reload\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        rh_status\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    condrestart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("try-restart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        rh_status_q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(' {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改nginx文件的执行权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x nginx\n")])])]),a("h3",{attrs:{id:"添加到系统服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加到系统服务"}},[s._v("#")]),s._v(" 添加到系统服务")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加该文件到系统服务中去")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" --add nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否添加成功")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" --list nginx\n")])])]),a("h3",{attrs:{id:"启动，停止，重新装载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动，停止，重新装载"}},[s._v("#")]),s._v(" 启动，停止，重新装载")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx start"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("stop\n")])])]),a("h3",{attrs:{id:"配置日志输出格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置日志输出格式"}},[s._v("#")]),s._v(" 配置日志输出格式")]),s._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("log_format")]),s._v(" my_format "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr^A$msec^A$http_host^A$request_uri'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"location配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location配置"}},[s._v("#")]),s._v(" location配置")]),s._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gif "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default_type")]),s._v(" image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log my_format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"flume日志收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flume日志收集"}},[s._v("#")]),s._v(" Flume日志收集")]),s._v(" "),a("h3",{attrs:{id:"flume-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flume-配置"}},[s._v("#")]),s._v(" Flume 配置")]),s._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# example.conf: A single-node Flume configuration")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Name the components on this agent")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sources")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("r1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("k1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.channels")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("c1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Describe/configure the source")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sources.r1.type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("exec")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sources.r1.command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("tail -F /opt/data/access.log")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Describe the sink")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("hdfs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.hdfs.path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/project/%Y%m%d")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.hdfs.filePrefix")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("log-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.hdfs.rollInterval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.hdfs.rollSize")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("10240")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.hdfs.rollCount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.hdfs.idleTimeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("30")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.hdfs.fileType")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("DataStream")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.hdfs.callTimeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("60000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.hdfs.useLocalTimeStamp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use a channel which buffers events in memory")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.channels.c1.type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("memory")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.channels.c1.capacity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.channels.c1.transactionCapacity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("100")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Bind the source and sink to the channel")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sources.r1.channels")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("c1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("a1.sinks.k1.channel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("c1")]),s._v("\n")])])]),a("h3",{attrs:{id:"启动flumne"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动flumne"}},[s._v("#")]),s._v(" 启动Flumne")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("flume-ng agent --conf-file project --name a1 -Dflume.root.logger"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INFO,console\n")])])]),a("h2",{attrs:{id:"mr执行日志数据的清洗存储到hbase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mr执行日志数据的清洗存储到hbase"}},[s._v("#")]),s._v(" MR执行日志数据的清洗存储到HBase")])])}),[],!1,null,null,null);t.default=e.exports}}]);
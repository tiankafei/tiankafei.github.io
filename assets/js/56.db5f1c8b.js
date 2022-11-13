(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{328:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"centos7安装rabbitmq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装rabbitmq"}},[a._v("#")]),a._v(" CentOS7安装RabbitMQ")]),a._v(" "),s("h2",{attrs:{id:"yum方式安装erlang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum方式安装erlang"}},[a._v("#")]),a._v(" yum方式安装erlang")]),a._v(" "),s("p",[a._v("由于rabbitmq是基于erlang语言开发的，所以必须先安装erlang")]),a._v(" "),s("h3",{attrs:{id:"erlang官网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#erlang官网"}},[a._v("#")]),a._v(" erlang官网")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# erlang官网下载地址：")]),a._v("\nhttps://www.erlang.org/downloads\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# erlang solutions 地址：")]),a._v("\nhttps://www.erlang-solutions.com/resources/download.html\n")])])]),s("h3",{attrs:{id:"安装依赖项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖项"}},[a._v("#")]),a._v(" 安装依赖项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" epel-release\n")])])]),s("h3",{attrs:{id:"添加存储库条目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加存储库条目"}},[a._v("#")]),a._v(" 添加存储库条目")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://packages.erlang-solutions.com/erlang-solutions-1.0-1.noarch.rpm\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Uvh")]),a._v(" erlang-solutions-1.0-1.noarch.rpm\n")])])]),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yum install -y erlang\n")])])]),s("h3",{attrs:{id:"验证是否安装成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证是否安装成功"}},[a._v("#")]),a._v(" 验证是否安装成功")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("erl -version\n")])])]),s("blockquote",[s("p",[a._v("出现“Erlang (SMP,ASYNC_THREADS,HIPE) (BEAM) emulator version 10.5”证明安装成功")])]),a._v(" "),s("h2",{attrs:{id:"rpm方式安装erlang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpm方式安装erlang"}},[a._v("#")]),a._v(" rpm方式安装erlang")]),a._v(" "),s("h3",{attrs:{id:"安装依赖项-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖项-2"}},[a._v("#")]),a._v(" 安装依赖项")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yum install -y epel-release\n")])])]),s("h3",{attrs:{id:"下载rpm包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载rpm包"}},[a._v("#")]),a._v(" 下载rpm包")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("wget http://packages.erlang-solutions.com/erlang/rpm/centos/7/x86_64/esl-erlang_25.0.3-1~centos~7_amd64.rpm\n")])])]),s("h3",{attrs:{id:"安装-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yum install esl-erlang_25.0.3-1~centos~7_amd64.rpm\n")])])]),s("h3",{attrs:{id:"验证是否安装成功-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证是否安装成功-2"}},[a._v("#")]),a._v(" 验证是否安装成功")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("erl -version\n")])])]),s("blockquote",[s("p",[a._v("出现“Erlang (SMP,ASYNC_THREADS,HIPE) (BEAM) emulator version 10.5”证明安装成功")])]),a._v(" "),s("h2",{attrs:{id:"安装rabbitmq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装rabbitmq"}},[a._v("#")]),a._v(" 安装RabbitMQ")]),a._v(" "),s("h3",{attrs:{id:"下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[a._v("#")]),a._v(" 下载")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.11.3/rabbitmq-server-3.11.3-1.el8.noarch.rpm\n")])])]),s("h3",{attrs:{id:"安装-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-3"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" rabbitmq-server-3.11.3-1.el8.noarch.rpm "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n")])])]),s("h3",{attrs:{id:"设置开机启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置开机启动"}},[a._v("#")]),a._v(" 设置开机启动")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq-server.service\n")])])]),s("h3",{attrs:{id:"启动web插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动web插件"}},[a._v("#")]),a._v(" 启动web插件")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/lib/rabbitmq/bin\nrabbitmq-plugins "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v("  rabbitmq_management\n")])])]),s("h3",{attrs:{id:"重启rabbitmq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启rabbitmq"}},[a._v("#")]),a._v(" 重启rabbitmq")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl stop rabbitmq-server.service\nsystemctl start rabbitmq-server.service\n")])])]),s("h3",{attrs:{id:"创建用户并赋权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建用户并赋权限"}},[a._v("#")]),a._v(" 创建用户并赋权限")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("rabbitmqctl add_user tiankafei tiankafei\nrabbitmqctl set_user_tags tiankafei administrator\n")])])]),s("h3",{attrs:{id:"登录地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录地址"}},[a._v("#")]),a._v(" 登录地址")]),a._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token header-value"}},[a._v("//192.168.0.111:15672/")])]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
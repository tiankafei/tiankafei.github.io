(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{446:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql主从复制安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql主从复制安装配置"}},[s._v("#")]),s._v(" mysql主从复制安装配置")]),s._v(" "),a("h3",{attrs:{id:"_1、基础设置准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、基础设置准备"}},[s._v("#")]),s._v(" 1、基础设置准备")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#操作系统：")]),s._v("\ncentos6.5\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mysql版本：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#两台虚拟机：")]),s._v("\nnode1:192.168.85.111（主）\nnode2:192.168.85.112（从）\n")])])]),a("h3",{attrs:{id:"_2、安装mysql数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装mysql数据库"}},[s._v("#")]),s._v(" 2、安装mysql数据库")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#详细安装和卸载的步骤参考对应的文档")]),s._v("\n")])])]),a("h3",{attrs:{id:"_3、在两台数据库中分别创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、在两台数据库中分别创建数据库"}},[s._v("#")]),s._v(" 3、在两台数据库中分别创建数据库")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--注意两台必须全部执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" msb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_4、在主（node1）服务器进行如下配置："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、在主（node1）服务器进行如下配置："}},[s._v("#")]),s._v(" 4、在主（node1）服务器进行如下配置：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改配置文件，执行以下命令打开mysql配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/my.cnf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在mysqld模块中添加如下配置信息")]),s._v("\nlog-bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("master-bin "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#二进制文件名称")]),s._v("\nbinlog-format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ROW  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#二进制日志格式，有row、statement、mixed三种格式，row指的是把改变的内容复制过去，而不是把命令在从服务器上执行一遍，statement指的是在主服务器上执行的SQL语句，在从服务器上执行同样的语句。MySQL默认采用基于语句的复制，效率比较高。mixed指的是默认采用基于语句的复制，一旦发现基于语句的无法精确的复制时，就会采用基于行的复制。")]),s._v("\nserver-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t\t   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#要求各个服务器的id必须不一样")]),s._v("\nbinlog-do-db"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("msb   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#同步的数据库名称")]),s._v("\n")])])]),a("h3",{attrs:{id:"_5、配置从服务器登录主服务器的账号授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、配置从服务器登录主服务器的账号授权"}},[s._v("#")]),s._v(" 5、配置从服务器登录主服务器的账号授权")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--授权操作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" validate_password_policy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" validate_password_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replication")]),s._v(" slave "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'%'")]),s._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--刷新权限")]),s._v("\nflush "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_6、从服务器的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、从服务器的配置"}},[s._v("#")]),s._v(" 6、从服务器的配置")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改配置文件，执行以下命令打开mysql配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/my.cnf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在mysqld模块中添加如下配置信息")]),s._v("\nlog-bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("master-bin\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#二进制文件的名称")]),s._v("\nbinlog-format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ROW\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#二进制文件的格式")]),s._v("\nserver-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务器的id")]),s._v("\n")])])]),a("h3",{attrs:{id:"_7、重启主服务器的mysqld服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、重启主服务器的mysqld服务"}},[s._v("#")]),s._v(" 7、重启主服务器的mysqld服务")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启mysql服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld restart\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#登录mysql数据库")]),s._v("\nmysql -uroot -p\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看master的状态")]),s._v("\nshow master status；\n")])])]),a("h3",{attrs:{id:"_8、重启从服务器并进行相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、重启从服务器并进行相关配置"}},[s._v("#")]),s._v(" 8、重启从服务器并进行相关配置")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启mysql服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld restart\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#登录mysql")]),s._v("\nmysql -uroot -p\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#连接主服务器")]),s._v("\nchange master to "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("master_host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.85.11'")]),s._v(",master_user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(",master_password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(",master_port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(",master_log_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master-bin.000001'")]),s._v(",master_log_pos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("154")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动slave")]),s._v("\nstart slave\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看slave的状态")]),s._v("\nshow slave status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("注意没有分号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"_9、此时可以在主服务器进行相关的数据添加删除工作，在从服务器看相关的状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、此时可以在主服务器进行相关的数据添加删除工作，在从服务器看相关的状态"}},[s._v("#")]),s._v(" 9、此时可以在主服务器进行相关的数据添加删除工作，在从服务器看相关的状态")])])}),[],!1,null,null,null);t.default=r.exports}}]);
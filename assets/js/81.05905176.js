(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{435:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker启动软件命令的记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker启动软件命令的记录"}},[a._v("#")]),a._v(" docker启动软件命令的记录")]),a._v(" "),t("h2",{attrs:{id:"docker-启动nacos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-启动nacos"}},[a._v("#")]),a._v(" docker 启动nacos")]),a._v(" "),t("h3",{attrs:{id:"nacos版本-1-3-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nacos版本-1-3-1"}},[a._v("#")]),a._v(" nacos版本：1.3.1")]),a._v(" "),t("h4",{attrs:{id:"拉取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[a._v("#")]),a._v(" 拉取镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker pull nacos/nacos-server:1.3.1\n")])])]),t("h4",{attrs:{id:"单机启动命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单机启动命令"}},[a._v("#")]),a._v(" 单机启动命令")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 启动命令")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8848")]),a._v(":8848 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("standalone "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PREFER_HOST_MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nacos-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NACOS_SERVER_IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${nacos_ip}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SPRING_DATASOURCE_PLATFORM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${db_type}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_SERVICE_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${db_ip}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_SERVICE_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${db_port}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_SERVICE_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${db_username}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_SERVICE_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${db_password}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_SERVICE_DB_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nacos-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--name nacos-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nnacos/nacos-server:1.3.1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 示例")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8848")]),a._v(":8848 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("standalone "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PREFER_HOST_MODE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nacos-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NACOS_SERVER_IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.10")]),a._v(".50.131 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SPRING_DATASOURCE_PLATFORM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_SERVICE_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.10")]),a._v(".50.83 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_SERVICE_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_SERVICE_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tjcp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_SERVICE_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("tjcp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_SERVICE_DB_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nacos-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--name nacos-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nnacos/nacos-server:1.3.1\n")])])]),t("h4",{attrs:{id:"停止nacos容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止nacos容器"}},[a._v("#")]),a._v(" 停止nacos容器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker stop nacos-server\n")])])]),t("h4",{attrs:{id:"删除nacos容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除nacos容器"}},[a._v("#")]),a._v(" 删除nacos容器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker rm nacos-server\n")])])]),t("h2",{attrs:{id:"docker-启动seata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-启动seata"}},[a._v("#")]),a._v(" docker 启动seata")]),a._v(" "),t("h3",{attrs:{id:"seata版本-1-3-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seata版本-1-3-0"}},[a._v("#")]),a._v(" seata版本：1.3.0")]),a._v(" "),t("h4",{attrs:{id:"启动步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动步骤"}},[a._v("#")]),a._v(" 启动步骤：")]),a._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("https:")]),a._v("//www.cnblogs.com/binz/p/12841125.html\n")])])]),t("h4",{attrs:{id:"拉取镜像-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像-2"}},[a._v("#")]),a._v(" 拉取镜像")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo docker pull seataio/seata-server:1.3.0\n")])])]),t("h4",{attrs:{id:"单机启动命令-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单机启动命令-2"}},[a._v("#")]),a._v(" 单机启动命令")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 启动命令")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker run -d --restart always  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--name seata-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8091")]),a._v(":8091  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${seata_home}")]),a._v(":/seata-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SEATA_IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${seata_ip}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SEATA_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${seata_Port}")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--link nacos-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nseataio/seata-server:1.3.0 \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 示例")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker run -d --restart always  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--name seata-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8091")]),a._v(":8091  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /home/zwapp/seata/seata1.3/seata-server:/seata-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SEATA_IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.10")]),a._v(".50.131 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SEATA_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8091")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--link nacos-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nseataio/seata-server:1.3.0 \n")])])]),t("h4",{attrs:{id:"停止seata容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止seata容器"}},[a._v("#")]),a._v(" 停止seata容器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker stop seata-server\n")])])]),t("h4",{attrs:{id:"删除seata容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除seata容器"}},[a._v("#")]),a._v(" 删除seata容器")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker rm seata-server\n")])])]),t("h2",{attrs:{id:"dockerfile文件配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile文件配置"}},[a._v("#")]),a._v(" Dockerfile文件配置")]),a._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" hub.c.163.com/library/java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("8u111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("jdk\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("MAINTAINER")]),a._v(" lanruifeng lanruifeng@thtf.com.cn\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VOLUME")]),a._v(" /tmp\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VOLUME")]),a._v(" /logs\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" jl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("mlbd*.jar mlbd.jar\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" ACTIVES=test\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXPOSE")]),a._v(" 7020\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENTRYPOINT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"java"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-jar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/mlbd.jar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--spring.profiles.active=${ACTIVES}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"构建镜像脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像脚本"}},[a._v("#")]),a._v(" 构建镜像脚本")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("applicationName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$2")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("active")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$3")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止容器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker stop "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${applicationName}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除容器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${applicationName}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除镜像")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker rmi "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${applicationName}")]),a._v(":1.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 构建镜像")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker build -t "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${applicationName}")]),a._v(":1.0 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 根据镜像启动容器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker run -d -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${port}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${port}")]),a._v(" --name "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${applicationName}")]),a._v(" -v /home/zwapp/tjcp-log/"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${applicationName}")]),a._v(":/logs/ -v /usr/share/fonts:/usr/share/fonts -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ACTIVES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${active}")]),a._v(" --link nacos-server "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${applicationName}")]),a._v(":1.0\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
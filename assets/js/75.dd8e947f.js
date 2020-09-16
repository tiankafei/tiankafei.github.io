(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{421:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装docker")]),s._v(" "),t("h2",{attrs:{id:"删除旧版本的docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除旧版本的docker"}},[s._v("#")]),s._v(" 删除旧版本的docker")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            docker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            docker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            docker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            docker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            docker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            docker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n            docker-engine\n")])])]),t("h2",{attrs:{id:"安装依赖库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖库"}},[s._v("#")]),s._v(" 安装依赖库")]),s._v(" "),t("p",[s._v("数据存储驱动包\tdevice-mapper-persistent-data")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndevice-mapper-persistent-data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nlvm2\n")])])]),t("h2",{attrs:{id:"设置国内阿里云的安装源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置国内阿里云的安装源"}},[s._v("#")]),s._v(" 设置国内阿里云的安装源")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),t("h2",{attrs:{id:"检测使用最快的安装源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测使用最快的安装源"}},[s._v("#")]),s._v(" 检测使用最快的安装源")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum makecache fast\n")])])]),t("h2",{attrs:{id:"安装docker-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-2"}},[s._v("#")]),s._v(" 安装docker")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce\n")])])]),t("h2",{attrs:{id:"docker服务启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker服务启动"}},[s._v("#")]),s._v(" docker服务启动")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl start docker.service\n")])])]),t("h2",{attrs:{id:"设置阿里云镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置阿里云镜像加速"}},[s._v("#")]),s._v(" 设置阿里云镜像加速")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/docker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n "registry-mirrors": ["https://w116l1xs.mirror.aliyuncs.com"]\n}\nEOF')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart docker\n")])])]),t("h2",{attrs:{id:"设置docker开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置docker开机启动"}},[s._v("#")]),s._v(" 设置docker开机启动")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker.service\n")])])]),t("h2",{attrs:{id:"查看docker状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看docker状态"}},[s._v("#")]),s._v(" 查看docker状态")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl status docker.service\n")])])]),t("h2",{attrs:{id:"安装docker图形化界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker图形化界面"}},[s._v("#")]),s._v(" 安装docker图形化界面")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 搜索镜像")]),s._v("\ndocker search portainer\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 拉去portainer镜像")]),s._v("\ndocker pull portainer/portainer\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动portainer")]),s._v("\ndocker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000 -v /var/run/docker.sock:/var/run/docker.sock --restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --name prtainer portainer/portainer\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 访问url")]),s._v("\nhttp://127.0.01:9000\n")])])]),t("h2",{attrs:{id:"安装docker-harbor私有仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-harbor私有仓库"}},[s._v("#")]),s._v(" 安装docker harbor私有仓库")]),s._v(" "),t("h3",{attrs:{id:"下载harbor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载harbor"}},[s._v("#")]),s._v(" 下载harbor")]),s._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("https:")]),s._v("//github.com/goharbor/harbor/releases\n")])])]),t("h3",{attrs:{id:"解压harbor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压harbor"}},[s._v("#")]),s._v(" 解压harbor")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf harbor-offline-installer-xxx.tgz\n")])])]),t("h3",{attrs:{id:"更新配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新配置"}},[s._v("#")]),s._v(" 更新配置")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 进入harbor目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" harbor\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 备份配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" harbor.yml harbor.yml.bak\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 更新配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" harbor.yml\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 更新配置内容")]),s._v("\nhostname: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.21\n注释https的配置\nharbor_admin_password: tiankafei\ndatabase:\n  password: tiankafei\n")])])]),t("h3",{attrs:{id:"安装启动harbor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装启动harbor"}},[s._v("#")]),s._v(" 安装启动harbor")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动harbor")]),s._v("\n./install.sh\n")])])]),t("h3",{attrs:{id:"访问地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问地址"}},[s._v("#")]),s._v(" 访问地址")]),s._v(" "),t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("http:")]),s._v("//192.168.0.21/\n")])])]),t("h3",{attrs:{id:"停止harbor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止harbor"}},[s._v("#")]),s._v(" 停止harbor")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker-compose stop\n")])])]),t("h1",{attrs:{id:"docker常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker常用命令"}},[s._v("#")]),s._v(" Docker常用命令")]),s._v(" "),t("h2",{attrs:{id:"docker容器信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker容器信息"}},[s._v("#")]),s._v(" Docker容器信息")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##查看docker容器版本")]),s._v("\ndocker version\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##查看docker容器信息")]),s._v("\ndocker info\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##查看docker容器帮助")]),s._v("\ndocker --help\n")])])]),t("h2",{attrs:{id:"镜像操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像操作"}},[s._v("#")]),s._v(" 镜像操作")]),s._v(" "),t("blockquote",[t("p",[s._v("提示：对于镜像的操作可使用镜像名、镜像长ID和短ID。")])]),s._v(" "),t("h3",{attrs:{id:"镜像查看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像查看"}},[s._v("#")]),s._v(" 镜像查看")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 列出本地images")]),s._v("\ndocker images\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 含中间映像层")]),s._v("\ndocker images -a\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 只显示镜像ID")]),s._v("\ndocker images -q\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 含中间映像层")]),s._v("\ndocker images -qa\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 显示镜像摘要信息(DIGEST列)")]),s._v("\ndocker images --digests\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 显示镜像完整信息")]),s._v("\ndocker images --no-trunc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 显示指定镜像的历史创建；参数：-H 镜像大小和日期，默认为true；--no-trunc  显示完整的提交记录；-q  仅列出提交记录ID")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -H redis\n")])])]),t("h3",{attrs:{id:"镜像搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像搜索"}},[s._v("#")]),s._v(" 镜像搜索")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 搜索仓库MySQL镜像")]),s._v("\ndocker search mysql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## --filter=stars=600：只显示 starts>=600 的镜像")]),s._v("\ndocker search --filter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("stars"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" mysql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## --no-trunc 显示镜像完整 DESCRIPTION 描述")]),s._v("\ndocker search --no-trunc mysql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## --automated ：只列出 AUTOMATED=OK 的镜像")]),s._v("\ndocker search  --automated mysql\n")])])]),t("h3",{attrs:{id:"镜像下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像下载"}},[s._v("#")]),s._v(" 镜像下载")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 下载Redis官方最新镜像，相当于：docker pull redis:latest")]),s._v("\ndocker pull redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 下载仓库所有Redis镜像")]),s._v("\ndocker pull -a redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 下载私人仓库镜像")]),s._v("\ndocker pull bitnami/redis\n")])])]),t("h3",{attrs:{id:"镜像删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像删除"}},[s._v("#")]),s._v(" 镜像删除")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 单个镜像删除，相当于：docker rmi redis:latest")]),s._v("\ndocker rmi redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 强制删除(针对基于镜像有运行的容器进程)")]),s._v("\ndocker rmi -f redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 多个镜像删除，不同镜像间以空格间隔")]),s._v("\ndocker rmi -f redis tomcat nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 删除本地全部镜像")]),s._v("\ndocker rmi -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),t("h3",{attrs:{id:"镜像构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像构建"}},[s._v("#")]),s._v(" 镜像构建")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##（1）编写dockerfile")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /docker/dockerfile\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" mycentos\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##（2）构建docker镜像")]),s._v("\ndocker build -f /docker/dockerfile/mycentos -t mycentos:1.1\n")])])]),t("h2",{attrs:{id:"容器操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器操作"}},[s._v("#")]),s._v(" 容器操作")]),s._v(" "),t("blockquote",[t("p",[s._v("提示：对于容器的操作可使用CONTAINER ID 或 NAMES。")])]),s._v(" "),t("h3",{attrs:{id:"容器启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器启动"}},[s._v("#")]),s._v(" 容器启动")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 新建并启动容器，参数：-i  以交互模式运行容器；-t  为容器重新分配一个伪输入终端；--name  为容器指定一个名称")]),s._v("\ndocker run -i -t --name mycentos\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 后台启动容器，参数：-d  已守护方式启动容器")]),s._v("\ndocker run -d mycentos\n")])])]),t("blockquote",[t("p",[s._v('注意：此时使用"docker ps -a"会发现容器已经退出。这是docker的机制：要使Docker容器后台运行，就必须有一个前台进程。解决方案：将你要运行的程序以前台进程的形式运行。')])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动一个或多个已经被停止的容器")]),s._v("\ndocker start redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 重启容器")]),s._v("\ndocker restart redis\n")])])]),t("h3",{attrs:{id:"容器进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器进程"}},[s._v("#")]),s._v(" 容器进程")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## top支持 ps 命令参数，格式：docker top [OPTIONS] CONTAINER [ps OPTIONS]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 列出redis容器中运行进程")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看所有运行容器的进程信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" Up"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),t("h3",{attrs:{id:"容器日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器日志"}},[s._v("#")]),s._v(" 容器日志")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看redis容器日志，默认参数")]),s._v("\ndocker logs rabbitmq\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看redis容器日志，参数：-f  跟踪日志输出；-t   显示时间戳；--tail  仅列出最新N条容器日志；")]),s._v("\ndocker logs -f -t --tail"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看容器redis从2019年05月21日后的最新10条日志。")]),s._v("\ndocker logs --since"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-05-21"')]),s._v(" --tail"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" redis\n")])])]),t("h3",{attrs:{id:"容器的进入与退出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器的进入与退出"}},[s._v("#")]),s._v(" 容器的进入与退出")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 使用run方式在创建时进入")]),s._v("\ndocker run -it centos /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 关闭容器并退出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 仅退出容器，不关闭")]),s._v("\n快捷键：Ctrl + P + Q\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 直接进入centos 容器启动命令的终端，不会启动新进程，多个attach连接共享容器屏幕，参数：--sig-proxy=false  确保CTRL-D或CTRL-C不会关闭容器")]),s._v("\ndocker attach --sig-proxy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false centos \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 在 centos 容器中打开新的交互模式终端，可以启动新进程，参数：-i  即使没有附加也保持STDIN 打开；-t  分配一个伪终端")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -i -t  centos /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 以交互模式在容器中执行命令，结果返回到当前终端屏幕")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -i -t centos "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /tmp\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 以分离模式在容器中执行命令，程序后台运行，结果不会反馈到当前终端")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -d centos  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" cache.txt \n")])])]),t("h3",{attrs:{id:"查看容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看容器"}},[s._v("#")]),s._v(" 查看容器")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看正在运行的容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看正在运行的容器的ID")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -q\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看正在运行+历史运行过的容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 显示运行容器总文件大小")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -s\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 显示最近创建容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 显示最近创建的3个容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 不截断输出")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" --no-trunc \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 获取镜像redis的元信息")]),s._v("\ndocker inspect redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 获取正在运行的容器redis的 IP")]),s._v("\ndocker inspect --format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}'")]),s._v(" redis\n")])])]),t("h3",{attrs:{id:"容器的停止与删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器的停止与删除"}},[s._v("#")]),s._v(" 容器的停止与删除")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 停止一个运行中的容器")]),s._v("\ndocker stop redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 停止所有正在运行的容器")]),s._v("\ndocker stop "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 杀掉一个运行中的容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 删除一个已停止的容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 删除一个运行中的容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f redis\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 删除多个容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## -l 移除容器间的网络连接，连接名为 db")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -l db \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## -v 删除容器，并删除容器挂载的数据卷")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -v redis\n")])])]),t("h3",{attrs:{id:"生成镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成镜像"}},[s._v("#")]),s._v(" 生成镜像")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 基于当前redis容器创建一个新的镜像；参数：-a 提交的镜像作者；-c 使用Dockerfile指令来创建镜像；-m :提交时的说明文字；-p :在commit时，将容器暂停")]),s._v("\ndocker commit -a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DeepInThought"')]),s._v(" -m"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my redis"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("redis容器ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  myredis:v1.1\n")])])]),t("h3",{attrs:{id:"容器与主机间的数据拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器与主机间的数据拷贝"}},[s._v("#")]),s._v(" 容器与主机间的数据拷贝")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 将rabbitmq容器中的文件copy至本地路径")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" rabbitmq:/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("local_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 将主机文件copy至rabbitmq容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("local_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" rabbitmq:/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 将主机文件copy至rabbitmq容器，目录重命名为[container_path]（注意与非重命名copy的区别）")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("local_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" rabbitmq:/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("container_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
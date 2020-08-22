(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{375:function(a,s,t){"use strict";t.r(s);var v=t(42),r=Object(v.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"jvm入门到精通"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm入门到精通"}},[a._v("#")]),a._v(" JVM入门到精通")]),a._v(" "),t("h2",{attrs:{id:"虚拟机基础概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机基础概念"}},[a._v("#")]),a._v(" 虚拟机基础概念")]),a._v(" "),t("h3",{attrs:{id:"java-从编码到执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-从编码到执行"}},[a._v("#")]),a._v(" Java 从编码到执行")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/java%E4%BB%8E%E7%BC%96%E7%A0%81%E5%88%B0%E6%89%A7%E8%A1%8C.png",alt:"java从编码到执行"}})]),a._v(" "),t("h3",{attrs:{id:"jvm跨平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm跨平台"}},[a._v("#")]),a._v(" JVM跨平台")]),a._v(" "),t("blockquote",[t("p",[a._v("JVM跟Java无关，关键的原因就是class，任何语言只要能编译成class，符合class文件的规范，就可以在JVM虚拟机上执行。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/JVM%E8%B7%A8%E5%B9%B3%E5%8F%B0.png",alt:"JVM跨平台"}})]),a._v(" "),t("h3",{attrs:{id:"jvm是一种规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm是一种规范"}},[a._v("#")]),a._v(" JVM是一种规范")]),a._v(" "),t("blockquote",[t("p",[a._v("是一台虚拟的计算机")])]),a._v(" "),t("h3",{attrs:{id:"javac的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javac的过程"}},[a._v("#")]),a._v(" Javac的过程")]),a._v(" "),t("blockquote",[t("p",[a._v("编译原理：")]),a._v(" "),t("p",[a._v("源码 -> 词法分析器 -> token流 -> 语法分析器 -> 抽象语法树 -> ByteCode -> 字节码生成器 -> 注解抽象语法树 -> 语义分析器")])]),a._v(" "),t("h3",{attrs:{id:"常见的jvm实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的jvm实现"}},[a._v("#")]),a._v(" 常见的JVM实现")]),a._v(" "),t("blockquote",[t("p",[a._v("Hotspot：oracle官方")]),a._v(" "),t("p",[a._v("TaobaoVM：hostpot深度定制版")]),a._v(" "),t("p",[a._v("Jrockit：BEA，曾经号称世界上最快的JVM，被oracle收购，合并与Hotspot")]),a._v(" "),t("p",[a._v("LiquidVM：直接针对硬件（底层没有操作系统）")]),a._v(" "),t("p",[a._v("J9 -IBM")]),a._v(" "),t("p",[a._v("azul zing：最新垃圾回收的业界标杆")]),a._v(" "),t("blockquote",[t("p",[a._v("垃圾回收号称1ms实现，Hotspot吸收了其优点，升级到后来的ZGC")])]),a._v(" "),t("p",[a._v("Microsoft VM")])]),a._v(" "),t("h3",{attrs:{id:"jdk-jre-jvm的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-jre-jvm的区别"}},[a._v("#")]),a._v(" JDK JRE JVM的区别")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/JDK-JRE-JVM.png",alt:"JDK-JRE-JVM"}})]),a._v(" "),t("h2",{attrs:{id:"class文件结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件结构"}},[a._v("#")]),a._v(" class文件结构")]),a._v(" "),t("h3",{attrs:{id:"class文件二进制文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件二进制文件"}},[a._v("#")]),a._v(" class文件二进制文件")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/class%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6%E7%A4%BA%E4%BE%8B.png",alt:"class二进制文件示例"}})]),a._v(" "),t("h3",{attrs:{id:"class文件解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件解析"}},[a._v("#")]),a._v(" class文件解析")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/class%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90.png",alt:"class文件解析"}})]),a._v(" "),t("h3",{attrs:{id:"class文件查看方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件查看方法"}},[a._v("#")]),a._v(" class文件查看方法")]),a._v(" "),t("ul",[t("li",[a._v("javap -v class文件名")]),a._v(" "),t("li",[a._v("JBE（可以直接修改）")]),a._v(" "),t("li",[a._v("JClassLib（IDEA插件之一）")])]),a._v(" "),t("h3",{attrs:{id:"class文件结构-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件结构-2"}},[a._v("#")]),a._v(" class文件结构")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/java1.8%E7%B1%BB%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F%E7%AC%AC%E4%B8%80%E7%89%88.png",alt:"java1.8类文件格式第一版"}})]),a._v(" "),t("h2",{attrs:{id:"class文件内存加载过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件内存加载过程"}},[a._v("#")]),a._v(" class文件内存加载过程")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/class%E6%96%87%E4%BB%B6%E5%8A%A0%E8%BD%BD%E5%88%B0%E5%86%85%E5%AD%98.png",alt:"class文件加载到内存"}})]),a._v(" "),t("ol",[t("li",[a._v("loading:class文件被加载到内存")]),a._v(" "),t("li",[a._v("linking:\n"),t("ol",[t("li",[a._v("verification:校验加载进来的class是否符合标准(前面四个字节是“cafe babe”等)")]),a._v(" "),t("li",[a._v("preparation:class静态变量赋默认值(数值型默认值为0)")]),a._v(" "),t("li",[a._v("resolution:class文件的常量池用到的那些符号引用转换为直接的内存地址，可以直接访问到")])])]),a._v(" "),t("li",[a._v("initializing:静态变量赋值为初始值")])]),a._v(" "),t("h3",{attrs:{id:"类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[a._v("#")]),a._v(" 类加载器")]),a._v(" "),t("blockquote",[t("p",[a._v("JVM中的所有的calss都是被类加载器加载到内存的（ClassLoader）")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.png",alt:"类加载器"}})]),a._v(" "),t("h3",{attrs:{id:"类加载过程-双亲委派"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载过程-双亲委派"}},[a._v("#")]),a._v(" 类加载过程:双亲委派")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B.png",alt:"类加载过程"}})]),a._v(" "),t("h3",{attrs:{id:"为什么要双亲委派"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要双亲委派"}},[a._v("#")]),a._v(" 为什么要双亲委派")]),a._v(" "),t("ol",[t("li",[a._v("主要是为了安全:自己定义一个java.lang.String类")]),a._v(" "),t("li",[a._v("一个类只加载一次，减少资源浪费")])]),a._v(" "),t("h2",{attrs:{id:"运行时内存结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行时内存结构"}},[a._v("#")]),a._v(" 运行时内存结构")]),a._v(" "),t("h2",{attrs:{id:"jvm常用指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm常用指令"}},[a._v("#")]),a._v(" JVM常用指令")]),a._v(" "),t("h2",{attrs:{id:"jvm调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优"}},[a._v("#")]),a._v(" JVM调优")]),a._v(" "),t("h2",{attrs:{id:"垃圾回收算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[a._v("#")]),a._v(" 垃圾回收算法")]),a._v(" "),t("h2",{attrs:{id:"jvm调优实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优实战"}},[a._v("#")]),a._v(" JVM调优实战")]),a._v(" "),t("h2",{attrs:{id:"jvm常见参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm常见参数"}},[a._v("#")]),a._v(" JVM常见参数")])])}),[],!1,null,null,null);s.default=r.exports}}]);
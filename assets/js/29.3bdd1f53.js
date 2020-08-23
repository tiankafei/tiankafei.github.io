(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{375:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jvm入门到精通"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm入门到精通"}},[s._v("#")]),s._v(" JVM入门到精通")]),s._v(" "),t("h2",{attrs:{id:"虚拟机基础概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机基础概念"}},[s._v("#")]),s._v(" 虚拟机基础概念")]),s._v(" "),t("h3",{attrs:{id:"java-从编码到执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-从编码到执行"}},[s._v("#")]),s._v(" Java 从编码到执行")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/java%E4%BB%8E%E7%BC%96%E7%A0%81%E5%88%B0%E6%89%A7%E8%A1%8C.png",alt:"java从编码到执行"}})]),s._v(" "),t("h3",{attrs:{id:"jvm跨平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm跨平台"}},[s._v("#")]),s._v(" JVM跨平台")]),s._v(" "),t("blockquote",[t("p",[s._v("JVM跟Java无关，关键的原因就是class，任何语言只要能编译成class，符合class文件的规范，就可以在JVM虚拟机上执行。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/JVM%E8%B7%A8%E5%B9%B3%E5%8F%B0.png",alt:"JVM跨平台"}})]),s._v(" "),t("h3",{attrs:{id:"jvm是一种规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm是一种规范"}},[s._v("#")]),s._v(" JVM是一种规范")]),s._v(" "),t("blockquote",[t("p",[s._v("是一台虚拟的计算机")])]),s._v(" "),t("h3",{attrs:{id:"javac的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javac的过程"}},[s._v("#")]),s._v(" Javac的过程")]),s._v(" "),t("blockquote",[t("p",[s._v("编译原理：")]),s._v(" "),t("p",[s._v("源码 -> 词法分析器 -> token流 -> 语法分析器 -> 抽象语法树 -> ByteCode -> 字节码生成器 -> 注解抽象语法树 -> 语义分析器")])]),s._v(" "),t("h3",{attrs:{id:"常见的jvm实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的jvm实现"}},[s._v("#")]),s._v(" 常见的JVM实现")]),s._v(" "),t("blockquote",[t("p",[s._v("Hotspot：oracle官方")]),s._v(" "),t("p",[s._v("TaobaoVM：hostpot深度定制版")]),s._v(" "),t("p",[s._v("Jrockit：BEA，曾经号称世界上最快的JVM，被oracle收购，合并与Hotspot")]),s._v(" "),t("p",[s._v("LiquidVM：直接针对硬件（底层没有操作系统）")]),s._v(" "),t("p",[s._v("J9 -IBM")]),s._v(" "),t("p",[s._v("azul zing：最新垃圾回收的业界标杆")]),s._v(" "),t("blockquote",[t("p",[s._v("垃圾回收号称1ms实现，Hotspot吸收了其优点，升级到后来的ZGC")])]),s._v(" "),t("p",[s._v("Microsoft VM")])]),s._v(" "),t("h3",{attrs:{id:"jdk-jre-jvm的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-jre-jvm的区别"}},[s._v("#")]),s._v(" JDK JRE JVM的区别")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/JDK-JRE-JVM.png",alt:"JDK-JRE-JVM"}})]),s._v(" "),t("h2",{attrs:{id:"class文件结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件结构"}},[s._v("#")]),s._v(" class文件结构")]),s._v(" "),t("h3",{attrs:{id:"class文件二进制文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件二进制文件"}},[s._v("#")]),s._v(" class文件二进制文件")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/class%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6%E7%A4%BA%E4%BE%8B.png",alt:"class二进制文件示例"}})]),s._v(" "),t("h3",{attrs:{id:"class文件解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件解析"}},[s._v("#")]),s._v(" class文件解析")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/class%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90.png",alt:"class文件解析"}})]),s._v(" "),t("h3",{attrs:{id:"class文件查看方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件查看方法"}},[s._v("#")]),s._v(" class文件查看方法")]),s._v(" "),t("ul",[t("li",[s._v("javap -v class文件名")]),s._v(" "),t("li",[s._v("JBE（可以直接修改）")]),s._v(" "),t("li",[s._v("JClassLib（IDEA插件之一）")])]),s._v(" "),t("h3",{attrs:{id:"class文件结构-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件结构-2"}},[s._v("#")]),s._v(" class文件结构")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/java1.8%E7%B1%BB%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F%E7%AC%AC%E4%B8%80%E7%89%88.png",alt:"java1.8类文件格式第一版"}})]),s._v(" "),t("h2",{attrs:{id:"class文件内存加载过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class文件内存加载过程"}},[s._v("#")]),s._v(" class文件内存加载过程")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/class%E6%96%87%E4%BB%B6%E5%8A%A0%E8%BD%BD%E5%88%B0%E5%86%85%E5%AD%98.png",alt:"class文件加载到内存"}})]),s._v(" "),t("ol",[t("li",[s._v("loading:class文件被加载到内存")]),s._v(" "),t("li",[s._v("linking:\n"),t("ol",[t("li",[s._v("verification:校验加载进来的class是否符合标准(前面四个字节是“cafe babe”等)")]),s._v(" "),t("li",[s._v("preparation:class静态变量赋默认值(数值型默认值为0)")]),s._v(" "),t("li",[s._v("resolution:class文件的常量池用到的那些符号引用转换为直接的内存地址，可以直接访问到")])])]),s._v(" "),t("li",[s._v("initializing:静态变量赋值为初始值\n"),t("ul",[t("li",[s._v("JVM规范并没有规定何时加载。Hotspot默认懒加载")]),s._v(" "),t("li",[s._v("但是严格规定了什么时候必须初始化\n"),t("ol",[t("li",[s._v("new getstatic putstatic invokestatic指定，访问final变量除外")]),s._v(" "),t("li",[s._v("java.lang.reflect对类进行反射调用时")]),s._v(" "),t("li",[s._v("初始化子类的时候，父类首先初始化")]),s._v(" "),t("li",[s._v("虚拟机启动时，被执行的主类必须初始化")]),s._v(" "),t("li",[s._v("动态语言支持java.lang.invoke.MethodHandle解析的结果为REF_getstatic REF_putstatic REF_invokestatic的方法句柄时，该类必须初始化")])])])])])]),s._v(" "),t("h3",{attrs:{id:"类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[s._v("#")]),s._v(" 类加载器")]),s._v(" "),t("blockquote",[t("p",[s._v("JVM中的所有的calss都是被类加载器加载到内存的（ClassLoader）")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.png",alt:"类加载器"}})]),s._v(" "),t("h3",{attrs:{id:"类加载过程-双亲委派"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载过程-双亲委派"}},[s._v("#")]),s._v(" 类加载过程:双亲委派")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B.png",alt:"类加载过程"}})]),s._v(" "),t("h3",{attrs:{id:"为什么要双亲委派"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要双亲委派"}},[s._v("#")]),s._v(" 为什么要双亲委派")]),s._v(" "),t("ol",[t("li",[s._v("主要是为了安全:自己定义一个java.lang.String类")]),s._v(" "),t("li",[s._v("一个类只加载一次，减少资源浪费")])]),s._v(" "),t("h3",{attrs:{id:"自定义类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义类加载器"}},[s._v("#")]),s._v(" 自定义类加载器")]),s._v(" "),t("ol",[t("li",[s._v("继承ClassLoader")]),s._v(" "),t("li",[s._v("重写模板方法findClass，调用defineClass")]),s._v(" "),t("li",[s._v("自定义类加载器加载自加密的class\n"),t("ol",[t("li",[s._v("防止反编译")]),s._v(" "),t("li",[s._v("防止篡改")])])])]),s._v(" "),t("h3",{attrs:{id:"classloader源码解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classloader源码解析"}},[s._v("#")]),s._v(" ClassLoader源码解析")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" resolve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassNotFoundException")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getClassLoadingLock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// First, check if the class has already been loaded")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("findLoadedClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" t0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nanoTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" parent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("findBootstrapClassOrNull")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassNotFoundException")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ClassNotFoundException thrown if class not found")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// from the non-null parent class loader")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// If still not found, then invoke findClass in order")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// to find the class.")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" t1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nanoTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("findClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// this is the defining class loader; record the stats")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PerfCounter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getParentDelegationTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" t0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PerfCounter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFindClassTime")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addElapsedTimeFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PerfCounter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getFindClasses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("increment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resolve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolveClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/**\n * Finds the class with the specified <a href="#binary-name">binary name</a>.\n * This method should be overridden by class loader implementations that\n * follow the delegation model for loading classes, and will be invoked by\n * the {@link #loadClass loadClass} method after checking the\n * parent class loader for the requested class.\n * @implSpec The default implementation throws {@code ClassNotFoundException}.\n * @param  name\n *         The <a href="#binary-name">binary name</a> of the class\n * @return  The resulting {@code Class} object\n * @throws  ClassNotFoundException\n *          If the class could not be found\n * @since  1.2\n */')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("findClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassNotFoundException")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassNotFoundException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"混合模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#混合模式"}},[s._v("#")]),s._v(" 混合模式")]),s._v(" "),t("blockquote",[t("ul",[t("li",[t("p",[s._v("-Xmixed 默认为混合模式")]),s._v(" "),t("p",[s._v("开始解释执行，启动速度较快，对热点代码实行检测和编译")])]),s._v(" "),t("li",[t("p",[s._v("-Xint")]),s._v(" "),t("p",[s._v("使用解释模式，启动很快，执行稍慢")])]),s._v(" "),t("li",[t("p",[s._v("-Xcomp")]),s._v(" "),t("p",[s._v("使用纯编译模式，执行很快，启动很慢")])])])]),s._v(" "),t("ul",[t("li",[s._v("解释器\n"),t("ul",[t("li",[s._v("bytecode intepreter")])])]),s._v(" "),t("li",[s._v("JIT\n"),t("ul",[t("li",[s._v("just In-Time compiler")])])]),s._v(" "),t("li",[s._v("混合模式\n"),t("ul",[t("li",[s._v("混合使用解释器 + 热点代码编译")]),s._v(" "),t("li",[s._v("起始阶段采用解释执行")]),s._v(" "),t("li",[s._v("热点代码检测:-XX:CompileThreshold=10000\n"),t("ol",[t("li",[s._v("多次被调用的方法（方法计数器：检测方法执行频率）")]),s._v(" "),t("li",[s._v("多次被调用的循环（循环计数器：检测循环执行效率）")]),s._v(" "),t("li",[s._v("进行编译")])])])])])]),s._v(" "),t("h2",{attrs:{id:"运行时内存结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行时内存结构"}},[s._v("#")]),s._v(" 运行时内存结构")]),s._v(" "),t("h2",{attrs:{id:"jvm常用指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm常用指令"}},[s._v("#")]),s._v(" JVM常用指令")]),s._v(" "),t("h2",{attrs:{id:"jvm调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优"}},[s._v("#")]),s._v(" JVM调优")]),s._v(" "),t("h2",{attrs:{id:"垃圾回收算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[s._v("#")]),s._v(" 垃圾回收算法")]),s._v(" "),t("h2",{attrs:{id:"jvm调优实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优实战"}},[s._v("#")]),s._v(" JVM调优实战")]),s._v(" "),t("h2",{attrs:{id:"jvm常见参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm常见参数"}},[s._v("#")]),s._v(" JVM常见参数")])])}),[],!1,null,null,null);a.default=e.exports}}]);
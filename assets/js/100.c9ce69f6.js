(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{370:function(t,a,e){"use strict";e.r(a);var s=e(13),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flume"}},[t._v("#")]),t._v(" Flume")]),t._v(" "),a("h2",{attrs:{id:"flume介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flume介绍"}},[t._v("#")]),t._v(" Flume介绍")]),t._v(" "),a("p",[t._v("Flume是一个分布式，可靠的，可以用来有效的收集，聚合和移动大的日志数据的可用服务。它是一个基于数据流的简单且灵活的框架。采用可调可靠性机制和多种故障转移及恢复机制保证很好的稳健性和容错性。它使用了一个简单的可扩展的数据模型，允许在线分析应用。data flow（数据流）是Flume最重要的抽象，data flow描述了从数据产生，传输、处理并最终写入目标路径。下图描述了Flume重要的几个组件：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/flume-%E5%8D%95agent.png",alt:"flume-单agent"}})]),t._v(" "),a("p",[t._v("结合上图，Flume的一些核心组件：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("组件")]),t._v(" "),a("th",[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Web Server")]),t._v(" "),a("td",[t._v("数据产生的源头。")])]),t._v(" "),a("tr",[a("td",[t._v("Agent")]),t._v(" "),a("td",[t._v("Flume的核心就是Agent 。Agent是一个Java进程，且运行在日志收集端，通过Agent接收日志，然后暂存起来，再发送到目的地。")])]),t._v(" "),a("tr",[a("td",[t._v("Source")]),t._v(" "),a("td",[t._v("Agent核心组件之一，Source（源）用于从Web Server收集数据，然后发送到Channel（通道）。")])]),t._v(" "),a("tr",[a("td",[t._v("Channel")]),t._v(" "),a("td",[t._v("Agent核心组件之一，Channel（通道）可以用来从Source接收数据，然后发送到Sink，Channel存放零时数据，有点类似队列一样。")])]),t._v(" "),a("tr",[a("td",[t._v("Sink")]),t._v(" "),a("td",[t._v("Agent核心组件之一，Sink（接收器）用来把数据发送的目标地点，如上图放到HDFS中。")])]),t._v(" "),a("tr",[a("td",[t._v("Event")]),t._v(" "),a("td",[t._v("整个数据传输过程中，流动的对象都是实现了org.apache.flume.Event接口的对象。Event也是事务保证的级别。")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("Flume支持多个Agent，支持扇入(fan-in)、扇出(fan-out)。")])]),t._v(" "),a("h2",{attrs:{id:"系统要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[t._v("#")]),t._v(" 系统要求")]),t._v(" "),a("ol",[a("li",[t._v("java运行时环境--Java 1.6或者更晚的（建议Java 1.7）")]),t._v(" "),a("li",[t._v("内存 - 使用Sources，Channels或者Sinks要配置足够的内存。")]),t._v(" "),a("li",[t._v("硬盘空间 - 使用Channels和Sinks要配置足够的硬盘空间。")]),t._v(" "),a("li",[t._v("目录权限 - 被Agent使用的目录必须要有读和写的权限。")])]),t._v(" "),a("h2",{attrs:{id:"数据流模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据流模型"}},[t._v("#")]),t._v(" 数据流模型")]),t._v(" "),a("p",[t._v("Flume Event被定义为一个字节的有效载荷以及以及一个可选的字符串属性集。Flume Source接收来自外部源的数据（比如：Web Server）。Flume的数据流由Event贯穿始终。事件是Flume的基本数据单元，当Source捕获事件后会进行特定的格式化，然后Source会把Event推送到一个或多个Channel中，可以把Channel看作是一个缓冲区或者一个队列，它将保存事件直到Sink处理完该事件。Sink负责持久化日志或者把事件推向另一个Source。")]),t._v(" "),a("p",[t._v("Flume提供了大量内置的Source、Channel和Sink类型。不同类型的Source,Channel和Sink可以自由组合。也可以自定义Source，Channel和Sink。关于这三者的组合关系是很灵活的，下面我们看下几幅图：")]),t._v(" "),a("h3",{attrs:{id:"多agent流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多agent流"}},[t._v("#")]),t._v(" 多agent流")]),t._v(" "),a("p",[t._v("为了使数据跨多个代理或跃点流动，前一个代理的接收器和当前跃点的源必须是avro类型，接收器指向源的主机名（或IP地址）和端口。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/flume-%E4%B8%B2%E8%81%94agent.png",alt:"flume-串联agent"}})]),t._v(" "),a("h3",{attrs:{id:"合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并"}},[t._v("#")]),t._v(" 合并")]),t._v(" "),a("p",[t._v("日志收集中的一个非常常见的情况是，大量的日志生成客户端将数据发送到连接到存储子系统的几个使用方。 例如，从数百台Web服务器收集的日志发送到许多写入HDFS群集的代理。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/flume-%E5%B9%B6%E8%81%94agent.png",alt:"flume-并联agent"}})]),t._v(" "),a("h3",{attrs:{id:"多路流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多路流"}},[t._v("#")]),t._v(" 多路流")]),t._v(" "),a("p",[t._v("Flume支持multiplexing Event到一个或者多个目的地，它通过多路复用器将Event复制或者选择性的路由到一个或多个Channel。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/flume-%E5%A4%9Asink%E7%9A%84agent.png",alt:"flume-多sink的agent"}})]),t._v(" "),a("p",[t._v("上图的示例，名称为“foo”的Agent，Source会Fan out到三个Channel中，Fan out的方式分为replicating和multiplexing。如果采用replicating方式，那么每个Event会发到这三个Channel中，如果采用multiplexing方式，它是根据Event的属性来路由，然后发送到指定的Channel中。")]),t._v(" "),a("p",[a("strong",[t._v("一个sink只能接收一个Channel发过来的数据")])]),t._v(" "),a("h2",{attrs:{id:"可靠性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可靠性"}},[t._v("#")]),t._v(" 可靠性")]),t._v(" "),a("p",[t._v("Event是分阶梯传送的，从Source->Channel->Sink的，Event最终传送到下一个Agent或下一个终端资源库（例如HDFS，文件系统等），在传送打到后，Event在Channel中删除。")]),t._v(" "),a("p",[t._v("end-to-end指的是：在删除Channel中的Event时，保证Event已经传递到了下一个Agent或者终端资源库，但是这里没有提到Source进入到Channel之前如果保证不丢失。具体的可以看下每个Source的实现。")]),t._v(" "),a("p",[t._v("Flume采用了事务的方式来保证Event的可靠性传输，保证Event集合在点对点的传输是可靠的。")]),t._v(" "),a("h2",{attrs:{id:"可恢复性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可恢复性"}},[t._v("#")]),t._v(" 可恢复性")]),t._v(" "),a("p",[t._v("事件在Channel是分阶梯，管理从失败中恢复。Flume支持持久化到本地文件系统中（即：FileChannel，但是性能不佳）。Memory Channel只是存储Event到内存的队列中，性能很好，但是当Agent挂掉，内存中的Event是不能够被恢复的。")]),t._v(" "),a("h2",{attrs:{id:"flume-sources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flume-sources"}},[t._v("#")]),t._v(" Flume Sources")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Avro Source")]),t._v(" "),a("td",[t._v("监听Avro端口并且从外部Avro客户端接收Event。")])]),t._v(" "),a("tr",[a("td",[t._v("Thrift Source")]),t._v(" "),a("td",[t._v("监听Thrift端口并且从外部Thrift客户端接收Event。")])]),t._v(" "),a("tr",[a("td",[t._v("Exec Source")]),t._v(" "),a("td",[t._v("运行Unix命令，预计能产生持续的输出（）")])]),t._v(" "),a("tr",[a("td",[t._v("JMS Source")]),t._v(" "),a("td",[t._v("从JMS的queue或者topic读取数据")])]),t._v(" "),a("tr",[a("td",[t._v("Spooling Directory Source")]),t._v(" "),a("td",[t._v("监测配置的目录下新增的文件，并将文件中的数据读取出来，可实现准实时。")])]),t._v(" "),a("tr",[a("td",[t._v("Kafka Source")]),t._v(" "),a("td",[t._v("作为一个消费者，从Apache Kafka的topic读取消息。")])]),t._v(" "),a("tr",[a("td",[t._v("NetCat Source")]),t._v(" "),a("td",[t._v("监听指定端口，将每一行封装成一个Event。")])]),t._v(" "),a("tr",[a("td",[t._v("Sequence Generator Source")]),t._v(" "),a("td",[t._v("一个简单的序列生成器，从0开始，每次增加1，主要用于测试。")])]),t._v(" "),a("tr",[a("td",[t._v("Syslog TCP Source")]),t._v(" "),a("td",[t._v("读取syslog消息并且生成Flume的Event，TCP每个Event用'n'分割")])]),t._v(" "),a("tr",[a("td",[t._v("Multiport Syslog TCP Source")]),t._v(" "),a("td",[t._v("这个是最新，最快，多端口版本的Syslog TCP Source。")])]),t._v(" "),a("tr",[a("td",[t._v("Syslog UDP Source")]),t._v(" "),a("td",[t._v("读取syslog消息并且生成Flume的Event，每个输入信息当成一个Event")])]),t._v(" "),a("tr",[a("td",[t._v("HTTP Source")]),t._v(" "),a("td",[t._v("接受HTTP的GET或者POST数据，GET是实验性质的，不建议使用。支持JSON、BLOB表示形式")])]),t._v(" "),a("tr",[a("td",[t._v("Stress Source")]),t._v(" "),a("td",[t._v("是一个内部负载生成源，用来做压力测试是非常有用的")])]),t._v(" "),a("tr",[a("td",[t._v("Avro Legacy Source")]),t._v(" "),a("td",[t._v("允许Flume 1.x的Agent从Flume 0.9.4的Agent中获取数据，它接受0.9.4的Event，并且转化成1.x")])]),t._v(" "),a("tr",[a("td",[t._v("Thrift Legacy Source")]),t._v(" "),a("td",[t._v("和Avro Legacy Source雷同")])]),t._v(" "),a("tr",[a("td",[t._v("Scribe Source")]),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"flume-sinks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flume-sinks"}},[t._v("#")]),t._v(" Flume Sinks")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("HDFS Sink")]),t._v(" "),a("td",[t._v("将数据写入到HDFS")])]),t._v(" "),a("tr",[a("td",[t._v("Hive Sink")]),t._v(" "),a("td",[t._v("将文本或者JSON数据用分隔符分割，直接变成Hive的表，或者是分区")])]),t._v(" "),a("tr",[a("td",[t._v("Logger Sink")]),t._v(" "),a("td",[t._v("记录Event的Info级别日志，通常用于测试或调试。")])]),t._v(" "),a("tr",[a("td",[t._v("Avro Sink")]),t._v(" "),a("td",[t._v("采用Avro Sink接收到的Event，发送到另外一个Avro Source")])]),t._v(" "),a("tr",[a("td",[t._v("Thrift Sink")]),t._v(" "),a("td",[t._v("采用Thrift Sink接收到的Event，发送到另外一个Thrift Source")])]),t._v(" "),a("tr",[a("td",[t._v("IRC Sink")]),t._v(" "),a("td",[t._v("从附加的Channel获取数据，转发到配置中的IRC的目的地。IRC（类似于网络聊天室的服务）")])]),t._v(" "),a("tr",[a("td",[t._v("File Roll Sink")]),t._v(" "),a("td",[t._v("将Event存放到本地文件系统，根据时间或者大小生成文件。")])]),t._v(" "),a("tr",[a("td",[t._v("Null Sink")]),t._v(" "),a("td",[t._v("丢弃所有从Channel获取的Event。")])]),t._v(" "),a("tr",[a("td",[t._v("HBaseSink")]),t._v(" "),a("td",[t._v("写入数据到Hbase")])]),t._v(" "),a("tr",[a("td",[t._v("AsyncHBaseSink")]),t._v(" "),a("td",[t._v("采用异步的形式写入数据到Hbase")])]),t._v(" "),a("tr",[a("td",[t._v("MorphlineSolrSink")]),t._v(" "),a("td",[t._v("将数据写入Solr集群")])]),t._v(" "),a("tr",[a("td",[t._v("ElasticSearchSink")]),t._v(" "),a("td",[t._v("将数据写入ElasticSearch集群")])]),t._v(" "),a("tr",[a("td",[t._v("Kafka Sink")]),t._v(" "),a("td",[t._v("将数据写入Kafka集群")])])])]),t._v(" "),a("h2",{attrs:{id:"flume-channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flume-channels"}},[t._v("#")]),t._v(" Flume Channels")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Memory Channel")]),t._v(" "),a("td",[t._v("储存Event在内存队列中，如果宕机可能会造成数据的丢失，具有很高的吞吐量。")])]),t._v(" "),a("tr",[a("td",[t._v("JDBC Channel")]),t._v(" "),a("td",[t._v("将Event储存在持久化的数据库中，目前支持嵌入式的Derby。")])]),t._v(" "),a("tr",[a("td",[t._v("Kafka Channel")]),t._v(" "),a("td",[t._v("将Event储存在Kafka集群（必须单独部署），Kafka提供了高可用和复制性，所以Kafka或者Agent崩溃，数据也不会丢失。")])]),t._v(" "),a("tr",[a("td",[t._v("File Channel")]),t._v(" "),a("td",[t._v("将Event持久化在本地文件系统里(性能较差)，但是可以保证数据不丢失。")])]),t._v(" "),a("tr",[a("td",[t._v("Spillable Memory Channel")]),t._v(" "),a("td",[t._v("Event数据存储在内存中和磁盘上，当内存队列满了，会持久化到磁盘文件（当前试验性的，不建议生产环境使用）")])]),t._v(" "),a("tr",[a("td",[t._v("Pseudo Transaction Channel")]),t._v(" "),a("td",[t._v("仅用于单元测试，不能用于生产环境。")])])])]),t._v(" "),a("h1",{attrs:{id:"flume测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flume测试"}},[t._v("#")]),t._v(" Flume测试")]),t._v(" "),a("p",[t._v("Flume 的配置参考官方案例：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://flume.apache.org/releases/content/1.9.0/FlumeUserGuide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://flume.apache.org/releases/content/1.9.0/FlumeUserGuide.html"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"flume单台节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flume单台节点"}},[t._v("#")]),t._v(" Flume单台节点")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/flume-%E5%8D%95agent.png",alt:"flume-单agent"}})]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example.conf: A single-node Flume configuration")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Name the components on this agent")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("r1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("k1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("c1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Describe/configure the source")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("netcat")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.bind")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("bigdata01")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.port")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("44444")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Describe the sink")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks.k1.type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("logger")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Use a channel which buffers events in memory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels.c1.type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("memory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels.c1.capacity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels.c1.transactionCapacity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("100")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Bind the source and sink to the channel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.channels")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("c1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks.k1.channel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("c1")]),t._v("\n")])])]),a("h3",{attrs:{id:"执行启动命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行启动命令"}},[t._v("#")]),t._v(" 执行启动命令")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("flume-ng agent --conf-file option-netcat "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" a1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dflume.root.logger")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("INFO,console\n")])])]),a("h3",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装telnet")]),t._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" telnet\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用telnet连接flume节点，可以从控制台发送消息")]),t._v("\ntelnet bigdata01 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("44444")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证 bigdata01 是否可以打印输入的字符串，如果能正常输出，说明正常运行")]),t._v("\n")])])]),a("h2",{attrs:{id:"两台flume节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两台flume节点"}},[t._v("#")]),t._v(" 两台Flume节点")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/flume-%E4%B8%B2%E8%81%94agent.png",alt:"flume-串联agent"}})]),t._v(" "),a("h3",{attrs:{id:"bigdata01-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bigdata01-配置"}},[t._v("#")]),t._v(" bigdata01 配置")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example.conf: A single-node Flume configuration")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Name the components on this agent")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("r1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("k1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("c1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Describe/configure the source")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("netcat")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.bind")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("bigdata01")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.port")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("44444")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Describe the sink")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks.k1.type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("avro")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks.k1.hostname")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("bigdata02")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks.k1.port")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("4545")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Use a channel which buffers events in memory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels.c1.type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("memory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels.c1.capacity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels.c1.transactionCapacity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("100")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Bind the source and sink to the channel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.channels")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("c1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks.k1.channel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("c1")]),t._v("\n")])])]),a("h3",{attrs:{id:"bigdata02-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bigdata02-配置"}},[t._v("#")]),t._v(" bigdata02 配置")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# example.conf: A single-node Flume configuration")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Name the components on this agent")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("r1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("k1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("c1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Describe/configure the source")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("avro")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.bind")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("bigdata02")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.port")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("4545")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Describe the sink")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks.k1.type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("logger")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Use a channel which buffers events in memory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels.c1.type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("memory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels.c1.capacity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("1000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.channels.c1.transactionCapacity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("100")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Bind the source and sink to the channel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sources.r1.channels")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("c1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("a1.sinks.k1.channel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("c1")]),t._v("\n")])])]),a("h3",{attrs:{id:"启动-bigdata02-的-flume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-bigdata02-的-flume"}},[t._v("#")]),t._v(" 启动 bigdata02 的 flume")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("flume-ng agent --conf-file option-avro "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" a1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dflume.root.logger")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("INFO,console\n")])])]),a("h3",{attrs:{id:"启动-bigdata01-的-flume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-bigdata01-的-flume"}},[t._v("#")]),t._v(" 启动 bigdata01 的 flume")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("flume-ng agent --conf-file option-avro "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" a1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-Dflume.root.logger")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("INFO,console\n")])])]),a("h3",{attrs:{id:"测试-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试-2"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用telnet连接flume节点，可以从控制台发送消息")]),t._v("\ntelnet bigdata01 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("44444")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证 bigdata02 是否可以打印输入的字符串，如果能正常输出，说明正常运行")]),t._v("\n")])])]),a("h2",{attrs:{id:"多台-flume-节点-存在单点故障的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多台-flume-节点-存在单点故障的问题"}},[t._v("#")]),t._v(" 多台 Flume 节点（存在单点故障的问题）")]),t._v(" "),a("blockquote",[a("p",[t._v("一个 flume 配置多个 source")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/flume-%E5%B9%B6%E8%81%94agent.png",alt:"flume-并联agent"}})]),t._v(" "),a("h2",{attrs:{id:"正儿八经的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正儿八经的配置"}},[t._v("#")]),t._v(" 正儿八经的配置")]),t._v(" "),a("blockquote",[a("p",[t._v("一个 flume 配置多个 sinks")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/flume-%E5%A4%9Asink%E7%9A%84agent.png",alt:"flume-多sink的agent"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);
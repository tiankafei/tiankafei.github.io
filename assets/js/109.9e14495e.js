(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{463:function(e,t,a){"use strict";a.r(t);var s=a(42),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"elasticsearch学习笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch学习笔记"}},[e._v("#")]),e._v(" Elasticsearch学习笔记")]),e._v(" "),a("h2",{attrs:{id:"帮助文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帮助文档"}},[e._v("#")]),e._v(" 帮助文档")]),e._v(" "),a("h3",{attrs:{id:"中文官方文档-较老"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中文官方文档-较老"}},[e._v("#")]),e._v(" 中文官方文档（较老）")]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("https:")]),e._v("//www.elastic.co/guide/cn/elasticsearch/guide/current/getting-started.html#getting-started\n")])])]),a("h3",{attrs:{id:"英文最新文档-较新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#英文最新文档-较新"}},[e._v("#")]),e._v(" 英文最新文档（较新）")]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("https:")]),e._v("//www.elastic.co/guide/en/elasticsearch/reference/7.10/getting-started.html\n")])])]),a("h2",{attrs:{id:"es核心概念和原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es核心概念和原理"}},[e._v("#")]),e._v(" ES核心概念和原理")]),e._v(" "),a("h3",{attrs:{id:"什么是搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是搜索"}},[e._v("#")]),e._v(" 什么是搜索")]),e._v(" "),a("p",[e._v("百度、垂直搜索（站内搜索）。搜索：通过一个"),a("strong",[e._v("关键词")]),e._v("或一段描述，得到你想要（相关度高）的结果")]),e._v(" "),a("h3",{attrs:{id:"如何实现搜索功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现搜索功能"}},[e._v("#")]),e._v(" 如何实现搜索功能")]),e._v(" "),a("p",[e._v("关系型数据库：性能差、不可靠、结果不准确（相关度低）")]),e._v(" "),a("h3",{attrs:{id:"倒排索引、lucene和全文检索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引、lucene和全文检索"}},[e._v("#")]),e._v(" 倒排索引、Lucene和全文检索")]),e._v(" "),a("ol",[a("li",[e._v("倒排索引的数据结构\n"),a("ol",[a("li",[e._v("包含这个关键词的document list")]),e._v(" "),a("li",[e._v("关键词在每个doc中出现的次数：TF term frequency")]),e._v(" "),a("li",[e._v("关键词在整个索引中出现的次数：IDF inverse doc frequency")]),e._v(" "),a("li",[e._v("关键词在当前doc中出现的次数")]),e._v(" "),a("li",[e._v("每个doc的长度，越长相关度越低")]),e._v(" "),a("li",[e._v("包含这个关键词的所有doc的平均长度")])])]),e._v(" "),a("li",[e._v("Lucene：jar包，帮我们创建倒排索引，提供了复杂的API")]),e._v(" "),a("li",[e._v("如果用Luncene做集群，会有哪些问题\n"),a("ul",[a("li",[e._v("节点一旦宕机，节点数据丢失，后果不堪设想，可用性差")]),e._v(" "),a("li",[e._v("自己维护，麻烦（自己创建管理索引），单台节点的承载请求的能里是有限的，需要人工做负载。")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/%E5%80%92%E6%8E%92%E7%B4%A2%E5%BC%95.png",alt:"倒排索引"}})]),e._v(" "),a("h3",{attrs:{id:"elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[e._v("#")]),e._v(" Elasticsearch")]),e._v(" "),a("ol",[a("li",[e._v("特点\n"),a("ul",[a("li",[e._v("分布式")]),e._v(" "),a("li",[e._v("高性能")]),e._v(" "),a("li",[e._v("高可用")]),e._v(" "),a("li",[e._v("可伸缩")]),e._v(" "),a("li",[e._v("易维护")])])]),e._v(" "),a("li",[e._v("优点\n"),a("ul",[a("li",[e._v("面向开发者友好，屏蔽了Lucene的复杂特性，集群自动发现（cluster discovery）")]),e._v(" "),a("li",[e._v("自动维护数据在多个节点上的建立")]),e._v(" "),a("li",[e._v("会帮我们做搜索请求的负载均衡")]),e._v(" "),a("li",[e._v("自动维护冗余副本，保证了部分节点宕机的情况下仍然不会有任何数据丢失")]),e._v(" "),a("li",[e._v("ES基于Lucene提供了很多高级功能：复合查询、聚合分析、基于地理位置等")]),e._v(" "),a("li",[e._v("对于大公司，可以构建几百台服务器的大型分布式集群，处理PB级别数据；对于小公司，开箱即用，门槛低上手简单")]),e._v(" "),a("li",[e._v("相比传统数据库，提供了全文检索，同义词处理（美丽的 cls > 漂亮的 cls），相关度排名。聚合分析以及海量数据的近实时（NTR）处理，这些传统数据库完全做不到")])])]),e._v(" "),a("li",[e._v("应用领域\n"),a("ul",[a("li",[e._v("百度（全文检索，高亮、搜索推荐）")]),e._v(" "),a("li",[e._v("各大网站的用户行为日志（用户点击、浏览、收藏、评论）")]),e._v(" "),a("li",[e._v("BI（business Intelligence商业智能），数据分析，数据挖掘统计")]),e._v(" "),a("li",[e._v("Github：代码托管平台，几千亿行代码")]),e._v(" "),a("li",[e._v("ELK：Elasticsearch（数据存储）、Logstash（日志采集）、Kibana（可视化）")])])])]),e._v(" "),a("h3",{attrs:{id:"es-核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-核心概念"}},[e._v("#")]),e._v(" ES 核心概念")]),e._v(" "),a("ol",[a("li",[e._v("cluster（集群）：每个集群至少包含两个节点")]),e._v(" "),a("li",[e._v("node：集群中的每个节点，一个节点不代表一台服务器")]),e._v(" "),a("li",[e._v("field：一个数据字段，与index和type一起，可以定位一个doc")]),e._v(" "),a("li",[e._v("document：es最小的数据单元，通常是以json的形式存储的")]),e._v(" "),a("li",[e._v("type：逻辑上的数据分类，es7.x中删除了type的概念")]),e._v(" "),a("li",[e._v("index：一类相同或者类似的doc，比如一个员工索引，商品索引")]),e._v(" "),a("li",[e._v("shard分片：P分片，R副本\n"),a("ul",[a("li",[e._v("一个index包含多个shard，默认5个分片，默认每个分片分配一个副本，分片的数量在创建索引的时候设置，如果想修改，需要重建索引")]),e._v(" "),a("li",[e._v("每个shard都是一个lucene实例，有完整的创建索引的处理请求能力")]),e._v(" "),a("li",[e._v("es会自动在nodes上为我们做shard均衡")]),e._v(" "),a("li",[e._v("一个doc是不可能同时存在与多个分片中的，但是可以存在于多个副本中")]),e._v(" "),a("li",[e._v("分片和对应的副本不能同时存在于同一个节点，所以最低的可用配置是两个节点，互为主备")])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);
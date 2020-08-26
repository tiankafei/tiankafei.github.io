(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{450:function(e,r,_){"use strict";_.r(r);var a=_(42),v=Object(a.a)({},(function(){var e=this,r=e.$createElement,_=e._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"zookeeper学习笔记"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper学习笔记"}},[e._v("#")]),e._v(" zookeeper学习笔记")]),e._v(" "),_("h2",{attrs:{id:"_1-zookeeper概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-zookeeper概念"}},[e._v("#")]),e._v(" 1. zookeeper概念")]),e._v(" "),_("p",[e._v("zookeeper是用于分布式应用程序的分布式，开放源代码协调服务。它公开了一组简单的原语，分布式应用程序可以基于这些原语来实现用于同步，配置维护以及组和命名的更高级别的服务。它的设计易于编程，并使用了按照文件系统熟悉的目录树结构命名的数据模型。众所周知，协调服务很难做到。它们特别容易出现诸如比赛条件和死锁之类的错误。zookeeper背后的动机是减轻分布式应用程序从头开始实施协调服务的责任。")]),e._v(" "),_("h2",{attrs:{id:"_2-设计目标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-设计目标"}},[e._v("#")]),e._v(" 2. 设计目标")]),e._v(" "),_("p",[e._v("zookeeper很简单。zookeeper允许分布式进程通过共享的分层名称空间相互协调，该命名空间的组织方式类似于标准文件系统。名称空间由数据寄存器（在zookeeper看来，称为znode）组成，它们类似于文件和目录。与设计用于存储的典型文件系统不同，zookeeper数据保留在内存中，这意味着zookeeper可以实现高吞吐量和低延迟数。")]),e._v(" "),_("p",[_("img",{attrs:{src:"/images/zookeeper-service.jpg",alt:"zookeeper-service"}})]),e._v(" "),_("h2",{attrs:{id:"_3-数据模型和分层名称空间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据模型和分层名称空间"}},[e._v("#")]),e._v(" 3. 数据模型和分层名称空间")]),e._v(" "),_("p",[e._v("zookeeper提供的名称空间与标准文件系统的名称空间非常相似。名称是由斜杠（/）分隔的一系列路径元素。zookeeper命名空间中的每个节点都由路径标识。")]),e._v(" "),_("p",[_("img",{attrs:{src:"/images/zookeeper-namespace.jpg",alt:"zookeeper-namespace"}})]),e._v(" "),_("h2",{attrs:{id:"_4-特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-特点"}},[e._v("#")]),e._v(" 4. 特点")]),e._v(" "),_("p",[e._v("zookeeper非常快速且非常简单。但是，由于其目标是作为构建更复杂的服务（例如同步）的基础，因此它提供了一组保证。这些是：")]),e._v(" "),_("ul",[_("li",[e._v("顺序一致性-来自客户端的更新将按照发送的顺序应用。")]),e._v(" "),_("li",[e._v("原子性-更新成功或失败。没有部分结果。")]),e._v(" "),_("li",[e._v("单个系统映像-无论客户端连接到哪个服务器，客户端都将看到相同的服务视图。也就是说，即使客户端故障转移到具有相同会话的其他服务器，客户端也永远不会看到系统的较旧视图。")]),e._v(" "),_("li",[e._v("可靠性-一旦应用了更新，该更新将一直持续到客户端覆盖更新为止。")]),e._v(" "),_("li",[e._v("及时性-确保系统的客户视图在特定时间范围内是最新的。")])]),e._v(" "),_("h2",{attrs:{id:"_5-简单的api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-简单的api"}},[e._v("#")]),e._v(" 5. 简单的API")]),e._v(" "),_("p",[e._v("zookeeper的设计目标之一是提供一个非常简单的编程界面。因此，它仅支持以下操作：")]),e._v(" "),_("ul",[_("li",[_("em",[e._v("create")]),e._v("：在树中的某个位置创建一个节点")]),e._v(" "),_("li",[_("em",[e._v("delete")]),e._v("：删除节点")]),e._v(" "),_("li",[_("em",[e._v("存在")]),e._v("：测试某个位置是否存在节点")]),e._v(" "),_("li",[_("em",[e._v("获取数据")]),e._v("：从节点读取数据")]),e._v(" "),_("li",[_("em",[e._v("设置数据")]),e._v("：将数据写入节点")]),e._v(" "),_("li",[_("em",[e._v("获取子")]),e._v("节点：获取节点子节点的列表")]),e._v(" "),_("li",[_("em",[e._v("sync")]),e._v("：等待数据传播")])]),e._v(" "),_("h2",{attrs:{id:"_6-角色"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-角色"}},[e._v("#")]),e._v(" 6. 角色")]),e._v(" "),_("h3",{attrs:{id:"_6-1-leader"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-leader"}},[e._v("#")]),e._v(" 6.1 Leader")]),e._v(" "),_("ol",[_("li",[e._v("一个 Zookeeper 集群同一时间只会有一个实际工作的 Leader，它会发起并维护与各 Follwer\n及 Observer 间的心跳")]),e._v(" "),_("li",[e._v("所有的写操作必须要通过 Leader 完成再由 Leader 将写操作广播给其它服务器。 只要有超过\n半数节点（不包括 observeer 节点） 写入成功，该写请求就会被提交（类 2PC 协议）")])]),e._v(" "),_("h3",{attrs:{id:"_6-2-follower"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-follower"}},[e._v("#")]),e._v(" 6.2 Follower")]),e._v(" "),_("ol",[_("li",[e._v("一个 Zookeeper 集群可能同时存在多个 Follower，它会响应 Leader 的心跳")]),e._v(" "),_("li",[e._v("Follower 可直接处理并返回客户端的读请求，同时会将写请求转发给 Leader 处理")]),e._v(" "),_("li",[e._v("并且负责在 Leader 处理写请求时对请求进行投票")])]),e._v(" "),_("h3",{attrs:{id:"_6-3-observer"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-observer"}},[e._v("#")]),e._v(" 6.3 Observer")]),e._v(" "),_("p",[e._v("角色与 Follower 类似，但是无投票权。 Zookeeper 需保证高可用和强一致性，为了支持更多的客\n户端，需要增加更多 Server； Server 增多，投票阶段延迟增大，影响性能； 引入 Observer，\nObserver 不参与投票； Observers 接受客户端的连接，并将写请求转发给 leader 节点； 加入更\n多 Observer 节点，提高伸缩性，同时不影响吞吐率。")]),e._v(" "),_("h2",{attrs:{id:"_7-选举策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-选举策略"}},[e._v("#")]),e._v(" 7. 选举策略")]),e._v(" "),_("ul",[_("li",[e._v("首先查看数据完整性（使用事务ID）")]),e._v(" "),_("li",[e._v("在达到数据完整性的前提下，查看myid的配置，谁大谁就是leader")])])])}),[],!1,null,null,null);r.default=v.exports}}]);
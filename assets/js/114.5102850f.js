(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{467:function(a,t,s){"use strict";s.r(t);var v=s(42),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"分布式锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[a._v("#")]),a._v(" 分布式锁")]),a._v(" "),s("h2",{attrs:{id:"逻辑推理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑推理"}},[a._v("#")]),a._v(" 逻辑推理")]),a._v(" "),s("h3",{attrs:{id:"什么是锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是锁"}},[a._v("#")]),a._v(" 什么是锁")]),a._v(" "),s("p",[a._v("锁就是用来保护有限的资源；")]),a._v(" "),s("h3",{attrs:{id:"解决了什么问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决了什么问题"}},[a._v("#")]),a._v(" 解决了什么问题")]),a._v(" "),s("p",[a._v("人多资源少的问题")]),a._v(" "),s("h3",{attrs:{id:"单机版怎么玩的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单机版怎么玩的"}},[a._v("#")]),a._v(" 单机版怎么玩的")]),a._v(" "),s("p",[a._v("同步+信号量")]),a._v(" "),s("ul",[s("li",[a._v("Synchronized wait notify")]),a._v(" "),s("li",[a._v("ReentrantLock lock unlock")]),a._v(" "),s("li",[a._v("AbstractQueuedSynchronizer（AQS，FIFO先进先出的队列 + volatile state），公平锁")]),a._v(" "),s("li",[a._v("AtomicInteger 自选锁CAS，非公平锁")])]),a._v(" "),s("h3",{attrs:{id:"分布式怎么玩的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式怎么玩的"}},[a._v("#")]),a._v(" 分布式怎么玩的")]),a._v(" "),s("ul",[s("li",[a._v("单机版的锁 + TCP/IP")])]),a._v(" "),s("h2",{attrs:{id:"什么是分布式锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是分布式锁"}},[a._v("#")]),a._v(" 什么是分布式锁")]),a._v(" "),s("p",[a._v("当多个进程在同一个系统中，用分布式锁控制多个进程对资源的访问")]),a._v(" "),s("h2",{attrs:{id:"分布式锁的应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁的应用场景"}},[a._v("#")]),a._v(" 分布式锁的应用场景")]),a._v(" "),s("ul",[s("li",[a._v("传统的单体应用单机部署情况下，可以使用Java并发处理相关的API进行互斥控制")]),a._v(" "),s("li",[a._v("分布式系统由于多线程，多进程分布在不同的机器上，使单机部署情况下的并发控制策略失效，为了解决跨JVM互斥机制来控制共享资源的访问，这就是分布式锁的来源；分布式锁应用场景大都是高并发，大流量的场景。")])]),a._v(" "),s("h2",{attrs:{id:"分布式锁的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁的特点"}},[a._v("#")]),a._v(" 分布式锁的特点")]),a._v(" "),s("ol",[s("li",[a._v("互斥性：任意时刻，只能有一个客户端获取锁，不能同时有两个客户端获取到锁")]),a._v(" "),s("li",[a._v("安全性：锁只能被持有该锁的客户端删除，不能由其它客户端删除")]),a._v(" "),s("li",[a._v("防死锁：获取锁的客户端因为某些原因（如down机等），需要设置一个策略把锁释放掉，否则其他客户端再也无法获取到该锁")]),a._v(" "),s("li",[a._v("容错性：当部分服务节点down机时，客户端仍然能够获取锁和释放锁")])]),a._v(" "),s("h2",{attrs:{id:"分布锁的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布锁的实现"}},[a._v("#")]),a._v(" 分布锁的实现")]),a._v(" "),s("h3",{attrs:{id:"基于数据库的锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于数据库的锁"}},[a._v("#")]),a._v(" 基于数据库的锁")]),a._v(" "),s("ol",[s("li",[a._v("使用业务字段当作主键进行数据库插入或者更新状态")]),a._v(" "),s("li",[a._v("插入或者更新状态成功的，就意味着抢到了锁，执行后续操作")]),a._v(" "),s("li",[a._v("如果抢锁成功以后，宕机了，需要使用触发器在锁过期之后，立即删除或者还原状态")]),a._v(" "),s("li",[a._v("当任务执行时间超过锁的有效期时，使用触发器对锁进行延期")]),a._v(" "),s("li",[a._v("当后续操作执行完成之后，进行锁的释放，释放要确保释放的时自己的锁，而不是别人的锁")]),a._v(" "),s("li",[a._v("如果没有抢到锁，按照业务场景的要求，是继续等待还是直接返回")])]),a._v(" "),s("h3",{attrs:{id:"基于zookeeper的分布式锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于zookeeper的分布式锁"}},[a._v("#")]),a._v(" 基于Zookeeper的分布式锁")]),a._v(" "),s("h4",{attrs:{id:"加锁过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加锁过程"}},[a._v("#")]),a._v(" 加锁过程")]),a._v(" "),s("ol",[s("li",[a._v("启动客户端，确认连接到了服务器")]),a._v(" "),s("li",[a._v("多个客户端并发的在特定路径下创建临时性顺序节点")]),a._v(" "),s("li",[a._v("客户端判断自己创建的顺序节点是否是最小的，如果是最小的，则获取锁成功")]),a._v(" "),s("li",[a._v("第三步若判定失败，则采用zookeeper的watch机制监听自己的前一个顺序节点，等待前一个节点的删除（释放锁）事件，再开始第三步的判定")])]),a._v(" "),s("p",[s("img",{attrs:{src:"%5Cimages%5Czookeeper%E5%8A%A0%E9%94%81%E6%B5%81%E7%A8%8B.png",alt:"zookeeper加锁流程"}})]),a._v(" "),s("h4",{attrs:{id:"采用临时节点的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#采用临时节点的原因"}},[a._v("#")]),a._v(" 采用临时节点的原因")]),a._v(" "),s("p",[a._v("zookeeper作为高性能分布式协调框架，可与把其看做一个文件系统，其中有节点的概念，并且分为4种")]),a._v(" "),s("ol",[s("li",[a._v("持久性节点")]),a._v(" "),s("li",[a._v("持久性顺序节点")]),a._v(" "),s("li",[a._v("临时性节点")]),a._v(" "),s("li",[a._v("临时性顺序节点")])]),a._v(" "),s("p",[a._v("分布式锁的实现主要思路就是：监控其他客户端的状态，来判断自己是否可以获得锁。采用临时性顺序节点的原因：")]),a._v(" "),s("ol",[s("li",[a._v("zookeeper 服务器维护了客户端的会话有效性，当会话失效的时候，其会话所创建的临时性节点都会被删除，通过这一特点，可以通过watch临时节点来监控其他客户端的情况，方便自己做出相应的动作")]),a._v(" "),s("li",[a._v("因为 zookeeper 对写操作是顺序性的，所以并发创建的顺序节点会有一个唯一确定的序号，当前锁是公平锁的一种实现，所以依靠这种顺序性可以很好的解释一节点序列小的获取到锁。并且可以采用watch自己的前一个节点来避免“惊群”现象（这样watch事件的传播时线性的）")])]),a._v(" "),s("h3",{attrs:{id:"基于redis的分布式锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于redis的分布式锁"}},[a._v("#")]),a._v(" 基于Redis的分布式锁")]),a._v(" "),s("h4",{attrs:{id:"redis单节点加锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis单节点加锁"}},[a._v("#")]),a._v(" Redis单节点加锁")]),a._v(" "),s("p",[a._v("基于Redis命令：SET my_key my_value NX PX milliseconds（需要手动实现锁的延期）；其中，NX表示只有当键key不存在的时候才会设置key的值，PX表示设置键key的过期时间，单位是毫秒。")]),a._v(" "),s("ul",[s("li",[a._v("redis设置过期时间，当抢到锁之后，线程挂掉了，也不会造成死锁")]),a._v(" "),s("li",[a._v("当任务执行时间超过锁的有效期时，需要手动实现锁的延期")]),a._v(" "),s("li",[a._v("当任务执行完成之后，释放锁时只能释放自己上的锁，不能释放别人的锁")])]),a._v(" "),s("h4",{attrs:{id:"redisson加锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redisson加锁"}},[a._v("#")]),a._v(" Redisson加锁")]),a._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[a._v("https:")]),a._v("//redis.io/topics/distlock\n")])])]),s("blockquote",[s("ol",[s("li",[a._v("加锁机制：根据hash节点选择一个客户端执行Lua脚本")]),a._v(" "),s("li",[a._v("所互斥机制：再来一个客户端执行同样的Lua脚本会提示已经存在锁，然后进入循环一直尝试加锁")]),a._v(" "),s("li",[a._v("可重入机制")]),a._v(" "),s("li",[a._v("watch dog 自动延期机制")]),a._v(" "),s("li",[a._v("释放锁机制")])])]),a._v(" "),s("p",[a._v("redisson加锁的奇数个实例（最好在不同的物理机上面）之间毫无任何关系，不需要进行数据同步，只要过半成功就说明加锁成功了。redisson会起一个线程，当执行时间到达锁过期时间的1/3时，如果依然没有执行完成，则进行锁的有效期延长；如果当前线程获取到锁之后，就宕机了，那么当过了锁的有效期之后，锁会被自动释放。")]),a._v(" "),s("p",[s("img",{attrs:{src:"%5Cimages%5C%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81-redisson.png",alt:"分布式锁-redisson"}})]),a._v(" "),s("p",[a._v("出现上述问题的解决方案：延迟启动down了的节点，延迟的时间要求大于锁的有效期或者预估任务执行需要的时间，如果一个任务执行的时间过长，则说明这个业务不太适合使用分布式锁")]),a._v(" "),s("h2",{attrs:{id:"分布式锁升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁升级"}},[a._v("#")]),a._v(" 分布式锁升级")]),a._v(" "),s("p",[s("img",{attrs:{src:"%5Cimages%5C%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81%E5%8D%87%E7%BA%A7-%E9%99%8D%E7%BA%A7.png",alt:"分布式锁升级-降级"}})]),a._v(" "),s("h1",{attrs:{id:"分布式id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式id"}},[a._v("#")]),a._v(" 分布式ID")])])}),[],!1,null,null,null);t.default=_.exports}}]);
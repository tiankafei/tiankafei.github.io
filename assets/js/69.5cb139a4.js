(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{341:function(r,s,e){"use strict";e.r(s);var a=e(14),n=Object(a.a)({},(function(){var r=this,s=r._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[s("h1",{attrs:{id:"sharding-jdbc基于springboot的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sharding-jdbc基于springboot的配置"}},[r._v("#")]),r._v(" sharding-jdbc基于springboot的配置")]),r._v(" "),s("h2",{attrs:{id:"数据分片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据分片"}},[r._v("#")]),r._v(" 数据分片")]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("spring.shardingsphere.datasource.names=ds0,ds1\n\nspring.shardingsphere.datasource.ds0.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.ds0.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.ds0.url=jdbc:mysql://localhost:3306/ds0\nspring.shardingsphere.datasource.ds0.username=root\nspring.shardingsphere.datasource.ds0.password=\n\nspring.shardingsphere.datasource.ds1.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.ds1.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.ds1.url=jdbc:mysql://localhost:3306/ds1\nspring.shardingsphere.datasource.ds1.username=root\nspring.shardingsphere.datasource.ds1.password=\n\nspring.shardingsphere.sharding.tables.t_order.actual-data-nodes=ds$->{0..1}.t_order$->{0..1}\nspring.shardingsphere.sharding.tables.t_order.table-strategy.inline.sharding-column=order_id\nspring.shardingsphere.sharding.tables.t_order.table-strategy.inline.algorithm-expression=t_order$->{order_id % 2}\nspring.shardingsphere.sharding.tables.t_order.key-generator.column=order_id\nspring.shardingsphere.sharding.tables.t_order.key-generator.type=SNOWFLAKE\nspring.shardingsphere.sharding.tables.t_order_item.actual-data-nodes=ds$->{0..1}.t_order_item$->{0..1}\nspring.shardingsphere.sharding.tables.t_order_item.table-strategy.inline.sharding-column=order_id\nspring.shardingsphere.sharding.tables.t_order_item.table-strategy.inline.algorithm-expression=t_order_item$->{order_id % 2}\nspring.shardingsphere.sharding.tables.t_order_item.key-generator.column=order_item_id\nspring.shardingsphere.sharding.tables.t_order_item.key-generator.type=SNOWFLAKE\nspring.shardingsphere.sharding.binding-tables=t_order,t_order_item\nspring.shardingsphere.sharding.broadcast-tables=t_config\n\nspring.shardingsphere.sharding.default-database-strategy.inline.sharding-column=user_id\nspring.shardingsphere.sharding.default-database-strategy.inline.algorithm-expression=ds$->{user_id % 2}\n")])])]),s("h2",{attrs:{id:"读写分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[r._v("#")]),r._v(" 读写分离")]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("spring.shardingsphere.datasource.names=master,slave0,slave1\n\nspring.shardingsphere.datasource.master.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.master.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.master.url=jdbc:mysql://localhost:3306/master\nspring.shardingsphere.datasource.master.username=root\nspring.shardingsphere.datasource.master.password=\n\nspring.shardingsphere.datasource.slave0.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.slave0.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.slave0.url=jdbc:mysql://localhost:3306/slave0\nspring.shardingsphere.datasource.slave0.username=root\nspring.shardingsphere.datasource.slave0.password=\n\nspring.shardingsphere.datasource.slave1.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.slave1.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.slave1.url=jdbc:mysql://localhost:3306/slave1\nspring.shardingsphere.datasource.slave1.username=root\nspring.shardingsphere.datasource.slave1.password=\n\nspring.shardingsphere.masterslave.load-balance-algorithm-type=round_robin\nspring.shardingsphere.masterslave.name=ms\nspring.shardingsphere.masterslave.master-data-source-name=master\nspring.shardingsphere.masterslave.slave-data-source-names=slave0,slave1\n\nspring.shardingsphere.props.sql.show=true\n")])])]),s("h2",{attrs:{id:"数据脱敏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据脱敏"}},[r._v("#")]),r._v(" 数据脱敏")]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("spring.shardingsphere.datasource.name=ds\n\nspring.shardingsphere.datasource.ds.type=org.apache.commons.dbcp2.BasicDataSource\nspring.shardingsphere.datasource.ds.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.ds.url=jdbc:mysql://127.0.0.1:3306/encrypt?serverTimezone=UTC&useSSL=false\nspring.shardingsphere.datasource.ds.username=root\nspring.shardingsphere.datasource.ds.password=\nspring.shardingsphere.datasource.ds.max-total=100\n\nspring.shardingsphere.encrypt.encryptors.encryptor_aes.type=aes\nspring.shardingsphere.encrypt.encryptors.encryptor_aes.props.aes.key.value=123456\nspring.shardingsphere.encrypt.tables.t_order.columns.user_id.plainColumn=user_decrypt\nspring.shardingsphere.encrypt.tables.t_order.columns.user_id.cipherColumn=user_encrypt\nspring.shardingsphere.encrypt.tables.t_order.columns.user_id.assistedQueryColumn=user_assisted\nspring.shardingsphere.encrypt.tables.t_order.columns.user_id.encryptor=encryptor_aes\n\nspring.shardingsphere.props.sql.show=true\nspring.shardingsphere.props.query.with.cipher.column=true\n")])])]),s("h2",{attrs:{id:"数据分片-读写分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据分片-读写分离"}},[r._v("#")]),r._v(" 数据分片 + 读写分离")]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("spring.shardingsphere.datasource.names=master0,master1,master0slave0,master0slave1,master1slave0,master1slave1\n\nspring.shardingsphere.datasource.master0.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.master0.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.master0.url=jdbc:mysql://localhost:3306/master0\nspring.shardingsphere.datasource.master0.username=root\nspring.shardingsphere.datasource.master0.password=\n\nspring.shardingsphere.datasource.master0slave0.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.master0slave0.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.master0slave0.url=jdbc:mysql://localhost:3306/master0slave0\nspring.shardingsphere.datasource.master0slave0.username=root\nspring.shardingsphere.datasource.master0slave0.password=\nspring.shardingsphere.datasource.master0slave1.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.master0slave1.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.master0slave1.url=jdbc:mysql://localhost:3306/master0slave1\nspring.shardingsphere.datasource.master0slave1.username=root\nspring.shardingsphere.datasource.master0slave1.password=\n\nspring.shardingsphere.datasource.master1.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.master1.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.master1.url=jdbc:mysql://localhost:3306/master1\nspring.shardingsphere.datasource.master1.username=root\nspring.shardingsphere.datasource.master1.password=\n\nspring.shardingsphere.datasource.master1slave0.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.master1slave0.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.master1slave0.url=jdbc:mysql://localhost:3306/master1slave0\nspring.shardingsphere.datasource.master1slave0.username=root\nspring.shardingsphere.datasource.master1slave0.password=\nspring.shardingsphere.datasource.master1slave1.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.master1slave1.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.master1slave1.url=jdbc:mysql://localhost:3306/master1slave1\nspring.shardingsphere.datasource.master1slave1.username=root\nspring.shardingsphere.datasource.master1slave1.password=\n\nspring.shardingsphere.sharding.tables.t_order.actual-data-nodes=ds$->{0..1}.t_order$->{0..1}\nspring.shardingsphere.sharding.tables.t_order.table-strategy.inline.sharding-column=order_id\nspring.shardingsphere.sharding.tables.t_order.table-strategy.inline.algorithm-expression=t_order$->{order_id % 2}\nspring.shardingsphere.sharding.tables.t_order.key-generator.column=order_id\nspring.shardingsphere.sharding.tables.t_order.key-generator.type=SNOWFLAKE\nspring.shardingsphere.sharding.tables.t_order_item.actual-data-nodes=ds$->{0..1}.t_order_item$->{0..1}\nspring.shardingsphere.sharding.tables.t_order_item.table-strategy.inline.sharding-column=order_id\nspring.shardingsphere.sharding.tables.t_order_item.table-strategy.inline.algorithm-expression=t_order_item$->{order_id % 2}\nspring.shardingsphere.sharding.tables.t_order_item.key-generator.column=order_item_id\nspring.shardingsphere.sharding.tables.t_order_item.key-generator.type=SNOWFLAKE\nspring.shardingsphere.sharding.binding-tables=t_order,t_order_item\nspring.shardingsphere.sharding.broadcast-tables=t_config\n\nspring.shardingsphere.sharding.default-database-strategy.inline.sharding-column=user_id\nspring.shardingsphere.sharding.default-database-strategy.inline.algorithm-expression=master$->{user_id % 2}\n\nspring.shardingsphere.sharding.master-slave-rules.ds0.master-data-source-name=master0\nspring.shardingsphere.sharding.master-slave-rules.ds0.slave-data-source-names=master0slave0, master0slave1\nspring.shardingsphere.sharding.master-slave-rules.ds1.master-data-source-name=master1\nspring.shardingsphere.sharding.master-slave-rules.ds1.slave-data-source-names=master1slave0, master1slave1\n")])])]),s("h2",{attrs:{id:"数据分片-数据脱敏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据分片-数据脱敏"}},[r._v("#")]),r._v(" 数据分片 + 数据脱敏")]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("spring.shardingsphere.datasource.names=ds_0,ds_1\n\nspring.shardingsphere.datasource.ds_0.type=com.zaxxer.hikari.HikariDataSource\nspring.shardingsphere.datasource.ds_0.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.ds_0.jdbc-url=jdbc:mysql://localhost:3306/demo_ds_0\nspring.shardingsphere.datasource.ds_0.username=root\nspring.shardingsphere.datasource.ds_0.password=\n\nspring.shardingsphere.datasource.ds_1.type=com.zaxxer.hikari.HikariDataSource\nspring.shardingsphere.datasource.ds_1.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.ds_1.jdbc-url=jdbc:mysql://localhost:3306/demo_ds_1\nspring.shardingsphere.datasource.ds_1.username=root\nspring.shardingsphere.datasource.ds_1.password=\n\nspring.shardingsphere.sharding.default-database-strategy.inline.sharding-column=user_id\nspring.shardingsphere.sharding.default-database-strategy.inline.algorithm-expression=ds_$->{user_id % 2}\n\nspring.shardingsphere.sharding.tables.t_order.actual-data-nodes=ds_$->{0..1}.t_order_$->{0..1}\nspring.shardingsphere.sharding.tables.t_order.table-strategy.inline.sharding-column=order_id\nspring.shardingsphere.sharding.tables.t_order.table-strategy.inline.algorithm-expression=t_order_$->{order_id % 2}\nspring.shardingsphere.sharding.tables.t_order.key-generator.column=order_id\nspring.shardingsphere.sharding.tables.t_order.key-generator.type=SNOWFLAKE\nspring.shardingsphere.sharding.tables.t_order_item.actual-data-nodes=ds_$->{0..1}.t_order_item_$->{0..1}\nspring.shardingsphere.sharding.tables.t_order_item.table-strategy.inline.sharding-column=order_id\nspring.shardingsphere.sharding.tables.t_order_item.table-strategy.inline.algorithm-expression=t_order_item_$->{order_id % 2}\nspring.shardingsphere.sharding.tables.t_order_item.key-generator.column=order_item_id\nspring.shardingsphere.sharding.tables.t_order_item.key-generator.type=SNOWFLAKE\nspring.shardingsphere.sharding.encrypt-rule.encryptors.encryptor_aes.type=aes\nspring.shardingsphere.sharding.encrypt-rule.encryptors.encryptor_aes.props.aes.key.value=123456\nspring.shardingsphere.sharding.encrypt-rule.tables.t_order.columns.user_id.plainColumn=user_decrypt\nspring.shardingsphere.sharding.encrypt-rule.tables.t_order.columns.user_id.cipherColumn=user_encrypt\nspring.shardingsphere.sharding.encrypt-rule.tables.t_order.columns.user_id.assistedQueryColumn=user_assisted\nspring.shardingsphere.sharding.encrypt-rule.tables.t_order.columns.user_id.encryptor=encryptor_aes\n")])])]),s("h2",{attrs:{id:"治理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#治理"}},[r._v("#")]),r._v(" 治理")]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("spring.shardingsphere.datasource.names=ds,ds0,ds1\nspring.shardingsphere.datasource.ds.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.ds.driver-class-name=org.h2.Driver\nspring.shardingsphere.datasource.ds.url=jdbc:mysql://localhost:3306/ds\nspring.shardingsphere.datasource.ds.username=root\nspring.shardingsphere.datasource.ds.password=\n\nspring.shardingsphere.datasource.ds0.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.ds0.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.ds0.url=jdbc:mysql://localhost:3306/ds0\nspring.shardingsphere.datasource.ds0.username=root\nspring.shardingsphere.datasource.ds0.password=\n\nspring.shardingsphere.datasource.ds1.type=org.apache.commons.dbcp.BasicDataSource\nspring.shardingsphere.datasource.ds1.driver-class-name=com.mysql.jdbc.Driver\nspring.shardingsphere.datasource.ds1.url=jdbc:mysql://localhost:3306/ds1\nspring.shardingsphere.datasource.ds1.username=root\nspring.shardingsphere.datasource.ds1.password=\n\nspring.shardingsphere.sharding.default-data-source-name=ds\nspring.shardingsphere.sharding.default-database-strategy.inline.sharding-column=user_id\nspring.shardingsphere.sharding.default-database-strategy.inline.algorithm-expression=ds$->{user_id % 2}\nspring.shardingsphere.sharding.tables.t_order.actual-data-nodes=ds$->{0..1}.t_order$->{0..1}\nspring.shardingsphere.sharding.tables.t_order.table-strategy.inline.sharding-column=order_id\nspring.shardingsphere.sharding.tables.t_order.table-strategy.inline.algorithm-expression=t_order$->{order_id % 2}\nspring.shardingsphere.sharding.tables.t_order.key-generator.column=order_id\nspring.shardingsphere.sharding.tables.t_order_item.actual-data-nodes=ds$->{0..1}.t_order_item$->{0..1}\nspring.shardingsphere.sharding.tables.t_order_item.table-strategy.inline.sharding-column=order_id\nspring.shardingsphere.sharding.tables.t_order_item.table-strategy.inline.algorithm-expression=t_order_item$->{order_id % 2}\nspring.shardingsphere.sharding.tables.t_order_item.key-generator.column=order_item_id\nspring.shardingsphere.sharding.binding-tables=t_order,t_order_item\nspring.shardingsphere.sharding.broadcast-tables=t_config\n\nspring.shardingsphere.orchestration.name=spring_boot_ds_sharding\nspring.shardingsphere.orchestration.overwrite=true\nspring.shardingsphere.orchestration.registry.type=zookeeper\nspring.shardingsphere.orchestration.registry.namespace=orchestration-spring-boot-sharding-test\nspring.shardingsphere.orchestration.registry.server-lists=localhost:2181\n")])])]),s("h2",{attrs:{id:"jndi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jndi"}},[r._v("#")]),r._v(" JNDI")]),r._v(" "),s("blockquote",[s("p",[r._v("以上配置示例中，所有数据源配置均可使用JNDI代替，如对于"),s("code",[r._v("数据分片")]),r._v(":")])]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("spring.shardingsphere.datasource.names=ds0,ds1\n\nspring.shardingsphere.datasource.ds0.jndi-name=java:comp/env/jdbc/ds0\nspring.shardingsphere.datasource.ds1.jndi-name=jdbc/ds1\n\nspring.shardingsphere.sharding.tables.t_order.actual-data-nodes=ds$->{0..1}.t_order$->{0..1}\nspring.shardingsphere.sharding.tables.t_order.table-strategy.inline.sharding-column=order_id\nspring.shardingsphere.sharding.tables.t_order.table-strategy.inline.algorithm-expression=t_order$->{order_id % 2}\nspring.shardingsphere.sharding.tables.t_order.key-generator.column=order_id\nspring.shardingsphere.sharding.tables.t_order.key-generator.type=SNOWFLAKE\nspring.shardingsphere.sharding.tables.t_order_item.actual-data-nodes=ds$->{0..1}.t_order_item$->{0..1}\nspring.shardingsphere.sharding.tables.t_order_item.table-strategy.inline.sharding-column=order_id\nspring.shardingsphere.sharding.tables.t_order_item.table-strategy.inline.algorithm-expression=t_order_item$->{order_id % 2}\nspring.shardingsphere.sharding.tables.t_order_item.key-generator.column=order_item_id\nspring.shardingsphere.sharding.tables.t_order_item.key-generator.type=SNOWFLAKE\nspring.shardingsphere.sharding.binding-tables=t_order,t_order_item\nspring.shardingsphere.sharding.broadcast-tables=t_config\n\nspring.shardingsphere.sharding.default-database-strategy.inline.sharding-column=user_id\nspring.shardingsphere.sharding.default-database-strategy.inline.algorithm-expression=ds$->{user_id % 2}\n")])])]),s("h1",{attrs:{id:"配置项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项说明"}},[r._v("#")]),r._v(" 配置项说明")]),r._v(" "),s("h2",{attrs:{id:"数据分片-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据分片-2"}},[r._v("#")]),r._v(" 数据分片")]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("spring.shardingsphere.datasource.names= #数据源名称，多数据源以逗号分隔\n\nspring.shardingsphere.datasource.<data-source-name>.type= #数据库连接池类名称\nspring.shardingsphere.datasource.<data-source-name>.driver-class-name= #数据库驱动类名\nspring.shardingsphere.datasource.<data-source-name>.url= #数据库url连接\nspring.shardingsphere.datasource.<data-source-name>.username= #数据库用户名\nspring.shardingsphere.datasource.<data-source-name>.password= #数据库密码\nspring.shardingsphere.datasource.<data-source-name>.xxx= #数据库连接池的其它属性\n\nspring.shardingsphere.sharding.tables.<logic-table-name>.actual-data-nodes= #由数据源名 + 表名组成，以小数点分隔。多个表以逗号分隔，支持inline表达式。缺省表示使用已知数据源与逻辑表名称生成数据节点。用于广播表（即每个库中都需要一个同样的表用于关联查询，多为字典表）或只分库不分表且所有库的表结构完全一致的情况\n\n#分库策略，缺省表示使用默认分库策略，以下的分片策略只能选其一\n\n#用于单分片键的标准分片场景\nspring.shardingsphere.sharding.tables.<logic-table-name>.database-strategy.standard.sharding-column= #分片列名称\nspring.shardingsphere.sharding.tables.<logic-table-name>.database-strategy.standard.precise-algorithm-class-name= #精确分片算法类名称，用于=和IN。该类需实现PreciseShardingAlgorithm接口并提供无参数的构造器\nspring.shardingsphere.sharding.tables.<logic-table-name>.database-strategy.standard.range-algorithm-class-name= #范围分片算法类名称，用于BETWEEN，可选。该类需实现RangeShardingAlgorithm接口并提供无参数的构造器\n\n#用于多分片键的复合分片场景\nspring.shardingsphere.sharding.tables.<logic-table-name>.database-strategy.complex.sharding-columns= #分片列名称，多个列以逗号分隔\nspring.shardingsphere.sharding.tables.<logic-table-name>.database-strategy.complex.algorithm-class-name= #复合分片算法类名称。该类需实现ComplexKeysShardingAlgorithm接口并提供无参数的构造器\n\n#行表达式分片策略\nspring.shardingsphere.sharding.tables.<logic-table-name>.database-strategy.inline.sharding-column= #分片列名称\nspring.shardingsphere.sharding.tables.<logic-table-name>.database-strategy.inline.algorithm-expression= #分片算法行表达式，需符合groovy语法\n\n#Hint分片策略\nspring.shardingsphere.sharding.tables.<logic-table-name>.database-strategy.hint.algorithm-class-name= #Hint分片算法类名称。该类需实现HintShardingAlgorithm接口并提供无参数的构造器\n\n#分表策略，同分库策略\nspring.shardingsphere.sharding.tables.<logic-table-name>.table-strategy.xxx= #省略\n\nspring.shardingsphere.sharding.tables.<logic-table-name>.key-generator.column= #自增列名称，缺省表示不使用自增主键生成器\nspring.shardingsphere.sharding.tables.<logic-table-name>.key-generator.type= #自增列值生成器类型，缺省表示使用默认自增列值生成器。可使用用户自定义的列值生成器或选择内置类型：SNOWFLAKE/UUID/LEAF_SEGMENT\nspring.shardingsphere.sharding.tables.<logic-table-name>.key-generator.props.<property-name>= #属性配置, 注意：使用SNOWFLAKE算法，需要配置worker.id与max.tolerate.time.difference.milliseconds属性。若使用此算法生成值作分片值，建议配置max.vibration.offset属性\n\nspring.shardingsphere.sharding.binding-tables[0]= #绑定表规则列表\nspring.shardingsphere.sharding.binding-tables[1]= #绑定表规则列表\nspring.shardingsphere.sharding.binding-tables[x]= #绑定表规则列表\n\nspring.shardingsphere.sharding.broadcast-tables[0]= #广播表规则列表\nspring.shardingsphere.sharding.broadcast-tables[1]= #广播表规则列表\nspring.shardingsphere.sharding.broadcast-tables[x]= #广播表规则列表\n\nspring.shardingsphere.sharding.default-data-source-name= #未配置分片规则的表将通过默认数据源定位\nspring.shardingsphere.sharding.default-database-strategy.xxx= #默认数据库分片策略，同分库策略\nspring.shardingsphere.sharding.default-table-strategy.xxx= #默认表分片策略，同分表策略\nspring.shardingsphere.sharding.default-key-generator.type= #默认自增列值生成器类型，缺省将使用org.apache.shardingsphere.core.keygen.generator.impl.SnowflakeKeyGenerator。可使用用户自定义的列值生成器或选择内置类型：SNOWFLAKE/UUID/LEAF_SEGMENT\nspring.shardingsphere.sharding.default-key-generator.props.<property-name>= #自增列值生成器属性配置, 比如SNOWFLAKE算法的worker.id与max.tolerate.time.difference.milliseconds\n\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.master-data-source-name= #详见读写分离部分\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.slave-data-source-names[0]= #详见读写分离部分\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.slave-data-source-names[1]= #详见读写分离部分\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.slave-data-source-names[x]= #详见读写分离部分\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.load-balance-algorithm-class-name= #详见读写分离部分\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.load-balance-algorithm-type= #详见读写分离部分\n\nspring.shardingsphere.props.sql.show= #是否开启SQL显示，默认值: false\nspring.shardingsphere.props.executor.size= #工作线程数量，默认值: CPU核数\n")])])]),s("h2",{attrs:{id:"读写分离-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读写分离-2"}},[r._v("#")]),r._v(" 读写分离")]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("#省略数据源配置，与数据分片一致\n\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.master-data-source-name= #主库数据源名称\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.slave-data-source-names[0]= #从库数据源名称列表\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.slave-data-source-names[1]= #从库数据源名称列表\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.slave-data-source-names[x]= #从库数据源名称列表\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.load-balance-algorithm-class-name= #从库负载均衡算法类名称。该类需实现MasterSlaveLoadBalanceAlgorithm接口且提供无参数构造器\nspring.shardingsphere.sharding.master-slave-rules.<master-slave-data-source-name>.load-balance-algorithm-type= #从库负载均衡算法类型，可选值：ROUND_ROBIN，RANDOM。若`load-balance-algorithm-class-name`存在则忽略该配置\n\nspring.shardingsphere.props.sql.show= #是否开启SQL显示，默认值: false\nspring.shardingsphere.props.executor.size= #工作线程数量，默认值: CPU核数\nspring.shardingsphere.props.check.table.metadata.enabled= #是否在启动时检查分表元数据一致性，默认值: false\n")])])]),s("h2",{attrs:{id:"数据脱敏-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据脱敏-2"}},[r._v("#")]),r._v(" 数据脱敏")]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("#省略数据源配置，与数据分片一致\n\nspring.shardingsphere.encrypt.encryptors.<encryptor-name>.type= #加解密器类型，可自定义或选择内置类型：MD5/AES \nspring.shardingsphere.encrypt.encryptors.<encryptor-name>.props.<property-name>= #属性配置, 注意：使用AES加密器，需要配置AES加密器的KEY属性：aes.key.value\nspring.shardingsphere.encrypt.tables.<table-name>.columns.<logic-column-name>.plainColumn= #存储明文的字段\nspring.shardingsphere.encrypt.tables.<table-name>.columns.<logic-column-name>.cipherColumn= #存储密文的字段\nspring.shardingsphere.encrypt.tables.<table-name>.columns.<logic-column-name>.assistedQueryColumn= #辅助查询字段，针对ShardingQueryAssistedEncryptor类型的加解密器进行辅助查询\nspring.shardingsphere.encrypt.tables.<table-name>.columns.<logic-column-name>.encryptor= #加密器名字\n")])])]),s("h2",{attrs:{id:"治理-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#治理-2"}},[r._v("#")]),r._v(" 治理")]),r._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[r._v("#省略数据源、数据分片、读写分离和数据脱敏配置\n\nspring.shardingsphere.orchestration.name= #治理实例名称\nspring.shardingsphere.orchestration.overwrite= #本地配置是否覆盖注册中心配置。如果可覆盖，每次启动都以本地配置为准\nspring.shardingsphere.orchestration.registry.type= #配置中心类型。如：zookeeper\nspring.shardingsphere.orchestration.registry.server-lists= #连接注册中心服务器的列表。包括IP地址和端口号。多个地址用逗号分隔。如: host1:2181,host2:2181\nspring.shardingsphere.orchestration.registry.namespace= #注册中心的命名空间\nspring.shardingsphere.orchestration.registry.digest= #连接注册中心的权限令牌。缺省为不需要权限验证\nspring.shardingsphere.orchestration.registry.operation-timeout-milliseconds= #操作超时的毫秒数，默认500毫秒\nspring.shardingsphere.orchestration.registry.max-retries= #连接失败后的最大重试次数，默认3次\nspring.shardingsphere.orchestration.registry.retry-interval-milliseconds= #重试间隔毫秒数，默认500毫秒\nspring.shardingsphere.orchestration.registry.time-to-live-seconds= #临时节点存活秒数，默认60秒\nspring.shardingsphere.orchestration.registry.props= #配置中心其它属性\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
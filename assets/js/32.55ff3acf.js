(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{342:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"双向链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双向链表"}},[t._v("#")]),t._v(" 双向链表")]),t._v(" "),s("p",[t._v("由于单向链表只知道后继节点，当我们需要向前查找的时候，是及其不便的，而双向链表相对于链表来说，多了一个"),s("code",[t._v("前驱域")]),t._v("，我们在操作的过程中就可以快速的找到当前节点的前驱节点。因为多了一个指针域的关系，所以双向链表的内存占用会稍稍的多一些。")]),t._v(" "),s("h2",{attrs:{id:"双向链表的一般数据结构定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双向链表的一般数据结构定义"}},[t._v("#")]),t._v(" 双向链表的一般数据结构定义")]),t._v(" "),s("div",{staticClass:"language-TypeScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DoubleLinkedListNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 链表的数据域\n   */")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 链表的后继节点域\n   */")]),t._v("\n  next"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" DoubleLinkedListNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 链表的前驱节点域\n   */")]),t._v("\n  prev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" DoubleLinkedListNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/data-structure/queue/desc.html"}},[t._v("实现自动扩容队列")]),t._v("；")],1),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/data-structure/stack/desc.html"}},[t._v("实现自动扩容的栈")]),t._v("；")],1),t._v(" "),s("p",[s("code",[t._v("LRU-Cache")]),t._v("等；")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("编程技巧")]),t._v(" "),s("p",[t._v("在任何想频繁的操作前驱节点时，都应该考虑使用双向链表；")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
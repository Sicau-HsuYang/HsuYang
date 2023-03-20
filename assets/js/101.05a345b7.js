(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{403:function(t,s,e){"use strict";e.r(s);var a=e(14),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"数字保留-n-位小数-不四舍五入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数字保留-n-位小数-不四舍五入"}},[t._v("#")]),t._v(" 数字保留 N 位小数（不四舍五入）")]),t._v(" "),s("p",[t._v("这是一个不常用的需求，正常有两个方法可以使用，如"),s("code",[t._v("Number.prototype.toFixed")]),t._v("(保留多少位小数)，另外一个是"),s("code",[t._v("Number.prototype.toPrecision")]),t._v("(保留多少位有效数字)，这两个方法都有一个共同的特点："),s("code",[t._v("四舍五入")]),t._v("，但是有些时候产品需求是直接抹去小数位多少位之后的数字，不进行四舍五入。")]),t._v(" "),s("p",[t._v("另外，有些时候可能还有这类场景，比如都需要对一组数据进行转换，但是有些数据是整数，经过"),s("code",[t._v("Number.prototype.toFixed")]),t._v("转化之后都变成小数了，而希望本地来整数的就维持整数。")]),t._v(" "),s("p",[t._v("所以，简单的调用库函数就无法满足要求了，此刻就需要自行实现。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reserve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(9),c=n.n(r),i=(n(17),n(1)),o=n(2),u=n(4),s=n(3),d=n(5),h=n(10),E={list:[]},f=Object(h.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case"ADD_TO_LIST":return t.val?n.list.push({val:t.val,done:t.done}):alert("\u4f60\u4eca\u5929\u7684\u76ee\u6807\u662f\u5565\uff1f\uff1f\uff1f"),n;case"CHANGE_LIST":return n.list[t.index].done=!n.list[t.index].done,n;case"DELETE_LIST":return n.list.splice([t.index],1),n}return e},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),p=function(e){return{type:"ADD_TO_LIST",val:e.val,done:e.done}},m=function(e){return{type:"CHANGE_LIST",index:e}},v=function(e){return{type:"DELETE_LIST",index:e}},O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).handleChange=function(e){var t=m(e);f.dispatch(t)},n.handleDelete=function(e){var t=v(e);f.dispatch(t)},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.list;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("span",{className:"willDo"},"\u4ee3\u529e\u4e8b\u9879"),l.a.createElement("ol",null,t.map(function(t,n){if(!t.done)return l.a.createElement("li",{key:n},t.val,l.a.createElement("button",{onClick:function(){e.handleChange(n)}},"\u5b8c\u6210"),l.a.createElement("button",{onClick:function(){e.handleDelete(n)}},"\u5220\u9664"))}))),l.a.createElement("div",null,l.a.createElement("span",{className:"done"},"\u5df2\u5b8c\u6210"),l.a.createElement("ol",null,t.map(function(t,n){if(t.done)return l.a.createElement("li",{key:n},t.val,l.a.createElement("button",{onClick:function(){e.handleChange(n)}},"\u91cd\u505a"),l.a.createElement("button",{onClick:function(){e.handleDelete(n)}},"\u5220\u9664"))}))))}}]),t}(l.a.Component),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).task=l.a.createRef(),n.state=f.getState(),n.handleAdd=function(){var e=p({val:n.task.current.value,done:!1});n.task.current.value="",f.dispatch(e)},n.handleChange=function(e){var t=m(e);f.dispatch(t)},n.handleStoreChange=function(){n.setState(f.getState())},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){f.subscribe(this.handleStoreChange)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("input",{type:"text",ref:this.task}),l.a.createElement("button",{onClick:this.handleAdd},"\u6dfb\u52a0")),l.a.createElement(O,{list:this.state.list}))}}]),t}(l.a.Component),_=l.a.createElement(b,null);c.a.render(_,document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.85c27a5f.chunk.js.map
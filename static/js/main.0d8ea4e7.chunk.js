(this.webpackJsonprobots=this.webpackJsonprobots||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(12),n(1)),s=n(2),l=n(4),u=n(3),h=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-near-white dib ma2 pa3 grow shadow-5 br3 bw2"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=200x200&&set=set5"),alt:t}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:t[n].id,name:t[n].name,email:t[n].email,id:t[n].id})})))},d=(n(13),function(e){var t=e.onInput;return r.a.createElement("input",{className:"mb5",type:"text",placeholder:"search robots...",onChange:t})}),p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px",borderWidth:".25rem",borderRadius:".5rem",boxShadow:"4px 4px 8px 0 rgba( 0, 0, 0, .2 )",padding:"1rem",margin:".5rem"}},e.children)},b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops. This is not good"):this.props.children}}]),n}(a.Component),f=(n(14),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onInputChange=function(t){e.setState({searchFiled:t.target.value})},e.state={robots:[],searchFiled:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchFiled,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"heading"},"RoboFriends"),r.a.createElement(d,{onInput:this.onInputChange}),r.a.createElement(p,null,r.a.createElement(b,null,r.a.createElement(m,{robots:a})))):r.a.createElement("h1",{className:"heading"},"Loading")}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.0d8ea4e7.chunk.js.map
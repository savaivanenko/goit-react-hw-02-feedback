(this["webpackJsonpmodule-01"]=this["webpackJsonpmodule-01"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),o=n(3),i=n.n(o),d=n(4),s=n(5),b=n(6),l=n(8),u=n(7),j=function(e){var t=e.feedback,n=e.onLeaveFeedback;return Object(c.jsx)("button",{type:"button","data-feedback":t,onClick:n,children:t})},h=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(c.jsx)(j,{feedback:e,onLeaveFeedback:n})}))},O=["good","neutral","bad"],v=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t}),n]})},f=(n(14),function(){return Object(c.jsx)("p",{children:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043e\u0442\u0437\u044b\u0432, \u0431\u0443\u0434\u044c\u0442\u0435 \u043b\u044e\u0431\u0435\u0437\u043d\u044b"})}),k=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.total,o=e.positiveFeedback;return Object(c.jsx)(c.Fragment,{children:r?Object(c.jsxs)("ul",{className:"Statistic",children:[Object(c.jsxs)("li",{children:["Good ",t]}),Object(c.jsxs)("li",{children:["Neutral ",n]}),Object(c.jsxs)("li",{children:["Bad ",a]}),Object(c.jsxs)("li",{children:["Total ",r]}),Object(c.jsxs)("li",{children:["Positive ",o,"%"]})]}):Object(c.jsx)(f,{})})},x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var n=t.target.dataset.feedback;e.setState((function(e){return Object(d.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return Math.round(100*t/n)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,r=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{title:"Please leave feedback",children:Object(c.jsx)(h,{options:O,onLeaveFeedback:this.handleFeedback})}),Object(c.jsx)(v,{title:"Statistics",children:Object(c.jsx)(k,{good:t,neutral:n,bad:a,total:r,positiveFeedback:o})})]})}}]),n}(r.a.Component);n(15);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b59b0953.chunk.js.map
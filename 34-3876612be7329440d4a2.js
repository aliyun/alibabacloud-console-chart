(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{pQAz:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));n("dRSK");var o=n("q1tI"),i=n("nRmr");var a=[{name:"时长",data:[["1年",45],["2年",26],["3年",12],["4年",8],["5年",10],["6年以上",27]]}],r=function(t){var e,n;function r(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).state={selectKey:""},e.onClick=function(t){var n=e.state.selectKey;console.log(t.data._origin),console.log(n),n===t.data._origin.x?e.setState({selectKey:""}):e.setState({selectKey:t.data._origin.x})},e}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.state.selectKey,e=a[0].data.find((function(e){return e[0]===t}))||[],n=e&&e.length?e[1]:0,r={cycle:!0,guide:{html:{position:["50%","50%"],htmlContent:t?'<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">\n              '+t+'<br><span style="color:#8c8c8c;font-size:20px">'+n+"</span>\n            </div>":"<div></div>",alignX:"middle",alignY:"middle"}},tooltip:{itemTpl:'<li data-index={index}>\n          <span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>\n          v{name}: {value}%\n          </li>'},select:!0,selectData:t||""};return o.createElement(i.g,{data:a,config:r,height:300,event:{"interval:click":this.onClick}})},r}(o.Component)}}]);
//# sourceMappingURL=34-3876612be7329440d4a2.js.map
import{g as n,s as i,h,_ as u,o as c,c as a,a as s,F as v,r as p,d as _,t as r,i as d,p as g,e as f}from"./index.7af59c27.js";const k={data(){return{}},computed:{releaseData(){let o=h;for(;o.length%4!=0;)o.push({});return o}},methods:{get_cover:n,get_icon:i}};const l=o=>(g("data-v-7360435d"),o=o(),f(),o),y={class:"release-page"},w=l(()=>s("div",{class:"page-title"},[s("h2",null,"ALL RELEASES")],-1)),S={class:"release-row"},x={class:"cover-wrapper"},V=l(()=>s("div",{class:"not-release cover"},null,-1)),E={key:0,class:"cover"},I=["href"],L=["src"],b={key:1,class:"shade-wrapper cover"},B={class:"release-title"},D={class:"release-info"},N={class:"bar"},R=["href"],A=["src"],F={class:"bar"},m=["href"],C=["src"];function T(o,j,q,z,G,t){return c(),a("div",y,[w,s("div",S,[(c(!0),a(v,null,p(t.releaseData,e=>(c(),a("div",{key:e.id,class:"item"},[s("div",x,[V,e.id?(c(),a("div",E,[s("a",{href:e.homepage,target:"_blank"},[s("img",{src:t.get_cover(e.id)},null,8,L)],8,I)])):_("",!0),e.id?(c(),a("div",b,[s("div",B,r(e.title),1),s("div",D,[s("div",null,r(e.code),1),s("div",null,r(e.date),1)])])):_("",!0)]),s("div",N,[e.sources!=null&&e.sources.length>0?(c(),a("a",{key:0,href:e.sources[0].url},[s("img",{src:t.get_icon(e.sources[0].name)},null,8,A),d(r(e.sources[0].name),1)],8,R)):_("",!0)]),s("div",F,[e.sources!=null&&e.sources.length>1?(c(),a("a",{key:0,href:e.sources[1].url},[s("img",{src:t.get_icon(e.sources[1].name)},null,8,C),d(r(e.sources[1].name),1)],8,m)):_("",!0)])]))),128))])])}const J=u(k,[["render",T],["__scopeId","data-v-7360435d"]]);export{J as default};

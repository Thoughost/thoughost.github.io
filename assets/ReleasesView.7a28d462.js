import{q as l,u as i,v as u,_ as h,o as t,c,b as s,F as v,d as p,e as d,t as a,x as _,h as g,i as f}from"./index.ed26abaf.js";const y={data(){return{}},computed:{releaseData(){let o=u;for(;o.length%4!=0;)o.push({});return o}},methods:{get_cover:l,get_icon:i}};const n=o=>(g("data-v-dd6ede71"),o=o(),f(),o),k={class:"release-page container"},w=n(()=>s("div",{class:"page-title"},[s("h2",null,"ALL RELEASES")],-1)),x={class:"release-row"},S={class:"cover-wrapper"},V=n(()=>s("div",{class:"not-release cover"},null,-1)),E={key:0,class:"cover"},I=["href"],L=["src"],b={key:1,class:"shade-wrapper cover"},B={class:"release-title"},D={class:"release-info"},N={class:"bar"},R=["href"],A=["src"],F={class:"bar"},m=["href"],q=["src"];function C(o,T,j,z,G,r){return t(),c("div",k,[w,s("div",x,[(t(!0),c(v,null,p(r.releaseData,e=>(t(),c("div",{key:e.id,class:"item"},[s("div",S,[V,e.id?(t(),c("div",E,[s("a",{target:"_top",href:e.homepage},[s("img",{src:r.get_cover(e.id)},null,8,L)],8,I)])):d("",!0),e.id?(t(),c("div",b,[s("div",B,a(e.title),1),s("div",D,[s("div",null,a(e.code),1),s("div",null,a(e.date),1)])])):d("",!0)]),s("div",N,[e.sources!=null&&e.sources.length>0?(t(),c("a",{key:0,target:"_top",href:e.sources[0].url},[s("img",{src:r.get_icon(e.sources[0].name)},null,8,A),_(a(e.sources[0].name),1)],8,R)):d("",!0)]),s("div",F,[e.sources!=null&&e.sources.length>1?(t(),c("a",{key:0,target:"_top",href:e.sources[1].url},[s("img",{src:r.get_icon(e.sources[1].name)},null,8,q),_(a(e.sources[1].name),1)],8,m)):d("",!0)])]))),128))])])}const J=h(y,[["render",C],["__scopeId","data-v-dd6ede71"]]);export{J as default};

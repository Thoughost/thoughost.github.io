import{z as r,A as l,_ as u,o as _,c as o,b as s,x as c,t as d,e as i,F as g}from"./index.79fb4a0c.js";const w={computed:{get_news:function(t){console.log(t.$route.params.id);let a=r.find(n=>n.id==t.$route.params.id);return console.log(a),a},get_image:function(t){return l.find(n=>n.id==t.$route.params.id)}}};const m={key:0,class:"news-detail"},v={class:"news-title"},f={style:{color:"gray"}},h={key:1,class:"news-detail"},p={class:"news-title"},y={class:"news-date"},N={key:0},k=["src"],x={class:"news-content"},V=["innerHTML"];function B(t,a,n,D,T,e){return _(),o(g,null,[e.get_news==null?(_(),o("div",m,[s("div",v,[c("News "),s("span",f,d(t.$route.params.id),1),c(" not found : (")])])):i("",!0),e.get_news!=null?(_(),o("div",h,[s("div",p,d(e.get_news.title),1),s("div",y,d(e.get_news.date),1),e.get_image!=null?(_(),o("div",N,[s("img",{class:"news-image",src:e.get_image.url,alt:"news image"},null,8,k)])):i("",!0),s("div",x,[s("div",{innerHTML:e.get_news.content},null,8,V)])])):i("",!0)],64)}const H=u(w,[["render",B],["__scopeId","data-v-42a7aa32"]]);export{H as default};

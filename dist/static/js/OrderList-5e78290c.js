import{d as e,A as a,o as t,e as s,j as l,u as i,f as d,w as r,C as n,D as o,M as u,I as c,J as p,h as v,H as f,E as b,F as m,i as h,a as g,L as x,G as k}from"./vendor-5e4eeeb9.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              */import{_ as y,b as _}from"./index-ab470826.js";const j={class:"order_wrap"},w={class:"right"},C=(e=>(n("data-v-deef81da"),e=e(),o(),e))((()=>d("div",null,[d("h4",null,"宋瓷摆件青铜双鸟铭文兔尊"),d("h4",null,"需支付 ￥1147.00")],-1))),D={class:"btn_wrap"},L=u(" 取消订单 "),z=u(" 立即支付 ");var A=y(e({setup(e){const n=a(),o=()=>{n.push({path:"/user-order-pay",query:{id:"001"}})};return(e,a)=>{const n=c,u=p;return t(),s("div",j,[l(n,{width:"88",height:"88",fit:"cover",src:i(_)("/test/goods-thumb.png")},null,8,["src"]),d("div",w,[C,d("div",D,[l(u,{size:"small",round:"",color:"transparent"},{default:r((()=>[L])),_:1}),l(u,{size:"small",round:"",color:"linear-gradient(180deg, #31DDFA 0%, rgba(76, 204, 248, 0.926875) 41.15%, rgba(182, 138, 238, 0.64) 96.35%)",onClick:o},{default:r((()=>[z])),_:1})])])])}}}),[["__scopeId","data-v-deef81da"]]);const F={class:"order_page"},I=e({setup(e){const i=a(),n=v([{key:"all",title:"全部"},{key:"before",title:"待付款"},{key:"after",title:"已付款"},{key:"cancel",title:"已取消"}]),o=v(0),u=()=>{i.go(-1)},c=v([]),p=v(!1),y=v(!1),_=()=>{setTimeout((()=>{for(let e=0;e<5;e++)c.value.push(c.value.length+1);p.value=!1,c.value.length>=40&&(y.value=!0)}),1e3)};return(e,a)=>{const i=f,v=x,j=k,w=b;return t(),s("div",F,[l(i,{fixed:"",placeholder:"","left-text":"返回",title:"订单","left-arrow":"",onClickLeft:u}),d("div",null,[l(w,{active:o.value,"onUpdate:active":a[1]||(a[1]=e=>o.value=e),sticky:"",animated:"",swipeable:""},{default:r((()=>[(t(!0),s(m,null,h(n.value,(e=>(t(),g(j,{title:e.title,name:e.key,key:e.key},{default:r((()=>[l(v,{loading:p.value,"onUpdate:loading":a[0]||(a[0]=e=>p.value=e),finished:y.value,"finished-text":"没有更多了",onLoad:_},{default:r((()=>[(t(!0),s(m,null,h(c.value,(e=>(t(),g(A,{key:e})))),128))])),_:2},1032,["loading","finished"])])),_:2},1032,["title","name"])))),128))])),_:1},8,["active"])])])}}});export{I as default};

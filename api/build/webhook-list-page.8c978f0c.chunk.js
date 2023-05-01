"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[4121],{6784:(w,D,t)=>{t.r(D),t.d(D,{default:()=>ce});var e=t(67294),l=t(41647),c=t(87751),E=t(16550),v=t(86896),h=t(14087),O=t(17034),d=t(185),a=t(53979),u=t(36989),s=t(75515),L=t(29728),y=t(49066),M=t(41580),S=t(38939),R=t(49386),J=t(8060),Z=t(79031),g=t(37909),H=t(41451),_=t(63237),q=t(15234),G=t(11047),ee=t(3566),j=t(12028),te=t(89722),K=t(96315),N=t(20022),ne=t(4585),le=t(86031),ae=t(18172),oe=t(36968),se=t.n(oe);const re={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},ie=(m,i)=>(0,ae.ZP)(m,r=>{switch(i.type){case"GET_DATA_SUCCEEDED":{r.webhooks=i.data,r.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{r.loadingWebhooks=!m.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{se()(r,["webhooks",...i.keys],i.value);break}case"SET_WEBHOOK_TO_DELETE":{r.webhookToDelete=i.id;break}case"SET_WEBHOOKS_TO_DELETE":{i.value?r.webhooksToDelete.push(i.id):r.webhooksToDelete=m.webhooksToDelete.filter(T=>T!==i.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{m.webhooksToDelete.length===0?r.webhooksToDelete=m.webhooks.map(T=>T.id):r.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{r.webhooks=m.webhooks.filter(T=>!m.webhooksToDelete.includes(T.id)),r.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{r.webhooks=m.webhooks.filter((T,P)=>P!==i.index),r.webhookToDelete=null;break}default:return r}}),de=()=>{const{isLoading:m,allowedActions:{canCreate:i,canRead:r,canUpdate:T,canDelete:P}}=(0,l.ss)(c.Z.settings.webhooks),W=(0,l.lm)(),p=(0,e.useRef)(!0),{formatMessage:o}=(0,v.Z)(),[Ee,k]=(0,e.useState)(!1),[{webhooks:B,webhooksToDelete:$,webhookToDelete:I,loadingWebhooks:U},f]=(0,e.useReducer)(ie,re),{notifyStatus:me}=(0,h.G)();(0,l.go)();const{push:he}=(0,E.k6)(),{pathname:V}=(0,E.TH)(),A=B.length,C=$.length,F=n=>B.findIndex(b=>b.id===n);(0,e.useEffect)(()=>(p.current=!0,()=>{p.current=!1}),[]),(0,e.useEffect)(()=>{r&&ue()},[r]);const ue=async()=>{try{const{data:n}=await(0,l.WY)("/admin/webhooks",{method:"GET"});p.current&&(f({type:"GET_DATA_SUCCEEDED",data:n}),me("webhooks have been loaded"))}catch(n){console.log(n),p.current&&(n.code!==20&&W({type:"warning",message:{id:"notification.error"}}),f({type:"TOGGLE_LOADING"}))}},ge=()=>{k(n=>!n)},be=()=>{I?Te():fe()},Te=async()=>{try{await(0,l.WY)(`/admin/webhooks/${I}`,{method:"DELETE"}),f({type:"WEBHOOK_DELETED",index:F(I)})}catch(n){n.code!==20&&W({type:"warning",message:{id:"notification.error"}})}k(!1)},fe=async()=>{const n={ids:$};try{await(0,l.WY)("/admin/webhooks/batch-delete",{method:"POST",body:n}),p.current&&f({type:"WEBHOOKS_DELETED"})}catch(b){p.current&&b.code!==20&&W({type:"warning",message:{id:"notification.error"}})}k(!1)},z=n=>{k(!0),n!=="all"&&f({type:"SET_WEBHOOK_TO_DELETE",id:n})},De=async(n,b)=>{const Y=F(b),Le=B[Y],Q=[Y,"isEnabled"],X={...Le,isEnabled:n};delete X.id;try{f({type:"SET_WEBHOOK_ENABLED",keys:Q,value:n}),await(0,l.WY)(`/admin/webhooks/${b}`,{method:"PUT",body:X})}catch(ye){p.current&&(f({type:"SET_WEBHOOK_ENABLED",keys:Q,value:!n}),ye.code!==20&&W({type:"warning",message:{id:"notification.error"}}))}},ve=()=>{f({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},Oe=(n,b)=>{f({type:"SET_WEBHOOKS_TO_DELETE",value:n,id:b})},x=n=>{he(`${V}/${n}`)};return e.createElement(O.A,null,e.createElement(l.SL,{name:"Webhooks"}),e.createElement(d.o,{"aria-busy":m||U},e.createElement(a.T,{title:o({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:o({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:i&&!U&&e.createElement(l.Qj,{startIcon:e.createElement(K.Z,null),variant:"default",to:`${V}/create`,size:"S"},o({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),C>0&&P&&e.createElement(u.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(s.Z,{variant:"epsilon",textColor:"neutral600"},o({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:C})),e.createElement(L.z,{onClick:()=>z("all"),startIcon:e.createElement(N.Z,null),size:"L",variant:"danger-light"},o({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(y.D,null,m||U?e.createElement(M.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(l.dO,null)):A>0?e.createElement(S.i,{colCount:5,rowCount:A+1,footer:e.createElement(R.c,{onClick:()=>i?x("create"):{},icon:e.createElement(K.Z,null)},o({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(J.h,null,e.createElement(Z.Tr,null,e.createElement(g.Th,null,e.createElement(H.C,{"aria-label":o({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:C>0&&C<A,value:C===A,onValueChange:ve})),e.createElement(g.Th,{width:"20%"},e.createElement(s.Z,{variant:"sigma",textColor:"neutral600"},o({id:"global.name",defaultMessage:"Name"}))),e.createElement(g.Th,{width:"60%"},e.createElement(s.Z,{variant:"sigma",textColor:"neutral600"},o({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(g.Th,{width:"20%"},e.createElement(s.Z,{variant:"sigma",textColor:"neutral600"},o({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(g.Th,null,e.createElement(_.T,null,o({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(q.p,null,B.map(n=>e.createElement(Z.Tr,{key:n.id,...(0,l.X7)({fn:()=>x(n.id),condition:T})},e.createElement(g.Td,{...l.UW},e.createElement(H.C,{"aria-label":`${o({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:$?.includes(n.id),onValueChange:b=>Oe(b,n.id),id:"select",name:"select"})),e.createElement(g.Td,null,e.createElement(s.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(g.Td,null,e.createElement(s.Z,{textColor:"neutral800"},n.url)),e.createElement(g.Td,null,e.createElement(G.k,{...l.UW},e.createElement(ee.r,{onLabel:o({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:o({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${o({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:()=>De(!n.isEnabled,n.id),visibleLabels:!0}))),e.createElement(g.Td,null,e.createElement(G.k,{gap:1,...l.UW},T&&e.createElement(j.h,{onClick:()=>{x(n.id)},label:o({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(ne.Z,null),noBorder:!0}),P&&e.createElement(j.h,{onClick:()=>z(n.id),label:o({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(N.Z,null),noBorder:!0,id:`delete-${n.id}`}))))))):e.createElement(te.x,{icon:e.createElement(le.Z,{width:"160px"}),content:o({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(L.z,{variant:"secondary",startIcon:e.createElement(K.Z,null),onClick:()=>i?x("create"):{}},o({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(l.QH,{isOpen:Ee,onToggleDialog:ge,onConfirm:be}))},ce=()=>e.createElement(l.O4,{permissions:c.Z.settings.webhooks.main},e.createElement(de,null))},36989:(w,D,t)=>{t.d(D,{Z:()=>d});var e=t(67294),l=t(45697),c=t(46449),E=t(41580),v=t(11047);const h=(0,c.ZP)(v.k)`
  & > * + * {
    margin-left: ${({theme:a})=>a.spaces[2]};
  }

  margin-left: ${({pullRight:a})=>a?"auto":void 0};
`,O=(0,c.ZP)(h)`
  flex-shrink: 0;
`,d=({startActions:a,endActions:u})=>a||u?e.createElement(E.x,{paddingLeft:10,paddingRight:10},e.createElement(E.x,{paddingBottom:4},e.createElement(v.k,{justifyContent:"space-between",alignItems:"flex-start"},a&&e.createElement(h,{wrap:"wrap"},a),u&&e.createElement(O,{pullRight:!0},u)))):null;d.defaultProps={endActions:void 0,startActions:void 0},d.propTypes={endActions:l.node,startActions:l.node}},3566:(w,D,t)=>{t.d(D,{r:()=>d});var e=t(67294),l=t(45697),c=t(46449),E=t(41580),v=t(11047);const h=c.ZP.div`
  background: ${({theme:a})=>a.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:a})=>a?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:a})=>a.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:a})=>a.spaces[1]};
    top: ${({theme:a})=>a.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,O=c.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${h} {
    background: ${({theme:a})=>a.colors.success500};
  }

  &[aria-checked='true'] ${h}:before {
    transform: translateX(1rem);
  }
`,d=e.forwardRef(({label:a,onChange:u,onLabel:s,offLabel:L,selected:y,visibleLabels:M,...S},R)=>e.createElement(O,{ref:R,role:"switch","aria-checked":y,"aria-label":a,onClick:u,visibleLabels:M,type:"button",...S},e.createElement(v.k,null,e.createElement(h,null,e.createElement("span",null,s),e.createElement("span",null,L)),M&&e.createElement(E.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:y?"success600":"danger600"},y?s:L))));d.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},d.propTypes={label:l.string.isRequired,offLabel:l.string,onChange:l.func.isRequired,onLabel:l.string,selected:l.bool.isRequired,visibleLabels:l.bool},d.displayName="Switch"},49386:(w,D,t)=>{t.d(D,{c:()=>u});var e=t(67294),l=t(45697),c=t(46449),E=t(41580),v=t(70004),h=t(11047),O=t(75515);const d=(0,c.ZP)(E.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:s})=>s.colors.primary600};
  }
`,a=(0,c.ZP)(E.x)`
  border-radius: 0 0 ${({theme:s})=>s.borderRadius} ${({theme:s})=>s.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,u=({children:s,icon:L,...y})=>e.createElement("div",null,e.createElement(v.i,null),e.createElement(a,{as:"button",background:"primary100",padding:5,...y},e.createElement(h.k,null,e.createElement(d,{"aria-hidden":!0,background:"primary200"},L),e.createElement(E.x,{paddingLeft:3},e.createElement(O.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},s)))));u.propTypes={children:l.string.isRequired,icon:l.node.isRequired}}}]);

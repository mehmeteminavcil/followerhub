(self.webpackChunkapi=self.webpackChunkapi||[]).push([[994],{56595:(ui,Mt,f)=>{"use strict";f.r(Mt),f.d(Mt,{App:()=>di,default:()=>mp});var t=f(67294),Ao=f(64593),ae=f(16550),h=f(41647),Te=f(185),Fe=f(53979),Dt=f(17034),Q=f(86896),mi=f(89734),Oo=f.n(mi),Ke=f(87751);const R=e=>`content-manager.${e}`;var ze=f(99168),Me=f(45697),n=f.n(Me);const $o=(0,t.createContext)();function Yt({attributes:e,buttonData:o,children:r,goTo:s,layout:i,metadatas:l,moveItem:a,moveRow:c,onAddData:u,relationsLayout:d,removeField:m,selectedItemName:g,setEditFieldToSelect:p,...y}){return t.createElement($o.Provider,{value:{attributes:e,buttonData:o,goTo:s,layout:i,metadatas:l,moveItem:a,moveRow:c,onAddData:u,relationsLayout:d,removeField:m,selectedItemName:g,setEditFieldToSelect:p,...y}},r)}Yt.defaultProps={attributes:{},buttonData:[],goTo(){},layout:[],metadatas:{},moveItem(){},moveRow(){},onAddData(){},relationsLayout:[],removeField(){},selectedItemName:null,setEditFieldToSelect(){}},Yt.propTypes={attributes:n().object,buttonData:n().array,children:n().node.isRequired,goTo:n().func,layout:n().array,metadatas:n().object,moveItem:n().func,moveRow:n().func,onAddData:n().func,relationsLayout:n().array,removeField:n().func,selectedItemName:n().string,setEditFieldToSelect:n().func};const Zo=Yt,Ce={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"};var q=f(46449),w=f(11047),G=f(75515),$e=f(12814),Ye=f(4585),kt=f(70968);const qo=e=>e.length>20?`${e.substring(0,20)}...`:e,Xt=(0,q.ZP)(w.k)`
  height: ${({theme:e})=>e.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:e})=>e.spaces[3]};
  }
`,No=(0,q.ZP)(Xt)`
  padding: 0 ${({theme:e})=>e.spaces[3]};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,pi=(0,q.ZP)(w.k)`
  display: inline-flex;
  max-height: ${32/16}rem;
  opacity: ${({transparent:e})=>e?0:1};
  background-color: ${({theme:e,isSibling:o})=>o?e.colors.neutral100:e.colors.primary100};
  border: 1px solid
    ${({theme:e,isSibling:o})=>o?e.colors.neutral150:e.colors.primary200};

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:e,isSibling:o})=>o?void 0:e.colors.primary600};
    }
  }

  ${G.Z} {
    color: ${({theme:e,isSibling:o})=>o?void 0:e.colors.primary600};
  }

  ${No} {
    border-right: 1px solid
      ${({theme:e,isSibling:o})=>o?e.colors.neutral150:e.colors.primary200};
  }
`,Jt=({labelField:e,transparent:o,isSibling:r})=>{const s=qo(e);return t.createElement(pi,{hasRadius:!0,justifyContent:"space-between",transparent:o,isSibling:r},t.createElement(w.k,{gap:3},t.createElement(No,{alignItems:"center"},t.createElement($e.Z,null)),t.createElement(G.Z,{fontWeight:"bold"},s)),t.createElement(w.k,{paddingLeft:3},t.createElement(Xt,{alignItems:"center"},t.createElement(Ye.Z,null)),t.createElement(Xt,{alignItems:"center"},t.createElement(kt.Z,null))))};Jt.defaultProps={isSibling:!1,transparent:!1},Jt.propTypes={isSibling:n().bool,labelField:n().string.isRequired,transparent:n().bool};const _t=Jt;var S=f(41580),ge=f(12028),gi=f(12645),Se=f(20022);const fi=(0,q.ZP)(S.x)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
`,hi=(0,q.ZP)(S.x)`
  height: ${32/16}rem;
  width: ${32/16}rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: ${6/16}rem;
    width: ${11/16}rem;
    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }
`,yi=q.ZP.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`,jo=({displayedValue:e})=>t.createElement(fi,{paddingLeft:3,paddingRight:3,paddingTop:3,paddingBottom:3,hasRadius:!0,background:"neutral0",width:(0,h.Q1)(300)},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(yi,{type:"button"},t.createElement(w.k,null,t.createElement(hi,{background:"neutral200"},t.createElement(gi.Z,null)),t.createElement(w.k,{gap:2,paddingLeft:6,maxWidth:(0,h.Q1)(150)},t.createElement(G.Z,{textColor:"neutral700",ellipsis:!0},e)))),t.createElement(S.x,{paddingLeft:3},t.createElement(w.k,null,t.createElement(ge.h,{noBorder:!0},t.createElement(Se.Z,null)),t.createElement(S.x,{paddingLeft:2},t.createElement(ge.h,{noBorder:!0},t.createElement($e.Z,null)))))));jo.propTypes={displayedValue:n().string.isRequired};const Bo=jo;var en=f(37856),Wo=f(52624),bi=f(50361),De=f.n(bi);const It=(e,o,r)=>{if(Array.isArray(e)&&o>=0&&r>=0&&o<=e.length-1&&r<=e.length-1){const s=De()(e),i=s.splice(o,1);return s.splice(r,0,i[0]),s}return e};var Ei=f(7334),zo=f.n(Ei);const Vo=e=>{const o=e.type;return o==="relation"?!zo()(e.relationType).includes("morph"):!["json","dynamiczone","richtext","password"].includes(o)&&!!o},Ci=(e,o)=>{typeof e=="function"?e(o):e!=null&&(e.current=o)},Lt=(...e)=>o=>e.forEach(r=>Ci(r,o));var Ri=f(27361),I=f.n(Ri);const Uo=(e,o)=>Object.keys(e).reduce((r,s)=>{const i=I()(e,[s],{}),{default:l,component:a,type:c,required:u,min:d,repeatable:m}=i;if(l!==void 0&&(r[s]=l),c==="component"){const g=o?.[a]?.attributes??{},p=Uo(g,o);if(u===!0&&(r[s]=m===!0?[]:p),d&&m===!0&&u){r[s]=[];for(let y=0;y<d;y+=1)r[s].push(p)}}return c==="dynamiczone"&&u===!0&&(r[s]=[]),r},{}),xt=Uo;var vi=f(57557),Ho=f.n(vi);const Pt=({layouts:e,metadatas:o,...r})=>{const s=e.list.map(a=>a.name?a.name:a),i=Object.keys(o).reduce((a,c)=>{const u=I()(o,[c],{});let d=u.edit;return d.mainField&&(d={...d,mainField:u.edit.mainField.name}),{...a,[c]:{edit:d,list:Ho()(u.list,["mainField"])}}},{}),l=e.edit.map(a=>a.map(({name:c,size:u})=>({name:c,size:u})));return{...r,layouts:{edit:l,list:s},metadatas:i}},Ti=(e,o)=>e.map(r=>({...r,subject:o})),Go=e=>{const o={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(o).reduce((r,s)=>(r[s]=Ti(o[s],e),r),{})};var Mi=f(7654),Qo=f.n(Mi);const Ko=e=>e.split(".").filter(o=>Qo()(parseInt(o,10))),tn=e=>{if(e.length===0)return-1;const o=Math.max.apply(Math,e.map(r=>r.__temp_key__??0));return Number.isNaN(o)?-1:o},de=e=>`/content-manager/${e}`;var Di=f(36968),J=f.n(Di);const Yo=(e,o,r)=>{const s=c=>o.find(u=>u.uid===c),i=Object.assign({},e),l=e[r].uid,a=s(l);return J()(i,[r],{...e[r],...a}),Object.keys(e.components).forEach(c=>{const u=s(c);J()(i,["components",c],{...e.components[c],...u})}),i},Xo=(e,o,r)=>{const s=(i,l)=>Object.keys(i).reduce((a,c)=>{const u=(0,h.UN)(l,c),d=I()(i,c),m=(0,h.k2)(l,[c,"component"]),g=(0,h.k2)(l,[c,"repeatable"]);return u==="dynamiczone"?(a[c]=d.map(p=>s(p,r[p.__component])),a):u==="component"?(g?a[c]=d&&d.map(p=>s(p,r[m])):a[c]=d&&s(d,r[m]),a):(u!=="password"&&(a[c]=d),a)},{});return s(e,o)},Ve={DRAFT:"draft",PUBLISHED:"published"},nn=5,ki=10;var ct=f(61080);const Ii=(e,o,{onCancel:r,onDropItem:s,onGrabItem:i,onMoveItem:l})=>{const[a,c]=(0,t.useState)(!1),u=p=>{a&&(p==="UP"?l(o-1,o):p==="DOWN"&&l(o+1,o))},d=()=>{a?(s&&s(o),c(!1)):(i&&i(o),c(!0))},m=()=>{a&&(c(!1),r&&r(o))};return p=>{if(e&&!(p.key==="Tab"&&!a))switch(p.preventDefault(),p.key){case" ":case"Enter":d();break;case"Escape":m();break;case"ArrowDown":case"ArrowRight":u("DOWN");break;case"ArrowUp":case"ArrowLeft":u("UP");break;default:}}},on=(e,{type:o="STRAPI_DND",index:r,item:s={},onStart:i,onEnd:l,onGrabItem:a,onDropItem:c,onCancel:u,onMoveItem:d,dropSensitivity:m="regular"})=>{const g=(0,t.useRef)(null),[{handlerId:p},y]=(0,ze.useDrop)({accept:o,collect(E){return{handlerId:E.getHandlerId()}},hover(E,P){if(!g.current)return;const F=E.index,T=r;if(F!==T){if(m==="regular"){const D=g.current.getBoundingClientRect(),x=(D.bottom-D.top)/2,z=P.getClientOffset().y-D.top;if(F<T&&z<x||F>T&&z>x)return}d(T,F),E.index=T}}}),[{isDragging:b},C,k]=(0,ze.useDrag)({type:o,item(){i&&i();const{width:E}=g.current?.getBoundingClientRect()??{};return{index:r,width:E,...s}},end(){l&&l()},canDrag:e,isDragging:s.id?E=>s.id===E.getItem().id:void 0,collect:E=>({isDragging:E.isDragging()})}),M=Ii(e,r,{onGrabItem:a,onDropItem:c,onCancel:u,onMoveItem:d});return[{handlerId:p,isDragging:b,handleKeyDown:M},g,y,C,k]},wt=50,Xe=4,Jo=(0,q.ZP)(w.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`,_o=(0,q.ZP)(w.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;
`,rn=({ariaDescribedBy:e,children:o,displayValue:r,canDrag:s,disabled:i,endAction:l,iconButtonAriaLabel:a,style:c,id:u,index:d,name:m,onCancel:g,onDropItem:p,onGrabItem:y,status:b,updatePositionOfRelation:C,...k})=>{const[{handlerId:M,isDragging:E,handleKeyDown:P},F,T,D,x]=on(s&&!i,{type:`${Ce.RELATION}_${m}`,index:d,item:{displayedValue:r,status:b,id:u},onGrabItem:y,onDropItem:p,onCancel:g,onMoveItem:C,dropSensitivity:"immediate"}),N=Lt(F,D);return(0,t.useEffect)(()=>{x((0,ct.rX)())},[x]),t.createElement(S.x,{style:c,as:"li",ref:T,"aria-describedby":e,cursor:s?"all-scroll":"default"},E?t.createElement(Li,null):t.createElement(w.k,{paddingTop:2,paddingBottom:2,paddingLeft:s?2:4,paddingRight:4,hasRadius:!0,borderSize:1,borderColor:"neutral200",background:i?"neutral150":"neutral0",justifyContent:"space-between",ref:s?N:void 0,"data-handler-id":M,...k},t.createElement(Jo,{gap:1},s?t.createElement(ge.h,{forwardedAs:"div",role:"button",tabIndex:0,"aria-label":a,noBorder:!0,onKeyDown:P,disabled:i},t.createElement($e.Z,null)):null,t.createElement(_o,{justifyContent:"space-between"},o)),l&&t.createElement(S.x,{paddingLeft:4},l)))},Li=()=>t.createElement(S.x,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,hasRadius:!0,borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",background:"primary100",height:`calc(100% - ${Xe}px)`});rn.defaultProps={ariaDescribedBy:"",canDrag:!1,displayValue:"",disabled:!1,endAction:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,style:void 0,status:void 0,updatePositionOfRelation:void 0},rn.propTypes={ariaDescribedBy:n().string,canDrag:n().bool,children:n().node.isRequired,displayValue:n().string,disabled:n().bool,endAction:n().node,iconButtonAriaLabel:n().string.isRequired,id:n().number.isRequired,index:n().number.isRequired,name:n().string.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,status:n().string,style:n().shape({height:n().number,left:n().number,position:n().string,right:n().number,width:n().string}),updatePositionOfRelation:n().func};var xi=f(8748),Pi=f(23620),wi=f(54574),Fi=f(19270),er=f(39785),Je=f(63237),Si=f(63428),Ai=f(96404),Ft=f(84495),tr=f(30815);const sn=({children:e,loadMore:o,search:r,totalNumberOfRelations:s,size:i,...l})=>t.createElement(t.Fragment,null,t.createElement(w.k,{paddingBottom:s>0?3:0,gap:2,justifyContent:"space-between",alignItems:"end",wrap:"wrap"},t.createElement(w.k,{direction:"column",alignItems:"stretch",basis:i<=6?"100%":"70%",gap:1,...l},r),o),e);sn.defaultProps={search:void 0,loadMore:void 0,totalNumberOfRelations:0},sn.propTypes={children:n().node.isRequired,search:n().node,loadMore:n().node,size:n().number.isRequired,totalNumberOfRelations:n().number};const Oi=(0,q.ZP)(S.x)`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({overflowDirection:e})=>e==="top-bottom"||e==="top"?1:0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({overflowDirection:e})=>e==="top-bottom"||e==="bottom"?1:0};
    transition: opacity 0.2s ease-in-out;
  }
`,an=({children:e,overflow:o,...r})=>t.createElement(Oi,{overflowDirection:o,...r},e);an.defaultProps={overflow:""},an.propTypes={children:n().node.isRequired,overflow:n().oneOf(["top-bottom","bottom","top",""])};var $i=f(5079);const Zi=q.ZP.div`
  flex-shrink: 0;
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  margin-right: ${({theme:e})=>e.spaces[2]};
  background-color: ${({theme:e,isDraft:o})=>e.colors[o?"secondary600":"success600"]};
  border-radius: 50%;
`,nr=e=>{const{formatMessage:o}=(0,Q.Z)(),r=$i.c.Option,{publicationState:s,mainField:i,id:l}=e.data;if(s){const a=s==="draft",c={id:R("components.Select.draft-info-title"),defaultMessage:"State: Draft"},u={id:R("components.Select.publish-info-title"),defaultMessage:"State: Published"},d=o(a?c:u);return t.createElement(r,{...e},t.createElement(w.k,null,t.createElement(Zi,{title:d,isDraft:a}),t.createElement(G.Z,{ellipsis:!0},i??l)))}return t.createElement(r,{...e},i??l)};nr.propTypes={isFocused:n().bool.isRequired,data:n().shape({id:n().number.isRequired,isDraft:n().bool,mainField:n().string,publicationState:n().oneOfType([n().string,n().bool])}).isRequired};var le=f(86706);const or=e=>e["content-manager_editViewLayoutManager"].currentLayout,Ze=()=>{const e=(0,le.v9)(or),o=(0,t.useCallback)(r=>e?.components?.[r]??{},[e]);return{...e,getComponentLayout:o}};var Re=f(52861);const rr=(e,o)=>o.find(r=>r.uid===e),qi=(e,o)=>{const r=Ni(e,o),s=sr(r.contentType,o),i=ji(r.contentType,r.components);return J()(r,["contentType","layouts","edit"],s),J()(r,["contentType","layouts","list"],i),Object.keys(r.components).forEach(l=>{const a=sr(r.components[l],o);J()(r,["components",l,"layouts","edit"],a)}),r},Ni=(e,o)=>{const r=Yo(De()(e),o,"contentType"),{components:s,contentType:i}=r,l=a=>Object.keys(a.metadatas).reduce((c,u)=>{const d=I()(a,["attributes",u],{});let m=a.metadatas[u];if(d.type==="relation"){const g=rr(d.targetModel,o),p=m.edit.mainField,y={name:p,schema:I()(g,["attributes",p])};m={list:{...m.list,mainField:y},edit:{...m.edit,mainField:y}}}return c[u]=m,c},{});return J()(r,["contentType","metadatas"],l(i)),Object.keys(s).forEach(a=>{const c=s[a],u=l(c);J()(r,["components",a,"metadatas"],u)}),r},sr=(e,o)=>e.layouts.edit.reduce((r,s)=>{const i=s.map(l=>{const a=I()(e,["attributes",l.name],{}),c={...l,fieldSchema:a,metadatas:I()(e,["metadatas",l.name,"edit"],{})};if(a.type==="relation"){const d=rr(a.targetModel,o).pluginOptions||{};J()(c,"targetModelPluginOptions",d),J()(c,"queryInfos",{shouldDisplayRelationLink:Bi(e,l.name,o)})}return c});return r.push(i),r},[]),ji=(e,o)=>e.layouts.list.reduce((s,i)=>{const l=I()(e,["attributes",i],{}),a=I()(e,["metadatas",i,"list"],{}),c=l.type;if(c==="relation")return s.push({key:`__${i}_key__`,name:i,fieldSchema:l,metadatas:a}),s;if(c==="component"){const u=o[l.component],d=u.settings.mainField,m=u.attributes[d];return s.push({key:`__${i}_key__`,name:i,fieldSchema:l,metadatas:{...a,mainField:{...m,name:d}}}),s}return s.push({key:`__${i}_key__`,name:i,fieldSchema:l,metadatas:a}),s},[]),Bi=(e,o,r)=>{const s=I()(e,["attributes",o,"targetModel"],"");return Wi(r).includes(s)},Wi=e=>e.filter(o=>o.isDisplayed).map(({uid:o})=>o),ir=qi;var St=f(18172);const zi={error:null,isLoading:!0,layout:{},layouts:{}},Vi=(e,o)=>(0,St.ZP)(e,r=>{switch(o.type){case"GET_DATA":{r.isLoading=!0,r.error=null,r.layout={};break}case"GET_DATA_SUCCEEDED":{const s=o.data.contentType.uid;r.layout=o.data,r.layouts[s]=o.data,r.isLoading=!1;break}case"GET_DATA_ERROR":{r.isLoading=!1,r.error=o.error;break}case"SET_LAYOUT_FROM_STATE":{r.error=null,r.layout=e.layouts[o.uid];break}case"UPDATE_LAYOUT":{const s=e.layout;r.layout={...s,contentType:{uid:s.contentType.uid,...o.newLayout.contentType}},r.layouts[s.contentType.uid]={...s,contentType:{uid:s.contentType.uid,...o.newLayout.contentType}};break}default:return r}});var _e=f(20573),Ui=f(14506);const et=()=>e=>e["content-manager_app"]||Ui.E,Zp=()=>createSelector(et(),e=>e),qp=()=>createSelector(et(),e=>e.models),Hi=()=>(0,_e.P1)(et(),e=>({collectionTypeLinks:e.collectionTypeLinks,singleTypeLinks:e.singleTypeLinks})),ln=()=>(0,_e.P1)(et(),({components:e,models:o})=>({schemas:[...e,...o]})),ar=(0,_e.P1)(et(),e=>e.fieldSizes),Np=null,lr=e=>{const[{error:o,isLoading:r,layout:s,layouts:i},l]=(0,t.useReducer)(Vi,zi),a=(0,t.useMemo)(ln,[]),{schemas:c}=(0,le.v9)(p=>a(p),le.wU),u=(0,t.useRef)(!0),{get:d}=(0,h.kY)(),m=(0,t.useCallback)(async(p,y)=>{if(i[p]){l({type:"SET_LAYOUT_FROM_STATE",uid:p});return}l({type:"GET_DATA"});try{const b=de(`content-types/${p}/configuration`),{data:{data:C}}=await d(b,{cancelToken:y.token});l({type:"GET_DATA_SUCCEEDED",data:ir(C,c)})}catch(b){if(Re.default.isCancel(b))return;u.current&&console.error(b),u.current&&l({type:"GET_DATA_ERROR",error:b})}},[i,c,d]);(0,t.useEffect)(()=>()=>{u.current=!1},[]),(0,t.useEffect)(()=>{const y=Re.default.CancelToken.source();return m(e,y),()=>{y.cancel("Operation canceled by the user.")}},[e,m]);const g=(0,t.useCallback)(p=>{l({type:"UPDATE_LAYOUT",newLayout:ir(p,c)})},[c]);return{error:o,isLoading:r,layout:s,updateLayout:g}},Gi=e=>e["content-manager_app"].collectionTypeLinks;var Ae=f(80129),Qi=f(13218),cr=f.n(Qi);const dr=(e,o)=>Object.keys(e).reduce((r,s)=>{const i=e[s],l=I()(o,[s],i);return cr()(i)?{...r,[s]:dr(i,l)}:(r[s]=l,r)},{}),Ki=(e,o,r)=>{const s=e.find(({to:m})=>m.includes(o));if(!s)return"/";const{to:i,search:l}=s,a=(0,Ae.parse)(l),c=(0,Ae.parse)(r.substring(1)),u=dr(a,c);return`${i}?${(0,Ae.stringify)(u,{encode:!1})}`},ur=e=>{const[{rawQuery:o}]=(0,h.Kx)(),r=(0,le.v9)(Gi);return Ki(r,e,o)},Ue=()=>(0,t.useContext)($o),mr=()=>{const{search:e}=(0,ae.TH)(),o=e?(0,Ae.parse)(e.substring(1)):{};return o.plugins?(0,Ae.stringify)({plugins:o.plugins},{encode:!1}):""};var pr=f(80015);const Yi=(e,o,r)=>({type:pr.m,permissions:e,__meta__:{plugins:o,containerName:r}}),Xi=()=>({type:pr.Q}),Ji=e=>e["content-manager_rbacManager"].permissions,_i=e=>e.rbacProvider.collectionTypesRelatedPermissions,gr=(e,o,r="listView")=>{const s=(0,le.v9)(_i),i=(0,le.v9)(Ji),l=(0,le.I0)(),a=s[o];return(0,t.useEffect)(()=>a?(l(Yi(a,e?e.plugins:null,r)),()=>{l(Xi())}):()=>{},[a,l,e,r]),i},Gp=(0,t.createContext)(),Qp=null,Kp=()=>useContext(WysiwygContext),Yp=null,fr=e=>{const o=(0,t.useRef)();return(0,t.useEffect)(()=>{o.current=e},[e]),o.current},hr=(0,q.ZP)(Pi.r)`
  display: block;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`,yr=q.ZP.button`
  svg path {
    fill: ${({theme:e,disabled:o})=>o?e.colors.neutral600:e.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({theme:e,disabled:o})=>!o&&e.colors.neutral600};
  }
`,cn=({canReorder:e,description:o,disabled:r,error:s,iconButtonAriaLabel:i,id:l,name:a,numberOfRelationsToDisplay:c,label:u,labelAction:d,labelLoadMore:m,labelDisconnectRelation:g,listAriaDescription:p,liveText:y,loadingMessage:b,onCancel:C,onDropItem:k,onGrabItem:M,noRelationsMessage:E,onRelationConnect:P,onRelationLoadMore:F,onRelationDisconnect:T,onRelationReorder:D,onSearchNextPage:x,onSearch:N,placeholder:z,publicationStateTranslations:$,required:H,relations:j,searchResults:Y,size:B})=>{const[X,Z]=(0,t.useState)(null),[W,v]=(0,t.useState)(""),A=(0,t.useRef)(),U=(0,t.useRef)(),{data:K}=Y,L=j.data,O=L.length??0,oe=(0,t.useMemo)(()=>O>c?Math.min(O,c)*(wt+Xe)+wt/2:Math.min(O,c)*(wt+Xe),[O,c]),ee=!!m&&j.hasNextPage,re=(0,t.useMemo)(()=>K.flat().filter(Boolean).map(te=>({...te,value:te.id,label:te.mainField})),[K]);(0,t.useEffect)(()=>{if(O<=c)return v("");const te=Le=>{const Fo=Le.target.parentNode.scrollHeight,We=Le.target.scrollHeight-Le.target.scrollTop;return Le.target.scrollTop===0?v("bottom"):v(We===Fo?"top":"top-bottom")},pe=U?.current;return!j.isLoading&&L.length>0&&pe&&U.current.addEventListener("scroll",te),()=>{pe&&pe.removeEventListener("scroll",te)}},[j,L,c,O]);const[V,se]=(0,t.useState)(!1),be=(0,t.useRef)(),Oe=(0,t.useRef)([]);(0,t.useEffect)(()=>(re.length>0&&Oe.current.length===0&&se(te=>(te&&(be.current=setTimeout(()=>{se(!0)},10)),!1)),()=>{Oe.current=re||[]}),[re]),(0,t.useEffect)(()=>()=>{be.current&&clearTimeout(be.current)},[]);const Ct=()=>{se(!1)},Rt=()=>{se(!0),N()},vt=(te,pe)=>{D&&te>=0&&te<L.length&&D(pe,te)},ve=fr(L.length),Ie=(0,t.useRef)(),Tt=()=>{Ie.current="loadMore",F()};(0,t.useEffect)(()=>{Ie.current==="onChange"&&L.length!==ve?A.current.scrollToItem(L.length,"end"):Ie.current==="loadMore"&&L.length!==ve&&A.current.scrollToItem(0,"start"),Ie.current=void 0},[ve,L]);const Be=`${a}-item-instructions`;return t.createElement(wi.g,{error:s,name:a,hint:o,id:l,required:H},t.createElement(sn,{totalNumberOfRelations:O,size:B,search:t.createElement(t.Fragment,null,t.createElement(Fi.Q,{action:d},u),t.createElement(h.JV,{menuPosition:"absolute",menuPlacement:"auto",components:{Option:nr},options:re,isDisabled:r,isLoading:Y.isLoading,error:s,inputId:l,isSearchable:!0,isClear:!0,loadingMessage:()=>b,onChange:te=>{Z(null),P(te),Ie.current="onChange"},onInputChange:te=>{Z(te),N(te)},onMenuClose:Ct,onMenuOpen:Rt,menuIsOpen:V,noOptionsMessage:()=>E,onMenuScrollToBottom:()=>{Y.hasNextPage&&x()},placeholder:z,name:a,value:X})),loadMore:ee&&t.createElement(er.A,{disabled:j.isLoading||j.isFetchingNextPage,onClick:Tt,loading:j.isLoading||j.isFetchingNextPage,startIcon:t.createElement(tr.Z,null)},m)},L.length>0&&t.createElement(an,{overflow:W},t.createElement(Je.T,{id:Be},p),t.createElement(Je.T,{"aria-live":"assertive"},y),t.createElement(xi.t7,{height:oe,ref:A,outerRef:U,itemCount:O,itemSize:wt+Xe,itemData:{name:a,ariaDescribedBy:Be,canDrag:e,disabled:r,handleCancel:C,handleDropItem:k,handleGrabItem:M,iconButtonAriaLabel:i,labelDisconnectRelation:g,onRelationDisconnect:T,publicationStateTranslations:$,relations:L,updatePositionOfRelation:vt},itemKey:te=>`${L[te].mainField}_${L[te].id}`,innerElementType:"ol"},dn)),(o||s)&&t.createElement(S.x,{paddingTop:2},t.createElement(Si.J,null),t.createElement(Ai.c,null))))},ea=n().shape({data:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),hasNextPage:n().bool,isFetchingNextPage:n().bool.isRequired,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired}),ta=n().shape({data:n().arrayOf(n().shape({id:n().number.isRequired,href:n().string,mainField:n().oneOfType([n().string,n().number]),publicationState:n().oneOfType([n().string,n().bool])})),hasNextPage:n().bool,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired});cn.defaultProps={canReorder:!1,description:void 0,disabled:!1,error:void 0,labelAction:null,labelLoadMore:null,liveText:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,required:!1,relations:{data:[]},searchResults:{data:[]}},cn.propTypes={error:n().string,canReorder:n().bool,description:n().string,disabled:n().bool,iconButtonAriaLabel:n().string.isRequired,id:n().string.isRequired,label:n().string.isRequired,labelAction:n().element,labelLoadMore:n().string,labelDisconnectRelation:n().string.isRequired,listAriaDescription:n().string.isRequired,liveText:n().string,loadingMessage:n().string.isRequired,name:n().string.isRequired,noRelationsMessage:n().string.isRequired,numberOfRelationsToDisplay:n().number.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,onRelationConnect:n().func.isRequired,onRelationDisconnect:n().func.isRequired,onRelationLoadMore:n().func.isRequired,onRelationReorder:n().func.isRequired,onSearch:n().func.isRequired,onSearchNextPage:n().func.isRequired,placeholder:n().string.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,required:n().bool,searchResults:ta,size:n().number.isRequired,relations:ea};const dn=({data:e,index:o,style:r})=>{const{ariaDescribedBy:s,canDrag:i,disabled:l,handleCancel:a,handleDropItem:c,handleGrabItem:u,iconButtonAriaLabel:d,name:m,labelDisconnectRelation:g,onRelationDisconnect:p,publicationStateTranslations:y,relations:b,updatePositionOfRelation:C}=e,{publicationState:k,href:M,mainField:E,id:P}=b[o],F=k==="draft"?"secondary":"success";return t.createElement(rn,{ariaDescribedBy:s,canDrag:i,disabled:l,displayValue:String(E??P),iconButtonAriaLabel:d,id:P,index:o,name:m,endAction:t.createElement(yr,{"data-testid":`remove-relation-${P}`,disabled:l,type:"button",onClick:()=>p(b[o]),"aria-label":g},t.createElement(Wo.J,{width:"12px",as:kt.Z})),onCancel:a,onDropItem:c,onGrabItem:u,status:k||void 0,style:{...r,bottom:r.bottom??0+Xe,height:r.height??0-Xe},updatePositionOfRelation:C},t.createElement(S.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},t.createElement(Ft.u,{description:E??`${P}`},M?t.createElement(hr,{to:M},E??P):t.createElement(G.Z,{textColor:l?"neutral600":"primary600",ellipsis:!0},E??P))),k&&t.createElement(en.q,{variant:F,showBullet:!1,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${F}700`},y[k])))};dn.defaultProps={data:{}},dn.propTypes={data:n().shape({ariaDescribedBy:n().string.isRequired,canDrag:n().bool.isRequired,disabled:n().bool.isRequired,handleCancel:n().func,handleDropItem:n().func,handleGrabItem:n().func,iconButtonAriaLabel:n().string.isRequired,labelDisconnectRelation:n().string.isRequired,name:n().string.isRequired,onRelationDisconnect:n().func.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,relations:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),updatePositionOfRelation:n().func.isRequired}),index:n().number.isRequired,style:n().object.isRequired};const na=cn,br=({status:e,displayedValue:o,width:r})=>{const{formatMessage:s}=(0,Q.Z)(),i={[Ve.DRAFT]:s({id:R("relation.publicationState.draft"),defaultMessage:"Draft"}),[Ve.PUBLISHED]:s({id:R("relation.publicationState.published"),defaultMessage:"Published"})},l=e===Ve.DRAFT?"secondary":"success";return t.createElement(S.x,{style:{width:r}},t.createElement(w.k,{paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:4,hasRadius:!0,borderSize:1,background:"neutral0",borderColor:"neutral200",justifyContent:"space-between"},t.createElement(Jo,{gap:1},t.createElement(ge.h,{noBorder:!0},t.createElement($e.Z,null)),t.createElement(_o,{maxWidth:"100%",justifyContent:"space-between"},t.createElement(S.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},t.createElement(hr,null,t.createElement(G.Z,{textColor:"primary600",ellipsis:!0},o))),e&&t.createElement(en.q,{variant:l,showBullet:!1,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${l}700`},i[e])))),t.createElement(S.x,{paddingLeft:4},t.createElement(yr,{type:"button"},t.createElement(Wo.J,{width:"12px",as:kt.Z})))))};br.propTypes={status:n().string.isRequired,displayedValue:n().string.isRequired,width:n().number.isRequired};const oa={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function ra(e,o,r){if(!e||!o)return{display:"none"};const{x:s,y:i}=r,l=`translate(${s}px, ${i}px)`;return{transform:l,WebkitTransform:l}}const sa=()=>{const{itemType:e,isDragging:o,item:r,initialOffset:s,currentOffset:i,mouseOffset:l}=(0,ze.useDragLayer)(c=>({item:c.getItem(),itemType:c.getItemType(),initialOffset:c.getInitialSourceClientOffset(),currentOffset:c.getSourceClientOffset(),isDragging:c.isDragging(),mouseOffset:c.getClientOffset()}));if(!o)return null;const[a]=e.split("_");return t.createElement(Zo,null,t.createElement("div",{style:oa},t.createElement("div",{style:ra(s,i,l),className:"col-md-2"},[Ce.EDIT_FIELD,Ce.FIELD].includes(e)&&t.createElement(_t,{labelField:r.labelField}),a===Ce.COMPONENT&&t.createElement(Bo,{displayedValue:r.displayedValue}),a===Ce.DYNAMIC_ZONE&&t.createElement(Bo,{displayedValue:r.displayedValue}),a===Ce.RELATION&&t.createElement(br,{displayedValue:r.displayedValue,status:r.status,width:r.width}))))},Er=(0,t.createContext)();var ia=f(35800);const Cr=(0,t.createContext)();var At=f(80660),Rr=f(15113);const aa=()=>({type:Rr.c}),la=(e,o)=>({type:Rr.O,layout:e,query:o});var ca=f(69590),qe=f.n(ca),tt=f(49066),ke=f(11276),fe=f(74571),da=f(98432),ua=f(47713);const ma=()=>(0,t.useContext)(ua.ux),vr=e=>{const{getAdminInjectedComponents:o}=ma(),[r,s,i]=e.split(".");return o(r,s,i)},Tr=({area:e,...o})=>vr(e).map(s=>t.createElement(s.Component,{key:s.name,...o}));Tr.propTypes={area:n().string.isRequired};const Ot=Tr;function pa(e,o){return r=>{const s=o(r.name);return t.createElement(e,{...r,...s})}}const ga=pa;function fa(e){const{addComponentToDynamicZone:o,createActionAllowedFields:r,isCreatingEntry:s,formErrors:i,modifiedData:l,moveComponentField:a,removeComponentFromDynamicZone:c,readActionAllowedFields:u,updateActionAllowedFields:d}=(0,h.Wq)(),m=(0,t.useMemo)(()=>I()(l,[e],[]).map(y=>({componentUid:y.__component,id:y.id??y.__temp_key__})),[l,e]),g=(0,t.useMemo)(()=>(s?r:d).includes(e),[e,s,r,d]),p=(0,t.useMemo)(()=>(s?[]:u).includes(e),[e,s,u]);return{addComponentToDynamicZone:o,formErrors:i,isCreatingEntry:s,isFieldAllowed:g,isFieldReadable:p,moveComponentField:a,removeComponentFromDynamicZone:c,dynamicDisplayedComponents:m}}const ha=fa;var un=f(48734),mn=f(74756),pn=f(63081),ya=f(84238),ba=f.n(ya);function Ea(e,o){return r=>{const s=o(r);return t.createElement(e,{...r,...s})}}const Ca=Ea;var Ra=f(69572),dt=f.n(Ra);function va({isFromDynamicZone:e,name:o}){const{addNonRepeatableComponentToField:r,createActionAllowedFields:s,isCreatingEntry:i,modifiedData:l,removeComponentFromField:a,readActionAllowedFields:c,updateActionAllowedFields:u,formErrors:d}=(0,h.Wq)(),{contentType:m}=Ze(),g=(0,t.useMemo)(()=>{const E=I()(m,["attributes"],{});return Object.keys(E).filter(F=>I()(E,[F,"type"],"")==="dynamiczone")},[m]),p=(0,t.useMemo)(()=>i?s:u,[i,s,u]),y=I()(l,o,null),b=(0,t.useMemo)(()=>Ko(o),[o]),C=(0,t.useMemo)(()=>e&&i||p.filter(F=>F===b[0]).length>0?!0:p.map(F=>F.split(".")).filter(F=>F.length<b.length?!1:dt()(F,b.length).join(".")===b.join(".")).length>0,[e,i,p,b]),k=(0,t.useMemo)(()=>e||g.includes(b[0])?!0:(i?[]:c).map(F=>F.split(".")).filter(F=>F.length<b.length?!1:dt()(F,b.length).join(".")===b.join(".")).length>0,[e,g,b,i,c]),M=(0,t.useMemo)(()=>i||C?!1:k,[C,k,i]);return{addNonRepeatableComponentToField:r,formErrors:d,hasChildrenAllowedFields:C,hasChildrenReadableFields:k,isCreatingEntry:i,isReadOnly:M,removeComponentFromField:a,componentValue:y}}const Ta=va,Ma=(0,q.ZP)(S.x)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,gn=({intlLabel:e,id:o,labelAction:r,name:s,numberOfEntries:i,showNumberOfEntries:l,required:a})=>{const{formatMessage:c}=(0,Q.Z)(),u=e?.id?c(e):s;return t.createElement(S.x,{paddingBottom:1},t.createElement(w.k,null,t.createElement(G.Z,{textColor:"neutral800",htmlFor:o||s,variant:"pi",fontWeight:"bold",as:"label"},u,l&&t.createElement(t.Fragment,null,"\xA0(",i,")"),a&&t.createElement(G.Z,{textColor:"danger600"},"*")),r&&t.createElement(Ma,{paddingLeft:1},r)))};gn.defaultProps={id:void 0,labelAction:void 0,numberOfEntries:0,required:!1,showNumberOfEntries:!1},gn.propTypes={id:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,numberOfEntries:n().number,required:n().bool,showNumberOfEntries:n().bool};const Da=gn;var Mr=f(99782);const ka=q.ZP.span`
  > svg {
    width: ${(0,h.Q1)(24)};
    height: ${(0,h.Q1)(24)};
    > circle {
      fill: ${({theme:e})=>e.colors.primary200};
    }
    > path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,fn=({error:e,isReadOnly:o,onClick:r})=>{const{formatMessage:s}=(0,Q.Z)();return t.createElement(t.Fragment,null,t.createElement(S.x,{as:"button",background:"neutral100",borderColor:e?"danger600":"neutral200",disabled:o,hasRadius:!0,onClick:r,paddingTop:9,paddingBottom:9,type:"button"},t.createElement(w.k,{direction:"column",gap:2},t.createElement(w.k,{justifyContent:"center",style:{cursor:o?"not-allowed":"inherit"}},t.createElement(ka,null,t.createElement(Mr.Z,null))),t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{textColor:"primary600",variant:"pi",fontWeight:"bold"},s({id:R("components.empty-repeatable"),defaultMessage:"No entry yet. Click on the button below to add one."}))))),e?.id&&t.createElement(G.Z,{textColor:"danger600",variant:"pi"},s(e,{...e.values})))};fn.defaultProps={error:void 0,isReadOnly:!1},fn.propTypes={error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),isReadOnly:n().bool,onClick:n().func.isRequired};const Dr=fn;var Ia=f(44823),hn=f.n(Ia),ng=f(39961),La=f(9980),xa=f.n(La),yn=f(77869),Pa=f(79411),wa=f.n(Pa),Fa=f(40591),kr=f.n(Fa),Sa=f(30645),Aa=f.n(Sa),Oa=f(46635),$a=f.n(Oa),Za=f(52384),qa=f.n(Za),Na=f(44266),ja=f.n(Na),Ba=f(94574),Wa=f.n(Ba),za=f(40700),Va=f.n(za),Ua=f(97003),Ha=f.n(Ua);(async()=>{await f.e(7347).then(f.bind(f,24840))})();const nt=new(xa())({html:!0,xhtmlOut:!1,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight(e,o){if(o&&o!=="auto"&&(0,yn.getLanguage)(o))return'<pre class="hljs language-'+nt.utils.escapeHtml(o.toLowerCase())+'"><code>'+(0,yn.highlight)(o,e,!0).value+"</code></pre>";if(o==="auto"){const r=(0,yn.highlightAuto)(e);return'<pre class="hljs language-'+nt.utils.escapeHtml(r.language)+'"><code>'+r.value+"</code></pre>"}return'<pre class="hljs"><code>'+nt.utils.escapeHtml(e)+"</code></pre>"}}).use(wa()).use(kr(),"warning").use(kr(),"tip").use(Aa()).use($a()).use(qa()).use(ja()).use(Wa()).use(Va()).use(Ha());nt.renderer.rules.footnote_ref=(e,o,r,s,i)=>'<sup class="footnote-ref"><span>'+i.rules.footnote_caption(e,o,r,s,i)+"</span></sup>",nt.renderer.rules.footnote_anchor=()=>' <span class="footnote-backref">\u21A9\uFE0E</span>';const Ga=nt;var Qa=f(91036),Ir=f.n(Qa);const Ka={...Ir().defaults,allowedTags:!1,allowedAttributes:{"*":["href","align","alt","center","width","height","type","controls","target"],img:["src","alt"],source:["src","type"]}},Ya=e=>Ir()(e,Ka),Xa=q.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
  font-size: ${14/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral0};
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: ${({theme:e})=>e.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({theme:e})=>e.spaces[2]};
    margin-block-end: ${({theme:e})=>e.spaces[2]};
  }

  p {
    margin-bottom: ${({theme:e})=>e.spaces[2]};
  }

  h1 {
    font-size: ${36/16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30/16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24/16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20/16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({theme:e})=>e.spaces[8]};
    margin-bottom: ${({theme:e})=>e.spaces[7]};
    font-size: ${14/16}rem;
    font-weight: 400;
    border-left: 4px solid ${({theme:e})=>e.colors.neutral150};
    font-style: italic;
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({theme:e})=>e.colors.neutral150};

      th {
        padding: ${({theme:e})=>e.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
    }
    th,
    td {
      padding: ${({theme:e})=>e.spaces[4]};
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: ${14/16}rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({theme:e})=>e.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({theme:e})=>e.spaces[4]};
    margin-block-end: ${({theme:e})=>e.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:e})=>e.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({theme:e})=>e.spaces[4]};
    margin-block-end: ${({theme:e})=>e.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:e})=>e.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`,bn=({data:e})=>{const o=(0,t.useMemo)(()=>Ya(Ga.render(e.replaceAll("\\n",`
`)||"")),[e]);return t.createElement(Xa,null,t.createElement("div",{dangerouslySetInnerHTML:{__html:o}}))};bn.defaultProps={data:""},bn.propTypes={data:n().string};const Lr=(0,t.memo)(bn),Ja=q.ZP.div`
  cursor: ${({disabled:e})=>e?"not-allowed !important":"auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({theme:e})=>e.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14/16}rem;
    height: ${({isExpandMode:e})=>e?"100%":"290px"};
    color: ${({theme:e})=>e.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({theme:e})=>`${e.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({theme:e})=>`${e.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({theme:e})=>`${e.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({theme:e})=>e.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({theme:e})=>e.colors.neutral800} !important;
  }
`;var En=f(21817);const Ee=(0,q.ZP)(ge.h)`
  padding: ${({theme:e})=>e.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,_a=(0,q.ZP)(Ee)`
  svg {
    width: ${8/16}rem;
    height: ${8/16}rem;
  }
`,xr=(0,q.ZP)(ge.o)`
  margin-left: ${({theme:e})=>e.spaces[4]};
`,Pr=(0,q.ZP)(ge.h)`
  margin: ${({theme:e})=>`0 ${e.spaces[2]}`};
  padding: ${({theme:e})=>e.spaces[2]};

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,el=(0,q.ZP)(ge.o)`
  margin-right: ${({theme:e})=>`${e.spaces[2]}`};
`,tl=q.ZP.div`
  position: relative;
  height: calc(100% - 48px);
`,nl=(0,q.ZP)(En.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:e})=>`${e.spaces[2]}`};
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`;var $t=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,ol=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,rl=/[*+-]\s/;function sl(e){if(e.getOption("disableInput"))return hn().Pass;for(var o=e.listSelections(),r=[],s=0;s<o.length;s++){var i=o[s].head,l=e.getStateAfter(i.line),a=l.list!==!1,c=l.quote!==0,u=e.getLine(i.line),d=$t.exec(u),m=/^\s*$/.test(u.slice(0,i.ch));if(!o[s].empty()||!a&&!c||!d||m){e.execCommand("newlineAndIndent");return}if(ol.test(u)){var g=c&&/>\s*$/.test(u),p=!/>\s*$/.test(u);(g||p)&&e.replaceRange("",{line:i.line,ch:0},{line:i.line,ch:i.ch+1}),r[s]=`
`}else{var y=d[1],b=d[5],C=!(rl.test(d[2])||d[2].indexOf(">")>=0),k=C?parseInt(d[3],10)+1+d[4]:d[2].replace("x"," ");r[s]=`
`+y+k+b,C&&il(e,i)}}e.replaceSelections(r)}function il(e,o){var r=o.line,s=0,i=0,l=$t.exec(e.getLine(r)),a=l[1];do{s+=1;var c=r+s,u=e.getLine(c),d=$t.exec(u);if(d){var m=d[1],g=parseInt(l[3],10)+s-i,p=parseInt(d[3],10),y=p;if(a===m&&!isNaN(p))g===p&&(y=p+1),g>p&&(y=g+1),e.replaceRange(u.replace($t,m+y+d[4]+d[5]),{line:c,ch:0},{line:c,ch:u.length});else{if(a.length>m.length||a.length<m.length&&s===1)return;i+=1}}}while(d)}const al=sl,Cn=({disabled:e,editorRef:o,error:r,isPreviewMode:s,isExpandMode:i,name:l,onChange:a,placeholder:c,textareaRef:u,value:d})=>{const m=(0,t.useRef)(a);return(0,t.useEffect)(()=>{o.current=hn().fromTextArea(u.current,{lineWrapping:!0,extraKeys:{Enter:"newlineAndIndentContinueMarkdownList",Tab:!1,"Shift-Tab":!1},readOnly:!1,smartIndent:!1,placeholder:c,spellcheck:!0,inputStyle:"contenteditable"}),hn().commands.newlineAndIndentContinueMarkdownList=al,o.current.on("change",g=>{m.current({target:{name:l,value:g.getValue(),type:"wysiwyg"}})})},[o,u,l,c]),(0,t.useEffect)(()=>{d&&!o.current.hasFocus()&&o.current.setValue(d)},[o,d]),(0,t.useEffect)(()=>{s||e?o.current.setOption("readOnly","nocursor"):o.current.setOption("readOnly",!1)},[e,s,o]),(0,t.useEffect)(()=>{r?o.current.setOption("screenReaderLabel",r):o.current.setOption("screenReaderLabel","Editor")},[o,r]),t.createElement(tl,null,t.createElement(Ja,{isExpandMode:i,disabled:e||s},t.createElement("textarea",{ref:u})),s&&t.createElement(Lr,{data:d}))};Cn.defaultProps={disabled:!1,error:void 0,isPreviewMode:!1,isExpandMode:!1,placeholder:"",value:""},Cn.propTypes={disabled:n().bool,editorRef:n().shape({current:n().any}).isRequired,error:n().string,isPreviewMode:n().bool,isExpandMode:n().bool,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().string,textareaRef:n().shape({current:n().any}).isRequired,value:n().string};const ll=Cn;var Pe=f(48302),he=f(82562),ue=f(29728),cl=f(26048),wr=f(25896),Fr=f(67628),Sr=f(54244),Ar=f(71414),Or=f(49901),dl=f(42164),ul=f(66567),ml=f(86780),pl=f(82752),gl=f(36606),fl=f(63851),hl=f(95629);const Rn=({disabled:e,editorRef:o,isExpandMode:r,isPreviewMode:s,onActionClick:i,onToggleMediaLib:l,onTogglePreviewMode:a})=>{const[c,u]=(0,t.useState)(!1),{formatMessage:d}=(0,Q.Z)(),m=d({id:"components.Wysiwyg.selectOptions.title",defaultMessage:"Add a title"}),g=(0,t.useRef)(),p=()=>{u(y=>!y)};return e||s?t.createElement(S.x,{padding:2,background:"neutral100"},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(w.k,null,t.createElement(Pe.P,{disabled:!0,id:"selectTitle",placeholder:m,size:"S","aria-label":m},t.createElement(he.W,{value:"h1"},"h1"),t.createElement(he.W,{value:"h2"},"h2"),t.createElement(he.W,{value:"h3"},"h3"),t.createElement(he.W,{value:"h4"},"h4"),t.createElement(he.W,{value:"h5"},"h5"),t.createElement(he.W,{value:"h6"},"h6")),t.createElement(xr,null,t.createElement(Ee,{disabled:!0,id:"Bold",label:"Bold",name:"Bold",icon:t.createElement(Fr.Z,null)}),t.createElement(Ee,{disabled:!0,id:"Italic",label:"Italic",name:"Italic",icon:t.createElement(Sr.Z,null)}),t.createElement(Ee,{disabled:!0,id:"Underline",label:"Underline",name:"Underline",icon:t.createElement(Ar.Z,null)})),t.createElement(Pr,{disabled:!0,id:"more",label:"More",icon:t.createElement(Or.Z,null)})),!r&&t.createElement(ue.z,{onClick:a,variant:"tertiary",id:"preview"},d({id:"components.Wysiwyg.ToggleMode.markdown-mode",defaultMessage:"Markdown mode"})))):t.createElement(S.x,{padding:2,background:"neutral100"},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(w.k,null,t.createElement(Pe.P,{id:"selectTitle",placeholder:m,size:"S",onChange:y=>i(y,o)},t.createElement(he.W,{value:"h1"},"h1"),t.createElement(he.W,{value:"h2"},"h2"),t.createElement(he.W,{value:"h3"},"h3"),t.createElement(he.W,{value:"h4"},"h4"),t.createElement(he.W,{value:"h5"},"h5"),t.createElement(he.W,{value:"h6"},"h6")),t.createElement(xr,null,t.createElement(Ee,{onClick:()=>i("Bold",o),id:"Bold",label:"Bold",name:"Bold",icon:t.createElement(Fr.Z,null)}),t.createElement(Ee,{onClick:()=>i("Italic",o),id:"Italic",label:"Italic",name:"Italic",icon:t.createElement(Sr.Z,null)}),t.createElement(Ee,{onClick:()=>i("Underline",o),id:"Underline",label:"Underline",name:"Underline",icon:t.createElement(Ar.Z,null)})),t.createElement(Pr,{ref:g,onClick:p,id:"more",label:"More",icon:t.createElement(Or.Z,null)}),c&&t.createElement(cl.J2,{centered:!0,source:g,spacing:4,id:"popover"},t.createElement(wr.i,{onEscape:p,restoreFocus:!1},t.createElement(w.k,null,t.createElement(el,null,t.createElement(Ee,{onClick:()=>i("Strikethrough",o,p),id:"Strikethrough",label:"Strikethrough",name:"Strikethrough",icon:t.createElement(dl.Z,null)}),t.createElement(Ee,{onClick:()=>i("BulletList",o,p),id:"BulletList",label:"BulletList",name:"BulletList",icon:t.createElement(ul.Z,null)}),t.createElement(Ee,{onClick:()=>i("NumberList",o,p),id:"NumberList",label:"NumberList",name:"NumberList",icon:t.createElement(ml.Z,null)})),t.createElement(ge.o,null,t.createElement(Ee,{onClick:()=>i("Code",o,p),id:"Code",label:"Code",name:"Code",icon:t.createElement(pl.Z,null)}),t.createElement(Ee,{onClick:()=>{p(),l()},id:"Image",label:"Image",name:"Image",icon:t.createElement(gl.Z,null)}),t.createElement(_a,{onClick:()=>i("Link",o,p),id:"Link",label:"Link",name:"Link",icon:t.createElement(fl.Z,null)}),t.createElement(Ee,{onClick:()=>i("Quote",o,p),id:"Quote",label:"Quote",name:"Quote",icon:t.createElement(hl.Z,null)})))))),a&&t.createElement(ue.z,{onClick:a,variant:"tertiary",id:"preview"},d({id:"components.Wysiwyg.ToggleMode.preview-mode",defaultMessage:"Preview mode"}))))};Rn.defaultProps={isPreviewMode:!1,onActionClick(){},onToggleMediaLib(){},onTogglePreviewMode:void 0},Rn.propTypes={disabled:n().bool.isRequired,editorRef:n().shape({current:n().any}).isRequired,isExpandMode:n().bool.isRequired,isPreviewMode:n().bool,onActionClick:n().func,onToggleMediaLib:n().func,onTogglePreviewMode:n().func};const yl=Rn;var bl=f(19954);const vn=({onToggleExpand:e})=>{const{formatMessage:o}=(0,Q.Z)();return t.createElement(S.x,{padding:2,background:"neutral100",hasRadius:!0},t.createElement(w.k,{justifyContent:"flex-end",alignItems:"flex-end"},t.createElement(nl,{id:"expand",onClick:e},t.createElement(G.Z,null,o({id:"components.WysiwygBottomControls.fullscreen",defaultMessage:"Expand"})),t.createElement(bl.Z,null))))};vn.defaultProps={onToggleExpand(){}},vn.propTypes={onToggleExpand:n().func};const El=vn,Tn=({id:e,error:o,name:r,hint:s})=>s.length===0||o?null:t.createElement(G.Z,{as:"p",variant:"pi",id:`${e||r}-hint`,textColor:"neutral600"},s);Tn.defaultProps={id:void 0,error:void 0,hint:""},Tn.propTypes={hint:n().oneOfType([n().string,n().array]),error:n().string,id:n().string,name:n().string.isRequired};const Cl=Tn,$r=(e,o)=>{let r;switch(e){case"Strikethrough":r=`~~${o}~~`;break;case"Bold":r=`**${o}**`;break;case"Italic":r=`_${o}_`;break;case"Underline":r=`<u>${o}</u>`;break;case"Code":r=`\`\`\`
${o}
\`\`\``;break;case"Link":r=`[${o}](link)`;break;case"Quote":r=`>${o}`;break;default:r=o}return r},Zr=e=>{let o,r={start:e.length,end:0};switch(e){case"Strikethrough":o=`~~${e}~~`,r.end=2;break;case"Bold":o=`**${e}**`,r.end=2;break;case"Italic":o=`_${e}_`,r.end=1;break;case"alt":o=`[${e}]()`,r.end=3;break;case"Underline":o=`<u>${e}</u>`,r.end=4;break;case"Code":o=`\`\`\`
${e}
\`\`\``,r.end=3;break;case"Link":o=`[${e}](link)`,r.end=7;break;case"Quote":o=`>${e}`,r.end=0;break;default:o=""}return{editedText:o,selection:r}},qr=e=>{let o;switch(e){case"BulletList":o="- ";break;case"NumberList":o="1. ";break;case"h1":o="# ";break;case"h2":o="## ";break;case"h3":o="### ";break;case"h4":o="#### ";break;case"h5":o="##### ";break;case"h6":o="###### ";break;default:return""}return o},Nr=(e,o)=>{const r=e.current.getSelection();let s;if(r){const i=$r(o,r);e.current.replaceSelection(i),e.current.focus()}else{s=Zr(o),e.current.replaceSelection(s.editedText),e.current.focus();const{line:i,ch:l}=e.current.getCursor(),a=l-s.selection.end,c=l-s.selection.end-s.selection.start;e.current.setSelection({line:i,ch:c},{line:i,ch:a})}},Rl=(e,o)=>{const r=e.current.getDoc(),s=o==="BulletList"?"- ":"1. ";if(r.somethingSelected()){const i=r.listSelections();let l=null;e.current.operation(function(){i.forEach(function(a){const c=[a.head.line,a.anchor.line].sort();l==null&&(l=r.getLine(c[0]).startsWith(s));for(let u=c[0];u<=c[1];u++)if(l)r.getLine(u).startsWith(s)&&r.replaceRange("",{line:u,ch:0},{line:u,ch:s.length});else{const d=o==="BulletList"?"- ":`${u+1}. `;r.replaceRange(d,{line:u,ch:0})}})})}else{let{line:i}=r.getCursor();const l=qr(o),a=e.current.getLine(i),c=l+a;e.current.setSelection({line:i,ch:0},{line:i,ch:a.length}),e.current.replaceSelection(c)}e.current.focus()},vl=(e,o)=>{let{line:r}=e.current.getCursor();const s=qr(o),i=e.current.getLine(r),l=i.replace(/#{1,6}\s/g,"").trim(),a=s+l;e.current.setSelection({line:r,ch:0},{line:r,ch:i.length}),e.current.replaceSelection(a),setTimeout(()=>{const c=e.current.getLine(r).length;e.current.focus(),e.current.setCursor({line:r,ch:c})},0)},Tl=(e,o)=>{let{line:r,ch:s}=e.current.getCursor();o.forEach((i,l)=>{let a=e.current.getLine(r).length;e.current.setCursor({line:r,ch:a}),(l>0||l===0&&s!==0)&&(a=e.current.getLine(r).length,e.current.setCursor({line:r,ch:a}),r++,e.current.replaceSelection(`
`)),i.mime.includes("image")?e.current.replaceSelection(`![${i.alt}](${i.url})`):e.current.replaceSelection(`[${i.alt}](${i.url})`)}),setTimeout(()=>e.current.focus(),0)},Ml=(e,o,r,s,i)=>{const l=$r(o,i),a=e.current.getRange({line:r+1,ch:0},{line:1/0,ch:1/0});if(e.current.replaceRange("",{line:r+1,ch:0},{line:1/0,ch:1/0}),e.current.replaceSelection(""),e.current.setCursor({line:r,ch:s}),e.current.replaceSelection(`
`),e.current.replaceSelection(l),o==="Code"){let{line:c}=e.current.getCursor();e.current.setCursor({line:c-1,ch:i.length})}e.current.replaceRange(a,{line:r+4,ch:0},{line:1/0,ch:1/0}),e.current.focus()},Dl=(e,o,r,s)=>{const i=Zr(o),l=e.current.getRange({line:r+1,ch:0},{line:1/0,ch:1/0});if(e.current.replaceRange("",{line:r+1,ch:0},{line:1/0,ch:1/0}),e.current.setCursor({line:r,ch:s}),e.current.replaceSelection(`
`),e.current.replaceSelection(i.editedText),o==="Code")r+=2,e.current.setSelection({line:r,ch:0},{line:r,ch:4});else{r+=1;let{ch:a}=e.current.getCursor(),c=a-i.selection.end,u=a-i.selection.end-i.selection.start;e.current.setSelection({line:r,ch:u},{line:r,ch:c})}e.current.replaceRange(l,{line:r+2,ch:0},{line:1/0,ch:1/0}),e.current.focus()},kl=(e,o)=>{const r=e.current.getSelection();let{line:s}=e.current.getCursor(),i=e.current.getLine(s).length;r?Ml(e,o,s,i,r):Dl(e,o,s,i)};var Il=f(44034),Ll=f(5240);const xl=(e,o)=>`${e}${Math.floor(o*255).toString(16).padStart(2,0)}`,Pl=(0,q.ZP)(w.k)`
  background: ${({theme:e})=>xl(e.colors.neutral800,.2)};
`,wl=(0,q.ZP)(S.x)`
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Fl=(0,q.ZP)(En.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:e})=>`${e.spaces[2]}`};

    path {
      fill: ${({theme:e})=>e.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`,Mn=({children:e,isExpandMode:o,error:r,previewContent:s,onCollapse:i})=>{const{formatMessage:l}=(0,Q.Z)();return(0,h.F5)(o),o?t.createElement(Il.h,{role:"dialog","aria-modal":!1},t.createElement(wr.i,{onEscape:i},t.createElement(Pl,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:4,justifyContent:"center",onClick:i},t.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"popupShadow",overflow:"hidden",width:"70%",height:"70%",onClick:a=>a.stopPropagation()},t.createElement(w.k,{height:"100%",alignItems:"flex-start"},t.createElement(wl,{flex:"1",height:"100%"},e),t.createElement(w.k,{alignItems:"start",direction:"column",flex:1,height:"100%",width:"100%"},t.createElement(w.k,{height:(0,h.Q1)(48),background:"neutral100",justifyContent:"flex-end",shrink:0,width:"100%"},t.createElement(Fl,{onClick:i},t.createElement(G.Z,null,l({id:"components.Wysiwyg.collapse",defaultMessage:"Collapse"})),t.createElement(Ll.Z,null))),t.createElement(S.x,{position:"relative",height:"100%",width:"100%"},t.createElement(Lr,{data:s})))))))):t.createElement(S.x,{borderColor:r?"danger600":"neutral200",borderStyle:"solid",borderWidth:"1px",hasRadius:!0},e)};Mn.defaultProps={error:void 0,previewContent:""},Mn.propTypes={children:n().node.isRequired,error:n().string,isExpandMode:n().bool.isRequired,previewContent:n().string,onCollapse:n().func.isRequired};const Sl=(0,q.ZP)(S.x)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Al=(0,q.ZP)(G.Z)`
  line-height: 0;
`,Dn=({hint:e,disabled:o,error:r,intlLabel:s,labelAction:i,name:l,onChange:a,placeholder:c,value:u,required:d})=>{const{formatMessage:m}=(0,Q.Z)(),g=(0,t.useRef)(null),p=(0,t.useRef)(null),[y,b]=(0,t.useState)(!1),[C,k]=(0,t.useState)(!1),[M,E]=(0,t.useState)(!1),{components:P}=(0,h.yX)(),F=P["media-library"],T=()=>k(j=>!j),D=()=>b(j=>!j),x=()=>{b(!1),E(j=>!j)},N=(j,Y,B)=>{switch(j){case"Link":case"Strikethrough":{Nr(Y,j),B();break}case"Code":case"Quote":{kl(Y,j),B();break}case"Bold":case"Italic":case"Underline":{Nr(Y,j);break}case"BulletList":case"NumberList":{Rl(Y,j),B();break}case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":{vl(Y,j);break}default:}},z=j=>{const Y=j.map(B=>({alt:B.alternativeText||B.name,url:(0,h.CR)(B.url),mime:B.mime}));Tl(p,Y),k(!1)},$=c?m({id:c.id,defaultMessage:c.defaultMessage},{...c.values}):"",H=s.id?m({id:s.id,defaultMessage:s.defaultMessage},{...s.values}):l;return t.createElement(t.Fragment,null,t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(w.k,{gap:1},t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800"},H,d&&t.createElement(Al,{textColor:"danger600"},"*")),i&&t.createElement(Sl,{paddingLeft:1},i)),t.createElement(Mn,{isExpandMode:M,error:r,previewContent:u,onCollapse:x},t.createElement(yl,{isExpandMode:M,editorRef:p,isPreviewMode:y,onActionClick:N,onToggleMediaLib:T,onTogglePreviewMode:M?void 0:D,disabled:o}),t.createElement(ll,{disabled:o,isExpandMode:M,editorRef:p,error:r,isPreviewMode:y,name:l,onChange:a,placeholder:$,textareaRef:g,value:u}),!M&&t.createElement(El,{onToggleExpand:x})),t.createElement(Cl,{hint:e,name:l,error:r})),r&&t.createElement(S.x,{paddingTop:1},t.createElement(G.Z,{variant:"pi",textColor:"danger600","data-strapi-field-error":!0},r)),C&&t.createElement(F,{onClose:T,onSelectAssets:z}))};Dn.defaultProps={disabled:!1,error:"",labelAction:void 0,placeholder:null,required:!1,value:"",hint:""},Dn.propTypes={hint:n().oneOfType([n().string,n().array]),disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,value:n().string};const Ol=Dn;var kn=f(16364),$l=f(86783),ut=f(51277),Zl=f(86647),jr=f(9226);const ql=/^[A-Za-z0-9-_.~]*$/;var Nl=f(25752);const jl=(0,q.ZP)(Nl.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Br=(0,q.ZP)(w.k)`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;

    path {
      fill: ${({theme:e,available:o})=>o?e.colors.success600:e.colors.danger600};
    }
  }
`,Bl=q.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Wl=(0,q.ZP)(w.k)`
  animation: ${Bl} 2s infinite linear;
`,In=({attribute:e,contentTypeUID:o,hint:r,disabled:s,error:i,intlLabel:l,labelAction:a,name:c,onChange:u,value:d,placeholder:m,required:g})=>{const{modifiedData:p,initialData:y,layout:b}=(0,h.Wq)(),[C,k]=(0,t.useState)(!1),[M,E]=(0,t.useState)(null),P=(0,jr.Z)(d,300),F=(0,t.useRef)(),T=(0,h.lm)(),{formatAPIError:D}=(0,h.So)(),x=y[c],{formatMessage:N}=(0,Q.Z)(),z=b?.options?.timestamps??0,$=!y[z],H=(0,jr.Z)(p[e.targetField],300),[j,Y]=(0,t.useState)(!1),[B,X]=(0,t.useState)(null),{post:Z}=(0,h.kY)(),W=l.id?N({id:l.id,defaultMessage:l.defaultMessage},{...l.values}):c,v=m?N({id:m.id,defaultMessage:m.defaultMessage},{...m.values}):"";F.current=async(O=!1)=>{k(!0);try{const{data:{data:oe}}=await Z(de("uid/generate"),{contentTypeUID:o,field:c,data:p});u({target:{name:c,value:oe,type:"text"}},O),k(!1)}catch(oe){k(!1),T({type:"warning",message:D(oe)})}};const A=async()=>{if(d){k(!0);try{const{data:O}=await Z(de("uid/check-availability"),{contentTypeUID:o,field:c,value:d?d.trim():""});k(!1),E(O)}catch(O){k(!1),T({type:"warning",message:D(O)})}}};(0,t.useEffect)(()=>{!d&&e.required&&F.current(!0)},[e.required,F,d]),(0,t.useEffect)(()=>{P?.trim().match(ql)&&P!==x&&A(),P||E(null)},[x,P]),(0,t.useEffect)(()=>{let O;return M?.isAvailable&&(O=setTimeout(()=>{E(null)},4e3)),()=>{O&&clearTimeout(O)}},[M]),(0,t.useEffect)(()=>{!j&&$&&H&&p[e.targetField]&&!d&&F.current(!0)},[H,j,$]);const U=()=>{X(N({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}))},K=()=>{X(null)},L=O=>{O.target.value&&$&&Y(!0),u(O)};return t.createElement(kn.o,{disabled:s,error:i,endAction:t.createElement(w.k,{position:"relative",gap:1},M&&!B&&t.createElement(Br,{alignItems:"center",gap:1,justifyContent:"flex-end",available:!!M?.isAvailable,"data-not-here-outer":!0,position:"absolute",pointerEvents:"none",right:6,width:"100px"},M?.isAvailable?t.createElement($l.Z,null):t.createElement(ut.Z,null),t.createElement(G.Z,{textColor:M.isAvailable?"success600":"danger600",variant:"pi"},N(M.isAvailable?{id:"content-manager.components.uid.available",defaultMessage:"Available"}:{id:"content-manager.components.uid.unavailable",defaultMessage:"Unavailable"}))),!s&&t.createElement(t.Fragment,null,B&&t.createElement(Br,{alignItems:"center",justifyContent:"flex-end",gap:1},t.createElement(G.Z,{textColor:"primary600",variant:"pi"},B)),t.createElement(jl,{onClick:()=>F.current(),label:N({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}),onMouseEnter:U,onMouseLeave:K},C?t.createElement(Wl,{"data-testid":"loading-wrapper"},t.createElement(Zl.Z,null)):t.createElement(tr.Z,null)))),hint:r,label:W,labelAction:a,name:c,onChange:L,placeholder:v,value:d||"",required:g})};In.propTypes={attribute:n().shape({targetField:n().string,required:n().bool}).isRequired,contentTypeUID:n().string.isRequired,disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,value:n().string,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,hint:n().oneOfType([n().string,n().array])},In.defaultProps={disabled:!1,error:void 0,labelAction:void 0,placeholder:void 0,value:"",required:!1,hint:""};const zl=In;var Vl=f(78718),Ln=f.n(Vl),He=f(88767);function Ul(e,o){return r=>{const s=o(r);return t.createElement(e,{...r,...s})}}const Hl=Ul;function Gl({componentUid:e,isUserAllowedToEditField:o,isUserAllowedToReadField:r,name:s,queryInfos:i}){const{isCreatingEntry:l,createActionAllowedFields:a,readActionAllowedFields:c,updateActionAllowedFields:u,slug:d,modifiedData:m}=(0,h.Wq)(),g=(0,t.useMemo)(()=>o===!0?!0:(l?a:u).includes(s),[l,a,s,o,u]),p=(0,t.useMemo)(()=>r?!0:(l?[]:c).includes(s),[l,r,s,c]),y=s.split(".");let b;e&&(b=I()(m,y.slice(0,-1))?.id);const C=(0,t.useMemo)(()=>l?null:e?b?de(`relations/${e}/${b}/${y.at(-1)}`):null:de(`relations/${d}/${m.id}/${s.split(".").at(-1)}`),[l,e,d,m.id,s,b,y]),k=(0,t.useMemo)(()=>de(e?`relations/${e}/${s.split(".").at(-1)}`:`relations/${d}/${s.split(".").at(-1)}`),[e,d,s]);return{componentId:b,isComponentRelation:Boolean(e),queryInfos:{...i,endpoints:{search:k,relation:C}},isCreatingEntry:l,isFieldAllowed:g,isFieldReadable:p}}const Ql=Gl;function Kl(e,o){return`${de(`collectionType/${e}/${o??""}`)}`}const xn=(e,{shouldAddLink:o,mainFieldName:r,targetModel:s})=>{const i={...e};return o&&(i.href=Kl(s,i.id)),i.publicationState=!1,i?.publishedAt!==void 0&&(i.publicationState=i.publishedAt?Ve.PUBLISHED:Ve.DRAFT),i.mainField=i[r],i},Yl=(e,{shouldAddLink:o=!1,mainFieldName:r,targetModel:s}={})=>[...e].map(i=>xn(i,{shouldAddLink:o,mainFieldName:r,targetModel:s})),Xl=(e,{mainFieldName:o})=>{const{data:r}=e,{pages:s=[]}=r??{};return{...e,data:s.map(i=>i?.results.map(l=>xn(l,{mainFieldName:o}))).filter(Boolean).flat()}},Jl=(e=[],o=[])=>{const r=e.reduce((i,l)=>o.find(a=>a.id===l.id)?i:[...i,l.id],[]),s=o.reduce((i,l)=>e.find(a=>a.id===l.id)?i:[...i,l.id],[]);return[r,s]},_l=e=>{const o=t.useRef(e);return t.useEffect(()=>{o.current=e}),t.useMemo(()=>(...r)=>o.current?.(...r),[])},ec=(e,{relation:o,search:r})=>{const[s,i]=(0,t.useState)({}),[l,a]=(0,t.useState)(0),{get:c}=(0,h.kY)(),u=async({pageParam:T=1})=>{try{const{data:D}=await c(o?.endpoint,{params:{...o.pageParams??{},page:T}});return a(T),D}catch{return null}},d=async({pageParam:T=1})=>{try{const{data:D}=await c(r.endpoint,{params:{...r.pageParams??{},...s,page:T}});return D}catch{return null}},{onLoad:m,normalizeArguments:g={}}=o,p=(0,He.useInfiniteQuery)(["relation",...e],u,{cacheTime:0,enabled:o.enabled,getNextPageParam(T){const D=!T?.pagination;if(!(!T||D||T?.pagination.page>=T?.pagination.pageCount))return T.pagination.page+1},select:T=>({...T,pages:T.pages.map(D=>{if(!D)return D;const{data:x,results:N,pagination:z}=D,$=!!x;let H=[];return $?H=[x]:N&&(H=[...N].reverse()),{pagination:z,results:H}})})}),{pageGoal:y}=o,{status:b,data:C,fetchNextPage:k,hasNextPage:M}=p;(0,t.useEffect)(()=>{y>l&&M&&b==="success"&&k({pageParam:l+1})},[y,l,k,M,b]);const E=_l(m);(0,t.useEffect)(()=>{if(b==="success"&&C&&C.pages?.at(-1)?.results&&E){const T=Yl(C.pages.at(-1).results,g);E(T)}},[b,E,C]);const P=(0,He.useInfiniteQuery)(["relation",...e,"search",JSON.stringify(s)],d,{enabled:Object.keys(s).length>0,getNextPageParam(T){if(!(!T?.pagination||T.pagination.page>=T.pagination.pageCount))return T.pagination.page+1}});return{relations:p,search:P,searchFor:(T,D={})=>{i({...D,_q:T})}}},Wr=(e,o)=>r=>{const s=r.split(".");return s.reduce((i,l,a)=>{const c=I()(e,i),u=I()(o,[...s.slice(0,a),l,"__temp_key__"]);if(Array.isArray(c)&&typeof u=="number"){const d=c.findIndex(m=>m.__temp_key__===u);return i.push(d.toString()),i}return i.push(l),i},[])},Pn=({error:e,componentId:o,isComponentRelation:r,editable:s,description:i,intlLabel:l,isCreatingEntry:a,isFieldAllowed:c,isFieldReadable:u,labelAction:d,mainField:m,name:g,queryInfos:{endpoints:p,defaultParams:y,shouldDisplayRelationLink:b},placeholder:C,required:k,relationType:M,size:E,targetModel:P})=>{const[F,T]=(0,t.useState)(""),{formatMessage:D}=(0,Q.Z)(),{slug:x,initialData:N,modifiedData:z,relationConnect:$,relationDisconnect:H,relationLoad:j,relationReorder:Y}=(0,h.Wq)(),B=g.split("."),X=Wr(N,z)(g),Z=I()(z,g,[]),W=Math.ceil(I()(N,g,[]).length/nn),{relations:v,search:A,searchFor:U}=ec([x,X.join("."),z.id,y],{relation:{enabled:!!p.relation,endpoint:p.relation,pageGoal:W,pageParams:{...y,pageSize:nn},onLoad(te){j({target:{initialDataPath:["initialData",...X],modifiedDataPath:["modifiedData",...B],value:te}})},normalizeArguments:{mainFieldName:m.name,shouldAddLink:b,targetModel:P}},search:{endpoint:p.search,pageParams:{...y,entityId:a?void 0:r?o:N.id,pageSize:ki}}}),K=(0,t.useMemo)(()=>M.toLowerCase().includes("morph"),[M]),L=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(M),O=(0,t.useMemo)(()=>K?!0:a?!s:!c&&u||!s,[K,a,s,c,u]),oe=te=>{const pe=xn(te,{mainFieldName:m.name,shouldAddLink:b,targetModel:P});$({name:g,value:pe,toOneRelation:L})},ee=te=>{H({name:g,id:te.id})},re=()=>{v.fetchNextPage()},V=(te="")=>{const[pe,Le]=Jl(Z,I()(N,g));U(te,{idsToInclude:Le,idsToOmit:pe})},se=()=>{A.fetchNextPage()},be=te=>`${te+1} of ${Z.length}`,Oe=(te,pe)=>{const Le=Z[te];T(D({id:R("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:Le.mainField??Le.id,position:be(pe)})),Y({name:g,newIndex:pe,oldIndex:te})},Ct=te=>{const pe=Z[te];T(D({id:R("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:pe.mainField??pe.id,position:be(te)}))},Rt=te=>{const pe=Z[te];T(D({id:R("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:pe.mainField??pe.id,position:be(te)}))},vt=te=>{const pe=Z[te];T(D({id:R("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:pe.mainField??pe.id}))};if(!c&&a||!a&&!c&&!u)return t.createElement(h.X0,{name:g,intlLabel:l,labelAction:d});const ve=Z.length,Ie=(I()(N,X)??[]).length,Tt=v.data?.pages[0]?.pagination?.total??0,Be=!v.data&&ve===Ie?ve:ve-Ie+Tt;return t.createElement(na,{error:e,canReorder:!L,description:i,disabled:O,iconButtonAriaLabel:D({id:R("components.RelationInput.icon-button-aria-label"),defaultMessage:"Drag"}),id:g,label:`${D({id:l.id,defaultMessage:l.defaultMessage})} ${Be>0?`(${Be})`:""}`,labelAction:d,labelLoadMore:a?null:D({id:R("relation.loadMore"),defaultMessage:"Load More"}),labelDisconnectRelation:D({id:R("relation.disconnect"),defaultMessage:"Remove"}),listAriaDescription:D({id:R("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"}),listHeight:320,liveText:F,loadingMessage:D({id:R("relation.isLoading"),defaultMessage:"Relations are loading"}),name:g,noRelationsMessage:D({id:R("relation.notAvailable"),defaultMessage:"No relations available"}),numberOfRelationsToDisplay:nn,onDropItem:Rt,onGrabItem:Ct,onCancel:vt,onRelationConnect:oe,onRelationDisconnect:ee,onRelationLoadMore:re,onRelationReorder:Oe,onSearch:te=>V(te),onSearchNextPage:()=>se(),placeholder:D(C||{id:R("relation.add"),defaultMessage:"Add relation"}),publicationStateTranslations:{[Ve.DRAFT]:D({id:R("relation.publicationState.draft"),defaultMessage:"Draft"}),[Ve.PUBLISHED]:D({id:R("relation.publicationState.published"),defaultMessage:"Published"})},relations:Ln()({...v,data:Z},"data","hasNextPage","isFetchingNextPage","isLoading","isSuccess"),required:k,searchResults:Xl(A,{mainFieldName:m.name}),size:E})};Pn.defaultProps={componentId:void 0,editable:!0,error:void 0,description:"",labelAction:null,isComponentRelation:!1,isFieldAllowed:!0,placeholder:null,required:!1},Pn.propTypes={componentId:n().number,editable:n().bool,error:n().string,description:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,isCreatingEntry:n().bool.isRequired,isComponentRelation:n().bool,isFieldAllowed:n().bool,isFieldReadable:n().bool.isRequired,mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired}).isRequired,name:n().string.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,relationType:n().string.isRequired,size:n().number.isRequired,targetModel:n().string.isRequired,queryInfos:n().shape({defaultParams:n().shape({locale:n().string}),endpoints:n().shape({relation:n().string,search:n().string.isRequired}).isRequired,shouldDisplayRelationLink:n().bool.isRequired}).isRequired};const tc=(0,t.memo)(Pn),nc=Hl(tc,Ql);function oc(e,o){return r=>{const s=o(r.keys);return t.createElement(e,{...r,...s})}}const rc=oc,sc=(e,o=!1)=>[{metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},disabled:o,hidden:o},key:"__enum_option_null",value:""},...e.map(r=>({metadatas:{intlLabel:{id:r,defaultMessage:r},hidden:!1,disabled:!1},key:r,value:r}))],ic=(e="")=>{switch(zo()(e)){case"boolean":return"bool";case"biginteger":return"text";case"decimal":case"float":case"integer":return"number";case"date":case"datetime":case"time":return e;case"email":return"email";case"enumeration":return"select";case"password":return"password";case"string":return"text";case"text":return"textarea";case"media":case"file":case"files":return"media";case"json":return"json";case"wysiwyg":case"WYSIWYG":case"richtext":return"wysiwyg";case"uid":return"uid";default:return e||"text"}},ac=e=>{let o;return e==="float"||e==="decimal"?o=.01:o=1,o};function lc(e){const{createActionAllowedFields:o,formErrors:r,isCreatingEntry:s,modifiedData:i,onChange:l,readActionAllowedFields:a,shouldNotRunValidations:c,updateActionAllowedFields:u}=(0,h.Wq)(),d=(0,t.useMemo)(()=>s?o:u,[s,o,u]),m=(0,t.useMemo)(()=>s?[]:a,[s,a]),g=I()(i,e,null);return{allowedFields:d,formErrors:r,isCreatingEntry:s,onChange:l,readableFields:m,shouldNotRunValidations:c,value:g}}const cc=lc,zr=["type","model","via","collection","default","plugin","enum","regex","pluginOptions"];function wn({allowedFields:e,componentUid:o,fieldSchema:r,formErrors:s,isCreatingEntry:i,keys:l,labelAction:a,metadatas:c,onChange:u,readableFields:d,shouldNotRunValidations:m,queryInfos:g,value:p,size:y,customFieldInputs:b}){const{fields:C}=(0,h.yX)(),{formatMessage:k}=(0,Q.Z)(),{contentType:M}=Ze(),E=(0,t.useMemo)(()=>!I()(c,"editable",!0),[c]),{type:P,customField:F}=r,T=I()(s,[l],null),D=(0,t.useMemo)(()=>Ko(l),[l]),x=(0,t.useMemo)(()=>{const oe=Ho()(r,m?[...zr,"required","minLength"]:zr),ee=r.regex||null;if(ee){const re=new RegExp(ee);re&&(oe.regex=re)}return oe},[r,m]),N=(0,t.useMemo)(()=>I()(x,["required"],!1),[x]),z=(0,t.useMemo)(()=>{const oe=I()(M,["attributes"],{});return I()(oe,[D[0],"type"],null)==="dynamiczone"},[M,D]),$=(0,t.useMemo)(()=>ic(P),[P]),H=(0,t.useMemo)(()=>P==="media"&&!p?[]:p,[P,p]),j=(0,t.useMemo)(()=>ac(P),[P]),Y=(0,t.useMemo)(()=>{const oe=D.join(".");if(e.includes(oe))return!0;if(z)return e.includes(D[0]);if(D.length>1){const re=dt()(D,D.length-1).join(".");return e.includes(re)}return!1},[e,D,z]),B=(0,t.useMemo)(()=>{const oe=D.join(".");if(d.includes(oe))return!0;if(z)return d.includes(D[0]);if(D.length>1){const re=dt()(D,D.length-1).join(".");return d.includes(re)}return!1},[d,D,z]),X=(0,t.useMemo)(()=>B||Y,[Y,B]),Z=(0,t.useMemo)(()=>i?E:B&&!Y?!0:E,[E,i,Y,B]),W=(0,t.useMemo)(()=>sc(r.enum||[],N),[r,N]),{label:v,description:A,placeholder:U,visible:K}=c,L=(0,t.useMemo)(()=>{if(!c.step||$!=="datetime"&&$!=="time")return j;if(!H)return c.step;let oe;return $==="datetime"?oe=parseInt(H.substr(14,2),10):$==="time"&&(oe=parseInt(H.slice(-2),10)),oe%c.step===0?c.step:j},[$,H,c.step,j]);if(K===!1)return null;if(!X)return t.createElement(h.X0,{description:A?{id:A,defaultMessage:A}:null,intlLabel:{id:v,defaultMessage:v},labelAction:a,error:T&&k(T),name:l,required:N});if(P==="relation")return t.createElement(nc,{...c,...r,componentUid:o,description:c.description?k({id:c.description,defaultMessage:c.description}):void 0,intlLabel:{id:c.label,defaultMessage:c.label},labelAction:a,isUserAllowedToEditField:Y,isUserAllowedToReadField:B,name:l,placeholder:c.placeholder?{id:c.placeholder,defaultMessage:c.placeholder}:null,queryInfos:g,size:y,value:p,error:T&&k(T)});const O={uid:zl,media:C.media,wysiwyg:Ol,...C,...b};return t.createElement(h.jm,{attribute:r,autoComplete:"new-password",intlLabel:{id:v,defaultMessage:v},isNullable:$==="bool"&&[null,void 0].includes(r.default),description:A?{id:A,defaultMessage:A}:null,disabled:Z,error:T,labelAction:a,contentTypeUID:M.uid,customInputs:O,multiple:r.multiple||!1,name:l,onChange:u,options:W,placeholder:U?{id:U,defaultMessage:U}:null,required:r.required||!1,step:L,type:F||$,value:H,withDefaultValue:!1})}wn.defaultProps={componentUid:void 0,formErrors:{},labelAction:void 0,size:void 0,value:null,queryInfos:{},customFieldInputs:{}},wn.propTypes={allowedFields:n().array.isRequired,componentUid:n().string,fieldSchema:n().object.isRequired,formErrors:n().object,keys:n().string.isRequired,isCreatingEntry:n().bool.isRequired,labelAction:n().element,metadatas:n().object.isRequired,onChange:n().func.isRequired,readableFields:n().array.isRequired,size:n().number,shouldNotRunValidations:n().bool.isRequired,value:n().any,queryInfos:n().shape({containsKey:n().string,defaultParams:n().object,endPoint:n().string}),customFieldInputs:n().object};const dc=(0,t.memo)(wn,qe()),Fn=rc(dc,cc),mt=new Map,Sn=(e=[])=>{const[o,r]=(0,t.useState)(Object.fromEntries(mt)),s=e.filter(u=>!mt.get(u)),[i,l]=(0,t.useState)(()=>!!s.length),a=(0,h.mZ)();(0,t.useEffect)(()=>{const u=m=>{r(m),l(!1)},d=async(m,g)=>{const p=await Promise.all(g);m.forEach((y,b)=>{mt.set(y,p[b].default)}),u(Object.fromEntries(mt))};if(s.length>0){l(!0);const m=s.map(g=>a.get(g).components.Input());m.length>0&&d(s,m)}},[s,a]);const c=(0,t.useCallback)(()=>{mt.clear(),r({})},[]);return{isLazyLoading:i,lazyComponentStore:o,cleanup:c}},An=({componentUid:e,isFromDynamicZone:o,isNested:r,name:s})=>{const{getComponentLayout:i}=Ze(),a=(0,t.useMemo)(()=>i(e),[e,i]).layouts.edit,{lazyComponentStore:c}=Sn();return t.createElement(S.x,{background:o?"":"neutral100",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,hasRadius:r,borderColor:r?"neutral200":""},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},a.map((u,d)=>t.createElement(ke.r,{gap:4,key:d},u.map(({name:m,size:g,metadatas:p,fieldSchema:y,queryInfos:b})=>{const C=y.type==="component",k=`${s}.${m}`;if(C){const M=y.component;return t.createElement(fe.P,{col:g,s:12,xs:12,key:m},t.createElement(Zt,{componentUid:M,intlLabel:{id:p.label,defaultMessage:p.label},isNested:!0,isRepeatable:y.repeatable,max:y.max,min:y.min,name:k,required:y.required||!1}))}return t.createElement(fe.P,{col:g,key:m,s:12,xs:12},t.createElement(Fn,{componentUid:e,keys:k,fieldSchema:y,metadatas:p,queryInfos:b,size:g,customFieldInputs:c}))})))))};An.defaultProps={isFromDynamicZone:!1,isNested:!1},An.propTypes={componentUid:n().string.isRequired,isFromDynamicZone:n().bool,isNested:n().bool,name:n().string.isRequired};const uc=An;var pt=f(96315),mc=f(79833),Vr=f.n(mc);const pc=q.ZP.span`
  display: block;
  background-color: ${({theme:e})=>e.colors.primary100};
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:e})=>e.spaces[6]};
`,gc=()=>t.createElement(pc,{padding:6,background:"primary100"}),fc=(0,q.ZP)(ge.h)`
  background-color: transparent;

  svg {
    path {
      fill: ${({theme:e,expanded:o})=>o?e.colors.primary600:e.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }
`,hc=(0,q.ZP)(w.k)`
  & .drag-handle {
    background: unset;

    svg {
      path {
        fill: ${({theme:e,expanded:o})=>o?e.colors.primary600:void 0};
      }
    }

    &:hover {
      svg {
        path {
          /* keeps the hover style of the accordion */
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`,On=({componentFieldName:e,componentUid:o,fields:r,index:s,isOpen:i,isReadOnly:l,mainField:a,moveComponentField:c,onClickToggle:u,toggleCollapses:d,onGrabItem:m,onDropItem:g,onCancel:p})=>{const{modifiedData:y,removeRepeatableField:b,triggerFormValidation:C}=(0,h.Wq)(),k=Vr()(I()(y,[...e.split("."),a],"")),M=(0,t.useRef)(null),{formatMessage:E}=(0,Q.Z)(),[P]=e.split("."),[{handlerId:F,isDragging:T,handleKeyDown:D},x,N,z,$]=on(!l,{type:`${Ce.COMPONENT}_${P}`,index:s,item:{displayedValue:k},onMoveItem:c,onStart(){d()},onEnd(){C()},onGrabItem:m,onDropItem:g,onCancel:p});(0,t.useEffect)(()=>{$((0,ct.rX)(),{captureDraggingState:!1})},[$,s]);const H=Lt(M,z),j=Lt(x,N),{lazyComponentStore:Y}=Sn();return t.createElement(S.x,{ref:j},T?t.createElement(gc,null):t.createElement(un.U,{expanded:i,onToggle:u,id:e,size:"S"},t.createElement(mn.B,{action:l?null:t.createElement(hc,{gap:0,expanded:i},t.createElement(fc,{expanded:i,noBorder:!0,onClick:()=>{b(e),d()},label:E({id:R("containers.Edit.delete"),defaultMessage:"Delete"}),icon:t.createElement(Se.Z,null)}),t.createElement(ge.h,{className:"drag-handle",ref:H,forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:B=>B.stopPropagation(),"data-handler-id":F,label:E({id:R("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:D},t.createElement($e.Z,null))),title:k,togglePosition:"left"}),t.createElement(pn.v,null,t.createElement(w.k,{direction:"column",alignItems:"stretch",background:"neutral100",padding:6,gap:6},r.map((B,X)=>t.createElement(ke.r,{gap:4,key:X},B.map(({name:Z,fieldSchema:W,metadatas:v,queryInfos:A,size:U})=>{const K=W.type==="component",L=`${e}.${Z}`;if(K){const O=W.component;return t.createElement(fe.P,{col:U,s:12,xs:12,key:Z},t.createElement(Zt,{componentUid:O,intlLabel:{id:v.label,defaultMessage:v.label},isRepeatable:W.repeatable,isNested:!0,name:L,max:W.max,min:W.min,required:W.required}))}return t.createElement(fe.P,{key:L,col:U,s:12,xs:12},t.createElement(Fn,{componentUid:o,fieldSchema:W,keys:L,metadatas:v,queryInfos:A,size:U,customFieldInputs:Y}))})))))))};On.defaultProps={componentUid:void 0,fields:[],isReadOnly:!1,isOpen:!1,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0,toggleCollapses(){}},On.propTypes={componentFieldName:n().string.isRequired,componentUid:n().string,fields:n().array,index:n().number.isRequired,isOpen:n().bool,isReadOnly:n().bool,mainField:n().string.isRequired,moveComponentField:n().func.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onClickToggle:n().func.isRequired,toggleCollapses:n().func};const yc=(0,t.memo)(On);var Ur=f(17373);const bc=(0,q.ZP)(S.x)`
  overflow: hidden;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
`,Ec=(0,q.ZP)(S.x)`
  border-bottom: none;

  /* add the borders and make sure the top is transparent to avoid jumping with the hover effect  */
  & > div > div {
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-top-color: transparent;
  }

  /* the top accordion _does_ need a border though */
  & > div:first-child > div {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  }

  /* Reset all the border-radius' */
  & > div > div,
  & > div > div > div {
    border-radius: unset;
  }

  /* Give the border radius back to the first accordion */
  & > div:first-child > div,
  & > div:first-child > div > div {
    border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
  }

  & > div > div[data-strapi-expanded='true'] {
    border: 1px solid ${({theme:e})=>e.colors.primary600};
  }
`,$n=({children:e,error:o})=>{const{formatMessage:r}=(0,Q.Z)();return t.createElement(Ur.k,{attributeName:"data-strapi-accordion-toggle"},e,o&&t.createElement(S.x,{paddingTop:1},t.createElement(G.Z,{variant:"pi",textColor:"danger600"},r({id:o.id,defaultMessage:o.defaultMessage},{...o.values}))))};$n.defaultProps={error:void 0},$n.propTypes={children:n().node.isRequired,error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object})};function Cc(e,o={}){return Object.keys(o).filter(r=>r.startsWith(e)).map(r=>r.split(".").slice(0,e.split(".").length+1).join("."))}const Rc=(0,q.ZP)(er.A)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`,Zn=({componentUid:e,componentValue:o,componentValueLength:r,isReadOnly:s,max:i,min:l,name:a})=>{const{addRepeatableComponentToField:c,formErrors:u,moveComponentField:d}=(0,h.Wq)(),m=(0,h.lm)(),{formatMessage:g}=(0,Q.Z)(),[p,y]=(0,t.useState)(""),[b,C]=(0,t.useState)(""),{getComponentLayout:k,components:M}=Ze(),E=(0,t.useMemo)(()=>k(e),[e,k]),P=(0,t.useMemo)(()=>tn(o||[])+1,[o]),F=Cc(a,u),T=l-r,D=I()(u,a,{id:""}).id.includes("min"),x=()=>{y("")},N=()=>{s||(r<i?(c(a,E,M,D),y(P)):r>=i&&m({type:"info",message:{id:R("components.notification.info.maximum-requirement")}}))},z=(v,A)=>{C(g({id:R("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${a}.${A}`,position:j(v)})),d({name:a,newIndex:v,currentIndex:A})},$=I()(E,["settings","mainField"],"id"),H=v=>()=>{y(p===v?"":v)},j=v=>`${v+1} of ${r}`,Y=v=>{C(g({id:R("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${a}.${v}`}))},B=v=>{C(g({id:R("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${a}.${v}`,position:j(v)}))},X=v=>{C(g({id:R("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${a}.${v}`,position:j(v)}))};let Z=u[a];if(D?Z={id:R("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",values:{number:T}}:F.some(v=>v.split(".").length>1)&&!D&&(Z={id:R("components.RepeatableComponent.error-message"),defaultMessage:"The component(s) contain error(s)"}),r===0)return t.createElement(Dr,{error:Z,isReadOnly:s,onClick:N});const W=`${a}-item-instructions`;return t.createElement(S.x,{hasRadius:!0},t.createElement(Je.T,{id:W},g({id:R("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),t.createElement(Je.T,{"aria-live":"assertive"},b),t.createElement($n,{error:Z,ariaDescribedBy:W},t.createElement(Ec,{"aria-describedby":W},o.map(({__temp_key__:v},A)=>t.createElement(yc,{componentFieldName:`${a}.${A}`,componentUid:e,fields:E.layouts.edit,key:v,index:A,isOpen:p===v,isReadOnly:s,mainField:$,moveComponentField:z,onClickToggle:H(v),toggleCollapses:x,onCancel:Y,onDropItem:X,onGrabItem:B}))),t.createElement(bc,null,t.createElement(w.k,{justifyContent:"center",height:"48px",background:"neutral0"},t.createElement(Rc,{disabled:s,onClick:N,startIcon:t.createElement(pt.Z,null)},g({id:R("containers.EditView.add.new-entry"),defaultMessage:"Add an entry"}))))))};Zn.defaultProps={componentValue:null,componentValueLength:0,isReadOnly:!1,max:1/0,min:0},Zn.propTypes={componentUid:n().string.isRequired,componentValue:n().oneOfType([n().array,n().object]),componentValueLength:n().number,isReadOnly:n().bool,max:n().number,min:n().number,name:n().string.isRequired};const vc=(0,t.memo)(Zn),qn=({addNonRepeatableComponentToField:e,componentUid:o,intlLabel:r,isCreatingEntry:s,isFromDynamicZone:i,isRepeatable:l,isNested:a,labelAction:c,max:u,min:d,name:m,hasChildrenAllowedFields:g,hasChildrenReadableFields:p,isReadOnly:y,componentValue:b,removeComponentFromField:C,required:k})=>{const{formatMessage:M}=(0,Q.Z)(),E=ba()(b),P=b!==null||i,F=!l&&P&&!i&&g,{getComponentLayout:T,components:D}=Ze(),x=(0,t.useMemo)(()=>T(o),[o,T]);if(!g&&s)return t.createElement(h.X0,{labelAction:c,intlLabel:r,name:m});if(!g&&!s&&!p)return t.createElement(h.X0,{labelAction:c,intlLabel:r,name:m});const N=()=>{e(m,x,D)};return t.createElement(S.x,null,t.createElement(w.k,{justifyContent:"space-between"},r&&t.createElement(Da,{intlLabel:r,labelAction:c,name:m,numberOfEntries:E,showNumberOfEntries:l,required:k}),F&&t.createElement(ge.h,{label:M({id:R("components.reset-entry"),defaultMessage:"Reset Entry"}),icon:t.createElement(Se.Z,null),noBorder:!0,onClick:()=>{C(m,o)}})),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:1},!l&&!P&&t.createElement(Dr,{isReadOnly:y,onClick:N}),!l&&P&&t.createElement(uc,{componentUid:o,isFromDynamicZone:i,isNested:a,name:m}),l&&t.createElement(vc,{componentValue:b,componentValueLength:E,componentUid:o,isReadOnly:y,max:u,min:d,name:m})))};qn.defaultProps={componentValue:null,hasChildrenAllowedFields:!1,hasChildrenReadableFields:!1,intlLabel:void 0,isFromDynamicZone:!1,isReadOnly:!1,isRepeatable:!1,isNested:!1,labelAction:void 0,max:1/0,min:-1/0,required:!1},qn.propTypes={addNonRepeatableComponentToField:n().func.isRequired,componentUid:n().string.isRequired,componentValue:n().oneOfType([n().object,n().array]),hasChildrenAllowedFields:n().bool,hasChildrenReadableFields:n().bool,isCreatingEntry:n().bool.isRequired,isFromDynamicZone:n().bool,isReadOnly:n().bool,isRepeatable:n().bool,isNested:n().bool,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),labelAction:n().element,max:n().number,min:n().number,name:n().string.isRequired,removeComponentFromField:n().func.isRequired,required:n().bool};const Tc=(0,t.memo)(qn,qe()),Zt=Ca(Tc,Ta),Mc=(0,q.ZP)(w.k)`
  /* 
    we need to remove the background from the button but we can't 
    wrap the element in styled because it breaks the forwardedAs which
    we need for drag handler to work on firefox
  */
  div[role='button'] {
    background: transparent;
  }
`,Dc=(0,q.ZP)(ge.h)`
  background-color: transparent;

  svg path {
    fill: ${({theme:e,expanded:o})=>o?e.colors.primary600:e.colors.neutral600};
  }
`,kc=(0,q.ZP)(S.x)`
  > div:first-child {
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  }
`,Ic=(0,q.ZP)(S.x)`
  border-radius: 0 0 ${({theme:e})=>e.spaces[1]} ${({theme:e})=>e.spaces[1]};
`,Lc=(0,q.ZP)(S.x)`
  width: ${({theme:e})=>e.spaces[2]};
  height: ${({theme:e})=>e.spaces[4]};
`,xc=q.ZP.span`
  display: block;
  background-color: ${({theme:e})=>e.colors.primary100};
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:e})=>e.spaces[6]};
`,Pc=(0,q.ZP)(S.x)`
  list-style: none;
  padding: 0;
  margin: 0;
`,Nn=({componentUid:e,formErrors:o,index:r,isFieldAllowed:s,name:i,onRemoveComponentClick:l,onMoveComponent:a,onGrabItem:c,onDropItem:u,onCancel:d})=>{const[m,g]=(0,t.useState)(!0),{formatMessage:p}=(0,Q.Z)(),{getComponentLayout:y}=Ze(),{modifiedData:b}=(0,h.Wq)(),{icon:C,friendlyName:k,mainValue:M}=(0,t.useMemo)(()=>{const B=y(e),{info:{icon:X,displayName:Z}}=B,W=I()(B,["settings","mainField"],"id"),v=I()(b,[i,r,W])??"",A=W==="id"?"":String(v).trim(),U=A.length>0?` - ${A}`:A;return{friendlyName:Z,icon:X,mainValue:U}},[e,y,b,i,r]),E=Object.keys(o).filter(B=>{const X=B.split(".");return`${X[0]}.${X[1]}`==`${i}.${r}`});let P;E.length>0&&(P=p({id:R("components.DynamicZone.error-message"),defaultMessage:"The component contains error(s)"}));const F=()=>{g(B=>!B)},[{handlerId:T,isDragging:D,handleKeyDown:x},N,z,$,H]=on(s,{type:`${Ce.DYNAMIC_ZONE}_${i}`,index:r,item:{displayedValue:`${k}${M}`,icon:C},onMoveItem:a,onGrabItem:c,onDropItem:u,onCancel:d});(0,t.useEffect)(()=>{H((0,ct.rX)(),{captureDraggingState:!1})},[H,r]);const j=Lt(N,z),Y=s?t.createElement(Mc,{gap:0,expanded:m},t.createElement(Dc,{noBorder:!0,label:p({id:R("components.DynamicZone.delete-label"),defaultMessage:"Delete {name}"},{name:k}),onClick:l},t.createElement(Se.Z,null)),t.createElement(ge.h,{forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:B=>B.stopPropagation(),"data-handler-id":T,ref:$,label:p({id:R("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:x},t.createElement($e.Z,null))):null;return t.createElement(Pc,{as:"li"},t.createElement(w.k,{justifyContent:"center"},t.createElement(Lc,{background:"neutral200"})),t.createElement(kc,{ref:j,hasRadius:!0},D?t.createElement(xc,{padding:6,background:"primary100"}):t.createElement(un.U,{expanded:m,onToggle:F,size:"S",error:P},t.createElement(mn.B,{action:Y,title:`${k}${M}`,togglePosition:"left"}),t.createElement(pn.v,null,t.createElement(Ic,{background:"neutral0"},t.createElement(Zt,{componentUid:e,icon:C,name:`${i}.${r}`,isFromDynamicZone:!0}))))))};Nn.defaultProps={formErrors:{},index:0,isFieldAllowed:!0,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0},Nn.propTypes={componentUid:n().string.isRequired,formErrors:n().object,index:n().number,isFieldAllowed:n().bool,name:n().string.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onMoveComponent:n().func.isRequired,onRemoveComponentClick:n().func.isRequired};const wc=Nn,jn=(0,q.ZP)(Mr.Z)`
  transform: ${({$isOpen:e})=>e?"rotate(45deg)":"rotate(0deg)"};
  > circle {
    fill: ${({theme:e,$hasError:o})=>o?e.colors.danger200:e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e,$hasError:o})=>o?e.colors.danger600:e.colors.neutral600};
  }
`,Fc=(0,q.ZP)(En.Y)`
  border-radius: 26px;
  border-color: ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-top: ${({theme:e})=>e.spaces[3]};
  padding-right: ${({theme:e})=>e.spaces[4]};
  padding-bottom: ${({theme:e})=>e.spaces[3]};
  padding-left: ${({theme:e})=>e.spaces[4]};

  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};
    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }
  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${jn} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
  &:active {
    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    ${jn} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,Sc=(0,q.ZP)(S.x)`
  height: 100%;
`,Bn=({hasError:e,hasMaxError:o,hasMinError:r,isDisabled:s,isOpen:i,label:l,missingComponentNumber:a,name:c,onClick:u})=>{const{formatMessage:d}=(0,Q.Z)(),m=d({id:R("components.DynamicZone.add-component"),defaultMessage:"Add a component to {componentName}"},{componentName:l||c}),g=d({id:"app.utils.close-label",defaultMessage:"Close"});let p=i?g:m;return o&&!i&&(p=d({id:"components.Input.error.validation.max",defaultMessage:"The value is too high."})),r&&!i&&(p=d({id:R("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"},{number:a})),t.createElement(w.k,{justifyContent:"center"},t.createElement(S.x,{style:{cursor:s?"not-allowed":"pointer"}},t.createElement(Fc,{type:"button",onClick:u,disabled:s,hasError:e},t.createElement(w.k,null,t.createElement(Sc,{"aria-hidden":!0,paddingRight:2},t.createElement(jn,{$isOpen:i,$hasError:e&&!i})),t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:e&&!i?"danger600":"neutral500"},p)))))};Bn.defaultProps={hasError:!1,hasMaxError:!1,hasMinError:!1,isDisabled:!1,isOpen:!1,label:"",missingComponentNumber:0},Bn.propTypes={label:n().string,hasError:n().bool,hasMaxError:n().bool,hasMinError:n().bool,isDisabled:n().bool,isOpen:n().bool,missingComponentNumber:n().number,name:n().string.isRequired,onClick:n().func.isRequired};const Ac=Bn,Oc=(0,q.ZP)(S.x)`
  border-radius: ${(0,h.Q1)(26)};
`,Wn=({label:e,labelAction:o,name:r,numberOfComponents:s,required:i,intlDescription:l})=>{const{formatMessage:a}=(0,Q.Z)(),c=a({id:e||r,defaultMessage:e||r});return t.createElement(w.k,{justifyContent:"center"},t.createElement(S.x,null,t.createElement(Oc,{paddingTop:3,paddingBottom:3,paddingRight:4,paddingLeft:4,background:"neutral0",shadow:"filterShadow",color:"neutral500"},t.createElement(w.k,{direction:"column",justifyContent:"center"},t.createElement(w.k,{maxWidth:(0,h.Q1)(356)},t.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold",ellipsis:!0},c,"\xA0"),t.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold"},"(",s,")"),i&&t.createElement(G.Z,{textColor:"danger600"},"*"),o&&t.createElement(S.x,{paddingLeft:1},o)),l&&t.createElement(S.x,{paddingTop:1,maxWidth:(0,h.Q1)(356)},t.createElement(G.Z,{variant:"pi",textColor:"neutral600",ellipsis:!0},a(l)))))))};Wn.defaultProps={intlDescription:void 0,label:"",labelAction:void 0,numberOfComponents:0,required:!1},Wn.propTypes={intlDescription:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired}),label:n().string,labelAction:n().element,name:n().string.isRequired,numberOfComponents:n().number,required:n().bool};const $c=Wn;var Zc=f(7739),Hr=f.n(Zc);const qt=5,Nt=8,qc=(0,q.ZP)(w.k)`
  border-radius: ${({showBackground:e})=>e?"50%":0};
  color: ${({theme:e})=>e.colors.neutral600};
  height: ${({theme:e,size:o})=>e.spaces[o==="S"?qt:Nt]};
  width: ${({theme:e,size:o})=>e.spaces[o==="S"?qt:Nt]};

  svg {
    height: ${({theme:e,size:o})=>e.spaces[o==="S"?qt-2:Nt-3]};
    width: ${({theme:e,size:o})=>e.spaces[o==="S"?qt-2:Nt-3]};
  }
`;function jt({showBackground:e=!0,size:o="M"}){return t.createElement(qc,{alignItems:"center",background:e?"neutral200":null,justifyContent:"center",size:o,showBackground:e},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},t.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}jt.defaultProps={showBackground:!0,size:"M"},jt.propTypes={showBackground:n().bool,size:n().string};const Nc=(0,q.ZP)(S.x)`
  flex-shrink: 0;
  height: ${(0,h.Q1)(84)};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > Flex > ComponentIcon */
    > div > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`;function zn({children:e,onClick:o}){return t.createElement(Nc,{as:"button",type:"button",onClick:o,hasRadius:!0},t.createElement(w.k,{direction:"column",gap:1,alignItems:"center",justifyContent:"center"},t.createElement(jt,null),t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral600"},e)))}zn.defaultProps={onClick(){}},zn.propTypes={children:n().node.isRequired,onClick:n().func};const jc=q.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140/16}rem);
  grid-gap: ${({theme:e})=>e.spaces[1]};
`,Vn=({category:e,components:o,variant:r,isOpen:s,onAddComponent:i,onToggle:l})=>{const{formatMessage:a}=(0,Q.Z)(),c=()=>{l(e)};return t.createElement(un.U,{expanded:s,onToggle:c,size:"S"},t.createElement(mn.B,{variant:r,title:a({id:e,defaultMessage:e}),togglePosition:"left"}),t.createElement(pn.v,null,t.createElement(S.x,{paddingTop:4,paddingBottom:4,paddingLeft:3,paddingRight:3},t.createElement(jc,null,o.map(({componentUid:u,info:{displayName:d}})=>t.createElement(zn,{key:u,onClick:i(u)},a({id:d,defaultMessage:d})))))))};Vn.defaultProps={components:[],isOpen:!1,variant:"primary"},Vn.propTypes={category:n().string.isRequired,components:n().array,isOpen:n().bool,onAddComponent:n().func.isRequired,onToggle:n().func.isRequired,variant:n().oneOf(["primary","secondary"])};const Bc=Vn,Un=({components:e,isOpen:o,onClickAddComponent:r})=>{const{formatMessage:s}=(0,Q.Z)(),{getComponentLayout:i}=Ze(),[l,a]=(0,t.useState)(""),c=(0,t.useMemo)(()=>{const m=e.map(p=>{const{category:y,info:b}=i(p);return{componentUid:p,category:y,info:b}}),g=Hr()(m,"category");return Object.keys(g).reduce((p,y)=>(p.push({category:y,components:g[y]}),p),[])},[e,i]);(0,t.useEffect)(()=>{o&&c.length>0&&a(c[0].category)},[o,c]);const u=m=>()=>{r(m),a("")},d=m=>{a(g=>g===m?"":m)};return o?t.createElement(S.x,{paddingBottom:6},t.createElement(S.x,{paddingTop:6,paddingBottom:6,paddingLeft:5,paddingRight:5,background:"neutral0",shadow:"tableShadow",borderColor:"neutral150",hasRadius:!0},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral600"},s({id:R("components.DynamicZone.ComponentPicker-label"),defaultMessage:"Pick one component"}))),t.createElement(S.x,{paddingTop:2},t.createElement(Ur.k,{attributeName:"data-strapi-accordion-toggle"},c.map(({category:m,components:g},p)=>t.createElement(Bc,{key:m,category:m,components:g,onAddComponent:u,isOpen:m===l,onToggle:d,variant:p%2===1?"primary":"secondary"})))))):null};Un.defaultProps={components:[],isOpen:!1},Un.propTypes={components:n().array,isOpen:n().bool,onClickAddComponent:n().func.isRequired};const Wc=Un,Hn=({name:e,addComponentToDynamicZone:o,formErrors:r,isCreatingEntry:s,isFieldAllowed:i,isFieldReadable:l,labelAction:a,moveComponentField:c,removeComponentFromDynamicZone:u,dynamicDisplayedComponents:d,fieldSchema:m,metadatas:g})=>{const[p,y]=(0,t.useState)(!1),[b,C]=(0,t.useState)(""),{formatMessage:k}=(0,Q.Z)(),M=(0,h.lm)(),{getComponentLayout:E,components:P}=Ze(),F=d.length,T=g.description?{id:g.description,defaultMessage:g.description}:null,{max:D=1/0,min:x=-1/0}=m,N=(0,t.useMemo)(()=>Object.keys(r).filter(L=>L===e).map(L=>r[L]),[r,e]),z=x-F,$=N.length>0,H=N.length>0&&I()(N,[0,"id"],"").includes("min"),j=$&&I()(N,[0,"id"],"")==="components.Input.error.validation.max",Y=L=>{y(!1);const O=E(L);o(e,O,P,$)},B=()=>{F<D?y(L=>!L):M({type:"info",message:{id:R("components.notification.info.maximum-requirement")}})},X=(L,O)=>{C(k({id:R("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${e}.${O}`,position:Z(L)})),c({name:e,newIndex:L,currentIndex:O})},Z=L=>`${L+1} of ${d.length}`,W=L=>{C(k({id:R("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${e}.${L}`}))},v=L=>{C(k({id:R("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${e}.${L}`,position:Z(L)}))},A=L=>{C(k({id:R("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${e}.${L}`,position:Z(L)}))},U=(L,O)=>()=>{u(L,O)};if(!i&&(s||!l&&!s))return t.createElement(h.X0,{description:T,intlLabel:{id:g.label,defaultMessage:g.label},labelAction:a,name:e});const K=`${e}-item-instructions`;return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},F>0&&t.createElement(S.x,null,t.createElement($c,{intlDescription:T,label:g.label,labelAction:a,name:e,numberOfComponents:F,required:m.required||!1}),t.createElement(Je.T,{id:K},k({id:R("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),t.createElement(Je.T,{"aria-live":"assertive"},b),t.createElement("ol",{"aria-describedby":K},d.map(({componentUid:L,id:O},oe)=>t.createElement(wc,{componentUid:L,formErrors:r,key:`${L}-${O}`,index:oe,isFieldAllowed:i,name:e,onMoveComponent:X,onRemoveComponentClick:U(e,oe),onCancel:W,onDropItem:A,onGrabItem:v})))),t.createElement(Ac,{hasError:$,hasMaxError:j,hasMinError:H,isDisabled:!i,label:g.label,missingComponentNumber:z,isOpen:p,name:e,onClick:B}),t.createElement(Wc,{isOpen:p,components:m.components??[],onClickAddComponent:Y}))};Hn.defaultProps={dynamicDisplayedComponents:[],fieldSchema:{max:1/0,min:-1/0},labelAction:null},Hn.propTypes={addComponentToDynamicZone:n().func.isRequired,dynamicDisplayedComponents:n().arrayOf(n().shape({componentUid:n().string.isRequired,id:n().number.isRequired})),fieldSchema:n().shape({components:n().array.isRequired,max:n().number,min:n().number,required:n().bool}),formErrors:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isFieldAllowed:n().bool.isRequired,isFieldReadable:n().bool.isRequired,labelAction:n().element,metadatas:n().shape({description:n().string,label:n().string}).isRequired,moveComponentField:n().func.isRequired,name:n().string.isRequired,removeComponentFromDynamicZone:n().func.isRequired};const zc=(0,t.memo)(Hn,qe()),Vc=ga(zc,ha);var Ne=f(46781);const Bt=()=>({type:Ne.ZA}),Gn=e=>({type:Ne.Id,data:e}),Qn=(e,o=!1)=>({type:Ne.TP,rawQuery:e,isSingleType:o}),Gr=()=>({type:Ne.c2}),Qr=(e,o)=>({type:Ne.w7,componentsDataStructure:e,contentTypeDataStructure:o}),ce=e=>({type:Ne.d0,status:e}),je=e=>({type:Ne.t9,data:e}),Uc=()=>({type:Ne.tE}),Kn=e=>e["content-manager_editViewCrudReducer"],Yn=({allLayoutData:e,children:o,slug:r,id:s,origin:i})=>{const l=(0,He.useQueryClient)(),a=(0,h.lm)(),{setCurrentStep:c}=(0,h.c1)(),{trackUsage:u}=(0,h.rS)(),{push:d,replace:m}=(0,ae.k6)(),[{rawQuery:g}]=(0,h.Kx)(),p=(0,le.I0)(),{componentsDataStructure:y,contentTypeDataStructure:b,data:C,isLoading:k,status:M}=(0,le.v9)(Kn),E=ur(r),{formatAPIError:P}=(0,h.So)(R),F=(0,t.useRef)(!0),T=(0,t.useRef)(u),D=(0,t.useRef)(e),x=(0,h.kY)(),{put:N,post:z,del:$}=x,H=s===null,j=(0,t.useMemo)(()=>H&&!i?null:de(`collection-types/${r}/${i||s}`),[r,s,H,i]),Y=(0,t.useCallback)(L=>i?(0,h.w6)(L,D.current.contentType,D.current.components):L,[i]),B=(0,t.useCallback)(L=>{const O=Xo(L,D.current.contentType,D.current.components);return(0,h.dU)(O,D.current.contentType,D.current.components)},[]);(0,t.useEffect)(()=>{const L=Object.keys(e.components).reduce((ee,re)=>{const V=xt(I()(e,["components",re,"attributes"],{}),e.components);return ee[re]=(0,h.dU)(V,e.components[re],e.components),ee},{}),O=xt(e.contentType.attributes,e.components),oe=(0,h.dU)(O,e.contentType,e.components);p(Qr(L,oe))},[e,p]),(0,t.useEffect)(()=>()=>{p(Gr())},[p]),(0,t.useEffect)(()=>{const O=Re.default.CancelToken.source(),oe=async re=>{p(Bt());try{const{data:V}=await x.get(j,{cancelToken:re.token});p(Gn(B(Y(V))))}catch(V){if(Re.default.isCancel(V))return;const se=I()(V,"response.status",null);if(se===404){d(E);return}se===403&&(a({type:"info",message:{id:R("permissions.not-allowed.update")}}),d(E))}},ee=async()=>{await p(Bt()),await p(Qn(g))};return F.current?(j?oe(O):ee(),()=>{O.cancel("Operation canceled by the user.")}):()=>{}},[x,Y,B,d,j,p,g,E,a]);const X=(0,t.useCallback)(L=>{a({type:"warning",message:P(L)})},[a,P]),Z=(0,t.useCallback)(async L=>{try{T.current("willDeleteEntry",L);const{data:O}=await $(de(`collection-types/${r}/${s}`));return a({type:"success",message:{id:R("success.record.delete")}}),T.current("didDeleteEntry",L),m(E),Promise.resolve(O)}catch(O){return T.current("didNotDeleteEntry",{error:O,...L}),Promise.reject(O)}},[s,r,a,$,E,m]),W=(0,t.useCallback)(async(L,O)=>{const oe=`${de(`collection-types/${r}`)}${g}`;try{p(ce("submit-pending"));const{data:ee}=await z(oe,L);return T.current("didCreateEntry",O),a({type:"success",message:{id:R("success.record.save")}}),c("contentManager.success"),l.invalidateQueries(["relation"]),p(je(B(ee))),p(ce("resolved")),m(`/content-manager/collectionType/${r}/${ee.id}${g}`),Promise.resolve(ee)}catch(ee){return X(ee),T.current("didNotCreateEntry",{error:ee,trackerProperty:O}),p(ce("resolved")),Promise.reject(ee)}},[B,X,m,r,p,g,a,c,l,z]),v=(0,t.useCallback)(async()=>{try{T.current("willCheckDraftRelations");const L=de(`collection-types/${r}/${s}/actions/numberOfDraftRelations`);p(ce("draft-relation-check-pending"));const O=await x.get(L);return T.current("didCheckDraftRelations"),p(ce("resolved")),O.data.data}catch(L){return X(L),p(ce("resolved")),Promise.reject(L)}},[X,s,r,p,x]),A=(0,t.useCallback)(async()=>{try{T.current("willPublishEntry");const L=de(`collection-types/${r}/${s}/actions/publish`);p(ce("publish-pending"));const{data:O}=await z(L);return T.current("didPublishEntry"),p(je(B(O))),p(ce("resolved")),a({type:"success",message:{id:R("success.record.publish")}}),Promise.resolve(O)}catch(L){return X(L),p(ce("resolved")),Promise.reject(L)}},[B,X,s,r,p,a,z]),U=(0,t.useCallback)(async(L,O)=>{const oe=de(`collection-types/${r}/${s}`);try{T.current("willEditEntry",O),p(ce("submit-pending"));const{data:ee}=await N(oe,L);return T.current("didEditEntry",{trackerProperty:O}),a({type:"success",message:{id:R("success.record.save")}}),l.invalidateQueries(["relation"]),p(je(B(ee))),p(ce("resolved")),Promise.resolve(ee)}catch(ee){return T.current("didNotEditEntry",{error:ee,trackerProperty:O}),X(ee),p(ce("resolved")),Promise.reject(ee)}},[B,X,r,s,p,a,l,N]),K=(0,t.useCallback)(async()=>{const L=de(`collection-types/${r}/${s}/actions/unpublish`);p(ce("unpublish-pending"));try{T.current("willUnpublishEntry");const{data:O}=await z(L);return T.current("didUnpublishEntry"),a({type:"success",message:{id:R("success.record.unpublish")}}),p(je(B(O))),p(ce("resolved")),Promise.resolve(O)}catch(O){return p(ce("resolved")),X(O),Promise.reject(O)}},[B,X,s,r,p,a,z]);return o({componentsDataStructure:y,contentTypeDataStructure:b,data:C,isCreatingEntry:H,isLoadingForData:k,onDelete:Z,onPost:W,onPublish:A,onDraftRelationCheck:v,onPut:U,onUnpublish:K,status:M,redirectionLink:E})};Yn.defaultProps={id:null,origin:null},Yn.propTypes={allLayoutData:n().exact({components:n().object.isRequired,contentType:n().shape({apiID:n().string.isRequired,attributes:n().object.isRequired,info:n().object.isRequired,isDisplayed:n().bool.isRequired,kind:n().string.isRequired,layouts:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,pluginOptions:n().object,settings:n().object.isRequired,uid:n().string.isRequired}).isRequired}).isRequired,children:n().func.isRequired,id:n().string,origin:n().string,slug:n().string.isRequired};const Hc=(0,t.memo)(Yn,qe());var Gc=f(41609),ye=f.n(Gc),Qc=f(18446),gt=f.n(Qc),Kc=f(98601),Yc=f.n(Kc),Xc=f(45578),Kr=f.n(Xc),Xn=f(38190);const Yr=(e,o,r,s)=>{const i=e.slice();return i.splice(o,1),i.splice(r,0,s),i};var Jc=f(1469),_c=f.n(Jc);const ed=({browserState:e,serverState:o},r,s)=>{const i=o,l=e,a=(d,m)=>I()(d,["attributes",m,"type"],""),c=(d,m)=>I()(d,["attributes",...m],""),u=(d,m,g,p)=>Object.keys(d).reduce((y,b)=>{const C=p?`${p}.${b}`:b,k=a(g,b),M=I()(d,b),E=I()(m,b),P=c(g,[b,"component"]),F=c(g,[b,"repeatable"]);let T;switch(k){case"json":T=JSON.parse(M);break;case"time":{T=M,M&&M.split(":").length<3&&(T=`${M}:00`);break}case"media":c(g,[b,"multiple"])===!0?T=M?M.filter(D=>!(D instanceof File)):null:T=I()(M,0)instanceof File?null:I()(M,"id",null);break;case"component":F?T=M&&M.map((D,x)=>u(D,(E??[])[x],s[P],`${C}.${x}`)):T=M&&u(M,E,s[P],C);break;case"relation":{const D=Wr(i,l)(C).join(".");let x=I()(i,D,[]);const N=M.reduce(($,H,j,Y)=>{const B=x.find(Z=>Z.id===H.id),X=Y[j+1];if(!B||B.__temp_key__!==H.__temp_key__){const Z=X?{before:X.id}:{end:!0};return[...$,{id:H.id,position:Z}]}return $},[]);T={disconnect:x.reduce(($,H)=>M.find(j=>j.id===H.id)?$:[...$,{id:H.id}],[]),connect:N.reverse()};break}case"dynamiczone":T=M.map((D,x)=>u(D,(E??[])[x],s[D.__component],`${C}.${x}`));break;default:T=td(M,"id")}return y[b]=T,y},{});return u(e,o,r,"")},td=(e,o)=>_c()(e)?e.map(r=>r[o]?r[o]:r):cr()(e)?e[o]:e,nd=ed;var od=f(51584),rd=f.n(od),sd=f(14841),ot=f.n(sd),me=f(87561);function ft(e){return["integer","biginteger","decimal","float","number"].includes(e)}me.kM(me.nK,"defined",function(){return this.test("defined",h.I0.required,e=>e!==void 0)}),me.kM(me.IX,"notEmptyMin",function(e){return this.test("notEmptyMin",h.I0.min,o=>ye()(o)?!0:o.length>=e)}),me.kM(me.Z_,"isInferior",function(e,o){return this.test("isInferior",e,function(r){return!r||Number.isNaN(ot()(r))?!0:ot()(o)>=ot()(r)})}),me.kM(me.Z_,"isSuperior",function(e,o){return this.test("isSuperior",e,function(r){return!r||Number.isNaN(ot()(r))?!0:ot()(r)>=ot()(o)})});const id=e=>I()(e,["attributes"],{}),Jn=(e,{components:o},r={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const s=id(e);return me.Ry().shape(Object.keys(s).reduce((i,l)=>{const a=s[l];if(a.type!=="relation"&&a.type!=="component"&&a.type!=="dynamiczone"){const c=ad(a.type,a,r);i[l]=c}if(a.type==="relation"&&(i[l]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(a.relationType)?me.Ry().nullable():me.IX().nullable()),a.type==="component"){const c=Jn(o[a.component],{components:o},{...r,isFromComponent:!0});if(a.repeatable===!0){const{min:d,max:m,required:g}=a;let p=me.Vo(y=>{let b=me.IX().of(c);return d?g?b=b.min(d,h.I0.min):g!==!0&&ye()(y)?b=b.nullable():b=b.min(d,h.I0.min):g&&!r.isDraft&&(b=b.min(1,h.I0.required)),m&&(b=b.max(m,h.I0.max)),b});return i[l]=p,i}const u=me.Vo(d=>d!==void 0?a.required===!0&&!r.isDraft?c.defined():c.nullable():a.required===!0?me.Ry().defined():me.Ry().nullable());return i[l]=u,i}if(a.type==="dynamiczone"){let c=me.IX().of(me.Vo(({__component:m})=>Jn(o[m],{components:o},{...r,isFromComponent:!0})));const{max:u,min:d}=a;d?a.required?c=c.test("min",h.I0.min,m=>r.isCreatingEntry?m&&m.length>=d:m===void 0?!0:m!==null&&m.length>=d).test("required",h.I0.required,m=>r.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null):c=c.notEmptyMin(d):a.required&&!r.isDraft&&(c=c.test("required",h.I0.required,m=>r.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null)),u&&(c=c.max(u,h.I0.max)),i[l]=c}return i},{}))},ad=(e,o,r)=>{let s=me.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(e)&&(s=me.Z_()),e==="json"&&(s=me.nK(h.I0.json).test("isJSON",h.I0.json,i=>{if(!i||!i.length)return!0;try{return JSON.parse(i),!0}catch{return!1}}).nullable().test("required",h.I0.required,i=>!(o.required&&(!i||!i.length)))),e==="email"&&(s=s.email(h.I0.email)),["number","integer","float","decimal"].includes(e)&&(s=me.Rx().transform(i=>Qo()(i)?void 0:i).typeError()),e==="biginteger"&&(s=me.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(e)&&(s=me.hT()),Object.keys(o).forEach(i=>{const l=o[i];if(l||!rd()(l)&&Number.isInteger(Math.floor(l))||l===0)switch(i){case"required":{r.isDraft||(e==="password"&&r.isCreatingEntry&&(s=s.required(h.I0.required)),e!=="password"&&(r.isCreatingEntry?s=s.required(h.I0.required):s=s.test("required",h.I0.required,a=>a===void 0&&!r.isFromComponent?!0:ft(e)?a===0?!0:!!a:e==="boolean"?a!=null:e==="date"||e==="datetime"?typeof a=="string"?!ye()(a):!ye()(a?.toString()):!ye()(a))));break}case"max":{e==="biginteger"?s=s.isInferior(h.I0.max,l):s=s.max(l,h.I0.max);break}case"maxLength":s=s.max(l,h.I0.maxLength);break;case"min":{e==="biginteger"?s=s.isSuperior(h.I0.min,l):s=s.min(l,h.I0.min);break}case"minLength":{r.isDraft||(s=s.min(l,h.I0.minLength));break}case"regex":s=s.matches(new RegExp(l),{message:h.I0.regex,excludeEmptyString:!o.required});break;case"lowercase":["text","textarea","email","string"].includes(e)&&(s=s.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(e)&&(s=s.strict().uppercase());break;case"positive":ft(e)&&(s=s.positive());break;case"negative":ft(e)&&(s=s.negative());break;default:s=s.nullable()}}),s},Xr=Jn,Wt=(e,o=()=>!1,r=void 0)=>{const s=(i,l,{ignoreFalseyValues:a=!1,path:c=[],parent:u=l}={})=>Object.entries(l).reduce((d,[m,g])=>{if(a&&(d==null||d[m]===void 0||d[m]===null))return d;if(o(g,{path:[...c,m],parent:u})&&(d[m]=typeof r=="function"?r(d[m],{path:[...c,m],parent:d}):r),g.type==="component"){const p=e[g.component].attributes;!g.repeatable&&d[m]&&typeof d[m]=="object"?d[m]=s(d[m],p,{ignoreFalseyValues:a,path:[...c,m],parent:l[m]}):g.repeatable&&Array.isArray(d[m])&&(d[m]=d[m].map((y,b)=>s(y,p,{ignoreFalseyValues:a,path:[...c,m,b],parent:l[m]})))}else g.type==="dynamiczone"&&Array.isArray(d[m])&&(d[m]=d[m].map((p,y)=>{const b=e[p.__component].attributes;return s(p,b,{ignoreFalseyValues:a,path:[...c,m,y],parent:l[m]})}));return d},{...i});return s},ld={componentsDataStructure:{},contentTypeDataStructure:{},formErrors:{},initialData:{},modifiedData:null,shouldCheckErrors:!1,modifiedDZName:null,publishConfirmation:{show:!1,draftCount:0}},cd=(e,o)=>(0,St.ZP)(e,r=>{switch(o.type){case"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD":{const{componentLayoutData:s,allComponents:i}=o,l={...e.componentsDataStructure[s.uid]},c=Wt(i,u=>u.type==="relation",[])(l,s.attributes);J()(r,["modifiedData",...o.keys],c);break}case"ADD_COMPONENT_TO_DYNAMIC_ZONE":case"ADD_REPEATABLE_COMPONENT_TO_FIELD":{const{keys:s,allComponents:i,componentLayoutData:l,shouldCheckErrors:a}=o;a&&(r.shouldCheckErrors=!e.shouldCheckErrors),o.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"&&(r.modifiedDZName=s[0]);const c=I()(e,["modifiedData",...s],[]),u=o.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"?{...e.componentsDataStructure[l.uid],__component:l.uid,__temp_key__:tn(c)+1}:{...e.componentsDataStructure[l.uid],__temp_key__:tn(c)+1},m=Wt(i,p=>p.type==="relation",[])(u,l.attributes),g=Array.isArray(c)?[...c,m]:[m];J()(r,["modifiedData",...s],g);break}case"LOAD_RELATION":{const{initialDataPath:s,modifiedDataPath:i,value:l}=o,a=I()(e,s),c=I()(e,i),u=a?l.filter(g=>!a.some(p=>p.id===g.id)):l,d=(0,Xn.zJ)(null,c[0]?.__temp_key__,u.length),m=u.map((g,p)=>({...g,__temp_key__:d[p]}));J()(r,s,Kr()([...m,...a],"id")),J()(r,i,Kr()([...m,...c],"id"));break}case"CONNECT_RELATION":{const s=["modifiedData",...o.keys],{value:i,toOneRelation:l}=o;if(l)J()(r,s,[i]);else{const a=I()(e,s),[c]=(0,Xn.zJ)(a.at(-1)?.__temp_key__,null,1),u=[...a,{...i,__temp_key__:c}];J()(r,s,u)}break}case"DISCONNECT_RELATION":{const s=["modifiedData",...o.keys],{id:i}=o,a=I()(e,[...s]).filter(c=>c.id!==i);J()(r,s,a);break}case"MOVE_COMPONENT_FIELD":case"REORDER_RELATION":{const{oldIndex:s,newIndex:i,keys:l}=o,a=["modifiedData",...l],c=I()(e,[...a]),u=c[s],d=[...c];if(o.type==="REORDER_RELATION"){const m=s>i?c[i-1]?.__temp_key__:c[i]?.__temp_key__,g=s>i?c[i]?.__temp_key__:c[i+1]?.__temp_key__,[p]=(0,Xn.zJ)(m,g,1);d.splice(s,1),d.splice(i,0,{...u,__temp_key__:p})}else d.splice(s,1),d.splice(i,0,u);J()(r,a,d);break}case"INIT_FORM":{const{initialValues:s,components:i={},attributes:l={},setModifiedDataOnly:a}=o,c=De()(s),d=Wt(i,p=>p.type==="relation",(p,{path:y})=>e.modifiedData?.id===c.id&&I()(e.modifiedData,y)?I()(e.modifiedData,y):[])(c,l),g=Wt(i,p=>p.type==="dynamiczone"||p.type==="component"&&!p.repeatable,p=>Array.isArray(p)?p.map((y,b)=>({...y,__temp_key__:b})):{...p,__temp_key__:0})(d,l,{ignoreFalseyValues:!0});a||(r.initialData=g),r.modifiedData=g,r.formErrors={},r.modifiedDZName=null,r.shouldCheckErrors=!1;break}case"MOVE_COMPONENT_UP":case"MOVE_COMPONENT_DOWN":{const{currentIndex:s,dynamicZoneName:i,shouldCheckErrors:l}=o;l&&(r.shouldCheckErrors=!e.shouldCheckErrors);const a=e.modifiedData[i],c=o.type==="MOVE_COMPONENT_UP"?s-1:s+1,u=e.modifiedData[i][s],d=Yr(a,s,c,u);J()(r,["modifiedData",o.dynamicZoneName],d);break}case"MOVE_FIELD":{const s=I()(e,["modifiedData",...o.keys],[]).slice(),i=I()(e,["modifiedData",...o.keys,o.dragIndex]),l=Yr(s,o.dragIndex,o.overIndex,i);J()(r,["modifiedData",...o.keys],l);break}case"ON_CHANGE":{const[s]=o.keys;if(o.shouldSetInitialValue&&J()(r,["initialData",...o.keys],o.value),o.keys.length===2&&I()(e,["modifiedData",s])===null){J()(r,["modifiedData",s],{[o.keys[1]]:o.value});break}J()(r,["modifiedData",...o.keys],o.value);break}case"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE":{o.shouldCheckErrors&&(r.shouldCheckErrors=!e.shouldCheckErrors),r.modifiedData[o.dynamicZoneName].splice(o.index,1);break}case"REMOVE_COMPONENT_FROM_FIELD":{const s=["modifiedData",...o.keys];J()(r,s,null);break}case"REMOVE_PASSWORD_FIELD":{Yc()(r,["modifiedData",...o.keys]);break}case"REMOVE_REPEATABLE_FIELD":{const s=o.keys.length-1,i=["modifiedData",...dt()(o.keys,s)];Object.keys(e.formErrors).length>0&&(r.shouldCheckErrors=!e.shouldCheckErrors);const a=I()(e,i).slice();a.splice(parseInt(o.keys[s],10),1),J()(r,i,a);break}case"SET_DEFAULT_DATA_STRUCTURES":{r.componentsDataStructure=o.componentsDataStructure,r.contentTypeDataStructure=o.contentTypeDataStructure;break}case"SET_FORM_ERRORS":{r.modifiedDZName=null,r.formErrors=o.errors;break}case"TRIGGER_FORM_VALIDATION":{Object.keys(e.formErrors).length>0&&(r.shouldCheckErrors=!e.shouldCheckErrors);break}case"SET_PUBLISH_CONFIRMATION":{r.publishConfirmation={...o.publishConfirmation};break}case"RESET_PUBLISH_CONFIRMATION":{r.publishConfirmation={...e.publishConfirmation,show:!1};break}default:return r}}),_n=({allLayoutData:e,allowedActions:{canRead:o,canUpdate:r},children:s,componentsDataStructure:i,contentTypeDataStructure:l,createActionAllowedFields:a,from:c,initialValues:u,isCreatingEntry:d,isLoadingForData:m,isSingleType:g,onPost:p,onPublish:y,onDraftRelationCheck:b,onPut:C,onUnpublish:k,readActionAllowedFields:M,redirectToPreviousPage:E,slug:P,status:F,updateActionAllowedFields:T})=>{const[D,x]=(0,t.useReducer)(cd,ld),{formErrors:N,initialData:z,modifiedData:$,modifiedDZName:H,shouldCheckErrors:j,publishConfirmation:Y}=D,{setModifiedDataOnly:B}=(0,le.v9)(Kn),X=(0,le.I0)(),Z=(0,h.lm)(),{lockApp:W,unlockApp:v}=(0,h.o1)(),A=I()(e,["contentType"],{}),U=(0,t.useMemo)(()=>I()(A,["options","draftAndPublish"],!1),[A]),K=(0,t.useMemo)(()=>U&&!z.publishedAt,[U,z.publishedAt]),{trackUsage:L}=(0,h.rS)(),{formatMessage:O}=(0,Q.Z)(),oe=(0,t.useRef)(L),ee=(0,t.useMemo)(()=>m||d?!1:o===!1&&r===!1,[m,d,o,r]);(0,t.useEffect)(()=>{F==="resolved"?v():W()},[W,v,F]),(0,t.useEffect)(()=>{m||Ie()},[j]),(0,t.useEffect)(()=>{const ne=Object.keys(N);if(ne.length>0){const _=ne[0],ie=document.getElementById(_);ie&&ie.focus()}},[N]),(0,t.useEffect)(()=>{ee&&Z({type:"info",message:{id:R("permissions.not-allowed.update")}})},[ee,Z]),(0,t.useEffect)(()=>{x({type:"SET_DEFAULT_DATA_STRUCTURES",componentsDataStructure:i,contentTypeDataStructure:l})},[i,l]);const{components:re}=e,V=fr(u);(0,t.useEffect)(()=>{u&&A?.attributes&&!gt()(V,u)&&(x({type:"INIT_FORM",initialValues:u,components:re,attributes:A.attributes,setModifiedDataOnly:B}),B&&X(Uc()))},[u,A,re,B,X,V]);const se=(0,t.useCallback)(ne=>(_,ie,xe,Qe=!1)=>{oe.current("didAddComponentToDynamicZone"),x({type:ne,keys:_.split("."),componentLayoutData:ie,allComponents:xe,shouldCheckErrors:Qe})},[]),be=se("ADD_COMPONENT_TO_DYNAMIC_ZONE"),Oe=(0,t.useCallback)((ne,_,ie)=>{x({type:"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",keys:ne.split("."),componentLayoutData:_,allComponents:ie})},[]),Ct=(0,t.useCallback)(({name:ne,value:_,toOneRelation:ie})=>{x({type:"CONNECT_RELATION",keys:ne.split("."),value:_,toOneRelation:ie})},[]),Rt=(0,t.useCallback)(({target:{initialDataPath:ne,modifiedDataPath:_,value:ie}})=>{x({type:"LOAD_RELATION",modifiedDataPath:_,initialDataPath:ne,value:ie})},[]),vt=se("ADD_REPEATABLE_COMPONENT_TO_FIELD"),ve=(0,t.useMemo)(()=>{const ne={isCreatingEntry:d,isDraft:K,isFromComponent:!1};return Xr(A,{components:e.components||{}},ne)},[e.components,A,d,K]),Ie=(0,t.useCallback)(async(ne={})=>{let _={};const ie=De()($);ye()(ie)||J()(ie,ne.path,ne.value);try{await ve.validate(ie,{abortEarly:!1})}catch(xe){_=(0,h.CJ)(xe),H&&(_=Object.keys(_).reduce((Qe,So)=>(So.split(".")[0]!==H&&(Qe[So]=_[So]),Qe),{}))}x({type:"SET_FORM_ERRORS",errors:_})},[H,$,ve]),Tt=(0,t.useCallback)(({target:{name:ne,value:_,type:ie}},xe=!1)=>{let Qe=_;if(["text","textarea","string","email","uid","select","select-one","number"].includes(ie)&&!_&&_!==0&&(Qe=null),ie==="password"&&!_){x({type:"REMOVE_PASSWORD_FIELD",keys:ne.split(".")});return}x({type:"ON_CHANGE",keys:ne.split("."),value:Qe,shouldSetInitialValue:xe})},[]),Be=(0,t.useCallback)((ne,_)=>nd({browserState:ne,serverState:_},A,e.components),[e.components,A]),te=(0,t.useMemo)(()=>U?K?{status:"draft"}:{}:{},[U,K]),pe=(0,t.useCallback)(async ne=>(ne.preventDefault(),x({type:"RESET_PUBLISH_CONFIRMATION"})),[]),Le=(0,t.useCallback)(async ne=>{ne.preventDefault();let _={};try{await ve.validate($,{abortEarly:!1})}catch(ie){_=(0,h.CJ)(ie)}try{if(ye()(_)){const ie=Be($,z);d?await p(ie,te):await C(ie,te)}}catch(ie){_={..._,...(0,h.nn)(ie,{getTrad:R})}}x({type:"SET_FORM_ERRORS",errors:_})},[Be,d,$,z,p,C,te,ve]),Fo=(0,t.useCallback)(async()=>{const ne=Xr(A,{components:I()(e,"components",{})},{isCreatingEntry:d,isDraft:!1,isFromComponent:!1}),_=await b();if(!Y.show&&_>0){x({type:"SET_PUBLISH_CONFIRMATION",publishConfirmation:{show:!0,draftCount:_}});return}x({type:"RESET_PUBLISH_CONFIRMATION"});let ie={};try{await ne.validate($,{abortEarly:!1})}catch(xe){ie=(0,h.CJ)(xe)}try{ye()(ie)&&await y()}catch(xe){ie={...ie,...(0,h.nn)(xe,{getTrad:R})}}x({type:"SET_FORM_ERRORS",errors:ie})},[e,A,d,$,Y.show,y,b]),We=(0,t.useCallback)(ne=>{const _=Object.keys(N).some(xe=>xe.split(".")[0]===ne);return!ye()(N)&&_},[N]),pp=(0,t.useCallback)((ne,_)=>{oe.current("changeComponentsOrder"),x({type:"MOVE_COMPONENT_DOWN",dynamicZoneName:ne,currentIndex:_,shouldCheckErrors:We(ne)})},[We]),gp=(0,t.useCallback)((ne,_)=>{oe.current("changeComponentsOrder"),x({type:"MOVE_COMPONENT_UP",dynamicZoneName:ne,currentIndex:_,shouldCheckErrors:We(ne)})},[We]),fp=(0,t.useCallback)(({name:ne,newIndex:_,currentIndex:ie})=>{x({type:"MOVE_COMPONENT_FIELD",keys:ne.split("."),newIndex:_,oldIndex:ie})},[]),hp=(0,t.useCallback)(({name:ne,id:_})=>{x({type:"DISCONNECT_RELATION",keys:ne.split("."),id:_})},[]),yp=(0,t.useCallback)(({name:ne,oldIndex:_,newIndex:ie})=>{x({type:"REORDER_RELATION",keys:ne.split("."),oldIndex:_,newIndex:ie})},[]),bp=(0,t.useCallback)((ne,_)=>{oe.current("removeComponentFromDynamicZone"),x({type:"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",dynamicZoneName:ne,index:_,shouldCheckErrors:We(ne)})},[We]),Ep=(0,t.useCallback)((ne,_)=>{x({type:"REMOVE_COMPONENT_FROM_FIELD",keys:ne.split("."),componentUid:_})},[]),Cp=(0,t.useCallback)((ne,_)=>{x({type:"REMOVE_REPEATABLE_FIELD",keys:ne.split("."),componentUid:_})},[]),Rp=(0,t.useCallback)(()=>{x({type:"TRIGGER_FORM_VALIDATION"})},[]);return ee?t.createElement(ae.l_,{to:c}):$?t.createElement(h.W1.Provider,{value:{addComponentToDynamicZone:be,addNonRepeatableComponentToField:Oe,addRepeatableComponentToField:vt,allLayoutData:e,checkFormErrors:Ie,createActionAllowedFields:a,formErrors:N,hasDraftAndPublish:U,initialData:z,isCreatingEntry:d,isSingleType:g,shouldNotRunValidations:K,status:F,layout:A,modifiedData:$,moveComponentField:fp,moveComponentDown:pp,moveComponentUp:gp,onChange:Tt,onPublish:Fo,onUnpublish:k,readActionAllowedFields:M,redirectToPreviousPage:E,removeComponentFromDynamicZone:bp,removeComponentFromField:Ep,removeRepeatableField:Cp,relationConnect:Ct,relationDisconnect:hp,relationLoad:Rt,relationReorder:yp,slug:P,triggerFormValidation:Rp,updateActionAllowedFields:T,onPublishPromptDismissal:pe,publishConfirmation:Y}},m||!d&&!z.id?t.createElement(Te.o,{"aria-busy":"true"},t.createElement(h.dO,null)):t.createElement(t.Fragment,null,t.createElement(ae.NL,{when:!gt()($,z),message:O({id:"global.prompt.unsaved"})}),t.createElement("form",{noValidate:!0,onSubmit:Le},s))):null};_n.defaultProps={from:"/",initialValues:null,redirectToPreviousPage(){}},_n.propTypes={allLayoutData:n().object.isRequired,allowedActions:n().object.isRequired,children:n().node.isRequired,componentsDataStructure:n().object.isRequired,contentTypeDataStructure:n().object.isRequired,createActionAllowedFields:n().array.isRequired,from:n().string,initialValues:n().object,isCreatingEntry:n().bool.isRequired,isLoadingForData:n().bool.isRequired,isSingleType:n().bool.isRequired,onPost:n().func.isRequired,onPublish:n().func.isRequired,onDraftRelationCheck:n().func.isRequired,onPut:n().func.isRequired,onUnpublish:n().func.isRequired,readActionAllowedFields:n().array.isRequired,redirectToPreviousPage:n().func,slug:n().string.isRequired,status:n().string.isRequired,updateActionAllowedFields:n().array.isRequired};const dd=_n,Ge=e=>de(`single-types/${e}`),ud=e=>Object.values(e||{}).reduce((o,r)=>Object.assign(o,r),{}),Jr=(e={})=>{const{plugins:o,_q:r,...s}={...e,...ud(e.plugins)};return r&&J()(s,"_q",encodeURIComponent(r)),`${(0,Ae.stringify)(s,{encode:!1,addQueryPrefix:!0})}`},_r=({allLayoutData:e,children:o,slug:r})=>{const s=(0,He.useQueryClient)(),{trackUsage:i}=(0,h.rS)(),{push:l}=(0,ae.k6)(),{setCurrentStep:a}=(0,h.c1)(),c=(0,t.useRef)(i),[u,d]=(0,t.useState)(!0),[{query:m,rawQuery:g}]=(0,h.Kx)(),p=Jr(m),y=(0,h.lm)(),b=(0,le.I0)(),{formatAPIError:C}=(0,h.So)(R),k=(0,h.kY)(),{post:M,put:E,del:P}=k,{componentsDataStructure:F,contentTypeDataStructure:T,data:D,isLoading:x,status:N}=(0,le.v9)(Kn),z=(0,t.useCallback)(W=>{const v=Xo(W,e.contentType,e.components);return(0,h.dU)(v,e.contentType,e.components)},[e]);(0,t.useEffect)(()=>()=>{b(Gr())},[b]),(0,t.useEffect)(()=>{const W=Object.keys(e.components).reduce((U,K)=>{const L=xt(I()(e,["components",K,"attributes"],{}),e.components);return U[K]=(0,h.dU)(L,e.components[K],e.components),U},{}),v=xt(e.contentType.attributes,e.components),A=(0,h.dU)(v,e.contentType,e.components);b(Qr(W,A))},[e,b]),(0,t.useEffect)(()=>{const v=Re.default.CancelToken.source();return(async U=>{b(Bt()),d(!0);try{const{data:K}=await k.get(Ge(`${r}${p}`),{cancelToken:U.token});b(Gn(z(K))),d(!1)}catch(K){if(Re.default.isCancel(K))return;const L=I()(K,"response.status",null);L===404&&b(Qn(g,!0)),L===403&&(y({type:"info",message:{id:R("permissions.not-allowed.update")}}),l("/"))}})(v),()=>v.cancel("Operation canceled by the user.")},[k,z,l,r,b,p,g,y]);const $=(0,t.useCallback)(W=>{y({type:"warning",message:C(W)})},[y,C]),H=(0,t.useCallback)(async W=>{try{c.current("willDeleteEntry",W);const{data:v}=await P(Ge(`${r}${p}`));return y({type:"success",message:{id:R("success.record.delete")}}),c.current("didDeleteEntry",W),d(!0),b(Qn(g,!0)),Promise.resolve(v)}catch(v){return c.current("didNotDeleteEntry",{error:v,...W}),$(v),Promise.reject(v)}},[P,r,$,y,p,b,g]),j=(0,t.useCallback)(async(W,v)=>{const A=Ge(`${r}${g}`);try{b(ce("submit-pending"));const{data:U}=await E(A,W);return c.current("didCreateEntry",v),y({type:"success",message:{id:R("success.record.save")}}),a("contentManager.success"),s.invalidateQueries(["relation"]),b(je(z(U))),d(!1),b(ce("resolved")),Promise.resolve(U)}catch(U){return c.current("didNotCreateEntry",{error:U,trackerProperty:v}),$(U),b(ce("resolved")),Promise.reject(U)}},[E,z,$,r,b,g,y,a,s]),Y=(0,t.useCallback)(async()=>{try{c.current("willCheckDraftRelations");const W=Ge(`${r}/actions/numberOfDraftRelations`);b(ce("draft-relation-check-pending"));const v=await k.get(W);return c.current("didCheckDraftRelations"),b(ce("resolved")),v.data.data}catch(W){return $(W),b(ce("resolved")),Promise.reject(W)}},[k,$,r,b]),B=(0,t.useCallback)(async()=>{try{c.current("willPublishEntry");const W=Ge(`${r}/actions/publish${p}`);b(ce("publish-pending"));const{data:v}=await M(W);return c.current("didPublishEntry"),y({type:"success",message:{id:R("success.record.publish")}}),b(je(z(v))),b(ce("resolved")),Promise.resolve(v)}catch(W){return $(W),b(ce("resolved")),Promise.reject(W)}},[M,z,$,r,p,b,y]),X=(0,t.useCallback)(async(W,v)=>{const A=Ge(`${r}${g}`);try{c.current("willEditEntry",v),b(ce("submit-pending"));const{data:U}=await E(A,W);return y({type:"success",message:{id:R("success.record.save")}}),c.current("didEditEntry",{trackerProperty:v}),s.invalidateQueries(["relation"]),b(je(z(U))),b(ce("resolved")),Promise.resolve(U)}catch(U){return $(U),c.current("didNotEditEntry",{error:U,trackerProperty:v}),b(ce("resolved")),Promise.reject(U)}},[E,z,$,r,b,g,y,s]),Z=(0,t.useCallback)(async()=>{const W=Ge(`${r}/actions/unpublish${p}`);b(ce("unpublish-pending"));try{c.current("willUnpublishEntry");const{data:v}=await M(W);c.current("didUnpublishEntry"),y({type:"success",message:{id:R("success.record.unpublish")}}),b(je(z(v))),b(ce("resolved"))}catch(v){b(ce("resolved")),$(v)}},[M,z,y,$,r,b,p]);return o({componentsDataStructure:F,contentTypeDataStructure:T,data:D,isCreatingEntry:u,isLoadingForData:x,onDelete:H,onPost:j,onDraftRelationCheck:Y,onPublish:B,onPut:X,onUnpublish:Z,redirectionLink:"/",status:N})};_r.propTypes={allLayoutData:n().shape({components:n().object.isRequired,contentType:n().object.isRequired}).isRequired,children:n().func.isRequired,slug:n().string.isRequired};const md=(0,t.memo)(_r);var pd=f(71818);function gd(e,o){return r=>{const s=o();return t.createElement(e,{...r,...s})}}const fd=gd;function hd(){const{initialData:e,hasDraftAndPublish:o}=(0,h.Wq)(),r=e.publishedAt!==void 0&&e.publishedAt!==null;return{hasDraftAndPublish:o,isPublished:r}}const yd=hd,bd=(0,q.ZP)(pd.Z)`
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  * {
    fill: ${({theme:e,$bulletColor:o})=>e.colors[o]};
  }
`,es=({hasDraftAndPublish:e,isPublished:o})=>{const{formatMessage:r}=(0,Q.Z)();if(!e)return null;const s={draft:{textColor:"secondary700",bulletColor:"secondary600",box:{background:"secondary100",borderColor:"secondary200"}},published:{textColor:"success700",bulletColor:"success600",box:{background:"success100",borderColor:"success200"}}},i=o?s.published:s.draft;return t.createElement(S.x,{hasRadius:!0,as:"aside",paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,...i.box},t.createElement(S.x,{as:w.k},t.createElement(bd,{$bulletColor:i.bulletColor}),t.createElement(S.x,{paddingLeft:3},t.createElement(G.Z,{textColor:i.textColor},r({id:R("containers.Edit.information.editing"),defaultMessage:"Editing"}),"\xA0"),t.createElement(G.Z,{fontWeight:"bold",textColor:i.textColor},o&&r({id:R("containers.Edit.information.publishedVersion"),defaultMessage:"published version"}),!o&&r({id:R("containers.Edit.information.draftVersion"),defaultMessage:"draft version"})))))};es.propTypes={hasDraftAndPublish:n().bool.isRequired,isPublished:n().bool.isRequired};const Ed=fd(es,yd);var eo=f(70004);const to=60*1e3,no=to*60,zt=no*24,ts=zt*30,ns=zt*365,Cd=e=>e<to?{unit:"second",value:-Math.round(e/1e3)}:e<no?{unit:"minute",value:-Math.round(e/to)}:e<zt?{unit:"hour",value:-Math.round(e/no)}:e<ts?{unit:"day",value:-Math.round(e/zt)}:e<ns?{unit:"month",value:-Math.round(e/ts)}:{unit:"year",value:-Math.round(e/ns)};var os=f(19631);const ht=({label:e,value:o})=>t.createElement(w.k,{justifyContent:"space-between"},t.createElement(G.Z,{as:"dt",fontWeight:"bold",textColor:"neutral600"},e),t.createElement(G.Z,{as:"dd"},o));ht.propTypes={label:n().string.isRequired,value:n().string.isRequired};const Rd=()=>{const{formatMessage:e,formatRelativeTime:o}=(0,Q.Z)(),{initialData:r,isCreatingEntry:s}=(0,h.Wq)(),i=(0,t.useRef)(Date.now()),l=(u,d)=>{const{firstname:m,lastname:g,username:p}=r[d]??{},y=m??"",b=g??"",C=p??(0,os.Pp)(y,b),M=(r[u]?new Date(r[u]).getTime():Date.now())-i.current,{unit:E,value:P}=Cd(-M);return{at:o(P,E,{numeric:"auto"}),by:s?"-":C}},a=l("updatedAt","updatedBy"),c=l("createdAt","createdBy");return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(G.Z,{variant:"sigma",textColor:"neutral600",id:"additional-information"},e({id:R("containers.Edit.information"),defaultMessage:"Information"})),t.createElement(S.x,{paddingBottom:4},t.createElement(eo.i,null)),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},t.createElement(ht,{label:e({id:R("containers.Edit.information.created"),defaultMessage:"Created"}),value:c.at}),t.createElement(ht,{label:e({id:R("containers.Edit.information.by"),defaultMessage:"By"}),value:c.by})),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},t.createElement(ht,{label:e({id:R("containers.Edit.information.lastUpdate"),defaultMessage:"Last update"}),value:a.at}),t.createElement(ht,{label:e({id:R("containers.Edit.information.by"),defaultMessage:"By"}),value:a.by}))))};var rt=f(85018),Vt=f(67109),Ut=f(47149),Ht=f(47824),Gt=f(98426);function vd(e,o){return r=>{const s=o();return t.createElement(e,{...r,...s})}}const Td=vd;function Md(){const{initialData:e,isCreatingEntry:o,isSingleType:r,status:s,layout:i,hasDraftAndPublish:l,modifiedData:a,onPublish:c,onUnpublish:u,publishConfirmation:d,onPublishPromptDismissal:m}=(0,h.Wq)();return{initialData:e,isCreatingEntry:o,isSingleType:r,status:s,layout:i,hasDraftAndPublish:l,modifiedData:a,onPublish:c,onUnpublish:u,publishConfirmation:d,onPublishPromptDismissal:m}}const Dd=Md,rs=(0,q.ZP)(w.k)`
  text-align: center;
`,ss=({allowedActions:{canUpdate:e,canCreate:o,canPublish:r},initialData:s,isCreatingEntry:i,isSingleType:l,hasDraftAndPublish:a,layout:c,modifiedData:u,onPublish:d,onUnpublish:m,status:g,publishConfirmation:{show:p,draftCount:y},onPublishPromptDismissal:b})=>{const{goBack:C}=(0,ae.k6)(),[k,M]=(0,t.useState)(!1),{formatMessage:E}=(0,Q.Z)(),P=I()(c,["settings","mainField"],"id"),F=I()(c,["info","displayName"],"NOT FOUND"),T=!gt()(s,u)||i&&!ye()(u);let x=E({id:R("containers.Edit.pluginHeader.title.new"),defaultMessage:"Create an entry"});!i&&!l&&(x=s[P]||F),l&&(x=F);let N=null;if(i&&o&&(N=t.createElement(w.k,{gap:2},a&&t.createElement(ue.z,{disabled:!0,startIcon:t.createElement(rt.Z,null),variant:"secondary"},E({id:"app.utils.publish",defaultMessage:"Publish"})),t.createElement(ue.z,{disabled:!T,loading:g==="submit-pending",type:"submit"},E({id:R("containers.Edit.submit"),defaultMessage:"Save"})))),!i&&e){const j=a&&r,Y=!ye()(s.publishedAt),B=Y?g==="unpublish-pending":g==="publish-pending",X=Y?{id:"app.utils.unpublish",defaultMessage:"Unpublish"}:{id:"app.utils.publish",defaultMessage:"Publish"},Z=Y?()=>M(!0):()=>d();N=t.createElement(w.k,null,j&&t.createElement(ue.z,{disabled:T,loading:B,onClick:Z,startIcon:t.createElement(rt.Z,null),variant:"secondary"},E(X)),t.createElement(S.x,{paddingLeft:j?2:0},t.createElement(ue.z,{disabled:!T,loading:g==="submit-pending",type:"submit"},E({id:R("containers.Edit.submit"),defaultMessage:"Save"}))))}const z=()=>M(j=>!j),$=()=>{z(),m()},H=`${E({id:R("api.id"),defaultMessage:"API ID "})} : ${c.apiID}`;return t.createElement(t.Fragment,null,t.createElement(Fe.T,{title:x.toString(),primaryAction:N,subtitle:H,navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Vt.Z,null),onClick:j=>{j.preventDefault(),C()},to:"/"},E({id:"global.back",defaultMessage:"Back"}))}),t.createElement(Ut.V,{onClose:z,title:"Confirmation",labelledBy:"confirmation",describedBy:"confirm-description",isOpen:k},t.createElement(Ht.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center",style:{textAlign:"center"}},t.createElement(G.Z,{id:"confirm-description"},E({id:R("popUpWarning.warning.unpublish"),defaultMessage:"Unpublish this content will automatically change it to a draft."},{br:()=>t.createElement("br",null)}))),t.createElement(w.k,{justifyContent:"center",style:{textAlign:"center"}},t.createElement(G.Z,{id:"confirm-description"},E({id:R("popUpWarning.warning.unpublish-question"),defaultMessage:"Are you sure you want to unpublish it?"}))))),t.createElement(Gt.c,{startAction:t.createElement(ue.z,{onClick:z,variant:"tertiary"},E({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{variant:"danger-light",onClick:$},E({id:"components.popUpWarning.button.confirm",defaultMessage:"Confirm"}))})),t.createElement(Ut.V,{onClose:b,title:E({id:R("popUpWarning.warning.has-draft-relations.title"),defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:p},t.createElement(Ht.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(rs,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},y,E({id:R("popUpwarning.warning.has-draft-relations.message"),defaultMessage:"<b>{count, plural, one { relation is} other { relations are}}</b> not published yet and might lead to unexpected behavior."},{b:j=>t.createElement(G.Z,{fontWeight:"bold"},j),count:y}))),t.createElement(rs,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},E({id:R("popUpWarning.warning.publish-question"),defaultMessage:"Do you still want to publish?"}))))),t.createElement(Gt.c,{startAction:t.createElement(ue.z,{onClick:b,variant:"tertiary"},E({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{variant:"success",onClick:d},E({id:R("popUpwarning.warning.has-draft-relations.button-confirm"),defaultMessage:"Publish"}))})))};ss.propTypes={allowedActions:n().shape({canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canPublish:n().bool.isRequired}).isRequired,initialData:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isSingleType:n().bool.isRequired,status:n().string.isRequired,layout:n().object.isRequired,hasDraftAndPublish:n().bool.isRequired,modifiedData:n().object.isRequired,onPublish:n().func.isRequired,onUnpublish:n().func.isRequired,publishConfirmation:n().shape({show:n().bool.isRequired,draftCount:n().number.isRequired}).isRequired,onPublishPromptDismissal:n().func.isRequired};const kd=(0,t.memo)(ss,qe()),Id=Td(kd,Dd),Ld=e=>{if(!e.layouts)return[];const o=e.layouts.edit,r=e.attributes,s=a=>I()(r,[a,"type"],"");let i=0;const l=[];return o.forEach(a=>{const c=a.some(({name:u})=>s(u)==="dynamiczone");l[i]||(l[i]=[]),c?(i=i===0&&ye()(l[0])?0:i+1,l[i]||(l[i]=[]),l[i].push(a),i+=1):l[i].push(a)}),l.filter(a=>a.length>0)};var xd=f(44908),Pd=f.n(xd),wd=f(94654),is=f.n(wd);const Fd=(e,o)=>{const r=s=>{const i=(0,h.ZT)(e,[{action:`plugin::content-manager.explorer.${s}`,subject:o}]);return Pd()(is()(i,"properties.fields"))};return{createActionAllowedFields:r("create"),readActionAllowedFields:r("read"),updateActionAllowedFields:r("update")}},Sd=e=>{if(!e)return[];const r=[...e.contentType.layouts.edit,...Object.values(e.components).flatMap(i=>i.layouts.edit)].flat().filter(i=>i.fieldSchema.customField).map(i=>i.fieldSchema.customField);return[...new Set(r)]};function Ad(e,o){return r=>{const s=o();return t.createElement(e,{...r,...s})}}const Od=Ad;function $d(){const{hasDraftAndPublish:e,modifiedData:o}=(0,h.Wq)();let r={};return e&&(r=ye()(o.publishedAt)?{status:"draft"}:{status:"published"}),{hasDraftAndPublish:e,trackerProperty:r}}const Zd=$d,as=({onDelete:e,trackerProperty:o})=>{const[r,s]=(0,t.useState)(!1),[i,l]=(0,t.useState)(!1),{formatMessage:a}=(0,Q.Z)(),{formatAPIError:c}=(0,h.So)(R),u=(0,h.lm)(),d=()=>s(g=>!g),m=async()=>{try{l(!0),await e(o),l(!1),d()}catch(g){l(!1),d(),u({type:"warning",message:c(g)})}};return t.createElement(t.Fragment,null,t.createElement(ue.z,{onClick:d,size:"S",startIcon:t.createElement(Se.Z,null),variant:"danger-light"},a({id:R("containers.Edit.delete-entry"),defaultMessage:"Delete this entry"})),t.createElement(h.QH,{isConfirmButtonLoading:i,isOpen:r,onConfirm:m,onToggleDialog:d}))};as.propTypes={onDelete:n().func.isRequired,trackerProperty:n().object.isRequired};const qd=(0,t.memo)(as,qe()),Nd=Od(qd,Zd),oo=({columns:e,customFieldInputs:o})=>t.createElement(ke.r,{gap:4},e.map(({fieldSchema:r,labelAction:s,metadatas:i,name:l,size:a,queryInfos:c})=>{if(r.type==="component"){const{component:d,max:m,min:g,repeatable:p=!1,required:y=!1}=r;return t.createElement(fe.P,{col:a,s:12,xs:12,key:d},t.createElement(Zt,{componentUid:d,labelAction:s,isRepeatable:p,intlLabel:{id:i.label,defaultMessage:i.label},max:m,min:g,name:l,required:y}))}return t.createElement(fe.P,{col:a,key:l,s:12,xs:12},t.createElement(Fn,{size:a,fieldSchema:r,keys:l,labelAction:s,metadatas:i,queryInfos:c,customFieldInputs:o}))}));oo.defaultProps={customFieldInputs:{}},oo.propTypes={columns:n().array.isRequired,customFieldInputs:n().object};const jd=oo,ro=e=>e["content-manager_editViewLayoutManager"].currentLayout,Bd=(0,_e.P1)(ro,e=>Ld(e?.contentType??{})),Wd=(0,_e.P1)(ro,e=>Sd(e)),ls=Ke.Z.contentManager,zd=[{action:"plugin::content-type-builder.read",subject:null}],so=({allowedActions:e,isSingleType:o,goBack:r,slug:s,id:i,origin:l,userPermissions:a})=>{const{trackUsage:c}=(0,h.rS)(),{formatMessage:u}=(0,Q.Z)(),{layout:d,formattedContentTypeLayout:m,customFieldUids:g}=(0,le.v9)(T=>({layout:ro(T),formattedContentTypeLayout:Bd(T),customFieldUids:Wd(T)})),{isLazyLoading:p,lazyComponentStore:y}=Sn(g),{createActionAllowedFields:b,readActionAllowedFields:C,updateActionAllowedFields:k}=Fd(a,s),M=o?ls.singleTypesConfigurations:ls.collectionTypesConfigurations,E=`/content-manager/${o?"singleType":"collectionType"}/${s}/configurations/edit`,P=o?md:Hc,F=T=>T.every(D=>D.every(x=>x.fieldSchema.type==="dynamiczone"));return p?t.createElement(h.dO,null):t.createElement(P,{allLayoutData:d,slug:s,id:i,origin:l},({componentsDataStructure:T,contentTypeDataStructure:D,data:x,isCreatingEntry:N,isLoadingForData:z,onDelete:$,onPost:H,onPublish:j,onDraftRelationCheck:Y,onPut:B,onUnpublish:X,redirectionLink:Z,status:W})=>t.createElement(dd,{allowedActions:e,allLayoutData:d,createActionAllowedFields:b,componentsDataStructure:T,contentTypeDataStructure:D,from:Z,initialValues:x,isCreatingEntry:N,isLoadingForData:z,isSingleType:o,onPost:H,onPublish:j,onDraftRelationCheck:Y,onPut:B,onUnpublish:X,readActionAllowedFields:C,redirectToPreviousPage:r,slug:s,status:W,updateActionAllowedFields:k},t.createElement(Te.o,{"aria-busy":W!=="resolved"},t.createElement(Id,{allowedActions:e}),t.createElement(tt.D,null,t.createElement(ke.r,{gap:4},t.createElement(fe.P,{col:9,s:12},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},m.map((v,A)=>{if(F(v)){const{0:{0:{name:U,fieldSchema:K,metadatas:L,labelAction:O}}}=v;return t.createElement(S.x,{key:A},t.createElement(ke.r,{gap:4},t.createElement(fe.P,{col:12,s:12,xs:12},t.createElement(Vc,{name:U,fieldSchema:K,labelAction:O,metadatas:L}))))}return t.createElement(S.x,{key:A,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},v.map((U,K)=>t.createElement(jd,{columns:U,customFieldInputs:y,key:K}))))}))),t.createElement(fe.P,{col:3,s:12},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(Ed,null),t.createElement(S.x,{as:"aside","aria-labelledby":"additional-information",background:"neutral0",borderColor:"neutral150",hasRadius:!0,paddingBottom:4,paddingLeft:4,paddingRight:4,paddingTop:6,shadow:"tableShadow"},t.createElement(Rd,null),t.createElement(Ot,{area:"contentManager.editView.informations"})),t.createElement(S.x,{as:"aside","aria-labelledby":"links"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(Ot,{area:"contentManager.editView.right-links",slug:s}),s!=="strapi::administrator"&&t.createElement(h.jW,{permissions:zd},t.createElement(h.Qj,{onClick:()=>{c("willEditEditLayout")},size:"S",startIcon:t.createElement(Ye.Z,null),style:{width:"100%"},to:`/plugins/content-type-builder/content-types/${s}`,variant:"secondary"},u({id:R("link-to-ctb"),defaultMessage:"Edit the model"}))),t.createElement(h.jW,{permissions:M},t.createElement(h.Qj,{size:"S",startIcon:t.createElement(da.Z,null),style:{width:"100%"},to:E,variant:"secondary"},u({id:"app.links.configure-view",defaultMessage:"Configure the view"}))),e.canDelete&&!N&&t.createElement(Nd,{onDelete:$}))))))))))};so.defaultProps={id:null,isSingleType:!1,origin:null,userPermissions:[]},so.propTypes={allowedActions:n().shape({canRead:n().bool.isRequired,canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canDelete:n().bool.isRequired}).isRequired,id:n().string,isSingleType:n().bool,goBack:n().func.isRequired,origin:n().string,slug:n().string.isRequired,userPermissions:n().array};const Vd=(0,t.memo)(so),io=e=>{const o=(0,t.useMemo)(()=>Go(e.slug),[e.slug]),{isLoading:r,allowedActions:s}=(0,h.ss)(o,e.userPermissions);return r?t.createElement(h.dO,null):t.createElement(Vd,{...e,allowedActions:s})};io.defaultProps={permissions:[]},io.propTypes={permissions:n().array,slug:n().string.isRequired,userPermissions:n().array.isRequired};const Ud=(0,t.memo)(io,qe()),cs=({layout:e,...o})=>{const r=(0,le.v9)(or),s=(0,le.I0)(),[{query:i}]=(0,h.Kx)(),{runHookWaterfall:l}=(0,h.j1)(),a=gr(i,o.slug,"editView");return(0,t.useEffect)(()=>{const c=l(At.Eo,{layout:e,query:i});return s(la(c.layout,i)),()=>{s(aa())}},[e,s,i,l]),!r||!a?t.createElement(h.dO,null):t.createElement(Ud,{...o,userPermissions:a})};cs.propTypes={layout:n().shape({components:n().object.isRequired,contentType:n().shape({uid:n().string.isRequired,settings:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().object.isRequired}).isRequired}).isRequired};const Qt=cs;var Hd=f(11700),yt=f.n(Hd);const ao=e=>e.reduce((o,r)=>o+r.size,0),Gd=e=>e.reduce((o,r,s)=>{const i={rowId:s,rowContent:r};return o.concat(i)},[]),st=e=>e.reduce((o,r)=>{let s=[];const i=r.rowContent.reduce((c,u)=>{const d=ao(c);return u.name==="_TEMP_"||(d+u.size<=12?c.push(u):s.push(u)),c},[]),l=o.length===0?0:Math.max.apply(Math,o.map(c=>c.rowId))+1,a=ao(i);if(a<12&&i.push({name:"_TEMP_",size:12-a}),o.push({rowId:l,rowContent:i}),s.length>0){const c=ao(s);c<12&&s.push({name:"_TEMP_",size:12-c}),o.push({rowId:l+1,rowContent:s}),s=[]}return o},[]).filter(o=>o.rowContent.length>0).filter(o=>o.rowContent.length===1?o.rowContent[0].name!=="_TEMP_":!0),Qd=e=>e.reduce((o,r)=>{const s=r.rowContent.filter(i=>i.name!=="_TEMP_");return o.concat([s])},[]),Kd=(e,o=[])=>o.reduce((r,{rowContent:s})=>{const i=s.find(l=>l.name===e)?.size??null;return i&&(r=i),r},null),Yd=(e,o,r=[])=>r.map(s=>(s.rowContent=s.rowContent.map(i=>i.name===e?{...i,size:o}:i),s)),ds=6,lo={fieldForm:{},componentLayouts:{},metaToEdit:"",initialData:{},metaForm:{},modifiedData:{}},Xd=(e=lo,o)=>(0,St.ZP)(e,r=>{const s=["modifiedData","layouts","edit"];switch(o.type){case"MOVE_ROW":{const i=I()(e,s,[]),{fromIndex:l,toIndex:a}=o;J()(r,s,It(i,l,a));break}case"ON_ADD_FIELD":{const i=De()(e),l=I()(i,["modifiedData","attributes",o.name,"type"],""),a=o.fieldSizes[l]?.default??ds,c=I()(i,s,[]).length,u=[...s,c-1,"rowContent"],d=I()(i,u,[]);let m=I()(i,s,[]);Array.isArray(d)?J()(m,[c>0?c-1:0,"rowContent"],[...d,{name:o.name,size:a}]):J()(m,[c>0?c-1:0,"rowContent"],[{name:o.name,size:a}]);const g=st(m);J()(r,s,g);break}case"ON_CHANGE":{J()(r,["modifiedData",...o.keys],o.value);break}case"ON_CHANGE_META":{J()(r,["metaForm","metadata",...o.keys],o.value);break}case"ON_CHANGE_SIZE":{J()(r,["metaForm","size"],o.value);break}case"ON_RESET":{r.modifiedData=e.initialData;break}case"REMOVE_FIELD":{const i=I()(e,[...s,o.rowIndex,"rowContent"],[]);let l=De()(e);if(i.length===1||i.length===2&&I()(i,[1,"name"],"")==="_TEMP_"){const c=I()(e,s,[]);J()(l,s,c.filter((u,d)=>o.rowIndex!==d))}else J()(l,[...s,o.rowIndex,"rowContent"],i.filter((c,u)=>u!==o.fieldIndex));const a=st(I()(l,s,[]));J()(r,s,a);break}case"REORDER_DIFF_ROW":{const i=I()(e,[...s,o.dragRowIndex,"rowContent"],[]),l=I()(e,[...s,o.hoverRowIndex,"rowContent"],[]),a=I()(e,[...s,o.dragRowIndex,"rowContent",o.dragIndex],{}),c=[...l,a];let u=De()(e);J()(u,[...s,o.dragRowIndex,"rowContent"],i.filter((m,g)=>o.dragIndex!==g)),J()(u,[...s,o.hoverRowIndex,"rowContent"],It(c,c.length-1,o.hoverIndex));const d=st(I()(u,s,[]));J()(r,s,d);break}case"REORDER_ROW":{const i=De()(e),l=I()(i,[...s,o.dragRowIndex,"rowContent"],[]);J()(i,[...s,o.dragRowIndex,"rowContent"],It(l,o.dragIndex,o.hoverIndex));const a=st(I()(i,s,[]));J()(r,s,a);break}case"SET_FIELD_TO_EDIT":{r.metaToEdit=o.name,r.metaForm={metadata:I()(e,["modifiedData","metadatas",o.name,"edit"],{}),size:Kd(o.name,e.modifiedData?.layouts?.edit)??ds};break}case"SUBMIT_META_FORM":{J()(r,["modifiedData","metadatas",e.metaToEdit,"edit"],e.metaForm.metadata);const i=De()(I()(e,s,[])),l=Yd(e.metaToEdit,e.metaForm.size,i);l.length>0&&J()(r,s,st(l));break}case"SUBMIT_SUCCEEDED":{r.initialData=e.modifiedData;break}case"UNSET_FIELD_TO_EDIT":{r.metaToEdit="",r.metaForm={};break}default:return r}}),Jd=(e,o,r)=>{let s=De()(o);return J()(s,["layouts","edit"],st(Gd(o.layouts.edit))),{...e,initialData:s,modifiedData:s,componentLayouts:r}};var we=f(17205),us=f(78114);const ms=({componentUid:e})=>{const{componentLayouts:o}=Ue(),{formatMessage:r}=(0,Q.Z)(),s=I()(o,[e],{}),i=I()(s,["layouts","edit"],[]);return t.createElement(S.x,{padding:3},i.map((l,a)=>t.createElement(ke.r,{gap:4,key:a},l.map(c=>t.createElement(fe.P,{key:c.name,col:c.size},t.createElement(S.x,{paddingTop:2},t.createElement(w.k,{alignItems:"center",background:"neutral0",paddingLeft:3,paddingRight:3,height:`${32/16}rem`,hasRadius:!0,borderColor:"neutral200"},t.createElement(G.Z,{textColor:"neutral800"},c.name))))))),t.createElement(S.x,{paddingTop:2},t.createElement(h.rU,{startIcon:t.createElement(us.Z,null),to:`/content-manager/components/${e}/configurations/edit`},r({id:R("components.FieldItem.linkToComponentLayout"),defaultMessage:"Set the component's layout"}))))};ms.propTypes={componentUid:n().string.isRequired};const _d=ms;var it=f(73727);const eu=(0,q.ZP)(w.k)`
  text-decoration: none;

  &:focus,
  &:hover {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-color: ${e.colors.primary200};

      ${G.Z} {
          color: ${e.colors.primary600};
      }
    `}

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,ps=({components:e})=>{const{componentLayouts:o}=Ue();return t.createElement(w.k,{gap:2,overflow:"scroll hidden",padding:3},e.map(r=>t.createElement(eu,{hasRadius:!0,background:"neutral0",justifyContent:"center",alignItems:"center",height:`${84/16}rem`,minWidth:`${140/16}rem`,key:r,padding:2,direction:"column",borderColor:"neutral200",as:it.rU,to:`/content-manager/components/${r}/configurations/edit`},t.createElement(jt,null),t.createElement(S.x,{paddingTop:1},t.createElement(G.Z,{fontSize:1,textColor:"neutral600",fontWeight:"bold"},o?.[r]?.info?.displayName??"")))))};ps.propTypes={components:n().arrayOf(n().string).isRequired};const tu=ps,gs=(0,q.ZP)(ge.h)`
  background-color: transparent;
  path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,co=({attribute:e,onEditField:o,onDeleteField:r,children:s})=>{const{formatMessage:i}=(0,Q.Z)();return t.createElement(S.x,{overflow:"hidden",width:"100%"},t.createElement(w.k,{paddingLeft:3,alignItems:"center",justifyContent:"space-between"},t.createElement(G.Z,{fontWeight:"semiBold",textColor:"neutral800",ellipsis:!0},s),t.createElement(w.k,null,t.createElement(gs,{label:i({id:R("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:s}),onClick:o,icon:t.createElement(Ye.Z,null),noBorder:!0}),t.createElement(gs,{label:i({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:s}),"data-testid":"delete-field",onClick:r,icon:t.createElement(Se.Z,null),noBorder:!0}))),e?.type==="component"&&t.createElement(_d,{componentUid:e.component}),e?.type==="dynamiczone"&&t.createElement(tu,{components:e.components}))};co.defaultProps={attribute:void 0},co.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),onEditField:n().func.isRequired,onDeleteField:n().func.isRequired,children:n().string.isRequired};const nu=co,ou=(0,q.ZP)(w.k)`
  position: relative;
  ${({isFirst:e,isLast:o,hasHorizontalPadding:r})=>e?`
        padding-right: 4px;
      `:o?`
        padding-left: 4px;
      `:r?`
        padding: 0 4px;
      `:""}
  ${({showRightCarret:e,showLeftCarret:o,theme:r})=>e?`
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${r.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:o?`
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${r.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:""};
`,ru=(0,q.ZP)($e.Z)`
  height: ${12/16}rem;
  width: ${12/16}rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,su=(0,q.ZP)(w.k)`
  display: ${({dragStart:e})=>e?"none":"flex"};
  opacity: ${({isDragging:e,isFullSize:o,isHidden:r})=>e&&!o?.2:e&&o||r?0:1};
`,iu=(0,q.ZP)(w.k)`
  cursor: all-scroll;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,uo=({attribute:e,children:o,index:r,lastIndex:s,moveItem:i,moveRow:l,name:a,onDeleteField:c,onEditField:u,rowIndex:d,size:m})=>{const[g,p]=(0,t.useState)(!1),y=a==="_TEMP_",{setIsDraggingSibling:b}=Ue(),C=m===12,k=(0,t.useRef)(null),M=(0,t.useRef)(null),[{clientOffset:E,isOver:P},F]=(0,ze.useDrop)({accept:Ce.EDIT_FIELD,hover(Z,W){if(!M.current||Z.size!==12)return;const v=W.getItem().index,A=r,U=W.getItem().rowIndex,K=d;if(v===A&&U===K)return;const L=M.current.getBoundingClientRect(),O=(L.bottom-L.top)/2,ee=W.getClientOffset().y-L.top;U<K&&ee<O||U>K&&ee>O||(l(U,K),Z.rowIndex=K,Z.itemIndex=A)},drop(Z,W){if(!M.current)return;const v=W.getItem().index,A=r,U=W.getItem().rowIndex,K=d;if(Z.size===12||v===A&&U===K)return;const L=M.current.getBoundingClientRect();if(Math.abs(W.getClientOffset().x-L.left)>L.width/1.8){i(v,A+1,U,K),Z.itemIndex=A+1,Z.rowIndex=K;return}i(v,A,U,K),Z.itemIndex=A,Z.rowIndex=K},collect:Z=>({canDrop:Z.canDrop(),clientOffset:Z.getClientOffset(),isOver:Z.isOver(),isOverCurrent:Z.isOver({shallow:!0}),itemType:Z.getItemType()})}),[{isDragging:T,getItem:D},x,N]=(0,ze.useDrag)({type:Ce.EDIT_FIELD,item(){return b(!0),{index:r,labelField:o,rowIndex:d,name:a,size:m}},canDrag(){return a!=="_TEMP_"},collect:Z=>({isDragging:Z.isDragging(),getItem:Z.getItem()}),end(){b(!1)}});(0,t.useEffect)(()=>{N((0,ct.rX)(),{captureDraggingState:!0})},[N]);const z={dragRef:x(k),dropRef:F(M)};let $=!1,H=!1;if(M.current&&E){const Z=M.current.getBoundingClientRect();$=P&&D.size!==12&&Math.abs(E.x-Z.left)<Z.width/2,H=P&&D.size!==12&&Math.abs(E.x-Z.left)>Z.width/2,a==="_TEMP_"&&($=P&&D.size!==12,H=!1)}const j=()=>e&&C?`${74/16}rem`:`${32/16}rem`,Y=r===0&&!C,B=r===s&&!C,X=r!==0&&!C;return t.createElement(fe.P,{col:m},t.createElement(ou,{ref:z.dropRef,showLeftCarret:$,showRightCarret:H,isFirst:Y,isLast:B,hasHorizontalPadding:X,onDrag:()=>{C&&!g&&p(!0)},onDragEnd:()=>{C&&p(!1)}},g&&C&&t.createElement(S.x,{width:"100%",height:"2px",background:"primary600"}),t.createElement(su,{width:C&&g?0:"100%",borderColor:"neutral150",hasRadius:!0,background:"neutral100",minHeight:j(),alignItems:"stretch",isDragging:T,dragStart:g,isFullSize:C,isHidden:y},t.createElement(iu,{as:"span",type:"button",ref:z.dragRef,onClick:Z=>Z.stopPropagation(),alignItems:"center",paddingLeft:3,paddingRight:3,tabIndex:-1},t.createElement(ru,null)),!y&&t.createElement(nu,{attribute:e,onEditField:u,onDeleteField:c},o))))};uo.defaultProps={attribute:void 0},uo.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),children:n().string.isRequired,index:n().number.isRequired,moveItem:n().func.isRequired,moveRow:n().func.isRequired,name:n().string.isRequired,onDeleteField:n().func.isRequired,onEditField:n().func.isRequired,rowIndex:n().number.isRequired,lastIndex:n().number.isRequired,size:n().number.isRequired};const au=uo,fs=({rowItem:e,onRemoveField:o,rowId:r,rowIndex:s,index:i,lastIndex:l})=>{const{setEditFieldToSelect:a,attributes:c,modifiedData:u,moveRow:d,moveItem:m}=Ue(),g=I()(c,[e.name],{}),p=I()(u,["metadatas",e.name,"edit","label"],"");return t.createElement(au,{onEditField:()=>a(e.name),onDeleteField:()=>o(r,i),attribute:g,index:i,lastIndex:l,rowIndex:s,name:e.name,size:e.size,moveRow:d,moveItem:m},p||e.name)};fs.propTypes={index:n().number.isRequired,lastIndex:n().number.isRequired,onRemoveField:n().func.isRequired,rowId:n().number.isRequired,rowIndex:n().number.isRequired,rowItem:n().object.isRequired};const lu=fs,hs=({row:e,onRemoveField:o,rowIndex:r})=>t.createElement(ke.r,null,e.rowContent.map((s,i)=>t.createElement(lu,{key:s.name,rowItem:s,index:i,rowId:e.rowId,onRemoveField:o,rowIndex:r,lastIndex:e.rowContent.length-1})));hs.propTypes={onRemoveField:n().func.isRequired,row:n().object.isRequired,rowIndex:n().number.isRequired};const cu=hs,du=[{action:"plugin::content-type-builder.read",subject:null}],uu=()=>{const{trackUsage:e}=(0,h.rS)(),{formatMessage:o}=(0,Q.Z)(),{slug:r,modifiedData:s,isContentTypeView:i}=Ue(),l=i?"content-types":"components",a=`/plugins/content-type-builder/${l==="content-types"?l:"component-categories"}`,c=I()(s,"category",""),u=l==="content-types"?r:`${c}/${r}`,d=()=>{e("willEditEditLayout")};return r==="strapi::administrator"?null:t.createElement(h.jW,{permissions:du},t.createElement(h.Qj,{to:`${a}/${u}`,onClick:d,size:"S",startIcon:t.createElement(Ye.Z,null),variant:"secondary"},o({id:R(`edit-settings-view.link-to-ctb.${l}`),defaultMessage:"Edit the content type"})))},ys=({editLayout:e,fields:o,onRemoveField:r,onAddField:s})=>{const{formatMessage:i}=(0,Q.Z)();return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(w.k,{justifyContent:"space-between"},t.createElement("div",null,t.createElement(S.x,null,t.createElement(G.Z,{fontWeight:"bold"},i({id:R("containers.ListPage.displayedFields"),defaultMessage:"Displayed fields"}))),t.createElement(S.x,null,t.createElement(G.Z,{variant:"pi",textColor:"neutral600"},i({id:"containers.SettingPage.editSettings.description",defaultMessage:"Drag & drop the fields to build the layout"})))),t.createElement(uu,null)),t.createElement(S.x,{padding:4,hasRadius:!0,borderStyle:"dashed",borderWidth:"1px",borderColor:"neutral300"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},e.map((l,a)=>t.createElement(cu,{key:l.rowId,row:l,rowIndex:a,onRemoveField:r})),t.createElement(we.O,{id:"label",label:i({id:R("containers.SettingPage.add.field"),defaultMessage:"Insert another field"}),as:ue.z,"data-testid":"add-field",fullWidth:!0,startIcon:t.createElement(pt.Z,null),endIcon:null,variant:"secondary",disabled:o.length===0},o.map(l=>t.createElement(we.s,{key:l,onClick:()=>s(l)},l))))))};ys.propTypes={editLayout:n().array.isRequired,fields:n().array.isRequired,onAddField:n().func.isRequired,onRemoveField:n().func.isRequired};const mu=ys;var bs=f(42866),Es=f(24969),Cs=f(59946),Rs=f(36856),bt=f(31666),pu=f(14484),Kt=f(34668),gu=f(73145),vs=f(82574),mo=f(74525),fu=f(48394),po=f(21210),hu=f(60133),yu=f(55884),bu=f(85038),Eu=f(65531);const Ts={biginteger:t.createElement(bt.Z,null),boolean:t.createElement(pu.Z,null),date:t.createElement(Kt.Z,null),datetime:t.createElement(Kt.Z,null),decimal:t.createElement(bt.Z,null),email:t.createElement(gu.Z,null),enum:t.createElement(vs.Z,null),enumeration:t.createElement(vs.Z,null),file:t.createElement(mo.Z,null),files:t.createElement(mo.Z,null),float:t.createElement(bt.Z,null),integer:t.createElement(bt.Z,null),media:t.createElement(mo.Z,null),number:t.createElement(bt.Z,null),relation:t.createElement(fu.Z,null),string:t.createElement(po.Z,null),text:t.createElement(po.Z,null),richtext:t.createElement(po.Z,null),time:t.createElement(Kt.Z,null),timestamp:t.createElement(Kt.Z,null),json:t.createElement(hu.Z,null),uid:t.createElement(yu.Z,null),component:t.createElement(bu.Z,null),dynamiczone:t.createElement(Eu.Z,null)},go=({type:e,customFieldUid:o})=>{const r=(0,h.mZ)();let s=Ts[e];if(o){const l=r.get(o).icon;l&&(s=t.createElement(S.x,{marginRight:3,width:7,height:6},t.createElement(l,null)))}return Ts[e]?s:null};go.defaultProps={customFieldUid:null},go.propTypes={type:n().string.isRequired,customFieldUid:n().string};const Ms=go,Cu=e=>e.reduce((o,r)=>{const s=r?.attributes??{},i=Object.keys(s).filter(l=>!["boolean","component","dynamiczone","json","media","password","relation","text","richtext"].includes(s?.[l]?.type??""));return o[r.uid]=i,o},{}),Ds=e=>{let o;switch(e){case"description":case"label":case"placeholder":o="text";break;case"mainField":o="select";break;case"editable":o="bool";break;default:o=""}const r=R(e==="mainField"?"containers.SettingPage.editSettings.entry.title":`form.Input.${e}`);return{type:o,label:{id:r}}};var Et=f(20707);const fo=({type:e,options:o,onChange:r,value:s,name:i,...l})=>{const{formatMessage:a}=(0,Q.Z)();switch(e){case"text":return t.createElement(kn.o,{onChange:r,value:s,name:i,...l});case"bool":return t.createElement(Et.s,{onChange:c=>{r({target:{name:i,value:c.target.checked}})},checked:s,name:i,onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),...l});case"select":return t.createElement(Pe.P,{value:s,name:i,onChange:c=>r({target:{name:i,value:c}}),...l},o.map(c=>t.createElement(he.W,{key:c,value:c},c)));default:return null}};fo.defaultProps={options:void 0},fo.propTypes={type:n().string.isRequired,options:n().arrayOf(n().string),onChange:n().func.isRequired,value:n().oneOfType([n().string,n().bool]).isRequired,name:n().string.isRequired};const Ru=fo,vu=[[4,"33%"],[6,"50%"],[8,"66%"],[12,"100%"]],Tu=[1,5,10,15,30,60],Mu=["datetime","time"],ks=({onMetaChange:e,onSizeChange:o})=>{const{formatMessage:r}=(0,Q.Z)(),{modifiedData:s,selectedField:i,attributes:l,fieldForm:a}=Ue(),c=(0,t.useMemo)(ln,[]),{schemas:u}=(0,le.v9)(E=>c(E),le.wU),d=(0,le.v9)(ar),m=(0,t.useMemo)(()=>{if(!i)return[];const E=I()(s,["metadatas",i,"edit"],{});return Object.keys(E).filter(P=>P!=="visible")},[i,s]),g=(0,t.useMemo)(()=>Cu(u),[u]),p=(0,t.useCallback)(E=>{if(E!=="relation"&&E!=="component")return[];const P=E==="component"?"component":"targetModel",F=I()(s,["attributes",i,P],"");return I()(g,[F],[])},[i,g,s]),y=m.map(E=>{const P=I()(l,[i,"type"]);return["component","dynamiczone"].includes(P)&&!["label","description"].includes(E)||P==="component"&&E!=="label"||["media","json","boolean"].includes(P)&&E==="placeholder"||E==="step"?null:t.createElement(fe.P,{col:6,key:E},t.createElement(Ru,{type:Ds(E).type,hint:E==="mainField"?r({id:R("containers.SettingPage.editSettings.relation-field.description")}):"",label:r({id:I()(Ds(E),"label.id","app.utils.defaultMessage")}),name:E,onChange:e,value:I()(a,["metadata",E],""),options:p(P)}))}),{isResizable:b}=d[l[i].type],C=t.createElement(fe.P,{col:6,key:"size"},t.createElement(Pe.P,{value:a?.size,name:"size",onChange:E=>{o({name:i,value:E})},label:r({id:R("containers.SettingPage.editSettings.size.label"),defaultMessage:"Size"})},vu.map(([E,P])=>t.createElement(he.W,{key:E,value:E},P)))),k=Mu.includes(l[i].type),M=t.createElement(fe.P,{col:6,key:"step"},t.createElement(Pe.P,{value:I()(a,["metadata","step"],1),name:"step",onChange:E=>e({target:{name:"step",value:E}}),label:r({id:R("containers.SettingPage.editSettings.step.label"),defaultMessage:"Time interval (minutes)"})},Tu.map(E=>t.createElement(he.W,{key:E,value:E},E))));return t.createElement(t.Fragment,null,y,b&&C,k&&M)};ks.propTypes={onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired};const Du=ks,ku=(0,q.ZP)(w.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:e})=>e.spaces[3]};
  }
`,ho=({onToggle:e,onMetaChange:o,onSizeChange:r,onSubmit:s,type:i,customFieldUid:l})=>{const{selectedField:a}=Ue(),{formatMessage:c}=(0,Q.Z)(),u=()=>i==="timestamp"?"date":["decimal","float","integer","biginter"].includes(i)?"number":i;return t.createElement(bs.P,{onClose:e,labelledBy:"title"},t.createElement("form",{onSubmit:s},t.createElement(Es.x,null,t.createElement(ku,null,t.createElement(Ms,{type:u(),customFieldUid:l}),t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:R("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:yt()(a)})))),t.createElement(Cs.f,null,t.createElement(ke.r,{gap:4},t.createElement(Du,{onMetaChange:o,onSizeChange:r}))),t.createElement(Rs.m,{startActions:t.createElement(ue.z,{onClick:e,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ue.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};ho.defaultProps={customFieldUid:null},ho.propTypes={customFieldUid:n().string,onSubmit:n().func.isRequired,onToggle:n().func.isRequired,onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired,type:n().string.isRequired};const Iu=ho,Lu=(e,o,r)=>{const{put:s}=(0,h.tg)();return s(de(r?`content-types/${o}/configuration`:`components/${o}/configuration`),e)},yo=({mainLayout:e,components:o,isContentTypeView:r,slug:s,updateLayout:i})=>{const[l,a]=(0,t.useReducer)(Xd,lo,()=>Jd(lo,e,o)),[c,u]=(0,t.useState)(!1),{trackUsage:d}=(0,h.rS)(),m=(0,h.lm)(),{goBack:g}=(0,ae.k6)(),[p,y]=(0,t.useState)(!1),[b,C]=(0,t.useState)(!1),{componentLayouts:k,initialData:M,modifiedData:E,metaToEdit:P,metaForm:F}=l,{formatMessage:T}=(0,Q.Z)(),D=I()(e,["info","displayName"],""),x=I()(E,["attributes"],{}),N=(0,le.v9)(ar),z=Object.keys(x).filter(V=>{const se=I()(x,[V,"type"],"");return!["dynamiczone","json","text","relation","component","boolean","media","password","richtext","timestamp"].includes(se)&&!!se}),$=I()(E,["layouts","edit"],[]),H=is()($,"rowContent"),j=Object.keys(E.attributes).filter(V=>I()(E,["metadatas",V,"edit","visible"],!1)===!0).filter(V=>H.findIndex(se=>se.name===V)===-1).sort(),Y=({target:{name:V,value:se}})=>{a({type:"ON_CHANGE",keys:V.split("."),value:se})},B=()=>{y(V=>!V)},X=()=>{C(V=>!V)},Z=({target:{name:V,value:se}})=>{a({type:"ON_CHANGE_META",keys:V.split("."),value:se})},W=({name:V,value:se})=>{a({type:"ON_CHANGE_SIZE",name:V,value:se})},v=V=>{V.preventDefault(),a({type:"SUBMIT_META_FORM"}),B()},A=V=>{V.preventDefault(),X()},U=(0,He.useMutation)(V=>Lu(V,s,r),{onSuccess({data:V}){i&&i(V.data),a({type:"SUBMIT_SUCCEEDED"}),X(),d("didEditEditSettings")},onError(){m({type:"warning",message:{id:"notification.error"}})}}),{isLoading:K}=U,L=()=>{const V=Ln()(De()(E),["layouts","metadatas","settings"]);J()(V,"layouts.edit",Qd(V.layouts.edit)),U.mutate(V)},O=(V,se)=>{a({type:"MOVE_RELATION",fromIndex:V,toIndex:se})},oe=(V,se)=>{a({type:"MOVE_FIELD",fromIndex:V,toIndex:se})},ee=(V,se,be,Oe)=>{a(be===Oe?{type:"REORDER_ROW",dragRowIndex:be,dragIndex:V,hoverIndex:se}:{type:"REORDER_DIFF_ROW",dragIndex:V,hoverIndex:se,dragRowIndex:be,hoverRowIndex:Oe})},re=(V,se)=>{a({type:"MOVE_ROW",fromIndex:V,toIndex:se})};return t.createElement(Zo,{isContentTypeView:r,attributes:x,modifiedData:E,slug:s,componentLayouts:k,selectedField:P,fieldForm:F,onMoveRelation:O,onMoveField:oe,moveRow:re,moveItem:ee,setEditFieldToSelect:V=>{a({type:"SET_FIELD_TO_EDIT",name:V}),B()},isDraggingSibling:c,setIsDraggingSibling:u},t.createElement(Te.o,null,t.createElement("form",{onSubmit:A},t.createElement(Fe.T,{title:T({id:R("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:`Configure the view - ${yt()(D)}`},{name:yt()(D)}),subtitle:T({id:R("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),defaultMessage:"Customize how the edit view will look like."}),navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Vt.Z,null),onClick:V=>{V.preventDefault(),g()},to:"/"},T({id:"global.back",defaultMessage:"Back"})),primaryAction:t.createElement(ue.z,{disabled:gt()(M,E),startIcon:t.createElement(rt.Z,null),type:"submit"},T({id:"global.save",defaultMessage:"Save"}))}),t.createElement(tt.D,null,t.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(G.Z,{variant:"delta",as:"h2"},T({id:R("containers.SettingPage.settings"),defaultMessage:"Settings"})),t.createElement(ke.r,null,t.createElement(fe.P,{col:6,s:12},t.createElement(Pe.P,{label:T({id:R("containers.SettingPage.editSettings.entry.title"),defaultMessage:"Entry title"}),hint:T({id:R("containers.SettingPage.editSettings.entry.title.description"),defaultMessage:"Set the display field of your entry"}),onChange:V=>{Y({target:{name:"settings.mainField",value:V===""?null:V}})},value:E.settings.mainField},z.map(V=>t.createElement(he.W,{key:V,value:V},V))))),t.createElement(S.x,{paddingTop:2,paddingBottom:2},t.createElement(eo.i,null)),t.createElement(G.Z,{variant:"delta",as:"h3"},T({id:R("containers.SettingPage.view"),defaultMessage:"View"})),t.createElement(mu,{attributes:x,editLayout:$,fields:j,onAddField:V=>{a({type:"ON_ADD_FIELD",name:V,fieldSizes:N})},onRemoveField:(V,se)=>{a({type:"REMOVE_FIELD",rowIndex:V,fieldIndex:se})}})))),t.createElement(h.QH,{bodyText:{id:R("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:t.createElement(rt.Z,null),isConfirmButtonLoading:K,isOpen:b,onToggleDialog:X,onConfirm:L,variantRightButton:"success-light"})),p&&t.createElement(Iu,{onSubmit:v,onToggle:B,onMetaChange:Z,onSizeChange:W,type:I()(x,[P,"type"],""),customFieldUid:I()(x,[P,"customField"],"")})))};yo.defaultProps={isContentTypeView:!1,updateLayout:null},yo.propTypes={components:n().object.isRequired,isContentTypeView:n().bool,mainLayout:n().shape({attributes:n().object.isRequired,info:n().object.isRequired,layouts:n().shape({list:n().array.isRequired,edit:n().array.isRequired}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired}).isRequired,slug:n().string.isRequired,updateLayout:n().func};const bo=yo;var at=f(28933);const xu=()=>({type:at.ZA}),Pu=(e,o)=>({type:at.Id,pagination:e,data:o}),wu=()=>({type:at.MP});function Fu(){return{type:at.c2}}const Su=({components:e,contentType:o})=>{const{layouts:r}=o;return{contentType:o,components:e,displayedHeaders:r.list,type:at.Zz}},Eo=e=>({type:at.Rp,target:e});var Is=f(14890),Co=f(14087),Ls=f(36989),Au=f(37562);const Ou=()=>e=>e["content-manager_listView"]||Au.E,$u=()=>(0,_e.P1)(Ou(),e=>e),xs=e=>{const{displayedHeaders:o}=e["content-manager_listView"];return o},Zu=$u;var qu=f(15234),Nu=f(79031),Ro=f(37909),ju=f(41451),Bu=f(65186),Wu=f(42274);const zu=(0,q.ZP)(w.k)`
  position: relative;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral150};
  padding-left: 1px;

  span {
    line-height: 0.6rem;
    font-size: 0.6rem;
  }
`,Ps=({children:e,...o})=>t.createElement(zu,{justifyContent:"center",alignItems:"center",as:"span",...o},t.createElement(G.Z,{variant:"sigma",textColor:"neutral600"},e));Ps.propTypes={children:n().string.isRequired};const ws=Ps,vo=({url:e,mime:o,alternativeText:r,name:s,ext:i,formats:l})=>{const a=(0,h.CR)(e);if(o.includes("image")){const d=l?.thumbnail?.url||null,m=(0,h.CR)(d)||a;return t.createElement(Wu.q,{src:m,alt:r||s,preview:!0})}const c=(0,h.mD)(i),u=s.length>100?`${s.substring(0,100)}...`:s;return t.createElement(Ft.u,{description:u},t.createElement(ws,null,c))};vo.defaultProps={alternativeText:null,formats:null},vo.propTypes={alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired};const Fs=vo;var Vu=f(56704);const Ss=({value:e})=>t.createElement(Vu.H,null,e.map((o,r)=>{const s=`${o.id}${r}`;if(r===3){const i=`+${e.length-3}`;return t.createElement(ws,{key:s,preview:!1},i)}return r>3?null:t.createElement(Fs,{key:s,...o})}));Ss.propTypes={value:n().arrayOf(n().shape({alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired})).isRequired};const Uu=Ss;var As=f(30190),Hu=f(88655),Gu=f(23855);const Os=({type:e,value:o})=>{const{formatDate:r,formatTime:s,formatNumber:i}=(0,Q.Z)();let l=o;if(e==="date"&&(l=r((0,Gu.Z)(o),{dateStyle:"full"})),e==="datetime"&&(l=r(o,{dateStyle:"full",timeStyle:"short"})),e==="time"){const[a,c,u]=o.split(":"),d=new Date;d.setHours(a),d.setMinutes(c),d.setSeconds(u),l=s(d,{numeric:"auto",style:"short"})}return["float","decimal"].includes(e)&&(l=i(o,{maximumFractionDigits:20})),["integer","biginteger"].includes(e)&&(l=i(o,{maximumFractionDigits:0})),Vr()(l)};Os.propTypes={type:n().string.isRequired,value:n().any.isRequired};const lt=Os,Qu=(0,q.ZP)(G.Z)`
  max-width: 500px;
`,Ku=async(e,o,r)=>{const{data:{results:s,pagination:i}}=await r(e);return o(),{results:s,pagination:i}},$s=({fieldSchema:e,metadatas:o,name:r,entityId:s,value:i,contentType:l})=>{const{formatMessage:a}=(0,Q.Z)(),{notifyStatus:c}=(0,Co.G)(),u=(0,t.useMemo)(()=>de(`relations/${l.uid}/${s}/${r.split(".")[0]}`),[s,r,l]),[d,m]=(0,t.useState)(!1),{get:g}=(0,h.kY)(),p=t.createElement(w.k,{gap:1,wrap:"nowrap"},t.createElement(As.C,null,i.count),a({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:i.count})),y=()=>{const k=a({id:R("DynamicTable.relation-loaded"),defaultMessage:"Relations have been loaded"});c(k)},{data:b,status:C}=(0,He.useQuery)([e.targetModel,s],()=>Ku(u,y,g),{enabled:d,staleTime:0,select:k=>({...k,results:[...k.results].reverse()})});return t.createElement(S.x,{...h.UW},t.createElement(we.O,{label:p,size:"S",onOpen:()=>m(!0),onClose:()=>m(!1)},C!=="success"&&t.createElement(we.s,{"aria-disabled":!0},t.createElement(Hu.a,{small:!0},a({id:R("DynamicTable.relation-loading"),defaultMessage:"Relations are loading"}))),C==="success"&&t.createElement(t.Fragment,null,b?.results.map(k=>t.createElement(we.s,{key:k.id,"aria-disabled":!0},t.createElement(Qu,{ellipsis:!0},t.createElement(lt,{type:o.mainField.schema.type,value:k[o.mainField.name]||k.id})))),b?.pagination.total>10&&t.createElement(we.s,{"aria-disabled":!0,"aria-label":a({id:R("DynamicTable.relation-more"),defaultMessage:"This relation contains more entities than displayed"})},t.createElement(G.Z,null,"\u2026")))))};$s.propTypes={contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({relation:n().string,targetModel:n().string,type:n().string.isRequired}).isRequired,metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,name:n().string.isRequired,entityId:n().oneOfType([n().string,n().number]).isRequired,value:n().object.isRequired};const Yu=$s,Xu=(0,q.ZP)(G.Z)`
  max-width: 500px;
`,Zs=({metadatas:e,value:o})=>t.createElement(Xu,{textColor:"neutral800",ellipsis:!0},t.createElement(lt,{type:e.mainField.schema.type,value:o[e.mainField.name]??o.id}));Zs.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,value:n().object.isRequired};const Ju=Zs,_u=(0,q.ZP)(G.Z)`
  max-width: 500px;
`,qs=({value:e,metadatas:o})=>{const{formatMessage:r}=(0,Q.Z)(),{mainField:{type:s,name:i}}=o,l=t.createElement(t.Fragment,null,t.createElement(As.C,null,e.length)," ",r({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:e.length}));return t.createElement(S.x,{...h.UW},t.createElement(we.O,{label:l,size:"S"},e.map(a=>t.createElement(we.s,{key:a.id,"aria-disabled":!0},t.createElement(_u,{ellipsis:!0},t.createElement(lt,{type:s,value:a[i]||a.id}))))))};qs.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().array.isRequired};const em=qs,tm=(0,q.ZP)(G.Z)`
  max-width: 250px;
`,Ns=({value:e,metadatas:o})=>{const{mainField:r}=o,s=e[r.name];return t.createElement(Ft.u,{label:s},t.createElement(tm,{textColor:"neutral800",ellipsis:!0},t.createElement(lt,{type:r.type,value:s})))};Ns.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().object.isRequired};const nm=Ns;var om=f(81763),js=f.n(om);function Bs(e){return["oneToOne","manyToOne","oneToOneMorph"].includes(e)}function rm(e,o,r,s){if(e==="component"){const{mainField:{name:i,type:l}}=r;if(s?.repeatable)return o.length>0;const a=o?.[i];return i==="id"&&![void 0,null].includes(a)?!0:ft(l)&&l!=="biginteger"&&i!=="id"?js()(a):!ye()(a)}return e==="relation"?Bs(s.relation)?!ye()(o):o?.count>0:ft(e)&&e!=="biginteger"?js()(o):e==="boolean"?o!==null:!ye()(o)}const Ws=(0,q.ZP)(G.Z)`
  max-width: 300px;
`,To=({content:e,fieldSchema:o,metadatas:r,name:s,rowId:i,contentType:l})=>{const{type:a}=o;if(!rm(a,e,r,o))return t.createElement(G.Z,{textColor:"neutral800"},"-");switch(a){case"media":return o.multiple?t.createElement(Uu,{value:e}):t.createElement(Fs,{...e});case"relation":return Bs(o.relation)?t.createElement(Ju,{metadatas:r,value:e}):t.createElement(Yu,{fieldSchema:o,metadatas:r,value:e,name:s,entityId:i,contentType:l});case"component":return o.repeatable===!0?t.createElement(em,{value:e,metadatas:r}):t.createElement(nm,{value:e,metadatas:r});case"string":return t.createElement(Ft.u,{description:e},t.createElement(Ws,{ellipsis:!0,textColor:"neutral800"},t.createElement(lt,{type:a,value:e})));default:return t.createElement(Ws,{ellipsis:!0,textColor:"neutral800"},t.createElement(lt,{type:a,value:e}))}};To.defaultProps={content:void 0},To.propTypes={content:n().any,contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({component:n().string,multiple:n().bool,type:n().string.isRequired,repeatable:n().bool,relation:n().string}).isRequired,metadatas:n().object.isRequired,name:n().string.isRequired,rowId:n().oneOfType([n().string,n().number]).isRequired};const sm=To,Mo=({canCreate:e,canDelete:o,contentType:r,headers:s,entriesToDelete:i,onClickDelete:l,onSelectRow:a,withMainAction:c,withBulkActions:u,rows:d})=>{const{push:m,location:{pathname:g}}=(0,ae.k6)(),{formatMessage:p}=(0,Q.Z)(),{trackUsage:y}=(0,h.rS)(),b=mr();return t.createElement(qu.p,null,d.map((C,k)=>{const M=i.findIndex(P=>P===C.id)!==-1,E=p({id:"content-manager.components.DynamicTable.row-line",defaultMessage:"item line {number}"},{number:k});return t.createElement(Nu.Tr,{key:C.id,...(0,h.X7)({fn(){y("willEditEntryFromList"),m({pathname:`${g}/${C.id}`,state:{from:g},search:b})},condition:u})},c&&t.createElement(Ro.Td,{...h.UW},t.createElement(ju.C,{"aria-label":p({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,os.Pp)(C.firstname,C.lastname)}),checked:M,onChange:()=>{a({name:C.id,value:!M})}})),s.map(({key:P,cellFormatter:F,name:T,...D})=>t.createElement(Ro.Td,{key:P},typeof F=="function"?F(C,{key:P,name:T,...D}):t.createElement(sm,{content:C[T.split(".")[0]],name:T,contentType:r,...D,rowId:C.id}))),u&&t.createElement(Ro.Td,null,t.createElement(w.k,{justifyContent:"end",...h.UW},t.createElement(ge.h,{forwardedAs:it.rU,onClick:()=>{y("willEditEntryFromButton")},to:{pathname:`${g}/${C.id}`,state:{from:g},search:b},label:p({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:E}),noBorder:!0,icon:t.createElement(Ye.Z,null)}),e&&t.createElement(S.x,{paddingLeft:1},t.createElement(ge.h,{forwardedAs:it.rU,to:{pathname:`${g}/create/clone/${C.id}`,state:{from:g},search:b},label:p({id:"app.component.table.duplicate",defaultMessage:"Duplicate {target}"},{target:E}),noBorder:!0,icon:t.createElement(Bu.Z,null)})),o&&t.createElement(S.x,{paddingLeft:1},t.createElement(ge.h,{onClick:()=>{y("willDeleteEntryFromList"),l(C.id)},label:p({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:E}),noBorder:!0,icon:t.createElement(Se.Z,null)})))))}))};Mo.defaultProps={canCreate:!1,canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},Mo.propTypes={canCreate:n().bool,canDelete:n().bool,contentType:n().shape({uid:n().string.isRequired}).isRequired,entriesToDelete:n().array,headers:n().array.isRequired,onClickDelete:n().func,onSelectRow:n().func,rows:n().array,withBulkActions:n().bool,withMainAction:n().bool};const im=Mo,zs=({area:e,...o})=>{const r=vr(e);return r?t.createElement("ul",null,r.map(s=>s.Component(o)?t.createElement(S.x,{key:s.name,padding:3,style:{textAlign:"center"}},t.createElement(s.Component,{...o})):null)):null};zs.propTypes={area:n().string.isRequired};const Vs=zs,Us=({isConfirmButtonLoading:e,isOpen:o,onToggleDialog:r,onConfirm:s})=>{const{formatMessage:i}=(0,Q.Z)();return t.createElement(Ut.V,{onClose:r,title:i({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:o},t.createElement(Ht.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},i({id:R("popUpWarning.bodyMessage.contentType.delete.all"),defaultMessage:"Are you sure you want to delete these entries?"}))),t.createElement(w.k,null,t.createElement(Vs,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),t.createElement(Gt.c,{startAction:t.createElement(ue.z,{onClick:r,variant:"tertiary"},i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{onClick:s,variant:"danger-light",startIcon:t.createElement(Se.Z,null),id:"confirm-delete",loading:e},i({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Us.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};const am=Us,Hs=({isConfirmButtonLoading:e,isOpen:o,onToggleDialog:r,onConfirm:s})=>{const{formatMessage:i}=(0,Q.Z)();return t.createElement(Ut.V,{onClose:r,title:i({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:o},t.createElement(Ht.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},i({id:"components.popUpWarning.message",defaultMessage:"Are you sure you want to delete this?"}))),t.createElement(w.k,null,t.createElement(Vs,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),t.createElement(Gt.c,{startAction:t.createElement(ue.z,{onClick:r,variant:"tertiary"},i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{onClick:s,variant:"danger-light",startIcon:t.createElement(Se.Z,null),id:"confirm-delete",loading:e},i({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Hs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};const lm=Hs,cm=(0,q.ZP)(en.q)`
  width: min-content;
`,Do=({canCreate:e,canDelete:o,contentTypeName:r,action:s,isBulkable:i,isLoading:l,onConfirmDelete:a,onConfirmDeleteAll:c,layout:u,rows:d})=>{const{runHookWaterfall:m}=(0,h.j1)(),g=u.contentType.options.draftAndPublish||!1,{formatMessage:p}=(0,Q.Z)(),y=(0,le.v9)(xs),b=(0,t.useMemo)(()=>{const k=m(At.No,{displayedHeaders:y,layout:u}).displayedHeaders.map(M=>{const{metadatas:E}=M;if(M.fieldSchema.type==="relation"){const P=`${M.name}.${M.metadatas.mainField.name}`;return{...M,metadatas:{...E,label:p({id:R(`containers.ListPage.table-headers.${M.name}`),defaultMessage:E.label})},name:P}}return{...M,metadatas:{...E,label:p({id:R(`containers.ListPage.table-headers.${M.name}`),defaultMessage:E.label})}}});return g?[...k,{key:"__published_at_temp_key__",name:"publishedAt",fieldSchema:{type:"custom"},metadatas:{label:p({id:R("containers.ListPage.table-headers.publishedAt"),defaultMessage:"publishedAt"}),searchable:!1,sortable:!0},cellFormatter(M){const E=M.publishedAt,P=E?"success":"secondary";return t.createElement(cm,{showBullet:!1,variant:P,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${P}700`},p({id:R(`containers.List.${E?"published":"draft"}`),defaultMessage:E?"Published":"Draft"})))}}]:k},[m,y,u,g,p]);return t.createElement(h.tM,{components:{ConfirmDialogDelete:lm,ConfirmDialogDeleteAll:am},contentType:r,action:s,isLoading:l,headers:b,onConfirmDelete:a,onConfirmDeleteAll:c,onOpenDeleteAllModalTrackedEvent:"willBulkDeleteEntries",rows:d,withBulkActions:!0,withMainAction:o&&i},t.createElement(im,{canCreate:e,canDelete:o,contentType:u.contentType,headers:b,rows:d,withBulkActions:!0,withMainAction:o&&i}))};Do.defaultProps={action:void 0},Do.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,contentTypeName:n().string.isRequired,action:n().node,isBulkable:n().bool.isRequired,isLoading:n().bool.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,onConfirmDelete:n().func.isRequired,onConfirmDeleteAll:n().func.isRequired,rows:n().array.isRequired};const dm=Do,um=["json","component","media","richtext","dynamiczone","password"],mm=["createdAt","updatedAt"],pm=(e,o)=>{const{allPermissions:r}=(0,h.vn)(),s=(0,h.ZT)(r,[{action:"plugin::content-manager.explorer.read",subject:o}]),i=I()(s,["0","properties","fields"],[]);return Object.keys(I()(e,["attributes"]),{}).filter(c=>{const u=I()(e,["attributes",c],{});return!(!u.type||um.includes(u.type)||!i.includes(c)&&c!=="id"&&!mm.includes(c))}).sort()};var gm=f(89597);const Gs=({displayedFilters:e})=>{const[o,r]=(0,t.useState)(!1),{formatMessage:s}=(0,Q.Z)(),i=(0,t.useRef)(),{trackUsage:l}=(0,h.rS)(),a=()=>{o||l("willFilterEntries"),r(c=>!c)};return t.createElement(t.Fragment,null,t.createElement(S.x,{paddingTop:1,paddingBottom:1},t.createElement(ue.z,{variant:"tertiary",ref:i,startIcon:t.createElement(gm.Z,null),onClick:a,size:"S"},s({id:"app.utils.filters",defaultMessage:"Filters"})),o&&t.createElement(h.J5,{displayedFilters:e,isVisible:o,onToggle:a,source:i})),t.createElement(h.W$,{filtersSchema:e}))};Gs.propTypes={displayedFilters:n().arrayOf(n().shape({name:n().string.isRequired,metadatas:n().shape({label:n().string}),fieldSchema:n().shape({type:n().string})})).isRequired};const fm=Gs,Qs=({contentType:e,slug:o,metadatas:r})=>{const{formatMessage:s}=(0,Q.Z)(),l=pm(e,o).map(a=>{const c=e.attributes[a],{type:u,enum:d}=c,m={name:"didFilterEntries",properties:{useRelation:u==="relation"}},{mainField:g,label:p}=r[a].list;return{name:a,metadatas:{label:s({id:p,defaultMessage:p})},fieldSchema:{type:u,options:d,mainField:g},trackedEvent:m}});return t.createElement(fm,{displayedFilters:l})};Qs.propTypes={contentType:n().object.isRequired,metadatas:n().object.isRequired,slug:n().string.isRequired};const hm=Qs,ym=e=>Object.keys(e).reduce((r,s)=>{const i=e[s];return Vo(i)&&r.push(s),r},[]).sort(),Ks=({layout:e})=>{const o=(0,le.I0)(),r=(0,le.v9)(xs),{trackUsage:s}=(0,h.rS)(),{formatMessage:i}=(0,Q.Z)(),l=ym(e.contentType.attributes).map(u=>{const d=e.contentType.metadatas[u].list;return{name:u,intlLabel:{id:d.label,defaultMessage:d.label}}}),a=r.map(({name:u})=>u),c=u=>{if(s("didChangeDisplayedFields"),u.length<a.length){const d=a.filter(m=>u.indexOf(m)===-1);o(Eo({name:d[0],value:!0}))}else{const d=u.filter(m=>a.indexOf(m)===-1);o(Eo({name:d[0],value:!1}))}};return t.createElement(S.x,{paddingTop:1,paddingBottom:1},t.createElement(Pe.P,{"aria-label":"change displayed fields",value:a,onChange:c,customizeContent:u=>i({id:R("select.currently.selected"),defaultMessage:"{count} currently selected"},{count:u.length}),multi:!0,size:"S"},l.map(u=>t.createElement(he.W,{key:u.name,value:u.name},i({id:u.intlLabel.id||u.name,defaultMessage:u.intlLabel.defaultMessage||u.name})))))};Ks.propTypes={layout:n().shape({contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired};const bm=(0,t.memo)(Ks),ko=({pagination:e})=>t.createElement(S.x,{paddingTop:4},t.createElement(w.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(h.v4,{trackedEvent:"willChangeNumberOfEntriesPerPage"}),t.createElement(h.tU,{pagination:e})));ko.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ko.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};const Em=ko,Cm=Ke.Z.contentManager,Rm=(0,q.ZP)(S.x)`
  svg {
    path {
      fill: ${({theme:e})=>e.colors.neutral900};
    }
  }
`;function Ys({canCreate:e,canDelete:o,canRead:r,data:s,getData:i,getDataSucceeded:l,isLoading:a,layout:c,pagination:u,slug:d}){const{total:m}=u,{contentType:{metadatas:g,settings:{bulkable:p,filterable:y,searchable:b}}}=c,C=(0,h.lm)(),{trackUsage:k}=(0,h.rS)(),{refetchPermissions:M}=(0,h.vn)(),E=(0,t.useRef)(k),P=(0,t.useRef)(M),{notifyStatus:F}=(0,Co.G)(),{formatAPIError:T}=(0,h.So)(R);(0,h.go)();const[{query:D}]=(0,h.Kx)(),x=Jr(D),N=(0,Ae.stringify)({plugins:D.plugins},{encode:!1}),{pathname:z}=(0,ae.TH)(),{push:$}=(0,ae.k6)(),{formatMessage:H}=(0,Q.Z)(),j=c.contentType,Y=I()(j,"options.draftAndPublish",!1),B=(0,h.kY)(),{post:X,del:Z}=B,W=(0,t.useRef)(""),v=(0,t.useCallback)(async(ee,re)=>{i();try{const V=re?{cancelToken:re.token}:null,{data:{results:se,pagination:be}}=await B.get(ee,V);F(H({id:R("utils.data-loaded"),defaultMessage:"{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"},{number:be.count})),l(be,se)}catch(V){if(Re.default.isCancel(V))return;if(I()(V,"response.status",null)===403){await P.current(),C({type:"info",message:{id:R("permissions.not-allowed.update")}}),$("/");return}C({type:"warning",message:{id:R("error.model.fetch")}})}},[H,i,l,F,$,C,B]),A=(0,t.useCallback)(async ee=>{try{await X(de(`collection-types/${d}/actions/bulkDelete`),{ids:ee});const re=de(`collection-types/${d}${x}`);v(re),E.current("didBulkDeleteEntries")}catch(re){C({type:"warning",message:T(re)})}},[v,x,d,C,T,X]),U=(0,t.useCallback)(async ee=>{try{await Z(de(`collection-types/${d}/${ee}`));const re=de(`collection-types/${d}${x}`);v(re),C({type:"success",message:{id:R("success.record.delete")}})}catch(re){C({type:"warning",message:T(re)})}},[d,x,v,C,T,Z]);(0,t.useEffect)(()=>{const re=Re.default.CancelToken.source(),V=r,se=de(`collection-types/${d}${x}`);return V&&se.includes(W.current)&&v(se,re),()=>{W.current=d,re.cancel("Operation canceled by the user.")}},[r,i,d,x,l,v]);const K=H({id:R("header.name"),defaultMessage:"Content"}),L=H({id:j.info.displayName,defaultMessage:j.info.displayName||K}),O=r?H({id:R("pages.ListView.header-subtitle"),defaultMessage:"{number, plural, =0 {# entries} one {# entry} other {# entries}} found"},{number:m}):null,oe=ee=>e?t.createElement(ue.z,{...ee,forwardedAs:it.rU,onClick:()=>{const re=Y?{status:"draft"}:{};E.current("willCreateEntry",re)},to:{pathname:`${z}/create`,search:D.plugins?N:""},startIcon:t.createElement(pt.Z,null),style:{textDecoration:"none"}},H({id:R("HeaderLayout.button.label-add-entry"),defaultMessage:"Create new entry"})):null;return t.createElement(Te.o,{"aria-busy":a},t.createElement(Fe.T,{primaryAction:oe(),subtitle:O,title:L,navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Vt.Z,null),to:"/content-manager/"},H({id:"global.back",defaultMessage:"Back"}))}),!r&&t.createElement(Ls.Z,{endActions:t.createElement(Ot,{area:"contentManager.listView.actions"})}),r&&t.createElement(Ls.Z,{endActions:t.createElement(t.Fragment,null,t.createElement(Ot,{area:"contentManager.listView.actions"}),t.createElement(bm,{layout:c}),t.createElement(h.jW,{permissions:Cm.collectionTypesConfigurations},t.createElement(Rm,{paddingTop:1,paddingBottom:1},t.createElement(ge.h,{onClick:()=>{k("willEditListLayout")},forwardedAs:it.rU,to:{pathname:`${d}/configurations/list`,search:N},icon:t.createElement(us.Z,null),label:H({id:"app.links.configure-view",defaultMessage:"Configure the view"})})))),startActions:t.createElement(t.Fragment,null,b&&t.createElement(h.m,{label:H({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:L}),placeholder:H({id:"global.search",defaultMessage:"Search"}),trackedEvent:"didSearch"}),y&&t.createElement(hm,{contentType:j,slug:d,metadatas:g}))}),t.createElement(tt.D,null,r?t.createElement(t.Fragment,null,t.createElement(dm,{canCreate:e,canDelete:o,contentTypeName:L,onConfirmDeleteAll:A,onConfirmDelete:U,isBulkable:p,isLoading:a,layout:c,rows:s,action:oe({variant:"secondary"})}),t.createElement(Em,{pagination:{pageCount:u?.pageCount||1}})):t.createElement(h.ZF,null)))}Ys.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,canRead:n().bool.isRequired,data:n().array.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,info:n().shape({displayName:n().string.isRequired}).isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,isLoading:n().bool.isRequired,getData:n().func.isRequired,getDataSucceeded:n().func.isRequired,pagination:n().shape({total:n().number.isRequired,pageCount:n().number}).isRequired,slug:n().string.isRequired};const vm=Zu();function Tm(e){return(0,Is.bindActionCreators)({getData:xu,getDataSucceeded:Pu,onChangeListHeaders:Eo,onResetListHeaders:wu},e)}const Mm=(0,le.$j)(vm,Tm),Dm=(0,Is.compose)(Mm)((0,t.memo)(Ys,qe())),Io=e=>{const o=(0,t.useMemo)(()=>Go(e.slug),[e.slug]),{isLoading:r,allowedActions:s}=(0,h.ss)(o,e.permissions);return r?t.createElement(h.dO,null):t.createElement(Dm,{...e,...s})};Io.defaultProps={permissions:[]},Io.propTypes={permissions:n().array,slug:n().string.isRequired};const km=(0,t.memo)(Io,(e,o)=>{const r=(0,h.e5)(e,o);return Object.keys(r).filter(i=>i!=="state").length>0}),Xs=({layout:e,...o})=>{const r=(0,le.I0)(),{replace:s}=(0,ae.k6)(),[{query:i,rawQuery:l}]=(0,h.Kx)(),a=gr(i,o.slug,"listView"),c=ur(o.slug);return(0,t.useEffect)(()=>{l||s(c)},[l,s,c]),(0,t.useEffect)(()=>{r(Su(e))},[r,e]),(0,t.useEffect)(()=>()=>{r(Fu())},[r]),a?t.createElement(km,{...o,layout:e,permissions:a}):null};Xs.propTypes={layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired,pluginOptions:n().object}).isRequired}).isRequired,slug:n().string.isRequired};const Im=Xs,Lm=(e,o)=>{const{put:r}=(0,h.tg)();return r(de(`content-types/${o}/configuration`),e)},Lo=({modifiedData:e,onChange:o,sortOptions:r})=>{const{formatMessage:s}=(0,Q.Z)(),{settings:i,metadatas:l}=e;return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(G.Z,{variant:"delta",as:"h2"},s({id:R("containers.SettingPage.settings"),defaultMessage:"Settings"})),t.createElement(w.k,{justifyContent:"space-between",gap:4},t.createElement(S.x,{width:"100%"},t.createElement(Et.s,{label:s({id:R("form.Input.search"),defaultMessage:"Enable search"}),onChange:a=>{o({target:{name:"settings.searchable",value:a.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.searchable",checked:i.searchable})),t.createElement(S.x,{width:"100%"},t.createElement(Et.s,{label:s({id:R("form.Input.filters"),defaultMessage:"Enable filters"}),onChange:a=>{o({target:{name:"settings.filterable",value:a.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.filterable",checked:i.filterable})),t.createElement(S.x,{width:"100%"},t.createElement(Et.s,{label:s({id:R("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"}),onChange:a=>{o({target:{name:"settings.bulkable",value:a.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.bulkable",checked:i.bulkable}))),t.createElement(ke.r,{gap:4},t.createElement(fe.P,{s:12,col:6},t.createElement(Pe.P,{label:s({id:R("form.Input.pageEntries"),defaultMessage:"Entries per page"}),hint:s({id:R("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."}),onChange:a=>o({target:{name:"settings.pageSize",value:a}}),name:"settings.pageSize",value:e.settings.pageSize||""},[10,20,50,100].map(a=>t.createElement(he.W,{key:a,value:a},a)))),t.createElement(fe.P,{s:12,col:3},t.createElement(Pe.P,{label:s({id:R("form.Input.defaultSort"),defaultMessage:"Default sort attribute"}),onChange:a=>o({target:{name:"settings.defaultSortBy",value:a}}),name:"settings.defaultSortBy",value:e.settings.defaultSortBy||""},r.map(a=>t.createElement(he.W,{key:a,value:a},l[a].list.label||a)))),t.createElement(fe.P,{s:12,col:3},t.createElement(Pe.P,{label:s({id:R("form.Input.sort.order"),defaultMessage:"Default sort order"}),onChange:a=>o({target:{name:"settings.defaultSortOrder",value:a}}),name:"settings.defaultSortOrder",value:e.settings.defaultSortOrder||""},["ASC","DESC"].map(a=>t.createElement(he.W,{key:a,value:a},a))))))};Lo.defaultProps={modifiedData:{},sortOptions:[]},Lo.propTypes={modifiedData:n().object,onChange:n().func.isRequired,sortOptions:n().array};const xm=Lo,xo=q.ZP.button`
  display: flex;
  align-items: center;
  height: ${({theme:e})=>e.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:e})=>e.spaces[3]};
  }
`,Js=(0,q.ZP)(xo)`
  padding: 0 ${({theme:e})=>e.spaces[3]};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,Pm=(0,q.ZP)(w.k)`
  max-height: ${32/16}rem;
  cursor: pointer;

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    border-color: ${({theme:e})=>e.colors.primary200};

    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }

    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${Js} {
      border-right: 1px solid ${({theme:e})=>e.colors.primary200};
    }
  }
`,wm=(0,q.ZP)(S.x)`
  &:last-child {
    padding-right: ${({theme:e})=>e.spaces[3]};
  }
`,_s=({index:e,isDraggingSibling:o,labelField:r,onClickEditField:s,onMoveField:i,onRemoveField:l,name:a,setIsDraggingSibling:c})=>{const{formatMessage:u}=(0,Q.Z)(),d=(0,t.useRef)(null),m=(0,t.useRef)(null),[,g]=(0,t.useState)(!1),p=(0,t.useRef)(),y=qo(r),b=()=>{p.current&&p.current.click()},[,C]=(0,ze.useDrop)({accept:Ce.FIELD,hover(F,T){if(!m.current)return;const D=F.index,x=e;if(D===x)return;const N=m.current.getBoundingClientRect(),z=(N.right-N.left)/2,H=T.getClientOffset().x-N.left;D>x&&H>z||D<x&&H<z||(i(D,x),F.index=x)}}),[{isDragging:k},M,E]=(0,ze.useDrag)({type:Ce.FIELD,item(){return{index:e,labelField:r,name:a}},collect:F=>({isDragging:F.isDragging()}),end(){c(!1)}});(0,t.useEffect)(()=>{E((0,ct.rX)(),{captureDraggingState:!1})},[E]),(0,t.useEffect)(()=>{k&&c(!0)},[k,c]),(0,t.useEffect)(()=>{o||g(F=>!F)},[o]);const P={dragRef:M(d),dropRef:C(m)};return t.createElement(wm,{ref:P?P.dropRef:null},k&&t.createElement(_t,{transparent:!0,labelField:y}),!k&&o&&t.createElement(_t,{isSibling:!0,labelField:y}),!k&&!o&&t.createElement(Pm,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:b,isDragging:k},t.createElement(w.k,{gap:3},t.createElement(Js,{as:"span","aria-label":u({id:R("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:r}),onClick:F=>F.stopPropagation(),ref:P.dragRef,type:"button"},t.createElement($e.Z,null)),t.createElement(G.Z,{fontWeight:"bold"},y)),t.createElement(w.k,{paddingLeft:3},t.createElement(xo,{ref:p,onClick:F=>{F.stopPropagation(),s(a)},"aria-label":u({id:R("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:r}),type:"button"},t.createElement(Ye.Z,null)),t.createElement(xo,{onClick:l,"data-testid":`delete-${a}`,"aria-label":u({id:R("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:r}),type:"button"},t.createElement(kt.Z,null)))))};_s.propTypes={index:n().number.isRequired,isDraggingSibling:n().bool.isRequired,labelField:n().string.isRequired,name:n().string.isRequired,onClickEditField:n().func.isRequired,onMoveField:n().func.isRequired,onRemoveField:n().func.isRequired,setIsDraggingSibling:n().func.isRequired};const Fm=_s,ei=(0,q.ZP)(S.x)`
  flex: ${({size:e})=>e};
`,Sm=(0,q.ZP)(ei)`
  overflow-x: scroll;
  overflow-y: hidden;
`,Am=(0,q.ZP)(ei)`
  max-width: ${32/16}rem;
`,ti=({displayedFields:e,listRemainingFields:o,metadatas:r,onAddField:s,onClickEditField:i,onMoveField:l,onRemoveField:a})=>{const{formatMessage:c}=(0,Q.Z)(),[u,d]=(0,t.useState)(!1),[m,g]=(0,t.useState)(null),p=(0,t.useRef)();function y(...C){g("add"),s(...C)}function b(...C){g("remove"),a(...C)}return(0,t.useEffect)(()=>{m==="add"&&p?.current&&(p.current.scrollLeft=p.current.scrollWidth)},[e,m]),t.createElement(t.Fragment,null,t.createElement(S.x,{paddingBottom:4},t.createElement(G.Z,{variant:"delta",as:"h2"},c({id:R("containers.SettingPage.view"),defaultMessage:"View"}))),t.createElement(w.k,{paddingTop:4,paddingLeft:4,paddingRight:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0},t.createElement(Sm,{size:"1",paddingBottom:4,ref:p},t.createElement(w.k,{gap:3},e.map((C,k)=>t.createElement(Fm,{key:C,index:k,isDraggingSibling:u,onMoveField:l,onClickEditField:i,onRemoveField:M=>b(M,k),name:C,labelField:r[C].list.label||C,setIsDraggingSibling:d})))),t.createElement(Am,{size:"auto",paddingBottom:4},t.createElement(we.O,{label:c({id:R("components.FieldSelect.label"),defaultMessage:"Add a field"}),as:ge.h,icon:t.createElement(pt.Z,null),disabled:o.length<=0,"data-testid":"add-field"},o.map(C=>t.createElement(we.s,{key:C,onClick:()=>y(C)},r[C].list.label||C))))))};ti.propTypes={displayedFields:Me.PropTypes.array.isRequired,listRemainingFields:Me.PropTypes.array.isRequired,metadatas:Me.PropTypes.objectOf(Me.PropTypes.shape({list:Me.PropTypes.shape({label:Me.PropTypes.string})})).isRequired,onAddField:Me.PropTypes.func.isRequired,onClickEditField:Me.PropTypes.func.isRequired,onMoveField:Me.PropTypes.func.isRequired,onRemoveField:Me.PropTypes.func.isRequired};const Om=ti,$m=(0,q.ZP)(w.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:e})=>e.spaces[3]};
  }
`,ni=({attributes:e,fieldForm:o,fieldToEdit:r,onCloseModal:s,onChangeEditLabel:i,onSubmit:l,type:a})=>{const{formatMessage:c}=(0,Q.Z)(),u=e[r].relationType;let d=!["media","relation"].includes(a);return["oneWay","oneToOne","manyToOne"].includes(u)&&(d=!0),t.createElement(bs.P,{onClose:s,labelledBy:"title"},t.createElement("form",{onSubmit:l},t.createElement(Es.x,null,t.createElement($m,null,t.createElement(Ms,{type:a}),t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:R("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:yt()(r)})))),t.createElement(Cs.f,null,t.createElement(ke.r,{gap:4},t.createElement(fe.P,{s:12,col:6},t.createElement(kn.o,{id:"label-input",label:c({id:R("form.Input.label"),defaultMessage:"Label"}),name:"label",onChange:m=>i(m),value:o.label,hint:c({id:R("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"})})),d&&t.createElement(fe.P,{s:12,col:6},t.createElement(Et.s,{"data-testid":"Enable sort on this field",checked:o.sortable,label:c({id:R("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",onChange:m=>i({target:{name:"sortable",value:m.target.checked}}),onLabel:c({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:c({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"})})))),t.createElement(Rs.m,{startActions:t.createElement(ue.z,{onClick:s,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ue.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};ni.propTypes={attributes:n().objectOf(n().shape({relationType:n().string})).isRequired,fieldForm:n().shape({label:n().string,sortable:n().bool}).isRequired,fieldToEdit:n().string.isRequired,onChangeEditLabel:n().func.isRequired,onCloseModal:n().func.isRequired,onSubmit:n().func.isRequired,type:n().string.isRequired};const Zm=ni,qm=(e,o)=>({...e,initialData:o,modifiedData:o}),Po={fieldForm:{},fieldToEdit:"",initialData:{},modifiedData:{}},Nm=(e=Po,o)=>(0,St.ZP)(e,r=>{const s=["modifiedData","layouts","list"];switch(o.type){case"ADD_FIELD":{const i=I()(e,s,[]);J()(r,s,[...i,o.item]);break}case"MOVE_FIELD":{const i=I()(e,s,[]),{originalIndex:l,atIndex:a}=o;J()(r,s,It(i,l,a));break}case"ON_CHANGE":{J()(r,["modifiedData",...o.keys.split(".")],o.value);break}case"ON_CHANGE_FIELD_METAS":{J()(r,["fieldForm",o.name],o.value);break}case"REMOVE_FIELD":{const i=I()(e,s,[]);J()(r,s,i.filter((l,a)=>o.index!==a));break}case"SET_FIELD_TO_EDIT":{const{fieldToEdit:i}=o;r.fieldToEdit=i,r.fieldForm.label=I()(r,["modifiedData","metadatas",i,"list","label"],""),r.fieldForm.sortable=I()(r,["modifiedData","metadatas",i,"list","sortable"],"");break}case"UNSET_FIELD_TO_EDIT":{r.fieldForm={},r.fieldToEdit="";break}case"SUBMIT_FIELD_FORM":{const i=["modifiedData","metadatas",e.fieldToEdit,"list"];J()(r,[...i,"label"],e.fieldForm.label),J()(r,[...i,"sortable"],e.fieldForm.sortable);break}default:return r}}),jm=["media","richtext","dynamiczone","relation","component","json"],oi=({layout:e,slug:o})=>{const{formatMessage:r}=(0,Q.Z)(),{trackUsage:s}=(0,h.rS)(),i=mr(),l=(0,h.lm)(),{refetchData:a}=(0,t.useContext)(Er),[c,u]=(0,t.useState)(!1),d=()=>u(v=>!v),[m,g]=(0,t.useReducer)(Nm,Po,()=>qm(Po,e)),{fieldToEdit:p,fieldForm:y,initialData:b,modifiedData:C}=m,k=!ye()(y),{attributes:M}=e,E=C.layouts.list,P=()=>{const{settings:{pageSize:v,defaultSortBy:A,defaultSortOrder:U},kind:K,uid:L}=b,O=`${A}:${U}`,oe=`${(0,Ae.stringify)({page:1,pageSize:v,sort:O},{encode:!1})}${i?`&${i}`:""}`;return`/content-manager/${K}/${L}?${oe}`},F=({target:{name:v,value:A}})=>{g({type:"ON_CHANGE",keys:v,value:v==="settings.pageSize"?parseInt(A,10):A})},T=async()=>{const v=Ln()(C,["layouts","settings","metadatas"]);j.mutate(v)},D=v=>{g({type:"ADD_FIELD",item:v})},x=(v,A)=>{v.stopPropagation(),E.length===1?l({type:"info",message:{id:R("notification.info.minimumFields")}}):g({type:"REMOVE_FIELD",index:A})},N=v=>{v.preventDefault(),d(),s("willSaveContentTypeLayout")},z=v=>{g({type:"SET_FIELD_TO_EDIT",fieldToEdit:v})},$=()=>{g({type:"UNSET_FIELD_TO_EDIT"})},H=v=>{v.preventDefault(),g({type:"SUBMIT_FIELD_FORM"}),$()},j=(0,He.useMutation)(v=>Lm(v,o),{onSuccess(){s("didEditListSettings"),a()},onError(){l({type:"warning",message:{id:"notification.error"}})}}),{isLoading:Y}=j,B=({target:{name:v,value:A}})=>{g({type:"ON_CHANGE_FIELD_METAS",name:v,value:A})},X=Object.entries(M).reduce((v,A)=>{const[U,K]=A,L=Vo(K),O=E.includes(U);return L&&!O&&v.push(U),v},[]).sort(),Z=Object.entries(M).reduce((v,A)=>{const[U,{type:K}]=A;return jm.includes(K)||v.push(U),v},[]),W=(v,A)=>{g({type:"MOVE_FIELD",originalIndex:v,atIndex:A})};return t.createElement(Dt.A,null,t.createElement(Te.o,{"aria-busy":Y},t.createElement("form",{onSubmit:N},t.createElement(Fe.T,{navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Vt.Z,null),to:P,id:"go-back"},r({id:"global.back",defaultMessage:"Back"})),primaryAction:t.createElement(ue.z,{size:"S",startIcon:t.createElement(rt.Z,null),disabled:gt()(C,b),type:"submit"},r({id:"global.save",defaultMessage:"Save"})),subtitle:r({id:R("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:r({id:R("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:yt()(C.info.displayName)})}),t.createElement(tt.D,null,t.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(xm,{modifiedData:C,onChange:F,sortOptions:Z}),t.createElement(S.x,{paddingTop:6,paddingBottom:6},t.createElement(eo.i,null)),t.createElement(Om,{listRemainingFields:X,displayedFields:E,onAddField:D,onClickEditField:z,onMoveField:W,onRemoveField:x,metadatas:C.metadatas}))),t.createElement(h.QH,{bodyText:{id:R("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:t.createElement(rt.Z,null),isConfirmButtonLoading:Y,isOpen:c,onToggleDialog:d,onConfirm:T,variantRightButton:"success-light"})),k&&t.createElement(Zm,{attributes:M,fieldForm:y,fieldToEdit:p,onChangeEditLabel:B,onCloseModal:$,onSubmit:H,type:I()(M,[p,"type"],"text")})))};oi.propTypes={layout:n().shape({uid:n().string.isRequired,settings:n().shape({bulkable:n().bool,defaultSortBy:n().string,defaultSortOrder:n().string,filterable:n().bool,pageSize:n().number,searchable:n().bool}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().objectOf(n().shape({type:n().string})).isRequired}).isRequired,slug:n().string.isRequired};const Bm=(0,t.memo)(oi),Wm=()=>t.createElement(S.x,{padding:8},t.createElement(h.Hn,null)),ri=Ke.Z.contentManager,si=({match:{params:{slug:e},url:o}})=>{const{isLoading:r,layout:s,updateLayout:i}=lr(e),{rawContentTypeLayout:l,rawComponentsLayouts:a}=(0,t.useMemo)(()=>{let m={},g={};return s.contentType&&(m=Pt(s.contentType)),s.components&&(g=Object.keys(s.components).reduce((p,y)=>(p[y]=Pt(s.components[y]),p),{})),{rawContentTypeLayout:m,rawComponentsLayouts:g}},[s]);if((s?.contentType?.uid??null)!==e||r)return t.createElement(h.dO,null);const u=({location:{state:m},history:{goBack:g},match:{params:{id:p,origin:y}}},b)=>t.createElement(b,{slug:e,layout:s,state:m,goBack:g,id:p,origin:y}),d=[{path:"create/clone/:origin",comp:Qt},{path:"create",comp:Qt},{path:":id",comp:Qt},{path:"",comp:Im}].map(({path:m,comp:g})=>t.createElement(ae.AW,{key:m,path:`${o}/${m}`,render:p=>u(p,g)}));return t.createElement(ia.ErrorBoundary,{FallbackComponent:Wm},t.createElement(Cr.Provider,{value:s},t.createElement(ae.rs,null,t.createElement(ae.AW,{path:`${o}/configurations/list`},t.createElement(h.O4,{permissions:ri.collectionTypesConfigurations},t.createElement(Bm,{layout:l,slug:e,updateLayout:i}))),t.createElement(ae.AW,{path:`${o}/configurations/edit`},t.createElement(h.O4,{permissions:ri.collectionTypesConfigurations},t.createElement(bo,{components:a,isContentTypeView:!0,mainLayout:l,slug:e,updateLayout:i}))),d)))};si.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};const zm=(0,t.memo)(si);var ii=f(23089);const Vm=Ke.Z.contentManager,Um=()=>{const[{isLoading:e,data:o},r]=(0,t.useReducer)(ii.Z,ii.q),s=(0,t.useMemo)(ln,[]),{schemas:i}=(0,le.v9)(c=>s(c),le.wU),{uid:l}=(0,ae.UO)(),{get:a}=(0,h.kY)();return(0,t.useEffect)(()=>{const u=Re.default.CancelToken.source();return(async m=>{try{r(Bt());const{data:{data:g}}=await a(de(`components/${l}/configuration`),{cancelToken:m.token});r(Gn(Yo(g,i,"component")))}catch(g){if(Re.default.isCancel(g))return;console.error(g)}})(u),()=>{u.cancel("Operation canceled by the user.")}},[l,i,a]),e?t.createElement(h.dO,null):t.createElement(h.O4,{permissions:Vm.componentsConfigurations},t.createElement(bo,{components:o.components,mainLayout:o.component,slug:l}))},Hm=(0,t.memo)(Um);var Gm=f(89722),Qm=f(86031);const Km=()=>{const{formatMessage:e}=(0,Q.Z)();return(0,h.go)(),t.createElement(Te.o,null,t.createElement(Fe.T,{title:e({id:R("header.name"),defaultMessage:"Content"})}),t.createElement(tt.D,null,t.createElement(Gm.x,{action:t.createElement(h.Qj,{variant:"secondary",startIcon:t.createElement(pt.Z,null),to:"/plugins/content-type-builder/content-types/create-content-type"},e({id:"app.components.HomePage.create",defaultMessage:"Create your first Content-type"})),content:e({id:"content-manager.pages.NoContentType.text",defaultMessage:"You don't have any content yet, we recommend you to create your first Content-Type."}),hasRadius:!0,icon:t.createElement(Qm.Z,{width:"10rem"}),shadow:"tableShadow"})))},Ym=()=>{const{formatMessage:e}=(0,Q.Z)();return(0,h.go)(),t.createElement(Te.o,null,t.createElement(Fe.T,{title:e({id:R("header.name"),defaultMessage:"Content"})}),t.createElement(tt.D,null,t.createElement(h.ZF,null)))},Xm=Ke.Z.contentManager,ai=({match:{params:{slug:e},url:o}})=>{const{isLoading:r,layout:s,updateLayout:i}=lr(e),{rawContentTypeLayout:l,rawComponentsLayouts:a}=(0,t.useMemo)(()=>{let c={},u={};return s.contentType&&(u=Pt(s.contentType)),s.components&&(c=Object.keys(s.components).reduce((d,m)=>(d[m]=Pt(s.components[m]),d),{})),{rawContentTypeLayout:u,rawComponentsLayouts:c}},[s]);return r?t.createElement(h.dO,null):t.createElement(Cr.Provider,{value:s},t.createElement(ae.rs,null,t.createElement(ae.AW,{path:`${o}/configurations/edit`},t.createElement(h.O4,{permissions:Xm.singleTypesConfigurations},t.createElement(bo,{components:a,isContentTypeView:!0,mainLayout:l,slug:e,updateLayout:i}))),t.createElement(ae.AW,{path:o,render:({location:{state:c},history:{goBack:u}})=>t.createElement(Qt,{layout:s,slug:e,isSingleType:!0,state:c,goBack:u})})))};ai.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};const Jm=(0,t.memo)(ai);var _m=f(53192),ep=f(60984),tp=f(34446),np=f(29489),op=f(52305);const rp=()=>{const[e,o]=(0,t.useState)(""),{formatMessage:r,locale:s}=(0,Q.Z)(),i=(0,t.useMemo)(Hi,[]),{collectionTypeLinks:l,singleTypeLinks:a}=(0,le.v9)(i,le.wU),{startsWith:c}=(0,h.L0)(s,{sensitivity:"base"}),u=(0,h.Xe)(s,{sensitivity:"base"}),d=(0,t.useMemo)(()=>[{id:"collectionTypes",title:{id:R("components.LeftMenu.collection-types"),defaultMessage:"Collection Types"},searchable:!0,links:l},{id:"singleTypes",title:{id:R("components.LeftMenu.single-types"),defaultMessage:"Single Types"},searchable:!0,links:a}].map(y=>({...y,links:y.links.filter(b=>c(b.title,e)).sort((b,C)=>u.compare(b.title,C.title)).map(b=>({...b,title:r({id:b.title,defaultMessage:b.title})}))})),[l,e,a,c,r,u]),m=()=>{o("")},g=({target:{value:y}})=>{o(y)},p=r({id:R("header.name"),defaultMessage:"Content"});return t.createElement(_m.m,{ariaLabel:p},t.createElement(ep.p,{label:p,searchable:!0,value:e,onChange:g,onClear:m,searchLabel:r({id:"content-manager.components.LeftMenu.Search.label",defaultMessage:"Search for a content type"})}),t.createElement(tp.Z,null,d.map(y=>{const b=r({id:y.title.id,defaultMessage:y.title.defaultMessage},y.title.values);return t.createElement(np.D,{key:y.id,label:b,badgeLabel:y.links.length.toString()},y.links.map(C=>{const k=C.search?`?${C.search}`:"";return t.createElement(op.E,{as:it.OL,key:C.uid,to:`${C.to}${k}`},C.title)}))})))};var wo=f(21358);const sp=()=>({type:wo.fn}),ip=()=>({type:wo.sZ}),ap=({authorizedCollectionTypeLinks:e,authorizedSingleTypeLinks:o,contentTypeSchemas:r,components:s,fieldSizes:i})=>({type:wo.IX,data:{authorizedCollectionTypeLinks:e,authorizedSingleTypeLinks:o,components:s,contentTypeSchemas:r,fieldSizes:i}}),li=(e,o,r=[])=>e.filter(s=>s.isDisplayed).map(s=>{const i=[{action:"plugin::content-manager.explorer.create",subject:s.uid},{action:"plugin::content-manager.explorer.read",subject:s.uid}],l=[{action:"plugin::content-manager.explorer.read",subject:s.uid}],a=o==="collectionTypes"?i:l,c=r.find(({uid:d})=>d===s.uid);let u=null;if(c){const d={page:1,pageSize:c.settings.pageSize,sort:`${c.settings.defaultSortBy}:${c.settings.defaultSortOrder}`};u=(0,Ae.stringify)(d,{encode:!1})}return{permissions:a,search:u,kind:s.kind,title:s.info.displayName,to:`/content-manager/${s.kind}/${s.uid}`,uid:s.uid,name:s.uid,isDisplayed:s.isDisplayed}}),lp=(e,o)=>{const r=Object.entries(Hr()(e,"kind")).map(([l,a])=>({name:l,links:a})),[s,i]=Oo()(r,"name");return{collectionTypeSectionLinks:li(s?.links||[],"collectionTypes",o),singleTypeSectionLinks:li(i?.links??[],"singleTypes")}},ci=(e,o)=>o.map(({permissions:r})=>(0,h.qX)(e,r)),cp=async({models:e,userPermissions:o,toggleNotification:r})=>{const{get:s}=(0,h.tg)();try{const{data:{data:i}}=await s(de("content-types-settings")),{collectionTypeSectionLinks:l,singleTypeSectionLinks:a}=lp(e,i),c=await Promise.all(ci(o,l)),u=l.filter((g,p)=>c[p]),d=await Promise.all(ci(o,a)),m=a.filter((g,p)=>d[p]);return{authorizedCollectionTypeLinks:u,authorizedSingleTypeLinks:m}}catch(i){return console.error(i),r({type:"warning",message:{id:"notification.error"}}),{authorizedCollectionTypeLinks:[],authorizedSingleTypeLinks:[]}}},dp=()=>{const e=(0,le.I0)(),o=(0,h.lm)(),r=(0,le.v9)(et()),s=(0,t.useRef)(),{allPermissions:i}=(0,h.vn)(),{runHookWaterfall:l}=(0,h.j1)(),c=Re.default.CancelToken.source(),{notifyStatus:u}=(0,Co.G)(),{formatMessage:d}=(0,Q.Z)(),{get:m}=(0,h.kY)(),g=async()=>{e(sp());try{const{data:{data:{components:p,contentTypes:y,fieldSizes:b}}}=await m(de("init"),{cancelToken:c.token});u(d({id:R("App.schemas.data-loaded"),defaultMessage:"The schemas have been successfully loaded."}));const C=await cp({models:y,userPermissions:i,toggleNotification:o}),{ctLinks:k}=l(At.LK,{ctLinks:C.authorizedCollectionTypeLinks,models:y}),{stLinks:M}=l(At.dV,{stLinks:C.authorizedSingleTypeLinks,models:y}),E=ap({authorizedCollectionTypeLinks:k,authorizedSingleTypeLinks:M,contentTypeSchemas:y,components:p,fieldSizes:b});e(E)}catch(p){if(Re.default.isCancel(p))return;console.error(p),o({type:"warning",message:{id:"notification.error"}})}};return s.current=g,(0,t.useEffect)(()=>(s.current(),()=>{c.cancel("Operation canceled by the user."),e(ip())}),[e,o]),{...r,refetchData:s.current}},up=Ke.Z.contentManager,di=()=>{const e=(0,ae.$B)("/content-manager/:kind/:uid"),{status:o,collectionTypeLinks:r,singleTypeLinks:s,models:i,refetchData:l}=dp(),a=Oo()([...r,...s],p=>p.title.toLowerCase()),{pathname:c}=(0,ae.TH)(),{formatMessage:u}=(0,Q.Z)(),{startSection:d}=(0,h.c1)(),m=(0,t.useRef)(d);if((0,t.useEffect)(()=>{m.current&&m.current("contentManager")},[]),o==="loading")return t.createElement(Te.o,{"aria-busy":"true"},t.createElement(Fe.T,{title:u({id:R("header.name"),defaultMessage:"Content"})}),t.createElement(h.dO,null));const g=i.filter(({isDisplayed:p})=>p);return a.length===0&&g.length>0&&c!=="/content-manager/403"?t.createElement(ae.l_,{to:"/content-manager/403"}):g.length===0&&c!=="/content-manager/no-content-types"?t.createElement(ae.l_,{to:"/content-manager/no-content-types"}):!e&&a.length>0?t.createElement(ae.l_,{to:`${a[0].to}${a[0].search?`?${a[0].search}`:""}`}):t.createElement(Dt.A,{sideNav:t.createElement(rp,null)},t.createElement(sa,null),t.createElement(Er.Provider,{value:{refetchData:l}},t.createElement(ae.rs,null,t.createElement(ae.AW,{path:"/content-manager/components/:uid/configurations/edit"},t.createElement(h.O4,{permissions:up.componentsConfigurations},t.createElement(Hm,null))),t.createElement(ae.AW,{path:"/content-manager/collectionType/:slug",component:zm}),t.createElement(ae.AW,{path:"/content-manager/singleType/:slug",component:Jm}),t.createElement(ae.AW,{path:"/content-manager/403"},t.createElement(Ym,null)),t.createElement(ae.AW,{path:"/content-manager/no-content-types"},t.createElement(Km,null)),t.createElement(ae.AW,{path:"",component:h.Hn}))))};function mp(){const{formatMessage:e}=(0,Q.Z)();return t.createElement(t.Fragment,null,t.createElement(Ao.q,{title:e({id:R("plugin.name"),defaultMessage:"Content Manager"})}),t.createElement(di,null))}},9226:(ui,Mt,f)=>{"use strict";f.d(Mt,{Z:()=>ae});var t=f(67294);const ae=(h,Te)=>{const[Fe,Dt]=(0,t.useState)(h);return(0,t.useEffect)(()=>{const Q=setTimeout(()=>{Dt(h)},Te);return()=>{clearTimeout(Q)}},[h,Te]),Fe}},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);

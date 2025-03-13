import{a4 as H,aY as Q,u as v,bs as Y,r as m,j as e,P as k,er as T,ay as E,L as G,bJ as U,i as K,bL as Z,Z as J,l as V,by as q,f4 as X,f9 as ee,B as M,a9 as te,eB as se,fa as ne,m as ae,bO as ie,bP as re,bQ as oe,bR as le,aZ as D,aE as ce,ey as ue,fb as de,F as y,I as P,eR as R,T as _,ct as pe,bj as ge,fc as he,aJ as fe,d as O,bT as me,cl as ye,ev as Te}from"./strapi-mwpuEiHn.js";import{C as xe}from"./CardDragPreview-DwuraT0K-B-xLg7uM.js";import{F as be,L as je,D as Le}from"./Relations-qeZyLDgQ-D30GljFy.js";import{a as Se,u as N}from"./hooks-DMvik5y_-BU9m9fnS.js";import{I as S}from"./useDragAndDrop-HYwNDExe-B_128vk0.js";import"./relations-Cq8NRUto-CUtMPIOO.js";import{u as Ce}from"./useDragLayer-DnSP7zg-.js";import"./getEmptyImage-CjqolaH3.js";function Ie(s,a,n){if(!s||!a||!n)return{display:"none"};const{x:t,y:p}=n;return{transform:`translate(${t}px, ${p}px)`}}const Me=({renderItem:s})=>{const{itemType:a,isDragging:n,item:t,initialOffset:p,currentOffset:l,mouseOffset:g}=Ce(i=>({item:i.getItem(),itemType:i.getItemType(),initialOffset:i.getInitialSourceClientOffset(),currentOffset:i.getSourceClientOffset(),isDragging:i.isDragging(),mouseOffset:i.getClientOffset()}));return n?e.jsx(M,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:e.jsx(M,{style:Ie(p,l,g),children:s({type:a,item:t})})}):null},we=({displayedValue:s})=>e.jsxs(y,{background:"neutral0",borderColor:"neutral200",justifyContent:"space-between",gap:3,padding:3,width:"30rem",children:[e.jsx(Ee,{type:"button",children:e.jsxs(y,{gap:6,children:[e.jsx(ke,{alignItems:"center",justifyContent:"center",background:"neutral200",height:"3.2rem",width:"3.2rem",children:e.jsx(he,{})}),e.jsx(y,{maxWidth:"15rem",children:e.jsx(_,{textColor:"neutral700",ellipsis:!0,children:s})})]})}),e.jsxs(y,{gap:2,children:[e.jsx(P,{withTooltip:!1,label:"",variant:"ghost",children:e.jsx(fe,{})}),e.jsx(P,{withTooltip:!1,label:"",variant:"ghost",children:e.jsx(R,{})})]})]}),ke=O(y)`
  border-radius: 50%;

  svg {
    height: 0.6rem;
    width: 1.1rem;
    > path {
      fill: ${({theme:s})=>s.colors.neutral600};
    }
  }
`,Ee=O.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`,De=({status:s,displayedValue:a,width:n})=>e.jsx(M,{style:{width:n},children:e.jsxs(y,{paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:4,hasRadius:!0,borderWidth:1,background:"neutral0",borderColor:"neutral200",justifyContent:"space-between",gap:4,children:[e.jsxs(be,{gap:1,children:[e.jsx(P,{withTooltip:!1,label:"",variant:"ghost",children:e.jsx(R,{})}),e.jsxs(y,{width:"100%",minWidth:0,justifyContent:"space-between",children:[e.jsx(M,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4,children:e.jsx(je,{href:"",children:e.jsx(_,{textColor:"primary600",ellipsis:!0,children:a})})}),s?e.jsx(pe,{status:s}):null]})]}),e.jsx(Le,{type:"button",children:e.jsx(ge,{width:"12px"})})]})}),Pe=O(me)`
  div {
    width: inherit;
    span:nth-child(2) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: inherit;
    }
  }
`,Ne=()=>{const[s,a]=m.useState(""),[{query:n}]=te(),{formatMessage:t,locale:p}=v(),l=N(o=>o["content-manager"].app.collectionTypeLinks),g=N(o=>o["content-manager"].app.singleTypeLinks),{schemas:i}=se(),{startsWith:r}=ne(p,{sensitivity:"base"}),c=ae(p,{sensitivity:"base"}),x=m.useMemo(()=>[{id:"collectionTypes",title:t({id:T("components.LeftMenu.collection-types"),defaultMessage:"Collection Types"}),searchable:!0,links:l},{id:"singleTypes",title:t({id:T("components.LeftMenu.single-types"),defaultMessage:"Single Types"}),searchable:!0,links:g}].map(o=>({...o,links:o.links.filter(u=>r(u.title,s)).sort((u,b)=>c.compare(u.title,b.title)).map(u=>({...u,title:t({id:u.title,defaultMessage:u.title})}))})),[l,s,g,r,t,c]),d=()=>{a("")},h=({target:{value:o}})=>{a(o)},C=t({id:T("header.name"),defaultMessage:"Content Manager"}),w=o=>{const b=!!i.find(j=>j.uid===o.uid)?.pluginOptions?.i18n?.localized;if(n.plugins&&"i18n"in n.plugins){const{i18n:j,...I}=n.plugins;return b?{i18n:j,...I}:I}return n.plugins};return e.jsxs(ie,{"aria-label":C,children:[e.jsx(re,{label:C,searchable:!0,value:s,onChange:h,onClear:d,searchLabel:t({id:"content-manager.components.LeftMenu.Search.label",defaultMessage:"Search for a content type"})}),e.jsx(oe,{children:x.map(o=>e.jsx(le,{label:o.title,badgeLabel:o.links.length.toString(),children:o.links.map(u=>e.jsx(Pe,{tag:ce,to:{pathname:u.to,search:D.stringify({...D.parse(u.search??""),plugins:w(u)})},width:"100%",children:u.title},u.uid))},o.id))})]})},{MUTATE_COLLECTION_TYPES_LINKS:ve,MUTATE_SINGLE_TYPES_LINKS:Oe}=ue,Fe=()=>{const{toggleNotification:s}=K(),a=Se(),n=Z("useContentManagerInitData",d=>d.runHookWaterfall),{notifyStatus:t}=J(),{formatMessage:p}=v(),{_unstableFormatAPIError:l}=V(T),g=q("useContentManagerInitData",d=>d.checkUserHasPermissions),i=N(d=>d["content-manager"].app),r=X(void 0,{refetchOnMountOrArgChange:!0});m.useEffect(()=>{r.data&&t(p({id:T("App.schemas.data-loaded"),defaultMessage:"The schemas have been successfully loaded."}))},[p,r.data,t]),m.useEffect(()=>{r.error&&s({type:"danger",message:l(r.error)})},[l,r.error,s]);const c=ee();m.useEffect(()=>{c.error&&s({type:"danger",message:l(c.error)})},[l,c.error,s]);const x=async(d,h,C,w)=>{const{collectionType:o,singleType:u}=h.reduce((f,L)=>(f[L.kind].push(L),f),{collectionType:[],singleType:[]}),b=F(o,"collectionTypes",w),j=F(u,"singleTypes"),I=await Promise.all(b.map(({permissions:f})=>g(f))),A=b.filter((f,L)=>I[L].length>0),$=await Promise.all(j.map(({permissions:f})=>g(f))),B=j.filter((f,L)=>$[L].length>0),{ctLinks:z}=n(ve,{ctLinks:A,models:h}),{stLinks:W}=n(Oe,{stLinks:B,models:h});a(de({authorizedCollectionTypeLinks:z,authorizedSingleTypeLinks:W,components:d,contentTypeSchemas:h,fieldSizes:C}))};return m.useEffect(()=>{r.data&&c.data&&x(r.data.components,r.data.contentTypes,r.data.fieldSizes,c.data)},[r.data,c.data]),{...i}},F=(s,a,n=[])=>s.filter(t=>t.isDisplayed).map(t=>{const p=[{action:"plugin::content-manager.explorer.create",subject:t.uid},{action:"plugin::content-manager.explorer.read",subject:t.uid}],l=[{action:"plugin::content-manager.explorer.read",subject:t.uid}],g=a==="collectionTypes"?p:l,i=n.find(({uid:c})=>c===t.uid);let r=null;if(i){const c={page:1,pageSize:i.settings.pageSize,sort:`${i.settings.defaultSortBy}:${i.settings.defaultSortOrder}`};r=D.stringify(c,{encode:!1})}return{permissions:g,search:r,kind:t.kind,title:t.info.displayName,to:`/content-manager/${t.kind==="collectionType"?ye:Te}/${t.uid}`,uid:t.uid,name:t.uid,isDisplayed:t.isDisplayed}}),Ye=()=>{const s=H("/content-manager/:kind/:uid/*"),{isLoading:a,collectionTypeLinks:n,models:t,singleTypeLinks:p}=Fe(),l=[...n,...p].sort((d,h)=>d.title.localeCompare(h.title)),{pathname:g}=Q(),{formatMessage:i}=v(),r=Y("Layout",d=>d.startSection),c=m.useRef(r);if(m.useEffect(()=>{c.current&&c.current("contentManager")},[]),a)return e.jsxs(e.Fragment,{children:[e.jsx(k.Title,{children:i({id:T("plugin.name"),defaultMessage:"Content Manager"})}),e.jsx(k.Loading,{})]});const x=t.filter(({isDisplayed:d})=>d);return l.length===0&&x.length>0&&g!=="/content-manager/403"?e.jsx(E,{to:"/403"}):x.length===0&&g!=="/no-content-types"?e.jsx(E,{to:"/no-content-types"}):!s&&l.length>0?e.jsx(E,{to:{pathname:l[0].to,search:l[0].search??""},replace:!0}):e.jsxs(e.Fragment,{children:[e.jsx(k.Title,{children:i({id:T("plugin.name"),defaultMessage:"Content Manager"})}),e.jsxs(G.Root,{sideNav:e.jsx(Ne,{}),children:[e.jsx(Me,{renderItem:Re}),e.jsx(U,{})]})]})};function Re({type:s,item:a}){if(!s||s&&typeof s!="string")return null;const[n]=s.split("_");switch(n){case S.EDIT_FIELD:case S.FIELD:return e.jsx(xe,{label:a.label});case S.COMPONENT:case S.DYNAMIC_ZONE:return e.jsx(we,{displayedValue:a.displayedValue});case S.RELATION:return e.jsx(De,{...a});default:return null}}export{Ye as Layout};

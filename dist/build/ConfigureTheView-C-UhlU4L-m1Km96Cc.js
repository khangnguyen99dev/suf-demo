import{h as I,u as y,i as $,fh as O,r as x,aF as T,j as e,L as c,P as z,fi as o,U as B,ew as F,$ as H,b as W,fN as u,aE as _,cm as G,aL as U,aM as P,g2 as q,fQ as Q,B as V,S as g,W as d,bz as b,g5 as Y,bA as j,g6 as J}from"./strapi-mwpuEiHn.js";const K=({sort:i="",pageSize:s=10,onChange:t})=>{const{formatMessage:n}=y();return e.jsx(V,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(g.Root,{gap:4,children:[e.jsx(g.Item,{s:12,col:6,direction:"column",alignItems:"stretch",children:e.jsxs(d.Root,{hint:n({id:o("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),name:"pageSize",children:[e.jsx(d.Label,{children:n({id:o("config.entries.title"),defaultMessage:"Entries per page"})}),e.jsx(b,{onChange:a=>t({target:{name:"pageSize",value:a}}),value:s,children:Y.map(a=>e.jsx(j,{value:a,children:a},a))}),e.jsx(d.Hint,{})]})}),e.jsx(g.Item,{s:12,col:6,direction:"column",alignItems:"stretch",children:e.jsxs(d.Root,{hint:n({id:o("config.note"),defaultMessage:"Note: You can override this value in the media library."}),name:"sort",children:[e.jsx(d.Label,{children:n({id:o("config.sort.title"),defaultMessage:"Default sort order"})}),e.jsx(b,{onChange:a=>t({target:{name:"sort",value:a}}),value:i,"test-sort":i,"data-testid":"sort-select",children:J.map(a=>e.jsx(j,{"data-testid":`sort-option-${a.value}`,value:a.value,children:n({id:o(a.key),defaultMessage:`${a.value}`})},a.key))}),e.jsx(d.Hint,{})]})})]})})},D=`${u}/ON_CHANGE`,v=`${u}/SET_LOADED`,X=({name:i,value:s})=>({type:D,keys:i,value:s}),Z=()=>({type:v}),f={initialData:{},modifiedData:{}},S=i=>({...f,initialData:i,modifiedData:i}),ee=(i=f,s={type:""})=>T(i,t=>{switch(s.type){case D:{"keys"in s&&"value"in s&&s.keys&&Q(t,["modifiedData",...s.keys.split(".")],s.value);break}case v:{const n=S(q(t,["modifiedData"],{}));t.initialData=n.initialData,t.modifiedData=n.modifiedData;break}default:return t}}),te=({config:i})=>{const{trackUsage:s}=I(),{formatMessage:t}=y(),{toggleNotification:n}=$(),{mutateConfig:a}=O(),{isLoading:M}=a,[C,h]=x.useState(!1),m=()=>h(r=>!r),[k,L]=x.useReducer(ee,f,()=>S(i)),p=L,{initialData:w,modifiedData:l}=k,E=r=>{r.preventDefault(),m()},R=async()=>{s("willEditMediaLibraryConfig"),await a.mutateAsync(l),h(!1),p(Z()),n({type:"success",message:t({id:"notification.form.success.fields",defaultMessage:"Changes saved"})})},N=({target:{name:r,value:A}})=>{p(X({name:r,value:A}))};return e.jsx(c.Root,{children:e.jsx(z.Main,{"aria-busy":M,children:e.jsxs("form",{onSubmit:E,children:[e.jsx(c.Header,{navigationAction:e.jsx(W,{tag:_,startIcon:e.jsx(G,{}),to:`/plugins/${u}`,id:"go-back",children:t({id:o("config.back"),defaultMessage:"Back"})}),primaryAction:e.jsx(B,{size:"S",startIcon:e.jsx(H,{}),disabled:F(l,w),type:"submit",children:t({id:"global.save",defaultMessage:"Save"})}),subtitle:t({id:o("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:t({id:o("config.title"),defaultMessage:"Configure the view - Media Library"})}),e.jsx(c.Content,{children:e.jsx(K,{"data-testid":"settings",pageSize:l.pageSize||"",sort:l.sort||"",onChange:N})}),"x",e.jsx(U.Root,{open:C,onOpenChange:m,children:e.jsx(P,{onConfirm:R,variant:"default",children:t({id:o("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"})})})]})})})};export{te as ConfigureTheView};

const u={Colombo:32,Kurunegala:16,Jaffna:18,Galle:12,Trincomalee:10,Kandy:20},b=({data:a=u,options:s={color:"#00A0AF"}})=>{const t=document.createElement("solias-barchart");return t.data=a,t.options=s,t},C={title:"Components/Chart",tags:["autodocs"],argTypes:{data:{control:"object"},options:{control:"object"}},render:({options:a,...s})=>b({options:a,...s}),parameters:{docs:{source:{code:'<solias-barchart data="data" options="options"></solias-barchart>'},description:{component:"This is basic bar chart"}}}},o={args:{options:{color:"#00A0AF",width:500,height:300}}},r={args:{options:{color:"#f9ab00",width:500,height:300}}};var e,n,c,i,d;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    options: {
      color: '#00A0AF',
      width: 500,
      height: 300
    }
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source},description:{story:"This is basic bar chart",...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.description}}};var p,h,l,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options: {
      color: '#f9ab00',
      width: 500,
      height: 300
    }
  }
}`,...(l=(h=r.parameters)==null?void 0:h.docs)==null?void 0:l.source},description:{story:"Color Changed",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};const A=["Basic","ChangeColor"];export{o as Basic,r as ChangeColor,A as __namedExportsOrder,C as default};
//# sourceMappingURL=chart.stories-3bf77aa5.js.map

const s={Colombo:41,Kurunegala:16,Jaffna:18,Galle:12,Trincomalee:10,Kandy:20,Gampaha:32},C=({data:t=s,options:o={color:"#00A0AF"}})=>{const n=document.createElement("solias-chart");return n.data=t,n.options=o,n},b={title:"Examples/Bar Chart",tags:["autodocs"],argTypes:{data:{control:"object"},options:{control:"object"}},render:({options:t,...o})=>C({options:t,...o}),parameters:{docs:{source:{code:'<solias-chart data="data" options="options"></solias-chart>'},description:{component:'This is basic bar chart.\r\n## Component\r\n\n```html\r\n<solias-chart data="data" options="options"></solias-chart>\r\n```\r\n\n## Properties\r\n\n| Property  | Attribute | Description   | Type                     | Default     |\r\n| --------- | --------- | ------------- | ------------------------ | ----------- |\r\n| `data`    | --        | Input data    | `SoliasDefaultChartData` | `undefined` |\r\n| `options` | --        | Chart Options | `SoliasChartOptions`     | `undefined` |\r\n\n#### Type `SoliasDefaultChartData`\r\n\n```js \r\nSoliasDefaultChartData {\r\n[key: string]: number\r\n}\r\n```\r\n\n#### Type `SoliasChartOptions`\r\n\n```js\r\nSoliasChartOptions {\r\nheight?: number | null;\r\nwidth?: number | null;\r\ncolor?: string;\r\n}\r\n```\r\n## Preview'}}}},r={args:{data:s,options:{color:"#00A0AF",width:500,height:300}}},a={args:{data:s,options:{color:"#f9ab00",width:500,height:300}}};var e,i,c,p,d;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    data: cities,
    options: {
      color: '#00A0AF',
      width: 500,
      height: 300
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"This is basic bar chart",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};var l,h,u,m,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: cities,
    options: {
      color: '#f9ab00',
      width: 500,
      height: 300
    }
  }
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:"Color Changed",...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};const f=["Basic","ChangeColor"];export{r as Basic,a as ChangeColor,f as __namedExportsOrder,b as default};
//# sourceMappingURL=chart.stories-3a8ae18c.js.map

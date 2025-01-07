import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{f as u}from"./index-Z5tTm0QU.js";import"./index-D2MAbzvX.js";const d=({question:t,questionNumber:s,totalQuestions:a,onChange:i})=>e.jsxs("div",{className:"space-y-6","data-testid":`question-${s}`,children:[e.jsxs("div",{className:"text-sm text-gray-500",children:["Question ",s," of ",a]}),e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5 mb-6",children:e.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full transition-all duration-500",style:{width:`${s/a*100}%`},"data-testid":"progress-bar"})}),e.jsx("p",{className:"text-xl font-semibold mb-8",children:t}),e.jsxs("div",{className:"flex gap-4 justify-center",children:[e.jsx("button",{onClick:()=>i(!0),className:"px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors","data-testid":"yes-button","aria-label":"Yes",children:"Yes"}),e.jsx("button",{onClick:()=>i(!1),className:"px-8 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors","data-testid":"no-button","aria-label":"No",children:"No"})]})]});d.__docgenInfo={description:"",methods:[],displayName:"EligibilityQuestion",props:{question:{required:!0,tsType:{name:"string"},description:""},questionNumber:{required:!0,tsType:{name:"number"},description:""},totalQuestions:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}};const g={title:"Donor/EligibilityQuestion",component:d,tags:["autodocs"],argTypes:{onChange:{action:"answered",description:"Called when Yes/No is clicked"}},parameters:{backgrounds:{default:"light"},actions:{handles:["click .yes-button","click .no-button"]}}},n={args:{question:"Have you had any vaccinations in the last 10 weeks?",questionNumber:90,totalQuestions:100,onChange:u(t=>(alert(`Question 90 answered: ${t?"Yes":"No"}`),t))},play:async({canvasElement:t})=>{}};var o,r,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    question: 'Have you had any vaccinations in the last 10 weeks?',
    questionNumber: 90,
    totalQuestions: 100,
    onChange: fn(answer => {
      // Use fn instead of console.log
      alert(\`Question 90 answered: \${answer ? 'Yes' : 'No'}\`); // Add visible feedback
      return answer;
    })
  },
  play: async ({
    canvasElement
  }) => {
    // Add automatic interaction test if needed
  }
}`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const b=["Question90"];export{n as Question90,b as __namedExportsOrder,g as default};

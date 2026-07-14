"use strict";(self.webpackChunk_canvas_horizon_storybook=self.webpackChunk_canvas_horizon_storybook||[]).push([["1941"],{"../learning-provider/src/shared/components/assignment/index.ts"(e,t,r){r.d(t,{CS:()=>"30em",qs:()=>c,H3:()=>"20em",p1:()=>u,y7:()=>"32em",LA:()=>h});var i=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),n=r("../../libs/components/dist/index.js"),a=r("../../libs/i18n/dist/index.mjs"),o=r("../../libs/theme/dist/index.js"),s=r("../../node_modules/.pnpm/@instructure+ui-flex@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18.3_fba5d46bd0fb9609dad8683e95e91b76/node_modules/@instructure/ui-flex/es/Flex/v1/index.js"),l=r("../../node_modules/.pnpm/@instructure+ui-view@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18.3_b39341482f6a4ea7a4c5137880103699/node_modules/@instructure/ui-view/es/View/v1/index.js"),d=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let u=e=>{let{allowedAttempts:t,handleChange:r,analyticsFactory:u,disabled:c}=e,{t:p}=(0,a.useTranslation)(),h=(0,o.wR)(),m=(0,d.useMemo)(()=>[{id:"unlimited",label:p("Unlimited")},{id:"limited",label:p("Limited")}],[p]),[g,_]=(0,d.useState)(t>0);return(0,i.jsxs)(s.so,{direction:"row",alignItems:"start",gap:"medium",children:[(0,i.jsx)(l.S,{as:"div",maxWidth:"10em",children:(0,i.jsx)(n.oQS,{renderLabel:(0,i.jsx)("span",{style:{fontWeight:h.typography.fontWeightSemiBold},children:p("Allowed attempts")}),options:m,type:n.Iqr.SINGLE,getOptionLabel:e=>e.label,getOptionId:e=>e.id,setSelectedOptionIds:e=>{let t=m.find(t=>t.id===e[0]);t&&"unlimited"===t.id?(r(-1),_(!1)):_(!0)},initialSelectedOptions:g?[m[1]]:[m[0]],analyticsTag:null==u?void 0:u.create("allowed-attempts-select"),interaction:c?"disabled":"enabled"})}),g&&(0,i.jsx)(l.S,{as:"div",maxWidth:"10em",children:(0,i.jsx)(n.oQS,{renderLabel:(0,i.jsx)("span",{style:{fontWeight:h.typography.fontWeightSemiBold},children:p("Number of attempts")}),options:[{id:-1,label:""},...Array.from({length:15},(e,t)=>({id:t+1,label:(t+1).toString()}))],interaction:c||!g?"disabled":"enabled",type:n.Iqr.SINGLE,getOptionLabel:e=>e.label,getOptionId:e=>e.id,setSelectedOptionIds:e=>{let t=e[0];t&&r(t)},initialSelectedOptions:t>0?[{id:t,label:t.toString()}]:[{id:-1,label:""}],analyticsTag:null==u?void 0:u.create("number-of-attempts-select")})})]})};u.__docgenInfo={description:"",methods:[],displayName:"AllowedAttemptsInput",props:{allowedAttempts:{required:!0,tsType:{name:"number"},description:""},handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},analyticsFactory:{required:!1,tsType:{name:"AnalyticsContext"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};let c=e=>{let{estimatedDuration:t,handleChange:r,analyticsFactory:o,disabled:s}=e,{t:d}=(0,a.useTranslation)();return(0,i.jsx)(l.S,{as:"div",maxWidth:"10em",children:(0,i.jsx)(n.Q7x,{value:t.minutes,onChange:r,label:d("Estimated minutes"),analyticsFactory:o,analyticsId:"estimated-time-input",minValue:0,interaction:s?"disabled":"enabled"})})};c.__docgenInfo={description:"",methods:[],displayName:"EstimatedTimeInput",props:{estimatedDuration:{required:!0,tsType:{name:"EstimatedDurationAttributes"},description:""},handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number | null) => void",signature:{arguments:[{type:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},analyticsFactory:{required:!1,tsType:{name:"AnalyticsContext"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};var p=r("../../node_modules/.pnpm/@instructure+ui-checkbox@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@_886e82ddb1ae688281436e12b84b36ab/node_modules/@instructure/ui-checkbox/es/Checkbox/v1/index.js");let h=e=>{let{points:t,gradingType:r,omitFromFinalGrade:u,onPointsChange:c,onGradingTypeChange:h,onOmitFromFinalGradeChange:m,analyticsFactory:g,disabled:_}=e,{t:v}=(0,a.useTranslation)(),f=(0,o.wR)(),y=(0,d.useMemo)(()=>[{id:"points",label:v("Points")},{id:"percent",label:v("Percentage")},{id:"gpa_scale",label:v("GPA Scale")},{id:"pass_fail",label:v("Complete/Incomplete")},{id:"not_graded",label:v("Not Graded")}],[v]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.so,{direction:"row",alignItems:"start",gap:"medium",wrap:"wrap",children:[(0,i.jsx)(l.S,{as:"div",maxWidth:"10em",children:(0,i.jsx)(n.Q7x,{value:t,onChange:e=>c(e??0),label:v("Points"),analyticsFactory:g,analyticsId:"points-input",minValue:0,interaction:_?"disabled":"enabled"})}),(0,i.jsx)(n.oQS,{renderLabel:(0,i.jsx)("span",{style:{fontWeight:f.typography.fontWeightSemiBold},children:v("Display score as")}),options:y,type:n.Iqr.SINGLE,getOptionLabel:e=>e.label,getOptionId:e=>e.id,setSelectedOptionIds:e=>{let t=y.find(t=>t.id===e[0]);t&&h(t)},initialSelectedOptions:[r],analyticsTag:null==g?void 0:g.create("grading-type-select"),interaction:_?"disabled":"enabled"})]}),void 0!==u&&m&&(0,i.jsx)(p.Sc,{label:v("Do not count this assignment towards the final score"),value:v("Do not count this assignment towards the final score"),checked:u,onChange:e=>{m(e.target.checked)},disabled:_,...null==g?void 0:g.create("omit-from-final-grade-checkbox")},"omitFromFinalGrade")]})};h.__docgenInfo={description:"",methods:[],displayName:"ScoreOptionsInput",props:{points:{required:!0,tsType:{name:"number"},description:""},gradingType:{required:!0,tsType:{name:"GradingType"},description:""},omitFromFinalGrade:{required:!1,tsType:{name:"boolean"},description:""},onPointsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},onGradingTypeChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: GradingType) => void",signature:{arguments:[{type:{name:"GradingType"},name:"value"}],return:{name:"void"}}},description:""},onOmitFromFinalGradeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},analyticsFactory:{required:!1,tsType:{name:"AnalyticsContext"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}}},"../../libs/components/dist/index.js"(e,t,r){let i,n,a;r.d(t,{cwU:()=>rU,TMB:()=>t8,EA8:()=>rz,uvC:()=>tY,REf:()=>t3,Gbf:()=>rX,oQS:()=>t$,Mwb:()=>tU,enm:()=>tH,IzF:()=>rq,uqJ:()=>re,GKk:()=>rH,CQQ:()=>r_,VHK:()=>rf,t5i:()=>rW,Q7x:()=>rK,Wmj:()=>rg,Iqr:()=>tT,D_A:()=>t2,Vkp:()=>tD});var o,s,l,d,u,c,p,h,m,g,_,v,f,y,w,x,C,b,k,S,E,I=r("../../libs/utils/dist/index.js"),A=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),O=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),L=r("../../node_modules/.pnpm/react-router-dom@6.30.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js"),M=r("../../libs/i18n/dist/index.mjs"),R=r("../../node_modules/.pnpm/@instructure+ui-tag@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18.3._20ccaf8bd52824b09a6f99628cfbf187/node_modules/@instructure/ui-tag/es/Tag/v1/index.js"),T=r("../../node_modules/.pnpm/@instructure+ui-flex@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18.3_fba5d46bd0fb9609dad8683e95e91b76/node_modules/@instructure/ui-flex/es/Flex/v1/index.js"),N=r("../../node_modules/.pnpm/@instructure+ui-select@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18_1043508a744e91574bba022494d840df/node_modules/@instructure/ui-select/es/Select/v1/index.js"),$=r("../../node_modules/.pnpm/@instructure+ui-view@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18.3_b39341482f6a4ea7a4c5137880103699/node_modules/@instructure/ui-view/es/View/v1/index.js"),j=r("../../node_modules/.pnpm/@instructure+ui-spinner@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@1_8020d719caebb744a2e584fbe335b376/node_modules/@instructure/ui-spinner/es/Spinner/v1/index.js"),Z=r("../../node_modules/.pnpm/@instructure+ui-a11y-content@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_re_174565f99bb813b8dd57156e19a37055/node_modules/@instructure/ui-a11y-content/es/AccessibleContent/index.js"),B=r("../../node_modules/.pnpm/@instructure+ui-badge@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18._deb623555f0fe16b1adbba4eab7e2f81/node_modules/@instructure/ui-badge/es/Badge/v1/index.js"),P=r("../../node_modules/.pnpm/@instructure+ui-buttons@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@1_9d685e683e209db0da0446465386b3b7/node_modules/@instructure/ui-buttons/es/Button/v1/index.js"),D=r("../../node_modules/.pnpm/@instructure+emotion@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18.3_ff440c253dd6511df6bea322ec98cd17/node_modules/@instructure/emotion/es/InstUISettingsProvider/index.js"),U=r("../../node_modules/.pnpm/@instructure+ui-tooltip@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@1_3dc0ed88604a9f8e92aa6b104bdf56d9/node_modules/@instructure/ui-tooltip/es/Tooltip/v1/index.js"),H=r("../../node_modules/.pnpm/@instructure+ui-buttons@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@1_9d685e683e209db0da0446465386b3b7/node_modules/@instructure/ui-buttons/es/IconButton/v1/index.js"),z=r("../../node_modules/.pnpm/@instructure+ui-text@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18.3_3ad0bd1354b9690b17b3549df866e3dd/node_modules/@instructure/ui-text/es/Text/v1/index.js"),K=r("../../node_modules/.pnpm/@instructure+ui-heading@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@1_b2b4e936d73476d0a80ddb2b7adf25c6/node_modules/@instructure/ui-heading/es/Heading/v1/index.js"),W=r("../../node_modules/.pnpm/@instructure+ui-modal@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18._6782ce2826a264f647f4777735691793/node_modules/@instructure/ui-modal/es/Modal/v1/index.js"),V=r("../../node_modules/.pnpm/@instructure+ui-popover@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@1_00e537ec2a1e403855decc539371a852/node_modules/@instructure/ui-popover/es/Popover/v1/index.js"),X=r("../../node_modules/.pnpm/@instructure+ui-checkbox@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@_886e82ddb1ae688281436e12b84b36ab/node_modules/@instructure/ui-checkbox/es/Checkbox/v1/index.js"),F=r("../../node_modules/.pnpm/@instructure+ui-number-input@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_re_2875ae835eb450f118d38acb2165ca95/node_modules/@instructure/ui-number-input/es/NumberInput/v1/index.js"),G=r("../../node_modules/.pnpm/@instructure+ui-radio-input@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_rea_510a7ffda91ee8b676f6dad1e0c9f0fa/node_modules/@instructure/ui-radio-input/es/RadioInput/v1/index.js"),Y=r("../../node_modules/.pnpm/@instructure+ui-a11y-content@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_re_174565f99bb813b8dd57156e19a37055/node_modules/@instructure/ui-a11y-content/es/ScreenReaderContent/index.js"),q=r("../../node_modules/.pnpm/@instructure+ui-icons@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18._d790b45ecc3239996dea715c41a40b6f/node_modules/@instructure/ui-icons/es/generated/IconWarningSolid.js"),Q=r("../../node_modules/.pnpm/@instructure+ui-text-input@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_reac_94c02949d5f5e8e7d7adac35467ebf03/node_modules/@instructure/ui-text-input/es/TextInput/v1/index.js"),J=(r("../../node_modules/.pnpm/@instructure+ui-tabs@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_react@18.3_8fa9df1b44ebea245dea89faa6c463c5/node_modules/@instructure/ui-tabs/es/Tabs/v1/index.js"),r("../../libs/api-commons/dist/index.js")),ee=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js");ee.Ik({hosts:ee.Ik({canvas:ee.Yj(),common_cartridge_viewer:ee.Yj(),ignite:ee.Yj().nullable().default(null),journey:ee.Yj(),rcs:ee.Yj(),api_gateway:ee.Yj().nullable().default(null),autopilot:ee.Yj().nullable().default(null)}),hotglue:ee.Ik({api_key:ee.Yj(),env_id:ee.Yj(),flow_id:ee.Yj()}).optional(),pendo:ee.Ik({api_key:ee.Yj()}).optional(),sentry:ee.Ik({learner_dsn:ee.Yj(),learning_provider_dsn:ee.Yj(),replays_sample_rate:ee.ai(),traces_sample_rate:ee.ai()}).optional(),environment:ee.Yj(),feedback_url:ee.Yj().optional(),experience_mode:ee.k5(["academic","career"]).default("career")}),(l=E||(E={})).LEARNER="learner",l.LEARNING_PROVIDER="learning-provider";var et=r("../../node_modules/.pnpm/@instructure+ui-react-utils@11.7.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@instructure/ui-react-utils/es/DeterministicIdContext/DeterministicIdContext.js"),er=r("../../node_modules/.pnpm/@instructure+ui-utils@11.7.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@instructure/ui-utils/es/generateId.js");let ei=e=>!e.hasAttribute("disabled")&&"true"!==e.getAttribute("aria-disabled")&&"-1"!==e.getAttribute("tabindex")&&!!(e=>{if(null===e.offsetParent&&"BODY"!==e.tagName)return!1;let t=window.getComputedStyle(e);return"hidden"!==t.visibility&&"none"!==t.display})(e);var en=((d={})[d.RootAdmin=J.tXK.ROOT_ADMIN]="RootAdmin",d[d.Admin=J.tXK.ADMIN]="Admin",d[d.CourseFacilitator=J.tXK.COURSE_FACILITATOR]="CourseFacilitator",d[d.Learner=J.tXK.LEARNER]="Learner",d[d.Unknown=J.tXK.UNKNOWN]="Unknown",d);J.tXK.ROOT_ADMIN,en.RootAdmin,J.tXK.ADMIN,en.Admin,J.tXK.COURSE_FACILITATOR,en.CourseFacilitator,J.tXK.INSTRUCTOR,en.CourseFacilitator,J.tXK.TA,en.CourseFacilitator,J.tXK.DESIGNER,en.CourseFacilitator,J.tXK.LEARNER,en.Learner,J.tXK.OBSERVER,en.Unknown,J.tXK.UNKNOWN,en.Unknown;let ea=e=>{let t=(0,O.useContext)(et.b);return(0,O.useMemo)(()=>(0,er.$)(e,t),[e,t])},eo=(0,O.createContext)({announce:()=>{}});var es=r("../../libs/icons/src/index.ts"),el=r("../../libs/theme/dist/index.js"),ed=r("../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.29_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),eu=r("../../node_modules/.pnpm/react-use@17.6.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useIntersection.js"),ec=r("../../node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@18.3.29_react@18.3.1__@types+react@18.3.29_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");r("../../node_modules/.pnpm/dompurify@3.4.8/node_modules/dompurify/dist/purify.es.mjs");var ep=r("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),eh=r.n(ep),em=(r("../../node_modules/.pnpm/@instructure+ui-react-utils@11.7.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@instructure/ui-react-utils/es/matchComponentTypes.js"),r("../../node_modules/.pnpm/@instructure+ui-react-utils@11.7.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@instructure/ui-react-utils/es/callRenderProp.js"),{"../token-storage/dist/index.js":function(e,t,r){var i={};i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};i.r(n),i.d(n,{STORAGE_KEYS:()=>l,clearTokenData:()=>c,getCanvasServiceJwt:()=>p,setCanvasServiceJwtData:()=>u});let a=r("@canvas-horizon/utils"),o=r("../../node_modules/.pnpm/jwt-decode@4.0.0/node_modules/jwt-decode/build/esm/index.js"),s=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js"),l={TOKEN_DATA:"access_token_data",CANVAS_SERVICE_JWT:"canvas_service_jwt_data"},d=s.z.object({token:s.z.string()}).optional(),u=e=>{localStorage.setItem(l.CANVAS_SERVICE_JWT,JSON.stringify({token:e}))},c=()=>{for(let e of Object.values(l))localStorage.removeItem(e)},p=e=>{let t=(()=>{let e=localStorage.getItem(l.CANVAS_SERVICE_JWT);if(e)try{let t=(0,a.parseJson)(e);return d.parse(t),t}catch(e){console.error(e);return}})(),r=null==t?void 0:t.token;if(r&&!h(t)&&!m(t,e))return r},h=e=>{if(!e)return!0;let t=(0,o.jwtDecode)(e.token);return!t.exp||new Date(1e3*t.exp-3e5)<=new Date},m=(e,t)=>!e||!!t&&String((0,o.jwtDecode)(e.token).sub)!==String(t);for(var g in n)t[g]=n[g];n.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})},"@canvas-horizon/utils":function(e){e.exports=I},"../../node_modules/.pnpm/jwt-decode@4.0.0/node_modules/jwt-decode/build/esm/index.js":function(e,t,r){r.r(t),r.d(t,{InvalidTokenError:function(){return i},jwtDecode:function(){return n}});class i extends Error{}function n(e,t){let r;if("string"!=typeof e)throw new i("Invalid token specified: must be a string");t||(t={});let n=+(!0!==t.header),a=e.split(".")[n];if("string"!=typeof a)throw new i(`Invalid token specified: missing part #${n+1}`);try{r=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var r;return r=t,decodeURIComponent(atob(r).replace(/(.)/g,(e,t)=>{let r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}catch(e){return atob(t)}}(a)}catch(e){throw new i(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(r)}catch(e){throw new i(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}i.prototype.name="InvalidTokenError"},"../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js":function(e,t,r){r.r(t),r.d(t,{string:()=>s.Z_,symbol:()=>s.NA,boolean:()=>s.O7,undefined:()=>s.S1,Schema:()=>s.V_,ZodDiscriminatedUnion:()=>s.Iy,ZodNullable:()=>s.ng,ZodType:()=>s.DI,void:()=>s.Hc,z:()=>i,map:()=>s.UI,ZodLiteral:()=>s.SG,never:()=>s.Fi,EMPTY_PATH:()=>a.h2,union:()=>s.G0,nullable:()=>s.AG,record:()=>s.IM,ZodFunction:()=>s.b_,object:()=>s.Ry,ZodPromise:()=>s.Wx,DIRTY:()=>a.RC,setErrorMap:()=>n.DJ,optional:()=>s.jt,ZodCatch:()=>s.ON,ZodOptional:()=>s.ak,isAborted:()=>a.Hc,tuple:()=>s.bc,getErrorMap:()=>n.Pr,coerce:()=>s.oQ,datetimeRegex:()=>s.wU,intersection:()=>s.jV,ZodRecord:()=>s.KX,INVALID:()=>a.UI,ZodMap:()=>s.Ym,getParsedType:()=>o.FQ,nativeEnum:()=>s.jb,ZodNever:()=>s.$n,objectUtil:()=>o.Mg,transformer:()=>s.l4,ZodLazy:()=>s.dT,NEVER:()=>s.C4,preprocess:()=>s.dj,any:()=>s.Yj,ZodSchema:()=>s.I6,ZodNaN:()=>s.Hu,ZodDate:()=>s.$s,ParseStatus:()=>a.Q9,custom:()=>s.PG,ZodObject:()=>s.CQ,ZodEffects:()=>s.Xc,ZodIssueCode:()=>l.NL,ZodPipeline:()=>s.om,defaultErrorMap:()=>n.jY,effect:()=>s.cE,ZodNumber:()=>s.IV,instanceof:()=>s.Pp,isAsync:()=>a.S9,late:()=>s.wt,set:()=>s.t8,unknown:()=>s._4,ZodBranded:()=>s.Gd,ZodNativeEnum:()=>s.Zl,date:()=>s.hT,ZodIntersection:()=>s.f9,number:()=>s.Rx,ZodFirstPartyTypeKind:()=>s.pA,null:()=>s.lB,isDirty:()=>a.eT,default:()=>d,oboolean:()=>s.Ts,promise:()=>s.MC,quotelessJson:()=>l.Zh,ZodDefault:()=>s.uE,ZodEnum:()=>s.K7,ZodNull:()=>s.pV,ZodReadonly:()=>s.ur,ZodError:()=>l.jm,ZodBigInt:()=>s.EG,ZodUnknown:()=>s.Dy,makeIssue:()=>a.Xm,BRAND:()=>s.cg,bigint:()=>s.Kv,ZodSet:()=>s.qA,pipeline:()=>s.EU,ZodTransformer:()=>s.z2,ZodBoolean:()=>s.pZ,ZodString:()=>s.$T,ZodTuple:()=>s._P,OK:()=>a.OK,ZodParsedType:()=>o.$k,ZodVoid:()=>s.XE,literal:()=>s.i0,ZodUndefined:()=>s.DY,addIssueToContext:()=>a.KD,nan:()=>s.qn,ZodSymbol:()=>s.tX,ZodUnion:()=>s.jp,ZodAny:()=>s.O8,discriminatedUnion:()=>s.VK,isValid:()=>a.JY,onumber:()=>s.vs,ostring:()=>s.Dk,strictObject:()=>s.cf,array:()=>s.IX,util:()=>o.D5,ZodArray:()=>s.p5,function:()=>s.ZI,enum:()=>s.Km,lazy:()=>s.Vo});var i={};r.r(i),r.d(i,{BRAND:()=>s.cg,DIRTY:()=>a.RC,EMPTY_PATH:()=>a.h2,INVALID:()=>a.UI,NEVER:()=>s.C4,OK:()=>a.OK,ParseStatus:()=>a.Q9,Schema:()=>s.V_,ZodAny:()=>s.O8,ZodArray:()=>s.p5,ZodBigInt:()=>s.EG,ZodBoolean:()=>s.pZ,ZodBranded:()=>s.Gd,ZodCatch:()=>s.ON,ZodDate:()=>s.$s,ZodDefault:()=>s.uE,ZodDiscriminatedUnion:()=>s.Iy,ZodEffects:()=>s.Xc,ZodEnum:()=>s.K7,ZodError:()=>l.jm,ZodFirstPartyTypeKind:()=>s.pA,ZodFunction:()=>s.b_,ZodIntersection:()=>s.f9,ZodIssueCode:()=>l.NL,ZodLazy:()=>s.dT,ZodLiteral:()=>s.SG,ZodMap:()=>s.Ym,ZodNaN:()=>s.Hu,ZodNativeEnum:()=>s.Zl,ZodNever:()=>s.$n,ZodNull:()=>s.pV,ZodNullable:()=>s.ng,ZodNumber:()=>s.IV,ZodObject:()=>s.CQ,ZodOptional:()=>s.ak,ZodParsedType:()=>o.$k,ZodPipeline:()=>s.om,ZodPromise:()=>s.Wx,ZodReadonly:()=>s.ur,ZodRecord:()=>s.KX,ZodSchema:()=>s.I6,ZodSet:()=>s.qA,ZodString:()=>s.$T,ZodSymbol:()=>s.tX,ZodTransformer:()=>s.z2,ZodTuple:()=>s._P,ZodType:()=>s.DI,ZodUndefined:()=>s.DY,ZodUnion:()=>s.jp,ZodUnknown:()=>s.Dy,ZodVoid:()=>s.XE,addIssueToContext:()=>a.KD,any:()=>s.Yj,array:()=>s.IX,bigint:()=>s.Kv,boolean:()=>s.O7,coerce:()=>s.oQ,custom:()=>s.PG,date:()=>s.hT,datetimeRegex:()=>s.wU,defaultErrorMap:()=>n.jY,discriminatedUnion:()=>s.VK,effect:()=>s.cE,enum:()=>s.Km,function:()=>s.ZI,getErrorMap:()=>n.Pr,getParsedType:()=>o.FQ,instanceof:()=>s.Pp,intersection:()=>s.jV,isAborted:()=>a.Hc,isAsync:()=>a.S9,isDirty:()=>a.eT,isValid:()=>a.JY,late:()=>s.wt,lazy:()=>s.Vo,literal:()=>s.i0,makeIssue:()=>a.Xm,map:()=>s.UI,nan:()=>s.qn,nativeEnum:()=>s.jb,never:()=>s.Fi,null:()=>s.lB,nullable:()=>s.AG,number:()=>s.Rx,object:()=>s.Ry,objectUtil:()=>o.Mg,oboolean:()=>s.Ts,onumber:()=>s.vs,optional:()=>s.jt,ostring:()=>s.Dk,pipeline:()=>s.EU,preprocess:()=>s.dj,promise:()=>s.MC,quotelessJson:()=>l.Zh,record:()=>s.IM,set:()=>s.t8,setErrorMap:()=>n.DJ,strictObject:()=>s.cf,string:()=>s.Z_,symbol:()=>s.NA,transformer:()=>s.l4,tuple:()=>s.bc,undefined:()=>s.S1,union:()=>s.G0,unknown:()=>s._4,util:()=>o.D5,void:()=>s.Hc});var n=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js"),a=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js"),o=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js"),s=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js"),l=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js");let d=i},"../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js":function(e,t,r){r.d(t,{NL:function(){return n},Zh:function(){return a},jm:function(){return o}});var i=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js");let n=i.D5.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),a=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class o extends Error{get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},i=e=>{for(let n of e.issues)if("invalid_union"===n.code)n.unionErrors.map(i);else if("invalid_return_type"===n.code)i(n.returnTypeError);else if("invalid_arguments"===n.code)i(n.argumentsError);else if(0===n.path.length)r._errors.push(t(n));else{let e=r,i=0;for(;i<n.path.length;){let r=n.path[i];i===n.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(n))):e[r]=e[r]||{_errors:[]},e=e[r],i++}}};return i(this),r}static assert(e){if(!(e instanceof o))throw Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,i.D5.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>e.message,t={},r=[];for(let i of this.issues)if(i.path.length>0){let r=i.path[0];t[r]=t[r]||[],t[r].push(e(i))}else r.push(e(i));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}constructor(e){var t;super(),t=this,this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.issues=[...t.issues,...e]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}}o.create=e=>new o(e)},"../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js":function(e,t,r){r.d(t,{DJ:function(){return a},Pr:function(){return o},jY:function(){return i.Z}});var i=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js");let n=i.Z;function a(e){n=e}function o(){return n}},"../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js":function(e,t,r){r.d(t,{Hc:function(){return p},JY:function(){return m},KD:function(){return s},OK:function(){return c},Q9:function(){return l},RC:function(){return u},S9:function(){return g},UI:function(){return d},Xm:function(){return a},eT:function(){return h},h2:function(){return o}});var i=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js"),n=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js");let a=e=>{let{data:t,path:r,errorMaps:i,issueData:n}=e,a=[...r,...n.path||[]],o={...n,path:a};if(void 0!==n.message)return{...n,path:a,message:n.message};let s="";for(let e of i.filter(e=>!!e).slice().reverse())s=e(o,{data:t,defaultError:s}).message;return{...n,path:a,message:s}},o=[];function s(e,t){let r=(0,i.Pr)(),o=a({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===n.Z?void 0:n.Z].filter(e=>!!e)});e.common.issues.push(o)}class l{dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let i of t){if("aborted"===i.status)return d;"dirty"===i.status&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t){let t=await e.key,i=await e.value;r.push({key:t,value:i})}return l.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let i of t){let{key:t,value:n}=i;if("aborted"===t.status||"aborted"===n.status)return d;"dirty"===t.status&&e.dirty(),"dirty"===n.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==n.value||i.alwaysSet)&&(r[t.value]=n.value)}return{status:e.value,value:r}}constructor(){this.value="valid"}}let d=Object.freeze({status:"aborted"}),u=e=>({status:"dirty",value:e}),c=e=>({status:"valid",value:e}),p=e=>"aborted"===e.status,h=e=>"dirty"===e.status,m=e=>"valid"===e.status,g=e=>"u">typeof Promise&&e instanceof Promise},"../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js":function(e,t,r){var i,n,a;r.d(t,{$k:function(){return o},D5:function(){return i},FQ:function(){return s},Mg:function(){return n}}),(a=i||(i={})).assertEqual=e=>{},a.assertIs=function(e){},a.assertNever=function(e){throw Error()},a.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},a.getValidEnumValues=e=>{let t=a.objectKeys(e).filter(t=>"number"!=typeof e[e[t]]),r={};for(let i of t)r[i]=e[i];return a.objectValues(r)},a.objectValues=e=>a.objectKeys(e).map(function(t){return e[t]}),a.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},a.find=(e,t)=>{for(let r of e)if(t(r))return r},a.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&Number.isFinite(e)&&Math.floor(e)===e,a.joinValues=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" | ";return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},a.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(n||(n={})).mergeShapes=(e,t)=>({...e,...t});let o=i.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),s=e=>{switch(typeof e){case"undefined":return o.undefined;case"string":return o.string;case"number":return Number.isNaN(e)?o.nan:o.number;case"boolean":return o.boolean;case"function":return o.function;case"bigint":return o.bigint;case"symbol":return o.symbol;case"object":if(Array.isArray(e))return o.array;if(null===e)return o.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return o.promise;if("u">typeof Map&&e instanceof Map)return o.map;if("u">typeof Set&&e instanceof Set)return o.set;if("u">typeof Date&&e instanceof Date)return o.date;return o.object;default:return o.unknown}}},"../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js":function(e,t,r){r.d(t,{Z:function(){return a}});var i=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js"),n=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js");let a=(e,t)=>{let r;switch(e.code){case i.NL.invalid_type:r=e.received===n.$k.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case i.NL.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,n.D5.jsonStringifyReplacer)}`;break;case i.NL.unrecognized_keys:r=`Unrecognized key(s) in object: ${n.D5.joinValues(e.keys,", ")}`;break;case i.NL.invalid_union:r="Invalid input";break;case i.NL.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${n.D5.joinValues(e.options)}`;break;case i.NL.invalid_enum_value:r=`Invalid enum value. Expected ${n.D5.joinValues(e.options)}, received '${e.received}'`;break;case i.NL.invalid_arguments:r="Invalid function arguments";break;case i.NL.invalid_return_type:r="Invalid function return type";break;case i.NL.invalid_date:r="Invalid date";break;case i.NL.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:n.D5.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case i.NL.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type||"bigint"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case i.NL.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case i.NL.custom:r="Invalid input";break;case i.NL.invalid_intersection_types:r="Intersection results could not be merged";break;case i.NL.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case i.NL.not_finite:r="Number must be finite";break;default:r=t.defaultError,n.D5.assertNever(e)}return{message:r}}},"../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js":function(e,t,r){let i;r.d(t,{dj:()=>e0,MC:()=>eQ,Wx:()=>ed,_P:()=>J,uE:()=>eh,$s:()=>P,CQ:()=>F,EG:()=>Z,Kv:()=>eI,ak:()=>ec,oQ:()=>e6,pA:()=>s,PG:()=>ex,wU:()=>N,t8:()=>eV,l4:()=>eJ,C4:()=>e7,Iy:()=>q,SG:()=>ea,b_:()=>ei,IX:()=>eZ,Vo:()=>eF,Rx:()=>eS,IM:()=>eK,S1:()=>eM,DI:()=>_,Pp:()=>eb,ZI:()=>eX,f9:()=>Q,ur:()=>ey,Z_:()=>ek,bc:()=>ez,Dy:()=>K,O7:()=>eA,VK:()=>eU,hT:()=>eO,_4:()=>eN,Ry:()=>eB,XE:()=>V,cE:()=>eJ,qA:()=>er,UI:()=>eW,cf:()=>eP,Dk:()=>e3,G0:()=>eD,Ts:()=>e8,wt:()=>eC,$T:()=>$,DY:()=>U,ON:()=>em,O8:()=>z,Xc:()=>eu,IV:()=>j,Km:()=>eY,z2:()=>eu,jV:()=>eH,AG:()=>e2,$n:()=>W,Gd:()=>ev,Hu:()=>eg,Ym:()=>et,cg:()=>e_,ng:()=>ep,om:()=>ef,jp:()=>G,qn:()=>eE,Fi:()=>e$,NA:()=>eL,Hc:()=>ej,V_:()=>_,Zl:()=>el,jt:()=>e1,p5:()=>X,pV:()=>H,tX:()=>D,EU:()=>e4,K7:()=>es,KX:()=>ee,dT:()=>en,pZ:()=>B,I6:()=>_,Yj:()=>eT,i0:()=>eG,jb:()=>eq,lB:()=>eR,vs:()=>e5});var n,a,o,s,l=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js"),d=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js"),u=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js");(n=o||(o={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},n.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;var c=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js"),p=r("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js");class h{get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}constructor(e,t,r,i){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=i}}let m=(e,t)=>{if((0,c.JY)(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new l.jm(e.common.issues);return this._error=t,this._error}}};function g(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:i,description:n}=e;if(t&&(r||i))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:n}:{errorMap:(t,n)=>{let{message:a}=e;return"invalid_enum_value"===t.code?{message:a??n.defaultError}:void 0===n.data?{message:a??i??n.defaultError}:"invalid_type"!==t.code?{message:n.defaultError}:{message:a??r??n.defaultError}},description:n}}class _{get description(){return this._def.description}_getType(e){return(0,p.FQ)(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:(0,p.FQ)(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new c.Q9,ctx:{common:e.parent.common,data:e.data,parsedType:(0,p.FQ)(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if((0,c.S9)(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){return Promise.resolve(this._parse(e))}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){let r={common:{issues:[],async:(null==t?void 0:t.async)??!1,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:(0,p.FQ)(e)},i=this._parseSync({data:e,path:r.path,parent:r});return m(r,i)}"~validate"(e){let t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:(0,p.FQ)(e)};if(!this["~standard"].async)try{let r=this._parseSync({data:e,path:[],parent:t});return(0,c.JY)(r)?{value:r.value}:{issues:t.common.issues}}catch(e){var r,i;(null==e||null==(i=e.message)||null==(r=i.toLowerCase())?void 0:r.includes("encountered"))&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>(0,c.JY)(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:(0,p.FQ)(e)},i=this._parse({data:e,path:r.path,parent:r});return m(r,await ((0,c.S9)(i)?i:Promise.resolve(i)))}refine(e,t){return this._refinement((r,i)=>{let n=e(r),a=()=>i.addIssue({code:l.NL.custom,..."string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(r):t});return"u">typeof Promise&&n instanceof Promise?n.then(e=>!!e||(a(),!1)):!!n||(a(),!1)})}refinement(e,t){return this._refinement((r,i)=>!!e(r)||(i.addIssue("function"==typeof t?t(r,i):t),!1))}_refinement(e){return new eu({schema:this,typeName:s.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ec.create(this,this._def)}nullable(){return ep.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return X.create(this)}promise(){return ed.create(this,this._def)}or(e){return G.create([this,e],this._def)}and(e){return Q.create(this,e,this._def)}transform(e){return new eu({...g(this._def),schema:this,typeName:s.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new eh({...g(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:s.ZodDefault})}brand(){return new ev({typeName:s.ZodBranded,type:this,...g(this._def)})}catch(e){return new em({...g(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:s.ZodCatch})}describe(e){return new this.constructor({...this._def,description:e})}pipe(e){return ef.create(this,e)}readonly(){return ey.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:e=>this["~validate"](e)}}}let v=/^c[^\s-]{8,}$/i,f=/^[0-9a-z]+$/,y=/^[0-9A-HJKMNP-TV-Z]{26}$/i,w=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,x=/^[a-z0-9_-]{21}$/i,C=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,b=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,k=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,S=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,E=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,I=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,A=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,O=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,L=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,M="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",R=RegExp(`^${M}$`);function T(e){let t="[0-5]\\d";e.precision?t=`${t}\\.\\d{${e.precision}}`:null==e.precision&&(t=`${t}(\\.\\d+)?`);let r=e.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`}function N(e){let t=`${M}T${T(e)}`,r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${r.join("|")})`,RegExp(`^${t}$`)}class $ extends _{_parse(e){var t,r,n,a;let o;if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==p.$k.string){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.string,received:t.parsedType}),c.UI}let s=new c.Q9;for(let d of this._def.checks)if("min"===d.kind)e.data.length<d.value&&(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{code:l.NL.too_small,minimum:d.value,type:"string",inclusive:!0,exact:!1,message:d.message}),s.dirty());else if("max"===d.kind)e.data.length>d.value&&(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{code:l.NL.too_big,maximum:d.value,type:"string",inclusive:!0,exact:!1,message:d.message}),s.dirty());else if("length"===d.kind){let t=e.data.length>d.value,r=e.data.length<d.value;(t||r)&&(o=this._getOrReturnCtx(e,o),t?(0,c.KD)(o,{code:l.NL.too_big,maximum:d.value,type:"string",inclusive:!0,exact:!0,message:d.message}):r&&(0,c.KD)(o,{code:l.NL.too_small,minimum:d.value,type:"string",inclusive:!0,exact:!0,message:d.message}),s.dirty())}else if("email"===d.kind)k.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"email",code:l.NL.invalid_string,message:d.message}),s.dirty());else if("emoji"===d.kind)i||(i=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),i.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"emoji",code:l.NL.invalid_string,message:d.message}),s.dirty());else if("uuid"===d.kind)w.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"uuid",code:l.NL.invalid_string,message:d.message}),s.dirty());else if("nanoid"===d.kind)x.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"nanoid",code:l.NL.invalid_string,message:d.message}),s.dirty());else if("cuid"===d.kind)v.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"cuid",code:l.NL.invalid_string,message:d.message}),s.dirty());else if("cuid2"===d.kind)f.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"cuid2",code:l.NL.invalid_string,message:d.message}),s.dirty());else if("ulid"===d.kind)y.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"ulid",code:l.NL.invalid_string,message:d.message}),s.dirty());else if("url"===d.kind)try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"url",code:l.NL.invalid_string,message:d.message}),s.dirty()}else"regex"===d.kind?(d.regex.lastIndex=0,d.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"regex",code:l.NL.invalid_string,message:d.message}),s.dirty())):"trim"===d.kind?e.data=e.data.trim():"includes"===d.kind?e.data.includes(d.value,d.position)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{code:l.NL.invalid_string,validation:{includes:d.value,position:d.position},message:d.message}),s.dirty()):"toLowerCase"===d.kind?e.data=e.data.toLowerCase():"toUpperCase"===d.kind?e.data=e.data.toUpperCase():"startsWith"===d.kind?e.data.startsWith(d.value)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{code:l.NL.invalid_string,validation:{startsWith:d.value},message:d.message}),s.dirty()):"endsWith"===d.kind?e.data.endsWith(d.value)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{code:l.NL.invalid_string,validation:{endsWith:d.value},message:d.message}),s.dirty()):"datetime"===d.kind?N(d).test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{code:l.NL.invalid_string,validation:"datetime",message:d.message}),s.dirty()):"date"===d.kind?R.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{code:l.NL.invalid_string,validation:"date",message:d.message}),s.dirty()):"time"===d.kind?RegExp(`^${T(d)}$`).test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{code:l.NL.invalid_string,validation:"time",message:d.message}),s.dirty()):"duration"===d.kind?b.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"duration",code:l.NL.invalid_string,message:d.message}),s.dirty()):"ip"===d.kind?(t=e.data,!(("v4"===(r=d.version)||!r)&&S.test(t)||("v6"===r||!r)&&I.test(t))&&1&&(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"ip",code:l.NL.invalid_string,message:d.message}),s.dirty())):"jwt"===d.kind?!function(e,t){if(!C.test(e))return!1;try{let[r]=e.split(".");if(!r)return!1;let i=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),n=JSON.parse(atob(i));if("object"!=typeof n||null===n||"typ"in n&&(null==n?void 0:n.typ)!=="JWT"||!n.alg||t&&n.alg!==t)return!1;return!0}catch{return!1}}(e.data,d.alg)&&(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"jwt",code:l.NL.invalid_string,message:d.message}),s.dirty()):"cidr"===d.kind?(n=e.data,!(("v4"===(a=d.version)||!a)&&E.test(n)||("v6"===a||!a)&&A.test(n))&&1&&(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"cidr",code:l.NL.invalid_string,message:d.message}),s.dirty())):"base64"===d.kind?O.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"base64",code:l.NL.invalid_string,message:d.message}),s.dirty()):"base64url"===d.kind?L.test(e.data)||(o=this._getOrReturnCtx(e,o),(0,c.KD)(o,{validation:"base64url",code:l.NL.invalid_string,message:d.message}),s.dirty()):p.D5.assertNever(d);return{status:s.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:l.NL.invalid_string,...o.errToObj(r)})}_addCheck(e){return new $({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...o.errToObj(e)})}url(e){return this._addCheck({kind:"url",...o.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...o.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...o.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...o.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...o.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...o.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...o.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...o.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...o.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...o.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...o.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...o.errToObj(e)})}datetime(e){return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:(null==e?void 0:e.offset)??!1,local:(null==e?void 0:e.local)??!1,...o.errToObj(null==e?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return"string"==typeof e?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,...o.errToObj(null==e?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...o.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...o.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...o.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...o.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...o.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...o.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...o.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...o.errToObj(t)})}nonempty(e){return this.min(1,o.errToObj(e))}trim(){return new $({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new $({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new $({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isDate(){return!!this._def.checks.find(e=>"date"===e.kind)}get isTime(){return!!this._def.checks.find(e=>"time"===e.kind)}get isDuration(){return!!this._def.checks.find(e=>"duration"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isNANOID(){return!!this._def.checks.find(e=>"nanoid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get isCIDR(){return!!this._def.checks.find(e=>"cidr"===e.kind)}get isBase64(){return!!this._def.checks.find(e=>"base64"===e.kind)}get isBase64url(){return!!this._def.checks.find(e=>"base64url"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}$.create=e=>new $({checks:[],typeName:s.ZodString,coerce:(null==e?void 0:e.coerce)??!1,...g(e)});class j extends _{_parse(e){let t;if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==p.$k.number){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.number,received:t.parsedType}),c.UI}let r=new c.Q9;for(let i of this._def.checks)"int"===i.kind?p.D5.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),(0,c.KD)(t,{code:l.NL.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(t=this._getOrReturnCtx(e,t),(0,c.KD)(t,{code:l.NL.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(t=this._getOrReturnCtx(e,t),(0,c.KD)(t,{code:l.NL.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"multipleOf"===i.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,n=r>i?r:i;return Number.parseInt(e.toFixed(n).replace(".",""))%Number.parseInt(t.toFixed(n).replace(".",""))/10**n}(e.data,i.value)&&(t=this._getOrReturnCtx(e,t),(0,c.KD)(t,{code:l.NL.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):"finite"===i.kind?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),(0,c.KD)(t,{code:l.NL.not_finite,message:i.message}),r.dirty()):p.D5.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,o.toString(t))}gt(e,t){return this.setLimit("min",e,!1,o.toString(t))}lte(e,t){return this.setLimit("max",e,!0,o.toString(t))}lt(e,t){return this.setLimit("max",e,!1,o.toString(t))}setLimit(e,t,r,i){return new j({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:o.toString(i)}]})}_addCheck(e){return new j({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:o.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:o.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:o.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:o.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:o.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:o.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:o.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:o.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:o.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&p.D5.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}}j.create=e=>new j({checks:[],typeName:s.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...g(e)});class Z extends _{_parse(e){let t;if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==p.$k.bigint)return this._getInvalidInput(e);let r=new c.Q9;for(let i of this._def.checks)"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(t=this._getOrReturnCtx(e,t),(0,c.KD)(t,{code:l.NL.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(t=this._getOrReturnCtx(e,t),(0,c.KD)(t,{code:l.NL.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"multipleOf"===i.kind?e.data%i.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),(0,c.KD)(t,{code:l.NL.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):p.D5.assertNever(i);return{status:r.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.bigint,received:t.parsedType}),c.UI}gte(e,t){return this.setLimit("min",e,!0,o.toString(t))}gt(e,t){return this.setLimit("min",e,!1,o.toString(t))}lte(e,t){return this.setLimit("max",e,!0,o.toString(t))}lt(e,t){return this.setLimit("max",e,!1,o.toString(t))}setLimit(e,t,r,i){return new Z({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:o.toString(i)}]})}_addCheck(e){return new Z({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:o.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:o.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:o.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:o.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:o.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}}Z.create=e=>new Z({checks:[],typeName:s.ZodBigInt,coerce:(null==e?void 0:e.coerce)??!1,...g(e)});class B extends _{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==p.$k.boolean){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.boolean,received:t.parsedType}),c.UI}return(0,c.OK)(e.data)}}B.create=e=>new B({typeName:s.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...g(e)});class P extends _{_parse(e){let t;if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==p.$k.date){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.date,received:t.parsedType}),c.UI}if(Number.isNaN(e.data.getTime())){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_date}),c.UI}let r=new c.Q9;for(let i of this._def.checks)"min"===i.kind?e.data.getTime()<i.value&&(t=this._getOrReturnCtx(e,t),(0,c.KD)(t,{code:l.NL.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):"max"===i.kind?e.data.getTime()>i.value&&(t=this._getOrReturnCtx(e,t),(0,c.KD)(t,{code:l.NL.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):p.D5.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new P({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:o.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:o.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}P.create=e=>new P({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:s.ZodDate,...g(e)});class D extends _{_parse(e){if(this._getType(e)!==p.$k.symbol){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.symbol,received:t.parsedType}),c.UI}return(0,c.OK)(e.data)}}D.create=e=>new D({typeName:s.ZodSymbol,...g(e)});class U extends _{_parse(e){if(this._getType(e)!==p.$k.undefined){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.undefined,received:t.parsedType}),c.UI}return(0,c.OK)(e.data)}}U.create=e=>new U({typeName:s.ZodUndefined,...g(e)});class H extends _{_parse(e){if(this._getType(e)!==p.$k.null){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.null,received:t.parsedType}),c.UI}return(0,c.OK)(e.data)}}H.create=e=>new H({typeName:s.ZodNull,...g(e)});class z extends _{_parse(e){return(0,c.OK)(e.data)}constructor(){super(...arguments),this._any=!0}}z.create=e=>new z({typeName:s.ZodAny,...g(e)});class K extends _{_parse(e){return(0,c.OK)(e.data)}constructor(){super(...arguments),this._unknown=!0}}K.create=e=>new K({typeName:s.ZodUnknown,...g(e)});class W extends _{_parse(e){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.never,received:t.parsedType}),c.UI}}W.create=e=>new W({typeName:s.ZodNever,...g(e)});class V extends _{_parse(e){if(this._getType(e)!==p.$k.undefined){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.void,received:t.parsedType}),c.UI}return(0,c.OK)(e.data)}}V.create=e=>new V({typeName:s.ZodVoid,...g(e)});class X extends _{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),i=this._def;if(t.parsedType!==p.$k.array)return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.array,received:t.parsedType}),c.UI;if(null!==i.exactLength){let e=t.data.length>i.exactLength.value,n=t.data.length<i.exactLength.value;(e||n)&&((0,c.KD)(t,{code:e?l.NL.too_big:l.NL.too_small,minimum:n?i.exactLength.value:void 0,maximum:e?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(null!==i.minLength&&t.data.length<i.minLength.value&&((0,c.KD)(t,{code:l.NL.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),null!==i.maxLength&&t.data.length>i.maxLength.value&&((0,c.KD)(t,{code:l.NL.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>i.type._parseAsync(new h(t,e,t.path,r)))).then(e=>c.Q9.mergeArray(r,e));let n=[...t.data].map((e,r)=>i.type._parseSync(new h(t,e,t.path,r)));return c.Q9.mergeArray(r,n)}get element(){return this._def.type}min(e,t){return new X({...this._def,minLength:{value:e,message:o.toString(t)}})}max(e,t){return new X({...this._def,maxLength:{value:e,message:o.toString(t)}})}length(e,t){return new X({...this._def,exactLength:{value:e,message:o.toString(t)}})}nonempty(e){return this.min(1,e)}}X.create=(e,t)=>new X({type:e,minLength:null,maxLength:null,exactLength:null,typeName:s.ZodArray,...g(t)});class F extends _{_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=p.D5.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==p.$k.object){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.object,received:t.parsedType}),c.UI}let{status:t,ctx:r}=this._processInputParams(e),{shape:i,keys:n}=this._getCached(),a=[];if(!(this._def.catchall instanceof W&&"strip"===this._def.unknownKeys))for(let e in r.data)n.includes(e)||a.push(e);let o=[];for(let e of n){let t=i[e],n=r.data[e];o.push({key:{status:"valid",value:e},value:t._parse(new h(r,n,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof W){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of a)o.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)a.length>0&&((0,c.KD)(r,{code:l.NL.unrecognized_keys,keys:a}),t.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of a){let i=r.data[t];o.push({key:{status:"valid",value:t},value:e._parse(new h(r,i,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let r=await t.key,i=await t.value;e.push({key:r,value:i,alwaysSet:t.alwaysSet})}return e}).then(e=>c.Q9.mergeObjectSync(t,e)):c.Q9.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(e){return o.errToObj,new F({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var i,n;let a=(null==(i=(n=this._def).errorMap)?void 0:i.call(n,t,r).message)??r.defaultError;return"unrecognized_keys"===t.code?{message:o.errToObj(e).message??a}:{message:a}}}:{}})}strip(){return new F({...this._def,unknownKeys:"strip"})}passthrough(){return new F({...this._def,unknownKeys:"passthrough"})}extend(e){return new F({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new F({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:s.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new F({...this._def,catchall:e})}pick(e){let t={};for(let r of p.D5.objectKeys(e))e[r]&&this.shape[r]&&(t[r]=this.shape[r]);return new F({...this._def,shape:()=>t})}omit(e){let t={};for(let r of p.D5.objectKeys(this.shape))e[r]||(t[r]=this.shape[r]);return new F({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof F){let r={};for(let i in t.shape){let n=t.shape[i];r[i]=ec.create(e(n))}return new F({...t._def,shape:()=>r})}return t instanceof X?new X({...t._def,type:e(t.element)}):t instanceof ec?ec.create(e(t.unwrap())):t instanceof ep?ep.create(e(t.unwrap())):t instanceof J?J.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};for(let r of p.D5.objectKeys(this.shape)){let i=this.shape[r];e&&!e[r]?t[r]=i:t[r]=i.optional()}return new F({...this._def,shape:()=>t})}required(e){let t={};for(let r of p.D5.objectKeys(this.shape))if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof ec;)e=e._def.innerType;t[r]=e}return new F({...this._def,shape:()=>t})}keyof(){return eo(p.D5.objectKeys(this.shape))}constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}}F.create=(e,t)=>new F({shape:()=>e,unknownKeys:"strip",catchall:W.create(),typeName:s.ZodObject,...g(t)}),F.strictCreate=(e,t)=>new F({shape:()=>e,unknownKeys:"strict",catchall:W.create(),typeName:s.ZodObject,...g(t)}),F.lazycreate=(e,t)=>new F({shape:e,unknownKeys:"strip",catchall:W.create(),typeName:s.ZodObject,...g(t)});class G extends _{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new l.jm(e.ctx.common.issues));return(0,c.KD)(t,{code:l.NL.invalid_union,unionErrors:r}),c.UI});{let e,i=[];for(let n of r){let r={...t,common:{...t.common,issues:[]},parent:null},a=n._parseSync({data:t.data,path:t.path,parent:r});if("valid"===a.status)return a;"dirty"!==a.status||e||(e={result:a,ctx:r}),r.common.issues.length&&i.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let n=i.map(e=>new l.jm(e));return(0,c.KD)(t,{code:l.NL.invalid_union,unionErrors:n}),c.UI}}get options(){return this._def.options}}G.create=(e,t)=>new G({options:e,typeName:s.ZodUnion,...g(t)});let Y=e=>{if(e instanceof en)return Y(e.schema);if(e instanceof eu)return Y(e.innerType());if(e instanceof ea)return[e.value];if(e instanceof es)return e.options;if(e instanceof el)return p.D5.objectValues(e.enum);if(e instanceof eh)return Y(e._def.innerType);if(e instanceof U)return[void 0];else if(e instanceof H)return[null];else if(e instanceof ec)return[void 0,...Y(e.unwrap())];else if(e instanceof ep)return[null,...Y(e.unwrap())];else if(e instanceof ev)return Y(e.unwrap());else if(e instanceof ey)return Y(e.unwrap());else if(e instanceof em)return Y(e._def.innerType);else return[]};class q extends _{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==p.$k.object)return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.object,received:t.parsedType}),c.UI;let r=this.discriminator,i=t.data[r],n=this.optionsMap.get(i);return n?t.common.async?n._parseAsync({data:t.data,path:t.path,parent:t}):n._parseSync({data:t.data,path:t.path,parent:t}):((0,c.KD)(t,{code:l.NL.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),c.UI)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let i=new Map;for(let r of t){let t=Y(r.shape[e]);if(!t.length)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let n of t){if(i.has(n))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);i.set(n,r)}}return new q({typeName:s.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:i,...g(r)})}}class Q extends _{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=(e,i)=>{if((0,c.Hc)(e)||(0,c.Hc)(i))return c.UI;let n=function e(t,r){let i=(0,p.FQ)(t),n=(0,p.FQ)(r);if(t===r)return{valid:!0,data:t};if(i===p.$k.object&&n===p.$k.object){let i=p.D5.objectKeys(r),n=p.D5.objectKeys(t).filter(e=>-1!==i.indexOf(e)),a={...t,...r};for(let i of n){let n=e(t[i],r[i]);if(!n.valid)return{valid:!1};a[i]=n.data}return{valid:!0,data:a}}if(i===p.$k.array&&n===p.$k.array){if(t.length!==r.length)return{valid:!1};let i=[];for(let n=0;n<t.length;n++){let a=e(t[n],r[n]);if(!a.valid)return{valid:!1};i.push(a.data)}return{valid:!0,data:i}}return i===p.$k.date&&n===p.$k.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,i.value);return n.valid?(((0,c.eT)(e)||(0,c.eT)(i))&&t.dirty(),{status:t.value,value:n.data}):((0,c.KD)(r,{code:l.NL.invalid_intersection_types}),c.UI)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(e=>{let[t,r]=e;return i(t,r)}):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Q.create=(e,t,r)=>new Q({left:e,right:t,typeName:s.ZodIntersection,...g(r)});class J extends _{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==p.$k.array)return(0,c.KD)(r,{code:l.NL.invalid_type,expected:p.$k.array,received:r.parsedType}),c.UI;if(r.data.length<this._def.items.length)return(0,c.KD)(r,{code:l.NL.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),c.UI;!this._def.rest&&r.data.length>this._def.items.length&&((0,c.KD)(r,{code:l.NL.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let i=[...r.data].map((e,t)=>{let i=this._def.items[t]||this._def.rest;return i?i._parse(new h(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(i).then(e=>c.Q9.mergeArray(t,e)):c.Q9.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new J({...this._def,rest:e})}}J.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new J({items:e,typeName:s.ZodTuple,rest:null,...g(t)})};class ee extends _{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==p.$k.object)return(0,c.KD)(r,{code:l.NL.invalid_type,expected:p.$k.object,received:r.parsedType}),c.UI;let i=[],n=this._def.keyType,a=this._def.valueType;for(let e in r.data)i.push({key:n._parse(new h(r,e,r.path,e)),value:a._parse(new h(r,r.data[e],r.path,e)),alwaysSet:e in r.data});return r.common.async?c.Q9.mergeObjectAsync(t,i):c.Q9.mergeObjectSync(t,i)}get element(){return this._def.valueType}static create(e,t,r){return new ee(t instanceof _?{keyType:e,valueType:t,typeName:s.ZodRecord,...g(r)}:{keyType:$.create(),valueType:e,typeName:s.ZodRecord,...g(t)})}}class et extends _{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==p.$k.map)return(0,c.KD)(r,{code:l.NL.invalid_type,expected:p.$k.map,received:r.parsedType}),c.UI;let i=this._def.keyType,n=this._def.valueType,a=[...r.data.entries()].map((e,t)=>{let[a,o]=e;return{key:i._parse(new h(r,a,r.path,[t,"key"])),value:n._parse(new h(r,o,r.path,[t,"value"]))}});if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of a){let i=await r.key,n=await r.value;if("aborted"===i.status||"aborted"===n.status)return c.UI;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of a){let i=r.key,n=r.value;if("aborted"===i.status||"aborted"===n.status)return c.UI;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}}}}et.create=(e,t,r)=>new et({valueType:t,keyType:e,typeName:s.ZodMap,...g(r)});class er extends _{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==p.$k.set)return(0,c.KD)(r,{code:l.NL.invalid_type,expected:p.$k.set,received:r.parsedType}),c.UI;let i=this._def;null!==i.minSize&&r.data.size<i.minSize.value&&((0,c.KD)(r,{code:l.NL.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),null!==i.maxSize&&r.data.size>i.maxSize.value&&((0,c.KD)(r,{code:l.NL.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());let n=this._def.valueType;function a(e){let r=new Set;for(let i of e){if("aborted"===i.status)return c.UI;"dirty"===i.status&&t.dirty(),r.add(i.value)}return{status:t.value,value:r}}let o=[...r.data.values()].map((e,t)=>n._parse(new h(r,e,r.path,t)));return r.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(e,t){return new er({...this._def,minSize:{value:e,message:o.toString(t)}})}max(e,t){return new er({...this._def,maxSize:{value:e,message:o.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}er.create=(e,t)=>new er({valueType:e,minSize:null,maxSize:null,typeName:s.ZodSet,...g(t)});class ei extends _{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==p.$k.function)return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.function,received:t.parsedType}),c.UI;function r(e,r){return(0,c.Xm)({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,(0,d.Pr)(),u.Z].filter(e=>!!e),issueData:{code:l.NL.invalid_arguments,argumentsError:r}})}function i(e,r){return(0,c.Xm)({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,(0,d.Pr)(),u.Z].filter(e=>!!e),issueData:{code:l.NL.invalid_return_type,returnTypeError:r}})}let n={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof ed){let e=this;return(0,c.OK)(async function(){for(var t=arguments.length,o=Array(t),s=0;s<t;s++)o[s]=arguments[s];let d=new l.jm([]),u=await e._def.args.parseAsync(o,n).catch(e=>{throw d.addIssue(r(o,e)),d}),c=await Reflect.apply(a,this,u);return await e._def.returns._def.type.parseAsync(c,n).catch(e=>{throw d.addIssue(i(c,e)),d})})}{let e=this;return(0,c.OK)(function(){for(var t=arguments.length,o=Array(t),s=0;s<t;s++)o[s]=arguments[s];let d=e._def.args.safeParse(o,n);if(!d.success)throw new l.jm([r(o,d.error)]);let u=Reflect.apply(a,this,d.data),c=e._def.returns.safeParse(u,n);if(!c.success)throw new l.jm([i(u,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return new ei({...this._def,args:J.create(t).rest(K.create())})}returns(e){return new ei({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new ei({args:e||J.create([]).rest(K.create()),returns:t||K.create(),typeName:s.ZodFunction,...g(r)})}constructor(){super(...arguments),this.validate=this.implement}}class en extends _{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}en.create=(e,t)=>new en({getter:e,typeName:s.ZodLazy,...g(t)});class ea extends _{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{received:t.data,code:l.NL.invalid_literal,expected:this._def.value}),c.UI}return{status:"valid",value:e.data}}get value(){return this._def.value}}function eo(e,t){return new es({values:e,typeName:s.ZodEnum,...g(t)})}ea.create=(e,t)=>new ea({value:e,typeName:s.ZodLiteral,...g(t)});class es extends _{_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return(0,c.KD)(t,{expected:p.D5.joinValues(r),received:t.parsedType,code:l.NL.invalid_type}),c.UI}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return(0,c.KD)(t,{received:t.data,code:l.NL.invalid_enum_value,options:r}),c.UI}return(0,c.OK)(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._def;return es.create(e,{...this._def,...t})}exclude(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._def;return es.create(this.options.filter(t=>!e.includes(t)),{...this._def,...t})}}es.create=eo;class el extends _{_parse(e){let t=p.D5.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==p.$k.string&&r.parsedType!==p.$k.number){let e=p.D5.objectValues(t);return(0,c.KD)(r,{expected:p.D5.joinValues(e),received:r.parsedType,code:l.NL.invalid_type}),c.UI}if(this._cache||(this._cache=new Set(p.D5.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){let e=p.D5.objectValues(t);return(0,c.KD)(r,{received:r.data,code:l.NL.invalid_enum_value,options:e}),c.UI}return(0,c.OK)(e.data)}get enum(){return this._def.values}}el.create=(e,t)=>new el({values:e,typeName:s.ZodNativeEnum,...g(t)});class ed extends _{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==p.$k.promise&&!1===t.common.async)return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.promise,received:t.parsedType}),c.UI;let r=t.parsedType===p.$k.promise?t.data:Promise.resolve(t.data);return(0,c.OK)(r.then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}ed.create=(e,t)=>new ed({type:e,typeName:s.ZodPromise,...g(t)});class eu extends _{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===s.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=this._def.effect||null,n={addIssue:e=>{(0,c.KD)(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(n.addIssue=n.addIssue.bind(n),"preprocess"===i.type){let e=i.transform(r.data,n);if(r.common.async)return Promise.resolve(e).then(async e=>{if("aborted"===t.value)return c.UI;let i=await this._def.schema._parseAsync({data:e,path:r.path,parent:r});return"aborted"===i.status?c.UI:"dirty"===i.status||"dirty"===t.value?(0,c.RC)(i.value):i});{if("aborted"===t.value)return c.UI;let i=this._def.schema._parseSync({data:e,path:r.path,parent:r});return"aborted"===i.status?c.UI:"dirty"===i.status||"dirty"===t.value?(0,c.RC)(i.value):i}}if("refinement"===i.type){let e=e=>{let t=i.refinement(e,n);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?c.UI:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===i.status?c.UI:("dirty"===i.status&&t.dirty(),e(i.value),{status:t.value,value:i.value})}}if("transform"===i.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>(0,c.JY)(e)?Promise.resolve(i.transform(e.value,n)).then(e=>({status:t.value,value:e})):c.UI);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!(0,c.JY)(e))return c.UI;let a=i.transform(e.value,n);if(a instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}}p.D5.assertNever(i)}}eu.create=(e,t,r)=>new eu({schema:e,typeName:s.ZodEffects,effect:t,...g(r)}),eu.createWithPreprocess=(e,t,r)=>new eu({schema:t,effect:{type:"preprocess",transform:e},typeName:s.ZodEffects,...g(r)});class ec extends _{_parse(e){return this._getType(e)===p.$k.undefined?(0,c.OK)(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ec.create=(e,t)=>new ec({innerType:e,typeName:s.ZodOptional,...g(t)});class ep extends _{_parse(e){return this._getType(e)===p.$k.null?(0,c.OK)(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ep.create=(e,t)=>new ep({innerType:e,typeName:s.ZodNullable,...g(t)});class eh extends _{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===p.$k.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}eh.create=(e,t)=>new eh({innerType:e,typeName:s.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...g(t)});class em extends _{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return(0,c.S9)(i)?i.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new l.jm(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===i.status?i.value:this._def.catchValue({get error(){return new l.jm(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}em.create=(e,t)=>new em({innerType:e,typeName:s.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...g(t)});class eg extends _{_parse(e){if(this._getType(e)!==p.$k.nan){let t=this._getOrReturnCtx(e);return(0,c.KD)(t,{code:l.NL.invalid_type,expected:p.$k.nan,received:t.parsedType}),c.UI}return{status:"valid",value:e.data}}}eg.create=e=>new eg({typeName:s.ZodNaN,...g(e)});let e_=Symbol("zod_brand");class ev extends _{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class ef extends _{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?c.UI:"dirty"!==e.status?this._def.out._parseAsync({data:e.value,path:r.path,parent:r}):(t.dirty(),(0,c.RC)(e.value))})();{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?c.UI:"dirty"!==e.status?this._def.out._parseSync({data:e.value,path:r.path,parent:r}):(t.dirty(),{status:"dirty",value:e.value})}}static create(e,t){return new ef({in:e,out:t,typeName:s.ZodPipeline})}}class ey extends _{_parse(e){let t=this._def.innerType._parse(e),r=e=>((0,c.JY)(e)&&(e.value=Object.freeze(e.value)),e);return(0,c.S9)(t)?t.then(e=>r(e)):r(t)}unwrap(){return this._def.innerType}}function ew(e,t){let r="function"==typeof e?e(t):"string"==typeof e?{message:e}:e;return"string"==typeof r?{message:r}:r}function ex(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;return e?z.create().superRefine((i,n)=>{let a=e(i);if(a instanceof Promise)return a.then(e=>{if(!e){let e=ew(t,i),a=e.fatal??r??!0;n.addIssue({code:"custom",...e,fatal:a})}});if(!a){let e=ew(t,i),a=e.fatal??r??!0;n.addIssue({code:"custom",...e,fatal:a})}}):z.create()}ey.create=(e,t)=>new ey({innerType:e,typeName:s.ZodReadonly,...g(t)});let eC={object:F.lazycreate};(a=s||(s={})).ZodString="ZodString",a.ZodNumber="ZodNumber",a.ZodNaN="ZodNaN",a.ZodBigInt="ZodBigInt",a.ZodBoolean="ZodBoolean",a.ZodDate="ZodDate",a.ZodSymbol="ZodSymbol",a.ZodUndefined="ZodUndefined",a.ZodNull="ZodNull",a.ZodAny="ZodAny",a.ZodUnknown="ZodUnknown",a.ZodNever="ZodNever",a.ZodVoid="ZodVoid",a.ZodArray="ZodArray",a.ZodObject="ZodObject",a.ZodUnion="ZodUnion",a.ZodDiscriminatedUnion="ZodDiscriminatedUnion",a.ZodIntersection="ZodIntersection",a.ZodTuple="ZodTuple",a.ZodRecord="ZodRecord",a.ZodMap="ZodMap",a.ZodSet="ZodSet",a.ZodFunction="ZodFunction",a.ZodLazy="ZodLazy",a.ZodLiteral="ZodLiteral",a.ZodEnum="ZodEnum",a.ZodEffects="ZodEffects",a.ZodNativeEnum="ZodNativeEnum",a.ZodOptional="ZodOptional",a.ZodNullable="ZodNullable",a.ZodDefault="ZodDefault",a.ZodCatch="ZodCatch",a.ZodPromise="ZodPromise",a.ZodBranded="ZodBranded",a.ZodPipeline="ZodPipeline",a.ZodReadonly="ZodReadonly";let eb=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{message:`Input not instance of ${e.name}`};return ex(t=>t instanceof e,t)},ek=$.create,eS=j.create,eE=eg.create,eI=Z.create,eA=B.create,eO=P.create,eL=D.create,eM=U.create,eR=H.create,eT=z.create,eN=K.create,e$=W.create,ej=V.create,eZ=X.create,eB=F.create,eP=F.strictCreate,eD=G.create,eU=q.create,eH=Q.create,ez=J.create,eK=ee.create,eW=et.create,eV=er.create,eX=ei.create,eF=en.create,eG=ea.create,eY=es.create,eq=el.create,eQ=ed.create,eJ=eu.create,e1=ec.create,e2=ep.create,e0=eu.createWithPreprocess,e4=ef.create,e3=()=>ek().optional(),e5=()=>eS().optional(),e8=()=>eA().optional(),e6={string:e=>$.create({...e,coerce:!0}),number:e=>j.create({...e,coerce:!0}),boolean:e=>B.create({...e,coerce:!0}),bigint:e=>Z.create({...e,coerce:!0}),date:e=>P.create({...e,coerce:!0})},e7=c.UI}}),eg={};function e_(e){var t=eg[e];if(void 0!==t)return t.exports;var r=eg[e]={exports:{}};return em[e](r,r.exports,e_),r.exports}e_.d=function(e,t){for(var r in t)e_.o(t,r)&&!e_.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},e_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e_.r=function(e){"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},new Uint8Array(16);let ev=[];for(let e=0;e<256;++e)ev.push((e+256).toString(16).slice(1));let ef="8.55.2",ey=globalThis;!function(){let{performance:e}=ey;if(!e||!e.now)return;let t=Date.now()-e.now(),r=void 0==e.timeOrigin?t:e.timeOrigin}(),(()=>{let{performance:e}=ey;if(!e||!e.now)return;let t=e.now(),r=Date.now(),i=e.timeOrigin?Math.abs(e.timeOrigin+t-r):36e5,n=e.timing&&e.timing.navigationStart,a="number"==typeof n?Math.abs(n+t-r):36e5;if(i<36e5||a<36e5)return i<=a&&e.timeOrigin})(),Object.prototype.toString;let ew="u"<typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__,ex=["debug","info","warn","error","log","assert","trace"],eC={};o="logger",s=function(){let e=!1,t={enable:()=>{e=!0},disable:()=>{e=!1},isEnabled:()=>e};return ew?ex.forEach(r=>{t[r]=function(){for(var t=arguments.length,i=Array(t),n=0;n<t;n++)i[n]=arguments[n];e&&function(e){if(!("console"in ey))return e();let t=ey.console,r={},i=Object.keys(eC);i.forEach(e=>{let i=eC[e];r[e]=t[e],t[e]=i});try{return e()}finally{i.forEach(e=>{t[e]=r[e]})}}(()=>{ey.console[r](`Sentry Logger [${r}]:`,...i)})}}):ex.forEach(e=>{t[e]=()=>void 0}),t},(a=(n=(i=ey).__SENTRY__=i.__SENTRY__||{})[ef]=n[ef]||{})[o]||(a[o]=s());let eb=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return e.reduce((e,t,i)=>`${e}${t}${i in r?String(r[i]):""}`,"")};e_("../token-storage/dist/index.js");var ek=e_("@canvas-horizon/utils"),eS=e_("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js"),eE=e_("../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js");let eI={LOGIN:"login/oauth2/token",LOGOUT:"logout",MODULES:"api/v1/courses/:courseId/modules",MODULE:"api/v1/courses/:courseId/modules/:moduleId",ITEM:"api/v1/courses/:courseId/modules/:moduleId/items/:moduleItemId",ITEMS:"api/v1/courses/:courseId/modules/:moduleId/items",PAGE:"api/v1/courses/:courseId/pages/:pageId",PAGES:"api/v1/courses/:courseId/pages",ASSIGNMENT:"api/v1/courses/:courseId/assignments/:assignmentId",USER:"api/v1/users/:userId",USER_PROFILE:"api/v1/users/:userId/profile",COURSE:"api/v1/courses/:courseId",BRAND_CONFIG:"api/v1/brand_variables",USER_SELF:"api/v1/users/self",FILE:"api/v1/files/:fileId",USER_FILES_PREFLIGHT:"api/v1/users/self/files",SWITCH_EXPERIENCE:"api/v1/career/switch_experience",SWITCH_ROLE:"api/v1/career/switch_role",EXPERIENCE_SUMMARY:"api/v1/career/experience_summary",COURSE_FILES:"api/v1/courses/:courseId/files",COURSE_FILE:"api/v1/courses/:courseId/files/:fileId",COURSE_FOLDERS:"api/v1/courses/:courseId/folders",COURSE_FOLDER:"api/v1/courses/:courseId/folders/:folderId",FOLDER_FILES:"api/v1/folders/:folderId/files",ACCOUNT_FOLDERS:"api/v1/accounts/:accountId/folders",ACCOUNT_TABS:"api/v1/accounts/:accountId/tabs",USER_TABS:"api/v1/users/:userId/tabs",COURSE_TABS:"api/v1/courses/:courseId/tabs",COURSE_ACCOUNTS:"api/v1/course_accounts",USER_ACCOUNTS:"api/v1/users/:userId/accounts",ACCOUNTS:"api/v1/accounts",HORIZON_ACCOUNTS:"api/v1/horizon_accounts",ACCOUNT_DETAIL:"api/v1/accounts/:accountId",USER_BY_UUID:"api/v1/users/uuid",USER_AVATARS:"api/v1/users/self/avatars",USER_TOKENS:"api/v1/users/:userId/user_generated_tokens",USER_TOKEN:"api/v1/users/:userId/tokens/:tokenId",CREATE_USER_TOKEN:"api/v1/users/:userId/tokens",LTI_LAUNCH_DEFINITIONS:"api/v1/accounts/:accountId/lti_apps/launch_definitions",CATALOG_CONFIG:"api/v1/catalog/config",HELP_LINKS:"help_links",NAVIGATION_ITEMS:"navigation/items",USER_CONTEXT:"user/context",ERROR_REPORTS:"api/v1/error_reports"};eI.COURSE_FILE;let eA="learningObjects",eO=(e,t)=>[e,...t],eL={BRAND_CONFIG:{all:eO("common",["brandConfig"])},CURRENT_USER:{all:eO("common",["currentUser"])},RCS:{all:eO("common",["rcs"]),byCourseId:e=>[...eL.RCS.all,e]},CONVERSATION:{all:eO("common",["conversation"]),byProperties:e=>[...eL.CONVERSATION.all,e],byConversationId:e=>[...eL.CONVERSATION.all,e],byPage:e=>[...eL.CONVERSATION.byProperties(e),"page"],attachmentsByConversationId:e=>[...eL.CONVERSATION.all,"attachments",e]},EXPERIENCE_SUMMARY:{all:eO("common",["experienceSummary"]),byUserId:e=>[...eL.EXPERIENCE_SUMMARY.all,e]},ACCOUNT:{all:eO("common",["account"]),byAccountId:e=>[...eL.ACCOUNT.all,e]},ACCOUNT_TABS:{all:eO("common",["accountTabs"]),byAccountId:e=>[...eL.ACCOUNT_TABS.all,e]},USER_TABS:{all:eO("common",["userTabs"]),byUserId:e=>[...eL.USER_TABS.all,e]},COURSE_TABS:{all:eO("common",["courseTabs"]),byCourseId:e=>[...eL.COURSE_TABS.all,e]},COURSE_ACCOUNTS:{all:eO("common",["courseAccounts"])},ACCOUNT_SETTINGS:{all:eO("common",["accountSettings"]),byUserId:e=>[...eL.ACCOUNT_SETTINGS.all,"profile",e],notificationsByUserId:e=>[...eL.ACCOUNT_SETTINGS.all,"notifications",e],accountsByUserId:e=>[...eL.ACCOUNT_SETTINGS.all,"accounts",e]},ACCOUNT_NOTIFICATIONS:{all:eO("common",["accountNotifications"]),byParams:e=>[...eL.ACCOUNT_NOTIFICATIONS.all,{include_past:e.include_past??!1,show_is_closed:e.show_is_closed??!1}]},ACCOUNT_LIST:{all:eO("learning_provider",["accountList"]),withCurrent:e=>[...eL.ACCOUNT_LIST.all,e?"with_current":"standard",e],byPageInfinite:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return[...eL.ACCOUNT_LIST.withCurrent(e),"infinite",t]},initialBatch:(e,t)=>[...eL.ACCOUNT_LIST.all,"initial",e,t||"none"],fullList:()=>[...eL.ACCOUNT_LIST.all,"full"]},HORIZON_ACCOUNT_LIST:{all:eO("learning_provider",["horizonAccountList"]),withCurrent:e=>[...eL.HORIZON_ACCOUNT_LIST.all,e?"with_current":"standard",e],byPageInfinite:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return[...eL.HORIZON_ACCOUNT_LIST.withCurrent(e),"infinite",t]},initialBatch:(e,t)=>[...eL.HORIZON_ACCOUNT_LIST.all,"initial",e,t||"none"],fullList:()=>[...eL.HORIZON_ACCOUNT_LIST.all,"full"]},ACCOUNT_DETAIL:{all:eO("learning_provider",["accountDetail"]),byId:e=>[...eL.ACCOUNT_DETAIL.all,e]},USER_PROFILE:{all:eO("common",["userProfile"]),byUserId:e=>[...eL.USER_PROFILE.all,e]},USER:{all:eO("common",["user"]),byId:(e,t)=>{let r=[...eL.USER.all,{id:e}];return t&&r.push(t),r}},ACCESS_TOKENS:{all:eO("common",["accessTokens"]),byUserId:e=>[...eL.ACCESS_TOKENS.all,e],byPage:(e,t)=>[...eL.ACCESS_TOKENS.all,e,...t?[t]:[]]},ACCESS_TOKEN:{all:eO("common",["accessToken"]),byId:(e,t)=>[...eL.ACCESS_TOKEN.all,e,t]},LTI_LAUNCH_DEFINITIONS:{all:eO("common",["ltiLaunchDefinitions"]),byAccountId:(e,t)=>[...eL.LTI_LAUNCH_DEFINITIONS.all,e,t]},CATALOG_URL:{all:eO("common",["catalogUrl"])},HELP_LINKS:{all:eO("common",["helpLinks"])},NAVIGATION_ITEMS:{all:eO("common",["navigationItems"]),byConfig:e=>[...eL.NAVIGATION_ITEMS.all,e.experienceType,e.accountId||e.userId||"unknown",e.basePath||"default",e.features?JSON.stringify(e.features):null]},USER_CONTEXT:{all:eO("common",["userContext"]),byAccountId:e=>[...eL.USER_CONTEXT.all,e||"self"]},DASHBOARD_INSIGHTS:{all:eO("common",["insights"]),encourageLearners:()=>[...eL.DASHBOARD_INSIGHTS.all,"encourageLearners"],remindLearners:()=>[...eL.DASHBOARD_INSIGHTS.all,"remindLearners"],praiseLearners:()=>[...eL.DASHBOARD_INSIGHTS.all,"praiseLearners"],dismiss:()=>[...eL.DASHBOARD_INSIGHTS.all,"dismiss"],markInsightAsRead:()=>[...eL.DASHBOARD_INSIGHTS.all,"markInsightAsRead"],insightByScope:(e,t)=>[...eL.DASHBOARD_INSIGHTS.all,"insights_feed_scoped",e,t],actionsByAccount:e=>[...eL.DASHBOARD_INSIGHTS.all,"actions",e],rephraseBody:["rephraseBody"],rephraseBodyByValueAndType:(e,t)=>[...eL.DASHBOARD_INSIGHTS.rephraseBody,e,t],rephraseSubject:["rephraseSubject"],rephraseSubjectByValueAndType:(e,t)=>[...eL.DASHBOARD_INSIGHTS.rephraseSubject,e,t]},AI_MESSAGE_TEMPLATES:{all:eO("common",["aiMessageTemplates"]),byActionId:e=>[...eL.AI_MESSAGE_TEMPLATES.all,e]},DASHBOARD_BUILDER:{all:eO("common",["dashboardBuilder"]),content:(e,t)=>[...eL.DASHBOARD_BUILDER.all,"content",e,t]},DASHBOARD_WIDGETS:{all:eO("common",["widgets"]),byCurrentUser:()=>[...eL.DASHBOARD_WIDGETS.all,"current-user"],groupsByCurrentUser:()=>[...eL.DASHBOARD_WIDGETS.all,"widget-groups"],groupUserDataByUser:e=>[...eL.DASHBOARD_WIDGETS.groupsByCurrentUser(),"widget-groups-user-data",e],groupById:e=>[...eL.DASHBOARD_WIDGETS.groupsByCurrentUser(),e],byType:e=>[...eL.DASHBOARD_WIDGETS.all,e],byWidgetType:e=>[...eL.DASHBOARD_WIDGETS.all,"widgetData",e],byWidgetTypeAndTimeSpan:(e,t,r,i,n)=>[...eL.DASHBOARD_WIDGETS.byWidgetType(e),t,JSON.stringify(r),JSON.stringify(i),n],actionsByWidgetId:e=>[...eL.DASHBOARD_WIDGETS.all,"actions",e]},COURSES:{all:eO("common",["courses"]),getAccountCourses:(e,t)=>[...eL.COURSES.all,"getAccountCourses",e,t],byId:e=>[...eL.COURSES.all,e],bySearchCriteria:e=>[...eL.COURSES.all,e],bySimpleFilter:(e,t,r,i,n)=>[...eL.COURSES.all,"simpleFilter",e,t,r,i,n],byMultiCourseDetails:e=>[...eL.COURSES.all,"multiCourseDetails",e]},USERS:{all:eO("common",["users"]),subordinates:(e,t,r,i)=>[...eL.USERS.all,"subordinates",t,r,e?"includeIndirect":"directOnly",i],byId:e=>[...eL.USERS.all,e],byUuid:e=>[...eL.USERS.all,e]},PEOPLE:{all:eO("common",["people"]),getCanvasUsers:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"initial",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return[...eL.PEOPLE.all,"getUsers",e,r,t||"initial",i]},getJourneyUsers:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return[...eL.PEOPLE.all,"getJourneyUsers",e,t,r]},getPeopleWithMetadata:function(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return[...eL.PEOPLE.all,"getPeopleWithMetadata",e,t,r,i,n.map(e=>`${e.key}:${e.value}`)]},getPeopleWithMetadataByUuid:(e,t)=>[...eL.PEOPLE.all,"getPeopleWithMetadataByUuid",e,t],distinctMetadata:(e,t)=>[...eL.PEOPLE.all,"distinctMetadata",e,t],orgChartByAccountId:e=>[...eL.PEOPLE.all,"orgChart",e]},FILES:{all:eO("common",["files"]),byCourseId:e=>[...eL.FILES.all,e],byFolderId:e=>[...eL.FILES.all,"folder",e]},FOLDERS:{all:eO("common",["folders"]),byCourseId:e=>[...eL.FOLDERS.all,e],byId:e=>[...eL.FOLDERS.all,e]}},eM={LEARNING_OBJECTS:eO("learner",[eA]),ANNOUNCEMENTS:{all:eO("learner",["announcements"]),byPage:()=>[...eM.ANNOUNCEMENTS.all,"page"]},ASSIGNMENT:{all:eO("learner",[eA,"assignment"]),byId:e=>[...eM.ASSIGNMENT.all,{id:e}],item:e=>[...eM.ASSIGNMENT.byId(e.assignmentId),"item",{userId:e.userId,courseId:e.courseId}]},ASSIGNMENT_REST:{all:eO("learner",[eA,"assignmentRest"]),byProps:e=>[...eM.ASSIGNMENT.all,e]},AI_RESPONSE:{all:eO("learner",["ai_response"]),chat:e=>[...eM.AI_RESPONSE.all,e],response:e=>[...eM.AI_RESPONSE.all,e],quiz:e=>[...eM.AI_RESPONSE.all,e],summary:e=>[...eM.AI_RESPONSE.all,e]},COURSE:{all:eO("learner",["course"]),names:()=>[...eM.COURSE.all,"names"],name:e=>[...eM.COURSE.names(),{courseId:e}],progresses:()=>[...eM.COURSE.all,"progresses"],progress:(e,t)=>[...eM.COURSE.progresses(),{courseId:e,userId:t}],byUser:e=>[...eM.COURSE.all,{userId:e}],withModules:()=>[...eM.COURSE.all,"withModules"],byUserWithModules:e=>[...eM.COURSE.withModules(),{userId:e}],overviews:()=>[...eM.COURSE.all,"overviews"],overview:e=>[...eM.COURSE.overviews(),{courseId:e}],scores:(e,t)=>[...eM.COURSE.all,{enrollmentId:e,userId:t},"scores"],settings:()=>[...eM.COURSE.all,"settings"],setting:e=>[...eM.COURSE.settings(),{courseId:e}],byIds:e=>[...eM.COURSE.all,{courseIds:e.sort().join(",")}]},PROGRAMS:{all:eO("learner",["programs"]),selfRecalculation:()=>[...eM.PROGRAMS.all,"selfRecalculation"],byId:e=>[...eM.PROGRAMS.all,{id:e}]},FILE_CONTENT:{all:eO("learner",[eA,"fileContent"]),byProperties:e=>[...eM.FILE_CONTENT.all,e]},MODULES:{all:eO("learner",[eA,"module"]),byId:e=>[...eM.MODULES.all,e],byUser:e=>[...eM.MODULES.all,e],itemsSequence:e=>[...eM.MODULES.all,"item_sequence",e],items:e=>[...eM.MODULES.all,"items",e],item:e=>[...eM.MODULES.items({courseId:e.courseId,moduleId:e.moduleId,isEnabled:e.isEnabled}),{itemId:e.itemId}]},NOTIFICATION:{all:eO("learner",["notification"]),byPage:e=>[...eM.NOTIFICATION.all,{page:e}]},PAGE:{all:eO("learner",[eA,"page"]),details:e=>[...eM.PAGE.all,"details",e],content:e=>[...eM.PAGE.all,"content",e]},SESSIONLESS_LAUNCH_URL:{all:eO("learner",[eA,"sessionlessLaunchUrl"]),byProperties:e=>[...eM.SESSIONLESS_LAUNCH_URL.all,e]},SUBMISSION:{all:eO("learner",[eA,"submission"]),byId:e=>[...eM.SUBMISSION.all,{id:e}],commentsBySubmissionId:e=>[...eM.SUBMISSION.byId(e),"comments"],commentsByParams:e=>[...eM.SUBMISSION.commentsBySubmissionId(e.submissionId),{pageParams:e.pageParams,direction:e.direction,courseId:e.courseId}]},ADDRESS_BOOK_RECIPIENTS:{all:eO("learner",["addressBookRecipients"]),byProperties:e=>[...eM.ADDRESS_BOOK_RECIPIENTS.all,e]},SKILLSPACE:{all:eO("learner",["skills"])},SKILL_FEED:{all:()=>[...eM.SKILLSPACE.all,"skillFeed"]},SKILL:{all:e=>{let t=[...eM.SKILLSPACE.all,"skill"];return void 0!==e?[...t,{completedOnly:e}]:t},search:e=>[...eM.SKILL.all(),"search",e]},RECOMMENDED_COURSES:{all:()=>[...eM.SKILLSPACE.all,"recommended_courses"],withParameters:(e,t)=>{let r=[...eM.RECOMMENDED_COURSES.all()];return e&&r.push(String(e)),(null==t?void 0:t.length)&&r.push(t.sort().join(",")),r}},EXPERIENCES:{all:()=>[...eM.SKILLSPACE.all,"experiences"]},NOTEBOOK:{all:eO("learner",["notebook"]),byProps:e=>[...eM.NOTEBOOK.all,e]},IS_QUIZ_COMPLETED:{all:eO("learner",["isQuizCompleted"]),byId:e=>[...eM.IS_QUIZ_COMPLETED.all,e]},NAVIGATION:{all:eO("learner",["navigation"]),byUserId:e=>[...eM.NAVIGATION.all,e],byCourseId:e=>[...eM.NAVIGATION.all,e],settings:()=>[...eM.NAVIGATION.all,"settings"]},EXPERIENCE_SUMMARY:{all:()=>[...eM.SKILLSPACE.all,"experience_summary"],byUserId:e=>[...eM.EXPERIENCE_SUMMARY.all(),e]},LEARNER_DASHBOARD:{all:eO("learner",["learnerDashboard"])},LEARNING_LIBRARY:{all:eO("learner",["learningLibrary"]),enrolledCollections:e=>[...eM.LEARNING_LIBRARY.all,"enrolledCollections",e],collection:e=>[...eM.LEARNING_LIBRARY.all,"collection",e],collectionItems:e=>[...eM.LEARNING_LIBRARY.all,"collectionItems",e],collectionItem:e=>[...eM.LEARNING_LIBRARY.all,"collectionItem",e],collectionItemByCourseId:e=>[...eM.LEARNING_LIBRARY.all,"collectionItemByCourseId",e],learningRecommendations:()=>[...eM.LEARNING_LIBRARY.all,"learningRecommendations"],learnItems:e=>[...eM.LEARNING_LIBRARY.all,"learnItems",e]}},eR={ACCOUNT:{all:eO("learning_provider",["account"]),byAccountId:e=>[...eR.ACCOUNT.all,e]},ACCOUNTS:{all:eO("learning_provider",["accounts"]),subAccountsByAccountId:e=>[...eR.ACCOUNTS.all,"subAccounts",e]},ACCOUNT_TABS:{all:eO("learning_provider",["accountTabs"]),byAccountId:e=>[...eR.ACCOUNT_TABS.all,e]},ACCOUNT_PERMISSIONS:{all:eO("learning_provider",["accountPermissions"]),byAccountId:e=>[...eR.ACCOUNT_PERMISSIONS.all,e]},COURSE_PERMISSIONS:{all:eO("learning_provider",["coursePermissions"]),byCourseId:e=>[...eR.COURSE_PERMISSIONS.all,e]},LEARNER_DASHBOARD_LAYOUTS:{all:eO("learning_provider",["learnerDashboardLayouts"]),byAccountId:e=>[...eR.LEARNER_DASHBOARD_LAYOUTS.all,e],byLayoutId:(e,t)=>[...eR.LEARNER_DASHBOARD_LAYOUTS.all,e,t]},LEARNER_DASHBOARD_ACTIVATION:{all:eO("learning_provider",["learnerDashboardActivation"]),byAccountId:e=>[...eR.LEARNER_DASHBOARD_ACTIVATION.all,e]},ASSET_LINKS:{all:eO("learning_provider",["assetLinks"]),list:e=>[...eR.ASSET_LINKS.all,e],byAssetId:e=>[...eR.ASSET_LINKS.all,"byAssetId",e]},CONTENT_LIBRARIES:{all:eO("learning_provider",["contentLibraries"]),byAccountId:e=>[...eR.CONTENT_LIBRARIES.all,e],byAccountIds:e=>[...eR.CONTENT_LIBRARIES.all,"multiple",[...e].sort().join(",")],create:["contentLibraries","create"]},CONTENT_LIBRARY:{all:eO("learning_provider",["contentLibrary"]),byCourseId:e=>[...eR.CONTENT_LIBRARY.all,"course",e]},CONTENT_LIBRARY_LO:{all:eO("learning_provider",["contentLibraryLearningObjects"]),externalToolsByAccountId:(e,t)=>[...eR.CONTENT_LIBRARY_LO.all,e,"externalTools",t||"initial"],externalToolsByCourseId:(e,t,r)=>[...eR.CONTENT_LIBRARY_LO.all,"course",e,"externalTools",t?"includeParents":"courseOnly",r||"none"]},LEARNING_LIBRARIES:{all:eO("learning_provider",["learningLibraries"]),create:["learningLibraries","create"],byId:e=>eO("learning_provider",["learningLibrary",e]),items:e=>[...eR.LEARNING_LIBRARIES.all,"items",e],addCourses:["learningLibraries","addCourses"]},CONTENT_VERSIONS:{all:eO("learning_provider",["contentVersions"]),list:e=>[...eR.CONTENT_VERSIONS.all,e],preview:e=>[...eR.CONTENT_VERSIONS.all,"preview",e],create:["contentVersions","create"]},PAGES:{all:eO("learning_provider",["pages"]),byCourseId:e=>[...eR.PAGES.all,e]},ASSIGNMENTS:{all:eO("learning_provider",["assignments"]),byCourseId:e=>[...eR.ASSIGNMENTS.all,e]},ASSESSMENTS:{all:eO("learning_provider",["assessments"]),byCourseId:e=>[...eR.ASSESSMENTS.all,e]},MODULE_ITEMS:{all:eO("learning_provider",["moduleItems"]),byModuleId:(e,t)=>[...eR.MODULE_ITEMS.all,e,t]},MODULE_ITEM_SEQUENCE:{all:eO("learning_provider",["moduleItemSequence"]),byCourseAndModuleItemId:(e,t)=>[...eR.MODULE_ITEM_SEQUENCE.all,e,t]},FILE_CONTENT:{all:eO("learning_provider",["fileContent"]),byId:e=>[...eR.FILE_CONTENT.all,e]},PROGRAMS:{all:eO("learning_provider",["programs"]),availableCourses:["availableCourses"],byIdWithSkills:e=>[...eR.PROGRAMS.all,"byIdWithSkills",e]},SKILL_TAXONOMY_SKILLS:{all:eO("learning_provider",["skillTaxonomySkills"]),byCourse:e=>[...eR.SKILL_TAXONOMY_SKILLS.all,"byCourse",e.courseId],byCollection:e=>[...eR.SKILL_TAXONOMY_SKILLS.all,"byCollection",e.collectionId]},SKILL_TAXONOMY_SOURCE_EXTRACTION:{all:eO("learning_provider",["skillTaxonomySourceExtraction"])},SKILL_EXTRACTION_STATUS:{all:eO("learning_provider",["skillExtractionStatus"]),byParams:e=>[...eR.SKILL_EXTRACTION_STATUS.all,e.courseId,e.moduleId||"none",e.moduleItemId||"none"]},SKILL_TAXONOMY_GROUPS:{all:eO("learning_provider",["skillTaxonomyGroups"])},SKILL_TAXONOMY_PROFICIENCY_SCALE:{all:eO("learning_provider",["skillTaxonomyProficiencyScale"])},SKILL_TAXONOMY_ALIGNMENTS:{all:eO("learning_provider",["skillTaxonomyAlignments"]),byCourseId:e=>[...eR.SKILL_TAXONOMY_ALIGNMENTS.all,e]},CRM_JWT:{all:eO("learning_provider",["crmJwt"])},ASSIGNMENT:{all:eO("learning_provider",[eA,"assignment"]),content:e=>[...eR.ASSIGNMENT.all,"content",e]},PAGE:{all:eO("learning_provider",[eA,"page"]),content:e=>[...eR.PAGE.all,"content",e],contentBySlug:e=>[...eR.PAGE.all,"contentBySlug",e]},USER_DETAILS:{all:["userDetails"],byUserId:e=>[...eR.USER_DETAILS.all,e]},ACCOUNT_NOTIFICATIONS:{all:eO("learning_provider",["accountNotifications"]),byAccountId:e=>[...eR.ACCOUNT_NOTIFICATIONS.all,e]},ADMINS:{all:eO("learning_provider",["admins"]),byAccountId:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"initial";return[...eR.ADMINS.all,"getAdmins",e,t,r]}},MODULES:{all:eO("learning_provider",[eA,"module"]),byModuleId:e=>[...eR.MODULES.all,e],byCourseId:e=>[...eR.MODULES.all,e]},MODULE:{all:eO("learning_provider",["module"]),byModuleId:e=>[...eR.MODULE.all,e]},MODULE_COLLAPSED:{all:eO("learning_provider",["moduleCollapsed"]),byModuleId:e=>[...eR.MODULE_COLLAPSED.all,e],byCourseId:e=>[...eR.MODULE_COLLAPSED.all,e]},MODULE_ITEM:{all:eO("learning_provider",["moduleItem"]),byCourseModuleAndModuleItemId:e=>[...eR.MODULE_ITEM.all,e.courseId,e.moduleId,e.moduleItemId]},COURSE_OBJECTS:{all:eO("learning_provider",["courseObjects"]),byCourseId:e=>[...eR.COURSE_OBJECTS.all,e]},COURSE_FILES:{all:eO("learning_provider",["courseFiles"]),byCourseIdAndParams:(e,t)=>{var r;return[...eR.COURSE_FILES.all,e,t.searchTerm,null==(r=t.contentTypes)?void 0:r.join(","),t.perPage]}},SOURCE_MATERIAL_FILES:{all:eO("learning_provider",["sourceMaterialFiles"]),byCourseIdAndParams:(e,t)=>{var r;return[...eR.SOURCE_MATERIAL_FILES.all,e,t.searchTerm,null==(r=t.contentTypes)?void 0:r.join(","),t.perPage]}},SIS_IMPORTS:{all:eO("learning_provider",["sisImports"]),list:e=>[...eR.SIS_IMPORTS.all,e],errors:(e,t)=>[...eR.SIS_IMPORTS.all,e,"errors",t]},STUDENT_VIEW_STUDENT:{all:eO("learning_provider",["studentViewStudent"]),byCourseId:e=>[...eR.STUDENT_VIEW_STUDENT.all,e]},ENROLLMENT_TERMS:{all:eO("learning_provider",["enrollmentTerms"]),byAccountId:e=>[...eR.ENROLLMENT_TERMS.all,e]},ROLES:{all:eO("learning_provider",["roles"]),byAccountId:(e,t)=>{var r;return[...eR.ROLES.all,e,(null==t||null==(r=t.state)?void 0:r.join(","))||"all",(null==t?void 0:t.show_inherited)?"inherited":"direct"]}},PERMISSIONS:{all:eO("learning_provider",["permissions"]),byAccountId:e=>[...eR.PERMISSIONS.all,e],help:(e,t)=>[...eR.PERMISSIONS.all,"help",e,t]},LTI_APPS:{byCourseId:e=>[...eO("learning_provider",["ltiApps"]),e]}};eS.Ry({createConversation:eS.Ry({errors:eS.IX(eS.Ry({attribute:eS.Z_(),message:eS.Z_()}).strict()).nullable()})}).strict(),eb`
  mutation CreateConversation(
    $body: String!
    $recipients: [String!]!
    $subject: String
    $bulkMessage: Boolean
    $groupConversation: Boolean
    $attachmentIds: [ID!]
    $contextCode: String
  ) {
    createConversation(
      input: {
        body: $body
        attachmentIds: $attachmentIds
        bulkMessage: $bulkMessage
        recipients: $recipients
        subject: $subject
        groupConversation: $groupConversation
        contextCode: $contextCode
      }
    ) {
      errors {
        attribute
        message
      }
    }
  }
`,eS.Ry({upload_url:eS.Z_(),upload_params:eS.IM(eS.Z_()),file_param:eS.Z_(),success_url:eS.Z_().optional(),fileId:eS.Rx().optional()}),eS.Ry({id:eS.Z_(),logged:eS.O7()}),eS.Km(["career","academic"]),eS.Km(["learner","learning_provider"]);let eT=eS.Km(["immediately","never","daily","weekly"]),eN=eS.Km(["Due Date","Announcement","Grading","Conversation Message","Account Notification"]),e$=eS.Km(["email","push"]),ej=eS.Ry({channels:eS.IX(eS.Ry({_id:eS.Z_(),path:eS.Z_(),pathType:eS.Km(["email","push"]),notificationPolicies:eS.IX(eS.Ry({frequency:eT,notification:eS.Ry({category:eS.Z_()})}))}))}),eZ=eS.Ry({pathType:e$,channelId:eS.Z_(),frequency:eT,categories:eS.IX(eN)}),eB=eS.Ry({path:eS.Z_(),notifications:eS.Ry({announcement:eZ,dueDate:eZ,grading:eZ})});eS.Ry({email:eB.optional(),push:eB.optional()}),eS.IX(eS.Ry({user:eS.Ry({_id:eS.Z_(),notificationPreferences:ej})})),eS.Km(["File","Page","Discussion","Assignment","Quiz","SubHeader","ExternalUrl","ExternalTool","NewQuiz"]);let eP=eS.Ry({duration:eS.Rx().nullable().optional(),id:eS.Rx().or(eS.Z_()).optional()}),eD=eS.Ry({component:eS.Z_(),id:eS.Z_(),props:eS.IM(eS._4()).optional(),children:eS.Vo(()=>eS.IX(eD)).optional()}),eU=eS.Ry({editorVersion:eS.Z_().optional(),schemaVersion:eS.Z_().optional(),templateLayout:eS.IX(eD),templateData:eS.IX(eS.IM(eS._4()))});eS.Ry({title:eS.Z_(),url:eS.Z_(),page_id:eS.Rx().or(eS.Z_()),published:eS.O7(),body:eS.Z_().optional().nullable(),updated_at:eS.Z_(),estimated_duration:eP.optional(),block_editor_data:eU.optional().nullable()});let eH=eS.Ry({minutes:eS.Rx().nullable(),id:eS.Rx().or(eS.Z_()).optional(),_destroy:eS.O7().optional()});eS.Ry({title:eS.Z_().optional(),body:eS.Z_().nullable().optional(),published:eS.O7().optional(),estimated_duration_attributes:eH.optional(),unlock_at:eS.Z_().nullable().optional(),lock_at:eS.Z_().nullable().optional(),block_editor_data:eU.optional().nullable()});let ez=eS.Ry({id:eS.Rx().or(eS.Z_()),name:eS.Z_(),account_id:eS.Rx().or(eS.Z_()),workflow_state:eS.Z_(),created_at:eS.Z_().nullable().optional(),updated_at:eS.Z_().nullable().optional(),block_editor_data:eU.optional().nullable()});eS.Ry({id:eS.Rx().or(eS.Z_()),account_id:eS.Rx().or(eS.Z_()),learner_dashboard_layout:ez,created_at:eS.Z_().nullable().optional(),updated_at:eS.Z_().nullable().optional()});let eK=eS.Ry({url:eS.Z_(),new_tab:eS.O7().nullable(),resource_link_id:eS.Z_()});eS.Ry({id:eS.Rx().or(eS.Z_()),name:eS.Z_(),description:eS.Z_().nullable().optional(),due_at:eS.Z_().nullable(),points_possible:eS.Rx().nullable(),published:eS.O7(),grading_type:eS.Z_().nullable(),submission_types:eS.IX(eS.Z_()),allowed_extensions:eS.IX(eS.Z_()).optional(),allowed_attempts:eS.Rx(),omit_from_final_grade:eS.O7(),external_tool_tag_attributes:eK.optional(),estimated_duration:eP.optional(),is_quiz_lti_assignment:eS.O7().optional()}),eS.Ry({id:eS.Rx().or(eS.Z_()),name:eS.Z_(),estimated_duration:eP.optional()});let eW=eS.Ry({enabled:eS.O7().optional(),text:eS.Z_().optional(),icon_url:eS.Z_().optional(),placement:eS.Z_().optional(),message_type:eS.Z_(),target_link_uri:eS.Z_().optional(),canvas_icon_class:eS.Z_().optional(),label:eS.Z_().optional(),selection_width:eS.Rx().optional(),selection_height:eS.Rx().optional()});eS.Ry({id:eS.Rx().or(eS.Z_()),url:eS.Z_(),name:eS.Z_(),description:eS.Z_().optional(),course_navigation:eS.Z_().optional(),estimated_duration:eP.optional(),link_selection:eW.optional(),resource_selection:eW.optional(),assignment_selection:eW.optional()});let eV=eS.Km(["audio","code","doc","flash","html","image","ppt","pdf","text","video","xls","zip","file"]),eX=eS.Km(["audio/x-mpegurl","audio/x-pn-realaudio","audio/x-aiff","audio/3gpp","audio/mid","audio/x-wav","audio/basic","audio/mpeg","application/ogg","text/xml","text/css","text/x-yaml","application/xml","application/javascript","text/x-csharp","application/x-docx","text/rtf","application/msword","application/rtf","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.apple.pages","application/x-shockwave-flash","text/html","application/xhtml+xml","image/png","image/x-psd","image/gif","image/pjpeg","image/jpeg","image/webp","application/vnd.oasis.opendocument.presentation","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.ms-powerpoint","application/vnd.apple.keynote","application/pdf","text","text/plain","video/mp4","video/x-ms-asf","video/x-msvideo","video/x-sgi-movie","video/mpeg","video/quicktime","video/x-la-asf","video/3gpp","video/webm","video/avi","application/vnd.oasis.opendocument.spreadsheet","text/csv","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel","application/vnd.apple.numbers","application/x-rar-compressed","application/x-zip-compressed","application/zip","application/x-zip","application/x-rar"]),eF={audio:["audio/x-mpegurl","audio/x-pn-realaudio","audio/x-aiff","audio/3gpp","audio/mid","audio/x-wav","audio/basic","audio/mpeg","application/ogg"],code:["text/xml","text/css","text/x-yaml","application/xml","application/javascript","text/x-csharp"],doc:["application/x-docx","text/rtf","application/msword","application/rtf","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.apple.pages"],flash:["application/x-shockwave-flash"],html:["text/html","application/xhtml+xml"],image:["image/png","image/x-psd","image/gif","image/pjpeg","image/jpeg","image/webp","image/svg+xml"],ppt:["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.oasis.opendocument.presentation","application/vnd.ms-powerpoint","application/vnd.apple.keynote"],pdf:["application/pdf"],text:["text","text/plain"],video:["video/mp4","video/x-ms-asf","video/x-msvideo","video/x-sgi-movie","video/mpeg","video/quicktime","video/x-la-asf","video/3gpp","video/webm","video/avi"],xls:["application/vnd.oasis.opendocument.spreadsheet","text/csv","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel","application/vnd.apple.numbers"],zip:["application/x-rar-compressed","application/x-zip-compressed","application/zip","application/x-zip","application/x-rar"]},eG={};for(let e in eF)for(let t of eF[e])eG[t]=e;eS.Ry({upload_url:eS.Z_(),upload_params:eS.IM(eS.Z_()),file_param:eS.Z_(),success_url:eS.Z_().optional(),fileId:eS.Rx().optional()}),eS.Ry({id:eS.Rx().or(eS.Z_()),folder_id:eS.Rx().or(eS.Z_()).optional(),display_name:eS.Z_(),filename:eS.Z_(),"content-type":eX,url:eS.Z_(),size:eS.Rx(),created_at:eS.Z_(),updated_at:eS.Z_(),locked:eS.O7(),hidden:eS.O7(),mime_class:eV,canvadoc_session_url:eS.Z_().nullable(),published:eS.O7().optional(),estimated_duration:eP.optional()}),eS.Ry({content_type:eX,display_name:eS.Z_(),url:eS.Z_(),mime_class:eV,canvadoc_session_url:eS.Z_().nullable(),size:eS.Rx()}),eS.Ry({id:eS.Rx().or(eS.Z_()).transform(e=>Number(e)),name:eS.Z_(),full_name:eS.Z_(),context_id:eS.Rx().or(eS.Z_()).transform(e=>Number(e)),context_type:eS.Z_(),parent_folder_id:eS.Rx().or(eS.Z_()).transform(e=>Number(e)).nullable(),created_at:eS.Z_(),updated_at:eS.Z_(),locked:eS.O7(),hidden:eS.O7().nullable().transform(e=>e??!1)}),eS.Ry({id:eS.Rx(),uuid:eS.Z_(),folder_id:eS.Rx(),display_name:eS.Z_(),filename:eS.Z_(),upload_status:eS.Z_(),"content-type":eS.Z_(),url:eS.Z_(),size:eS.Rx(),created_at:eS.Z_(),updated_at:eS.Z_(),unlock_at:eS.Z_().nullable(),locked:eS.O7(),hidden:eS.O7(),lock_at:eS.Z_().nullable(),hidden_for_user:eS.O7(),thumbnail_url:eS.Z_(),modified_at:eS.Z_(),mime_class:eV,media_entry_id:eS.Z_().nullable(),category:eS.Z_(),locked_for_user:eS.O7(),canvadoc_session_url:eS.Z_().nullable(),crocodoc_session_url:eS.Z_().nullable()});let eY=eS.Ry({id:eS.G0([eS.Z_(),eS.Rx()]).transform(e=>String(e)),name:eS.Z_(),uuid:eS.Z_(),parent_account_id:eS.G0([eS.Z_(),eS.Rx()]).transform(e=>String(e)).nullable(),root_account_id:eS.G0([eS.Z_(),eS.Rx()]).transform(e=>String(e)),workflow_state:eS.Z_(),site_admin:eS.O7().optional(),horizon_account:eS.O7().optional()});eb`
  query GetAccountNotificationPreferences($userId: ID!) {
    legacyNode(_id: $userId, type: User) {
      ... on User {
        _id
        notificationPreferences {
          channels {
            _id
            path
            pathType
            notificationPolicies {
              frequency
              notification {
                category
              }
            }
          }
        }
      }
    }
  }
`,eS.Ry({legacyNode:eS.Ry({notificationPreferences:ej})});let eq=eY.extend({});eS.IX(eq),eS.Ry({region:eS.Z_(),url:eS.Z_(),api_gateway_url:eS.Z_()});let eQ=eE.default.string().or(eE.default.number()),eJ=eS.Km(["File","Page","Discussion","Assignment","Quiz","SubHeader","ExternalUrl","ExternalTool"]),e1=eS.VK("type",[eS.Ry({type:eS.i0("min_score"),min_score:eS.Rx(),completed:eS.O7().optional()}),eS.Ry({type:eS.Km(["must_view","must_mark_done","must_submit"]),completed:eS.O7().optional()})]),e2=eS.Ry({id:eS.Rx().or(eS.Z_()),module_id:eS.Rx().or(eS.Z_()),position:eS.Rx(),title:eS.Z_(),indent:eS.Rx(),type:eJ,html_url:eS.Z_().optional(),url:eS.Z_().optional(),page_url:eS.Z_().optional(),external_url:eS.Z_().optional(),new_tab:eS.O7().optional(),completion_requirement:e1.optional(),content_details:eS.Ry({points_possible:eS.Rx().optional(),due_at:eS.Z_().optional(),unlock_at:eS.Z_().optional(),lock_at:eS.Z_().optional(),locked_for_user:eS.O7().optional(),lock_explanation:eS.Z_().optional()}).optional(),estimated_duration:eS.Z_().nullable().optional(),content_id:eS.Rx().or(eS.Z_()).optional(),quiz_lti:eS.O7(),publish_at:eS.Z_().nullable().optional(),published:eS.O7().nullable().optional(),unpublishable:eS.O7().optional(),submissionType:eS.IX(eS.Z_()).optional(),pointsPossible:eS.Rx().optional(),gradingType:eS.Z_().nullable().optional(),canUnpublish:eS.O7().optional(),lti_resource_link_lookup_uuid:eS.Z_().nullable().optional()}).strict();eS.IX(e2);let e0=eS.Ry({id:eS.Rx().or(eS.Z_()),name:eS.Z_(),start_at:eS.Z_().nullable(),end_at:eS.Z_().nullable(),workflow_state:eS.Z_()});eS.Km(["auto-enrollment","self-enrollment"]);let e4=eS.Ry({id:eS.Rx().or(eS.Z_()),name:eS.Z_(),account_id:eS.Rx().or(eS.Z_()),created_at:eS.Z_(),start_at:eS.Z_().nullable(),end_at:eS.Z_().nullable(),term:e0.optional(),course_progress:eS.Z_().optional(),uuid:eS.Z_(),grading_standard_id:eS.Rx().or(eS.Z_()).nullable(),is_public:eS.O7().nullable(),course_code:eS.Z_(),default_view:eS.Z_(),root_account_id:eS.Rx().or(eS.Z_()),enrollment_term_id:eS.Rx().or(eS.Z_()),license:eS.Z_().nullable(),grade_passback_setting:eS.Z_().nullable(),public_syllabus:eS.O7(),public_syllabus_to_auth:eS.O7(),storage_quota_mb:eS.Rx(),is_public_to_auth_users:eS.O7(),homeroom_course:eS.O7(),course_color:eS.Z_().nullable(),friendly_name:eS.Z_().nullable(),apply_assignment_group_weights:eS.O7(),calendar:eS.Ry({ics:eS.Z_()}),time_zone:eS.Z_(),blueprint:eS.O7(),template:eS.O7().optional(),sis_course_id:eS.Z_().nullable().optional(),sis_import_id:eS.Rx().or(eS.Z_()).nullable().optional(),integration_id:eS.Z_().nullable().optional(),hide_final_grades:eS.O7(),workflow_state:eS.Km(["created","claimed","available","unpublished","deleted","completed"]),restrict_enrollments_to_course_dates:eS.O7(),concluded:eS.O7().optional(),total_students:eS.Rx().optional(),teachers:eS.IX(eS.Ry({id:eS.Z_().or(eS.Rx()),display_name:eS.Z_()})).optional(),image_download_url:eS.Z_().optional()});eS.Ry({courses:eS.IX(e4)});let e3=eS.Ry({_id:eS.Z_(),name:eS.Z_(),avatarUrl:eS.Z_().nullable()}).strict();eS.Ry({legacyNode:e3.nullable()}).strict();let e5=eS.Km(["read","unread","archived"]),e8=eS.Ry({id:eS.Z_(),name:eS.Z_(),position:eS.Rx(),published:eS.O7().optional(),items:eS.IX(e2).optional(),items_count:eS.Rx(),unlock_at:eS.Z_().nullable().optional(),prerequisite_module_ids:eS.IX(eS.Z_()).optional(),require_sequential_progress:eS.O7(),requirement_count:eS.Rx().optional(),estimated_duration:eS.Z_().nullable().optional()});eS.IX(e8);let e6=eS.Ry({prev:e2.nullable(),current:e2,next:e2.nullable()});eS.Ry({items:eS.IX(e6),modules:eS.IX(e8)});let e7=eS.Ry({startCursor:eS.Z_().nullish(),endCursor:eS.Z_().nullish(),hasNextPage:eS.O7().nullish(),hasPreviousPage:eS.O7().nullish()}).strict(),e9=eS.Ry({id:eS.Z_(),displayName:eS.Z_()}),te=eS.Ry({_id:eS.Z_(),id:eS.Z_(),createdAt:eS.Z_(),body:eS.Z_(),author:e3,attachments:eS.IX(e9)}),tt=eS.Ry({_id:eS.Z_().optional(),id:eS.Z_().optional(),label:eS.Z_().nullable().optional(),user:e3,workflowState:e5.optional()}),tr=eS.Ry({_id:eS.Z_(),id:eS.Z_(),subject:eS.Z_(),canReply:eS.O7(),isPrivate:eS.O7(),conversationMessagesConnection:eS.Ry({nodes:eS.IX(te)}),conversationMessagesCount:eS.Rx(),conversationParticipantsConnection:eS.Ry({nodes:eS.IX(tt)})}).strict(),ti=eS.Ry({_id:eS.Z_(),id:eS.Z_(),label:eS.Z_().nullable(),courseId:eS.Z_().optional(),workflowState:e5,conversation:tr}).strict();eS.Ry({conversations:eS.IX(ti)}),eS.IX(eS.IX(ti)),eS.Ry({legacyNode:eS.Ry({conversationsConnection:eS.Ry({nodes:eS.IX(ti),pageInfo:e7})})}),eS.Ry({participants:eS.IX(eS.Ry({id:eQ,name:eS.Z_(),full_name:eS.Z_()}))}),eb`
  query GetConversationsQuery(
    $userId: ID!
    $filter: [String!]
    $scope: String = ""
    $first: Int
    $after: String
    $last: Int
    $before: String
    $showHorizonConversations: Boolean = true
  ) {
    legacyNode(_id: $userId, type: User) {
      ... on User {
        _id
        id
        conversationsConnection(
          scope: $scope # e.g. archived
          filter: $filter # e.g. [user_1, course_1]
          first: $first
          last: $last
          before: $before
          after: $after
          showHorizonConversations: $showHorizonConversations
        ) {
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
          nodes {
            _id
            id
            label
            workflowState
            conversation {
              _id
              id
              subject
              isPrivate
              canReply
              conversationMessagesCount
              conversationParticipantsConnection {
                nodes {
                  user {
                    _id
                    name
                    avatarUrl
                  }
                }
              }
              conversationMessagesConnection {
                nodes {
                  _id
                  id
                  body
                  createdAt
                  author {
                    _id
                    name
                    avatarUrl
                  }
                  attachments {
                    id
                    displayName
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;let tn=eS.Ry({id:eS.Z_(),name:eS.Z_(),uuid:eS.Z_(),parent_account_id:eS.Z_().nullable(),root_account_id:eS.Z_(),workflow_state:eS.Z_()});eS.IX(tn),eS.Ry({id:eS.oQ.number(),uuid:eS.Z_(),name:eS.Z_(),short_name:eS.Z_().optional(),sortable_name:eS.Z_().optional(),email:eS.Z_().optional(),locale:eS.Z_().nullable().optional(),effective_locale:eS.Z_().nullable().optional(),avatar_url:eS.Z_().nullable().optional(),account_uuid:eS.Z_().optional(),permissions:eS.IM(eS.Z_(),eS.O7()).optional()});let ta=["http:","https:","ftp:","tel:","mailto:"];eS.Ry({id:eS.Z_(),type:eS.Km(["default","custom"]).optional(),url:eS.Z_().refine(e=>(e=>{try{let t=new URL(e,window.location.origin);return ta.includes(t.protocol)}catch{return e.startsWith("/")||e.startsWith("#")}})(e),{message:"Invalid or unsafe URL"}).nullish(),text:eS.Z_().nullish(),subtext:eS.Z_().nullish(),available_to:eS.IX(eS.Z_()),feature_headline:eS.Z_().nullish(),is_featured:eS.O7().nullish(),is_new:eS.O7().nullish(),no_new_window:eS.O7().nullish()});let to=eY.extend({});eS.IX(to);let ts=eS.Ry({message_type:eS.Z_(),url:eS.Z_(),html_url:eS.Z_(),title:eS.Z_(),icon_url:eS.Z_().optional(),canvas_icon_class:eS.Z_().optional(),icon_svg_path_64:eS.Z_().optional()}),tl=eS.Ry({definition_type:eS.Z_(),definition_id:eS.G0([eS.Z_(),eS.Rx()]),name:eS.Z_(),description:eS.Z_().optional(),url:eS.Z_(),domain:eS.Z_().optional(),icon_url:eS.Z_().optional(),canvas_icon_class:eS.Z_().optional(),icon_svg_path_64:eS.Z_().optional(),placements:eS.IM(eS.Z_(),ts)});eS.IX(tl);var td=((u={}).LOCAL="local",u.ROUTE="route",u.PARENT="parent",u.CLICK="click",u.EXTERNAL="external",u);let tu=eS.Ry({id:eS.Z_(),type:eS.jb(td),title:eS.Z_(),route:eS.Z_().optional(),isBottomItem:eS.O7().optional(),isActiveIdentifier:eS.Z_().optional(),defaultOpen:eS.O7().optional()}).extend({subNavigationItems:eS.Vo(()=>eS.IX(tu).optional())});eS.Ry({items:eS.IX(tu)});let tc=eS.Ry({id:eS.Z_(),html_url:eS.Z_(),full_url:eS.Z_(),position:eS.Rx(),visibility:eS.Km(["public","admins","members","none"]),label:eS.Z_(),type:eS.Z_(),hidden:eS.O7().optional(),url:eS.Z_().optional()});eS.IX(tc);let tp=eS.Ry({id:eS.Rx(),name:eS.Z_()});eS.IX(tp);var th=((c={}).ROOT_ADMIN="root_admin",c.ADMIN="admin",c.INSTRUCTOR="instructor",c.TA="ta",c.DESIGNER="designer",c.OBSERVER="observer",c.LEARNER="learner",c.COURSE_FACILITATOR="course_facilitator",c.UNKNOWN="unknown",c);eS.Ry({canvasUserId:eS.Z_().optional(),userId:eS.Z_(),role:eS.jb(th),isLeader:eS.O7(),permissions:eS.IM(eS.O7()),currentApp:eS.Z_(),hasLearnerExperience:eS.O7(),hasLearningProviderExperience:eS.O7(),hasClassicExperience:eS.O7().optional(),enrollmentTypes:eS.IX(eS.Z_()).optional()}),eS.Ry({id:eS.Z_(),name:eS.Z_(),short_name:eS.Z_().default(""),sortable_name:eS.Z_().optional(),primary_email:eS.Z_(),time_zone:eS.Z_().optional(),locale:eS.Z_().optional(),avatar_url:eS.Z_().optional(),calendar:eS.Ry({ics:eS.Z_()}).default({ics:""})});let tm=eS.Ry({id:eS.Z_(),key:eS.Z_(),value:eS.Z_(),createdAt:eS.Z_(),updatedAt:eS.Z_()}),tg=eS.Ry({id:eS.Z_(),canvasRootAccountUuid:eS.Z_(),canvasUserUuid:eS.Z_(),leaderCanvasUserUuids:eS.IX(eS.Z_()).nullable(),createdAt:eS.Z_(),updatedAt:eS.Z_(),metadata:eS.IX(tm).nullable().optional()});eS.Ry({userSubordinates:eS.Ry({users:eS.IX(tg)})}),eS.Km(["learning_status_overview","learning_status_details","learners_needing_support","learner_support_overview","time_spent_overview","time_spent_details","time_spent_by_course","skills_overview","skills_details_top_skills","skills_details_top_learners","monthly_active_users_overview","monthly_active_users_overtime","monthly_active_users_all_users","prism_query","enrollment_counts","enrollment_trends"]).enum;var t_=((p={}).TODAY="TODAY",p.PAST_7_DAYS="PAST_7_DAYS",p.PAST_30_DAYS="PAST_30_DAYS",p.PAST_YEAR="PAST_YEAR",p.CUSTOM="CUSTOM",p);eS.Ry({type:eS.jb(t_),startDate:eS.Z_().datetime().nullable().optional(),endDate:eS.Z_().datetime().nullable().optional()}),eS.Ry({courseIds:eS.IX(eS.Rx()).optional(),courseId:eS.Rx().optional(),userId:eS.Z_().optional(),userUuids:eS.IX(eS.Z_()).optional(),maxLateAssignments:eS.Rx().optional(),maxMissingAssignments:eS.Rx().optional(),minLowScorePercentage:eS.Rx().optional(),delayDaysAfterAction:eS.Rx().optional(),year:eS.Rx().optional(),month:eS.Rx().optional(),cursor:eS.Z_().nullable().optional(),limit:eS.Rx().int().min(1).max(500).nullable().optional()});let tv=eS.Ry({hasNextPage:eS.O7(),hasPreviousPage:eS.O7(),nextCursor:eS.Z_().nullable(),previousCursor:eS.Z_().nullable(),totalCount:eS.Rx().nullable()}),tf=eS.Ry({data:eS.IX(eS.Yj()),lastModifiedDate:eS.Z_().datetime().nullable(),pageInfo:tv.nullable().optional()});eS.Ry({widgetData:tf});let ty=eS.Ry({enabled:eS.O7(),locked:eS.O7(),readonly:eS.O7(),explicit:eS.O7(),prior_default:eS.O7().optional(),applies_to_descendants:eS.O7().optional(),applies_to_self:eS.O7().optional()}),tw=eS.Ry({id:eQ,name:eS.Z_()}),tx=eS.Ry({id:eQ,label:eS.Z_(),base_role_type:eS.Z_(),is_account_role:eS.O7(),account:tw.optional(),workflow_state:eS.Km(["active","inactive","built_in"]),created_at:eS.Z_(),last_updated_at:eS.Z_(),permissions:eS.IM(eS.Z_(),ty)});eS.IX(tx);let tC=eS.Ry({permissionName:eS.Z_(),label:eS.Z_(),group:eS.Z_(),groupLabel:eS.Z_(),availableTo:eS.IX(eS.Z_()),trueFor:eS.IX(eS.Z_())});eS.IX(tC),eS.Ry({manage_course_content_add:eS.O7().optional(),manage_course_content_edit:eS.O7().optional(),manage_course_content_delete:eS.O7().optional()}),eS.Ry({manage_learner_dashboards_add:eS.O7().optional(),manage_learner_dashboards_edit:eS.O7().optional(),manage_learner_dashboards_delete:eS.O7().optional()});let tb=eS.Ry({title:eS.Z_().optional(),description:eS.Z_()});eS.Ry({details:eS.IX(tb),considerations:eS.IX(tb)}),eS.Ry({id:eS.Rx(),label:eS.Z_(),base_role_type:eS.Z_(),is_account_role:eS.O7(),workflow_state:eS.Z_()});let tk=eS.Ry({total_state_changes:eS.Rx().optional(),AccountUser:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),Account:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),EnrollmentTerm:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),CommunicationChannel:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),AbstractCourse:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),Course:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),CourseSection:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),Enrollment:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),GroupCategory:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),Group:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),GroupMembership:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),Pseudonym:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional(),UserObserver:eS.Ry({created:eS.Rx().optional(),deleted:eS.Rx().optional(),restored:eS.Rx().optional()}).optional()}),tS=eS.Ry({abstract_courses:eS.Rx().optional(),accounts:eS.Rx().optional(),admins:eS.Rx().optional(),change_sis_ids:eS.Rx().optional(),courses:eS.Rx().optional(),differentiation_tag_memberships:eS.Rx().optional(),differentiation_tag_sets:eS.Rx().optional(),differentiation_tags:eS.Rx().optional(),enrollments:eS.Rx().optional(),error_count:eS.Rx().optional(),grade_publishing_results:eS.Rx().optional(),group_categories:eS.Rx().optional(),group_memberships:eS.Rx().optional(),groups:eS.Rx().optional(),logins:eS.Rx().optional(),sections:eS.Rx().optional(),terms:eS.Rx().optional(),user_observers:eS.Rx().optional(),users:eS.Rx().optional(),warning_count:eS.Rx().optional(),xlists:eS.Rx().optional()}),tE=eS.Ry({id:eS.Rx(),created_at:eS.Z_(),ended_at:eS.Z_().nullable(),updated_at:eS.Z_(),workflow_state:eS.Km(["initializing","created","importing","cleanup_batch","imported","imported_with_messages","aborted","failed","failed_with_messages","restoring","partially_restored","restored"]),data:eS.Ry({import_type:eS.Z_().optional(),supplied_batches:eS.IX(eS.Z_()).optional(),counts:tS,statistics:tk.optional()}).optional(),progress:eS.Z_().optional(),errors_attachment:eS.Ry({id:eS.Rx(),display_name:eS.Z_().optional(),filename:eS.Z_().optional(),url:eS.Z_().optional()}).nullable().optional(),user:eS.Ry({id:eS.Rx(),name:eS.Z_().optional()}).optional(),processing_warnings:eS.IX(eS.IX(eS.Z_())).optional(),processing_errors:eS.IX(eS.IX(eS.Z_())).optional(),batch_mode:eS.O7().optional(),batch_mode_term_id:eS.Z_().nullable().optional(),multi_term_batch_mode:eS.O7().optional(),skip_deletes:eS.O7().optional(),override_sis_stickiness:eS.O7().optional(),add_sis_stickiness:eS.O7().optional(),clear_sis_stickiness:eS.O7().optional(),diffing_data_set_identifier:eS.Z_().nullable().optional(),diffed_against_import_id:eS.Rx().nullable().optional(),csv_attachments:eS.IX(eS.Ry({id:eS.Rx().optional(),display_name:eS.Z_().optional(),filename:eS.Z_().optional(),url:eS.Z_().optional()})).optional()});eS.Ry({sis_imports:eS.IX(tE)});let tI=eS.Ry({sis_import_id:eS.Rx(),file:eS.Z_(),message:eS.Z_(),row_info:eS.Z_().nullable().optional(),row:eS.Rx().nullable().optional()});eS.Ry({sis_import_errors:eS.IX(tI)}),eS.Ry({created_at:eS.Z_(),id:eS.Z_(),integration_id:eS.Z_(),login_id:eS.Z_(),name:eS.Z_(),short_name:eS.Z_(),sis_import_id:eS.Z_(),sis_user_id:eS.Z_(),sortable_name:eS.Z_(),email:eS.Z_(),last_login:eS.Z_().nullable(),avatar_url:eS.Z_().nullable(),uuid:eS.Z_(),account_uuid:eS.Z_(),time_zone:eS.Z_().optional()});var tA=((h={}).SET_IS_SHOWING_OPTIONS="SET_IS_SHOWING_OPTIONS",h.SET_HIGHLIGHTED_OPTION="SET_HIGHLIGHTED_OPTION",h.OPTIONS_CHANGED="OPTIONS_CHANGED",h.SELECT_OPTION="SELECT_OPTION",h.REMOVE_SELECTED="REMOVE_SELECTED",h.INPUT_CHANGED="INPUT_CHANGED",h);let tO=(e,t)=>{switch(t.type){case"SET_IS_SHOWING_OPTIONS":return{...e,isShowingOptions:t.payload};case"SET_HIGHLIGHTED_OPTION":return{...e,highlightedOptionId:t.payload};case"OPTIONS_CHANGED":return{...e,filteredOptionIds:t.payload};case"SELECT_OPTION":return{...e,isShowingOptions:!1,highlightedOptionId:null,...t.payload};case"INPUT_CHANGED":return{...e,...t.payload};case"REMOVE_SELECTED":return{...e,selectedOptions:t.payload,highlightedOptionId:null};default:return e}},tL=(0,O.createContext)({inputValue:"",isShowingOptions:!1,filteredOptionIds:new Set,highlightedOptionId:null,selectedOptions:[]}),tM=(0,O.createContext)(()=>{throw Error("SelectContextDispatch must be used within an SelectContextProvider")}),tR=e=>{let{children:t,inputValue:r,initialSelectedOptions:i=[],isControlled:n=!1}=e,[a,o]=(0,O.useReducer)(tO,{inputValue:r,isShowingOptions:!1,filteredOptionIds:new Set,highlightedOptionId:null,selectedOptions:i});return(0,A.jsx)(tL.Provider,{value:{...a,isControlled:n},children:(0,A.jsx)(tM.Provider,{value:o,children:t})})};var tT=((m={}).MULTI="multi",m.SINGLE="single",m.AUTO="auto",m.FREE_INPUT="free_input",m);let tN="reset-option-id",t$=e=>{let{initialSelectedOptions:t=[],selectedOptionIds:r,options:i,type:n,getOptionLabel:a,getOptionAriaLabel:o,getOptionId:s,analyticsTag:l,...d}=e,u=(r?r.map(e=>i.find(t=>s(t)===e)).filter(Boolean):void 0)||t,c="multi"!==n&&u.length?u[0]:null;return(0,A.jsx)(tR,{inputValue:c?a(c):"",initialSelectedOptions:c?[c]:u,isControlled:!!r,children:(0,A.jsx)(tj,{type:n,getOptionLabel:a,getOptionId:s,getOptionAriaLabel:o,options:i,selectedOptionIds:r,...d,...l})})},tj=e=>{let{options:t,getOptionLabel:r,getOptionAriaLabel:i,getOptionId:n,setSearchText:a,onTextChange:o,setSelectedOptionIds:s,onListEndReached:l,hasMoreMenuData:d,size:u,messages:c,type:p="auto",renderLabel:h="",interaction:m="enabled",enableSelectionReset:g=!1,placeholder:_,width:v,isFetching:f,selectedOptionIds:y,analyticsTag:w,constrain:x,assistiveText:C,...b}=e,{inputValue:k,isShowingOptions:S,filteredOptionIds:E,highlightedOptionId:I,selectedOptions:L,isControlled:Z}=(0,O.useContext)(tL),{t:B}=(0,M.useTranslation)(),P=(0,el.wR)(),D=(0,O.useContext)(tM),{announce:U}=(0,O.useContext)(eo),H=(0,O.useRef)(null),z=(0,O.useRef)(null),K=(0,O.useRef)([]);(0,ek.useOutsideClick)(z,()=>D({type:tA.SET_IS_SHOWING_OPTIONS,payload:!1}));let W=(0,O.useMemo)(()=>new Map(t.map(e=>[n(e),e])),[t,n]),V=(0,O.useMemo)(()=>typeof W.keys().next().value,[W]),X=(0,O.useMemo)(()=>L.map(e=>n(e)),[L,n]);(0,O.useEffect)(()=>{if(Z)return;let e=null==L?void 0:L.map(e=>n(e));JSON.stringify(K.current)!==JSON.stringify(e)&&(K.current=e,s(e))},[L,n,s,Z]),(0,O.useEffect)(()=>{a&&a(k,L)},[k,a,L]);let F=(0,O.useCallback)(e=>{let i=e.toLowerCase().split(/[\s\-_/]+/).filter(Boolean);return new Set((a||0===i.length?t:t.filter(e=>{let t=r(e).toLowerCase().split(/[\s\-_/]+/);return i.every(e=>t.some(t=>t.startsWith(e)))})).map(e=>n(e)))},[t,r,a,n]);(0,O.useEffect)(()=>{if(Z&&y){let e=y.map(e=>t.find(t=>n(t)===e)).filter(Boolean);JSON.stringify(L.map(e=>n(e)))!==JSON.stringify(y)&&D({type:tA.SELECT_OPTION,payload:{inputValue:"multi"!==p&&e.length>0?r(e[0]):"",selectedOptions:e,filteredOptionIds:F("")}})}},[y,t,n,L,D,p,r,F,Z]),(0,O.useEffect)(()=>{D({type:tA.OPTIONS_CHANGED,payload:new Set(t.map(e=>n(e)))})},[t,n,D]),(0,O.useEffect)(()=>{S&&!f&&0===E.size&&k.length>0&&U(B("No match"))},[S,f,E.size,k,U,B]);let G=(0,O.useCallback)((e,t)=>{let r,{id:i}=t;e.persist(),!i||(r="number"===V?Number.parseInt(i,10):i,W.get(r)&&D({type:tA.SET_HIGHLIGHTED_OPTION,payload:r}))},[V,W,D]),Y=(0,O.useCallback)((e,t)=>{let i,{id:n}=t;if(Z){let e;return n===tN?void s([]):void(e="number"===V?Number.parseInt(n,10):n,W.get(e)&&("multi"===p?s([...X,e]):s([e])))}n===tN&&D({type:tA.SELECT_OPTION,payload:{inputValue:"",selectedOptions:[],filteredOptionIds:F("")}}),i="number"===V?Number.parseInt(n,10):n;let a=W.get(i);a&&D({type:tA.SELECT_OPTION,payload:{inputValue:"multi"===p?"":r(a),selectedOptions:"multi"===p?[...L,a]:[a],filteredOptionIds:F("")}})},[V,W,L,X,F,p,r,D,Z,s]),q=(0,O.useCallback)(e=>{let t=e.target.value;o&&o(t);let r=F(t),i=Array.from(r).filter(e=>!X.includes(e))[0]??null;D({type:tA.INPUT_CHANGED,payload:{inputValue:t,highlightedOptionId:i,filteredOptionIds:r,isShowingOptions:!0}})},[F,D,X,o]),Q=(0,O.useCallback)(e=>{if("Backspace"===e.key&&"multi"===p&&""===k&&L.length>0){let e=L.slice(0,-1);Z?s(e.map(e=>n(e))):D({type:tA.REMOVE_SELECTED,payload:e})}if("Enter"===e.key){if("free_input"===p)return void D({type:tA.SET_IS_SHOWING_OPTIONS,payload:!1});if(I){let e=W.get(I);if(!e)return;Z?("multi"===p?s([...X,I]):s([I]),D({type:tA.SET_IS_SHOWING_OPTIONS,payload:!1})):D({type:tA.SELECT_OPTION,payload:{inputValue:"multi"===p?"":r(e),selectedOptions:"multi"===p?[...L,e]:[e],filteredOptionIds:F("")}})}}},[L,X,k,F,I,W,p,D,r,Z,s,n]),J=(0,O.useCallback)((e,t)=>{var r;e.stopPropagation(),e.preventDefault();let i=L.filter(e=>n(e)!==t);Z?s(i.map(e=>n(e))):D({type:tA.REMOVE_SELECTED,payload:i}),null==(r=z.current)||r.focus()},[n,L,D,Z,s]),ee=(0,O.useCallback)(()=>{if("multi"===p)return void D({type:tA.INPUT_CHANGED,payload:{inputValue:"",highlightedOptionId:null,filteredOptionIds:F(""),isShowingOptions:!1}});if("free_input"===p){let e=L.length>0?L[0]:null,t=e&&k===r(e);D({type:tA.INPUT_CHANGED,payload:{inputValue:k,highlightedOptionId:t?n(e):null,filteredOptionIds:F(""),isShowingOptions:!1}});return}let e=L.length>0?L[0]:null,t=e?r(e):"";D({type:tA.INPUT_CHANGED,payload:{inputValue:t,highlightedOptionId:e?n(e):null,filteredOptionIds:F(""),isShowingOptions:!1}})},[n,L,D,r,F,p,k]),et=(0,O.useCallback)(()=>{let e=L.map((e,t)=>{let a=n(e);return(0,A.jsx)(R.v,{dismissible:!0,size:u,text:r(e),...i&&{"aria-label":i(e)},margin:t>0?"xx-small 0 xx-small xx-small":"xx-small 0",onClick:e=>J(e,a)},a)});return(0,A.jsx)(T.so,{wrap:"wrap",padding:"0 small 0 0",children:e})},[L,n,r,i,J,u]),er=(0,O.useCallback)(()=>{let e=[];if("multi"!==p&&g){let t=0===L.length;e.push((0,A.jsx)(N.l.Option,{id:tN,isSelected:t,renderAfterLabel:t?(0,A.jsx)(es.I,{name:"check"}):null,children:_??B("Choose")},tN))}return(e.push(Array.from(E).map((e,t)=>{let i=W.get(e);if(!i)return null;let n=E.size-1===t,a=-1!==X.indexOf(e),o=I===e;return"multi"===p&&a?null:(0,A.jsx)(N.l.Option,{id:e.toString(),isHighlighted:o,isSelected:a,renderAfterLabel:a?(0,A.jsx)(es.I,{name:"check"}):null,children:(0,A.jsx)($.S,{elementRef:e=>{n&&(H.current=e)},children:r(i)},`select-${e}`)},`select-key-${e}`)})),0===e.length)?(0,A.jsx)(N.l.Option,{id:"empty-option",children:"No match"},"empty-option"):e},[r,I,L,E,W,p,g,_,X,B]),ei=(0,eu.A)(H,{root:null,rootMargin:"0px",threshold:.4});(0,O.useEffect)(()=>{(null==ei?void 0:ei.isIntersecting)&&d&&l&&(H.current=null,l())},[d,ei,l]);let en={'[aria-selected="true"][role="option"]':{color:`${P.primitives.white} !important`}},ea="single"===p?"Use arrow keys to navigate options.":"Type or use arrow keys to navigate options.",ec="multi"===p?" Multiple selections allowed.":"free_input"===p?" You can type freely or select from suggestions.":"",ep=`${C??ea}${ec}`;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(ed.mL,{styles:en}),(0,A.jsx)(N.l,{messages:c,placeholder:_,renderLabel:h,interaction:m,assistiveText:ep,inputValue:k,isShowingOptions:S,inputRef:e=>{z.current=e},onBlur:()=>{D({type:tA.SET_HIGHLIGHTED_OPTION,payload:null})},onInputChange:"single"===p?void 0:q,onRequestHideOptions:ee,onRequestShowOptions:()=>{D({type:tA.SET_IS_SHOWING_OPTIONS,payload:!0})},onRequestHighlightOption:G,onRequestSelectOption:Y,onKeyDown:"single"===p?void 0:Q,renderBeforeInput:"multi"===p&&L.length>0?et():null,size:u,width:v,constrain:x,...w,...b,children:f?(0,A.jsx)(N.l.Option,{id:"loading-option",children:(0,A.jsx)(j.y,{renderTitle:B("Loading"),size:"x-small"})},"loading-option"):E.size>0?er():(0,A.jsx)(N.l.Option,{id:"empty-option",children:"No match"},"empty-option")})]})},tZ=e=>{let{type:t,count:r,icon:i,size:n="small",color:a,colorPrimary:o,ariaHidden:s,countLabel:l,...d}=e,u=(0,el.wR)();return(0,A.jsx)(B.E,{themeOverride:{sizeNotification:"small"===n?"0.5rem":"1rem",notificationOffset:"small"===n?"0.125rem":"-0.125rem",countOffset:"small"===n?"0.5rem":"0.3rem",color:a??u.ui.textSurfaceColored,colorPrimary:o??u.ui.surfaceAttention,padding:"none"},type:"count"===t||"icon"===t?"count":"notification",count:"count"===t?r:1,formatOutput:"icon"===t&&i?e=>(0,A.jsx)("span",{style:{position:"relative",bottom:"0.1em"},children:i}):l?e=>(0,A.jsx)(Z._,{alt:l,children:e}):s?e=>(0,A.jsx)("span",{"aria-hidden":"true",children:e}):void 0,...d})},tB=e=>{let{wrapMode:t="nowrap"}=e;return(0,A.jsx)(ed.mL,{styles:(0,ed.AH)`
      button {
        white-space: ${t};
      }
      a:hover {
        text-decoration: none;
      }
    `})},tP=ec.A.div`
  display: contents;
  ${e=>{let{$hoverTextColor:t}=e;return t?`button:hover, button:hover *, a:hover, a:hover * { color: ${t} !important; }`:""}}
`;var tD=((g={}).Primary="primary",g.Secondary="secondary",g.Tab="tab",g),tU=((_={}).Black="black",_.BlackPagination="blackPagination",_.White="white",_.WhiteGhost="whiteGhost",_.WhiteAndGrayOutline="whiteAndGrayOutline",_.WhiteAndGrayOutlinePagination="whiteAndGrayOutlinePagination",_.DarkOutline="darkOutline",_.WhiteOutline="whiteOutline",_.Ghost="ghost",_.Danger="danger",_.DangerGhost="dangerGhost",_.DangerInverse="dangerInverse",_.DangerOutline="dangerOutline",_.Green="green",_.GreenOutline="greenOutline",_.GreenGhost="greenGhost",_.AI="ai",_.AISecondary="aiSecondary",_.Nav="nav",_),tH=((v={}).Institution="institution",v.Gray="gray",v.Blue="blue",v),tz=((f={}).Primary="primary",f.Secondary="secondary",f.SecondarySmall="secondarySmall",f.PrimaryWhite="primaryWhite",f.SecondaryWhite="secondaryWhite",f.SecondarySmallWhite="secondarySmallWhite",f.Popover="popover",f.PopoverSelected="popoverSelected",f);let tK=e=>{let{currentTheme:t,withBoxShadow:r,isHovered:i,level:n,variant:a,pillShape:o}=e,s={currentTheme:t,withBoxShadow:r,isHovered:i,pillShape:o};return(e=>{var t,r,i,n,a,o,s,l,d,u,c,p,h;let{currentTheme:m,level:g,withBoxShadow:_,isHovered:v=!1,variant:f,pillShape:y=!1}=e,{ui:w,gradients:x,shadows:C,borders:b,spacing:k,typography:S,customPrimitives:E,primitives:I}=m,A={...null==(t=m.componentOverrides)?void 0:t.Button};if(_&&(A[`${g}BoxShadow`]=C.above,A[`${g}GhostBoxShadow`]=C.above,A[`${g}HoverBoxShadow`]=C.above,A[`${g}GhostHoverBoxShadow`]=C.above),y&&(A.borderRadius="9999px"),"primary"===g)switch(f){case"black":return{...A,primaryColor:w.textSurfaceColored,primaryBorderColor:"transparent",primaryBackground:E.midnight100,primaryHoverBackground:w.surfaceTrueBlack,primaryActiveBackground:E.midnight100};case"blackPagination":return{...A,primaryColor:w.textSurfaceColored,primaryBorderColor:"transparent",primaryBackground:w.surfaceInversePrimary,primaryHoverBackground:w.surfaceTrueBlack,primaryActiveBackground:w.surfaceInversePrimary,lineHeight:k.smallMedium,smallPaddingHorizontal:k.smallMedium};case"white":return{...A,primaryColor:w.textTitle,borderWidth:b.widthSmall,primaryBorderColor:v?w.surfaceInversePrimary:"transparent",primaryBackground:w.surfacePageSecondary,primaryHoverBackground:w.surfacePageSecondary,primaryActiveBackground:w.surfacePageSecondary};case"whiteAndGrayOutline":return{...A,primaryColor:w.textTitle,borderWidth:b.widthSmall,primaryBorderColor:v?w.surfaceInversePrimary:w.lineStroke,primaryBackground:w.surfaceCardPrimary,primaryHoverBackground:w.surfaceCardPrimary,primaryActiveBackground:w.surfaceCardPrimary};case"whiteAndGrayOutlinePagination":return{...A,primaryColor:w.textTitle,borderWidth:b.widthSmall,primaryBorderColor:v?w.surfaceInversePrimary:w.lineStroke,primaryBackground:w.surfaceCardPrimary,primaryHoverBackground:w.surfaceCardPrimary,primaryActiveBackground:w.surfaceCardPrimary,lineHeight:k.smallMedium,smallPaddingHorizontal:k.smallMedium};case"darkOutline":return{...A,primaryColor:v?w.textSurfaceColored:E.midnight100,borderWidth:b.widthSmall,primaryBorderColor:E.midnight100,primaryBackground:"transparent",primaryHoverBackground:E.midnight100,primaryActiveBackground:"transparent"};case"whiteOutline":return{...A,primaryColor:v?w.textTitle:w.textSurfaceColored,borderWidth:b.widthSmall,primaryBorderColor:w.surfacePageSecondary,primaryBackground:"transparent",primaryHoverBackground:w.surfacePageSecondary,primaryActiveBackground:"transparent"};case"whiteGhost":return{...A,primaryColor:w.textSurfaceColored,borderWidth:b.widthSmall,primaryBorderColor:"transparent",primaryBackground:"transparent",primaryHoverBackground:w.surfaceOverlayWhite,primaryActiveBackground:"transparent"};case"ghost":return{...A,primaryColor:w.textTitle,borderWidth:b.widthSmall,primaryBorderColor:"transparent",primaryBackground:"transparent",primaryHoverBackground:w.surfaceHover,primaryActiveBackground:"transparent"};case"danger":return{...A,primaryColor:w.textSurfaceColored,primaryBorderColor:"transparent",primaryBackground:w.surfaceError,primaryHoverBackground:w.surfaceErrorHoverOrPress,primaryActiveBackground:w.surfaceError};case"dangerGhost":return{...A,primaryColor:w.textError,borderWidth:b.widthSmall,primaryBorderColor:"transparent",primaryBackground:"transparent",primaryHoverBackground:w.surfaceHover,primaryActiveBackground:"transparent"};case"dangerInverse":return{...A,primaryColor:v?w.surfaceErrorHoverOrPress:w.surfaceError,primaryBorderColor:"transparent",primaryBackground:w.surfacePageSecondary,primaryHoverBackground:w.surfacePageSecondary,primaryActiveBackground:w.surfacePageSecondary};case"dangerOutline":return{...A,primaryColor:v?w.textSurfaceColored:w.textError,borderWidth:b.widthSmall,primaryBorderColor:w.surfaceError,primaryBackground:"transparent",primaryHoverBackground:w.surfaceError,primaryActiveBackground:"transparent"};case"green":return{...A,primaryColor:w.textSurfaceColored,primaryBorderColor:"transparent",primaryBackground:w.surfaceSuccess,primaryHoverBackground:w.surfaceSuccessHoverOrPress,primaryActiveBackground:w.surfaceSuccess};case"greenOutline":return{...A,primaryColor:v?w.textSurfaceColored:w.textSuccess,borderWidth:b.widthSmall,primaryBorderColor:w.surfaceSuccess,primaryBackground:"transparent",primaryHoverBackground:w.surfaceSuccessHoverOrPress,primaryActiveBackground:"transparent"};case"greenGhost":return{...A,primaryColor:w.textSuccess,borderWidth:b.widthSmall,primaryBorderColor:"transparent",primaryBackground:"transparent",primaryHoverBackground:w.surfaceHover,primaryActiveBackground:"transparent"};case"ai":return{...A,primaryColor:w.textSurfaceColored,primaryBorderColor:"transparent",primaryBackground:x.igniteAI,primaryHoverBackground:x.igniteAIHover,primaryActiveBackground:x.igniteAI};case"aiSecondary":return{...A,primaryColor:x.igniteAIHover,primaryBorderColor:"transparent",primaryBackground:x.igniteAISecondary,primaryHoverBackground:x.igniteAISecondaryHover,primaryActiveBackground:x.igniteAISecondary};case"nav":return{...A,primaryColor:w.textTitle,borderWidth:b.widthSmall,primaryBorderColor:"transparent",primaryBackground:w.surfacePageSecondary,primaryHoverBackground:w.surfacePagePrimary,primaryActiveBackground:w.surfacePagePrimary}}if("secondary"===g)switch(f){case"institution":return{...A,secondaryColor:(null==(i=m.componentOverrides)||null==(r=i.Button)?void 0:r.secondaryInstitutionColor)||w.textSurfaceColored,secondaryBorderColor:(null==(a=m.componentOverrides)||null==(n=a.Button)?void 0:n.secondaryInstitutionBorderColor)||"transparent",secondaryBackground:(null==(s=m.componentOverrides)||null==(o=s.Button)?void 0:o.secondaryInstitutionBackground)||w.surfaceInstitution,secondaryHoverBackground:(null==(d=m.componentOverrides)||null==(l=d.Button)?void 0:l.secondaryInstitutionHoverBackground)||w.surfaceInstitutionDarkOverlay,secondaryActiveBackground:(null==(c=m.componentOverrides)||null==(u=c.Button)?void 0:u.secondaryInstitutionActiveBackground)||w.surfaceAttentionSecondary,secondaryActiveBoxShadow:(null==(h=m.componentOverrides)||null==(p=h.Button)?void 0:p.secondaryInstitutionActiveBoxShadow)||"none"};case"gray":return{...A,secondaryColor:w.textTitle,secondaryBorderColor:"transparent",secondaryBackground:w.surfacePagePrimary,secondaryHoverBackground:w.surfacePageSecondary,secondaryActiveBackground:w.surfacePageSecondary};case"blue":return{...A,secondaryColor:w.textTitle,borderWidth:b.widthSmall,secondaryBorderColor:I.blue45,secondaryBackground:I.blue12,secondaryHoverBackground:I.grey12,secondaryActiveBackground:I.blue12}}if("tab"===g){let e={...A,primaryColor:w.textTitle,borderWidth:"0",primaryBorderColor:"transparent",primaryBackground:"transparent",primaryHoverBackground:"transparent",primaryActiveBackground:"transparent",mediumPaddingHorizontal:"none",mediumPaddingTop:"none",mediumPaddingBottom:"none",borderRadius:b.radiusSmallMedium};if("popover"===f)return{...e,mediumFontSize:S.fontSizeMedium,mediumPaddingHorizontal:k.xSmall,mediumPaddingTop:k.xSmall,mediumPaddingBottom:k.xSmall,primaryColor:w.textTitle,textAlign:"left",borderRadius:"0"};if("popoverSelected"===f)return{...e,mediumFontSize:S.fontSizeMedium,mediumPaddingHorizontal:k.xSmall,mediumPaddingTop:k.xSmall,mediumPaddingBottom:k.xSmall,primaryColor:w.surfacePageSecondary,primaryBackground:w.surfaceInverseSecondary,primaryHoverBackground:w.surfaceInverseSecondary,textAlign:"left",borderRadius:"0"};let t="primary"===f||"primaryWhite"===f;return{...e,mediumFontSize:t||"secondarySmall"===f||"secondarySmallWhite"===f?S.fontSizeSmall:S.fontSizeMedium,mediumPaddingHorizontal:t?k.mediumSmall:k.xSmall,mediumPaddingTop:t?k.small:k.xSmall,mediumPaddingBottom:t?k.small:k.xSmall,...("primaryWhite"===f||"secondaryWhite"===f||"secondarySmallWhite"===f)&&{primaryColor:w.textSurfaceColored},...t&&{borderWidth:"2px 0"}}}return A})(n===tD.Primary?{level:tD.Primary,variant:a,...s}:n===tD.Secondary?{level:tD.Secondary,variant:a,...s}:{level:tD.Tab,variant:a,...s})},tW=(e,t,r)=>{switch(t){case tU.WhiteOutline:case tU.DangerInverse:case tU.WhiteGhost:case tU.White:return e.ui.surfacePageSecondary;case tU.Black:if(r)return e.ui.surfaceTrueBlack;return e.customPrimitives.midnight100;case tU.BlackPagination:case tU.Ghost:case tU.DarkOutline:return e.customPrimitives.midnight100;case tU.WhiteAndGrayOutline:case tU.WhiteAndGrayOutlinePagination:case tH.Gray:return e.ui.surfaceInverseSecondary;case tH.Institution:var i,n;return(null==(n=e.componentOverrides)||null==(i=n.Button)?void 0:i.secondaryInstitutionFocusColorInfo)||e.ui.surfaceInstitution;case tU.Danger:case tU.DangerGhost:case tU.DangerOutline:return e.ui.surfaceError;case tU.Green:case tU.GreenOutline:case tU.GreenGhost:return e.ui.surfaceSuccess;case tU.AI:return e.ui.igniteAIStroke;case tU.AISecondary:return e.ui.igniteAISecondaryStroke;case tU.Nav:return e.ui.surfacePagePrimary;case tz.Primary:case tz.Secondary:case tz.SecondarySmall:return e.ui.surfaceInversePrimary;case tz.PrimaryWhite:case tz.SecondaryWhite:case tz.SecondarySmallWhite:return e.ui.surfacePageSecondary;case tz.Popover:case tz.PopoverSelected:return e.ui.surfaceInversePrimary}},tV=e=>{switch(e){case tD.Primary:return"primary";case tD.Secondary:return"secondary";default:return"primary"}},tX=(e,t)=>{switch(t){case tU.Black:case tU.WhiteOutline:case tH.Institution:var r,i;return{color:(null==(i=e.componentOverrides)||null==(r=i.Button)?void 0:r.secondaryInstitutionColor)||e.ui.textBody,colorPrimary:e.ui.surfacePageSecondary};default:return{color:e.ui.textSurfaceColored,colorPrimary:e.ui.surfaceInstitution}}},tF=ec.A.span`
  background: ${e=>e.$gradientColor};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
`,tG=(0,O.forwardRef)((e,t)=>{let{href:r,...i}=e;return(0,A.jsx)(L.k2,{ref:t,to:r,...i})}),tY=e=>{let{level:t,variant:r,size:i="medium",withBoxShadow:n=!1,badgeProps:a,wrapMode:o="nowrap",withNoMargin:s=!1,height:l,internalLink:d,analyticsTag:u,screenReaderLabel:c,pillShape:p=!1,...h}=e,[m,g]=(0,O.useState)(!1),_=(0,el.wR)(),v=c||h["aria-label"],{onKeyDown:f,...y}=h,{href:w,target:x}=y,{onKeyDown:C}={onKeyDown:(0,O.useCallback)(e=>{let t;("Enter"===(t=e.key)||" "===t)&&sessionStorage.setItem("keyboardNavigationIntent",String(Date.now()))},[])},b=w&&"_blank"!==x?e=>{C(e),null==f||f(e)}:f,k={...y,onKeyDown:b},S=()=>{let e=e=>r===tU.AISecondary&&e?(0,A.jsx)(tF,{$gradientColor:_.gradients.igniteAIHover,children:e}):e;return d&&h.href?(0,A.jsx)(P.$,{...k,as:tG,size:i,color:tV(t),focusColor:"info",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),themeOverride:tK({currentTheme:_,withBoxShadow:n,isHovered:m,level:t,variant:r,pillShape:p}),...v&&{"aria-label":v},...u,children:(0,A.jsxs)(T.so,{gap:"xx-small",..."start"!==h.textAlign&&{justifyItems:"center"},alignItems:"center",margin:s?"none":"none xx-small none xx-small",height:l??_.forms.inputHeightXXSmall,children:[h.renderIconBefore,e(h.children),h.renderIconAfter]})}):(0,A.jsx)(P.$,{...k,...!d&&h.href?{as:"a"}:{},size:i,color:tV(t),focusColor:"info",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),themeOverride:tK({currentTheme:_,withBoxShadow:n,isHovered:m,level:t,variant:r,pillShape:p}),...v&&{"aria-label":v},...u,children:(0,A.jsxs)(T.so,{gap:"xx-small",..."start"!==h.textAlign&&{justifyItems:"center"},alignItems:"center",margin:s?"none":"none xx-small none xx-small",height:l??_.forms.inputHeightXXSmall,children:[h.renderIconBefore,e(h.children),h.renderIconAfter]})})},E=((e,t)=>{let{ui:r}=e;switch(t){case tU.DarkOutline:return r.textSurfaceColored;case tU.WhiteOutline:return r.textTitle;case tU.DangerInverse:return r.surfaceErrorHoverOrPress;case tU.DangerOutline:case tU.GreenOutline:return r.textSurfaceColored;default:return}})(_,r);return(0,A.jsxs)(D.v,{theme:{componentOverrides:{View:{focusColorInfo:tW(_,r,m),...t===tD.Tab&&{focusOutlineOffset:"-1px"}}}},children:[(0,A.jsx)(tB,{wrapMode:o}),(0,A.jsx)(tP,{$hoverTextColor:E,children:a?(0,A.jsx)(tZ,{...tX(_,r),...a,variant:"primary",size:i,display:h.display,...v&&{"aria-label":v},children:S()}):S()})]})},tq=e=>{let{tooltipId:t,variant:r,placement:i,zIndex:n}=e,a=(0,el.wR)(),o="inverse"===r?a.ui.surfaceInverseSecondary:a.ui.surfaceCardPrimary,s="inverse"===r?a.ui.surfaceInverseSecondary:a.ui.containerStroke,l="inverse"===r?a.ui.textSurfaceColored:a.ui.textBody,d="inverse"===r?a.ui.surfaceInverseSecondary:a.ui.containerStroke,u="inverse"===r?a.ui.surfaceInverseSecondary:a.ui.surfaceCardPrimary,c=(e=>{if("string"==typeof e){if(e.startsWith("bottom"))return"bottom";if(e.startsWith("start")||e.includes("center-start")||e.includes("center start"))return"left";if(e.startsWith("end")||e.includes("center-end")||e.includes("center end"))return"right"}return"top"})(i),p="number"==typeof n?`${n}`:"10000";return(0,A.jsx)(ed.mL,{styles:(0,ed.AH)`
        span[data-position-content="${t}"] {
          z-index: ${p} !important;
          span[dir="ltr"] {
            background-color: ${o};
            border-radius: ${a.borders.radiusSmallMedium};
            border-color: ${s};
            box-shadow: ${a.shadows.depth3};
            span[role="tooltip"] {
              font-family: ${a.typography.fontFamily};
              color: ${l};
            }
          }
          /* Sibling span (the arrow container) */
          *:has(> span[role="tooltip"]) > span:not([role="tooltip"]) {
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-${c}-color: ${d};
            &::after {
              border-top-color: transparent;
              border-right-color: transparent;
              border-bottom-color: transparent;
              border-left-color: transparent;
              border-${c}-color: ${u};
            }
          }
        }
      `})};var tQ=((y={}).Inverse="inverse",y.White="white",y);let tJ=(0,O.forwardRef)((e,t)=>{let{variant:r="white",zIndex:i,as:n="span",...a}=e,o=ea("tooltip");return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(tq,{tooltipId:o,variant:"inverse"===r?"inverse":"white",placement:a.placement??"top",zIndex:i}),(0,A.jsx)(U.m,{id:o,as:n??void 0,ref:t,...a})]})});tJ.displayName="CLXTooltip";let t1=(0,O.forwardRef)((e,t)=>{let{level:r=tD.Primary,variant:i=tU.Black,size:n="medium",withBoxShadow:a=!1,tooltip:o,tooltipVariant:s=tQ.Inverse,tooltipPlacement:l="end",badgeProps:d,tooltipOffsetX:u,tooltipOffsetY:c,screenReaderLabel:p,analyticsTag:h,elementAttributes:m,clxIconName:g,iconColor:_,children:v,display:f,onMouseEnter:y,onMouseLeave:w,onClick:x,borderRadius:C,...b}=e,[k,S]=(0,O.useState)(!1),E=(0,el.wR)(),I="small"===n?E.typography.fontSizeMedium:E.typography.fontSizeXLarge,L=()=>(0,A.jsx)(H.K,{...b,onClick:e=>{null==x||x(e)},screenReaderLabel:p,size:n,color:"tab"===r?"primary":r,onMouseEnter:e=>{S(!0),null==y||y(e)},onMouseLeave:e=>{S(!1),null==w||w(e)},themeOverride:{...tK({currentTheme:E,withBoxShadow:a,isHovered:k,level:r,variant:i}),borderRadius:C??E.borders.radiusSmallMedium},ref:t,...h,...m,children:v||(0,A.jsx)(es.I,{name:g,width:I,height:I,customColor:_})}),M=()=>(0,A.jsx)(D.v,{theme:{componentOverrides:{View:{focusColorInfo:tW(E,i,k)}}},children:d?(0,A.jsx)(tZ,{...tX(E,i),...d,variant:"primary",size:n,display:f,children:L()}):L()});return(0,A.jsx)(A.Fragment,{children:o?(0,A.jsx)(tJ,{as:"div",renderTip:o,variant:s,placement:l,offsetX:u,offsetY:c,children:M()}):M()})});var t2=((w={}).P1="p1",w.P2="p2",w.P3="p3",w.LABEL_SMALL="labelSmall",w.LABEL_SMALL_BOLD="labelSmallBold",w.LABEL_MEDIUM_BOLD="labelMediumBold",w.LABEL_MEDIUM_EXTRA_BOLD="labelMediumExtraBold",w.LABEL_LARGE_BOLD="labelLargeBold",w.INHERIT="inherit",w.BUTTON_TEXT_LARGE="buttonTextLarge",w.BUTTON_TEXT_MEDIUM="buttonTextMedium",w.ALT_H1="altH1",w.ALT_H2="altH2",w.ALT_H3="altH3",w.ALT_H4="altH4",w);let t0={p1:"content",p2:"contentSmall",p3:"legend",labelSmall:"legend",labelSmallBold:"legend",labelMediumBold:"contentSmall",labelMediumExtraBold:"contentSmall",labelLargeBold:"contentImportant",inherit:"content",buttonTextLarge:"content",buttonTextMedium:"contentSmall",altH1:"content",altH2:"content",altH3:"content",altH4:"content"},t4=["primary","secondary","brand","success","danger","alert","primary-inverse","secondary-inverse"],t3=(0,O.forwardRef)((e,t)=>{let r,i,n,a,o=(0,el.wR)(),s=!e.color||t4.includes(e.color);return(0,A.jsx)("div",{style:{textAlign:e.textAlign??"start",display:e.display??"initial"},children:(0,A.jsx)(z.E,{...(r={labelSmall:{letterSpacing:"expanded",themeOverride:{letterSpacingExpanded:o.typography.letterSpacingSemiExpanded}},labelSmallBold:{letterSpacing:"expanded",themeOverride:{letterSpacingExpanded:o.typography.letterSpacingSemiExpanded,weightRegular:o.typography.fontWeightSemiBold}},labelMediumBold:{themeOverride:{weightRegular:o.typography.fontWeightSemiBold}},labelMediumExtraBold:{themeOverride:{weightRegular:o.typography.fontWeightBold}},inherit:{letterSpacing:"normal",themeOverride:{content:"inherit",fontStyle:"inherit",weightRegular:"inherit",fontFamily:"inherit",lineHeight150:"inherit"}},altH1:{themeOverride:{fontFamily:o.typography.fontFamilyHeading,weightRegular:o.typography.fontWeightBold,content:o.typography.fontSizeXXLarge}},altH2:{themeOverride:{fontFamily:o.typography.fontFamilyHeading,weightRegular:o.typography.fontWeightBold,content:o.typography.fontSizeXLarge}},altH3:{themeOverride:{fontFamily:o.typography.fontFamilyHeading,weightRegular:o.typography.fontWeightBold,content:o.typography.fontSizeLarge}},altH4:{themeOverride:{fontFamily:o.typography.fontFamilyHeading,weightRegular:o.typography.fontWeightBold,content:o.typography.fontSizeMedium}}},n=(i=e.variant&&r[e.variant])&&"object"==typeof i&&"themeOverride"in i?i.themeOverride:{},a=s?{}:{primaryColor:e.color},{...e,...e.variant&&r[e.variant],themeOverride:{...n,...a}}),variant:t0[e.variant||"p1"],color:e.color&&s?e.color:"primary",ref:t,children:e.children})})});ec.A.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  gap: 0.5rem;
  z-index: 10000;
  overflow: hidden;
  padding: ${e=>e.theme.spacing.mediumSmall};
`,ec.A.section`
  display: flex;
  flex-direction: ${e=>e.$isSimple?"row":"column"};
  justify-content: ${e=>e.$isSimple?"space-between":"start"};
  align-items: ${e=>e.$isSimple?"center":"start"};
  gap: ${e=>e.theme.spacing.mediumSmall};
  width: ${e=>e.$fitMessageContent?"max-content":"auto"};
`,ec.A.div`
  display: flex;
  flex-direction: ${e=>e.$isSimple?"column":"row"};
  align-items: ${e=>e.$isSimple?"end":"start"};
  gap: ${e=>e.theme.spacing.xSmall};
`;let t5=e=>{let{text:t,maxLines:r,textAlign:i,onTruncate:n,weight:a}=e,o=(0,O.useRef)(null);return(0,O.useEffect)(()=>{let e=()=>{t&&o.current&&n&&n(o.current.scrollHeight>o.current.clientHeight)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[n,t]),(0,A.jsx)("div",{ref:o,style:{overflow:"hidden",textOverflow:r?"clip":"ellipsis",whiteSpace:r?"normal":"nowrap",display:r?"-webkit-box":"block",WebkitBoxOrient:r?"vertical":void 0,WebkitLineClamp:r||void 0,textAlign:i,fontWeight:a&&el.oL[a]||void 0},children:t})},t8=(0,O.forwardRef)((e,t)=>{let{text:r,maxLines:i=1,shouldShowTooltip:n=!0,tooltipColor:a="primary-inverse",tooltipPlacement:o="bottom center",textAlign:s="start",weight:l,isHovered:d,...u}=e,[c,p]=(0,O.useState)(!1),h=(0,O.useCallback)(e=>{p(t=>t!==e?e:t)},[]),m=()=>{if(u.variant||u.color)return(0,A.jsx)(t3,{...u,ref:t,children:(0,A.jsx)(t5,{textAlign:s,text:r,onTruncate:h,maxLines:i,weight:l})});let{variant:e,color:n,...a}=u;return(0,A.jsx)(z.E,{...a,color:"primary",ref:t,children:(0,A.jsx)(t5,{textAlign:s,text:r,onTruncate:h,maxLines:i,weight:l})})},g=void 0!==d?d&&c:n&&c;return(0,A.jsx)(A.Fragment,{children:g?(0,A.jsx)(U.m,{renderTip:r,color:a,placement:o,constrain:"scroll-parent",isShowingContent:void 0!==d?g:void 0,children:m()}):m()})}),t6=e=>{let{theme:t,contentOnly:r,forceClassic:i,launch_type:n,assignmentId:a,hideGlobalNav:o}=e;return{..."string"==typeof t?{instui_theme:t}:{},..."boolean"==typeof r?{content_only:r}:{},..."boolean"==typeof i?{force_classic:i}:{},..."string"==typeof n?{launch_type:n}:{},..."string"==typeof a?{assignment_id:a}:{},..."boolean"==typeof o?{hide_global_nav:o}:{}}};t6({theme:"career",contentOnly:!0,forceClassic:!0}),t6({theme:"career-dark",contentOnly:!0,forceClassic:!0}),(x={})[x.RESTING=0]="RESTING",x[x.HOVERED=1]="HOVERED",x[x.PRESSED=2]="PRESSED";var t7=((C={})[C.NONE=0]="NONE",C[C.DROP_SHADOW=1]="DROP_SHADOW",C[C.BOX_SHADOW=2]="BOX_SHADOW",C[C.BOX_SHADOW_SMALL=3]="BOX_SHADOW_SMALL",C);(b={})[b.LEVEL_1=1]="LEVEL_1",b[b.LEVEL_2=2]="LEVEL_2";t7.NONE,t7.DROP_SHADOW,t7.BOX_SHADOW,t7.BOX_SHADOW_SMALL;let t9={layout:{background:"primary",padding:"none",borderRadius:"medium"},card:{background:"primary",shadow:"above",padding:"large",borderRadius:"medium"},smallCard:{background:"primary",padding:"small",borderRadius:"medium"},page:{background:"primary",padding:"large",borderRadius:"medium"},ai:{background:"primary",shadow:"above",padding:"medium",borderRadius:"medium"},ai_secondary:{background:"primary",shadow:"above",padding:"medium",borderRadius:"medium"}},re=e=>{let t,{variant:r="card",ariaPressed:i,borderRadius:n,...a}=e,o=(0,el.wR)(),s="smallMedium"===n,l=s?"medium":n,d=s?{borderRadiusMedium:o.borders.radiusSmallMedium}:void 0,u=a.onClick?{cursor:"pointer",role:"button",tabIndex:a.tabIndex??0,onClick:a.onClick,...void 0!==i?{"aria-pressed":i}:{},onKeyDown:e=>{var t;("Enter"===e.key||" "===e.key)&&e.target.dispatchEvent(new Event("click",{bubbles:!0})),null==(t=a.onKeyDown)||t.call(a,e)}}:{};return(0,A.jsx)($.S,{as:"div",...t9[r],...a,...null!=l&&{borderRadius:l},themeOverride:(t=a.themeOverride,(e,i)=>{let n={backgroundPrimary:i.ui.surfaceCardPrimary,backgroundSecondary:i.ui.surfaceCardSecondary,shadowAbove:i.shadows.above};return"page"===r&&(n={...n,backgroundPrimary:i.ui.surfacePagePrimary,backgroundSecondary:i.ui.surfacePageSecondary}),"ai"===r&&(n={...n,backgroundPrimary:i.gradients.igniteAI,backgroundSecondary:i.gradients.igniteAI,color:i.ui.textSurfaceColored,shadowAbove:i.shadows.depth3}),"ai_secondary"===r&&(n={...n,backgroundPrimary:i.gradients.igniteAISecondary,backgroundSecondary:i.gradients.igniteAISecondary,color:i.ui.textSurfaceInverseSecondary,shadowAbove:i.shadows.depth3}),"layout"===r&&(n={...n,shadowAbove:void 0}),{...n,...d,..."function"==typeof t?t(e,i):t}}),...u})},rt=(e,t,r)=>{switch(t){case rp.Primary:return r?e.ui.surfaceHover:e.ui.surfaceCardPrimary;case rp.AI:return r?e.gradients.igniteAISecondaryHover:e.gradients.igniteAISecondary;case rp.WhiteOutline:return r?e.ui.surfaceOverlayWhite:"transparent"}},rr=e=>{let{iconName:t,size:r=rd.Medium,type:i,disabled:n=!1,onClick:a,children:o}=e,s=rl[r],l=(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_theme__.useThemeContext)(),d=(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Flex,{gap:"xxx-small",direction:"row",justifyItems:"center",alignItems:"center",children:[t&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{pureIcon:!0,name:t,width:s,height:s}),(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(t3,{variant:r===rd.Small?t2.P2:t2.P1,color:"inherit",children:o})]});return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.InstUISettingsProvider,{theme:{componentOverrides:{View:{focusColorInfo:l.ui.surfaceInverseSecondary}}},children:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Button,{color:"primary",focusColor:"info",size:r,themeOverride:(e=>{let{currentTheme:t,type:r}=e;return{primaryBackground:rt(t,r,!1),primaryHoverBackground:rt(t,r,!0),primaryBorderColor:r===rp.WhiteOutline?t.ui.iconSurfaceColored:t.borders.color,borderRadius:t.borders.radiusSmall,borderWidth:"1px",primaryColor:((e,t)=>{switch(t){case rp.Primary:case rp.AI:return e.ui.textTitle;case rp.WhiteOutline:return e.ui.textSurfaceColored}})(t,r),smallFontSize:t.typography.fontSizeXSmall,mediumFontSize:t.typography.fontSizeSmall,largeFontSize:t.typography.fontSizeSmall,smallPaddingHorizontal:t.spacing.space6,smallPaddingTop:t.spacing.space2||"",smallPaddingBottom:t.spacing.space2||"",mediumPaddingHorizontal:t.spacing.space8,mediumPaddingTop:t.spacing.space2||"",mediumPaddingBottom:t.spacing.space2||"",largePaddingHorizontal:t.spacing.space8,largePaddingTop:t.spacing.space6||"",largePaddingBottom:t.spacing.space6||""}})({currentTheme:l,type:i}),disabled:n,onClick:a,children:d})})},ri=e=>{let{menuId:t,fullWidth:r,width:i,zIndex:n}=e,a=(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_theme__.useThemeContext)(),o=i?i>360?"max-width: none;":`max-width: ${i}px;`:"";return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__emotion_react__.Global,{styles:(0,__WEBPACK_EXTERNAL_MODULE__emotion_react__.css)`
        span[data-position*="Menu"] {
          ${r?"width: 100% !important;":""}
        }
        span[data-position-content="${t}"] {
          ${i?`width: ${i}px;`:""}
          ${void 0!==n?`z-index: ${n} !important;`:""}
          border-radius: ${a.borders.radius12} !important;
          border: ${a.borders.widthSmall} ${a.borders.style}
            ${a.ui.containerStroke};
          box-shadow: ${a.shadows.depth3} !important;

          div[role="menu"] {
            padding: 0;
            max-height: 360px;
            overflow-y: auto;
            &::before {
              display: none;
            }
            ${o}
            button[role="menuitem"],
            span[role="menuitem"],
            a[role="menuitem"] {
              position: relative;
              background: ${a.ui.surfacePageSecondary} !important;
              display: block !important;
              width: 100%;
              padding: ${a.spacing.xSmall} ${a.spacing.medium} !important;
              text-decoration: none !important;
              color: inherit !important;
              &[data-size="small"] {
                padding: ${a.spacing.xxSmall} ${a.spacing.medium} !important;
              }
              &:hover {
                background: ${a.ui.surfaceHover} !important;
              }
              &[data-selected="true"] {
                background: ${a.ui.surfaceInversePrimary} !important;
                span {
                  color: ${a.ui.surfacePageSecondary} !important;
                }
              }
              &:nth-child(1) {
                border-radius: ${a.borders.radius12}
                  ${a.borders.radius12} 0 0 !important;
              }
              &:last-child {
                border-radius: 0 0 ${a.borders.radius12}
                  ${a.borders.radius12} !important;
              }
              &:focus:not(:hover) {
                &:before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  border: ${a.borders.widthMedium} ${a.borders.style}
                    ${a.ui.surfaceInversePrimary};
                  border-radius: ${a.borders.radiusSmall};
                  pointer-events: none;
                }
              }
              &[data-breadcrumb="true"] {
                opacity: 1 !important;
                border-bottom: ${a.borders.widthSmall}
                  ${a.borders.style} ${a.ui.surfaceDivider} !important;
                margin-bottom: 0 !important;
              }
            }
          }
        }
      `})},rn=e=>{let{trigger:t,menuItems:r,placement:i="start bottom",shouldHideOnSelect:n=!0,selectedItemId:a,show:o,initialSelectedGroupId:s,showBackButton:l=!0,showBreadcrumbs:d=!0,fullWidth:u=!1,width:c,itemFullWidth:p=!1,onToggle:h,zIndex:m}=e,g=(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_theme__.useThemeContext)(),[_,v]=(0,__WEBPACK_EXTERNAL_MODULE_react__.useState)([r]),[f,y]=(0,__WEBPACK_EXTERNAL_MODULE_react__.useState)([]),[w,x]=(0,__WEBPACK_EXTERNAL_MODULE_react__.useState)([]),C=(0,__WEBPACK_EXTERNAL_MODULE_react__.useRef)(_.length),b=(0,__WEBPACK_EXTERNAL_MODULE_react__.useRef)(null),k=_[_.length-1],S=(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_hooks__.useDeterministicId)("menu");(0,__WEBPACK_EXTERNAL_MODULE_react__.useEffect)(()=>{if(v([r]),y([]),x([]),!s)return;let e=r.find(e=>e.id===s&&e.menuItems&&e.menuItems.length>0);e&&(v([r,e.menuItems||[]]),y([e]),x([e.id]))},[r,s]),(0,__WEBPACK_EXTERNAL_MODULE_react__.useEffect)(()=>{let e=_.length,t=C.current;if(e===t)return;let r=document.querySelector(`[data-position-content="${S}"]`);if(r){if(e>t){let e=r.querySelector('button[role="menuitem"]');e&&e.focus()}else if(e<t){let e=b.current;if(e){let t=r.querySelector(`button[role="menuitem"][data-menu-item-id="${e}"]`);t&&t.focus()}b.current=null}C.current=e}},[_.length,S]);let E=e=>{let{id:t,onClick:r,disabled:i=!1,iconNameBefore:n,iconNameAfter:o,text:s,labelProps:l,inlineAdditionalInfo:d,newLineAdditionalInfos:u,size:c,analyticsTag:h,screenReaderLabel:m,checked:_,href:v,target:f}=e,y=a===t,w=m||s,x=void 0!==_?`, ${_?(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_i18n__.t)("checked"):(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_i18n__.t)("not checked")}`:"",C=(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Flex,{direction:"column",gap:"xxSmall",children:[(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Flex,{direction:"row",alignItems:"center",justifyItems:"space-between",...h,children:[(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Flex,{direction:"row",alignItems:"center",gap:p?"small":"xSmall",...p?{justifyItems:"space-between",width:"100%"}:{},children:[(y||n)&&(y?(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{name:"check",width:24,height:24,color:"primary-inverse"}):"string"==typeof n?(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{name:n,width:24,height:24,color:"primary"}):n),(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(t3,{variant:t2.BUTTON_TEXT_LARGE,color:g.ui.textBody,children:s}),o&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{name:o,width:24,height:24,color:y?"primary-inverse":"primary"})]}),d&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(t3,{variant:t2.BUTTON_TEXT_LARGE,color:g.ui.textDatapoint,children:d}),l&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(rm,{variant:ru.Status,type:rc.Grey,iconName:l.iconName,inline:!0,children:l.text})]}),u&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(t3,{variant:t2.LABEL_SMALL,color:g.ui.textDatapoint,children:u.map((e,t)=>`${e}${t===((null==u?void 0:u.length)||0)-1?"":" | "}`)})]});return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Menu.Item,{selected:y,onClick:e=>{e.stopPropagation(),null==r||r()},disabled:i,"data-selected":y,"data-size":"small"===c?"small":void 0,href:v,target:f,rel:"_blank"===f?"noopener noreferrer":void 0,children:m||void 0!==_?(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.Fragment,{children:[(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.ScreenReaderContent,{children:[w,x,y&&` ${(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_i18n__.t)("Selected")}`,i&&` ${(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_i18n__.t)("Disabled")}`]}),(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.PresentationContent,{children:C})]}):C},t)},I=e=>{let t=a===e.id;return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Menu.Item,{selected:t,onClick:t=>{t.stopPropagation(),e.menuItems&&(v(t=>[...t,e.menuItems||[]]),y(t=>[...t,e]),x(t=>[...t,e.id]))},disabled:e.disabled,"data-selected":t,"data-size":"small"===e.size?"small":void 0,"data-menu-item-id":e.id,children:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Flex,{direction:"column",gap:"xxSmall",children:[(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Flex,{direction:"row",alignItems:"center",gap:"mediumSmall",children:[(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Flex,{direction:"row",alignItems:"center",gap:"xxSmall",children:[e.iconNameBefore&&("string"==typeof e.iconNameBefore?(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{name:e.iconNameBefore,width:24,height:24,color:t?"primary-inverse":"primary"}):e.iconNameBefore),(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(t3,{variant:t2.BUTTON_TEXT_LARGE,color:g.ui.textBody,children:e.text}),(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{name:"chevron-right",width:24,height:24,color:"primary"}),e.iconNameAfter&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{name:e.iconNameAfter,width:24,height:24,color:t?"primary-inverse":"primary"})]}),e.inlineAdditionalInfo&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(t3,{variant:t2.BUTTON_TEXT_LARGE,color:g.ui.textDatapoint,children:e.inlineAdditionalInfo})]}),e.newLineAdditionalInfos&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(t3,{variant:t2.LABEL_SMALL,color:g.ui.textDatapoint,children:e.newLineAdditionalInfos.map((t,r)=>{var i;return`${t}${r===((null==(i=e.newLineAdditionalInfos)?void 0:i.length)||0)-1?"":" | "}`})})]})},e.id)};return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.Fragment,{children:[(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(ri,{menuId:S,fullWidth:u,width:c,zIndex:m}),(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Menu,{id:S,themeOverride:(e=>{var t;let{currentTheme:r}=e,{borders:i}=r;return{...{...null==(t=r.componentOverrides)?void 0:t.Menu},borderRadius:i.radius12,minWidth:"96px",maxWidth:"360px"}})({currentTheme:g}),withArrow:!1,show:o,trigger:t,placement:i,onToggle:e=>{null==h||h(e)},offsetY:(null==i?void 0:i.startsWith("top"))||(null==i?void 0:i.startsWith("bottom"))?"4px":void 0,offsetX:(null==i?void 0:i.startsWith("top"))||(null==i?void 0:i.startsWith("bottom"))?void 0:"4px",shouldHideOnSelect:n,children:(()=>{let e=[];l&&_.length>1&&e.push((0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Menu.Item,{onClick:e=>{e.stopPropagation(),_.length>1&&(b.current=w[w.length-1],v(e=>e.slice(0,-1)),y(e=>e.slice(0,-1)),x(e=>e.slice(0,-1)))},children:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Flex,{direction:"row",alignItems:"center",gap:"xxSmall",children:[(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{name:"chevron-left",width:24,height:24,color:"primary"}),(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(t3,{variant:t2.BUTTON_TEXT_LARGE,color:g.ui.textBody,children:(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_i18n__.t)("Back")})]})},"back"));let t=f[f.length-1];for(let r of(d&&t&&_.length>1&&e.push((0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Menu.Item,{disabled:!0,"data-breadcrumb":"true","aria-hidden":"true",children:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(t8,{text:t.text,variant:t2.LABEL_LARGE_BOLD,weight:"bold"})},"breadcrumb")),k))r.menuItems&&r.menuItems.length>0?e.push(I(r)):e.push(E(r));return e})()})]})},ra=e=>{let{disabled:t=!1,size:r=rd.Medium,type:i=rh.Default,options:n=[],selectedValue:a,buttonTitle:o,label:s,fullWidth:l,onSelectionChange:d,analyticsTag:u}=e,{t:c}=(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_i18n__.useTranslation)(),p=(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_theme__.useThemeContext)(),h=(0,__WEBPACK_EXTERNAL_MODULE_react__.useMemo)(()=>{var e;if(a){let e=n.find(e=>e.value===a);return(null==e?void 0:e.label)||a}return o||(null==(e=n[0])?void 0:e.label)},[o,a,n]),m=(0,__WEBPACK_EXTERNAL_MODULE_react__.useMemo)(()=>{let e=s||o||"Filter";if(a){let t=n.find(e=>e.value===a);return c("{{filterName}}: {{selectedText}} {{selected}}",{filterName:e,selectedText:(null==t?void 0:t.label)||a,selected:n.length>1?"selected":""})}return c("{{filterName}}: {{buttonText}} {{selected}}",{filterName:e,buttonText:h||"None",selected:n.length>1?"selected":""})},[s,o,h,a,n,c]),g=(0,__WEBPACK_EXTERNAL_MODULE_react__.useMemo)(()=>n.map(e=>({id:e.value,text:e.label,onClick:()=>null==d?void 0:d(e.value)})),[n,d]),_=(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Button,{color:"primary",focusColor:"info",size:r,themeOverride:(e=>{let t,r,{currentTheme:i,type:n,selected:a}=e;return{primaryBackground:((e,t,r)=>{if(r)return e.ui.surfaceInversePrimary;switch(t){case rh.Default:case rh.GrayOutline:return e.ui.surfaceCardPrimary;case rh.Ghost:return"transparent"}})(i,n,a),primaryHoverBackground:(t=i,a?t.ui.surfaceInverseSecondary:t.ui.surfaceHover),borderRadius:i.borders.radiusSmall,borderWidth:n===rh.Ghost?"0px":"1px",primaryBorderColor:((e,t)=>{switch(t){case rh.Default:return e.ui.surfaceInversePrimary;case rh.GrayOutline:return e.borders.color;case rh.Ghost:return"transparent"}})(i,n),smallFontSize:i.typography.fontSizeXSmall,mediumFontSize:i.typography.fontSizeSmall,largeFontSize:i.typography.fontSizeSmall,lineHeight:1,primaryColor:(r=i,a?r.ui.textSurfaceColored:r.ui.textTitle),smallPaddingHorizontal:i.spacing.space6,smallPaddingTop:i.spacing.space2||"",smallPaddingBottom:i.spacing.space2||"",mediumPaddingHorizontal:i.spacing.space8,mediumPaddingTop:i.spacing.space2||"",mediumPaddingBottom:i.spacing.space2||"",largePaddingHorizontal:i.spacing.space8,largePaddingTop:i.spacing.space6||"",largePaddingBottom:i.spacing.space6||""}})({currentTheme:p,type:i,selected:!!a}),disabled:t,onClick:n.length<=1?()=>{1===n.length&&(null==d||d(n[0].value))}:void 0,display:l?"block":"inline-block","aria-label":m,"aria-pressed":n.length<=1?!!a:void 0,...u,children:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Flex,{gap:"xxx-small",direction:"row",justifyItems:"center",alignItems:"center",children:[a&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{name:"check",width:null[r],height:null[r]}),(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)("span",{style:{lineHeight:null[r],whiteSpace:"nowrap"},children:[s&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsxs)("strong",{children:[s,": "]}),h]}),n.length>1&&(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{name:"chevron-down",width:null[r],height:null[r]})]})});return n.length>1?(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.InstUISettingsProvider,{theme:{componentOverrides:{View:{focusColorInfo:p.ui.surfaceInversePrimary}}},children:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(rn,{trigger:_,menuItems:g,selectedItemId:a,placement:"bottom end",shouldHideOnSelect:!0,fullWidth:l})}):(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.InstUISettingsProvider,{theme:{componentOverrides:{View:{focusColorInfo:p.ui.surfaceInversePrimary}}},children:_})},ro=ec.A.div`
  div {
    border-color: ${e=>e.$theme.borders.color};
  }
  span {
    width: ${e=>e.$fullWidth?"100%":"auto"};
    opacity: ${e=>e.$disabled?.5:1};
  }
`,rs=e=>{let{iconName:t,label:r,size:i=rd.Medium,type:n,inline:a=!1,fullWidth:o=!1,children:s,ariaHidden:l=!1,disabled:d=!1}=e,u=rl[i],c=(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_theme__.useThemeContext)();return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(ro,{$theme:c,$fullWidth:o,$disabled:d,children:(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__instructure_ui__.Pill,{statusLabel:r,renderIcon:t?(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(__WEBPACK_EXTERNAL_MODULE__canvas_horizon_icons__.Icon,{pureIcon:!0,name:t,width:u,height:u}):void 0,themeOverride:(e=>{let{currentTheme:t,size:r,type:i,inline:n,hasIcon:a}=e;return{primaryColor:((e,t,r)=>{switch(t){case rc.White:case rc.WhiteWithBorder:if(r)return e.ui.textSurfaceColored;return e.ui.textTitle;case rc.Grey:return e.ui.textTitle;case rc.Green:return e.primitives.green82;case rc.Blue:return e.primitives.blue82;case rc.Sky:return e.primitives.sky90;case rc.Honey:return e.primitives.honey90;case rc.Orange:return e.primitives.orange82;case rc.Red:return e.primitives.red82;case rc.Gum:return e.primitives.gum90;case rc.Plum:return e.primitives.plum90;case rc.Violet:return e.primitives.violet90;case rc.Institution:return e.ui.surfaceInstitution;case rc.TranslucentWhite:return e.primitives.white;case rc.AI:return e.ui.textBody;case rc.Sea:return e.primitives.sea70}})(t,i,n),background:((e,t,r)=>{if(r)return"transparent";switch(t){case rc.White:case rc.WhiteWithBorder:return e.ui.surfacePageSecondary;case rc.Grey:return e.primitives.grey11;case rc.Green:return e.primitives.green12;case rc.Blue:return e.primitives.blue12;case rc.Sky:return e.primitives.sky12;case rc.Honey:return e.primitives.honey12;case rc.Orange:return e.primitives.orange12;case rc.Red:return e.primitives.red12;case rc.Gum:return e.primitives.gum12;case rc.Plum:return e.primitives.plum12;case rc.Violet:return e.primitives.violet12;case rc.Institution:return(0,__WEBPACK_EXTERNAL_MODULE__canvas_horizon_theme__.createTransparentColor)(e.ui.surfaceInstitution,.1);case rc.TranslucentWhite:return"rgba(255, 255, 255, 0.08)";case rc.AI:return e.gradients.igniteAISecondary;case rc.Sea:return e.primitives.sea12}})(t,i,n),borderRadius:t.borders.radiusSmall,maxWidth:"100rem",borderWidth:i===rc.WhiteWithBorder?"1px":"0px",padding:((e,t,r,i)=>{if(i)return"0";if(!r)return`${e.spacing.space2} ${e.spacing.space12}`;switch(t){case rd.Large:return`${e.spacing.space6} ${e.spacing.space8}`;case rd.Medium:return`${e.spacing.space2} ${e.spacing.space8}`;case rd.Small:return`${e.spacing.space2} ${e.spacing.space6}`}})(t,r,a,n),textFontSize:((e,t)=>{switch(t){case rd.Large:case rd.Medium:return e.typography.fontSizeSmall;case rd.Small:return e.typography.fontSizeXSmall}})(t,r)}})({currentTheme:c,size:i,type:n,inline:a,hasIcon:!!t}),"aria-hidden":l,children:s})})},rl=null;var rd=null,ru=null,rc=((k={}).White="white",k.WhiteWithBorder="whiteWithBorder",k.Grey="grey",k.Green="green",k.Blue="blue",k.Sky="sky",k.Honey="honey",k.Orange="orange",k.Red="red",k.Gum="gum",k.Plum="plum",k.Violet="violet",k.Institution="institution",k.TranslucentWhite="translucentWhite",k.AI="ai",k.Sea="sea",k),rp=null,rh=null;let rm=e=>{let{size:t="medium",variant:r="status",children:i}=e;switch(r){case"status":return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(rs,{size:t,iconName:e.iconName,label:e.label,type:e.type,inline:e.inline,fullWidth:e.fullWidth,ariaHidden:e.ariaHidden,disabled:e.disabled,children:i});case"action":return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(rr,{size:t,iconName:e.iconName,type:e.type,disabled:e.disabled,onClick:e.onClick,children:i});case"filter":return(0,__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)(ra,{size:t,label:e.label,type:e.type,disabled:e.disabled,onSelectionChange:e.onSelectionChange,selectedValue:e.selectedValue,options:e.options,buttonTitle:e.buttonTitle,fullWidth:e.fullWidth,analyticsTag:e.analyticsTag});default:return null}};(0,ek.emToPxNumber)(el.FS.ui.heightMedium),ec.A.ul`
  display: grid;
  grid-template-columns: ${e=>{let{$columns:t}=e;return t?`repeat(${t}, 1fr)`:"repeat(auto-fill, minmax(clamp(15rem, 20%, 22rem), 1fr))"}};
  justify-content: center;
  gap: ${e=>e.theme.spacing.mediumSmall};
  list-style: none;
  padding: 0;
  margin: 0;

  > li {
    display: flex;
    > * {
      flex: 1;
    }
  }
`,ec.A.div`
  > a {
    height: 100%;
  }
`,rc.Blue,rc.Violet,rc.Sky,rc.Green,rc.Plum,rc.Orange,rc.Honey,rc.Sea;var rg=((S={}).H1="h1",S.H2="h2",S.H3="h3",S.H4="h4",S["S-H1"]="s-h1",S["S-H2"]="s-h2",S["S-H3"]="s-h3",S["S-H4"]="s-h4",S);let r_=e=>{let{variant:t,...r}=e,i=t.startsWith("s-"),n=t.replace("s-","");return(0,A.jsx)(K.D,{...r,level:n,themeOverride:rv({isRegularHeading:i,level:n})})},rv=e=>{let{isRegularHeading:t,level:r}=e;return(e,i)=>{var n;let a={...null==(n=i.componentOverrides)?void 0:n.Heading},o=`${r}FontWeight`;return t?{...a,[o]:i.typography.fontWeightNormal}:a}},rf=e=>{var t,r;let i,n,a,o,{id:s,open:l,onClose:d,content:u,children:c,headerIcon:p,headerText:h,showHeader:m=!0,showHeaderBorder:g=!0,buttons:_,buttonGroupLabel:v,shouldCloseOnDocumentClick:f,themeOverride:y,size:w="small",label:x,isFullScreen:C=!1,closeButtonLabel:b,bodyPadding:k="medium",analyticsFactory:S,initialFocusRef:E,returnFocusRef:I,returnFocusToDataId:L,focusTrigger:R,onOpen:N,onExited:$}=e,{t:j}=(0,M.useTranslation)(),Z=(0,el.wR)(),[B,P]=(0,O.useState)(null),D=x||("string"==typeof h?h:j("Modal")),U=b||j("Close Modal"),H=s??s??D,{modalRef:z,handleOpen:K,moveFocusIntoModal:V,handleClose:X}=(t={initialFocusRef:E,returnFocusRef:I,returnFocusToDataId:L},i=(0,O.useRef)(null),n=(0,O.useRef)(null),a=(0,O.useCallback)(()=>{requestAnimationFrame(()=>{var e;if(null==t||null==(e=t.initialFocusRef)?void 0:e.current)t.initialFocusRef.current.focus();else if(i.current){let e=Array.from(i.current.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(ei);e.length>0&&e[0].focus()}})},[null==t?void 0:t.initialFocusRef]),{modalRef:i,handleOpen:(0,O.useCallback)(()=>{var e;let r=document.activeElement;r instanceof HTMLElement&&(n.current=(null==t||null==(e=t.returnFocusRef)?void 0:e.current)||r),a()},[null==t?void 0:t.returnFocusRef,a]),moveFocusIntoModal:a,handleClose:(0,O.useCallback)(()=>{requestAnimationFrame(()=>{let e=((null==t?void 0:t.returnFocusToDataId)?document.querySelector(`[data-focus-id="${t.returnFocusToDataId}"]`):null)||n.current;if(e){if(document.contains(e)&&!e.hasAttribute("disabled")&&"true"!==e.getAttribute("aria-disabled")){let t=window.getComputedStyle(e);"none"!==t.display&&"hidden"!==t.visibility&&e.focus({preventScroll:!0})}n.current=null}})},[null==t?void 0:t.returnFocusToDataId])});(0,O.useEffect)(()=>{if(!B)return;let e=()=>{B.scrollHeight>B.clientHeight?0!==B.tabIndex&&(B.tabIndex=0):B.hasAttribute("tabindex")&&B.removeAttribute("tabindex")};e();let t=new MutationObserver(e);return t.observe(B,{attributes:!0,attributeFilter:["tabindex"]}),()=>t.disconnect()},[B]),(0,O.useEffect)(()=>{l&&(K(),null==N||N())},[l,K,N]);let F=(0,O.useRef)(R);return(0,O.useEffect)(()=>{F.current===R||(F.current=R,l&&V())},[R,l,V]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(ed.mL,{styles:(0,ed.AH)`
    span[id="${H}"] {
        border-radius: ${Z.borders.radiusMedium}!important
    }
`}),(0,A.jsxs)(W.aF,{id:H,label:D,size:C?"fullscreen":w,open:l,themeOverride:{background:Z.ui.surfacePageSecondary,...y},shouldCloseOnDocumentClick:f,onDismiss:()=>{d()},onExited:()=>{X(),null==$||$()},children:[m&&(0,A.jsx)(W.aF.Header,{themeOverride:{background:(null==y?void 0:y.background)?"transparent":Z.ui.surfacePageSecondary,borderColor:g?Z.ui.lineStroke:"transparent"},children:(0,A.jsxs)(T.so,{direction:"row",alignItems:"center",justifyItems:p||h?"space-between":"end",gap:"medium",children:[((e,t,r)=>t||r?(0,A.jsxs)(T.so,{direction:"row",alignItems:"center",justifyItems:"space-between",children:[t&&(0,A.jsx)(T.so.Item,{padding:"0 small 0 0",children:(0,A.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:e.typography.fontSizeXLarge,height:e.typography.fontSizeXLarge,padding:e.spacing.xxxSmall,backgroundColor:t.backgroundColor||"transparent",borderRadius:t.isRound?"50%":e.borders.radiusSmall},children:(0,A.jsx)(es.I,{width:t.width||20,height:t.height||20,color:t.color?"inherit":t.backgroundColor?"primary-inverse":"primary",customColor:t.color,name:t.name,pureIcon:t.pureIcon})})}),r&&(0,A.jsx)(T.so.Item,{children:"string"==typeof r?(0,A.jsx)(r_,{variant:rg.H2,children:r}):r})]}):null)(Z,p,h),(0,A.jsx)(T.so.Item,{children:(0,A.jsx)(t1,{screenReaderLabel:U,clxIconName:"x",level:tD.Primary,variant:tU.Ghost,onClick:d,analyticsTag:null==S?void 0:S.create("close-button")})})]})}),(0,A.jsx)(W.aF.Body,{padding:k,elementRef:e=>{P(e),z.current=(null==e?void 0:e.closest('[role="dialog"]'))??null},children:u??c}),(null==_?void 0:_.length)&&(0,A.jsx)(W.aF.Footer,{themeOverride:{padding:`${Z.spacing.medium}`,background:(null==y?void 0:y.background)?"transparent":Z.ui.surfacePageSecondary},children:(r=v||("string"==typeof h?h:void 0),o=_.length>1&&r,(0,A.jsx)(T.so,{gap:"x-small",justifyItems:"end",wrap:"wrap",width:"100%",role:o?"group":void 0,"aria-label":o?r:void 0,children:_.map(e=>(0,A.jsx)(T.so.Item,{children:(0,A.jsx)(tY,{...e})},e.id))}))})]})]})},ry=new Set(["alignItems","alignContent","justifyContent","flexDirection","flexGrow","flexShrink","flexWrap","gap"]);(0,ec.A)($.S,{shouldForwardProp:e=>!ry.has(e)})`
  display: flex;
  ${e=>{let{alignItems:t}=e;return t&&`align-items: ${t};`}}
  ${e=>{let{alignContent:t}=e;return t&&`align-content: ${t};`}}
  ${e=>{let{justifyContent:t}=e;return t&&`justify-content: ${t};`}}
  ${e=>{let{flexDirection:t}=e;return t&&`flex-direction: ${t};`}}
  ${e=>{let{flexGrow:t}=e;return null!=t&&`flex-grow: ${t};`}}
  ${e=>{let{flexShrink:t}=e;return null!=t&&`flex-shrink: ${t};`}}
  ${e=>{let{flexWrap:t}=e;return t&&`flex-wrap: ${t};`}}
  ${e=>{let{gap:t}=e;return null!=t&&`gap: ${t};`}}
`,ec.A.div`
    position: absolute;
    top: 0;
    background: ${e=>{let{theme:t,$isAIPanel:r,$isSecondaryAIPanel:i}=e;return r?t.gradients.igniteAI:i?t.gradients.igniteAISecondary:t.ui.surfacePageSecondary}};
    height: 100%;
    width: 100%;
    z-index: 110;
    overflow: auto;
`,ec.A.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  outline-color: ${e=>{var t,r;let{theme:i}=e;return(null==(r=i.componentOverrides)||null==(t=r.View)?void 0:t.focusColorInfo)??i.ui.surfaceAttention}};

  color: ${e=>{let{$isActive:t,theme:r}=e;return t?r.primitives.white:r.primitives.grey100}};
`,ec.A.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  outline-color: ${e=>{var t,r;let{theme:i}=e;return(null==(r=i.componentOverrides)||null==(t=r.View)?void 0:t.focusColorInfo)??i.ui.surfaceAttention}};

  color: ${e=>{let{$isActive:t,theme:r}=e;return t?r.primitives.white:r.primitives.grey100}};
`,ec.A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>{let{theme:t,$isCollapsed:r}=e;return r?t.spacing.space0:t.spacing.small}};
  background-color: ${e=>{let{theme:t,$isActive:r}=e;return r?t.ui.surfaceInversePrimary:"transparent"}};
  border-radius: ${e=>{let{theme:t,$isActive:r}=e;return r?t.borders.radiusSmallMedium:"0"}};
`,ec.A.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${e=>{let{theme:t}=e;return t.spacing.xSmall}};
  cursor: pointer;
  &:not(:last-of-type) {
    border-bottom: 1px solid
      ${e=>{let{theme:t,$isMobileView:r}=e;return r?t.borders.color:"transparent"}};
  }
  a:focus,
  a:hover {
    text-decoration: none;
  }
  a:focus-visible {
    outline-color: ${e=>{var t,r;let{theme:i}=e;return(null==(r=i.componentOverrides)||null==(t=r.View)?void 0:t.focusColorInfo)??i.ui.surfaceAttention}};
  }
`,(0,ec.A)(L.k2)`
  text-decoration: none;
  cursor: pointer;
`;let rw=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.71 271.8">
  <defs>
    <style>
      .cls-1 {
        isolation: isolate;
      }

      .cls-2 {
        mix-blend-mode: color;
      }

      .cls-3 {
        fill: #e60305;
      }
    </style>
  </defs>
  <g class="cls-1">
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <g id="Layer_2-2" data-name="Layer 2" class="cls-2">
          <g id="Layer_1-2" data-name="Layer 1-2">
            <path class="cls-3" d="M39.42,135.61c-.02-19.83-14.81-36.54-34.49-38.97-6.58,25.56-6.58,52.37,0,77.92,19.68-2.42,34.47-19.12,34.49-38.95"/>
            <path class="cls-3" d="M62.24,123.28c-6.81,0-12.33,5.52-12.33,12.33s5.52,12.33,12.33,12.33,12.33-5.52,12.33-12.33h0c0-6.81-5.52-12.33-12.33-12.33h0"/>
            <path class="cls-3" d="M232.29,135.61c.01,19.83,14.81,36.53,34.49,38.95,6.58-25.56,6.58-52.37,0-77.92-19.68,2.44-34.46,19.14-34.49,38.97"/>
            <path class="cls-3" d="M209.39,123.28c-6.81-.01-12.34,5.5-12.35,12.31-.01,6.81,5.5,12.34,12.31,12.35,6.81.01,12.34-5.5,12.35-12.31,0,0,0-.01,0-.02,0-6.8-5.51-12.32-12.31-12.33"/>
            <path class="cls-3" d="M135.59,232.4c-19.82.02-36.52,14.8-38.95,34.46,25.56,6.58,52.37,6.58,77.92,0-2.43-19.68-19.14-34.46-38.97-34.46"/>
            <path class="cls-3" d="M135.61,197.23c-6.81-.01-12.34,5.5-12.35,12.31-.01,6.81,5.5,12.34,12.31,12.35,6.81.01,12.34-5.5,12.35-12.31,0,0,0-.01,0-.02,0-6.8-5.51-12.32-12.31-12.33"/>
            <path class="cls-3" d="M135.61,39.4c19.82,0,36.53-14.79,38.95-34.46-25.56-6.58-52.37-6.58-77.92,0,2.44,19.67,19.15,34.45,38.97,34.46"/>
            <path class="cls-3" d="M135.61,49.93c-6.81-.01-12.34,5.5-12.35,12.31-.01,6.81,5.5,12.34,12.31,12.35,6.81.01,12.34-5.5,12.35-12.31,0-.01,0-.03,0-.04,0-6.8-5.51-12.31-12.31-12.31h0"/>
            <path class="cls-3" d="M203.92,203.92c-13.99,14.02-15.36,36.26-3.2,51.9,22.73-13.41,41.68-32.37,55.08-55.1-15.63-12.16-37.86-10.78-51.88,3.2"/>
            <path class="cls-3" d="M179.05,179.05c-4.81,4.81-4.81,12.62,0,17.43,4.81,4.81,12.62,4.81,17.43,0,4.81-4.81,4.81-12.62,0-17.43h0c-4.82-4.8-12.62-4.8-17.43,0"/>
            <path class="cls-3" d="M67.5,67.5c14.01-14,15.39-36.26,3.2-51.88-22.73,13.4-41.68,32.35-55.08,55.08,15.62,12.18,37.87,10.81,51.88-3.2"/>
            <path class="cls-3" d="M74.93,74.95c-4.81,4.81-4.81,12.62,0,17.43,4.81,4.81,12.62,4.81,17.43,0,4.81-4.81,4.81-12.62,0-17.43h0c-4.82-4.8-12.62-4.8-17.43,0"/>
            <path class="cls-3" d="M203.83,67.37c14.03,13.98,36.28,15.33,51.9,3.14-13.41-22.71-32.37-41.64-55.1-55.02-12.16,15.63-10.78,37.86,3.2,51.88"/>
            <path class="cls-3" d="M196.4,92.24c4.8-4.81,4.8-12.6,0-17.4-4.81-4.8-12.6-4.8-17.4,0-4.8,4.81-4.8,12.59,0,17.4,4.8,4.81,12.6,4.81,17.4,0,0,0,0,0,0,0"/>
            <path class="cls-3" d="M67.43,203.77c-14.01-13.99-36.25-15.36-51.88-3.2,13.4,22.73,32.36,41.69,55.08,55.1,12.18-15.63,10.8-37.88-3.2-51.9"/>
            <path class="cls-3" d="M74.78,178.9c-4.81,4.81-4.81,12.62,0,17.43,4.81,4.81,12.62,4.81,17.43,0,4.81-4.81,4.81-12.62,0-17.43h0c-4.82-4.79-12.61-4.79-17.43,0"/>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>`,rx=`<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_185_14758)">
    <path d="M32 0.5H0V32.5H32V0.5Z" fill="#273540"/>
    <path d="M18.1147 22.8196C18.1147 21.5916 19.1091 20.5972 20.3371 20.5972C21.5651 20.5972 22.5595 21.5916 22.5595 22.8196C22.5595 24.0476 21.5651 25.0419 20.3371 25.0419C19.1091 25.0419 18.1147 24.0476 18.1147 22.8196Z" fill="white"/>
    <path d="M15.2513 7.95801H11.5493V25.0422H15.2513V7.95801Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_185_14758">
      <rect y="0.5" width="32" height="32" rx="4" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 638.7 134.47">
  <defs>
    <style>
      .cls-1 {
        isolation: isolate;
      }

      .cls-2 {
        fill: #0b1722;
      }

      .cls-3 {
        fill: #e60305;
      }
    </style>
  </defs>
  <g id="Layer_2-2" data-name="Layer 2">
    <g>
      <g id="Layer_2-2" data-name="Layer 2-2">
        <g id="Layer_1-2" data-name="Layer 1-2">
          <path class="cls-3" d="M18.79,64.67c0-9.46-7.05-17.43-16.43-18.58-3.15,12.18-3.15,24.96,0,37.16,9.38-1.15,16.43-9.12,16.43-18.58"/>
          <path class="cls-3" d="M29.66,58.79c-3.26,0-5.88,2.63-5.88,5.88s2.63,5.88,5.88,5.88,5.88-2.63,5.88-5.88h0c0-3.26-2.63-5.88-5.88-5.88h0"/>
          <path class="cls-3" d="M110.75,64.67c0,9.46,7.05,17.43,16.43,18.58,3.15-12.18,3.15-24.96,0-37.16-9.38,1.15-16.43,9.14-16.43,18.58"/>
          <path class="cls-3" d="M99.81,58.79c-3.26,0-5.88,2.63-5.88,5.86s2.63,5.88,5.86,5.88,5.88-2.63,5.88-5.86h0c0-3.23-2.63-5.88-5.86-5.88"/>
          <path class="cls-3" d="M64.63,110.81c-9.44,0-17.41,7.05-18.58,16.43,12.18,3.15,24.96,3.15,37.16,0-1.15-9.38-9.14-16.43-18.58-16.43"/>
          <path class="cls-3" d="M64.65,94.04c-3.26,0-5.88,2.63-5.88,5.86s2.63,5.88,5.86,5.88,5.88-2.63,5.88-5.86h0c0-3.23-2.63-5.88-5.86-5.88"/>
          <path class="cls-3" d="M64.65,18.79c9.44,0,17.41-7.05,18.58-16.43-12.18-3.15-24.96-3.15-37.16,0,1.17,9.38,9.14,16.43,18.58,16.43"/>
          <path class="cls-3" d="M64.65,23.83c-3.26,0-5.88,2.63-5.88,5.86s2.63,5.88,5.86,5.88,5.88-2.63,5.88-5.86h0c0-3.23-2.63-5.86-5.86-5.86h0"/>
          <path class="cls-3" d="M97.21,97.23c-6.66,6.68-7.31,17.3-1.52,24.74,10.83-6.4,19.88-15.43,26.26-26.26-7.44-5.79-18.06-5.14-24.74,1.52"/>
          <path class="cls-3" d="M85.35,85.38c-2.3,2.3-2.3,6.01,0,8.31,2.3,2.3,6.01,2.3,8.31,0,2.3-2.3,2.3-6.01,0-8.31h0c-2.3-2.28-6.01-2.28-8.31,0"/>
          <path class="cls-3" d="M32.18,32.2c6.68-6.68,7.34-17.28,1.52-24.74-10.83,6.38-19.88,15.43-26.26,26.26,7.44,5.82,18.06,5.14,24.74-1.52"/>
          <path class="cls-3" d="M35.72,35.74c-2.3,2.3-2.3,6.01,0,8.31s6.01,2.3,8.31,0c2.3-2.3,2.3-6.01,0-8.31h0c-2.3-2.28-6.01-2.28-8.31,0"/>
          <path class="cls-3" d="M97.16,32.14c6.68,6.66,17.3,7.31,24.74,1.5-6.4-10.83-15.43-19.86-26.26-26.24-5.79,7.44-5.14,18.06,1.52,24.74"/>
          <path class="cls-3" d="M93.62,43.99c2.3-2.3,2.28-6.01,0-8.29-2.3-2.3-6.01-2.28-8.29,0-2.28,2.3-2.28,6.01,0,8.29,2.3,2.3,6.01,2.3,8.29,0h0"/>
          <path class="cls-3" d="M32.14,97.16c-6.68-6.66-17.28-7.31-24.74-1.52,6.38,10.83,15.43,19.88,26.26,26.26,5.79-7.44,5.14-18.06-1.52-24.74"/>
          <path class="cls-3" d="M35.65,85.31c-2.3,2.3-2.3,6.01,0,8.31,2.3,2.3,6.01,2.3,8.31,0s2.3-6.01,0-8.31h0c-2.3-2.28-6.01-2.28-8.31,0"/>
        </g>
      </g>
      <g>
        <path class="cls-2" d="M182.91,100.03c5.11,0,8.1,3.02,8.1,7.27,0,2.89-1.65,4.93-4.02,5.78,3.07.75,4.84,3.47,4.84,6.47,0,4.24-3.37,7.31-8.28,7.31h-9.4v-26.85h8.74l.02.02h0ZM182.49,111.77c3,0,4.77-1.77,4.77-4.27s-1.86-4.2-4.93-4.2h-4.47v8.49h4.61l.02-.02h0ZM183.02,123.62c3,0,5.04-1.65,5.04-4.29s-1.63-4.38-4.88-4.38h-5.32v8.67h5.16Z"/>
        <path class="cls-2" d="M196.5,134.47l4.54-9.63-7.84-16.21h4.08l5.68,12.58,5.45-12.58h3.81l-11.85,25.84h-3.9.02Z"/>
        <path class="cls-2" d="M223.5,126.87v-26.85h3.79v26.85h-3.79Z"/>
        <path class="cls-2" d="M236.17,126.87h-3.56v-18.21h3.47v2.61c1.31-2.27,3.47-3.14,5.61-3.14,4.36,0,6.51,3.14,6.51,7.2v11.56h-3.56v-10.94c0-2.54-1.07-4.59-4.24-4.59-2.79,0-4.24,2.22-4.24,5v10.53l.02-.02h-.01Z"/>
        <path class="cls-2" d="M254.42,121.01c.23,1.88,1.65,3.41,4.24,3.41,2,0,3.11-1.14,3.11-2.43,0-1.14-.84-2-2.34-2.34l-3.11-.68c-2.84-.62-4.54-2.54-4.54-5.11,0-3.11,2.91-5.77,6.47-5.77,5,0,6.56,3.25,6.92,4.88l-3.14,1.17c-.16-.96-.91-3.02-3.79-3.02-1.81,0-3.02,1.17-3.02,2.43,0,1.1.68,1.88,2.09,2.2l2.95.64c3.3.73,5.04,2.73,5.04,5.41s-2.16,5.66-6.67,5.66c-5,0-7.13-3.23-7.43-5.32l3.23-1.14h-.02Z"/>
        <path class="cls-2" d="M273.7,108.67h3.92v3.23h-3.92v9.47c0,1.65.68,2.5,2.54,2.5.46,0,1.1-.07,1.4-.16v3.02c-.3.11-1.2.34-2.43.34-3.11,0-5.09-1.88-5.09-5.2v-9.99h-3.47v-3.23h.98c1.97,0,2.79-1.2,2.79-2.79v-2.95h3.25v5.77h.02-.01Z"/>
        <path class="cls-2" d="M290.83,112.25c-.52-.07-1.07-.11-1.54-.11-3,0-5,1.59-5,5.61v9.13h-3.56v-18.21h3.47v3.18c1.31-2.79,3.58-3.47,5.45-3.47.5,0,.98.07,1.17.11v3.79-.02h0Z"/>
        <path class="cls-2" d="M299.97,127.44c-4.24,0-6.81-3.18-6.81-7.31v-11.46h3.56v10.94c0,2.5,1.14,4.7,4.13,4.7s4.31-1.88,4.31-4.65v-10.99h3.56v14.85c0,1.43.11,2.73.18,3.37h-3.41c-.07-.41-.16-1.43-.16-2.2-.98,1.88-3.25,2.77-5.38,2.77h.02Z"/>
        <path class="cls-2" d="M315.79,117.75c0,4.15,2.61,6.4,5.57,6.4,3.41,0,4.65-2.32,5.09-3.74l3.14,1.36c-.87,2.61-3.47,5.68-8.21,5.68-5.29,0-9.19-4.15-9.19-9.7s3.97-9.65,9.17-9.65c4.84,0,7.36,3.02,8.1,5.78l-3.23,1.36c-.46-1.77-1.77-3.86-4.88-3.86-2.89,0-5.52,2.11-5.52,6.35h-.02Z"/>
        <path class="cls-2" d="M337.58,108.67h3.92v3.23h-3.92v9.47c0,1.65.68,2.5,2.54,2.5.46,0,1.1-.07,1.4-.16v3.02c-.3.11-1.2.34-2.43.34-3.11,0-5.09-1.88-5.09-5.2v-9.99h-3.47v-3.23h.98c1.97,0,2.79-1.2,2.79-2.79v-2.95h3.25v5.77h.02-.01Z"/>
        <path class="cls-2" d="M351.24,127.44c-4.24,0-6.81-3.18-6.81-7.31v-11.46h3.56v10.94c0,2.5,1.14,4.7,4.13,4.7s4.31-1.88,4.31-4.65v-10.99h3.56v14.85c0,1.43.11,2.73.18,3.37h-3.41c-.07-.41-.16-1.43-.16-2.2-.98,1.88-3.25,2.77-5.38,2.77h.02Z"/>
        <path class="cls-2" d="M374.77,112.25c-.52-.07-1.07-.11-1.54-.11-3,0-5,1.59-5,5.61v9.13h-3.56v-18.21h3.47v3.18c1.31-2.79,3.58-3.47,5.45-3.47.5,0,.98.07,1.17.11v3.79-.02h0Z"/>
        <path class="cls-2" d="M393.04,121.69c-1.03,3.23-3.92,5.77-8.17,5.77-4.88,0-9.17-3.56-9.17-9.74,0-5.73,4.13-9.63,8.72-9.63,5.61,0,8.74,3.86,8.74,9.54,0,.46-.05.91-.07,1.14h-13.71c.07,3.25,2.43,5.52,5.5,5.52s4.43-1.63,5.11-3.67l3.07,1.07v.02-.02ZM389.46,115.89c-.07-2.61-1.77-4.65-5-4.65-3,0-4.81,2.32-4.97,4.65h9.97Z"/>
      </g>
      <g class="cls-1">
        <path class="cls-2" d="M168.39,50.35c0-16.88,12.64-27.03,26.08-27.03s20.97,7.74,23.31,16.8l-8.26,2.78c-1.53-6.28-6.36-11.32-15.05-11.32s-17.1,6.21-17.1,18.78,8.33,18.56,17.17,18.56,13.66-5.55,15.42-11.4l8.04,2.63c-2.34,8.77-10.23,17.17-23.45,17.17-13.95,0-26.15-10.08-26.15-26.96Z"/>
        <path class="cls-2" d="M237.29,77.16c-10.45,0-17.17-8.26-17.17-18.92s6.79-18.63,17.02-18.63c6.28,0,9.5,3.29,10.45,5.7v-4.68h8.26v29.08c0,2.92.29,5.77.37,6.5h-8.11c-.15-.8-.37-2.7-.37-5.11-1.61,3.43-5.33,6.06-10.45,6.06ZM238.24,69.86c5.55,0,9.42-4.75,9.42-11.62s-3.8-11.25-9.42-11.25-9.64,4.38-9.64,11.25,3.73,11.62,9.64,11.62Z"/>
        <path class="cls-2" d="M271.92,76.21h-8.48v-35.58h8.26v4.75c2.34-4.09,6.58-5.77,10.52-5.77,8.69,0,12.86,6.28,12.86,14.1v22.5h-8.47v-21.04c0-4.38-1.97-7.89-7.31-7.89-4.82,0-7.38,3.73-7.38,8.4v20.53Z"/>
        <path class="cls-2" d="M320.36,76.21h-8.47l-14.47-35.58h9.35l9.42,25.42,9.21-25.42h8.91l-13.95,35.58Z"/>
        <path class="cls-2" d="M351.78,77.16c-10.45,0-17.17-8.26-17.17-18.92s6.79-18.63,17.02-18.63c6.28,0,9.5,3.29,10.45,5.7v-4.68h8.26v29.08c0,2.92.29,5.77.37,6.5h-8.11c-.15-.8-.37-2.7-.37-5.11-1.61,3.43-5.33,6.06-10.45,6.06ZM352.73,69.86c5.55,0,9.42-4.75,9.42-11.62s-3.8-11.25-9.42-11.25-9.64,4.38-9.64,11.25,3.73,11.62,9.64,11.62Z"/>
        <path class="cls-2" d="M382.83,64.52c.29,3.21,2.7,6.06,7.23,6.06,3.51,0,5.33-1.9,5.33-4.09,0-1.9-1.32-3.36-4.17-3.95l-5.26-1.17c-6.28-1.39-9.57-5.48-9.57-10.37,0-6.21,5.7-11.47,13.08-11.47,9.94,0,13.15,6.43,13.73,9.94l-7.16,2.05c-.29-2.05-1.83-5.33-6.58-5.33-3,0-5.11,1.9-5.11,4.09,0,1.9,1.39,3.29,3.58,3.73l5.41,1.1c6.72,1.46,10.23,5.55,10.23,10.81s-4.38,11.4-13.44,11.4c-10.3,0-14.25-6.72-14.68-10.74l7.38-2.05Z"/>
        <path class="cls-2" d="M423.16,50.35c0-16.88,12.64-27.03,26.08-27.03s20.97,7.74,23.31,16.8l-8.26,2.78c-1.53-6.28-6.36-11.32-15.05-11.32s-17.1,6.21-17.1,18.78,8.33,18.56,17.17,18.56,13.66-5.55,15.42-11.4l8.04,2.63c-2.34,8.77-10.23,17.17-23.45,17.17-13.96,0-26.16-10.08-26.16-26.96Z"/>
        <path class="cls-2" d="M492.06,77.16c-10.45,0-17.17-8.26-17.17-18.92s6.79-18.63,17.02-18.63c6.28,0,9.5,3.29,10.45,5.7v-4.68h8.26v29.08c0,2.92.29,5.77.37,6.5h-8.11c-.15-.8-.37-2.7-.37-5.11-1.61,3.43-5.33,6.06-10.45,6.06ZM493.01,69.86c5.55,0,9.42-4.75,9.42-11.62s-3.8-11.25-9.42-11.25-9.64,4.38-9.64,11.25,3.73,11.62,9.64,11.62Z"/>
        <path class="cls-2" d="M539.04,49.04c-.95-.15-1.9-.22-2.78-.22-6.58,0-9.57,3.8-9.57,10.45v16.95h-8.48v-35.58h8.26v5.7c1.68-3.87,5.63-6.14,10.3-6.14,1.02,0,1.9.15,2.26.22v8.62Z"/>
        <path class="cls-2" d="M574.33,66.06c-1.9,6.21-7.52,11.25-16.07,11.25-9.64,0-18.19-7.01-18.19-19.07,0-11.25,8.33-18.7,17.32-18.7,10.96,0,17.39,7.23,17.39,18.48,0,1.39-.15,2.56-.22,2.7h-26.01c.22,5.41,4.46,9.28,9.72,9.28s7.74-2.7,8.91-6.21l7.16,2.26ZM566.22,54.51c-.15-4.16-2.92-7.89-8.77-7.89-5.33,0-8.4,4.09-8.69,7.89h17.46Z"/>
        <path class="cls-2" d="M612.1,66.06c-1.9,6.21-7.52,11.25-16.07,11.25-9.64,0-18.19-7.01-18.19-19.07,0-11.25,8.33-18.7,17.32-18.7,10.96,0,17.39,7.23,17.39,18.48,0,1.39-.15,2.56-.22,2.7h-26.01c.22,5.41,4.46,9.28,9.72,9.28s7.74-2.7,8.91-6.21l7.16,2.26ZM603.99,54.51c-.15-4.16-2.92-7.89-8.77-7.89-5.33,0-8.4,4.09-8.69,7.89h17.46Z"/>
        <path class="cls-2" d="M638.7,49.04c-.95-.15-1.9-.22-2.78-.22-6.58,0-9.57,3.8-9.57,10.45v16.95h-8.48v-35.58h8.26v5.7c1.68-3.87,5.63-6.14,10.3-6.14,1.02,0,1.9.15,2.26.22v8.62Z"/>
      </g>
    </g>
  </g>
</svg>`),encodeURIComponent(rw),encodeURIComponent(rx);let rC=ec.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img#${"inst-img"} {
    max-height: 5.5rem;
  }
`;(0,ec.A)(rC)`
  cursor: pointer;
`;let rb=ec.A.div`
  padding: ${e=>{let{theme:t}=e;return t.spacing.mediumSmall}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.fontSizeXSmall}};
  background: ${e=>{let{theme:t}=e;return t.ui.surfacePageTertiary}};
  overflow: hidden;
  align-self: self-start;
`;(0,ec.A)(rb)`
  cursor: pointer;
`,ec.A.a`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${e=>{let{theme:t}=e;return t.ui.surfacePagePrimary}};
  background: ${e=>{let{theme:t}=e;return t.ui.surfaceInversePrimary}};
  padding: ${e=>{let{theme:t}=e;return`${t.spacing.smallMedium} ${t.spacing.mediumSmall}`}};
  text-decoration: none;
  border-radius: ${e=>{let{theme:t}=e;return t.borders.radiusXXLarge}};
  z-index: 1000;
  font-weight: ${e=>{let{theme:t}=e;return t.typography.fontWeightBold}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.ui.surfaceInversePrimary}};
  font-family: ${e=>{let{theme:t}=e;return t.typography.fontFamily}};
  font-size: ${e=>{let{theme:t}=e;return t.typography.fontSizeSmall}};
  line-height: ${e=>{let{theme:t}=e;return t.typography.lineHeightCondensed}};

  /* Hide the link visually but keep it accessible to screen readers */
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  overflow: hidden;
  white-space: nowrap;

  &:focus {
    /* Show the link when focused */
    clip: auto;
    clip-path: none;
    height: auto;
    width: auto;
    overflow: visible;
    white-space: normal;
    outline: 2px solid ${e=>{let{theme:t}=e;return t.ui.surfaceInversePrimary}};
    outline-offset: 2px;
    color: ${e=>{let{theme:t}=e;return t.ui.surfacePagePrimary}};
    background: ${e=>{let{theme:t}=e;return t.ui.surfaceInversePrimary}};
    text-decoration: none;
  }

  &.ai-skip-link:focus {
    top: 46px; /* Position below the main skip to content link */
  }
`,ec.A.button`
  background-color: ${e=>{let{theme:t,$isActive:r}=e;return r?t.ui.surfaceInversePrimary:"transparent"}};
  height: 44px;
  width: 44px;
  border: none;
  border-radius: ${e=>{let{theme:t,$isActive:r}=e;return r?t.borders.radiusSmallMedium:"0"}};
  cursor: pointer;
  color: ${e=>{let{theme:t,$isActive:r}=e;return r?t.ui.iconSurfaceColored:t.primitives.grey100}};
`;let rk=(e,t)=>{var r;let i=null==(r=e.componentOverrides)?void 0:r.GlobalNavigation;return(null==i?void 0:i.activeColor)??t};ec.A.div`
    padding: ${e=>{let{theme:t}=e;return t.spacing.xSmall}};
    background-color: transparent;
    border-left: ${e=>{let{theme:t,$isActive:r}=e;return`${t.borders.widthMedium} solid ${r?rk(t,t.ui.surfaceInverseSecondary):"transparent"}`}};
    color: ${e=>`${e.$isActive?rk(e.theme,e.theme.ui.surfaceInverseSecondary):e.theme.primitives.grey100}`};
    &:hover {
        padding-left: ${e=>{let{theme:t}=e;return t.spacing.xSmall}};
        border-left: ${e=>{let{theme:t,$isActive:r}=e;return`${t.borders.widthMedium} solid ${r?t.ui.surfaceInverseSecondary:t.ui.iconMedium}`}};
    }
`,ec.A.div`
  display: flex;
  width: ${e=>{let{$isCollapsed:t,$isMobileView:r,$useNewLogo:i}=e;return t?"auto":r?"100%":i?"272px":"224px"}};
  height: 100%;
  min-height: 0;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${e=>{let{theme:t,$isCollapsed:r}=e;return r?`20px ${t.spacing.xSmall} ${t.spacing.mediumSmall} ${t.spacing.xSmall}`:t.spacing.mediumSmall}};
`,ec.A.nav`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
`,ec.A.nav`
  flex-shrink: 0;
`,ec.A.div`
  display: flex;
  justify-content: flex-end;
  padding: ${e=>{let{theme:t}=e;return`0 0 ${t.spacing.mediumSmall}`}};
`,ec.A.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
`,ec.A.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    height: 100vh;
    padding: ${e=>{let{theme:t,$hasPageHeader:r}=e;return r?"0":`${t.spacing.mediumSmall} 0 0`}};
    margin: 0;
    box-sizing: border-box;
`,ec.A.div`
  display: ${e=>{let{$isVisible:t}=e;return t?"flex":"none"}};
  flex-direction: column;
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 0;
  align-self: stretch;
  overflow: ${e=>{let{$hasOverflowHidden:t}=e;return t?"hidden":"auto"}};
  background: ${e=>{let{theme:t,$isAiPanel:r}=e;return r?t.gradients.igniteAI:"inherit"}};
  border-radius: ${e=>{let{theme:t}=e;return t.borders.radiusMedium}};
`,ec.A.div`
  background: ${e=>{let{theme:t,$isAiPanel:r}=e;return r?t.gradients.igniteAI:"inherit"}};
  height: 100%;
  overflow: ${e=>{let{$hasOverflowHidden:t}=e;return t?"hidden":"auto"}};
  display: flex;
  flex-direction: column;
`,ec.A.div`
  display: flex;
  gap: ${e=>{let{theme:t}=e;return t.spacing.small}};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
`,ec.A.div`
  display: ${e=>{let{$isVisible:t}=e;return t?"block":"none"}};
  position: absolute;
  inset: 0;
`,ec.A.div`
  padding: ${e=>{let{theme:t}=e;return t.spacing.mediumSmall}};
  ${e=>{let{theme:t,$isBare:r}=e;return!r&&el.$_.md`
      padding: ${t.spacing.medium} ${t.spacing.mediumSmall};
    `}}
  ${e=>{let{theme:t,$isBare:r}=e;return r&&`
      background: ${t.ui.surfacePageSecondary};
      border-bottom: 1px solid ${t.ui.surfaceDivider};
    `}}
`,ec.A.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>{let{theme:t}=e;return t.spacing.medium}};
`,ec.A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ec.A.div`
  display: flex;
  align-items: center;
  gap: ${e=>{let{theme:t}=e;return t.spacing.xSmall}};
`,ec.A.div`
  width: ${e=>e.$isWidthExpanded?"100%":void 0};
  display: ${e=>e.$isVisible?"block":"none"};
  overflow: ${e=>e.$isFooterSticky?"hidden":void 0};
  box-shadow: ${e=>{let{$hasNoBackground:t,theme:r}=e;return t?"none":r.shadows.depth4}};
  border-radius: ${e=>{let{$hasNoBackground:t,theme:r}=e;return t?"0":r.borders.radiusMedium}};
  border-top-left-radius: ${e=>{let{$isHeaderSticky:t}=e;return t?"0":void 0}};
  border-top-right-radius: ${e=>{let{$isHeaderSticky:t}=e;return t?"0":void 0}};
  border-bottom-left-radius: ${e=>{let{$isFooterSticky:t}=e;return t?"0":void 0}};
  border-bottom-right-radius: ${e=>{let{$isFooterSticky:t}=e;return t?"0":void 0}};
  flex: ${e=>e.$isBodyPanel?"1 0 auto":void 0};
  min-height: ${e=>e.$isBodyPanel?"0":void 0};
  height: ${e=>e.$isBodyPanel?void 0:"100%"};
`,ec.A.div`
    position: relative;
`,ec.A.div`
  display: flex;
  flex-direction: column;
  height: ${e=>e.$isBodyPanel||!e.$isFooterSticky?"100%":"auto"};
`,ec.A.div`
  position: ${e=>e.$isHeaderSticky?"sticky":"static"};
  top: 0;
  z-index: 100;
  background: ${e=>{let{theme:t,$isAIPanel:r,$hasNoBackground:i,$isAISecondaryPanel:n,$backgroundColor:a}=e;return a||(r||i||n?"transparent":t.ui.surfacePageSecondary)}};
  width: ${e=>{let{$isFullWidth:t=!0}=e;return t?"auto":"fit-content"}};
  height: fit-content;
  min-height: ${e=>e.$hasNoMinHeightHeader?"auto":"42px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.$isAIPanel?e.theme.ui.textSurfaceColored:void 0};
  gap: ${e=>e.theme.spacing.small};
  padding: ${e=>{let{$hasNoPaddingHeader:t,$isFullWidth:r=!0,theme:i}=e;return t?"0":r?i.spacing.mediumSmall:0}};
  margin: ${e=>{let{theme:t,$isToolingPanel:r,$isFullWidth:i=!0}=e;return i?0:`${t.spacing.mediumSmall} ${r?t.spacing.xSmall:t.spacing.mediumSmall} 0`}};
  padding-bottom: ${e=>{let{theme:t,$isToolingPanel:r,$hasNoPaddingHeader:i}=e;return i?"0":r?t.spacing.xSmall:t.spacing.mediumSmall}};
  border-bottom: ${e=>{let{theme:t,$isAIPanel:r,$isOnlyIcon:i,$hasNoBackground:n,$backgroundColor:a,$hasNoBorderHeader:o}=e;return o?"none":`1px solid ${r?"white":i||n||a?"transparent":t.borders.color}`}};
  border-radius: ${e=>`${e.theme.borders.radiusMedium} ${e.theme.borders.radiusMedium} 0 0`};
`,ec.A.div`
  overflow: ${e=>{let{$contentOverflow:t}=e;return t||"visible"}};
  flex: ${e=>e.$isBodyPanel&&!e.$hasNoMinHeight?"1":void 0};
  min-height: ${e=>e.$isBodyPanel&&!e.$hasNoMinHeight?"0":void 0};
  height: ${e=>{var t,r,i,n,a,o;let s,l,d,u;return e.$isBodyPanel?"auto":e.$isFooterSticky&&e.$isHeaderSticky&&!e.$isMobileOverlay?(t=e.theme,r=e.$hasFooter,i=e.$hasPanelHeader,n=e.$hasPageHeader,a=e.$hasTopPanel,o=e.$hasNoPadding,l=0!=(s=80*!!n+72*!!a)?`${s}px`:t.spacing.mediumSmall,d=(42+2*(0,ek.emToPxNumber)(t.spacing.mediumSmall)+(0,ek.emToPxNumber)(t.borders.widthSmall))*(+!!r+ +!!i),u=o?"0px":t.spacing.mediumSmall,`calc(100vh - ${l} - ${d}px - 3 * ${u})`):"100%"}};
  padding: ${e=>{let{theme:t,$isToolingPanel:r,$isFullWidth:i=!0,$hasNoPadding:n}=e;return n?t.spacing.xxSmall:i?t.spacing.mediumSmall:`${r?t.spacing.xSmall:t.spacing.mediumSmall} 0`}};
  border-bottom-left-radius: ${e=>e.$hasFooter?"0":e.theme.borders.radiusMedium};
  border-bottom-right-radius: ${e=>e.$hasFooter?"0":e.theme.borders.radiusMedium};
`,ec.A.div`
  height: fit-content;
  min-height: ${42}px;
  width: ${e=>{let{$isFullWidth:t=!0}=e;return t?"auto":"fit-content"}};
  background: ${e=>{let{theme:t,$isAIPanel:r,$hasNoBackground:i,$isAISecondaryPanel:n}=e;return r||i||n?"transparent":t.ui.surfacePageSecondary}};
  padding: ${e=>{let{$isFullWidth:t=!0,theme:r}=e;return t?r.spacing.mediumSmall:0}};
  margin: ${e=>{let{theme:t,$isFullWidth:r=!0,$isToolingPanel:i}=e;return r?0:`0 ${i?t.spacing.xSmall:t.spacing.mediumSmall} ${t.spacing.mediumSmall}`}};
  padding-top: ${e=>e.$isToolingPanel?e.theme.spacing.xSmall:e.theme.spacing.mediumSmall};
  border-top: 1px solid ${e=>{let{theme:t,$isAIPanel:r,$isOnlyIcon:i,$hasNoBackground:n}=e;return r||i||n?"transparent":t.borders.color}};
  border-radius: ${e=>`0 0 ${e.theme.borders.radiusMedium} ${e.theme.borders.radiusMedium}`};
`,ec.A.div`  
  position: sticky;
  bottom: 0;
  z-index: 100;
  background: ${e=>{let{theme:t,$hasNoBackground:r}=e;return r?"none":t.ui.surfacePagePrimary}};
`,ec.A.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${e=>{let{theme:t,$hasNoBackground:r,$isAiPanel:i}=e;return r||i?"none":t.ui.surfacePagePrimary}};
`,ec.A.div`
  flex: 1;
  min-width: 0;
  width: 100%;
`,ec.A.div`
  display: flex;
  flex: 1;
  min-height: 0;
  width: 100%;
  align-items: stretch;
  gap: ${e=>{let{theme:t}=e;return t.spacing.mediumSmall}};
  ${e=>{let{theme:t}=e;return el.$_.md`
    padding: 0 ${t.spacing.mediumSmall} ${t.spacing.mediumSmall};
  `}}
`,ec.A.div`
  overflow-x: auto;
  overflow-y: hidden;
  box-sizing: border-box;
  margin: 0 ${e=>{let{theme:t}=e;return t.spacing.xSmall}} ${e=>{let{theme:t}=e;return t.spacing.mediumSmall}};

  ${e=>{let{theme:t,$isBare:r}=e;return!r&&el.$_.md`
    margin-left: ${t.spacing.mediumSmall};
    margin-right: ${t.spacing.mediumSmall};
  `}}

  ${e=>{let{theme:t,$isBare:r,$hasNoBackground:i}=e;return r?`
    background: transparent;
    border-bottom: 1px solid ${t.ui.surfaceDivider};
    width: 100%;
    margin: 0 0 ${t.spacing.mediumSmall};
    padding: 0 ${t.spacing.mediumSmall};
  `:`
    border-radius: ${t.borders.radiusMedium};
    background: ${i?"transparent":t.ui.surfaceCardPrimary};
    padding: 0 ${i?t.spacing.xSmall:t.spacing.small};
  `}}
`;let rS=e=>{let{placement:t,noPadding:r,noBorder:i,id:n}=e,a=(0,el.wR)(),o=(e=>{let t=e||"top";if("string"==typeof t){if(t.startsWith("bottom"))return"bottom";if(t.startsWith("start")||t.includes("center-start")||t.includes("center start"))return"left";if(t.startsWith("end")||t.includes("center-end")||t.includes("center end"))return"right"}return"top"})(t),s=a.ui.containerStroke,l=a.ui.surfaceCardPrimary,d=r?"0":a.spacing.space24;return(0,A.jsx)(ed.mL,{styles:(0,ed.AH)`
        span[data-position-content*="Popover"][data-popover-id="${n}"]
          > span {
          box-sizing: border-box;
          display: block;
          max-width: 360px;
          border-radius: ${a.borders.radiusSmallMedium} !important;
          border: ${i?"none":`${a.borders.widthSmall} ${a.borders.style} ${s}`} !important;
          box-shadow: ${a.shadows.depth3} !important;
          background-color: ${l} !important;
          padding: ${d} !important;

          & > span[class] {
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-${o}-color: ${i?"transparent":s};
            &::after {
              border-top-color: transparent;
              border-right-color: transparent;
              border-bottom-color: transparent;
              border-left-color: transparent;
              border-${o}-color: ${i?"transparent":l};
            }
          }
        }
      `})},rE=ec.A.hr`
  width: 100%;
  border: none;
  height: 1px;
`,rI=e=>{var t,r,i,n;let a=(0,el.wR)(),o=a.spacing.space24,{variant:s,renderTrigger:l,noPadding:d,noBorder:u,...c}=e,p=(null==(t=c.placement)?void 0:t.startsWith("top"))||(null==(r=c.placement)?void 0:r.startsWith("bottom"))?"4px":void 0,h=(null==(i=c.placement)?void 0:i.startsWith("top"))||(null==(n=c.placement)?void 0:n.startsWith("bottom"))?void 0:"4px",m=ea("popover");return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(rS,{placement:c.placement,noPadding:d,noBorder:u,id:m}),(0,A.jsx)(V.A,{...c,on:e.on??"click",renderTrigger:l,offsetY:c.offsetY??p,offsetX:c.offsetX??h,contentRef:e=>{e&&e.setAttribute("data-popover-id",m)},children:(()=>{if("children"in e&&"placeholder"===e.variant)return e.children;let t=e.primary,r=e.secondary;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(T.so,{direction:"column",gap:"xSmall",children:[t.label&&(0,A.jsx)(t3,{variant:t2.LABEL_SMALL,color:a.ui.textDatapoint,children:t.label}),(0,A.jsxs)(T.so,{direction:"column",gap:"0",children:[(0,A.jsx)(r_,{variant:rg.H3,children:t.title}),t.body&&(0,A.jsx)(t3,{variant:t2.P1,color:a.ui.textBody,children:t.body})]}),(t.buttonText||t.buttonIconName)&&(0,A.jsx)(T.so.Item,{shouldGrow:!1,margin:"xSmall 0 0 0",children:(0,A.jsx)(tY,{level:tD.Primary,variant:tU.DarkOutline,size:"small",onClick:t.onButtonClick,renderIconBefore:t.buttonIconName?(0,A.jsx)(es.I,{name:t.buttonIconName,width:24,height:24,color:"primary"}):void 0,children:t.buttonText})})]}),r&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("div",{style:{margin:`${o} 0`},children:(0,A.jsx)(rE,{style:{backgroundColor:a.ui.lineDivider}})}),(0,A.jsxs)(T.so,{direction:"column",gap:"small",children:[(0,A.jsx)(r_,{variant:rg.H4,children:r.title}),r.body&&(0,A.jsx)(t3,{variant:t2.P2,color:a.ui.textBody,children:r.body}),(r.buttonText||r.buttonIconName)&&(0,A.jsx)(T.so.Item,{shouldGrow:!1,children:(0,A.jsx)(tY,{level:tD.Primary,variant:tU.DarkOutline,size:"small",onClick:r.onButtonClick,renderIconBefore:r.buttonIconName?(0,A.jsx)(es.I,{name:r.buttonIconName,width:24,height:24,color:"primary"}):void 0,children:r.buttonText})})]})]})]})})()})]})},rA=()=>{let e=document.createElement("div");return e.style.position="absolute",e.style.top=rR,e.style.visibility="hidden",document.body.appendChild(e),e},rO=function(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=document.createElement("div");if(a.style.display="inline-block",a.style.visibility="hidden","string"==typeof i||"number"==typeof i){let e=document.createElement("div");e.textContent=String(i),r?t?(e.style.padding="6px 12px",e.style.fontSize="14px"):(e.style.padding="8px 12px",e.style.fontSize="16px"):(e.style.padding="8px 16px",e.style.fontSize="16px"),e.style.fontWeight=n?"bold":"normal",e.style.border="1px solid",e.style.borderRadius="4px",e.style.whiteSpace="nowrap",e.style.display="inline-block",a.appendChild(e)}else{let e=document.createElement("div");e.textContent="Content",e.style.padding=t?"6px 12px":"8px 16px",e.style.fontSize=t?"14px":"16px",e.style.fontWeight=n?"bold":"normal",e.style.border="1px solid",e.style.borderRadius="4px",e.style.whiteSpace="nowrap",e.style.display="inline-block",a.appendChild(e)}return e.appendChild(a),a},rL=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"More",i=rA();try{return rO(i,e,t,r,!1).offsetWidth+rM}finally{document.body.removeChild(i)}},rM=5,rR="-9999px",rT=(e,t,r,i,n)=>{let a=rO(t,r,i,e,n);try{let e=a.offsetWidth;return t.removeChild(a),Math.max(e,24)}catch{return 80}},rN=function(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return i?n?tz.PopoverSelected:tz.Popover:e?t?"white"===r?tz.SecondarySmallWhite:tz.SecondarySmall:"white"===r?tz.SecondaryWhite:tz.Secondary:"white"===r?tz.PrimaryWhite:tz.Primary},r$=ec.A.ul`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 0;
  overflow: visible;
  list-style: none;
  margin: 0;
  padding: 0;
`,rj=ec.A.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
  width: 100%;
`,rZ=ec.A.div`
  display: flex;
  flex-direction: column;
  max-height: min(300px, 50vh);
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: ${e=>e.theme.borders.radiusSmallMedium};

  & > *:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.ui.surfaceDivider};
  }

  /* Items render as <button> or <a> (when href is set) — cover both */
  & :is(button, a) {
    border-radius: 0 !important;
    text-align: left !important;
    transition: none !important;
  }
  /* First item gets rounded top corners to match the popover container */
  & > :first-child > :is(button, a) {
    border-top-left-radius: ${e=>e.theme.borders.radiusSmallMedium} !important;
    border-top-right-radius: ${e=>e.theme.borders.radiusSmallMedium} !important;
  }

  /* Last item gets rounded bottom corners to match the popover container */
  & > :last-child > :is(button, a) {
    border-bottom-left-radius: ${e=>e.theme.borders.radiusSmallMedium} !important;
    border-bottom-right-radius: ${e=>e.theme.borders.radiusSmallMedium} !important;
  }

  /* Inset focus ring so all four corners stay visible within the container */
  & :is(button, a):focus {
    outline: 2px solid ${e=>e.theme.ui.textTitle} !important;
    outline-offset: -3px !important;
  }

  /* Selected item has dark background — use contrasting light ring */
  & :is(button, a)[data-selected="true"]:focus {
    outline: 2px solid ${e=>e.theme.ui.surfacePageSecondary} !important;
    outline-offset: -3px !important;
  }
`,rB=ec.A.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Ensure button content is above the indicator */
  & > * {
    position: relative;
    z-index: 1;
  }

  ${e=>e.$disabled&&`
    &::after {
      display: none;
    }
  `}

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: ${e=>"thin"===e.$indicatorHeight?"0.125rem":e.theme.spacing.xxSmall};
    background-color: ${e=>"white"===e.$color?e.theme.ui.surfaceCardPrimary:e.$selected?e.theme.ui.surfaceInverseSecondary:e.theme.ui.containerStroke};
    border-radius: ${e=>e.theme.spacing.xxSmall};
    transform: scaleX(${e=>+!!e.$selected});
    transition: transform 0.2s ease-in-out;
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      background-color: ${e=>"white"===e.$color?e.theme.ui.surfaceCardPrimary:e.$selected?e.theme.ui.surfaceInverseSecondary:e.theme.ui.containerStroke};
    }
  }
`,rP=ec.A.span`
  font-weight: ${e=>e.$selected?"bold":"normal"};
`,rD=e=>{let{tab:t,selected:r,secondary:i,small:n,color:a,indicatorHeight:o,showIndicatorOnMobile:s,variant:l,onTabClick:d}=e,{id:u,label:c,disabled:p,analyticsTag:h,href:m,target:g,internalLink:_}=t,v="function"==typeof c?c(r):c,f="_blank"===g?"noopener noreferrer":void 0,y=(0,O.useRef)(null);(0,O.useLayoutEffect)(()=>{"tabs"===l&&y.current&&!m&&(y.current.setAttribute("role","tab"),y.current.setAttribute("aria-selected",String(r)))},[l,r,m]);let w=m?{}:"tabs"===l?{tabIndex:r?0:-1,"data-tab-id":u}:{"aria-current":r?"page":void 0};return(0,A.jsx)(rB,{$selected:r,$disabled:!!p,$color:a,$indicatorHeight:o,$showIndicatorOnMobile:s,role:"tabs"===l?"presentation":void 0,children:(0,A.jsx)(tY,{level:tD.Tab,variant:rN(i,n,a),disabled:p,href:m,target:g,internalLink:_,...f&&{rel:f},...!m&&{onClick:e=>d(e,u)},analyticsTag:h,elementRef:e=>{y.current=e},...w,children:(0,A.jsx)(rP,{$selected:r,children:v})})})},rU=e=>{let{tabs:t,selectedId:r,onChange:i,ariaLabel:n,ariaLabelledBy:a,secondary:o=!1,small:s=!1,color:l="black",enableOverflow:d=!1,moreButtonText:u=(0,M.t)("More"),indicatorHeight:c="normal",showIndicatorOnMobile:p=!0,moreButtonPlacement:h="start",variant:m="navigation"}=e,g=(0,O.useRef)(null),_=(0,O.useRef)(null),v=(0,O.useMemo)(()=>"tabs"===m?t.filter(e=>!e.href):t,[t,m]),f=(0,O.useMemo)(()=>"tabs"===m?t.filter(e=>!!e.href):[],[t,m]),[y,w]=(0,O.useState)(v),[x,C]=(0,O.useState)([]),[b,k]=(0,O.useState)(!1),[S,E]=(0,O.useState)(!1),I=(0,O.useRef)(null),L=(e,t)=>{e.preventDefault(),t!==r&&i(t)},R=(0,O.useCallback)(()=>{if(!d||!g.current||!_.current){w(v),C([]),k(!1);return}let e=getComputedStyle(g.current),t=g.current.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight),i=rA(),n=[];try{for(let e=0;e<v.length;e++){let t,a=v[e],l=a.id===r;if("string"==typeof a.label)t=rT(a.label,i,s,o,l);else if("function"==typeof a.label){let e=a.label(l);t=rT(e,i,s,o,l)}else t=rT(a.label,i,s,o,l);n.push(t+rM)}}finally{document.body.removeChild(i)}if(n.reduce((e,t)=>e+t,0)<=t){w(v),C([]),k(!1);return}let a=t-rL(s,o,u),l=0,c=0;for(let e=0;e<v.length;e++)if(l+n[e]<=a)l+=n[e],c++;else break;c>0?(w(v.slice(0,c)),C(v.slice(c))):(w([]),C(v)),k(!0)},[v,r,d,s,u,o]);(0,O.useEffect)(()=>{if(!d||!g.current)return;let e=new ResizeObserver(e=>{for(let t of e)t.contentRect.width>0&&R()});return e.observe(g.current),window.addEventListener("resize",R),()=>{e.disconnect(),window.removeEventListener("resize",R)}},[R,d]);let T=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],{id:i,label:n,disabled:a,analyticsTag:d,href:u,target:h}=e,g=i===r,_="function"==typeof n?n(g):n,v="_blank"===h?"noopener noreferrer":void 0;return t?(0,A.jsx)(tY,{level:tD.Tab,variant:rN(o,s,l,!0,g),disabled:a,"data-selected":g,textAlign:"start",href:u,target:h,...v&&{rel:v},...!u&&{onClick:e=>{L(e,i)}},analyticsTag:d,children:_},i):(0,A.jsx)(rD,{tab:e,selected:g,secondary:o,small:s,color:l,indicatorHeight:c,showIndicatorOnMobile:p,variant:m,onTabClick:L},i)},N=(0,O.useCallback)(e=>{var t,r,i,n,a;let o=Array.from(e.currentTarget.querySelectorAll("button:not([disabled])")),s=o.indexOf(document.activeElement);if(-1!==s)switch(e.key){case"ArrowDown":case"ArrowRight":e.preventDefault(),null==(t=o[(s+1)%o.length])||t.focus();break;case"ArrowUp":case"ArrowLeft":e.preventDefault(),null==(r=o[(s-1+o.length)%o.length])||r.focus();break;case"Home":e.preventDefault(),null==(i=o[0])||i.focus();break;case"End":e.preventDefault(),null==(n=o[o.length-1])||n.focus();break;case"Escape":e.preventDefault(),E(!1),null==(a=I.current)||a.focus()}},[]),$=(0,O.useCallback)(e=>{var t,n,a,o;let s;if("tabs"!==m)return;if(b&&document.activeElement===I.current){let r;switch(e.key){case"ArrowRight":case"Home":r=null==(t=y.find(e=>!e.disabled))?void 0:t.id;break;case"ArrowLeft":case"End":for(let e=y.length-1;e>=0;e--)if(!y[e].disabled){r=y[e].id;break}break;default:return}void 0!==r&&(e.preventDefault(),i(r));return}let l=y.findIndex(e=>e.id===r);if(-1===l)return;let d=(e,t)=>{for(let r=1;r<=y.length;r++){let i=(e+t*r+y.length)%y.length;if(!y[i].disabled)return i}return e};switch(e.key){case"ArrowRight":{let t=d(l,1);if(t<l&&b){e.preventDefault(),null==(n=I.current)||n.focus();return}s=t;break}case"ArrowLeft":{let t=d(l,-1);if(t>l&&b){e.preventDefault(),null==(a=I.current)||a.focus();return}s=t;break}case"Home":s=y.findIndex(e=>!e.disabled);break;case"End":if(b){e.preventDefault(),null==(o=I.current)||o.focus();return}for(let e=y.length-1;e>=0;e--)if(!y[e].disabled){s=e;break}break;default:return}void 0!==s&&-1!==s&&(e.preventDefault(),i(y[s].id))},[m,r,y,b,i]);(0,O.useLayoutEffect)(()=>{"tabs"===m&&I.current&&(I.current.setAttribute("role","tab"),I.current.setAttribute("aria-selected","false"),I.current.setAttribute("aria-expanded",String(S)))},[m,S]),(0,O.useEffect)(()=>{if("tabs"!==m||!r)return;let e=_.current;if(!(null==e?void 0:e.contains(document.activeElement)))return;let t=e.querySelector('button[aria-selected="true"]');null==t||t.focus()},[r,m]);let j="tabs"===m?{role:"tablist","aria-label":n,"aria-labelledby":a}:{},Z=(0,A.jsxs)(rj,{ref:g,children:[(0,A.jsxs)(r$,{ref:_,onKeyDown:$,...j,children:[y.map(e=>T(e,!1)),b&&(0,A.jsx)(rI,{variant:"placeholder",noPadding:!0,isShowingContent:S,onShowContent:()=>E(!0),onHideContent:()=>E(!1),renderTrigger:(0,A.jsx)(rB,{$selected:x.some(e=>e.id===r),$disabled:!1,$color:l,$indicatorHeight:c,$showIndicatorOnMobile:p,role:"tabs"===m?"presentation":void 0,children:(0,A.jsx)(tY,{level:tD.Tab,variant:rN(o,s,l),renderIconAfter:(0,A.jsx)(es.I,{name:"chevron-down"}),tabIndex:"tabs"===m?-1:void 0,elementRef:e=>{I.current=e},children:(0,A.jsx)(rP,{$selected:x.some(e=>e.id===r),children:u})})}),placement:"center"===h?"bottom center":"end"===h?"bottom end":"bottom",constrain:"window",children:(0,A.jsx)(rZ,{onKeyDown:N,children:x.map(e=>T(e,!0))})})]}),f.length>0&&(0,A.jsx)(r$,{children:f.map(e=>T(e,!1))})]});return"tabs"===m?(0,A.jsx)("div",{children:Z}):(0,A.jsx)("nav",{"aria-label":n,"aria-labelledby":a,children:Z})};ec.A.div`
padding: ${e=>{let{theme:t}=e;return t.spacing.space8}};
#trigger-button {
  width: 100%;
}
#trigger-button > span > span > span {
  width: 100%;
  justify-content: space-between;
}
`,ek.ANALYTICS_FACTORY.NavigationSecondary.namespace("report-a-problem"),ec.A.div`
    border-color: transparent;
    border-style: solid;
    border-width: ${e=>{let{theme:t,borderWidth:r}=e;return r||t.borders.widthSmall}};
    border-radius: ${e=>{let{theme:t,borderRadius:r}=e;return r||t.borders.radius12}};
    background-image: ${e=>{let{theme:t,backgroundGradient:r,borderGradient:i}=e;return`${t.gradients[r]}, ${t.gradients[i]}`}};
    background-origin: border-box;
    background-clip: content-box, border-box;
`,ec.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.$padding??e.theme.spacing.xSmall};
  background-color: ${e=>e.$color};
  background: ${e=>e.$color};
  margin-right: ${e=>e.$withoutMargin?0:e.theme.spacing.xSmall};
  transition: 0.2s ease-out;
  transition-property: border-radius;
  border-radius: ${e=>e.$circle?e.theme.borders.radiusXXLarge:e.theme.borders.radiusSmall};
  font-size: ${e=>e.$fontSize||"inherit"};
`,ec.A.section`
  max-height: ${e=>"auto"===e.$maxHeight?0:e.$maxHeight};
  height: ${e=>"auto"===e.$maxHeight?0:e.$maxHeight};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,ec.A.div`
  max-height: 100%;
  min-height: 0;
  width: 100%;
  overflow: auto;
  flex: 1;
  padding: ${e=>e.$padding};
  
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  
  @media (prefers-reduced-motion: reduce) {
    &::-webkit-scrollbar {
      width: auto;
      background-color: initial;
    }
    
    scroll-behavior: auto;
  }
`;let rH=e=>{let{name:t,customColor:r,width:i,height:n}=e;return(0,A.jsx)(es.I,{as:"div",name:t,width:i,height:n,customColor:r,customStyle:{padding:0,margin:0}})};(0,ek.emToPxNumber)("50em"),(0,ek.emToPxNumber)(el.YK.large);let rz=e=>{var t;let{disabled:r,required:i,content:n,description:a,errorText:o,size:s="medium",analyticsTag:l,descriptionAlignment:d="content",...u}=e,c=(0,el.wR)(),p=(0,O.useMemo)(()=>(e=>{let{description:t,errorText:r,marginLeft:i,descriptionFontSize:n,errorTextFontSize:a,theme:o}=e,s=[];return t&&s.push({text:(0,A.jsx)("span",{style:{marginLeft:r?0:i,fontSize:n??o.typography.fontSizeMedium,color:o.ui.textDatapoint},children:t}),type:"hint"}),r&&s.push({text:(0,A.jsx)("span",{style:{fontSize:a??o.typography.fontSizeSmall},children:r}),type:"newError"}),s})({description:a,errorText:o,marginLeft:"content"===d?"66px":void 0,descriptionFontSize:c.typography.fontSizeMedium,errorTextFontSize:c.typography.fontSizeSmall,theme:c}),[a,o,d,c]),h="small"===s?{toggleSize:null==(t=c.forms)?void 0:t.inputHeightXSmall}:void 0;return(0,A.jsx)(X.Sc,{...u,label:n||"",variant:"toggle",size:s,disabled:r,required:i,messages:p,role:"switch",...void 0!==u.checked&&{checked:u.checked},inputRef:e=>{e&&e.setAttribute("aria-checked",String(u.checked??!1))},themeOverride:h,...l})},rK=e=>{let{value:t,onChange:r,label:i,analyticsFactory:n,analyticsId:a,isRequired:o=!1,minValue:s=0,maxValue:l,step:d=1,interaction:u}=e,c=(0,el.wR)(),p=null==t?s:t;return(0,A.jsx)(D.v,{theme:{componentOverrides:{NumberInput:{arrowsBackgroundColor:c.ui.surfaceCardPrimary,arrowsHoverBackgroundColor:c.ui.surfaceHover,arrowsBorderColor:"transparent",arrowsColor:c.ui.textPrimary,arrowsContainerWidth:"2.5rem",mediumHeight:"2.938rem",borderRadius:c.borders.radiusSmallMedium,borderWidth:"0.075rem",borderStyle:"solid",borderColor:c.ui.containerStroke}}},children:(0,A.jsx)(F.Q,{showArrows:!0,"aria-label":i,renderLabel:(0,A.jsx)("span",{style:{fontWeight:c.typography.fontWeightSemiBold},children:i}),interaction:u,onBlur:()=>{void 0!==s&&p<s?r(s):void 0!==l&&p>l&&r(l)},value:null==t?"":t,onChange:e=>{let t=e.target.value;r(""===t?null:Number(t))},onIncrement:()=>{if(null==t)return void r(s);let e=p+d;void 0!==l&&e>l||r(e)},onDecrement:()=>{let e=p-d;e<s?r(s):r(e)},renderIcons:{increase:(0,A.jsx)(es.I,{name:"chevron-up",width:18,height:18}),decrease:(0,A.jsx)(es.I,{name:"chevron-down",width:18,height:18})},isRequired:o,...n&&a?n.create(a):{}})})};ec.A.div`
button {
width: 32px !important;
height: 32px !important;
}
button > span {
width: 100%;
height: 100%;
}
button > span > span {
width: 100%;
height: 100%;
}
button div[type="button"] > span {
border-radius: ${e=>e.theme.borders.radius12};
width: 32px;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
padding: 0;
}
`,(0,ec.A)($.S)`
  position: relative;
  
  span[class$="progressBar__value"] {
    flex: none;
  }
  
  span[class$="progressBar__track"] {
    border: 2px solid ${e=>e.theme.ui.surfaceInstitution};
  }
`,(0,ec.A)($.S)`
  position: relative;

  > span {
    display: flex;
    align-items: center;
  }

  span[class$="progressBar__value"] {
    flex: none;
    margin-left: ${e=>e.theme.spacing.xxSmall};
    line-height: 1.25;
    color: ${e=>e.$textColor};
  }

  span[class$="progressBar__track"] {
    border: none;
  }
`,ec.A.span`
  position: absolute;
  top: -20px;
  left: 0;
  color: ${e=>e.$textColor};
  font-size: ${e=>e.theme.typography.fontSizeSmall};
`,ec.A.span`
  opacity: ${e=>+!e.$hidden};
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  padding-right: ${e=>e.theme.spacing.small};
  font-weight: ${e=>e.theme.typography.fontWeightSemiBold};
  color: ${e=>e.$textColor||e.theme.ui.surfaceCardSecondary};
  transition: opacity 0.3s;
`,ec.A.div`
  color: ${e=>e.$textColor||e.theme.ui.surfaceInstitution};
  font-weight: ${e=>e.theme.typography.fontWeightSemiBold};
  padding-left: ${e=>e.theme.spacing.small};
`,(0,ek.emToPxNumber)(el.YK.small),ec.A.div`
  position: fixed;
  right: ${e=>e.theme.spacing.mediumSmall};
  bottom: ${e=>e.theme.spacing.medium};
  width: 426px;

  display: flex;
  flex-direction: row;
  gap: ${e=>e.theme.spacing.small};

  background: ${e=>e.theme.ui.surfaceCardPrimary};
  border-radius: ${e=>e.theme.borders.radiusSmallMedium};
  box-shadow: ${e=>e.theme.shadows.topmost};
  padding: ${e=>e.theme.spacing.mediumSmall};

  z-index: 9999;

  @media (max-width: 768px) {
    left: 1rem;
    right: 1rem;
    bottom: 80px;
    transform: none;
    width: auto;
  }
`;let rW=e=>{let{label:t,description:r,errorText:i,className:n,style:a,...o}=e,{t:s}=(0,M.useTranslation)(),l=(0,el.wR)(),d=(0,A.jsxs)(T.so,{direction:"row",alignItems:"start",children:[(0,A.jsx)(T.so.Item,{children:(0,A.jsx)(G.A,{label:(0,A.jsx)(Y.h,{children:t||s("Radio option")}),...o})}),(0,A.jsxs)(T.so,{direction:"column",children:[(0,A.jsx)(T.so.Item,{children:t}),null!=r&&(0,A.jsx)("span",{style:{margin:`${l.spacing.xxSmall} 0`,fontSize:l.typography.fontSizeMedium,lineHeight:l.typography.lineHeight,color:l.ui.textDatapoint},children:r}),null!=i&&i.length>0&&(0,A.jsx)(T.so.Item,{children:(0,A.jsxs)("span",{style:{fontSize:l.typography.fontSizeSmall,color:l.ui.textError},children:[(0,A.jsx)(q.r,{})," ",i]})})]})]});return n||a?(0,A.jsx)("div",{className:n,style:a,children:d}):d};rW.displayName="RadioInput",ec.A.div`
    & button, & a {
        outline-offset: ${e=>`-${e.$outlineOffset} !important`};
        width: 100% !important;
    }
`;let rV={small:{iconSize:18,margin:"0"},medium:{iconSize:18,margin:"0 xx-small 0 0"},large:{iconSize:24,margin:"0 x-small 0 0"}},rX=e=>{let{themeOverride:t,value:r,onClear:i,onChange:n,renderLabel:a,...o}=e,s=(0,el.wR)(),{t:l}=(0,M.useTranslation)(),[d,u]=(0,O.useState)(r||"");(0,O.useEffect)(()=>{u(r||"")},[r]);let c=rV[o.size||"medium"];return(0,A.jsx)(Q.k,{renderLabel:a||(0,A.jsx)(Y.h,{children:l("Search")}),renderBeforeInput:(0,A.jsx)(es.I,{name:"search",color:"primary",themeOverride:{primaryColor:el.FS.ui.iconMedium}}),renderAfterInput:d.length&&(0,A.jsx)(D.v,{theme:{componentOverrides:{View:{focusColorInfo:s.ui.surfaceAttention}}},children:(0,A.jsx)($.S,{as:"div",width:24,margin:c.margin,cursor:"pointer",focusColor:"info",onClick:()=>{u(""),i&&i()},onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),u(""),i&&i())},tabIndex:0,"aria-label":l("Clear search"),role:"button",children:(0,A.jsx)(es.I,{name:"circle-x",width:c.iconSize,height:c.iconSize,color:"primary",themeOverride:{primaryColor:el.FS.ui.iconMedium}})})}),shouldNotWrap:!0,themeOverride:(e,r)=>{var i,n;return{borderRadius:r.borders.radiusMedium,focusOutlineColor:(null==(n=r.componentOverrides)||null==(i=n.SearchField)?void 0:i.focusOutlineColor)||r.ui.surfaceAttention,padding:r.spacing.xxSmall,smallHeight:r.forms.inputHeightSmall,mediumHeight:r.forms.inputHeightMedium,largeHeight:r.forms.inputHeightXLarge,smallFontSize:r.typography.fontSizeMedium,mediumFontSize:r.typography.fontSizeMedium,largeFontSize:r.typography.fontSizeMedium,..."function"==typeof t?t(e,r):t}},value:d,onChange:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let[i]=t;u(i.target.value),n&&n(...t)},...o})},rF=ec.A.div`
  width: ${e=>e.$inline?"fit-content":"100%"};
`,rG=ec.A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: ${e=>"assistant"===e.$variant||"assistantLight"===e.$variant?"none":`1px solid ${e.theme.ui.lineStroke}`};
  position: relative;
  background-color: ${e=>"assistant"===e.$variant?"rgba(0, 0, 0, 0.1)":"assistantLight"===e.$variant?e.theme.ui.surfaceCardPrimary:e.theme.ui.surfacePageSecondary};
  height: ${e=>"small"===e.$size?e.theme.forms.inputHeightSmall:e.theme.forms.inputHeightMedium};
  border-radius: ${e=>e.theme.borders.radiusSmallMedium};
`,rY=ec.A.button`
  flex: 1;
  height: ${e=>"assistant"!==e.$variant&&"assistantLight"!==e.$variant?"100%":"small"===e.$size?"calc(100% - 4px)":"calc(100% - 6px)"};
  text-align: center;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  background: none;
  border: none;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  background-color: ${e=>"assistant"===e.$variant?e.$isActive?"rgba(0, 0, 0, 0.8)":"transparent":"assistantLight"===e.$variant?e.$isActive?e.theme.ui.surfaceInversePrimary:"transparent":"inverse"===e.$variant?e.$isActive?e.theme.ui.surfaceInversePrimary:e.theme.ui.surfacePageSecondary:e.$isActive?`${e.theme.ui.surfaceInstitution}0F`:e.theme.ui.surfacePageSecondary};
  color: ${e=>e.$disabled?e.theme.ui.textPlaceholder:"assistant"===e.$variant?e.$isActive?"white":e.theme.ui.textSurfaceColored:"assistantLight"===e.$variant?e.$isActive?e.theme.ui.textSurfaceColored:e.theme.ui.textBody:"inverse"===e.$variant?e.$isActive?e.theme.ui.textSurfaceColored:e.theme.ui.textPlaceholder:e.$isActive?e.theme.ui.surfaceInstitution:e.theme.ui.textPlaceholder};
  font-size: ${e=>e.theme.typography.fontSizeMedium};
  font-family: ${e=>e.theme.typography.fontFamily};
  padding: ${e=>"small"===e.$size?`${e.theme.spacing.space4} ${e.theme.spacing.space12}`:`${e.theme.spacing.space6} ${e.theme.spacing.space16}`};
  border-radius: ${e=>e.theme.borders.radiusSmallMedium};
  gap: ${e=>e.theme.spacing.xxSmall};

  &.active {
    position: relative;

    ${e=>"assistant"!==e.$variant&&"assistantLight"!==e.$variant&&"inverse"!==e.$variant&&`
      &::before {
        content: "";
        position: absolute;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        border: 2px solid ${e.$disabled?e.theme.ui.containerStroke:e.theme.ui.surfaceInstitution};
        border-radius: ${e.theme.borders.radiusSmallMedium};
      }
    `}
  }
`;ec.A.section`
  /* Add any styles needed for the content section */
`;let rq=e=>{let{options:t,inline:r,onSelect:i,renderIconOnlyForActive:n,initialOption:a,variant:o="default",size:s="medium",analyticsTag:l,disabled:d}=e,[u,c]=(0,O.useState)(()=>{if(!a)return 0;let e=t.findIndex(e=>e.id===a);return -1===e?0:e}),p=(0,el.wR)(),h=(0,O.useId)(),m=(0,O.useRef)([]),g=e=>{var r;d||(c(e),null==i||i(t[e].id),null==(r=m.current[e])||r.focus())};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(rF,{$inline:r,children:(0,A.jsx)(rG,{role:"tablist",theme:p,$variant:o,$size:s,children:t.map((e,r)=>{let a=!n||u===r;return(0,A.jsxs)(rY,{ref:e=>{m.current[r]=e},type:"button",className:eh()({active:u===r}),theme:p,$isActive:u===r,$variant:o,$size:s,$disabled:d,onClick:()=>{d||(c(r),null==i||i(e.id))},onKeyDown:e=>{"ArrowRight"===e.key?(e.preventDefault(),g((r+1)%t.length)):"ArrowLeft"===e.key?(e.preventDefault(),g((r-1+t.length)%t.length)):"Home"===e.key?(e.preventDefault(),g(0)):"End"===e.key&&(e.preventDefault(),g(t.length-1))},disabled:d,role:"tab",tabIndex:u===r?0:-1,"aria-selected":u===r,"aria-disabled":d,...e.content&&r===u?{"aria-controls":`${h}-content-${r}`}:{},id:`${h}-tab-${r}`,...null==l?void 0:l.create(`tab-${e.id}`),children:[a&&e.renderIcon,e.label,a&&e.renderIconAfter]},e.id)})})}),t[u].content&&(0,A.jsx)("section",{role:"tabpanel",id:`${h}-content-${u}`,"aria-labelledby":`${h}-tab-${u}`,children:t[u].content})]})},rQ=(0,ed.i7)`
  to { transform: rotate(360deg); }
`;ec.A.span`
  display: inline-flex;
  line-height: 0;
  flex-shrink: 0;
  animation: ${rQ} 1s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;let rJ={transparent:{background:()=>"transparent",color:e=>e.ui.textTitle,transparentColor:e=>e.ui.textSurfaceColored},white:{background:e=>e.ui.surfacePageSecondary,color:e=>e.ui.textTitle,transparentColor:e=>e.ui.textSurfaceColored},grey:{background:e=>e.primitives.grey10,color:e=>e.ui.textTitle,transparentColor:e=>e.ui.textTitle},green:{background:e=>e.primitives.green12,color:e=>e.primitives.green82,transparentColor:e=>e.primitives.green82},blue:{background:e=>e.primitives.blue12,color:e=>e.primitives.blue82,transparentColor:e=>e.primitives.blue82},sky:{background:e=>e.extendedPrimitives.sky12,color:e=>e.extendedPrimitives.sky90,transparentColor:e=>e.extendedPrimitives.sky90},honey:{background:e=>e.extendedPrimitives.honey12,color:e=>e.extendedPrimitives.honey90,transparentColor:e=>e.extendedPrimitives.honey90},orange:{background:e=>e.primitives.orange12,color:e=>e.primitives.orange82,transparentColor:e=>e.primitives.orange82},red:{background:e=>e.primitives.red12,color:e=>e.primitives.red82,transparentColor:e=>e.primitives.red82},gum:{background:e=>e.extendedPrimitives.gum12,color:e=>e.extendedPrimitives.gum90,transparentColor:e=>e.extendedPrimitives.gum90},plum:{background:e=>e.extendedPrimitives.plum12,color:e=>e.extendedPrimitives.plum90,transparentColor:e=>e.extendedPrimitives.plum90},violet:{background:e=>e.extendedPrimitives.violet12,color:e=>e.extendedPrimitives.violet90,transparentColor:e=>e.extendedPrimitives.violet90},sea:{background:e=>e.extendedPrimitives.sea12,color:e=>e.extendedPrimitives.sea70,transparentColor:e=>e.extendedPrimitives.sea70},institution:{background:e=>e.ui.surfaceInstitution,color:e=>e.ui.textSurfaceColored,transparentColor:e=>e.ui.surfaceInstitution}};ec.A.div`
  width: ${e=>{let{$width:t}=e;return t||"auto"}};
  text-align: center;
  display: ${e=>{let{$display:t}=e;return t||"inline-block"}};
  padding-inline: ${e=>{let{theme:t}=e;return t.spacing.xSmall}};
  padding-block: ${e=>{let{theme:t}=e;return t.spacing.xxxSmall}};
  border-radius: ${e=>{let{theme:t}=e;return t.borders.radiusSmall}};
  background-color: ${e=>{let{theme:t,$variant:r,$transparent:i}=e;return i?"transparent":rJ[r].background(t)}};
  color: ${e=>{let{theme:t,$variant:r,$transparent:i}=e;return i?rJ[r].transparentColor(t):rJ[r].color(t)}};
`,ec.A.div`
  border-radius: ${e=>e.theme.borders.radiusMedium};
  background-color: ${e=>e.theme.primitives.white};
  width: ${e=>e.$width||"100%"};
  max-height: ${e=>e.$maxHeight||"none"};
  overflow: auto;
  
  /* Add rounded corners if specified */
  ${e=>e.$rounded?"overflow: hidden;":""}
  
  /* Table row styling */
  tr {
    border-left: none;
    border-right: none;
    cursor: default;
    
    &[hovered="true"] {
      cursor: pointer;
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  /* Table cell styling */
  td {
    vertical-align: ${e=>e.align??"text-top"};
    background: inherit;
  }
  
  /* Table role-based styling */
  div[role="row"] {
    border-left: none;
    border-right: none;
    
    &:last-child {
      border-bottom: none;
    }
    
    &[dir="ltr"] {
      padding: 0 0 0.75rem 0;
    }
  }
  
  div[role="cell"] {
    background: inherit;
  }
  
  div[role="rowgroup"]:not([dir="ltr"]) {
    padding: 1rem 1.5rem;

    svg[name="IconCheck"] {
      display: none;
    }

    span:has(> svg) {
      padding-left: 0;
    }
  }

  ${e=>e.$stickyFirstColumn?`
    th:first-of-type,
    td:first-of-type {
      position: sticky;
      left: 0;
      z-index: 1;
      box-shadow: inset -1px 0 0 ${e.theme.primitives.grey11};
    }

    th:first-of-type {
      z-index: 2;
      background: ${e.theme.primitives.white};
    }
  `:""}
`,ec.A.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$textAlign||"start"};
  gap: ${e=>e.theme.spacing.xxSmall};
  cursor: ${e=>e.$isClickable?"pointer":"auto"};
`,ec.A.th`
  padding: ${e=>`${e.theme.spacing.mediumSmall} ${e.theme.spacing.medium}`};
  font-family: ${e=>e.theme.typography.fontFamilyHeading};
  font-weight: ${e=>e.theme.typography.fontWeightSemiBold};
  text-align: ${e=>e.$textAlign||"start"};
  background: ${e=>e.theme.primitives.white};
  width: ${e=>e.$width||"auto"};
  ${e=>e.$sticky?`
    position: sticky;
    top: 0;
    z-index: 1;
  `:""}
`,ec.A.div`
    & div[role="row"] {
        padding: ${e=>{let{$mobileMode:t}=e;return t?"0.75rem 0":"0 0 0.75rem 0"}} !important;
    }
`,(0,O.createContext)(null),ec.A.div`
  > div {
    border: ${e=>{let{theme:t,$showBorders:r}=e;return r?`${t.borders.widthSmall} solid ${t.borders.color}`:"none"}};
  }

  table {
    margin: 0 !important;
  }

  thead h4 {
    font-size: ${e=>{let{theme:t}=e;return t.typography.fontSizeSmall}};
  }

  thead th {
    padding-top: ${e=>{let{theme:t}=e;return t.spacing.smallMedium}};
    padding-bottom: ${e=>{let{theme:t}=e;return t.spacing.smallMedium}};
    border-bottom: ${e=>{let{theme:t,$showBorders:r}=e;return r?`${t.borders.widthSmall} solid ${t.borders.color}`:"none"}};
  }

  tbody td {
    padding-top: ${e=>{let{theme:t}=e;return t.spacing.xSmall}};
    padding-bottom: ${e=>{let{theme:t}=e;return t.spacing.xSmall}};
    vertical-align: middle;
  }
`;let r1=ec.A.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>{let{theme:t}=e;return t.spacing.xxSmall}};
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${e=>{let{$colorScheme:t}=e;return t.text}};

  &:hover:not(:disabled) {
    color: ${e=>{let{$colorScheme:t}=e;return t.textHover}};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:focus-visible {
    outline: ${e=>{let{theme:t}=e;return t.spacing.xxxSmall}} solid ${e=>{let{$colorScheme:t}=e;return t.text}};
    outline-offset: ${e=>{let{theme:t}=e;return t.spacing.xxxSmall}};
    border-radius: ${e=>{let{theme:t}=e;return t.borders.radiusXXSmall}};
  }
`;ec.A.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>{let{$size:t}=e;return t}};
  height: ${e=>{let{$size:t}=e;return t}};
`,ec.A.span`
  text-decoration: underline;
  text-decoration-color: ${e=>{let{$colorScheme:t}=e;return t.underline}};
  text-decoration-thickness: 1px;
  text-underline-offset: ${e=>{let{theme:t}=e;return t.spacing.xxSmall}};
  color: inherit;

  ${r1}:hover:not(:disabled) & {
    text-decoration-color: ${e=>{let{$colorScheme:t}=e;return t.underlineHover}};
  }

  & * {
    color: inherit !important;
    text-decoration: inherit !important;
  }
`,ec.A.div`
  display: flex;
  flex-direction: ${e=>{let{$direction:t}=e;return t}};
  gap: ${e=>{let{theme:t}=e;return t.spacing.xSmall}};
  ${e=>{let{$direction:t}=e;return"row"===t&&"width: 100%; align-items: center; justify-content: space-around;"}}
`,ec.A.div`
  position: relative;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xxSmall}};
`,ec.A.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,ec.A.div`
  display: none;

  ${e=>{let{theme:t}=e;return el.$_.maxMd`
    display: flex;
    position: fixed;
    bottom: ${t.spacing.small};
    left: ${t.spacing.mediumSmall};
    right: ${t.spacing.mediumSmall};
    z-index: 998;
    background: ${t.ui.surfaceCardPrimary};
    box-shadow: ${t.shadows.topmost};
    border-radius: ${t.borders.radius100};
    padding: ${t.spacing.xSmall} ${t.spacing.mediumSmall};
  `}}
`,ec.A.div`
  display: none;

  ${e=>{let{$isOpen:t,theme:r}=e;return el.$_.maxMd`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1001;
    background: ${r.ui.surfacePagePrimary};

    transform: ${t?"translateY(0)":"translateY(100%)"};
    transition: transform 0.3s ease-in-out;
    pointer-events: ${t?"auto":"none"};

    ${el.$_.reducedMotion`
      transition: none;
    `}
  `}}
`,ec.A.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,ec.A.div`
  flex: 1;
  padding: ${e=>{let{theme:t,$toolStyle:r}=e;return(null==r?void 0:r.padding)??t.spacing.mediumSmall}};
  border-radius: ${e=>{let{theme:t}=e;return t.borders.radiusLarge}};
  background: ${e=>{let{theme:t,$variant:r}=e;return"ignite-ai"===r?t.gradients.igniteAISecondary:t.ui.surfaceCardPrimary}};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow: ${e=>{let{$toolStyle:t}=e;return null==t?void 0:t.overflow}};

  ${e=>{let{theme:t}=e;return el.$_.maxMd`
    border-radius: ${t.borders.radiusLarge} ${t.borders.radiusLarge} 0 0;
  `}}
`,ec.A.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>{let{theme:t}=e;return`0 ${t.spacing.small}`}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  color: ${e=>{let{theme:t,$darkSurface:r}=e;return r?t.ui.textSurfaceColored:t.ui.textTitle}};

  ${e=>{let{theme:t}=e;return el.$_.maxMd`
    padding: 0 ${t.spacing.mediumSmall};
    margin-top: ${t.spacing.mediumSmall};
  `}}
`,ec.A.div`
  height: 100%;
  box-sizing: border-box;
  background: ${e=>{let{theme:t,$background:r}=e;return r||t.ui.surfacePagePrimary}};
  border-radius: ${e=>{let{theme:t}=e;return t.borders.radiusLarge}};
  padding: ${e=>{let{theme:t}=e;return`${t.spacing.mediumSmall} ${t.spacing.xxSmall} ${t.spacing.xxSmall} ${t.spacing.xxSmall}`}};
  display: flex;
  flex-direction: column;

  &:focus-visible {
      outline: 2px solid ${e=>{let{theme:t}=e;return t.ui.focus}};
      outline-offset: -2px;
      border-radius: ${e=>{let{theme:t}=e;return t.borders.radiusMedium}};
  }

  ${e=>{let{$isMobileFullScreen:t}=e;return t&&el.$_.maxMd`
      border-radius: 0;
      padding: 0;
    `}}

  ${e=>{let{$isDesktopFullScreen:t}=e;return t&&`
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
    `}}
`,ec.A.div`
  border-radius: ${e=>{let{theme:t}=e;return`0 ${t.borders.radiusMedium} ${t.borders.radiusMedium} 0`}};
  width: ${e=>{let{$isOpen:t,$contentWidth:r,$isFullWidth:i}=e;return t?i?"100%":`${r}px`:"0"}};
  flex: ${e=>{let{$isFullWidth:t,$isOpen:r}=e;return t&&r?"1":"unset"}};
  overflow: hidden;
  transition: ${e=>{let{$isResizing:t}=e;return t?"none":"width 0.3s ease-in-out"}};

  ${el.$_.reducedMotion`
    transition: none;
  `}
`,(0,ec.A)(re,{shouldForwardProp:e=>!e.startsWith("$")})`
  position: relative;
  transition: ${e=>{let{$isResizing:t}=e;return t?"none !important":"width 0.3s ease-in-out !important"}};
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: ${e=>{let{$isExpanded:t}=e;return t?"flex-end":"center"}};
  ${e=>{let{$isFullWidth:t}=e;return t&&"flex: 1; width: 100%;"}}

  ${el.$_.maxMd`
    display: none;
  `}
`,ec.A.div`
  position: absolute;
  right: -3px;
  top: 0;
  bottom: 0;
  width: 6px;
  cursor: col-resize;
  z-index: 10;
  border-radius: 3px;
  &:hover {
    background: ${e=>{let{theme:t}=e;return t.ui.lineBorder}};
  }
  &:focus-visible {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.ui.brand}};
    outline-offset: 1px;
  }
  ${el.$_.maxMd`
    display: none;
  `}
`,ec.A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>{let{theme:t}=e;return t.spacing.large}};
  color: ${e=>{let{theme:t}=e;return t.ui.textBody}};
`,el.fi.medium},"../../libs/icons/src/index.ts"(e,t,r){r.d(t,{I:()=>u});var i=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),n=r("../../node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@18.3.29_react@18.3.1__@types+react@18.3.29_react@18.3.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),a=r("../../node_modules/.pnpm/@instructure+ui-svg-images@11.7.4-SECURITY.3_@types+react@18.3.29_react-dom@18.3.1_reac_b2e2e55f4bafa2c00dfabeb6a341f617/node_modules/@instructure/ui-svg-images/es/SVGIcon/index.js"),o=r("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let s={"AI.svg":`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g id="AI">
        <path id="Vector"
            d="M17.7655 3.63363C17.8461 3.41597 18.1539 3.41597 18.2345 3.63363L18.7704 5.08192C18.7957 5.15035 18.8497 5.2043 18.9181 5.22962L20.3664 5.76554C20.584 5.84608 20.584 6.15392 20.3664 6.23446L18.9181 6.77038C18.8497 6.7957 18.7957 6.84965 18.7704 6.91808L18.2345 8.36637C18.1539 8.58403 17.8461 8.58403 17.7655 8.36637L17.2296 6.91808C17.2043 6.84965 17.1503 6.7957 17.0819 6.77038L15.6336 6.23446C15.416 6.15392 15.416 5.84608 15.6336 5.76554L17.0819 5.22962C17.1503 5.2043 17.2043 5.15035 17.2296 5.08192L17.7655 3.63363Z" />
        <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"
            d="M12 6.03416L10.7317 9.46152C10.514 10.05 10.05 10.514 9.46149 10.7318L6.03413 12L9.46149 13.2682C10.05 13.486 10.514 13.95 10.7317 14.5385L12 17.9658L13.2682 14.5385C13.486 13.95 13.95 13.486 14.5385 13.2682L17.9658 12L14.5385 10.7318C13.95 10.514 13.486 10.05 13.2682 9.46152L12 6.03416ZM12.7034 3.90089C12.4617 3.24792 11.5382 3.24792 11.2966 3.90089L9.41875 8.97567C9.34278 9.18096 9.18093 9.34282 8.97564 9.41878L3.90086 11.2966C3.24789 11.5382 3.24789 12.4618 3.90086 12.7034L8.97564 14.5812C9.18093 14.6572 9.34278 14.8191 9.41875 15.0243L11.2966 20.0991C11.5382 20.7521 12.4617 20.7521 12.7034 20.0991L14.5812 15.0243C14.6572 14.8191 14.819 14.6572 15.0243 14.5812L20.0991 12.7034C20.7521 12.4618 20.7521 11.5382 20.0991 11.2966L15.0243 9.41878C14.819 9.34282 14.6572 9.18096 14.5812 8.97567L12.7034 3.90089Z" />
    </g>
</svg>`,"AI_filled.svg":`<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g id="AI_filled">
<path id="Vector" d="M17.7655 3.63363C17.8461 3.41597 18.1539 3.41597 18.2345 3.63363L18.7704 5.08192C18.7957 5.15035 18.8497 5.2043 18.9181 5.22962L20.3664 5.76554C20.584 5.84608 20.584 6.15392 20.3664 6.23446L18.9181 6.77038C18.8497 6.7957 18.7957 6.84965 18.7704 6.91808L18.2345 8.36637C18.1539 8.58403 17.8461 8.58403 17.7655 8.36637L17.2296 6.91808C17.2043 6.84965 17.1503 6.7957 17.0819 6.77038L15.6336 6.23446C15.416 6.15392 15.416 5.84608 15.6336 5.76554L17.0819 5.22962C17.1503 5.2043 17.2043 5.15035 17.2296 5.08192L17.7655 3.63363Z"/>
<path id="Vector (Stroke)" d="M12.7034 3.90089C12.4617 3.24792 11.5382 3.24792 11.2966 3.90089L9.41875 8.97567C9.34278 9.18096 9.18093 9.34282 8.97564 9.41878L3.90086 11.2966C3.24789 11.5382 3.24789 12.4618 3.90086 12.7034L8.97564 14.5812C9.18093 14.6572 9.34278 14.8191 9.41875 15.0243L11.2966 20.0991C11.5382 20.7521 12.4617 20.7521 12.7034 20.0991L14.5812 15.0243C14.6572 14.8191 14.819 14.6572 15.0243 14.5812L20.0991 12.7034C20.7521 12.4618 20.7521 11.5382 20.0991 11.2966L15.0243 9.41878C14.819 9.34282 14.6572 9.18096 14.5812 8.97567L12.7034 3.90089Z"/>
</g>
</svg>
`,"AI_filled_with_color.svg":`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M14.6698 3.38805C14.7826 3.08334 15.2135 3.08334 15.3263 3.38805L15.6174 4.17482C15.6529 4.27062 15.7284 4.34615 15.8242 4.3816L16.611 4.67273C16.9157 4.78548 16.9157 5.21647 16.611 5.32922L15.8242 5.62035C15.7284 5.6558 15.6529 5.73134 15.6174 5.82714L15.3263 6.6139C15.2135 6.91862 14.7826 6.91862 14.6698 6.6139L14.3787 5.82714C14.3432 5.73134 14.2677 5.6558 14.1719 5.62035L13.3851 5.32922C13.0804 5.21647 13.0804 4.78548 13.3851 4.67273L14.1719 4.3816C14.2677 4.34615 14.3432 4.27062 14.3787 4.17482L14.6698 3.38805Z" fill="url(#paint0_linear_8392_146924)"/>
    <path d="M10.5873 3.25088C10.3859 2.70674 9.61631 2.70674 9.41496 3.25088L7.8501 7.47986C7.78679 7.65094 7.65191 7.78582 7.48084 7.84912L3.25185 9.41399C2.70772 9.61533 2.70772 10.385 3.25185 10.5863L7.48084 12.1512C7.65191 12.2145 7.78679 12.3494 7.8501 12.5204L9.41496 16.7494C9.61631 17.2935 10.3859 17.2935 10.5873 16.7494L12.1521 12.5204C12.2154 12.3494 12.3503 12.2145 12.5214 12.1512L16.7504 10.5863C17.2945 10.385 17.2945 9.61533 16.7504 9.41399L12.5214 7.84912C12.3503 7.78582 12.2154 7.65094 12.1521 7.47986L10.5873 3.25088Z" fill="url(#paint1_linear_8392_146924)"/>
    <defs>
        <linearGradient id="paint0_linear_8392_146924" x1="11.2578" y1="1.47825" x2="12.4782" y2="10.5173" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9E58BD"/>
            <stop offset="1" stop-color="#00828E"/>
        </linearGradient>
        <linearGradient id="paint1_linear_8392_146924" x1="-0.706976" y1="-0.0852417" x2="2.78696" y2="25.793" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9E58BD"/>
            <stop offset="1" stop-color="#00828E"/>
        </linearGradient>
    </defs>
</svg>`,"AI_with_color.svg":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <g id="AI_with_color">
        <path id="Vector" fill="url(#paint0_linear_11177_2093)"
            d="M17.7655 3.63363C17.8461 3.41597 18.1539 3.41597 18.2345 3.63363L18.7704 5.08192C18.7957 5.15035 18.8497 5.2043 18.9181 5.22962L20.3664 5.76554C20.584 5.84608 20.584 6.15392 20.3664 6.23446L18.9181 6.77038C18.8497 6.7957 18.7957 6.84965 18.7704 6.91808L18.2345 8.36637C18.1539 8.58403 17.8461 8.58403 17.7655 8.36637L17.2296 6.91808C17.2043 6.84965 17.1503 6.7957 17.0819 6.77038L15.6336 6.23446C15.416 6.15392 15.416 5.84608 15.6336 5.76554L17.0819 5.22962C17.1503 5.2043 17.2043 5.15035 17.2296 5.08192L17.7655 3.63363Z" />
        <path id="Vector (Stroke)" fill="url(#paint0_linear_11177_2093)" fill-rule="evenodd" clip-rule="evenodd"
            d="M12 6.03416L10.7317 9.46152C10.514 10.05 10.05 10.514 9.46149 10.7318L6.03413 12L9.46149 13.2682C10.05 13.486 10.514 13.95 10.7317 14.5385L12 17.9658L13.2682 14.5385C13.486 13.95 13.95 13.486 14.5385 13.2682L17.9658 12L14.5385 10.7318C13.95 10.514 13.486 10.05 13.2682 9.46152L12 6.03416ZM12.7034 3.90089C12.4617 3.24792 11.5382 3.24792 11.2966 3.90089L9.41875 8.97567C9.34278 9.18096 9.18093 9.34282 8.97564 9.41878L3.90086 11.2966C3.24789 11.5382 3.24789 12.4618 3.90086 12.7034L8.97564 14.5812C9.18093 14.6572 9.34278 14.8191 9.41875 15.0243L11.2966 20.0991C11.5382 20.7521 12.4617 20.7521 12.7034 20.0991L14.5812 15.0243C14.6572 14.8191 14.819 14.6572 15.0243 14.5812L20.0991 12.7034C20.7521 12.4618 20.7521 11.5382 20.0991 11.2966L15.0243 9.41878C14.819 9.34282 14.6572 9.18096 14.5812 8.97567L12.7034 3.90089Z" />
    </g>
    <defs>
      <linearGradient id="paint0_linear_11177_2093" x1="-3.34974" y1="-3.10249" x2="0.842988" y2="27.9514" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9E58BD"/>
        <stop offset="1" stop-color="#00828E"/>
      </linearGradient>
    </defs>
</svg>`,"Canvas.svg":`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2280_7058)">
<path d="M7.98806 2.31642C9.17015 2.31642 10.1373 1.43284 10.2806 0.286567C9.55224 0.107463 8.78806 0 7.98806 0C7.2 0 6.42388 0.107463 5.69553 0.286567C5.83881 1.43284 6.80597 2.31642 7.98806 2.31642Z" fill="currentColor"/>
<path d="M0.2985 5.68359C1.44477 5.82688 2.32835 6.79404 2.32835 7.97613C2.32835 9.15822 1.44477 10.1254 0.2985 10.2687C0.107455 9.54031 0.0119324 8.76419 0.0119324 7.97613C0.0119324 7.18807 0.107455 6.41195 0.2985 5.68359Z" fill="currentColor"/>
<path d="M4.40593 7.97619C4.40593 8.37845 4.07984 8.70455 3.67757 8.70455C3.27531 8.70455 2.94922 8.37845 2.94922 7.97619C2.94922 7.57393 3.27531 7.24783 3.67757 7.24783C4.07984 7.24783 4.40593 7.57393 4.40593 7.97619Z" fill="currentColor"/>
<path d="M13.6836 7.97613C13.6836 9.15822 14.5672 10.1254 15.7134 10.2687C15.9045 9.54031 16 8.76419 16 7.97613C16 7.18807 15.9045 6.41195 15.7134 5.68359C14.5672 5.82688 13.6836 6.79404 13.6836 7.97613Z" fill="currentColor"/>
<path d="M13.0626 7.97619C13.0626 8.37845 12.7365 8.70455 12.3343 8.70455C11.932 8.70455 11.6059 8.37845 11.6059 7.97619C11.6059 7.57393 11.932 7.24783 12.3343 7.24783C12.7365 7.24783 13.0626 7.57393 13.0626 7.97619Z" fill="currentColor"/>
<path d="M7.98806 13.6717C6.80597 13.6717 5.83881 14.5552 5.69553 15.7015C6.42388 15.8926 7.2 15.9881 7.98806 15.9881C8.77612 15.9881 9.55224 15.8926 10.2806 15.7015C10.1373 14.5552 9.17015 13.6717 7.98806 13.6717Z" fill="currentColor"/>
<path d="M8.71648 12.3343C8.71648 12.7365 8.39038 13.0626 7.98812 13.0626C7.58586 13.0626 7.25976 12.7365 7.25976 12.3343C7.25976 11.932 7.58586 11.6059 7.98812 11.6059C8.39038 11.6059 8.71648 11.932 8.71648 12.3343Z" fill="currentColor"/>
<path d="M8.71648 3.66564C8.71648 4.0679 8.39038 4.394 7.98812 4.394C7.58586 4.394 7.25976 4.0679 7.25976 3.66564C7.25976 3.26338 7.58586 2.93728 7.98812 2.93728C8.39038 2.93728 8.71648 3.26338 8.71648 3.66564Z" fill="currentColor"/>
<path d="M12.012 12C11.1762 12.8358 11.1165 14.1492 11.821 15.0567C13.1583 14.2686 14.2807 13.1462 15.0568 11.8209C14.1613 11.1044 12.8478 11.1641 12.012 12Z" fill="currentColor"/>
<path d="M11.7851 11.0448C11.7851 11.447 11.459 11.7731 11.0567 11.7731C10.6544 11.7731 10.3283 11.447 10.3283 11.0448C10.3283 10.6425 10.6544 10.3164 11.0567 10.3164C11.459 10.3164 11.7851 10.6425 11.7851 11.0448Z" fill="currentColor"/>
<path d="M3.98813 3.9762C4.82395 3.14038 4.88365 1.82695 4.17918 0.919488C2.84186 1.70755 1.71948 2.82994 0.943356 4.15531C1.83888 4.87173 3.15231 4.80009 3.98813 3.9762Z" fill="currentColor"/>
<path d="M5.65962 4.91933C5.65962 5.32159 5.33352 5.64769 4.93126 5.64769C4.529 5.64769 4.2029 5.32159 4.2029 4.91933C4.2029 4.51707 4.529 4.19097 4.93126 4.19097C5.33352 4.19097 5.65962 4.51707 5.65962 4.91933Z" fill="currentColor"/>
<path d="M12 3.96426C12.8358 4.80009 14.1492 4.85979 15.0567 4.15531C14.2686 2.818 13.1462 1.69561 11.8209 0.919488C11.1045 1.81501 11.1761 3.12844 12 3.96426Z" fill="currentColor"/>
<path d="M11.7851 4.91933C11.7851 5.32159 11.459 5.64769 11.0567 5.64769C10.6544 5.64769 10.3283 5.32159 10.3283 4.91933C10.3283 4.51707 10.6544 4.19097 11.0567 4.19097C11.459 4.19097 11.7851 4.51707 11.7851 4.91933Z" fill="currentColor"/>
<path d="M3.9762 11.9882C3.14038 11.1523 1.82695 11.0926 0.919484 11.7971C1.70754 13.1344 2.82993 14.2568 4.15531 15.0449C4.87172 14.1374 4.81202 12.824 3.9762 11.9882Z" fill="currentColor"/>
<path d="M5.65962 11.0448C5.65962 11.447 5.33352 11.7731 4.93126 11.7731C4.529 11.7731 4.2029 11.447 4.2029 11.0448C4.2029 10.6425 4.529 10.3164 4.93126 10.3164C5.33352 10.3164 5.65962 10.6425 5.65962 11.0448Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2280_7058">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`,"apps.svg":`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.2 3H3.8C3.35817 3 3 3.35817 3 3.8V6.2C3 6.64183 3.35817 7 3.8 7H6.2C6.64183 7 7 6.64183 7 6.2V3.8C7 3.35817 6.64183 3 6.2 3Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.2 10H3.8C3.35817 10 3 10.3582 3 10.8V13.2C3 13.6418 3.35817 14 3.8 14H6.2C6.64183 14 7 13.6418 7 13.2V10.8C7 10.3582 6.64183 10 6.2 10Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.2 17H3.8C3.35817 17 3 17.3582 3 17.8V20.2C3 20.6418 3.35817 21 3.8 21H6.2C6.64183 21 7 20.6418 7 20.2V17.8C7 17.3582 6.64183 17 6.2 17Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.2 3H10.8C10.3582 3 10 3.35817 10 3.8V6.2C10 6.64183 10.3582 7 10.8 7H13.2C13.6418 7 14 6.64183 14 6.2V3.8C14 3.35817 13.6418 3 13.2 3Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.2 10H10.8C10.3582 10 10 10.3582 10 10.8V13.2C10 13.6418 10.3582 14 10.8 14H13.2C13.6418 14 14 13.6418 14 13.2V10.8C14 10.3582 13.6418 10 13.2 10Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.2 17H10.8C10.3582 17 10 17.3582 10 17.8V20.2C10 20.6418 10.3582 21 10.8 21H13.2C13.6418 21 14 20.6418 14 20.2V17.8C14 17.3582 13.6418 17 13.2 17Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.2 3H17.8C17.3582 3 17 3.35817 17 3.8V6.2C17 6.64183 17.3582 7 17.8 7H20.2C20.6418 7 21 6.64183 21 6.2V3.8C21 3.35817 20.6418 3 20.2 3Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.2 10H17.8C17.3582 10 17 10.3582 17 10.8V13.2C17 13.6418 17.3582 14 17.8 14H20.2C20.6418 14 21 13.6418 21 13.2V10.8C21 10.3582 20.6418 10 20.2 10Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.2 17H17.8C17.3582 17 17 17.3582 17 17.8V20.2C17 20.6418 17.3582 21 17.8 21H20.2C20.6418 21 21 20.6418 21 20.2V17.8C21 17.3582 20.6418 17 20.2 17Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"archive.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="20" height="5" x="2" y="3" rx="1" />
  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
  <path d="M10 12h4" />
</svg>
`,"arrow-left-right.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 3 4 7l4 4" />
  <path d="M4 7h16" />
  <path d="m16 21 4-4-4-4" />
  <path d="M20 17H4" />
</svg>
`,"arrow-left.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m12 19-7-7 7-7" />
  <path d="M19 12H5" />
</svg>
`,"arrow-right.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
</svg>
`,"arrow-up.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m5 12 7-7 7 7" />
  <path d="M12 19V5" />
</svg>
`,"bell.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
</svg>
`,"blocks.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
  <rect x="14" y="2" width="8" height="8" rx="1" />
</svg>
`,"bold.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
</svg>
`,"book-a.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <path d="m8 13 4-7 4 7" />
  <path d="M9.1 11h5.7" />
</svg>
`,"book-open-check.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 21V7" />
  <path d="m16 12 2 2 4-4" />
  <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
</svg>
`,"book-open-text.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 7v14" />
  <path d="M16 12h2" />
  <path d="M16 8h2" />
  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
  <path d="M6 12h2" />
  <path d="M6 8h2" />
</svg>
`,"book-solid.svg":`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4.5V19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H6.5C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5Z" fill="currentColor"/>
<path d="M4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21V3M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20V3" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"book.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
</svg>
`,"bookmark-solid.svg":`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21L12 17L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"bookmark.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
</svg>
`,"calendar-clock.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 14v2.2l1.6 1" />
  <path d="M16 2v4" />
  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
  <path d="M3 10h5" />
  <path d="M8 2v4" />
  <circle cx="16" cy="16" r="6" />
</svg>
`,"calendar-days.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
  <path d="M8 14h.01" />
  <path d="M12 14h.01" />
  <path d="M16 14h.01" />
  <path d="M8 18h.01" />
  <path d="M12 18h.01" />
  <path d="M16 18h.01" />
</svg>
`,"calendar.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
</svg>
`,"camera.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
  <circle cx="12" cy="13" r="3" />
</svg>
`,"chart-candlestick.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9 5v4" />
  <rect width="4" height="6" x="7" y="9" rx="1" />
  <path d="M9 15v2" />
  <path d="M17 3v2" />
  <rect width="4" height="8" x="15" y="5" rx="1" />
  <path d="M17 13v3" />
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
</svg>
`,"chart-column-big.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <rect x="15" y="5" width="4" height="12" rx="1" />
  <rect x="7" y="8" width="4" height="9" rx="1" />
</svg>
`,"chart-line.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="m19 9-5 5-4-4-3 3" />
</svg>
`,"chart-pie.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
</svg>
`,"check.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 6 9 17l-5-5" />
</svg>
`,"chevron-down.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 9 6 6 6-6" />
</svg>
`,"chevron-left.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 18-6-6 6-6" />
</svg>
`,"chevron-right.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`,"chevron-up.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m18 15-6-6-6 6" />
</svg>
`,"chevrons-down.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m7 6 5 5 5-5" />
  <path d="m7 13 5 5 5-5" />
</svg>
`,"chevrons-left.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m11 17-5-5 5-5" />
  <path d="m18 17-5-5 5-5" />
</svg>
`,"chevrons-right.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 17 5-5-5-5" />
  <path d="m13 17 5-5-5-5" />
</svg>
`,"chevrons-up-down.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m7 15 5 5 5-5" />
  <path d="m7 9 5-5 5 5" />
</svg>
`,"chevrons-up.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m17 11-5-5-5 5" />
  <path d="m17 18-5-5-5 5" />
</svg>
`,"circle-alert.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <line x1="12" x2="12" y1="8" y2="12" />
  <line x1="12" x2="12.01" y1="16" y2="16" />
</svg>
`,"circle-check-big.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
  <path d="m9 11 3 3L22 4" />
</svg>
`,"circle-check.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
</svg>
`,"circle-minus.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M8 12h8" />
</svg>
`,"circle-question-mark.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
  <path d="M12 17h.01" />
</svg>
`,"circle-small-solid.svg":`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor"/>
</svg>
`,"circle-small.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="6" />
</svg>
`,"circle-stop.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <rect x="9" y="9" width="6" height="6" rx="1" />
</svg>
`,"circle-user-round.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 20a6 6 0 0 0-12 0" />
  <circle cx="12" cy="10" r="4" />
  <circle cx="12" cy="12" r="10" />
</svg>
`,"circle-x.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
</svg>
`,"circle.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
</svg>
`,"clock-alert.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 6v6l4 2" />
  <path d="M20 12v5" />
  <path d="M20 21h.01" />
  <path d="M21.25 8.2A10 10 0 1 0 16 21.16" />
</svg>
`,"code.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m16 18 6-6-6-6" />
  <path d="m8 6-6 6 6 6" />
</svg>
`,"columns-2.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M12 3v18" />
</svg>
`,"columns-3-cog.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
  <path d="m14.3 19.6 1-.4" />
  <path d="M15 3v7.5" />
  <path d="m15.2 16.9-.9-.3" />
  <path d="m16.6 21.7.3-.9" />
  <path d="m16.8 15.3-.4-1" />
  <path d="m19.1 15.2.3-.9" />
  <path d="m19.6 21.7-.4-1" />
  <path d="m20.7 16.8 1-.4" />
  <path d="m21.7 19.4-.9-.3" />
  <path d="M9 3v18" />
  <circle cx="18" cy="18" r="3" />
</svg>`,"contrast.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 18a6 6 0 0 0 0-12v12z" />
</svg>
`,"copy-minus.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="12" x2="18" y1="15" y2="15" />
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
</svg>
`,"copy-plus.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="15" x2="15" y1="12" y2="18" />
  <line x1="12" x2="18" y1="15" y2="15" />
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
</svg>
`,"copy.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
</svg>
`,"document.svg":`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Icon Set">
        <mask id="mask0_1378_28488" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
            width="16" height="16">
            <rect id="Bounding box" width="16" height="16" />
        </mask>
        <g mask="url(#mask0_1378_28488)">
            <path id="draft"
                d="M4.20517 14.3333C3.86839 14.3333 3.58333 14.2166 3.35 13.9833C3.11667 13.75 3 13.4649 3 13.1281V2.87179C3 2.53501 3.11667 2.24996 3.35 2.01663C3.58333 1.78329 3.86839 1.66663 4.20517 1.66663H9.00133C9.162 1.66663 9.3165 1.69785 9.46483 1.76029C9.61306 1.82263 9.74189 1.90852 9.85133 2.01796L12.6487 4.81529C12.7581 4.92474 12.844 5.05357 12.9063 5.20179C12.9688 5.35013 13 5.50463 13 5.66529V13.1281C13 13.4649 12.8833 13.75 12.65 13.9833C12.4167 14.2166 12.1316 14.3333 11.7948 14.3333H4.20517ZM9 5.06396V2.66663H4.20517C4.15383 2.66663 4.10683 2.68801 4.06417 2.73079C4.02139 2.77346 4 2.82046 4 2.87179V13.1281C4 13.1795 4.02139 13.2265 4.06417 13.2691C4.10683 13.3119 4.15383 13.3333 4.20517 13.3333H11.7948C11.8462 13.3333 11.8932 13.3119 11.9358 13.2691C11.9786 13.2265 12 13.1795 12 13.1281V5.66663H9.60267C9.43078 5.66663 9.28739 5.60913 9.1725 5.49413C9.0575 5.37924 9 5.23585 9 5.06396Z" />
        </g>
    </g>
</svg>`,"download.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
</svg>
`,"draggable.svg":`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M7.50034 16.346C7.1302 16.346 6.81332 16.2142 6.54971 15.9506C6.2861 15.687 6.1543 15.3701 6.1543 15C6.1543 14.6298 6.2861 14.313 6.54971 14.0493C6.81332 13.7857 7.1302 13.6539 7.50034 13.6539C7.87048 13.6539 8.18735 13.7857 8.45096 14.0493C8.71457 14.313 8.84638 14.6298 8.84638 15C8.84638 15.3701 8.71457 15.687 8.45096 15.9506C8.18735 16.2142 7.87048 16.346 7.50034 16.346ZM12.5003 16.346C12.1302 16.346 11.8133 16.2142 11.5497 15.9506C11.2861 15.687 11.1543 15.3701 11.1543 15C11.1543 14.6298 11.2861 14.313 11.5497 14.0493C11.8133 13.7857 12.1302 13.6539 12.5003 13.6539C12.8705 13.6539 13.1874 13.7857 13.451 14.0493C13.7146 14.313 13.8464 14.6298 13.8464 15C13.8464 15.3701 13.7146 15.687 13.451 15.9506C13.1874 16.2142 12.8705 16.346 12.5003 16.346ZM7.50034 11.346C7.1302 11.346 6.81332 11.2142 6.54971 10.9506C6.2861 10.687 6.1543 10.3701 6.1543 9.99997C6.1543 9.62983 6.2861 9.31296 6.54971 9.04935C6.81332 8.78574 7.1302 8.65393 7.50034 8.65393C7.87048 8.65393 8.18735 8.78574 8.45096 9.04935C8.71457 9.31296 8.84638 9.62983 8.84638 9.99997C8.84638 10.3701 8.71457 10.687 8.45096 10.9506C8.18735 11.2142 7.87048 11.346 7.50034 11.346ZM12.5003 11.346C12.1302 11.346 11.8133 11.2142 11.5497 10.9506C11.2861 10.687 11.1543 10.3701 11.1543 9.99997C11.1543 9.62983 11.2861 9.31296 11.5497 9.04935C11.8133 8.78574 12.1302 8.65393 12.5003 8.65393C12.8705 8.65393 13.1874 8.78574 13.451 9.04935C13.7146 9.31296 13.8464 9.62983 13.8464 9.99997C13.8464 10.3701 13.7146 10.687 13.451 10.9506C13.1874 11.2142 12.8705 11.346 12.5003 11.346ZM7.50034 6.34601C7.1302 6.34601 6.81332 6.21421 6.54971 5.9506C6.2861 5.68699 6.1543 5.37011 6.1543 4.99997C6.1543 4.62983 6.2861 4.31296 6.54971 4.04935C6.81332 3.78574 7.1302 3.65393 7.50034 3.65393C7.87048 3.65393 8.18735 3.78574 8.45096 4.04935C8.71457 4.31296 8.84638 4.62983 8.84638 4.99997C8.84638 5.37011 8.71457 5.68699 8.45096 5.9506C8.18735 6.21421 7.87048 6.34601 7.50034 6.34601ZM12.5003 6.34601C12.1302 6.34601 11.8133 6.21421 11.5497 5.9506C11.2861 5.68699 11.1543 5.37011 11.1543 4.99997C11.1543 4.62983 11.2861 4.31296 11.5497 4.04935C11.8133 3.78574 12.1302 3.65393 12.5003 3.65393C12.8705 3.65393 13.1874 3.78574 13.451 4.04935C13.7146 4.31296 13.8464 4.62983 13.8464 4.99997C13.8464 5.37011 13.7146 5.68699 13.451 5.9506C13.1874 6.21421 12.8705 6.34601 12.5003 6.34601Z" />
</svg>`,"ellipsis-vertical.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="5" r="1" />
  <circle cx="12" cy="19" r="1" />
</svg>
`,"external-link.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
</svg>
`,"eye.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,"file-pen.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z" />
</svg>
`,"file-text.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" />
</svg>
`,"file-up.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M12 12v6" />
  <path d="m15 15-3-3-3 3" />
</svg>
`,"files.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
  <path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z" />
  <path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" />
</svg>
`,"flag.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
</svg>
`,"folder-archive.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="15" cy="19" r="2" />
  <path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" />
  <path d="M15 11v-1" />
  <path d="M15 17v-2" />
</svg>
`,"folder-input.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
  <path d="M2 13h10" />
  <path d="m9 16 3-3-3-3" />
</svg>
`,"folder-plus.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 10v6" />
  <path d="M9 13h6" />
  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
</svg>
`,"folder-x.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  <path d="m9.5 10.5 5 5" />
  <path d="m14.5 10.5-5 5" />
</svg>
`,"folder.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
</svg>
`,"folders.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z" />
  <path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1" />
</svg>
`,"graduation-cap.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
  <path d="M22 10v6" />
  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
</svg>
`,"grip-vertical.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="9" cy="12" r="1" />
  <circle cx="9" cy="5" r="1" />
  <circle cx="9" cy="19" r="1" />
  <circle cx="15" cy="12" r="1" />
  <circle cx="15" cy="5" r="1" />
  <circle cx="15" cy="19" r="1" />
</svg>
`,"hexagon.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
</svg>
`,"history.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M12 7v5l4 2" />
</svg>
`,"house.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
</svg>
`,"hub.svg":`<svg  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
    <g id="hub">
        <path id="Vector" d="M6.00125 22.75C5.23758 22.75 4.58817 22.4827 4.053 21.9482C3.51767 21.4137 3.25 20.7647 3.25 20.0012C3.25 19.2376 3.51742 18.5882 4.05225 18.053C4.58692 17.5177 5.23625 17.25 6.00025 17.25C6.21425 17.25 6.42442 17.2766 6.63075 17.3298C6.83725 17.3831 7.03217 17.4546 7.2155 17.5443L9.198 15.077C8.78267 14.6243 8.49617 14.1179 8.3385 13.5577C8.18083 12.9974 8.14875 12.4339 8.24225 11.8673L5.3615 10.9135C5.11017 11.3173 4.77975 11.641 4.37025 11.8845C3.96075 12.1282 3.504 12.25 3 12.25C2.23617 12.25 1.58683 11.9827 1.052 11.4482C0.517333 10.9137 0.25 10.2647 0.25 9.50125C0.25 8.73758 0.51725 8.08817 1.05175 7.553C1.58625 7.01767 2.23525 6.75 2.99875 6.75C3.76242 6.75 4.41183 7.01733 4.947 7.552C5.48233 8.08683 5.75 8.73617 5.75 9.5C5.75 9.559 5.74842 9.60833 5.74525 9.648C5.74192 9.68783 5.74025 9.72758 5.74025 9.76725L8.6115 10.7655C8.88717 10.2552 9.26575 9.81733 9.74725 9.452C10.2286 9.08667 10.7808 8.85208 11.4038 8.74825V5.67875C10.7603 5.52758 10.2404 5.20225 9.84425 4.70275C9.44808 4.20342 9.25 3.6345 9.25 2.996C9.25 2.23583 9.51725 1.58817 10.0518 1.053C10.5863 0.517667 11.2353 0.25 11.9988 0.25C12.7624 0.25 13.4118 0.517334 13.947 1.052C14.4823 1.58683 14.75 2.23617 14.75 3C14.75 3.63583 14.5493 4.20342 14.148 4.70275C13.7468 5.20225 13.2296 5.52758 12.5963 5.67875V8.74825C13.2193 8.85208 13.7698 9.08667 14.248 9.452C14.7262 9.81733 15.1063 10.2552 15.3885 10.7655L18.2598 9.76725C18.2533 9.72108 18.25 9.67975 18.25 9.64325V9.5C18.25 8.73617 18.5173 8.08683 19.0518 7.552C19.5863 7.01733 20.2353 6.75 20.9988 6.75C21.7624 6.75 22.4118 7.01725 22.947 7.55175C23.4823 8.08625 23.75 8.73525 23.75 9.49875C23.75 10.2624 23.4827 10.9118 22.948 11.447C22.4132 11.9823 21.7638 12.25 21 12.25C20.498 12.25 20.0392 12.1282 19.6235 11.8845C19.2078 11.641 18.8795 11.3173 18.6385 10.9135L15.7578 11.8673C15.8513 12.4339 15.8192 12.9948 15.6615 13.55C15.5038 14.1052 15.2173 14.6109 14.802 15.0673L16.7845 17.5193C16.9678 17.4359 17.1628 17.3703 17.3693 17.3223C17.5756 17.2741 17.7857 17.25 17.9998 17.25C18.7638 17.25 19.4131 17.5173 19.9478 18.0518C20.4826 18.5863 20.75 19.2353 20.75 19.9988C20.75 20.7624 20.4827 21.4118 19.9482 21.947C19.4137 22.4823 18.7647 22.75 18.0012 22.75C17.2376 22.75 16.5882 22.4827 16.053 21.948C15.5177 21.4132 15.25 20.7638 15.25 20C15.25 19.6847 15.301 19.3812 15.403 19.0895C15.5048 18.7978 15.6571 18.5302 15.8598 18.2865L13.877 15.8C13.309 16.1385 12.6823 16.3078 11.997 16.3078C11.3118 16.3078 10.6821 16.1385 10.1077 15.8L8.14025 18.2865C8.33642 18.5302 8.48708 18.7978 8.59225 19.0895C8.69742 19.3812 8.75 19.6847 8.75 20C8.75 20.7638 8.48275 21.4132 7.94825 21.948C7.41375 22.4827 6.76475 22.75 6.00125 22.75ZM3 10.75C3.3475 10.75 3.64267 10.6285 3.8855 10.3855C4.1285 10.1427 4.25 9.8475 4.25 9.5C4.25 9.1525 4.1285 8.85733 3.8855 8.6145C3.64267 8.3715 3.3475 8.25 3 8.25C2.6525 8.25 2.35733 8.3715 2.1145 8.6145C1.8715 8.85733 1.75 9.1525 1.75 9.5C1.75 9.8475 1.8715 10.1427 2.1145 10.3855C2.35733 10.6285 2.6525 10.75 3 10.75ZM6 21.25C6.3475 21.25 6.64267 21.1285 6.8855 20.8855C7.1285 20.6427 7.25 20.3475 7.25 20C7.25 19.6525 7.1285 19.3573 6.8855 19.1145C6.64267 18.8715 6.3475 18.75 6 18.75C5.6525 18.75 5.35733 18.8715 5.1145 19.1145C4.8715 19.3573 4.75 19.6525 4.75 20C4.75 20.3475 4.8715 20.6427 5.1145 20.8855C5.35733 21.1285 5.6525 21.25 6 21.25ZM12 4.25C12.3475 4.25 12.6427 4.1285 12.8855 3.8855C13.1285 3.64267 13.25 3.3475 13.25 3C13.25 2.6525 13.1285 2.35733 12.8855 2.1145C12.6427 1.8715 12.3475 1.75 12 1.75C11.6525 1.75 11.3573 1.8715 11.1145 2.1145C10.8715 2.35733 10.75 2.6525 10.75 3C10.75 3.3475 10.8715 3.64267 11.1145 3.8855C11.3573 4.1285 11.6525 4.25 12 4.25ZM12 14.8077C12.6423 14.8077 13.1875 14.5837 13.6355 14.1355C14.0837 13.6875 14.3077 13.1423 14.3077 12.5C14.3077 11.8577 14.0837 11.3125 13.6355 10.8645C13.1875 10.4163 12.6423 10.1923 12 10.1923C11.3577 10.1923 10.8125 10.4163 10.3645 10.8645C9.91633 11.3125 9.69225 11.8577 9.69225 12.5C9.69225 13.1423 9.91633 13.6875 10.3645 14.1355C10.8125 14.5837 11.3577 14.8077 12 14.8077ZM18 21.25C18.3475 21.25 18.6427 21.1285 18.8855 20.8855C19.1285 20.6427 19.25 20.3475 19.25 20C19.25 19.6525 19.1285 19.3573 18.8855 19.1145C18.6427 18.8715 18.3475 18.75 18 18.75C17.6525 18.75 17.3573 18.8715 17.1145 19.1145C16.8715 19.3573 16.75 19.6525 16.75 20C16.75 20.3475 16.8715 20.6427 17.1145 20.8855C17.3573 21.1285 17.6525 21.25 18 21.25ZM21 10.75C21.3475 10.75 21.6427 10.6285 21.8855 10.3855C22.1285 10.1427 22.25 9.8475 22.25 9.5C22.25 9.1525 22.1285 8.85733 21.8855 8.6145C21.6427 8.3715 21.3475 8.25 21 8.25C20.6525 8.25 20.3573 8.3715 20.1145 8.6145C19.8715 8.85733 19.75 9.1525 19.75 9.5C19.75 9.8475 19.8715 10.1427 20.1145 10.3855C20.3573 10.6285 20.6525 10.75 21 10.75Z"/>
    </g>
</svg>`,"image.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
</svg>
`,"info-no-circle.svg":`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16V12M12 8H12.01" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"info.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 16v-4" />
  <path d="M12 8h.01" />
</svg>
`,"italic.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="19" x2="10" y1="4" y2="4" />
  <line x1="14" x2="5" y1="20" y2="20" />
  <line x1="15" x2="9" y1="4" y2="20" />
</svg>
`,"layers-solid.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <!-- Top layer - filled -->
  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" fill="currentColor" />
  <!-- Middle layer - outline only -->
  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
  <!-- Bottom layer - outline only -->
  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
</svg>
`,"layers.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
</svg>
`,"layout-grid-plus.svg":`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17.5H21M17.5 21V14M4 3H9C9.55228 3 10 3.44772 10 4V9C10 9.55228 9.55228 10 9 10H4C3.44772 10 3 9.55228 3 9V4C3 3.44772 3.44772 3 4 3ZM15 3H20C20.5523 3 21 3.44772 21 4V9C21 9.55228 20.5523 10 20 10H15C14.4477 10 14 9.55228 14 9V4C14 3.44772 14.4477 3 15 3ZM4 14H9C9.55228 14 10 14.4477 10 15V20C10 20.5523 9.55228 21 9 21H4C3.44772 21 3 20.5523 3 20V15C3 14.4477 3.44772 14 4 14Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"layout-template.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="7" x="3" y="3" rx="1" />
  <rect width="9" height="7" x="3" y="14" rx="1" />
  <rect width="5" height="7" x="16" y="14" rx="1" />
</svg>
`,"life-buoy.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m4.93 4.93 4.24 4.24" />
  <path d="m14.83 9.17 4.24-4.24" />
  <path d="m14.83 14.83 4.24 4.24" />
  <path d="m9.17 14.83-4.24 4.24" />
  <circle cx="12" cy="12" r="4" />
</svg>
`,"lightbulb.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
  <path d="M9 18h6" />
  <path d="M10 22h4" />
</svg>
`,"link.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
</svg>
`,"list-check.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 5H3" />
  <path d="M16 12H3" />
  <path d="M11 19H3" />
  <path d="m15 18 2 2 4-4" />
</svg>
`,"list-filter.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 5h20" />
  <path d="M6 12h12" />
  <path d="M9 19h6" />
</svg>
`,"list-todo.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13 5h8" />
  <path d="M13 12h8" />
  <path d="M13 19h8" />
  <path d="m3 17 2 2 4-4" />
  <rect x="3" y="4" width="6" height="6" rx="1" />
</svg>
`,"list.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 5h.01" />
  <path d="M3 12h.01" />
  <path d="M3 19h.01" />
  <path d="M8 5h13" />
  <path d="M8 12h13" />
  <path d="M8 19h13" />
</svg>
`,"loader-circle.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
</svg>
`,"lock-keyhole.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="16" r="1" />
  <rect x="3" y="10" width="18" height="12" rx="2" />
  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
</svg>
`,"log-in.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m10 17 5-5-5-5" />
  <path d="M15 12H3" />
  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
</svg>
`,"log-out.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m16 17 5-5-5-5" />
  <path d="M21 12H9" />
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
</svg>
`,"logs.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 5h1" />
  <path d="M3 12h1" />
  <path d="M3 19h1" />
  <path d="M8 5h1" />
  <path d="M8 12h1" />
  <path d="M8 19h1" />
  <path d="M13 5h8" />
  <path d="M13 12h8" />
  <path d="M13 19h8" />
</svg>
`,"mail.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <rect x="2" y="4" width="20" height="16" rx="2" />
</svg>
`,"maximize-2.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 3h6v6" />
  <path d="m21 3-7 7" />
  <path d="m3 21 7-7" />
  <path d="M9 21H3v-6" />
</svg>
`,"megaphone.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
  <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
  <path d="M8 6v8" />
</svg>
`,"menu.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />
</svg>
`,"merge.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m8 6 4-4 4 4" />
  <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
  <path d="m20 22-5-5" />
</svg>
`,"message-square-dot.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" />
  <circle cx="19" cy="6" r="3" />
</svg>
`,"message-square.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
</svg>
`,"messages-square.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
</svg>
`,"minimize-2.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m14 10 7-7" />
  <path d="M20 10h-6V4" />
  <path d="m3 21 7-7" />
  <path d="M4 14h6v6" />
</svg>
`,"minus.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
</svg>
`,"move-right.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 8L22 12L18 16" />
  <path d="M2 12H22" />
</svg>
`,"move.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 2v20" />
  <path d="m15 19-3 3-3-3" />
  <path d="m19 9 3 3-3 3" />
  <path d="M2 12h20" />
  <path d="m5 9-3 3 3 3" />
  <path d="m9 5 3-3 3 3" />
</svg>
`,"network_node.svg":'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M219.23-100q-49.15 0-84.19-35.04T100-219.23q0-49.15 35.04-84.19t84.19-35.04q17.6 0 34.22 5.27 16.63 5.27 30.47 14.81L450-484.46v-141.16q-38.61-9.92-63.92-41.66-25.31-31.75-25.31-73.49 0-49.15 35.04-84.19T480-860q49.15 0 84.19 35.04t35.04 84.19q0 41.74-25.12 73.49Q549-635.54 510-625.62v141.16l166.69 166.08q13.85-9.54 30.1-14.81 16.25-5.27 33.98-5.27 49.15 0 84.19 35.04T860-219.23q0 49.15-35.04 84.19T740.77-100q-49.15 0-84.19-35.04t-35.04-84.19q0-14.94 3.54-29.05 3.54-14.1 10.38-26.41L480-430.15 324.54-274.69q6.84 12.31 10.38 26.41 3.54 14.11 3.54 29.05 0 49.15-35.04 84.19T219.23-100Zm521.49-60q24.66 0 41.97-17.26T800-219.19q0-24.66-17.26-41.96-17.26-17.31-41.93-17.31-24.66 0-41.96 17.26-17.31 17.26-17.31 41.92t17.26 41.97Q716.06-160 740.72-160ZM479.95-681.54q24.67 0 41.97-17.26 17.31-17.26 17.31-41.92t-17.26-41.97Q504.71-800 480.05-800q-24.67 0-41.97 17.26-17.31 17.26-17.31 41.93 0 24.66 17.26 41.96 17.26 17.31 41.92 17.31ZM219.19-160q24.66 0 41.96-17.26 17.31-17.26 17.31-41.93 0-24.66-17.26-41.96-17.26-17.31-41.92-17.31t-41.97 17.26Q160-243.94 160-219.28t17.26 41.97Q194.52-160 219.19-160Z"/></svg>',"notebook-pen.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
  <path d="M2 6h4" />
  <path d="M2 10h4" />
  <path d="M2 14h4" />
  <path d="M2 18h4" />
  <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
</svg>
`,"panel-right-open.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M15 3v18" />
  <path d="m10 15-3-3 3-3" />
</svg>
`,"paperclip.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
</svg>
`,"party-popper.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5.8 11.3 2 22l10.7-3.79" />
  <path d="M4 3h.01" />
  <path d="M22 8h.01" />
  <path d="M15 2h.01" />
  <path d="M22 20h.01" />
  <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
  <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
  <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
  <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
</svg>
`,"pen-line.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13 21h8" />
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
</svg>
`,"pencil.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" />
</svg>
`,"phone.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
</svg>
`,"pin-solid.svg":`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17V22Z" fill="currentColor"/>
<path d="M9 10.76C8.9998 11.1321 8.89581 11.4967 8.69972 11.813C8.50363 12.1292 8.22321 12.3844 7.89 12.55L6.11 13.45C5.77679 13.6156 5.49637 13.8708 5.30028 14.187C5.10419 14.5033 5.0002 14.8679 5 15.24V16C5 16.2652 5.10536 16.5196 5.29289 16.7071C5.48043 16.8946 5.73478 17 6 17H18C18.2652 17 18.5196 16.8946 18.7071 16.7071C18.8946 16.5196 19 16.2652 19 16V15.24C18.9998 14.8679 18.8958 14.5033 18.6997 14.187C18.5036 13.8708 18.2232 13.6156 17.89 13.45L16.11 12.55C15.7768 12.3844 15.4964 12.1292 15.3003 11.813C15.1042 11.4967 15.0002 11.1321 15 10.76V7C15 6.73478 15.1054 6.48043 15.2929 6.29289C15.4804 6.10536 15.7348 6 16 6C16.5304 6 17.0391 5.78929 17.4142 5.41421C17.7893 5.03914 18 4.53043 18 4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H8C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4C6 4.53043 6.21071 5.03914 6.58579 5.41421C6.96086 5.78929 7.46957 6 8 6C8.26522 6 8.51957 6.10536 8.70711 6.29289C8.89464 6.48043 9 6.73478 9 7V10.76Z" fill="currentColor"/>
<path d="M12 17V22M9 10.76C8.9998 11.1321 8.89581 11.4967 8.69972 11.813C8.50363 12.1292 8.22321 12.3844 7.89 12.55L6.11 13.45C5.77679 13.6156 5.49637 13.8708 5.30028 14.187C5.10419 14.5033 5.0002 14.8679 5 15.24V16C5 16.2652 5.10536 16.5196 5.29289 16.7071C5.48043 16.8946 5.73478 17 6 17H18C18.2652 17 18.5196 16.8946 18.7071 16.7071C18.8946 16.5196 19 16.2652 19 16V15.24C18.9998 14.8679 18.8958 14.5033 18.6997 14.187C18.5036 13.8708 18.2232 13.6156 17.89 13.45L16.11 12.55C15.7768 12.3844 15.4964 12.1292 15.3003 11.813C15.1042 11.4967 15.0002 11.1321 15 10.76V7C15 6.73478 15.1054 6.48043 15.2929 6.29289C15.4804 6.10536 15.7348 6 16 6C16.5304 6 17.0391 5.78929 17.4142 5.41421C17.7893 5.03914 18 4.53043 18 4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H8C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4C6 4.53043 6.21071 5.03914 6.58579 5.41421C6.96086 5.78929 7.46957 6 8 6C8.26522 6 8.51957 6.10536 8.70711 6.29289C8.89464 6.48043 9 6.73478 9 7V10.76Z" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"pin.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 17v5" />
  <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
</svg>
`,"plus.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="M12 5v14" />
</svg>
`,"pocket-knife.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" />
  <path d="M18 6h.01" />
  <path d="M6 18h.01" />
  <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
  <path d="M18 11.66V22a4 4 0 0 0 4-4V6" />
</svg>
`,"puzzle.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
</svg>
`,"quote.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
</svg>
`,"rectangle-horizontal.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="20" height="12" x="2" y="6" rx="2" />
</svg>
`,"redo-2.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 14 5-5-5-5" />
  <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" />
</svg>
`,"refresh-ccw-dot.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
  <path d="M16 16h5v5" />
  <circle cx="12" cy="12" r="1" />
</svg>
`,"refresh-ccw.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
  <path d="M16 16h5v5" />
</svg>
`,"remove-formatting.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 7V4h16v3" />
  <path d="M5 20h6" />
  <path d="M13 4 8 20" />
  <path d="m15 15 5 5" />
  <path d="m20 15-5 5" />
</svg>
`,"rotate-ccw.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
</svg>
`,"route.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="6" cy="19" r="3" />
  <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
  <circle cx="18" cy="5" r="3" />
</svg>
`,"save.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
  <path d="M7 3v4a1 1 0 0 0 1 1h7" />
</svg>
`,"scaling.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M14 15H9v-5" />
  <path d="M16 3h5v5" />
  <path d="M21 3 9 15" />
</svg>
`,"scroll-text.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 12h-5" />
  <path d="M15 8h-5" />
  <path d="M19 17V5a2 2 0 0 0-2-2H4" />
  <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
</svg>
`,"search.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />
</svg>
`,"send-horizontal.svg":`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.27936 2.01273C3.57708 1.96948 3.88201 2.01662 4.15241 2.14848L4.15143 2.14945L22.1407 10.6436L22.2354 10.6924C22.4202 10.7964 22.5812 10.9388 22.7071 11.1094L22.7667 11.1973L22.8204 11.2891C22.9376 11.5069 23 11.7516 23.0001 12C23 12.284 22.9185 12.5619 22.7667 12.8018C22.6336 13.0119 22.4512 13.1853 22.2354 13.3067L22.1407 13.3555L4.1485 21.8506L4.14948 21.8516C3.87917 21.9825 3.57556 22.0291 3.27839 21.9854C2.98127 21.9416 2.70359 21.8097 2.48249 21.6065C2.26147 21.4031 2.10662 21.1372 2.03815 20.8448C1.96983 20.5524 1.99092 20.2461 2.0987 19.9659L4.93659 12.3487C5.02033 12.1236 5.02039 11.8755 4.93659 11.6504L2.09772 4.03519L2.06159 3.92875C1.98584 3.67802 1.97633 3.41066 2.0362 3.15433L2.06647 3.04496C2.1452 2.79525 2.28864 2.5696 2.48249 2.39164C2.70405 2.18831 2.98179 2.05611 3.27936 2.01273ZM8.00006 11C7.44778 11 7.00006 11.4478 7.00006 12C7.0001 12.5523 7.4478 13 8.00006 13H18.0001C18.5523 13 19 12.5523 19.0001 12C19.0001 11.4478 18.5523 11.0001 18.0001 11H8.00006Z" fill="currentColor"/>
</svg>
`,"settings-2.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14 17H5" />
  <path d="M19 7h-9" />
  <circle cx="17" cy="17" r="3" />
  <circle cx="7" cy="7" r="3" />
</svg>
`,"settings.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,"shapes.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
  <rect x="3" y="14" width="7" height="7" rx="1" />
  <circle cx="17.5" cy="17.5" r="3.5" />
</svg>
`,"share-2.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
</svg>
`,"shield-user.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  <path d="M6.376 18.91a6 6 0 0 1 11.249.003" />
  <circle cx="12" cy="11" r="4" />
</svg>
`,"sliders-horizontal.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 5H3" />
  <path d="M12 19H3" />
  <path d="M14 3v4" />
  <path d="M16 17v4" />
  <path d="M21 12h-9" />
  <path d="M21 19h-5" />
  <path d="M21 5h-7" />
  <path d="M8 10v4" />
  <path d="M8 12H3" />
</svg>
`,"smartphone-charging.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
  <path d="M12.667 8 10 12h4l-2.667 4" />
</svg>
`,"speech.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
  <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
  <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
</svg>
`,"split.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 3h5v5" />
  <path d="M8 3H3v5" />
  <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
  <path d="m15 9 6-6" />
</svg>
`,"square-check-big.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" />
  <path d="m9 11 3 3L22 4" />
</svg>
`,"square-chevron-down.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="m16 10-4 4-4-4" />
</svg>
`,"square-pen.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
</svg>
`,"square.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="18" height="18" x="3" y="3" rx="2" />
</svg>
`,"star-solid.svg":`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5251 2.29502C11.5689 2.20648 11.6366 2.13195 11.7205 2.07984C11.8045 2.02773 11.9013 2.00012 12.0001 2.00012C12.0989 2.00012 12.1957 2.02773 12.2796 2.07984C12.3636 2.13195 12.4313 2.20648 12.4751 2.29502L14.7851 6.97402C14.9373 7.28198 15.1619 7.54842 15.4397 7.75047C15.7175 7.95251 16.0402 8.08413 16.3801 8.13402L21.5461 8.89002C21.644 8.9042 21.7359 8.94549 21.8116 9.00921C21.8872 9.07294 21.9435 9.15656 21.9741 9.25062C22.0047 9.34468 22.0084 9.44542 21.9847 9.54145C21.961 9.63748 21.9109 9.72497 21.8401 9.79402L18.1041 13.432C17.8577 13.6721 17.6734 13.9685 17.5669 14.2956C17.4605 14.6228 17.4352 14.9709 17.4931 15.31L18.3751 20.45C18.3924 20.5479 18.3818 20.6486 18.3446 20.7407C18.3074 20.8328 18.245 20.9126 18.1646 20.971C18.0842 21.0294 17.9891 21.064 17.89 21.0709C17.7908 21.0778 17.6918 21.0567 17.6041 21.01L12.9861 18.582C12.6818 18.4222 12.3433 18.3388 11.9996 18.3388C11.6559 18.3388 11.3174 18.4222 11.0131 18.582L6.39609 21.01C6.30842 21.0564 6.20949 21.0773 6.11054 21.0703C6.0116 21.0632 5.91661 21.0286 5.83639 20.9702C5.75616 20.9119 5.69392 20.8322 5.65675 20.7402C5.61957 20.6483 5.60895 20.5477 5.62609 20.45L6.50709 15.311C6.56529 14.9717 6.54007 14.6234 6.43363 14.2961C6.32718 13.9687 6.1427 13.6722 5.89609 13.432L2.16009 9.79502C2.08868 9.72605 2.03808 9.63841 2.01405 9.54209C1.99002 9.44577 1.99353 9.34463 2.02417 9.25021C2.05481 9.15578 2.11136 9.07186 2.18737 9.008C2.26338 8.94414 2.35579 8.90291 2.45409 8.88902L7.61909 8.13402C7.95935 8.08451 8.28248 7.95307 8.56067 7.751C8.83887 7.54893 9.06379 7.28229 9.21609 6.97402L11.5251 2.29502Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"sync_alt.svg":'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m214.92-290 92.93 92.92q8.92 8.93 8.8 20.89-.11 11.96-9.42 21.27-9.31 8.69-21.08 9-11.76.3-21.07-9L125.31-294.69q-5.62-5.62-7.92-11.85-2.31-6.23-2.31-13.46t2.31-13.46q2.3-6.23 7.92-11.85l139.77-139.77q8.31-8.3 20.57-8.5 12.27-.19 21.58 8.5 9.31 9.31 9.31 21.39 0 12.07-9.31 21.38L214.92-350H790q12.77 0 21.38 8.62Q820-332.77 820-320t-8.62 21.38Q802.77-290 790-290H214.92Zm530.16-320H170q-12.77 0-21.38-8.62Q140-627.23 140-640t8.62-21.38Q157.23-670 170-670h575.08l-92.93-92.92q-8.92-8.93-8.8-20.89.11-11.96 9.42-21.27 9.31-8.69 21.08-9 11.76-.3 21.07 9l139.77 139.77q5.62 5.62 7.92 11.85 2.31 6.23 2.31 13.46t-2.31 13.46q-2.3 6.23-7.92 11.85L694.92-474.92q-8.31 8.3-20.57 8.5-12.27.19-21.58-8.5-9.31-9.31-9.31-21.39 0-12.07 9.31-21.38L745.08-610Z"/></svg>',"table-2.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
</svg>
`,"table-row.svg":`<svg 
	width="16" 
	height="16"
	viewBox="0 0 16 16"
	fill="none" 
	xmlns="http://www.w3.org/2000/svg"
 	stroke="currentColor"
	stroke-width="1.25"
	stroke-linecap="round"
	stroke-linejoin="round"
>
<path d="M2 6L6 6M14 6L10 6M6 2V6M10 2L10 6M10 6L6 6M2 12.6667L2 3.33333C2 2.59695 2.59696 2 3.33334 2L12.6667 2C13.403 2 14 2.59695 14 3.33333L14 12.6667C14 13.403 13.403 14 12.6667 14L3.33333 14C2.59695 14 2 13.403 2 12.6667Z"/>
</svg>
`,"text-initial.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 5h6" />
  <path d="M15 12h6" />
  <path d="M3 19h18" />
  <path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" />
  <path d="M3.92 10h6.16" />
</svg>
`,"thumbs-down-solid.svg":`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.83 14.0146L16.83 2L6.33 2C5.89726 2 5.47619 2.14036 5.13 2.4C4.78381 2.65964 4.53117 3.02457 4.41 3.44L2.08 11.44C1.99306 11.7381 1.97672 12.0523 2.03226 12.3578C2.0878 12.6633 2.21371 12.9516 2.4 13.2C2.58629 13.4484 2.82786 13.65 3.10557 13.7889C3.38328 13.9277 3.68951 14 4 14H9.83L8.83 18.12C8.71696 18.5779 8.70884 19.0554 8.80626 19.5168C8.90368 19.9782 9.10412 20.4117 9.39259 20.7848C9.68107 21.1579 10.0501 21.461 10.4722 21.6714C10.8943 21.8818 11.3584 21.9942 11.83 22L15.28 15.11C15.4456 14.7768 15.7008 14.4964 16.017 14.3003C16.2649 14.1466 16.5424 14.0495 16.83 14.0146Z" fill="currentColor"/>
<path d="M16.83 14.0146L16.83 2L6.33 2M16.83 14.0146C16.5424 14.0495 16.2649 14.1466 16.017 14.3003M16.83 14.0146L16.8681 14.0103M6.33 2C5.89726 2 5.47619 2.14036 5.13 2.4C4.78381 2.65964 4.53117 3.02457 4.41 3.44L2.08 11.44C1.99306 11.7381 1.97672 12.0523 2.03226 12.3578C2.0878 12.6633 2.21371 12.9516 2.4 13.2C2.58629 13.4484 2.82786 13.65 3.10557 13.7889C3.38328 13.9277 3.68951 14 4 14H9.83L8.83 18.12C8.71696 18.5779 8.70884 19.0554 8.80626 19.5168C8.90368 19.9782 9.10412 20.4117 9.39259 20.7848C9.68107 21.1579 10.0501 21.461 10.4722 21.6714C10.8943 21.8818 11.3584 21.9942 11.83 22L15.28 15.11C15.4456 14.7768 15.7008 14.4964 16.017 14.3003M6.33 2L19.83 2C20.3604 2 20.8691 2.21072 21.2442 2.58579C21.6193 2.96086 21.83 3.46957 21.83 4V12C21.83 12.5304 21.6193 13.0391 21.2442 13.4142C20.8691 13.7893 20.3604 14 19.83 14H17.07C17.0024 14 16.935 14.0035 16.8681 14.0103M16.017 14.3003C16.2758 14.1398 16.567 14.041 16.8681 14.0103" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"thumbs-down.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
  <path d="M17 14V2" />
</svg>
`,"thumbs-up-solid.svg":`<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.04983 10.0567V22.157H17.6247C18.0606 22.157 18.4846 22.0156 18.8333 21.7541C19.182 21.4926 19.4364 21.1251 19.5584 20.7067L21.9051 12.6496C21.9926 12.3494 22.0091 12.033 21.9531 11.7253C21.8972 11.4176 21.7704 11.1272 21.5828 10.8771C21.3951 10.6269 21.1519 10.4239 20.8722 10.284C20.5925 10.1442 20.2841 10.0714 19.9714 10.0714H14.0998L15.1069 5.92196C15.2207 5.46083 15.2289 4.97993 15.1308 4.5152C15.0327 4.05047 14.8308 3.61391 14.5403 3.23815C14.2498 2.8624 13.8781 2.55715 13.453 2.34522C13.0279 2.13329 12.5604 2.02016 12.0855 2.01428L8.61089 8.95343C8.44413 9.28902 8.18706 9.57144 7.86858 9.76893C7.619 9.9237 7.33946 10.0215 7.04983 10.0567Z" fill="currentColor"/>
<path d="M7.04983 10.0567V22.157H17.6247M7.04983 10.0567C7.33946 10.0215 7.619 9.9237 7.86858 9.76893M7.04983 10.0567L7.01143 10.061M17.6247 22.157C18.0606 22.157 18.4846 22.0156 18.8333 21.7541C19.182 21.4926 19.4364 21.1251 19.5584 20.7067L21.9051 12.6496C21.9926 12.3494 22.0091 12.033 21.9531 11.7253C21.8972 11.4176 21.7704 11.1272 21.5828 10.8771C21.3951 10.6269 21.1519 10.4239 20.8722 10.284C20.5925 10.1442 20.2841 10.0714 19.9714 10.0714H14.0998L15.1069 5.92196C15.2207 5.46083 15.2289 4.97993 15.1308 4.5152C15.0327 4.05047 14.8308 3.61391 14.5403 3.23815C14.2498 2.8624 13.8781 2.55715 13.453 2.34522C13.0279 2.13329 12.5604 2.02016 12.0855 2.01428L8.61089 8.95343C8.44413 9.28902 8.18706 9.57144 7.86858 9.76893M17.6247 22.157H4.02843C3.49421 22.157 2.98187 21.9447 2.60413 21.567C2.22638 21.1892 2.01416 20.6769 2.01416 20.1427V12.0856C2.01416 11.5514 2.22638 11.0391 2.60413 10.6613C2.98187 10.2836 3.49421 10.0714 4.02843 10.0714H6.80812C6.87622 10.0713 6.94407 10.0678 7.01143 10.061M7.86858 9.76893C7.60799 9.93053 7.31473 10.03 7.01143 10.061" stroke="currentColor" fill="transparent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,"thumbs-up.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
  <path d="M7 10v12" />
</svg>
`,"trash-2.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>
`,"trending-down.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 17h6v-6" />
  <path d="m22 17-8.5-8.5-5 5L2 7" />
</svg>
`,"trending-up.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 7h6v6" />
  <path d="m22 7-8.5 8.5-5-5L2 17" />
</svg>
`,"triangle-alert.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
</svg>
`,"type.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 4v16" />
  <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
  <path d="M9 20h6" />
</svg>
`,"underline.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 4v6a6 6 0 0 0 12 0V4" />
  <line x1="4" x2="20" y1="20" y2="20" />
</svg>
`,"undo-2.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M9 14 4 9l5-5" />
  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
</svg>
`,"upload.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
</svg>
`,"user-round-cog.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m14.305 19.53.923-.382" />
  <path d="m15.228 16.852-.923-.383" />
  <path d="m16.852 15.228-.383-.923" />
  <path d="m16.852 20.772-.383.924" />
  <path d="m19.148 15.228.383-.923" />
  <path d="m19.53 21.696-.382-.924" />
  <path d="M2 21a8 8 0 0 1 10.434-7.62" />
  <path d="m20.772 16.852.924-.383" />
  <path d="m20.772 19.148.924.383" />
  <circle cx="10" cy="8" r="5" />
  <circle cx="18" cy="18" r="3" />
</svg>
`,"user-round.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="8" r="5" />
  <path d="M20 21a8 8 0 0 0-16 0" />
</svg>
`,"user-star.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
  <path d="M8 15H7a4 4 0 0 0-4 4v2" />
  <circle cx="10" cy="7" r="4" />
</svg>
`,"users-round.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 21a8 8 0 0 0-16 0" />
  <circle cx="10" cy="8" r="5" />
  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
</svg>
`,"video.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
  <rect x="2" y="6" width="14" height="12" rx="2" />
</svg>
`,"widget_library.svg":`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <mask id="mask0_14753_7757" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20"/>
    </mask>
    <g mask="url(#mask0_14753_7757)">
        <path d="M6.2502 16.4102V7.74353C6.2502 7.32769 6.3995 6.97478 6.69812 6.68478C6.99673 6.39492 7.35381 6.24999 7.76937 6.24999H16.4104C16.8247 6.24999 17.1794 6.39749 17.4744 6.69249C17.7694 6.98749 17.9169 7.34214 17.9169 7.75644V13.3669C17.9169 13.5702 17.8778 13.7639 17.7998 13.9481C17.7219 14.1323 17.6145 14.2927 17.4777 14.4294L14.4296 17.4775C14.2929 17.6143 14.1325 17.7217 13.9483 17.7996C13.7642 17.8776 13.5704 17.9167 13.3671 17.9167H7.75666C7.34235 17.9167 6.9877 17.7692 6.6927 17.4742C6.3977 17.1792 6.2502 16.8245 6.2502 16.4102ZM2.10437 5.35249C2.02645 4.93693 2.10728 4.56193 2.34687 4.22749C2.58645 3.89304 2.9143 3.68797 3.33041 3.61228L11.8592 2.10415C12.2662 2.02624 12.6343 2.10929 12.9633 2.35332C13.2924 2.59749 13.5044 2.92311 13.5996 3.33019L13.7294 3.99999C13.7774 4.20832 13.7449 4.37485 13.6319 4.49957C13.5188 4.62429 13.3852 4.69707 13.231 4.7179C13.076 4.7404 12.9285 4.71269 12.7883 4.63478C12.6482 4.557 12.5521 4.41429 12.5002 4.20665L12.3544 3.50957C12.3437 3.45082 12.3116 3.40408 12.2581 3.36936C12.2048 3.33464 12.146 3.32262 12.0819 3.33332L3.54999 4.84936C3.47513 4.86006 3.41902 4.89478 3.38166 4.95353C3.3443 5.01228 3.33089 5.07908 3.34145 5.15394L4.7277 13.0577C4.75867 13.2298 4.7277 13.3869 4.63478 13.5289C4.54187 13.671 4.40805 13.7602 4.23332 13.7964C4.05874 13.8328 3.90117 13.7997 3.76062 13.6971C3.6202 13.5946 3.5345 13.4546 3.50353 13.2773L2.10437 5.35249ZM7.5002 7.75644V16.4102C7.5002 16.4851 7.52423 16.5465 7.57228 16.5946C7.62034 16.6426 7.6818 16.6667 7.75666 16.6667H13.3335L16.6669 13.3333V7.75644C16.6669 7.68158 16.6428 7.62013 16.5948 7.57207C16.5467 7.52401 16.4853 7.49999 16.4104 7.49999H7.75666C7.6818 7.49999 7.62034 7.52401 7.57228 7.57207C7.52423 7.62013 7.5002 7.68158 7.5002 7.75644Z"/>
        <path d="M9.14154 14.9249C9.27534 15.06 9.43904 15.1275 9.63262 15.1275C9.8262 15.1275 9.99064 15.0607 10.1259 14.9269C10.2613 14.7931 10.329 14.6296 10.329 14.4364L10.3293 12.9428C10.3293 12.7496 10.2624 12.5854 10.1287 12.4504C9.99487 12.3153 9.83118 12.2478 9.6376 12.2478C9.44401 12.2478 9.27957 12.3146 9.14428 12.4484C9.0089 12.5821 8.94122 12.7456 8.94122 12.9388L8.94094 14.4325C8.94094 14.6257 9.00781 14.7898 9.14154 14.9249Z"/>
        <path d="M11.5659 14.925C11.6997 15.06 11.8634 15.1275 12.0569 15.1275C12.2505 15.1275 12.415 15.0607 12.5503 14.9269C12.6856 14.7931 12.7533 14.6297 12.7533 14.4366L12.7536 9.67525C12.7536 9.48219 12.6867 9.3182 12.553 9.18328C12.4192 9.04828 12.2555 8.98078 12.0619 8.98078C11.8683 8.98078 11.7039 9.04764 11.5686 9.18137C11.4332 9.31518 11.3655 9.47861 11.3655 9.67167L11.3653 14.433C11.3653 14.6261 11.4321 14.7901 11.5659 14.925Z"/>
        <path d="M13.99 13.7458C14.1238 13.8807 14.2875 13.9481 14.4811 13.9481C14.6747 13.9481 14.8391 13.8807 14.9744 13.7458C15.1098 13.6109 15.1775 13.447 15.1775 13.2541V11.781C15.1775 11.5881 15.1106 11.4242 14.9769 11.2893C14.8431 11.1545 14.6794 11.087 14.4858 11.087C14.2922 11.087 14.1278 11.1545 13.9925 11.2893C13.8571 11.4242 13.7894 11.5881 13.7894 11.781V13.2541C13.7894 13.447 13.8563 13.6109 13.99 13.7458Z"/>
    </g>
</svg>`,"x.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,"zap.svg":`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
</svg>
`},l=new Map(Object.entries(s).map(e=>{let[t,r]=e;return[t,!r.includes('stroke="currentColor"')]})),d=(0,n.A)(a.C,{target:"elqddmh0"})("stroke-width:2;fill:",e=>{let{isFilled:t}=e;return t?"currentColor":"transparent"},";"),u=e=>{let{as:t,name:r,customColor:n,width:a,height:u,pureIcon:c,customStyle:p={},...h}=e,m=(0,o.useId)(),g=r||"",_=`${g}.svg`,v=s[_];if(!v)throw Error(`Icon "${g}" not found, check its availability in the svgSources.ts file.`);let f=l.get(_),y=(0,o.useMemo)(()=>{let e;return e=new Map,v.replace(/id="([^"]+)"/g,(t,r)=>{let i=`${r}-${m}`;return e.set(r,i),`id="${i}"`}).replace(/url\(#([^)]+)\)/g,(t,r)=>{let i=e.get(r)||r;return`url(#${i})`})},[v,m]),w=(null!=h.size?({"x-small":16,small:24,medium:32,large:40})[h.size]:void 0)??24,x={width:a??w,height:u??w};return c?(0,i.jsx)(d,{src:y,...x,isFilled:f,style:n?{color:n}:void 0,...h}):(0,i.jsx)(t||"span",{style:{display:"inline-flex",color:n??"inherit",...p},children:(0,i.jsx)(d,{src:y,...x,isFilled:f,...h})})};u.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{required:!1,tsType:{name:"unknown"},description:""},customColor:{required:!1,tsType:{name:"string"},description:""},customStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},pureIcon:{required:!1,tsType:{name:"boolean"},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:""}},composes:["ComponentProps"]}}}]);
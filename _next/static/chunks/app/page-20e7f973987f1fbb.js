(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{53071:function(e,t,a){Promise.resolve().then(a.bind(a,74829))},74829:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return X}});var s=a(57437),i=a(2265),r=a(37053),n=a(90535),o=a(61994),l=a(53335);function d(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,l.m6)((0,o.W)(t))}let c=(0,n.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:a,variant:i,size:n,asChild:o=!1,...l}=e,u=o?r.g7:"button";return(0,s.jsx)(u,{className:d(c({variant:i,size:n,className:a})),ref:t,...l})});u.displayName="Button";let m=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:d("rounded-lg border bg-card text-card-foreground shadow-sm",a),...i})});m.displayName="Card",i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:d("flex flex-col space-y-1.5 p-6",a),...i})}).displayName="CardHeader",i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:d("text-2xl font-semibold leading-none tracking-tight",a),...i})}).displayName="CardTitle",i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:d("text-sm text-muted-foreground",a),...i})}).displayName="CardDescription";let h=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:d("p-6 pt-0",a),...i})});h.displayName="CardContent",i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:d("flex items-center p-6 pt-0",a),...i})}).displayName="CardFooter";var x=a(9191),p=a(40875);let y=x.fC,f=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)(x.ck,{ref:t,className:d("border-b",a),...i})});f.displayName="AccordionItem";let g=i.forwardRef((e,t)=>{let{className:a,children:i,...r}=e;return(0,s.jsx)(x.h4,{className:"flex",children:(0,s.jsxs)(x.xz,{ref:t,className:d("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a),...r,children:[i,(0,s.jsx)(p.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})});g.displayName=x.xz.displayName;let v=i.forwardRef((e,t)=>{let{className:a,children:i,...r}=e;return(0,s.jsx)(x.VY,{ref:t,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r,children:(0,s.jsx)("div",{className:d("pb-4 pt-0",a),children:i})})});v.displayName=x.VY.displayName;var b=a(27648),j=a(63433),w=a(85318),N=a(13812),k=a(56301),I=a(81596);function E(e){let{title:t,description:a,icon:r,children:n}=e,o=(0,i.useRef)(null),l=(0,j.Y)(o,{once:!0,margin:"-100px"});return(0,s.jsx)(k.E.section,{ref:o,initial:{opacity:0,y:50},animate:l?{opacity:1,y:0}:{opacity:0,y:50},transition:{duration:.5,ease:"easeOut"},className:"py-24 px-4",children:(0,s.jsxs)("div",{className:"max-w-5xl mx-auto",children:[(0,s.jsx)("div",{className:"flex items-center justify-center mb-8",children:r}),(0,s.jsx)("h2",{className:"text-3xl font-bold text-center mb-4",children:t}),(0,s.jsx)("p",{className:"text-muted-foreground text-center mb-12 max-w-2xl mx-auto",children:a}),n]})})}var S=a(47625),A=a(7476),C=a(56940),z=a(97059),P=a(62994),R=a(8147),G=a(23263),M=a(36115),O=a(59121);let T=()=>{let e=new Date;return Array.from({length:7},(t,a)=>({date:(0,M.W)((0,O.E)(e,a),"MMM dd"),productivity:Math.floor(30*Math.random())+60,focus:Math.floor(20*Math.random())+40,meetings:Math.floor(15*Math.random())+30}))};function W(){let e=(0,i.useRef)(null),t=(0,j.Y)(e,{once:!0}),[a,r]=(0,i.useState)(T()),n=(0,w.q)(0,{stiffness:50,damping:20}),o=(0,w.q)(0,{stiffness:60,damping:15}),l=(0,N.H)(o,e=>"".concat(Math.round(.85*e),"%")),d=(0,N.H)(o,e=>"".concat(Math.round(.72*e),"%")),c=(0,N.H)(o,e=>"".concat(Math.round(.93*e),"%"));return(0,i.useEffect)(()=>{t&&(n.set(100),o.set(100))},[t,n,o]),(0,s.jsx)(E,{title:"Productivity Insights",description:"Gain valuable insights into your work patterns and boost your efficiency",icon:(0,s.jsx)(I.Z,{className:"w-12 h-12 text-primary"}),children:(0,s.jsxs)("div",{className:"grid gap-8 lg:grid-cols-3",children:[(0,s.jsxs)(k.E.div,{className:"lg:col-span-2 bg-black/20 rounded-xl p-6",ref:e,initial:{opacity:0,x:-50},animate:t?{opacity:1,x:0}:{opacity:0,x:-50},transition:{duration:1,ease:"easeOut"},children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-6",children:"Weekly Performance"}),(0,s.jsx)("div",{className:"h-[300px]",children:(0,s.jsx)(S.h,{width:"100%",height:"100%",children:(0,s.jsxs)(A.T,{data:a,children:[(0,s.jsxs)("defs",{children:[(0,s.jsxs)("linearGradient",{id:"productivityGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,s.jsx)("stop",{offset:"5%",stopColor:"hsl(var(--primary))",stopOpacity:.8}),(0,s.jsx)("stop",{offset:"95%",stopColor:"hsl(var(--primary))",stopOpacity:0})]}),(0,s.jsxs)("linearGradient",{id:"focusGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,s.jsx)("stop",{offset:"5%",stopColor:"#3b82f6",stopOpacity:.8}),(0,s.jsx)("stop",{offset:"95%",stopColor:"#3b82f6",stopOpacity:0})]})]}),(0,s.jsx)(C.q,{strokeDasharray:"3 3",stroke:"hsl(var(--border))"}),(0,s.jsx)(z.K,{dataKey:"date",stroke:"hsl(var(--muted-foreground))",fontSize:12,tickLine:!1}),(0,s.jsx)(P.B,{stroke:"hsl(var(--muted-foreground))",fontSize:12,tickLine:!1,tickFormatter:e=>"".concat(e,"%")}),(0,s.jsx)(R.u,{contentStyle:{backgroundColor:"hsl(var(--background))",border:"1px solid hsl(var(--border))",borderRadius:"6px"}}),(0,s.jsx)(G.u,{type:"monotone",dataKey:"productivity",stroke:"hsl(var(--primary))",fillOpacity:1,fill:"url(#productivityGradient)",strokeWidth:2}),(0,s.jsx)(G.u,{type:"monotone",dataKey:"focus",stroke:"#3b82f6",fillOpacity:1,fill:"url(#focusGradient)",strokeWidth:2})]})})})]}),(0,s.jsx)(k.E.div,{className:"space-y-6",children:[{title:"Productivity Score",value:l,color:"bg-primary"},{title:"Focus Time",value:d,color:"bg-primary"},{title:"Meeting Efficiency",value:c,color:"bg-green-500"}].map((e,t)=>{let{title:a,value:i,color:r}=e;return(0,s.jsxs)("div",{className:"bg-black/20 rounded-xl p-6",children:[(0,s.jsx)("h4",{className:"text-sm font-medium text-muted-foreground mb-2",children:a}),(0,s.jsx)("div",{className:"text-3xl font-bold",children:(0,s.jsx)(k.E.span,{children:i})}),(0,s.jsx)("div",{className:"h-2 bg-muted mt-2 rounded-full overflow-hidden",children:(0,s.jsx)(k.E.div,{className:"h-full ".concat(r),style:{width:i}})})]},t)})})]})})}var Y=a(92369),q=a(5005),H=a(95805),Z=a(20464),_=a(89345),D=a(42351),F=a(75135),L=a(64972),B=a(32364),U=a(6076),K=a(45447);let V=[{id:1,color:"bg-blue-500/20 dark:bg-blue-500/30"},{id:2,color:"bg-purple-500/20 dark:bg-purple-500/30"},{id:3,color:"bg-green-500/20 dark:bg-green-500/30"},{id:4,color:"bg-orange-500/20 dark:bg-orange-500/30"},{id:5,color:"bg-pink-500/20 dark:bg-pink-500/30"},{id:6,color:"bg-cyan-500/20 dark:bg-cyan-500/30"}];function J(){return(0,s.jsxs)("div",{className:"absolute inset-0 -z-10",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"}),V.map((e,t)=>(0,s.jsx)(k.E.div,{initial:{opacity:0,y:100,x:-100,scale:.8},animate:{opacity:[.5,.8,.5],y:[-20,20,-20],x:[-20,20,-20],scale:[.8,1,.8]},transition:{duration:8,repeat:1/0,ease:"easeInOut",delay:.5*t},className:"absolute",style:{left:"".concat(20*t+10,"%"),top:"".concat(15*t+20,"%")},children:(0,s.jsx)(m,{className:"w-40 h-20 ".concat(e.color," border-none shadow-2xl backdrop-blur-md"),children:(0,s.jsxs)("div",{className:"h-full w-full p-4",children:[(0,s.jsx)("div",{className:"h-2 w-1/2 bg-current opacity-20 rounded mb-2"}),(0,s.jsx)("div",{className:"h-2 w-3/4 bg-current opacity-20 rounded"})]})})},e.id))]})}let Q=()=>{let e=(0,i.useRef)(null),t=(0,j.Y)(e,{once:!0,margin:"-100px"}),a=[{title:"Personalized Scheduling for Individuals",description:"Optimize your daily routine and boost productivity with AI-driven personal scheduling.",icon:(0,s.jsx)(Y.Z,{className:"w-12 h-12 text-primary"}),features:["Smart task prioritization based on your energy levels","Personalized work-life balance recommendations","Adaptive scheduling that learns from your habits"]},{title:"Enterprise-Grade Scheduling Solutions",description:"Streamline your organization's workflow with our corporate scheduling AI.",icon:(0,s.jsx)(q.Z,{className:"w-12 h-12 text-primary"}),features:["Efficient team coordination and resource allocation","Automated meeting scheduling across departments","Data-driven insights for optimizing corporate productivity"]},{title:"Enhance Team Collaboration",description:"Foster seamless teamwork with AI-powered group scheduling and task management.",icon:(0,s.jsx)(H.Z,{className:"w-12 h-12 text-primary"}),features:["Intelligent meeting time suggestions for optimal attendance","Collaborative task boards with AI-assisted assignments","Real-time updates and notifications for team members"]},{title:"Insightful Analytics Dashboard",description:"Gain valuable insights into your productivity and team performance.",icon:(0,s.jsx)(Z.Z,{className:"w-12 h-12 text-primary"}),features:["Comprehensive productivity reports and trends","Time allocation analysis for individuals and teams","AI-generated recommendations for efficiency improvements"]}],r={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return(0,s.jsx)("section",{className:"py-24 px-4 bg-black/20",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,s.jsx)(k.E.div,{ref:e,className:"grid grid-cols-1 md:grid-cols-2 gap-8",variants:{hidden:{},visible:{transition:{staggerChildren:.2}}},initial:"hidden",animate:t?"visible":"hidden",children:a.map((e,t)=>(0,s.jsxs)(k.E.div,{variants:r,transition:{duration:.5},className:"bg-black/40 backdrop-blur-sm rounded-xl p-8 hover:bg-black/50 transition-all duration-300",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4 mb-6",children:[(0,s.jsx)("div",{className:"p-3 rounded-lg bg-primary/10",children:e.icon}),(0,s.jsx)("h3",{className:"text-xl font-semibold",children:e.title})]}),(0,s.jsx)("p",{className:"text-muted-foreground mb-6",children:e.description}),(0,s.jsx)("ul",{className:"space-y-3",children:e.features.map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center gap-3 text-sm",children:[(0,s.jsx)("svg",{className:"h-5 w-5 flex-shrink-0 text-primary",fill:"currentColor",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,s.jsx)("span",{children:e})]},t))})]},t))})})})};var X=()=>{let[e,t]=(0,i.useState)(!1),{scrollY:a}=(0,K.v)();(0,i.useEffect)(()=>{let e=a.onChange(e=>{t(e>50)});return()=>e()},[a]);let r=(0,i.useRef)(null),n=(0,j.Y)(r,{once:!0}),o=(0,N.H)(a,[0,300],[0,100]),l=(0,N.H)(a,[0,300],[1,0]);return(0,s.jsxs)("div",{className:"min-h-screen overflow-x-hidden",children:[(0,s.jsx)("div",{className:"fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4",children:(0,s.jsxs)(k.E.nav,{className:"flex items-center justify-between max-w-5xl w-full rounded-full px-8 py-4 transition-all duration-300 border border-gray-5000 ".concat(e?"bg-blue-550/85 backdrop-blur-md shadow-lg":"bg-blue-998/40 backdrop-blur-sm"),initial:{y:-100},animate:{y:0},transition:{type:"spring",stiffness:100,damping:20},children:[(0,s.jsx)("div",{className:"flex items-center space-x-2",children:(0,s.jsx)("span",{className:"text-xl font-bold text-white",children:"PEER SENSE AI"})}),(0,s.jsxs)("div",{className:"flex items-center space-x-6",children:[(0,s.jsx)(b.default,{href:"/",className:"text-sm text-gray-200 hover:text-white transition-colors",children:"Home"}),(0,s.jsx)(b.default,{href:"/events",className:"text-sm text-gray-200 hover:text-white transition-colors",children:"Events"}),(0,s.jsx)(b.default,{href:"/docs",className:"text-sm text-gray-200 hover:text-white transition-colors",children:"Docs"}),(0,s.jsx)("a",{href:"/download",children:(0,s.jsx)(u,{className:"text-sm bg-white text-gray-900 hover:bg-gray-100",children:"Download"})})]})]})}),(0,s.jsxs)(k.E.section,{ref:r,className:"relative py-32 text-center space-y-6 min-h-screen flex flex-col justify-center items-center",initial:{opacity:0},animate:n?{opacity:1}:{opacity:0},transition:{duration:.5,delay:.2},children:[(0,s.jsx)(J,{}),(0,s.jsxs)(k.E.div,{style:{y:o,opacity:l},className:"relative z-10",children:[(0,s.jsx)(k.E.h1,{className:"text-4xl md:text-6xl font-bold max-w-3xl mx-auto bg-clip-text",initial:{y:20,opacity:0},animate:n?{y:0,opacity:1}:{y:20,opacity:0},transition:{duration:.5,delay:.3},children:"AI-Powered Task Management"}),(0,s.jsx)(k.E.p,{className:"text-muted-foreground max-w-2xl mx-auto mt-4",initial:{y:20,opacity:0},animate:n?{y:0,opacity:1}:{y:20,opacity:0},transition:{duration:.5,delay:.4},children:"Experience the future of productivity with PeerSense AI. Our intelligent system adapts to your work style, making task management effortless and intuitive."})]}),(0,s.jsxs)(k.E.div,{className:"flex justify-center gap-4 mt-8 relative z-10",initial:{y:20,opacity:0},animate:n?{y:0,opacity:1}:{y:20,opacity:0},transition:{duration:.5,delay:.5},children:[(0,s.jsx)(u,{size:"lg",children:"Get Started"}),(0,s.jsx)(u,{size:"lg",variant:"secondary",children:"Learn More"})]})]}),(0,s.jsx)($,{}),(0,s.jsx)(Q,{}),(0,s.jsx)(W,{}),(0,s.jsx)(ee,{}),(0,s.jsx)(et,{}),(0,s.jsxs)("section",{className:"py-24 px-4",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-center mb-12",children:"Intelligent Features"}),(0,s.jsx)("p",{className:"text-muted-foreground text-center mb-16 max-w-2xl mx-auto",children:"Experience the next generation of scheduling with our AI-powered features"}),(0,s.jsxs)("div",{className:"grid gap-6 max-w-5xl mx-auto",children:[(0,s.jsx)(ea,{title:"Personalized Scheduling",highlight:"Unlock your true productivity potential with schedules tailored to your personality and energy levels.",description:"PeerSense AI customizes schedules based on your unique personality and work preferences."}),(0,s.jsx)(ea,{title:"Smart Mood & Energy Tracking",highlight:"Let your mood and energy guide your schedule, ensuring you tackle tasks when you're most capable.",description:"The AI analyzes your mood and energy throughout the day, adjusting your tasks to match your current state for better performance."}),(0,s.jsx)(ea,{title:"Google Calendar Integration",highlight:"Effortlessly syncs with your Google Calendar to transform how you organize your day—no setup required.",description:"PeerSense AI integrates with your existing Google Calendar to provide an effortless experience."}),(0,s.jsx)(ea,{title:"Optimized Group Scheduling",highlight:"Enhance teamwork with AI-driven scheduling that accounts for peer dynamics and group productivity.",description:"PeerSense AI ensures that group activities align with everyone's optimal work patterns."}),(0,s.jsx)(ea,{title:"Smart Travel Planning",highlight:"Plan your travel and appointments with ease—let the AI handle the logistics for stress-free scheduling.",description:"PeerSense AI assists in planning travel and managing appointments, optimizing timing based on location and traffic."})]})]}),(0,s.jsxs)("section",{className:"py-24 px-4",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-center mb-12",children:"Frequently Asked Questions"}),(0,s.jsx)("div",{className:"max-w-3xl mx-auto",children:(0,s.jsxs)(y,{type:"single",collapsible:!0,className:"w-full",children:[(0,s.jsxs)(f,{value:"item-1",children:[(0,s.jsx)(g,{children:"How does Calendar AI work?"}),(0,s.jsx)(v,{children:"Calendar AI uses advanced machine learning algorithms to analyze your behavior, preferences, and energy patterns throughout the day. It integrates seamlessly with your existing calendar (like Google Calendar) and dynamically adapts your schedule. Based on your productivity and mood, it recommends optimal times for tasks, meetings, and breaks, ensuring you work smarter, not harder."})]}),(0,s.jsxs)(f,{value:"item-2",children:[(0,s.jsx)(g,{children:"When will the product be available?"}),(0,s.jsx)(v,{children:"PeerSense AI is currently in the beta phase, and we're actively refining the product based on user feedback. We plan to officially launch the full version in Q2 2025. Stay tuned for updates, and feel free to join the waitlist for early access!"})]}),(0,s.jsxs)(f,{value:"item-3",children:[(0,s.jsx)(g,{children:"Is my calendar data secure?"}),(0,s.jsx)(v,{children:"We take your privacy and security seriously. PeerSense AI uses end-to-end encryption to protect your calendar data. We also follow best practices in data security to ensure that your personal information remains private. Additionally, we never access or share your data without your explicit permission."})]}),(0,s.jsxs)(f,{value:"item-4",children:[(0,s.jsx)(g,{children:"What calendar platforms are supported?"}),(0,s.jsx)(v,{children:"Currently, PeerSense AI supports Google Calendar for seamless integration, with plans to expand to other platforms like Microsoft Outlook and Apple Calendar in the near future. Stay updated as we add more calendar platforms to make scheduling even easier for you."})]}),(0,s.jsxs)(f,{value:"item-5",children:[(0,s.jsx)(g,{children:"How does personality-based scheduling work?"}),(0,s.jsx)(v,{children:"When you sign up, PeerSense AI asks you a series of questions about your work habits, focus patterns, and collaboration style. Using this data, AI assigns a personalized scheduling profile and continuously refines it over time."})]}),(0,s.jsxs)(f,{value:"item-6",children:[(0,s.jsx)(g,{children:"Can I change my personality type manually?"}),(0,s.jsxs)(v,{children:["No, but the AI ",(0,s.jsx)("em",{children:"adjusts dynamically"})," based on your work patterns. If your schedule feels incorrect, go to"," ",(0,s.jsx)("em",{children:"Settings - Work Preferences"})," and adjust your scheduling needs."]})]}),(0,s.jsxs)(f,{value:"item-7",children:[(0,s.jsx)(g,{children:"Does PeerSense AI support team-wide scheduling?"}),(0,s.jsxs)(v,{children:["Yes! It syncs with your teams Google Calendars to"," ",(0,s.jsx)("em",{children:"optimize meeting times"})," and collaboration."]})]})]})})]}),(0,s.jsxs)("section",{className:"py-24 px-4 bg-gradient-to-b from-black to-gray-900",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-center mb-12",children:"What Our Users Say"}),(0,s.jsxs)("div",{className:"max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:[(0,s.jsx)(ei,{quote:"PeerSense AI has revolutionized how I manage my time. It's like having a personal assistant that truly understands my work style.",author:"Sarah J., Freelance Designer"}),(0,s.jsx)(ei,{quote:"As a CEO, time is my most valuable asset. PeerSense AI has helped me optimize my schedule and boost my team's productivity significantly.",author:"Michael R., Tech Startup CEO"}),(0,s.jsx)(ei,{quote:"The team collaboration features are game-changing. We've seen a 30% increase in meeting efficiency since adopting PeerSense AI.",author:"Emily L., Project Manager"})]})]}),(0,s.jsxs)("section",{className:"py-24 px-4 text-center",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold mb-6",children:"Get in Touch"}),(0,s.jsx)("p",{className:"text-muted-foreground mb-12 max-w-2xl mx-auto",children:"Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}),(0,s.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,s.jsx)("a",{href:"mailto:dhruvadas77@gmail.com",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsxs)(u,{variant:"secondary",children:[(0,s.jsx)(_.Z,{className:"w-4 h-4 mr-2"}),"Email Us"]})}),(0,s.jsx)("a",{href:"https://x.com/Grapefruit60538?t=IsNp3VNTMBDX0hwJ2sF5cg&s=08",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsxs)(u,{variant:"secondary",children:[(0,s.jsx)(D.Z,{className:"w-4 h-4 mr-2"}),"Twitter"]})}),(0,s.jsx)("a",{href:"https://github.com/peer-sense/",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsxs)(u,{variant:"secondary",children:[(0,s.jsx)(F.Z,{className:"w-4 h-4 mr-2"}),"GitHub"]})})]})]})]})};let $=()=>{let e=(0,i.useRef)(null),t=(0,j.Y)(e,{once:!0,margin:"-100px"}),a={hidden:{opacity:0,y:50},visible:{opacity:1,y:0}};return(0,s.jsx)(es,{title:"AI Integration Showcase",description:"Experience the power of AI in every aspect of your scheduling",icon:(0,s.jsx)(L.Z,{className:"w-12 h-12 text-primary"}),children:(0,s.jsx)(k.E.div,{ref:e,className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",initial:"hidden",animate:t?"visible":"hidden",variants:{visible:{transition:{staggerChildren:.1}}},children:[{title:"Personality-Based Scheduling",description:"Adapts tasks based on your personality type and suggests optimal times for deep work, meetings, and relaxation."},{title:"AI-Powered Task Optimization",description:"Prioritizes tasks based on urgency and your productivity patterns, automatically adjusting schedules for high-priority tasks."},{title:"Peer Collaboration & Influence",description:"Syncs with team members schedules to optimize group work and avoid conflicts by suggesting the best meeting times."},{title:"Real-Time Adjustments",description:"Detects changes in your work patterns and mood, rescheduling tasks on the fly for enhanced productivity."},{title:"Smart Notifications & Reminders",description:"Keeps you informed with timely alerts for task deadlines, scheduling conflicts, and changes, ensuring you never miss a beat."},{title:"Seamless Integrations",description:"Effortlessly connects with Google Calendar, Slack, and more to keep your schedule synchronized across platforms."}].map((e,t)=>(0,s.jsx)(k.E.div,{variants:a,transition:{duration:.5},children:(0,s.jsx)(m,{className:"h-full",children:(0,s.jsxs)(h,{className:"p-6",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-2",children:e.title}),(0,s.jsx)("p",{className:"text-muted-foreground",children:e.description})]})})},t))})})},ee=()=>{let e=(0,i.useRef)(null),t=(0,j.Y)(e,{once:!0,margin:"-100px"}),a={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0}};return(0,s.jsx)(es,{title:"Customization Options",description:"Tailor PeerSense AI to fit your unique workflow and preferences",icon:(0,s.jsx)(B.Z,{className:"w-12 h-12 text-primary"}),children:(0,s.jsx)(k.E.div,{ref:e,variants:{hidden:{},visible:{transition:{staggerChildren:.1}}},initial:"hidden",animate:t?"visible":"hidden",children:["Personalized UI themes","Custom notification settings","Flexible scheduling rules","Integration with your favorite tools","Customizable AI behavior","Tailored reporting and analytics"].map((e,t)=>(0,s.jsxs)(k.E.div,{variants:a,transition:{duration:.5},className:"flex items-center space-x-3 mb-4",children:[(0,s.jsx)("svg",{className:"h-5 w-5 flex-shrink-0 text-primary",fill:"currentColor",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,s.jsx)("span",{children:e})]},t))})})},et=()=>{let e=(0,i.useRef)(null),t=(0,j.Y)(e,{once:!0,margin:"-100px"}),a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return(0,s.jsx)(es,{title:"Getting Started is Easy",description:"Follow these simple steps to revolutionize your scheduling",icon:(0,s.jsx)(U.Z,{className:"w-12 h-12 text-primary"}),children:(0,s.jsx)(k.E.div,{ref:e,className:"grid gap-6 md:grid-cols-2 lg:grid-cols-4",variants:{hidden:{},visible:{transition:{staggerChildren:.2}}},initial:"hidden",animate:t?"visible":"hidden",children:[{title:"Sign Up",description:"Create your PeerSense AI account"},{title:"Connect Calendar",description:"Integrate with your existing calendar"},{title:"Set Preferences",description:"Customize AI to match your work style"},{title:"Start Scheduling",description:"Let AI optimize your daily routine"}].map((e,t)=>(0,s.jsxs)(k.E.div,{variants:a,transition:{duration:.5},className:"text-center",children:[(0,s.jsx)(k.E.div,{className:"w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-2xl font-bold",whileHover:{scale:1.1},whileTap:{scale:.9},children:t+1}),(0,s.jsx)("h3",{className:"text-xl font-semibold mb-2",children:e.title}),(0,s.jsx)("p",{className:"text-muted-foreground",children:e.description})]},t))})})},ea=e=>{let{title:t,highlight:a,description:r}=e,n=(0,i.useRef)(null),o=(0,j.Y)(n,{once:!0,margin:"-100px"});return(0,s.jsx)(k.E.div,{ref:n,initial:{opacity:0,y:50},animate:o?{opacity:1,y:0}:{opacity:0,y:50},transition:{duration:.5,ease:"easeOut"},children:(0,s.jsx)(m,{className:"bg-black border-gray-800 transition-all duration-300 hover:border-primary/50",children:(0,s.jsxs)(h,{className:"p-6",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-2",children:t}),(0,s.jsx)("p",{className:"text-primary mb-2",children:a}),(0,s.jsx)("p",{className:"text-muted-foreground",children:r})]})})})},es=e=>{let{title:t,description:a,icon:r,children:n}=e,o=(0,i.useRef)(null),l=(0,j.Y)(o,{once:!0,margin:"-100px"});return(0,s.jsx)(k.E.section,{ref:o,initial:{opacity:0,y:50},animate:l?{opacity:1,y:0}:{opacity:0,y:50},transition:{duration:.5,ease:"easeOut"},className:"py-24 px-4",children:(0,s.jsxs)("div",{className:"max-w-5xl mx-auto",children:[(0,s.jsx)("div",{className:"flex items-center justify-center mb-8",children:r}),(0,s.jsx)("h2",{className:"text-3xl font-bold text-center mb-4",children:t}),(0,s.jsx)("p",{className:"text-muted-foreground text-center mb-12 max-w-2xl mx-auto",children:a}),n]})})},ei=e=>{let{quote:t,author:a}=e,r=(0,i.useRef)(null),n=(0,j.Y)(r,{once:!0,margin:"-50px"});return(0,s.jsxs)(k.E.div,{ref:r,initial:{opacity:0,scale:.9},animate:n?{opacity:1,scale:1}:{opacity:0,scale:.9},transition:{duration:.5},className:"bg-gray-800 p-6 rounded-lg shadow-lg",children:[(0,s.jsxs)("p",{className:"text-lg mb-4",children:['"',t,'"']}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:["- ",a]})]})}}},function(e){e.O(0,[762,971,117,744],function(){return e(e.s=53071)}),_N_E=e.O()}]);
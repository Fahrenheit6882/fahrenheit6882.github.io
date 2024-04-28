"use strict";(self.webpackChunkfahrenheit_docusaurus=self.webpackChunkfahrenheit_docusaurus||[]).push([[561],{5426:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>h});var i=o(4848),s=o(8453);const n={sidebar_label:"How to make changes",sidebar_position:3},r="How this site is organized",a={id:"website/website-edit",title:"How this site is organized",description:"The index.html and app.css files at the root of our git repository are displayed in your browser when you browse to https://fahrenheitrobotics.org",source:"@site/docs/website/website-edit.md",sourceDirName:"website",slug:"/website/website-edit",permalink:"/site/docs/website/website-edit",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"How to make changes",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Web Technologies",permalink:"/site/docs/website/website-technology"},next:{title:"How to deploy",permalink:"/site/docs/website/website-deploy"}},d={},h=[{value:"Download and install VS Code",id:"download-and-install-vs-code",level:2},{value:"Download files using VS Code and git",id:"download-files-using-vs-code-and-git",level:2},{value:"Make quick changes from your browser",id:"make-quick-changes-from-your-browser",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-this-site-is-organized",children:"How this site is organized"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"index.html"})," and ",(0,i.jsx)(t.code,{children:"app.css"})," files at the root of our git repository are displayed in your browser when you browse to ",(0,i.jsx)(t.a,{href:"https://fahrenheitrobotics.org",children:"https://fahrenheitrobotics.org"})]}),"\n",(0,i.jsxs)(t.p,{children:["You can change these files by simply opening them in an editor (such as VS Code). When they are saved and commited back to our git repository, then they will be hosted by ",(0,i.jsx)(t.a,{href:"https://pages.github.com/",children:"Github Pages"})," and available for everyone on the internet to see."]}),"\n",(0,i.jsxs)(t.p,{children:["It is also possible to add more ",(0,i.jsx)(t.code,{children:"html"})," pages as needed and either link to them from ",(0,i.jsx)(t.code,{children:"index.html"}),", or create subfolders that will appear as paths in our url."]}),"\n",(0,i.jsxs)(t.p,{children:["However, everytime you want to create a new ",(0,i.jsx)(t.code,{children:"html"})," page, you will need to copy the existing ",(0,i.jsx)(t.code,{children:"index.html"}),". Let's say for example that we were to create two more html files, one named ",(0,i.jsx)(t.code,{children:"sponsors.html"})," that would display all of our sponsors, and a second named ",(0,i.jsx)(t.code,{children:"calendar.html"})," to show our team calendar."]}),"\n",(0,i.jsxs)(t.p,{children:["That could work fine. But, then imagine we want to update the links displayed across the top of our website. We would need to edit all 3 html files (",(0,i.jsx)(t.code,{children:"index.html"}),", ",(0,i.jsx)(t.code,{children:"sponsors.html"}),", and ",(0,i.jsx)(t.code,{children:"calendar.html"}),") to add a new link. You can see how this will become tedious!"]}),"\n",(0,i.jsxs)(t.p,{children:["So, we're using a project call ",(0,i.jsx)(t.a,{href:"https://docusaurus.io/",children:"Docusaurs"})," to help us manage the them and look and feel of our site."]}),"\n",(0,i.jsx)(t.p,{children:"Docusaurus is a content management system and a static site generator."}),"\n",(0,i.jsxs)(t.p,{children:["All the files found inside the ",(0,i.jsx)(t.a,{href:"../../../site/",children:"site"})," directory are part of ",(0,i.jsx)(t.a,{href:"https://docusaurus.io/",children:"Docusaurs"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"download-and-install-vs-code",children:"Download and install VS Code"}),"\n",(0,i.jsx)(t.p,{children:"All the files in this repository are simple text files. You can use any text editor program you want to change these files. But, we suggest you use VS Code, which is a editor program built specficially to edit source code text files."}),"\n",(0,i.jsx)(t.p,{children:"Learn how to Download and Install VS Code here:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://code.visualstudio.com/docs/introvideos/basics",children:"https://code.visualstudio.com/docs/introvideos/basics"})}),"\n",(0,i.jsx)(t.h2,{id:"download-files-using-vs-code-and-git",children:"Download files using VS Code and git"}),"\n",(0,i.jsx)(t.p,{children:"Once you have VS Code installed, you will need to download the files you see here to your computer and then open the files inside your editor."}),"\n",(0,i.jsx)(t.p,{children:"We can click on each file and click download, but that is tedious and it will also be difficult to know if someone else has changed a file since we downloaded our copy."}),"\n",(0,i.jsxs)(t.p,{children:["There's a program called ",(0,i.jsx)(t.a,{href:"https://git-scm.com/",children:"git"})," that was invented to help people edit text files together."]}),"\n",(0,i.jsxs)(t.p,{children:["When you download all files from a github repository to your own computer using ",(0,i.jsx)(t.code,{children:"git"}),", that's called ",(0,i.jsx)(t.code,{children:"cloning"})," a repository."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"git"})," is an example of a Source Control Manager. There are other source controls managers as well, such as ",(0,i.jsx)(t.a,{href:"https://subversion.apache.org/",children:"subversion"})," and ",(0,i.jsx)(t.a,{href:"https://www.perforce.com/",children:"perforce"}),". But, these days, ",(0,i.jsx)(t.code,{children:"git"})," is the most popular."]})}),"\n",(0,i.jsxs)(t.p,{children:["It's possible to use ",(0,i.jsx)(t.code,{children:"git"})," by itself (outside of VS Code), but we can also use ",(0,i.jsx)(t.code,{children:"git"})," right from inside VS Code which is a little easier."]}),"\n",(0,i.jsxs)(t.p,{children:["The first time you open VS Code, you'll see a page like the image below. Click on ",(0,i.jsx)(t.code,{children:"Clone Git Repository"})," as shown here:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"VS Code Git Clone",src:o(3404).A+"",width:"2548",height:"1328"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["In 2008, a group of people thought it would be cool if they could share their ",(0,i.jsx)(t.code,{children:"git"})," repositories online and so they created ",(0,i.jsx)(t.code,{children:"Github"}),". There is another popular site for sharing git repositories called ",(0,i.jsx)(t.a,{href:"https://about.gitlab.com/",children:"Gitlab"})]})}),"\n",(0,i.jsxs)(t.p,{children:["There are many repositories on github. Here's the url for our team's website's ",(0,i.jsx)(t.code,{children:"git repository"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/Fahrenheit6882/Fahrenheit6882.github.io.git",children:"https://github.com/Fahrenheit6882/Fahrenheit6882.github.io.git"})}),"\n",(0,i.jsx)(t.p,{children:"Copy and paste that link into VS Code like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"VS Code Git Clone URL",src:o(3463).A+"",width:"1284",height:"220"})}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:"Our Github Repository is private. Please let a mentor know if you need access."})]}),"\n",(0,i.jsxs)(t.p,{children:["The next step is to choose which folder on your computer to download the files into. I created a folder named ",(0,i.jsx)(t.code,{children:"website"}),". You can create whatever folder that you want. After you create and choose the folder where you want to save the files, click ",(0,i.jsx)(t.code,{children:"Select as Repository Destination"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Click the buttons to say that you trust this code, and that's it! You now have the code for our website open in VS Code."}),"\n",(0,i.jsx)(t.h2,{id:"make-quick-changes-from-your-browser",children:"Make quick changes from your browser"}),"\n",(0,i.jsx)(t.p,{children:"If needed, it's possible to make quick changes directly from your browser on github."}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"It's easy to break the website using this technique. It's much better to test changes in VS Code on your own computer first before publishing to the live site. Making quick changes as described below should only be done for small spelling or style fixes, or when it's very inconvenient to use VS Code."})}),"\n",(0,i.jsxs)(t.p,{children:["Click to open any files in github and then click the pencil icon to make changes. When finished, click the ",(0,i.jsx)(t.code,{children:"Commit Changes"})," button."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, click to open ",(0,i.jsx)(t.a,{href:"https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/blob/main/index.html",children:"index.html"})," in your browser, and then click the pencil icon in the upper left to ",(0,i.jsx)(t.a,{href:"https://github.com/Fahrenheit6882/Fahrenheit6882.github.io/edit/main/index.html",children:"edit the file in place"}),". Make your changes and click ",(0,i.jsx)(t.code,{children:"Commit Changes..."})]}),"\n",(0,i.jsx)(t.p,{children:"After a few minutes, your changes will be live."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3404:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/readme-vs-code1-2e351bee6d638873b841b528f4e9a5ba.png"},3463:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/readme-vs-code2-bcd4ac5157da3f7e20a2ed3335cda1db.png"},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var i=o(6540);const s={},n=i.createContext(s);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);
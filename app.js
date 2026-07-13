(function(){'use strict';

const v100='api.php?q=';
const v101={'X-Target-UA':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36','X-Target-Referer':'https://wiki.biligame.com/umamusume/'};
const v102='https://wiki.biligame.com/umamusume/%E8%AF%84%E5%88%86%E8%AE%A1%E7%AE%97%E5%99%A8';
const v304='uma_bwiki_cache_v1';

let v83=[],v196={},v193=[],v120={},v82=[],v5={};
let v4=[],v3={};
let v63=new Set();
let v_inh=['','','',''];
let v301='zh',v302='light';
let v303=50;

const v300={zh:{title:"\u6280\u80fd\u8bc4\u5206\u8ba1\u7b97\u5668",notice:"\u6570\u636e\u6765\u6e90\uff1aBwiki (wiki.biligame.com)",cacheBtn:"\u8d44\u6e90\u7f13\u5b58",step1:"1. \u9009\u62e9\u652f\u63f4\u5361\uff08\u6700\u591a6\u5f20\uff09",step2:"2. \u8bbe\u7f6e\u652f\u63f4\u5361\u7b49\u7ea7",step3:"3. \u9002\u5e94\u6027\u8bbe\u7f6e",step4:"4. \u6280\u80fd\u6c60\u7ba1\u7406",allTypes:"\u5168\u90e8\u7c7b\u578b",allRarity:"\u5168\u90e8\u7a00\u6709\u5ea6",searchCard:"\u641c\u7d22\u5361\u540d",confirm:"\u786e\u8ba4\u9009\u62e9",level:"\u7b49\u7ea7",cardPool:"\u652f\u63f4\u5361\u6c60",cardPoolSearch:"\u641c\u7d22\u6280\u80fd",inheritance:"\u56fa\u6709\u7ee7\u627f",inheritanceDesc:"\u586b\u6253\u6298\u767e\u5206\u6bd4(0-100)\u3002PT=180,\u8bc4\u5206=180",skillPool:"\u6280\u80fd\u6c60",addSkill:"\u9009\u62e9\u6280\u80fd\u6dfb\u52a0",selectSkill:"\u9009\u62e9\u6280\u80fd",searchSkill:"\u641c\u7d22\u6280\u80fd\u540d(\u4e2d/\u65e5)",selectAll:"\u5168\u9009",deselectAll:"\u53d6\u6d88\u5168\u9009",cancel:"\u53d6\u6d88",import:"\u5bfc\u5165\u9009\u4e2d\u6280\u80fd",selected:"\u5df2\u9009",of:"\u5171",skills:"\u4e2a\u6280\u80fd",noSkill:"\u672a\u627e\u5230\u5339\u914d\u6280\u80fd",emptyPool:"\u6682\u65e0\u6280\u80fd \u8bf7\u4ece\u652f\u63f4\u5361\u6c60\u70b9\u51fb\u6dfb\u52a0",inPool:"\u5df2\u5728\u6c60\u4e2d",hasLower:"\u542b\u4e0b\u4f4d",hasUpper:"\u6709\u4e0a\u4f4d",algorithm:"\u7b97\u6cd5:\u80cc\u530501",ptPoints:"\u53ef\u7528PT\u70b9\u6570\uff1a",calculate:"\u8ba1\u7b97",optimal:"\u6700\u4f18\u89e3",totalTime:"\u8017\u65f6",skillGroups:"\u4e2a\u6280\u80fd\u7ec4",totalScore:"\u603b\u8bc4\u5206",totalPT:"\u603bPT",skill:"\u6280\u80fd",pt:"PT",score:"\u8bc4\u5206",bundledLower:"\u4e0b\u4f4d",talent:"\u624d\u80fd\u51fa\u4f17/\u5207\u8005",discount:"\u6298\u6263",basePT:"\u57fa\u7840PT",totalPT_b:"\u603bPT",totalScore_b:"\u5408\u8ba1\u8bc4\u5206",lowerSkill:"\u542b\u4e8e\u4e0a\u4f4d",loadingSkills:"\u6b63\u5728\u52a0\u8f7d\u6280\u80fd\u6570\u636e...",loadingCards:"\u6b63\u5728\u52a0\u8f7d\u652f\u63f4\u5361\u6570\u636e...",loadingCard:"\u6b63\u5728\u52a0\u8f7d\u652f\u63f4\u5361\u6280\u80fd\u6570\u636e",loadFail:"\u652f\u63f4\u5361\u6570\u636e\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5",skillEmpty:"\u6280\u80fd\u6570\u636e\u4e3a\u7a7a\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",noSkillCalc:"\u65e0\u53ef\u8ba1\u7b97\u6280\u80fd",ptTooLarge:"PT\u70b9\u6570\u8fc7\u5927(>5w)\u8bf7\u51cf\u5c0f\u540e\u91cd\u8bd5",needValidPT:"\u8bf7\u8f93\u5165\u6709\u6548PT\u70b9\u6570",aptitude:{"\u77ed\u8ddd\u79bb":"\u77ed\u8ddd\u79bb","\u82f1\u91cc":"\u82f1\u91cc","\u4e2d\u8ddd\u79bb":"\u4e2d\u8ddd\u79bb","\u957f\u8ddd\u79bb":"\u957f\u8ddd\u79bb","\u6ce5\u5730":"\u6ce5\u5730","\u9003\u9a6c":"\u9003\u9a6c","\u5148\u884c":"\u5148\u884c","\u5dee\u884c":"\u5dee\u884c","\u8ffd\u9a6c":"\u8ffd\u9a6c"},typeLabels:{"1":"\u4e0b\u4f4d","2":"\u4e0a\u4f4d","3":"\u7279\u6b8a\u4e0a\u4f4d","-1":"\u8d1f\u9762"},typeFilters:[{v:"",t:"\u5168\u90e8\u7c7b\u578b"},{v:"1",t:"\u4e0b\u4f4d"},{v:"2",t:"\u4e0a\u4f4d"},{v:"3",t:"\u7279\u6b8a\u4e0a\u4f4d"},{v:"-1",t:"\u8d1f\u9762"}],langBtn:"EN",themeBtnDark:"\u6697\u8272",themeBtnLight:"\u4eae\u8272",cacheTitle:"\u8d44\u6e90\u7f13\u5b58",cacheExists:"\u5df2\u6709\u7f13\u5b58,\u7f13\u5b58\u65f6\u95f4:",cacheClearBtn:"\u6e05\u9664\u7f13\u5b58\u5e76\u5237\u65b0",cacheNone:"\u7f13\u5b58\u540e\u652f\u63f4\u5361\u548c\u6280\u80fd\u4fe1\u606f\u5c06\u505c\u7559\u5728\u5f53\u524d\u65f6\u95f4,\u9700\u66f4\u65b0\u518d\u70b9\u7f13\u5b58",cacheCreateBtn:"\u7acb\u5373\u7f13\u5b58\u8d44\u6e90",cacheLoading:"\u7f13\u5b58\u4e2d...",cacheDone:"\u7f13\u5b58\u6210\u529f!\u5237\u65b0\u4e2d...",cacheFail:"\u7f13\u5b58\u5931\u8d25:",loadMore:"\u52a0\u8f7d\u66f4\u591a",hint:"\u542f\u53d1",noHint:"\u65e0\u542f\u53d1",confirmApt:"\u786e\u8ba4\u9002\u5e94\u6027 \u8fdb\u5165\u6280\u80fd\u6c60",aptitudeTitle:"\u9002\u5e94\u6027\u8bbe\u7f6e",noImage:"\u65e0\u56fe",dataSrc:"\u6570\u636e\u6765\u6e90\uff1aBwiki"},en:{title:"Skill Score Calculator",notice:"Data source: Bwiki (wiki.biligame.com)",cacheBtn:"Cache",step1:"1. Select Support Cards (max 6)",step2:"2. Set Card Levels",step3:"3. Aptitude Settings",step4:"4. Skill Pool Management",allTypes:"All Types",allRarity:"All Rarity",searchCard:"Search card name",confirm:"Confirm",level:"Level",cardPool:"Card Pool",cardPoolSearch:"Search Skill",inheritance:"Inherent Inheritance",inheritanceDesc:"Fill discount rate (0-100). PT=180, Score=180",skillPool:"Skill Pool",addSkill:"Add Skills",selectSkill:"Select Skills",searchSkill:"Search skill name (CN/JP)",selectAll:"Select All",deselectAll:"Deselect All",cancel:"Cancel",import:"Import Selected",selected:"selected",of:"of",skills:"skills",noSkill:"No skills found",emptyPool:"Pool is empty. Click skills from card pool to add.",inPool:"In Pool",hasLower:"has lower",hasUpper:"has upper",algorithm:"Algorithm: 0/1 Knapsack",ptPoints:"Available PT:",calculate:"Calculate",optimal:"Optimal Solution",totalTime:"Time",skillGroups:"skill groups",totalScore:"Total Score",totalPT:"Total PT",skill:"Skill",pt:"PT",score:"Score",bundledLower:"lower",talent:"Clever / Eccentric",discount:"Discount",basePT:"Base PT",totalPT_b:"Total PT",totalScore_b:"Total Score",lowerSkill:"bundled",loadingSkills:"Loading skill data...",loadingCards:"Loading support card data...",loadingCard:"Loading card skill data",loadFail:"Failed to load support card data. Please refresh.",skillEmpty:"Skill data is empty. Please refresh.",noSkillCalc:"No skills available for calculation.",ptTooLarge:"PT too large (>50k). Please reduce.",needValidPT:"Please enter valid PT",aptitude:{"\u77ed\u8ddd\u79bb":"Short Distance","\u82f1\u91cc":"Mile","\u4e2d\u8ddd\u79bb":"Middle Distance","\u957f\u8ddd\u79bb":"Long Distance","\u6ce5\u5730":"Dirt","\u9003\u9a6c":"Runner","\u5148\u884c":"Leader","\u5dee\u884c":"Betweener","\u8ffd\u9a6c":"Chaser"},typeLabels:{"1":"Common","2":"Rare","3":"Unique","-1":"Negative"},typeFilters:[{v:"",t:"All Types"},{v:"1",t:"Common"},{v:"2",t:"Rare"},{v:"3",t:"Unique"},{v:"-1",t:"Negative"}],langBtn:"\u4e2d\u6587",themeBtnDark:"Dark",themeBtnLight:"Light",cacheTitle:"Resource Cache",cacheExists:"Cache exists, cached at:",cacheClearBtn:"Clear Cache & Refresh",cacheNone:"After caching, support card and skill info will be frozen at current time. Click Cache again to update.",cacheCreateBtn:"Cache Resources Now",cacheLoading:"Caching...",cacheDone:"Cache created! Refreshing...",cacheFail:"Cache failed:",loadMore:"Load More",hint:"Hint",noHint:"No hint",confirmApt:"Apply Aptitude",aptitudeTitle:"Aptitude Settings",noImage:"No Image",dataSrc:"Data: Bwiki"}};

function v18(v54){return v300[v301][v54]||v54;}

class v0{constructor(v81,v134=0,v161=false,v116=null){this.skillId=v81;this.discount=v134;this.isEvent=v161;this.bundleUpper=v116;}}

const v97=v72=>document.querySelector(v72);
const v98=v72=>document.querySelectorAll(v72);
const v142=v72=>{const v132=document.createElement('div');v132.textContent=v72||'';return v132.innerHTML;};

async function v25(v92){const v64=await fetch(v100+btoa(unescape(encodeURIComponent(v92))),{headers:v101});if(!v64.ok)throw new Error('HTTP '+v64.status);return await v64.text();}

function v61(v13){if(!v13)return[];const v104=['\u77ed\u8ddd\u79bb','\u82f1\u91cc','\u4e2d\u8ddd\u79bb','\u957f\u8ddd\u79bb','\u901a\u7528','\u6ce5\u5730','\u9003\u9a6c','\u5148\u884c','\u5dee\u884c','\u8ffd\u9a6c'];return v104.filter(v96=>v13.includes(v96));}

function v62(v35){const v197=[];const v188=/var skraw=\s*({[\s\S]*?})\s*;\s*skillData\.push\(skraw\);/g;let v54;while((v54=v188.exec(v35))!==null){const v6=v54[1];const v72={};const v176=[['id',/"id":\s*parseInt\("([^"]+)"\)/],['group_id',/"group_id":\s*parseInt\("([^"]+)"\)/],['\u6280\u80fd\u540d',/"\u6280\u80fd\u540d":\s*"([^"]+)"/],['\u4e2d\u6587\u540d',/"\u4e2d\u6587\u540d":\s*"([^"]+)"/],['\u6761\u4ef6\u9650\u5236',/"\u6761\u4ef6\u9650\u5236":\s*"([^"]*)"/],['\u8bc4\u4ef7\u5206',/"\u8bc4\u4ef7\u5206":\s*"([^"]+)"/],['\u6240\u9700\u6280\u80fdPT',/"\u6240\u9700\u6280\u80fdPT":\s*"([^"]+)"/],['\u7279\u6b8a',/"\u7279\u6b8a":\s*(\d+)/],['\u7c7b\u578b',/"\u7c7b\u578b":\s*parseInt\("([^"]+)"\)/]];v176.forEach(([v48,v64])=>{const v169=v6.match(v64);if(v169){if(['id','group_id','\u7279\u6b8a','\u7c7b\u578b'].includes(v48))v72[v48]=parseInt(v169[1]);else v72[v48]=v169[1];}});if(v72.id&&v72['\u6280\u80fd\u540d']){v72.conditions=v61(v72['\u6761\u4ef6\u9650\u5236']||'');
let v_circle=0;const v_n1=v72['\u6280\u80fd\u540d']||'';const v_n2=v72['\u4e2d\u6587\u540d']||'';if(/[\u25ce]$/.test(v_n1)||/[\u25ce]$/.test(v_n2))v_circle=2;else if(/[\u25cb]$/.test(v_n1)||/[\u25cb]$/.test(v_n2))v_circle=1;v72.circle=v_circle;if(v_circle>0){v72['\u6280\u80fd\u540d']=v72['\u6280\u80fd\u540d'].replace(/\s*[\u25cb\u25ce]$/,'').trim();if(v72['\u4e2d\u6587\u540d'])v72['\u4e2d\u6587\u540d']=v72['\u4e2d\u6587\u540d'].replace(/\s*[\u25cb\u25ce]$/,'').trim();}
v197.push(v72);}}const v151={};v197.forEach(v72=>{if(!v151[v72.group_id])v151[v72.group_id]=[];v151[v72.group_id].push(v72);});v197.forEach(v72=>{v72.lowerSkills=[];v72.upperSkills=[];if([2,3].includes(v72['\u7c7b\u578b'])&&v151[v72.group_id]){v151[v72.group_id].forEach(v53=>{if(v53.id===v72.id)return;if(v72['\u7c7b\u578b']===2&&v53['\u7c7b\u578b']===1||v72['\u7c7b\u578b']===3&&[1,2].includes(v53['\u7c7b\u578b']))v72.lowerSkills.push(v53.id);});}if(v72['\u7c7b\u578b']===1&&v151[v72.group_id]){v151[v72.group_id].forEach(v93=>{if(v93.id===v72.id)return;if(v93['\u7c7b\u578b']===2||v93['\u7c7b\u578b']===3){if(v93.lowerSkills&&v93.lowerSkills.includes(v72.id))v72.upperSkills.push(v93.id);}});}});v197.forEach(v72=>{v196[v72.id]=v72;});return v197;}

function v75(v56){let v59=v97('#loading-overlay');if(!v59){v59=document.createElement('div');v59.id='loading-overlay';v59.className='overlay';v59.innerHTML='<div class="loader-box"><div class="spinner"></div><p id="loading-msg"></p><p class="sub-msg">'+v18('dataSrc')+'</p></div>';document.body.appendChild(v59);}v97('#loading-msg').textContent=v56;v59.style.display='flex';}

function v32(){const v59=v97('#loading-overlay');if(v59)v59.style.display='none';}

function v305(){try{const v306=localStorage.getItem(v304);return v306?JSON.parse(v306):null;}catch(v307){return null;}}

function v308(v309){try{localStorage.setItem(v304,JSON.stringify(v309));return true;}catch(v307){console.error('Cache storage failed:',v307);return false;}}

function v310(){localStorage.removeItem(v304);}

async function v24(){try{const v35=await v25('https://wiki.biligame.com/umamusume/%E6%94%AF%E6%8F%B4%E5%8D%A1%E5%9B%BE%E9%89%B4');return v60(v35);}catch(v20){console.error(v20);return{};}}

function v60(v35){const v175=new DOMParser();const v136=v175.parseFromString(v35,'text/html');const v122={};const v211={'\u901f\u5ea6':[],'\u8010\u529b':[],'\u529b\u91cf':[],'\u6bc5\u529b':[],'\u667a\u529b':[],'\u53cb\u4eba':[],'\u56e2\u961f':[]};const v187={'R':[],'SR':[],'SSR':[]};let v38=1;const v190=v136.querySelectorAll('tr[data-param1]');v190.forEach(v70=>{const v185=v70.getAttribute('data-param1')||'';const v208=v70.getAttribute('data-param2')||'';const v1=v70.querySelector('a[href]');const v158=v70.querySelector('img[src]');if(!v1)return;const v171=v1.getAttribute('title')||v1.textContent.trim()||'\u672a\u77e5';let v50=v1.getAttribute('href');if(v50&&!v50.startsWith('http'))v50='https://wiki.biligame.com'+v50;let v37='';if(v158){v37=v158.getAttribute('src');if(v37.startsWith('/'))v37='https:'+v37;}v122[v38]={name:v171,icon:v37,link:v50,rarity:v185,type:v208};if(v211[v208])v211[v208].push(v38);if(v187[v185])v187[v185].push(v38);v38++;});const v189={};for(let v48 in v122)v189[v48]=v122[v48];for(let v48 in v211)if(v211[v48].length)v189[v48+'\u5361']=v211[v48];for(let v48 in v187)if(v187[v48].length)v189[v48]=v187[v48];return v189;}

function v12(v19){const v106=[];const v214={};Object.entries(v19).forEach(([v48,v94])=>{if(typeof v94==='object'&&v94!==null&&v94.name&&v94.link){const v119={id:parseInt(v48),name:v94.name,icon:v94.icon||'',link:v94.link,rarity:v94.rarity||'',type:v94.type||''};v106.push(v119);}else if(Array.isArray(v94)){v214[v48]=v94;}});v106.forEach(v13=>{v13.types=[];Object.entries(v214).forEach(([v85,v156])=>{if(v156&&v156.includes(v13.id))v13.types.push(v85);});});return{cards:v106,typeMap:v214};}

function v41(){if(v4.length===0){alert(v18('loadFail'));return;}const v209=v97('#card-type-filter');const v186=v97('#card-rarity-filter');const v191=v97('#card-search');const v150=v97('#card-grid');const v194=v97('#selected-cards-display');const v128=v97('#confirm-cards-btn');v209.innerHTML='<option value="">'+v18('allTypes')+'</option>';v186.innerHTML='<option value="">'+v18('allRarity')+'</option>';const v213=new Set();v4.forEach(v13=>{if(v13.types)v13.types.forEach(v85=>v213.add(v85));});Array.from(v213).sort().forEach(v85=>{const v57=document.createElement('option');v57.value=v85;v57.textContent=v85.replace('\u5361','');v209.appendChild(v57);});['R','SR','SSR'].forEach(v64=>{const v57=document.createElement('option');v57.value=v64;v57.textContent=v64;v186.appendChild(v57);});function v26(){const v72=v191.value.toLowerCase();const v85=v209.value;const v64=v186.value;return v4.filter(v13=>{if(v72&&!v13.name.toLowerCase().includes(v72))return false;if(v85&&(!v13.types||!v13.types.includes(v85)))return false;if(v64&&(!v13.types||!v13.types.includes(v64)))return false;return true;});}function v67(){const v145=v26();v150.innerHTML=v145.map(v13=>'<div class="card-item '+(v193.includes(v13.id)?'selected':'')+'" data-id="'+v13.id+'">'+(v13.icon?'<img src="'+v13.icon+'" onerror="this.style.display=\'none\'" alt="">':'<div style="width:72px;height:72px;background:#eee;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#999;font-size:12px">'+v18('noImage')+'</div>')+'<div class="name">'+v142(v13.name)+'</div><div class="id">ID:'+v13.id+'</div></div>').join('');v150.querySelectorAll('.card-item').forEach(v21=>v21.addEventListener('click',()=>v89(parseInt(v21.dataset.id))));v91();v128.disabled=v193.length===0;}function v89(v38){const v157=v193.indexOf(v38);if(v157>=0)v193.splice(v157,1);else if(v193.length<6)v193.push(v38);v67();}function v91(){const v122=v193.map(v38=>v4.find(v13=>v13.id===v38)).filter(Boolean);v194.innerHTML=v122.map(v13=>'<span class="selected-card-badge">'+v142(v13.name)+' <button data-remove="'+v13.id+'">&times;</button></span>').join('');v194.querySelectorAll('button').forEach(v6=>v6.addEventListener('click',v20=>{v20.stopPropagation();v89(parseInt(v6.dataset.remove));}));}v191.addEventListener('input',v67);v209.addEventListener('change',v67);v186.addEventListener('change',v67);v128.onclick=()=>{v97('#card-selector-section').classList.add('hidden');v42();};v67();}

async function v42(){v97('#level-skills-section').classList.remove('hidden');v75(v18('loadingCard')+' (0/'+v193.length+')...');let v137=0;for(const v38 of v193){const v119=v4.find(v13=>v13.id===v38);if(!v119)continue;try{const v35=await v25(v119.link);const v197=v22(v35);const v155=v23(v35);v120[v38]={skills:v197,hintLevels:v155,level:50};}catch(v20){v120[v38]={skills:[],hintLevels:{Lv5:0,Lv10:1,Lv15:2,Lv20:3,Lv25:3,Lv30:4,Lv35:4,Lv40:5,Lv45:5,Lv50:5},level:50};}v137++;v75(v18('loadingCard')+' ('+v137+'/'+v193.length+')...');}v32();v313();}

function v313(){const v129=v97('#card-levels');v129.innerHTML='';v193.forEach(v38=>{const v119=v4.find(v13=>v13.id===v38);if(!v119)return;const v135=document.createElement('div');v135.className='card-level-row';v135.style.cssText='display:flex;align-items:center;gap:8px;margin-bottom:8px';v135.innerHTML='<span style="flex:1"><strong>'+v142(v119.name)+'</strong></span><label>'+v18('level')+': <select data-card="'+v38+'" class="card-level-select">'+[1,5,10,15,20,25,30,35,40,45,50].map(v94=>'<option value="'+v94+'" '+(v94===50?'selected':'')+'>'+v94+'</option>').join('')+'</select></label>';v129.appendChild(v135);});v97('#confirm-levels-btn').onclick=()=>{v98('.card-level-select').forEach(v74=>{const v_cid=v74.dataset.card;const v_lvl=parseInt(v74.value);if(v120[v_cid])v120[v_cid].level=v_lvl;});v82=[];v97('#level-skills-section').classList.add('hidden');v40();};}

function v22(v35){const v197=[];const v175=new DOMParser();const v136=v175.parseFromString(v35,'text/html');const v113=v136.querySelectorAll('div.support_card-bt');let v10=null;for(const v110 of v113){if(v110.textContent.includes('\u6240\u6301\u6280\u80fd')){v10=v110;break;}}if(v10){let v7=v10.nextElementSibling;while(v7&&!v7.classList.contains('support_card-bg2'))v7=v7.nextElementSibling;if(v7){const v182=v7.querySelectorAll('span.popup a[title]');v182.forEach(v1=>{const v203=v1.getAttribute('title');if(v203&&/[\u4e00-\u9fa5]/.test(v203))v197.push(v203);});}}return v197;}

function v23(v35){const v33={};const v175=new DOMParser();const v136=v175.parseFromString(v35,'text/html');const v112=Array.from(v136.querySelectorAll('div.support_card-bt2'));const v111=v112.find(v6=>v6.textContent.includes('\u542f\u53d1\u7b49\u7ea7\u63d0\u5347'));if(v111){let v8=v111.nextElementSibling;while(v8&&!v8.classList.contains('support_card-bg3'))v8=v8.nextElementSibling;if(v8){const v200=v8.querySelector('table');if(v200){const v154=[];v200.querySelectorAll('th').forEach(v87=>{const v54=v87.textContent.match(/Lv(\d+)/);if(v54)v154.push('Lv'+v54[1]);});const v220=[];v200.querySelectorAll('td').forEach(v86=>{const v94=parseInt(v86.textContent);if(!isNaN(v94))v220.push(v94);});v154.forEach((v31,v36)=>{if(v36<v220.length)v33[v31]=v220[v36];});}}}return v33;}

function v34(v33){if(v33>=5)return 40;if(v33===4)return 35;if(v33>=1)return v33*10;return 0;}

function v40(){v97('#aptitude-section').classList.remove('hidden');const v150=v97('#aptitude-grid');const v164=['\u77ed\u8ddd\u79bb','\u82f1\u91cc','\u4e2d\u8ddd\u79bb','\u957f\u8ddd\u79bb','\u6ce5\u5730','\u9003\u9a6c','\u5148\u884c','\u5dee\u884c','\u8ffd\u9a6c'];const v149=['G','F','E','D','C','B','A','S'];const v_old=v5;v5={};v150.innerHTML=v164.map(v48=>{const v_cur=v_old[v48]||'A';v5[v48]=v_cur;return'<div class="aptitude-item"><div>'+(v18('aptitude')[v48]||v48)+'</div><select data-apt="'+v48+'">'+v149.map(v27=>'<option value="'+v27+'" '+(v27===v_cur?'selected':'')+'>'+v27+'</option>').join('')+'</select></div>';}).join('');v150.querySelectorAll('select').forEach(v74=>{v74.addEventListener('change',()=>{v5[v74.dataset.apt]=v74.value;});});const v144=v150.parentElement.querySelector('.aptitude-confirm-btn');if(v144)v144.remove();const v11=document.createElement('button');v11.className='btn aptitude-confirm-btn';v11.textContent=v18('confirmApt');v11.style.marginTop='16px';v11.onclick=()=>{v97('#aptitude-section').classList.add('hidden');v43();};v150.parentElement.appendChild(v11);}

function v311(){const v_list=v97('#card-pool-list');if(!v_list)return;let v_html='';v193.forEach(v_cid=>{const v_cd=v120[v_cid];if(!v_cd||!v_cd.skills||v_cd.skills.length===0)return;const v_card=v4.find(v13=>v13.id===v_cid);const v_lvl=v_cd.level||50;const v_hl=v_cd.hintLevels['Lv'+v_lvl]||0;const v_disc=v34(v_hl);v_html+='<div class="card-pool-item">';v_html+='<div class="card-pool-header">'+v142(v_card?v_card.name:'Card '+v_cid)+' <span style="font-size:12px;color:var(--text-secondary)">('+v_cd.skills.length+' '+v18('skills')+')</span></div>';v_html+='<div class="card-pool-skills">';v_cd.skills.forEach(v_name=>{const v_sk=v83.find(v72=>v72['\u4e2d\u6587\u540d']===v_name||v72['\u6280\u80fd\u540d']===v_name);if(!v_sk)return;const v_in=v82.some(v46=>v46.skillId===v_sk.id);const v_hlText=v_hl>0?v18('hint')+'+'+v_hl+' ('+v_disc+'%)':v18('noHint');v_html+='<div class="card-skill-item '+(v_in?'in-pool':'')+'" data-skill-id="'+v_sk.id+'" data-discount="'+v_disc+'"><span class="card-skill-name">'+v142(v_sk['\u4e2d\u6587\u540d']||v_sk['\u6280\u80fd\u540d'])+'</span><span class="card-skill-hint">'+v_hlText+'</span></div>';});v_html+='</div></div>';});v_list.innerHTML=v_html||'<p style="padding:16px;text-align:center;color:var(--text-secondary)">'+v18('emptyPool')+'</p>';v_list.querySelectorAll('.card-skill-item').forEach(v_el=>{v_el.addEventListener('click',()=>{if(v_el.dataset.disabled)return;const v_sid=parseInt(v_el.dataset.skillId);const v_d=parseInt(v_el.dataset.discount);v2(v_sid,v_d,false);v311();v69();});});const v_search=v97('#card-pool-search-input');if(v_search){v_search.oninput=()=>{const v_q=v_search.value.trim().toLowerCase();v_list.querySelectorAll('.card-skill-item').forEach(v_el=>{const v_name=v_el.querySelector('.card-skill-name').textContent.toLowerCase();v_el.style.display=(!v_q||v_name.includes(v_q))?'':'none';});};}}

function v43(){v97('#skill-pool-section').classList.remove('hidden');if(v83.length===0){alert(v18('skillEmpty'));return;}v311();v69();v97('#batch-add-btn').onclick=()=>v58();v97('#talent-check').onchange=v69;const v_inh_div=v97('#inheri-slots');if(v_inh_div){v_inh_div.innerHTML=v_inh.map((v172,v171)=>'<div style="margin-top:4px"><label>'+(v171+1)+'. '+v18('inheritance')+' '+v18('discount')+': </label><input type="number" class="inh-input" data-slot="'+v171+'" value="'+v172+'" min="0" max="100" placeholder="0-100" style="width:60px">%</div>').join('');v_inh_div.querySelectorAll('.inh-input').forEach(v173=>{v173.addEventListener('change',()=>{v_inh[parseInt(v173.dataset.slot)]=v173.value;});});}v97('#solve-btn').onclick=()=>{const v118=parseInt(v97('#pt-capacity').value);if(!v118||v118<=0)return alert(v18('needValidPT'));v71(v118);};}

function v58(){const v172=v97('#skill-picker-overlay');if(v172)v172.remove();v63=new Set(v82.map(v36=>v36.skillId));v303=50;const v174=document.createElement('div');v174.id='skill-picker-overlay';v174.className='skill-picker-overlay';const v212=v18('typeFilters');v174.innerHTML='<div class="skill-picker-modal"><div class="skill-picker-header"><h3>'+v18('selectSkill')+'</h3><button class="skill-picker-close">&times;</button></div><div class="skill-picker-filters"><input type="text" id="picker-search" placeholder="'+v18('searchSkill')+'" style="flex:1;min-width:160px"><select id="picker-type-filter">'+v212.map(v57=>'<option value="'+v57.v+'">'+v57.t+'</option>').join('')+'</select><button id="picker-select-all" class="btn sml outline">'+v18('selectAll')+'</button><button id="picker-deselect-all" class="btn sml outline">'+v18('deselectAll')+'</button></div><div class="skill-picker-body" id="picker-list"></div><div class="skill-picker-footer"><span id="picker-count">'+v18('selected')+' 0 '+v18('of')+' 0 '+v18('skills')+'</span><div><button id="picker-cancel" class="btn outline">'+v18('cancel')+'</button> <button id="picker-import" class="btn primary">'+v18('import')+'</button></div></div></div>';document.body.appendChild(v174);const v178=v97('#picker-list');const v179=v97('#picker-search');const v180=v97('#picker-type-filter');const v177=v97('#picker-count');function v29(){const v184=v179.value.trim().toLowerCase();const v85=v180.value;return v83.filter(v72=>{if(v85&&v72['\u7c7b\u578b']!=parseInt(v85))return false;if(v184){const v125=(v72['\u4e2d\u6587\u540d']||'').toLowerCase();const v162=(v72['\u6280\u80fd\u540d']||'').toLowerCase();if(!v125.includes(v184)&&!v162.includes(v184))return false;}return true;});}function v68(){const v145=v29();if(v145.length===0){v178.innerHTML='<p style="padding:16px;text-align:center;color:#999">'+v18('noSkill')+'</p>';v90();return;}const v_shown=v145.slice(0,v303);v178.innerHTML=v_shown.map(v72=>{const v124=v63.has(v72.id);const v159=v82.find(v36=>v36.skillId===v72.id);const v210=v18('typeLabels')[v72['\u7c7b\u578b']]||v72['\u7c7b\u578b'];const v_cir=v72.circle===1?'\u25cb':(v72.circle===2?'\u25ce':'');const v152=[2,3].includes(v72['\u7c7b\u578b'])&&v72.lowerSkills&&v72.lowerSkills.length>0;const v153=v72.upperSkills&&v72.upperSkills.length>0;const v115=v152?' <span class="bundle-tag">'+v18('hasLower')+' '+v72.lowerSkills.length+'</span>':'';const v218=v153?' <span style="color:#999;font-size:11px">'+v18('hasUpper')+'</span>':'';return'<label class="picker-skill-item '+(v124?'checked':'')+' '+(v159?'in-pool':'')+'"><input type="checkbox" data-id="'+v72.id+'" '+(v124?'checked':'')+'><div class="picker-skill-info"><strong>'+v142(v72['\u4e2d\u6587\u540d']||v72['\u6280\u80fd\u540d'])+(v_cir?' '+v_cir:'')+'</strong>'+(v159?'<span class="in-pool-tag">'+v18('inPool')+'</span>':'')+v115+v218+'<br><small>'+v142(v72['\u6280\u80fd\u540d'])+' | '+v18('pt')+':'+v72['\u6240\u9700\u6280\u80fdPT']+' | '+v18('score')+':'+v72['\u8bc4\u4ef7\u5206']+' | '+v210+(v72['\u6761\u4ef6\u9650\u5236']?' | '+v142(v72['\u6761\u4ef6\u9650\u5236']):'')+'</small></div></label>';}).join('');if(v145.length>v303){const v_btn=document.createElement('button');v_btn.className='btn outline sml';v_btn.style.cssText='display:block;margin:8px auto';v_btn.textContent=v18('loadMore')+' ('+v303+'/'+v145.length+')';v_btn.onclick=()=>{v303+=50;v68();};v178.appendChild(v_btn);}v178.querySelectorAll('input[type=checkbox]').forEach(v315=>{v315.addEventListener('change',()=>{const v38=parseInt(v315.dataset.id);const v80=v196[v38];if(v315.checked){v63.add(v38);if(v80&&[2,3].includes(v80['\u7c7b\u578b'])&&v80.lowerSkills){v80.lowerSkills.forEach(v49=>v63.add(v49));}}else{v63.delete(v38);const v195=v196[v38];if(v195&&[2,3].includes(v195['\u7c7b\u578b'])&&v195.lowerSkills){v195.lowerSkills.forEach(v49=>{const v173=v83.some(v72=>[2,3].includes(v72['\u7c7b\u578b'])&&v72.lowerSkills&&v72.lowerSkills.includes(v49)&&v72.id!==v38&&v63.has(v72.id));if(!v173)v63.delete(v49);});}}v68();});});v90();}function v90(){v177.textContent=v18('selected')+' '+v63.size+' '+v18('of')+' '+v83.length+' '+v18('skills');}let v73=null;v179.addEventListener('input',()=>{clearTimeout(v73);v73=setTimeout(()=>{v303=50;v68();},200);});v180.addEventListener('change',()=>{v303=50;v68();});v97('#picker-select-all').onclick=()=>{v29().forEach(v72=>v63.add(v72.id));v68();};v97('#picker-deselect-all').onclick=()=>{v29().forEach(v72=>v63.delete(v72.id));v68();};v97('.skill-picker-close').onclick=()=>v174.remove();v97('#picker-cancel').onclick=()=>v174.remove();v174.addEventListener('click',v20=>{if(v20.target===v174)v174.remove();});v97('#picker-import').onclick=()=>{let v103=0;v63.forEach(v38=>{if(!v82.find(v36=>v36.skillId===v38)){v2(v38,0);v103++;}});v174.remove();v311();v69();};v68();}

function v2(v81,v134=0,v161=false,v146=false){const v143=v82.find(v36=>v36.skillId===v81);if(v143){if(!v143.bundleUpper&&v134>v143.discount)v143.discount=v134;return;}const v80=v196[v81];if(!v80)return;v82.push(new v0(v81,v134,v161,null));if(!v146&&[2,3].includes(v80['\u7c7b\u578b'])&&v80.lowerSkills&&v80.lowerSkills.length){v80.lowerSkills.forEach(v49=>{if(!v82.find(v36=>v36.skillId===v49))v82.push(new v0(v49,v134,false,v81));});}}

function v65(v81){const v157=v82.findIndex(v36=>v36.skillId===v81);if(v157<0)return;const v46=v82[v157];v82.splice(v157,1);if(v46.bundleUpper)return;for(let v36=v82.length-1;v36>=0;v36--){if(v82[v36].bundleUpper===v81)v82.splice(v36,1);}}

function v69(){const v201=v97('#talent-check')&&v97('#talent-check').checked;const v181=v97('#skill-pool-list');let v35='';const v204=v82.filter(v36=>!v36.bundleUpper);v204.forEach(v46=>{const v80=v196[v46.skillId];if(!v80)return;const v134=Math.min(100,v46.discount+(v201?10:0));const v166=v82.filter(v36=>v36.bundleUpper===v46.skillId);const v160=v166.length>0;const v205=v15(v46.skillId);const v206=v14(v46.skillId);const v210=v18('typeLabels')[v80['\u7c7b\u578b']]||v80['\u7c7b\u578b'];const v_cir=v80.circle===1?'\u25cb':(v80.circle===2?'\u25ce':'');const v131=v160?v18('totalPT_b')+':'+v205+' | '+v18('totalScore_b')+':'+v206.toFixed(1):v18('basePT')+':'+v80['\u6240\u9700\u6280\u80fdPT']+' | '+v18('score')+':'+v80['\u8bc4\u4ef7\u5206'];v35+='<div class="skill-row '+(v160?'skill-row-bundle':'')+'"><div class="skill-info"><strong>'+v142(v80['\u4e2d\u6587\u540d']||v80['\u6280\u80fd\u540d'])+(v_cir?' '+v_cir:'')+'</strong>'+(v160?' <span class="bundle-tag">+'+v166.length+' '+v18('bundledLower')+'</span>':'')+'<br><small>'+v142(v80['\u6280\u80fd\u540d'])+' | '+v131+' | '+v210+' | '+v18('discount')+':'+v134+'%</small></div><div class="skill-discount"><input type="number" value="'+v46.discount+'" min="0" max="100" data-id="'+v46.skillId+'" class="discount-input">%<button class="remove-btn" data-remove="'+v46.skillId+'">&times;</button></div></div>';v166.forEach(v9=>{const v53=v196[v9.skillId];if(!v53)return;const v109=Math.min(100,v9.discount+(v201?10:0));v35+='<div class="skill-row skill-row-lower"><div class="skill-info"><span class="bundle-indent">\u2502\u2500</span> '+v142(v53['\u4e2d\u6587\u540d']||v53['\u6280\u80fd\u540d'])+'<br><small>'+v142(v53['\u6280\u80fd\u540d'])+' | '+v18('pt')+':'+v53['\u6240\u9700\u6280\u80fdPT']+' | '+v18('score')+':'+v53['\u8bc4\u4ef7\u5206']+' | '+v18('lowerSkill')+' | '+v18('discount')+':'+v109+'%</small></div><div class="skill-discount"><button class="remove-btn" data-remove="'+v9.skillId+'">&times;</button></div></div>';});});v181.innerHTML=v35||'<p>'+v18('emptyPool')+'</p>';v181.querySelectorAll('.discount-input').forEach(v44=>{v44.addEventListener('change',()=>{const v38=parseInt(v44.dataset.id);const v45=v82.find(v36=>v36.skillId===v38);if(v45){v45.discount=parseInt(v44.value)||0;v82.filter(v36=>v36.bundleUpper===v38).forEach(v9=>{v9.discount=v45.discount;});v69();}});});v181.querySelectorAll('[data-remove]').forEach(v11=>{v11.addEventListener('click',()=>{v65(parseInt(v11.dataset.remove));v311();v69();});});}

function v28(v30){const v168={S:1.1,A:1.1,B:0.9,C:0.9,D:0.8,E:0.8,F:0.8,G:0.7};return v168[v30]||0.9;}

function v16(v80){if(!v80)return 0;if(v80['\u7279\u6b8a']===1)return parseFloat(v80['\u8bc4\u4ef7\u5206'])||0;const v127=v80.conditions;if(!v127||v127.length===0)return parseFloat(v80['\u8bc4\u4ef7\u5206'])||0;let v55=0;v127.forEach(v13=>{const v105=Object.keys(v5).find(v48=>v48===v13);if(v105){const v126=v28(v5[v105]);if(v126>v55)v55=v126;}else if(v13==='\u901a\u7528'){v55=Math.max(v55,1);}});if(v55===0)v55=0.9;return(parseFloat(v80['\u8bc4\u4ef7\u5206'])||0)*v55;}

function v14(v81){const v46=v82.find(v36=>v36.skillId===v81);if(!v46)return 0;let v207=v16(v196[v81]);if(!v46.bundleUpper){v82.filter(v36=>v36.bundleUpper===v81).forEach(v9=>{const v53=v196[v9.skillId];if(v53)v207+=v16(v53);});}return v207;}

function v15(v81){const v46=v82.find(v36=>v36.skillId===v81);if(!v46)return 0;const v201=v97('#talent-check')&&v97('#talent-check').checked;function v78(v77,v45){const v80=v196[v77];if(!v80)return 0;const v108=parseInt(v80['\u6240\u9700\u6280\u80fdPT'])||0;const v132=Math.min(100,v45.discount+(v201?10:0));return Math.round(v108*(1-v132/100));}if(v46.bundleUpper)return v78(v81,v46);let v207=v78(v81,v46);v82.filter(v36=>v36.bundleUpper===v81).forEach(v9=>{v207+=v78(v9.skillId,v9);});return v207;}

function v71(v17){
if(v17>50000){v97('#solve-result').innerHTML='<p style="color:var(--danger)">'+v18('ptTooLarge')+'</p>';return;}
const v_free=[],v_grps=[],v_done=new Set();const v_cir_done={};const v_grp_done={};
v82.forEach(v46=>{
if(v46.bundleUpper)return;
const v80=v196[v46.skillId];
if(!v80||v_done.has(v46.skillId))return;
if(v80.circle>0){
const v_cir_key=v80['\u6280\u80fd\u540d']||v80['\u4e2d\u6587\u540d']||('');
if(v_cir_done[v_cir_key])return;
v_cir_done[v_cir_key]=1;
const v_lo=v82.find(i=>!i.bundleUpper&&v196[i.skillId]&&v196[i.skillId].circle===1&&(v196[i.skillId]['\u6280\u80fd\u540d']===v_cir_key||v196[i.skillId]['\u4e2d\u6587\u540d']===v_cir_key));
const v_up=v82.find(i=>!i.bundleUpper&&v196[i.skillId]&&v196[i.skillId].circle===2&&(v196[i.skillId]['\u6280\u80fd\u540d']===v_cir_key||v196[i.skillId]['\u4e2d\u6587\u540d']===v_cir_key));
const v_items=[];
if(v_lo){v_done.add(v_lo.skillId);const v_lc=v15(v_lo.skillId),v_lv=v14(v_lo.skillId);if(v_lv>0){if(v_lc===0)v_free.push({id:v_lo.skillId,cost:0,value:v_lv});else if(v_lc<=v17)v_items.push({id:v_lo.skillId,cost:v_lc,value:v_lv})}}
if(v_up){v_done.add(v_up.skillId);const v_uc=v15(v_up.skillId),v_uv=v14(v_up.skillId);if(v_uv>0){if(v_uc===0)v_free.push({id:v_up.skillId,cost:0,value:v_uv});else if(v_uc<=v17)v_items.push({id:v_up.skillId,cost:v_uc,value:v_uv})}}
if(v_items.length>0)v_grps.push(v_items);
return;
}
if([2,3].includes(v80['\u7c7b\u578b'])){
const v_key=v80.group_id;
if(v_grp_done[v_key])return;
v_grp_done[v_key]=1;
const v_lo=v82.find(i=>!i.bundleUpper&&v196[i.skillId]&&v196[i.skillId]['\u7c7b\u578b']===1&&v196[i.skillId].group_id===v_key&&v196[i.skillId].circle===0);
const v_up=v82.find(i=>!i.bundleUpper&&v196[i.skillId]&&[2,3].includes(v196[i.skillId]['\u7c7b\u578b'])&&v196[i.skillId].group_id===v_key&&v196[i.skillId].circle===0);
const v_items=[];
if(v_lo){v_done.add(v_lo.skillId);const v_lc=v15(v_lo.skillId),v_lv=v14(v_lo.skillId);if(v_lv>0){if(v_lc===0)v_free.push({id:v_lo.skillId,cost:0,value:v_lv});else if(v_lc<=v17)v_items.push({id:v_lo.skillId,cost:v_lc,value:v_lv})}}
if(v_up){v_done.add(v_up.skillId);const v_uc=v15(v_up.skillId),v_uv=v14(v_up.skillId);if(v_uv>0){if(v_uc===0)v_free.push({id:v_up.skillId,cost:0,value:v_uv});else if(v_uc<=v17)v_items.push({id:v_up.skillId,cost:v_uc,value:v_uv})}}
if(v_items.length>0)v_grps.push(v_items);
return;
}
v_done.add(v46.skillId);
const v130=v15(v46.skillId),v221=v14(v46.skillId);
if(v221<=0)return;
if(v130===0)v_free.push({id:v46.skillId,cost:0,value:v221});
else if(v130<=v17)v_grps.push([{id:v46.skillId,cost:v130,value:v221}]);
});
v_inh.forEach((v170,v171)=>{
if(v170===""||v170===null)return;
const v61=parseInt(v170);
if(isNaN(v61))return;
const v201=v97('#talent-check')&&v97('#talent-check').checked;
const v189=Math.min(100,v61+(v201?10:0));
const v230=Math.round(180*(1-v189/100));
if(v230===0)v_free.push({id:'inh_'+v171,cost:0,value:180,isInh:true});
else if(v230<=v17)v_grps.push([{id:'inh_'+v171,cost:v230,value:180,isInh:true}]);
});
if(!v_free.length&&!v_grps.length){v97('#solve-result').innerHTML='<p>'+v18('noSkillCalc')+'</p>';return;}
const v_all=v_grps.map(g=>g.reduce((b,i)=>i.value>b.value?i:b,g[0]));
const v_sum=v_all.reduce((s,i)=>s+i.cost,0);
if(v_sum<=v17){v76([...v_free,...v_all],'0.00');return;}
if(!v_grps.length){v76(v_free,'0.00');return;}
const v170=v_grps.length;
const v_dp=new Float64Array(v17+1);
const v_ch=new Uint8Array(v170*(v17+1));
const v183=v97('#solve-progress');
const v107=v97('#progress-bar');
const v202=v97('#progress-text');
v183.classList.remove('hidden');
const v199=performance.now();
v107.max=v170;
const v99=Math.max(1,Math.ceil(v170/60));
let v36=0;
function v84(){
if(v36>=v170){
const v74=[...v_free];
let v95=v17;
for(let v96=v170-1;v96>=0;v96--){
const v237=v96*(v17+1);
if(v_ch[v237+v95]>0){
const v_item=v_grps[v96][v_ch[v237+v95]-1];
v74.push(v_item);
v95-=v_item.cost;
}}
const v140=((performance.now()-v199)/1000).toFixed(2);
v183.classList.add('hidden');
v76(v74,v140);
return;
}
const v141=Math.min(v36+v99,v170);
for(;v36<v141;v36++){
const g=v_grps[v36];
const v237=v36*(v17+1);
if(g.length===1){
const it=g[0];
for(let w=v17;w>=it.cost;w--){
const val=v_dp[w-it.cost]+it.value;
if(val>v_dp[w]){v_dp[w]=val;v_ch[v237+w]=1;}
}
}else{
const v_old=v_dp.slice();
for(let w=0;w<=v17;w++){
v_dp[w]=v_old[w];
v_ch[v237+w]=0;
for(let k=0;k<g.length;k++){
if(g[k].cost<=w){
const val=v_old[w-g[k].cost]+g[k].value;
if(val>v_dp[w]){v_dp[w]=val;v_ch[v237+w]=k+1;}
}
}
}
}
}
v107.value=v36;
v202.textContent=Math.round(v36/v170*100)+'%';
requestAnimationFrame(v84);
}
requestAnimationFrame(v84);
}

function v76(v47,v88){
const v207=v47.reduce((v72,v36)=>v72+v36.value,0);
const v205=v47.reduce((v72,v36)=>v72+v36.cost,0);
let v35='<h3>'+v18('optimal')+' ('+v18('totalTime')+' '+v88+'s, '+v47.length+' '+v18('skillGroups')+')</h3><p>'+v18('totalScore')+': '+v207.toFixed(1)+' | '+v18('totalPT')+': '+v205+'</p><table><thead><tr><th>'+v18('skill')+'</th><th>'+v18('pt')+'</th><th>'+v18('score')+'</th></tr></thead><tbody>';
v47.forEach(v45=>{
if(v45.isInh){
v35+='<tr><td>'+v18('inheritance')+' '+v45.id.replace('inh_','#')+'</td><td>'+v45.cost+'</td><td>'+v45.value.toFixed(1)+'</td></tr>';
return;
}
const v79=v196[v45.id];
const v117=v82.filter(v36=>v36.bundleUpper===v45.id);
const v_cir=v79&&v79.circle===1?'\u25cb':(v79&&v79.circle===2?'\u25ce':'');
v35+='<tr><td>'+v142(v79?v79['\u4e2d\u6587\u540d']:'?')+(v_cir?' '+v_cir:'')+(v117.length?' <small style="color:#059669">+'+v117.length+' '+v18('bundledLower')+'</small>':'')+'</td><td>'+v45.cost+'</td><td>'+v45.value.toFixed(1)+'</td></tr>';
v117.forEach(v9=>{const v53=v196[v9.skillId];
v35+='<tr class="result-sub-row"><td>\u3000\u2502\u2500 '+v142(v53?v53['\u4e2d\u6587\u540d']:'?')+'</td><td colspan="2" style="color:#999;font-size:12px">'+v18('lowerSkill')+'</td></tr>';
});});
v35+='</tbody></table>';
v97('#solve-result').innerHTML=v35;}

function v66(){v97('#app').innerHTML='<div class="notice-bar">'+v18('notice')+'</div><header><h1>'+v18('title')+'</h1><div class="header-controls"><button id="cache-btn" onclick="window._showCacheModal()">'+v18('cacheBtn')+'</button><button id="lang-btn" onclick="window._switchLang()">'+v18('langBtn')+'</button><button id="theme-btn" onclick="window._switchTheme()">'+(v302==='dark'?v18('themeBtnLight'):v18('themeBtnDark'))+'</button></div></header><main class="container"><section id="card-selector-section" class="hidden"><h2>'+v18('step1')+'</h2><div class="filter-bar"><input type="text" id="card-search" placeholder="'+v18('searchCard')+'"><select id="card-type-filter"><option value="">'+v18('allTypes')+'</option></select><select id="card-rarity-filter"><option value="">'+v18('allRarity')+'</option></select></div><div class="card-grid" id="card-grid"></div><div id="selected-cards-display" class="selected-cards"></div><button id="confirm-cards-btn" class="btn" disabled>'+v18('confirm')+'</button></section><section id="level-skills-section" class="hidden"><h2>'+v18('step2')+'</h2><div id="card-levels"></div><button id="confirm-levels-btn" class="btn">'+v18('confirm')+'</button></section><section id="aptitude-section" class="hidden"><h2>'+v18('aptitudeTitle')+'</h2><div class="aptitude-grid" id="aptitude-grid"></div></section><section id="skill-pool-section" class="hidden"><h2>'+v18('step4')+'</h2><div class="row"><div class="col col-bordered"><h3>'+v18('cardPool')+'</h3><div class="card-pool-search"><input type="text" id="card-pool-search-input" placeholder="'+v18('cardPoolSearch')+'" style="flex:1;padding:6px 10px;border:1px solid var(--border-strong);border-radius:4px;background:var(--surface);color:var(--text);font-size:13px"></div><div id="card-pool-list"></div></div></div><hr class="section-divider"><div class="row"><div class="col"><h3>'+v18('skillPool')+'</h3><div class="filter-bar"><button id="batch-add-btn" class="btn outline">'+v18('addSkill')+'</button></div><div class="skill-list" id="skill-pool-list"></div><div style="margin-top:12px"><label><input type="checkbox" id="talent-check"> '+v18('talent')+'</label></div><div id="inheri-slots" style="margin-top:8px"></div></div><div class="col"><h3>'+v18('algorithm')+'</h3><label>'+v18('ptPoints')+'<input type="number" id="pt-capacity" value="500" min="0" style="width:100px;margin-left:8px"></label><button id="solve-btn" class="btn primary">'+v18('calculate')+'</button><div id="solve-progress" class="progress-wrap hidden"><progress id="progress-bar" value="0" max="100"></progress><span id="progress-text">0%</span></div><div id="solve-result" class="result-box"></div></div></div></section></main>';}

async function v39(){v301=localStorage.getItem('uma_lang')||'zh';v302=localStorage.getItem('uma_theme')||'light';document.documentElement.setAttribute('data-theme',v302);v66();const v_cache=v305();if(v_cache&&v_cache.skills&&v_cache.cards){v83=v_cache.skills;v83.forEach(v72=>{v196[v72.id]=v72;});const v_proc=v12(v_cache.cards);v4=v_proc.cards;v3=v_proc.typeMap;v97('#card-selector-section').classList.remove('hidden');v41();return;}v75(v18('loadingSkills'));try{const v35=await v25(v102);v83=v62(v35);v75(v18('loadingCards'));const v123=await v24();const v114=v12(v123);v4=v114.cards;v3=v114.typeMap;v32();v97('#card-selector-section').classList.remove('hidden');v41();}catch(v20){v32();alert('Init failed: '+v20.message);console.error(v20);}}

window._showCacheModal=function(){const v_ov=v97('#cache-modal-overlay');if(v_ov)v_ov.remove();const v_c=v305();const v_m=document.createElement('div');v_m.id='cache-modal-overlay';v_m.className='cache-modal-overlay';if(v_c){v_m.innerHTML='<div class="cache-modal"><h3>'+v18('cacheTitle')+'</h3><p>'+v18('cacheExists')+' <span class="cache-time">'+(v_c.time||'')+'</span></p><div class="cache-actions"><button class="btn outline" onclick="document.getElementById(\'cache-modal-overlay\').remove()">'+v18('cancel')+'</button><button class="btn danger" id="cache-clear-btn">'+v18('cacheClearBtn')+'</button></div></div>';document.body.appendChild(v_m);v97('#cache-clear-btn').onclick=()=>{v310();location.reload();};}else{v_m.innerHTML='<div class="cache-modal"><h3>'+v18('cacheTitle')+'</h3><p>'+v18('cacheNone')+'</p><div class="cache-actions"><button class="btn outline" onclick="document.getElementById(\'cache-modal-overlay\').remove()">'+v18('cancel')+'</button><button class="btn primary" id="cache-create-btn">'+v18('cacheCreateBtn')+'</button></div></div>';document.body.appendChild(v_m);v97('#cache-create-btn').onclick=async()=>{v97('#cache-create-btn').disabled=true;v97('#cache-create-btn').textContent=v18('cacheLoading');try{v75(v18('loadingSkills'));const v_sk=await v25(v102);v83=v62(v_sk);v75(v18('loadingCards'));const v_cd=await v24();v32();const v_ok=v308({skills:v83,cards:v_cd,time:new Date().toLocaleString()});if(v_ok){v97('#cache-modal-overlay').remove();alert(v18('cacheDone'));location.reload();}else{alert(v18('cacheFail')+' localStorage quota exceeded');v97('#cache-create-btn').disabled=false;v97('#cache-create-btn').textContent=v18('cacheCreateBtn');}}catch(v_e){v32();alert(v18('cacheFail')+' '+v_e.message);v97('#cache-create-btn').disabled=false;v97('#cache-create-btn').textContent=v18('cacheCreateBtn');}};}v_m.addEventListener('click',v_e=>{if(v_e.target===v_m)v_m.remove();});};

window._switchLang=function(){v301=v301==='zh'?'en':'zh';localStorage.setItem('uma_lang',v301);const v_cs=!v97('#card-selector-section').classList.contains('hidden');const v_ls=!v97('#level-skills-section').classList.contains('hidden');const v_as=!v97('#aptitude-section').classList.contains('hidden');const v_sp=!v97('#skill-pool-section').classList.contains('hidden');v66();if(v_ls){v97('#level-skills-section').classList.remove('hidden');v313();}else if(v_as&&!v_sp){v97('#aptitude-section').classList.remove('hidden');v40();}else if(v_sp){v97('#skill-pool-section').classList.remove('hidden');v311();v43();}else{v97('#card-selector-section').classList.remove('hidden');v41();}};

window._switchTheme=function(){v302=v302==='dark'?'light':'dark';localStorage.setItem('uma_theme',v302);document.documentElement.setAttribute('data-theme',v302);const v_btn=v97('#theme-btn');if(v_btn)v_btn.textContent=v302==='dark'?v18('themeBtnLight'):v18('themeBtnDark');};

document.addEventListener('DOMContentLoaded',v39);

})();

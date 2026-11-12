/* NewFaces India — Public Instagram + Agencies */
(function(){
'use strict';
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const rng = mulberry32(20261112);
function pick(arr){ return arr[Math.floor(rng()*arr.length)] }
function pickN(arr,n){ const c=[...arr]; const out=[]; for(let i=0;i<n && c.length;i++){ const idx=Math.floor(rng()*c.length); out.push(c.splice(idx,1)[0]) } return out }
function initials(name){ return name.split(' ').map(s=>s[0]).join('').slice(0,2).toUpperCase() }
function hashStr(s){ let h=0; for(let i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))>>>0; return h }
function gradientFor(i){ const hues=[[139,30,63],[185,28,28],[40,20,10],[20,60,50],[90,20,60],[120,40,10]]; const h=hues[i%hues.length]; return `linear-gradient(135deg, rgb(${h[0]},${h[1]},${h[2]}) 0%, rgb(${(h[0]+50)%255},${(h[1]+40)%255},${(h[2]+40)%255}) 100%)` }

const FIRST=["Aarushi","Aanya","Ananya","Diya","Ishita","Kavya","Meera","Priya","Riya","Sanya","Tanvi","Vira","Zara","Aadhya","Aditi","Akshara","Alisha","Ameya","Anika","Arshia","Avni","Bhavya","Chitra","Devika","Eshana","Falak","Gauri","Harshita","Heer","Ishika","Jaya","Kalyani","Kriti","Lavanya","Mahika","Maitri","Neha","Nidhi","Pallavi","Pihu","Pranjal","Radhika","Ranya","Ritika","Ruhi","Sahana","Samaira","Sara","Shalini","Shanaya","Shreya","Siya","Sneha","Tanya","Vanya","Vrinda","Yashvi","Yamini","Zoya","Aarohi","Anvita","Bhavika","Chhavi","Dhriti","Eshang","Ivaani","Krishika","Lakshmi","Mihika","Naina","Ojasvi","Palak","Rashmi","Riddhi","Sanjana","Shambhavi","Vasudha","Yukti"];
const LAST=["Sharma","Verma","Patel","Gupta","Iyer","Reddy","Khan","Nair","Singh","Kumar","Joshi","Pandey","Mehta","Rao","Bose","Choudhury","Desai","Kapoor","Malhotra","Arora","Bhatt","Chavan","Dutta","Menon","Naidu","Pillai","Shetty","Trivedi","Varghese","Yadav","Chandra","Dewan","Fernandes","Hegde","Isaac","Jain","Kamat","Lele","Mishra","Nambiar","Oak","Parikh","Rana","Saxena","Kulkarni","Bhagwat","Kaur"];
const CITIES=[["Mumbai","Maharashtra"],["Delhi","Delhi"],["Bengaluru","Karnataka"],["Hyderabad","Telangana"],["Chennai","Tamil Nadu"],["Kolkata","West Bengal"],["Pune","Maharashtra"],["Ahmedabad","Gujarat"],["Jaipur","Rajasthan"],["Lucknow","Uttar Pradesh"],["Chandigarh","Chandigarh"],["Kochi","Kerala"],["Indore","Madhya Pradesh"],["Surat","Gujarat"],["Guwahati","Assam"],["Bhopal","Madhya Pradesh"],["Nagpur","Maharashtra"],["Vadodara","Gujarat"],["Madurai","Tamil Nadu"],["Coimbatore","Tamil Nadu"],["Visakhapatnam","Andhra Pradesh"],["Mysuru","Karnataka"],["Thane","Maharashtra"],["Ludhiana","Punjab"],["Patna","Bihar"],["Dehradun","Uttarakhand"],["Nashik","Maharashtra"],["Kozhikode","Kerala"],["Trivandrum","Kerala"],["Raipur","Chhattisgarh"]];
const CATS=["Fashion Model","Commercial Model","Influencer","Content Creator","Budding Actress"];
const LANGS=["Hindi","English","Marathi","Tamil","Telugu","Bengali","Kannada","Malayalam","Punjabi","Gujarati"];
const TAG_POOL={"Fashion Model":["Editorial","Runway","Saree","Lehenga","Indo-Western","Streetwear","Portfolio","Test Shoot"],"Commercial Model":["Product","Ethnic Wear","Jewellery","Cosmetics","Footwear","Home Decor"],"Influencer":["Reels","UGC","Sponsored","Fashion","Beauty","Lifestyle","Vlogs"],"Content Creator":["Dance","Comedy","Makeup","GRWM","Fashion","Interviews"],"Budding Actress":["Theatre","Short Films","Web Series","Auditions","Voice","Ad Films"]};
const BIOS=["Early-career talent focused on test shoots & indie labels. DM for portfolio.","Building social with reels & UGC. Open to product & ethnic shoots.","Former college performer now into modelling. Portfolio ready.","Multilingual creator — Hindi/English + regional. GRWM & try-ons.","Theatre background, now auditioning for OTT & shorts."];

const AGENCY_FIRST=["Fresh","New","Next","Star","Prime","Elite","Vision","Nova","Aura","Lumi","Muse","Studio","Collective","House","Talent","One","Art","Glint","Folio","Velvet"];
const AGENCY_SECOND=["Faces","Talent","Models","Studio","Collective","House","Manage","Group","Lane","Works"];
const AGENCY_SPEC=["Fashion / Editorial","Commercial / Product","Influencer / Creator","Casting / OTT","Regional / Vernacular"];

let profiles=[]; let agencies=[];
function generateAgencies(){
  const combo=[]; AGENCY_FIRST.forEach(a=>AGENCY_SECOND.forEach(b=>combo.push(a+" "+b)));
  // shuffle
  for(let i=combo.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[combo[i],combo[j]]=[combo[j],combo[i]]}
  const selected=combo.slice(0,84);
  selected.forEach((name,idx)=>{
    const [city,state]=pick(CITIES);
    const spec=AGENCY_SPEC[idx%AGENCY_SPEC.length];
    const handle="@"+name.toLowerCase().replace(/\s+/g,'.')+"."+city.toLowerCase().replace(/\s+/g,'').replace(/\s/g,'');
    const website="https://"+name.toLowerCase().replace(/\s+/g,'')+"-"+city.toLowerCase().replace(/\s/g,'')+".example";
    const roster=8+Math.floor(rng()*68);
    agencies.push({id:"AG"+String(idx+1).padStart(3,"0"),name,city,state,specialty:spec,insta:handle,website,roster,bio:"Boutique agency scouting budding talent in "+city+". Roster of "+roster+" faces. DM on Instagram to submit portfolio."});
  });
}
function generate1000(){
  const combos=[]; for(let i=FIRST.length;i-->0;) for(let j=LAST.length;j-->0;) combos.push(FIRST[i]+" "+LAST[j]);
  for(let i=combos.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[combos[i],combos[j]]=[combos[j],combos[i]]}
  const selected=combos.slice(0,1000);
  selected.forEach((name,idx)=>{
    const [city,state]=pick(CITIES);
    const cat=CATS[idx%CATS.length];
    const langs=pickN(LANGS,1+Math.floor(rng()*2));
    const r=rng(); let followers,folBucket;
    if(r<0.35){followers=800+Math.floor(rng()*4200);folBucket="nano"}
    else if(r<0.70){followers=5000+Math.floor(rng()*45000);folBucket="micro"}
    else if(r<0.92){followers=50000+Math.floor(rng()*150000);folBucket="mid"}
    else {followers=200000+Math.floor(rng()*380000);folBucket="rising"}
    let rate; if(cat==="Influencer"||cat==="Content Creator") rate=2500+Math.floor(rng()*28000);
    else if(cat==="Budding Actress") rate=4000+Math.floor(rng()*20000);
    else rate=3000+Math.floor(rng()*22000);
    rate=Math.round(rate/500)*500;
    const age=18+Math.floor(rng()*14); const height=155+Math.floor(rng()*23);
    const years=rng(); let exp,expLabel;
    if(years<0.4){exp="0-1";expLabel="Newcomer (0–1 yr)"} else if(years<0.75){exp="1-2";expLabel="1–2 yrs"} else {exp="2-3";expLabel="2–3 yrs"}
    const tags=pickN(TAG_POOL[cat],3);
    const handle="@"+name.toLowerCase().replace(/\s+/g,'.')+"."+city.toLowerCase().replace(/\s+/g,'');
    const agency = agencies.length? agencies[Math.floor(rng()*agencies.length)].name : "Independent";
    const instagram=`https://instagram.com/${handle.replace('@','')}`;
    profiles.push({id:"NF"+String(idx+1).padStart(4,"0"),name,city,state,category:cat,langs:langs.join(", "),tags,bio:pick(BIOS),age,height,exp,expLabel,followers,folBucket,rate,insta:handle,instagram,agency,joined:new Date(2025,Math.floor(rng()*12),1+Math.floor(rng()*27))});
  });
  profiles.sort((a,b)=>b.joined-a.joined);
}

const LS_SHORT="nfi_shortlist_v2_ig", LS_USER="nfi_user_profiles_v2_ig";
function loadShortlist(){try{return new Set(JSON.parse(localStorage.getItem(LS_SHORT)||"[]"))}catch{return new Set()}}
function saveShortlist(s){try{localStorage.setItem(LS_SHORT,JSON.stringify([...s]))}catch(e){alert("Could not save shortlist — storage full.")}}
function loadUser(){try{return JSON.parse(localStorage.getItem(LS_USER)||"[]")}catch{return []}}
function saveUser(arr){try{localStorage.setItem(LS_USER,JSON.stringify(arr))}catch(e){alert("Could not save profile.")}}
let shortlist=loadShortlist(); let userProfiles=loadUser();
function allProfiles(){return [...userProfiles,...profiles]}

generateAgencies(); generate1000();

const $=s=>document.querySelector(s);
const grid=$("#grid"), resultCount=$("#resultCount"), pageInfo=$("#pageInfo"), loadMoreBtn=$("#loadMoreBtn");
let state={cat:"All",city:"",agency:"",lang:"",exp:"",fol:"",q:"",sort:"new",page:1,perPage:24};
let agState={city:"",spec:"",q:""};

function fmtFollowers(n){if(n>=100000) return (n/1000).toFixed(n>=1000000?2:0).replace(/\.0+$/,'')+"k"; if(n>=1000) return (n/1000).toFixed(1).replace(/\.0$/,'')+"k"; return String(n)}
function fmtRate(n){return "₹"+n.toLocaleString("en-IN")}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

function filtered(){
  let list=allProfiles();
  if(state.cat!=="All") list=list.filter(p=>p.category===state.cat);
  if(state.city) list=list.filter(p=>p.city===state.city);
  if(state.agency) list=list.filter(p=>p.agency===state.agency);
  if(state.lang) list=list.filter(p=>p.langs.toLowerCase().includes(state.lang.toLowerCase()));
  if(state.exp) list=list.filter(p=>p.exp===state.exp);
  if(state.fol) list=list.filter(p=>p.folBucket===state.fol);
  if(state.q){const q=state.q.toLowerCase(); list=list.filter(p=>(p.name+" "+p.city+" "+p.category+" "+p.tags.join(" ")+" "+p.langs+" "+p.insta+" "+p.agency).toLowerCase().includes(q))}
  if(state.sort==="followers") list.sort((a,b)=>b.followers-a.followers);
  else if(state.sort==="rate-low") list.sort((a,b)=>a.rate-b.rate);
  else if(state.sort==="rate-high") list.sort((a,b)=>b.rate-a.rate);
  else if(state.sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
  else list.sort((a,b)=>(b.joined||0)-(a.joined||0));
  return list;
}
function cardHtml(p){
  const h=hashStr(p.name); const bg=gradientFor(h); const isShort=shortlist.has(p.id);
  return `<article class="card">
    <div class="card-top" style="background:${bg}"><span class="cat">${escapeHtml(p.category)}</span><button class="fav ${isShort?"on":""}" data-fav="${escapeHtml(p.id)}">${isShort?"♥":"♡"}</button><div class="card-initials">${escapeHtml(initials(p.name))}</div><span class="card-rate">${fmtRate(p.rate)}/day</span></div>
    <div class="card-body"><h3>${escapeHtml(p.name)}</h3><div class="card-meta"><span>📍 ${escapeHtml(p.city)}</span><span>• ${escapeHtml(p.agency)}</span></div><div class="ig-handle">${escapeHtml(p.insta)} <a href="${escapeHtml(p.instagram)}" target="_blank" rel="noopener" style="text-decoration:underline;color:var(--accent)">↗ IG</a></div><div class="card-meta">${p.tags.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join("")}</div><div class="card-stats"><span>👥 ${fmtFollowers(p.followers)}</span><span>${escapeHtml(p.langs)}</span></div><div class="card-actions"><button class="view-btn" data-view="${escapeHtml(p.id)}">View</button><a class="ig-btn" href="${escapeHtml(p.instagram)}" target="_blank" rel="noopener">DM on Instagram</a></div></div></article>`;
}
function render(){
  const list=filtered(); const total=list.length; const paged=list.slice(0,state.page*state.perPage);
  grid.innerHTML=paged.map(cardHtml).join(""); resultCount.textContent=`${total.toLocaleString()} Instagram faces`;
  pageInfo.textContent=`Showing ${paged.length} / ${total}`; loadMoreBtn.disabled=paged.length>=total; loadMoreBtn.textContent=paged.length>=total?"End of list":"Load more";
  $("#statTotal").textContent=allProfiles().length.toLocaleString(); $("#statAgencies").textContent=agencies.length;
}
function openProfile(id){
  const p=allProfiles().find(x=>x.id===id); if(!p) return;
  const h=hashStr(p.name); const bg=gradientFor(h); const isShort=shortlist.has(p.id);
  const modal=$("#modal"), card=$("#modalCard");
  card.innerHTML=`<div class="profile-hero" style="background:${bg}"><button class="close" id="modalClose">✕</button><div><span style="background:rgba(0,0,0,.55);padding:4px 8px;border-radius:999px;font-size:11px;font-weight:800">${escapeHtml(p.category)}</span><h2 style="margin:8px 0 2px;font-family:Fraunces,serif;font-size:26px">${escapeHtml(p.name)}</h2><div style="font-size:13px">📍 ${escapeHtml(p.city)}, ${escapeHtml(p.state)} • ${escapeHtml(p.agency)}</div></div></div>
  <div class="profile-body"><div class="profile-grid"><div class="stat-box"><strong>${fmtFollowers(p.followers)}</strong><span>Followers</span></div><div class="stat-box"><strong>${fmtRate(p.rate)}</strong><span>Per day</span></div><div class="stat-box"><strong>${escapeHtml(p.langs.split(",")[0])}</strong><span>Language</span></div></div><p style="color:var(--muted);margin:0">${escapeHtml(p.bio)}</p><div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap">${p.tags.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join("")}</div><div style="margin-top:12px;border:1px solid var(--line);border-radius:12px;padding:10px"><div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px"><strong>${escapeHtml(p.insta)}</strong><a href="${escapeHtml(p.instagram)}" target="_blank" style="background:var(--ink);color:white;padding:6px 12px;border-radius:999px;font-weight:800;font-size:12px">Open Instagram ↗</a></div><div style="font-size:12px;color:var(--muted);margin-top:6px">Languages: ${escapeHtml(p.langs)} • ${escapeHtml(p.expLabel)}</div></div><div class="profile-actions"><a class="primary" href="${escapeHtml(p.instagram)}" target="_blank">💬 DM on Instagram</a><button class="ghost" id="modalFav">${isShort?"♥ Shortlisted":"♡ Shortlist"}</button></div><p class="fine">Public Instagram only — we never list private emails or numbers.</p></div>`;
  modal.classList.remove("hidden"); document.body.style.overflow="hidden";
  card.querySelector("#modalClose").onclick=closeModal;
  card.querySelector("#modalFav").onclick=()=>{ if(shortlist.has(p.id)) shortlist.delete(p.id); else shortlist.add(p.id); saveShortlist(shortlist); syncShortlistUI(); render(); card.querySelector("#modalFav").textContent=shortlist.has(p.id)?"♥ Shortlisted":"♡ Shortlist"; };
}
function closeModal(){$("#modal").classList.add("hidden"); document.body.style.overflow=""}
$("#modalBack").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal(); $("#drawer").classList.add("hidden")}});
grid.addEventListener("click",e=>{
  const fav=e.target.closest("[data-fav]"); const view=e.target.closest("[data-view]");
  if(fav){const id=fav.dataset.fav; if(shortlist.has(id)) shortlist.delete(id); else shortlist.add(id); saveShortlist(shortlist); syncShortlistUI(); render(); return}
  if(view){openProfile(view.dataset.view); return}
});
function syncShortlistUI(){$("#shortlistCount").textContent=shortlist.size; renderDrawer()}
function renderDrawer(){
  const list=$("#drawerList");
  if(shortlist.size===0){list.innerHTML=`<p style="color:var(--muted);font-size:13px">No shortlisted faces yet. Tap ♡ to build your Instagram casting list.</p>`; return}
  list.innerHTML=[...shortlist].map(id=>{const p=allProfiles().find(x=>x.id===id); if(!p) return ""; return `<div style="display:flex;gap:10px;align-items:center;border:1px solid var(--line);border-radius:12px;padding:8px"><div style="width:38px;height:38px;border-radius:10px;display:grid;place-items:center;color:white;font-weight:800;background:${gradientFor(hashStr(p.name))}">${escapeHtml(initials(p.name))}</div><div style="flex:1"><strong style="font-size:13px">${escapeHtml(p.name)}</strong><div style="font-size:11px;color:var(--muted)">${escapeHtml(p.insta)} • ${escapeHtml(p.city)}</div></div><button class="link-btn" data-remove="${escapeHtml(p.id)}">Remove</button></div>`}).join("");
}
$("#drawerList").addEventListener("click",e=>{const b=e.target.closest("[data-remove]"); if(b){shortlist.delete(b.dataset.remove); saveShortlist(shortlist); syncShortlistUI(); render()}});
$("#shortlistBtn").addEventListener("click",()=>{$("#drawer").classList.remove("hidden")});
$("#drawerClose").addEventListener("click",()=>$("#drawer").classList.add("hidden"));
$("#drawerBack").addEventListener("click",()=>$("#drawer").classList.add("hidden"));
$("#copyShortlist").addEventListener("click",async()=>{const txt=[...shortlist].map(id=>{const p=allProfiles().find(x=>x.id===id); return p? `${p.name} — ${p.insta} — ${p.city} — ${fmtRate(p.rate)} — ${p.agency}`:""}).filter(Boolean).join("\n"); if(!txt) return alert("Empty"); try{await navigator.clipboard.writeText(txt); alert("Copied!")}catch{prompt("Copy:",txt)}});

/* filters */
const citySel=$("#citySel"), agencySel=$("#agencySel"), langSel=$("#langSel");
CITIES.map(c=>c[0]).sort().forEach(c=>{const o=document.createElement("option"); o.value=c; o.textContent=c; citySel.appendChild(o); const o2=o.cloneNode(true); $("#agCitySel").appendChild(o2)});
agencies.map(a=>a.name).sort().forEach(n=>{const o=document.createElement("option"); o.value=n; o.textContent=n; agencySel.appendChild(o)});
LANGS.forEach(l=>{const o=document.createElement("option"); o.value=l; o.textContent=l; langSel.appendChild(o)});
const catChips=$("#catChips");
["All",...CATS].forEach(c=>{const b=document.createElement("button"); b.type="button"; b.className="chip"+(c==="All"?" active":""); b.textContent=c; b.dataset.cat=c; b.addEventListener("click",()=>{catChips.querySelectorAll(".chip").forEach(x=>x.classList.remove("active")); b.classList.add("active"); state.cat=c; state.page=1; render()}); catChips.appendChild(b)});
function bindFilter(id,key){ $(id).addEventListener("change",e=>{state[key]=e.target.value; state.page=1; render()}) }
bindFilter("#citySel","city"); bindFilter("#agencySel","agency"); bindFilter("#langSel","lang"); bindFilter("#expSel","exp"); bindFilter("#folSel","fol");
$("#sortSel").addEventListener("change",e=>{state.sort=e.target.value; state.page=1; render()});
$("#searchInp").addEventListener("input",e=>{state.q=e.target.value.trim(); state.page=1; render()});
$("#clearFilters").addEventListener("click",()=>{state={cat:"All",city:"",agency:"",lang:"",exp:"",fol:"",q:"",sort:"new",page:1,perPage:24}; citySel.value=""; agencySel.value=""; langSel.value=""; $("#expSel").value=""; $("#folSel").value=""; $("#searchInp").value=""; $("#sortSel").value="new"; catChips.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active",x.dataset.cat==="All")); render()});
loadMoreBtn.addEventListener("click",()=>{state.page++; render()});
function heroSearch(){const v=$("#heroSearch").value; $("#searchInp").value=v; state.q=v.trim(); state.page=1; render(); document.getElementById("explore").scrollIntoView({behavior:"smooth"})}
$("#heroSearchBtn").addEventListener("click",heroSearch); $("#heroSearch").addEventListener("keydown",e=>{if(e.key==="Enter") heroSearch()});
document.querySelectorAll(".chip-quick").forEach(b=>b.addEventListener("click",()=>{const q=b.dataset.q; $("#searchInp").value=q; state.q=q; state.page=1; render(); document.getElementById("explore").scrollIntoView({behavior:"smooth"})}));

/* hero picks */
function heroPicks(){ const picks=[...profiles].slice(0,80).sort(()=>rng()-0.5).slice(0,3); $("#heroPicks").innerHTML=picks.map(p=>`<div class="pick"><div class="pick-avatar" style="background:${gradientFor(hashStr(p.name))}">${escapeHtml(initials(p.name))}</div><div class="pick-info"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.insta)} • ${escapeHtml(p.city)}</span></div><button data-pick="${escapeHtml(p.id)}">View</button></div>`).join("") }
$("#heroPicks").addEventListener("click",e=>{const b=e.target.closest("[data-pick]"); if(b) openProfile(b.dataset.pick)});

/* agencies grid */
const agencyGrid=$("#agencyGrid"), agencyCount=$("#agencyCount");
function filteredAgencies(){ let list=[...agencies]; if(agState.city) list=list.filter(a=>a.city===agState.city); if(agState.spec) list=list.filter(a=>a.specialty===agState.spec); if(agState.q){const q=agState.q.toLowerCase(); list=list.filter(a=>(a.name+" "+a.city+" "+a.insta+" "+a.specialty).toLowerCase().includes(q))} return list }
function agCard(a){
  return `<article class="agency-card"><div style="display:flex;justify-content:space-between;align-items:start"><h3>${escapeHtml(a.name)}</h3><span style="background:var(--soft2);border:1px solid var(--line);padding:2px 8px;border-radius:999px;font-size:11px;font-weight:800">${a.id}</span></div><div class="ag-meta">📍 ${escapeHtml(a.city)}, ${escapeHtml(a.state)} • ${escapeHtml(a.specialty)} • Roster ${a.roster}</div><div style="font-size:12px;color:var(--muted)">${escapeHtml(a.bio)}</div><div class="ig-handle">${escapeHtml(a.insta)}</div><div class="ag-tags"><span class="tag">${escapeHtml(a.specialty)}</span><span class="tag">${escapeHtml(a.city)}</span></div><div class="ag-actions"><a href="https://instagram.com/${escapeHtml(a.insta.replace('@',''))}" target="_blank" rel="noopener">Instagram ↗</a><a href="${escapeHtml(a.website)}" target="_blank" rel="noopener">Website</a></div></article>`;
}
function renderAgencies(){ const list=filteredAgencies(); $("#agencyGrid").innerHTML=list.map(agCard).join(""); agencyCount.textContent=`${list.length} agencies`; }
$("#agCitySel")?.addEventListener("change",e=>{agState.city=e.target.value; renderAgencies()});
$("#agSpecSel")?.addEventListener("change",e=>{agState.spec=e.target.value; renderAgencies()});
$("#agSearch")?.addEventListener("input",e=>{agState.q=e.target.value.trim(); renderAgencies()});
$("#agClear")?.addEventListener("click",()=>{agState={city:"",spec:"",q:""}; $("#agCitySel").value=""; $("#agSpecSel").value=""; $("#agSearch").value=""; renderAgencies()});

/* populate join form agency dropdown */
const joinAgSel=document.querySelector('select[name="agency"]');
agencies.map(a=>a.name).sort().forEach(n=>{const o=document.createElement("option"); o.value=n; o.textContent=n; joinAgSel?.appendChild(o)});

/* join form */
$("#joinForm").addEventListener("submit",e=>{
  e.preventDefault(); const fd=new FormData(e.target);
  const name=(fd.get("name")||"").toString().trim(); const insta=(fd.get("insta")||"").toString().trim(); const city=(fd.get("city")||"").toString().trim(); const cat=(fd.get("category")||"").toString().trim();
  if(!name||!insta||!city||!cat) return alert("Fill name, Instagram, city & category.");
  const handle=insta.startsWith("@")? insta : "@"+insta;
  const followersStr=(fd.get("followers")||"Under 5k").toString(); let folBucket="nano", followers=2000;
  if(followersStr.includes("5k–50k")){folBucket="micro"; followers=8000+Math.floor(rng()*30000)} else if(followersStr.includes("50k")){folBucket="mid"; followers=60000+Math.floor(rng()*100000)} else if(followersStr.includes("200k")){folBucket="rising"; followers=210000+Math.floor(rng()*150000)}
  const newId="NFU"+String(Math.floor(rng()*9000)+1000);
  const p={id:newId,name,city,state:"India",category:cat,langs:(fd.get("langs")||"Hindi, English").toString(),tags:(fd.get("tags")||"").toString().split(",").map(s=>s.trim()).filter(Boolean),bio:(fd.get("bio")||"Newly listed public Instagram profile. Open for DMs.").toString(),age:22,height:165,exp:"0-1",expLabel:"Newcomer (0–1 yr)",followers,folBucket,rate:parseInt(fd.get("rate")||"8000",10)||8000,insta:handle,instagram:`https://instagram.com/${handle.replace('@','')}`,agency:(fd.get("agency")||"Independent").toString(),joined:new Date()};
  if(!p.tags.length) p.tags=["Portfolio","Reels"];
  userProfiles.unshift(p); saveUser(userProfiles);
  $("#joinOk").classList.remove("hidden"); e.target.reset();
  state.q=""; $("#searchInp").value=""; state.cat="All"; state.page=1; catChips.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active",x.dataset.cat==="All")); render();
  document.getElementById("explore").scrollIntoView({behavior:"smooth"});
});
$("#menuBtn").addEventListener("click",()=>{const l=document.querySelector(".nav-links"); l.style.display=l.style.display==="flex"?"none":"flex"});

/* init */
heroPicks(); render(); renderAgencies(); syncShortlistUI();
})();

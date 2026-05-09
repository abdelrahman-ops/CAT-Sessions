// ──────────────────────────────────────
// SLIDE DATA — "What Actually Happens
//   When You Open a Website?"
// ──────────────────────────────────────

export const session1Slides = [

// ═══════ PART 1 — THE HOOK ═══════
{
  type:'hero',
  title:'What <span class="gradient-text">Actually Happens</span><br>When You Open a Website?',
  subtitle:'A journey through the internet — from pressing Enter to pixels on screen.'
},
{
  type:'interaction', part:'PART 1 — THE HOOK',
  icon: "help-circle", question:'You type google.com and press Enter…',
  hint:'What do you think happens next? (Seriously, take a guess!)'
},
{
  type:'section', part:'PART 1 — THE HOOK',
  title:'In the next ~1 second…',
  subtitle:'Your browser does something incredible',
  content:'<p class="description animate-in animate-in-delay-2">It talks to <strong class="accent-cyan">dozens of servers</strong>, downloads files, builds a tree, paints pixels, and makes everything interactive.<br><br>Let\'s trace every single step.</p>'
},

// ═══════ PART 2 — BROWSER & URL ═══════
{
  type:'section', part:'PART 2 — BROWSER & URL',
  title:'What is a Browser?',
  subtitle:'More than you think',
  content:'<p class="description animate-in animate-in-delay-2">A browser is a <strong class="accent-blue">super-complex application</strong> that:<br>• Sends network requests<br>• Parses HTML, CSS, JS<br>• Renders pixels on your screen<br>• Runs a full JavaScript engine<br><br>Chrome alone has <strong class="accent-purple">~40 million</strong> lines of code.</p>'
},
{
  type:'analogy', part:'PART 2',
  title:'The Browser is Like a Restaurant',
  content:'<strong class="accent-orange">You</strong> = the customer placing an order (typing URL).<br><br><strong class="accent-blue">The waiter</strong> = the browser — takes your order, talks to the kitchen, brings back your food (the webpage).<br><br><strong class="accent-green">The kitchen</strong> = the server — prepares everything behind the scenes.'
},
{
  type:'diagram', part:'PART 2 — URL ANATOMY',
  title:'Anatomy of a URL',
  subtitle:'Every part has a purpose',
  diagram:`<div style="width:100%;max-width:900px;text-align:center;margin:0 auto;padding:48px;background:rgba(0,16,24,0.6);backdrop-filter:blur(16px);border-radius:1.5rem;border:1px solid rgba(255,255,255,0.1);box-shadow:0 20px 50px rgba(0,0,0,0.5)">
    <div style="font-family:monospace;font-size:2rem;font-weight:900;margin-bottom:48px;word-break:break-all">
      <span style="color:#F97316;text-shadow:0 0 15px rgba(249,115,22,0.5)">https</span><span style="color:rgba(255,255,255,0.2)">://</span><span style="color:#60A5FA;text-shadow:0 0 15px rgba(96,165,250,0.5)">www.google.com</span><span style="color:rgba(255,255,255,0.2)">:</span><span style="color:#4ADE80;text-shadow:0 0 15px rgba(74,222,128,0.5)">443</span><span style="color:rgba(255,255,255,0.2)">/</span><span style="color:#A78BFA;text-shadow:0 0 15px rgba(167,139,250,0.5)">search</span><span style="color:rgba(255,255,255,0.2)">?</span><span style="color:#EC4899;text-shadow:0 0 15px rgba(236,72,153,0.5)">q=hello</span>
    </div>
    <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;font-size:1.1rem;font-weight:bold;text-transform:uppercase;letter-spacing:2px">
      <div style="background:rgba(249,115,22,0.15);color:#F97316;padding:12px 24px;border-radius:12px;border:2px solid rgba(249,115,22,0.5);box-shadow:0 0 20px rgba(249,115,22,0.2)">Protocol</div>
      <div style="background:rgba(96,165,250,0.15);color:#60A5FA;padding:12px 24px;border-radius:12px;border:2px solid rgba(96,165,250,0.5);box-shadow:0 0 20px rgba(96,165,250,0.2)">Domain</div>
      <div style="background:rgba(74,222,128,0.15);color:#4ADE80;padding:12px 24px;border-radius:12px;border:2px solid rgba(74,222,128,0.5);box-shadow:0 0 20px rgba(74,222,128,0.2)">Port</div>
      <div style="background:rgba(167,139,250,0.15);color:#A78BFA;padding:12px 24px;border-radius:12px;border:2px solid rgba(167,139,250,0.5);box-shadow:0 0 20px rgba(167,139,250,0.2)">Path</div>
      <div style="background:rgba(236,72,153,0.15);color:#EC4899;padding:12px 24px;border-radius:12px;border:2px solid rgba(236,72,153,0.5);box-shadow:0 0 20px rgba(236,72,153,0.2)">Query</div>
    </div>
  </div>`
},
{
  type:'interaction',
  icon: "help-circle", question:'Why do we type "google.com" and not "142.250.185.46"?',
  hint:'Think about your phone contacts…'
},

// ═══════ PART 3 — DNS ═══════
{
  type:'section', part:'PART 3 — DNS',
  title:'DNS — The Internet\'s Phonebook',
  subtitle:'Translating names to numbers',
  content:'<p class="description animate-in animate-in-delay-2">Every website lives at an <strong class="accent-cyan">IP address</strong> (like 142.250.185.46).<br><br><strong class="accent-purple">DNS</strong> (Domain Name System) translates human-friendly names<br>into machine-friendly IP addresses.</p>'
},
{
  type:'analogy', part:'PART 3',
  title:'DNS = Your Phone Contacts',
  content:'You don\'t memorize <strong class="accent-cyan">+1-555-0123</strong> — you just tap <strong class="accent-green">"Mom"</strong>.<br><br>DNS does the same thing: you type <strong class="accent-blue">google.com</strong>, DNS looks up the number <strong class="accent-cyan">142.250.185.46</strong> and connects you.'
},
{
  type:'flow', part:'PART 3 — DNS LOOKUP',
  title:'DNS Lookup — Step by Step',
  subtitle:'What happens behind the scenes',
  steps:[
    {text:'Browser checks its OWN cache', color:'var(--accent-blue)'},
    {text:'Asks the Operating System', color:'var(--accent-purple)'},
    {text:'Asks the DNS Resolver (your ISP)', color:'var(--accent-cyan)'},
    {text:'Asks Root Name Server → ".com" server', color:'var(--accent-orange)'},
    {text:'Asks Google\'s Name Server', color:'var(--accent-green)'},
    {text:'Returns IP: 142.250.185.46', color:'var(--accent-pink)'}
  ]
},
{
  type:'interaction',
  icon: "zap", question:'Fun Fact: DNS lookup takes ~20-120ms',
  hint:'That\'s why browsers CACHE DNS results — so you don\'t look up the same name twice!'
},

// ═══════ PART 4 — HTTP/HTTPS ═══════
{
  type:'section', part:'PART 4 — HTTP REQUEST',
  title:'The Browser Sends a Request',
  subtitle:'Knocking on the server\'s door',
  content:'<p class="description animate-in animate-in-delay-2">Now the browser knows WHERE the server is.<br>Time to ask for the webpage!<br><br>It sends an <strong class="accent-blue">HTTP Request</strong> — a structured message<br>that says <em>"Hey, give me your homepage."</em></p>'
},
{
  type:'code', part:'PART 4',
  title:'What a Request Looks Like',
  code:`<span class="line-number">1</span><span class="keyword">GET</span> <span class="string">/</span> <span class="comment">HTTP/1.1</span>
<span class="line-number">2</span><span class="attr">Host:</span> <span class="value">www.google.com</span>
<span class="line-number">3</span><span class="attr">User-Agent:</span> <span class="value">Chrome/120</span>
<span class="line-number">4</span><span class="attr">Accept:</span> <span class="value">text/html</span>
<span class="line-number">5</span><span class="attr">Accept-Language:</span> <span class="value">en-US</span>`,
  note:'This is what your browser sends behind the scenes — every single time.'
},
{
  type:'cards', part:'PART 4 — HTTP METHODS',
  title:'HTTP Methods',
  subtitle:'Different ways to talk to a server',
  cards:[
    {icon:'download', title:'GET', desc:'Fetch/read data. "Show me the page."', color:'green', glow:'glow-cyan'},
    {icon:'upload', title:'POST', desc:'Send data. "Here\'s my login info."', color:'blue', glow:'glow-blue'},
    {icon:'edit', title:'PUT / PATCH', desc:'Update existing data.', color:'orange'},
    {icon:'trash-2', title:'DELETE', desc:'Remove data.', color:'pink'}
  ]
},
{
  type:'diagram', part:'PART 4 — STATUS CODES',
  title:'HTTP Status Codes',
  subtitle:'The server\'s quick response',
  diagram:`<div style="display:flex;flex-direction:column;gap:12px;max-width:500px;margin:0 auto;text-align:left">
    <div class="glass-card" style="padding:16px;border-left:4px solid #4ADE80"><strong>200 OK</strong> — Everything worked perfectly</div>
    <div class="glass-card" style="padding:16px;border-left:4px solid #3B82F6"><strong>301 Redirect</strong> — Page moved somewhere else</div>
    <div class="glass-card" style="padding:16px;border-left:4px solid #F97316"><strong>404 Not Found</strong> — Page doesn't exist</div>
    <div class="glass-card" style="padding:16px;border-left:4px solid #EF4444"><strong>500 Server Error</strong> — Server crashed</div>
  </div>`
},
{
  type:'diagram', part:'PART 4 — HTTPS',
  title:'HTTPS — The Secure Version',
  subtitle:'Encrypting the conversation',
  diagram:`<div style="display:flex;align-items:center;gap:32px;flex-wrap:wrap;justify-content:center">
    <div class="glass-card" style="text-align:center;padding:32px;border-color:#3B82F6;border-width:2px;box-shadow:0 0 30px rgba(59,130,246,0.3)">
      <div style="display:flex;justify-content:center;margin-bottom:16px;color:#3B82F6">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      </div>
      <div style="font-size:1.8rem;font-weight:900;color:#3B82F6">Browser</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
      <div style="font-size:1rem;color:#4ADE80;font-family:var(--font-mono);font-weight:900;text-shadow:0 0 10px rgba(74,222,128,0.5)">ENCRYPTED</div>
      <div class="diagram-arrow" style="font-size:3rem;color:#4ADE80;text-shadow:0 0 15px rgba(74,222,128,0.5)">⟷</div>
      <div style="font-size:0.85rem;color:white;font-weight:bold;text-transform:uppercase;letter-spacing:2px">SSL/TLS Tunnel</div>
    </div>
    <div class="glass-card" style="text-align:center;padding:32px;border-color:#B92025;border-width:2px;box-shadow:0 0 30px rgba(185,32,37,0.4)">
      <div style="display:flex;justify-content:center;margin-bottom:16px;color:#B92025">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
      </div>
      <div style="font-size:1.8rem;font-weight:900;color:#B92025">Server</div>
    </div>
  </div>
  <p style="margin-top:32px;font-size:1.2rem;font-weight:bold;color:rgba(255,255,255,0.8)">No one in the middle can read your data — not hackers, not your ISP, nobody.</p>`
},

// ═══════ PART 5 — SERVER SIDE ═══════
{
  type:'section', part:'PART 5 — SERVER',
  title:'The Server Responds',
  subtitle:'What happens on the other side',
  content:'<p class="description animate-in animate-in-delay-2">The server receives your request and decides what to send back.<br><br>It could serve <strong class="accent-blue">static files</strong> (pre-built HTML/CSS/JS)<br>or <strong class="accent-purple">dynamic content</strong> (generated on the fly from a database).</p>'
},
{
  type:'cards', part:'PART 5',
  title:'Static vs Dynamic',
  cards:[
    {icon: "file-text", title:'Static Site', desc:'Pre-built files served directly. Fast! Like a printed book — same for everyone.', color:'cyan', glow:'glow-cyan'},
    {icon: "settings", title:'Dynamic Site', desc:'Generated per request. Server runs code, queries DB. Like a custom order — different for each user.', color:'purple', glow:'glow-purple'}
  ]
},
{
  type:'code', part:'PART 5 — RESPONSE',
  title:'What the Server Sends Back',
  code:`<span class="line-number">1</span><span class="comment">HTTP/1.1</span> <span class="keyword">200 OK</span>
<span class="line-number">2</span><span class="attr">Content-Type:</span> <span class="value">text/html</span>
<span class="line-number">3</span>
<span class="line-number">4</span><span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="line-number">5</span><span class="tag">&lt;html&gt;</span>
<span class="line-number">6</span>  <span class="tag">&lt;head&gt;</span><span class="tag">&lt;title&gt;</span><span class="string">Google</span><span class="tag">&lt;/title&gt;</span><span class="tag">&lt;/head&gt;</span>
<span class="line-number">7</span>  <span class="tag">&lt;body&gt;</span>...<span class="tag">&lt;/body&gt;</span>
<span class="line-number">8</span><span class="tag">&lt;/html&gt;</span>`,
  note:'The browser now has raw HTML — but that\'s just TEXT. It needs to turn it into a visual page…'
},

// ═══════ PART 6 — BROWSER RENDERING ═══════
{
  type:'hero', part:'PART 6 — RENDERING',
  title:'The <span class="gradient-text">Rendering Pipeline</span>',
  subtitle:'This is where the MAGIC happens. The browser turns raw text into the beautiful page you see.'
},
{
  type:'pipeline', part:'PART 6',
  title:'The Critical Rendering Path',
  subtitle:'Every webpage goes through these stages',
  steps:[
    {text:'HTML Parsing', cls:'html-step'},
    {text:'DOM Tree', cls:'dom-step'},
    {text:'CSS Parsing', cls:'css-step'},
    {text:'CSSOM', cls:'dom-step'},
    {text:'Render Tree', cls:'render-step'},
    {text:'Layout', cls:'render-step'},
    {text:'Paint', cls:'render-step'},
    {text:'Composite', cls:'js-step'}
  ]
},
{
  type:'flow', part:'PART 6 — DOM',
  title:'Step 1: HTML → DOM Tree',
  subtitle:'The browser reads HTML and builds a tree structure',
  steps:[
    {text:'Raw HTML text arrives', color:'var(--accent-pink)'},
    {text:'Parser reads tag by tag', color:'var(--accent-orange)'},
    {text:'Builds the DOM (Document Object Model)', color:'var(--accent-green)'},
    {text:'Every element = a "node" in the tree', color:'var(--accent-blue)'}
  ]
},
{
  type:'diagram', part:'PART 6 — DOM TREE',
  title:'The DOM Tree — Visualized',
  diagram:`<div style="display:flex;flex-direction:column;align-items:center;gap:8px;font-family:var(--font-mono);font-size:0.85rem">
    <div class="diagram-box highlight" style="border-color:#EC4899">document</div>
    <div style="color:rgba(255,255,255,0.2)">│</div>
    <div class="diagram-box" style="border-color:#A78BFA">&lt;html&gt;</div>
    <div style="display:flex;gap:80px;color:rgba(255,255,255,0.2)"><span>┌──────┘</span><span>└──────┐</span></div>
    <div style="display:flex;gap:40px">
      <div class="diagram-box" style="border-color:#3B82F6">&lt;head&gt;</div>
      <div class="diagram-box" style="border-color:#4ADE80">&lt;body&gt;</div>
    </div>
    <div style="display:flex;gap:100px;margin-top:-4px">
      <span style="color:rgba(255,255,255,0.2)">│</span>
      <span style="color:rgba(255,255,255,0.2)">├────────┐</span>
    </div>
    <div style="display:flex;gap:30px">
      <div class="diagram-box" style="border-color:#22D3EE">&lt;title&gt;</div>
      <div class="diagram-box" style="border-color:#F97316">&lt;h1&gt;</div>
      <div class="diagram-box" style="border-color:#F97316">&lt;p&gt;</div>
    </div>
  </div>`
},
{
  type:'cards', part:'PART 6 — CSS',
  title:'Step 2: CSS → CSSOM',
  subtitle:'Same process, but for styles',
  cards:[
    {icon: "palette", title:'CSS Parsed', desc:'Browser reads all CSS rules and builds a style tree (CSSOM)', color:'blue'},
    {icon: "network", title:'Render Tree', desc:'DOM + CSSOM = Render Tree. Only VISIBLE elements included.', color:'green'},
    {icon: "ruler", title:'Layout', desc:'Browser calculates exact position & size of every element.', color:'purple'}
  ]
},
{
  type:'cards', part:'PART 6 — PAINT',
  title:'Step 3: Paint & Composite',
  subtitle:'Finally — pixels on screen!',
  cards:[
    {icon:'paintbrush', title:'Paint', desc:'Browser draws text, colors, borders, shadows — actual pixels.', color:'pink'},
    {icon:'layers', title:'Composite', desc:'Layers are combined in the right order. GPU accelerated!', color:'orange'}
  ]
},
{
  type:'interaction',
  icon: "help-circle", question:'THIS is why websites sometimes "flash" unstyled content!',
  hint:'The HTML loads first (DOM), CSS might still be loading (CSSOM not ready), so you briefly see raw text.'
},

// ═══════ PART 7 — JAVASCRIPT ═══════
{
  type:'section', part:'PART 7 — JAVASCRIPT',
  title:'JavaScript Brings It to Life',
  subtitle:'From static document to interactive application',
  content:'<p class="description animate-in animate-in-delay-2">HTML = structure. CSS = style.<br><strong class="accent-orange">JavaScript = behavior.</strong><br><br>Without JS, every website would be a digital poster.<br>With JS, it becomes an <strong class="accent-cyan">interactive experience</strong>.</p>'
},
{
  type:'cards', part:'PART 7',
  title:'What JavaScript Does',
  cards:[
    {icon:'mouse-pointer-click', title:'Event Listeners', desc:'Responds to clicks, scrolls, hovers, keyboard input — any user action.', color:'blue'},
    {icon:'layout-template', title:'DOM Manipulation', desc:'Changes the page LIVE — adds, removes, modifies elements without reloading.', color:'green'},
    {icon:'database', title:'Fetch Data', desc:'Calls APIs to load new data (like infinite scroll) without page refresh.', color:'purple'},
    {icon: "sparkles", title:'Animations', desc:'Smooth transitions, parallax effects, interactive UI magic.', color:'pink'}
  ]
},
{
  type:'code', part:'PART 7',
  title:'JavaScript in Action',
  code:`<span class="line-number">1</span><span class="comment">// Add a click listener</span>
<span class="line-number">2</span><span class="keyword">const</span> <span class="function">btn</span> = document.<span class="function">querySelector</span>(<span class="string">'.button'</span>);
<span class="line-number">3</span>
<span class="line-number">4</span>btn.<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => {
<span class="line-number">5</span>  document.body.style.<span class="attr">background</span> = <span class="string">'#1a1a2e'</span>;
<span class="line-number">6</span>  <span class="function">alert</span>(<span class="string">'You changed the web!'</span>);
<span class="line-number">7</span>});`,
  note:'Three lines of JS can change your entire page. That\'s the power.'
},

// ═══════ PART 8 — MODERN FRONTEND ═══════
{
  type:'section', part:'PART 8 — MODERN WEB',
  title:'The Modern Frontend',
  subtitle:'Why frameworks like React exist',
  content:'<p class="description animate-in animate-in-delay-2">Websites got <strong class="accent-purple">really complex</strong>.<br>Gmail, Twitter, Figma — these aren\'t "pages", they\'re <strong class="accent-blue">applications</strong>.<br><br>Managing thousands of elements with vanilla JS?<br>That\'s a nightmare. Enter: <strong class="accent-green">Frameworks</strong>.</p>'
},
{
  type:'cards', part:'PART 8',
  title:'Key Concepts',
  cards:[
    {icon:'box', title:'Components', desc:'Build UI from reusable blocks. A button, a card, a navbar — each is a component.', color:'blue'},
    {icon:'activity', title:'State', desc:'Data that changes over time. When state updates, the UI updates automatically.', color:'purple'},
    {icon:'network', title:'APIs', desc:'Frontend talks to backend via APIs. Fetch user data, posts, products — anything.', color:'green'}
  ]
},
{
  type:'cards', part:'PART 8',
  title:'SPA vs SSR',
  subtitle:'Two approaches to building web apps',
  cards:[
    {icon:'layout', title:'SPA (React)', desc:'Single page loads once. JS handles all navigation. Fast transitions, but slow initial load.', color:'blue', glow:'glow-blue'},
    {icon: "server", title:'SSR (Next.js)', desc:'Server renders HTML first. Faster initial load, better SEO. Best of both worlds.', color:'purple', glow:'glow-purple'}
  ]
},

// ═══════ PART 9 — PERFORMANCE ═══════
{
  type:'section', part:'PART 9 — PERFORMANCE',
  title:'Why Are Some Sites Slow?',
  subtitle:'And how to fix them',
  content:'<p class="description animate-in animate-in-delay-2">Amazon found that every <strong class="accent-red">100ms</strong> of delay costs <strong class="accent-orange">1% of revenue</strong>.<br><br>Performance isn\'t optional — it\'s money, users, and experience.</p>'
},
{
  type:'cards', part:'PART 9',
  title:'Common Performance Killers',
  cards:[
    {icon:'image', title:'Huge Images', desc:'A 5MB hero image? That\'s 3 seconds of loading on mobile. Use WebP & lazy loading.', color:'pink'},
    {icon: "package", title:'Too Much JS', desc:'Shipping 2MB of JavaScript? Users wait forever. Code-split & tree-shake.', color:'orange'},
    {icon: "globe", title:'No Caching', desc:'Downloading the same files every visit? Cache static assets!', color:'blue'},
    {icon:'clock', title:'Render Blocking', desc:'CSS/JS in the head blocks rendering. Defer & async are your friends.', color:'purple'}
  ]
},
{
  type:'flow', part:'PART 9 — OPTIMIZATION',
  title:'Quick Performance Wins',
  steps:[
    {text:'Compress & lazy-load images', color:'var(--accent-green)'},
    {text:'Minify & code-split JavaScript', color:'var(--accent-blue)'},
    {text:'Use browser caching', color:'var(--accent-purple)'},
    {text:'Use a CDN (Content Delivery Network)', color:'var(--accent-cyan)'},
    {text:'Monitor with Lighthouse', color:'var(--accent-orange)'}
  ]
},

// ═══════ PART 10 — FINAL RECAP ═══════
{
  type:'hero', part:'PART 10 — THE FULL PICTURE',
  title:'The <span class="gradient-text">Complete Journey</span>',
  subtitle:'Let\'s replay everything — from URL to interactive page.'
},
{
  type:'timeline', part:'PART 10',
  title:'The Journey — Part 1',
  subtitle:'From URL to server',
  items:[
    {title:'1. You type google.com', desc:'Browser parses the URL and checks its cache.'},
    {title:'2. DNS Lookup', desc:'Translates google.com → 142.250.185.46'},
    {title:'3. TCP + TLS Handshake', desc:'Establishes a secure encrypted connection.'},
    {title:'4. HTTP GET Request', desc:'Browser asks: "Give me your homepage!"'},
    {title:'5. Server Responds', desc:'Sends back HTML, CSS, JS files.'}
  ]
},
{
  type:'timeline', part:'PART 10',
  title:'The Journey — Part 2',
  subtitle:'From response to pixels',
  items:[
    {title:'6. HTML → DOM', desc:'Browser parses HTML into a tree structure.'},
    {title:'7. CSS → CSSOM → Render Tree', desc:'Styles are applied, layout calculated.'},
    {title:'8. Paint & Composite', desc:'Pixels are drawn on screen.'},
    {title:'9. JavaScript Executes', desc:'Page becomes interactive and alive.'},
    {title:'10. You see Google!', desc:'All of this — in under 1 second.'}
  ]
},
{
  type:'interaction',
  icon: "lightbulb", question:'All of that happens in less than 1 second.',
  hint:'Every. Single. Time. You open a website.'
},
{
  type:'diagram', part:'RECAP',
  title:'What You Now Know',
  subtitle:'',
  diagram:`<div style="display:flex;flex-wrap:wrap;gap:16px;max-width:800px;margin:0 auto;justify-content:center">
    <div class="glass-card" style="padding:16px 24px"><strong style="color:#22D3EE">1.</strong> How browsers work</div>
    <div class="glass-card" style="padding:16px 24px"><strong style="color:#4ADE80">2.</strong> DNS & IP addresses</div>
    <div class="glass-card" style="padding:16px 24px"><strong style="color:#A78BFA">3.</strong> HTTP requests & responses</div>
    <div class="glass-card" style="padding:16px 24px"><strong style="color:#3B82F6">4.</strong> The rendering pipeline</div>
    <div class="glass-card" style="padding:16px 24px"><strong style="color:#EC4899">5.</strong> JavaScript's role</div>
    <div class="glass-card" style="padding:16px 24px"><strong style="color:#F97316">6.</strong> Performance basics</div>
  </div>`
},
{
  type:'hero',
  title:'Now Go Build <span class="gradient-text">Amazing Things</span>',
  subtitle:'The web is yours. Understand it deeply. Build it beautifully. Ship it confidently.'
},

// ═══════ BONUS SLIDES ═══════
{
  type:'section', part:'BONUS — IF TIME REMAINS',
  title:'Bonus Round',
  subtitle:'Advanced concepts for the curious',
  content:'<p class="description animate-in animate-in-delay-2">Want to go deeper? Let\'s explore some advanced topics.</p>'
},
{
  type:'cards', part:'BONUS',
  title:'Advanced Topics',
  cards:[
    {icon:'message-square', title:'WebSockets', desc:'Real-time two-way communication. Used in chat apps, live updates, multiplayer games.', color:'cyan'},
    {icon:'cpu', title:'Service Workers', desc:'Run JS in the background. Enable offline mode, push notifications, caching strategies.', color:'purple'},
    {icon: "palette", title:'Web APIs', desc:'Canvas, WebGL, Web Audio, Geolocation — browsers are more powerful than you think.', color:'green'}
  ]
},
{
  type:'hero',
  title:'Thank You! <span class="gradient-text"></span>',
  subtitle:'Questions? Let\'s discuss! Follow the journey — keep building, keep learning.'
}
];

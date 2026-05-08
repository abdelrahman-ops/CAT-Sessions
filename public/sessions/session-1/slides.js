// ──────────────────────────────────────
// SLIDE DATA — "What Actually Happens
//   When You Open a Website?"
// ──────────────────────────────────────

const SLIDES = [

// ═══════ PART 1 — THE HOOK ═══════
{
  type:'hero',
  title:'What <span class="gradient-text">Actually Happens</span><br>When You Open a Website?',
  subtitle:'A journey through the internet — from pressing Enter to pixels on screen.'
},
{
  type:'interaction', part:'PART 1 — THE HOOK',
  emoji:'🤔', question:'You type google.com and press Enter…',
  hint:'What do you think happens next? (Seriously, take a guess!)'
},
{
  type:'section', part:'PART 1 — THE HOOK',
  title:'In the next ~1 second…',
  subtitle:'Your browser does something incredible',
  content:'<p class="description animate-in animate-in-delay-2">It talks to <strong class="accent-cyan">dozens of servers</strong>, downloads files, builds a tree, paints pixels, and makes everything interactive.<br><br>Let\'s trace every single step. 🚀</p>'
},

// ═══════ PART 2 — BROWSER & URL ═══════
{
  type:'section', part:'PART 2 — BROWSER & URL',
  title:'🌐 What is a Browser?',
  subtitle:'More than you think',
  content:'<p class="description animate-in animate-in-delay-2">A browser is a <strong class="accent-blue">super-complex application</strong> that:<br>• Sends network requests<br>• Parses HTML, CSS, JS<br>• Renders pixels on your screen<br>• Runs a full JavaScript engine<br><br>Chrome alone has <strong class="accent-purple">~40 million</strong> lines of code.</p>'
},
{
  type:'analogy', part:'PART 2',
  title:'The Browser is Like a Restaurant',
  analogy:'<strong class="accent-orange">You</strong> = the customer placing an order (typing URL).<br><strong class="accent-blue">The waiter</strong> = the browser — takes your order, talks to the kitchen, brings back your food (the webpage).<br><strong class="accent-green">The kitchen</strong> = the server — prepares everything behind the scenes.'
},
{
  type:'diagram', part:'PART 2 — URL ANATOMY',
  title:'Anatomy of a URL',
  subtitle:'Every part has a purpose',
  diagram:`<div class="code-block" style="max-width:800px;text-align:center;font-size:1.1rem">
    <span class="keyword">https</span><span class="comment">://</span><span class="function">www.google.com</span><span class="comment">:</span><span class="string">443</span><span class="comment">/</span><span class="tag">search</span><span class="comment">?</span><span class="attr">q</span>=<span class="value">hello</span>
    <div style="display:flex;justify-content:space-between;margin-top:20px;font-size:0.75rem;color:var(--text-secondary)">
      <span>Protocol</span><span>Domain</span><span>Port</span><span>Path</span><span>Query</span>
    </div>
  </div>`
},
{
  type:'interaction',
  emoji:'💭', question:'Why do we type "google.com" and not "142.250.185.46"?',
  hint:'Think about your phone contacts…'
},

// ═══════ PART 3 — DNS ═══════
{
  type:'section', part:'PART 3 — DNS',
  title:'📞 DNS — The Internet\'s Phonebook',
  subtitle:'Translating names to numbers',
  content:'<p class="description animate-in animate-in-delay-2">Every website lives at an <strong class="accent-cyan">IP address</strong> (like 142.250.185.46).<br><br><strong class="accent-purple">DNS</strong> (Domain Name System) translates human-friendly names<br>into machine-friendly IP addresses.</p>'
},
{
  type:'analogy', part:'PART 3',
  title:'DNS = Your Phone Contacts',
  analogy:'You don\'t memorize <strong class="accent-cyan">+1-555-0123</strong> — you just tap <strong class="accent-green">"Mom"</strong>.<br><br>DNS does the same thing: you type <strong class="accent-blue">google.com</strong>, DNS looks up the number <strong class="accent-cyan">142.250.185.46</strong> and connects you.'
},
{
  type:'flow', part:'PART 3 — DNS LOOKUP',
  title:'DNS Lookup — Step by Step',
  subtitle:'What happens behind the scenes',
  steps:[
    {text:'🔍 Browser checks its OWN cache', color:'var(--accent-blue)'},
    {text:'💻 Asks the Operating System', color:'var(--accent-purple)'},
    {text:'📡 Asks the DNS Resolver (your ISP)', color:'var(--accent-cyan)'},
    {text:'🌐 Asks Root Name Server → ".com" server', color:'var(--accent-orange)'},
    {text:'🏠 Asks Google\'s Name Server', color:'var(--accent-green)'},
    {text:'✅ Returns IP: 142.250.185.46', color:'var(--accent-pink)'}
  ]
},
{
  type:'interaction',
  emoji:'⚡', question:'Fun Fact: DNS lookup takes ~20-120ms',
  hint:'That\'s why browsers CACHE DNS results — so you don\'t look up the same name twice!'
},

// ═══════ PART 4 — HTTP/HTTPS ═══════
{
  type:'section', part:'PART 4 — HTTP REQUEST',
  title:'📨 The Browser Sends a Request',
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
    {icon:'📥', title:'GET', desc:'Fetch/read data. "Show me the page."', color:'green', glow:'glow-cyan'},
    {icon:'📤', title:'POST', desc:'Send data. "Here\'s my login info."', color:'blue', glow:'glow-blue'},
    {icon:'✏️', title:'PUT / PATCH', desc:'Update existing data.', color:'orange'},
    {icon:'🗑️', title:'DELETE', desc:'Remove data.', color:'pink'}
  ]
},
{
  type:'statuscodes', part:'PART 4 — STATUS CODES',
  title:'HTTP Status Codes',
  codes:[
    {code:'200 OK', cls:'success', desc:'Everything worked perfectly ✅'},
    {code:'301 Redirect', cls:'redirect', desc:'Page moved somewhere else ↗️'},
    {code:'404 Not Found', cls:'client-err', desc:'Page doesn\'t exist 🤷'},
    {code:'500 Server Error', cls:'server-err', desc:'Server crashed 💥'}
  ]
},
{
  type:'diagram', part:'PART 4 — HTTPS',
  title:'🔒 HTTPS — The Secure Version',
  subtitle:'Encrypting the conversation',
  diagram:`<div style="display:flex;align-items:center;gap:24px;flex-wrap:wrap;justify-content:center">
    <div class="glass-card glow-blue" style="text-align:center;padding:24px 32px">
      <div style="font-size:2rem;margin-bottom:8px">💻</div><div style="font-weight:700">Your Browser</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
      <div style="font-size:0.75rem;color:var(--accent-green);font-family:var(--font-mono)">🔐 ENCRYPTED</div>
      <div class="diagram-arrow" style="font-size:2rem">⟷</div>
      <div style="font-size:0.7rem;color:var(--text-muted)">SSL/TLS Tunnel</div>
    </div>
    <div class="glass-card glow-purple" style="text-align:center;padding:24px 32px">
      <div style="font-size:2rem;margin-bottom:8px">🖥️</div><div style="font-weight:700">Server</div>
    </div>
  </div>
  <p class="description" style="margin-top:24px;font-size:0.9rem">No one in the middle can read your data — not hackers, not your ISP, nobody.</p>`
},

// ═══════ PART 5 — SERVER SIDE ═══════
{
  type:'section', part:'PART 5 — SERVER',
  title:'🖥️ The Server Responds',
  subtitle:'What happens on the other side',
  content:'<p class="description animate-in animate-in-delay-2">The server receives your request and decides what to send back.<br><br>It could serve <strong class="accent-blue">static files</strong> (pre-built HTML/CSS/JS)<br>or <strong class="accent-purple">dynamic content</strong> (generated on the fly from a database).</p>'
},
{
  type:'cards', part:'PART 5',
  title:'Static vs Dynamic',
  cards:[
    {icon:'📄', title:'Static Site', desc:'Pre-built files served directly. Fast! Like a printed book — same for everyone.', color:'cyan', glow:'glow-cyan'},
    {icon:'⚙️', title:'Dynamic Site', desc:'Generated per request. Server runs code, queries DB. Like a custom order — different for each user.', color:'purple', glow:'glow-purple'}
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
    {text:'📄 Raw HTML text arrives', color:'var(--accent-pink)'},
    {text:'🔍 Parser reads tag by tag', color:'var(--accent-orange)'},
    {text:'🌳 Builds the DOM (Document Object Model)', color:'var(--accent-green)'},
    {text:'📦 Every element = a "node" in the tree', color:'var(--accent-blue)'}
  ]
},
{
  type:'diagram', part:'PART 6 — DOM TREE',
  title:'The DOM Tree — Visualized',
  diagram:`<div style="display:flex;flex-direction:column;align-items:center;gap:8px;font-family:var(--font-mono);font-size:0.85rem">
    <div class="diagram-box highlight" style="border-color:var(--accent-pink)">document</div>
    <div style="color:var(--text-muted)">│</div>
    <div class="diagram-box" style="border-color:var(--accent-purple)">&lt;html&gt;</div>
    <div style="display:flex;gap:80px;color:var(--text-muted)"><span>┌──────┘</span><span>└──────┐</span></div>
    <div style="display:flex;gap:40px">
      <div class="diagram-box" style="border-color:var(--accent-blue)">&lt;head&gt;</div>
      <div class="diagram-box" style="border-color:var(--accent-green)">&lt;body&gt;</div>
    </div>
    <div style="display:flex;gap:100px;margin-top:-4px">
      <span style="color:var(--text-muted)">│</span>
      <span style="color:var(--text-muted)">├────────┐</span>
    </div>
    <div style="display:flex;gap:30px">
      <div class="diagram-box" style="border-color:var(--accent-cyan)">&lt;title&gt;</div>
      <div class="diagram-box" style="border-color:var(--accent-orange)">&lt;h1&gt;</div>
      <div class="diagram-box" style="border-color:var(--accent-orange)">&lt;p&gt;</div>
    </div>
  </div>`
},
{
  type:'cards', part:'PART 6 — CSS',
  title:'Step 2: CSS → CSSOM',
  subtitle:'Same process, but for styles',
  cards:[
    {icon:'🎨', title:'CSS Parsed', desc:'Browser reads all CSS rules and builds a style tree (CSSOM)', color:'blue'},
    {icon:'🌳', title:'Render Tree', desc:'DOM + CSSOM = Render Tree. Only VISIBLE elements included.', color:'green'},
    {icon:'📐', title:'Layout', desc:'Browser calculates exact position & size of every element.', color:'purple'}
  ]
},
{
  type:'cards', part:'PART 6 — PAINT',
  title:'Step 3: Paint & Composite',
  subtitle:'Finally — pixels on screen!',
  cards:[
    {icon:'🖌️', title:'Paint', desc:'Browser draws text, colors, borders, shadows — actual pixels.', color:'pink'},
    {icon:'🧩', title:'Composite', desc:'Layers are combined in the right order. GPU accelerated!', color:'orange'}
  ]
},
{
  type:'interaction',
  emoji:'💡', question:'THIS is why websites sometimes "flash" unstyled content!',
  hint:'The HTML loads first (DOM), CSS might still be loading (CSSOM not ready), so you briefly see raw text.'
},

// ═══════ PART 7 — JAVASCRIPT ═══════
{
  type:'section', part:'PART 7 — JAVASCRIPT',
  title:'⚡ JavaScript Brings It to Life',
  subtitle:'From static document to interactive application',
  content:'<p class="description animate-in animate-in-delay-2">HTML = structure. CSS = style.<br><strong class="accent-orange">JavaScript = behavior.</strong><br><br>Without JS, every website would be a digital poster.<br>With JS, it becomes an <strong class="accent-cyan">interactive experience</strong>.</p>'
},
{
  type:'cards', part:'PART 7',
  title:'What JavaScript Does',
  cards:[
    {icon:'👆', title:'Event Listeners', desc:'Responds to clicks, scrolls, hovers, keyboard input — any user action.', color:'blue'},
    {icon:'🔄', title:'DOM Manipulation', desc:'Changes the page LIVE — adds, removes, modifies elements without reloading.', color:'green'},
    {icon:'📡', title:'Fetch Data', desc:'Calls APIs to load new data (like infinite scroll) without page refresh.', color:'purple'},
    {icon:'✨', title:'Animations', desc:'Smooth transitions, parallax effects, interactive UI magic.', color:'pink'}
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
<span class="line-number">6</span>  <span class="function">alert</span>(<span class="string">'You changed the web! 🎉'</span>);
<span class="line-number">7</span>});`,
  note:'Three lines of JS can change your entire page. That\'s the power.'
},

// ═══════ PART 8 — MODERN FRONTEND ═══════
{
  type:'section', part:'PART 8 — MODERN WEB',
  title:'🧩 The Modern Frontend',
  subtitle:'Why frameworks like React exist',
  content:'<p class="description animate-in animate-in-delay-2">Websites got <strong class="accent-purple">really complex</strong>.<br>Gmail, Twitter, Figma — these aren\'t "pages", they\'re <strong class="accent-blue">applications</strong>.<br><br>Managing thousands of elements with vanilla JS?<br>That\'s a nightmare. Enter: <strong class="accent-green">Frameworks</strong>.</p>'
},
{
  type:'cards', part:'PART 8',
  title:'Key Concepts',
  cards:[
    {icon:'🧱', title:'Components', desc:'Build UI from reusable blocks. A button, a card, a navbar — each is a component.', color:'blue'},
    {icon:'💾', title:'State', desc:'Data that changes over time. When state updates, the UI updates automatically.', color:'purple'},
    {icon:'🔌', title:'APIs', desc:'Frontend talks to backend via APIs. Fetch user data, posts, products — anything.', color:'green'}
  ]
},
{
  type:'cards', part:'PART 8',
  title:'SPA vs SSR',
  subtitle:'Two approaches to building web apps',
  cards:[
    {icon:'📱', title:'SPA (React)', desc:'Single page loads once. JS handles all navigation. Fast transitions, but slow initial load.', color:'blue', glow:'glow-blue'},
    {icon:'🖥️', title:'SSR (Next.js)', desc:'Server renders HTML first. Faster initial load, better SEO. Best of both worlds.', color:'purple', glow:'glow-purple'}
  ]
},

// ═══════ PART 9 — PERFORMANCE ═══════
{
  type:'section', part:'PART 9 — PERFORMANCE',
  title:'🚀 Why Are Some Sites Slow?',
  subtitle:'And how to fix them',
  content:'<p class="description animate-in animate-in-delay-2">Amazon found that every <strong class="accent-red">100ms</strong> of delay costs <strong class="accent-orange">1% of revenue</strong>.<br><br>Performance isn\'t optional — it\'s money, users, and experience.</p>'
},
{
  type:'cards', part:'PART 9',
  title:'Common Performance Killers',
  cards:[
    {icon:'🖼️', title:'Huge Images', desc:'A 5MB hero image? That\'s 3 seconds of loading on mobile. Use WebP & lazy loading.', color:'pink'},
    {icon:'📦', title:'Too Much JS', desc:'Shipping 2MB of JavaScript? Users wait forever. Code-split & tree-shake.', color:'orange'},
    {icon:'🌐', title:'No Caching', desc:'Downloading the same files every visit? Cache static assets!', color:'blue'},
    {icon:'🔤', title:'Render Blocking', desc:'CSS/JS in the head blocks rendering. Defer & async are your friends.', color:'purple'}
  ]
},
{
  type:'flow', part:'PART 9 — OPTIMIZATION',
  title:'Quick Performance Wins',
  steps:[
    {text:'🖼️ Compress & lazy-load images', color:'var(--accent-green)'},
    {text:'📦 Minify & code-split JavaScript', color:'var(--accent-blue)'},
    {text:'💾 Use browser caching', color:'var(--accent-purple)'},
    {text:'⚡ Use a CDN (Content Delivery Network)', color:'var(--accent-cyan)'},
    {text:'🔍 Monitor with Lighthouse', color:'var(--accent-orange)'}
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
    {title:'10. You see Google! 🎉', desc:'All of this — in under 1 second.'}
  ]
},
{
  type:'interaction',
  emoji:'🤯', question:'All of that happens in less than 1 second.',
  hint:'Every. Single. Time. You open a website.'
},
{
  type:'section', part:'RECAP',
  title:'What You Now Know',
  subtitle:'',
  content:`<div class="card-grid cols-2" style="max-width:700px;margin-top:10px">
    <div class="glass-card animate-in animate-in-delay-1" style="padding:16px 20px"><span class="accent-cyan">✓</span> How browsers work</div>
    <div class="glass-card animate-in animate-in-delay-2" style="padding:16px 20px"><span class="accent-green">✓</span> DNS & IP addresses</div>
    <div class="glass-card animate-in animate-in-delay-3" style="padding:16px 20px"><span class="accent-purple">✓</span> HTTP requests & responses</div>
    <div class="glass-card animate-in animate-in-delay-4" style="padding:16px 20px"><span class="accent-blue">✓</span> The rendering pipeline</div>
    <div class="glass-card animate-in animate-in-delay-5" style="padding:16px 20px"><span class="accent-pink">✓</span> JavaScript's role</div>
    <div class="glass-card animate-in animate-in-delay-6" style="padding:16px 20px"><span class="accent-orange">✓</span> Performance basics</div>
  </div>`
},
{
  type:'hero',
  title:'Now Go Build <span class="gradient-text">Amazing Things</span> 🚀',
  subtitle:'The web is yours. Understand it deeply. Build it beautifully. Ship it confidently.'
},

// ═══════ BONUS SLIDES ═══════
{
  type:'section', part:'BONUS — IF TIME REMAINS',
  title:'⚡ Bonus Round',
  subtitle:'Advanced concepts for the curious',
  content:'<p class="description animate-in animate-in-delay-2">Want to go deeper? Let\'s explore some advanced topics.</p>'
},
{
  type:'cards', part:'BONUS',
  title:'Advanced Topics',
  cards:[
    {icon:'🔄', title:'WebSockets', desc:'Real-time two-way communication. Used in chat apps, live updates, multiplayer games.', color:'cyan'},
    {icon:'👷', title:'Service Workers', desc:'Run JS in the background. Enable offline mode, push notifications, caching strategies.', color:'purple'},
    {icon:'🎨', title:'Web APIs', desc:'Canvas, WebGL, Web Audio, Geolocation — browsers are more powerful than you think.', color:'green'}
  ]
},
{
  type:'hero',
  title:'Thank You! <span class="gradient-text">🎉</span>',
  subtitle:'Questions? Let\'s discuss! Follow the journey — keep building, keep learning.'
}
];

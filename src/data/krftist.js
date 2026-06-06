// Shared cinematic media library — Behance-inspired editorial aesthetic
export const MEDIA = {
  // Hero / about / general
  hero: "https://static.prod-images.emergentagent.com/jobs/7cb1d837-dd21-4e5b-9a52-5db92968abdc/images/2ca42f53c0d33964324070a9d1e46c25c4ee2eddf0147143367602dac620c12d.png",
  about: "https://static.prod-images.emergentagent.com/jobs/7cb1d837-dd21-4e5b-9a52-5db92968abdc/images/9208aa96f194f9e8e07b3597657321867498960999a4a981865342bc7c91221d.png",
  motion: "https://static.prod-images.emergentagent.com/jobs/7cb1d837-dd21-4e5b-9a52-5db92968abdc/images/a06cd0320ec03bea7de371599fa51f1c2efe1114a1dca6838af106bf248ea8f9.png",
  set: "https://static.prod-images.emergentagent.com/jobs/7cb1d837-dd21-4e5b-9a52-5db92968abdc/images/a052e242184c250406bd103b724eed1ccd3c5412e6846b548cbe3940c88ee802.png",

  // Promotion — dark cinematic high-fashion
  promotion_1: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1600&q=85",
  promotion_2: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=85",

  // Documentary — artisan / craft workshop
  documentary_1: "https://images.unsplash.com/photo-1452457807411-4979b707c5be?auto=format&fit=crop&w=1600&q=85",
  documentary_2: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=85",

  // TV Show — moody cinematic / theater
  tvshow_1: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1600&q=85",
  tvshow_2: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1600&q=85",

  // BTS — film set, camera crew at night
  bts_1: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85",
  bts_2: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1600&q=85",

  // Podcast — microphone in low key lighting
  podcast_1: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=85",
  podcast_2: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?auto=format&fit=crop&w=1600&q=85",

  // Coverage — concert / live event dark
  coverage_1: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85",
  coverage_2: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1600&q=85",

  // Legacy keys still used in services details / hero meta — kept for backwards compat
  midnight: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1600&q=85",
  artisan: "https://images.unsplash.com/photo-1452457807411-4979b707c5be?auto=format&fit=crop&w=1600&q=85",
  vogue: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=85",
  echoes: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1600&q=85",
};

export const SERVICES = [
  {
    slug: "production",
    n: "01",
    title: "Production & Post-Production",
    short: "Production",
    tagline: "From treatment to final cut — owned by a senior crew.",
    description:
      "End-to-end film production engineered for editorial cinema. We handle the pipeline from concept and casting through directing on-set, editorial, color, motion and VFX. Every project finishes in our Dolby-standard suite so it lands frame-perfect on any screen.",
    capabilities: [
      "Commercial Production",
      "Cinematography",
      "Video Editing",
      "Brand Films",
      "Advertising Campaigns",
      "Color Grading",
      "Motion Graphics",
      "Visual Effects",
      "Animation",
      "AI Image Creation",
      "AI Commercial Production",
      "Advanced Creative Editing",
    ],
    media: [
      { type: "video", title: "Midnight Run", platform: "Vimeo", id: "76979871", thumb: "promotion_1", aspect: "aspect-video" },
      { type: "image", title: "The Artisan", thumb: "documentary_1", aspect: "aspect-[4/5]" },
      { type: "image", title: "Set Build — Day 3", thumb: "bts_1", aspect: "aspect-[16/10]" },
      { type: "video", title: "Echoes", platform: "Vimeo", id: "162804054", thumb: "tvshow_1", aspect: "aspect-[16/10]" },
    ],
  },
  {
    slug: "social-media",
    n: "02",
    title: "Social Media Content Production",
    short: "Social Media",
    tagline: "Always-on content engines — native, vertical-first, on-brand.",
    description:
      "Editorial-grade content series built for platforms, not retrofitted to them. We design content systems, shoot in rolling sprints, and operate community channels with the same craft as a feature campaign.",
    capabilities: [
      "Social Media Management",
      "Content Planning",
      "Marketing Strategy",
      "Brand Strategy",
      "Graphic Design",
      "Community Management",
      "Brand Identity Design",
      "Vertical-First Shoots",
      "Series Development",
      "Platform Strategy",
    ],
    media: [
      { type: "image", title: "Studio Series — Q2", thumb: "promotion_2", aspect: "aspect-[4/5]" },
      { type: "video", title: "9:16 Brand Loop", platform: "Vimeo", id: "204939641", thumb: "bts_2", aspect: "aspect-[9/16]" },
      { type: "image", title: "Behance Editorial", thumb: "documentary_2", aspect: "aspect-[3/4]" },
      { type: "video", title: "Always-On Reel", platform: "Vimeo", id: "1084537", thumb: "tvshow_2", aspect: "aspect-[16/10]" },
    ],
  },
  {
    slug: "audio",
    n: "03",
    title: "Audio & Sound Design",
    short: "Audio",
    tagline: "Cinema-grade sound design — built in a Dolby-standard environment.",
    description:
      "Sound is half the picture. Our audio team handles score, foley, sound design, mix and master in a calibrated environment, with a global voice library on call for casting and localization.",
    capabilities: [
      "Sound Design",
      "Audio Engineering",
      "Mixing & Mastering",
      "Cinematic Audio Processing",
      "Dolby Standard Studio Partnerships",
      "Voice Casting",
      "Multilingual Voice Library",
      "Global Voice Database",
      "Localization & Dubbing",
      "ADR & Foley",
    ],
    media: [
      { type: "image", title: "Mix Stage — Bay 02", thumb: "podcast_1", aspect: "aspect-[16/10]" },
      { type: "video", title: "Score Session", platform: "Vimeo", id: "57989916", thumb: "podcast_2", aspect: "aspect-video" },
      { type: "image", title: "Voice Booth", thumb: "podcast_1", aspect: "aspect-[4/5]" },
      { type: "image", title: "Mastering — Stems", thumb: "podcast_2", aspect: "aspect-[3/4]" },
    ],
  },
];

export const WORK_CATEGORIES = ["All", "BTS", "Promotion", "TV Show", "Documentary", "Podcast", "Coverage"];

export const WORK_ITEMS = [
  { id: 1,  title: "Midnight Run",     category: "Promotion",   year: "2025", platform: "Vimeo",   embedId: "76979871",  thumb: "promotion_1",   aspect: "aspect-[16/10]", span: "lg:col-span-8" },
  { id: 2,  title: "The Artisan",      category: "Documentary", year: "2025", platform: "Behance", embedId: "189456231", thumb: "documentary_1", aspect: "aspect-[3/4]",   span: "lg:col-span-4" },
  { id: 3,  title: "Vogue ✕ KRFTIST",  category: "Promotion",   year: "2024", platform: "Behance", embedId: "210334567", thumb: "promotion_2",   aspect: "aspect-[4/5]",   span: "lg:col-span-5" },
  { id: 4,  title: "Echoes",           category: "TV Show",     year: "2024", platform: "Vimeo",   embedId: "162804054", thumb: "tvshow_1",      aspect: "aspect-[16/11]", span: "lg:col-span-7" },
  { id: 5,  title: "Behind the Frame", category: "BTS",         year: "2025", platform: "Vimeo",   embedId: "204939641", thumb: "bts_1",         aspect: "aspect-[4/3]",   span: "lg:col-span-4" },
  { id: 6,  title: "Studio Diaries",   category: "BTS",         year: "2024", platform: "Vimeo",   embedId: "57989916",  thumb: "bts_2",         aspect: "aspect-[4/5]",   span: "lg:col-span-4" },
  { id: 7,  title: "The Long Take",    category: "Documentary", year: "2024", platform: "Vimeo",   embedId: "1084537",   thumb: "documentary_2", aspect: "aspect-[16/10]", span: "lg:col-span-4" },
  { id: 8,  title: "Late Night Pod",   category: "Podcast",     year: "2025", platform: "Behance", embedId: "176556321", thumb: "podcast_1",     aspect: "aspect-[1/1]",   span: "lg:col-span-6" },
  { id: 9,  title: "Studio Sessions",  category: "Podcast",     year: "2024", platform: "Vimeo",   embedId: "21294655",  thumb: "podcast_2",     aspect: "aspect-[1/1]",   span: "lg:col-span-6" },
  { id: 10, title: "Cairo Live 2025",  category: "Coverage",    year: "2025", platform: "Vimeo",   embedId: "162804054", thumb: "coverage_1",    aspect: "aspect-[16/9]",  span: "lg:col-span-8" },
  { id: 11, title: "Riyadh Showcase",  category: "Coverage",    year: "2024", platform: "Behance", embedId: "198812445", thumb: "coverage_2",    aspect: "aspect-[4/5]",   span: "lg:col-span-4" },
  { id: 12, title: "Frames of Cairo",  category: "TV Show",     year: "2023", platform: "Vimeo",   embedId: "204939641", thumb: "tvshow_2",      aspect: "aspect-[16/10]", span: "lg:col-span-6" },
];

export const ARTICLES = [
  {
    id: "the-craftsman-method",
    title: "The Craftsman's Method — Why We Treat Production Like a Workshop",
    excerpt:
      "Inside the KRFTIST studio, we approach every shoot like a master artisan approaches their bench: with discipline, patience, and obsessive attention to the joinery.",
    date: "May 28, 2026",
    readTime: "6 min read",
    category: "Craft",
    thumb: "bts_1",
    body: [
      "Most production studios work like factories. You drop in a brief, hands move, an output drops out the other end. We work the opposite way — like a workshop, with the same handful of senior craftspeople moving between projects, owning the joinery from the first treatment to the final master.",
      "The craftsman model has costs. It is slower to scale. It refuses certain kinds of work that need a hundred contractors and a spreadsheet. But it produces something that the factory model cannot: continuity of taste.",
      "Every frame you see in our reel came from the same six people fighting over it for weeks. The grade was argued. The music was rewritten. The cut was paused at 04:47 because someone walked in and said 'no.' That is the workshop.",
      "We think clients hire us for the visible work — the films, the brand worlds, the social systems. But what they are really paying for is the invisible work: the disagreements, the rewrites, the moments where a senior producer kills a great idea because a better one is hiding underneath. That is what the workshop method protects.",
    ],
  },
  {
    id: "vertical-first-thinking",
    title: "Vertical-First Thinking — Designing for the Platform, Not Around It",
    excerpt:
      "Most brands still treat social as the cutdown. We argue it should be the master file. Notes from three years of platform-native production.",
    date: "May 14, 2026",
    readTime: "8 min read",
    category: "Social",
    thumb: "promotion_2",
    body: [
      "The cutdown is dead. The 9:16 vertical is no longer the byproduct of the 16:9 master — for most of our clients, it is the master.",
      "Three years ago, we started designing every campaign with the vertical frame as the primary canvas. The hero film still exists, but it is now a derivative of the vertical-first concept, not the other way around.",
      "This sounds like a minor production tweak. It is not. It changes everything: how you light, how you stage subjects, how you shoot coverage, even how you write. A horizontal hero film leans on landscape; a vertical hero film leans on portraiture. Different sentences. Different shot list.",
      "The brands that get this right are seeing a 4-7x lift in completion rate on vertical platforms. The brands that don't are still shipping squished horizontals into TikTok and wondering why nobody watches.",
    ],
  },
  {
    id: "dolby-standard-room",
    title: "Why We Built a Dolby-Standard Room (and Why You Should Care)",
    excerpt:
      "Sound is half the picture. A walkthrough of the calibration, room acoustics, and signal chain that anchors our finishing pipeline.",
    date: "April 30, 2026",
    readTime: "7 min read",
    category: "Audio",
    thumb: "podcast_1",
    body: [
      "If you watched any of our recent work on your laptop speakers, you missed half the story. Literally — sound is half the picture, and we built our finishing room around that idea.",
      "The Dolby Atmos certification was not the goal. The goal was to have a room where we could trust what we were hearing. The certification came as a byproduct of calibrating the room to that standard.",
      "What does this give clients? Two things. First: confidence. When we sign off on a mix, you know it has been judged in a room that is acoustically honest. Second: portability. The same mix that lands in our room lands in a cinema, on a TV, on a phone — because it was tuned in a reference environment.",
    ],
  },
  {
    id: "treatment-to-final-cut",
    title: "From Treatment to Final Cut — A Six-Week Diary",
    excerpt:
      "We opened the production binder of our latest brand film and turned it into a six-week BTS diary. Every step, every decision, every reshoot.",
    date: "April 12, 2026",
    readTime: "12 min read",
    category: "BTS",
    thumb: "bts_2",
    body: [
      "Week 1. Treatment locked. Director's vision document — 14 pages, 8 references, 1 hero idea that survived three drafts.",
      "Week 2. Casting. We saw 47 faces for the lead role. The chosen actor was not in the first 30. Casting is rarely fast.",
      "Week 3. Location scout. Cairo, then Riyadh. The Riyadh location was a last-minute pivot — the rooftop we wanted in Cairo got booked by a wedding party.",
      "Week 4. Production. Five days of shooting. Three cameras. One full reshoot of the opening because the light on day one was wrong.",
      "Week 5. Editorial. Three cuts: the assembly, the producer's cut, the director's cut. The director's cut is always shorter.",
      "Week 6. Finishing. Color in our suite. Mix in the Dolby room. Final QC. Delivery on Friday at 18:42, six minutes ahead of the agency deadline.",
    ],
  },
  {
    id: "casting-the-voice",
    title: "Casting the Voice — Notes from a Global Voice Library",
    excerpt:
      "How we built our multilingual voice database, what we look for in casting, and the regional dialects that win briefs in MENA and beyond.",
    date: "March 29, 2026",
    readTime: "5 min read",
    category: "Audio",
    thumb: "podcast_2",
    body: [
      "Our voice library has 380 active artists across 11 languages. About a third of those are MENA dialects — Egyptian, Khaleeji, Levantine, Maghrebi — because that is where most of our work lives.",
      "Casting a voice is not the same as casting a face. The same artist can read warm in one session and cold in the next. We build the library around demonstrated range, not a single demo.",
      "The biggest mistake brands make is casting against the script. They want a 'warm, friendly' voice for a script that is actually sharp and witty. The warm read flattens the writing. We push back on this constantly.",
    ],
  },
  {
    id: "tv-show-pipeline",
    title: "Inside a Modern TV Show Pipeline — 12 Episodes in 90 Days",
    excerpt:
      "What it actually takes to ship a serialized show on a modern broadcast timeline. Lessons from the trenches.",
    date: "March 5, 2026",
    readTime: "10 min read",
    category: "TV",
    thumb: "tvshow_2",
    body: [
      "Twelve episodes in ninety days. That was the pitch. We took it because we had been refusing this kind of work for years and we wanted to see if our workshop model could survive a broadcast timeline.",
      "It can. Barely. Here is what it took: writers' room three months before camera, full script lock before episode one shot, two units running in parallel from week three onwards, and a finishing pipeline that worked on three episodes simultaneously.",
      "The hardest part was not the shooting. It was protecting the editorial bar. When you are shipping an episode every seven days, the temptation to settle for 'good enough' is constant. We did not settle. The show is on air now and the work holds up.",
    ],
  },
];

export const SERVICE_CHOICES = [
  "Video Production",
  "Social Content",
  "Post-Production",
  "Audio & Sound",
  "Brand Identity",
  "Motion Design",
];

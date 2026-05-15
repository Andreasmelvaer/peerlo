# Peerlo Blog Writer

Write and publish blog posts for Peerlo in Ole Aarre's voice and style, with strong SEO and AEO built in.

**Trigger**: When the user asks to write a blog post, create blog content, add a new article, or mentions a topic they want covered on the Peerlo blog.

## Ole's Writing Style

Study the existing posts in `src/lib/posts.ts` before writing. Ole's voice has these defining traits:

### Language
- **Bokmål** — always. Never nynorsk.
- Simple, everyday Norwegian. No fagspråk, no anglicisms, no buzzwords.
- Warm, personal, and human. Like a friend talking quietly over coffee.

### Structure
- **Real paragraphs, not a wall of one-liners.** Each content block should feel like a natural paragraph a human would write. Most blocks should be 2-4 sentences that belong together. A single standalone sentence is powerful *occasionally* for emphasis, but if every block is one sentence the text looks like an AI wrote it.
- **Bullet lists are rare.** Maximum 1-2 per post, only for feelings or short emotional phrases. Never for instructions, steps, or summaries. Convert everything else to flowing paragraphs.
- Uses `\n` line breaks within a content block for poetic rhythm, but sparingly:
  ```
  "Ikke som fagperson.\nIkke som ekspert.\nMen som medmenneske."
  ```
- Fragments for emphasis, but embedded in longer paragraphs. Not every block should be a fragment.
- Rhetorical questions, then answers them gently.
- **Mix paragraph lengths.** A good post alternates between longer 3-4 sentence paragraphs and shorter 1-2 sentence ones. The rhythm of long-short-long feels human.

### Tone
- First person ("jeg") mixed with universal "man" (one/you).
- Reflective and honest, never preachy or salesy.
- Shows vulnerability without being dramatic.
- Always circles back to peer support as the quiet answer, never forces it.
- Ends with hope, never despair.
- Uses «guillemets» for quoted speech, not "regular quotes".
- **Never use em dashes (—).** Use periods, commas, or line breaks instead. This applies to titles, headings, content, and excerpts.

### Content Patterns
- Opens with a personal reflection or observation.
- Builds through lived experience and emotional honesty.
- Arrives at peer support naturally — never as a sales pitch.
- Each post is ~800-1000 words, 4 min read.
- Ends with a cross-link: `"Les også: [Title](/blog/slug)"`
- Maximum 1-2 bullet lists per post, each with 3-5 short items.

---

## SEO & AEO Requirements

Every blog post must be optimized for both traditional search engines and AI answer engines.

### On-Page SEO
- **Title**: Compelling, includes primary keyword naturally. 50-60 characters ideal.
- **Excerpt/meta description**: 150-160 characters, includes primary keyword, compelling enough to click.
- **Slug**: Short, keyword-rich, Norwegian, kebab-case (3-5 words max).
- **Heading structure**: The `<h1>` is the post title. Use the content naturally — the short paragraph style already creates scannable content.
- **Internal linking**: Every post must link to 2-3 other Peerlo posts inline (via `[text](/blog/slug)` syntax) plus the "Les også:" at the end. This builds topic clusters.
- **Keyword strategy**: Target one primary keyword per post (e.g., "peer support", "psykisk helse", "åpne seg"). Weave it naturally into the first paragraph, excerpt, and throughout. Never keyword-stuff — Ole's natural voice comes first.

### AEO (Answer Engine Optimization)
- Write content that directly answers questions people ask about peer support and mental health.
- Use natural question-answer patterns in the text (Ole already does this with rhetorical questions).
- Include clear, quotable statements that AI models can cite — short definitive sentences like "Peer support handler om å møte noen som har opplevd noe lignende selv."
- Structured data (Article schema, BreadcrumbList) is already handled in the page component — no action needed per post.

### Technical SEO (already built into the site)
- Canonical URLs via `alternates.canonical`
- Open Graph tags (title, description, type, image, url)
- Twitter Card tags (summary_large_image)
- Article structured data (JSON-LD) with author, publisher, datePublished
- Breadcrumb structured data
- Sitemap auto-generated at `/sitemap.xml`
- `robots.txt` allows all crawlers

### Image SEO
- **All images must have descriptive Norwegian alt text.** Not decorative descriptions — describe what's in the image and how it relates to the content.
- **Alt text pattern**: "En [person/scene] som [action] i [Norwegian setting]" — specific and useful for screen readers and search.
- **Header image alt**: Should relate to the post's main theme.
- **Inline image alts**: Should relate to the surrounding content section.
- **File names**: Already SEO-friendly (slug-based).
- **Image dimensions**: Header 900x450, inline 900x500 — already optimized for web.

---

## Image Strategy

Source real photographs from Unsplash for every blog post. 3 images per post (1 header + 2 inline).

### Search strategy
1. Search for Norwegian or Scandinavian scenes first: `norway landscape`, `norwegian forest`, `scandinavian nature`, `nordic coast`
2. Search for mood-matching scenes: `solitude nature`, `person walking alone`, `misty forest`, `quiet morning`
3. Prefer images that feel natural, unposed, and atmospheric — never polished commercial stock

### Image style
- **Ekte og nedpå** — real, grounded, not glossy or stock-photo-like
- Nordic/Norwegian settings strongly preferred (fjords, forests, coastline, cabins, trails)
- People shown from behind or at a distance — never faces
- Moody, contemplative, atmospheric
- Seasons that match the emotional tone (autumn for reflection, spring for hope)
- Header: wider establishing shot
- Inline: more intimate, closer scenes

### How to fetch
Use the Unsplash API via WebFetch:
```
https://api.unsplash.com/search/photos?query=norway+forest&orientation=landscape&per_page=5
```
With header: `Authorization: Client-ID YOUR_ACCESS_KEY`

If no API key is available, search Unsplash via the browser and download manually.

### Accreditation — REQUIRED
Every Unsplash image must be credited. Add a `credits` field to the post:
```typescript
credits?: { photographer: string; url: string; source: "Unsplash" }[];
```
Credits render automatically at the bottom of the post.

### Image requirements
- Landscape orientation (16:9 or similar)
- High resolution (at least 1200px wide)
- Natural, authentic feel — no over-saturated, no HDR, no stock-photo poses
- Download and save to `public/images/blog/` with proper slug-based filenames

---

## How to Add a New Post

### 1. Write the content

Generate the blog post content following Ole's style above. Output it as a `ContentBlock[]` array matching the type in `src/lib/posts.ts`:

```typescript
export type ContentBlock = string | { items: string[] };
```

- Regular paragraphs are strings
- Multi-line poetic sections use `\n` within one string
- Bullet lists use `{ items: ["item1", "item2"] }` — keep these rare
- Inline links use markdown format: `[text](/blog/slug)`
- "Les også:" cross-links get special styling automatically

### 2. Generate post metadata

Create a complete `Post` object with full SEO metadata:

```typescript
{
  slug: "kebab-case-norwegian-slug",          // keyword-rich, 3-5 words
  title: "Full Norwegian Title",               // compelling, 50-60 chars, includes keyword
  excerpt: "2-3 sentences that capture...",    // 150-160 chars, includes keyword, meta description
  date: "YYYY-MM-DD",                          // publication date
  author: "Ole Aarre",
  readingTime: 4,                              // usually 4
  image: "/images/blog/[slug].png",
  inlineImages: [
    { src: "/images/blog/[slug]-inline-1.png", alt: "Descriptive Norwegian alt text", afterBlock: N },
    { src: "/images/blog/[slug]-inline-2.png", alt: "Descriptive Norwegian alt text", afterBlock: N },
  ],
  relatedSlugs: ["slug-1", "slug-2", "slug-3"],  // 3 topically related posts
  content: [ /* ContentBlock[] */ ],
}
```

### 3. Add to posts.ts

Add the new post object to the `posts` array in `src/lib/posts.ts`. Position it at the **beginning** of the array (newest first).

### 4. Source images from Unsplash

Search Unsplash for 3 fitting photographs (Norwegian/Scandinavian, natural, atmospheric). Download and save as:
- `public/images/blog/[slug].png` (header)
- `public/images/blog/[slug]-inline-1.png`
- `public/images/blog/[slug]-inline-2.png`

Add photographer credits to the post's `credits` array. If images can't be sourced right away, the post still works — note which images are missing.

### 5. Verify & deploy

- Check the post renders correctly in the preview
- Verify all links work (internal cross-links, "Les også")
- Confirm images load (if available)
- Offer to commit and push to deploy via Vercel

---

## SEO Checklist (verify before publishing)

- [ ] Title includes primary keyword naturally
- [ ] Excerpt is 150-160 chars and works as meta description
- [ ] Slug is short and keyword-rich
- [ ] Post links to 2-3 other Peerlo posts inline
- [ ] "Les også:" cross-link at the end
- [ ] Related posts (relatedSlugs) are topically relevant
- [ ] All images have descriptive Norwegian alt text
- [ ] Header image alt relates to post theme
- [ ] Content answers a real question someone would search for
- [ ] At least one clear, quotable statement for AI citation
- [ ] Date is set correctly

## Example Content Block Style

```typescript
content: [
  "Jeg tror mange mennesker misforstår hva det vil si å lytte. Ikke fordi de ikke bryr seg, men fordi de ofte prøver å fikse i stedet for å bare være der. Det er en stor forskjell på de to tingene.",
  "Noen ganger trenger man ikke et svar. Man trenger et menneske som tåler stillheten. Som ikke skynder seg videre til neste poeng, og som ikke prøver å gjøre det bedre med én gang.",
  "Bare et menneske som sier:\n«Jeg hører deg.»",
  "Det høres kanskje enkelt ut. Men for den som har båret på noe lenge, kan akkurat de ordene bety mer enn folk tror. Ikke fordi de løser noe, men fordi de gjør at man føler seg litt mindre alene.",
  "Les også: [Forskjellen på å bli hørt og å bli forstått](/blog/forskjellen-hort-og-forstatt)",
]
```

Notice: real paragraphs with multiple sentences, `\n` only for poetic moments, «guillemets», standalone short lines used sparingly for emphasis. The text reads like a human wrote it, not like a list of statements.

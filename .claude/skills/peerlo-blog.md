# Peerlo Blog Writer

Write and publish blog posts for Peerlo in Ole Aarre's voice and style.

**Trigger**: When the user asks to write a blog post, create blog content, add a new article, or mentions a topic they want covered on the Peerlo blog.

## Ole's Writing Style

Study the existing posts in `src/lib/posts.ts` before writing. Ole's voice has these defining traits:

### Language
- **Bokmål** — always. Never nynorsk.
- Simple, everyday Norwegian. No fagspråk, no anglicisms, no buzzwords.
- Warm, personal, and human. Like a friend talking quietly over coffee.

### Structure
- **Paragraphs, not lists.** The text flows as short, poetic paragraphs. Bullet lists are used *sparingly* — only for feelings, experiences, or short emotional phrases (never for instructions, steps, or takeaways).
- Short paragraphs. Often just one sentence.
- Uses `\n` line breaks within a single content block for poetic rhythm:
  ```
  "Ikke som fagperson.\nIkke som ekspert.\nMen som medmenneske."
  ```
- Fragments for emphasis. Not every sentence needs a verb.
- Rhetorical questions, then answers them gently.

### Tone
- First person ("jeg") mixed with universal "man" (one/you).
- Reflective and honest — never preachy or salesy.
- Shows vulnerability without being dramatic.
- Always circles back to peer support as the quiet answer — never forces it.
- Ends with hope, never despair.
- Uses «guillemets» for quoted speech, not "regular quotes".

### Content Patterns
- Opens with a personal reflection or observation.
- Builds through lived experience and emotional honesty.
- Arrives at peer support naturally — never as a sales pitch.
- Each post is ~800-1000 words, 4 min read.
- Ends with a cross-link: `"Les også: [Title](/blog/slug)"`
- Maximum 2-3 bullet lists per post, each with 3-5 short items.

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

Create a complete `Post` object:

```typescript
{
  slug: "kebab-case-norwegian-slug",     // max 4-5 words
  title: "Full Norwegian Title",          // compelling, human
  excerpt: "2-3 sentences that capture the essence...",
  date: "YYYY-MM-DD",                     // publication date
  author: "Ole Aarre",
  readingTime: 4,                          // usually 4
  image: "/images/blog/[slug].png",
  inlineImages: [                          // 1-2 images
    { src: "/images/blog/[slug]-inline-1.png", alt: "Descriptive Norwegian alt text", afterBlock: N },
    { src: "/images/blog/[slug]-inline-2.png", alt: "Descriptive Norwegian alt text", afterBlock: N },
  ],
  relatedSlugs: ["slug-1", "slug-2", "slug-3"],  // 3 related posts
  content: [ /* ContentBlock[] */ ],
}
```

### 3. Add to posts.ts

Add the new post object to the `posts` array in `src/lib/posts.ts`. Position it at the **beginning** of the array (newest first).

### 4. Generate Midjourney image prompts

Create 3 image prompts (1 header + 2 inline) in this style:

```
Hyperrealistic photograph, Nordic landscape, [scene description].
Natural soft lighting, muted Scandinavian color palette, cinematic
depth of field. Shot on medium format camera. --ar 16:9 --v 6.1 --s 200
```

Guidelines for prompts:
- Always Nordic/Norwegian settings (fjords, forests, coastline, cabins, trails)
- People shown from behind or at a distance — never faces
- Moody, contemplative, atmospheric
- Seasons that match the emotional tone (autumn for reflection, spring for hope)
- Header image: wider establishing shot
- Inline images: more intimate, closer scenes

Output the prompts so the user can run them in Midjourney.

### 5. Remind the user

After writing the post and adding it to `posts.ts`:
- Tell them to run the Midjourney prompts
- Remind them to place images as `public/images/blog/[slug].png`, `[slug]-inline-1.png`, `[slug]-inline-2.png`
- Offer to commit and push to deploy via Vercel

## Example Content Block Style

```typescript
content: [
  "Jeg tror mange mennesker misforstår hva det vil si å lytte.",
  "Ikke fordi de ikke bryr seg.\nMen fordi de ofte prøver å fikse i stedet for å bare være der.",
  "Det er en stor forskjell på de to tingene.",
  "Noen ganger trenger man ikke et svar.\nMan trenger et menneske som tåler stillheten.",
  "Som ikke skynder seg videre til neste poeng.\nSom ikke prøver å gjøre det bedre med én gang.",
  "Bare et menneske som sier:\n«Jeg hører deg.»",
  "Det kan bety mer enn folk tror.",
  "Les også: [Forskjellen på å bli hørt — og å bli forstått](/blog/forskjellen-hort-og-forstatt)",
]
```

Notice: short paragraphs, `\n` for rhythm, «guillemets», no bullet lists needed, warm and reflective.

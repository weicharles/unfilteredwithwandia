# Unfiltered with Wandia: Website Plan

Single-page website · planning and documentation · October 2026

## 1. Overview

**What we are building:** a single-page website for Unfiltered with Wandia (tagline: *Stories that inspire growth*) that turns visitors into sponsors and guests.

**Audiences, in priority order**

1. **Partners and sponsors:** Kenyan businesses and brands deciding whether to put money or products into the show.
2. **Potential guests:** people with a real story who want to be interviewed.
3. **Viewers:** people who want to watch episodes and subscribe.

**Two primary actions:** *Partner With Us* and *Be a Guest*. Every section either builds trust for one of these or makes it easier to take it.

**How we will measure it**

- Number of partner inquiries (form and WhatsApp)
- Number of guest applications
- Media kit downloads
- Clicks to the YouTube channel

**Tools:** UI designed in Google Stitch, then built and refined in Google Antigravity.

## 2. Page structure at a glance

Nine sections, in this order:

| # | Section | Purpose | Main action |
| --- | --- | --- | --- |
| 1 | Nav + Hero | First impression, set the two paths | Partner With Us / Be a Guest |
| 2 | Credibility strip | Prove the show is real | Keep scrolling |
| 3 | About Wandia | Build a personal connection | Keep scrolling |
| 4 | Featured episodes | Show the product (YouTube embeds) | Watch / Subscribe |
| 5 | Behind the scenes gallery | Show the experience of being a guest or partner | Keep scrolling |
| 6 | Partner With Us | Sell sponsorship | Download kit / Send inquiry |
| 7 | Be a Guest | Recruit guests | Apply |
| 8 | FAQ | Remove doubts for both audiences | Contact |
| 9 | Footer + Contact | Make reaching you effortless | WhatsApp / Email |

## 3. Design system (paste into Stitch first)

**Colours**

- Cream background: `#F6F2EE`
- White cards: `#FFFFFF`
- Black (text, heavy blocks, footer): `#0C0C0D`
- Brand pink, taken from the logo: `#F29FC4`
- Muted grey for small text: `#8C8C93`

**Rules for pink**

- Use pink for button fills, section backgrounds, highlights and bars.
- Put **black text on pink**, never pink text on cream. Pink on cream is hard to read, especially on phones.
- Use only this one pink. No second shade.

**Typography:** Poppins (same as the media kit). Bold for headings, regular for body. Body text never smaller than 16px on mobile.

**Shape and feel:** rounded cards (12 to 16px radius), soft thin grey borders, generous spacing. Photos in rounded frames with a black offset block behind them, like the cover of the media kit.

**Buttons:** primary is pink fill with black text. Secondary is black fill with white text. Both rounded, large tap targets (at least 48px tall).

**Imagery:** real photos of Wandia, guests and recording sessions. No stock photos.

**Motion:** subtle only (fade-in on scroll, hover lift on cards). Nothing that slows the page.

**Mobile first:** about 67% of watch time is on phones and 53% of views are from Kenya. Design the phone layout first, then scale up.

**Prompt 0: design system (paste before every section prompt)**

> Design system for "Unfiltered with Wandia", a Kenyan YouTube podcast, tagline "Stories that inspire growth". Mobile-first. Cream background #F6F2EE, white cards, black #0C0C0D for text and dark blocks, one soft pink #F29FC4 for buttons and backgrounds with black text on top (never pink text on cream). Font: Poppins, bold headings, 16px+ body. Rounded corners 12 to 16px, thin light-grey card borders, generous whitespace. Primary button: pink fill, black text. Secondary button: black fill, white text. Warm, honest, professional tone. Keep this system consistent across all sections.

## 4. Content to gather before building

- **Photos:** 8 to 12 from recording sessions (guests, behind the scenes) plus 2 to 3 portraits of Wandia
- **Logo:** the new circular logo file (PNG, plus SVG if available)
- **YouTube links:** 4 to 6 episodes to feature, and the link to the channel
- **Media kit PDF:** the latest version, for the download button
- **Stats:** current subscribers, watch hours, views, episode count (keep in one place so they are easy to update)
- **Bio:** Wandia's own short story and why she started Unfiltered
- **Guest criteria:** who you want, who you don't
- **Guest policy:** costs (if any), recording location, how stories are handled
- **Domain:** for example unfilteredwithwandia.co.ke

## 5. Section-by-section specification

Each section has: purpose, content, layout, draft copy, a Stitch prompt, and build notes for Antigravity. Copy marked **\[confirm\]** needs Wandia's approval before it goes live.

### Section 1: Nav + Hero

**Purpose:** in five seconds, a visitor knows what the show is and picks a path.

**Content**

- Sticky nav: logo (left), links (About, Episodes, Partner, Guests, FAQ), and a pink *Partner With Us* button
- Hero headline, one line of supporting text, two buttons, a large photo of Wandia
- Small text link: *Watch the latest episode*

**Layout:** on mobile, the logo and a menu button on top, headline, text, stacked buttons, then the photo. On desktop, text on the left and photo (with black offset block) on the right.

**Draft copy**

- Headline: *Real stories. Real conversations. Real growth.*
- Supporting text: *Unfiltered with Wandia is a Kenyan podcast where honest conversations on love, faith, mental health, money and purpose remind people they are not alone.*
- Buttons: **Partner With Us** (pink) and **Be a Guest** (black)

**Stitch prompt**

> &#91;Prompt 0\] Design the top of the page: a sticky navigation bar with the circular logo on the left, links (About, Episodes, Partner, Guests, FAQ) and a pink "Partner With Us" button on the right; collapse to a menu icon on mobile. Below it, a hero. Headline "Real stories. Real conversations. Real growth." in large bold black type. Supporting line: "Unfiltered with Wandia is a Kenyan podcast where honest conversations on love, faith, mental health, money and purpose remind people they are not alone." Two buttons: "Partner With Us" (pink) and "Be a Guest" (black). A portrait photo of a smiling woman in a black blazer in a rounded frame with a black offset block behind it. A small sound-wave graphic as decoration.

**Build notes:** nav links smooth-scroll to section IDs. Buttons link to `#partner` and `#guest`. Hero photo should be a compressed WebP, loaded first (not lazy).

### Section 2: Credibility strip

**Purpose:** answer "is this show real?" immediately.

**Content:** four big numbers and one supporting line.

- 430 Subscribers
- 418.5 Watch hours (last 12 months)
- 5.5K Total views
- 20 Episodes
- Supporting line: *63% of our watch time comes from people who haven't subscribed yet. The show is reaching new people.*
- Small source note: *Source: YouTube Studio, \[date\]*

**Layout:** a row of four cards on desktop, a 2x2 grid on mobile. White cards with a thin pink top line, big black numbers.

**Stitch prompt**

> &#91;Prompt 0\] Design a stats strip right under the hero: four white rounded cards in a row (2x2 on mobile), each with a large bold black number and a small grey label: "430 Subscribers", "418.5 Watch hours", "5.5K Views", "20 Episodes". A thin pink line on top of each card. Under the cards, one centered line: "63% of our watch time comes from people who haven't subscribed yet." and a tiny grey source note.

**Build notes:** keep the numbers in one config object (or one JSON file) so updating the site is a one-line change. Optional: count-up animation when the strip scrolls into view.

### Section 3: About Wandia

**Purpose:** people partner with and open up to people they connect with.

**Content**

- A portrait photo of Wandia
- A short story (about 80 to 120 words) in her voice **\[confirm\]**
- Topic chips: Love & Relationships, Campus Life, Faith & Family, Mental Health, Money & Gambling, Personal Growth, Success Stories, Confidence & Healing, Music & Passion
- One pull quote: *For anyone who has been through something and needs to hear they are not alone.*

**Layout:** two columns on desktop (photo and text), stacked on mobile. Chips wrap under the text. The quote sits in a black band.

**Draft copy (base text, from the channel description)**

*Unfiltered with Wandia is a space where real stories come to life. Every episode is an honest conversation about love, growth, pain or purpose, with a guest who has lived it. No topic is off limits.* **\[Wandia to add her personal "why I started" paragraph\]**

**Stitch prompt**

> &#91;Prompt 0\] Design an "About" section with the heading "Meet Wandia". Left: a portrait photo in a rounded frame with a black offset block. Right: a short paragraph of body text, then a wrapping row of white pill-shaped topic chips with thin grey borders (all identical, none highlighted): Love & Relationships, Campus Life, Faith & Family, Mental Health, Money & Gambling, Personal Growth, Success Stories, Confidence & Healing, Music & Passion. Below, a full-width black band with a large pink quotation mark and the white italic quote "For anyone who has been through something and needs to hear they are not alone."

**Build notes:** chips are plain text, no filtering behaviour. The black band can be reused as a visual divider.

### Section 4: Featured episodes (YouTube embeds)

**Purpose:** let visitors experience the show without leaving the page.

**Content**

- One large featured video (the best-performing or latest episode)
- A grid of 3 to 6 more episodes with thumbnail, title and view count
- A *Subscribe on YouTube* button and a *Watch all episodes* link

**Suggested episodes (from your top performers)**

- Living With Scars: Finding Confidence Beyond Insecurities
- Holiness or Pressure? The Truth About Pastor's Kids
- How She Graduated With First Class Honours (campus success story)
- Depression After a Break-Up
- Unfiltered Love: The Real Side of Relationships

**Layout:** featured video full width on top, grid of cards below (1 column on mobile, 3 on desktop).

**Stitch prompt**

> &#91;Prompt 0\] Design an "Episodes" section with the heading "Watch the conversations". A large 16:9 video player card on top with a play button over a thumbnail, and the title and a short description beside or below it. Under it, a grid of video cards (3 columns desktop, 1 column mobile), each with a rounded thumbnail, a duration badge, the episode title and a small grey view count. At the bottom, a black "Subscribe on YouTube" button and a pink "Watch all episodes" button.

**Build notes**

- Use a **click-to-load facade**: show the YouTube thumbnail image and only insert the iframe when tapped. This keeps the page fast on mobile data.
- Use the `youtube-nocookie.com` embed domain.
- Store each episode as `{ id, title, views }` in a list so adding a new one is easy.
- Add `loading="lazy"` to thumbnails.

### Section 5: Behind the scenes gallery

**Purpose:** show guests what it feels like to sit in the chair, and show partners the production quality.

**Content:** 8 to 12 photos from recording sessions, ideally with short captions (guest name and episode, with their permission).

**Layout:** a masonry or even grid, 2 columns on mobile and 4 on desktop. Tap a photo to open a lightbox.

**Stitch prompt**

> &#91;Prompt 0\] Design a photo gallery section with the heading "Behind the scenes" and a one-line subtitle "Real conversations, recorded with care." A grid of 8 to 12 rounded photos of podcast recording sessions (2 columns on mobile, 4 on desktop) with slightly varied heights. Hovering a photo lifts it slightly and shows a small caption. A lightbox state is shown when a photo is clicked.

**Build notes:** compress every photo (WebP, about 1200px wide max), lazy-load below the fold, and add alt text to each one. Always get a guest's consent before putting their photo on the site **\[confirm\]**.

### Section 6: Partner With Us

**Purpose:** this is the section that makes money, so it gets the most space and care.

**Content**

1. Heading and a short pitch
2. Three reasons to partner
3. The four packages
4. Past partner: BusinessPlus with logo and testimonial
5. A *Download media kit (PDF)* button
6. An inquiry form and a WhatsApp button

**Draft copy**

- Heading: *Put your brand inside conversations people choose to sit through.*
- Reasons: **Attentive audience** (long-form episodes people actually watch), **Kenya-led and mobile-first** (53% of views from Kenya, 67% of watch time on phones), **Natural integration** (your brand woven into the conversation, not a loud ad).

**Packages (same as the media kit)**

| Package | Price | Includes |
| --- | --- | --- |
| Basic | KSh 1,500 | Business name mentioned once in the episode, tagged in one social media post, listed in video description |
| Starter | KSh 5,000 | Social media mention, product placement, short advertisement |
| Episode Partner | KSh 10,000 | Everything in Starter, 30 to 60 sec YouTube ad, social media promotion, product or service featured |
| Main Sponsor | KSh 20,000+ | Opening and mid-roll mention, multiple promotional posts, product placement, dedicated promo content, "Brought to you by..." credit |

Add a line: *Need something different? We tailor packages to your brand and budget.*

**Testimonial:** *"Thank you so much, Unfiltered With Wandia. I have seen great conversion after your advert for our software. Thank you, and to more partnership."* Founder, BusinessPlus

**Layout:** the dark Episode Partner card is highlighted in the middle, as in the media kit. On mobile, the cards stack vertically or scroll sideways. The testimonial sits in a white card with the BusinessPlus logo.

**Stitch prompt**

> &#91;Prompt 0\] Design a "Partner With Us" section on a slightly different background band. Heading: "Put your brand inside conversations people choose to sit through." Three small feature blocks with simple line icons: "Attentive audience", "Kenya-led and mobile-first", "Natural integration". Then four pricing cards in a row (stacked on mobile): Basic KSh 1,500, Starter KSh 5,000, Episode Partner KSh 10,000 (dark black card, highlighted), Main Sponsor KSh 20,000+. Each card has a small pink label, the price in large type and a bullet list with small pink dots. Below, a white testimonial card with a yellow square "B+" logo and an italic quote from the Founder of BusinessPlus. Finally, a two-column area: a pink "Download media kit (PDF)" button and a simple inquiry form (name, business, email, phone, package of interest, message) with a black submit button and a green WhatsApp button.

**Build notes**

- The media kit button links to the PDF file in the site's assets.
- Inquiry form fields: name, business name, email, phone/WhatsApp, package of interest (dropdown), message. See section 6 below for how submissions are handled.
- Each package card has a button that scrolls to the form and pre-selects that package.
- WhatsApp link format: `https://wa.me/254794454549?text=Hi%20Wandia%2C%20I%27m%20interested%20in%20partnering...`

### Section 7: Be a Guest

**Purpose:** make it easy and safe for the right people to apply.

**Content**

1. Heading and invitation
2. Who we are looking for
3. How it works in 3 steps
4. A short promise on how stories are treated **\[confirm with Wandia\]**
5. The application form

**Draft copy**

- Heading: *Your story could be the one someone needs to hear.*
- Who we're looking for: people with a real story to tell about love and relationships, faith, campus life, mental health, money and gambling, entrepreneurship, music and creative journeys, or overcoming something hard.
- How it works: **1. Apply** (tell us who you are and your story), **2. We talk** (a short chat with Wandia's team to plan the conversation), **3. We record** (a relaxed, unscripted conversation, then it goes live on YouTube).
- Care promise **\[confirm\]:** *Every guest is treated with respect. We talk about what you are comfortable sharing.*

**Guest application form fields**

- Full name
- Phone/WhatsApp
- Email
- Town/county
- Social media or YouTube link (optional)
- What is your story about? (short text)
- Why do you want to share it? (short text)
- Topics you are comfortable and not comfortable talking about (short text)
- Preferred recording dates (optional)
- Consent checkbox: *I understand episodes are published on YouTube.*

**Layout:** a black or pink section background to separate it from the partner section. Steps as three numbered cards. Form in a white card.

**Stitch prompt**

> &#91;Prompt 0\] Design a "Be a Guest" section with a soft pink background band. Heading "Your story could be the one someone needs to hear." and a short invitation paragraph. A row of 3 numbered step cards (Apply, We talk, We record) with big numbers. Next to or below them, a list of "Who we are looking for" shown as white pill chips. A short reassurance note with a heart or shield icon. Then a white application form card with fields: full name, phone/WhatsApp, email, town, social link, "What is your story about?" (textarea), "Why do you want to share it?" (textarea), "Topics you are not comfortable with" (text), a consent checkbox and a black "Submit application" button.

**Build notes:** the consent checkbox is required. Show a clear success message after submit (*Thanks! We'll be in touch on WhatsApp or email.*). Treat guest data as sensitive: only Wandia and her team should be able to see the responses.

### Section 8: FAQ

**Purpose:** answer the questions that would otherwise stop a sponsor or a guest from reaching out.

**Content:** 6 to 8 questions in an accordion, grouped as *For partners* and *For guests*.

**Draft questions** (answers to be confirmed by Wandia)

*For partners*

- Where will my brand appear? (in the episode, YouTube description, social media)
- How do I know the results? (we share viewership numbers; options to be confirmed)
- Can I choose which episode to sponsor?
- Can packages be customised?

*For guests*

- Do I have to pay to be a guest? **\[confirm\]**
- Where do you record, and how long does it take?
- Can I choose which topics we talk about?
- When will my episode be published?

**Stitch prompt**

> &#91;Prompt 0\] Design an FAQ section with the heading "Questions, answered". Two tabs or labelled groups: "For partners" and "For guests". Each group is an accordion list of 4 questions in white rounded rows with thin borders and a plus/minus icon. One row is shown expanded with a sample answer. Keep it clean and spacious.

**Build notes:** use plain HTML `<details>` or a small accessible accordion. Add FAQ structured data for search (optional).

### Section 9: Footer + Contact

**Purpose:** end with clear, easy ways to reach you.

**Content**

- A final call to action: *Let's build something real together.*
- Email: faithwandia28@gmail.com
- WhatsApp: +254 794 454 549
- YouTube: youtube.com/@unfilteredwithwandia
- Logo, small tagline and copyright line
- Floating WhatsApp button (bottom right on mobile)

**Layout:** a black footer with white text, pink buttons, and the circular logo.

**Stitch prompt**

> &#91;Prompt 0\] Design a footer on a black background. Top: a large white heading "Let's build something real together." with two buttons: pink "Partner With Us" and outlined white "Be a Guest". Below: three contact rows with small pink labels (EMAIL, WHATSAPP, YOUTUBE) and white values. Bottom row: the circular logo, the tagline "Stories that inspire growth", and a copyright line. Also show a floating green WhatsApp circular button in the bottom-right corner.

**Build notes:** the floating WhatsApp button uses the same click-to-chat link and stays visible on scroll, but never covers form fields on mobile.

## 6. Forms and data handling

- **Two forms:** a partner inquiry form and a guest application form.
- **Where submissions go:** a Google Sheet (one tab per form) with an email notification to Wandia on each new submission. This can be done with a Google Apps Script web app or a form service. Keep it simple at launch.
- **Spam protection:** a hidden honeypot field plus basic rate limiting.
- **Validation:** required name, valid email or phone, and the consent checkbox on the guest form.
- **Privacy:** add a short privacy note under each form (what we collect and why). Guest stories can be sensitive, so limit access to the responses.
- **Fallback:** every form has a visible WhatsApp alternative.

## 7. Technical plan (Stitch to Antigravity)

**Workflow**

1. In Stitch, generate Prompt 0 plus one section at a time, mobile first, then adjust each design.
2. Review all sections together for consistency (same pink, same type, same spacing).
3. Export the designs and bring them into Antigravity.
4. In Antigravity, build as a single static page, wire up the embeds, forms and WhatsApp links, then optimise.

**Suggested stack:** a simple static site (HTML, CSS and a little JavaScript, or a lightweight framework) hosted on a fast static host with a custom `.co.ke` domain. No heavy libraries.

**Performance targets**

- Page loads fast on 4G and weaker connections
- Images in WebP, sized to their display width, lazy-loaded below the fold
- YouTube click-to-load facade (no iframes on first load)
- Fonts: only the Poppins weights actually used

**Accessibility:** black text on pink or cream (good contrast), visible focus states, alt text on every image, buttons at least 48px tall, semantic headings in order.

## 8. SEO and sharing

- **Title:** Unfiltered with Wandia | Kenyan Podcast on Real Stories and Growth
- **Description:** a Kenyan podcast of honest conversations on love, faith, mental health, money and purpose. Partner with us or be a guest.
- **Social share image:** the circular logo on a cream background (1200x630)
- **Structured data:** podcast/series and organisation markup, plus FAQ markup
- **Analytics:** a simple, privacy-friendly tool. Track clicks on both main buttons, WhatsApp, media kit downloads, YouTube clicks and form submissions.

## 9. Build order and launch checklist

**Build order**

1. Finalise the design system in Stitch (Prompt 0)
2. Generate the sections in order: Hero, Stats, About, Episodes, Gallery, Partner, Guest, FAQ, Footer
3. Review on a phone-size preview, then desktop
4. Move into Antigravity and build the page structure
5. Add real content (copy, photos, YouTube IDs, stats)
6. Connect the forms and test submissions end to end
7. Test on a real phone and a slow connection
8. Connect the domain, add analytics, publish

**Launch checklist**

- All copy marked \[confirm\] approved by Wandia
- Guest photos used only with consent
- Stats updated and dated
- Media kit PDF is the latest version
- Both forms tested (a submission reaches the sheet and the email)
- WhatsApp links open the right number with the prefilled message
- Every YouTube embed plays
- No pink text on cream anywhere
- Share preview looks right in WhatsApp
- Page works on a small Android phone

## 10. Open questions for Wandia

1. Her personal "why I started Unfiltered" story (about 100 words)
2. Do guests pay anything? Where are episodes recorded?
3. What exactly is promised to guests about how their story is handled?
4. How do sponsors receive results after an episode?
5. Which 5 episodes should be featured?
6. Which photos can be used publicly, and which guests have agreed?
7. Is there a preferred domain name?
8. Will WandiSafaris be added to this site later, or get its own?

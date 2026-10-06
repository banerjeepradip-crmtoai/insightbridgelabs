import { getBlogContent } from '../content/blog';
import { getCaseStudiesContent } from '../content/case-studies';

const esc = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const safeUrl = (value: string) => /^(https?:\/\/|\/(?!\/))/.test(value) ? esc(value) : '#';
const tags = (values: string[]) => `<div class="tags">${values.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>`;
const image = (url?: string) => url ? `<img class="resource-image" src="${safeUrl(url)}" alt="" loading="lazy">` : '';
const resourceStyle = `<style>.resource-image{display:block;width:100%;height:220px;object-fit:cover;border-radius:8px;margin-bottom:20px}</style>`;

export function renderApproved(template: string, route: string) {
  const blog = getBlogContent('en');
  if (route === '/resources/blog/') {
    const cards = blog.items.map((p, i) => `<article class="post-card">${image(p.image)}<span class="post-type">${esc(p.type)}</span><h2 id="article-${i+1}">${esc(p.title)}</h2><p>${esc(p.excerpt)}</p>${tags(p.tags)}<a class="read-link" href="${safeUrl(p.href)}" target="_blank" rel="noopener noreferrer">Read the article</a></article>`).join('');
    template = template.replace(/<section class="blog-list-section section"[^>]*>[\s\S]*?<\/section>/, `<section class="blog-list-section section"><div class="container"><div class="blog-grid">${cards}</div></div></section>`);
  }
  if (route === '/resources/case-studies/') {
    const cards = getCaseStudiesContent('en').items.map(p => `<article class="case-card">${image(p.image)}<span class="case-category">${esc(p.category)}</span><h2>${esc(p.title)}</h2>${(['challenge','solution','outcome'] as const).map(k => `<div class="case-block"><h3>${k[0].toUpperCase()+k.slice(1)}</h3><p>${esc(p[k])}</p></div>`).join('')}${tags(p.tags)}</article>`).join('');
    template = template.replace(/<section class="case-studies section"[^>]*>[\s\S]*?<\/section>/, `<section class="case-studies section"><div class="container"><div class="case-list">${cards}</div></div></section>`);
  }
  if (route === '/' && blog.items.length) {
    const headlines = JSON.stringify(blog.items.map((p,i) => [p.title, `/resources/blog/#article-${i+1}`])).replace(/</g,'\\u003c');
    template = template.replace(/const items=\[[\s\S]*?\];let index=0;/, `const items=${headlines};let index=0;`);
  }
  return template.replace('</head>', resourceStyle+'</head>');
}

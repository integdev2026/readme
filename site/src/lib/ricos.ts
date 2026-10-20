// Minimal Ricos (Wix rich content) to HTML renderer for blog posts.
import { mediaUrl } from './wix';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function text(node: any): string {
  let out = esc(node.textData?.text ?? '');
  for (const d of node.textData?.decorations ?? []) {
    if (d.type === 'BOLD') out = `<strong>${out}</strong>`;
    else if (d.type === 'ITALIC') out = `<em>${out}</em>`;
    else if (d.type === 'UNDERLINE') out = `<u>${out}</u>`;
    else if (d.type === 'LINK' && d.linkData?.link?.url) {
      const url = d.linkData.link.url as string;
      const external = /^https?:/.test(url) && !url.includes('integpro.com.au');
      out = `<a href="${esc(url)}"${external ? ' target="_blank" rel="noopener"' : ''}>${out}</a>`;
    }
  }
  return out;
}

const kids = (node: any) => (node.nodes ?? []).map(render).join('');

function render(node: any): string {
  switch (node.type) {
    case 'TEXT': return text(node);
    case 'PARAGRAPH': { const c = kids(node); return c ? `<p>${c}</p>` : ''; }
    case 'HEADING': { const l = Math.min(Math.max(node.headingData?.level ?? 2, 2), 6); return `<h${l}>${kids(node)}</h${l}>`; }
    case 'BULLETED_LIST': return `<ul>${kids(node)}</ul>`;
    case 'ORDERED_LIST': return `<ol>${kids(node)}</ol>`;
    case 'LIST_ITEM': return `<li>${kids(node)}</li>`;
    case 'BLOCKQUOTE': return `<blockquote>${kids(node)}</blockquote>`;
    case 'DIVIDER': return '<hr />';
    case 'IMAGE': {
      const img = node.imageData?.image;
      if (!img?.src?.id) return '';
      const alt = esc(node.imageData?.altText ?? '');
      const cap = node.imageData?.caption ? `<figcaption>${esc(node.imageData.caption)}</figcaption>` : '';
      const ratio = img.width && img.height ? img.height / img.width : 0.66;
      const src = `https://static.wixstatic.com/media/${img.src.id}/v1/fit/w_1280,h_${Math.round(1280 * ratio)},q_80/image.webp`;
      return `<figure><img src="${src}" alt="${alt}" width="${img.width ?? ''}" height="${img.height ?? ''}" loading="lazy" />${cap}</figure>`;
    }
    case 'TABLE': return `<div class="table-wrap"><table>${kids(node)}</table></div>`;
    case 'TABLE_ROW': return `<tr>${kids(node)}</tr>`;
    case 'TABLE_CELL': return `<td>${kids(node)}</td>`;
    case 'CODE_BLOCK': return `<pre><code>${kids(node)}</code></pre>`;
    default: return kids(node);
  }
}

export const ricosToHtml = (doc?: { nodes: any[] }) => (doc?.nodes ?? []).map(render).join('\n');
export { mediaUrl };

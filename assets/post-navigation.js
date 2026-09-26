// Kramdown supplies stable heading IDs; build navigation from the rendered post.
(() => {
  const content = document.querySelector('.post-content');
  if (!content) return;

  const headings = [...content.querySelectorAll('h2[id], h3[id]')];
  const toc = document.querySelector('.post-toc');
  const list = toc?.querySelector('ol');
  let section;
  let subsections;

  headings.forEach((heading) => {
    const title = heading.textContent.trim();
    const href = '#' + encodeURIComponent(heading.id);

    if (list) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = href;
      link.textContent = title;
      item.append(link);

      if (heading.tagName === 'H3' && section) {
        if (!subsections) {
          subsections = document.createElement('ol');
          section.append(subsections);
        }
        subsections.append(item);
      } else {
        list.append(item);
        section = heading.tagName === 'H2' ? item : null;
        subsections = null;
      }
    }

    const permalink = document.createElement('a');
    permalink.className = 'heading-permalink';
    permalink.href = href;
    permalink.textContent = '#';
    permalink.setAttribute('aria-label', 'Link to ' + title);
    heading.append(permalink);
  });

  if (toc && headings.length >= 2) toc.hidden = false;
})();

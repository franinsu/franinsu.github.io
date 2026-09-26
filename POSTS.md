# Writing posts

Create a Markdown file in `_posts/` named `YYYY-MM-DD-title.md`, starting from the
front matter below. The filename supplies the publication date.

```yaml
---
layout: post
title: "Your title"
nav: blog
post_type: research-note
status: work-in-progress
last_modified_at: 2026-09-25
---
```

- `post_type`: `research-note` or `tutorial`. Omit it to leave a post unlabelled.
- `status: work-in-progress` is optional and independent of the type. Remove it
  when the post is complete.
- `last_modified_at` is optional. Set it when the article meaningfully changes;
  it is displayed only if later than the publication day. Builds never change it.
- An automatic, collapsible contents list uses `##` and `###` headings when at
  least two are present. Use `toc: false` to disable it. Headings have permalink
  anchors; add an explicit Kramdown ID (`{#stable-id}` on the following line)
  when a link should survive a heading rename.

## Mathematics

Write inline math as `$$x \in \mathbb{R}^d$$`. Display math uses `$$` on separate
lines, with blank lines before and after the block. This native Kramdown syntax
preserves TeX braces and line breaks before MathJax runs.

Wrap displays that need a number in an `equation` environment and give each a
unique, descriptive label. An inner `aligned` environment supports multiple rows.

```text
$$
\begin{equation}
\label{eq:example}
y = x^2
\end{equation}
$$

As shown in $$\eqref{eq:example}$$, ...
```

Equation references link to the numbered display. Its stable fragment is
`#mjx-eqn%3Aeq%3Aexample`, based on the label rather than its current number.
Plain displays remain unnumbered. Math is enabled for posts by default; no
per-post script is needed.

## References

Add a `references` list to the front matter. Each entry needs a unique `id`,
`title`, and `url`; `authors`, `venue`, and `year` are optional.

```yaml
references:
  - id: author-year-keyword
    authors: "First Author and Second Author"
    title: "Paper title"
    venue: "Journal or conference"
    year: 2026
    url: "https://arxiv.org/abs/XXXX.XXXXX"
```

Cite an entry with `{% include cite.html id="author-year-keyword" %}`. Both its
in-text number and the bibliography follow the reference-list order. Reference
links use stable IDs, so reordering entries does not break their destinations.
The References section appears automatically when entries exist.

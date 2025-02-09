// //src\lib\markdownToHtml.ts

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';  // Add this line
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize'
import rehypeKatex from 'rehype-katex';  // Add this line
import rehypeStringify from 'rehype-stringify';
import 'katex/dist/katex.min.css'

export default async function markdownToHtml(markdown: string) {
  try {
    const file = await unified()
      .use(remarkParse) // Parse Markdown
      .use(remarkGfm)   // GitHub Flavored Markdown support
      .use(remarkMath)  // Parse LaTeX-style math expressions
      .use(remarkRehype, { allowDangerousHtml: true }) // Convert Markdown to HTML
      .use(rehypeSanitize) // Sanitize HTML input
      .use(rehypeKatex) // Render math expressions with KaTeX
      .use(rehypeStringify, { allowDangerousHtml: true }) // Serialize the HTML
      .process(markdown);

    return file.toString();
  } catch (error) {
    console.error('Error processing markdown:', error);
    return '';
  }
}
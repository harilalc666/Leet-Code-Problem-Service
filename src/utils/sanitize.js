const markdown = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkDownContent(markdownContent) {

    const markdownToHtml = markdown.parse(markdownContent);

    // removing malicous scripts in the html
    const cleanHtml = sanitizeHtmlLibrary(markdownToHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
        allowedAttributes: { '*': ['href', 'name', 'target', 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'] },
    },

    );

    // convert back to markdown
    return new TurndownService().turndown(cleanHtml);;
}

module.exports = sanitizeMarkDownContent;


// const markdownContent = `
// # This is a Markdown document with a malicious script

// ## Do not run this in any real environment

// - Here is some innocent-looking text

// <script>alert('This is a malicious script!')</script>
// `;

// sanitizeMarkDown(markdownContent);

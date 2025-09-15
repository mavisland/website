# Markdown-Based Blog System

This directory is used to manage blog content for the website. Each blog post is stored in its own markdown (.md) file.

## Creating a Blog Post

1. Copy the `blog-template.md` file as a new file (for example: `my-new-post.md`)
2. Edit the front matter section (the part between --- marks):
   - `title`: The title of the blog post
   - `excerpt`: A brief description of the blog post
   - `coverImage`: Cover image for the blog post (path in the public folder)
   - `date`: Date of the post (in YYYY-MM-DD format)
   - `author`: Name of the author
   - `category`: Blog category
   - `readTime`: Reading time
   - `tags`: Related tags (as an array)
   - `published`: Publication status (true/false)
3. Write your blog content in Markdown format in the rest of the file

## File Naming

File names will be used as part of the URLs, therefore:
- Use hyphens (-) instead of spaces
- Use only lowercase letters, numbers, and hyphens
- Use Latin equivalents instead of special characters (ç, ş, ı, ö, ü, ğ, etc.)

Example: `creating-a-blog-system-with-nextjs.md`

## Important Notes

- Pay attention to the front matter format, it should be between two `---` marks
- Posts with `published: false` will not be displayed on the website
- Don't forget to add cover images to the `/public` directory
function updatePreview(){
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markedUpHtml = marked(editorValue);
    previewElement.innerHTML = markedUpHtml;
}
function setDefault(){
    let defaultText = `\
# Useful Programming
## a markdown previewer
[Learn about cool technologies](https://www.freecodecamp.org/learn/front-end-development-libraries/).

<dl>
<dt>Definition list</dt>
<dd>It's what many people use.</dd>

<dt>Markdown in HTML</dt>
<dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`Thank you for Reading\`

\`\`\`
function exampleOf(){
return multiLineCodeBlock;
}
\`\`\`

- Code
- Every Day
- No matter What

> Learn not to settle for less

![Usefull Programming](https://miro.medium.com/v2/resize:fit:720/format:webp/1*0FqDC0_r1f5xFz3IywLYRA.jpeg)

**Bolded Text**`;
    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked(defaultText);
}
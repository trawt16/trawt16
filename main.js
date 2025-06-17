    const fs = require('fs');
    const path = require('path');
    const { marked } = require('marked');

    // 1️⃣ Read your README.md
    const mdPath = path.join(__dirname, 'README.md');
    const mdContent = fs.readFileSync(mdPath, 'utf8');

    // 2️⃣ Convert Markdown → HTML
    const htmlContent = marked(mdContent);

// 3️⃣ Wrap in a simple HTML template
const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${htmlContent}
</body>
</html>
`;

    // 4️⃣ Write the output to a file (you can also serve it instead)
    fs.writeFileSync(path.join(__dirname, 'index.html'), fullHtml);

    console.log('✅ README.md converted to index.html');

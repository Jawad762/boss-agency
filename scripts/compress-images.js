const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const assetsDir = path.join(__dirname, '../public/portfolio/pdf-pages');
const files = fs.readdirSync(assetsDir)
  .filter(file => file.endsWith('.jpg'));

files.forEach(file => {
  try {
    const filePath = path.join(assetsDir, file);
    console.log(`\nProcessing: ${file}`);
    
    // More aggressive but valid compression:
    // - Resize to max 800px (smaller)
    // - Maximum compression level (9)
    // - Palette mode for smaller files
    // - Valid effort level (6 is max)
    // - Reduce colors significantly
    const command = `sharp -i "${filePath}" -o "${filePath}" --compressionLevel 9 --palette --colors 64 --effort 6 resize 800 --withoutEnlargement`;
    
    console.log(`Running: ${command}`);
    
    execSync(command, { stdio: 'inherit' });
    console.log(`✓ Compressed: ${file}`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-poppler');

async function extractPdfPages(pdfPath, outputDir = 'public/portfolio/pdf-pages') {
  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`🔄 Converting PDF: ${pdfPath}`);
    console.log(`📁 Output directory: ${outputDir}`);

    // Clean up any existing files first
    const existingFiles = fs.readdirSync(outputDir);
    existingFiles.forEach(file => {
      if (file.startsWith('page') && (file.endsWith('.jpg') || file.endsWith('.png'))) {
        fs.unlinkSync(path.join(outputDir, file));
      }
    });

    console.log('🎯 Converting pages with MAXIMUM QUALITY settings...');
    console.log('⚡ Using PNG format for lossless quality and ultra-high resolution');
    
    let pageCount = 0;
    let consecutiveFailures = 0;
    const maxConsecutiveFailures = 3; // Stop after 3 consecutive failures
    
    // Start from page 1 and keep going until we can't find more pages
    for (let pageNum = 1; pageNum <= 200; pageNum++) {
      try {
        // MAXIMUM QUALITY SETTINGS
        const options = {
          format: 'png',              // PNG for lossless quality (no compression artifacts)
          out_dir: outputDir,
          out_prefix: `temp-page-${pageNum}`,
          page: pageNum,              // Specific page number
          scale: 3072,                // ULTRA HIGH RESOLUTION (4K+)
          single_file: true,
          // Additional quality options
          antialias: 'best',          // Best anti-aliasing
          opw: '',                    // Owner password (empty for no password)
          upw: '',                    // User password (empty for no password)
        };

        console.log(`Converting page ${pageNum} with ultra-high quality...`);
        const result = await pdf.convert(pdfPath, options);
        
        // Look for the created file - pdf-poppler creates different naming patterns
        const possibleNames = [
          `temp-page-${pageNum}-1.png`,
          `temp-page-${pageNum}.png`,
          `temp-page-${pageNum}-01.png`,
        ];
        
        let foundFile = null;
        for (const name of possibleNames) {
          const fullPath = path.join(outputDir, name);
          if (fs.existsSync(fullPath)) {
            foundFile = fullPath;
            break;
          }
        }
        
        // Also check for any file created in this iteration
        if (!foundFile) {
          const newFiles = fs.readdirSync(outputDir)
            .filter(f => f.includes(`temp-page-${pageNum}`) && f.endsWith('.png'))
            .map(f => path.join(outputDir, f));
          
          if (newFiles.length > 0) {
            foundFile = newFiles[0];
          }
        }

        if (foundFile && fs.existsSync(foundFile)) {
          // Rename to proper format
          const targetFile = path.join(outputDir, `page-${pageNum}.png`);
          fs.renameSync(foundFile, targetFile);
          
          // Check file size to confirm quality
          const stats = fs.statSync(targetFile);
          const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
          
          console.log(`✅ Saved: page-${pageNum}.png (${fileSizeMB} MB - Ultra High Quality)`);
          pageCount++;
          consecutiveFailures = 0; // Reset failure counter
        } else {
          console.log(`❌ Could not find converted file for page ${pageNum}`);
          consecutiveFailures++;
          
          if (consecutiveFailures >= maxConsecutiveFailures) {
            console.log(`Stopping after ${maxConsecutiveFailures} consecutive failures`);
            break;
          }
        }
        
        // Small delay to prevent overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 1000)); // Longer delay for high-quality processing
        
      } catch (pageError) {
        console.log(`❌ Failed to convert page ${pageNum}: ${pageError.message}`);
        consecutiveFailures++;
        
        if (consecutiveFailures >= maxConsecutiveFailures) {
          console.log(`Stopping after ${maxConsecutiveFailures} consecutive failures`);
          break;
        }
      }
    }

    // Clean up any remaining temp files
    const remainingTempFiles = fs.readdirSync(outputDir)
      .filter(f => f.startsWith('temp-page-'));
    
    remainingTempFiles.forEach(file => {
      try {
        fs.unlinkSync(path.join(outputDir, file));
      } catch (e) {
        // Ignore cleanup errors
      }
    });

    if (pageCount > 0) {
      console.log(`\n🎉 SUCCESS! Extracted ${pageCount} pages with MAXIMUM QUALITY!`);
      console.log(`📁 Files saved to: ${outputDir}`);
      
      // List all created files with their sizes
      const finalFiles = fs.readdirSync(outputDir)
        .filter(f => f.startsWith('page-') && f.endsWith('.png'))
        .sort((a, b) => {
          const aNum = parseInt(a.match(/page-(\d+)/)?.[1] || '0');
          const bNum = parseInt(b.match(/page-(\d+)/)?.[1] || '0');
          return aNum - bNum;
        });
      
      console.log('\n📄 Created high-quality files:');
      let totalSize = 0;
      finalFiles.forEach(file => {
        const filePath = path.join(outputDir, file);
        const stats = fs.statSync(filePath);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        totalSize += stats.size;
        console.log(`   ${file} (${fileSizeMB} MB)`);
      });
      
      const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
      console.log(`\n📊 Total size: ${totalSizeMB} MB`);
      console.log('🎨 Format: PNG (Lossless quality)');
      console.log('📐 Resolution: Ultra-high (4096px scale)');
      
      return pageCount;
    } else {
      console.log('\n❌ No pages were successfully extracted');
      console.log('\n💡 Troubleshooting tips:');
      console.log('1. Make sure the PDF is not password protected');
      console.log('2. Try with a different PDF to test');
      console.log('3. Check if poppler-utils is properly installed');
      return 0;
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n💡 Make sure you have the required dependencies:');
    console.log('   npm install pdf-poppler');
    return 0;
  }
}

// Command line usage
if (require.main === module) {
  const pdfPath = process.argv[2];
  
  if (!pdfPath) {
    console.log('Usage: node scripts/extract-pdf-robust.js <path-to-pdf>');
    console.log('Example: node scripts/extract-pdf-robust.js public/pdf.pdf');
    console.log('\n🎨 This script extracts with MAXIMUM QUALITY:');
    console.log('   • PNG format (lossless)');
    console.log('   • 4096px scale (ultra-high resolution)');
    console.log('   • Best anti-aliasing');
    process.exit(1);
  }

  if (!fs.existsSync(pdfPath)) {
    console.log(`❌ PDF file not found: ${pdfPath}`);
    console.log('Make sure the file path is correct and the file exists.');
    process.exit(1);
  }

  extractPdfPages(pdfPath);
} 
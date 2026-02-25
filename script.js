// ============================================
// ULTRA-LIGHTWEIGHT SCRIPT - ZERO LAG
// ============================================

// GitHub Configuration
const GITHUB_USER = '12kkot';  // Replace with your GitHub username
const GITHUB_REPO = 'NEXE';  // Replace with your repo name
const FILE_NAME = 'NEXE.External';  // Asset filename (must match release asset)

// GitHub Latest Release Download URL
const DOWNLOAD_URL = `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/latest/download/${FILE_NAME}`;

// Download Handler - Simple and Fast
function initiateDownload() {
    const btn = event.target;
    const originalText = btn.innerHTML;
    
    // Prevent double-click
    if (btn.disabled) return;
    btn.disabled = true;
    
    // Update button text
    btn.innerHTML = 'DOWNLOADING...';
    
    // Start download
    setTimeout(() => {
        // Create download link
        const link = document.createElement('a');
        link.href = DOWNLOAD_URL;
        link.download = FILE_NAME;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Success state
        btn.innerHTML = 'DOWNLOAD STARTED ✓';
        
        // Reset after 2 seconds
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);
    }, 500);
}

// That's it - no unnecessary code, no bloat

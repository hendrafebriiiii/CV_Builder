// Export to PDF function
async function exportToPDF() {
    // Check if html2pdf library is loaded, if not load it
    if (typeof html2pdf === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        script.onload = function() {
            generatePDF();
        };
        document.head.appendChild(script);
    } else {
        generatePDF();
    }
}

function generatePDF() {
    const element = document.createElement('div');
    element.style.padding = '20px';
    element.style.fontFamily = '"Arial", sans-serif';
    element.style.lineHeight = '1.4';
    element.style.backgroundColor = 'white';
    element.style.color = '#1e293b';
    element.style.maxWidth = '210mm';
    element.style.margin = '0 auto';
    
    // Build the CV HTML for PDF
    let cvHTML = '';
    
    // Header with name and contact
    cvHTML += `
        <div style="text-align: center; margin-bottom: 15px; border-bottom: 2px solid #000; padding-bottom: 10px;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">${cvData.personal.fullName || 'Nama Anda'}</h1>
            <p style="margin: 5px 0 0 0; font-size: 11px; color: #333;">
                ${[
                    cvData.personal.location,
                    cvData.personal.phone,
                    cvData.personal.email,
                    cvData.personal.linkedinUsername ? `LinkedIn: <a href="${escapeHtml(cvData.personal.linkedinUrl || '#')}" style="color: #0066cc; text-decoration: none;">${escapeHtml(cvData.personal.linkedinUsername)}</a>` : ''
                ].filter(x => x).join(' | ')}
            </p>
        </div>
    `;

    // Summary
    if (cvData.personal.summary) {
        cvHTML += `
            <div style="margin-bottom: 12px; font-size: 11px; text-align: justify;">
                ${escapeHtml(cvData.personal.summary)}
            </div>
        `;
    }

    // Education
    if (cvData.education.length > 0) {
        cvHTML += '<div style="margin-bottom: 12px;">';
        cvHTML += '<h2 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; border-bottom: 1px solid #000; padding-bottom: 3px;">Pendidikan</h2>';
        cvData.education.forEach(edu => {
            cvHTML += `
                <div style="margin-bottom: 8px; font-size: 11px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                        <strong>${escapeHtml(edu.university || '')}</strong>
                        <span>${edu.startDate} – ${edu.endDate}</span>
                    </div>
                    <div style="color: #555; margin-bottom: 2px;">
                        ${escapeHtml(edu.degree || '')} ${escapeHtml(edu.field || '')}
                    </div>
                    ${edu.gpa ? `<div style="color: #555;">IPK: ${escapeHtml(edu.gpa)}</div>` : ''}
                </div>
            `;
        });
        cvHTML += '</div>';
    }

    // Experience
    if (cvData.experience.length > 0) {
        cvHTML += '<div style="margin-bottom: 12px;">';
        cvHTML += '<h2 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; border-bottom: 1px solid #000; padding-bottom: 3px;">Pengalaman</h2>';
        cvData.experience.forEach((exp, index) => {
            cvHTML += `
                <div style="margin-bottom: 8px; font-size: 11px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                        <strong>${index + 1}. ${escapeHtml(exp.position || '')}</strong>
                        <span>${exp.startDate} - ${exp.endDate}</span>
                    </div>
                    <div style="color: #555; font-style: italic; margin-bottom: 4px;">
                        ${escapeHtml(exp.company || '')}
                    </div>
            `;
            
            if (exp.description) {
                const bullets = exp.description.split('\n').filter(line => line.trim());
                if (bullets.length > 0) {
                    cvHTML += '<ul style="margin: 3px 0; padding-left: 20px;">';
                    bullets.forEach(bullet => {
                        let cleanBullet = bullet.trim();
                        if (cleanBullet.startsWith('•')) {
                            cleanBullet = cleanBullet.substring(1).trim();
                        }
                        cvHTML += `<li style="margin-bottom: 2px;">${escapeHtml(cleanBullet)}</li>`;
                    });
                    cvHTML += '</ul>';
                }
            }
            cvHTML += '</div>';
        });
        cvHTML += '</div>';
    }

    // Training
    if (cvData.training.length > 0) {
        cvHTML += '<div style="margin-bottom: 12px;">';
        cvHTML += '<h2 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; border-bottom: 1px solid #000; padding-bottom: 3px;">Pelatihan</h2>';
        cvData.training.forEach((train, index) => {
            cvHTML += `
                <div style="margin-bottom: 8px; font-size: 11px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                        <strong>${index + 1}. ${escapeHtml(train.title || '')}</strong>
                        <span>${train.startDate} – ${train.endDate}</span>
                    </div>
                    <div style="color: #555; font-style: italic; margin-bottom: 4px;">
                        ${escapeHtml(train.institution || '')}
                    </div>
            `;
            
            if (train.description) {
                const bullets = train.description.split('\n').filter(line => line.trim());
                if (bullets.length > 0) {
                    cvHTML += '<ul style="margin: 3px 0; padding-left: 20px;">';
                    bullets.forEach(bullet => {
                        let cleanBullet = bullet.trim();
                        if (cleanBullet.startsWith('•')) {
                            cleanBullet = cleanBullet.substring(1).trim();
                        }
                        cvHTML += `<li style="margin-bottom: 2px;">${escapeHtml(cleanBullet)}</li>`;
                    });
                    cvHTML += '</ul>';
                }
            }
            cvHTML += '</div>';
        });
        cvHTML += '</div>';
    }

    // Certificates
    if (cvData.certificates.length > 0) {
        cvHTML += '<div style="margin-bottom: 12px;">';
        cvHTML += '<h2 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; border-bottom: 1px solid #000; padding-bottom: 3px;">Sertifikat</h2>';
        cvData.certificates.forEach((cert, index) => {
            cvHTML += `
                <div style="margin-bottom: 8px; font-size: 11px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                        <strong>${index + 1}. ${escapeHtml(cert.title || '')}</strong>
                        <span>${cert.issueDate}${cert.expiryDate ? ' - ' + cert.expiryDate : ''}</span>
                    </div>
                    <div style="color: #555;">
                        ${escapeHtml(cert.issuer || '')}
                        ${cert.credentialUrl ? ` - <a href="${escapeHtml(cert.credentialUrl)}" style="color: #0066cc; text-decoration: none;">${escapeHtml(cert.credentialUrl)}</a>` : ''}
                    </div>
                </div>
            `;
        });
        cvHTML += '</div>';
    }

    // Projects
    if (cvData.projects.length > 0) {
        cvHTML += '<div style="margin-bottom: 12px;">';
        cvHTML += '<h2 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; border-bottom: 1px solid #000; padding-bottom: 3px;">Proyek Teknis</h2>';
        cvData.projects.forEach((proj, index) => {
            cvHTML += `
                <div style="margin-bottom: 8px; font-size: 11px;">
                    <strong>${index + 1}. ${escapeHtml(proj.title || '')}</strong>
            `;
            
            if (proj.technologies) {
                cvHTML += `<div style="color: #555; margin-bottom: 2px;">${escapeHtml(proj.technologies)}</div>`;
            }
            
            if (proj.description) {
                const bullets = proj.description.split('\n').filter(line => line.trim());
                if (bullets.length > 0) {
                    cvHTML += '<ul style="margin: 3px 0; padding-left: 20px;">';
                    bullets.forEach(bullet => {
                        let cleanBullet = bullet.trim();
                        if (cleanBullet.startsWith('•')) {
                            cleanBullet = cleanBullet.substring(1).trim();
                        }
                        cvHTML += `<li style="margin-bottom: 2px;">${escapeHtml(cleanBullet)}</li>`;
                    });
                    cvHTML += '</ul>';
                }
            }
            cvHTML += '</div>';
        });
        cvHTML += '</div>';
    }

    // Volunteer
    if (cvData.volunteer.length > 0) {
        cvHTML += '<div style="margin-bottom: 12px;">';
        cvHTML += '<h2 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; border-bottom: 1px solid #000; padding-bottom: 3px;">Volunteer</h2>';
        cvData.volunteer.forEach((vol, index) => {
            cvHTML += `
                <div style="margin-bottom: 8px; font-size: 11px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                        <strong>${index + 1}. ${escapeHtml(vol.position || '')}</strong>
                        <span>${vol.startDate} – ${vol.endDate}</span>
                    </div>
                    <div style="color: #555; font-style: italic; margin-bottom: 4px;">
                        ${escapeHtml(vol.organization || '')}
                    </div>
            `;
            
            if (vol.description) {
                const bullets = vol.description.split('\n').filter(line => line.trim());
                if (bullets.length > 0) {
                    cvHTML += '<ul style="margin: 3px 0; padding-left: 20px;">';
                    bullets.forEach(bullet => {
                        let cleanBullet = bullet.trim();
                        if (cleanBullet.startsWith('•')) {
                            cleanBullet = cleanBullet.substring(1).trim();
                        }
                        cvHTML += `<li style="margin-bottom: 2px;">${escapeHtml(cleanBullet)}</li>`;
                    });
                    cvHTML += '</ul>';
                }
            }
            cvHTML += '</div>';
        });
        cvHTML += '</div>';
    }

    // Languages
    if (cvData.languages.length > 0) {
        cvHTML += '<div style="margin-bottom: 12px;">';
        cvHTML += '<h2 style="font-size: 13px; font-weight: bold; margin: 0 0 8px 0; border-bottom: 1px solid #000; padding-bottom: 3px;">Bahasa</h2>';
        cvHTML += '<ul style="margin: 5px 0; padding-left: 20px; font-size: 11px;">';
        cvData.languages.forEach(lang => {
            cvHTML += `<li style="margin-bottom: 3px;"><strong>${escapeHtml(lang.language || '')}</strong> – ${escapeHtml(lang.proficiency || '')}</li>`;
        });
        cvHTML += '</ul></div>';
    }

    element.innerHTML = cvHTML;

    // Generate PDF
    const options = {
        margin: [10, 10, 10, 10],
        filename: `${cvData.personal.fullName.replace(/\s+/g, '_') || 'CV'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
}

// Helper function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

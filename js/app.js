// Data structure
let cvData = {
    personal: {
        fullName: '',
        location: '',
        phone: '',
        email: '',
        linkedinUsername: '',
        linkedinUrl: '',
        summary: ''
    },
    education: [],
    experience: [],
    training: [],
    certificates: [],
    projects: [],
    skills: [],
    volunteer: [],
    languages: []
};

const STORAGE_KEY = 'cvBuilderData';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    attachEventListeners();
    initPreviewResize();
    updatePreview();
});

// Load data from localStorage
function loadData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        cvData = JSON.parse(savedData);
        populatePersonalForm();
        renderEducation();
        renderExperience();
        renderTraining();
        renderCertificates();
        renderProjects();
        renderSkills();
        renderVolunteer();
        renderLanguages();
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cvData));
    updatePreview();
}

// Attach event listeners to personal form
function attachEventListeners() {
    const personalInputs = ['fullName', 'location', 'phone', 'email', 'linkedinUsername', 'linkedinUrl', 'summary'];
    personalInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', updatePersonalData);
            element.addEventListener('keyup', () => {
                updatePersonalData();
                updatePreview();
            });
        }
    });
}

// Update personal data
function updatePersonalData() {
    const personalInputs = ['fullName', 'location', 'phone', 'email', 'linkedinUsername', 'linkedinUrl', 'summary'];
    personalInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            cvData.personal[id] = element.value;
        }
    });
    saveData();
}

// Populate personal form
function populatePersonalForm() {
    Object.keys(cvData.personal).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.value = cvData.personal[key];
        }
    });
}

// Tab switching
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Update nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
}

// EDUCATION FUNCTIONS
function addEducation() {
    const newEducation = {
        id: Date.now(),
        university: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: ''
    };
    cvData.education.push(newEducation);
    openModal('education', newEducation);
}

function renderEducation() {
    const list = document.getElementById('educationList');
    list.innerHTML = '';

    if (cvData.education.length === 0) {
        list.innerHTML = '<p class="empty-state">Belum ada data pendidikan. Klik tombol di bawah untuk menambah.</p>';
        return;
    }

    cvData.education.forEach(edu => {
        const item = createListItem(
            edu.university || 'Universitas Belum Diisi',
            `${edu.degree || ''} ${edu.field || ''}`,
            `${edu.startDate} - ${edu.endDate}`,
            edu.id,
            'education'
        );
        list.appendChild(item);
    });
}

function editEducation(id) {
    const edu = cvData.education.find(e => e.id === id);
    if (edu) {
        openModal('education', edu);
    }
}

function deleteEducation(id) {
    cvData.education = cvData.education.filter(e => e.id !== id);
    saveData();
    renderEducation();
}

function saveEducation(id, data) {
    const index = cvData.education.findIndex(e => e.id === id);
    if (index !== -1) {
        cvData.education[index] = { ...cvData.education[index], ...data };
    }
    saveData();
    renderEducation();
}

// EXPERIENCE FUNCTIONS
function addExperience() {
    const newExperience = {
        id: Date.now(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    };
    cvData.experience.push(newExperience);
    openModal('experience', newExperience);
}

function renderExperience() {
    const list = document.getElementById('experienceList');
    list.innerHTML = '';

    if (cvData.experience.length === 0) {
        list.innerHTML = '<p class="empty-state">Belum ada data pengalaman. Klik tombol di bawah untuk menambah.</p>';
        return;
    }

    cvData.experience.forEach(exp => {
        const item = createListItem(
            exp.position || 'Posisi Belum Diisi',
            exp.company || '',
            `${exp.startDate} - ${exp.endDate}`,
            exp.id,
            'experience'
        );
        list.appendChild(item);
    });
}

function editExperience(id) {
    const exp = cvData.experience.find(e => e.id === id);
    if (exp) {
        openModal('experience', exp);
    }
}

function deleteExperience(id) {
    cvData.experience = cvData.experience.filter(e => e.id !== id);
    saveData();
    renderExperience();
}

function saveExperience(id, data) {
    const index = cvData.experience.findIndex(e => e.id === id);
    if (index !== -1) {
        cvData.experience[index] = { ...cvData.experience[index], ...data };
    }
    saveData();
    renderExperience();
}

// TRAINING FUNCTIONS
function addTraining() {
    const newTraining = {
        id: Date.now(),
        title: '',
        institution: '',
        startDate: '',
        endDate: '',
        description: ''
    };
    cvData.training.push(newTraining);
    openModal('training', newTraining);
}

function renderTraining() {
    const list = document.getElementById('trainingList');
    list.innerHTML = '';

    if (cvData.training.length === 0) {
        list.innerHTML = '<p class="empty-state">Belum ada data pelatihan. Klik tombol di bawah untuk menambah.</p>';
        return;
    }

    cvData.training.forEach(train => {
        const item = createListItem(
            train.title || 'Pelatihan Belum Diisi',
            train.institution || '',
            `${train.startDate} - ${train.endDate}`,
            train.id,
            'training'
        );
        list.appendChild(item);
    });
}

function editTraining(id) {
    const train = cvData.training.find(t => t.id === id);
    if (train) {
        openModal('training', train);
    }
}

function deleteTraining(id) {
    cvData.training = cvData.training.filter(t => t.id !== id);
    saveData();
    renderTraining();
}

function saveTraining(id, data) {
    const index = cvData.training.findIndex(t => t.id === id);
    if (index !== -1) {
        cvData.training[index] = { ...cvData.training[index], ...data };
    }
    saveData();
    renderTraining();
}

// CERTIFICATE FUNCTIONS
function addCertificate() {
    const newCertificate = {
        id: Date.now(),
        title: '',
        issuer: '',
        issueDate: '',
        expiryDate: '',
        credentialUrl: ''
    };
    cvData.certificates.push(newCertificate);
    openModal('certificate', newCertificate);
}

function renderCertificates() {
    const list = document.getElementById('certificateList');
    list.innerHTML = '';

    if (cvData.certificates.length === 0) {
        list.innerHTML = '<p class="empty-state">Belum ada data sertifikat. Klik tombol di bawah untuk menambah.</p>';
        return;
    }

    cvData.certificates.forEach(cert => {
        const item = createListItem(
            cert.title || 'Sertifikat Belum Diisi',
            cert.issuer || '',
            cert.issueDate || '',
            cert.id,
            'certificate'
        );
        list.appendChild(item);
    });
}

function editCertificate(id) {
    const cert = cvData.certificates.find(c => c.id === id);
    if (cert) {
        openModal('certificate', cert);
    }
}

function deleteCertificate(id) {
    cvData.certificates = cvData.certificates.filter(c => c.id !== id);
    saveData();
    renderCertificates();
}

function saveCertificate(id, data) {
    const index = cvData.certificates.findIndex(c => c.id === id);
    if (index !== -1) {
        cvData.certificates[index] = { ...cvData.certificates[index], ...data };
    }
    saveData();
    renderCertificates();
}

// PROJECT FUNCTIONS
function addProject() {
    const newProject = {
        id: Date.now(),
        title: '',
        description: '',
        technologies: ''
    };
    cvData.projects.push(newProject);
    openModal('projects', newProject);
}

function renderProjects() {
    const list = document.getElementById('projectsList');
    list.innerHTML = '';

    if (cvData.projects.length === 0) {
        list.innerHTML = '<p class="empty-state">Belum ada data proyek. Klik tombol di bawah untuk menambah.</p>';
        return;
    }

    cvData.projects.forEach(proj => {
        const item = createListItem(
            proj.title || 'Proyek Belum Diisi',
            proj.technologies || '',
            '',
            proj.id,
            'projects'
        );
        list.appendChild(item);
    });
}

function editProject(id) {
    const proj = cvData.projects.find(p => p.id === id);
    if (proj) {
        openModal('projects', proj);
    }
}

function deleteProject(id) {
    cvData.projects = cvData.projects.filter(p => p.id !== id);
    saveData();
    renderProjects();
}

function saveProject(id, data) {
    const index = cvData.projects.findIndex(p => p.id === id);
    if (index !== -1) {
        cvData.projects[index] = { ...cvData.projects[index], ...data };
    }
    saveData();
    renderProjects();
}

// SKILLS FUNCTIONS
function addSkill() {
    const newSkill = {
        id: Date.now(),
        skillName: '',
        proficiency: ''
    };
    cvData.skills.push(newSkill);
    openModal('skills', newSkill);
}

function renderSkills() {
    const list = document.getElementById('skillsList');
    list.innerHTML = '';

    if (cvData.skills.length === 0) {
        list.innerHTML = '<p class="empty-state">Belum ada data keahlian. Klik tombol di bawah untuk menambah.</p>';
        return;
    }

    cvData.skills.forEach(skill => {
        const item = createListItem(
            skill.skillName || 'Keahlian Belum Diisi',
            skill.proficiency || '',
            '',
            skill.id,
            'skills'
        );
        list.appendChild(item);
    });
}

function editSkill(id) {
    const skill = cvData.skills.find(s => s.id === id);
    if (skill) {
        openModal('skills', skill);
    }
}

function deleteSkill(id) {
    cvData.skills = cvData.skills.filter(s => s.id !== id);
    saveData();
    renderSkills();
}

function saveSkill(id, data) {
    const index = cvData.skills.findIndex(s => s.id === id);
    if (index !== -1) {
        cvData.skills[index] = { ...cvData.skills[index], ...data };
    }
    saveData();
    renderSkills();
}

// VOLUNTEER FUNCTIONS
function addVolunteer() {
    const newVolunteer = {
        id: Date.now(),
        organization: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    };
    cvData.volunteer.push(newVolunteer);
    openModal('volunteer', newVolunteer);
}

function renderVolunteer() {
    const list = document.getElementById('volunteerList');
    list.innerHTML = '';

    if (cvData.volunteer.length === 0) {
        list.innerHTML = '<p class="empty-state">Belum ada data volunteer. Klik tombol di bawah untuk menambah.</p>';
        return;
    }

    cvData.volunteer.forEach(vol => {
        const item = createListItem(
            vol.position || 'Posisi Belum Diisi',
            vol.organization || '',
            `${vol.startDate} - ${vol.endDate}`,
            vol.id,
            'volunteer'
        );
        list.appendChild(item);
    });
}

function editVolunteer(id) {
    const vol = cvData.volunteer.find(v => v.id === id);
    if (vol) {
        openModal('volunteer', vol);
    }
}

function deleteVolunteer(id) {
    cvData.volunteer = cvData.volunteer.filter(v => v.id !== id);
    saveData();
    renderVolunteer();
}

function saveVolunteer(id, data) {
    const index = cvData.volunteer.findIndex(v => v.id === id);
    if (index !== -1) {
        cvData.volunteer[index] = { ...cvData.volunteer[index], ...data };
    }
    saveData();
    renderVolunteer();
}

// LANGUAGE FUNCTIONS
function addLanguage() {
    const newLanguage = {
        id: Date.now(),
        language: '',
        proficiency: ''
    };
    cvData.languages.push(newLanguage);
    openModal('languages', newLanguage);
}

function renderLanguages() {
    const list = document.getElementById('languagesList');
    list.innerHTML = '';

    if (cvData.languages.length === 0) {
        list.innerHTML = '<p class="empty-state">Belum ada data bahasa. Klik tombol di bawah untuk menambah.</p>';
        return;
    }

    cvData.languages.forEach(lang => {
        const item = createListItem(
            lang.language || 'Bahasa Belum Diisi',
            lang.proficiency || '',
            '',
            lang.id,
            'languages'
        );
        list.appendChild(item);
    });
}

function editLanguage(id) {
    const lang = cvData.languages.find(l => l.id === id);
    if (lang) {
        openModal('languages', lang);
    }
}

function deleteLanguage(id) {
    cvData.languages = cvData.languages.filter(l => l.id !== id);
    saveData();
    renderLanguages();
}

function saveLanguage(id, data) {
    const index = cvData.languages.findIndex(l => l.id === id);
    if (index !== -1) {
        cvData.languages[index] = { ...cvData.languages[index], ...data };
    }
    saveData();
    renderLanguages();
}

// Helper function to convert type to singular form
function getEditDeletePrefix(type) {
    const mapping = {
        'education': 'Education',
        'experience': 'Experience',
        'training': 'Training',
        'certificate': 'Certificate',
        'projects': 'Project',
        'volunteer': 'Volunteer',
        'languages': 'Language'
    };
    return mapping[type] || capitalize(type.slice(0, -1));
}

// Helper function to create list items
function createListItem(title, subtitle, date, id, type) {
    const item = document.createElement('div');
    item.className = 'list-item';
    const prefix = getEditDeletePrefix(type);
    item.innerHTML = `
        <div class="list-item-content">
            <h4>${title}</h4>
            ${subtitle ? `<p class="list-item-company">${subtitle}</p>` : ''}
            ${date ? `<p class="list-item-company">${date}</p>` : ''}
        </div>
        <div class="list-item-actions">
            <button onclick="edit${prefix}(${id})" class="btn btn-edit">Edit</button>
            <button onclick="delete${prefix}(${id})" class="btn btn-remove">Hapus</button>
        </div>
    `;
    return item;
}

// Modal management
function openModal(type, data) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let formHTML = getFormHTML(type, data);
    modalBody.innerHTML = formHTML;
    
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

function getFormHTML(type, data) {
    let html = '';

    switch(type) {
        case 'education':
            html = `
                <h3>Edit Pendidikan</h3>
                <form class="modal-form-group">
                    <div class="modal-form-group">
                        <label>Universitas</label>
                        <input type="text" id="modalUniversity" value="${data.university || ''}" placeholder="Nama universitas">
                    </div>
                    <div class="modal-form-row">
                        <div class="modal-form-group">
                            <label>Gelar (e.g. S1, S2)</label>
                            <input type="text" id="modalDegree" value="${data.degree || ''}" placeholder="Contoh: S1">
                        </div>
                        <div class="modal-form-group">
                            <label>Program Studi</label>
                            <input type="text" id="modalField" value="${data.field || ''}" placeholder="Contoh: Informatika">
                        </div>
                    </div>
                    <div class="modal-form-row">
                        <div class="modal-form-group">
                            <label>Tanggal Mulai</label>
                            <input type="text" id="modalStartDate" value="${data.startDate || ''}" placeholder="Contoh: Sep 2017">
                        </div>
                        <div class="modal-form-group">
                            <label>Tanggal Selesai</label>
                            <input type="text" id="modalEndDate" value="${data.endDate || ''}" placeholder="Contoh: Sep 2022">
                        </div>
                    </div>
                    <div class="modal-form-group">
                        <label>IPK</label>
                        <input type="text" id="modalGPA" value="${data.gpa || ''}" placeholder="Contoh: 3.40">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Batal</button>
                        <button type="button" class="btn-save" onclick="saveEducationModal(${data.id})">Simpan</button>
                    </div>
                </form>
            `;
            break;

        case 'experience':
            html = `
                <h3>Edit Pengalaman Kerja</h3>
                <form class="modal-form-group">
                    <div class="modal-form-group">
                        <label>Perusahaan</label>
                        <input type="text" id="modalCompany" value="${data.company || ''}" placeholder="Nama perusahaan">
                    </div>
                    <div class="modal-form-group">
                        <label>Posisi</label>
                        <input type="text" id="modalPosition" value="${data.position || ''}" placeholder="Posisi/Jabatan">
                    </div>
                    <div class="modal-form-row">
                        <div class="modal-form-group">
                            <label>Tanggal Mulai</label>
                            <input type="text" id="modalStartDate" value="${data.startDate || ''}" placeholder="Contoh: Jun 2025">
                        </div>
                        <div class="modal-form-group">
                            <label>Tanggal Selesai</label>
                            <input type="text" id="modalEndDate" value="${data.endDate || ''}" placeholder="Contoh: April 2026">
                        </div>
                    </div>
                    <div class="modal-form-group">
                        <label>Deskripsi Tugas (Gunakan • untuk poin)</label>
                        <textarea id="modalDescription" placeholder="Tuliskan tugas dan tanggung jawab Anda">${data.description || ''}</textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Batal</button>
                        <button type="button" class="btn-save" onclick="saveExperienceModal(${data.id})">Simpan</button>
                    </div>
                </form>
            `;
            break;

        case 'training':
            html = `
                <h3>Edit Pelatihan</h3>
                <form class="modal-form-group">
                    <div class="modal-form-group">
                        <label>Judul Pelatihan</label>
                        <input type="text" id="modalTitle" value="${data.title || ''}" placeholder="Judul pelatihan">
                    </div>
                    <div class="modal-form-group">
                        <label>Institusi</label>
                        <input type="text" id="modalInstitution" value="${data.institution || ''}" placeholder="Nama institusi">
                    </div>
                    <div class="modal-form-row">
                        <div class="modal-form-group">
                            <label>Tanggal Mulai</label>
                            <input type="text" id="modalStartDate" value="${data.startDate || ''}" placeholder="Contoh: Sep 2024">
                        </div>
                        <div class="modal-form-group">
                            <label>Tanggal Selesai</label>
                            <input type="text" id="modalEndDate" value="${data.endDate || ''}" placeholder="Contoh: Nov 2024">
                        </div>
                    </div>
                    <div class="modal-form-group">
                        <label>Deskripsi (Gunakan • untuk poin)</label>
                        <textarea id="modalDescription" placeholder="Deskripsi pelatihan">${data.description || ''}</textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Batal</button>
                        <button type="button" class="btn-save" onclick="saveTrainingModal(${data.id})">Simpan</button>
                    </div>
                </form>
            `;
            break;

        case 'certificate':
            html = `
                <h3>Edit Sertifikat</h3>
                <form class="modal-form-group">
                    <div class="modal-form-group">
                        <label>Judul Sertifikat</label>
                        <input type="text" id="modalTitle" value="${data.title || ''}" placeholder="Judul sertifikat">
                    </div>
                    <div class="modal-form-group">
                        <label>Penerbit</label>
                        <input type="text" id="modalIssuer" value="${data.issuer || ''}" placeholder="Organisasi penerbit">
                    </div>
                    <div class="modal-form-row">
                        <div class="modal-form-group">
                            <label>Tanggal Penerbitan</label>
                            <input type="text" id="modalIssueDate" value="${data.issueDate || ''}" placeholder="Contoh: Nov 2025">
                        </div>
                        <div class="modal-form-group">
                            <label>Tanggal Kadaluarsa</label>
                            <input type="text" id="modalExpiryDate" value="${data.expiryDate || ''}" placeholder="Kosongkan jika tidak ada">
                        </div>
                    </div>
                    <div class="modal-form-group">
                        <label>URL Kredensial</label>
                        <input type="url" id="modalCredentialUrl" value="${data.credentialUrl || ''}" placeholder="https://...">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Batal</button>
                        <button type="button" class="btn-save" onclick="saveCertificateModal(${data.id})">Simpan</button>
                    </div>
                </form>
            `;
            break;

        case 'projects':
            html = `
                <h3>Edit Proyek Teknis</h3>
                <form class="modal-form-group">
                    <div class="modal-form-group">
                        <label>Judul Proyek</label>
                        <input type="text" id="modalTitle" value="${data.title || ''}" placeholder="Judul proyek">
                    </div>
                    <div class="modal-form-group">
                        <label>Deskripsi (Gunakan • untuk poin)</label>
                        <textarea id="modalDescription" placeholder="Deskripsi proyek">${data.description || ''}</textarea>
                    </div>
                    <div class="modal-form-group">
                        <label>Teknologi</label>
                        <input type="text" id="modalTechnologies" value="${data.technologies || ''}" placeholder="Contoh: PHP, HTML, CSS">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Batal</button>
                        <button type="button" class="btn-save" onclick="saveProjectModal(${data.id})">Simpan</button>
                    </div>
                </form>
            `;
            break;

        case 'skills':
            html = `
                <h3>Edit Keahlian</h3>
                <form class="modal-form-group">
                    <div class="modal-form-group">
                        <label>Nama Keahlian</label>
                        <input type="text" id="modalSkillName" value="${data.skillName || ''}" placeholder="Contoh: JavaScript, Python, Project Management">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Batal</button>
                        <button type="button" class="btn-save" onclick="saveSkillModal(${data.id})">Simpan</button>
                    </div>
                </form>
            `;
            break;

        case 'volunteer':
            html = `
                <h3>Edit Volunteer</h3>
                <form class="modal-form-group">
                    <div class="modal-form-group">
                        <label>Organisasi</label>
                        <input type="text" id="modalOrganization" value="${data.organization || ''}" placeholder="Nama organisasi">
                    </div>
                    <div class="modal-form-group">
                        <label>Posisi</label>
                        <input type="text" id="modalPosition" value="${data.position || ''}" placeholder="Posisi/Peran">
                    </div>
                    <div class="modal-form-row">
                        <div class="modal-form-group">
                            <label>Tanggal Mulai</label>
                            <input type="text" id="modalStartDate" value="${data.startDate || ''}" placeholder="Contoh: May 2019">
                        </div>
                        <div class="modal-form-group">
                            <label>Tanggal Selesai</label>
                            <input type="text" id="modalEndDate" value="${data.endDate || ''}" placeholder="Contoh: Jun 2019">
                        </div>
                    </div>
                    <div class="modal-form-group">
                        <label>Deskripsi (Gunakan • untuk poin)</label>
                        <textarea id="modalDescription" placeholder="Deskripsi kegiatan">${data.description || ''}</textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Batal</button>
                        <button type="button" class="btn-save" onclick="saveVolunteerModal(${data.id})">Simpan</button>
                    </div>
                </form>
            `;
            break;

        case 'languages':
            html = `
                <h3>Edit Bahasa</h3>
                <form class="modal-form-group">
                    <div class="modal-form-group">
                        <label>Bahasa</label>
                        <input type="text" id="modalLanguage" value="${data.language || ''}" placeholder="Nama bahasa">
                    </div>
                    <div class="modal-form-group">
                        <label>Tingkat Kemampuan</label>
                        <select id="modalProficiency">
                            <option value="">Pilih Tingkat</option>
                            <option value="Native Proficiency" ${data.proficiency === 'Native Proficiency' ? 'selected' : ''}>Native Proficiency</option>
                            <option value="Fluent" ${data.proficiency === 'Fluent' ? 'selected' : ''}>Fluent</option>
                            <option value="Professional Working" ${data.proficiency === 'Professional Working' ? 'selected' : ''}>Professional Working</option>
                            <option value="Intermediate" ${data.proficiency === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
                            <option value="Basic Proficiency" ${data.proficiency === 'Basic Proficiency' ? 'selected' : ''}>Basic Proficiency</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancel" onclick="closeModal()">Batal</button>
                        <button type="button" class="btn-save" onclick="saveLanguageModal(${data.id})">Simpan</button>
                    </div>
                </form>
            `;
            break;
    }

    return html;
}

// Save modal functions
function saveEducationModal(id) {
    const data = {
        id: id,
        university: document.getElementById('modalUniversity').value,
        degree: document.getElementById('modalDegree').value,
        field: document.getElementById('modalField').value,
        startDate: document.getElementById('modalStartDate').value,
        endDate: document.getElementById('modalEndDate').value,
        gpa: document.getElementById('modalGPA').value
    };
    saveEducation(id, data);
    closeModal();
}

function saveExperienceModal(id) {
    const data = {
        id: id,
        company: document.getElementById('modalCompany').value,
        position: document.getElementById('modalPosition').value,
        startDate: document.getElementById('modalStartDate').value,
        endDate: document.getElementById('modalEndDate').value,
        description: document.getElementById('modalDescription').value
    };
    saveExperience(id, data);
    closeModal();
}

function saveTrainingModal(id) {
    const data = {
        id: id,
        title: document.getElementById('modalTitle').value,
        institution: document.getElementById('modalInstitution').value,
        startDate: document.getElementById('modalStartDate').value,
        endDate: document.getElementById('modalEndDate').value,
        description: document.getElementById('modalDescription').value
    };
    saveTraining(id, data);
    closeModal();
}

function saveCertificateModal(id) {
    const data = {
        id: id,
        title: document.getElementById('modalTitle').value,
        issuer: document.getElementById('modalIssuer').value,
        issueDate: document.getElementById('modalIssueDate').value,
        expiryDate: document.getElementById('modalExpiryDate').value,
        credentialUrl: document.getElementById('modalCredentialUrl').value
    };
    saveCertificate(id, data);
    closeModal();
}

function saveProjectModal(id) {
    const data = {
        id: id,
        title: document.getElementById('modalTitle').value,
        description: document.getElementById('modalDescription').value,
        technologies: document.getElementById('modalTechnologies').value
    };
    saveProject(id, data);
    closeModal();
}

function saveSkillModal(id) {
    const data = {
        id: id,
        skillName: document.getElementById('modalSkillName').value
    };
    saveSkill(id, data);
    closeModal();
}

function saveVolunteerModal(id) {
    const data = {
        id: id,
        organization: document.getElementById('modalOrganization').value,
        position: document.getElementById('modalPosition').value,
        startDate: document.getElementById('modalStartDate').value,
        endDate: document.getElementById('modalEndDate').value,
        description: document.getElementById('modalDescription').value
    };
    saveVolunteer(id, data);
    closeModal();
}

function saveLanguageModal(id) {
    const data = {
        id: id,
        language: document.getElementById('modalLanguage').value,
        proficiency: document.getElementById('modalProficiency').value
    };
    saveLanguage(id, data);
    closeModal();
}

// Update CV Preview
function updatePreview() {
    const preview = document.getElementById('cvPreview');
    
    let html = `
        <h1>${cvData.personal.fullName || 'Nama Anda'}</h1>
        <div class="preview-contact">
            ${cvData.personal.location ? cvData.personal.location : ''}
            ${cvData.personal.phone ? '| ' + cvData.personal.phone : ''}
            ${cvData.personal.email ? '| ' + cvData.personal.email : ''}
            ${cvData.personal.linkedinUsername ? '| LinkedIn: <a href="' + (cvData.personal.linkedinUrl || '#') + '" style="color: #0066cc; text-decoration: none; cursor: pointer;" target="_blank">' + cvData.personal.linkedinUsername + '</a>' : ''}
        </div>
    `;

    if (cvData.personal.summary) {
        html += `
            <div style="margin: 10px 0; font-size: 0.75rem; color: #64748b;">
                ${cvData.personal.summary}
            </div>
        `;
    }

    // Education
    if (cvData.education.length > 0) {
        html += '<h2>Pendidikan</h2>';
        cvData.education.forEach(edu => {
            html += `
                <div class="item">
                    <span class="item-date">${edu.startDate} – ${edu.endDate}</span>
                    <div class="item-title">${edu.university || ''}</div>
                    <div class="item-company">${edu.degree || ''} ${edu.field || ''}</div>
                    ${edu.gpa ? `<div class="item-company">GPA: ${edu.gpa}</div>` : ''}
                </div>
            `;
        });
    }

    // Experience
    if (cvData.experience.length > 0) {
        html += '<h2>Pengalaman Kerja</h2>';
        cvData.experience.forEach(exp => {
            html += `
                <div class="item">
                    <span class="item-date">${exp.startDate} - ${exp.endDate}</span>
                    <div class="item-title">${exp.position || ''}</div>
                    <div class="item-company">${exp.company || ''}</div>
            `;
            if (exp.description) {
                const bullets = exp.description.split('\n').filter(line => line.trim());
                if (bullets.length > 0) {
                    html += '<ul>';
                    bullets.forEach(bullet => {
                        let cleanBullet = bullet.trim();
                        if (cleanBullet.startsWith('•')) {
                            cleanBullet = cleanBullet.substring(1).trim();
                        }
                        html += `<li>${cleanBullet}</li>`;
                    });
                    html += '</ul>';
                }
            }
            html += '</div>';
        });
    }

    // Training
    if (cvData.training.length > 0) {
        html += '<h2>Pelatihan</h2>';
        cvData.training.forEach(train => {
            html += `
                <div class="item">
                    <span class="item-date">${train.startDate} – ${train.endDate}</span>
                    <div class="item-title">${train.title || ''}</div>
                    <div class="item-company">${train.institution || ''}</div>
            `;
            if (train.description) {
                const bullets = train.description.split('\n').filter(line => line.trim());
                if (bullets.length > 0) {
                    html += '<ul>';
                    bullets.forEach(bullet => {
                        let cleanBullet = bullet.trim();
                        if (cleanBullet.startsWith('•')) {
                            cleanBullet = cleanBullet.substring(1).trim();
                        }
                        html += `<li>${cleanBullet}</li>`;
                    });
                    html += '</ul>';
                }
            }
            html += '</div>';
        });
    }

    // Certificates
    if (cvData.certificates.length > 0) {
        html += '<h2>Sertifikat</h2>';
        cvData.certificates.forEach(cert => {
            html += `
                <div class="item">
                    <span class="item-date">${cert.issueDate}${cert.expiryDate ? ' - ' + cert.expiryDate : ''}</span>
                    <div class="item-title">${cert.title || ''}</div>
                    <div class="item-company">${cert.issuer || ''}</div>
                </div>
            `;
        });
    }

    // Projects
    if (cvData.projects.length > 0) {
        html += '<h2>Proyek Teknis</h2>';
        cvData.projects.forEach(proj => {
            html += `
                <div class="item">
                    <div class="item-title">${proj.title || ''}</div>
                    <div class="item-company">${proj.technologies || ''}</div>
            `;
            if (proj.description) {
                const bullets = proj.description.split('\n').filter(line => line.trim());
                if (bullets.length > 0) {
                    html += '<ul>';
                    bullets.forEach(bullet => {
                        let cleanBullet = bullet.trim();
                        if (cleanBullet.startsWith('•')) {
                            cleanBullet = cleanBullet.substring(1).trim();
                        }
                        html += `<li>${cleanBullet}</li>`;
                    });
                    html += '</ul>';
                }
            }
            html += '</div>';
        });
    }

    // Skills
    if (cvData.skills.length > 0) {
        html += '<h2>Keahlian</h2>';
        html += '<ul>';
        cvData.skills.forEach(skill => {
            html += `<li>${skill.skillName || ''}</li>`;
        });
        html += '</ul>';
    }

    // Volunteer
    if (cvData.volunteer.length > 0) {
        html += '<h2>Volunteer</h2>';
        cvData.volunteer.forEach(vol => {
            html += `
                <div class="item">
                    <span class="item-date">${vol.startDate} – ${vol.endDate}</span>
                    <div class="item-title">${vol.position || ''}</div>
                    <div class="item-company">${vol.organization || ''}</div>
            `;
            if (vol.description) {
                const bullets = vol.description.split('\n').filter(line => line.trim());
                if (bullets.length > 0) {
                    html += '<ul>';
                    bullets.forEach(bullet => {
                        let cleanBullet = bullet.trim();
                        if (cleanBullet.startsWith('•')) {
                            cleanBullet = cleanBullet.substring(1).trim();
                        }
                        html += `<li>${cleanBullet}</li>`;
                    });
                    html += '</ul>';
                }
            }
            html += '</div>';
        });
    }

    // Languages
    if (cvData.languages.length > 0) {
        html += '<h2>Bahasa</h2>';
        cvData.languages.forEach(lang => {
            html += `
                <div class="item">
                    <div class="item-title">${lang.language || ''} – ${lang.proficiency || ''}</div>
                </div>
            `;
        });
    }

    preview.innerHTML = html;
}

// Reset form
function resetForm() {
    if (confirm('Apakah Anda yakin ingin menghapus semua data? Tindakan ini tidak dapat dibatalkan.')) {
        localStorage.removeItem(STORAGE_KEY);
        cvData = {
            personal: {
                fullName: '',
                location: '',
                phone: '',
                email: '',
                linkedin: '',
                summary: ''
            },
            education: [],
            experience: [],
            training: [],
            certificates: [],
            projects: [],
            volunteer: [],
            languages: []
        };
        populatePersonalForm();
        renderEducation();
        renderExperience();
        renderTraining();
        renderCertificates();
        renderProjects();
        renderVolunteer();
        renderLanguages();
        updatePreview();
    }
}

// Toggle preview visibility
function togglePreview() {
    const panel = document.getElementById('previewPanel');
    const btn = document.getElementById('togglePreviewBtn');
    panel.classList.toggle('hidden');
    btn.textContent = panel.classList.contains('hidden') ? '○' : '×';
    localStorage.setItem('previewHidden', panel.classList.contains('hidden'));
}

// Reset preview size to default
function resetPreviewSize() {
    const panel = document.getElementById('previewPanel');
    panel.style.width = '350px';
    localStorage.setItem('previewWidth', '350px');
}

// Initialize preview resize functionality
function initPreviewResize() {
    const resizeHandle = document.getElementById('resizeHandle');
    const previewPanel = document.getElementById('previewPanel');
    let isResizing = false;
    let lastDownX = 0;
    
    // Load saved preferences
    const savedWidth = localStorage.getItem('previewWidth');
    const isHidden = localStorage.getItem('previewHidden') === 'true';
    
    if (savedWidth) {
        previewPanel.style.width = savedWidth;
    }
    
    if (isHidden) {
        previewPanel.classList.add('hidden');
        document.getElementById('togglePreviewBtn').textContent = '○';
    }
    
    // Mouse down on resize handle
    resizeHandle.addEventListener('mousedown', function(e) {
        isResizing = true;
        lastDownX = e.clientX;
        resizeHandle.classList.add('active');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    });
    
    // Mouse move
    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;
        
        const container = document.querySelector('.container');
        const diff = lastDownX - e.clientX;
        const newWidth = previewPanel.offsetWidth + diff;
        
        // Min width 250px, max width 600px
        if (newWidth >= 250 && newWidth <= 600) {
            previewPanel.style.width = newWidth + 'px';
            lastDownX = e.clientX;
            localStorage.setItem('previewWidth', newWidth + 'px');
        }
    });
    
    // Mouse up
    document.addEventListener('mouseup', function() {
        isResizing = false;
        resizeHandle.classList.remove('active');
        document.body.style.cursor = 'default';
        document.body.style.userSelect = 'auto';
    });
}

// Capitalize helper
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Export data as JSON
function exportDataJSON() {
    const dataStr = JSON.stringify(cvData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_${cvData.personal.fullName.replace(/\s+/g, '_') || 'data'}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// Import data from JSON
function importDataJSON() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
}

// Handle file import
function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Validate structure
            if (!importedData.personal || !Array.isArray(importedData.education)) {
                throw new Error('Format file tidak valid');
            }

            cvData = importedData;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cvData));
            
            // Refresh UI
            populatePersonalForm();
            renderEducation();
            renderExperience();
            renderTraining();
            renderCertificates();
            renderProjects();
            renderVolunteer();
            renderLanguages();
            updatePreview();
            
            alert('Data berhasil diimpor!');
        } catch (error) {
            alert('Gagal mengimpor file: ' + error.message);
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    event.target.value = '';
}

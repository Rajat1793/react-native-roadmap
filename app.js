// React Native Learning Tracker - Main Application Logic

// State Management
let allGuidesExpanded = false;

// Load saved progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('reactNativeProgress');
    return saved ? JSON.parse(saved) : {};
}

// Save progress to localStorage
function saveProgress(progress) {
    localStorage.setItem('reactNativeProgress', JSON.stringify(progress));
}

// Calculate total topics
function getTotalTopics() {
    return roadmap.reduce((sum, phase) => sum + phase.topics.length, 0);
}

// Calculate completed topics
function getCompletedTopics(progress) {
    return Object.values(progress).filter(val => val === true).length;
}

// Update overall progress bar
function updateOverallProgress() {
    const progress = loadProgress();
    const total = getTotalTopics();
    const completed = getCompletedTopics(progress);
    const percentage = Math.round((completed / total) * 100);

    const progressBar = document.getElementById('overallProgress');
    const completedCount = document.getElementById('completedCount');
    const percentageText = document.getElementById('percentageText');

    progressBar.style.width = percentage + '%';
    progressBar.textContent = percentage + '%';
    completedCount.textContent = `${completed} of ${total} topics completed`;
    percentageText.textContent = percentage + '%';
}

// Toggle topic details
function toggleDetails(phaseIndex, topicIndex) {
    const detailsId = `details-${phaseIndex}-${topicIndex}`;
    const detailsElement = document.getElementById(detailsId);
    const btnElement = document.querySelector(`[data-expand="${detailsId}"]`);
    
    if (detailsElement.classList.contains('expanded')) {
        detailsElement.classList.remove('expanded');
        btnElement.textContent = '📖 Show Guide';
    } else {
        detailsElement.classList.add('expanded');
        btnElement.textContent = '📖 Hide Guide';
    }
}

// Show roadmap view
function showRoadmap() {
    const weeklyPlanSection = document.getElementById('weeklyPlanSection');
    const practiceSection = document.getElementById('practiceExercises');
    const roadmapContainer = document.getElementById('roadmapContainer');
    
    weeklyPlanSection.style.display = 'none';
    practiceSection.style.display = 'none';
    roadmapContainer.style.display = 'block';
    
    // Scroll to top smoothly
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Toggle topic completion
function toggleTopic(phaseIndex, topicIndex) {
    const progress = loadProgress();
    const key = `${phaseIndex}-${topicIndex}`;
    progress[key] = !progress[key];
    
    // If marking as completed, remove in-progress status
    if (progress[key]) {
        progress[`${key}-inprogress`] = false;
    }
    
    saveProgress(progress);
    updateOverallProgress();
    updatePhaseProgress(phaseIndex);

    // Update UI
    const item = document.querySelector(`[data-key="${key}"]`).closest('.topic-item');
    if (progress[key]) {
        item.classList.add('completed');
        item.classList.remove('in-progress');
    } else {
        item.classList.remove('completed');
    }
}

// Toggle in-progress status
function toggleInProgress(phaseIndex, topicIndex) {
    const progress = loadProgress();
    const key = `${phaseIndex}-${topicIndex}`;
    const inProgressKey = `${key}-inprogress`;
    
    // Don't allow in-progress if already completed
    if (progress[key]) {
        return;
    }
    
    progress[inProgressKey] = !progress[inProgressKey];
    saveProgress(progress);
    
    // Update UI
    const item = document.querySelector(`[data-key="${key}"]`).closest('.topic-item');
    const btn = item.querySelector('.in-progress-btn');
    
    if (progress[inProgressKey]) {
        item.classList.add('in-progress');
        btn.textContent = '⏸️ In Progress';
        btn.classList.add('active');
    } else {
        item.classList.remove('in-progress');
        btn.textContent = '▶️ Start';
        btn.classList.remove('active');
    }
}

// Update phase-specific progress
function updatePhaseProgress(phaseIndex) {
    const progress = loadProgress();
    const phase = roadmap[phaseIndex];
    let completed = 0;

    phase.topics.forEach((_, topicIndex) => {
        const key = `${phaseIndex}-${topicIndex}`;
        if (progress[key]) completed++;
    });

    const percentage = Math.round((completed / phase.topics.length) * 100);
    const element = document.getElementById(`phase-${phaseIndex}-progress`);
    element.textContent = `${completed}/${phase.topics.length} (${percentage}%)`;
}

// Reset all progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('reactNativeProgress');
        location.reload();
    }
}

// Create topic details HTML
function createTopicDetailsHTML(topic) {
    let html = '';
    
    // Definition
    if (topic.definition) {
        html += `
            <div class="detail-section">
                <h4>📚 What is this?</h4>
                <div class="guide-content">
                    <p><strong>${topic.definition}</strong></p>
                </div>
            </div>
        `;
    }
    
    // Learning Guide
    if (topic.learningGuide) {
        html += `
            <div class="detail-section">
                <h4>💡 Understanding</h4>
                <div class="guide-content">
                    <p>${topic.learningGuide}</p>
                </div>
            </div>
        `;
    }
    
    // What You'll Learn
    if (topic.whatYoullLearn && topic.whatYoullLearn.length > 0) {
        html += `
            <div class="detail-section">
                <h4>🎯 What You'll Learn</h4>
                <ul>
                    ${topic.whatYoullLearn.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Subtopics (if available)
    if (topic.subtopics && topic.subtopics.length > 0) {
        html += `
            <div class="detail-section">
                <h4>📝 Subtopics</h4>
                <ul class="subtopics-list">
                    ${topic.subtopics.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Practice
    if (topic.practice) {
        html += `
            <div class="detail-section">
                <h4>✍️ Practice</h4>
                <div class="guide-content">
                    <p>${topic.practice}</p>
                </div>
            </div>
        `;
    }
    
    // Code Example
    if (topic.codeExample) {
        html += `
            <div class="detail-section">
                <h4>💻 Code Example</h4>
                <div class="code-example">${escapeHtml(topic.codeExample)}</div>
            </div>
        `;
    }
    
    // What to Ignore
    if (topic.ignore) {
        html += `
            <div class="detail-section">
                <h4>🚫 What to Ignore (For Now)</h4>
                <div class="ignore-section">
                    <p><strong>Don't worry about:</strong> ${topic.ignore}</p>
                </div>
            </div>
        `;
    }
    
    // My Reference Materials Form
    const key = topic.key || '';
    const savedReferences = loadMyReferences(key);
    html += `
        <div class="detail-section my-references-section">
            <h4>📌 My Reference Materials</h4>
            <div class="my-references-form">
                <div class="form-group">
                    <label for="refTitle-${key}">📝 Title</label>
                    <input 
                        type="text" 
                        class="ref-input" 
                        id="refTitle-${key}" 
                        placeholder="e.g., YouTube Tutorial, Article, Documentation"
                    />
                </div>
                <div class="form-group">
                    <label for="refUrl-${key}">🔗 URL</label>
                    <input 
                        type="url" 
                        class="ref-input" 
                        id="refUrl-${key}" 
                        placeholder="https://..."
                    />
                </div>
                <div class="form-group">
                    <label for="refNotes-${key}">📓 Notes (Optional)</label>
                    <textarea 
                        class="ref-input ref-textarea" 
                        id="refNotes-${key}" 
                        placeholder="Add your notes, key takeaways, or summary..."
                        rows="3"
                    ></textarea>
                </div>
                <button class="btn btn-small btn-primary" onclick="addMyReference('${key}')">
                    ➕ Add Reference
                </button>
            </div>
            <div class="my-references-list" id="myRefList-${key}">
                ${renderMyReferencesList(savedReferences, key)}
            </div>
        </div>
    `;
    
    // References
    if (topic.references && topic.references.length > 0) {
        html += `
            <div class="detail-section">
                <h4>🔗 Resources & Links</h4>
                <div class="references">
                    ${topic.references.map(ref => 
                        `<a href="${ref.url}" class="reference-link" target="_blank" rel="noopener noreferrer">${ref.title}</a>`
                    ).join('')}
                </div>
            </div>
        `;
    }
    
    return html;
}

// Escape HTML for code examples
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Render roadmap
function renderRoadmap() {
    const container = document.getElementById('roadmapContainer');
    const progress = loadProgress();

    roadmap.forEach((phase, phaseIndex) => {
        const phaseDiv = document.createElement('div');
        phaseDiv.className = 'phase';

        const phaseHeader = document.createElement('div');
        phaseHeader.className = 'phase-header';
        phaseHeader.innerHTML = `
            <div>
                <div class="phase-title">${phase.phase}</div>
                <div class="phase-time">⏱️ ${phase.timeRecommendation}</div>
            </div>
            <div class="phase-progress" id="phase-${phaseIndex}-progress">0/0 (0%)</div>
        `;

        const topicsList = document.createElement('ul');
        topicsList.className = 'topics';

        phase.topics.forEach((topic, topicIndex) => {
            const key = `${phaseIndex}-${topicIndex}`;
            const isCompleted = progress[key] || false;
            const isInProgress = progress[`${key}-inprogress`] || false;

            const li = document.createElement('li');
            li.className = `topic-item ${isCompleted ? 'completed' : ''} ${isInProgress ? 'in-progress' : ''}`;

            // Topic Header
            const topicHeader = document.createElement('div');
            topicHeader.className = 'topic-header';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = isCompleted;
            checkbox.setAttribute('data-key', key);
            checkbox.onchange = () => toggleTopic(phaseIndex, topicIndex);

            const label = document.createElement('label');
            label.className = 'topic-label';
            label.textContent = topic.name;
            label.onclick = () => checkbox.click();

            // In Progress Button
            const inProgressBtn = document.createElement('button');
            inProgressBtn.className = 'in-progress-btn';
            inProgressBtn.textContent = isInProgress ? '⏸️ In Progress' : '▶️ Start';
            inProgressBtn.classList.toggle('active', isInProgress);
            inProgressBtn.onclick = (e) => {
                e.stopPropagation();
                toggleInProgress(phaseIndex, topicIndex);
            };

            const expandBtn = document.createElement('button');
            expandBtn.className = 'expand-btn';
            expandBtn.textContent = '📖 Show Guide';
            expandBtn.setAttribute('data-expand', `details-${phaseIndex}-${topicIndex}`);
            expandBtn.onclick = (e) => {
                e.stopPropagation();
                toggleDetails(phaseIndex, topicIndex);
            };

            topicHeader.appendChild(checkbox);
            topicHeader.appendChild(label);
            topicHeader.appendChild(inProgressBtn);
            topicHeader.appendChild(expandBtn);
            li.appendChild(topicHeader);

            // Topic Details
            const details = document.createElement('div');
            details.className = 'topic-details';
            details.id = `details-${phaseIndex}-${topicIndex}`;
            // Add key to topic for reference materials
            topic.key = key;
            details.innerHTML = createTopicDetailsHTML(topic);

            li.appendChild(details);
            topicsList.appendChild(li);
        });

        phaseDiv.appendChild(phaseHeader);
        phaseDiv.appendChild(topicsList);
        container.appendChild(phaseDiv);

        updatePhaseProgress(phaseIndex);
    });

    updateOverallProgress();
}

// Reference Materials Management
function loadMyReferences(key) {
    const saved = localStorage.getItem('myReferences');
    const allRefs = saved ? JSON.parse(saved) : {};
    return allRefs[key] || [];
}

function saveMyReferences(key, references) {
    const saved = localStorage.getItem('myReferences');
    const allRefs = saved ? JSON.parse(saved) : {};
    allRefs[key] = references;
    localStorage.setItem('myReferences', JSON.stringify(allRefs));
}

function addMyReference(key) {
    const titleInput = document.getElementById(`refTitle-${key}`);
    const urlInput = document.getElementById(`refUrl-${key}`);
    const notesInput = document.getElementById(`refNotes-${key}`);
    
    const title = titleInput.value.trim();
    const url = urlInput.value.trim();
    const notes = notesInput.value.trim();
    
    if (!title || !url) {
        alert('Please enter both title and URL');
        return;
    }
    
    const references = loadMyReferences(key);
    references.push({
        title,
        url,
        notes,
        dateAdded: new Date().toISOString()
    });
    
    saveMyReferences(key, references);
    
    // Clear inputs
    titleInput.value = '';
    urlInput.value = '';
    notesInput.value = '';
    
    // Update display
    const listContainer = document.getElementById(`myRefList-${key}`);
    listContainer.innerHTML = renderMyReferencesList(references, key);
}

function deleteMyReference(key, index) {
    if (!confirm('Delete this reference?')) return;
    
    const references = loadMyReferences(key);
    references.splice(index, 1);
    saveMyReferences(key, references);
    
    // Update display
    const listContainer = document.getElementById(`myRefList-${key}`);
    listContainer.innerHTML = renderMyReferencesList(references, key);
}

function renderMyReferencesList(references, key) {
    if (!references || references.length === 0) {
        return '<p class="no-refs">No references added yet. Add your learning materials above!</p>';
    }
    
    return references.map((ref, index) => `
        <div class="my-ref-item">
            <div class="my-ref-header">
                <a href="${ref.url}" target="_blank" rel="noopener noreferrer" class="my-ref-link">
                    🔗 ${ref.title}
                </a>
                <button class="btn-delete" onclick="deleteMyReference('${key}', ${index})" title="Delete">
                    ❌
                </button>
            </div>
            ${ref.notes ? `<p class="my-ref-notes">📝 ${ref.notes}</p>` : ''}
            <small class="my-ref-date">Added: ${new Date(ref.dateAdded).toLocaleDateString()}</small>
        </div>
    `).join('');
}

// Scroll to specific phase
function scrollToPhase(phaseIndex) {
    if (phaseIndex === '') return;
    
    // Make sure roadmap is visible
    const weeklyPlanSection = document.getElementById('weeklyPlanSection');
    const practiceSection = document.getElementById('practiceExercises');
    const roadmapContainer = document.getElementById('roadmapContainer');
    
    weeklyPlanSection.style.display = 'none';
    practiceSection.style.display = 'none';
    roadmapContainer.style.display = 'block';
    
    // Find the phase element
    const phases = document.querySelectorAll('.phase');
    if (phases[phaseIndex]) {
        phases[phaseIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Reset dropdown
        setTimeout(() => {
            document.getElementById('phaseDropdown').value = '';
        }, 500);
    }
}

// Toggle weekly plan section
function toggleWeeklyPlan() {
    const weeklyPlanSection = document.getElementById('weeklyPlanSection');
    const practiceSection = document.getElementById('practiceExercises');
    const roadmapContainer = document.getElementById('roadmapContainer');
    
    if (weeklyPlanSection.style.display === 'none') {
        weeklyPlanSection.style.display = 'block';
        practiceSection.style.display = 'none';
        roadmapContainer.style.display = 'none';
        renderWeeklyPlan();
        // Scroll to top smoothly
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        weeklyPlanSection.style.display = 'none';
        roadmapContainer.style.display = 'block';
        // Scroll to top smoothly
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

// Render weekly plan
function renderWeeklyPlan() {
    const container = document.getElementById('weeklyPlanContainer');
    
    let html = '';
    
    weeklyPlan.forEach(week => {
        html += `
            <div class="week-block">
                <div class="week-header">
                    <h3>${week.title}</h3>
                </div>
                <div class="days-container">
        `;
        
        week.days.forEach(day => {
            html += `
                <div class="day-card">
                    <div class="day-header">
                        <span class="day-name">${day.day}</span>
                        <span class="time-badge">${day.practice.time}</span>
                    </div>
                    <div class="lesson-section">
                        <h4>📚 ${day.lesson.title}</h4>
                        <p class="lesson-content">${day.lesson.content}</p>
                        <div class="key-point">
                            <strong>💡 Key Point:</strong> ${day.lesson.keyPoint}
                        </div>
                    </div>
                    <div class="practice-section">
                        <h4>🎯 Practice Task</h4>
                        <p>${day.practice.task}</p>
                    </div>
                    <div class="reflection-section">
                        <h4>🤔 Reflection</h4>
                        <p>${day.reflection}</p>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Toggle practice exercises section
function togglePracticeExercises() {
    const weeklyPlanSection = document.getElementById('weeklyPlanSection');
    const section = document.getElementById('practiceExercises');
    const roadmapContainer = document.getElementById('roadmapContainer');
    
    if (section.style.display === 'none') {
        section.style.display = 'block';
        weeklyPlanSection.style.display = 'none';
        roadmapContainer.style.display = 'none';
        // Scroll to top smoothly
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        section.style.display = 'none';
        roadmapContainer.style.display = 'block';
        // Scroll to top smoothly
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

// Dark mode functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    const toggle = document.getElementById('darkModeToggle');
    
    if (isDark) {
        toggle.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Initialize dark mode from localStorage
function initDarkMode() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        const toggle = document.getElementById('darkModeToggle');
        if (toggle) {
            toggle.textContent = '☀️';
        }
    }
}

// Color customization functionality
function toggleColorPicker() {
    const panel = document.getElementById('colorPickerPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function updateColorsFromPicker(type) {
    const colorId = type + 'Color';
    const hexId = type + 'ColorHex';
    const color = document.getElementById(colorId).value;
    document.getElementById(hexId).value = color.toUpperCase();
    applyColors();
}

function updateColorsFromHex(type) {
    const colorId = type + 'Color';
    const hexId = type + 'ColorHex';
    let hex = document.getElementById(hexId).value;
    
    // Add # if not present
    if (hex && !hex.startsWith('#')) {
        hex = '#' + hex;
        document.getElementById(hexId).value = hex;
    }
    
    // Validate hex color
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
        document.getElementById(colorId).value = hex;
        applyColors();
    }
}

function applyColors() {
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    const bgColor = document.getElementById('bgColor').value;
    const accentColor = document.getElementById('accentColor').value;
    
    // Apply colors to CSS variables
    document.documentElement.style.setProperty('--primary-orange', primaryColor);
    document.documentElement.style.setProperty('--secondary-orange', secondaryColor);
    document.documentElement.style.setProperty('--bg-light', bgColor);
    
    // Save to localStorage
    localStorage.setItem('customColors', JSON.stringify({
        primary: primaryColor,
        secondary: secondaryColor,
        background: bgColor,
        accent: accentColor
    }));
    
    // Update key-point and day-card backgrounds
    const style = document.createElement('style');
    style.id = 'custom-colors-style';
    const existingStyle = document.getElementById('custom-colors-style');
    if (existingStyle) existingStyle.remove();
    
    style.innerHTML = `
        .key-point { background: ${accentColor} !important; }
        .day-card { background: ${bgColor} !important; border-color: ${secondaryColor} !important; }
    `;
    document.head.appendChild(style);
}

function resetColors() {
    // Default colors
    const defaults = {
        primary: '#9CAB88',
        secondary: '#89986D',
        background: '#F6F0D7',
        accent: '#C5D89D'
    };
    
    document.getElementById('primaryColor').value = defaults.primary;
    document.getElementById('primaryColorHex').value = defaults.primary;
    document.getElementById('secondaryColor').value = defaults.secondary;
    document.getElementById('secondaryColorHex').value = defaults.secondary;
    document.getElementById('bgColor').value = defaults.background;
    document.getElementById('bgColorHex').value = defaults.background;
    document.getElementById('accentColor').value = defaults.accent;
    document.getElementById('accentColorHex').value = defaults.accent;
    
    // Remove custom styles
    const customStyle = document.getElementById('custom-colors-style');
    if (customStyle) customStyle.remove();
    
    // Reset CSS variables
    document.documentElement.style.removeProperty('--primary-orange');
    document.documentElement.style.removeProperty('--secondary-orange');
    document.documentElement.style.removeProperty('--bg-light');
    
    // Clear localStorage
    localStorage.removeItem('customColors');
}

function loadCustomColors() {
    const savedColors = localStorage.getItem('customColors');
    if (savedColors) {
        const colors = JSON.parse(savedColors);
        document.getElementById('primaryColor').value = colors.primary;
        document.getElementById('primaryColorHex').value = colors.primary.toUpperCase();
        document.getElementById('secondaryColor').value = colors.secondary;
        document.getElementById('secondaryColorHex').value = colors.secondary.toUpperCase();
        document.getElementById('bgColor').value = colors.background;
        document.getElementById('bgColorHex').value = colors.background.toUpperCase();
        document.getElementById('accentColor').value = colors.accent;
        document.getElementById('accentColorHex').value = colors.accent.toUpperCase();
        applyColors();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    loadCustomColors();
    renderRoadmap();
});

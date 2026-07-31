// script.js
console.log('🌙 Сайт Арикси загружен!');

document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    content.style.opacity = '0';
    content.style.transition = 'opacity 1.5s ease';
    
    setTimeout(() => {
        content.style.opacity = '1';
    }, 300);

    // ===== TELEGRAM: открытие модального окна =====
    const tgButton = document.querySelector('.card1');
    tgButton.addEventListener('click', function() {
        openModal();
    });

    // ===== TIKTOK: переход по ссылке =====
    const tiktokButton = document.querySelector('.card2');
    tiktokButton.addEventListener('click', function() {
        window.open('https://www.tiktok.com/@ar1xy.kz', '_blank');
    });
});

// ===== МОДАЛЬНОЕ ОКНО =====
function openModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'modal-window';
    
    const title = document.createElement('h2');
    title.textContent = 'Выберите канал';
    title.className = 'modal-title';
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'modal-buttons';
    
    // ===== КНОПКА 1: Codavrix Forum =====
    const btn1 = document.createElement('button');
    btn1.className = 'modal-btn';
    btn1.innerHTML = `
        <div class="svg-wrapper-1">
            <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
            </div>
        </div>
        <span>Codavrix Forum</span>
    `;
    
    // ===== КНОПКА 2: RTP TunKirby =====
    const btn2 = document.createElement('button');
    btn2.className = 'modal-btn';
    btn2.innerHTML = `
        <div class="svg-wrapper-1">
            <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
            </div>
        </div>
        <span>RTP TunKirby</span>
    `;
    
    // ===== КНОПКА 3: DeathNote =====
    const btn3 = document.createElement('button');
    btn3.className = 'modal-btn';
    btn3.innerHTML = `
        <div class="svg-wrapper-1">
            <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
            </div>
        </div>
        <span>DeathNote</span>
    `;
    
    // Кнопка закрытия
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.textContent = '✕';
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
    
    buttonsContainer.appendChild(btn1);
    buttonsContainer.appendChild(btn2);
    buttonsContainer.appendChild(btn3);
    
    modal.appendChild(closeBtn);
    modal.appendChild(title);
    modal.appendChild(buttonsContainer);
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    // ===== ОБРАБОТЧИКИ КНОПОК =====
    btn1.addEventListener('click', function() {
        window.open('https://t.me/codavrix_forum', '_blank');
        document.body.removeChild(overlay);
    });
    
    btn2.addEventListener('click', function() {
        window.open('https://t.me/RtpTunKirby', '_blank');
        document.body.removeChild(overlay);
    });
    
    btn3.addEventListener('click', function() {
        window.open('https://t.me/DeathNote_ar1xy', '_blank');
        document.body.removeChild(overlay);
    });
}

console.log('🌙 Сайт Арикси загружен!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM загружен');
    
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = '0';
        content.style.transition = 'opacity 1.5s ease';
        setTimeout(() => {
            content.style.opacity = '1';
        }, 300);
    }

    // ===== TELEGRAM =====
    const tgButton = document.querySelector('.card1');
    console.log('🔍 Кнопка Telegram найдена:', tgButton);
    
    if (tgButton) {
        tgButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('📱 Нажата кнопка Telegram');
            openModal();
        });
    } else {
        console.error('❌ Кнопка Telegram не найдена!');
    }

    // ===== TIKTOK =====
    const tiktokButton = document.querySelector('.card2');
    console.log('🔍 Кнопка TikTok найдена:', tiktokButton);
    
    if (tiktokButton) {
        tiktokButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🎵 Нажата кнопка TikTok');
            window.open('https://www.tiktok.com/@ar1xy.kz', '_blank');
        });
    } else {
        console.error('❌ Кнопка TikTok не найдена!');
    }

    // ===== КЛЮЧ =====
    const keyButton = document.querySelector('.card4');
    console.log('🔍 Кнопка Ключ найдена:', keyButton);
    
    if (keyButton) {
        keyButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🔑 Нажата кнопка Ключ');
            openKeyModal();
        });
    } else {
        console.error('❌ Кнопка Ключ не найдена!');
    }
});

// ===== МОДАЛЬНОЕ ОКНО ДЛЯ TELEGRAM =====
function openModal() {
    console.log('🔄 Открываем модальное окно...');
    
    if (document.querySelector('.modal-overlay')) {
        console.log('⚠️ Модальное окно уже открыто');
        return;
    }
    
    try {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        const modal = document.createElement('div');
        modal.className = 'modal-window';
        
        const title = document.createElement('h2');
        title.textContent = 'Выберите канал';
        title.className = 'modal-title';
        
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'modal-buttons';
        
        // ===== КНОПКА 1: Форум Codavrix 🌸 =====
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
            <span>Форум Codavrix 🌸</span>
        `;
        btn1.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('🔗 Переход в Форум Codavrix');
            window.open('https://t.me/codavrix_forum', '_blank');
            document.body.removeChild(overlay);
        });
        
        // ===== КНОПКА 2: Rtp Tun | Kirby 🌸 =====
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
            <span>Rtp Tun | Kirby 🌸</span>
        `;
        btn2.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('🔗 Переход в Rtp Tun | Kirby');
            window.open('https://t.me/RtpTunKirby', '_blank');
            document.body.removeChild(overlay);
        });
        
        // ===== КНОПКА 3: Death Note | Арикси 🌸🍎 =====
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
            <span>Death Note | Арикси 🌸🍎</span>
        `;
        btn3.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('🔗 Переход в Death Note | Арикси');
            window.open('https://t.me/DeathNote_ar1xy', '_blank');
            document.body.removeChild(overlay);
        });
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close';
        closeBtn.textContent = '✕';
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('❌ Закрываем модальное окно');
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
        console.log('✅ Модальное окно открыто');
        
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                console.log('❌ Закрываем по клику на фон');
                document.body.removeChild(overlay);
            }
        });
        
    } catch (error) {
        console.error('❌ Ошибка при открытии модального окна:', error);
    }
}

// ===== МОДАЛЬНОЕ ОКНО ДЛЯ КЛЮЧА =====
function openKeyModal() {
    console.log('🔑 Открываем окно получения ключа...');
    
    if (document.querySelector('.modal-overlay')) {
        console.log('⚠️ Модальное окно уже открыто');
        return;
    }
    
    try {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        const modal = document.createElement('div');
        modal.className = 'modal-window';
        
        const title = document.createElement('h2');
        title.textContent = 'Получить ключ RTP TUN';
        title.className = 'modal-title';
        
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'modal-buttons';
        
        // ===== ЕДИНСТВЕННАЯ КНОПКА =====
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
            <span>Получить ключ RTP TUN</span>
        `;
        btn1.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('🔗 Переход по ссылке для получения ключа');
            window.open('https://t.me/RtpTunKirby', '_blank');
            document.body.removeChild(overlay);
        });
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close';
        closeBtn.textContent = '✕';
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('❌ Закрываем модальное окно');
            document.body.removeChild(overlay);
        });
        
        buttonsContainer.appendChild(btn1);
        
        modal.appendChild(closeBtn);
        modal.appendChild(title);
        modal.appendChild(buttonsContainer);
        
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        console.log('✅ Модальное окно открыто');
        
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                console.log('❌ Закрываем по клику на фон');
                document.body.removeChild(overlay);
            }
        });
        
    } catch (error) {
        console.error('❌ Ошибка при открытии модального окна:', error);
    }
}

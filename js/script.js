// ===== УПРАВЛЕНИЕ МОДАЛЬНЫМИ ОКНАМИ =====

// Открыть модалку
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // блокируем скролл фона
  }
}

// Закрыть модалку
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // возвращаем скролл
  }
}

// Закрытие по клику на фон (оверлей)
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Закрытие по кнопке Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});

// ===== ДОПОЛНИТЕЛЬНАЯ ЛОГИКА =====

// Лог в консоль при загрузке
console.log('🚀 Сайт Арикси загружен!');

// Анимация появления кнопок (опционально)
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.main-btn');
  buttons.forEach((btn, index) => {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(20px)';
    setTimeout(() => {
      btn.style.transition = 'all 0.3s ease';
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
    }, 200 + index * 100);
  });
});

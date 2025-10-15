//change background hover
const buttons = document.querySelectorAll(".menu-btn");
const stage = document.querySelector("#background-panel");

buttons.forEach((button) => {
  button.onmouseover = function () {
    document.querySelector(button.dataset.show).style.opacity = 1;
  };
  button.onmouseout = function () {
    document.querySelector(button.dataset.show).style.opacity = 0;
  };
});

// 圖片展示區塊懸浮視窗功能
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');

  // 開啟懸浮視窗
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imageSrc = this.getAttribute('data-image');
      const imageAlt = this.querySelector('img').getAttribute('alt');
      
      modalImage.src = imageSrc;
      modalImage.alt = imageAlt;
      modalOverlay.classList.add('active');
      
      // 防止背景滾動
      document.body.style.overflow = 'hidden';
    });
  });

  // 關閉懸浮視窗
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // 點擊關閉按鈕
  modalClose.addEventListener('click', closeModal);

  // 點擊背景關閉
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // ESC 鍵關閉
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
});
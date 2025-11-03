// Этот блок гарантирует, что весь HTML уже загружен,
// прежде чем JS начнёт искать элементы
document.addEventListener('DOMContentLoaded', () => {

  // 🎧 Получаем элементы
  const audio = document.getElementById('audio-player');
  const trackName = document.querySelector('.track-name');
  const artistName = document.querySelector('.artist');
  const playBtn = document.querySelector('.play-btn');
  const volumeBar = document.querySelector('.volume-bar');
  const muteBtn = document.querySelector('.mute-btn');
  const progressBar = document.querySelector('.progress-bar');
  const currentTimeEl = document.querySelector('.current-time');
  const durationEl = document.querySelector('.duration');

  // Проверка, всё ли найдено
  console.log({
    audio, trackName, artistName, playBtn, volumeBar, muteBtn, progressBar
  });

  let isPlaying = false;

  // Устанавливаем стартовую громкость
  audio.volume = 0.5;
  volumeBar.value = 0.5;

  // 🎵 При клике на карточку
  document.querySelectorAll('.slide').forEach(card => {
    card.addEventListener('click', () => {
      const src = card.dataset.track;
      const title = card.dataset.title;
      const artist = card.dataset.artist;

      // Подставляем данные
      audio.src = src;
      trackName.textContent = title;
      artistName.textContent = artist;

      audio.play();
      isPlaying = true;
      playBtn.textContent = '⏸';
    });
  });

  // ▶ / ⏸ Кнопка
  playBtn.addEventListener('click', () => {
    if (!audio.src) return; // если трек не выбран
    if (isPlaying) {
      audio.pause();
      playBtn.textContent = '▶';
    } else {
      audio.play();
      playBtn.textContent = '⏸';
    }
    isPlaying = !isPlaying;
  });

  // 🔊 Показать / скрыть регулятор громкости
  muteBtn.addEventListener('click', () => {
    volumeBar.hidden = !volumeBar.hidden;
  });

  // 🔉 Изменение громкости
  volumeBar.addEventListener('input', () => {
    if (!audio) return;
    audio.volume = volumeBar.value;
  });

  // ⏱ Обновление времени и прогресса
  audio.addEventListener('timeupdate', () => {
    const current = audio.currentTime;
    const duration = audio.duration;

    // Обновляем ползунок
    progressBar.value = (current / duration) * 100 || 0;

    // Обновляем текст
    currentTimeEl.textContent = formatTime(current);
    durationEl.textContent = formatTime(duration);
  });

  // ⏩ Перемотка
  progressBar.addEventListener('input', () => {
    if (!audio.duration) return;
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  });

  // Когда трек закончился
  audio.addEventListener('ended', () => {
    isPlaying = false;
    playBtn.textContent = '▶';
  });

  // ⏱ Форматирование времени (секунды → М:СС)
  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  }
});

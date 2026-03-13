const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...

const playlistsGrid = document.querySelector('#playlists-grid');

playlistsGrid.innerHTML = playlists
  .map(
    (playlist) => `
  <li class="playlist-card" data-title="${playlist.title}">
    <img src="${playlist.image}" alt="${playlist.title} playlist cover" />
    <p>${playlist.title}</p>
  </li>
`,
  )
  .join('');

playlistsGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.playlist-card');
  if (!card) return;

  const previouslySelected = playlistsGrid.querySelector(
    '.playlist-card.selected',
  );
  if (previouslySelected) previouslySelected.classList.remove('selected');

  card.classList.add('selected');
  document.querySelector('#now-playing-title').textContent = card.dataset.title;
});

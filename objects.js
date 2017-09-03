Object.assign({}, playlist, {smiths: 'rusholm ruffians'})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

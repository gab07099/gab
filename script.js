const songData = {
    pop: [
        { name: 'Shape of You', artist: 'Ed Sheeran', url: 'https://www.youtube.com/watch?v=JGwWNGJdvx8' },
        { name: 'Blinding Lights', artist: 'The Weeknd', url: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ' },
        { name: 'Levitating', artist: 'Dua Lipa', url: 'https://www.youtube.com/watch?v=TUVcZfQe-Kw' }
    ],
    rock: [
        { name: 'Bohemian Rhapsody', artist: 'Queen', url: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ' },
        { name: 'Smells Like Teen Spirit', artist: 'Nirvana', url: 'https://www.youtube.com/watch?v=hTWKbfoikeg' },
        { name: 'Stairway to Heaven', artist: 'Led Zeppelin', url: 'https://www.youtube.com/watch?v=qHFxncb1gRY' }
    ],
    artists: {
        'MuniMuni': [
            { name: 'Solomon', artist: 'MuniMuni', url: 'https://www.youtube.com/watch?v=k58D67bf2zY' },
            { name: 'Bawat Piyesa', artist: 'MuniMuni', url: 'https://www.youtube.com/watch?v=icA5QGV9-Jk' }
        ],
        'Ben&Ben': [
            { name: 'Sasusunod Na Habang Buhay', artist: 'Ben&Ben', url: 'https://www.youtube.com/watch?v=yB2J6kXxJIY' },
            { name: 'Araw Araw', artist: 'Ben&Ben', url: 'https://www.youtube.com/watch?v=V4qjAyb4lNI' },
            { name: 'Autumns', artist: 'Ben&Ben', url: 'https://www.youtube.com/watch?v=rr5-V1WcF5A' }
        ],
        'WaveToEarth': [
            { name: 'Seasons', artist: 'WaveToEarth', url: 'https://www.youtube.com/watch?v=lUy_45uFZK8' },
            { name: 'Love.', artist: 'WaveToEarth', url: 'https://www.youtube.com/watch?v=ioh9WzFHiH8' },
            { name: 'Homesick', artist: 'WaveToEarth', url: 'https://www.youtube.com/watch?v=kK9iUB8H8Lg' },
            { name: 'Bonfire', artist: 'WaveToEarth', url: 'https://www.youtube.com/watch?v=V4KvBHVnkMc' }
        ],
        'Daniel Caesar': [
            { name: 'Get You', artist: 'Daniel Caesar', url: 'https://www.youtube.com/watch?v=8g19Hj7F-J4' },
            { name: 'Hold Me Down', artist: 'Daniel Caesar', url: 'https://www.youtube.com/watch?v=n_MaVZZHpnM' },
            { name: 'Always', artist: 'Daniel Caesar', url: 'https://www.youtube.com/watch?v=Vee9dMmT4Zc' }
        ],
        'Laufey': [
            { name: 'Promise', artist: 'Laufey', url: 'https://www.youtube.com/watch?v=7muZXyKwRWg' },
            { name: 'Magnolia', artist: 'Laufey', url: 'https://www.youtube.com/watch?v=hg8dG4v_GGM' },
            { name: 'Valentine', artist: 'Laufey', url: 'https://www.youtube.com/watch?v=XTOtTRv1_z8' }
        ]
    }
};


function displaySongs(songs) {
    const songList = document.getElementById('song-list');
    songList.innerHTML = ''; 

    if (songs.length === 0) {
        songList.innerHTML = '<p>No songs found. Try a different genre or artist!</p>';
        return;
    }

    songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item';
        songItem.innerHTML = `
            <strong>${song.name}</strong> by ${song.artist}
            <br><a href="${song.url}" target="_blank">Listen on YouTube</a>
        `;
        songList.appendChild(songItem);
    });
}


function getPopSongs() {
    displaySongs(songData.pop);
}


function getRockSongs() {
    displaySongs(songData.rock);
}


function getArtistSongs(artist) {
    displaySongs(songData.artists[artist]);
}

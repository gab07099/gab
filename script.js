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
    Metal: [
        { name: 'Psychosocial ', artist: 'Slipknot', url: 'https://www.youtube.com/watch?v=5abamRO41fE' },
        { name: 'Bodies', artist: 'Drowning Pool', url: 'https://www.youtube.com/watch?v=04F4xlWSFh0' },
        { name: 'Custer', artist: 'Slipknot', url: 'https://www.youtube.com/watch?v=FdBqOCS8LmM' }
    ],
    
    artists: {
        'MuniMuni': [
            { name: 'Solomon', artist: 'MuniMuni', url: 'https://www.youtube.com/watch?v=mmy858IPedw' },
            { name: 'Bawat Piyesa', artist: 'MuniMuni', url: 'https://www.youtube.com/watch?v=vvFSVIy1Nqs' }
        ],
        'Ben&Ben': [
            { name: 'Sasusunod Na Habang Buhay', artist: 'Ben&Ben', url: 'https://www.youtube.com/watch?v=yB2J6kXxJIY' },
            { name: 'Araw Araw', artist: 'Ben&Ben', url: 'https://www.youtube.com/watch?v=V4qjAyb4lNI' },
            { name: 'Autumn', artist: 'Ben&Ben', url: 'https://www.youtube.com/watch?v=xVxD-u1DhVQ' }
        ],
        'WaveToEarth': [
            { name: 'Seasons', artist: 'WaveToEarth', url: 'https://www.youtube.com/watch?v=CnVVjLOGVoY' },
            { name: 'Love.', artist: 'WaveToEarth', url: 'https://www.youtube.com/watch?v=ioh9WzFHiH8' },
            { name: 'Homesick', artist: 'WaveToEarth', url: 'https://www.youtube.com/watch?v=RxiTWxP9Xf4' },
            { name: 'Bonfire', artist: 'WaveToEarth', url: 'https://www.youtube.com/watch?v=clMBbfA2HlY' }
        ],
        'Daniel Caesar': [
            { name: 'Get You', artist: 'Daniel Caesar', url: 'https://www.youtube.com/watch?v=EQWKdwvXh-o' },
            { name: 'Hold Me Down', artist: 'Daniel Caesar', url: 'https://www.youtube.com/watch?v=yn4eDLtH-NA' },
            { name: 'Always', artist: 'Daniel Caesar', url: 'https://www.youtube.com/watch?v=pKFd12id5oQ' }
        ],
        'Laufey': [
            { name: 'Promise', artist: 'Laufey', url: 'https://www.youtube.com/watch?v=Yq6qkq_TWAM' },
            { name: 'Magnolia', artist: 'Laufey', url: 'https://www.youtube.com/watch?v=PiqXigZCugs' },
            { name: 'Valentine', artist: 'Laufey', url: 'https://www.youtube.com/watch?v=80Gf35I7n1w' }
        ],
        'd4vd': [
            { name: 'Romantic Homicide', artist: 'd4vd', url: 'https://www.youtube.com/watch?v=eKL3TceSxvk' },
            { name: 'Here With Me', artist: 'd4vd', url: 'https://www.youtube.com/watch?v=Ip6cw8gfHHI' }
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

// Get the popup and button elements
const popup = document.getElementById('popup');
const showPopupBtn = document.getElementById('showPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');

// Show the popup when the button is clicked
showPopupBtn.onclick = function() {
    popup.style.display = 'flex';
}

// Close the popup when the close button is clicked
closePopupBtn.onclick = function() {
    popup.style.display = 'none';
}

// Optionally, close the popup if the user clicks outside the popup content
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}


// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100, // Number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff" // Color of particles
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});


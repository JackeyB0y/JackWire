// colour themes
const themes =
{
    "lime":
    {
        "--color-page-background":   "#0a0a0a",
        "--color-player-background": "#111111",
        "--color-accent":            "#6bcf3f",
        "--color-accent-faint":      "#6bcf3f11",
        "--color-accent-dim":        "#6bcf3f22",
        "--color-accent-mid":        "#6bcf3f33",
        "--color-accent-muted":      "#6bcf3f55",
        "--color-accent-subtle":     "#6bcf3f66",
        "--color-accent-ghost":      "#6bcf3f88",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#888888",
    },
    "cthulhu":
    {
        "--color-page-background":   "#00050f",
        "--color-player-background": "#000d1f",
        "--color-accent":            "#a9c9ff",
        "--color-accent-faint":      "#a9c9ff11",
        "--color-accent-dim":        "#a9c9ff22",
        "--color-accent-mid":        "#a9c9ff33",
        "--color-accent-muted":      "#a9c9ff55",
        "--color-accent-subtle":     "#a9c9ff66",
        "--color-accent-ghost":      "#a9c9ff88",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#7788aa",
    },
    "endocardium":
    {
        "--color-page-background":   "#0f0000",
        "--color-player-background": "#1a0000",
        "--color-accent":            "#df3b3b",
        "--color-accent-faint":      "#df3b3b11",
        "--color-accent-dim":        "#df3b3b22",
        "--color-accent-mid":        "#df3b3b33",
        "--color-accent-muted":      "#df3b3b55",
        "--color-accent-subtle":     "#df3b3b66",
        "--color-accent-ghost":      "#df3b3b88",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#aa6666",
    },
    "smooth endoplasmic reticulum":
    {
        "--color-page-background":   "#0f0010",
        "--color-player-background": "#1a001c",
        "--color-accent":            "#d858c7",
        "--color-accent-faint":      "#d858c711",
        "--color-accent-dim":        "#d858c722",
        "--color-accent-mid":        "#d858c733",
        "--color-accent-muted":      "#d858c755",
        "--color-accent-subtle":     "#d858c766",
        "--color-accent-ghost":      "#d858c788",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#aa77aa",
    },
    "dweller of r'lyeh":
    {
        "--color-page-background":   "#001215",
        "--color-player-background": "#001e22",
        "--color-accent":            "#35cfe2",
        "--color-accent-faint":      "#35cfe211",
        "--color-accent-dim":        "#35cfe222",
        "--color-accent-mid":        "#35cfe233",
        "--color-accent-muted":      "#35cfe255",
        "--color-accent-subtle":     "#35cfe266",
        "--color-accent-ghost":      "#35cfe288",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#669999",
    },
    "hamlindigo blue":
    {
        "--color-page-background":   "#060810",
        "--color-player-background": "#0d1120",
        "--color-accent":            "#6276a3",
        "--color-accent-faint":      "#6276a311",
        "--color-accent-dim":        "#6276a322",
        "--color-accent-mid":        "#6276a333",
        "--color-accent-muted":      "#6276a355",
        "--color-accent-subtle":     "#6276a366",
        "--color-accent-ghost":      "#6276a388",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#778899",
    },
    "superior vena cava":
    {
        "--color-page-background":   "#080010",
        "--color-player-background": "#10001f",
        "--color-accent":            "#9533ff",
        "--color-accent-faint":      "#9533ff11",
        "--color-accent-dim":        "#9533ff22",
        "--color-accent-mid":        "#9533ff33",
        "--color-accent-muted":      "#9533ff55",
        "--color-accent-subtle":     "#9533ff66",
        "--color-accent-ghost":      "#9533ff88",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#9966bb",
    },
    "pizzaplanetstats™":
    {
        "--color-page-background":   "#001500",
        "--color-player-background": "#002200",
        "--color-accent":            "#228b22",
        "--color-accent-faint":      "#228b2211",
        "--color-accent-dim":        "#228b2222",
        "--color-accent-mid":        "#228b2233",
        "--color-accent-muted":      "#228b2255",
        "--color-accent-subtle":     "#228b2266",
        "--color-accent-ghost":      "#228b2288",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#557755",
    },
    "sheriff":
    {
        "--color-page-background":   "#0a0002",
        "--color-player-background": "#130003",
        "--color-accent":            "#830624",
        "--color-accent-faint":      "#83062411",
        "--color-accent-dim":        "#83062422",
        "--color-accent-mid":        "#83062433",
        "--color-accent-muted":      "#83062455",
        "--color-accent-subtle":     "#83062466",
        "--color-accent-ghost":      "#83062488",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#885566",
    },
    "wrongdoer":
    {
        "--color-page-background":   "#0d0a0a",
        "--color-player-background": "#1a1212",
        "--color-accent":            "#a68888",
        "--color-accent-faint":      "#a6888811",
        "--color-accent-dim":        "#a6888822",
        "--color-accent-mid":        "#a6888833",
        "--color-accent-muted":      "#a6888855",
        "--color-accent-subtle":     "#a6888866",
        "--color-accent-ghost":      "#a6888888",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#997777",
    },
    "toronto sun":
    {
        "--color-page-background":   "#0f0000",
        "--color-player-background": "#1c0000",
        "--color-accent":            "#b60707",
        "--color-accent-faint":      "#b6070711",
        "--color-accent-dim":        "#b6070722",
        "--color-accent-mid":        "#b6070733",
        "--color-accent-muted":      "#b6070755",
        "--color-accent-subtle":     "#b6070766",
        "--color-accent-ghost":      "#b6070788",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#aa5555",
    },
    "meme lord":
    {
        "--color-page-background":   "#0f0500",
        "--color-player-background": "#1c0900",
        "--color-accent":            "#c04000",
        "--color-accent-faint":      "#c0400011",
        "--color-accent-dim":        "#c0400022",
        "--color-accent-mid":        "#c0400033",
        "--color-accent-muted":      "#c0400055",
        "--color-accent-subtle":     "#c0400066",
        "--color-accent-ghost":      "#c0400088",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#aa7744",
    },
    "dank":
    {
        "--color-page-background":   "#000f00",
        "--color-player-background": "#001a00",
        "--color-accent":            "#00ff00",
        "--color-accent-faint":      "#00ff0011",
        "--color-accent-dim":        "#00ff0022",
        "--color-accent-mid":        "#00ff0033",
        "--color-accent-muted":      "#00ff0055",
        "--color-accent-subtle":     "#00ff0066",
        "--color-accent-ghost":      "#00ff0088",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#55aa55",
    },
    "normie":
    {
        "--color-page-background":   "#0f0f00",
        "--color-player-background": "#1a1a00",
        "--color-accent":            "#faed27",
        "--color-accent-faint":      "#faed2711",
        "--color-accent-dim":        "#faed2722",
        "--color-accent-mid":        "#faed2733",
        "--color-accent-muted":      "#faed2755",
        "--color-accent-subtle":     "#faed2766",
        "--color-accent-ghost":      "#faed2788",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#aaaa55",
    },
    "saviour of the boys":
    {
        "--color-page-background":   "#0a0700",
        "--color-player-background": "#160f00",
        "--color-accent":            "#c27c0e",
        "--color-accent-faint":      "#c27c0e11",
        "--color-accent-dim":        "#c27c0e22",
        "--color-accent-mid":        "#c27c0e33",
        "--color-accent-muted":      "#c27c0e55",
        "--color-accent-subtle":     "#c27c0e66",
        "--color-accent-ghost":      "#c27c0e88",
        "--color-text-bright":       "#ffffff",
        "--color-text-muted":        "#997733",
    },
};

let activePlaylists = new Set(Object.keys(playlists));
let songs = []; 
let currentSongIndex = 0;
let isRepeatOn = false;

const audioPlayer = document.getElementById('audioPlayer');

// applies a theme by setting all its css variables on the root element
function applyTheme(themeName)
{
    const theme = themes[themeName];
    const root = document.documentElement;

    Object.entries(theme).forEach(([variable, value]) =>
    {
        root.style.setProperty(variable, value);
    });
}

function toggleThemeDropdown()
{
    document.getElementById('themeOptions').classList.toggle('open');
}

// builds the theme picker dropdown and wires up the change event
function renderThemePicker()
{
    const options = document.getElementById('themeOptions');

    options.innerHTML = Object.keys(themes).map(name => `
        <div class="playlist-checkbox-option" onclick="selectTheme('${name}')">
            ${name}
        </div>
    `).join('');
}

function selectTheme(name)
{
    applyTheme(name);
    document.getElementById('themeLabel').textContent = name;
    document.getElementById('themeOptions').classList.remove('open');
}

// builds songs array from all selected playlists user chose
function buildSongList()
{
   songs = [];

    activePlaylists.forEach(playlistName =>
    {
        playlists[playlistName].forEach(filename =>
        {
            songs.push(
            {
                file:     playlistName + '/' + filename,
                name:     filename,
                playlist: playlistName,
            });
        });
    });
}

// opens and closes the playlist dropdown
function togglePlaylistDropdown()
{
    document.getElementById('playlistOptions').classList.toggle('open');
}

// updates the dropdown label based on how many playlists are selected
function updateDropdownLabel()
{
    const total    = Object.keys(playlists).length;
    const selected = activePlaylists.size;
    const label    = selected === total ? 'all playlists' : selected === 0 ? 'no playlists' : selected + ' playlists';

    document.getElementById('dropdownLabel').textContent = label;
}

// playlists front end
function renderPlaylistPicker()
{
    const options = document.getElementById('playlistOptions');

    options.innerHTML = Object.keys(playlists).map(name => `
        <label class="playlist-checkbox-option">
            <input type="checkbox" value="${name}" checked
                onchange="togglePlaylist('${name}', this.checked)">
            ${name}
        </label>
    `).join('');

    updateDropdownLabel();
}

// toggles a playlist on or off
function togglePlaylist(name, isChecked)
{
    if (isChecked)
    {
        activePlaylists.add(name);
    }
    else
    {
        activePlaylists.delete(name);
    }

    updateDropdownLabel();
    buildSongList();
    currentSongIndex = 0;
    renderSongList();

    if (songs.length > 0)
    {
        loadSong(0);
    }
    else
    {
        audioPlayer.pause();
        audioPlayer.src = '';
        document.getElementById('nowPlayingTitle').textContent = 'no song selected';
        document.title = 'JackWire';
    }

    document.getElementById('playBtn').textContent = '▶';
}

// close dropdown when clicking outside
document.addEventListener('click', function(e)
{
    const playlistDropdown = document.getElementById('playlistDropdown');
    const themeDropdown = document.getElementById('themeDropdown');

    if (!playlistDropdown.contains(e.target))
    {
        document.getElementById('playlistOptions').classList.remove('open');
    }
    if (!themeDropdown.contains(e.target))
    {
        document.getElementById('themeOptions').classList.remove('open');
    }
});

// convert seconds to m:ss 
function formatTime(seconds) {
    if (isNaN(seconds))
    {
        return '0:00';
    }
         
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');

    return `${mins}:${secs}`;
}

// returns next song index or random if shuffle is on
function getNextIndex() 
{
    return (currentSongIndex + 1) % songs.length;
}

// remove .mp3 from name
function getDisplayName(song) 
{
    return song.name
        .replace('.mp3', '')
        .replace(/\(.*?\)/g, '')
        .replace(/\[.*?\]/g, '')
        .trim();
}

// loads song by index 
function loadSong(index) 
{
    currentSongIndex = index;
    audioPlayer.src = songs[index].file;
    const displayName = getDisplayName(songs[index]);
    document.getElementById('nowPlayingTitle').textContent = displayName;
    document.title = 'JackWire - ' + displayName;
    renderSongList();
}

// plays song 
function playSong(index) 
{
    loadSong(index);
    audioPlayer.play();
    document.getElementById('playBtn').textContent = '⏸';
}

// rebuilds song list and highlights active songs
function renderSongList() 
{
    document.getElementById('songList').innerHTML = songs.map((song, index) => `
        <div class="song-item${index === currentSongIndex ? ' active' : ''}" onclick="playSong(${index})">
            ${index === currentSongIndex ? '▶ ' : ''}${getDisplayName(song)}
        </div>
    `).join('');
}

document.getElementById('playBtn').onclick = () => {
    if (audioPlayer.paused) 
    {
        audioPlayer.play();
        document.getElementById('playBtn').textContent = '⏸';
    } 
    else
    {
        audioPlayer.pause();
        document.getElementById('playBtn').textContent = '▶';
    }
};

// next
document.getElementById('nextBtn').onclick = () => playSong(getNextIndex());

// previous
document.getElementById('prevBtn').onclick = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
};

// shuffle
document.getElementById('shuffleBtn').onclick = function() 
{
    const currentFile = songs[currentSongIndex].file;
    shuffleSongs();
    currentSongIndex = songs.findIndex(s => s.file === currentFile);
    renderSongList();
};

function shuffleSongs()
{
    for (let i = songs.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
}

// repeat
document.getElementById('repeatBtn').onclick = function() {
    isRepeatOn = !isRepeatOn;
    this.classList.toggle('active', isRepeatOn);
};

// volume 
// volume
document.getElementById('volumeSlider').oninput = 
document.getElementById('volumeSlider').onchange = function() 
{
    audioPlayer.volume = this.value / 100;
    document.getElementById('volumeLabel').textContent = this.value + '%';
};

// progress bar
document.getElementById('progressBar').onclick = function(e) {
    const rect = this.getBoundingClientRect();
    const clickPercent = (e.clientX - rect.left) / rect.width;
    
    audioPlayer.currentTime = clickPercent * audioPlayer.duration;
};

// update progress bar and timestamps
audioPlayer.ontimeupdate = () => {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;

    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
    document.getElementById('totalTime').textContent = formatTime(audioPlayer.duration);
};

// autoplay
audioPlayer.onended = () => {
    if (isRepeatOn) 
    {
        audioPlayer.play();
        return;
    }
    playSong(getNextIndex());
};

// get songs
buildSongList();
renderSongList();
renderPlaylistPicker();
renderThemePicker();
selectTheme("lime");
loadSong(0); 
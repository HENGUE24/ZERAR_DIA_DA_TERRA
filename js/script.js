// Inicializar mapa (centro em Luanda)
var map = L.map('mapa').setView([-8.8383, 13.2344], 12);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> & CartoDB',
    subdomains: 'abcd',
    maxZoom: 18
}).addTo(map);

// Botão para obter localização atual e preencher link do WhatsApp (usa o primeiro número: +244 941 186 857)
document.getElementById('btn-localizar').addEventListener('click', () => {
    if (!navigator.geolocation) {
        alert('Geolocalização não suportada neste navegador.');
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;
            const msg = `Olá! Quero reportar um local:\n📍 Localização: ${mapsLink}\n📝 Descrição: \n📸 (foto anexada)`;
            const waLink = `https://wa.me/244941186857?text=${encodeURIComponent(msg)}`;
            document.getElementById('local-msg').innerHTML = `<a href="${waLink}" target="_blank" class="btn whatsapp" style="display:inline-block; margin-top:8px;">📱 Enviar esta localização no WhatsApp (adm 1)</a>`;
        },
        () => {
            alert('Não foi possível obter sua localização. Active o GPS e tente novamente.');
        }
    );
});

// Futuramente: carregar pontos reportados de um JSON ou Google Sheets

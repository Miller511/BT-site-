document.getElementById("menu-toggle").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
});

const map = L.map('map').setView([-14.277, -38.997], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const locais = [
    { nome: "Praia da Concha", categoria: "praia", coords: [-14.279, -38.990], descricao: "Uma praia tranquila e ótima para relaxar." },
    { nome: "Trilha da Prainha", categoria: "trilha", coords: [-14.281, -39.002], descricao: "Trilha cercada por mata atlântica." },
    { nome: "Restaurante Maré Alta", categoria: "restaurante", coords: [-14.276, -38.995], descricao: "Frutos do mar frescos e ambiente aconchegante." }
];

const marcadores = [];

locais.forEach(local => {
    const marcador = L.marker(local.coords).addTo(map)
        .bindPopup(`<b>${local.nome}</b><br>${local.descricao}<br><button onclick="traçarRota(${local.coords})">Traçar Rota</button>`);
    
    marcadores.push({ marcador, categoria: local.categoria });
});

function filtrarCategoria(categoria) {
    marcadores.forEach(({ marcador, categoria: cat }) => {
        if (categoria === "todos" || categoria === cat) {
            marcador.addTo(map);
        } else {
            marcador.remove();
        }
    });
}

function traçarRota(lat, lng) {
    alert(`Abrindo rota para: ${lat}, ${lng}`);
}

document.getElementById("menu-toggle").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
});

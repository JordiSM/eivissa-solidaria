// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map centered on Ibiza
    var map = L.map('map').setView([38.9695031,1.3863316], 10);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Array of collection points with coordinates
    var collectionPoints = [
        // EIVISSA
        {
            name: 'Parroquia Santa Cruz Ibiza',
            address: 'C/ d Aragó, 16, 07800 Eivissa, Illes Balears',
            phone: '+34 971 30 12 76',
            latitude: 38.90896523660609, 
            longitude: 1.430312846599723,
            type: 'church' // Tipo para asignar icono específico
        },
        {
            name: 'Can Tina',
            address: 'Carrer de Sant Cristòfol, 15, 07800 Eivissa',
            phone: '+34 971 09 49 65',
            latitude: 38.911901535946704, 
            longitude: 1.4271738317074016,
            type: 'collection_point'
        },

        // SAN ANTONI
        {
            name: 'Policia Local de Sant Antoni de Portmany',
            address: 'C/ dAlacant, 33, 07820 Sant Antoni de Portmany',
            phone: '+34 971 34 08 30',
            latitude: 38.98532279523484, 
            longitude: 1.2997722466645578,
            type: 'police'
        },
        {
            name: 'CEIP Cervantes',
            address: 'Carrer Marino Riquer, s/n, 07820 Sant Antoni de Portmany',
            phone: '+34 971 34 14 23',
            latitude: 38.981229777667316,
            longitude: 1.2988822921021512,
            type: 'school'
        },
        {
            name: 'CEIP Ses Planes',
            address: 'Diseminado Poligono 14, 114, 07829, Cala de Bou',
            phone: 'No info',
            latitude: 38.981229777667316,
            longitude: 1.2988822921021512,
            type: 'school'
        }
    ];

    // Añadir marcadores al mapa para cada punto de recogida utilizando iconos predeterminados
    collectionPoints.forEach(function(point) {
        L.marker([point.latitude, point.longitude])
            .addTo(map)
            .bindPopup('<strong>' + point.name + '</strong><br>' + point.address + '<br>' + (point.phone !== 'No info' ? '<i class="fa-solid fa-phone"></i> Teléfono: ' + point.phone : 'Teléfono: No info'));
    });

});

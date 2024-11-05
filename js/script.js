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
        // San Antonio
        {
            name: 'Policia Local de Sant Antoni de Portmany',
            address: "C/ d'Alacant, 33, 07820 Sant Antoni de Portmany",
            phone: "+34 971 34 08 30",
            latitude: 38.985343893394806, 
            longitude: 1.2997565057887437,
            type: 'police'
        },
        {
            name: 'CEIP Cervantes',
            address: "Carrer Marino Riquer, s/n, 07820 Sant Antoni de Portmany",
            phone: '+34 971 34 14 23',
            latitude: 38.981229777667316,
            longitude: 1.2988822921021512,
            type: 'school'
        },
        {
            name: 'CEIP Sant Antoni',
            address: "Carrer Corb Marí, 07820 Sant Antoni de Portmany",
            phone: "+34 971 93 30 48",
            latitude: 38.96455570930124,
            longitude: 1.3139374589727715,
            type: 'school'
        },
        {
            name: 'Centro de Protección Animal Sa Coma',
            address: 'Sa Coma Ibiza carretera de, Ibiza, 07800 Sant Antoni de Portmany',
            phone: "+34 971 19 22 81",
            latitude: 38.93664997018004,
            longitude: 1.4087935671132052,
            type: 'store'
        },
        {
            name: "Peluquería Canina Cali's",
            address: 'Carrer de Catalunya, 6, BAJO, 07820 Sant Antoni de Portmany',
            phone: "+34 605 10 32 62",
            latitude: 38.984764565376445,
            longitude: 1.299882328969994,
            type: 'store'
        },

        // San Rafael
        {
            name: 'Clinica Veterinaria Animalsvet',
            address: 'Avinguda Isidor Macabich, 5, 07816 Sant Rafel',
            phone: "+34 971 19 83 88",
            latitude: 38.96176969376388, 
            longitude: 1.398815165543731,
            type: 'store'
        },
        // San José
        {
            name: 'CEIP Ses Planes',
            address: "Diseminado Poligono 14, 114, 07829",
            phone: null,
            latitude: 38.95739734328307,
            longitude: 1.2699895387690592,
            type: 'school'
        },
        {
            name: 'Mercadillo Sant Jordi',
            address: "V9PW+XM, 07817 Sant Jordi de ses Salines, Illes Balears",
            phone: null,
            latitude: 38.887454620158294,
            longitude: 1.3966802525719186,
            type: 'market'
        },
        {
            name: 'Xaire Casal de Joves',
            address: 'Avinguda del Diputat Josep Ribas, 07830 Sant Josep de sa Talaia',
            phone: null,
            latitude: 38.91828626766178,
            longitude: 1.306302817643593,
            type: 'community_center'
        },
        {
            name: 'Bauxa Casal De Joves',
            address: 'Av. Sant Agustí, 166, 07829 Sant Josep de sa Talaia',
            phone: null,
            latitude: 38.96622099018238,
            longitude: 1.2791123244466334,
            type: 'community_center'
        },
        {
            name: 'Xerinola Casal de Sant Jordi',
            address: 'Carrer d Atenes, 07817 Sant Josep de sa Talaia',
            phone: "+34 971 30 62 96",
            latitude: 38.896418987298304,
            longitude: 1.4020375265946823,
            type: 'community_center'
        },
    
        // Ibiza
        {
            name: 'Parroquia Santa Cruz Ibiza',
            address: "C/ d'Aragó, 16, 07800 Eivissa, Illes Balears",
            phone: null,
            latitude: 38.908953210134854,
            longitude: 1.4303118331144251,
            type: 'church'
        },
        {
            name: 'Can Tina',
            address: 'Calle Sant Cristòfol N15',
            phone: '+34 971 09 49 65',
            latitude: 38.911901535946704,
            longitude: 1.4271738317074016,
            type: 'collection_point'
        },
        {
            name: 'Hotel Grand Palladium',
            address: "Carretera de Platja d'en Bossa, Platja d'en Bossa, s/n, 07817",
            phone: "+34 971 39 67 84",
            latitude: 38.87700214813464,
            longitude: 1.399963859599408,
            type: 'hotel'
        },
        {
            name: 'Asociación de Vecinos de San Pablo',
            address: 'Carrer des Jondal, 26, 07800 Eivissa',
            phone: null,
            latitude: 38.90887393804732,
            longitude: 1.4148102369665507,
            type: 'club'
        },
        {
            name: 'Mascotas Cora Eivissa',
            address: 'C/ de Castella, 37, 07800 Eivissa',
            phone: "+34 971 30 15 16",
            latitude: 38.90943004727961,
            longitude: 1.4274208490441733,
            type: 'store'
        },
        {
            name: 'CB Electric',
            address: 'Carrer Cas Raspallar, 12, Pol. Ind, 07800 Blanca Dona',
            phone: "+34 971 31 75 70",
            latitude: 38.92140772731697,
            longitude: 1.4275045072187047,
            type: 'store'
        },
        {
            name: 'ECI Escuela de Cine de Ibiza',
            address: 'Carrer de Múrcia, 19, 07800 Eivissa, Illes Balears',
            phone: "+34 633 57 06 29",
            latitude: 38.90891947744337,
            longitude: 1.4234378466436144,
            type: 'store'
        },
        {
            name: 'Taquillas Trasmapi Ibiza',
            address: 'Avinguda de Santa Eulària des Riu, s/n, 07800 Eivissa',
            phone: "+34 971 31 44 33",
            latitude: 38.912758017593596,
            longitude: 1.4351313838086606,
            type: 'store'
        },
        {
            name: 'Suma Puig D`en Valls',
            address: "Suma Puig D' en Valls 07819, Balearic Islands",
            phone: "",
            latitude: 38.9256810596716,
            longitude: 1.4300268100909637,
            type: 'store'
        },
        {
            name: 'Asociación de Vecinos Playa d en Bossa',
            address: 'Carrer de les Alzines, 10, Eivissa',
            phone: null,
            latitude: 38.893657198281076,
            longitude: 1.4065333148997918,
            type: 'club'
        },
        // Santa Eulària
        {
            name: 'Ludoteca MEVAK IBIZA KIDS',
            address: 'Carrer de Cèsar Puget Riquer, 42, LOCAL 4, 07840 Santa Eulària des Riu',
            phone: "+34 628 49 46 02",
            latitude: 38.98999656063986,
            longitude: 1.5441223373465762,
            type: 'ludoteca'
        },
        {
            name: 'Restaurante Project Social',
            address: 'Carrer de Sant Llorenç, 22, 07840 Santa Eulària des Riu',
            phone: null,
            latitude: 38.98479697344273,
            longitude: 1.53701577048358,
            type: 'restaurant'
        },
        {
            name: 'Mascotas Cora Santa Eulalia',
            address: 'Carrer del Mar, 15, 07840 Santa Eulària des Riu',
            phone: "+34 971 41 26 92",
            latitude: 38.98470877182918, 
            longitude: 1.535795327275915,
            type: 'store'
        },
        {
            name: 'Family Evolution Center',
            address: 'Carrer de Cèsar Puget Riquer, N34, 07840 Santa Eulalia del Río',
            phone: "+34 639 46 72 79",
            latitude: 38.98902749865954,
            longitude: 1.542353618115511,
            type: 'store'
        },
        {
            name: 'Clínica Veterinaria Siesta',
            address: 'Carrer ses Petúnies, 9, 07849 Siesta, Illes Balears',
            phone: "+34 971 09 22 74",
            latitude: 38.97701674393976,
            longitude: 1.5235486599283528,
            type: 'store'
        },

        // San Juan
        {
            name: 'Ayuntamiento de Sant Joan',
            address: "Plaza del Ayuntamiento, 1, 07810 Sant Joan de Labritja",
            phone: "+34 971 33 30 03",
            latitude: 39.077933856555724,
            longitude: 1.5105317261213485,
            type: 'municipality'
        },
        {
            name: 'E. I. BENIRRAS (ESCOLETA MUNICIPAL)',
            address: "Lugar, VENDA DE BENIRRAS, 144, 07812",
            phone: null,
            latitude: 39.05878803282686,
            longitude: 1.473429919939662,
            type: 'school'
        },
        {
            name: 'CEIP Labritja',
            address: "C/ del Rector Xicu Torres, 2, 07810 Sant Joan de Labritja",
            phone: null,
            latitude: 39.07690061359235,
            longitude: 1.5125283989727483,
            type: 'school'
        },
        {
            name: 'Mercadillo San Joan',
            address: "Carrer de sa Cala, 3, 07810 Sant Joan de Labritja, Illes Balears",
            phone: "",
            latitude: 39.077883484565454,
            longitude: 1.5139021625194025,
            type: 'store'
        },
    
        // Formentera
        {
            name: 'Salón Parroquial Sant Ferran',
            address: "Carrer Major, 43, 07871 Sant Ferran de Ses Roques, Illes Balears",
            phone: "+34 971 32 81 62",
            latitude: 38.70755427327232,
            longitude: 1.4588037847180284,
            type: 'parish'
        },
        {
            name: 'Taquillas Trasmapi Formentera',
            address: 'Carrer del Vapor Manolito, 07870 La Savina',
            phone: "+34 971 32 27 03",
            latitude: 38.73407816014388,
            longitude: 1.4153328650584145,
            type: 'store'
        }
    ];

    // Añadir marcadores al mapa para cada punto de recogida utilizando iconos predeterminados
    collectionPoints.forEach(function(point) {
        if (point.latitude && point.longitude) { // Verificar si las coordenadas están disponibles
            L.marker([point.latitude, point.longitude])
                .addTo(map)
                .bindPopup('<strong>' + point.name + '</strong><br>' + point.address + '<br>' + (point.phone !== 'No info' ? '<i class="fa-solid fa-phone"></i> Teléfono: ' + point.phone : 'Teléfono: No info'));
        }
    });

});

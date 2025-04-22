const cardsData = [
    {
        image: "./Docs/Assets/slide2-1.webp",
        date: "August 25, 2023",
        description: "qiio CEO Felix Adamczyk recognized with the “Digital Shaper 2023” award in the “The Smarties” category",
        link: "/News/qiio-ceo-felix-adamczyk-recognized-digital-shaper-2023-in-the-smarties-category.html"
    },
    {
        image: "./Docs/Assets/news/meet-qiio-at-mobile-world-congress-2023-in-barcelona.webp",
        date: "February 11, 2023",
        description: "Meet qiio at Mobile World Congress 2023 in Barcelona",
        link: "/News/meet-qiio-at-mobile-world-congress-2023-in-barcelona.html"
    },
    {
        image: "./Docs/Assets/news/a-whole-lot-of-swissness-miromico-and-qiio-announce-the-new-microsoft-azure-sphere-secured-miro-edge-sphere-lorawan-gateway.webp",
        date: "February 16, 2022",
        description: "“A whole lot of Swissness”: Miromico and qiio announce the new Microsoft® Azure Sphere-secured miro Edge Sphere LoRaWAN Gateway",
        link: "/News/a-whole-lot-of-swissness-miromico-and-qiio-announce-the-new-microsoft-azure-sphere-secured-miro-edge-sphere-lorawan-gateway.html"
    },
    {
        image: "./Docs/Assets/news/qiio-becomes-the-first-company-in-the-world-to-receive-the-att-network-optimized-certification.webp",
        date: "January 12, 2022",
        description: "qiio becomes the first company in the world to receive the AT&T Network Optimized certification for its secure cellular IoT solution based on Microsoft Azure Sphere®",
        link: "/News/qiio-becomes-the-first-company-in-the-world-to-receive-the-att-network-optimized-certification.html"
    },
    {
        image: "./Docs/Assets/news/qiio-and-avnet-enter-strategic-solution-and-distribution-partnership.webp",
        date: "March 3, 2021",
        description: "qiio and Avnet Enter Strategic Solution and Distribution Partnership",
        link: "/News/qiio-and-avnet-enter-strategic-solution-and-distribution-partnership.html"
    },
    {
        image: "./Docs/Assets/news/qiio-wins-swisscom-5g-startup-challenge-2020.webp",
        date: "December 17, 2020",
        description: "qiio wins Swisscom 5G StartUp Challenge 2020",
        link: "/News/qiio-wins-swisscom-5g-startup-challenge-2020.html"
    },
    {
        image: "./Docs/Assets/news/swisscom-startup-challenge-2020.webp",
        date: "December 15, 2020",
        description: "Swisscom StartUp Challenge 2020",
        link: "/News/swisscom-startup-challenge-2020.html"
    },
    {
        image: "./Docs/Assets/news/was-macht-denn-qiios-q200-guardian-im-buchergestell.webp",
        date: "September 23, 2020",
        description: "q200 Guardian showcased at Microsoft Ignite 2020",
        link: "/News/q200-guardian-showcased-at-microsoft-ignite-2020.html"
    },
    {
        image: "./Docs/Assets/news/qiio-and-sigma-it-consulting-in-strategic-partnership.webp",
        date: "April 21, 2020",
        description: "qiio and Sigma IT Consulting in strategic partnership",
        link: "/News/qiio-and-sigma-it-consulting-in-strategic-partnership.html"
    },
    {
        image: "./Docs/Assets/news/qiio-secures-chf-5-million-in-the-first-financing-round.webp",
        date: "March 17, 2020",
        description: "qiio secures CHF 5 million in the first financing round",
        link: "/News/qiio-secures-chf-5-million-in-the-first-financing-round.html"
    },
    {
        image: "./Docs/Assets/news/qiio-prasentiert-die-erste-sichere-mobilfunklosung.webp",
        date: "February 24, 2020",
        description: "qiio präsentiert die erste sichere Mobilfunklösung auf Basis von Microsoft Azure Sphere",
        link: "/News/qiio-prasentiert-die-erste-sichere-mobilfunklosung.html"
    },
    {
        image: "./Docs/Assets/news/qiio-prasentiert-die-erste-sichere-mobilfunklosung.webp",
        date: "February 24, 2020",
        description: "qiio launches first secured mobile solution based on Microsoft Azure Sphere",
        link: "/News/qiio-launches-first-secured-mobile-solution-based.html"
    },
    {
        image: "./Docs/Assets/news/thermoplan-und-qiio-entwickeln-iot-losung-fur-kaffeemaschinen.webp",
        date: "October 8, 2019",
        description: "Thermoplan und qiio entwickeln IoT-Lösung für Kaffeemaschinen",
        link: "/News/thermoplan-und-qiio-entwickeln-iot-losung-fur-kaffeemaschinen.html"
    },
    {
        image: "./Docs/Assets/news/thermoplan-und-qiio-entwickeln-iot-losung-fur-kaffeemaschinen.webp",
        date: "October 8, 2019",
        description: "Thermoplan Partners with qiio for IoT Coffee Machine Solution",
        link: "/News/thermoplan-partners-with-qiio-for-iot-coffee-machine-solution.html"
    },
    {
        image: "./Docs/Assets/news/qiio-receives-top-award-at-the-2019-baselarea-swiss-industry-4-0-challenge.webp",
        date: "October 3, 2019",
        description: "qiio receives top award at the 2019 BaselArea.swiss Industry 4.0 Challenge",
        link: "/News/qiio-receives-top-award-at-the-2019-baselarea-swiss-industry-4-0-challenge.html"
    },
    {
        image: "./Docs/Assets/news/qiio-ltd-incorporates.webp",
        date: "September 26, 2019",
        description: "qiio Ltd Incorporates",
        link: "/News/qiio-ltd-incorporates.html"
    },
];

const container = document.getElementById("cardContainer");

cardsData.forEach(card => {
    const cardElement = document.createElement("a");
    cardElement.href = card.link;
    cardElement.className = "flex cursor-pointer flex-col w-full hover:-translate-y-2 transition-all duration-500";

    cardElement.innerHTML = `
    <div class="flex items-center justify-center w-full bg-gray-50 p-2 rounded-lg">
        <img src="${card.image}" class="object-cover h-68 mx-auto rounded-lg" alt="">
    </div>
      <h2 class="text-[#4285f4] text-xl font-medium mt-2">${card.date}</h2>
      <p class="text-gray-800 mt-1">${card.description}</p>
      <div class="flex gap-3 items-center">
                    <div class="md:w-60 w-48 bg-[#4285f4] p-0.5 mt-4"></div>
                    <span class="dots mt-4"></span>
                </div>
    `;

    container.appendChild(cardElement);
});

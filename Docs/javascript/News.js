const cardsData = [
    {
        image: "./Docs/Assets/slide2-1.webp",
        date: "August 25, 2023",
        description: "qiio CEO Felix Adamczyk recognized with the “Digital Shaper 2023” award in the “The Smarties” category",
        link: "#"
    },
    {
        image: "./Docs/Assets/slide2-1.webp",
        date: "September 10, 2023",
        description: "qiio launches new IoT device series for industrial applications",
        link: "#"
    },
    {
        image: "./Docs/Assets/slide2-1.webp",
        date: "October 5, 2023",
        description: "Partnership with leading telecom provider to scale IoT connectivity",
        link: "#"
    }
];

const container = document.getElementById("cardContainer");

cardsData.forEach(card => {
    const cardElement = document.createElement("a");
    cardElement.href = card.link;
    cardElement.className = "flex flex-col w-full hover:-translate-y-2 transition-all duration-500";

    cardElement.innerHTML = `
      <img src="${card.image}" class="object-cover h-68 rounded-lg" alt="">
      <h2 class="text-[#4285f4] text-xl font-medium mt-4">${card.date}</h2>
      <p class="text-gray-800 mt-1">${card.description}</p>
    `;

    container.appendChild(cardElement);
});

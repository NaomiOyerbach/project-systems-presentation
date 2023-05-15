export interface system {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
}
//session storage בעקרון זה צריך לבוא מה
//אבל בנתיים אני מאתחלת את המערך כאן
// Store the systems array in session storage

export const systems: system[] = [
    {
        id: 1,
        name: "System 1",
        description: "This is system 1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "img1.jpg",
        link: "https://example.com/system1"
    },
    {
        id: 2,
        name: "System 2",
        description: "This is system 2 description. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "img2.jpg",
        link: "https://example.com/system2"
    },
    {
        id: 3,
        name: "System 3",
        description: "This is system 3 description. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "img3.webp",
        link: "https://example.com/system3"
    },
    {
        id: 4,
        name: "System 4",
        description: "This is system 4 description. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "img4.jpg",
        link: "https://example.com/system4"
    },
    {
        id: 5,
        name: "System 5",
        description: "This is system 5 description. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "img5.jpg",
        link: "https://example.com/system5"
    },
    {
        id: 6,
        name: "System 6",
        description: "This is system 6 description. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "img6.jpg",
        link: "https://example.com/system6"
    },
    {
        id: 7,
        name: "System 7",
        description: "This is system 7 description. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "img7.jpg",
        link: "https://example.com/system7"
    },
    // Add more systems here...
];
export const favorites: system[] = [
    {
        id: 1,
        name: "System 1",
        description: "This is system 1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "img1.jpg",
        link: "https://example.com/system1"
    },
]
localStorage.setItem('systems', JSON.stringify(systems));

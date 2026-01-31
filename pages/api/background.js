const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Indira Gandhi University, Meerpur',
                degree: 'Bsc, Non-Medical',
                detail: "Completed Bsc Non-Medical from Indira Gandhi University, Meerpur.",
                year: '2020-2023'
            },
            {
                id: 1,
                title: 'Vivekanand Senior Secondary School',
                degree: 'Intermediate',
                detail: "Completed Intermediate from Vivekanand Senior Secondary School. with 88% marks in non-medical.",
                year: '2018-2019'
            },
            {
                id: 2,
                title: 'Vivekanand Senior Secondary School',
                degree: 'Matriculation',
                detail: "Completed Matriculation from Vivekanand Senior Secondary School with 10 CGPA.",
                year: '2016-2017'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Droisys',
                role: 'Full stack Developer',
                url: 'https://droisys.com/',
                desc: 'As a full stack developer, I use React,Vue.js, Next, node.js, express & JavaScript to build user interfaces and backends for web applications.',
                year: '10/2025 - Present',
                location: 'Noida, India'
            },
            {
                id: 2,
                title: 'Livekeeping (An IndiaMART Company)',
                role: 'Frontend Developer',
                url: 'https://www.livekeeping.com/',
                desc: 'As a frontend developer, I use React,Vue.js, Next & JavaScript to build user interfaces for web applications.',
                year: '10/2024 - Present',
                location: 'Noida, India'
            },
            {
                id: 3,
                title: 'NxtBigByte pvt. ltd.',
                role: 'Full Stack Developer',
                url: 'https://nbb.ai',
                desc: 'I worked as a full stack developer at NxtBigByte pvt. ltd. where I used React, Vue, Node.js, Express, MongoDB to build web applications.',
                year: '11/2022 - 09/2024',
                location: 'Rewari, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}

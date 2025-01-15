const portfolio = [
    {
        id: 0,
        projectName: "School Management System",
        url: "https://campus-copilot.nbb.ai/",
        image: "projects/copilot.png",
        projectDetail: "School Management System is a web application that helps schools manage their students, teachers, and courses. It is built using React, Vue.js, Node.js, Express, and MongoDB., It has multiple modules like attendance, exam, fee, visitor, transport, etc.",
        technologiesUsed: [
            {
                tech: "Vue.js"
            },
            {
                tech: "GraphQL"
            },
            {
                tech: "Express"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "Vuetify"
            },
        ]
    },
    {
        id: 1,
        projectName: "Restaurant Website",
        url: "not available",
        image: "projects/absco.png",
        projectDetail: "This is a restaurant website built using React, TailwindCSS. It has multiple pages like Home, Menu, About, Contact, etc.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "JavaScript"
            }
        ]
    },
    {
        id: 2,
        projectName: "NxtBigByte Website",
        url: "https://nbb.ai",
        image: "projects/nbb.png",
        projectDetail: "This is a website for NxtBigByte pvt. ltd., This is built for showcasing their services and products offered by them.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 3,
        projectName: "CRM for Livekeeping",
        url: "not available",
        image: "projects/alsn.png",
        projectDetail: "This is a CRM for Livekeeping, It is built using Vue.js, TailwindCSS. It has multiple modules like leads, opportunities, customers, etc.",
        technologiesUsed: [
            {
                tech: "VueJs"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 4,
        projectName: "Virtual Clone Ui",
        url: "https://virtual-mu.vercel.app/",
        image: "projects/virtual.png",
        projectDetail: "Virtual Clone UI is a website built using ReactJS, NextJS, TailwindCSS. It is a platform for creating virtual clones of UI components and deployed on Vercel.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "JavaScript"
            }
        ]
    },
    {
        id: 5,
        projectName: "Apple Clone",
        url: "https://vikash-apple-clone.vercel.app/",
        image: "projects/appleClone.png",
        projectDetail: "Apple Clone is a website built using ReactJS, TailwindCSS. It is a clone of the Apple website and deployed on Vercel.",
        technologiesUsed: [
            {
                tech: "Html"
            },
            {
                tech: "Css"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "ReactJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    // {
    //     id: 0,
    //     projectName: "Tojjar",
    //     url: "/domain-expired",
    //     image: "projects/tojjar.png",
    //     projectDetail: "Tojjar is ecommerce website,  where you can open your own store and sell products of different brands!",
    //     technologiesUsed: [
    //         {
    //             tech: "Nextjs with SSR"
    //         },
    //         {
    //             tech: "Laravel"
    //         },
    //         {
    //             tech: "REST API's"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 1,
    //     projectName: "Otawix",
    //     url: "https://b2c.otawix.com/",
    //     image: "projects/otawix.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "NextJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "REST API's"
    //         },
    //         {
    //             tech: "MUI"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 2,
    //     projectName: "Spatay",
    //     url: "https://spatay.com/",
    //     image: "projects/spatay.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "REST API's"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}

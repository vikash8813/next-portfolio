const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a proficient full-stack developer with expertise in building scalable web applications using modern technologies like Vue.js, React.js, Node.js, and MongoDB. I have hands-on experience in crafting dynamic user interfaces, developing RESTful APIs, and implementing secure, efficient backend solutions. My ability to handle end-to-end development ensures the delivery of robust and high-quality software tailored to client needs.',
    },
    {
        id: 1,
        title: 'Frontend Development',
        desc: 'I specialize in modern frontend development using Vue.js, React.js, and TypeScript. My skills include building responsive and user-friendly interfaces, implementing reusable components, and optimizing application performance for various devices. I am passionate about creating seamless user experiences through clean and maintainable code.',
    },
    {
        id: 2,
        title: 'Backend Development',
        desc: 'I have significant expertise in backend development using Node.js and Express.js. My experience includes creating scalable server-side applications, integrating databases like MongoDB and MySQL, and implementing secure authentication systems. I follow best practices to ensure robust and efficient backend solutions.',
    },
    {
        id: 3,
        title: 'Agile Methodologies',
        desc: "I have extensive experience working with Agile frameworks like Scrum, using tools such as Jira to manage tasks, track progress, and ensure seamless collaboration. From sprint planning to retrospectives, my expertise in Agile practices fosters effective teamwork and timely delivery of high-quality products.",
    },
    {
        id: 4,
        title: 'Version Control with Git',
        desc: "I am proficient in using Git and GitHub for version control and collaboration. My experience includes managing repositories, resolving merge conflicts, and maintaining code integrity through pull requests and branching strategies. These skills ensure efficient teamwork and streamlined development processes.",
    },
];


export default function handler(req, res) {
    res.status(200).json(expertise)
}

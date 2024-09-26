export default function handler(req, res) {
    const projects = [
        {
            id: 1,
            title: "Image Segmentation",
            description: "Developed an image segmentation system using deep learning and computer vision techniques...",
            skills: "Deep learning, Python Programming, Problem Solving"
        },
        {
            id: 2,
            title: "Predicting Wine Quality Through ML Technique",
            description: "In this machine learning project, I utilized Python and various machine learning algorithms to analyze the Wine Quality dataset...",
            skills: "Python"
        },
        {
            id: 3,
            title: "Speaker Recognition",
            description: "The Speaker Recognition System employs audio recordings and machine learning for speaker identification...",
            skills: "Python"
        },
        {
            id: 4,
            title: "Amazon Sales in India",
            description: "This project delves into a comprehensive analysis of Amazon's Sales data...",
            skills: "Tableau"
        },
        {
            id: 5,
            title: "Online Gym Management System",
            description: "Developed and implemented a web-based “Gym Management System” enabling users to book gym packages...",
            skills: "HTML, CSS, PHP"
        }
    ];

    res.status(200).json(projects);
}

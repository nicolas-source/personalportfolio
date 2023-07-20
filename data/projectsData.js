import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
    {
        id: 10,
        shortName: "ProteinPrediction",
        name: "Machine Learning (NLP) for Protein Prediction",
        description: [
            "Engineered statistical models to make predictions on protein sequences",
            "Developed knowledge in deep learning to debug issues on models",
            "Implemented models using industry frameworks (Pytorch, Tensorflow)",
            "Used JIRA and followed AGILE development methodology"
        ],
        image: "/images/Capstone/CapstonePoster.png",
        link: "/project/ProteinPrediction",
        tools: ["Python", "Pytorch", "Tensorflow"],
        projectInfo: [
            "Engineered statistical models to make predictions on protein sequences",
            "Developed knowledge in deep learning to debug issues on models",
            "Implemented models using industry frameworks (Pytorch, Tensorflow)",
            "Used JIRA and followed AGILE development methodology"
        ],
        projectDate: 'Sep 2022 - Apr 2023',
        projectObjective: "aaaaaaaaaaaaaaaaaaaaaaaaa",
        projectImages: [
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/Capstone/CapstonePoster.png',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/Capstone/CapstoneOverview.gif',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/Capstone/CapstoneGanttChart.png',
            },
        ],

    },
    {
        id: 2,
        shortName: "CybersecurityAnalysis",
        name: "Real-world Cyber-security Analysis",
        description: [
            "Presented at the 2023 Vancouver Security Special Interest Group",
            "Won Best Analysis Project of 2023 for the UBC Cybersecurity Course",
            "Analyzed potential security flaws of a real-world web application and reported issues to protect sensitive data",
        ],
        image: "/images/CybersecurityAnalysis/CybersecurityAnalysis_Testing.png",
        link: "/project/CybersecurityAnalysis",
        tools: ["Analysis", "Presentation"],
        projectInfo: [
            "Presented at the 2023 Vancouver Security Special Interest Group",
            "Won Best Analysis Project of 2023 for the UBC Cybersecurity Course",
            "Analyzed potential security flaws of a real-world web application and reported issues to protect sensitive data",
            "Conducted manual penetration testing and automated scanning for vulnerabilities to provide client recommendations",
        ],
        projectDate: 'Sep 2022 - Dec 2022',
        projectObjective: "Make things",
        projectImages: [
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/CybersecurityAnalysis/CybersecurityAnalysis_System.png',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/CybersecurityAnalysis/CybersecurityAnalysis_Method.png',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/CybersecurityAnalysis/CybersecurityAnalysis_Testing.png',
            },
        ],

    },
    {
        id: 3,
        shortName: "ShopeerAndroidApp",
        name: "Shopeer Android App",
        description: [
            "Used Node.js and Express.js for backend and MongoDB for database",
            "Used Websocket for live chat functionality",
            "Used Codacy for automated testing and code smell",
            "Used Jest for backend testing",
            "Used Backend hosted on Microsoft Azure"
        ],
        image: "/images/Shopeer/shopeer_Login.png",
        link: "/project/ShopeerAndroidApp",
        tools: ["React", "NodeJs", "MongoDB", "JUnit"],
        projectInfo: [
            "Shopeer aims to connect people, alleviate economic pressure, and reduce social isolation in urban communities.",
            "Shopeer is for newly independent adults, newcomers, and people in single-person households searching for companions for everyday activities.",
            "Through Shopeer, users can input their activities, match with interested peers, and start group chats.",
            "Running errands or doing recreational activities with peers allows users to reduce costs by buying in bulk or taking advantage of group discounts.",
            "Link to design doc -> https://docs.google.com/document/d/1Jwydb7bxtgdMewcTUrViGvGbpD4DheYGjudxitidoJE/edit?usp=sharing"
        ],
        projectDate: 'May 2022 - Aug 2022',
        projectObjective: "aaaaaaaaaaaaaaaaaaaaaaaaa",
        projectImages: [
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/Shopeer/shopeer_Login.png',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/Shopeer/shopeer_GoogleAuth.png',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/Shopeer/shopeer_ChatUser.png',
            }, {
            id: uuidv4(),
            title: 'titleName',
                img: '/images/Shopeer/shopeer_Modules.png',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/Shopeer/shopeer_DB_Schema.png',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/Shopeer/shopeer_UserUseCase.png',
            },
        ],

    },
    {
        id: 4,
        shortName: "PersonalWebsite",
        name: "Personal Website",
        description: [
            "Used NextJs App Router for dynamic routing and dynamically building formatted pages",
            "Set up hosting on Oracle cloud vm",
        ],
        image: "/images/Personalwebsite/personalwebsite_1.png",
        link: "/project/PersonalWebsite",
        tools: ["React", "NextJs", "NodeJs"],
        projectInfo: [
            "Used NextJs App Router for dynamic routing and dynamically building formatted pages",
            "Set up hosting on Oracle cloud vm",
        ],
        projectDate: 'Jul, 2023',
        projectObjective: "aaaaaaaaaaaaaaaaaaaaaaaaa",
        projectImages: [
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/Personalwebsite/personalwebsite_1.png',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/Personalwebsite/personalwebsite_2.png',
            },
        ],
    },
    {
        id: 5,
        shortName: "UBCDanceClubWebsite",
        name: "UBC Dance Club Website",
        description: [
            "Redesigned website for responsiveness and mobile use to increase web traffic over 5 times",
        ],
        image: "/images/UBCDC/UBCDC_FrontPage.png",
        link: "/project/UBCDanceClubWebsite",
        tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress"],
        projectInfo: [
            "Redesigned website for responsiveness and mobile use to increase web traffic over 5 times",
        ],
        projectDate: 'May 2020',
        projectObjective: "aaaaaaaaaaaaaaaaaaaaaaaaa",
        projectImages: [
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/UBCDC/UBCDC_FrontPage.png',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/UBCDC/UBCDC_About.png',
            },
            {
                id: uuidv4(),
                title: 'titleName',
                img: '/images/UBCDC/UBCDC_Execs.png',
            },
        ]
    }
]

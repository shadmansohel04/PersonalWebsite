import "../styles/projectsPage.css"
import ProjectTileCompPage from "./projectsTileCompPage"

export default function ProjectsContent(){

    const projects = [
        {
            img: "./FIGHTBATTLE.png",
            link: "https://hackthe6repo.onrender.com",
            name: "Battle Bites",
            github: "https://github.com/shadmansohel04/HackThe6Repo",
            devpost: "https://devpost.com/software/battle-bites?ref_content=my-projects-tab&ref_feature=my_projects",
            tech:[
                "ReactJS",
                "Socket.io",
                "NodeJS",
                "Google Gemini",
                "MongoDB",
                "Auth0",
                "AWS S3"
            ],
            desc: "Battle Bites is a browserbased, Street Fighter style game where your real life meals power up your fighter! Snap a photo and let AI turn it into boosts. From nutrition to taste, every bite boosts your fighter in multiplayer battles."
        },
        {
            img: "./GAME.png",
            link: "https://leetcodebot-gumy.onrender.com/",
            name: "LeetBot",
            github: "https://github.com/shadmansohel04/LeetcodeBot",
            devpost: "https://devpost.com/software/leetcode-robo?ref_content=my-projects-tab&ref_feature=my_projects",
            tech:[
                "ReactJS",
                "Socket.io",
                "Flask",
                "Mistral AI",
                "NES.CSS"
            ],
            desc: "LeetBot, the first-place winner at Ignitian Hacks 2024, is a multiplayer PvP game based on LeetCode stats. Built with a Python Flask backend, Socket.io for real-time interactions, and a React.js frontend styled with NES.CSS, it integrates Mistral AI for unique usernames and the LeetCode GraphQL API to track player stats. Refined post-hackathon, LeetBot is now live—grab a friend and play!"
        },
        {
            img: "./TMRUN.png",
            link: "https://tmrun.onrender.com/",
            name: "TMRUN",
            github: "https://github.com/shadmansohel04/TMRUN_FRONTEND",
            tech:[
                "ReactJS",
                "NodeJS",
                "MongoDB",
                "ExpressJS",
                "CSS"
            ],
            desc: "TMRUN is a web app offering fresh metrics for runners of all levels, focusing on factors like consistency and elevation rather than just pace and time. Built with Node.js, Express, MongoDB, and React, it's hosted on Render and integrates Strava's API for real-time scores and a global leaderboard to inspire progress and community."
        },
        {
            img: "./RATETO.png",
            link: "https://rateto-frontend.onrender.com/",
            name: "RateTo",
            github: "https://github.com/shadmansohel04/RateTO_Frontend",
            tech:[
                "ReactJS",
                "Flask",
                "PostgreSQL",
                "React Leaflet",
                "CSS"
            ],
            desc: "RateTO is a fullstack project providing Torontonians with localized crime, park, and transportation scores using OpenData Toronto. Built with Python (Flask) and ReactJS, it’s my tribute to Toronto, where I study and grew up in the GTA."
        },
        {
            img: "./MORNING.jpg",
            name: "Good Morning",
            github: "https://github.com/shadmansohel04/Daily-Morning-Text-message",
            tech:[
                "Python",
                "AWS EC2 Instance"
            ],
            desc: "I created a Python script that automates daily SMS updates with location-based weather forecasts and commute times. Using Twilio, Google Maps, and OpenWeather APIs, it retrieves real-time data on traffic and weather, sending personalized updates each morning to streamline daily planning."
        },
        {
            img: "./ANXIETY.png",
            name: "Anxiety Game",
            github: "https://github.com/shadmansohel04/AnxiousGame/tree/master",
            tech:[
                "Java",
                "JavaFX",
                "Object Oriented Programming"
            ],
            desc: "Anxiety is a local PvP game built with Java and JavaFX, leveraging object-oriented programming principles. It challenges players with strategic decision-making, testing their ability to think critically and adapt in real-time competition."
        }
    ]

    return(
        <section id="pageSetup" className="projectsPage">
            <h1 className="bigTitle">
                {"PROJECTS".split("").map((letter, index)=>{
                    return(
                        <span
                            className="letterAnimation"
                            key={`projects-${index}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter}
                        </span>
                    )
                })}
            </h1>

            <div className="projectsContainerPage">
                {projects.map((each, index)=>{
                    if(each.devpost){
                        return(<ProjectTileCompPage desc={each.desc} tech={each.tech} key={index} img={each.img} name={each.name} github={each.github} link={each.link} devpost={each.devpost}/>)
                    }
                    return(<ProjectTileCompPage desc={each.desc} tech={each.tech} key={index} img={each.img} name={each.name} github={each.github} link={each.link}/>)

                })}
            </div>
            

        </section>
    )
}
import ContentBox from "../../components/ContentBox/ContentBox";
import "./Portfolio.css";

const icons = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    androidstudio: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    raspberrypi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
    django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    ubuntu: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    sdl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sdl/sdl-plain.svg",
    cmake: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg",
};

export default function Portfolio() {
    return (
        <div>
            <ContentBox>
                <h1>Cannon Game</h1>
                <p className="date">Fall 2022</p>
                <hr />
                <a href="https://github.com/ALaevens/Cannon-Game-SDL2">Source (GitHub)</a>
                <a href="https://github.com/ALaevens/Cannon-Game-SDL2/releases">Download Executable</a>
                <p className="description">
                I started this project as an opportunity to learn about SDL2, which is a C++ graphics library I have been interested in for quite some time. The game itself is a remake of a game I made in high school using Pygame. Remaking a game instead of trying to make a new one allowed me to focus fully on working with SDL2 and refamiliarizing myself with C++. Due to the hands-off nature of SDL2, I had to implement many core parts of the game engine on my own. Some systems I implemented were an Entity Component System (ECS), a simple state machine, asset managers, and window management. These systems were made by wrapping the core SDL calls with much more usable classes. Despite the object oriented nature of the engine, the game itself doesn't suffer from a convoluted inheritance tree thanks to the ECS system.
                </p>
                <div>
                {["cpp", "sdl", "cmake"].map(lang => <img className="langIcon" src={icons[lang]} alt={lang} />)}
                </div>
            </ContentBox>

            <ContentBox>
                <h1>This Website</h1>
                <p className="date">Summer 2022</p>
                <hr />
                <a href="https://github.com/ALaevens/alaevens.ca">Source (GitHub)</a>
                <p className="description">
                This website was built to serve two purposes. The first was to act as an easily accessible place to host my resume while having more freedom with the
                 design than a traditional resume template. The second was to provide an incentive to practice web development skills which were not a focus of my university classes. 
                 To add to the challenge, I decided I would create the website in pure ReactJS without assistance from any additional 
                 UI libraries such as react-bootstrap or material-ui. This site is currently self-hosted on my own home server using Nginx and the latest 
                 Ubuntu LTS release.
                </p>
                <div>
                    {["html", "css", "javascript", "react", "nginx", "ubuntu"].map(lang => <img className="langIcon" src={icons[lang]} alt={lang} />)}
                </div>
            </ContentBox>

            <ContentBox>
                <h1>LaTandao App</h1>
                <p className="date">Spring 2022</p>
                <hr/>
                <a href="https://cmput401.ca/projects/ec209148-f399-455c-b2e8-f23b60fb2287">Project page with demo</a>
                <p className="description">
                LaTandao is an app I helped build as part of the CMPUT 401 course at the University of Alberta. CMPUT 401 is a project-based course which aims to teach 
                the software development process and project management by having the students build real world applications. My group was given the task of building 
                an app for La Connexional, a local Edmonton event organizing group. They had a preliminary concept for an app which would allow users to view events and products 
                that businesses could promote on the platform. I mainly contributed to this project through my work on the backend. The backend is built with Django and MySQL
                and serves content to the app with a REST API. I also wrote the backend for the chat function using Django channels which is socket based with a Redis cache so that the chat
                experience is responsive. The messages are regularly saved from the redis cache to the MySQL database so that messages which arrived when a user was not logged in are
                still preserved. Due to rapidly approaching deadlines, I taught myself Flutter and Dart so that I could build a standalone chat application which was incorporated into
                the app as the chat tab by the frontend team. The backend was deployed to a cloud instance of Ubuntu 20.04.
                </p>
                <div>
                    {["python", "django", "flutter", "nginx", "mysql", "redis", "docker", "ubuntu"].map(lang => <img className="langIcon" src={icons[lang]} alt={lang} />)}
                </div>
            </ContentBox>

            <ContentBox>
                <h1>Remote Garden Watering App</h1>
                <p className="date">Summer 2020</p>
                <hr/>
                <a href="https://github.com/ALaevens/RaspiSocketServer">Server Source (GitHub)</a>
                <a href="https://github.com/ALaevens/RelayClient">Client Source (GitHub)</a>
                <p className="description">
                This is a project I developed to practice what I had learned from CMPUT 301. The app was written in Java using the Android platform tools.
                The server was a simple server written in python running on a Raspberry Pi that communicated over sockets to turn relays on and off. These relays 
                were then wired into solenoid valves so that I could turn sprinklers on and off using the Android app. Were I to do this project again, I would <i>not</i> write it this way.
                I would instead communicate with some form of REST API since the sockets made the connection too fragile for a mobile app. As it was, the project was a success and allowed for
                myself and my family to water the gardens from 200km away. 
                </p>
                <div>
                    {["python", "androidstudio", "java", "raspberrypi"].map(lang => <img className="langIcon" src={icons[lang]} alt={lang} />)}
                </div>
            </ContentBox>
        </div>
    );
}
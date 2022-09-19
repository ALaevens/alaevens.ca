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
    ubuntu: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
};

export default function Portfolio() {
    return (
        <div>
            <ContentBox>
                <h1>This Website</h1>
                <p className="date">Summer 2022</p>
                <hr />
                <a href="https://github.com/ALaevens/alaevens.ca">Source (GitHub)</a>
                <p className="description">
                I built this website to serve two purposes. The first was to act as an easily accessible place to host my resume while having more freedom with the
                 design than a traditional resume. The second was to provide an incentive to practice my web development skills which I had neglected to learn 
                 while in University. To add to the challenge, I decided I would create the website in pure ReactJS without assistance from any additional 
                 UI libraries such as react-bootstrap or material-ui. This site is currently self-hosted on my own home server using Nginx and the latest 
                 Ubuntu LTS release.
                </p>
                {["html", "css", "javascript", "react", "nginx", "ubuntu"].map(lang => <img className="langIcon" src={icons[lang]} alt={lang} />)}
            </ContentBox>

            <ContentBox>
                <h1>LaTandao App</h1>
                <p className="date">Spring 2022</p>
                <hr/>
                <a href="https://cmput401.ca/projects/ec209148-f399-455c-b2e8-f23b60fb2287">Project page with demo</a>
                <p className="description">
                LaTandao is an app I helped build as part of the CMPUT 401 course at the University of Alberta. CMPUT 401 is a project-based course which aims to teach 
                the software development process and project management by having the students build real world applications. My group was given the task of building 
                an app for La Connexional a local Edmonton event organizing group. They had a rough idea of an app which would allow users to view events and products 
                that businesses could promote on the platform. I mainly contributed to this project through my work on the backend. The backend uses Django with the 
                Django Rest Framework to serve content to the Flutter App. I also wrote the backend for the chat function and a primitive flutter chat frontend which 
                became the backbone of the current chat page in the frontend.
                </p>
                {["python", "django", "flutter", "nginx", "mysql", "redis", "docker"].map(lang => <img className="langIcon" src={icons[lang]} alt={lang} />)}
            </ContentBox>

            <ContentBox>
                <h1>Remote Garden Watering App</h1>
                <p className="date">Summer 2020</p>
                <hr/>
                <a href="https://github.com/ALaevens/RaspiSocketServer">Server Source (GitHub)</a>
                <a href="https://github.com/ALaevens/RelayClient">Client Source (GitHub)</a>
                <p className="description">
                This is a project I worked on to practice what I had learned from CMPUT 301. The app was written in Java using the Android platform tools.
                The server was a simple server written in python running on a Raspberry Pi that communicates over sockets. Were I to do this project again, I would <i>not</i> write it this way.
                I would instead communicate with some form of REST API since the sockets made the connection too fragile for a mobile app. 
                </p>
                {["python", "androidstudio", "java", "raspberrypi"].map(lang => <img className="langIcon" src={icons[lang]} alt={lang} />)}
            </ContentBox>
        </div>
    );
}
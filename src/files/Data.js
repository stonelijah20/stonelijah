import pr1 from "../Assets/images/calculator.jpg";
import pr2 from "../Assets/images/tictactow.jpg";
import pr3 from "../Assets/images/weather.png";

const navigations = [
    {
        name:'Home',
        nav: '/'
    },
    {
        name: 'Portfolio',
        nav: './Portfolio'
    },
    {
        name: 'Contact',
        nav: './Contact'
    },
]
const homeText = [
    {
        headertext: `Hello, i'm Ston Elijah`,
        bodytext: `and i'm a full-stack web developer.`,
        checktext: `Feel free to check out my latest projects on my portfolio page.`,
        checkportfolio: 'Check my latest projects'
    }
]
const portfolioheading = [
    {
        header: `My Portfolio`,
        bodytext: `From Web Components to React.JS, Redux, and Node.JS. Check out my latest web software development portfolio projects.`
    }
]
const imgdata = [
    {
        pimg: pr1,
        title: 'Calculator',
        info: ""
    },
    {
        pimg: pr2,
        title: 'Tic-Tac-Toe',
        info: ""
    },
    {
        pimg: pr3,
        title: 'Weather App',
        info: ""
    },
    
]
const contactdata = [
    {
        heading: "Get in touch",
        body: "If you want to get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below or send an email to",
        email: "msontop.me@gmail.com",
        socialheading: "Connect with me on any of my social media accounts",
    }
]
const alltags = ['frontend','backend','javascript','react js', 'typescript', 'node js', 'express js', 'mongo db']
export {navigations, homeText, imgdata, portfolioheading, contactdata, alltags}
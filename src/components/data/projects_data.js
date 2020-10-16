import tweetme from '../../assets/projects_images/tweetme.PNG'
import chatapp from '../../assets/projects_images/chatapp.JPG'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import new_year from '../../assets/projects_images/new_year.jpg'
import color_classification from '../../assets/projects_images/color_classification.jpg'
import blinking from '../../assets/projects_images/blinking.JPG'
import COVID from '../../assets/projects_images/COVID.jpg'
import flashcards from '../../assets/projects_images/flashcard.PNG'
import corrona from '../../assets/projects_images/corrona.PNG'
import storiesapp from '../../assets/projects_images/storiesapp.gif'
import WYR from '../../assets/projects_images/wouldyourather.PNG'
import bookapp from '../../assets/projects_images/bookapp.jpg'

const data_projects = [
    {
        name: 'Mobile Flashcard App',
        image: flashcards,
        deployed_url: 'https://github.com/BennaceurHichem/mobile_flasCard_project',
        github_url: 'https://github.com/BennaceurHichem/mobile_flasCard_project',
        category: ['React Native']
    },

    {
        name: 'Corrona Watch Project',
        image: corrona,
        deployed_url: 'https://github.com/BennaceurHichem/Corrona_Project_2cs',
        github_url: 'https://github.com/BennaceurHichem/Corrona_Project_2cs',
        category: [ 'material-ui', 'React.js']
    },

    {
        name: 'URL Shortner ',
        image: chatapp,
        deployed_url: 'https://url-shortner-mern-stack.herokuapp.com/',
        github_url: 'https://github.com/BennaceurHichem/url-shortner-mern-stack',
        category: ['Node.js', 'React', 'SSH']
    },

    {
        name: 'Stories App full Node.js with handlebars ',
        image: storiesapp,
        deployed_url: 'https://github.com/BennaceurHichem/storiesApp',
        github_url: 'https://github.com/BennaceurHichem/storiesApp',
        category: ['Node.js']
    },

    {
        name: 'Would you rather App',
        image: WYR,
        deployed_url: 'https://first-pwa-react-app.firebaseapp.com/',
        github_url:'https://github.com/BennaceurHichem/Would-You-Rather-Game-React-Redux-',
        category: ['Redux', 'React']
    },

    {
        name: 'Book App nanodegree',
        image: bookapp,
        deployed_url: 'https://github.com/BennaceurHichem/MyBookAppNanodegree',
        github_url:'https://github.com/BennaceurHichem/MyBookAppNanodegree',
        category: ['React']
    },
    {
        name: 'Color Classification using tf.js',
        image: color_classification,
        deployed_url: '!#',
        github_url: 'https://github.com/Dey-Sumit/color-classification',
        category: ['node', 'machine_learning']
    },

    {
        name: 'Blinking bubbles',
        image: blinking,
        deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
        github_url: 'https://github.com/Dey-Sumit/Blinking_Bubbles',
        category: ['processing']
    }
]

export default data_projects;
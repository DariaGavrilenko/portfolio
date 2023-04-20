import socialNetworkImg from '../../common/img/socialNetwork.png'
import landingImg from '../../common/img/landings.png'

export const myProjects = {
    toDo: {
        projectName: 'Todolist',
        backgroundImage: `https://www.shutterstock.com/image-vector/todo-list-board-vector-illustration-260nw-2038332404.jpg`,
        link: 'https://dariagavrilenko.github.io/todoList/',
        description: `Educational project written in react and redax using Ts.
        Logization pages were developed (formic was used), CRUD operations were organized for todolists and tasks.`
    },
    social: {
        projectName: 'Social network',
        backgroundImage: socialNetworkImg,
        link: 'https://dariagavrilenko.github.io/samurai-way-main/',
        description: `Educational project written in react and redax using Ts. 
        Pages of login, profile and subscribers were developed.`
    },
    landings:{
        projectName: 'Landings',
        backgroundImage: landingImg,
        link: 'https://dariagavrilenko.github.io/landings/',
        description: `In my free time, I try to repeat the landing page from figma.`
    }, 
    notes:{
        projectName: 'Notes',
        backgroundImage: `https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp`,
        link: 'https://neon-travesseiro-b73146.netlify.app/',
        description: `You can create, delete and edit note. You can also create keywords with # and search for them. Notes be kept in local storage`
    }
}
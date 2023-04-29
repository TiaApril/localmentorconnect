import language from './pictures/language.jpg'
import profile1 from './pictures/Profile Picture  (1).jpg';
import profile2 from './pictures/Profile Picture  (2).jpg';


export const subjects = [
    {value:'art', label:'ART'},
    {value:'technology', label:'TECHNOLOGY'},
    {value:'leadership', label:'LEADERSHIP'},
    {value:'math', label:'MATH'},
];

export const skills = [
    {value:'guitar', label:'GUITAR'},
    {value:'singing', label:'SINGING'},
    {value:'guitar', label:'GUITAR'},
    {value:'painting', label:'PAINTING'},
];

export const distance = [
    {value:'nearest', label:'nearest'},
    {value:'none', label:'none'},
];

export const date = [
    {value:'all', label:'ALL'},
    {value:'sunday', label:'SUNDAY'},
    {value:'monday', label:'MONDAY'},
    {value:'tuesday', label:'TUESDAY'},
    {value:'wednesday', label:'WEDNESDAY'},
    {value:'thursday', label:'THURSDAY'},
    {value:'friday', label:'FRIDAY'},
    {value:'saturday', label:'SATURDAY'},
];

export const days = [
    {value:'all', label:'ALL'},
    {value:'sunday', label:'SUNDAY'},
    {value:'monday', label:'MONDAY'},
    {value:'tuesday', label:'TUESDAY'},
    {value:'wednesday', label:'WEDNESDAY'},
    {value:'thursday', label:'THURSDAY'},
    {value:'friday', label:'FRIDAY'},
    {value:'saturday', label:'SATURDAY'},
];

export const time = [
    {value:'all', label:'ALL'},
    {value:'6-9', label:'06.00 - 09.00'},
    {value:'9-12', label:'09.00 - 12.00'},
    {value:'12-15', label:'12.00 - 15.00'},
    {value:'15-18', label:'15.00 - 18.00'},
    {value:'18-21', label:'18.00 - 21.00'},
    {value:'21-24', label:'21.00 - 24.00'},
    {value:'00-3', label:'00.00 - 03.00'},
    {value:'3-6', label:'03.00 - 06.00'},
];

export const courses = [
    {subject:"art", 
    skill:"guitar", 
    price:"$15/hr", 
    instructor:"John Doe", 
    bg:"{language}", 
    profilepic: require("./pictures/Profile Picture  (1).jpg"), 
    title:"Guitar Lesson for Beginner"},
    {subject:"art", 
    skill:"guitar", 
    price:"$20/hr", 
    instructor:"John Doe", 
    bg:"{language}", 
    profilepic:require("./pictures/Profile Picture  (1).jpg"), 
    title:"Guitar Lesson for Intermediate"},
    {subject:"technology", 
    skill:"javascript", 
    price:"$15/hr", 
    instructor:"Deimne Jan", 
    bg:"{language}", 
    profilepic:require("./pictures/Profile Picture  (3).jpg"), 
    title:"Javascript Lesson for Beginner"},
    {subject:"technology", 
    skill:"html", 
    price:"$15/hr", 
    instructor:"Deimne Jan", 
    bg:"{language}", 
    profilepic:require("./pictures/Profile Picture  (3).jpg"), 
    title:"HTML Lesson for Beginner"},
    {subject:"math", 
    skill:"algebra", 
    price:"$15/hr", 
    instructor:"Linda Melinda", 
    bg:"{language}", 
    profilepic:require("./pictures/Profile Picture  (2).jpg"), 
    title:"Algebra Lesson for Beginner"},
    {subject:"math", 
    skill:"geometry", 
    price:"$15/hr", 
    instructor:"Linda Melinda", 
    bg:"{language}", 
    profilepic:require("./pictures/Profile Picture  (2).jpg"), 
    title:"Geometry Lesson for Beginner"},
]

export const mentors=[
    {
        name: "John Doe",
        position: "Art Teacher",
        profilepic: require("./pictures/Profile Picture  (1).jpg"),
        courses: "2 Courses",
        price:"$15-25/hr"
    },
    {
        name: "Linda Melinda",
        position: "Math Teacher",
        profilepic: require("./pictures/Profile Picture  (2).jpg"),
        courses: "2 Courses",
        price:"$15-25/hr"
    },
    {
        name: "Deimne Jan",
        position: "Technology Teacher",
        profilepic: require("./pictures/Profile Picture  (3).jpg"),
        courses: "2 Courses",
        price:"$15-25/hr"
    }
];

export const subjectcourse=[
    {
        subject:"ART",
        skills:"2 skills",
        bgpic: require("./pictures/music.png")
    },
    {
        subject:"TECHNOLOGY",
        skills:"3 skills",
        bgpic:require("./pictures/Technology-Watch.jpg")
    },
    {
        subject:"LANGUAGE",
        skills:"5 skills",
        bgpic:require("./pictures/language.jpg")
    },
    {
        subject:"BUSINESS",
        skills:"5 skills",
        bgpic:require("./pictures/Business.jpeg")
    },
]
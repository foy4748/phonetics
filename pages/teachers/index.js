import Image from "next/image";
import TeacherCard from "../../components/teachersComponents/TeacherCard";
import image1 from "../../Images/how-to-become-a-language-teacher.jpg";

export default function Lessons() {

  const teacherList = [
    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    },

    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    },

    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    },

    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    },

    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    },

    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    },

    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    },

    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    },

    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    },

    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    },

    {
      name: "English",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime.",
      sub: "Japanese",
      Country: "japan",
      image: image1, 
      email: "e@email.com",
    }

  ]

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1>I am Teachers well done</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">

        {
          teacherList.map((teacher, i) => <TeacherCard key={i} teacher={teacher}/>)
        }
      </div>
    </div>
  );
}

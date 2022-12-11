import FeedBackCard from "../../components/feedbacksComponents/FeedBackCard";


export default function Lessons() {
  const feedbacks = [
    {
      displayName: "Mitali",
      rating: "4",
      photoURL:
        "https://i.ibb.co/6rFrcFd/avatar-user-profile-icon-png-favpng-9e-Tu3u-L6i-Jm-KQsvfh-U4-Nm-BNAB-t.jpg",
      message:
        "This is the best online platform for learnig foreing language. All instructor is very inteligent and friendly. All the time they try to learning their stuent.",
      date: "1-12-22",
    },
    {
      displayName: "Michel Milt",
      rating: "3",
      photoURL:
        "https://i.ibb.co/HDzDc3L/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
      message:
        "This is the best online platform for learnig foreing language. All instructor is very inteligent and friendly. All the time they try to learning their stuent.",
      date: "12-10-22",
    },
    {
      displayName: "Danila Luypa",
      rating: "4",
      photoURL:
        "https://i.ibb.co/qxq0HdP/female-user-transparent-icon-d-Otd-VA.png",
      message:
        "This is the best online platform for learnig foreing language. All instructor is very inteligent and friendly. All the time they try to learning their stuent.",
      date: "31-10-22",
    },
    {
      displayName: "Sanit kumari",
      rating: "5",
      photoURL: "https://i.ibb.co/kKwc0NV/pe-3.jpg",
      message:
        "This is the best online platform for learnig foreing language. All instructor is very inteligent and friendly. All the time they try to learning their stuent.",
      date: "25-8-22",
    },
    {
      displayName: "Luypa Zai",
      rating: "3",
      photoURL:
        "https://i.ibb.co/qxq0HdP/female-user-transparent-icon-d-Otd-VA.png",
      message:
        "This is the best online platform for learnig foreing language. All instructor is very inteligent and friendly. All the time they try to learning their stuent.",
      date: "27-10-22",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-4">Our Students Feedback</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {feedbacks.map((feedback, i) => (
          <FeedBackCard key={i} feedback={feedback} />
        ))}
      </div>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fs.readFile(`https://jsonplaceholder.typicode.com/comments?_limit=6`);
//   const data = await res.json()
//   return {
//     props: {
//       feedbacks:data
//     }
//   }
// }
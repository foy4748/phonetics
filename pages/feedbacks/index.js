import FeedBackCard from "../../components/feedbacksComponents/FeedBackCard";
import { promises as fs } from "fs";
import path from "path";

export default function Lessons({ feedbacks }) {
  console.log(feedbacks)
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

export const getStaticProps = async () => {
  const res = await fs.readFile(`https://jsonplaceholder.typicode.com/comments?_limit=6`);
  const data = await res.json()
  return {
    props: {
      feedbacks:data
    }
  }
}
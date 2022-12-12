import Image from "next/image";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function TeacherCard({ teacher, idx, bookAsession }) {
  const { name, desc, sub, Country, image, email, booked } = teacher;
  const dispatch = useDispatch();

  return (
    <div
      className="border p-2 rounded-lg"
      style={{ boxShadow: "0px 5px 15px 2px #764cd866" }}
    >
      <div className="h-full rounded-lg p-1 bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-600">
        <div className="bg-white p-2 rounded h-full flex flex-col justify-between">
          <div className="image rounded-lg overflow-hidden">
            <Image src={image} alt="card-imaa" />
          </div>
          <div className="text pt-4">
            <h2 className="text-xl lg:text-2xl pb-2 font-bold">
              Name : {name}
            </h2>
            <p>{desc}</p>
            <p className="py-2 font-bold">Language : {sub}</p>
            <p>From : {Country}</p>
            <p>Email : {email}</p>
          </div>
          <button
            className="btn btn-primary"
            disabled={booked}
            onClick={() => {
              dispatch(bookAsession(idx));
              toast.success(
                `Successfully booked a session with ${name} for learning ${sub} language`
              );
            }}
          >
            {booked ? "Booked" : "Book a Session"}
          </button>
        </div>
      </div>
    </div>
  );
}

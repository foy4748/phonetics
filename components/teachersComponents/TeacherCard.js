import Image from "next/image";

export default function TeacherCard({ teacher }) {
  const { name, desc, sub, Country, image, email } = teacher;

  return (
    <div className="border p-2 rounded-lg"
      style={{ boxShadow: "0px 5px 15px 2px #764cd866" }}
    >
      <div
        className="h-full rounded-lg p-1 bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-600"
      >
        <div className="bg-white p-2 rounded h-full">
          <div className="image rounded-lg overflow-hidden">
            <Image src={image} alt='card-imaa' />
          </div>
          <div className="text pt-4">
            <h2 className="text-xl lg:text-2xl pb-2">Name : {name}</h2>
            <p>{desc}</p>
            <p className="py-2 font-bold">Language : {sub}</p>
            <p>From : {Country}</p>
            <p>Email : {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

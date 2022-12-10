import Image from "next/image";

export default function TeacherCard({ teacher }) {
  const { name, desc, sub, Country, image, email } = teacher;

  return (
    <div className="border p-2 rounded-lg"
      style={{ boxShadow: "0px 5px 15px 2px #764cd866" }}
    >
      <div
        className="rounded-lg p-1 bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-600"
      >
        <div className="bg-white p-2 rounded">
          <div className="image rounded-lg overflow-hidden">
            <Image src={image} alt='card-imaa' />
          </div>
          <div className="text">
            <h2>{name}</h2>
            <p>{desc}</p>
            <p>{sub}</p>
            <p>{Country}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

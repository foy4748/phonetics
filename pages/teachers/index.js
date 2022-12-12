import TeacherBanner from "../../components/teachersComponents/TeacherBanner";
import TeacherCard from "../../components/teachersComponents/TeacherCard";
import { useSelector } from "react-redux";
import { bookAsession } from "../../slices/teacherConsultingSlice";

export default function Lessons() {
  const teacherList = useSelector((state) => {
    return state.teachers;
  });
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* teacher banner */}
      <TeacherBanner />

      {/* teacher cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {teacherList.map((teacher, i) => (
          <TeacherCard
            key={i}
            idx={i}
            teacher={teacher}
            bookAsession={bookAsession}
          />
        ))}
      </div>
    </div>
  );
}

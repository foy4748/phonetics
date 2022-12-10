import { useRouter } from "next/router";

export default function SingleLesson() {
  const router = useRouter();
  const { lang } = router.query;
  return (
    <div>
      <h1>I'm Single Lesson for {lang}</h1>
    </div>
  );
}

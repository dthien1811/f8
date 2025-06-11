import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";

function CourseList() {
  const [freeCourses, setFreeCourses] = useState([]);
  const [proCourses, setProCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then(res => res.json())
      .then(data => {
        console.log("✅ Data từ server:", data); // nên thấy mảng []
        setFreeCourses(data.filter(course => !course.is_pro));
        setProCourses(data.filter(course => course.is_pro));
      })
      .catch(error => {
        console.error("❌ Lỗi khi tải dữ liệu khóa học:", error);
      });
  }, []);

  return (
    // Sửa đổi inline style padding của div ngoài cùng
    // top=0, right=24px, bottom=0, left=120px
    <div style={{ padding: "0 24px 0 120px" }}>
      {/* Khóa học miễn phí */}
      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Khóa học miễn phí</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {freeCourses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>

      {/* Khóa học Pro */}
      <h2 style={{ marginTop: 48, marginBottom: 16 }}>Khóa học PRO</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {proCourses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
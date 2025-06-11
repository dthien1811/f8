import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [id]);

  if (!course) return <p style={{ padding: 24 }}>Đang tải chi tiết khóa học...</p>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>{course.title}</h1>
      <img
        src={course.image_url}
        alt={course.title}
        style={{
          width: "100%",
          maxHeight: 400,
          objectFit: "cover",
          borderRadius: 12,
          marginBottom: 24,
        }}
      />
      <p style={{ fontSize: 16, color: "#444", marginBottom: 16 }}>{course.description}</p>

      <div style={{ fontSize: 15, color: "#666", marginBottom: 8 }}>
        <strong>Thời lượng:</strong> {course.duration_text}
      </div>

      <div style={{ fontSize: 15, color: "#666", marginBottom: 8 }}>
        <strong>Số video:</strong> {course.videos_count}
      </div>

      <div style={{ fontSize: 15, color: "#666", marginBottom: 8 }}>
        <strong>Học viên:</strong> {course.students_count.toLocaleString()} người
      </div>

      <div style={{ fontSize: 16, marginTop: 24 }}>
        {course.is_pro ? (
          <div>
            <strong style={{ color: "#e53935" }}>{course.price.toLocaleString()}đ</strong> &nbsp;
            <del style={{ color: "#888" }}>{course.old_price.toLocaleString()}đ</del>
            <p style={{ marginTop: 8, fontStyle: "italic", color: "#999" }}>
              * Khóa học thuộc gói PRO
            </p>
          </div>
        ) : (
          <p style={{ color: "#43a047" }}>
            <strong>Miễn phí</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default CourseDetail;

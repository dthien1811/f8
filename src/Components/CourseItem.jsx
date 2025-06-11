import { Link } from "react-router-dom";

function CourseItem({ course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
      }}
    >
      <img
        src={course.image_url}
        alt={course.title}
        style={{
          width: "100%",
          height: 160,
          objectFit: "cover",
          display: "block",
        }}
      />
      <div style={{ padding: 12 }}>
        <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: 8 }}>
          {course.title}
        </h3>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: 12, height: 40, overflow: "hidden", textOverflow: "ellipsis" }}>
          {course.description}
        </p>
        {course.is_pro ? (
          <p style={{ fontSize: "14px", color: "#e53935" }}>
            <strong>{course.price.toLocaleString()}đ</strong> &nbsp;
            <del style={{ color: "#999" }}>{course.old_price.toLocaleString()}đ</del>
          </p>
        ) : (
          <p style={{ fontSize: "14px", color: "#43a047" }}>Miễn phí</p>
        )}
        <p style={{ fontSize: "12px", color: "#888" }}>
          Thời lượng: {course.duration_text}
        </p>
      </div>
    </Link>
  );
}

export default CourseItem;

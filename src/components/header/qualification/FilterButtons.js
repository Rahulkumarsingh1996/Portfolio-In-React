import Qualification from "./qualification.css";
export default function FilterBar({ handleClick, active, blackAndWhite }) {
  const items = ["All", "Education", "Experience"];
  // const textColorStyle = blackAndWhite ? { color: "white" } : null;
  const backgroundButtonColorStyle = blackAndWhite ? { backgroundColor: 'white', color: 'black' } : null;
  return (
    <div className="gap-2" style={{ marginBottom: "1rem" }}>
      {items.map((item) => (
        <button
          className={active === item.toLowerCase() && "active"}
          onClick={() => handleClick(item.toLowerCase())}
          style={backgroundButtonColorStyle}
          id="button-filter"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

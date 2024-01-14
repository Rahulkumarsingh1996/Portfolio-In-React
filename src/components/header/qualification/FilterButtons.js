export default function FilterBar({ handleClick, active }) {
    const items = ["All","Education", "Experience"];
 
    return (
      <div className="gap-2" style={{ marginBottom: "1rem" }}>
        {items.map((item) => (
          <button
            className={active === item.toLowerCase() && "active"}
            onClick={() => handleClick(item.toLowerCase())}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
  
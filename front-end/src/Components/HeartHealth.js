import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ healthCheck }) {
  return (
    <img
      src={healthCheck ? heartSolid : heartOutline}
      alt={healthCheck ? "healthy food" : "unhealthy food"}
    />
  );
}

export default HeartHealth;

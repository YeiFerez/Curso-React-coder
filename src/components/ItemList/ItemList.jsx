
import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";

const ItemList = ({ saludo, items }) => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        minHeight: "90vh",
        padding: "40px",
        gap: "25px"
      }}
    >
      {items.map((item) => {
        return (
          <ItemCard item={item} key={item.id}/>
        );
      })}
    </div>
  );
};

export default ItemList;

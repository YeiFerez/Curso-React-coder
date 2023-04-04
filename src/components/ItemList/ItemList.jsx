import styles from "./ItemList.module.css"

const ItemList = ({ saludo, item1 }) => {
  // let {edad, saludo} = props

  return (
    <div>
      <h2>{saludo}</h2>
      <div style={{ display: "flex" }}>
        <div className={styles.mover} style={{flexBasis:"60%"}}>
      <h1 style={{ color: "red" }}>{item1}</h1>
        <h3 >
        Una empresa que esta a la vanguardia de la tecnologia prestando
        servicios que incluyen Asesoria, venta y reparacion de los ultimos
        productos de tecnologia como celulares, Portatiles, consolas de video,
        entre otros. ademas contamos con un blog informativo respecto a
        Información de interes en esta area.
      </h3></div>
      <div className={styles.mover}>
        <h1 style={{ color: "red" }}>Donde nos encuentras?</h1>
        <h3>Estamos ubicados en la ciudad de Floridablanca colombia, Exactamente en el centro comercial
                            cañaveral, local 123.</h3>
      </div>
      </div>
      
    </div>
  );
};

export default ItemList;

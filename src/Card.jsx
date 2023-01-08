const Card = ({ item }) => {
  return (
    <>
      <div>
        {item.map((mapvalue) => {
          const { images, name, category, rate, price, description } = mapvalue;
          return (
            <>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={images} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                  {category}
                  </p>
                  <span className="bg bg-danger">{rate}</span>
                  <a href="#" class="btn btn-primary">
                    price {price}
                  </a>
                  <p>{description}</p>
                </div>
              </div>{" "}
            </>
          );
        })}
      </div>
    </>
  );
};
export default Card;

/* eslint-disable react/prop-types */
const ChildComponent = ({ key, name, desc, img }) => {
  return (
    <div className="childContainer">
      <div className="programmingLanguageContainer" key={key}>
        <img src={img} alt={`${name}-image`} className="childImg" />
        <h2 className="childTitle">{name}</h2>
        <p className="childDesc">{desc}</p>
        <hr />
      </div>
    </div>
  );
};

export default ChildComponent;

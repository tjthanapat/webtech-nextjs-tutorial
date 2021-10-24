const FeatureCard = (props) => {
  return (
    <div className="border p-5 rounded-2xl hover:shadow-2xl">
      <span className="material-icons" style={{ fontSize: '64px' }}>
        {props.icon}
      </span>
      <h5 className="text-2xl font-medium">{props.title}</h5>
      <p className="mt-2">{props.description}</p>
    </div>
  );
};

export default FeatureCard;

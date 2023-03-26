// import moneyIcon from '../../assets/moneys.png'

const CompCard = (props) => {
  return (
		<div className="card">
			<img src={props.imagePath} alt="" />
			<h1>{props.amount}</h1>
			<p>{props.user}</p>
		</div>
	);
}
export default CompCard
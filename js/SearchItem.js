function searchItem() {
	<div class='searchItem'>
		<img
			src={'images/listings/' + image}
			alt={'image of: ' + props.name}
			class='searchImg'
		/>
		<p>
			Property name: {props.name}
			<br />
			Address: {props.address}
			<br />
			City: {props.city}
			<br />
			Canton: {props.canton}
			<br />
			Price: {props.price}
			<br />
			<a href={props.link}>Link</a>
		</p>
	</div>;
}

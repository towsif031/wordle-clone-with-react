const Key = ({ keyVal, bigKey }) => {
	return (
		<div className="key" id={bigKey && 'big'}>
			{keyVal}
		</div>
	);
};

export default Key;

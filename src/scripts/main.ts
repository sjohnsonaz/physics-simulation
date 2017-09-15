import Momentum from './Momentum';

console.log(
	Momentum.multiBody([{
		m: 1,
		v: 5
	}, {
		m: 1,
		v: 0
	}])
);

console.log(
	Momentum.multiBody([{
		m: 1,
		v: 5
	}, {
		m: 1,
		v: 5
	}, {
		m: 1,
		v: 0
	}, {
		m: 1,
		v: 0
	}, {
		m: 1,
		v: 0
	}])
);

console.log(
	Momentum.multiBody([{
		m: 1,
		v: 1
	}, {
		m: 1,
		v: 5
	}, {
		m: 1,
		v: -2
	}, {
		m: 1,
		v: 3
	}, {
		m: 1,
		v: 8
	}, {
		m: 1,
		v: -7
	}, {
		m: 1,
		v: 9
	}, {
		m: 1,
		v: -5
	}])
);
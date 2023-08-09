import { resetFetch } from '../common/functions/fakeFetches';

// no destructure
export const NotDestructuringProps = (props: any) => {

	const handleClick = async () => {
		const res = await resetFetch({ id: props.id, another: props.user.blue.id });
		console.log('res: ', res);
	};

	return (
		<div>
			<div>{props.name}, {props.lastName}</div>
			<p>* not much to see. Come look at the component code...</p>
		</div>
	);
}

// destructure
export const DestructuringProps = ({ id, name, lastName, user }: any) => {

	const handleClick = async () => {
		const res = await resetFetch({ id: id, another: user.blue.id });
	};

	return (
		<div>
			<div>{name}, {lastName}</div>
			<p>* not much to see. Come look at the component code...</p>
		</div>
	);
}
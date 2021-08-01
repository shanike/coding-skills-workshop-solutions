import React, { useEffect } from 'react';
import { resetFetch } from '../common/fakeFetches';

// no destructure
export const NotDestructuringProps = props => {

	useEffect(() => {
		let res = await resetFetch({ id: props.id, another: props.user.blue.id });
		console.log('res: ', res);
	}, [props.id]);

	return (
		<div>{props.name}, {props.lastName}</div>
	);
}

// destructure
export const DestructuringProps = ({ id, name, lastName, user }) => {

	useEffect(() => {
		let res = await resetFetch({ id: id, another: user.blue.id });
	}, [id]);

	return (
		<div>{name}, {lastName}</div>
	);
}

// without breaking up components:

export const Parent_ = ({ name, list, updateItem }) => (
	<div>
		<span>{name}</span>
		<div>
			{list?.map((item) => (
				<div key={item.id}>
					<span>{item.id}</span>
					<span>{item.name}</span>
					<button onClick={() => updateItem(item.id)}>remove</button>
				</div>
			))}
		</div>
	</div>
);


// with breaking up components:

export const Parent = ({ name, list, updateItem }) => (
	<div>
		<span>{name}</span>
		<div>
			{list.map(item => <Item key={item.id} buttonOnClick={updateItem} {...item} />)}
		</div>
	</div>
);

const Item = ({ name, id, buttonOnClick }) => (
	<div>
		<span>{id}</span>
		<span>{name}</span>
		<button onClick={() => buttonOnClick(id)}>remove</button>
	</div>
);
import React, { useEffect, useMemo, useState } from 'react';

const users = [
    { id: 1, name: 'Harry' },
    { id: 2, name: 'Ron' },
    { id: 3, name: 'Hermione' },
    { id: 4, name: 'Dumbledore' },
    { id: 5, name: 'Voldemort' },
];

export default () => {
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleSearch = () => {
        setSearch(text.toLocaleLowerCase());
    };

    const filteredUsers = /* useMemo */ users.filter((user) => {
        console.log('filter users...')
        return user.name.toLowerCase().includes(search); // AH
    });

    return (
        <div>
            <input type="text" value={text} onChange={handleText} />
            <button type="button" onClick={handleSearch}>
                Search
            </button>

            <List list={filteredUsers} />
        </div>
    );
};

const List = ({ list }) => {

    console.log('rendering List component....')
    return (
        <ul>
            {sAB(list).map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

const ListItem = ({ item }) => {
    return <li>{item.name}</li>;
};





const sAB = (l) => {
    let nl = [...l]
    let t = {}

    for (let i = 0; i < nl.length; i++) {
        for (let j = i + 1; j < nl.length; j++) {
            if (nl[i].name > nl[j].name) {
                t = nl[i];
                nl[i] = nl[j];
                nl[j] = t;
            }
        }
    }
    return nl
};
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Checkbox } from '../../common/components/Checkbox';
import { Book, Chapter } from './lord-of-the-rings.type';
import { Books } from './Books';

export const LordOfTheRings = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [openBookId, setOpenId] = useState("");
    const [finished, setFinished] = useState(false);


    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const { data } = await axios.get<{ docs: Partial<Book>[], total: number }>('https://the-one-api.dev/v2/book'/* , { headers: { Authorization: 'Bearer ' + 'KgiiGtrZSA3N_LXabaSZ' } } */)
        console.log('data: ', data);
        const { docs } = data
        const books = docs.map(book => { book.finished = false; return book })
        setBooks(books)
    }

    const getChapters = async (id: string) => {
        const { data } = await axios.get<{ docs: Partial<Chapter>[], total: number }>(`https://the-one-api.dev/v2/book/${id}/chapter`)
        console.log('data: ', data);
        setBooks(prev => {
            const currentBookIndex = prev.findIndex(book => book._id === id);
            const chapters = data.docs;
            const total = data.total || prev[currentBookIndex].chapters?.length;
            prev[currentBookIndex].total = total;
            prev[currentBookIndex].chapters = chapters
            return [...prev]
        });
        setOpenId(prev => prev !== id ? id : '');
    }

    const changeFinished = (index: number) => {
        setBooks(prev => {
            const change = [...prev];
            change[index] = { ...prev[index], finished: !prev[index].finished }
            return change
        })
    }

    const setFilteredBooksButton = () => {
        setFinished(prev => !prev)
        const filtered = books.filter(book => !book.finished).map((book, i) => ({ ...book, name: `book ${i + 1} - ${book.name}` }));
        setFilteredBooks(filtered)
    }


    return (
        <div>
            <h1>Lord Of The Rings</h1>
            <button onClick={setFilteredBooksButton}>{`Show ${!finished ? 'un' : ''}finished!`}</button>
            {/* <h2>The books:</h2> */}
            <Books
                books={!finished ? books : filteredBooks}
                openBookId={openBookId}
                changeFinished={changeFinished}
                getChapters={getChapters}
            />
        </div>
    );
};

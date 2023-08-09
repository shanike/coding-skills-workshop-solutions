import { FC } from 'react'
import { Book } from './lord-of-the-rings.type';
import { Checkbox } from '../../common/components/Checkbox';


interface BooksProps {
    books: Book[];
    openBookId: string;
    getChapters: (id: string) => Promise<void>;
    changeFinished: (index: number) => void;
}


export const Books: FC<BooksProps> = ({ books, changeFinished, getChapters, openBookId }) => {

    return books.map((book, i) => (
        <div key={i}>
            <div className="flex" style={{ display: 'flex' }}>
                <Checkbox withMargin={true} isChecked={Boolean(book.finished)} onClick={() => changeFinished(i)} />
                <div style={{ fontWeight: 900, cursor: 'pointer' }} onClick={() => getChapters(book._id!)}>{book.name}</div>
                <div style={{ //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! and above too
                    height: openBookId === book._id ? 'fit-content' : 0,
                    overflow: 'hidden'
                }}>
                    {book.chapters && book.chapters.length
                        && book.chapters.map((chapter) => (
                            <div>{chapter.chapterName}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    ));
};

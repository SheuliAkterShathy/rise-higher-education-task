import React, { useEffect, useState } from 'react';
import BooksDisplay from '../BooksDisplay/BooksDisplay';
import Loading from '../Loading/Loading';

const AllBooks = () => {
    const [allBooks, setAllBooks]=useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

   

    useEffect(() => {
        setLoading(true);
        fetch('https://api.itbook.store/1.0/new')
            .then(res => res.json())
            .then(datas => {
                 const data=datas.books;
                setCount(data?.length)

                let bookData = []
                if (page === 0) {
                    for (let i = 0; i < 6; i++) {
                        let book = data[i]
                         console.log(book);
                        bookData.push(book)
                    }
                    setAllBooks(bookData);
                    setLoading(false);
                };

                if (page === 1) {
                    for (let i = 6; i < 12; i++) {
                        let book = data[i]
                        bookData.push(book)
                    }
                    setAllBooks(bookData);
                    setLoading(false);
                };

                if (page === 2) {
                    for (let i = 12; i < 18; i++) {
                        let book = data[i]
                        console.log(book);
                        bookData.push(book)
                    }
                    setAllBooks(bookData);
                    setLoading(false);
                };

                if (page === 3) {
                    for (let i = 18; i < 20; i++) {
                        let book = data[i]
                        console.log(book);
                        bookData.push(book)
                    }
                    setAllBooks(bookData);
                    setLoading(false);
                };

            })
    }, [page]);


    const pages = Math.ceil(count / 6);

    console.log(allBooks.books);
    console.log(page);
     console.log(count);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto my-20'>
            <div className="py-1 rounded-lg grid md:grid-cols-3 gap-16">

                {
                    allBooks?.map((book) => <BooksDisplay
                        key={book?.isbn13}

                        book={book}
                    ></BooksDisplay>
                    )
                }

            </div>

            <div className="mt-14">
                <div className="flex justify-center space-x-3 text-white">
                    <button
                      onClick={() => setPage(0)}
                     title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    {
                        [...Array(pages).keys()].map(number =>
                            <button key={number}
                                onClick={() => setPage(number)}
                                type="button" className={page === number ? "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900 text-white border-violet-400"

                                    :

                                    '"inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md text-black  border-violet-400"'}

                            >{number + 1}</button>
                        )
                    }

                    <button
                    onClick={() => setPage(3)}
                     title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>



        </div>
    );
};

export default AllBooks;
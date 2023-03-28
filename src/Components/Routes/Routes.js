import { createBrowserRouter } from "react-router-dom";
import AllBooks from "../AllBooks/AllBooks";
import BookDetails from "../BookDetails/BookDetails";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <AllBooks/>
            },

            {
                path:'/home',
                element: <AllBooks/>
            },
            {
                path: 'book/:id',
                element: <BookDetails />,
                loader: ({ params }) =>
                  fetch(`https://api.itbook.store/1.0/books/${params.id}`),
              },
        ]
    }
])
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [galleryData, setGalleryData] = useState(null);
    const [selectedCat, setSelectedCat] = useState('ALL');
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false)



    const notSelectedCss =
        'text-gray-200 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800';
    const selectedCss =
        'text-gray-700 hover:text-white border border-gray-600 bg-white hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800';

    const categories = ['ALL', 'Shoes', 'Bags', 'Electronics', 'Gaming'];


    useEffect(() => {
        fetchGalleryData();
    }, []);

    const fetchGalleryData = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get("/api/user/gallery");
            const res = await axios.get('/api/user/category')
            setCategory(res.data)
            setGalleryData(data);
            console.log(data);
            setLoading(false)

        } catch (error) {
            console.error("Error fetching gallery data:", error);
        }
    };

    const fetchGalleryDatawithCat = async (id) => {
        try {
            setLoading(true)

            const { data } = await axios.get(`/api/user/gallery?cat=${id}`);
            setGalleryData(data);
            console.log(data);
            setLoading(false)

        } catch (error) {
            console.error("Error fetching gallery data:", error);
        }
    };

    useEffect(() => {
        // Load GLightbox only on the client side
        if (typeof window !== 'undefined') {
            import('glightbox').then((GLightbox) => {
                const lightboxInstance = GLightbox.default({
                    selector: '.glightbox',
                });
            });
        }
    }, [galleryData]);

    return (

        <>
            {loading &&

                <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[100]">
                    <div class="relative z-50  p-8 text-center">
                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            }
            <>
            <div>
            <button className='absolute right-0 m-2 bg-blue-500 p-2 px-4 rounded-md text-white'>
                    Add New image +
                </button>
            </div>
                
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button

                        type="button"
                        className={"ALL" === selectedCat ? selectedCss : notSelectedCss}
                        onClick={() => {
                            fetchGalleryData()
                            setSelectedCat("ALL")
                        }
                        }
                    >
                        {"ALL"}
                    </button>
                    {category.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            className={cat.category === selectedCat ? selectedCss : notSelectedCss}
                            onClick={() => {
                                fetchGalleryDatawithCat(cat.id)
                                setSelectedCat(cat.category)
                            }

                            }
                        >
                            {cat.category}
                        </button>
                    ))}
                </div>


                <div className="grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4 mx-2">
                    {galleryData?.map((data) => (
                        <div key={data.id} className="relative">
                            <a key={data.id} href={data.image ? data.image : "https://youtu.be/FtJRfsJgtYI?si=scSYUF6Y0_Zivaia"} className="glightbox md:p-2">
                                <img
                                    src={data.thumbnailimg}
                                    alt={data.thumbnailimg}
                                    className="w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                                    style={{
                                        height: '40vw',
                                        maxHeight: '20em',
                                        maxWidth: '30em',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                />
                            </a>
                            <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center items-center bg-white bg-opacity-75">
                                <button className="mx-4 bg-red-500 p-2 px-4 rounded" onClick={() => handleDelete(data.id)}>
                                    Delete
                                </button>
                                <button className="mx-4 bg-slate-500 p-2 px-4 rounded" onClick={() => handleEdit(data.id)}>
                                    Edit
                                </button>
                            </div>

                        </div>

                    ))}

                    <a href="https://vimeo.com/115041822" class="glightbox">
                        <img src="https://biati-digital.github.io/glightbox/demo/img/small/gm10.jpg"
                            alt="https://biati-digital.github.io/glightbox/demo/img/small/gm10.jpg"
                            className="w-full rounded-lg  
              
          transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"

                            style={{
                                height: '40vw',
                                maxHeight: '20em',
                                maxWidth: '30em',
                                objectFit: 'cover',
                                cursor: 'pointer',
                            }}

                        />

                    </a>
                </div>
            </>

        </>
    );
};

export default Gallery;

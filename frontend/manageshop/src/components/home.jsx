import image1 from "../photos/site'sphoto/shoes0.jpg";
import image2 from "../photos/site'sphoto/shoes3.jpg";
import image3 from "../photos/site'sphoto/shoes5.jpg";
import image4 from "../photos/site'sphoto/shoes4.jpg";
import image5 from "../photos/site'sphoto/wear1.jpg";

export default function Home() {
    const alldivisionproduct = [
        {
            id: 1,
            title: "Product 1",
            price: 20,
            image: image1,
        },
        {
            id: 2,
            title: "Product 2",
            price: 30,
            image: image4,
        },
        {
            id: 3,
            title: "Product 3",
            price: 40,
            image: image5,
        },
        {
            id: 4,
            title: "Product 4",
            price: 50,
            image: image2,
        },
        {
            id: 5,
            title: "Product 5",
            price: 60,
            image: image3,
        },
    ];

    return (
        <div className="p-10 shadow-2xl" style={{ marginTop: "80px" }}>
            {/* Heading Section */}
            <h1 className="text-2xl font-mono text-gray-600 hover:text-black text-center">
                Welcome to Online Shopping!
            </h1>
            <p className="text-md font-sans text-black text-center mt-4">
                Browse and stream to pick what you're fascinated with.
                <br />
                Follow all our platforms for more opportunities.
            </p>

            {/* Products Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {alldivisionproduct.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center hover:shadow-2xl transition-shadow"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
                        <p className="text-gray-600 mt-2">Price: ${item.price}</p>
                        <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

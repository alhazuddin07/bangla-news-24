import Image from "next/image";
import Link from "next/link";


interface newsType {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string,
};


const MainNews = ({ news }: { news: newsType[] }) => {

    const [firstNews, ...otherNews] = news;

    // const otherNews = news.slice(1);
    // console.log('other news', otherNews);

    return (

        <div className="flex gap-2">

            <Link href={`/news/${firstNews.id}`}>

                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <Image
                            src={firstNews.imageUrl}
                            width={600}
                            height={600}
                            alt={firstNews.imageAlt}
                        />
                    </figure>
                    <div className="card-body">

                        <p className="text-red-500 font-semibold">{firstNews.category}</p>
                        <h2 className="card-title">{firstNews.title}</h2>
                        <p>{firstNews.description}</p>

                    </div>
                </div>
            </Link>


            <div className="grid gap-2">
                {otherNews.slice(0, 4).map((on) => (
                    <Link key={on.id} href={`/news/${on.id}`}>
                        <div key={on.id} className="card bg-base-100 border border-gray-300 p-2">
                            <p className="text-red-500 font-semibold py-2">{firstNews.category}</p>
                            <div>{on.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>


    );
};

export default MainNews;
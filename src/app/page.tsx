import MainNews from "./components/MainNews";
import MostRead from "./components/MostRead";
import NewsCard from "./components/NewsCard";

interface osType {
  curationId: number,
  title: string,
  articles: {
    id: string,
    title: string,
    description: string,
    category: string,
    imageUrl: string,
    imageAlt: string
  }[];
}

export default async function Home() {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const section = data.data;

  const mainNews = section[0].articles

  const otherSection:osType[] = section.slice(1);


  return (
    <div>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="grid gap-5 mt-5">

            {otherSection.map(os => <div key={os.curationId}>
              <h1 className="font-bold border-b-2 border-red-700 pb-1">{os.title}</h1>

              <div className="grid grid-cols-3 gap-2 mt-3">
                {os.articles.map((news) => <NewsCard key={news.id} news={news} />)}
              </div>

            </div>)}

          </div>

        </div>
        <div className=" col-span-1">
          <MostRead />
        </div>
      </div>

    </div>
  );
}

import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import Header from "../../components/Header";
export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-1 md:max-w-3xl xl:grid-cols-1 xl:max-w-6xl mx-auto p-3">
        <h1 className="text-4xl mt-10 mb-5 font-medium ">News Feed:</h1>
        <div>
          {articles.map((article, index) => (
            <div
              key={uuid()}
              className="mb-10 mt-10 shadow-md shadow-red-300 rounded-lg"
            >
              <div className=" grid grid-cols-1 md:grid-cols-1">
                <h1
                  className="cursor-pointer grid grid-cols-1 md:grid-cols-1 text-3xl pb-2 text-center font-medium"
                  onClick={() => (window.location.href = article.url)}
                >
                  {article.title}
                </h1>
                <p className="grid grid-cols-1 md:grid-cols-1 text-sm p-2 text-left ">
                  {article.description}
                </p>
              </div>
              {!!article.urlToImage && (
                <div className="grid grid-cols-1 md:grid-cols-1 pb-5 pl-2 pr-2 ">
                  <img src={article.urlToImage} className="" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between ml-10 mr-10 mt-10 mb-20">
          <ArrowCircleLeftIcon
            onClick={() => {
              if (pageNumber > 1) {
                router.push(`/feed/${pageNumber - 1}`);
              }
            }}
            className={pageNumber === 1 ? `pageDtn opacity-50` : `pageBtn`}
          />
          <ArrowCircleRightIcon
            onClick={() => {
              if (pageNumber < 5) {
                router.push(`/feed/${pageNumber + 1}`);
              }
            }}
            className={pageNumber === 5 ? `pageDtn opacity-50` : `pageBtn`}
          />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=5&page=${pageNumber}&apiKey=${process.env.NEWSAPIKEY}`
  );

  const apiJason = await apiResponse.json();
  const { articles } = apiJason;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;

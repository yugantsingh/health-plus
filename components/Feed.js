import NewsFeed from "./NewsFeed";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Feed Section */}
      <section className="col-span-2">
        <NewsFeed />
      </section>
      {/* Other Side Section */}
      <section></section>
    </main>
  );
}
export default Feed;

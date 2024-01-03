import { Header } from "@/components/header";
import PostHogClient from "@/components/postHog/PostHogClient";

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = await import("../../../../blog.json");

  const result = posts?.posts?.find((post) => post?.id === params?.slug);

  const postHogClient = PostHogClient();

  postHogClient.capture({
    distinctId: "ger@paisanos.io",
    event: `Post: ${result?.id} - Title:${result?.title}`,
  });

  return (
    <div className={`flex min-h-screen flex-col items-center p-24 `}>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 bg-gray-100 dark:border-lime-500 hover:dark:bg-neutral-800/40 max-w-md w-full bg-dark shadow-lg overflow-hidden">
          <div className="p-4">
            <div className="mb-4">
              <p className="text-gray-600 text-lg text-center">
                ID: {result?.id}
              </p>
              <p className="text-gray-600 font-bold text-xl text-center">
                {result?.name}
              </p>
              <p className="text-gray-600 text-xl font-bold my-3 text-center">
                Título del Post {result?.title}
              </p>
              <p className="text-gray-500 text-sm text-center">
                Piloto:{result?.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

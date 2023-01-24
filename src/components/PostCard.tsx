interface PostCardProps {
  url: string;
  description: string;
  title: string;
  tags: Array<string>;
  date: Date;
}
export default function PostCard({
  url,
  description,
  title,
  tags,
  date,
}: PostCardProps) {
  const dateOptions: object = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      <a href={url} className="block">
        <div className="rounded-md bg-green-600 my-8 px-3 py-3 dark:bg-green-900 mt-2 shadow-sm shadow-green-400 hover:scale-105 hover:-translate-y-1 duration-300">
          <li>
            <span className="ml-1 text-3xl">{title}</span>
            <p className="ml-1 mt-2 text-zinc-800 dark:text-zinc-300">
              {description}
            </p>
            <div className="my-2 flex gap-2">
              {tags.map((tag: string) => (
                <a href={`/tags/${tag.toLowerCase()}`}>
                  <span className="inline-flex items-center gap-1 rounded-full text-xs bg-zinc-400 dark:bg-zinc-600 font-semibold px-2 py-1 hover:text-green-700">
                    {tag}
                  </span>
                </a>
              ))}
            </div>
            <p className="ml-1 text-xs font-thin text-zinc-900 dark:text-zinc-400">
              Posted on
              <span className="text-zinc-600 dark:text-zinc-300">
                {" "}
                {new Date(date).toLocaleDateString("en-US", dateOptions)}
              </span>
            </p>
          </li>
        </div>
      </a>
    </>
  );
}

interface PostCardProps {
  url: string;
  description: string;
  id: string;
  title: string;
  tags: Array<string>;
  date: Date;
}
export default function PostCard({
  url,
  description,
  id,
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
    <li key={id}>
      <a href={url}>
        <button className="rounded-md w-[100%] bg-emerald-600 my-8 px-3 py-3 dark:bg-emerald-900 mt-2 shadow-sm shadow-emerald-400 hover:scale-105 hover:-translate-y-1 duration-300">
          <span className="ml-1 text-3xl  text-zinc-800 dark:text-yellow-200">
            {title}
          </span>
          <p className="ml-1 mt-2 text-zinc-800 dark:text-zinc-100">
            {description}
          </p>
          <div className="my-2 flex gap-2 items-center justify-center">
            {tags.map((tag: string) => (
              <span className="inline-flex items-center gap-1 rounded-full text-xs bg-zinc-400 dark:bg-zinc-600 font-semibold px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
          <p className="ml-1 text-xs font-thin text-zinc-900 dark:text-zinc-400">
            Posted on
            <span className="text-zinc-700 dark:text-zinc-300 ml-1">
              {new Date(date).toLocaleDateString("en-US", dateOptions)}
            </span>
          </p>
        </button>
      </a>
    </li>
  );
}

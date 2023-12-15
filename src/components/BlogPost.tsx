import {BlogPost} from "../data/blogsData.ts";
import UpArrowIcon from "./UpArrowIcon.tsx";

const BlogPost = ({post}: { post: BlogPost }) => {
    return (
        <li className="mb-12">
            <div
                className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div
                    className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <img alt="Telescope" loading="lazy" width="200" height="48"
                     decoding="async" data-nimg="1" src={post.imageSrc}
                     className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"/>
                <div className="z-10 col-span-6">
                    <p className="-mt-1 text-sm font-semibold leading-6">{post.date}</p>
                    <h3 className="-mt-1">
                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                           href={post.link}
                           target="_blank" rel="noreferrer noopener"
                           aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)">
                            <span
                                className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>{post.title} <UpArrowIcon />
                            </span>
                        </a>
                    </h3>
                </div>
            </div>
        </li>
    );
};

export default BlogPost;

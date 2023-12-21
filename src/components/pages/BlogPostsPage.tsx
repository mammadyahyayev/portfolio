import {NavLink} from "react-router-dom";
import LeftArrowIcon from "../icons/LeftArrowIcon.tsx";
import UpArrowIcon from "../icons/UpArrowIcon.tsx";
import {blogPostsData} from "../../data/blogsData.ts";

const BlogPostsPage = () => {
    return (
        <>
            <div className="max-w-7xl w-11/12 mx-auto min-h-screen">
                <div className="lg:py-24">
                    <NavLink
                        className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" to="/"
                        preventScrollReset={true}>
                        <LeftArrowIcon/>
                        Mammad Yahya
                    </NavLink>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Blog Posts</h1>
                    <table id="content" className="mt-12 w-full border-collapse text-left">
                        <thead
                            className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                        <tr>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                            <th className="py-4 pr-6 text-sm font-semibold text-slate-200">Title</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Tags
                            </th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blogPostsData.sort((a, b) => b.date.getTime() - a.date.getTime()).map(post => (
                            <tr className="border-b border-slate-300/10 last:border-none" key={post.link}>
                                <td className="py-4 pr-4 align-top text-sm">
                                    <div className="translate-y-px">{post.dateStr}</div>
                                </td>
                                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                    <div>
                                        <div className="block sm:hidden">
                                            <a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link"
                                                href={post.link} target="_blank" rel="noreferrer noopener"
                                                aria-label={post.link + " (opens in a new tab)"}>
                                                <span>
                                                    <span>{post.title} <UpArrowIcon/> </span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="hidden sm:block">{post.title}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                    <ul className="flex -translate-y-1.5 flex-wrap">
                                        {post.tags.map(tag => (
                                            <li className="my-1 mr-1.5" key={tag}>
                                                <div
                                                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{tag}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="hidden py-4 align-top sm:table-cell">
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link"
                                        href={post.link} target="_blank" rel="noreferrer noopener"
                                        aria-label={post.link + " (opens in a new tab)"}>
                                    <span>
                                        <span className="inline-block">{post.linkLabel} <UpArrowIcon/> </span>
                                    </span>
                                    </a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default BlogPostsPage;

import '@css/css-export.css';

import { projectsData } from "@data/projectsData.ts";
import UpArrowIcon from "@components/icons/UpArrowIcon.tsx";
import GoBackInHistory from "@components/GoBackInHistory.tsx";

function ProjectsPage() {
    return (
        <div className="max-w-7xl w-11/12 mx-auto min-h-screen">
            <div className="lg:py-24">
                <GoBackInHistory />
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
                <table id="content" className="mt-12 w-full border-collapse text-left">
                    <thead
                        className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                        <tr>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with
                            </th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectsData.map(project => (
                            <tr className="border-b border-slate-300/10 last:border-none" key={project.link}>
                                <td className="py-4 pr-4 align-top text-sm">
                                    <div className="translate-y-px">{project.year}</div>
                                </td>
                                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                    <div>
                                        <div className="block sm:hidden">
                                            <a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link"
                                                href={project.link} target="_blank" rel="noreferrer noopener"
                                                aria-label={project.link + " (opens in a new tab)"}>
                                                <span>
                                                    <span>{project.name} <UpArrowIcon /> </span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="hidden sm:block">{project.name}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                    <ul className="flex -translate-y-1.5 flex-wrap">
                                        {project.technologies.map(technology => (
                                            <li className="my-1 mr-1.5" key={technology}>
                                                <div
                                                    className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{technology}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="hidden py-4 align-top sm:table-cell">
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link"
                                        href={project.link} target="_blank" rel="noreferrer noopener"
                                        aria-label={project.link + " (opens in a new tab)"}>
                                        <span>
                                            <span className="inline-block">{project.link}<UpArrowIcon />
                                            </span>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectsPage

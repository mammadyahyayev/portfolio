import {ProjectItem} from "../data/projectsData.ts";

function ProjectItem({name, tags, link}: ProjectItem) {
    return (
        <a className="border-2 border-stone-900 dark:border-white rounded-md" href={link}>
            <div className="w-full h-36 md:h-48 object-fill cursor-pointer bg-blue-950 border-white border-2">
                <p className="flex items-center justify-center w-full h-full text-2xl">
                    {name}
                </p>
            </div>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{name}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {tags.map(tag => (
                        <span
                            className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                            {tag}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    );
}

export default ProjectItem;

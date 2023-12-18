import NavItem from "./NavItem.tsx";

type Section = {
    title: string;
    slug: string;
}

const sections: Section[] = [
    {title: "About", slug: "about"},
    {title: "Experience", slug: "experience"},
    {title: "Projects", slug: "projects"},
    {title: "Blog", slug: "blog"},
    {title: "Contact me", slug: "contact"},
]
export default function NavBar() {

    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                {sections.map(section => (
                    <NavItem title={section.title}
                             slug={section.slug}
                             key={section.slug}
                    />
                ))}
            </ul>
        </nav>
    )
}

type NavItemProps = {
    title: string;
    slug: string;
}

const NavItem = ({title, slug}: NavItemProps) => {
    return (
        <li>
            <a className="group flex items-center py-3" href={`#${slug}`}>
                <span
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"/>
                <span
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {title}
                </span>
            </a>
        </li>
    );
};

export default NavItem;

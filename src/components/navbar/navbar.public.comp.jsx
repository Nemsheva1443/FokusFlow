import { ListItem } from "../shared/listitem.jsx";
import { pageSettings } from "../../settings/settings.js";
import { AiFillBulb } from "react-icons/ai";

export function NavbarPublic() {
  const { publicNavbar } = pageSettings.navbars;

  return (
    <div>
      <div className="mb-8 flex items-center gap-2">
        <AiFillBulb
          className="h-6 w-6 shrink-0 text-[#58734d]"
          aria-hidden="true"
        />
        <span className="text-lg font-bold">FocusFlow</span>
      </div>

     <ul className="navbar-list">
        {publicNavbar.map(item => (
          <ListItem
            key={item.id}
            content={item.label}
            link={item.href}
          />
        ))}
      </ul>
    </div>
  );
}
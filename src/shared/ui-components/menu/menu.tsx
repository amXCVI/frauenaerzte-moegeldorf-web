import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../language-switcher";

const Menu = () => {
  const { t } = useTranslation();

  const menuItems = [
    { id: "0", titleKey: t("menu.news"), href: "#news" },
    { id: "1", titleKey: t("menu.team"), href: "#team", bottomMargin: true },
    {
      id: "2",
      titleKey: t("menu.services"),
      href: "#services",
      bottomMargin: true,
    },
    { id: "3", titleKey: t("menu.contact"), href: "#contact" },
    { id: "4", titleKey: t("menu.legal_notice"), href: "#legal_notice" },
    { id: "5", titleKey: t("menu.privacy_policy"), href: "#privacy_policy" },
  ];

  return (
    <menu
      className="flex flex-col w-full h-full bg-primary-500
                 p-4 sm:p-9"
    >
      <ul>
        {menuItems.map((item) => {
          return (
            <li
              key={item.id + item.href + "_key"}
              className={item.bottomMargin ? "mb-4" : ""}
            >
              <a
                href={item.href}
                className="text-4xl/snug sm:text-7xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
                           uppercase flex w-full"
              >
                {item.titleKey}
              </a>
            </li>
          );
        })}
      </ul>

      <LanguageSwitcher className="mt-auto ml-auto" />
    </menu>
  );
};

export { Menu };

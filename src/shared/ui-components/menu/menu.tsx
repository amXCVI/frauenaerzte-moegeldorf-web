const menuItems = [{
    id: '0',
    titleKey: '',
    href: '',
}]

const Menu = () => {
  return (
    <menu
      className="w-full h-full bg-primary-500
                 p-4 sm:p-9"
    >
        <ul>
            {menuItems.map((item) => {
                return <li key={item.id + item.href + '_key'}>
                    <link></link>
                </li>
            })}
        </ul>
    </menu>
  );
};

export { Menu };

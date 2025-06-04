import { GridLayout } from "../../shared/ui-components/layouts";
import { Menu } from "../../shared/ui-components/menu";

const HomePage = () => {
  return (
    <GridLayout>
      <div
        className="md:bg-[url('/assets/main_page_p_flowers.webp')] bg-right-bottom bg-contain bg-no-repeat
                   p-4 sm:p-9"
      >
        <Header />
      </div>
      <Menu />
    </GridLayout>
  );
};

const Header = () => {
  return <img src="/assets/logo_metzner_brazier_pf.svg" />;
};

export { HomePage };

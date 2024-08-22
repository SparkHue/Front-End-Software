import { GetServerSideProps } from "next";
import { apiClient } from "../lib/api";
import { makeAllMenus } from "../lib/menu";
import { IMenuItem } from "../@types/components";
import MainLayout from "../layouts/Main";

export default function ShippingPage({ mainMenu, footerMenu }: IPageProps) {
  return (
    <MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
      <div className={"container-xxl"}>
        <h1 className="page-heading page-heading_h1  page-heading_m-h1">
          About Us
        </h1>
        <div className="text-container">
          <p>
            At SparkHue, we believe in enhancing your life with top-quality
            electronics, stylish clothing, and essential stationery. Our mission
            is to bring you the latest in technology, fashion, and everyday
            necessities, all in one convenient place. From cutting-edge gadgets
            and trendy apparel to must-have office and school supplies, we
            ensure every product sparks joy and adds value to your daily
            routine. Explore SparkHue and discover a world where innovation
            meets style and practicality.
          </p>
		  <a href="http://sparkhue.shop/about" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
  const categoryTree = await apiClient.catalog.getCategoryTree({
    menu: "category",
  });

  const menus = makeAllMenus({ categoryTree });

  return {
    props: {
      ...menus,
    },
  };
};

interface IPageProps {
  mainMenu: IMenuItem[];
  footerMenu: IMenuItem[];
}

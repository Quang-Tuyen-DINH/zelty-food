import React, { useEffect, useState } from "react";
import { MenuList } from "../components/ui/Menu";
import { SearchInput } from "../components/forms/SearchInput";
import { CatalogueStyled } from "../components/styles/Catalogue.styled";
import { Cart } from "../components/ui/Cart";
import CatalogueService from "../services/catalogue/Catalogue.service";
import { useDispatch } from "react-redux";
import Store from "../store/Index";
import { Menu } from "../shared/models/Menu.model";
import { Product } from "../shared/models/Product.model";
import ProductCard from "../components/ui/ProductCard"

export const Catalogue = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [menu, setMenu] = useState<Menu[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string>("M01")

  useEffect(() => {
    getMenu();
    getAllProducts();
    Store.subscribe(() => {
      setProducts(Store.getState().products);
      setMenu(Store.getState().menu);
    });
  }, [selectedMenu])

  const getMenu = async () => {
    await CatalogueService.getMenu()
      .then((data) => {
        if(!data.data.Items) {
          return;
        }
        dispatch({ type: "LOAD_MENU", payload: data.data.Items });
      })
  }

  const selectMenu = (menuId: string) => {
    setSelectedMenu(menuId);
  }

  const getAllProducts = async () => {
    await CatalogueService.getAllProducts()
      .then((data) => {
        if(!data.data.Items) {
          return;
        }
        dispatch({ type: "LOAD_PRODUCTS", payload: data.data.Items });
      })
      .catch(error => {console.log(error)})
  }

  return (
    <CatalogueStyled className="zelty-restaurant__catalogue">
      <div className="zelty-restaurant__catalogue__left">
        <SearchInput />
        <MenuList menu={menu} selectMenu={selectMenu}/>
        <div className="zelty-restaurant__catalogue__left__products">
          {products.filter((product: Product) => product.menuId === selectedMenu).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="zelty-restaurant__catalogue__right">
        <Cart />
      </div>
    </CatalogueStyled>
  );
};

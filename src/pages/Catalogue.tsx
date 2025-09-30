import React, { useEffect, useState } from "react";
import { MenuList } from "../components/ui/Menu";
import { SearchInput } from "../components/forms/SearchInput";
import { CatalogueStyled } from "../components/styles/Catalogue.styled";
import Cart from "../components/ui/Cart";
import CatalogueService from "../services/catalogue/Catalogue.service";
import { useDispatch, useSelector } from "react-redux";
import Store from "../store/Index";
import { Menu } from "../shared/models/Menu.model";
import { Product } from "../shared/models/Product.model";
import { Item } from "../shared/models/Option.model";
import ProductCard from "../components/ui/ProductCard";
import { RootState } from "../store/RootState.model";

export const Catalogue = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const options = useSelector((state: RootState) => state.options);
  const menu = useSelector((state: RootState) => state.menu);
  const [selectedMenu, setSelectedMenu] = useState<string>("M01")
  const [searching, setSearching] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("")

  useEffect(() => {
    getMenu();
    getAllProducts();
    getAllOptions();
  }, []);

  const getMenu = async () => {
    await CatalogueService.getMenu()
      .then((data) => {
        if(!data.data.Items) {
          return;
        }
        dispatch({ type: "LOAD_MENU", payload: data.data.Items });
      })
  };

  const getAllProducts = async () => {
    await CatalogueService.getAllProducts()
      .then((data) => {
        if(!data.data.Items) {
          return;
        }
        dispatch({ type: "LOAD_PRODUCTS", payload: data.data.Items });
      })
      .catch(error => {console.log(error)})
  };

  const getAllOptions = async () => {
    await CatalogueService.getAllOptions()
      .then((data) => {
        if(!data.data.Items) {
          return;
        }

        dispatch({ type: "LOAD_OPTIONS", payload: data.data.Items });
      })
      .catch(error => {console.log(error)})
  };

  const selectMenu = (menuId: string) => {
    setSelectedMenu(menuId);
    setKeyword("");
    setSearching(false);
  };

  const searchProduct = (event: any) => {
    if(event.target.value.length > 0) {
      setSearching(true);
      setKeyword(event.target.value);
    } else {
      setSearching(false);
    }
  };

  const filteredProducts = searching
    ? products.filter((product: Product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : products.filter((product: Product) => product.menuId === selectedMenu);

  return (
    <CatalogueStyled className="zelty-restaurant__catalogue">
      <div className="zelty-restaurant__catalogue__left">
        <SearchInput searchProduct={searchProduct}/>
        <MenuList menu={menu} selectMenu={selectMenu}/>
        <div className="zelty-restaurant__catalogue__left__products">
          {filteredProducts.map((product: Product) => (
            product.available_options ?
              <ProductCard key={product.id} product={product} options={options}/>
            :
              <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="zelty-restaurant__catalogue__right">
        <Cart atCatalogue={true} atCheckout={false}  checkoutConfirmed={false}/>
      </div>
    </CatalogueStyled>
  );
};

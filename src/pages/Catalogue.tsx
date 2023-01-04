import React, { useEffect, useState } from "react";
import { MenuList } from "../components/ui/Menu";
import { SearchInput } from "../components/forms/SearchInput";
import { CatalogueStyled } from "../components/styles/Catalogue.styled";
import Cart from "../components/ui/Cart";
import CatalogueService from "../services/catalogue/Catalogue.service";
import { useDispatch } from "react-redux";
import Store from "../store/Index";
import { Menu } from "../shared/models/Menu.model";
import { Product } from "../shared/models/Product.model";
import { Item } from "../shared/models/Option.model";
import ProductCard from "../components/ui/ProductCard";

export const Catalogue = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [options, setOptions] = useState<Item[]>([]);
  const [menu, setMenu] = useState<Menu[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string>("M01")
  const [searching, setSearching] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("")

  useEffect(() => {
    getMenu();
    getAllProducts();
    getAllOptions();
    Store.subscribe(() => {
      setMenu(Store.getState().menu);
      setProducts(Store.getState().products);
      setOptions(Store.getState().options);
    });
  }, [])

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
    setKeyword("");
    setSearching(false);
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

  const getAllOptions = async () => {
    await CatalogueService.getAllOptions()
      .then((data) => {
        if(!data.data.Items) {
          return;
        }
        const options = [].concat(
          ...data.data.Items.map((group: any) => {
              return group.items;
            }
          )
        )
        dispatch({ type: "LOAD_OPTIONS", payload: options });
      })
      .catch(error => {console.log(error)})
  }

  const searchProduct = (event: any) => {
    if(event.target.value.length > 0) {
      setSearching(true);
      setKeyword(event.target.value);
    } else {
      setSearching(false);
    }
  }

  return (
    <CatalogueStyled className="zelty-restaurant__catalogue">
      <div className="zelty-restaurant__catalogue__left">
        <SearchInput searchProduct={searchProduct}/>
        <MenuList menu={menu} selectMenu={selectMenu}/>
        <div className="zelty-restaurant__catalogue__left__products">
          {searching === false && products.filter((product: Product) => product.menuId === selectedMenu).map((product: Product) => (
            product.available_options ?
              <ProductCard key={product.id} product={product} options={options}/>
            :
              <ProductCard key={product.id} product={product} />
          ))}
          {searching === true && products.filter((product: Product) => product.name.toLowerCase().includes(keyword.toLowerCase())).map((product: Product) => (
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

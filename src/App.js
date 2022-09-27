import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/index";
import Footer from "./components/footer/index";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/signUpForm/index";
import { Container, Image } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
import SignInForm from "./pages/auth/signInForm/index";
import ProductsPage from "./pages/products/productsPage";
import ProductCreateForm from "./pages/products/productCreateForm";
import ProductEditForm from "./pages/products/productEditForm";
import { useCategories } from "./contexts/CategoriesContext";
import ProductPage from "./pages/products/productPage";
import ProfilePage from "./pages/profiles/profilePage";
import ProfileEditPage from "./pages/profiles/profileEditPage";
import Message from "./components/alert/index";
import ModalCustom from "./components/modal";
import PageNotFound from "./pages/404notFound";

export const AppWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  background-color: #f8f8f8;
  min-height: 100vh;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  background-color: #f8f8f8;
  height: ${(props) => (props.home ? null : "100%")};
  /* min-height: calc(); */
`;

export const BackgroundImage = styled(Image)`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${(props) =>
    props.signIn
      ? "bottom 0px right 62%"
      : props.signUp
      ? null
      : "bottom 0 right 31%"};

  @media (max-width: 767px) {
    display: ${(props) => (props.signIn || props.signUp ? "none" : null)};
    object-position: ${(props) =>
      props.signIn || props.signUp ? null : "left 0"};
  }
`;

function App() {
  const [background, setBackground] = useState();
  const choices = useCategories();
  return (
    <AppWrapper>
      <NavBar />
      <Main home={background ? null : "true"}>
        {background ? (
          <BackgroundImage
            src={
              background.signIn
                ? "https://res.cloudinary.com/milo-milo/image/upload/v1662642961/signin-section_spvixz.jpg"
                : background.signUp
                ? "https://res.cloudinary.com/milo-milo/image/upload/v1662646113/signup-section_japbut.jpg"
                : "https://res.cloudinary.com/milo-milo/image/upload/v1664235152/telescope-498331_1920_mkik1t.jpg"
            }
            signin={`${!!background.signIn}`}
          />
        ) : null}
        <Container className={styles.Main_Container}>
          <Message />
          <ModalCustom />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <ProductsPage itemsPerPage={12} />}
            />
            <Route
              exact
              path="/profiles/:id/edit"
              render={() => <ProfileEditPage />}
            />
            <Route exact path="/profiles/:id/" render={() => <ProfilePage />} />
            <Route
              exact
              path="/products/create"
              render={() => <ProductCreateForm />}
            />
            <Route
              exact
              path="/signin"
              render={() => <SignInForm setBackground={setBackground} />}
            />
            {choices.categories?.map((cat) => (
              <Route
                key={cat.value}
                exact
                path={`/products/categories/${cat.display_name.toLowerCase()}`}
                render={() => (
                  <ProductsPage
                    filter={`category=${cat.value}`}
                    itemsPerPage={12}
                  />
                )}
              />
            ))}
            <Route
              exact
              path="/products/:id"
              render={() => <ProductPage itemsPerPage={10} />}
            />
            <Route
              exact
              path="/signup"
              render={() => <SignUpForm setBackground={setBackground} />}
            />
            <Route
              exact
              path="/products/:id/edit"
              render={() => <ProductEditForm />}
            />
            
            <Route
              path={"*"}
              render={() => <PageNotFound setBackground={setBackground} />}
            />
          </Switch>
        </Container>
      </Main>
      <Footer />
    </AppWrapper>
  );
}

export default App;

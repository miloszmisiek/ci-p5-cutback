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
import ProductPage from "./pages/products/productPage";
import ProfilePage from "./pages/profiles/profilePage";
import ProfileEditPage from "./pages/profiles/profileEditPage";
import Message from "./components/alert/index";
import ModalCustom from "./components/modal";
import PageNotFound from "./pages/404notFound";
import useFetch from "./components/hooks/useFetch";

export const AppWrapper = styled.div`
  position: relative;
  font-family: "Montserrat", sans-serif;
  background-color: #f8f8f8;
  min-height: 100vh;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  background-color: #f8f8f8;
  min-height: calc(100vh - 101px);
`;

export const BackgroundImage = styled(Image)`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${(props) =>
    props.signin
      ? "bottom 0 right 55%"
      : props.signup
      ? "bottom 0 right 55%"
      : "bottom 0 right 31%"};

  @media (max-width: 767px) {
    display: ${(props) => (props.signin || props.signup ? "none" : null)};
    object-position: ${(props) =>
      props.signin || props.signup ? null : "left 0"};
  }
`;

function App() {
  const [background, setBackground] = useState();
  const choices = useFetch();
  return (
    <AppWrapper>
      <NavBar />
      <Main home={background ? null : "true"}>
        {background ? (
          <BackgroundImage
            src={
              background.signin
                ? "https://res.cloudinary.com/milo-milo/image/upload/v1662642961/signin-section_spvixz.jpg"
                : background.signup
                ? "https://res.cloudinary.com/milo-milo/image/upload/v1662646113/signup-section_japbut.jpg"
                : "https://res.cloudinary.com/milo-milo/image/upload/v1664235152/telescope-498331_1920_mkik1t.jpg"
            }
            signin={background.signin}
            signup={background.signup}
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
            {choices?.categories?.map((cat) => (
              <Route
                key={cat.key}
                exact
                path={`/products/categories/${cat.value.toLowerCase()}`}
                render={() => (
                  <ProductsPage
                    filter={`category=${cat.key}`}
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

import {
  Hero,
  SuperQuality,
  PopularProducts,
  Footer,
  Services,
  SpecialOffers,
  Subscribe,
  CustomerReviews,
  Navbar,
} from "./sections";

const App = () => (
  <main className="relative">
    <Navbar />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="py-10 padding-x">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="w-full py-16 padding-x sm:py-32">
      <Subscribe />
    </section>
    <section
      className="bg-black padding-x padding-t
    pb-8"
    >
      <Footer />
    </section>
  </main>
);

export default App;

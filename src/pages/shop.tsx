import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import Layout from "../components/layout";

const Shop = () => {
  const [productSelected, setSelectedProduct] = useState<string | null>(null);
  const location = window.location.toString();

  useEffect(() => {
    const url = new URL(location);
    const product = url.searchParams.get("product");

    if (product) {
      setSelectedProduct(product);
    } else {
      setSelectedProduct(null);
    }
  }, [location]);

  return (
    <Layout>
      <div>
        {productSelected ? (
          <ProductDetails />
        ) : (
          <div className="mt-12 grid grid-cols-3 font-body gap-x-10">
            <ProductBlock
              product="whats-not-there"
              title="What's Not There"
              price={5}>
              <div className="grid">
                <StaticImage
                  src="../assets/images/all-these-boys.jpg"
                  alt=""
                  className="object-cover h-[475px] row-start-1 col-start-1"
                />
                <StaticImage
                  src="../assets/images/whats-not-there.jpg"
                  alt="photo of a pale hand holding zine with a black & white cover against a colorful background"
                  className="object-cover h-[475px] hover:opacity-0 transition-opacity row-start-1 col-start-1"
                />
              </div>
            </ProductBlock>
            <ProductBlock
              product="all-these-boys"
              title="All These Boys"
              price={30}>
              <div className="grid">
                <StaticImage
                  src="../assets/images/whats-not-there.jpg"
                  alt=""
                  className="object-cover h-[475px] row-start-1 col-start-1"
                />
                <StaticImage
                  src="../assets/images/all-these-boys.jpg"
                  alt=""
                  className="object-cover h-[475px] hover:opacity-0 transition-opacity row-start-1 col-start-1"
                />
              </div>
            </ProductBlock>
            <ProductBlock
              product="whats-not-there"
              title="C.D. Wright"
              price={30}>
              <div className="grid">
                <StaticImage
                  src="../assets/images/whats-not-there.jpg"
                  alt=""
                  className="object-cover h-[475px] row-start-1 col-start-1"
                />
                <StaticImage
                  src="../assets/images/cdwright.jpg"
                  alt=""
                  className="object-cover h-[475px] hover:opacity-0 transition-opacity row-start-1 col-start-1"
                />
              </div>
            </ProductBlock>
            <ProductBlock
              product="whats-not-there"
              title="Dylan Thomas"
              price={5}>
              <div className="grid">
                <StaticImage
                  src="../assets/images/whats-not-there.jpg"
                  alt=""
                  className="object-cover h-[475px] row-start-1 col-start-1"
                />
                <StaticImage
                  src="../assets/images/dylan-thomas.jpg"
                  alt=""
                  className="object-cover h-[475px] hover:opacity-0 transition-opacity row-start-1 col-start-1"
                />
              </div>
            </ProductBlock>
            <ProductBlock
              product="whats-not-there"
              title="What's Not There"
              price={5}>
              <div className="grid">
                <StaticImage
                  src="../assets/images/all-these-boys.jpg"
                  alt=""
                  className="object-cover h-[475px] row-start-1 col-start-1"
                />
                <StaticImage
                  src="../assets/images/whats-not-there.jpg"
                  alt="photo of a pale hand holding zine with a black & white cover against a colorful background"
                  className="object-cover h-[475px] hover:opacity-0 transition-opacity row-start-1 col-start-1"
                />
              </div>
            </ProductBlock>
          </div>
        )}
      </div>
    </Layout>
  );
};

// const createOrder = async () => {
//   const client = new Client();

//   try {
//     const response = await client.checkoutApi.createPaymentLink({
//       idempotencyKey: "key_identifying_this_order",
//       order: {
//         locationId: "LW7R7Y55FNZHN",
//         lineItems: [
//           {
//             name: "60,000 mile maintenance",
//             quantity: "1",
//             note: "1st line item note",
//             basePriceMoney: {
//               amount: BigInt(30000),
//               currency: "USD",
//             },
//           },
//           {
//             name: "Tire rotation and balancing",
//             quantity: "1",
//             basePriceMoney: {
//               amount: BigInt(1500),
//               currency: "USD",
//             },
//           },
//           {
//             name: "Wiper fluid replacement",
//             quantity: "1",
//             basePriceMoney: {
//               amount: BigInt(200),
//               currency: "USD",
//             },
//           },
//           {
//             name: "Oil change",
//             quantity: "1",
//             basePriceMoney: {
//               amount: BigInt(150),
//               currency: "USD",
//             },
//           },
//         ],
//       },
//     });

//     console.log(response.result);
//   } catch (error) {
//     console.log(error);
//   }
// };

const ProductBlock = ({
  product,
  title,
  price,
  children,
}: {
  product: string;
  title: string;
  price: number;
  children: React.ReactNode;
}) => (
  <button onClick={() => navigate(`?product=${product}`)} className="group">
    {children}
    <div className="text-xl flex justify-between relative bottom-10 px-4 py-2 group-hover:opacity-90 opacity-0 transition-opacity bg-white">
      <p className="italic">{title}</p>
      <p>${price}</p>
    </div>
  </button>
);

const ProductDetails: React.FC = () => {
  return <div>DETAILS!!!!</div>;
};

export const Head = () => <title>Pansy Press Shop</title>;

export default Shop;

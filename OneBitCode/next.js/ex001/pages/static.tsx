// // pages/static.tsx

// import { GetStaticProps, NextPage } from "next";
// import { ReactNode, useEffect, useState } from "react";

// // ...

// export const getStaticProps: GetStaticProps = async () => {
//   const staticData = await fetch(
//     `${process.env.NEXT_PUBLIC_APIURL}/api/hello`
//   ).then((res) => res.json());

//   return {
//     props: {
//       staticData,
//     },
//   };
// };

// const Static: NextPage = (props: {
//   children?: ReactNode;
//   staticData?: ApiResponse;
// }) => {
//   const [clientSideData, setClientSideData] = useState<ApiResponse>();

//   // ...

//   return (
//     <Container tag="main">
//       <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

//       <Row>
//         <Col>
//           <h3>
//             Gerado estaticamente durante o build: {props.staticData?.timestamp}
//           </h3>
//         </Col>

//         <Col>
//           <h3>Gerado no cliente: {clientSideData?.timestamp}</h3>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Static;

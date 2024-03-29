// // pages/dynamic.tsx

// import { GetServerSideProps, NextPage } from "next";

// // ...

// export const getServerSideProps: GetServerSideProps = async () => {
//   const serverSideData: ApiResponse = await fetch(
//     `${process.env.NEXT_PUBLIC_APIURL}/api/hello`
//   ).then((res) => res.json());

//   return {
//     props: {
//       serverSideData,
//     },
//   };
// };

// const Dynamic: NextPage = (props: {
//   children?: ReactNode;
//   serverSideData?: ApiResponse;
// }) => {
//   const [clientSideData, setClientSideData] = useState<ApiResponse>();

//   // ...

//   return (
//     <Container tag="main">
//       <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

//       <Row>
//         <Col>
//           <h3>Gerado no servidor: {props.serverSideData?.timestamp}</h3>
//         </Col>

//         <Col>
//           <h3>Gerado no cliente: {clientSideData?.timestamp}</h3>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dynamic;

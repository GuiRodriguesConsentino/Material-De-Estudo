export default function ProductBoundary() {
   const error = useRouteError()

   if (isRouterErrorResponse(error)) {
      switch (error.status) {
         case 404:
            return <h2>Oops... Produto não encontrado.</h2>
         case 401:
            return <h2>Você não está autorizado a ver essa página.</h2>
         case 400:
            return <h2>Parece que deu um erro na requisição.</h2>
         case 500:
            return <h2>Erro interno no servidor.</h2>
      }
   }

   return <h2>Algo deu errado.</h2>
}
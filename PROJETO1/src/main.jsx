import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//instalando as dependencias para criar as rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Error.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'

//criando a função brouser router

const router =createBrowserRouter([
  {
    //chamando o elemento pai
    path:'/',element:<App/>,
    errorElement:<Error/>,
    //elementos filhos
    children:[
      {path:'/', element:<Home/>},
      {path:'/produtos', element:<Produtos/>},
      {path:'/sobre', element:<Sobre/>},
      {path:'/contato', element:<Contato/>},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

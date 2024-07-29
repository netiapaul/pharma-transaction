import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PrimeReactProvider } from 'primereact/api'
import App from './App'
import store from './store'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

import 'core-js'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'react-datepicker/dist/react-datepicker.css'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    // refetchOnWindowFocus: false,
    // refetchOnMount: false,
    // refetchOnReconnect: false,
    // retry: false,
    gcTime: 5 * 60 * 1000,
  },
})

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
      />
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </Provider>
    {/* The rest of your application */}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
)

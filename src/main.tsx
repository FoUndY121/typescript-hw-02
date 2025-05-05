import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import { Toaster } from "react-hot-toast"
import Modal from 'react-modal'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

Modal.setAppElement(rootElement);

createRoot(rootElement).render(
    <StrictMode>
        <App />
        <Toaster />
    </StrictMode>
);

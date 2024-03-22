import { useBarcodeScan } from 'react-use-barcode-scan';
import './App.css'

function App() {
  const barcode = useBarcodeScan();

  return (
    <>
      <span>Barcode: {barcode}</span>
    </>
  )
}

export default App

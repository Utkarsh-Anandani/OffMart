"use client"
import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QRScanner = () => {
  const [isEnabled, setEnabled] = useState(false);
  const [QRData, setQRData] = useState("");

  useEffect(() => {
    const config = {fps: 5, qrbox: {height: 400, width: 400}};
    const html5Qrcode = new Html5Qrcode("QRScanner");

    const scannerStop = () => {
      if(html5Qrcode && html5Qrcode.isScanning){
        html5Qrcode
        .stop()
        .then(()=>console.log('Scanner stopped'))
        .catch(()=>console.log('Scanner Error'))
      }
    }

    const success = (result)=>{
      setQRData(result);
    }

    if(isEnabled){
      html5Qrcode.start({facingMode: "environment"}, config, success)
    }
    else{
      scannerStop();
    }

    return () => {
      scannerStop()
    }
  }, [isEnabled]);

  
  return (
    <div className='w-full h-full flex flex-col items-center justify-center pt-10 gap-5'>
    <div className='w-[400px] h-[300px] border-2 border-blue-500 text-blue-500 font-semibold text-xl flex items-center justify-center' id='QRScanner'>
      {!isEnabled && <p>Turn on to scan products</p>}
    </div>
    <button onClick={()=>setEnabled(!isEnabled)} className='text-lg font-semibold text-white bg-blue-600 px-5 py-1 rounded-xl'>
        {isEnabled?"Off":"On"}
      </button>
      <p>{QRData}</p>
    </div>
  );
};

export default QRScanner;

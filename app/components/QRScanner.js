"use client"
import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QRScanner = () => {
  const [isEnabled, setEnabled] = useState(false);
  const [QRData, setQRData] = useState("");

  useEffect(() => {
    const config = {fps: 5, qrbox: {height: 200, width: 200}};
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
    <div>
    <div className='w-[200px] h-[200px]' id='QRScanner'>
      
    </div>
    <button onClick={()=>setEnabled(!isEnabled)} className=''>
        {isEnabled?"Off":"On"}
      </button>
      <p>{QRData}</p>
    </div>
  );
};

export default QRScanner;

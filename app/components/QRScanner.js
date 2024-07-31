"use client"
import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

const QRScanner = () => {

    const [ScannerResult, setScannerResult] = useState("");

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader',{
          qrbox : {
            height : 250,
            width : 250,
          },
          fps : 2 
        });

        const success = (result) => {
            scanner.clear();
            setScannerResult(result);
        }

        const error = (err) => {
            console.warn(err);
        }

        scanner.render(success, error);

      }, []);


  return (
    <div id='reader'>
      {ScannerResult}
    </div>
  )
}

export default QRScanner

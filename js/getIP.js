const getIP = async () => {
      try {
            const ipCheck = await axios.get( `https://api.ipify.org?format=json&callback=?` );
            const ip = ipCheck.data.ip;
            getGeoData( apiKey, ip );
            input.value = ip;
            
      } catch ( e ) {
            failure.classList.add( 'show' );
      }
}

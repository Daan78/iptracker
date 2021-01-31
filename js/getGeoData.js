const getGeoData = async ( apiKey, ip ) => {
      try {
            const geoData = await axios.get( `https://geo.ipify.org/api/v1?apiKey=${ apiKey }&ipAddress=${ ip }` );
            const { lat, lng } = geoData.data.location;

            if ( geoData.data.ip.length >= 16 ) {
                  ipResult = 'Very long IPv6';
            } else {
                  ipResult = geoData.data.ip
            }

            if ( failure.classList.contains( 'show' ) ) {
                  failure.classList.remove( 'show' );
            }

            results.innerHTML = `
                  <div class="wrapper">
                        <div class="results__container">
                              <div class="results__container--clm">
                                    <h3>IP Address</h3>
                                    <p>${ ipResult }</p>
                              </div>

                              <div class="results__container--clm">
                                    <h3>Location</h3>
                                    <p>${ geoData.data.location.city }, ${ geoData.data.location.country } ${ geoData.data.location.postalCode }</p>
                              </div>

                              <div class="results__container--clm">
                                    <h3>Timezone</h3>
                                    <p>UTC ${ geoData.data.location.timezone }</p>
                              </div>

                              <div class="results__container--clm">
                                    <h3>ISP</h3>
                                    <p>${ geoData.data.isp }</p>
                              </div>
                        </div>
                  </div>
            `

            createMap( lat, lng );
      } catch ( err ) {
            failure.classList.add( 'show' );
      }
}


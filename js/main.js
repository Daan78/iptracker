const results = document.querySelector( '.results' );
const apiKey = ipifyKey;
const searchForm = document.querySelector( '.searchform' );
const input = document.querySelector( '.searchform--input' );
const failure = document.querySelector( '.failure' );

const valueClear = () => {
      input.value = '';
      input.removeEventListener( 'click', valueClear );
}
searchForm.addEventListener( 'submit', ( e ) => {
      e.preventDefault();
      const ip = document.querySelector( '.searchform--input' ).value;
      getGeoData( apiKey, ip );
      input.addEventListener( 'click', valueClear );
});
window.addEventListener( 'load', () => {
      input.addEventListener( 'click', valueClear );
      getIP();
});
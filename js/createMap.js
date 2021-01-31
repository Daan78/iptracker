const createMap = ( lat, lng ) => {
      mapboxgl.accessToken = mapboxKey;

      const mapBox = new mapboxgl.Map({
            container: 'mapJS',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ lng, lat ],
            zoom: 14,
      });
      
      const marker = document.createElement('div');
      marker.className = 'marker';
      new mapboxgl.Marker( marker )
            .setLngLat( [ lng, lat ] )
            .addTo( mapBox );
      mapBox.setPadding( { top: 100 } );
}

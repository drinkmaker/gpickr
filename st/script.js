const gpickr = new GPickr({
    el: '.gpickr',
    stops: []
});

setTimeout( () => {

    console.log( 'setGradient' );
    gpickr.setGradient( 'linear-gradient(45deg, rgba(32, 221, 66, 1) 0%,rgba(0, 21, 255, 1) 100%)' );

}, 1500 );




// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/export
export function onClick(element) {

    $(element).on( "click", function( event ) {
        alert('event on click jQuery');
    });

}

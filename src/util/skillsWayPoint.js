const skillsWayPoint = () => {
    if ($('#skills').length > 0 ) {
        $('#skills').waypoint( function( direction ) {
                                    
            if( direction === 'down' && !$(this.element).hasClass('animated') ) {
                setTimeout( pieChart , 400);					
                $(this.element).addClass('animated');
            }
        } , { offset: '90%' } );
    }
}

export default skillsWayPoint;
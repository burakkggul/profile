const skillsWayPoint = () => {
    if ($('#fh5co-skills').length > 0 ) {
        $('#fh5co-skills').waypoint( function( direction ) {
                                    
            if( direction === 'down' && !$(this.element).hasClass('animated') ) {
                setTimeout( pieChart , 400);					
                $(this.element).addClass('animated');
            }
        } , { offset: '90%' } );
    }
}

export default skillsWayPoint;
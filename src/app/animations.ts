import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';


export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', style({ position: 'absolute', width: '100%', background: '#fff', zIndex: '9999' }), { optional: true }),
            group([
                query(':enter', [
                    style({ opacity: 0 }),
                    animate('.5s ease', style({ opacity: 1 }))
                ], { optional: true }),
                query(':leave', [
                    style({ opacity: 1 }),
                    animate('.5s ease', style({ opacity: 0 }))
                ], { optional: true }),
            ])
        ])
    ]);

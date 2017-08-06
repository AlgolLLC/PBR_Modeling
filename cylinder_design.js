let calc_volume = function(radius, height) {
    let pi = 3.14;
    return pi * radius * radius * height;
}

let calc_surface_area = function(radius, height) {
    let pi = 3.14;
    return 2 * pi * radius * height;
}

let minimum_surface_area = function(volume, tolerance, radius_range_0, radius_range_1, height_range_0, height_range_1, r_step, h_step) {
    let radius_range = [radius_range_0, radius_range_1];
    let height_range = [height_range_0, height_range_1];
    let radius_step = r_step;
    let height_step = h_step;

    let volume_tolerance_percent = tolerance;
    let volume_min = volume * (1 - volume_tolerance_percent);
    let volume_max = volume * (1 + volume_tolerance_percent);
	
    let min_surface_area = 0;
    let min_radius_height = [0, 0];

    for(r = radius_range[0]; r < radius_range[1]; r += radius_step) {
        for(h = height_range[0]; h < height_range[1]; h += height_step) {
            let current_sa = calc_surface_area(r, h);
            let current_volume = calc_volume(r, h);
            if( (min_surface_area == 0 && current_volume > volume_min && current_volume < volume_max) || (current_sa < min_surface_area && current_volume > volume_min && current_volume < volume_max) ) {
                min_surface_area = current_sa;
                min_radius_height[0] = r;
                min_radius_height[1] = h;
            }
        }
    }
    return min_radius_height;
}

let minimum_sa = minimum_surface_area(1000, .05, 1, 100, 1, 100, 0.01, 0.01);
console.log(minimum_sa, calc_volume(minimum_sa[0], minimum_sa[1]), calc_surface_area(minimum_sa[0], minimum_sa[1])) 
